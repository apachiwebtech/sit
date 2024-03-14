import { mdiAccountGroupOutline, mdiAccountOutline, mdiApps, mdiCartOutline, mdiCheckDecagram, mdiFormatColorFill, mdiFormatListBulletedSquare, mdiHome, mdiImageArea, mdiLandPlotsCircle, mdiLinkVariant, mdiMap, mdiMenu, mdiStarBox, mdiViewGallery } from '@mdi/js';
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
          <Link className="nav-link" to="/webapp">
            <Icon path={mdiMenu} size={1} className='mx-3' />
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
            <Icon path={mdiFormatListBulletedSquare} size={1} className='mx-3' />
            <span className="menu-title">General Master</span>
            {openStates.product ? <ExpandLess className='mx-3' /> : <ExpandMore className='mx-3' />}
          </div>
        </li>

        <Collapse in={openStates.product} timeout="auto" unmountOnExit>
          <ul className='inner-item'>

            <li className="nav-item">
              <Link className="nav-link" to={`/onefieldform/${"awt_descipline"}/${"Descipline"}`}>
                <Icon path={mdiLandPlotsCircle} size={1} className='mx-3' />
                <span className="menu-title">Discipline</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/category'>
                <Icon path={mdiLandPlotsCircle} size={1} className='mx-3' />
                <span className="menu-title">Bank</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/subcategory'>
                <Icon path={mdiApps} size={1} className='mx-3' />
                <span className="menu-title">Fees Notes</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/brand'>
                {/* <Icon path={mdiMagnifyPlusOutline} size={1}  /> */}
                <Icon path={mdiStarBox} size={1} className='mx-3' />
                <span className="menu-title">Holiday</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/color'>
                {/* <Icon path={mdiMagnifyPlusOutline} size={1}  /> */}
                <Icon path={mdiFormatColorFill} size={1} className='mx-3' />
                <span className="menu-title">Room</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/productcatalog'>
                <Icon path={mdiMap} size={1} className='mx-3' />
                <span className="menu-title">Location</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/productapproval'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">Extension</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/productapproval'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">Rack</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/productapproval'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">Material Category</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/productapproval'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">Vendor Type Master</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/productapproval'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">Vendor Master</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/productapproval'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">Material Price</span>
              </Link>
            </li>
        

          </ul>
        </Collapse>











        <li className="nav-item" >
          <Link className="nav-link" to='/orders'>
            <Icon path={mdiCartOutline} size={1} className='mx-3' />
            <span className="menu-title">Orders</span>
          </Link>
        </li>
        
        <Collapse timeout="auto" unmountOnExit>
          <ul className='inner-item'>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/orders'>

                <Icon path={mdiCartOutline} size={1} className='mx-3' />
                <span className="menu-title">Orders</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/thresholdproduct'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">Subscription Orders</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to='/webapp/thresholdproduct'>
                <Icon path={mdiArrowUUpRight} size={1} className='mx-3' />
                <span className="menu-title">Order Return Reasons</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/thresholdproduct'>
                <Icon path={mdiMessageDraw} size={1} className='mx-3' />
                <span className="menu-title">Product Reviews</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/thresholdproduct'>
                <Star className='mx-3' />
                <span className="menu-title">Abandoned Cart</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/thresholdproduct'>
                <Icon path={mdiCartOutline} size={1} className='mx-3' />
                <span className="menu-title">Order Cancellation Reasons</span>
              </Link>
            </li> */}
          </ul>
        </Collapse>

        <li className="nav-item" onClick={() => handleToggle('home')}>
          <div className="nav-link" >

            <Icon path={mdiHome} size={1} className='mx-3' />
            <span className="menu-title">Home</span>
            {openStates.home ? <ExpandLess className='mx-3' /> : <ExpandMore className='mx-3' />}
          </div>


        </li>
        <Collapse in={openStates.home} timeout="auto" unmountOnExit>
          <ul className='inner-item'>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/banner'>

                <Icon path={mdiImageArea} size={1} className='mx-3' />
                <span className="menu-title">Banner</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/socialmedia'>
                {/* <Icon path={mdiCheckDecagram} size={1} className='mx-3' /> */}
                <Icon path={mdiLinkVariant} size={1} className='mx-3' />
                <span className="menu-title">Social Link</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/gallery'>
                {/* <Icon path={mdiCheckDecagram} size={1} className='mx-3' /> */}
                <Icon path={mdiViewGallery} size={1} className='mx-3' />
                <span className="menu-title">Gallery</span>
              </Link>
            </li>


          </ul>
        </Collapse>

        <li className="nav-item">
          <Link className="nav-link" to="/webapp/settings">
            <Icon path={mdiAccountGroupOutline} size={1} className='mx-3' />
            <span className="menu-title">Settings</span>
          </Link>
        </li>


      </ul>
    </nav>
  )
}

export default Header