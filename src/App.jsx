import logosm from "./assets/images/logo-sm.png";
import logodark from "./assets/images/logo-dark.png";
import favicon from "./assets/images/favicon.ico";
import user01 from "./assets/images/users/user-1.jpg";
import user02 from "./assets/images/users/user-2.jpg";
import user04 from "./assets/images/users/user-4.jpg";
import usflag from "./assets/images/flags/us_flag.jpg";
import frenchflag from "./assets/images/flags/french_flag.jpg";
import italyflag from "./assets/images/flags/italy_flag.jpg";
import russiaflag from "./assets/images/flags/russia_flag.jpg";
import spainflag from "./assets/images/flags/spain_flag.jpg";
import primg01 from "./assets/images/products/img-1.png";
import primg02 from "./assets/images/products/img-2.png";
import primg03 from "./assets/images/products/img-3.png";
import primg04 from "./assets/images/products/img-4.png";
import primg05 from "./assets/images/products/img-5.png";
import primg06 from "./assets/images/products/img-6.png";
import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
// import {VectorMap} from 'react-jvectormap'
import "./assets/css/text.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icons.css";
import "./assets/css/metismenu.min.css";
import "./assets/css/style.css";
import Chart from "react-apexcharts";
import {VectorMap} from '@react-jvectormap/core';
import worldMill from '@react-jvectormap/world/dist/worldMill.json';
import "./assets/plugins/jvectormap/jquery-jvectormap-2.0.2.css";
function App() {
  const [sidemenudropdown, setsidemenudropdown] = useState(0);
  const [submenudropdown, setsubmenudropdown] = useState(0);
  const [topdropdown, settopdropdown] = useState(0);
  useEffect(() => {
    setsubmenudropdown(0);
    settopdropdown(0);
  }, [sidemenudropdown]);
  var dash_spark_1 = {
    height: 80,
    options: {
      chart: { type: "area", height: 80, sparkline: { enabled: !0 } },
      sparkline: { enabled: !0 },
      stroke: { curve: "smooth", width: 2 },
      fill: { opacity: 0.05 },
      yaxis: { min: 0 },
      colors: ["#fbb624"],
    },

    series: [
      { data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6] },
    ],
  };
  var apex_column1 = {
   
    options: {
      chart: {
    height: 80,
    animations: { enabled: !1 },
    sparkline: { enabled: !0 },
    type: "bar",
  },
  plotOptions: {
    bar: { horizontal: !1, endingShape: "rounded", columnWidth: "40%" },
  },
  dataLabels: { enabled: !1 },
  stroke: { show: !0, width: 2, colors: ["transparent"] },
  colors: ["#1ecab8"],
  xaxis: {
    categories: [
      "1-Jan",
      "2-Jan",
      "3-Jan",
      "4-Jan",
      "5-Jan",
      "6-Jan",
      "7-Jan",
      "8-Jan",
      "9-Jan",
      "10-Jan",
      "11-Jan",
      "12-Jan",
      "13-Jan",
      "14-Jan",
      "15-Jan",
      "16-Jan",
      "17-Jan",
      "18-Jan",
      "19-Jan",
      "20-Jan",
      "21-Jan",
      "22-Jan",
      "23-Jan",
      "24-Jan",
      "25-Jan",
      "26-Jan",
      "27-Jan",
      "28-Jan",
      "29-Jan",
      "30-Jan",
      "31-Jan",
    ],
    crosshairs: { show: !1 },
  },
  fill: { opacity: 0.5 },
  tooltip: {
    y: {
      formatter: function (a) {
        return "$ " + a + " thousands";
      },
    },
  },
    },

    series: [
    {
      name: "Revenue",
      data: [
        50, 60, 70, 80, 90, 100, 95, 85, 75, 65, 55, 65, 75, 85, 95, 105, 80,
        70, 60, 50, 40, 30, 45, 55, 65, 75, 85, 95, 100, 80, 60,
      ],
    },
  ],
  };
  var d1_radialBarMap ={
    height: 180,
    options : {
  chart: { height: 180, type: "radialBar" },
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      hollow: { margin: 0, size: "60%", background: "#293450" },
      track: {
        dropShadow: { enabled: !0, top: 2, left: 0, blur: 4, opacity: 0.15 },
      },
      dataLabels: {
        name: { offsetY: -5, color: "#fff", fontSize: "14px" },
        value: { offsetY: 5, color: "#fff", fontSize: "14px", show: !0 },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100],
    },
  },
  stroke: { lineCap: "round" },
  labels: ["Progress"],
},
  series: [67]
  }

