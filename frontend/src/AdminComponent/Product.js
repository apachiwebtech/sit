import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MenuIcon from '@mui/icons-material/Menu';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { Autocomplete, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import decryptedUserId from "../Utils/UserID";
import img1 from "../assets/images/product_default_image.jpg";
import { BASE_URL, IMG_URL } from "./BaseUrl";
import InnerHeader from "./InnerHeader";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&::before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&::after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));
const Product = () => {
  const [cat, setCatData] = useState([])
  const [error, setError] = useState({})
  const [selectedOption, setSelectedCat] = useState(null);
  const [selectedOptionvendor, setSelectedVendor] = useState(null);
  const [selectedOptionBrand, setSelectedBrand] = useState(null);
  const [selectedOptionSub, setSelectedSub] = useState(null);
  const [vendor, setVendorData] = useState([])
  const [subcat, setsubcategory] = useState([])
  const [uid, setUid] = useState([])
  const [brand, setBrand] = useState([])
  const [catid, selectedId] = useState("")
  const [subcatid, selectedsubcatId] = useState("")
  const [brandid, selectedBrandId] = useState("")
  const [vendorid, selectedVendorId] = useState("")
  const [value, setValue] = useState({
    sizeimage: "" ||  `${IMG_URL}/sizechart/` + uid.size_image,
    title: "" || uid.title,
    price: "" || uid.price,
    discountedprice: "" || uid.disc_price,
    description: "" || uid.description,

  });

  useEffect(() => {
    setValue({
      sizeimage :  `${IMG_URL}/sizechart/` +  uid.size_image,
      title: uid.title,
      price: uid.price,
      discountedprice: uid.disc_price,
      description: uid.description
    })
  }, [uid])
  const [sizeimage, setSizeImage] = useState()
  const [specification, setSpecification] = useState()
  const [activeValue, setactiveVal] = useState()
  const [featureValue, setfeatureVal] = useState()
  const [trendingValue, settrendingVal] = useState()
  const { update_id } = useParams()


console.log(value.sizeimage , "000")
  const validateForm = () => {
    let isValid = true
    const newErrors = {}

    if (!selectedOption) {
      isValid = false;
      newErrors.category = "category is required"
    }

    if (!value.title) {
      isValid = false;
      newErrors.title = "title is required"
    }

    if (!selectedOptionBrand) {
      isValid = false
      newErrors.brand = "brand is required"
    }
    if (!selectedOptionvendor) {
      isValid = false
      newErrors.vendor = "vendor is required"
    }
    if (!value.price) {
      isValid = false
      newErrors.price = "price is required"
    }
    if (!sizeimage) {
      isValid = false
      newErrors.sizeimage = "sizechart is required"
    }

    setError(newErrors)
    return isValid
  }

  async function getUpdateData() {

    axios.post(`${BASE_URL}/product_update`, { u_id: update_id })
      .then((res) => {
        setUid(res.data[0])

      })
      .catch((err) => {
        console.log(err)
      })
  }




  async function getcatData() {
    axios.get(`${BASE_URL}/category_data`)
      .then((res) => {
        // console.log(res.data)
        setCatData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  async function getBrandData() {
    axios.get(`${BASE_URL}/Brand_data`)
      .then((res) => {
        // console.log(res.data)
        setBrand(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  async function getVendordata() {
    axios.get(`${BASE_URL}/vendor_data`)
      .then((res) => {
        // console.log(res.data)
        setVendorData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }





  useEffect(() => {
    if (update_id !== ":update_id") {
      getUpdateData()
    }
    getcatData()
    getBrandData()
    getVendordata()
  }, [update_id])







  const onhandleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const HandleVendorChange = (selectedValue) => {
    if (selectedValue) {
      const vendorid = selectedValue.id
      setSelectedVendor(selectedValue)
      selectedVendorId(vendorid);
    }
  };

  useEffect(() => {
    if (uid.v_id) {
      const selected = vendor.find(option => option.id === uid.v_id);
      setSelectedVendor(selected);
    }

  }, [uid, vendor]);

  const HandleBrandChange = (selectedValue) => {
    if (selectedValue) {
      const brandid = selectedValue.id
      selectedBrandId(brandid);
      setSelectedBrand(selectedValue)
    }
  };

  useEffect(() => {
    if (uid.b_id) {
      const selected = brand.find(option => option.id === uid.b_id);
      setSelectedBrand(selected);
    }

  }, [uid, brand]);

  const HandlesubcatChange = (selectedValue) => {
    if (selectedValue) {
      const subcatid = selectedValue.id
      selectedsubcatId(subcatid);
      setSelectedSub(selectedValue);
    }
  };

  useEffect(() => {
    if (uid.scatid) {
      const selected = subcat.find(option => option.id === uid.scatid);
      setSelectedSub(selected);
    }

  }, [uid, subcat]);





  const handleactive = (e) => {
    const value = e.target.value
    setactiveVal(value)
  }
  const handletrending = (e) => {
    const value = e.target.value
    settrendingVal(value)
  }


  const handlefeature = (e) => {
    const value = e.target.value
    setfeatureVal(value)
  }


  const HandleCatChange = (selectedValue) => {

    const val = selectedValue.id
    setSelectedCat(selectedValue)
    selectedId(val)
    const data = {
      catid: val
    }

    axios.post(`${BASE_URL}/getsubcategory`, data)
      .then((res) => {
        console.log(res.data)
        setsubcategory(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  useEffect(() => {
    // If you have received the ID from the API, find the option that matches the ID
    if (uid.catid) {
      const selected = cat.find(option => option.id === uid.catid);
      setSelectedCat(selected);
    }
  }, [uid, cat]);

  async function ImageBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const data = new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

    return data;
  }

  const handlesizeimage = async (e) => {
    const file = e.target.files[0];
    setSizeImage(file)
    // setHide(true)

    const data = await ImageBase64(e.target.files[0]);
    setValue((prev) => {
      return {
        ...prev,
        sizeimage: data,
      };
    });
  }


  const handlesubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const formdata = new FormData()
      formdata.append('v_id', vendorid)
      formdata.append('title', value.title)
      formdata.append('catid', catid)
      formdata.append('b_id', brandid)
      formdata.append('subcatid', subcatid)
      formdata.append('price', value.price)
      formdata.append('d_price', value.discountedprice)
      formdata.append('description', value.description)
      formdata.append('sizeimage', sizeimage)
      formdata.append('specification', specification)
      formdata.append('activeval', activeValue)
      formdata.append('featureval', featureValue)
      formdata.append('trendingval', trendingValue)
      formdata.append('user_id', decryptedUserId())

      axios.post(`${BASE_URL}/add_product`, formdata)
        .then((res) => {
          console.log(res.data)
          alert(res.data)
        })
    }

  }



  return (
    <div class="container-fluid page-body-wrapper">
      <InnerHeader />
      <div class="main-panel">
        <div class="content-wrapper">
          <h4 class="card-title">Add Product</h4>
          <form onSubmit={handlesubmit}>
            <div class="row">
              <div class="col-lg-3 grid-margin stretch-card">
                <div class="sticky-top">
                  <div class="card" style={{ height: "600px" }}>
                    <div class="card-body list">
                      <ul class="prod_list">
                        <li class="prod_li">
                          <a href="#basic_info" class="prod_flex">
                            <div style={{ marginRight: "8px" }}>
                              <DescriptionOutlinedIcon />
                            </div>
                            <div>
                              <h5>Basic Details</h5>
                              <span class="weight para">
                                Manage the product's basic information.
                              </span>
                            </div>
                          </a>
                        </li>
                        <hr></hr>

                        <li class="prod_li">
                          <a href="#media" class="prod_flex">
                            <div style={{ marginRight: "8px" }}>
                              <PermMediaIcon />
                            </div>
                            <div>
                              <h5>Media</h5>
                              <span class="weight para">
                                {" "}
                                Manage your product's image gallery.{" "}
                              </span>
                            </div>
                          </a>
                        </li>
                        <hr></hr>
                        <li class="prod_li">
                          <a href="#varients" class="prod_flex">
                            <div style={{ marginRight: "8px" }}>
                              <MenuIcon />
                            </div>
                            <div>
                              <h5>Size Chart</h5>
                              <span class="weight para">
                                Upload a image of size of your product.
                              </span>
                            </div>
                          </a>
                        </li>
                        <hr></hr>
                        <li class="prod_li">
                          <a href="#specification" class="prod_flex">
                            <div style={{ marginRight: "8px" }}>
                              <DescriptionOutlinedIcon />
                            </div>
                            <div>
                              <h5>Specifications</h5>
                              <span class="weight para">
                                Manage the product-related specifications.
                              </span>
                            </div>
                          </a>
                        </li>
                        <hr></hr>
                        <li class="prod_li">
                          <a href="#tax" class="prod_flex">
                            <div style={{ marginRight: "8px" }}>
                              <LocalShippingIcon />
                            </div>
                            <div>
                              <h5>Tax and shipping</h5>
                              <span class="weight para">
                                Set up the tax and shipping information of the
                                product.
                              </span>
                            </div>
                          </a>
                        </li>
                        <hr></hr>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-6 grid-margin stretch-card"
                style={{ display: "block" }}
              >

                <div>
                  <h3>Add Product</h3>
                  <p class="para">Fields with (*) are mandatory</p>
                </div>
                <div class="card" id="basic_info">
                  <div
                    class="card-head"
                    style={{ borderBottom: "1px solid gray", padding: "15px" }}
                  >
                    <h5
                      style={{
                        color: "#000000DE",
                        fontSize: "20px",
                        margin: "0",
                      }}
                    >
                      Basic Information
                    </h5>
                    <p class="para">Manage the product's basic information.</p>
                  </div>
                  <div class="card-body" style={{ padding: "20px 10px" }}>

                    <div class="col-md-12">
                      <div class="row">


                        <div class="col-md-6">
                          <div class="form-group ">
                            <label for="category">
                              Vendor <span class="text-danger">*</span>
                              {error.vendor && <span className="text-danger">{error.vendor}</span>}
                            </label>
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={vendor}
                              InputLabelProps={{
                                shrink: true,  // This makes the label move up when there's a value
                              }}
                              value={selectedOptionvendor}
                              placeholder="brand"
                              getOptionLabel={(option) => option.vendor_name}
                              getOptionSelected={(option, value) => option.id === value.id}
                              sx={{ width: "100%", border: "none", borderColor: "lightgrey", borderRadius: "5px", height: "20px" }}
                              renderInput={(params) => <TextField   {...params} label="Select Vendor" />}
                              onChange={(event, value) => HandleVendorChange(value)}
                              name="vendor"

                            />
                          </div>


                        </div>
                        <div class="col-md-6 ">
                          <div class="form-group ">
                            <label for="prod_id">
                              Product title
                              <span class="text-danger">*</span>
                              {error.title && <span className="text-danger">{error.title}</span>}
                            </label>


                            <div>
                              <TextField id="outlined-basic" InputLabelProps={{
                                shrink: true,  // This makes the label move up when there's a value
                              }} label="Enter product title.." value={value.title} sx={{ width: "100%" }} variant="outlined" name="title"
                                onChange={onhandleChange} />

                            </div>

                          </div>

                        </div>


                        {/* <div class="row ">
                        <div class="col-md-12 py-3">
                          <div class="form-group ">
                            <label for="prod_id">
                              Product identifier
                              <span class="text-danger">*</span>
                            </label>

                            <input
                              type="text"
                              class="form-control"
                              id="prod_id"
                              placeholder="Product Title"
                              name="title"
                              onChange={onhandleChange}

                            />
                        
                          </div>

                        </div>

                       </div> */}


                        <div class="col-md-6 ">
                          <div class="form-group ">
                            <label for="category">
                              Brand<span class="text-danger">*</span>
                              {error.brand && <span className="text-danger">{error.brand}</span>}
                            </label>
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={brand}
                              value={selectedOptionBrand}
                              placeholder="brand"
                              getOptionLabel={(option) => option.title}
                              getOptionSelected={(option, value) => option.id === value.id}
                              sx={{ width: "100%", border: "none", borderColor: "lightgrey", borderRadius: "5px", height: "20px" }}
                              renderInput={(params) => <TextField {...params} label="Select Brand" />}
                              onChange={(event, value) => HandleBrandChange(value)}
                              name="brand"

                            />
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="form-group ">
                            <label for="category">
                              Category<span class="text-danger">*</span>

                              {error.category && <span className="text-danger">{error.category}</span>}
                            </label>
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={cat}
                              value={selectedOption}
                              getOptionLabel={(option) => option.title}
                              getOptionSelected={(option, value) => option.id === value.id}
                              sx={{ width: "100%", border: "none", borderColor: "lightgrey", borderRadius: "5px", height: "20px" }}
                              renderInput={(params) => <TextField {...params} label="Select Category" />}
                              onChange={(event, value) => HandleCatChange(value)}
                              name="category"

                            />
                          </div>
                        </div>



                        <div class="col-md-6 " style={{ paddingTop: "30px" }}>
                          <div class="form-group ">
                            <label for="prod_id">
                              SubCategory<span class="text-danger">*</span>
                              {error.subcategory && <span className="text-danger">{error.subcategory}</span>}
                            </label>
                            <div>

                            </div>
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={subcat}
                              value={selectedOptionSub}
                              getOptionLabel={(option) => option.title}
                              getOptionSelected={(option, value) => option.id === value.id}
                              sx={{ width: "100%", border: "none", borderColor: "lightgrey", borderRadius: "5px", height: "20px" }}
                              renderInput={(params) => <TextField {...params} label="Select Subcategory" />}
                              onChange={(event, value) => HandlesubcatChange(value)}
                              name="subcategory"

                            />
                          </div>
                        </div>

                        <div class="col-md-6 " style={{ paddingTop: "30px" }}>
                          <div class="form-group ">
                            <label for="name">
                              Price
                              <span class="text-danger">*</span>
                              {error.price && <span className="text-danger">{error.price}</span>}
                            </label>

                            <div>
                              <TextField id="outlined-basic" InputLabelProps={{
                                shrink: true,  // This makes the label move up when there's a value
                              }} label="Enter price.." value={value.price} sx={{ width: "100%" }} variant="outlined" name="price"
                                onChange={onhandleChange} />
                            </div>
                          </div>
                        </div>




                        <div class="col-md-6">
                          <div class="form-group ">
                            <label for="slug">Discounted Price </label>

                            <div>

                              <TextField label="Enter price.." InputLabelProps={{
                                shrink: true,  // This makes the label move up when there's a value
                              }} value={value.discountedprice} variant="outlined" sx={{ width: "100%" }} name="discountedprice" onChange={onhandleChange} />
                            </div>
                          </div>
                        </div>





                        <div class="col-md-12">
                          <div class="form-group ">
                            <label for="description">Description</label>
                            <textarea
                              class="form-control"
                              id="description"
                              rows="4"
                              value={value.description}
                              name="description"
                              onChange={onhandleChange}
                            ></textarea>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>


               



                <div class="card mt-3" id="varients">
                  <div class="card-head" style={{ padding: "20px 22px 0px" }}>
                    <h5
                      style={{
                        color: "#000000DE",
                        fontSize: "20px",
                        margin: "0",
                      }}
                    >
                      Size Chart Upload (Image)
                    </h5>
                    <p class="para">Manage your product's image gallery.</p>
                  </div>

                  <div class="card-body" style={{ padding: "20px 10px" }}>


                    <div class="col-md-12">
                      <ul
                        class="uploaded-stocks ui-sortable"
                        id="productDefaultImagesJs"
                      >
                        <li class="browse unsortableJs">
                          <div


                          >

                            <strong> Upload images(s)</strong>
                            <span class="text-muted form-text">
                              Png,jpeg accepted
                            </span>
                          </div>
                          <input type="file" style={{ zIndex: "100" }} placeholder="new" onChange={handlesizeimage} />
                        </li>
                        <li class="unsortableJs">
                          <div class="uploaded-stocks-item" data-ratio="1:1">
                            <img
                              class="uploaded-stocks-img"
                              data-bs-toggle="tooltip"
                              data-placement="top"
                              src={uid.size_image == undefined ? img1 : value.sizeimage }
                              title=""
                              alt=""
                              data-bs-original-title=""
                            ></img>
                            <div class="uploaded-stocks-actions"></div>
                          </div>
                        </li>

                      </ul>
                      <p class="para">Preferred Dimensions 1500 x 1500</p>
                    </div>



                    {error.sizeimage && <span className="text-danger">{error.sizeimage}</span>}
                  </div>
                </div>



                <div class="card mt-3" id="specification">
                  <div class="card-head" style={{ padding: "20px 22px 0px" }}>
                    <h5
                      style={{
                        color: "#000000DE",
                        fontSize: "20px",
                        margin: "0",
                      }}
                    >
                      Specifications
                    </h5>
                    <p class="para">Manage the product-related specifications.</p>
                  </div>
                  <div style={{ width: "600px", padding: "20px 22px " }} >
                    <CKEditor

                      editor={ClassicEditor}
                      data=""
                      onReady={editor => {
                        // Allows you to store the editor instance and use it later.
                        // console.log('Editor is ready to use!', editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setSpecification(data)
                      }}
                      onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                      }}
                    />
                  </div>

                </div>

                {/* <div class="card mt-3" id="tax">
                  <div class="card-head" style={{ padding: "20px 22px 0px" }}>
                    <h5
                      style={{
                        color: "#000000DE",
                        fontSize: "20px",
                        margin: "0",
                      }}
                    >
                      Tax and shipping
                    </h5>
                    <p class="para">
                      Set up the tax and shipping information of the product.
                    </p>
                  </div>
                  <div class="card-body" style={{ padding: "20px 10px" }}>

                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group ">
                            <label for="category">
                              Tax Category<span class="text-danger">*</span>
                            </label>
                            <select
                              type="text"
                              class="form-control"
                              id="tx_category"
                              placeholder=""
                              name="tx_category"
                            >
                              <option value="0">Select Category</option>
                              <option value="1">cat 1</option>
                              <option value="2">cat 2</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group ">
                            <label for="method">
                              Fulfillment method
                              <span class="text-danger">*</span>
                            </label>
                            <select
                              type="text"
                              class="form-control"
                              id="method"
                              placeholder=""
                              name="method"
                            >
                              <option value="0">Select Method</option>
                              <option value="1">method 1</option>
                              <option value="2">method 2</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group ">
                            <label for="ship">
                              Shipping package<span class="text-danger">*</span>
                            </label>
                            <select
                              type="text"
                              class="form-control"
                              id="ship"
                              placeholder=""
                              name="ship"
                            >
                              <option value="0">Select Package</option>
                              <option value="1">Package 1</option>
                              <option value="2">Package 2</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group ">
                            <label for="weight">
                              Weight<span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="weight"
                              placeholder=""
                              name="weight"
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group ">
                            <label for="wt_unit">
                              Weight Unit<span class="text-danger">*</span>
                            </label>
                            <select
                              type="text"
                              class="form-control"
                              id="wt_unit"
                              placeholder=""
                              name="wt_unit"
                            >
                              <option value="0">Select Unit</option>
                              <option value="1">Gram</option>
                              <option value="2">KiloGram</option>
                              <option value="3">Pound</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group ">
                            <label for="country">
                              Country Of Origine
                              <span class="text-danger">*</span>
                            </label>
                            <select
                              type="text"
                              class="form-control"
                              id="country"
                              placeholder=""
                              name="country"
                            >
                              <option value="0">Select Country</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group ">
                            <label for="ship_prpfile">
                              Shipping Profile<span class="text-danger">*</span>
                            </label>
                            <select
                              type="text"
                              class="form-control"
                              id="ship_prpfile"
                              placeholder=""
                              name="ship_prpfile"
                            >
                              <option value="0">Select </option>
                              <option value="1">Order Level Shipping</option>
                              <option value="2">Item Level Shipping</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div> */}

              </div>
              <div class="col-lg-3 grid-margin stretch-card">
                <div class="">
                  <div class="card" style={{ height: "300px" }}>
                    <div
                      class="card-body "
                      style={{ padding: "1.4rem 0.875rem" }}
                    >
                      <button
                        type="submit"
                        class="btn btn-brand btn-block submitBtnJs"
                        style={{ borderRadius: "0" }}
                      >
                        Save
                      </button>
                      <div class="mt-3">
                        <div class="form-group">
                          <div class="setting-block">
                            <div>
                              <label
                                htmlFor=""
                                class="switch switch-sm switch-icon"
                              >
                                Activate it
                              </label>
                            </div>
                            <div>
                              <FormControlLabel
                                control={<Android12Switch onChange={(e) => handleactive(e)} value="1" />}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-3">
                        <div class="form-group">
                          <div class="setting-block">
                            <label
                              htmlFor=""
                              class="switch switch-sm switch-icon"
                            >
                              Approval status
                            </label>
                            <FormControlLabel
                              control={<Android12Switch />}
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="card mt-3" >
                    <div
                      class="card-body "
                      style={{ padding: "1.4rem 0.875rem" }}
                    >
                      <div class="">
                        <div class="form-group">
                          <div></div>
                          <div class="setting-block">
                            <div>
                              <label
                                htmlFor=""
                                class="switch switch-sm switch-icon"
                              >
                                Mark as featured
                              </label>
                            </div>
                            <div>
                              <FormControlLabel
                                control={<Android12Switch value='1' onChange={(e) => handlefeature(e)} />}
                              />
                            </div>
                          </div>
                          <p
                            class="para"
                            style={{ fontSize: "12px", lineHeight: "15px" }}
                          >
                            Mark this product as a featured product, and it will
                            be displayed under the featured product list on the
                            front end.
                          </p>
                        </div>
                      </div>
                      <div class="">
                        <div class="form-group">
                          <div></div>
                          <div class="setting-block">
                            <div>
                              <label
                                htmlFor=""
                                class="switch switch-sm switch-icon"
                              >
                                Mark as Trending
                              </label>
                            </div>
                            <div>
                              <FormControlLabel
                                control={<Android12Switch value="1" onChange={(e) => handletrending(e)} />}
                              />
                            </div>
                          </div>
                          <p
                            class="para"
                            style={{ fontSize: "12px", lineHeight: "15px" }}
                          >
                            Mark this product as a Trending product, and it will
                            be displayed under the Trending product list on the
                            front end.
                          </p>
                        </div>
                      </div>


                    </div>
                  </div>
                  <div>

                  </div>




                </div>

              </div>


            </div>
          </form>
        </div>
      </div>

    </div >
  );
};

export default Product;
