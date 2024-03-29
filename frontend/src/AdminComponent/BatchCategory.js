import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from './BaseUrl';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InnerHeader from './InnerHeader';
import decryptedUserId from '../Utils/UserID';
import { DataGrid } from '@mui/x-data-grid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const BatchCategory = () => {

    const [brand, setBrand] = useState([])
    const [vendordata, setVendorData] = useState([])
    const [specification, setSpecification] = useState("")
    const [specification2, setSpecification2] = useState("")
    const [specification3, setSpecification3] = useState("")
    const [uid, setUid] = useState([])
    const [cid, setCid] = useState("")
    const [error, setError] = useState({})
    const [confirmationVisibleMap, setConfirmationVisibleMap] = useState({});

 

    const [value, setValue] = useState({
        batchcategory: "" || uid.batchcategory,
        batchtype: "" || uid.batchtype,
        prefix: "" || uid.prefix,
        description: "" || uid.description

    })

    useEffect(() => {
        setValue({
            batchcategory: uid.batchcategory,
            batchtype: uid.batchtype,
            prefix: uid.prefix,
            description: uid.description
        })
    }, [uid])


    const validateForm = () => {
        let isValid = true
        const newErrors = {}


        if (!value.course) {
            isValid = false;
            newErrors.name = "Name is require"
        }

        setError(newErrors)
        return isValid
    }


    async function getColorData() {

        axios.post(`${BASE_URL}/vendor_details`)
            .then((res) => {
                console.log(res.data)
                setBrand(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    async function getColorData() {
        const data = {
            tablename: "awt_batch_category"
        }
        axios.post(`${BASE_URL}/get_data`, data)
            .then((res) => {
                console.log(res.data)
                setVendorData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getColorData()
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
            u_id: id,
            tablename: "awt_batch_category"
        }
        axios.post(`${BASE_URL}/update_data`, data)
            .then((res) => {
                setUid(res.data[0])

                console.log(res.data, "update")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleDelete = (id) => {
        const data = {
            cat_id: id,
            tablename: "awt_batch_category"
        }

        axios.post(`${BASE_URL}/delete_data`, data)
            .then((res) => {
                getColorData()

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

        // if (validateForm()) {
            const data = {
                batchcategory: value.batchcategory,
                batchtype: value.batchtype,
                prefix: value.prefix,
                description: value.description
            }


            axios.post(`${BASE_URL}/batch_category`, data)
                .then((res) => {
                    console.log(res)

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
        { field: 'batchcategory', headerName: 'Batch Category Name', flex: 2 },
        { field: 'batchtype', headerName: 'Batch Type', flex: 2 },
        { field: 'prefix', headerName: 'Prefix', flex: 2 },
        { field: 'description', headerName: 'Description', flex: 2 },

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
                                    <h4 class="card-title">Batch Information</h4>
                                    <hr></hr>
                                    <form class="forms-sample py-3" onSubmit={handleSubmit}>
                                        <div class='row'>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputUsername1">Batch Category<span className='text-danger'>*</span></label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.batchcategory} placeholder="Batch Category*" name='batchcategory' batchcategory={onhandleChange} />
                                                {/* {error.batchcategory && <span className='text-danger'>{error.batchcategory}</span>} */}
                                            </div>
                                            
                                            <div class="form-group col-lg-4">
                                                <label for="exampleFormControlSelect1">Batch Type </label>
                                                <select class="form-control form-control-lg" id="exampleFormControlSelect1" value={value.batchtype} onChange={onhandleChange} name='batchtype'>
                                                    <option></option>
                                                    <option value="1">Inhouse</option>
                                                    <option value="2">Corporate</option>
                                                    <option value="3">Transfer</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputUsername1">Prefix</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" value={value.prefix} placeholder="Course Code*" name='prefix' onChange={onhandleChange} />
                                                {/* {error.course_code && <span className='text-danger'>{error.course_code}</span>} */}
                                            </div>

                                            <div class="form-group col-lg-8">
                                                <label for="exampleTextarea1">Description</label>
                                                <textarea class="form-control" id="exampleTextarea1" name='description' value={value.description} placeholder="Description*" onChange={onhandleChange}></textarea>
                                                {/* {error.introducation && <div className="text-danger">{error.introducation}</div>} */}
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
                        <div class="col-lg-11">
                            <div class="card">
                                <div class="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h4 class="card-title">View Batch Category</h4>
                                            
                                        </div>

                                    </div>

                                    <div>
                                        <DataGrid
                                            rows={rowsWithIds}
                                            columns={columns}
                                            getRowId={(row) => row.id}
                                            initialState={{
                                                pagination: {
                                                    paginationModel: { pageSize: 10, page: 0 },
                                                },
                                            }}
                                        />

                                        {confirmationVisibleMap[cid] && (
                                            <div className='confirm-delete'>
                                                <p>Are you sure you want to delete?</p>
                                                <button onClick={() => handleDelete(cid)} className='btn btn-sm btn-primary'>OK</button>
                                                <button onClick={() => handleCancel(cid)} className='btn btn-sm btn-danger'>Cancel</button>
                                            </div>
                                        )}
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default BatchCategory