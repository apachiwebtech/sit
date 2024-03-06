import React, { useEffect, useState } from 'react'
import brand1 from '../../assets/frontimg/brand/1.jpg'
import brand2 from '../../assets/frontimg/brand/2.jpg'
import brand3 from '../../assets/frontimg/brand/3.jpg'
import brand4 from '../../assets/frontimg/brand/4.jpg'
import brand5 from '../../assets/frontimg/brand/5.jpg'
import product1 from '../../assets/frontimg/product/1.jpg'

import product4_2 from '../../assets/frontimg/product/4-2.jpg'
import product6_2 from '../../assets/frontimg/product/6-2.jpg'
import product6 from '../../assets/frontimg/product/6.jpg'
import product8 from '../../assets/frontimg/product/8.jpg'
import product9 from '../../assets/frontimg/product/9.jpg'

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Store/Products/product-actions';
import ProductCard from '../Subcomponents/ProductCard'
import { Link } from 'react-router-dom'

const ShopProduct = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    console.log(products, "from component");
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    return (
        <div><div id="site-main" className="site-main">
            <div id="main-content" className="main-content">
                <div id="primary" className="content-area">
                    <div id="title" className="page-title">
                        <div className="section-container">
                            <div className="content-title-heading">
                                <h1 className="text-title-heading">
                                    Bed &amp; Bath
                                </h1>
                            </div>
                            <div className="breadcrumbs">
                                <a href="index.html">Home</a><span className="delimiter"></span><a href="shop-grid-left.html">Shop</a><span className="delimiter"></span>Bed &amp; Bath
                            </div>
                        </div>
                    </div>

                    <div id="content" className="site-content" role="main">
                        <div className="section-padding">
                            <div className="section-container p-l-r">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-12 col-12  left-sidebar md-b-50">
                                        {/* <!-- Block Product Categories --> */}
                                        <div className="block block-product-cats">
                                            <div className="block-title"><h2>Categories</h2></div>
                                            <div className="block-content">
                                                <div className="product-cats-list">
                                                    <ul>
                                                        <li className="current">
                                                            <a href="shop-grid-left.html">Bed & Bath <span className="count">9</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-grid-left.html">Furniture <span className="count">4</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-grid-left.html">Home Décor <span className="count">3</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-grid-left.html">Lighting <span className="count">6</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-grid-left.html">Office <span className="count">2</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-grid-left.html">Outdoor <span className="count">4</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Block Product Filter --> */}
                                        <div className="block block-product-filter">
                                            <div className="block-title"><h2>Price</h2></div>
                                            <div className="block-content">
                                                <div id="slider-range" className="price-filter-wrap">
                                                    <div className="filter-item price-filter">
                                                        <div className="layout-slider">
                                                            <input id="price-filter" name="price" value="0-100" />
                                                        </div>
                                                        <div className="layout-slider-settings"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Block Product Filter --> */}
                                        <div className="block block-product-filter clearfix">
                                            <div className="block-title"><h2>Size</h2></div>
                                            <div className="block-content">
                                                <ul className="filter-items text">
                                                    <li><span>L</span></li>
                                                    <li><span>M</span></li>
                                                    <li><span>S</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* <!-- Block Product Filter --> */}
                                        <div className="block block-product-filter clearfix">
                                            <div className="block-title"><h2>Brands</h2></div>
                                            <div className="block-content">
                                                <ul className="filter-items image">
                                                    <li><span><img src={brand1} alt="Brand" /></span></li>
                                                    <li><span><img src={brand1} alt="Brand" /></span></li>
                                                    <li><span><img src={brand1} alt="Brand" /></span></li>
                                                    <li><span><img src={brand1} alt="Brand" /></span></li>
                                                    <li><span><img src={brand1} alt="Brand" /></span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* <!-- Block Products --> */}
                                        <div className="block block-products">
                                            <div className="block-title"><h2>Feature Product</h2></div>
                                            <div className="block-content">
                                                <ul className="products-list">
                                                    {products.filter((featured) => featured.featured === 1).map((featured) => {
                                                        return (
                                                            <Link to="/detailpage" >
                                                            <li className="product-item">
                                                                <a href="shop-details.html" className="product-image">
                                                                    <img src={product1} alt='product6' />
                                                                </a>
                                                                <div className="product-content">
                                                                    <h2 className="product-title">
                                                                        <a href="shop-details.html">
                                                                            {featured.title}
                                                                        </a>
                                                                    </h2>
                                                                    <div className="rating small">
                                                                        <div className="star star-5"></div>
                                                                    </div>
                                                                    {/* <span className="price">
                                                        <del aria-hidden="true"><span>$150.00</span></del> 
                                                        <ins><span>$100.00</span></ins>
                                                    </span> */}
                                                                    {featured.disc_price ?
                                                                        (<span className="price">
                                                                            <del aria-hidden="true"><span>{featured.price}</span></del>
                                                                            <ins><span>{featured.disc_price}</span></ins>
                                                                        </span>) :
                                                                        (<span className="price">{featured.price}</span>)
                                                                    }
                                                                </div>
                                                            </li>
                                                            </Link>
                                                        )
                                                    })}
                                                    {/* <li className="product-item">
                                                <a href="shop-details.html" className="product-image">
                                                    <img src={product8} alt='product8'/>
                                                </a>
                                                <div className="product-content">
                                                    <h2 className="product-title">
                                                        <a href="shop-details.html">
                                                            Spinning Pendant Lamp
                                                        </a>
                                                    </h2>
                                                    <div className="rating small">
                                                        <div className="star star-0"></div>
                                                    </div>
                                                    <span className="price">$120.00</span>
                                                </div>
                                            </li>
                                            <li className="product-item">
                                                <a href="shop-details.html" className="product-image">
                                                    <img src={product9} alt='product9'/>
                                                </a>
                                                <div className="product-content">
                                                    <h2 className="product-title">
                                                        <a href="shop-details.html">
                                                            Bora Armchair
                                                        </a>
                                                    </h2>
                                                    <div className="rating small">
                                                        <div className="star star-5"></div>
                                                    </div>
                                                    <span className="price">
                                                        <del aria-hidden="true"><span>$200.00</span></del> 
                                                        <ins><span>$180.00</span></ins>
                                                    </span>
                                                </div>
                                            </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                                        <div className="products-topbar clearfix">
                                            <div className="products-topbar-left">
                                                <div className="products-count">
                                                    Showing all 21 results
                                                </div>
                                            </div>
                                            <div className="products-topbar-right">
                                                <div className="products-sort dropdown">
                                                    <span className="sort-toggle dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Default sorting</span>
                                                    <ul className="sort-list dropdown-menu" x-placement="bottom-start">
                                                        <li className="active"><a href="#">Default sorting</a></li>
                                                        <li><a href="#">Sort by popularity</a></li>
                                                        <li><a href="#">Sort by average rating</a></li>
                                                        <li><a href="#">Sort by latest</a></li>
                                                        <li><a href="#">Sort by price: low to high</a></li>
                                                        <li><a href="#">Sort by price: high to low</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="layout-grid" role="tabpanel">
                                                <div className="products-list grid">
                                                    <div className="row">
                                                        {products?.map((product) => {
                                                            //     return (
                                                            //     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            //     <div className="products-entry clearfix product-wapper">
                                                            //         <div className="products-thumb">
                                                            //             <div className="product-lable">
                                                            //                 <div className="hot">Hot</div>
                                                            //             </div>
                                                            //             <div className="product-thumb-hover">
                                                            //                 <a href="shop-details.html">
                                                            //                     <img width="600" height="600" src={product6_2} className="post-image" alt=""/>
                                                            //                     <img width="600" height="600" src={product4_2} className="hover-image back" alt=""/>
                                                            //                 </a>
                                                            //             </div>		
                                                            //             <div className="product-button">
                                                            //                 <div className="btn-add-to-cart" data-title="Add to cart">
                                                            //                     <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                            //                 </div>
                                                            //                 <div className="btn-wishlist" data-title="Wishlist">
                                                            //                     <button className="product-btn">Add to wishlist</button>
                                                            //                 </div>
                                                            //             </div>
                                                            //         </div>
                                                            //         <div className="products-content">
                                                            //             <div className="contents text-center">
                                                            //                 <h3 className="product-title"><a href="shop-details.html">{product.title}</a></h3>
                                                            //                 {product.disc_price ? (<span className="price">
                                                            //                         <del aria-hidden="true"><span>$200.00</span></del> 
                                                            //                          <ins><span>$180.00</span></ins>
                                                            //                 </span>) :
                                                            //                 (<span className="price">{product.price  }</span>) 
                                                            //                 }
                                                            //             </div>
                                                            //         </div>
                                                            //     </div>
                                                            // </div>
                                                            //     )
                                                            return (
                                                                <ProductCard title={product.title} disc_price={product.disc_price} price={product.price} image1={product.size_image} image2={product4_2} trending={product.trending} />
                                                            )
                                                        })
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="layout-list" role="tabpanel">
                                                <div className="products-list list">
                                                    <div className="products-entry clearfix product-wapper">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="products-thumb">
                                                                    <div className="product-lable">
                                                                        <div className="hot">Hot</div>
                                                                    </div>
                                                                    <div className="product-thumb-hover">
                                                                        <a href="shop-details.html">
                                                                            <img width="600" height="600" src={product6_2} className="post-image" alt="" />
                                                                            <img width="600" height="600" src={product4_2} className="hover-image back" alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <span className="product-quickview" data-title="Quick View">
                                                                        <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="products-content">
                                                                    <h3 className="product-title"><a href="shop-details.html">Dining Table</a></h3>
                                                                    <span className="price">$150.00</span>
                                                                    <div className="rating">
                                                                        <div className="star star-5"></div>
                                                                        <div className="review-count">
                                                                            (1<span> review</span>)
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-button">
                                                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                                                            <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                                        </div>
                                                                        <div className="btn-wishlist" data-title="Wishlist">
                                                                            <button className="product-btn">Add to wishlist</button>
                                                                        </div>
                                                                        <div className="btn-compare" data-title="Compare">
                                                                            <button className="product-btn">Compare</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="products-entry clearfix product-wapper">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="products-thumb">
                                                                    <div className="product-lable">
                                                                        <div className="hot">Hot</div>
                                                                    </div>
                                                                    <div className="product-thumb-hover">
                                                                        <a href="shop-details.html">
                                                                            <img width="600" height="600" src={product6_2} className="post-image" alt="" />
                                                                            <img width="600" height="600" src={product4_2} className="hover-image back" alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <span className="product-quickview" data-title="Quick View">
                                                                        <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="products-content">
                                                                    <h3 className="product-title"><a href="shop-details.html">Pillar Dining Table Round</a></h3>
                                                                    <span className="price">
                                                                        <del aria-hidden="true"><span>$150.00</span></del>
                                                                        <ins><span>$100.00</span></ins>
                                                                    </span>
                                                                    <div className="rating">
                                                                        <div className="star star-0"></div>
                                                                        <div className="review-count">
                                                                            (0<span> review</span>)
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-button">
                                                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                                                            <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                                        </div>
                                                                        <div className="btn-wishlist" data-title="Wishlist">
                                                                            <button className="product-btn">Add to wishlist</button>
                                                                        </div>
                                                                        <div className="btn-compare" data-title="Compare">
                                                                            <button className="product-btn">Compare</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="products-entry clearfix product-wapper">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="products-thumb">
                                                                    <div className="product-lable">
                                                                        <div className="hot">Hot</div>
                                                                    </div>
                                                                    <div className="product-thumb-hover">
                                                                        <a href="shop-details.html">
                                                                            <img width="600" height="600" src={product6_2} className="post-image" alt="" />
                                                                            <img width="600" height="600" src={product4_2} className="hover-image back" alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <span className="product-quickview" data-title="Quick View">
                                                                        <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="products-content">
                                                                    <h3 className="product-title"><a href="shop-details.html">Mags Sofa 2.5 Seater</a></h3>
                                                                    <span className="price">$150.00</span>
                                                                    <div className="rating">
                                                                        <div className="star star-4"></div>
                                                                        <div className="review-count">
                                                                            (1<span> review</span>)
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-button">
                                                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                                                            <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                                        </div>
                                                                        <div className="btn-wishlist" data-title="Wishlist">
                                                                            <button className="product-btn">Add to wishlist</button>
                                                                        </div>
                                                                        <div className="btn-compare" data-title="Compare">
                                                                            <button className="product-btn">Compare</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="products-entry clearfix product-wapper">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="products-thumb">
                                                                    <div className="product-lable">
                                                                        <div className="hot">Hot</div>
                                                                    </div>
                                                                    <div className="product-thumb-hover">
                                                                        <a href="shop-details.html">
                                                                            <img width="600" height="600" src={product6_2} className="post-image" alt="" />
                                                                            <img width="600" height="600" src={product4_2} className="hover-image back" alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <span className="product-quickview" data-title="Quick View">
                                                                        <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="products-content">
                                                                    <h3 className="product-title"><a href="shop-details.html">Spinning pendant lamp</a></h3>
                                                                    <span className="price">
                                                                        <del aria-hidden="true"><span>$120.00</span></del>
                                                                        <ins><span>$100.00</span></ins>
                                                                    </span>
                                                                    <div className="rating">
                                                                        <div className="star star-0"></div>
                                                                        <div className="review-count">
                                                                            (0<span> review</span>)
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-button">
                                                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                                                            <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                                        </div>
                                                                        <div className="btn-wishlist" data-title="Wishlist">
                                                                            <button className="product-btn">Add to wishlist</button>
                                                                        </div>
                                                                        <div className="btn-compare" data-title="Compare">
                                                                            <button className="product-btn">Compare</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="products-entry clearfix product-wapper">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="products-thumb">
                                                                    <div className="product-lable">
                                                                        <div className="hot">Hot</div>
                                                                    </div>
                                                                    <div className="product-thumb-hover">
                                                                        <a href="shop-details.html">
                                                                            <img width="600" height="600" src={product6_2} className="post-image" alt="" />
                                                                            <img width="600" height="600" src={product4_2} className="hover-image back" alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <span className="product-quickview" data-title="Quick View">
                                                                        <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="products-content">
                                                                    <h3 className="product-title"><a href="shop-details.html">Bora Armchair</a></h3>
                                                                    <span className="price">
                                                                        <del aria-hidden="true"><span>$100.00</span></del>
                                                                        <ins><span>$90.00</span></ins>
                                                                    </span>
                                                                    <div className="rating">
                                                                        <div className="star star-5"></div>
                                                                        <div className="review-count">
                                                                            (3<span> review</span>)
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-button">
                                                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                                                            <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                                        </div>
                                                                        <div className="btn-wishlist" data-title="Wishlist">
                                                                            <button className="product-btn">Add to wishlist</button>
                                                                        </div>
                                                                        <div className="btn-compare" data-title="Compare">
                                                                            <button className="product-btn">Compare</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="products-entry clearfix product-wapper">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="products-thumb">
                                                                    <div className="product-lable">
                                                                        <div className="hot">Hot</div>
                                                                    </div>
                                                                    <div className="product-thumb-hover">
                                                                        <a href="shop-details.html">
                                                                            <img width="600" height="600" src={product6_2} className="post-image" alt="" />
                                                                            <img width="600" height="600" src={product4_2} className="hover-image back" alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <span className="product-quickview" data-title="Quick View">
                                                                        <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="products-content">
                                                                    <h3 className="product-title"><a href="shop-details.html">Panton Dining Table</a></h3>
                                                                    <span className="price">
                                                                        <del aria-hidden="true"><span>$79.00</span></del>
                                                                        <ins><span>$50.00</span></ins>
                                                                    </span>
                                                                    <div className="rating">
                                                                        <div className="star star-5"></div>
                                                                        <div className="review-count">
                                                                            (2<span> review</span>)
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-button">
                                                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                                                            <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                                        </div>
                                                                        <div className="btn-wishlist" data-title="Wishlist">
                                                                            <button className="product-btn">Add to wishlist</button>
                                                                        </div>
                                                                        <div className="btn-compare" data-title="Compare">
                                                                            <button className="product-btn">Compare</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="products-entry clearfix product-wapper">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="products-thumb">
                                                                    <div className="product-lable">
                                                                        <div className="hot">Hot</div>
                                                                    </div>
                                                                    <div className="product-thumb-hover">
                                                                        <a href="shop-details.html">
                                                                            <img width="600" height="600" src={product6_2} className="post-image" alt="" />
                                                                            <img width="600" height="600" src={product4_2} className="hover-image back" alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <span className="product-quickview" data-title="Quick View">
                                                                        <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="products-content">
                                                                    <h3 className="product-title"><a href="shop-details.html">Kittchen Table</a></h3>
                                                                    <span className="price">$120.00</span>
                                                                    <div className="rating">
                                                                        <div className="star star-4"></div>
                                                                        <div className="review-count">
                                                                            (1<span> review</span>)
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-button">
                                                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                                                            <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                                        </div>
                                                                        <div className="btn-wishlist" data-title="Wishlist">
                                                                            <button className="product-btn">Add to wishlist</button>
                                                                        </div>
                                                                        <div className="btn-compare" data-title="Compare">
                                                                            <button className="product-btn">Compare</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="products-entry clearfix product-wapper">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="products-thumb">
                                                                    <div className="product-lable">
                                                                        <div className="hot">Hot</div>
                                                                    </div>
                                                                    <div className="product-thumb-hover">
                                                                        <a href="shop-details.html">
                                                                            <img width="600" height="600" src={product6_2} className="post-image" alt="" />
                                                                            <img width="600" height="600" src={product4_2} className="hover-image back" alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <span className="product-quickview" data-title="Quick View">
                                                                        <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="products-content">
                                                                    <h3 className="product-title"><a href="shop-details.html">Mundo Sofa With Cushion</a></h3>
                                                                    <span className="price">
                                                                        <del aria-hidden="true"><span>$200.00</span></del>
                                                                        <ins><span>$180.00</span></ins>
                                                                    </span>
                                                                    <div className="rating">
                                                                        <div className="star star-5"></div>
                                                                        <div className="review-count">
                                                                            (4<span> review</span>)
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-button">
                                                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                                                            <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                                        </div>
                                                                        <div className="btn-wishlist" data-title="Wishlist">
                                                                            <button className="product-btn">Add to wishlist</button>
                                                                        </div>
                                                                        <div className="btn-compare" data-title="Compare">
                                                                            <button className="product-btn">Compare</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="products-entry clearfix product-wapper">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="products-thumb">
                                                                    <div className="product-lable">
                                                                        <div className="hot">Hot</div>
                                                                    </div>
                                                                    <div className="product-thumb-hover">
                                                                        <a href="shop-details.html">
                                                                            <img width="600" height="600" src={product6_2} className="post-image" alt="" />
                                                                            <img width="600" height="600" src={product4_2} className="hover-image back" alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <span className="product-quickview" data-title="Quick View">
                                                                        <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="products-content">
                                                                    <h3 className="product-title"><a href="shop-details.html">Amp Pendant Light Large</a></h3>
                                                                    <span className="price">$140.00</span>
                                                                    <div className="rating">
                                                                        <div className="star star-5"></div>
                                                                        <div className="review-count">
                                                                            (1<span> review</span>)
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-button">
                                                                        <div className="btn-add-to-cart" data-title="Add to cart">
                                                                            <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                                        </div>
                                                                        <div className="btn-wishlist" data-title="Wishlist">
                                                                            <button className="product-btn">Add to wishlist</button>
                                                                        </div>
                                                                        <div className="btn-compare" data-title="Compare">
                                                                            <button className="product-btn">Compare</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis…</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <nav className="pagination">
                                            <ul className="page-numbers">
                                                <li><a className="prev page-numbers" href="#">Previous</a></li>
                                                <li><span aria-current="page" className="page-numbers current">1</span></li>
                                                <li><a className="page-numbers" href="#">2</a></li>
                                                <li><a className="page-numbers" href="#">3</a></li>
                                                <li><a className="next page-numbers" href="#">Next</a></li>
                                            </ul>
                                        </nav>
                                    </div>
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

export default ShopProduct