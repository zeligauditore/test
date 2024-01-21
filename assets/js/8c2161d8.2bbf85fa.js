"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1549],{6859:(n,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var e=t(5893),i=t(1151);const o={sidebar_position:2,description:"Barra de Navegaci\xf3n con Barra de Contacto arriba."},s="Contact Bar",r={id:"snippets/navbars/navContactTop",title:"Contact Bar",description:"Barra de Navegaci\xf3n con Barra de Contacto arriba.",source:"@site/docs/snippets/navbars/navContactTop.md",sourceDirName:"snippets/navbars",slug:"/snippets/navbars/navContactTop",permalink:"/test/docs/snippets/navbars/navContactTop",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/snippets/navbars/navContactTop.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Barra de Navegaci\xf3n con Barra de Contacto arriba."},sidebar:"snippetsSidebar",previous:{title:"Navbar Base",permalink:"/test/docs/snippets/navbars/navbar-base"},next:{title:"Cards",permalink:"/test/docs/category/cards"}},l={},c=[{value:"C\xf3digo PHP / TWIG",id:"c\xf3digo-php--twig",level:2},{value:"C\xf3digo SCSS",id:"c\xf3digo-scss",level:2},{value:"C\xf3digo JS",id:"c\xf3digo-js",level:2}];function d(n){const a={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.h1,{id:"contact-bar",children:"Contact Bar"}),"\n",(0,e.jsx)(a.p,{children:(0,e.jsx)(a.img,{alt:"Barras de Navegaci\xf3n",src:t(1308).Z+"",width:"800",height:"346"})}),"\n",(0,e.jsx)(a.h2,{id:"c\xf3digo-php--twig",children:"C\xf3digo PHP / TWIG"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-php",metastring:"showLineNumbers",children:'<section id="main-header" class="navigation">\n      <div class="top-contact">\n          <div class="container">\n              <div class="row d-flex justify-content-between">\n                  <div class="col-10 col-xl-8">\n                      <ul class="fa-ul">\n                          <li>\n                              <span class="fa-li">\n                                  <i class="fa-solid fa-phone-flip"></i>\n                              </span>\n                              <a href="tel:" target="_blank">\n                                  442 000 0000\n                              </a>\n                          </li>\n\n                          <li>\n                              <span class="fa-li">\n                                  <i class="fa-solid fa-envelope"></i>\n                              </span>\n                              <a href="mailto:" target="_blank">\n                                  contacto@contacto.com\n                              </a>\n                          </li>\n\n                          \n                          <li>\n                              <span class="fa-li">\n                                  <i class="fa-solid fa-location-dot"></i>\n                              </span>\n                              <a href="#" target="_blank">\n                                Direcci\xf3n No. 00 Colonia Lomas de Queretaro\n                              </a>\n                          </li>\n                      </ul>\n                  </div>\n\n                  <div class="col-2 top-social">\n                      <a href="http://" target="_blank">\n                          <i class="fa-brands fa-facebook"></i>\n                      </a>\n                      <a href="http://" target="_blank">\n                          <i class="fa-brands fa-instagram"></i>\n                      </a>\n                      <a href="http://" target="_blank">\n                          <i class="fa-brands fa-linkedin"></i>\n                      </a>\n                      <a href="http://" target="_blank">\n                          <i class="fa-brands fa-twitter"></i>\n                      </a>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class="nav-align">\n        <div class="brand">\n          <a href="/">\n            <img class="nav-brand" src="/assets/img/logo.png" alt="" />\n          </a>\n        </div>\n\n        <nav>\n          <div class="nav-mobile">\n            <a id="nav-toggle" href="#!"><span></span></a>\n          </div>\n\n          <ul class="nav-list">\n            <li class="nav-item {% if page == \'home\' %}active{% endif %}" aria-current="inicio">\n              <a class="nav-link" href="/">\n                Inicio\n              </a>\n            </li>\n\n            <li class="nav-item {% if page == \'nosotros\' %}active{% endif %}" aria-current="nosotros">\n              <a class="nav-link" href="/nosotros">\n                Qui\xe9nes somos\n              </a>\n            </li>\n\n            <li class="nav-item {% if page == \'servicios\' %}active{% endif %}" aria-current="servicios">\n              <a class="nav-link" href="/servicios">\n                Servicios\n              </a>\n            </li>\n\n            <li class="nav-item {% if page == \'contacto\' %}active{% endif %}" aria-current="contacto">\n              <a class="nav-link" href="/contacto">\n                Contacto\n              </a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </section>\n'})}),"\n",(0,e.jsx)(a.h2,{id:"c\xf3digo-scss",children:"C\xf3digo SCSS"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-scss",children:'.navigation{\n    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(26,39,77,0.9093837364047181) 100%);\n\n    height: auto;\n    background-color: transparent; /* NavBar BackGround Color */\n\n    position: absolute;\n    z-index: 900;\n    width: 100%;\n\n    .top-contact{\n        .container{\n          padding-top: 20px;\n          padding-bottom: 10px;\n    \n          @media only screen and (max-width: 992px){\n            max-width: 100%;\n          }\n          @media only screen and (max-width: 999px){\n            display: none !important;\n          }\n        }\n        ul{\n          display: flex;\n          margin-bottom: 0rem;\n          justify-content: space-between;\n        }\n        a,\n        li{\n          color: white;\n          text-decoration: none;\n        }\n        .top-social a{\n          margin-right: 5px;\n    \n          i{\n            font-size: 1.2rem;\n          }\n        }\n    }\n\n    .nav-align {\n    /* NavBar Items Alignment */\n        display: flex;\n        justify-content: space-between;\n\n        nav {\n            display: flex;\n            align-items: center;\n\n            ul {\n                list-style: none;\n                margin: 0;\n                padding: 0;\n                text-align: center;\n\n                li {\n                    float: left;\n                    position: relative;\n\n                    a,\n                    a:visited {\n                        color: white !important; /* NavBar Mobile Links Color */\n                        display: block;\n                        padding: 0 20px;\n                        text-decoration: none;\n                        text-transform: uppercase;\n                        font-weight: bolder;\n                        font-size: 1.2rem;\n                        text-shadow: 4px 3px 9px rgba(0, 0, 0, 0.73);\n\n                        &::after{\n                            content:"";\n                            width: 100%;\n                            height: 1px;\n                            background-color: transparent;\n                            display: block;\n                        }\n                    }\n\n                    a:not(:only-child):after,\n                    a:visited:not(:only-child):after {\n                        padding-left: 4px;\n                        content: " \u25be";\n                    }\n                }\n            }\n\n            ul li ul li {\n                min-width: 190px;\n            }\n            ul li ul li a {\n                padding: 15px;\n                line-height: 20px;\n            }\n\n\n            /* Mobile navigation */\n            .nav-mobile {\n                display: none;\n                position: absolute;\n                top: 0;\n                right: 0;\n                background: transparent;\n                height: 70px;\n                width: 70px;\n            }\n        }\n    }\n\n\n    // Mobile Navigation\n    @media only screen and (max-width: 999px){\n        top: 0px;\n        height: 100px;\n        background-color: #1A274D;\n\n        position: fixed !important;\n\n        .top-contact{\n            display: none;\n            transition: all 0.3s ease-out;\n        }\n\n        .nav-align {\n            display: flex;\n            justify-content: center !important;\n\n            .brand {\n                position: absolute;\n                padding-top: 20px;\n                margin-left: 0px !important;\n                text-align: center;\n                z-index: 999;\n                \n                max-width: 25%;\n          \n                @media only screen and (max-width: 999px){\n                  max-width: 190px;\n                }\n                @media only screen and (max-width: 414px){\n                  max-width: 150px;\n                }\n            }\n\n\n            nav{\n                width: 100%;\n                padding: 100px 0 15px;\n\n                .nav-mobile {\n                    display: block;\n                    a {\n                      left: 0px !important;\n                      top: 35px !important;\n                    }\n                }\n\n                .nav-list{\n                    width: 100%;\n                    padding: 20px 0px;\n\n                    display: none;\n                    background-color: #1A274D;\n\n                    .active{/* NavItem Active Class */\n                        a{\n                            background-color: #203478;\n                        }\n                    }\n\n                    .nav-item{\n                        float: none;\n                        text-align: center;\n\n                        a {\n                            padding: 15px;\n                            line-height: 20px;\n                            color: royalblue;\n                        }\n                    }\n                }\n\n                ul li ul li a {\n                    padding-left: 30px;\n                }\n            }\n        }\n    }\n\n    // Desktop Navigation\n    @media screen and (min-width: 1000px){\n        position: fixed !important;\n\n        &.nav-on-scroll {\n            background-color: #1A274D; /* NavBar BackGround Color on Scroll */\n            top: 0 !important;\n        \n            .top-contact{\n              display: none;\n              transition: all 0.3s ease-out;\n            }\n        \n            .brand {\n              img {\n                max-width: 50%;\n                transition: all 0.3s ease-out;\n              }\n            }\n        }\n\n        &, .nav-mobile{\n            transition: all 0.5s ease-out;\n\n            .nav-align{\n                .brand {\n                    padding: 10px;\n                    width: 25%; /* NavBar Logo Width */\n                    margin-left: 50px;\n                  \n                    img {\n                        transition: all 0.3s ease-out;\n                    }\n                  }\n    \n                nav{\n                    margin-right: 50px;\n                    .nav-list{\n                        display: contents !important;\n                        .active { /* NavItem Active Class */\n                            .nav-link::after{\n                                content: "";\n                                width: 100%;\n                                height: 1px;\n                                display: block;\n                                background: #FF0019;\n                            }\n                        }\n    \n                        .nav-item{\n                            transition: all 0.5s ease-out;\n                            .nav-link,\n                            .nav-link:visited {\n                                background: transparent;\n\n                                color: white !important; /* NavLink Color */\n                                transition: all 0.5s ease-out;\n                            }\n\n                            a:hover,\n                            a:visited:hover {\n                                transition: all 0.5s ease-out;\n                                &::after{\n                                    content:"";\n                                    width: 100%;\n                                    height: 1px;\n                                    background-color: #FF0019;\n                                    display: block;\n                                }\n                            }\n\n                            &:hover{\n                                transition: all 0.5s ease-out;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n\n    #nav-toggle {\n        position: absolute;\n        left: 18px;\n        top: 22px;\n        cursor: pointer;\n        padding: 10px 35px 16px 0px;\n    }\n    #nav-toggle span,\n    #nav-toggle span:before,\n    #nav-toggle span:after {\n        cursor: pointer;\n        border-radius: 1px;\n        height: 5px;\n        width: 35px;\n        background: white; /* NavMenu Button Color */\n        position: absolute;\n        display: block;\n        content: "";\n        transition: all 300ms ease-in-out;\n    }\n    #nav-toggle span:before {\n        top: -10px;\n    }\n    #nav-toggle span:after {\n        bottom: -10px;\n    }\n    #nav-toggle.active span {\n        background-color: transparent;\n    }\n    #nav-toggle.active span:before,\n    #nav-toggle.active span:after {\n        top: 0;\n    }\n    #nav-toggle.active span:before {\n        transform: rotate(45deg);\n    }\n    #nav-toggle.active span:after {\n        transform: rotate(-45deg);\n    }\n}\n'})}),"\n",(0,e.jsx)(a.h2,{id:"c\xf3digo-js",children:"C\xf3digo JS"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-js",metastring:"showLineNumbers",children:'function checkScroollMenu() {\n    if ($(window).scrollTop() > 60) {\n      // $(\'#main-header\').addClass(\'fixed-top\');\n      $("#main-header").addClass("nav-on-scroll");\n    } else {\n      // $(\'#main-header\').removeClass(\'fixed-top\');\n      $("#main-header").removeClass("nav-on-scroll");\n    }\n  }\n  checkScroollMenu();\n  \n  $(window).scroll(function () {\n    checkScroollMenu();\n  });\n  \n  (function ($) {\n    // Begin jQuery\n    $(function () {\n      // DOM ready\n      // If a link has a dropdown, add sub menu toggle.\n      $("nav ul li a:not(:only-child)").click(function (e) {\n        $(this).siblings(".nav-dropdown").toggle();\n        // Close one dropdown when selecting another\n        $(".nav-dropdown").not($(this).siblings()).hide();\n        e.stopPropagation();\n      });\n      // Clicking away from dropdown will remove the dropdown class\n      $("html").click(function () {\n        $(".nav-dropdown").hide();\n      });\n      // Toggle open and close nav styles on click\n      $("#nav-toggle").click(function () {\n        $("nav ul").slideToggle();\n      });\n      // Hamburger to X toggle\n      $("#nav-toggle").on("click", function () {\n        this.classList.toggle("active");\n      });\n    }); // end DOM ready\n  })(jQuery); // end jQuery\n'})})]})}function p(n={}){const{wrapper:a}={...(0,i.a)(),...n.components};return a?(0,e.jsx)(a,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},1308:(n,a,t)=>{t.d(a,{Z:()=>e});const e=t.p+"assets/images/nav2-0e1a30f46ad354646744becdb60090dc.webp"},1151:(n,a,t)=>{t.d(a,{Z:()=>r,a:()=>s});var e=t(7294);const i={},o=e.createContext(i);function s(n){const a=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function r(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),e.createElement(o.Provider,{value:a},n.children)}}}]);