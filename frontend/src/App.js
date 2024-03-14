import axios from 'axios';
import "bootstrap-icons/font/bootstrap-icons.css";
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Outlet, createBrowserRouter, useNavigate } from 'react-router-dom';
import AdminDashBoard from './AdminComponent/AdminDashBoard';
import Banner from './AdminComponent/Banner';
import { BASE_URL } from './AdminComponent/BaseUrl';
import Brand from './AdminComponent/Brand';
import Category from './AdminComponent/Category';
import Color from './AdminComponent/Color';
import Gallery from './AdminComponent/Gallery';
import Header from './AdminComponent/Header';
import Orders from './AdminComponent/Orders';
import PageNotFound from './AdminComponent/PageNotFound';
import Product from './AdminComponent/Product';
import OneFieldForm from './AdminComponent/OneFieldForm'
import ReviewComment from './AdminComponent/ReviewComment';
import SellersProductInventory from './AdminComponent/SellersProductInventory';
import SettingPages from './AdminComponent/SettingPages';
import Shop from './AdminComponent/Shop';
import SocialMedia from './AdminComponent/SocialMedia';
import SubCatetgory from './AdminComponent/SubCategory';

import View from './AdminComponent/View';
import WebLogin from './AdminComponent/WebLogin';
import './App.css';

import './Responsive.css';
import './Style.css';
import Group from './AdminComponent/Group';
import AddProductImg from './AdminComponent/AddProductImg';



const Router = createBrowserRouter([
  {
    path: '/weblog',
    element: <WebLogin />
  },

  {
    path: '/',
    element: <WebApp />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <AdminDashBoard />
      },
      {
        path: '/onefieldform/:tablename/:fieldname',
        element: <OneFieldForm />
      },


  
      {
        path: '/category',
        element: <Category />
      },
      {
        path: '/group/',
        element: <Group />
      },
    
      {
        path: '/subcategory',
        element: <SubCatetgory />
      },

      {
        path: '/product/:update_id',
        element: <Product />
      },

  
      {
        path: '/sellersproductinventory',
        element: <SellersProductInventory />
      },

      {
        path: '/brand',
        element: <Brand />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/shop',
        element: <Shop />
      },

  
      {
        path: '/view',
        element: <View />
      },

      {
        path: '/banner',
        element: <Banner />
      },

      {
        path: '/reviewcomment',
        element: <ReviewComment />
      },
  
      {
        path: '/socialmedia',
        element: <SocialMedia />
      },

      {
        path: '/settings',
        element: <SettingPages />
      },
      {
        path: '/color',
        element: <Color />
      },
      {
        path: '/addimages/:proid',
        element: <AddProductImg />
      },

    ]
  }
])

function checkLocalStorageAndRedirect(navigate) {
  const user_id = Cookies.get('userid');
  if (user_id == null) {
    navigate('/weblog'); // Redirect to dashboard if id exists in localStorage
  }
}





function WebApp() {


  async function accessSession() {
    axios.get(`${BASE_URL}/checkauth`)
      .then((res) => {
        if (res.data.valid) {
        } else {
          navigate('/')
        }
      });
  }



  const navigate = useNavigate();
  useEffect(() => {
    checkLocalStorageAndRedirect(navigate);
    accessSession()
  }, [navigate]);





  return (
    <>
      <div className="container-scroller d-flex">
        <Header />
        <Outlet />
      </div>
    </>

  );
}


export default Router;
