import { mdiAccountGroupOutline, mdiAccountOutline,  mdiCartOutline, mdiCircleMedium , mdiFormatListBulletedSquare, mdiHome,  } from '@mdi/js';
import Icon from '@mdi/react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Header = () => {

  const [openStates, setOpenStates] = useState({
    order: false,
    product: false,
    home: false,
    Accountmaster: false
    // Add more menu items as needed
  });

  const handleToggle = (itemName) => {
    setOpenStates((prevState) => {
      // If the clicked item is already true, toggle it to false
      if (prevState[itemName]) {
        return {
          ...prevState,
          [itemName]: false
        };
      } else {
        // Create a new state object where all items are set to false
        const newState = Object.fromEntries(Object.keys(prevState).map(key => [key, false]));
        // Set the clicked item to true
        newState[itemName] = true;
        return newState;
      }
    });
  };

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar" wordBreak='break-word' overflowWrap='break-word'>
      <ul className="nav">

        <li className="nav-item">
          <Link className="nav-link" to="/">
            <Icon path={mdiHome } size={1} className='mx-3' />
            <span className="menu-title">Dashboard</span>
            {/* <div className="badge badge-info badge-pill">2</div> */}
          </Link>
        </li>
        <li className="nav-item sidebar-category">
          <p>Master</p>
          <span></span>
        </li>

   
    

        <li className="nav-item" onClick={() => handleToggle('product')}>
          <div className="nav-link" >
            <Icon path={mdiFormatListBulletedSquare } size={1} className='mx-3' />
            <span className="menu-title">General Master</span>
            {openStates.product ? <ExpandLess className='mx-3' /> : <ExpandMore className='mx-3' />}
          </div>
        </li>

        <Collapse in={openStates.product} timeout="auto" unmountOnExit>
          <ul className='inner-item'>

            <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_descipline"}/${"Descipline"}`}>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Discipline</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_qualification"}/${"Qualification"}`}>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Qualification</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_bank"}/${"Bank"}`}>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Bank</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_feesnotes"}/${"Fees Notes"}`}>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Fees Notes</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/twofieldform/${"awt_holiday"}/${"Holiday"}/${"Holiday_date"}/${"date"}/${"Holiday"}`}>
                {/* <Icon path={mdiMagnifyPlusOutline} size={1}  /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Holiday</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/color'>
           
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Room</span>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_location"}/${"Location"}`}>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Location</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_extention"}/${"Extension"}`}>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Extension</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to={`/onefieldform/${"awt_rack"}/${"Rack"}`}>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Rack</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/twofieldform/${"awt_material_cat"}/${"Category"}/${"Comments"}/${"text"}/${"Material Category"}`}>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Material Category</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/twofieldform/${"awt_vendor_type"}/${"Category"}/${"Comments"}/${"text"}/${"Vendor Type"}`}>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Vendor Type Master</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vendormaster">
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Vendor Master</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/productapproval'>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Vendor Master</span>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to={`/threefieldform/${"awt_material_price"}/${"Item"}/${"Vendor"}/${"Price"}/${"text"}/${"Material Price"}`}>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Material Price</span>
              </Link>
            </li>
        

          </ul>
        </Collapse>











  

        <li className="nav-item" onClick={() => handleToggle('home')}>
          <div className="nav-link" >

            <Icon path={mdiFormatListBulletedSquare } size={1} className='mx-3' />
            <span className="menu-title">Masters</span>
            {openStates.home ? <ExpandLess className='mx-3' /> : <ExpandMore className='mx-3' />}
          </div>


        </li>
        <Collapse in={openStates.home} timeout="auto" unmountOnExit>
          <ul className='inner-item'>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/banner'>

                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Course</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/socialmedia'>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Annual Batch</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
            
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Batch</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
            
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Employee</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
             
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Faculty</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Batch Category</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
             
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">College</span>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to={`/twofieldform/${"awt_status"}/${"Status"}/${"Description"}/${"text"}/${"Status"}`}>
                {/* <Icon path={mdiCircleMedium } size={1} className='mx-3' /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Status</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_bookcode"}/${"Book Code"}`}>
                {/* <Icon path={mdiCircleMedium } size={1} className='mx-3' /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Book Code</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/course">
                {/* <Icon path={mdiCircleMedium } size={1} className='mx-3' /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Course</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/college">
                {/* <Icon path={mdiCircleMedium } size={1} className='mx-3' /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">College</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/batchcategory">
                {/* <Icon path={mdiCircleMedium } size={1} className='mx-3' /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Batch Category</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/librarybook">
                {/* <Icon path={mdiCircleMedium } size={1} className='mx-3' /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Library Book</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">
                {/* <Icon path={mdiCircleMedium } size={1} className='mx-3' /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Feedback</span>
              </Link>
            </li>
            
            
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'
       
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Library Book</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
      
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Feedback Questions</span>
              </Link>
            </li> */}


          </ul>
        </Collapse>


        
        <li className="nav-item" onClick={() => handleToggle('Accountmaster')}>
          <div className="nav-link" >

            <Icon path={mdiFormatListBulletedSquare } size={1} className='mx-3' />
            <span className="menu-title">Account Masters</span>
            {openStates.Accountmaster ? <ExpandLess className='mx-3' /> : <ExpandMore className='mx-3' />}
          </div>


        </li>
        <Collapse in={openStates.Accountmaster} timeout="auto" unmountOnExit>
          <ul className='inner-item'>
            {/* <li className="nav-item">
              <Link className="nav-link" >

                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Employee Profession Tax</span>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_tds"}/${"TDS"}`}>
                {/* <Icon path={mdiCircleMedium } size={1} className='mx-3' /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">TDS</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to={`/twofieldform/${"awt_tax"}/${"Tax"}/${"Tax_date"}/${"date"}/${"Tax"}`}>
                {/* <Icon path={mdiCircleMedium } size={1} className='mx-3' /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Tax</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_account_head"}/${"Account Head"}`}>
                {/* <Icon path={mdiCircleMedium } size={1} className='mx-3' /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Account Head</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
       
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Asset</span>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_asset_category"}/${"Asset Category"}`}>
                {/* <Icon path={mdiCircleMedium } size={1} className='mx-3' /> */}
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Asset Category</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
          
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Fees Details</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
    
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Batch Transfer</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_bookcode"}/${"Book Code"}`}>
        
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Batch Cancellation</span>
              </Link>
            </li> */}

            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
            
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Purchase Material</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
           
                <Icon path={mdiCircleMedium } size={1} className='mx-3' />
                <span className="menu-title">Faculty Payment</span>
              </Link>
            </li> */}


          </ul>
        </Collapse>

      


      </ul>
    </nav>
  )
}

export default Header