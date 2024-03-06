import React from 'react'
import product1 from '../../assets/frontimg/product/1.jpg'
const ShopCart = () => {
  return (
    <div>
      <div id="page" class="hfeed page-wrapper">
        {/* <header id="site-header" class="site-header header-v1 absolute">
          <div class="header-mobile">
            <div class="section-padding">
              <div class="section-container">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
                    <div class="navbar-header">
                      <button type="button" id="show-megamenu" class="navbar-toggle"></button>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
                    <div class="site-logo">
                      <a href="index.html">
                        <img width="400" height="79" src="media/logo.png" alt="Ruper – Furniture HTML Theme" />
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
                    <div class="ruper-topcart dropdown">
                      <div class="dropdown mini-cart top-cart">
                        <div class="remove-cart-shadow"></div>
                        <a class="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <div class="icons-cart"><i class="icon-large-paper-bag"></i><span class="cart-count">2</span></div>
                        </a>
                        <div class="dropdown-menu cart-popup">
                          <div class="cart-empty-wrap">
                            <ul class="cart-list">
                              <li class="empty">
                                <span>No products in the cart.</span>
                                <a class="go-shop" href="shop-grid-left.html">GO TO SHOP<i aria-hidden="true" class="arrow_right"></i></a>
                              </li>
                            </ul>
                          </div>
                          <div class="cart-list-wrap">
                            <ul class="cart-list ">
                              <li class="mini-cart-item">
                                <a href="#" class="remove" title="Remove this item"><i class="icon_close"></i></a>
                                <a href="shop-details.html" class="product-image"><img width="600" height="600" src={product1} alt="" /></a>
                                <a href="shop-details.html" class="product-name">Chair Oak Matt Lacquered</a>
                                <div class="quantity">Qty: 1</div>
                                <div class="price">$150.00</div>
                              </li>
                              <li class="mini-cart-item">
                                <a href="#" class="remove" title="Remove this item"><i class="icon_close"></i></a>
                                <a href="shop-details.html" class="product-image"><img width="600" height="600" src="media/product/1.jpg" alt="" /></a>
                                <a href="shop-details.html" class="product-name">Zunkel Schwarz</a>
                                <div class="quantity">Qty: 1</div>
                                <div class="price">$100.00</div>
                              </li>
                            </ul>
                            <div class="total-cart">
                              <div class="title-total">Total: </div>
                              <div class="total-price"><span>$100.00</span></div>
                            </div>
                            <div class="free-ship">
                              <div class="title-ship">Buy <strong>$400</strong> more to enjoy <strong>FREE Shipping</strong></div>
                              <div class="total-percent"><div class="percent" style={{width:"20%"}}></div></div>
                            </div>
                            <div class="buttons">
                              <a href="shop-cart.html" class="button btn view-cart btn-primary">View cart</a>
                              <a href="shop-checkout.html" class="button btn checkout btn-default">Check out</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="header-mobile-fixed">
             
              <div class="shop-page">
                <a href="shop-grid-left.html"><i class="wpb-icon-shop"></i></a>
              </div>

          
              <div class="my-account">
                <div class="login-header">
                  <a href="page-my-account.html"><i class="wpb-icon-user"></i></a>
                </div>
              </div>

              <div class="search-box">
                <div class="search-toggle"><i class="wpb-icon-magnifying-glass"></i></div>
              </div>

             
              <div class="wishlist-box">
                <a href="shop-wishlist.html"><i class="wpb-icon-heart"></i></a>
              </div>
            </div>
          </div>

          <div class="header-desktop">
            <div class="header-wrapper">
              <div class="section-padding">
                <div class="section-container p-l-r">
                  <div class="row">
                    <div class="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12 header-left">
                      <div class="site-logo">
                        <a href="index.html">
                          <img width="400" height="79" src="media/logo.png" alt="Ruper – Furniture HTML Theme" />
                        </a>
                      </div>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                      <div class="site-navigation">
                        <nav id="main-navigation">
                          <ul id="menu-main-menu" class="menu">
                            <li class="level-0 menu-item menu-item-has-children mega-menu">
                              <a href="index.html"><span class="menu-item-text">Home</span></a>
                              <div class="sub-menu">
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="menu-section">
                                      <h2 class="sub-menu-title">Furniture 1</h2>
                                      <ul class="menu-list">
                                        <li>
                                          <a href="index.html"><span class="menu-item-text">Home Categories</span></a>
                                        </li>
                                        <li>
                                          <a href="index2.html"><span class="menu-item-text">Home Clean</span></a>
                                        </li>
                                        <li>
                                          <a href="index3.html"><span class="menu-item-text">Home Collection</span></a>
                                        </li>
                                        <li>
                                          <a href="index4.html"><span class="menu-item-text">Home Grid</span></a>
                                        </li>
                                        <li>
                                          <a href="index5.html"><span class="menu-item-text">Home Minimal</span></a>
                                        </li>
                                        <li>
                                          <a href="index6.html"><span class="menu-item-text">Home Modern</span></a>
                                        </li>
                                        <li>
                                          <a href="index7.html"><span class="menu-item-text">Home Stylish</span></a>
                                        </li>
                                        <li>
                                          <a href="index8.html"><span class="menu-item-text">Home Unique</span></a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="menu-section">
                                      <h2 class="sub-menu-title">Furniture 2</h2>
                                      <ul class="menu-list">
                                        <li>
                                          <a href="index9.html"><span class="menu-item-text">Home Split</span></a>
                                        </li>
                                        <li>
                                          <a href="index10.html"><span class="menu-item-text">Home Gothic</span></a>
                                        </li>
                                        <li>
                                          <a href="index11.html"><span class="menu-item-text">Home Luxury</span></a>
                                        </li>
                                        <li>
                                          <a href="index12.html"><span class="menu-item-text">Home Scandinavian</span></a>
                                        </li>
                                        <li>
                                          <a href="index13.html"><span class="menu-item-text">Home Mid-Century</span></a>
                                        </li>
                                        <li>
                                          <a href="index14.html"><span class="menu-item-text">Home Retro</span></a>
                                        </li>
                                        <li>
                                          <a href="index15.html"><span class="menu-item-text">Home Color Block</span></a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="level-0 menu-item menu-item-has-children current-menu-item">
                              <a href="shop-grid-left.html"><span class="menu-item-text">Shop</span></a>
                              <ul class="sub-menu">
                                <li class="level-1 menu-item menu-item-has-children">
                                  <a href="shop-grid-left.html"><span class="menu-item-text">Shop - Products</span></a>
                                  <ul class="sub-menu">
                                    <li>
                                      <a href="shop-grid-left.html"><span class="menu-item-text">Shop Grid - Left Sidebar</span></a>
                                    </li>
                                    <li>
                                      <a href="shop-list-left.html"><span class="menu-item-text">Shop List - Left Sidebar</span></a>
                                    </li>
                                    <li>
                                      <a href="shop-grid-right.html"><span class="menu-item-text">Shop Grid - Right Sidebar</span></a>
                                    </li>
                                    <li>
                                      <a href="shop-list-right.html"><span class="menu-item-text">Shop List - Right Sidebar</span></a>
                                    </li>
                                    <li>
                                      <a href="shop-grid-fullwidth.html"><span class="menu-item-text">Shop Grid - No Sidebar</span></a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="shop-details.html"><span class="menu-item-text">Shop Details</span></a>
                                </li>
                                <li>
                                  <a href="shop-cart.html"><span class="menu-item-text">Shop - Cart</span></a>
                                </li>
                                <li>
                                  <a href="shop-checkout.html"><span class="menu-item-text">Shop - Checkout</span></a>
                                </li>
                                <li>
                                  <a href="shop-wishlist.html"><span class="menu-item-text">Shop - Wishlist</span></a>
                                </li>
                              </ul>
                            </li>
                            <li class="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth align-center">
                              <a href="blog-grid-left.html"><span class="menu-item-text">Blog</span></a>
                              <div class="sub-menu">
                                <div class="row">
                                  <div class="col-md-5">
                                    <div class="menu-section">
                                      <h2 class="sub-menu-title">Blog Category</h2>
                                      <ul class="menu-list">
                                        <li>
                                          <a href="blog-grid-left.html"><span class="menu-item-text">Blog Grid - Left Sidebar</span></a>
                                        </li>
                                        <li>
                                          <a href="blog-grid-right.html"><span class="menu-item-text">Blog Grid - Right Sidebar</span></a>
                                        </li>
                                        <li>
                                          <a href="blog-list-left.html"><span class="menu-item-text">Blog List - Left Sidebar</span></a>
                                        </li>
                                        <li>
                                          <a href="blog-list-right.html"><span class="menu-item-text">Blog List - Right Sidebar</span></a>
                                        </li>
                                        <li>
                                          <a href="blog-grid-fullwidth.html"><span class="menu-item-text">Blog Grid - No Sidebar</span></a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div class="menu-section">
                                      <h2 class="sub-menu-title">Blog Details</h2>
                                      <ul class="menu-list">
                                        <li>
                                          <a href="blog-details-left.html"><span class="menu-item-text">Blog Details - Left Sidebar</span></a>
                                        </li>
                                        <li>
                                          <a href="blog-details-right.html"><span class="menu-item-text">Blog Details - Right Sidebar</span></a>
                                        </li>
                                        <li>
                                          <a href="blog-details-fullwidth.html"><span class="menu-item-text">Blog Details - No Sidebar</span></a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div class="col-md-7">
                                    <div class="menu-section">
                                      <h2 class="sub-menu-title">Recent Posts</h2>
                                      <div class="block block-posts recent-posts p-t-5">
                                        <ul class="posts-list">
                                          <li class="post-item">
                                            <a href="blog-details-right.html" class="post-image">
                                              <img src="media/blog/1.jpg" />
                                            </a>
                                            <div class="post-content">
                                              <h2 class="post-title">
                                                <a href="blog-details-right.html">
                                                  Easy Fixes For Home Decor
                                                </a>
                                              </h2>
                                              <div class="post-time">
                                                <span class="post-date">May 30, 2022</span>
                                                <span class="post-comment">4 Comments</span>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="post-item">
                                            <a href="blog-details-right.html" class="post-image">
                                              <img src="media/blog/2.jpg" />
                                            </a>
                                            <div class="post-content">
                                              <h2 class="post-title">
                                                <a href="blog-details-right.html">
                                                  How To Make Your Home A Showplace
                                                </a>
                                              </h2>
                                              <div class="post-time">
                                                <span class="post-date">Aug 24, 2022</span>
                                                <span class="post-comment">2 Comments</span>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="post-item">
                                            <a href="blog-details-right.html" class="post-image">
                                              <img src="media/blog/3.jpg" />
                                            </a>
                                            <div class="post-content">
                                              <h2 class="post-title">
                                                <a href="blog-details-right.html">
                                                  Stunning Furniture With Aesthetic Appeal
                                                </a>
                                              </h2>
                                              <div class="post-time">
                                                <span class="post-date">Dec 06, 2022</span>
                                                <span class="post-comment">1 Comment</span>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="level-0 menu-item menu-item-has-children">
                              <a href="#"><span class="menu-item-text">Pages</span></a>
                              <ul class="sub-menu">
                                <li>
                                  <a href="page-login.html"><span class="menu-item-text">Login / Register</span></a>
                                </li>
                                <li>
                                  <a href="page-forgot-password.html"><span class="menu-item-text">Forgot Password</span></a>
                                </li>
                                <li>
                                  <a href="page-my-account.html"><span class="menu-item-text">My Account</span></a>
                                </li>
                                <li>
                                  <a href="page-about.html"><span class="menu-item-text">About Us</span></a>
                                </li>
                                <li>
                                  <a href="page-contact.html"><span class="menu-item-text">Contact</span></a>
                                </li>
                                <li>
                                  <a href="page-faq.html"><span class="menu-item-text">FAQ</span></a>
                                </li>
                                <li>
                                  <a href="page-404.html"><span class="menu-item-text">Page 404</span></a>
                                </li>
                              </ul>
                            </li>
                            <li class="level-0 menu-item">
                              <a href="page-contact.html"><span class="menu-item-text">Contact</span></a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                      <div class="header-page-link">
                   
                        <div class="login-header">
                          <a class="active-login" href="#">Login</a>
                          <div class="form-login-register">
                            <div class="box-form-login">
                              <div class="active-login"></div>
                              <div class="box-content">
                                <div class="form-login active">
                                  <form id="login_ajax" method="post" class="login">
                                    <h2>Sign in</h2>
                                    <p class="status"></p>
                                    <div class="content">
                                      <div class="username">
                                        <input type="text" required="required" class="input-text" name="username" id="username" placeholder="Your name" />
                                      </div>
                                      <div class="password">
                                        <input class="input-text" required="required" type="password" name="password" id="password" placeholder="Password" />
                                      </div>
                                      <div class="rememberme-lost">
                                        <div class="rememberme">
                                          <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                                          <label for="rememberme" class="inline">Remember me</label>
                                        </div>
                                        <div class="lost_password">
                                          <a href="forgot-password.html">Lost your password?</a>
                                        </div>
                                      </div>
                                      <div class="button-login">
                                        <input type="submit" class="button" name="login" value="Login" />
                                      </div>
                                      <div class="button-next-reregister">Create An Account</div>
                                    </div>
                                  </form>
                                </div>
                                <div class="form-register">
                                  <form method="post" class="register">
                                    <h2>REGISTER</h2>
                                    <div class="content">
                                      <div class="email">
                                        <input type="email" class="input-text" placeholder="Email" name="email" id="reg_email" value="" />
                                      </div>
                                      <div class="password">
                                        <input type="password" class="input-text" placeholder="Password" name="password" id="reg_password" />
                                      </div>
                                      <div class="button-register">
                                        <input type="submit" class="button" name="register" value="Register" />
                                      </div>
                                      <div class="button-next-login">Already has an account</div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                    
                        <div class="search-box">
                          <div class="search-toggle"><i class="icon-search"></i></div>
                        </div>

                        <div class="wishlist-box">
                          <a href="shop-wishlist.html"><i class="icon-heart"></i></a>
                          <span class="count-wishlist">1</span>
                        </div>

                        <div class="ruper-topcart dropdown light">
                          <div class="dropdown mini-cart top-cart">
                            <div class="remove-cart-shadow"></div>
                            <a class="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <div class="icons-cart"><i class="icon-large-paper-bag"></i><span class="cart-count">2</span></div>
                            </a>
                            <div class="dropdown-menu cart-popup">
                              <div class="cart-empty-wrap">
                                <ul class="cart-list">
                                  <li class="empty">
                                    <span>No products in the cart.</span>
                                    <a class="go-shop" href="shop-grid-left.html">GO TO SHOP<i aria-hidden="true" class="arrow_right"></i></a>
                                  </li>
                                </ul>
                              </div>
                              <div class="cart-list-wrap">
                                <ul class="cart-list ">
                                  <li class="mini-cart-item">
                                    <a href="#" class="remove" title="Remove this item"><i class="icon_close"></i></a>
                                    <a href="shop-details.html" class="product-image"><img width="600" height="600" src={product1} alt="" /></a>
                                    <a href="shop-details.html" class="product-name">Chair Oak Matt Lacquered</a>
                                    <div class="quantity">Qty: 1</div>
                                    <div class="price">$150.00</div>
                                  </li>
                                  <li class="mini-cart-item">
                                    <a href="#" class="remove" title="Remove this item"><i class="icon_close"></i></a>
                                    <a href="shop-details.html" class="product-image"><img width="600" height="600" src="media/product/1.jpg" alt="" /></a>
                                    <a href="shop-details.html" class="product-name">Zunkel Schwarz</a>
                                    <div class="quantity">Qty: 1</div>
                                    <div class="price">$100.00</div>
                                  </li>
                                </ul>
                                <div class="total-cart">
                                  <div class="title-total">Total: </div>
                                  <div class="total-price"><span>$100.00</span></div>
                                </div>
                                <div class="free-ship">
                                  <div class="title-ship">Buy <strong>$400</strong> more to enjoy <strong>FREE Shipping</strong></div>
                                  <div class="total-percent"><div class="percent" style={{width:"20%"}}></div></div>
                                </div>
                                <div class="buttons">
                                  <a href="shop-cart.html" class="button btn view-cart btn-primary">View cart</a>
                                  <a href="shop-checkout.html" class="button btn checkout btn-default">Check out</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header> */}

        <div id="site-main" class="site-main">
          <div id="main-content" class="main-content">
            <div id="primary" class="content-area">
              <div id="title" class="page-title">
                <div class="section-container">
                  <div class="content-title-heading">
                    <h1 class="text-title-heading">
                      Shopping Cart
                    </h1>
                  </div>
                  <div class="breadcrumbs">
                    <a href="index.html">Home</a><span class="delimiter"></span><a href="shop-grid-left.html">Shop</a><span class="delimiter"></span>Shopping Cart
                  </div>
                </div>
              </div>

              <div id="content" class="site-content" role="main">
                <div class="section-padding">
                  <div class="section-container p-l-r">
                    <div class="shop-cart">
                      <div class="row">
                        <div class="col-xl-8 col-lg-12 col-md-12 col-12">
                          <form class="cart-form" action="" method="post">
                            <div class="table-responsive">
                              <table class="cart-items table" cellspacing="0">
                                <thead>
                                  <tr>
                                    <th class="product-thumbnail">Product</th>
                                    <th class="product-price">Price</th>
                                    <th class="product-quantity">Quantity</th>
                                    <th class="product-subtotal">Subtotal</th>
                                    <th class="product-remove">&nbsp;</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="cart-item">
                                    <td class="product-thumbnail">
                                      <a href="shop-details.html">
                                        <img width="600" height="600" src={product1} class="product-image" alt="" />
                                      </a>
                                      <div class="product-name">
                                        <a href="shop-details.html">Chair Oak Matt Lacquered</a>
                                      </div>
                                    </td>
                                    <td class="product-price">
                                      <span class="price">$150.00</span>
                                    </td>
                                    <td class="product-quantity">
                                      <div class="quantity">
                                        <button type="button" class="minus">-</button>
                                        <input type="number" class="qty" step="1" min="0" max="" name="quantity" value="2" title="Qty" size="4" placeholder="" inputmode="numeric" autocomplete="off" />
                                          <button type="button" class="plus">+</button>
                                      </div>
                                    </td>
                                    <td class="product-subtotal">
                                      <span>$300.00</span>
                                    </td>
                                    <td class="product-remove">
                                      <a href="#" class="remove">×</a>
                                    </td>
                                  </tr>
                                  <tr class="cart-item">
                                    <td class="product-thumbnail">
                                      <a href="shop-details.html">
                                        <img width="600" height="600" src={product1} class="product-image" alt="" />
                                      </a>
                                      <div class="product-name">
                                        <a href="shop-details.html">Zunkel Schwarz</a>
                                      </div>
                                    </td>
                                    <td class="product-price">
                                      <span>$180.00</span>
                                    </td>
                                    <td class="product-quantity">
                                      <div class="quantity">
                                        <button type="button" class="minus">-</button>
                                        <input type="number" class="qty" step="1" min="0" max="" name="quantity" value="1" title="Qty" size="4" placeholder="" inputmode="numeric" autocomplete="off" />
                                          <button type="button" class="plus">+</button>
                                      </div>
                                    </td>
                                    <td class="product-subtotal">
                                      <span class="price">$180.00</span>
                                    </td>
                                    <td class="product-remove">
                                      <a href="#" class="remove">×</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="6" class="actions">
                                      <div class="bottom-cart">
                                        <div class="coupon">
                                          <input type="text" name="coupon_code" class="input-text" id="coupon-code" value="" placeholder="Coupon code" />
                                            <button type="submit" name="apply_coupon" class="button" value="Apply coupon">Apply coupon</button>
                                        </div>
                                        <h2><a href="shop-grid-left.html">Continue Shopping</a></h2>
                                        <button type="submit" name="update_cart" class="button" value="Update cart">Update cart</button>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </form>
                        </div>
                        <div class="col-xl-4 col-lg-12 col-md-12 col-12">
                          <div class="cart-totals">
                            <h2>Cart totals</h2>
                            <div>
                              <div class="cart-subtotal">
                                <div class="title">Subtotal</div>
                                <div><span>$480.00</span></div>
                              </div>
                              <div class="shipping-totals">
                                <div class="title">Shipping</div>
                                <div>
                                  <ul class="shipping-methods custom-radio">
                                    <li>
                                      <input type="radio" name="shipping_method" data-index="0" value="free_shipping" class="shipping_method" checked="checked" /><label>Free shipping</label>
                                    </li>
                                    <li>
                                      <input type="radio" name="shipping_method" data-index="0" value="flat_rate" class="shipping_method" /><label>Flat rate</label>
                                    </li>
                                  </ul>
                                  <p class="shipping-desc">
                                    Shipping options will be updated during checkout.
                                  </p>
                                </div>
                              </div>
                              <div class="order-total">
                                <div class="title">Total</div>
                                <div><span>$480.00</span></div>
                              </div>
                            </div>
                            <div class="proceed-to-checkout">
                              <a href="shop-checkout.html" class="checkout-button button">
                                Proceed to checkout
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="shop-cart-empty">
                      <div class="notices-wrapper">
                        <p class="cart-empty">Your cart is currently empty.</p>
                      </div>
                      <div class="return-to-shop">
                        <a class="button" href="shop-grid-left.html">
                          Return to shop
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  
      </div>

    
      <div class="back-top button-show">
        <i class="arrow_carrot-up"></i>
      </div>

   
      <div class="search-overlay">
        <div class="close-search"></div>
        <div class="wrapper-search">
          <form role="search" method="get" class="search-from ajax-search" action="">
            <div class="search-box">
              <button id="searchsubmit" class="btn" type="submit">
                <i class="icon-search"></i>
              </button>
              <input id="myInput" type="text" autocomplete="off" value="" name="s" class="input-search s" placeholder="Search..." />
                <div class="search-top">
                  <div class="close-search">Cancel</div>
                </div>
                <div class="content-menu_search">
                  <label>Suggested</label>
                  <ul id="menu_search" class="menu">
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Home Décor</a></li>
                    <li><a href="#">Industrial</a></li>
                    <li><a href="#">Kitchen</a></li>
                  </ul>
                </div>
            </div>
          </form>
        </div>
      </div>

 
      <div class="wishlist-popup">
        <div class="wishlist-popup-inner">
          <div class="wishlist-popup-content">
            <div class="wishlist-popup-content-top">
              <span class="wishlist-name">Wishlist</span>
              <span class="wishlist-count-wrapper"><span class="wishlist-count">2</span></span>
              <span class="wishlist-popup-close"></span>
            </div>
            <div class="wishlist-popup-content-mid">
              <table class="wishlist-items">
                <tbody>
                  <tr class="wishlist-item">
                    <td class="wishlist-item-remove"><span></span></td>
                    <td class="wishlist-item-image">
                      <a href="shop-details.html">
                        <img width="600" height="600" src={product1} alt="" />
                      </a>
                    </td>
                    <td class="wishlist-item-info">
                      <div class="wishlist-item-name">
                        <a href="shop-details.html">Chair Oak Matt Lacquered</a>
                      </div>
                      <div class="wishlist-item-price">
                        <span>$150.00</span>
                      </div>
                      <div class="wishlist-item-time">June 4, 2022</div>
                    </td>
                    <td class="wishlist-item-actions">
                      <div class="wishlist-item-stock">
                        In stock
                      </div>
                      <div class="wishlist-item-add">
                        <div data-title="Add to cart">
                          <a rel="nofollow" href="#" class="button">Add to cart</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="wishlist-item">
                    <td class="wishlist-item-remove"><span></span></td>
                    <td class="wishlist-item-image">
                      <a href="shop-details.html">
                        <img width="600" height="600" src={product1} alt="" />
                      </a>
                    </td>
                    <td class="wishlist-item-info">
                      <div class="wishlist-item-name">
                        <a href="shop-details.html">Pillar Dining Table Round</a>
                      </div>
                      <div class="wishlist-item-price">
                        <del aria-hidden="true"><span>$150.00</span></del>
                        <ins><span>$100.00</span></ins>
                      </div>
                      <div class="wishlist-item-time">June 4, 2022</div>
                    </td>
                    <td class="wishlist-item-actions">
                      <div class="wishlist-item-stock">
                        In stock
                      </div>
                      <div class="wishlist-item-add">
                        <div data-title="Add to cart">
                          <a rel="nofollow" href="#" class="button">Add to cart</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="wishlist-popup-content-bot">
              <div class="wishlist-popup-content-bot-inner">
                <a class="wishlist-page" href="shop-wishlist.html">
                  Open wishlist page
                </a>
                <span class="wishlist-continue" data-url="">
                  Continue shopping
                </span>
              </div>
              <div class="wishlist-notice wishlist-notice-show">Added to the wishlist!</div>
            </div>
          </div>
        </div>
      </div>


      <div class="compare-popup">
        <div class="compare-popup-inner">
          <div class="compare-table">
            <div class="compare-table-inner">
              <a href="#" id="compare-table-close" class="compare-table-close">
                <span class="compare-table-close-icon"></span>
              </a>
              <div class="compare-table-items">
                <table id="product-table" class="product-table">
                  <thead>
                    <tr>
                      <th>
                        <a href="#" class="compare-table-settings">Settings</a>
                      </th>
                      <th>
                        <a href="shop-details.html">Chair Oak Matt Lacquered</a> <span class="remove">remove</span>
                      </th>
                      <th>
                        <a href="shop-details.html">Zunkel Schwarz</a> <span class="remove">remove</span>
                      </th>
                      <th>
                        <a href="shop-details.html">Namaste Vase</a> <span class="remove">remove</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="tr-image">
                      <td class="td-label">Image</td>
                      <td>
                        <a href="shop-details.html">
                          <img width="600" height="600" src={product1} alt="" />
                        </a>
                      </td>
                      <td>
                        <a href="shop-details.html">
                          <img width="600" height="600" src="media/product/1.jpg" alt="" />
                        </a>
                      </td>
                      <td>
                        <a href="shop-details.html">
                          <img width="600" height="600" src="media/product/2.jpg" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr class="tr-sku">
                      <td class="td-label">SKU</td>
                      <td>VN00189</td>
                      <td></td>
                      <td>D1116</td>
                    </tr>
                    <tr class="tr-rating">
                      <td class="td-label">Rating</td>
                      <td>
                        <div class="star-rating">
                          <span style={{width:"80%"}}></span>
                        </div>
                      </td>
                      <td>
                        <div class="star-rating">
                          <span style={{width:"100%"}}></span>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    <tr class="tr-price">
                      <td class="td-label">Price</td>
                      <td><span class="amount">$150.00</span></td>
                      <td><del><span class="amount">$150.00</span></del> <ins><span class="amount">$100.00</span></ins></td>
                      <td><span class="amount">$200.00</span></td>
                    </tr>
                    <tr class="tr-add-to-cart">
                      <td class="td-label">Add to cart</td>
                      <td>
                        <div data-title="Add to cart">
                          <a href="#" class="button">Add to cart</a>
                        </div>
                      </td>
                      <td>
                        <div data-title="Add to cart">
                          <a href="#" class="button">Add to cart</a>
                        </div>
                      </td>
                      <td>
                        <div data-title="Add to cart">
                          <a href="#" class="button">Add to cart</a>
                        </div>
                      </td>
                    </tr>
                    <tr class="tr-description">
                      <td class="td-label">Description</td>
                      <td>Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</td>
                      <td>The EcoSmart Fleece Hoodie full-zip hooded jacket provides medium weight fleece comfort all year around. Feel better in this sweatshirt because Hanes keeps plastic bottles of landfills by using recycled polyester.7.8 ounce fleece sweatshirt made with up to 5 percent polyester created from recycled plastic.</td>
                    </tr>
                    <tr class="tr-content">
                      <td class="td-label">Content</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</td>
                    </tr>
                    <tr class="tr-dimensions">
                      <td class="td-label">Dimensions</td>
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCart