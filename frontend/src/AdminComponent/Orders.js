import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from './BaseUrl'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InnerHeader from './InnerHeader';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const Orders = () => {
    const [order, setOrderData] = useState([])

    async function getOrderdata() {
        axios.get(`${BASE_URL}/order_detail`)
            .then((res) => {
                console.log(res.data)
                setOrderData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getOrderdata()
    }, [])






    return (
        <div class="container-fluid page-body-wrapper">
            <InnerHeader />
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h4 class="card-title">Search By </h4>

                                        </div>
                                    </div>
                                    <form class="forms-sample" >
                                        <div className='row'>
                                            <div class="form-group col-lg-2">
                                                <label for="exampleInputUsername1">Order No</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Order No" name='title' />
                                            </div>
                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Customer Name</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Enter Name" name='title' />
                                            </div>
                                            <div class="form-group col-lg-3">
                                                <label for="exampleInputUsername1">Mobile No</label>
                                                <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Enter Number" name='title' />
                                            </div>
                                            <div class="form-group col-lg-2">
                                                <label for="exampleInputUsername1">Order From</label>
                                                <input type="date" class="form-control" id="exampleInputUsername1" placeholder="Order No" name='title' />
                                            </div>
                                            <div class="form-group col-lg-2">
                                                <label for="exampleInputUsername1">Order To</label>
                                                <input type="date" class="form-control" id="exampleInputUsername1" placeholder="Order No" name='title' />
                                            </div>
                                            <div class="form-group col-lg-2">
                                                <label for="exampleFormControlSelect1">Delivery Status</label>
                                                <select class="form-control form-control-lg" id="exampleFormControlSelect1" name='state'>
                                                    <option selected>All</option>
                                                    <option value="1">Confirm</option>
                                                    <option value="2">Dispatch</option>
                                                    <option value="3">Delivered</option>
                                                    <option value="4">Cancelled</option>
                                                </select>

                                            </div>
                                            <div class="form-group col-lg-2">
                                                <label for="exampleFormControlSelect1">Payment Status</label>
                                                <select class="form-control form-control-lg" id="exampleFormControlSelect1" name='state'>
                                                    <option selected>All</option>
                                                    <option value="1">Paid</option>
                                                    <option value="2">Cod</option>
                                                </select>

                                            </div>


                                        </div>

                                        <button type="submit" class="btn btn-primary mr-2">Search</button>
                                        <Link to="/webapp/adminuser"><button class="btn btn-light">Cancel</button></Link>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h4 class="card-title">Orders </h4>
                                            <p class="card-description">
                                                List Of Orders
                                            </p>
                                        </div>
                                        {/* <div>
                                            <Link to="/webapp/vendorform"><button className=' btn btn-primary'>Add Vendor</button></Link>
                                        </div> */}
                                    </div>

                                    <div class="table-responsive pt-3">
                                        <table class="table table-bordered">
                                            <thead>

                                                <tr>
                                                    <th>
                                                        Order Id
                                                    </th>
                                                    <th>
                                                        Order's Date & Time
                                                    </th>
                                                    <th>
                                                        Invoice No
                                                    </th>
                                                    <th>
                                                        Customer Name
                                                    </th>
                                                    <th>
                                                        Amount
                                                    </th>
                                                    <th>
                                                        Payment Status
                                                    </th>
                                                    <th>
                                                        Order Status
                                                    </th>
                                                    <th>
                                                        Print Invoice
                                                    </th>
                                                    <th>
                                                        View
                                                    </th>
                                                </tr>


                                            </thead>


                                            <tbody>

                                                {order.map((item) => {
                                                    return (
                                                        <tr >
                                                            <td>
                                                                {item.orderno}
                                                            </td>
                                                            <td>
                                                                {item.order_date}
                                                            </td>
                                                            <td>
                                                                {item.invoiceNo}
                                                            </td>
                                                            <td>
                                                                {item.firstname} {item.lastname}
                                                            </td>
                                                            <td>
                                                                {item.transacamount}
                                                            </td>
                                                            <td>
                                                                {item.paystatus == 0 ? "pending" : "paid"}
                                                            </td>
                                                            <td>
                                                                {item.status}
                                                            </td>
                                                            <td>

                                                                <button className='bt btn-sm btn-primary'>Print Invoice</button>
                                                            </td>
                                                            <td>
                                                                <Link to="/webapp/view"><RemoveRedEyeIcon className='text-primary' /></Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                <tr >
                                                    <td>
                                                        RST-231004-11
                                                    </td>
                                                    <td>
                                                        04-10-2023
                                                    </td>
                                                    <td>
                                                        RST-WS/23-24/003
                                                    </td>
                                                    <td>
                                                        Satyam satkar
                                                    </td>
                                                    <td>
                                                        15112
                                                    </td>
                                                    <td>
                                                        paid
                                                    </td>
                                                    <td>
                                                        Confirm
                                                    </td>
                                                    <td>

                                                        <button className='bt btn-sm btn-primary'>Print Invoice</button>
                                                    </td>
                                                    <td>
                                                        <Link to="/webapp/view"><RemoveRedEyeIcon className='text-primary' /></Link>
                                                    </td>
                                                </tr>







                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Orders