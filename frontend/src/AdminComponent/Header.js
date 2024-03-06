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

        <li className="nav-item">
          <Link className="nav-link" to="/webapp/vendormaster">
            <Icon path={mdiAccountGroupOutline} size={1} className='mx-3' />
            <span className="menu-title">Vendor Master</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/webapp/adminuser'>
            <Icon path={mdiAccountOutline} size={1} className='mx-3' />
            <span className="menu-title">Admin User</span>
          </Link>
        </li>


        {/* <li className="nav-item">
          <Link className="nav-link" to='' onClick={handleClick}>
            <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
            <span className="menu-title">Product </span>
          </Link>
        </li> */}

        <li className="nav-item" onClick={() => handleToggle('product')}>
          <div className="nav-link" >
            <Icon path={mdiFormatListBulletedSquare} size={1} className='mx-3' />
            <span className="menu-title">Products</span>
            {openStates.product ? <ExpandLess className='mx-3' /> : <ExpandMore className='mx-3' />}
          </div>
        </li>

        <Collapse in={openStates.product} timeout="auto" unmountOnExit>
          <ul className='inner-item'>

            <li className="nav-item">
              <Link className="nav-link" to='/webapp/group'>
                <Icon path={mdiLandPlotsCircle} size={1} className='mx-3' />
                <span className="menu-title">Group</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/category'>
                <Icon path={mdiLandPlotsCircle} size={1} className='mx-3' />
                <span className="menu-title">Category</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/subcategory'>
                <Icon path={mdiApps} size={1} className='mx-3' />
                <span className="menu-title">SubCategory</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/brand'>
                {/* <Icon path={mdiMagnifyPlusOutline} size={1}  /> */}
                <Icon path={mdiStarBox} size={1} className='mx-3' />
                <span className="menu-title">Brand</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/color'>
                {/* <Icon path={mdiMagnifyPlusOutline} size={1}  /> */}
                <Icon path={mdiFormatColorFill} size={1} className='mx-3' />
                <span className="menu-title">Color</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/productcatalog'>
                <Icon path={mdiMap} size={1} className='mx-3' />
                <span className="menu-title">Products</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/productapproval'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">Product Approval</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/SellersProductInventory'>
                <Icon path={mdiArchive} size={1} className='mx-3' />
                <span className="menu-title">SellersProductInventory</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/shop'>
                <Icon path={mdiStore} size={1} className='mx-3' />

                <span className="menu-title">Shop</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/productoption'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">Product Option</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/producttag'>
                <Icon path={mdiTagTextOutline} size={1} className='mx-3' />
               
                <span className="menu-title">Product Tag</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/thresholdproduct'>
           
                <ProductionQuantityLimitsIcon className='mx-3' />
                <span className="menu-title">Threshold Product</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to='/webapp/view'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">View</span>
              </Link>
            </li>
        
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/reviewcomment'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">Review & Comment</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/webapp/testimonial'>
                <Icon path={mdiCheckDecagram} size={1} className='mx-3' />
                <span className="menu-title">Testimonials</span>
              </Link>
            </li> */}

          </ul>
        </Collapse>











        <li className="nav-item" >
          <Link className="nav-link" to='/webapp/orders'>
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