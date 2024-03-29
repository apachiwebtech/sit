import axios from 'axios';
import "bootstrap-icons/font/bootstrap-icons.css";
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Outlet, createBrowserRouter, useNavigate } from 'react-router-dom';
import AdminDashBoard from './AdminComponent/AdminDashBoard';
import { BASE_URL } from './AdminComponent/BaseUrl';
import Header from './AdminComponent/Header';
import OneFieldForm from './AdminComponent/OneFieldForm';
import PageNotFound from './AdminComponent/PageNotFound';

import WebLogin from './AdminComponent/WebLogin';
import './App.css';

import './Responsive.css';
import './Style.css';
import TwoFieldForm from './AdminComponent/TwoFieldForm';
import ThreeFieldForm from './AdminComponent/ThreeFieldForm';
import VendorMaster from './AdminComponent/VenorMaster';
import Course from './AdminComponent/Course';
import BookCode from './AdminComponent/College';
import College from './AdminComponent/College';
import BatchCategory from './AdminComponent/BatchCategory';
import Faculty from './AdminComponent/LibraryBook';
// import { Feedback, LibraryBooks } from '@mui/icons-material';
import LibraryBook from './AdminComponent/LibraryBook';
import Feedback from './AdminComponent/Feedback';





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
        path: '/twofieldform/:tablename/:text1/:text2/:type/:fieldname',
        element: <TwoFieldForm />
      },
      {
        path: '/threefieldform/:tablename/:text1/:text2/:text3/:type/:fieldname',
        element: <ThreeFieldForm />
      },
      {
        path: '/vendormaster',
        element: <VendorMaster />
      },
      {
        path: '/course',
        element: <Course/>
      },
      {
        path: '/college',
        element: <College />
      },

      {
        path: '/batchcategory',
        element: <BatchCategory/>
      },
      {
        path: '/librarybook',
        element: <LibraryBook/>
      },
      {
        path: '/feedback',
        element: <Feedback/>
      }
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
