import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from './BaseUrl';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


const CompanyRequirment = () => {


    const [brand, setBrand] = useState([])
    const [vendordata, setVendorData] = useState([])
    const [uid, setUid] = useState([])
    const [cid, setCid] = useState("")
    const [error, setError] = useState({})
    const [confirmationVisibleMap, setConfirmationVisibleMap] = useState({});
    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
      setChecked([event.target.checked, event.target.checked]);
    };
  
    const handleChange2 = (event) => {
      setChecked([event.target.checked, checked[1]]);
    };
  
    const handleChange3 = (event) => {
      setChecked([checked[0], event.target.checked]);
    };

    // const children = (
    //     <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
    //       <FormControlLabel
    //         label="Child 1"
    //         control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
    //       />
    //       <FormControlLabel
    //         label="Child 2"
    //         control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
    //       />
    //     </Box>
    //   );


    const MultiSelectDropdown = () => {
        const options = [
          { id: 1, label: 'Option 1' },
          { id: 2, label: 'Option 2' },
          { id: 3, label: 'Option 3' },
          // Add more options as needed
        ];
      
        const [selectedOptions, setSelectedOptions] = useState([]);
      
        const handleOptionToggle = (option) => {
          if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
          } else {
            setSelectedOptions([...selectedOptions, option]);
          }
        };


    }
   
    const [value, setValue] = useState({
        training : ""|| uid.training,
        attendee : ""|| uid.attendee,
        instructor : ""|| uid.instructor,
        description : ""|| uid.description,
        feedback : ""|| uid.feedback,

        

    })

    useEffect(() => {
        setValue({
            training : uid.training,
            attendee : uid.attendee,
            instructor : uid.instructor,
            description :uid.description,
            feedback: uid.feedback,

        })
    }, [uid])


    // const validateForm = () => {
    //     let isValid = true
    //     const newErrors = {}


    //    if (!value.college) {
    //     isValid = false;
    //     newErrors.name = "Name is require"
    //    }
    //     if (!value.email) {
    //         isValid = false;
    //         newErrors.email = "Email is require"
    //     }
    //     setError(newErrors)
    //     return isValid
    // }



    function not(a, b) {
        return a.filter((value) => b.indexOf(value) === -1);
      }
      
      function intersection(a, b) {
        return a.filter((value) => b.indexOf(value) !== -1);
      }
      
      function union(a, b) {
        return [...a, ...not(b, a)];
      }



    async function getEmployeeData() {

        axios.post(`${BASE_URL}/vendor_details`)
            .then((res) => {
                console.log(res.data)
                setBrand(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    
    async function getEmployeeData() {
        const data = {
            tablename : "awt_employeerecord"
        }
        axios.post(`${BASE_URL}/get_data`,data)
            .then((res) => {
                console.log(res.data)
                setVendorData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getEmployeeData()
        value.title = ""
        setError({})
        setUid([])
    }, [])

    const handleClick = (id) => {
        setCid(id)
        setConfirmationVisibleMap((prevMap) => ({
            ...prevMap,
            [id]: true,
        }));
    };

    const handleCancel = (id) => {
        // Hide the confirmation dialog without performing the delete action
        setConfirmationVisibleMap((prevMap) => ({
            ...prevMap,
            [id]: false,
        }));
    };

    const handleUpdate = (id) => {
        const data = {
            u_id : id,
            tablename : "awt_employeerecord"
        }
        axios.post(`${BASE_URL}/update_data`, data)
            .then((res) => {
                setUid(res.data[0])

                console.log(res.data , "update")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleDelete = (id) => {
        const data = {
            cat_id: id,
            tablename : "awt_employeerecord"
        }

        axios.post(`${BASE_URL}/delete_data`, data)
            .then((res) => {
                getEmployeeData()

            })
            .catch((err) => {
                console.log(err)
            })

        setConfirmationVisibleMap((prevMap) => ({
            ...prevMap,
            [id]: false,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    // if(validateForm()){
        const data = {
            
        training : value.training,
        attendee : value.attendee,
        instructor : value.instructor,
        description :value.description,
        feedback: value.feedback,
        uid : uid.id
        }


        axios.post(`${BASE_URL}/add_employeerecord`, data)
            .then((res) => {
               console.log(res)
               getEmployeeData()

            })
            .catch((err) => {
                console.log(err)
            })
    // }

   
        


    }


    const onhandleChange = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

 
    



    const columns = [
        {
            field: 'index',
            headerName: 'Id',
            type: 'number',
            align: 'center',
            headerAlign: 'center',
            flex: 1,
            filterable: false,
                                              
        },
        { field: 'attendee', headerName: 'Attendee', flex: 2},
        { field: 'instructor', headerName: 'Instructor', flex: 2},
        { field: 'description', headerName: 'Description', flex: 2},
        { field: 'feedback', headerName: 'FeedBack', flex: 2},
        
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Action',
            flex: 1,
            renderCell: (params) => {
                return (
                    <>
                        <EditIcon style={{ cursor: "pointer" }} onClick={() => handleUpdate(params.row.id)} />
                        <DeleteIcon style={{ color: "red", cursor: "pointer" }} onClick={() => handleClick(params.row.id)} />
                    </>
                )
            }
        },
    ];


    const rowsWithIds = vendordata.map((row, index) => ({ index: index + 1, ...row }));

    return (

        <div class="container-fluid page-body-wrapper">
            <InnerHeader />
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">View Consultancy Info</h4>
                                    <hr></hr>
                                    <form class="forms-sample py-3" onSubmit={handleSubmit}>
                                        <div class='row'>


                                            {/* <div class="form-group col-lg-3">
                                                <label for="exampleFormControlSelect1">Batch<span className='text-danger'>*</span> </label>
                                                <select class="form-control form-control-lg" id="exampleFormControlSelect1" value={value.batch} onChange={onhandleChange} name='batch'>
                                                    <option></option>
                                                    
                                                </select>
                                            </div> */}



                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Consultancy</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.consultancy} placeholder='Consultancy Name' name='consultancy' onChange={onhandleChange} />
                                                
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Contact Person</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.contactperson} placeholder='Contact Person' name='contactperson' onChange={onhandleChange} />
                                                
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Designation</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.designation} placeholder='Designation' name='designation' onChange={onhandleChange} />
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Address</label>
                                                <textarea class="form-control" id="exampleTextarea1" value={value.address} placeholder='Address' name='address' onChange={onhandleChange}></textarea>
                                                
                                            </div>
                                            
                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">City</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.city} placeholder='City' name='city' onChange={onhandleChange} />
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">State</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.state} placeholder='State' name='state' onChange={onhandleChange} />
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Country</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.country} placeholder='Country' name='country' onChange={onhandleChange} />
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Pin Code</label>
                                                <input type="number" class="form-control" id="exampleInputUsername1" value={value.country} placeholder='Country' name='country' onChange={onhandleChange} />
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Phone</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.phono} placeholder='Phone' name='phone' onChange={onhandleChange} />
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Emial Id</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.email} placeholder='Email Id' name='email' onChange={onhandleChange} />
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Fax</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.fax} placeholder='Fax' name='fax' onChange={onhandleChange} />
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleFormControlSelect1">Purpose</label>
                                                <select class="form-control form-control-lg" id="exampleFormControlSelect1" value={value.purpose} onChange={onhandleChange} name='purpose'>
                                                    <option></option>
                                                    
                                                </select>
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Mobile</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.mobile} placeholder='Mobile' name='mobile' onChange={onhandleChange} />
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Date</label>
                                                <input type="date" class="form-control" id="exampleInputUsername1" value={value.date} name='date' onChange={onhandleChange} />
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleFormControlSelect1">Status</label>
                                                <select class="form-control form-control-lg" id="exampleFormControlSelect1" value={value.status} onChange={onhandleChange} name='status'>
                                                    <option>Active</option>
                                                    <option>Deactive</option>
                                                    
                                                </select>
                                            </div>

                                            <div class="form-group col-lg-3">
                                                <label for="exampleFormControlSelect1">Course</label>
                                                <select class="form-control form-control-lg" id="exampleFormControlSelect1" value={value.course} onChange={onhandleChange} name='course'>
                                                    <option>Select Course</option>
                                                    <option> Training in Process Plant System Modelling Using E3D</option>
                                                    <option>Advance Pipe Stress Analysis </option>
                                                    <option>Air Conditioning System Design (HVAC)</option>
                                                    <option>Autocad - Piping</option>
                                                    <option>Civil/Structural Design &amp; Drafting </option>
                                                    <option>Electrical &amp; Instrumentation Design and Drafting </option>
                                                    <option>Electrical System Design</option>
                                                    
                                                </select>
                                            </div>


                                            <div>
                                                <label>Select Options:</label>
                                                <select multiple>
                                                    {options.map(option => (
                                                    <option 
                                                        key={option.id}
                                                        value={option.id}
                                                        onClick={() => handleOptionToggle(option)}
                                                        selected={selectedOptions.includes(option)}
                                                    >
                                                        {option.label}
                                                    </option>
                                                    ))}
                                                </select>
                                            </div>


                                        </div>


                                        <button type="submit" class="btn btn-primary mr-2">Submit</button>
                                        <button type='button' onClick={() => {
                                            window.location.reload()
                                        }} class="btn btn-light">Cancel</button>
                                       
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h4 class="card-title">View Consultancy</h4>
                                        </div>

                                    </div>

                                    <div>
                                        

                                        {confirmationVisibleMap[cid] && (
                                            <div className='confirm-delete'>
                                                <p>Are you sure you want to delete?</p>
                                                <button onClick={() => handleDelete(cid)} className='btn btn-sm btn-primary'>OK</button>
                                                <button onClick={() => handleCancel(cid)} className='btn btn-sm btn-danger'>Cancel</button>
                                            </div>
                                        )}
                                    </div>

                                    
                                      {/* <div>
                                      <button type='button' onClick={() => {
                                            window.location.reload()
                                        }} class="btn btn-primary mr-2">Excel</button>
                                      </div> */}



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default CompanyRequirment