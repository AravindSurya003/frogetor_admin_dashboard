function App() {
    const [count, setCount] = useState(0)
    return (
      <>
        <div class="box-layout">
      <header class="sticky sticky-active">
        <nav
          class="navbar navbar-expand-lg header-light bg-white disable-fixed"
        >
          <div class="container-fluid">
            <div class="col-auto col-xl-3 col-lg-2 me-lg-0 me-auto">
              <a class="navbar-brand" href="demo-corporate.html">
                <img
                  src="images/demo-corporate-logo-black.png"
                  data-at2x="images/demo-corporate-logo-black.png"
                  alt=""
                  class="default-logo"
                  width="142"
                  height="28"
                />
                <img
                  src="images/demo-corporate-logo-black.png"
                  data-at2x="images/demo-corporate-logo-black.png"
                  alt=""
                  class="alt-logo"
                  width="0"
                  height="0"
                />
                <img
                  src="images/demo-corporate-logo-black.png"
                  data-at2x="images/demo-corporate-logo-black.png"
                  alt=""
                  class="mobile-logo"
                  width="0"
                  height="0"
                />
              </a>
            </div>
            <div class="col-auto col-xl-6 col-lg-8 menu-order position-static">
              <button
                class="navbar-toggler float-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="#navbarNav-clone"
                aria-label="Toggle navigation"
                data-target="#navbarNav-clone"
              >
                <span class="navbar-toggler-line"></span>
                <span class="navbar-toggler-line"></span>
                <span class="navbar-toggler-line"></span>
                <span class="navbar-toggler-line"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a href="demo-corporate.html" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="demo-corporate-about.html" class="nav-link"
                      >About</a
                    >
                  </li>
                  <li class="nav-item dropdown dropdown-with-icon-style02">
                    <a href="demo-corporate-services.html" class="nav-link"
                      >Services</a
                    >
                    <i
                      class="fa-solid fa-angle-down dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a href="demo-corporate-services-details.html"
                          ><i class="line-icon-Medal-2"></i>Business planning</a
                        >
                      </li>
                      <li>
                        <a href="demo-corporate-services-details.html"
                          ><i class="line-icon-Archery-2"></i>Market research</a
                        >
                      </li>
                      <li>
                        <a href="demo-corporate-services-details.html"
                          ><i class="line-icon-Financial"></i>Business
                          consulting</a
                        >
                      </li>
                      <li>
                        <a href="demo-corporate-services-details.html"
                          ><i class="line-icon-Money-Bag"></i>Audience
                          analysis</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      href="demo-corporate-customer-stories.html"
                      class="nav-link"
                      >Testimonials</a
                    >
                  </li>
                  <li class="nav-item">
                    <a href="demo-corporate-pricing.html" class="nav-link"
                      >Pricing</a
                    >
                  </li>
                  <li class="nav-item">
                    <a href="demo-corporate-blog.html" class="nav-link">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a href="demo-corporate-contact.html" class="nav-link"
                      >Contact</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-auto col-xl-3 col-lg-2 text-end md-pe-0">
              <div class="header-icon">
                <div class="header-search-icon icon">
                  <a href="#" class="search-form-icon header-search-form"
                    ><i class="feather icon-feather-search"></i
                  ></a>

                  <div class="search-form-wrapper">
                    <button title="Close" type="button" class="search-close">
                      ×
                    </button>
                    <form
                      id="search-form"
                      role="search"
                      method="get"
                      class="search-form text-left"
                      action="search-result.html"
                    >
                      <div class="search-form-box">
                        <h2
                          class="text-dark-gray text-center fw-600 mb-4 ls-minus-1px"
                        >
                          What are you looking for?
                        </h2>
                        <input
                          class="search-input"
                          id="search-form-input5e219ef164995"
                          placeholder="Enter your keywords..."
                          name="s"
                          value=""
                          type="text"
                          autocomplete="off"
                        />
                        <button type="submit" class="search-button">
                          <i
                            class="feather icon-feather-search"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="header-button ms-20px d-none d-xl-inline-block">
                  <a
                    href="demo-corporate-contact.html"
                    class="btn btn-rounded btn-transparent-light-gray border-1 btn-medium btn-switch-text text-transform-none"
                  >
                    <span>
                      <span
                        class="btn-double-text fw-600"
                        data-text="Free consultation"
                        >Free consultation</span
                      >
                      <span><i class="fa-regular fa-envelope"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div class="page-layout">
        <section id="slider" class="p-0 top-space-margin">
          <div
            class="demo-corporate-slider_wrapper fullscreen-container"
            data-alias="portfolio-viewer"
            data-source="gallery"
            style="
              background-color: transparent;
              padding: 0px;
              max-height: none;
              overflow: visible;
              height: 316px;
            "
          >
            <div
              id="demo-corporate-slider"
              class="rev_slider bg-regal-blue fullscreenbanner revslider-initialised tp-simpleresponsive rev_redraw_on_blurfocus"
              style="
                max-height: none;
                margin-top: 0px;
                margin-bottom: 0px;
                height: 100%;
              "
              data-version="5.3.1.6"
              data-slideactive="rs-01"
            >
            <ul class="tp-revslider-mainul" style="visibility: visible; display: block; overflow: hidden; width: 1393px; height: 100%; max-height: none; left: 0px;">

              <li data-index="rs-01" data-transition="parallaxleft" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="1500" data-rotate="0" data-saveperformance="off" data-title="Crossfit" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="" class="tp-revslider-slidesli" style="perspective: 6000px; width: 100%; height: 100%; overflow: hidden; z-index: 18; visibility: hidden; opacity: 0; background-color: rgba(255, 255, 255, 0);">
              
              <div class="slotholder" style="position: absolute; top: 0px; left: 0px; z-index: 0; width: 100%; height: 100%; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"><!--Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="images/demo-corporate-main-slider-01.jpg" alt="Image" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg defaultimg" data-no-retina="">--><div class="tp-bgimg defaultimg " data-bgcolor="undefined" style="background-repeat: no-repeat; background-image: url(&quot;images/demo-corporate-main-slider-01.jpg&quot;); background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 0; visibility: hidden; z-index: 20;" src="images/demo-corporate-main-slider-01.jpg"></div></div>
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 0px; top: 0px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper " id="slide-1-layer-01" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                                   {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;}]" style="background: rgba(22, 35, 63, 0.1); z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 32px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 17px; white-space: nowrap; min-height: 316px; min-width: 1393px; opacity: 0.0001; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;">
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 543px; top: 5px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50" id="slide-1-layer-02" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="['900','700','700','600']" data-height="['900','700','700','600']" data-whitespace="nowrap" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:0.5;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 11px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 6px; white-space: nowrap; min-height: 306px; min-width: 306px; max-height: 306px; max-width: 306px; opacity: 0.0001; transform: matrix3d(1.00809, 0, 0, 0, 0, 1.00809, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;">
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 492px; top: -46px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50" id="slide-1-layer-03" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="['1200','1000','900','800']" data-height="['1200','1000','900','800']" data-whitespace="nowrap" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:0.3;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 11px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 6px; white-space: nowrap; min-height: 408px; min-width: 408px; max-height: 408px; max-width: 408px; opacity: 0.0001; transform: matrix3d(1.04986, 0, 0, 0, 0, 1.04986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;">
              </div></div></div></div>
              
              
              <div id="rrzm_638" class="rev_row_zone rev_row_zone_middle">
              
              <div class="tp-parallax-wrap rev_row_wrap" style="position: relative; visibility: hidden; left: 0px; top: 0px; width: 1393px; z-index: 1;"><div class="tp-loop-wrap" style="position:relative;;"><div class="tp-mask-wrap" style="position: relative; overflow: visible;"><div class="tp-caption rev_row" id="slide-1-layer-04" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-426','-426','-426','-426']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="row" data-columnbreak="3" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[100,75,50,30]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[100,75,50,30]" style="visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 32px; border-width: 0px; margin: 0px; padding: 0px 100px; letter-spacing: 0px; font-weight: 400; font-size: 0px; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 0.0001; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;">
              
              <div class="tp-parallax-wrap rev_column" style="vertical-align: top; position: relative; visibility: hidden; padding: 0px; left: 0px; top: 0px; width: 100%; z-index: 1;"><div class="tp-loop-wrap" style="position:relative;;"><div class="tp-mask-wrap" style="position: relative; overflow: visible;"><div class="tp-caption rev_column_inner" id="slide-1-layer-05" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-columnwidth="100%" data-verticalalign="top" data-textalign="['center','center','center','center']" style="width: auto; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 32px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 0px; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; background-color: rgba(255, 255, 255, 0); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: 0.0001; transform-origin: 50% 50% 0px;">
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 0px; top: 82px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption mx-auto text-uppercase rev_layer_in_column" id="slide-1-layer-06" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['13','13','13','13']" data-lineheight="['20','20','20','20']" data-fontweight="['500','500','500','500']" data-letterspacing="['1','1','1','1']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['800','auto','auto','auto']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="off" data-verticalalign="middle" data-responsive="off" data-frames="[{&quot;delay&quot;:2500,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[25,25,10,10]" data-paddingleft="[0,0,0,0]" style="word-break: initial; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 20px; border-width: 0px; margin: 0px; padding: 0px 0px 25px; letter-spacing: 1px; font-weight: 500; font-size: 13px; white-space: normal; min-height: 0px; min-width: 800px; max-height: none; max-width: 800px; color: rgb(255, 255, 255); filter: blur(20px); opacity: 0.0001; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -16.9892, 0, 1); transform-origin: 50% 50% 0px;">
              <i class="bi bi-award pe-5px icon-small"></i>On demand live support
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 0px; top: 76px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption mx-auto rev_layer_in_column splitted" id="slide-1-layer-07" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['75','60','70','50']" data-lineheight="['70','65','75','55']" data-fontweight="['700','700','700','700']" data-letterspacing="['-2','-2','-2','0']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['700','600','600','auto']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="off" data-verticalalign="middle" data-responsive="on" data-frames="[{&quot;delay&quot;:&quot;1500&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.03,&quot;speed&quot;:800,&quot;split_direction&quot;:&quot;middletoedge&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:50px;opacity:0;fb:10px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:100,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[33,28,35,25]" data-paddingleft="[0,0,0,0]" style="word-break: initial; text-shadow: rgb(11, 18, 54) 3px 3px 15px; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 24px; border-width: 0px; margin: 0px; padding: 0px 0px 11px; letter-spacing: -1px; font-weight: 700; font-size: 25px; white-space: normal; min-height: 0px; min-width: 238px; max-height: none; max-width: 238px; color: rgb(255, 255, 255); filter: blur(0px); opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);"><div class="tp-splitted tp-linesplit" style="display: block; text-align: center; position: relative;"><div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">A</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">w</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">e</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">s</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">o</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">m</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">e</div></div> <div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">s</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">o</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">l</div><div style="position: relative; display: inline-block; filter: blur(7px); visibility: inherit; opacity: 0.251415; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 12.7192, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">u</div><div style="position: relative; display: inline-block; filter: blur(5px); visibility: inherit; opacity: 0.505199; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 8.40714, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">t</div><div style="position: relative; display: inline-block; filter: blur(3px); visibility: inherit; opacity: 0.684953; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5.35295, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">i</div><div style="position: relative; display: inline-block; filter: blur(2px); visibility: inherit; opacity: 0.808201; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3.25884, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">o</div><div style="position: relative; display: inline-block; filter: blur(1px); visibility: inherit; opacity: 0.889454; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1.87828, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">n</div><div style="position: relative; display: inline-block; filter: blur(1px); visibility: inherit; opacity: 0.918113; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1.39134, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">s</div></div> </div><div class="tp-splitted tp-linesplit" style="display: block; text-align: center; position: relative;"><div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(1px); visibility: inherit; opacity: 0.85328; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.49291, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">f</div><div style="position: relative; display: inline-block; filter: blur(2px); visibility: inherit; opacity: 0.752666; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4.20244, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">o</div><div style="position: relative; display: inline-block; filter: blur(4px); visibility: inherit; opacity: 0.603161; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 6.74268, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">r</div></div> <div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(6px); visibility: inherit; opacity: 0.388781; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10.3852, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">y</div><div style="position: relative; display: inline-block; filter: blur(9px); visibility: inherit; opacity: 0.0903906; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 15.4551, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">o</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">u</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">r</div></div> <div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">b</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">u</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">s</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">i</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">n</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">e</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">s</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">s</div></div></div></div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 0px; top: 87px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption mx-auto rev_layer_in_column" id="slide-1-layer-08" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['20','20','24','20']" data-lineheight="['36','36','40','30']" data-fontweight="['300','300','300','300']" data-letterspacing="['0','0','0','0']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['500','500','auto','auto']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="off" data-verticalalign="middle" data-responsive="on" data-frames="[{&quot;delay&quot;:2500,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:0.6;fb:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[36,36,60,40]" data-paddingleft="[0,0,0,0]" style="visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 12px; border-width: 0px; margin: 0px; padding: 0px 0px 12px; letter-spacing: 0px; font-weight: 300; font-size: 7px; white-space: normal; min-height: 0px; min-width: 170px; max-height: none; max-width: 170px; color: rgb(255, 255, 255); filter: blur(20px); opacity: 0.0001; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 16.9892, 0, 1); transform-origin: 50% 50% 0px;">
              We're a fully dedicated corporate service agency collaborating with brands
              all over the world.
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 0px; top: 0px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-resizeme rev_layer_in_column" id="slide-1-layer-09" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="auto" data-height="none" data-whitespace="nowrap" data-fontsize="['18','16','16','16']" data-lineheight="['70','55','55','55']" data-type="text" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:3000,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:100px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[75,70,65,60]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[45,35,30,30]" style="visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 70px; border-width: 0px; margin: 0px; padding: 0px 75px 0px 45px; letter-spacing: 0px; font-weight: 400; font-size: 18px; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 0.0001; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 33.9785, 0, 1); transform-origin: 50% 50% 0px;">
              <a href="#" class="btn btn-extra-large get-started-btn btn-rounded with-rounded btn-gradient-flamingo-amethyst-green btn-box-shadow" style="transition: none 0s ease 0s; text-align: inherit; line-height: 27px; border-width: 1px; margin: 0px; padding: 18px 70px 18px 46px; letter-spacing: 0px; font-weight: 500; font-size: 18px;">Get
              started now<span class="bg-white text-base-color" style="transition: none 0s ease 0s; text-align: inherit; line-height: 27px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 500; font-size: 18px;"><i class="fa-solid fa-arrow-right" style="transition: none 0s ease 0s; text-align: inherit; line-height: 18px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 900; font-size: 18px;"></i></span></a>
              </div></div></div></div>
              
              <div class="rev_column_bg rev_column_bg_man_sized" style="visibility: hidden; transform: matrix(1, 0, 0, 1, 0, 0); background-size: auto; opacity: 1; background-position: 0% 0%; background-repeat: repeat; background-image: none; background-color: rgba(0, 0, 0, 0); height: 212px; width: 100%;"></div></div></div></div><div class="rev_column_bg rev_column_bg_auto_sized" style="background-size: auto; opacity: 1; background-position: 0% 0%; background-repeat: repeat; background-image: none; background-color: rgba(0, 0, 0, 0); border-width: 0px; visibility: visible;"></div></div>
              
              </div></div></div></div>
              
              </div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 849px; top: 28px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-base-color border-radius-50" id="slide-1-layer-10" data-x="['center','center','center','center']" data-hoffset="['510','410','310','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-320','-250','-250','0']" data-width="['122','122','120','120']" data-height="['122','122','120','120']" data-visibility="['on','on','off','off']" data-whitespace="nowrap" data-basealign="grid" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:3500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 11px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 6px; white-space: nowrap; min-height: 41px; min-width: 41px; max-height: 41px; max-width: 41px; opacity: 0.0001; transform: matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 16.9892, 0, 1); transform-origin: 50% 50% 0px;">
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: inline-block; visibility: hidden; left: 852px; top: 26px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:inline-block;;"><div class="tp-mask-wrap" style="position: absolute; display: inline-block; overflow: visible;"><div class="tp-caption d-inline-block" id="slide-1-layer-11" data-x="['center','center','center','center']" data-hoffset="['510','410','310','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-305','-250','-250','0']" data-visibility="['on','on','off','off']" data-fontsize="['13','13','13','13']" data-lineheight="['16','16','16','16']" data-fontweight="['500','600','600','600']" data-letterspacing="['0','0','0','0']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['100','100','100','100']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="on" data-verticalalign="middle" data-responsive="on" data-frames="[{&quot;delay&quot;:3700,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[33,0,0,0]" data-paddingleft="[0,0,0,0]" style="word-break: initial; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 5px; border-width: 0px; margin: 0px; padding: 0px 0px 11px; letter-spacing: 0px; font-weight: 500; font-size: 4px; white-space: normal; min-height: 0px; min-width: 34px; max-height: none; max-width: 34px; color: rgb(255, 255, 255); opacity: 0.0001; transform: matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 16.9892, 0, 1); transform-origin: 50% 50% 0px;">
              <i class="bi bi-patch-check-fill icon-extra-medium d-block pb-10px"></i> <span class="d-block text-uppercase">Decided quality</span>
              </div></div></div></div>
              
              </li>
              <li data-index="rs-02" data-transition="parallaxleft" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="1500" data-rotate="0" data-saveperformance="off" data-title="Crossfit" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="" class="tp-revslider-slidesli" style="perspective: 6000px; width: 100%; height: 100%; overflow: hidden; z-index: 18; visibility: hidden; opacity: 0; background-color: rgba(255, 255, 255, 0);">
              
              <div class="slotholder" style="position: absolute; top: 0px; left: 0px; z-index: 0; width: 100%; height: 100%; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"><!--Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="images/demo-corporate-main-slider-02.jpg" alt="Image" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg defaultimg" data-no-retina="">--><div class="tp-bgimg defaultimg " data-bgcolor="undefined" style="background-repeat: no-repeat; background-image: url(&quot;images/demo-corporate-main-slider-02.jpg&quot;); background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 0; visibility: hidden; z-index: 20;" src="images/demo-corporate-main-slider-02.jpg"></div></div>
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 0px; top: 0px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper " id="slide-2-layer-01" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                                   {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;}]" style="background: rgba(22, 35, 63, 0.1); z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 32px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 17px; white-space: nowrap; min-height: 316px; min-width: 1393px; opacity: 0.0001; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;">
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 543px; top: 5px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50" id="slide-2-layer-02" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="['900','700','700','600']" data-height="['900','700','700','600']" data-whitespace="nowrap" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:0.5;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 11px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 6px; white-space: nowrap; min-height: 306px; min-width: 306px; max-height: 306px; max-width: 306px; opacity: 0.0001; transform: matrix3d(1.01313, 0, 0, 0, 0, 1.01313, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;">
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 492px; top: -46px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50" id="slide-2-layer-03" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="['1200','1000','900','800']" data-height="['1200','1000','900','800']" data-whitespace="nowrap" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:0.3;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 11px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 6px; white-space: nowrap; min-height: 408px; min-width: 408px; max-height: 408px; max-width: 408px; opacity: 0.0001; transform: matrix3d(1.04961, 0, 0, 0, 0, 1.04961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;">
              </div></div></div></div>
              
              
              <div id="rrzm_639" class="rev_row_zone rev_row_zone_middle">
              
              <div class="tp-parallax-wrap rev_row_wrap" style="position: relative; visibility: hidden; left: 0px; top: 0px; width: 1393px; z-index: 1;"><div class="tp-loop-wrap" style="position:relative;;"><div class="tp-mask-wrap" style="position: relative; overflow: visible;"><div class="tp-caption rev_row" id="slide-2-layer-04" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-426','-426','-426','-426']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="row" data-columnbreak="3" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[100,75,50,30]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[100,75,50,30]" style="visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 32px; border-width: 0px; margin: 0px; padding: 0px 100px; letter-spacing: 0px; font-weight: 400; font-size: 0px; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 0.0001; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;">
              
              <div class="tp-parallax-wrap rev_column" style="vertical-align: top; position: relative; visibility: hidden; padding: 0px; left: 0px; top: 0px; width: 100%; z-index: 1;"><div class="tp-loop-wrap" style="position:relative;;"><div class="tp-mask-wrap" style="position: relative; overflow: visible;"><div class="tp-caption rev_column_inner" id="slide-2-layer-05" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-columnwidth="100%" data-verticalalign="top" data-textalign="['center','center','center','center']" style="width: auto; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 32px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 0px; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; background-color: rgba(255, 255, 255, 0); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: 0.0001; transform-origin: 50% 50% 0px;">
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 0px; top: 82px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption mx-auto text-uppercase rev_layer_in_column" id="slide-2-layer-06" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['13','13','13','13']" data-lineheight="['20','20','20','20']" data-fontweight="['500','500','500','500']" data-letterspacing="['1','1','1','1']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['800','auto','auto','auto']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="off" data-verticalalign="middle" data-responsive="off" data-frames="[{&quot;delay&quot;:2500,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[25,25,10,10]" data-paddingleft="[0,0,0,0]" style="word-break: initial; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 20px; border-width: 0px; margin: 0px; padding: 0px 0px 25px; letter-spacing: 1px; font-weight: 500; font-size: 13px; white-space: normal; min-height: 0px; min-width: 800px; max-height: none; max-width: 800px; color: rgb(255, 255, 255); filter: blur(20px); opacity: 0.0001; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -16.9892, 0, 1); transform-origin: 50% 50% 0px;">
              <i class="bi bi-award pe-5px icon-small"></i>On demand live support
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 0px; top: 76px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption mx-auto rev_layer_in_column splitted" id="slide-2-layer-07" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['75','60','70','50']" data-lineheight="['70','65','75','55']" data-fontweight="['700','700','700','700']" data-letterspacing="['-2','-2','-2','0']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['700','600','600','auto']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="off" data-verticalalign="middle" data-responsive="on" data-frames="[{&quot;delay&quot;:&quot;1500&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.03,&quot;speed&quot;:800,&quot;split_direction&quot;:&quot;middletoedge&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:50px;opacity:0;fb:10px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:100,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[33,28,35,25]" data-paddingleft="[0,0,0,0]" style="word-break: initial; text-shadow: rgb(11, 18, 54) 3px 3px 15px; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 24px; border-width: 0px; margin: 0px; padding: 0px 0px 11px; letter-spacing: -1px; font-weight: 700; font-size: 25px; white-space: normal; min-height: 0px; min-width: 238px; max-height: none; max-width: 238px; color: rgb(255, 255, 255); filter: blur(0px); opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);"><div class="tp-splitted tp-linesplit" style="display: block; text-align: center; position: relative;"><div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">S</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">t</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">a</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">r</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">t</div></div> <div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">y</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">o</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">u</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">r</div></div> <div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(8px); visibility: inherit; opacity: 0.210905; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 13.4075, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">o</div><div style="position: relative; display: inline-block; filter: blur(5px); visibility: inherit; opacity: 0.476058; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 8.90227, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">n</div><div style="position: relative; display: inline-block; filter: blur(3px); visibility: inherit; opacity: 0.664601; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5.69874, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">l</div><div style="position: relative; display: inline-block; filter: blur(2px); visibility: inherit; opacity: 0.794482; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3.49194, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">i</div><div style="position: relative; display: inline-block; filter: blur(1px); visibility: inherit; opacity: 0.880597; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.02877, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">n</div><div style="position: relative; display: inline-block; filter: blur(1px); visibility: inherit; opacity: 0.911133; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1.50994, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">e</div></div> </div><div class="tp-splitted tp-linesplit" style="display: block; text-align: center; position: relative;"><div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(2px); visibility: inherit; opacity: 0.842191; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.68133, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">b</div><div style="position: relative; display: inline-block; filter: blur(3px); visibility: inherit; opacity: 0.735875; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4.48773, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">u</div><div style="position: relative; display: inline-block; filter: blur(4px); visibility: inherit; opacity: 0.578709; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 7.15813, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">s</div><div style="position: relative; display: inline-block; filter: blur(6px); visibility: inherit; opacity: 0.354306; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10.9709, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">i</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0430867; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.2589, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">n</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">e</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">s</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">s</div></div> <div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">t</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">o</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">d</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">a</div><div style="position: relative; display: inline-block; filter: blur(10px); visibility: inherit; opacity: 0.0001; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16.9892, 0, 0, 1);" class="tp-splitted tp-charsplit">y</div></div></div></div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 0px; top: 87px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption mx-auto rev_layer_in_column" id="slide-2-layer-08" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['20','20','24','20']" data-lineheight="['36','36','40','30']" data-fontweight="['300','300','300','300']" data-letterspacing="['0','0','0','0']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['500','500','auto','auto']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="off" data-verticalalign="middle" data-responsive="on" data-frames="[{&quot;delay&quot;:2500,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:0.6;fb:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[36,36,60,40]" data-paddingleft="[0,0,0,0]" style="visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 12px; border-width: 0px; margin: 0px; padding: 0px 0px 12px; letter-spacing: 0px; font-weight: 300; font-size: 7px; white-space: normal; min-height: 0px; min-width: 170px; max-height: none; max-width: 170px; color: rgb(255, 255, 255); filter: blur(20px); opacity: 0.0001; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 16.9892, 0, 1); transform-origin: 50% 50% 0px;">
              We're a fully dedicated corporate service agency collaborating with brands
              all over the world.
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 0px; top: 0px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-resizeme rev_layer_in_column" id="slide-2-layer-09" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="auto" data-height="none" data-whitespace="nowrap" data-fontsize="['18','16','16','16']" data-lineheight="['70','55','55','55']" data-type="text" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:3000,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:100px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[75,70,65,60]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[45,35,30,30]" style="visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 70px; border-width: 0px; margin: 0px; padding: 0px 75px 0px 45px; letter-spacing: 0px; font-weight: 400; font-size: 18px; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 0.0001; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 33.9785, 0, 1); transform-origin: 50% 50% 0px;">
              <a href="#" class="btn btn-extra-large get-started-btn btn-rounded with-rounded btn-gradient-flamingo-amethyst-green btn-box-shadow" style="transition: none 0s ease 0s; text-align: inherit; line-height: 27px; border-width: 1px; margin: 0px; padding: 18px 70px 18px 46px; letter-spacing: 0px; font-weight: 500; font-size: 18px;">Get
              started now<span class="bg-white text-base-color" style="transition: none 0s ease 0s; text-align: inherit; line-height: 27px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 500; font-size: 18px;"><i class="fa-solid fa-arrow-right" style="transition: none 0s ease 0s; text-align: inherit; line-height: 18px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 900; font-size: 18px;"></i></span></a>
              </div></div></div></div>
              
              <div class="rev_column_bg rev_column_bg_man_sized" style="visibility: hidden; transform: matrix(1, 0, 0, 1, 0, 0); background-size: auto; opacity: 1; background-position: 0% 0%; background-repeat: repeat; background-image: none; background-color: rgba(0, 0, 0, 0); height: 212px; width: 100%;"></div></div></div></div><div class="rev_column_bg rev_column_bg_auto_sized" style="background-size: auto; opacity: 1; background-position: 0% 0%; background-repeat: repeat; background-image: none; background-color: rgba(0, 0, 0, 0); border-width: 0px; visibility: visible;"></div></div>
              
              </div></div></div></div>
              
              </div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: hidden; left: 849px; top: 28px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-base-color border-radius-50" id="slide-2-layer-10" data-x="['center','center','center','center']" data-hoffset="['510','410','310','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-320','-250','-250','0']" data-width="['122','122','120','120']" data-height="['122','122','120','120']" data-visibility="['on','on','off','off']" data-whitespace="nowrap" data-basealign="grid" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:3500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 11px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 6px; white-space: nowrap; min-height: 41px; min-width: 41px; max-height: 41px; max-width: 41px; opacity: 0.0001; transform: matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 16.9892, 0, 1); transform-origin: 50% 50% 0px;">
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: inline-block; visibility: hidden; left: 852px; top: 26px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:inline-block;;"><div class="tp-mask-wrap" style="position: absolute; display: inline-block; overflow: visible;"><div class="tp-caption d-inline-block" id="slide-2-layer-11" data-x="['center','center','center','center']" data-hoffset="['510','410','310','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-305','-250','-250','0']" data-visibility="['on','on','off','off']" data-fontsize="['13','13','13','13']" data-lineheight="['16','16','16','16']" data-fontweight="['500','600','600','600']" data-letterspacing="['0','0','0','0']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['100','100','100','100']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="on" data-verticalalign="middle" data-responsive="on" data-frames="[{&quot;delay&quot;:3700,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[33,0,0,0]" data-paddingleft="[0,0,0,0]" style="word-break: initial; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 5px; border-width: 0px; margin: 0px; padding: 0px 0px 11px; letter-spacing: 0px; font-weight: 500; font-size: 4px; white-space: normal; min-height: 0px; min-width: 34px; max-height: none; max-width: 34px; color: rgb(255, 255, 255); opacity: 0.0001; transform: matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 16.9892, 0, 1); transform-origin: 50% 50% 0px;">
              <i class="bi bi-patch-check-fill icon-extra-medium d-block pb-10px"></i> <span class="d-block text-uppercase">Decided quality</span>
              </div></div></div></div>
              
              </li>
              <li data-index="rs-03" data-transition="parallaxleft" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="1500" data-rotate="0" data-saveperformance="off" data-title="Crossfit" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="" class="tp-revslider-slidesli active-revslide" style="perspective: 6000px; width: 100%; height: 100%; overflow: hidden; z-index: 20; visibility: inherit; opacity: 1; background-color: rgba(255, 255, 255, 0);">
              
              <div class="slotholder" style="position: absolute; top: 0px; left: 0px; z-index: 0; width: 100%; height: 100%; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"><!--Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="images/demo-corporate-main-slider-03.jpg" alt="Image" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg defaultimg" data-no-retina="">--><div class="tp-bgimg defaultimg " data-bgcolor="undefined" style="background-repeat: no-repeat; background-image: url(&quot;images/demo-corporate-main-slider-03.jpg&quot;); background-size: cover; background-position: center center; width: 100%; height: 100%; opacity: 1; visibility: inherit; z-index: 20;" src="images/demo-corporate-main-slider-03.jpg"></div></div>
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 0px; top: 0px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper " id="slide-3-layer-01" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                                   {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;}]" style="background: rgba(22, 35, 63, 0.1); z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 32px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 17px; white-space: nowrap; min-height: 316px; min-width: 1393px; opacity: 1; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 543px; top: 5px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50" id="slide-3-layer-02" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="['900','700','700','600']" data-height="['900','700','700','600']" data-whitespace="nowrap" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:0.5;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 11px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 6px; white-space: nowrap; min-height: 306px; min-width: 306px; max-height: 306px; max-width: 306px; opacity: 0.5; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 492px; top: -46px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-regal-blue border-radius-50" id="slide-3-layer-03" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="['1200','1000','900','800']" data-height="['1200','1000','900','800']" data-whitespace="nowrap" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1300,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:0.3;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 11px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 6px; white-space: nowrap; min-height: 408px; min-width: 408px; max-height: 408px; max-width: 408px; opacity: 0.3; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
              </div></div></div></div>
              
              
              <div id="rrzm_640" class="rev_row_zone rev_row_zone_middle">
              
              <div class="tp-parallax-wrap rev_row_wrap" style="position: relative; visibility: visible; left: 0px; top: 0px; width: 1393px; z-index: 1;"><div class="tp-loop-wrap" style="position:relative;;"><div class="tp-mask-wrap" style="position: relative; overflow: visible;"><div class="tp-caption rev_row" id="slide-3-layer-04" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-426','-426','-426','-426']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="row" data-columnbreak="3" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[100,75,50,30]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[100,75,50,30]" style="visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 32px; border-width: 0px; margin: 0px; padding: 0px 100px; letter-spacing: 0px; font-weight: 400; font-size: 0px; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 1; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
              
              <div class="tp-parallax-wrap rev_column" style="vertical-align: top; position: relative; visibility: visible; padding: 0px; left: 0px; top: 0px; width: 100%; z-index: 1;"><div class="tp-loop-wrap" style="position:relative;;"><div class="tp-mask-wrap" style="position: relative; overflow: visible;"><div class="tp-caption rev_column_inner" id="slide-3-layer-05" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-columnwidth="100%" data-verticalalign="top" data-textalign="['center','center','center','center']" style="width: auto; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 32px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 0px; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; background-color: rgba(255, 255, 255, 0); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: 1; transform-origin: 50% 50% 0px;">
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 0px; top: 82px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption mx-auto text-uppercase rev_layer_in_column" id="slide-3-layer-06" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['13','13','13','13']" data-lineheight="['20','20','20','20']" data-fontweight="['500','500','500','500']" data-letterspacing="['1','1','1','1']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['800','auto','auto','auto']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="off" data-verticalalign="middle" data-responsive="off" data-frames="[{&quot;delay&quot;:2500,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[25,25,10,10]" data-paddingleft="[0,0,0,0]" style="word-break: initial; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 20px; border-width: 0px; margin: 0px; padding: 0px 0px 25px; letter-spacing: 1px; font-weight: 500; font-size: 13px; white-space: normal; min-height: 0px; min-width: 800px; max-height: none; max-width: 800px; color: rgb(255, 255, 255); filter: blur(0px); opacity: 1; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
              <i class="bi bi-award pe-5px icon-small"></i>On demand live support
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 0px; top: 76px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption mx-auto rev_layer_in_column splitted" id="slide-3-layer-07" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['75','60','70','50']" data-lineheight="['70','65','75','55']" data-fontweight="['700','700','700','700']" data-letterspacing="['-2','-2','-2','0']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['700','600','600','auto']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="off" data-verticalalign="middle" data-responsive="on" data-frames="[{&quot;delay&quot;:&quot;1500&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.03,&quot;speed&quot;:800,&quot;split_direction&quot;:&quot;middletoedge&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:50px;opacity:0;fb:10px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:100,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[33,28,35,25]" data-paddingleft="[0,0,0,0]" style="word-break: initial; text-shadow: rgb(11, 18, 54) 3px 3px 15px; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 24px; border-width: 0px; margin: 0px; padding: 0px 0px 11px; letter-spacing: -1px; font-weight: 700; font-size: 25px; white-space: normal; min-height: 0px; min-width: 238px; max-height: none; max-width: 238px; color: rgb(255, 255, 255); filter: blur(0px); opacity: 1; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);"><div class="tp-splitted tp-linesplit" style="display: block; text-align: center; position: relative;"><div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">D</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">e</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">l</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">i</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">v</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">e</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">r</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">i</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">n</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">g</div></div> <div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">c</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">r</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">e</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">a</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">t</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">i</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">v</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">e</div></div> </div><div class="tp-splitted tp-linesplit" style="display: block; text-align: center; position: relative;"><div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">d</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">i</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">g</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">i</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">t</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">a</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">l</div></div> <div style="position:relative;display:inline-block;" class="tp-splitted tp-wordsplit"><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">p</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">r</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">o</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">d</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">u</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">c</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">t</div><div style="position: relative; display: inline-block; filter: blur(0px); visibility: inherit; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;" class="tp-splitted tp-charsplit">s</div></div></div></div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 0px; top: 87px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption mx-auto rev_layer_in_column" id="slide-3-layer-08" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['20','20','24','20']" data-lineheight="['36','36','40','30']" data-fontweight="['300','300','300','300']" data-letterspacing="['0','0','0','0']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['500','500','auto','auto']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="off" data-verticalalign="middle" data-responsive="on" data-frames="[{&quot;delay&quot;:2500,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:0.6;fb:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;power3.inOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[36,36,60,40]" data-paddingleft="[0,0,0,0]" style="visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 12px; border-width: 0px; margin: 0px; padding: 0px 0px 12px; letter-spacing: 0px; font-weight: 300; font-size: 7px; white-space: normal; min-height: 0px; min-width: 170px; max-height: none; max-width: 170px; color: rgb(255, 255, 255); filter: blur(0px); opacity: 0.6; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
              We're a fully dedicated corporate service agency collaborating with brands
              all over the world.
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 0px; top: 0px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-resizeme rev_layer_in_column" id="slide-3-layer-09" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="auto" data-height="none" data-whitespace="nowrap" data-fontsize="['18','16','16','16']" data-lineheight="['70','55','55','55']" data-type="text" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:3000,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:100px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[75,70,65,60]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[45,35,30,30]" style="visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 70px; border-width: 0px; margin: 0px; padding: 0px 75px 0px 45px; letter-spacing: 0px; font-weight: 400; font-size: 18px; white-space: nowrap; min-height: 0px; min-width: 0px; max-height: none; max-width: none; opacity: 1; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
              <a href="#" class="btn btn-extra-large get-started-btn btn-rounded with-rounded btn-gradient-flamingo-amethyst-green btn-box-shadow" style="transition: none 0s ease 0s; text-align: inherit; line-height: 27px; border-width: 1px; margin: 0px; padding: 18px 70px 18px 46px; letter-spacing: 0px; font-weight: 500; font-size: 18px;">Get
              started now<span class="bg-white text-base-color" style="transition: none 0s ease 0s; text-align: inherit; line-height: 27px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 500; font-size: 18px;"><i class="fa-solid fa-arrow-right" style="transition: none 0s ease 0s; text-align: inherit; line-height: 18px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 900; font-size: 18px;"></i></span></a>
              </div></div></div></div>
              
              <div class="rev_column_bg rev_column_bg_man_sized" style="visibility: hidden; transform: matrix(1, 0, 0, 1, 0, 0); background-size: auto; opacity: 1; background-position: 0% 0%; background-repeat: repeat; background-image: none; background-color: rgba(0, 0, 0, 0); height: 212px; width: 100%;"></div></div></div></div><div class="rev_column_bg rev_column_bg_auto_sized" style="background-size: auto; opacity: 1; background-position: 0% 0%; background-repeat: repeat; background-image: none; background-color: rgba(0, 0, 0, 0); border-width: 0px; visibility: visible;"></div></div>
              
              </div></div></div></div>
              
              </div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: block; visibility: visible; left: 849px; top: 28px; z-index: 0;"><div class="tp-loop-wrap" style="position:absolute;display:block;;"><div class="tp-mask-wrap" style="position: absolute; display: block; overflow: visible;"><div class="tp-caption tp-shape tp-shapewrapper tp-resizeme bg-base-color border-radius-50" id="slide-3-layer-10" data-x="['center','center','center','center']" data-hoffset="['510','410','310','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-320','-250','-250','0']" data-width="['122','122','120','120']" data-height="['122','122','120','120']" data-visibility="['on','on','off','off']" data-whitespace="nowrap" data-basealign="grid" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:3500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 0; visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 11px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 6px; white-space: nowrap; min-height: 41px; min-width: 41px; max-height: 41px; max-width: 41px; opacity: 1; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
              </div></div></div></div>
              
              
              <div class="tp-parallax-wrap" style="position: absolute; display: inline-block; visibility: visible; left: 852px; top: 26px; z-index: 1;"><div class="tp-loop-wrap" style="position:absolute;display:inline-block;;"><div class="tp-mask-wrap" style="position: absolute; display: inline-block; overflow: visible;"><div class="tp-caption d-inline-block" id="slide-3-layer-11" data-x="['center','center','center','center']" data-hoffset="['510','410','310','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-305','-250','-250','0']" data-visibility="['on','on','off','off']" data-fontsize="['13','13','13','13']" data-lineheight="['16','16','16','16']" data-fontweight="['500','600','600','600']" data-letterspacing="['0','0','0','0']" data-color="['#ffffff','#ffffff','#ffffff','#ffffff']" data-width="['100','100','100','100']" data-height="auto" data-whitespace="normal" data-basealign="grid" data-type="text" data-responsive_offset="on" data-verticalalign="middle" data-responsive="on" data-frames="[{&quot;delay&quot;:3700,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:0px;y:50px;rX:0deg;rY:0deg;rZ:0deg;sX:0.5;sY:0.5;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[33,0,0,0]" data-paddingleft="[0,0,0,0]" style="word-break: initial; visibility: inherit; transition: none 0s ease 0s; text-align: center; line-height: 5px; border-width: 0px; margin: 0px; padding: 0px 0px 11px; letter-spacing: 0px; font-weight: 500; font-size: 4px; white-space: normal; min-height: 0px; min-width: 34px; max-height: none; max-width: 34px; color: rgb(255, 255, 255); opacity: 1; transform-origin: 50% 50% 0px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
              <i class="bi bi-patch-check-fill icon-extra-medium d-block pb-10px"></i> <span class="d-block text-uppercase">Decided quality</span>
              </div></div></div></div>
              
              </li>
              </ul>
              <div
                class="tp-bannertimer"
                style="
                  height: 10px;
                  background-color: rgba(0, 0, 0, 0.1);
                  z-index: 98;
                  width: 49.9556%;
                  visibility: visible;
                  transform: translate3d(0px, 0px, 0px);
                "
              ></div>
              <div class="tp-loader spinner0" style="display: none">
                <div class="dot1"></div>
                <div class="dot2"></div>
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
              </div>
              <div
                class="tp-leftarrow tparrows hesperiden noSwipe"
                style="
                  top: 50%;
                  transform: matrix(1, 0, 0, 1, 50, -27);
                  left: 0px;
                "
              ></div>
              <div
                class="tp-rightarrow tparrows hesperiden noSwipe"
                style="
                  top: 50%;
                  transform: matrix(1, 0, 0, 1, -104, -27);
                  left: 100%;
                "
              ></div>
              <div
                class="tp-bullets hermes horizontal nav-pos-hor-center nav-pos-ver-bottom nav-dir-horizontal noSwipe tp-forcenotvisible"
                style="
                  width: 72px;
                  height: 16px;
                  top: 100%;
                  transform: matrix(1, 0, 0, 1, -36, -46);
                  left: 50%;
                "
              >
                <div
                  class="tp-bullet selected"
                  style="left: 0px; top: 0px"
                ></div>
                <div class="tp-bullet" style="left: 28px; top: 0px"></div>
                <div class="tp-bullet" style="left: 56px; top: 0px"></div>
              </div>
            </div>
          </div>
        </section>
        <section class="p-0 border-bottom border-color-extra-medium-gray">
          <div class="container">
            <div
              class="row row-cols-1 row-cols-md-3 row-cols-sm-2 justify-content-center appear anime-child anime-complete"
              data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 0, "staggervalue": 500, "easing": "easeOutQuad" }'
            >
              <div
                class="col pt-35px pb-35px md-pb-0 text-dark-gray border-end border-color-extra-medium-gray sm-border-end-0"
                style=""
              >
                <div
                  class="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start"
                >
                  <div class="flex-shrink-0 me-15px md-me-0">
                    <h2 class="mb-0 fw-800">99<sup class="fs-24">%</sup></h2>
                  </div>
                  <div>
                    <span class="lh-24 fw-600 d-block"
                      >Track and analyze <br />business reports.</span
                    >
                  </div>
                </div>
              </div>

              <div
                class="col pt-35px pb-35px md-pb-0 text-dark-gray border-end border-color-extra-medium-gray sm-border-end-0"
                style=""
              >
                <div
                  class="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start"
                >
                  <div class="flex-shrink-0 me-15px md-me-0">
                    <h2 class="mb-0 fw-800 ls-minus-3px">4.98</h2>
                  </div>
                  <div>
                    <div
                      class="review-star-icon fs-20 d-inline-block text-gradient-orange-sky-blue"
                    >
                      <i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i>
                    </div>
                    <span class="lh-24 fw-600 d-block">Best rated agency</span>
                  </div>
                </div>
              </div>

              <div class="col pt-35px pb-35px text-dark-gray" style="">
                <div
                  class="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start"
                >
                  <div class="flex-shrink-0 me-15px md-me-0">
                    <h2 class="mb-0 fw-800">98<sup class="fs-24">%</sup></h2>
                  </div>
                  <div>
                    <span class="lh-24 fw-600 d-block"
                      >Genuine repeated <br />happy customers.</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div
              class="row justify-content-center align-items-center mb-6 sm-pb-9"
            >
              <div
                class="col-lg-6 col-md-9 position-relative md-mb-15 text-center text-lg-start appear anime-child anime-complete"
                data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 15, "easing": "easeOutQuad" }'
              >
                <div
                  class="absolute-middle-center z-index-9 counter-style-02 text-center"
                  style=""
                >
                  <span
                    class="fs-160 fw-800 text-dark-gray ls-minus-10px xs-ls-minus-5px position-relative lg-fs-130 xs-fs-75"
                    >28<sub
                      class="align-top fs-80 lg-fs-70 text-dark-gray position-relative top-minus-3px"
                      >+</sub
                    ></span
                  >
                  <span
                    class="d-block mx-auto fs-20 fw-500 lh-26 w-70 text-center text-dark-gray xs-w-100"
                    >Years working experience</span
                  >
                </div>
                <img
                  src="images/demo-corporate-03.png"
                  alt=""
                  data-no-retina=""
                  style=""
                />
                <img
                  src="images/demo-corporate-01.png"
                  class="position-absolute top-50 left-minus-100px lg-left-minus-40px sm-left-minus-30px lg-w-50 sm-w-55 skrollable skrollable-before"
                  data-bottom-top="transform: translateY(50px)"
                  data-top-bottom="transform: translateY(-220px)"
                  alt=""
                  data-no-retina=""
                  style="transform: translateY(50px)"
                />
                <img
                  src="images/demo-corporate-02.png"
                  class="position-absolute top-0px xl-top-minus-10px w-170px right-20px md-right-40px xs-w-40 skrollable skrollable-between"
                  data-bottom-top="transform: translateY(-50px)"
                  data-top-bottom="transform: translateY(50px)"
                  alt=""
                  data-no-retina=""
                  style="transform: translateY(-18.2274px)"
                />
              </div>
              <div
                class="col-lg-6 ps-6 text-center text-lg-start lg-ps-15px appear anime-child anime-complete"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <span
                  class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block"
                  style=""
                  >Creative approach</span
                >
                <h3 class="text-dark-gray fw-700 ls-minus-1px" style="">
                  Powerful agency for corporate business.
                </h3>
                <p class="w-80 xl-w-90 lg-w-100 mb-40px sm-mb-25px" style="">
                  We strive to develop real-world web solutions that are ideal
                  for small to large projects with bespoke project requirements.
                  We create compelling web designs, which are the right-fit for
                  your target groups and also deliver optimized.
                </p>
                <a
                  href="demo-corporate-about.html"
                  class="btn btn-large btn-dark-gray btn-hover-animation-switch btn-box-shadow btn-rounded me-25px xs-me-0"
                  style=""
                >
                  <span>
                    <span class="btn-text">Read about us</span>
                    <span class="btn-icon"
                      ><i class="feather icon-feather-arrow-right"></i
                    ></span>
                    <span class="btn-icon"
                      ><i class="feather icon-feather-arrow-right"></i
                    ></span>
                  </span>
                </a>
                <span
                  class="text-dark-gray fw-700 ls-minus-05px d-block d-sm-inline-block sm-mt-15px"
                  style=""
                  ><a href="tel:1800222000"
                    ><i class="feather icon-feather-phone-call me-10px"></i>1
                    800 222 000</a
                  ></span
                >
              </div>
            </div>
            <div
              class="row row-cols-1 row-cols-md-4 row-cols-sm-2 justify-content-center counter-style-07 ps-3 pe-3"
              data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
            >
              <div class="col text-center sm-mb-30px">
                <h2
                  class="vertical-counter d-inline-flex text-dark-gray fw-800 mb-0 ls-minus-3px position-relative z-index-0"
                  data-to="4586"
                  style="height: 50px"
                >
                  <span
                    class="text-highlight position-absolute bottom-9px w-100"
                    ><span
                      class="bg-gradient-flamingo-amethyst-green h-10px opacity-2"
                    ></span
                  ></span>
                  <span class="vertical-counter-number" data-to="4"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  ><span class="vertical-counter-number" data-to="5"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  ><span class="vertical-counter-number" data-to="8"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  ><span class="vertical-counter-number" data-to="6"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  >
                </h2>
                <span class="d-block fs-14 fw-700 text-uppercase text-dark-gray"
                  >Telephonic talk</span
                >
              </div>

              <div class="col text-center sm-mb-30px">
                <h2
                  class="vertical-counter d-inline-flex text-dark-gray fw-800 mb-0 ls-minus-3px position-relative z-index-0"
                  data-to="583"
                  style="height: 50px"
                >
                  <span
                    class="text-highlight position-absolute bottom-9px w-100"
                    ><span
                      class="bg-gradient-flamingo-amethyst-green h-10px opacity-2"
                    ></span
                  ></span>
                  <span class="vertical-counter-number" data-to="5"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  ><span class="vertical-counter-number" data-to="8"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  ><span class="vertical-counter-number" data-to="3"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  >
                </h2>
                <span class="d-block fs-14 fw-700 text-uppercase text-dark-gray"
                  >Cases solved</span
                >
              </div>

              <div class="col text-center sm-mb-30px">
                <h2
                  class="vertical-counter d-inline-flex text-dark-gray fw-800 mb-0 ls-minus-3px position-relative z-index-0"
                  data-to="6548"
                  style="height: 50px"
                >
                  <span
                    class="text-highlight position-absolute bottom-9px w-100"
                    ><span
                      class="bg-gradient-flamingo-amethyst-green h-10px opacity-2"
                    ></span
                  ></span>
                  <span class="vertical-counter-number" data-to="6"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  ><span class="vertical-counter-number" data-to="5"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  ><span class="vertical-counter-number" data-to="4"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  ><span class="vertical-counter-number" data-to="8"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  >
                </h2>
                <span class="d-block fs-14 fw-700 text-uppercase text-dark-gray"
                  >Cofee cups</span
                >
              </div>

              <div class="col text-center">
                <h2
                  class="vertical-counter d-inline-flex text-dark-gray fw-800 mb-0 ls-minus-3px position-relative z-index-0"
                  data-to="836"
                  style="height: 50px"
                >
                  <span
                    class="text-highlight position-absolute bottom-9px w-100"
                    ><span
                      class="bg-gradient-flamingo-amethyst-green h-10px opacity-2"
                    ></span
                  ></span>
                  <span class="vertical-counter-number" data-to="8"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  ><span class="vertical-counter-number" data-to="3"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  ><span class="vertical-counter-number" data-to="6"
                    ><ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                    </ul></span
                  >
                </h2>
                <span class="d-block fs-14 fw-700 text-uppercase text-dark-gray"
                  >Happy clients</span
                >
              </div>
            </div>
          </div>
        </section>
        <section
          class="overflow-hidden bg-regal-blue position-relative border-radius-6px lg-border-radius-0px z-index-0"
        >
          <img
            src="images/demo-corporate-bg-01.png"
            class="position-absolute top-minus-150px left-minus-30px z-index-minus-1 skrollable skrollable-before"
            data-bottom-top="transform: rotate(0deg) translateY(0)"
            data-top-bottom="transform:rotate(-20deg) translateY(0)"
            alt=""
            data-no-retina=""
            style="transform: rotate(0deg) translateY(0px)"
          />
          <div class="container">
            <div
              class="row align-items-center mb-6 sm-mb-9 text-center text-lg-start"
            >
              <div class="col-lg-5 md-mb-20px">
                <span
                  class="ps-25px pe-25px mb-10px text-uppercase text-white fs-13 lh-42px fw-600 border-radius-100px bg-gradient-blue-whale-transparent d-inline-block"
                  >Creative approach</span
                >
                <h3 class="text-white fw-700 mb-0 ls-minus-1px">
                  Corporate services
                </h3>
              </div>
              <div class="col-lg-5 last-paragraph-no-margin md-mb-20px">
                <p class="w-85 md-w-100">
                  We strive to develop real-world web solutions that are ideal
                  for small to large projects with bespoke your custom project
                  requirements.
                </p>
              </div>
              <div
                class="col-lg-2 d-flex justify-content-center justify-content-lg-end"
              >
                <div
                  class="slider-one-slide-prev-1 icon-extra-medium text-white swiper-button-prev slider-navigation-style-04 border border-1 border-color-transparent-white-light"
                  tabindex="0"
                  role="button"
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-b10f7b18e5df6f741"
                >
                  <i class="feather icon-feather-chevron-left"></i>
                </div>
                <div
                  class="slider-one-slide-next-1 icon-extra-medium text-white swiper-button-next slider-navigation-style-04 border border-1 border-color-transparent-white-light"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-b10f7b18e5df6f741"
                >
                  <i class="feather icon-feather-chevron-right"></i>
                </div>
              </div>
            </div>
            <div class="row align-items-center mb-6">
              <div class="col-12">
                <div class="outside-box-right-25 sm-outside-box-right-0">
                  <div
                    class="swiper magic-cursor slider-one-slide swiper-initialized swiper-horizontal swiper-backface-hidden"
                    data-slider-options='{ "slidesPerView": 1, "spaceBetween": 30, "loop": true, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 4 }, "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 2 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'
                  >
                    <div
                      class="swiper-wrapper"
                      id="swiper-wrapper-b10f7b18e5df6f741"
                      aria-live="off"
                      style="
                        transition-duration: 0ms;
                        transform: translate3d(-1592px, 0px, 0px);
                        transition-delay: 0ms;
                      "
                    >
                      <div
                        class="swiper-slide"
                        role="group"
                        aria-label="6 / 8"
                        style="width: 368px; margin-right: 30px"
                        data-swiper-slide-index="5"
                      >
                        <div
                          class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative"
                        >
                          <img
                            src="images/demo-corporate-slider-img-02.jpg"
                            alt=""
                            data-no-retina=""
                          />
                          <div class="opacity-very-light bg-slate-blue"></div>
                          <div
                            class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column"
                          >
                            <div
                              class="hover-label-icon position-relative z-index-9"
                            >
                              <div
                                class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px"
                              >
                                Flexible
                              </div>
                              <i
                                class="line-icon-Archery-2 text-white icon-extra-large"
                              ></i>
                            </div>
                            <div
                              class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column"
                            >
                              <span class="text-white fw-600 fs-20"
                                >Market research</span
                              >
                              <span
                                class="content-title text-white fs-13 fw-500 text-uppercase ls-05px"
                                >Competitors research</span
                              >
                              <a
                                href="demo-corporate-services-details.html"
                                class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom"
                                >Explore services</a
                              >
                              <span
                                class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"
                                ><i
                                  class="fa-solid fa-chevron-right text-dark-gray fs-16"
                                ></i
                              ></span>
                            </div>
                            <div
                              class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9"
                            ></div>
                            <div
                              class="box-overlay bg-gradient-base-color-transparent"
                            ></div>
                            <a
                              href="demo-corporate-services-details.html"
                              class="position-absolute z-index-1 top-0px left-0px h-100 w-100"
                            ></a>
                          </div>
                        </div>
                      </div>

                      <div
                        class="swiper-slide"
                        role="group"
                        aria-label="7 / 8"
                        style="width: 368px; margin-right: 30px"
                        data-swiper-slide-index="6"
                      >
                        <div
                          class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative"
                        >
                          <img
                            src="images/demo-corporate-slider-img-03.jpg"
                            alt=""
                            data-no-retina=""
                          />
                          <div class="opacity-very-light bg-slate-blue"></div>
                          <div
                            class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column"
                          >
                            <div
                              class="hover-label-icon position-relative z-index-9"
                            >
                              <div
                                class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px"
                              >
                                Discover
                              </div>
                              <i
                                class="line-icon-Financial text-white icon-extra-large"
                              ></i>
                            </div>
                            <div
                              class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column"
                            >
                              <span class="text-white fw-600 fs-20"
                                >Business consulting</span
                              >
                              <span
                                class="content-title text-white fs-13 fw-500 text-uppercase ls-05px"
                                >Targeted growth</span
                              >
                              <a
                                href="demo-corporate-services-details.html"
                                class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom"
                                >Explore services</a
                              >
                              <span
                                class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"
                                ><i
                                  class="fa-solid fa-chevron-right text-dark-gray fs-16"
                                ></i
                              ></span>
                            </div>
                            <div
                              class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9"
                            ></div>
                            <div
                              class="box-overlay bg-gradient-base-color-transparent"
                            ></div>
                            <a
                              href="demo-corporate-services-details.html"
                              class="position-absolute z-index-1 top-0px left-0px h-100 w-100"
                            ></a>
                          </div>
                        </div>
                      </div>

                      <div
                        class="swiper-slide"
                        role="group"
                        aria-label="8 / 8"
                        style="width: 368px; margin-right: 30px"
                        data-swiper-slide-index="7"
                      >
                        <div
                          class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative"
                        >
                          <img
                            src="images/demo-corporate-slider-img-04.jpg"
                            alt=""
                            data-no-retina=""
                          />
                          <div class="opacity-very-light bg-slate-blue"></div>
                          <div
                            class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column"
                          >
                            <div
                              class="hover-label-icon position-relative z-index-9"
                            >
                              <div
                                class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px"
                              >
                                Modern
                              </div>
                              <i
                                class="line-icon-Money-Bag text-white icon-extra-large"
                              ></i>
                            </div>
                            <div
                              class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column"
                            >
                              <span class="text-white fw-600 fs-20"
                                >Audience analysis</span
                              >
                              <span
                                class="content-title text-white fs-13 fw-500 text-uppercase ls-05px"
                                >Competitors research</span
                              >
                              <a
                                href="demo-corporate-services-details.html"
                                class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom"
                                >Explore services</a
                              >
                              <span
                                class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"
                                ><i
                                  class="fa-solid fa-chevron-right text-dark-gray fs-16"
                                ></i
                              ></span>
                            </div>
                            <div
                              class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9"
                            ></div>
                            <div
                              class="box-overlay bg-gradient-base-color-transparent"
                            ></div>
                            <a
                              href="demo-corporate-services-details.html"
                              class="position-absolute z-index-1 top-0px left-0px h-100 w-100"
                            ></a>
                          </div>
                        </div>
                      </div>

                      <div
                        class="swiper-slide swiper-slide-prev"
                        role="group"
                        aria-label="1 / 8"
                        style="width: 368px; margin-right: 30px"
                        data-swiper-slide-index="0"
                      >
                        <div
                          class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative"
                        >
                          <img
                            src="images/demo-corporate-slider-img-01.jpg"
                            alt=""
                            data-no-retina=""
                          />
                          <div
                            class="opacity-extra-medium bg-gradient-dark-transparent"
                          ></div>
                          <div
                            class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column"
                          >
                            <div
                              class="hover-label-icon position-relative z-index-9"
                            >
                              <div
                                class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px"
                              >
                                Creativity
                              </div>
                              <i
                                class="line-icon-Medal-2 text-white icon-extra-large"
                              ></i>
                            </div>
                            <div
                              class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column"
                            >
                              <span class="text-white fw-600 fs-20"
                                >Business planning</span
                              >
                              <span
                                class="content-title text-white fs-13 fw-500 text-uppercase ls-05px"
                                >Innovative solutions</span
                              >
                              <a
                                href="demo-corporate-services-details.html"
                                class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom"
                                >Explore services</a
                              >
                              <span
                                class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"
                                ><i
                                  class="fa-solid fa-chevron-right text-dark-gray fs-16"
                                ></i
                              ></span>
                            </div>
                            <div
                              class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9"
                            ></div>
                            <div
                              class="box-overlay bg-gradient-base-color-transparent"
                            ></div>
                            <a
                              href="demo-corporate-services-details.html"
                              class="position-absolute z-index-1 top-0px left-0px h-100 w-100"
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div
                        class="swiper-slide swiper-slide-active"
                        role="group"
                        aria-label="2 / 8"
                        style="width: 368px; margin-right: 30px"
                        data-swiper-slide-index="1"
                      >
                        <div
                          class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative"
                        >
                          <img
                            src="images/demo-corporate-slider-img-02.jpg"
                            alt=""
                            data-no-retina=""
                          />
                          <div class="opacity-very-light bg-slate-blue"></div>
                          <div
                            class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column"
                          >
                            <div
                              class="hover-label-icon position-relative z-index-9"
                            >
                              <div
                                class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px"
                              >
                                Flexible
                              </div>
                              <i
                                class="line-icon-Archery-2 text-white icon-extra-large"
                              ></i>
                            </div>
                            <div
                              class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column"
                            >
                              <span class="text-white fw-600 fs-20"
                                >Market research</span
                              >
                              <span
                                class="content-title text-white fs-13 fw-500 text-uppercase ls-05px"
                                >Competitors research</span
                              >
                              <a
                                href="demo-corporate-services-details.html"
                                class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom"
                                >Explore services</a
                              >
                              <span
                                class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"
                                ><i
                                  class="fa-solid fa-chevron-right text-dark-gray fs-16"
                                ></i
                              ></span>
                            </div>
                            <div
                              class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9"
                            ></div>
                            <div
                              class="box-overlay bg-gradient-base-color-transparent"
                            ></div>
                            <a
                              href="demo-corporate-services-details.html"
                              class="position-absolute z-index-1 top-0px left-0px h-100 w-100"
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div
                        class="swiper-slide swiper-slide-next"
                        role="group"
                        aria-label="3 / 8"
                        style="width: 368px; margin-right: 30px"
                        data-swiper-slide-index="2"
                      >
                        <div
                          class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative"
                        >
                          <img
                            src="images/demo-corporate-slider-img-03.jpg"
                            alt=""
                            data-no-retina=""
                          />
                          <div class="opacity-very-light bg-slate-blue"></div>
                          <div
                            class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column"
                          >
                            <div
                              class="hover-label-icon position-relative z-index-9"
                            >
                              <div
                                class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px"
                              >
                                Discover
                              </div>
                              <i
                                class="line-icon-Financial text-white icon-extra-large"
                              ></i>
                            </div>
                            <div
                              class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column"
                            >
                              <span class="text-white fw-600 fs-20"
                                >Business consulting</span
                              >
                              <span
                                class="content-title text-white fs-13 fw-500 text-uppercase ls-05px"
                                >Targeted growth</span
                              >
                              <a
                                href="demo-corporate-services-details.html"
                                class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom"
                                >Explore services</a
                              >
                              <span
                                class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"
                                ><i
                                  class="fa-solid fa-chevron-right text-dark-gray fs-16"
                                ></i
                              ></span>
                            </div>
                            <div
                              class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9"
                            ></div>
                            <div
                              class="box-overlay bg-gradient-base-color-transparent"
                            ></div>
                            <a
                              href="demo-corporate-services-details.html"
                              class="position-absolute z-index-1 top-0px left-0px h-100 w-100"
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div
                        class="swiper-slide"
                        role="group"
                        aria-label="4 / 8"
                        style="width: 368px; margin-right: 30px"
                        data-swiper-slide-index="3"
                      >
                        <div
                          class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative"
                        >
                          <img
                            src="images/demo-corporate-slider-img-04.jpg"
                            alt=""
                            data-no-retina=""
                          />
                          <div class="opacity-very-light bg-slate-blue"></div>
                          <div
                            class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column"
                          >
                            <div
                              class="hover-label-icon position-relative z-index-9"
                            >
                              <div
                                class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px"
                              >
                                Modern
                              </div>
                              <i
                                class="line-icon-Money-Bag text-white icon-extra-large"
                              ></i>
                            </div>
                            <div
                              class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column"
                            >
                              <span class="text-white fw-600 fs-20"
                                >Audience analysis</span
                              >
                              <span
                                class="content-title text-white fs-13 fw-500 text-uppercase ls-05px"
                                >Competitors research</span
                              >
                              <a
                                href="demo-corporate-services-details.html"
                                class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom"
                                >Explore services</a
                              >
                              <span
                                class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"
                                ><i
                                  class="fa-solid fa-chevron-right text-dark-gray fs-16"
                                ></i
                              ></span>
                            </div>
                            <div
                              class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9"
                            ></div>
                            <div
                              class="box-overlay bg-gradient-base-color-transparent"
                            ></div>
                            <a
                              href="demo-corporate-services-details.html"
                              class="position-absolute z-index-1 top-0px left-0px h-100 w-100"
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div
                        class="swiper-slide"
                        role="group"
                        aria-label="5 / 8"
                        style="width: 368px; margin-right: 30px"
                        data-swiper-slide-index="4"
                      >
                        <div
                          class="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative"
                        >
                          <img
                            src="images/demo-corporate-slider-img-01.jpg"
                            alt=""
                            data-no-retina=""
                          />
                          <div
                            class="opacity-extra-medium bg-gradient-dark-transparent"
                          ></div>
                          <div
                            class="image-content h-100 w-100 ps-15 pe-15 pt-13 pb-13 md-p-10 d-flex justify-content-bottom align-items-start flex-column"
                          >
                            <div
                              class="hover-label-icon position-relative z-index-9"
                            >
                              <div
                                class="label bg-base-color fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 ls-05px"
                              >
                                Creativity
                              </div>
                              <i
                                class="line-icon-Medal-2 text-white icon-extra-large"
                              ></i>
                            </div>
                            <div
                              class="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column"
                            >
                              <span class="text-white fw-600 fs-20"
                                >Business planning</span
                              >
                              <span
                                class="content-title text-white fs-13 fw-500 text-uppercase ls-05px"
                                >Innovative solutions</span
                              >
                              <a
                                href="demo-corporate-services-details.html"
                                class="content-title-hover fs-13 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom"
                                >Explore services</a
                              >
                              <span
                                class="content-arrow lh-42px rounded-circle bg-white w-50px h-50px ms-20px text-center"
                                ><i
                                  class="fa-solid fa-chevron-right text-dark-gray fs-16"
                                ></i
                              ></span>
                            </div>
                            <div
                              class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9"
                            ></div>
                            <div
                              class="box-overlay bg-gradient-base-color-transparent"
                            ></div>
                            <a
                              href="demo-corporate-services-details.html"
                              class="position-absolute z-index-1 top-0px left-0px h-100 w-100"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      class="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-center">
                <i
                  class="bi bi-envelope text-white d-inline-block align-middle icon-extra-medium me-10px md-m-5px"
                ></i>
                <div class="fs-18 text-white d-inline-block align-middle">
                  Save your precious time and effort spent for finding a
                  solution.
                  <a
                    href="demo-corporate-contact.html"
                    class="text-white text-decoration-line-bottom"
                    >Contact us now</a
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container position-relative">
            <div class="row align-items-center mb-7">
              <div
                class="col-xxl-4 col-lg-5 md-mb-15 sm-mb-20 text-center text-lg-start"
              >
                <span
                  class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block"
                  >Simple process</span
                >
                <h3 class="text-dark-gray fw-700 ls-minus-2px mb-40px">
                  Understand the business process.
                </h3>
                <div
                  class="row row-cols-1"
                  data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                >
                  <div
                    class="col-12 process-step-style-05 position-relative hover-box"
                  >
                    <div class="process-step-item d-flex">
                      <div class="process-step-icon-wrap position-relative">
                        <div
                          class="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px fs-14 bg-light-red fw-700 position-relative"
                        >
                          <span
                            class="number position-relative z-index-1 text-dark-gray"
                            >01</span
                          >
                          <div
                            class="box-overlay bg-base-color rounded-circle"
                          ></div>
                        </div>
                        <span
                          class="progress-step-separator bg-dark-gray opacity-1"
                        ></span>
                      </div>
                      <div
                        class="process-content ps-30px last-paragraph-no-margin mb-30px"
                      >
                        <span class="d-block fw-700 text-dark-gray mb-5px fs-18"
                          >Start market research</span
                        >
                        <p class="w-90 lg-w-100 lh-32">
                          Lorem ipsum amet consectetur eiusmod tempor
                          incididunt.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-12 process-step-style-05 position-relative hover-box"
                  >
                    <div class="process-step-item d-flex">
                      <div class="process-step-icon-wrap position-relative">
                        <div
                          class="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px fs-14 bg-light-red fw-700 position-relative"
                        >
                          <span
                            class="number position-relative z-index-1 text-dark-gray"
                            >02</span
                          >
                          <div
                            class="box-overlay bg-base-color rounded-circle"
                          ></div>
                        </div>
                        <span
                          class="progress-step-separator bg-dark-gray opacity-1"
                        ></span>
                      </div>
                      <div
                        class="process-content ps-30px last-paragraph-no-margin mb-30px"
                      >
                        <span class="d-block fw-700 text-dark-gray mb-5px fs-18"
                          >Discussion of the idea</span
                        >
                        <p class="w-90 lg-w-100 lh-32">
                          Lorem ipsum amet consectetur eiusmod tempor
                          incididunt.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-12 process-step-style-05 position-relative hover-box xs-mb-30px"
                  >
                    <div class="process-step-item d-flex">
                      <div class="process-step-icon-wrap position-relative">
                        <div
                          class="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px fs-14 bg-light-red fw-700 position-relative"
                        >
                          <span
                            class="number position-relative z-index-1 text-dark-gray"
                            >03</span
                          >
                          <div
                            class="box-overlay bg-base-color rounded-circle"
                          ></div>
                        </div>
                      </div>
                      <div
                        class="process-content ps-30px last-paragraph-no-margin"
                      >
                        <span class="d-block fw-700 text-dark-gray mb-5px fs-18"
                          >Production planning</span
                        >
                        <p class="w-90 lg-w-100 lh-32">
                          Lorem ipsum amet consectetur eiusmod tempor
                          incididunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-7 offset-xxl-1 position-relative md-mb-30px sm-mb-15"
                data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
              >
                <img
                  src="images/demo-corporate-10.png"
                  class="position-relative z-index-9 top-40px"
                  alt=""
                  data-no-retina=""
                />
                <img
                  src="images/demo-corporate-03.png"
                  class="absolute-middle-center xs-w-95"
                  alt=""
                  data-no-retina=""
                />
                <img
                  src="images/demo-corporate-05.png"
                  class="position-absolute top-50px left-0px xs-left-15px skrollable skrollable-before"
                  data-bottom-top="transform: translateY(-50px)"
                  data-top-bottom="transform: translateY(50px)"
                  alt=""
                  data-no-retina=""
                  style="transform: translateY(-50px)"
                />
                <img
                  src="images/demo-corporate-06.png"
                  class="position-absolute top-150px left-30 skrollable skrollable-before"
                  data-bottom-top="transform: translateY(30px)"
                  data-top-bottom="transform: translateY(-30px)"
                  alt=""
                  data-no-retina=""
                  style="transform: translateY(30px)"
                />
                <img
                  src="images/demo-corporate-07.png"
                  class="position-absolute top-50px right-30 skrollable skrollable-before"
                  data-bottom-top="transform: translateY(-50px)"
                  data-top-bottom="transform: translateY(50px)"
                  alt=""
                  data-no-retina=""
                  style="transform: translateY(-50px)"
                />
                <img
                  src="images/demo-corporate-08.png"
                  class="position-absolute top-100px right-0px xs-right-15px skrollable skrollable-before"
                  data-bottom-top="transform: translateY(30px)"
                  data-top-bottom="transform: translateY(-30px)"
                  alt=""
                  data-no-retina=""
                  style="transform: translateY(30px)"
                />
              </div>
            </div>
            <div class="row justify-content-center align-items-center">
              <div
                class="col-12 text-center align-items-center"
                data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <div
                  class="bg-base-color fw-700 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 me-10px sm-m-5px d-inline-block align-middle"
                >
                  hurray
                </div>
                <div
                  class="fs-18 fw-500 text-dark-gray d-inline-block align-middle"
                >
                  Let's make something great work together.
                  <a
                    href="demo-corporate-contact.html"
                    class="text-dark-gray text-decoration-line-bottom fw-700"
                    >Got a project in mind?</a
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="bg-gradient-quartz-white border-radius-6px lg-border-radius-0px"
        >
          <div
            class="container background-no-repeat background-position-top"
            style="background-image: url('images/demo-corporate-bg-02.png')"
          >
            <div class="row justify-content-center mb-3">
              <div
                class="col-xxl-6 col-xl-7 col-lg-8 col-md-9 text-center"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <h3 class="text-dark-gray fw-700 ls-minus-1px">
                  Trusted by the world's fastest growing companies
                </h3>
              </div>
            </div>
            <div
              class="row justify-content-center align-items-center mb-6 sm-mb-8"
              data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 100, "staggervalue": 150, "easing": "easeOutQuad" }'
            >
              <div
                class="col-12 position-relative ps-8 pe-8 lg-ps-15px lg-pe-15px"
              >
                <div
                  class="swiper magic-cursor testimonials-style-06 swiper-initialized swiper-horizontal swiper-backface-hidden"
                  data-slider-options='{ "loop": true, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav", "effect": "fade" } }'
                >
                  <div
                    class="swiper-wrapper"
                    id="swiper-wrapper-e16c72af0130d875"
                    aria-live="off"
                    style="
                      transition-duration: 0ms;
                      transform: translate3d(-2050px, 0px, 0px);
                      transition-delay: 0ms;
                    "
                  >
                    <div
                      class="swiper-slide swiper-slide-next"
                      role="group"
                      aria-label="2 / 3"
                      style="width: 1025px"
                      data-swiper-slide-index="1"
                    >
                      <div
                        class="row align-items-center justify-content-center"
                      >
                        <div
                          class="col-8 col-md-4 col-sm-6 text-center md-mb-30px"
                        >
                          <img
                            alt=""
                            src="images/demo-corporate-testimonials-02.png"
                            data-no-retina=""
                          />
                        </div>
                        <div
                          class="col-lg-5 col-md-7 last-paragraph-no-margin text-center text-md-start"
                        >
                          <a href="#" class="mb-15px d-block"
                            ><img
                              src="images/logo-loitech-dark-blue.svg"
                              class="h-35px"
                              alt=""
                              data-no-retina=""
                          /></a>
                          <span
                            class="mb-5px d-table fs-18 lh-30 fw-500 text-dark-gray"
                            >Their team are easy to work with and helped me make
                            amazing websites in a short amount of time. Thanks
                            guys for all your hard work. Trust us we looked for
                            a very long time.</span
                          >
                          <span
                            class="fs-15 text-uppercase fw-800 text-base-color ls-1px"
                            >Leonel mooney, Logitech</span
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      class="swiper-slide swiper-slide-prev"
                      role="group"
                      aria-label="3 / 3"
                      style="width: 1025px"
                      data-swiper-slide-index="2"
                    >
                      <div
                        class="row align-items-center justify-content-center"
                      >
                        <div
                          class="col-8 col-md-4 col-sm-6 text-center md-mb-30px"
                        >
                          <img
                            alt=""
                            src="images/demo-corporate-testimonials-03.png"
                            data-no-retina=""
                          />
                        </div>
                        <div
                          class="col-lg-5 col-md-7 last-paragraph-no-margin text-center text-md-start"
                        >
                          <a href="#" class="mb-15px d-block"
                            ><img
                              src="images/logo-invision-dark-blue.svg"
                              class="h-35px"
                              alt=""
                              data-no-retina=""
                          /></a>
                          <span
                            class="mb-5px d-table fs-18 lh-30 fw-500 text-dark-gray"
                            >Their team are easy to work with and helped me make
                            amazing websites in a short amount of time. Thanks
                            guys for all your hard work. Trust us we looked for
                            a very long time.</span
                          >
                          <span
                            class="fs-15 text-uppercase fw-800 text-base-color ls-1px"
                            >Matthew taylor, invision</span
                          >
                        </div>
                      </div>
                    </div>
                    <div
                      class="swiper-slide swiper-slide-active"
                      role="group"
                      aria-label="1 / 3"
                      style="width: 1025px"
                      data-swiper-slide-index="0"
                    >
                      <div
                        class="row align-items-center justify-content-center"
                      >
                        <div
                          class="col-8 col-md-4 col-sm-6 text-center md-mb-30px"
                        >
                          <img
                            alt=""
                            src="images/demo-corporate-testimonials-01.png"
                            data-no-retina=""
                          />
                        </div>
                        <div
                          class="col-lg-5 col-md-7 last-paragraph-no-margin text-center text-md-start"
                        >
                          <a href="#" class="mb-15px d-block"
                            ><img
                              src="images/logo-monday-dark-blue-01.svg"
                              class="h-35px"
                              alt=""
                              data-no-retina=""
                          /></a>
                          <span
                            class="mb-5px d-table fs-18 lh-30 fw-500 text-dark-gray"
                            >Their team are easy to work with and helped me make
                            amazing websites in a short amount of time. Thanks
                            guys for all your hard work. Trust us we looked for
                            a very long time.</span
                          >
                          <span
                            class="fs-15 text-uppercase fw-800 text-base-color ls-1px"
                            >Herman miller, Monday</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="swiper-button-previous-nav swiper-button-prev md-left-0px"
                    tabindex="0"
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="swiper-wrapper-e16c72af0130d875"
                  >
                    <i
                      class="feather icon-feather-arrow-left icon-extra-medium text-dark-gray"
                    ></i>
                  </div>
                  <div
                    class="swiper-button-next-nav swiper-button-next md-right-0px"
                    tabindex="0"
                    role="button"
                    aria-label="Next slide"
                    aria-controls="swiper-wrapper-e16c72af0130d875"
                  >
                    <i
                      class="feather icon-feather-arrow-right icon-extra-medium text-dark-gray"
                    ></i>
                  </div>

                  <span
                    class="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  ></span>
                </div>
              </div>
            </div>
            <div
              class="row row-cols-1 row-cols-md-3 justify-content-center mb-6 md-mb-8 sm-mb-45px"
              data-anime='{ "el": "childs", "willchange": "transform", "perspective": [1200,1200], "translateY": [0, 0], "scale": [1.1, 1], "rotateX": [30, 0], "opacity": [0,1], "duration": 1000, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <div class="col sm-mb-30px">
                <div
                  class="bg-white h-100 border-radius-6px text-center box-shadow-quadruple-large box-shadow-quadruple-large-hover"
                >
                  <div class="pt-10 pb-10">
                    <img
                      src="images/logo-monday-dark-gray-02.svg"
                      class="h-40px md-h-35px sm-h-40px"
                      alt=""
                      data-no-retina=""
                    />
                  </div>
                  <div class="border-top fs-16 p-15px last-paragraph-no-margin">
                    <p>
                      Project management -
                      <span class="fw-600 text-dark-gray">275% Growth</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col sm-mb-30px">
                <div
                  class="bg-white h-100 border-radius-6px text-center box-shadow-quadruple-large box-shadow-quadruple-large-hover"
                >
                  <div class="pt-10 pb-10">
                    <img
                      src="images/logo-dropbox-dark-gray-02.svg"
                      class="h-40px md-h-35px sm-h-40px"
                      alt=""
                      data-no-retina=""
                    />
                  </div>
                  <div
                    class="border-top fs-16 border-1 border-color-extra-medium-gray p-15px last-paragraph-no-margin"
                  >
                    <p>
                      Team management -
                      <span class="fw-600 text-dark-gray">195% Growth</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="bg-white h-100 border-radius-6px text-center box-shadow-quadruple-large box-shadow-quadruple-large-hover"
                >
                  <div class="pt-10 pb-10">
                    <img
                      src="images/logo-slack-dark-gray-02.svg"
                      class="h-40px md-h-35px sm-h-40px"
                      alt=""
                      data-no-retina=""
                    />
                  </div>
                  <div
                    class="border-top fs-16 border-1 border-color-extra-medium-gray p-15px last-paragraph-no-margin"
                  >
                    <p>
                      Secure storage -
                      <span class="fw-600 text-dark-gray">235% Growth</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 clients-style-06 justify-content-center ps-3 pe-3 xs-mt-40px"
              data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
            >
              <div class="col client-box text-center md-mb-40px">
                <a href="#"
                  ><img
                    src="images/logo-walmart-dark-blue.svg"
                    class="h-45px"
                    alt=""
                    data-no-retina=""
                /></a>
              </div>

              <div class="col client-box text-center md-mb-40px">
                <a href="#"
                  ><img
                    src="images/logo-netflix-dark-blue.svg"
                    class="h-45px"
                    alt=""
                    data-no-retina=""
                /></a>
              </div>

              <div class="col client-box text-center md-mb-40px">
                <a href="#"
                  ><img
                    src="images/logo-invision-dark-blue.svg"
                    class="h-45px"
                    alt=""
                    data-no-retina=""
                /></a>
              </div>

              <div class="col client-box text-center sm-mb-40px">
                <a href="#"
                  ><img
                    src="images/logo-yahoo-dark-blue.svg"
                    class="h-45px"
                    alt=""
                    data-no-retina=""
                /></a>
              </div>

              <div class="col client-box text-center">
                <a href="#"
                  ><img
                    src="images/logo-amazon-dark-blue.svg"
                    class="h-45px"
                    alt=""
                    data-no-retina=""
                /></a>
              </div>
            </div>
          </div>
        </section>
        <section class="p-0">
          <div class="container">
            <div
              class="row justify-content-center"
              data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
            >
              <div class="col-12">
                <div
                  class="border-radius-6px h-450px md-h-350px sm-h-400px d-flex flex-wrap align-items-center justify-content-center overflow-hidden cover-background box-shadow-quadruple-large pt-15"
                  style="
                    background-image: url('images/demo-corporate-video-img.jpg');
                  "
                >
                  <div
                    class="opacity-full-dark bg-gradient-regal-blue-transparent"
                  ></div>
                  <div class="row justify-content-center m-0">
                    <div
                      class="col-lg-7 col-md-8 z-index-1 text-center text-md-start sm-mb-20px"
                    >
                      <h3 class="text-white mb-0 fw-400 fancy-text-style-4">
                        We make the creative solutions for
                        <span
                          class="fw-600"
                          data-fancy-text='{ "effect": "rotate", "string": ["business!", "problems!", "brands!"] }'
                        ></span>
                      </h3>
                    </div>
                    <div
                      class="col-md-2 position-relative z-index-1 text-center sm-mb-20px"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=cfXHhfNy7tU"
                        class="position-relative d-inline-block text-center border border-2 border-color-white rounded-circle video-icon-box video-icon-large popup-youtube"
                      >
                        <span>
                          <span class="video-icon">
                            <i class="fa-solid fa-play fs-20 text-white"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    class="w-100 text-center position-relative mt-auto pt-20px pb-25px ps-15px pe-15px border-top border-color-transparent-white-light"
                  >
                    <div class="fs-14 text-uppercase text-white fw-600 ls-05px">
                      Let's make something great work together.
                      <a
                        href="demo-corporate-contact.html"
                        class="text-decoration-line-bottom text-white"
                        >Got a project in mind?</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row justify-content-center mb-3">
              <div
                class="col-xl-5 col-lg-6 col-md-7 text-center"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <span
                  class="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block"
                  >Predictable pricing</span
                >
                <h3 class="text-dark-gray fw-700 ls-minus-1px">
                  Tailored pricing plans for everyone
                </h3>
              </div>
            </div>
            <div
              class="row align-items-end pricing-table-style-05 g-0 mb-6 background-position-center background-no-repeat justify-content-center"
              style="background-image: url('images/demo-corporate-bg-03.png')"
            >
              <div
                class="col-lg-4 col-md-8 md-mb-30px"
                data-anime='{ "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
              >
                <div
                  class="border-radius-6px position-relative overflow-hidden"
                >
                  <div
                    class="pricing-header pt-45px pb-10px border-radius-6px text-center position-relative top-minus-3px"
                  >
                    <span
                      class="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-13 lh-34 fw-700 border-radius-100px bg-solitude-blue d-inline-block"
                      >Starter</span
                    >
                    <h5 class="fw-700 mb-0 text-dark-gray alt-font">
                      Individual
                    </h5>
                    <div class="pricing-body pt-35px">
                      <ul class="p-0 m-0 list-style-02 fw-500">
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px"
                            ><i
                              class="bi bi-check align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Marketing strategy
                        </li>
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px"
                            ><i
                              class="bi bi-check align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Competitive work analysis
                        </li>
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-red h-20px w-20px border-radius-100 me-10px"
                            ><i
                              class="bi bi-x align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Social media share audit
                        </li>
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-red h-20px w-20px border-radius-100 me-10px"
                            ><i
                              class="bi bi-x align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Monthly management
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="row align-items-center pt-25px pb-25px">
                    <div
                      class="col text-center last-paragraph-no-margin d-flex align-items-center justify-content-center"
                    >
                      <h3
                        class="alt-font text-dark-gray mb-0 me-15px fw-700 ls-minus-2px"
                      >
                        $29
                      </h3>
                      <p class="w-120px fs-15 lh-22 text-start">
                        Per user/month billed annually*
                      </p>
                    </div>
                  </div>
                  <div class="pricing-footer ps-12 pe-12 pb-8 text-center">
                    <a
                      href="demo-corporate-pricing.html"
                      class="btn btn-large btn-dark-gray btn-box-shadow btn-hover-animation-switch btn-round-edge w-100 text-transform-none mb-15px"
                    >
                      <span>
                        <span class="btn-text">Join this plan </span>
                        <span class="btn-icon"
                          ><i class="feather icon-feather-arrow-right"></i
                        ></span>
                        <span class="btn-icon"
                          ><i class="feather icon-feather-arrow-right"></i
                        ></span>
                      </span>
                    </a>
                    <span class="fs-16">Cancel anytime</span>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-8 md-mb-30px"
                data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
              >
                <div
                  class="bg-dark-gray border-radius-6px overflow-hidden position-relative box-shadow-double-large z-index-9"
                >
                  <div
                    class="p-10px fw-700 fs-14 text-white bg-gradient-flamingo-amethyst-green text-uppercase text-center"
                  >
                    Popular
                  </div>
                  <div
                    class="pricing-header pt-45px pb-10px bg-white border-radius-6px text-center position-relative top-minus-3px"
                  >
                    <span
                      class="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-13 lh-34 fw-700 border-radius-100px bg-solitude-blue d-inline-block"
                      >Professional</span
                    >
                    <h5 class="fw-700 mb-0 text-dark-gray alt-font">
                      Business
                    </h5>
                    <div class="pricing-body pt-35px">
                      <ul
                        class="p-0 m-0 list-style-02 fw-500 text-center text-md-start"
                      >
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px"
                            ><i
                              class="bi bi-check align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Marketing strategy
                        </li>
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px"
                            ><i
                              class="bi bi-check align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Competitive work analysis
                        </li>
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px"
                            ><i
                              class="bi bi-check align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Social media share audit
                        </li>
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-red h-20px w-20px border-radius-100 me-10px"
                            ><i
                              class="bi bi-x align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Monthly management
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="row align-items-center pt-25px pb-25px">
                    <div
                      class="col text-center last-paragraph-no-margin d-flex align-items-center justify-content-center"
                    >
                      <h3
                        class="alt-font text-white mb-0 me-15px fw-700 ls-minus-2px"
                      >
                        $39
                      </h3>
                      <p class="w-120px fs-15 lh-22 text-start">
                        Per user/month billed annually*
                      </p>
                    </div>
                  </div>
                  <div class="pricing-footer ps-12 pe-12 pb-8 text-center">
                    <a
                      href="demo-corporate-pricing.html"
                      class="btn btn-large btn-white btn-box-shadow btn-hover-animation-switch btn-round-edge w-100 text-transform-none mb-15px fw-700"
                    >
                      <span>
                        <span class="btn-text">Join this plan </span>
                        <span class="btn-icon"
                          ><i class="feather icon-feather-arrow-right"></i
                        ></span>
                        <span class="btn-icon"
                          ><i class="feather icon-feather-arrow-right"></i
                        ></span>
                      </span>
                    </a>
                    <span class="fs-16 text-white opacity-5 fw-300"
                      >Cancel anytime</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-8"
                data-anime='{ "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
              >
                <div
                  class="border-radius-6px position-relative overflow-hidden"
                >
                  <div
                    class="pricing-header pt-45px pb-10px border-radius-6px text-center position-relative top-minus-3px"
                  >
                    <span
                      class="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-13 lh-34 fw-700 border-radius-100px bg-solitude-blue d-inline-block"
                      >Enterprise</span
                    >
                    <h5 class="fw-700 mb-0 text-dark-gray alt-font">
                      Corporate
                    </h5>
                    <div class="pricing-body pt-35px">
                      <ul
                        class="p-0 m-0 list-style-02 fw-500 text-center text-md-start"
                      >
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px"
                          >
                            <i
                              class="bi bi-check align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Marketing strategy
                        </li>
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px"
                          >
                            <i
                              class="bi bi-check align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Competitive work analysis
                        </li>
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px"
                          >
                            <i
                              class="bi bi-check align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Social media share audit
                        </li>
                        <li
                          class="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10"
                        >
                          <span
                            class="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px"
                          >
                            <i
                              class="bi bi-check align-self-center text-white fs-14 d-flex"
                            ></i></span
                          >Monthly management
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="row align-items-center pt-25px pb-25px">
                    <div
                      class="col text-center last-paragraph-no-margin d-flex align-items-center justify-content-center"
                    >
                      <h3
                        class="alt-font text-dark-gray mb-0 me-15px fw-700 ls-minus-2px"
                      >
                        $59
                      </h3>
                      <p class="w-120px fs-15 lh-22 text-start">
                        Per user/month billed annually*
                      </p>
                    </div>
                  </div>
                  <div class="pricing-footer ps-12 pe-12 pb-8 text-center">
                    <a
                      href="demo-corporate-pricing.html"
                      class="btn btn-large btn-dark-gray btn-box-shadow btn-hover-animation-switch btn-round-edge w-100 text-transform-none mb-15px"
                    >
                      <span>
                        <span class="btn-text">Join this plan </span>
                        <span class="btn-icon"
                          ><i class="feather icon-feather-arrow-right"></i
                        ></span>
                        <span class="btn-icon"
                          ><i class="feather icon-feather-arrow-right"></i
                        ></span>
                      </span>
                    </a>
                    <span class="fs-16">Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 justify-content-center align-items-center"
            >
              <div
                class="col icon-with-text-style-08 sm-mb-25px text-center text-sm-start md-mb-30px"
              >
                <div class="d-flex justify-content-center">
                  <div
                    class="feature-box feature-box-left-icon-middle d-inline-flex align-middle"
                  >
                    <div class="feature-box-icon me-10px">
                      <i class="bi bi-calendar-check fs-20 text-dark-gray"></i>
                    </div>
                    <div class="feature-box-content">
                      <span class="fw-600 text-dark-gray"
                        >Get 30 day free trial</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col icon-with-text-style-08 sm-mb-25px text-center text-sm-start md-mb-30px"
              >
                <div class="d-flex justify-content-center">
                  <div
                    class="feature-box feature-box-left-icon-middle d-inline-flex align-middle"
                  >
                    <div class="feature-box-icon me-10px">
                      <i class="bi bi-wallet2 fs-20 text-dark-gray"></i>
                    </div>
                    <div class="feature-box-content">
                      <span class="fw-600 text-dark-gray"
                        >No any hidden fees pay</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col icon-with-text-style-08 text-center text-sm-start"
              >
                <div class="d-flex justify-content-center">
                  <div
                    class="feature-box feature-box-left-icon-middle d-inline-flex align-middle"
                  >
                    <div class="feature-box-icon me-10px">
                      <i class="bi bi-clock fs-20 text-dark-gray"></i>
                    </div>
                    <div class="feature-box-content">
                      <span class="fw-600 text-dark-gray"
                        >You can cancel anytime</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="bg-gradient-quartz-white border-radius-6px lg-border-radius-0px pb-0"
        >
          <div class="container">
            <div class="row justify-content-center mb-3">
              <div
                class="col-lg-7 text-center"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <h3 class="text-dark-gray fw-700 ls-minus-1px">
                  Interesting articles
                </h3>
              </div>
            </div>
            <div class="row mb-5 sm-mb-7">
              <div class="col-12">
                <ul
                  class="blog-grid blog-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
                  data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
                  style="position: relative; height: 572.562px"
                >
                  <li class="grid-sizer"></li>

                  <li
                    class="grid-item"
                    style="position: absolute; left: 0%; top: 0px"
                  >
                    <div
                      class="card border-0 border-radius-5px box-shadow-quadruple-large box-shadow-quadruple-large-hover"
                    >
                      <div class="blog-image">
                        <a
                          href="demo-corporate-blog-single-clean.html"
                          class="d-block"
                          ><img
                            src="images/demo-corporate-blog-01.jpg"
                            alt=""
                            data-no-retina=""
                        /></a>
                        <div class="blog-categories">
                          <a
                            href="demo-corporate-blog.html"
                            class="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase fw-700"
                            >Agency</a
                          >
                        </div>
                      </div>
                      <div class="card-body p-12 lg-p-10">
                        <a
                          href="demo-corporate-blog-single-clean.html"
                          class="card-title mb-15px fw-700 fs-19 text-dark-gray d-inline-block w-90 md-w-100"
                          >Build up healthy habits and strong peaceful life.</a
                        >
                        <p>
                          Lorem ipsum dolor consectetur adipiscing eiusmod
                          tempor...
                        </p>
                        <div
                          class="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase"
                        >
                          <div class="me-auto">
                            <span
                              class="blog-date d-inline-block fw-700 text-dark-gray"
                              >30 August 2021</span
                            >
                            <div
                              class="d-inline-block author-name fw-700 text-dark-gray"
                            >
                              By
                              <a
                                href="demo-corporate-blog.html"
                                class="text-dark-gray text-decoration-line-bottom"
                                >Den viliamson</a
                              >
                            </div>
                          </div>
                          <div class="like-count">
                            <a href="#"
                              ><i class="fa-regular fa-heart text-red"></i
                              ><span class="text-dark-gray align-middle fw-700"
                                >25</span
                              ></a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    class="grid-item"
                    style="position: absolute; left: 33.3298%; top: 0px"
                  >
                    <div
                      class="card border-0 border-radius-5px box-shadow-quadruple-large box-shadow-quadruple-large-hover"
                    >
                      <div class="blog-image">
                        <a
                          href="demo-corporate-blog-single-clean.html"
                          class="d-block"
                          ><img
                            src="images/demo-corporate-blog-02.jpg"
                            alt=""
                            data-no-retina=""
                        /></a>
                        <div class="blog-categories">
                          <a
                            href="demo-corporate-blog.html"
                            class="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase fw-700"
                            >Luxurious</a
                          >
                        </div>
                      </div>
                      <div class="card-body p-12 lg-p-10">
                        <a
                          href="demo-corporate-blog-single-clean.html"
                          class="card-title mb-15px fw-700 fs-19 text-dark-gray d-inline-block w-90 md-w-100"
                          >How to bring the season into your great marketing.</a
                        >
                        <p>
                          Lorem ipsum dolor consectetur adipiscing eiusmod
                          tempor...
                        </p>
                        <div
                          class="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase"
                        >
                          <div class="me-auto">
                            <span
                              class="blog-date d-inline-block fw-700 text-dark-gray"
                              >28 August 2021</span
                            >
                            <div
                              class="d-inline-block author-name fw-700 text-dark-gray"
                            >
                              By
                              <a
                                href="demo-corporate-blog.html"
                                class="text-dark-gray text-decoration-line-bottom"
                                >Hugh macleod</a
                              >
                            </div>
                          </div>
                          <div class="like-count">
                            <a href="#"
                              ><i class="fa-regular fa-heart text-red"></i
                              ><span class="text-dark-gray align-middle fw-700"
                                >58</span
                              ></a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    class="grid-item"
                    style="position: absolute; left: 66.6597%; top: 0px"
                  >
                    <div
                      class="card border-0 border-radius-5px box-shadow-quadruple-large box-shadow-quadruple-large-hover"
                    >
                      <div class="blog-image">
                        <a
                          href="demo-corporate-blog-single-clean.html"
                          class="d-block"
                          ><img
                            src="images/demo-corporate-blog-03.jpg"
                            alt=""
                            data-no-retina=""
                        /></a>
                        <div class="blog-categories">
                          <a
                            href="demo-corporate-blog.html"
                            class="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase fw-700"
                            >Business</a
                          >
                        </div>
                      </div>
                      <div class="card-body p-12 lg-p-10">
                        <a
                          href="demo-corporate-blog-single-clean.html"
                          class="card-title mb-15px fw-700 fs-19 text-dark-gray d-inline-block w-90 md-w-100"
                          >Be the strong willed one the public relationship.</a
                        >
                        <p>
                          Lorem ipsum dolor consectetur adipiscing eiusmod
                          tempor...
                        </p>
                        <div
                          class="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase"
                        >
                          <div class="me-auto">
                            <span
                              class="blog-date d-inline-block fw-700 text-dark-gray"
                              >26 August 2021</span
                            >
                            <div
                              class="d-inline-block author-name fw-700 text-dark-gray"
                            >
                              By
                              <a
                                href="demo-corporate-blog.html"
                                class="text-dark-gray text-decoration-line-bottom"
                                >Walton smith</a
                              >
                            </div>
                          </div>
                          <div class="like-count">
                            <a href="#"
                              ><i class="fa-regular fa-heart text-red"></i
                              ><span class="text-dark-gray align-middle fw-700"
                                >75</span
                              ></a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="row mb-7 sm-mb-9"
              data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
            >
              <div class="col text-center">
                <div
                  class="fs-26 sm-fs-22 sm-lh-30 fw-600 ls-minus-1px text-dark-gray d-inline-block align-middle me-20px md-m-10px md-mt-0"
                >
                  What do people say about our services?
                </div>
                <a href="https://www.trustpilot.com/" target="_blank"
                  ><img
                    src="images/demo-corporate-11.png"
                    class="d-inline-block align-middle"
                    alt=""
                    data-no-retina=""
                /></a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="navbar-show-modern-bg"></div>
      <div class="navbar-modern-inner">
        <div
          class="collapse navbar-collapse justify-content-center navbar-collapse-clone mCustomScrollbar _mCS_1 mCS_no_scrollbar"
          id="navbarNav-clone"
          style=""
        >
          <div
            id="mCSB_1"
            class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
            style="max-height: none"
            tabindex="0"
          >
            <div
              id="mCSB_1_container"
              class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
              style="position: relative; top: 0; left: 0"
              dir="ltr"
            >
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a href="demo-corporate.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                  <a href="demo-corporate-about.html" class="nav-link">About</a>
                </li>
                <li class="nav-item dropdown dropdown-with-icon-style02">
                  <a href="demo-corporate-services.html" class="nav-link"
                    >Services</a
                  >
                  <i
                    class="fa-solid fa-angle-down dropdown-toggle dropdown-toggle-clone"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a href="demo-corporate-services-details.html"
                        ><i class="line-icon-Medal-2"></i>Business planning</a
                      >
                    </li>
                    <li>
                      <a href="demo-corporate-services-details.html"
                        ><i class="line-icon-Archery-2"></i>Market research</a
                      >
                    </li>
                    <li>
                      <a href="demo-corporate-services-details.html"
                        ><i class="line-icon-Financial"></i>Business
                        consulting</a
                      >
                    </li>
                    <li>
                      <a href="demo-corporate-services-details.html"
                        ><i class="line-icon-Money-Bag"></i>Audience analysis</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a
                    href="demo-corporate-customer-stories.html"
                    class="nav-link"
                    >Testimonials</a
                  >
                </li>
                <li class="nav-item">
                  <a href="demo-corporate-pricing.html" class="nav-link"
                    >Pricing</a
                  >
                </li>
                <li class="nav-item">
                  <a href="demo-corporate-blog.html" class="nav-link">Blog</a>
                </li>
                <li class="nav-item">
                  <a href="demo-corporate-contact.html" class="nav-link"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>
            <div
              id="mCSB_1_scrollbar_vertical"
              class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
              style="display: none"
            >
              <div class="mCSB_draggerContainer">
                <div
                  id="mCSB_1_dragger_vertical"
                  class="mCSB_dragger"
                  style="position: absolute; min-height: 30px; top: 0px"
                >
                  <div class="mCSB_dragger_bar" style="line-height: 30px"></div>
                </div>
                <div class="mCSB_draggerRail"></div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="navbar-toggler float-start navbar-toggler-clone"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="#navbarNav-clone"
          aria-label="Toggle navigation"
          data-target="#navbarNav-clone"
        >
          <span class="navbar-toggler-line"></span>
          <span class="navbar-toggler-line"></span>
          <span class="navbar-toggler-line"></span>
          <span class="navbar-toggler-line"></span>
        </button>
      </div>

      <footer class="p-0 fs-16 border-top border-color-extra-medium-gray">
        <div class="container">
          <div class="row justify-content-center pt-6 sm-pt-40px">
            <div
              class="col-6 col-xl-3 col-lg-12 col-sm-6 last-paragraph-no-margin text-xl-start text-lg-center order-sm-1 lg-mb-50px sm-mb-30px"
            >
              <a
                href="demo-corporate.html"
                class="footer-logo mb-15px d-inline-block"
                ><img
                  src="images/demo-corporate-logo-black.png"
                  data-at2x="images/demo-corporate-logo-black.png"
                  alt=""
                  width="142"
                  height="28"
              /></a>
              <p class="lh-30 w-90 xl-w-100 mx-lg-auto mx-xl-0">
                Gearing your company through an innovative strategy.
              </p>
              <div
                class="elements-social social-icon-style-02 mt-20px xs-mt-15px"
              >
                <ul class="medium-icon dark">
                  <li class="my-0">
                    <a
                      class="facebook"
                      href="https://www.facebook.com/"
                      target="_blank"
                      ><i class="fa-brands fa-facebook-f"></i
                    ></a>
                  </li>
                  <li class="my-0">
                    <a
                      class="dribbble"
                      href="http://www.dribbble.com"
                      target="_blank"
                      ><i class="fa-brands fa-dribbble"></i
                    ></a>
                  </li>
                  <li class="my-0">
                    <a
                      class="twitter"
                      href="https://www.twitter.com"
                      target="_blank"
                      ><i class="fa-brands fa-twitter"></i
                    ></a>
                  </li>
                  <li class="my-0">
                    <a
                      class="instagram"
                      href="https://www.instagram.com"
                      target="_blank"
                      ><i class="fa-brands fa-instagram"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="col-6 col-xl-2 col-lg-3 col-sm-4 xs-mb-30px order-sm-3 order-lg-2"
            >
              <span class="fs-17 fw-600 d-block text-dark-gray mb-5px"
                >Company</span
              >
              <ul>
                <li><a href="demo-corporate-about.html">Who we are</a></li>
                <li>
                  <a href="demo-corporate-services.html">Our services</a>
                  <div
                    class="bg-dark-gray fw-600 text-white lh-22 text-uppercase border-radius-30px ps-10px pe-10px fs-10 ms-10px d-inline-block align-middle"
                  >
                    Hot
                  </div>
                </li>
                <li>
                  <a href="demo-corporate-customer-stories.html">Our clients</a>
                </li>
                <li><a href="demo-corporate-contact.html">Contact us</a></li>
              </ul>
            </div>

            <div
              class="col-6 col-xl-2 col-lg-3 col-sm-4 xs-mb-30px order-sm-4 order-lg-3"
            >
              <span class="fs-17 fw-600 d-block text-dark-gray mb-5px"
                >Services</span
              >
              <ul>
                <li>
                  <a href="demo-corporate-services-details.html">Planning</a>
                </li>
                <li>
                  <a href="demo-corporate-services-details.html">Research</a>
                </li>
                <li>
                  <a href="demo-corporate-services-details.html">Consulting</a>
                </li>
                <li>
                  <a href="demo-corporate-services-details.html">Analysis</a>
                </li>
              </ul>
            </div>

            <div
              class="col-6 col-xl-2 col-lg-3 col-sm-4 xs-mb-30px order-sm-5 order-lg-4"
            >
              <span class="fs-17 fw-600 d-block text-dark-gray mb-5px"
                >Customer</span
              >
              <ul>
                <li>
                  <a href="demo-corporate-customer-stories.html"
                    >Client support</a
                  >
                </li>
                <li>
                  <a href="demo-corporate-customer-stories.html">Help center</a>
                </li>
                <li>
                  <a href="demo-corporate-customer-stories.html"
                    >System status</a
                  >
                </li>
                <li>
                  <a href="demo-corporate-customer-stories.html">Feedback</a>
                </li>
              </ul>
            </div>

            <div
              class="col-xl-3 col-lg-3 col-sm-6 md-mb-50px sm-mb-30px xs-mb-0 order-sm-2 order-lg-5"
            >
              <span class="fs-17 fw-600 d-block text-dark-gray mb-5px"
                >Subscribe newsletter</span
              >
              <p class="lh-30 w-95 sm-w-100 mb-15px">
                Subscribe our newsletter to get the latest news and updates!
              </p>
              <div
                class="d-inline-block w-100 newsletter-style-02 position-relative"
              >
                <form
                  action="email-templates/subscribe-newsletter.php"
                  method="post"
                  class="position-relative"
                >
                  <input
                    class="border-color-extra-medium-gray bg-transparent border-radius-4px w-100 form-control input-small pe-50px required"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <input type="hidden" name="redirect" value="" />
                  <button class="btn pe-20px submit lh-16" aria-label="submit">
                    <i
                      class="feather icon-feather-mail icon-small text-dark-gray"
                    ></i>
                  </button>
                  <div
                    class="form-results border-radius-4px pt-5px pb-5px ps-15px pe-15px fs-14 lh-22 mt-10px w-100 text-center position-absolute d-none"
                  ></div>
                </form>
              </div>
            </div>
          </div>
          <div class="row justify-content-center align-items-center pt-2">
            <div class="col-12">
              <div
                class="divider-style-03 divider-style-03-01 border-color-transparent-white-light"
              ></div>
            </div>

            <div
              class="col-lg-5 pt-35px pb-35px md-pt-0 order-2 order-lg-1 text-center text-lg-start last-paragraph-no-margin"
            >
              <p>
                © 2024 Crafto is Proudly Powered by
                <a
                  href="https://www.themezaa.com/"
                  target="_blank"
                  class="text-dark-gray fw-600 text-decoration-line-bottom"
                  >ThemeZaa</a
                >
              </p>
            </div>

            <div
              class="col-lg-7 pt-35px pb-35px md-pt-25px md-pb-5px order-1 order-lg-2 text-center text-lg-end"
            >
              <ul class="footer-navbar sm-lh-normal">
                <li><a href="#" class="nav-link">Privacy policy</a></li>
                <li><a href="#" class="nav-link">Terms and conditions</a></li>
                <li><a href="#" class="nav-link">Copyright</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div class="scroll-progress d-none d-xxl-block visible">
        <a href="#" class="scroll-top" aria-label="scroll">
          <span class="scroll-text">Scroll</span
          ><span class="scroll-line"
            ><span class="scroll-point" style="height: 6.26711%"></span
          ></span>
        </a>
      </div>
    </div>

    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/vendors.min.js"></script>

    <script
      type="text/javascript"
      src="js/jquery.themepunch.tools.min.js"
    ></script>
    <script
      type="text/javascript"
      src="js/jquery.themepunch.revolution.min.js"
    ></script>

    <script>
      var tpj = jQuery;
      var revapi7;
      var $ = jQuery.noConflict();
      tpj(document).ready(function () {
        if (tpj("#demo-corporate-slider").revolution == undefined) {
          revslider_showDoubleJqueryError("#demo-corporate-slider");
        } else {
          revapi7 = tpj("#demo-corporate-slider")
            .show()
            .revolution({
              sliderType: "standard",
              /* sets the Slider's default timeline */
              delay: 9000,
              /* options are 'auto', 'fullwidth' or 'fullscreen' */
              sliderLayout: "fullscreen",
              /* RESPECT ASPECT RATIO */
              autoHeight: "off",
              /* options that disable autoplay */
              stopLoop: "off",
              stopAfterLoops: -1,
              stopAtSlide: -1,
              navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "reverse",
                onHoverStop: "off",
                arrows: {
                  enable: true,
                  style: "hesperiden",
                  rtl: false,
                  hide_onleave: false,
                  hide_onmobile: true,
                  hide_under: 500,
                  hide_over: 9999,
                  hide_delay: 200,
                  hide_delay_mobile: 1200,
                  left: {
                    container: "slider",
                    h_align: "left",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0,
                  },
                  right: {
                    container: "slider",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0,
                  },
                },
                bullets: {
                  enable: true,
                  style: "hermes",
                  tmp: "",
                  direction: "horizontal",
                  rtl: false,

                  container: "layergrid",
                  h_align: "center",
                  v_align: "bottom",
                  h_offset: 0,
                  v_offset: 30,
                  space: 12,

                  hide_onleave: false,
                  hide_onmobile: true,
                  hide_under: 0,
                  hide_over: 500,
                  hide_delay: true,
                  hide_delay_mobile: 500,
                },
                touch: {
                  touchenabled: "on",
                  touchOnDesktop: "on",
                  swipe_threshold: 75,
                  swipe_min_touches: 1,
                  swipe_direction: "horizontal",
                  drag_block_vertical: true,
                },
              },
              responsiveLevels: [1240, 1024, 768, 480],
              visibilityLevels: [1240, 1024, 768, 480],
              gridwidth: [1240, 1024, 768, 480],
              gridheight: [930, 850, 900, 850],
              /* Lazy Load options are "all", "smart", "single" and "none" */
              lazyType: "smart",
              spinner: "spinner0",
              parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 400,
                levels: [
                  5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 5,
                ],
              },
              shadow: 0,
              shuffle: "off",
              fullScreenAutoWidth: "on",
              fullScreenAlignForce: "on",
              fullScreenOffsetContainer: "nav",
              fullScreenOffset: "",
              hideThumbsOnMobile: "off",
              hideSliderAtLimit: 0,
              hideCaptionAtLimit: 0,
              hideAllCaptionAtLilmit: 0,
              debugMode: false,
              fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
              },
            });
        }
      }); /*ready*/
    </script>
    <script type="text/javascript" src="js/main.js"></script>
    <div class="magic-cursor-wrapper">
      <div
        id="ball-cursor"
        style="
          translate: none;
          rotate: none;
          scale: none;
          opacity: 1;
          border-width: 0px;
          transform: translate(-50%, -50%) translate3d(532px, 404px, 0px)
            scale(0, 0);
        "
      >
        <div id="ball-cursor-loader"></div>
      </div>
    </div>
    <div class="theme-demos" style="display: block">
      <div class="demo-button-wrapper">
        <div class="buy-theme">
          <a href="https://1.envato.market/R53mL2" target="_blank"
            ><div class="theme-wrapper">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 22.284 25.436"
                >
                  <path
                    d="M19.314,9.285c-.745-.414-2.882-.158-5.449.637-4.492,3.07-8.283,7.594-8.547,14.858-.048.174-.491-.024-.579-.077a10.346,10.346,0,0,1-.681-8.3c.189-.314-.428-.7-.539-.591a12.683,12.683,0,0,0-1.765,2.278,11.061,11.061,0,0,0,19.33,10.759c3.438-6.161.246-18.432-1.77-19.558Z"
                    transform="translate(-0.32 -9.089)"
                    fill="#fff"
                  ></path>
                </svg>
              </div></div
          ></a>
        </div>
        <div class="all-demo">
          <a href="#"
            ><div class="theme-wrapper"><div>52+ Pre-built sites</div></div></a
          >
        </div>
      </div>
      <span
        class="close-popup fs-22 text-dark-gray w-40px h-40px d-flex justify-content-center align-items-center"
        ><i class="fa-solid fa-xmark"></i
      ></span>
    </div>
      </>
    )
  }