var d1_payment={
  height :250,
  options : {
  chart: { height: 250, type: "donut" },
  
  legend: {
    show: !0,
    position: "bottom",
    horizontalAlign: "center",
    verticalAlign: "middle",
    floating: !1,
    fontSize: "14px",
    offsetX: 0,
    offsetY: -13,
  },
  labels: ["Cash", "Online", "Creadit Card"],
  colors: ["#00dd9f", "#f8bc60", "#f65f4d"],
  responsive: [
    {
      breakpoint: 600,
      options: { chart: { height: 240 }, legend: { show: !1 } },
    },
  ],
},

  series: [10, 65, 25]
}


  return (
    <>
      <div>
        <div className="topbar">
          <nav className="navbar-custom">
            <div className="topbar-left">
              <a href="index.html" className="logo">
                <span>
                  <img src={logosm} alt="logo-small" className="logo-sm" />{" "}
                </span>
                <span>
                  <img src={logodark} alt="logo-large" className="logo-lg" />
                </span>
              </a>
            </div>
            <ul className="list-unstyled topbar-nav float-right mb-0">
              <li className={`dropdown ${topdropdown === 1 ? "show" : ""}`}>
                <a
                  className="nav-link dropdown-toggle arrow-none waves-light waves-effect"
                  data-toggle="dropdown"
                  onClick={(e) => {
                    e.preventDefault();
                    settopdropdown(topdropdown === 1 ? 0 : 1);
                  }}
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-bell-outline nav-icon"></i>{" "}
                  <span className="badge badge-danger badge-pill noti-icon-badge">
                    2
                  </span>
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-right dropdown-lg ${
                    topdropdown === 1 ? "show" : ""
                  }`}
                >
                  <h6 className="dropdown-item-text">Notifications (258)</h6>
                  <div
                    className="slimScrollDiv"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "auto",
                      height: "374.2px",
                    }}
                  >
                    <div
                      className="slimscroll notification-list"
                      style={{
                        overflow: "hidden",
                        width: "auto",
                        height: "374.2px",
                      }}
                    >
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item active"
                      >
                        <div className="notify-icon bg-success">
                          <i className="mdi mdi-cart-outline"></i>
                        </div>
                        <p className="notify-details">
                          Your order is placed
                          <small className="text-muted">
                            Dummy text of the printing and typesetting industry.
                          </small>
                        </p>
                      </a>{" "}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                      >
                        <div className="notify-icon bg-warning">
                          <i className="mdi mdi-message"></i>
                        </div>
                        <p className="notify-details">
                          New Message received
                          <small className="text-muted">
                            You have 87 unread messages
                          </small>
                        </p>
                      </a>{" "}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                      >
                        <div className="notify-icon bg-info">
                          <i className="mdi mdi-martini"></i>
                        </div>
                        <p className="notify-details">
                          Your item is shipped
                          <small className="text-muted">
                            It is a long established fact that a reader will
                          </small>
                        </p>
                      </a>{" "}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                      >
                        <div className="notify-icon bg-primary">
                          <i className="mdi mdi-cart-outline"></i>
                        </div>
                        <p className="notify-details">
                          Your order is placed
                          <small className="text-muted">
                            Dummy text of the printing and typesetting industry.
                          </small>
                        </p>
                      </a>{" "}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                      >
                        <div className="notify-icon bg-danger">
                          <i className="mdi mdi-message"></i>
                        </div>
                        <p className="notify-details">
                          New Message received
                          <small className="text-muted">
                            You have 87 unread messages
                          </small>
                        </p>
                      </a>
                    </div>
                    <div
                      className="slimScrollBar"
                      style={{
                        background: "rgb(158, 165, 171)",
                        width: "7px",
                        position: "absolute",
                        top: "0px",
                        opacity: "0.4",
                        display: "block",
                        borderRadius: "7px",
                        zIndex: "99",
                        right: "1px",
                      }}
                    ></div>
                    <div
                      className="slimScrollRail"
                      style={{
                        width: "7px",
                        height: "100%",
                        position: "absolute",
                        top: "0px",
                        display: "none",
                        borderRadius: "7px",
                        background: "rgb(51, 51, 51)",
                        opacity: "0.2",
                        zIndex: "90",
                        right: "1px",
                      }}
                    ></div>
                  </div>{" "}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item text-center text-primary"
                  >
                    View all <i className="fi-arrow-right"></i>
                  </a>
                </div>
              </li>
              <li className={`dropdown ${topdropdown === 2 ? "show" : ""}`}>
                <a
                  className="nav-link dropdown-toggle waves-effect waves-light nav-user"
                  data-toggle="dropdown"
                  onClick={(e) => {
                    e.preventDefault();
                    settopdropdown(topdropdown === 2 ? 0 : 2);
                  }}
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <img
                    src={user01}
                    alt="profile-user"
                    className="rounded-circle"
                  />{" "}
                  <span className="ml-1 nav-user-name hidden-sm">
                    <i className="mdi mdi-chevron-down"></i>
                  </span>
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-right ${
                    topdropdown === 2 ? "show" : ""
                  }`}
                >
                  <a className="dropdown-item" href="index.html#">
                    <i className="dripicons-user text-muted mr-2"></i> Profile
                  </a>{" "}
                  <a className="dropdown-item" href="index.html#">
                    <i className="dripicons-wallet text-muted mr-2"></i> My
                    Wallet
                  </a>{" "}
                  <a className="dropdown-item" href="index.html#">
                    <i className="dripicons-gear text-muted mr-2"></i> Settings
                  </a>{" "}
                  <a className="dropdown-item" href="index.html#">
                    <i className="dripicons-lock text-muted mr-2"></i> Lock
                    screen
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="index.html#">
                    <i className="dripicons-exit text-muted mr-2"></i> Logout
                  </a>
                </div>
              </li>
            </ul>
            <ul className="list-unstyled topbar-nav mb-0">
              <li>
                <button
                  onClick={() => document.body.classList.toggle("enlarge-menu")}
                  className="button-menu-mobile nav-link waves-effect waves-light"
                >
                  <i className="mdi mdi-menu nav-icon"></i>
                </button>
              </li>
              <li className="hide-phone app-search">
                <form role="search" className="">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                  />{" "}
                  <a href="index.html">
                    <i className="fas fa-search"></i>
                  </a>
                </form>
              </li>
            </ul>
          </nav>
        </div>
        <div className="page-wrapper-img">
          <div className="page-wrapper-img-inner">
            <div className="sidebar-user media">
              <img
                src={user01}
                alt="user"
                className="rounded-circle img-thumbnail mb-1"
              />{" "}
              <span className="online-icon">
                <i className="mdi mdi-record text-success"></i>
              </span>
              <div className="media-body">
                <h5 className="text-light">Mr. Michael Hill</h5>
                <ul className="list-unstyled list-inline mb-0 mt-2">
                  <li className="list-inline-item">
                    <a href="javascript: void(0);" className="">
                      <i className="mdi mdi-account text-light"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript: void(0);" className="">
                      <i className="mdi mdi-settings text-light"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript: void(0);" className="">
                      <i className="mdi mdi-power text-danger"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box">
                  <div className="float-right align-item-center mt-2">
                    <button className="btn btn-info px-4 align-self-center report-btn">
                      Creat Report
                    </button>
                  </div>
                  <h4 className="page-title mb-2">
                    <i className="mdi mdi-monitor mr-2"></i>Dashboard
                  </h4>
                  <div className="">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Frogetor</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Dashboard 1</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
          <div className="page-wrapper-inner">
            <div className="left-sidenav active">
              <ul className="metismenu left-sidenav-menu in" id="side-nav">
                <li className="menu-title">Main</li>

                <li className={sidemenudropdown === 1 ? "active" : ""}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 1 ? 0 : 1);
                    }}
                    href="javascript: void(0);"
                    className={sidemenudropdown === 1 ? "active" : ""}
                  >
                    <i className="mdi mdi-monitor"></i>
                    <span>Dashboards</span>
                    <span className="badge badge-danger badge-pill float-right">
                      9+
                    </span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 1 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li className="active">
                      <a href="index.html" className="active">
                        Dashboard 1
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="index-3.html">Dashboard 3</a>
                    </li>
                  </ul>
                </li>

                <li className={sidemenudropdown === 2 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 2 ? "active" : ""}
                    href="javascript: void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 2 ? 0 : 2);
                    }}
                  >
                    <i className="mdi mdi-apps"></i>
                    <span>App</span>
                    <span className="menu-arrow">
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 2 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="app-chat.html">
                        <span>Chat</span>
                      </a>
                    </li>
                    <li>
                      <a href="app-calendar.html">
                        <span>Calendar</span>
                      </a>
                    </li>
                    <li className={submenudropdown === 1 ? "active" : ""}>
                      <a
                        className={submenudropdown === 1 ? "active" : ""}
                        href="javascript: void(0);"
                        onClick={(e) => {
                          e.preventDefault();
                          setsubmenudropdown(submenudropdown === 1 ? 0 : 1);
                        }}
                      >
                        ECommerce{" "}
                        <span className="menu-arrow left-has-menu">
                          <i className="mdi mdi-chevron-right"></i>
                        </span>
                      </a>
                      <ul
                        className={`nav-second-level collapse ${
                          submenudropdown === 1 ? "in" : ""
                        }`}
                        aria-expanded="false"
                      >
                        <li>
                          <a href="app-ecommerce-product.html">Product</a>
                        </li>
                        <li>
                          <a href="app-ecommerce-product-list.html">
                            Product List
                          </a>
                        </li>
                        <li>
                          <a href="app-ecommerce-product-detail.html">
                            Product Detail
                          </a>
                        </li>
                        <li>
                          <a href="app-ecommerce-cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="app-ecommerce-checkout.html">Checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="app-contact-list.html">
                        <span>Contact List</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className={sidemenudropdown === 3 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 3 ? "active" : ""}
                    href="javascript: void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 3 ? 0 : 3);
                    }}
                  >
                    <i className="mdi mdi-email-variant"></i>
                    <span>Email</span>
                    <span className="menu-arrow">
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 3 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="email-inbox.html">Inbox</a>
                    </li>
                    <li>
                      <a href="email-read.html">Read Email</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">Components</li>

                <li className={sidemenudropdown === 4 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 4 ? "active" : ""}
                    href="javascript: void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 4 ? 0 : 4);
                    }}
                  >
                    <i className="mdi mdi-cards-playing-outline"></i>
                    <span>UI Elements</span>
                    <span className="menu-arrow">
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 4 ? "in" : ""
                    } `}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="ui-alerts.html">Alerts</a>
                    </li>
                    <li>
                      <a href="ui-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="ui-cards.html">Cards</a>
                    </li>
                    <li>
                      <a href="ui-dropdowns.html">Dropdowns</a>
                    </li>
                    <li>
                      <a href="ui-modals.html">Modals</a>
                    </li>
                    <li>
                      <a href="ui-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="ui-progress.html">Progress</a>
                    </li>
                    <li>
                      <a href="ui-tabs-accordions.html">
                        Tabs &amp; Accordions
                      </a>
                    </li>
                    <li>
                      <a href="ui-tooltips-popovers.html">
                        Tooltips &amp; Popover
                      </a>
                    </li>
                    <li>
                      <a href="ui-carousel.html">Carousel</a>
                    </li>
                    <li>
                      <a href="ui-pagination.html">Pagination</a>
                    </li>
                    <li>
                      <a href="ui-grid.html">Grid System</a>
                    </li>
                    <li>
                      <a href="ui-scrollspy.html">Scrollspy</a>
                    </li>
                    <li>
                      <a href="ui-spinners.html">Spinners</a>
                    </li>
                    <li>
                      <a href="ui-toasts.html">Toasts</a>
                    </li>

                    <li className={sidemenudropdown === 5 ? "active" : ""}>
                      <a
                        className={sidemenudropdown === 5 ? "active" : ""}
                        href="javascript: void(0);"
                        onClick={(e) => {
                          e.preventDefault();
                          setsidemenudropdown(sidemenudropdown === 5 ? 0 : 5);
                        }}
                      >
                        Other Components{" "}
                        <span className="menu-arrow left-has-menu">
                          <i className="mdi mdi-chevron-right"></i>
                        </span>
                      </a>
                      <ul
                        className={`nav-second-level collapse ${
                          sidemenudropdown === 5 ? "in" : ""
                        }`}
                        aria-expanded="false"
                      >
                        <li>
                          <a href="ui-other-animation.html">Animation</a>
                        </li>
                        <li>
                          <a href="ui-other-avatar.html">Avatar</a>
                        </li>
                        <li>
                          <a href="ui-other-clipboard.html">Clip Board</a>
                        </li>
                        <li>
                          <a href="ui-other-files.html">File Meneger</a>
                        </li>
                        <li>
                          <a href="ui-other-ribbons.html">Ribbons</a>
                        </li>
                        <li>
                          <a href="ui-other-dragula.html">
                            <span>Dragula</span>
                          </a>
                        </li>
                        <li>
                          <a href="ui-other-check-radio.html">
                            <span>Check &amp; Radio Buttons</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className={sidemenudropdown === 6 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 6 ? "active" : ""}
                    href="javascript: void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 6 ? 0 : 6);
                    }}
                  >
                    <i className="mdi mdi-buffer"></i>
                    <span>Advanced UI</span>
                    <span className="menu-arrow">
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 6 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="advanced-rangeslider.html">Range Slider</a>
                    </li>
                    <li>
                      <a href="advanced-sweetalerts.html">Sweet Alerts</a>
                    </li>
                    <li>
                      <a href="advanced-nestable.html">Nestable List</a>
                    </li>
                    <li>
                      <a href="advanced-ratings.html">Ratings</a>
                    </li>
                    <li>
                      <a href="advanced-highlight.html">Highlight</a>
                    </li>
                    <li>
                      <a href="advanced-session.html">Session Timeout</a>
                    </li>
                    <li>
                      <a href="advanced-idle-timer.html">Idle Timer</a>
                    </li>
                  </ul>
                </li>

                <li className={sidemenudropdown === 7 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 7 ? "active" : ""}
                    href="javascript: void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 7 ? 0 : 7);
                    }}
                  >
                    <i className="mdi mdi-clipboard-outline"></i>
                    <span className="badge badge-info float-right">8</span>
                    <span>Forms</span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 7 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="forms-elements.html">Basic Elements</a>
                    </li>
                    <li>
                      <a href="forms-advanced.html">Advance Elements</a>
                    </li>
                    <li>
                      <a href="forms-validation.html">Validation</a>
                    </li>
                    <li>
                      <a href="forms-wizard.html">Wizard</a>
                    </li>
                    <li>
                      <a href="forms-editors.html">Editors</a>
                    </li>
                    <li>
                      <a href="forms-repeater.html">Repeater</a>
                    </li>
                    <li>
                      <a href="forms-x-editable.html">X Editable</a>
                    </li>
                    <li>
                      <a href="forms-uploads.html">File Upload</a>
                    </li>
                    <li>
                      <a href="forms-img-crop.html">Image Crop</a>
                    </li>
                  </ul>
                </li>

                <li className={sidemenudropdown === 8 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 8 ? "active" : ""}
                    href="javascript: void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 8 ? 0 : 8);
                    }}
                  >
                    <i className="mdi mdi-poll"></i>
                    <span>Charts</span>
                    <span className="menu-arrow">
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 8 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="charts-apex.html">Apex</a>
                    </li>
                    <li>
                      <a href="charts-morris.html">Morris</a>
                    </li>
                    <li>
                      <a href="charts-chartist.html">Chartist</a>
                    </li>
                    <li>
                      <a href="charts-flot.html">Flot</a>
                    </li>
                    <li>
                      <a href="charts-peity.html">Peity</a>
                    </li>
                    <li>
                      <a href="charts-chartjs.html">Chartjs</a>
                    </li>
                    <li>
                      <a href="charts-sparkline.html">Sparkline</a>
                    </li>
                    <li>
                      <a href="charts-knob.html">Jquery Knob</a>
                    </li>
                    <li>
                      <a href="charts-justgage.html">JustGage</a>
                    </li>
                  </ul>
                </li>

                <li className={sidemenudropdown === 9 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 9 ? "active" : ""}
                    href="javascript: void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 9 ? 0 : 9);
                    }}
                  >
                    <i className="mdi mdi-format-list-bulleted-type"></i>
                    <span>Tables</span>
                    <span className="menu-arrow">
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 9 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="tables-basic.html">Basic</a>
                    </li>
                    <li>
                      <a href="tables-datatable.html">Datatables</a>
                    </li>
                    <li>
                      <a href="tables-responsive.html">Responsive</a>
                    </li>
                    <li>
                      <a href="tables-footable.html">Footable</a>
                    </li>
                    <li>
                      <a href="tables-jsgrid.html">Jsgrid</a>
                    </li>
                    <li>
                      <a href="tables-editable.html">Editable</a>
                    </li>
                  </ul>
                </li>

                <li className={sidemenudropdown === 10 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 10 ? "active" : ""}
                    href="javascript: void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 10 ? 0 : 10);
                    }}
                  >
                    <i className="mdi mdi-diamond-stone"></i>
                    <span>Icons</span>
                    <span className="menu-arrow">
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 10 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="icons-materialdesign.html">Material Design</a>
                    </li>
                    <li>
                      <a href="icons-dripicons.html">Dripicons</a>
                    </li>
                    <li>
                      <a href="icons-fontawesome.html">Font awesome</a>
                    </li>
                    <li>
                      <a href="icons-themify.html">Themify</a>
                    </li>
                    <li>
                      <a href="icons-typicons.html">Typicons</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">More</li>

                <li className={sidemenudropdown === 11 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 11 ? "active" : ""}
                    href="javascript: void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 11 ? 0 : 11);
                    }}
                  >
                    <i className="mdi mdi-map"></i>
                    <span>Maps</span>
                    <span className="menu-arrow">
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 11 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="maps-google.html">Google Maps</a>
                    </li>
                    <li>
                      <a href="maps-vector.html">Vector Maps</a>
                    </li>
                  </ul>
                </li>

                <li className={sidemenudropdown === 12 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 12 ? "active" : ""}
                    href="javascript: void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 12 ? 0 : 12);
                    }}
                  >
                    <i className="mdi mdi-lock-outline"></i>
                    <span>Authentication</span>
                    <span className="menu-arrow">
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 12 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="auth-login.html">Login</a>
                    </li>
                    <li>
                      <a href="auth-register.html">Register</a>
                    </li>
                    <li>
                      <a href="auth-recoverpw.html">Recover Password</a>
                    </li>
                    <li>
                      <a href="auth-lock-screen.html">Lock Screen</a>
                    </li>
                    <li>
                      <a href="auth-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="auth-500.html">Error 500</a>
                    </li>
                  </ul>
                </li>

                <li className={sidemenudropdown === 13 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 13 ? "active" : ""}
                    href="javascript: void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 13 ? 0 : 13);
                    }}
                  >
                    <i className="mdi mdi-book-open-page-variant"></i>
                    <span>Pages</span>
                    <span className="badge badge-success float-right">Hot</span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 13 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="page-tour.html">Tour</a>
                    </li>
                    <li>
                      <a href="page-timeline.html">Timeline</a>
                    </li>
                    <li>
                      <a href="page-invoice.html">Invoice</a>
                    </li>
                    <li>
                      <a href="page-treeview.html">Treeview</a>
                    </li>
                    <li>
                      <a href="page-profile.html">Profile</a>
                    </li>
                    <li>
                      <a href="page-starter.html">Starter Page</a>
                    </li>
                    <li>
                      <a href="page-pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="page-blogs.html">
                        <span>Blogs</span>
                      </a>
                    </li>
                    <li>
                      <a href="page-faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="page-gallery.html">Gallery</a>
                    </li>
                  </ul>
                </li>

                <li className={sidemenudropdown === 14 ? "active" : ""}>
                  <a
                    className={sidemenudropdown === 14 ? "active" : ""}
                    href="javascript:void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      setsidemenudropdown(sidemenudropdown === 14 ? 0 : 14);
                    }}
                  >
                    <i className="mdi mdi-contact-mail"></i>
                    <span>Email Templates</span>
                    <span className="menu-arrow">
                      <i className="mdi mdi-chevron-right"></i>
                    </span>
                  </a>
                  <ul
                    className={`nav-second-level collapse ${
                      sidemenudropdown === 14 ? "in" : ""
                    }`}
                    aria-expanded="false"
                  >
                    <li>
                      <a href="email-templates-basic.html">
                        Basic Action Email
                      </a>
                    </li>
                    <li>
                      <a href="email-templates-alert.html">Alert Email</a>
                    </li>
                    <li>
                      <a href="email-templates-billing.html">Billing Email</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="page-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card p-0">
                      <div className="card-body mb-0">
                        <div className="row">
                          <div className="col-8 align-self-center">
                            <div className="">
                              <h4 className="mt-0 header-title">Total Sales</h4>
                              <h2 className="mt-0 font-weight-bold text-dark">
                                40k
                              </h2>
                              <p className="mb-0 text-muted">
                                <span className="text-success">
                                  <i className="mdi mdi-arrow-up"></i>14.5%
                                </span>{" "}
                                Up From Last Week
                              </p>
                            </div>
                          </div>
                          <div className="col-4 align-self-center">
                            <div className="icon-info text-right">
                              <i className="dripicons-cart bg-soft-warning"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body overflow-hidden p-0">
                        <div className="d-flex mb-0 h-100 dash-info-box">
                          <div className="w-100">
                            <div
                              className="apexchart-wrapper"
                              style={{ position: "relative" }}
                            >
                              {/* <div id="dash_spark_1" className="chart-gutters" style={{minHeight: "80px"}}>
                         
                        </div> */}
                              <Chart
                                options={dash_spark_1.options}
                                series={dash_spark_1.series}
                                type="area"
                                height={80}
                                className="chart-gutters"
                              />
                              <div className="resize-triggers">
                                <div className="expand-trigger">
                                  <div
                                    style={{ width: "338px", height: "81px" }}
                                  ></div>
                                </div>
                                <div className="contract-trigger"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card p-0">
                      <div className="card-body mb-0">
                        <div className="row">
                          <div className="col-8 align-self-center">
                            <div className="">
                              <h4 className="mt-0 header-title">
                                Total Revenue
                              </h4>
                              <h2 className="mt-0 font-weight-bold text-dark">
                                $9090
                              </h2>
                              <p className="mb-0 text-muted">
                                <span className="text-success">
                                  <i className="mdi mdi-arrow-up"></i>14.5%
                                </span>{" "}
                                Up from yesterday
                              </p>
                            </div>
                          </div>
                          <div className="col-4 align-self-center">
                            <div className="icon-info text-right">
                              <i className="dripicons-wallet bg-soft-success"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body overflow-hidden p-0">
                        <div className="d-flex mb-0 h-100 dash-info-box">
                          <div className="w-100">
                            <div
                              className="apexchart-wrapper"
                              style={{ position: "relative" }}
                            >
                              <Chart
                                options={apex_column1.options}
                                series={apex_column1.series}
                                type="bar"
                                height={80}
                                className="chart-gutters"
                              />
                              <div className="resize-triggers">
                                <div className="expand-trigger">
                                  <div
                                    style={{ width: "338px", height: "81px" }}
                                  ></div>
                                </div>
                                <div className="contract-trigger"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card carousel-bg-img p-0">
                      <div className="card-body dash-info-carousel mb-0">
                        {/* <div
                          id="carouselExampleControls"
                          className="carousel slide pointer-event"
                          data-ride="carousel"
                        > */}
                        <Carousel className="pointer-event" controls={true} indicators={false}>

                        <Carousel.Item>
                          <div className="row">
                                <div className="col-12 align-self-center">
                                  <div className="text-center">
                                    <h4 className="mt-0 header-title text-left">
                                      Average Product Price
                                    </h4>
                                    <div className="icon-info my-3">
                                      <i className="dripicons-jewel bg-soft-pink"></i>
                                    </div>
                                    <h2 className="mt-0 font-weight-bold text-dark">
                                      $1280.00
                                    </h2>
                                    <p className="mb-1 text-muted">
                                      <span className="text-success">
                                        <i className="mdi mdi-arrow-up"></i>
                                        35.5%
                                      </span>{" "}
                                      Last 100 Subscriptions
                                    </p>
                                  </div>
                                </div>
                              </div>
                        </Carousel.Item>
                              <Carousel.Item>
                              <div className="row">
                                <div className="col-12 align-self-center">
                                  <div className="text-center">
                                    <h4 className="mt-0 header-title text-left">
                                      New Orders
                                    </h4>
                                    <div className="icon-info my-3">
                                      <i className="dripicons-basket bg-soft-info"></i>
                                    </div>
                                    <h2 className="mt-0 font-weight-bold text-dark">
                                      1824
                                    </h2>
                                    <p className="mb-1 text-muted">
                                      <span className="text-danger">
                                        <i className="mdi mdi-arrow-down"></i>
                                        1.5%
                                      </span>{" "}
                                      Down From Last week
                                    </p>
                                  </div>
                                </div>
                              </div>
                              </Carousel.Item>
                              <Carousel.Item>
                                  <div className="row">
                                <div className="col-12 align-self-center">
                                  <div className="text-center">
                                    <h4 className="mt-0 header-title text-left">
                                      Order Returns
                                    </h4>
                                    <div className="icon-info my-3">
                                      <i className="dripicons-swap bg-soft-primary"></i>
                                    </div>
                                    <h2 className="mt-0 font-weight-bold text-dark">
                                      11.1%
                                    </h2>
                                    <p className="mb-1 text-muted">
                                      <span className="text-success">
                                        <i className="mdi mdi-arrow-up"></i>
                                        11.1%
                                      </span>{" "}
                                      Up from Last Month
                                    </p>
                                  </div>
                                </div>
                              </div>
                              </Carousel.Item>
                              <Carousel.Item>
                                <div className="row">
                                <div className="col-12 align-self-center">
                                  <div className="text-center">
                                    <h4 className="mt-0 header-title text-left">
                                      Total Brands
                                    </h4>
                                    <div className="icon-info my-3">
                                      <i className="dripicons-store bg-soft-warning"></i>
                                    </div>
                                    <h2 className="mt-0 font-weight-bold text-dark">
                                      92
                                    </h2>
                                    <p className="mb-1 text-muted">
                                      All International Brands
                                    </p>
                                  </div>
                                </div>
                              </div>
                              </Carousel.Item>
                              <Carousel.Item>
                                <div className="row">
                                <div className="col-12 align-self-center">
                                  <div className="text-center">
                                    <h4 className="mt-0 header-title text-left">
                                      Total Visits
                                    </h4>
                                    <div className="icon-info my-3">
                                      <i className="dripicons-user-group bg-soft-success"></i>
                                    </div>
                                    <h2 className="mt-0 font-weight-bold text-dark">
                                      35k
                                    </h2>
                                    <p className="mb-1 text-muted">
                                      <span className="text-success">
                                        <i className="mdi mdi-arrow-up"></i>
                                        11.1%
                                      </span>{" "}
                                      Up from yesterday
                                    </p>
                                  </div>
                                </div>
                              </div>
                              </Carousel.Item>
                          
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row p-0">
                  <div className="col-12">
                    <div className="card p-0">
                      <div className="card-body">
                        <h4 className="mt-0 header-title">
                          World Wide Customers
                        </h4>
                        <div className="row p-0">
                          <div className="col-md-4">
                            <div className="mt-2">
                              <img
                                src={usflag}
                                alt=""
                                className="mb-2"
                                height="30"
                              />
                              <h5 className="mb-3">
                                Our most customers in America

                                <span className="badge badge-primary ml-1">
                                  March 2019
                                </span>
                              </h5>
                              <p className="font-13 text-muted mb-0">
                                But who has any right to find fault with a man
                                who chooses to enjoy a pleasure that has no.
                              </p>
                              <div
                                className="apexchart-wrapper"
                                style={{ position: "relative" }}
                              >
                                <Chart
                                options={d1_radialBarMap.options}
                                series={d1_radialBarMap.series}
                                type="radialBar"
                                height={180}
                                className="chart-gutters"
                              />
                                <div className="resize-triggers">
                                  <div className="expand-trigger">
                                    <div
                                      style={{
                                        width: "325px",
                                        height: "186px",
                                      }}
                                    ></div>
                                  </div>
                                  <div className="contract-trigger"></div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-4">
                              <div className="col-md-6">
                                <p className="mb-2 text-muted font-13">
                                  Domestic Customers
                                </p>
                                <h3 className="mt-0">
                                  <img
                                    src={usflag}
                                    alt=""
                                    className="mr-2 thumb-xs rounded-circle"
                                  />
                                  2.8k
                                </h3>
                                <div
                                  className="progress mt-2 mx-auto"
                                  style={{ height: "3px" }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{
                                      width: "75%",
                                      ariaValuenow: "75",
                                      ariaValuemin: "0",
                                      ariaValuemax: "100",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <p className="mb-2 text-muted font-13">
                                  International Customers
                                </p>
                                <h3 className="mt-0">
                                  <i className="fas fa-globe text-muted mr-2 font-30"></i>
                                  1.9k
                                </h3>
                                <div
                                  className="progress mt-2 mx-auto"
                                  style={{ height: "3px" }}
                                >
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{
                                      width: "55%",
                                      ariaValuenow: "55",
                                      ariaValuemin: "0",
                                      ariaValuemax: "100",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <VectorMap className="dashboard-map" map={worldMill} {...{
    
    scaleColors: ["#eff0f1", "#eff0f1"],
    normalizeFunction: "polynomial",
    hoverOpacity: 0.7,
    hoverColor: !1,
    regionStyle: { initial: { fill: "#eff0f1" } },
    markerStyle: {
      initial: { stroke: "transparent" },
      hover: { stroke: "rgba(112, 112, 112, 0.30)" },
    },
    backgroundColor: "transparent",
    markers: [
      {
        latLng: [37.09024, -95.712891],
        name: "USA",
        style: { fill: "#f93b7a" },
      },
      {
        latLng: [71.70694, -42.604301],
        name: "Greenland",
        style: { fill: "#f0961f" },
      },
      {
        latLng: [-21.943369, 123.102198],
        name: "Australia",
        style: { fill: "#5766da" },
      },
    ],
    series: {
      regions: [
        {
          values: { AU: "#c4c9f2", US: "#fdcede", GL: "#fae1be" },
          attribute: "fill",
        },
      ],
    },
  }}></VectorMap>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="card p-0">
                      <div className="card-body new-user order-list">
                        <h4 className="header-title mt-0 mb-3">Order List</h4>
                        <div className="table-responsive">
                          <table className="table table-hover mb-0">
                            <thead className="thead-light">
                              <tr>
                                <th className="border-top-0">Product</th>
                                <th className="border-top-0">Pro Name</th>
                                <th className="border-top-0">Country</th>
                                <th className="border-top-0">
                                  Order Date/Time
                                </th>
                                <th className="border-top-0">Pcs.</th>
                                <th className="border-top-0">Amount ($)</th>
                                <th className="border-top-0">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img className="" src={primg01} alt="user" />
                                </td>
                                <td>Beg</td>
                                <td>
                                  <img
                                    src={usflag}
                                    alt=""
                                    className="img-flag thumb-xxs rounded-circle"
                                  />
                                </td>
                                <td>3/03/2019 4:29 PM</td>
                                <td>200</td>
                                <td>$750</td>
                                <td>
                                  <span className="badge badge-boxed badge-soft-success">
                                    Shipped
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img className="" src={primg02} alt="user" />
                                </td>
                                <td>Watch</td>
                                <td>
                                  <img
                                    src={frenchflag}
                                    alt=""
                                    className="img-flag thumb-xxs rounded-circle"
                                  />
                                </td>
                                <td>13/03/2019 1:09 PM</td>
                                <td>180</td>
                                <td>$970</td>
                                <td>
                                  <span className="badge badge-boxed badge-soft-danger">
                                    Delivered
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img className="" src={primg03} alt="user" />
                                </td>
                                <td>Headphone</td>
                                <td>
                                  <img
                                    src={spainflag}
                                    alt=""
                                    className="img-flag thumb-xxs rounded-circle"
                                  />
                                </td>
                                <td>22/03/2019 12:09 PM</td>
                                <td>30</td>
                                <td>$2800</td>
                                <td>
                                  <span className="badge badge-boxed badge-soft-warning">
                                    Pending
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img className="" src={primg04} alt="user" />
                                </td>
                                <td>Purse</td>
                                <td>
                                  <img
                                    src={russiaflag}
                                    alt=""
                                    className="img-flag thumb-xxs rounded-circle"
                                  />
                                </td>
                                <td>14/03/2019 8:27 PM</td>
                                <td>100</td>
                                <td>$520</td>
                                <td>
                                  <span className="badge badge-boxed badge-soft-success">
                                    Shipped
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img className="" src={primg05} alt="user" />
                                </td>
                                <td>Shoe</td>
                                <td>
                                  <img
                                    src={italyflag}
                                    alt=""
                                    className="img-flag thumb-xxs rounded-circle"
                                  />
                                </td>
                                <td>18/03/2019 5:09 PM</td>
                                <td>100</td>
                                <td>$1150</td>
                                <td>
                                  <span className="badge badge-boxed badge-soft-warning">
                                    Pending
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img className="" src={primg06} alt="user" />
                                </td>
                                <td>Boll</td>
                                <td>
                                  <img
                                    src={usflag}
                                    alt=""
                                    className="img-flag thumb-xxs rounded-circle"
                                  />
                                </td>
                                <td>30/03/2019 4:29 PM</td>
                                <td>140</td>
                                <td>$ 650</td>
                                <td>
                                  <span className="badge badge-boxed badge-soft-success">
                                    Shipped
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card overflow-hidden p-0">
                      <div className="card-body bg-gradient1">
                        <div className="">
                          <div className="card-icon">
                            <i className="far fa-user"></i>
                          </div>
                          <h2 className="font-weight-bold text-white">10</h2>
                          <p className="text-white mb-0 font-16">
                            Top 10 Best Saler This Month
                          </p>
                        </div>
                      </div>
                      <div className="card-body dash-info-carousel">
                        {/* <div
                          id="carousel_best_saler"
                          className="carousel slide pointer-event"
                          data-ride="carousel"
                        >
                          <div className="carousel-inner"> */}
                          <Carousel className="carousel slide pointer-event" controls={true} indicators={false}>
                            <Carousel.Item>
                              <div className="text-center">
                                <img
                                  src={user04}
                                  alt="user"
                                  className="rounded-circle thumb-xl img-thumbnail mb-1"
                                />
                                <h5>Nancy Flanary</h5>
                                <p className="font-12 text-muted">
                                  <i className="fas fa-globe mr-2"></i>USA
                                  Dealer
                                </p>
                                <p className="mb-0 text-muted">
                                  Contrary to popular belief, Lorem Ipsum is not
                                  simply random text. It has roots in a piece of
                                  classNameical Latin.
                                </p>
                                <div className="mt-2 align-item-center">
                                  <h5 className="font-20 d-inline-block mb-0 mr-3 align-self-center">
                                    $34800.00
                                  </h5>
                                  <a className="btn btn-sm btn-primary text-light mb-2">
                                    <i className="mdi mdi-email-outline mr-1"></i>
                                    Message
                                  </a>
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="text-center">
                                <img
                                  src={user02}
                                  alt="user"
                                  className="rounded-circle thumb-xl img-thumbnail mb-1"
                                />
                                <h5>Donald Gardner</h5>
                                <p className="font-12 text-muted">
                                  <i className="fas fa-globe mr-2"></i>Russia
                                  Dealer
                                </p>
                                <p className="mb-0 text-muted">
                                  Contrary to popular belief, Lorem Ipsum is not
                                  simply random text. It has roots in a piece of
                                  classNameical Latin.
                                </p>
                                <div className="mt-2 align-item-center">
                                  <h5 className="font-20 d-inline-block mb-0 mr-3 align-self-center">
                                    $31200.00
                                  </h5>
                                  <a className="btn btn-sm btn-primary text-light mb-2">
                                    <i className="mdi mdi-email-outline mr-1"></i>
                                    Message
                                  </a>
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="text-center">
                                <img
                                  src={user01}
                                  alt="user"
                                  className="rounded-circle thumb-xl img-thumbnail mb-1"
                                />
                                <h5>Matt Rosales</h5>
                                <p className="font-12 text-muted">
                                  <i className="fas fa-globe mr-2"></i>Spain
                                  Dealer
                                </p>
                                <p className="mb-0 text-muted">
                                  Contrary to popular belief, Lorem Ipsum is not
                                  simply random text. It has roots in a piece of
                                  classNameical Latin.
                                </p>
                                <div className="mt-2 align-item-center">
                                  <h5 className="font-20 d-inline-block mb-0 mr-3 align-self-center">
                                    $29200.00
                                  </h5>
                                  <a className="btn btn-sm btn-primary text-light mb-2">
                                    <i className="mdi mdi-email-outline mr-1"></i>
                                    Message
                                  </a>
                                </div>
                              </div>
                            </Carousel.Item>
                          </Carousel>
                          {/* </div> */}
                          {/* <a
                            className="carousel-control-prev"
                            href="index.html#carousel_best_saler"
                            role="button"
                            data-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>{" "}
                            <span className="sr-only">Previous</span>{" "}
                          </a>
                          <a
                            className="carousel-control-next"
                            href="index.html#carousel_best_saler"
                            role="button"
                            data-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>{" "}
                            <span className="sr-only">Next</span>
                          </a> */}
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card overflow-hidden p-0">
                      <div className="card-body bg-gradient3">
                        <div className="">
                          <div className="card-icon">
                            <i className="far fa-smile"></i>
                          </div>
                          <h2 className="font-weight-bold text-white">58</h2>
                          <p className="text-white mb-0 font-16">
                            Stores Very Good Review
                          </p>
                        </div>
                      </div>
                      <div className="card-body dash-info-carousel">
                        {/* <div
                          id="carousel_review"
                          className="carousel slide pointer-event"
                          data-ride="carousel"
                        >
                          <div className="carousel-inner"> */}
                          <Carousel className="carousel slide pointer-event" controls={true} indicators={false}>
                            <Carousel.Item>
                              <div className="media">
                                <img
                                  src={usflag}
                                  className="mr-2 thumb-xs rounded-circle"
                                  alt="..."
                                />
                                <div className="media-body align-self-center">
                                  <h6 className="m-0">USA Store</h6>
                                </div>
                              </div>
                              <div className="text-center">
                                <p className="review-data mb-0">
                                  4.8<span>/ 5.0</span>
                                </p>
                                <p className="px-4 py-1 bg-soft-success d-inline-block rounded">
                                  Very Good
                                </p>
                                <ul className="list-inline mb-1">
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                </ul>
                                <p className="mb-1 text-muted">
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration in some form, by injected
                                  humour, or randomised.
                                </p>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="media">
                                <img
                                  src={spainflag}
                                  className="mr-2 thumb-xs rounded-circle"
                                  alt="..."
                                />
                                <div className="media-body align-self-center">
                                  <h6 className="m-0">Spain Store</h6>
                                </div>
                              </div>
                              <div className="text-center">
                                <p className="review-data mb-0">
                                  4.6<span>/ 5.0</span>
                                </p>
                                <p className="px-4 py-1 bg-soft-success d-inline-block rounded">
                                  Very Good
                                </p>
                                <ul className="list-inline mb-1">
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                </ul>
                                <p className="mb-1 text-muted">
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration in some form, by injected
                                  humour, or randomised.
                                </p>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="media">
                                <img
                                  src={russiaflag}
                                  className="mr-2 thumb-xs rounded-circle"
                                  alt="..."
                                />
                                <div className="media-body align-self-center">
                                  <h6 className="m-0">Russia Store</h6>
                                </div>
                              </div>
                              <div className="text-center">
                                <p className="review-data mb-0">
                                  5.0<span>/ 5.0</span>
                                </p>
                                <p className="px-4 py-1 bg-soft-success d-inline-block rounded">
                                  Exellent
                                </p>
                                <ul className="list-inline mb-1">
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                  <li className="list-inline-item mr-0">
                                    <i className="mdi mdi-star text-warning font-16"></i>
                                  </li>
                                </ul>
                                <p className="mb-1 text-muted">
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration in some form, by injected
                                  humour, or randomised.
                                </p>
                              </div>
                            </Carousel.Item>
                          </Carousel>
                          {/* <a
                            className="carousel-control-prev"
                            href="index.html#carousel_review"
                            role="button"
                            data-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>{" "}
                            <span className="sr-only">Previous</span>{" "}
                          </a>
                          <a
                            className="carousel-control-next"
                            href="index.html#carousel_review"
                            role="button"
                            data-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>{" "}
                            <span className="sr-only">Next</span>
                          </a> */}
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card overflow-hidden p-0">
                      <div className="card-body bg-gradient2">
                        <div className="">
                          <div className="card-icon">
                            <i className="fas fa-coins"></i>
                          </div>
                          <h2 className="font-weight-bold text-white">
                            $85750.00
                          </h2>
                          <p className="text-white mb-0 font-16">
                            Total payments
                          </p>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="" style={{ position: "relative" }}>
                          <Chart
                                options={d1_payment.options}
                                series={d1_payment.series}
                                type="donut"
                                height={250}
                                className="apex-charts"
                              />
                          <div className="resize-triggers">
                            <div className="expand-trigger">
                              <div
                                style={{ width: "298px", height: "251px" }}
                              ></div>
                            </div>
                            <div className="contract-trigger"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer text-center text-sm-left">
                © 2019 Frogetor{" "}
                <span className="text-muted d-none d-sm-inline-block float-right">
                  Crafted with <i className="mdi mdi-heart text-danger"></i> by
                  Mannatthemes
                </span>
              </footer>
            </div>
          </div>
        </div>
        {/* <script src="./maindashboard_files/jquery.min.js.download"></script>
  <script src="./maindashboard_files/bootstrap.bundle.min.js.download"></script>
  <script src="./maindashboard_files/metisMenu.min.js.download"></script>
  <script src="./maindashboard_files/waves.min.js.download"></script>
  <script src="./maindashboard_files/jquery.slimscroll.min.js.download"></script>
  <script src="./maindashboard_files/jquery-jvectormap-2.0.2.min.js.download"></script>
  <script src="./maindashboard_files/jquery-jvectormap-world-mill-en.js.download"></script>
  <script src="./maindashboard_files/moment.js.download"></script>
  <script src="./maindashboard_files/apexcharts.min.js.download"></script>
  <script src="./maindashboard_files/irregular-data-series.js.download"></script>
  <script src="./maindashboard_files/series1000.js.download"></script>
  <script src="./maindashboard_files/ohlc.js.download"></script>
  <script src="./maindashboard_files/jquery.dashboard.init.js.download"></script>
  <div className="jvectormap-tip" style="display: none; left: 772.138px; top: 442.512px;">Canada</div>
  <script src="./maindashboard_files/app.js.download"></script>*/}
        <svg
          id="SvgjsSvg1176"
          width="2"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          style={{
            overflow: "hidden",
            top: "-100%",
            left: "-100%",
            position: "absolute",
            opacity: "0",
          }}
        >
          <defs id="SvgjsDefs1177"></defs>
          <polyline id="SvgjsPolyline1178" points="0,0"></polyline>
          <path
            id="SvgjsPath1179"
            d="M-1 80L-1 80C-1 80 32.55882352941177 80 32.55882352941177 80C32.55882352941177 80 54.26470588235294 80 54.26470588235294 80C54.26470588235294 80 75.97058823529412 80 75.97058823529412 80C75.97058823529412 80 97.67647058823529 80 97.67647058823529 80C97.67647058823529 80 119.38235294117646 80 119.38235294117646 80C119.38235294117646 80 141.08823529411765 80 141.08823529411765 80C141.08823529411765 80 162.79411764705884 80 162.79411764705884 80C162.79411764705884 80 184.50000000000003 80 184.50000000000003 80C184.50000000000003 80 206.20588235294122 80 206.20588235294122 80C206.20588235294122 80 227.9117647058824 80 227.9117647058824 80C227.9117647058824 80 249.6176470588236 80 249.6176470588236 80C249.6176470588236 80 271.32352941176475 80 271.32352941176475 80C271.32352941176475 80 293.0294117647059 80 293.0294117647059 80C293.0294117647059 80 314.7352941176471 80 314.7352941176471 80C314.7352941176471 80 336.44117647058823 80 336.44117647058823 80C336.44117647058823 80 358.1470588235294 80 358.1470588235294 80C358.1470588235294 80 358.1470588235294 80 358.1470588235294 80 "
          ></path>
        </svg>
      </div>
    </>
  );
}

export default App;
