---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.





## Código PHP/Twig

```php showLineNumbers
    <section id="main-header" class="navigation">
      <div class="nav-align">
        <div class="brand">
          <a href="/">
            <img class="nav-brand" src="logo.png" alt="" />
          </a>
        </div>
        <nav>
          <div class="nav-mobile">
            <a id="nav-toggle" href="#!"><span></span></a>
          </div>
          <ul class="nav-list">
            <li
              class="nav-item {% if page == 'home' %}active{% endif %}"
              aria-current="inicio"
            >
              <a class="nav-link" href="/">Inicio</a>
            </li>
            <li
              class="nav-item {% if page == 'about' %}active{% endif %}"
              aria-current="nosotros"
            >
              <a class="nav-link" href="/nosotros">Quiénes somos</a>
            </li>
            <li
              class="nav-item {% if page == 'services' %}active{% endif %}"
              aria-current="servicios"
            >
              <a class="nav-link" href="/servicios">Servicios</a>
            </li>
            <li
              class="nav-item {% if page == 'contact' %}active{% endif %}"
              aria-current="contacto"
            >
              <a class="nav-link" href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
```


## Código JS
```js showLineNumbers
function checkScroollMenu() {
  if ($(window).scrollTop() > 80) {
    // $('#main-header').addClass('fixed-top');
    $("#main-header").addClass("nav-on-scroll");
  } else {
    // $('#main-header').removeClass('fixed-top');
    $("#main-header").removeClass("nav-on-scroll");
  }
}
checkScroollMenu();

$(window).scroll(function () {
  checkScroollMenu();
});

(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery
```



## Código SASS

```scss showLineNumbers
.navigation {
  height: auto;
  background-color: #192e3f; /* NavBar BackGround Color */
  top: 0px;

  position: absolute;
  z-index: 900;
  width: 100%;

  .active {
    /* NavItem Active Class */
    a {
      color: red !important;
    }
  }

  .nav-align {
    /* NavBar Items Alignment */
    display: flex;
    justify-content: space-between;
  }
}

.brand {
  padding: 10px;

  img {
    width: 90px; /* NavBar Logo Width */
    transition: all 0.3s ease-out;
  }
}

.brand a,
.brand a:visited {
  color: black;
  text-decoration: none;
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
}

nav {
  display: flex;
  align-items: center;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;

  text-align: center;
}
nav ul li {
  float: left;
  position: relative;
}
nav ul li a,
nav ul li a:visited {
  color: white !important; /* NavBar Mobile Links Color */
  display: block;
  padding: 0 20px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: bolder;
  font-size: 1.2rem;
  text-shadow: 4px 3px 9px rgba(0, 0, 0, 0.73);
}
nav ul li a:hover,
nav ul li a:visited:hover {
  background: white; /* HOVER NavBar Mobile BackGround Color */
  color: black !important; /* HOVER NavBar Mobile Links Color */
}
nav ul li a:not(:only-child):after,
nav ul li a:visited:not(:only-child):after {
  padding-left: 4px;
  content: " ▾";
}
nav ul li ul li {
  min-width: 190px;
}
nav ul li ul li a {
  padding: 15px;
  line-height: 20px;
}

/* Mobile navigation */
.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  height: 70px;
  width: 70px;
}

@media only screen and (max-width: 795px) {
  .nav-align {
    display: flex;
    justify-content: center !important;
  }

  .nav-on-scroll {
    position: fixed !important;
  }

  .navigation {
    height: 100px;
    top: 0px;
    background-color: black;

    .lines {
      display: none !important;
    }

    .brand {
      position: absolute;
      padding: 20px;
      margin-left: 0px !important;
      text-align: center;
      img {
        width: 70px;
      }
    }
  }

  .nav-mobile {
    display: block;
    a {
      left: 0px !important;
      top: 35px !important;
    }
  }
  .nav-list {
    width: 100%;
    padding: 20px 0px;
  }

  nav {
    width: 100%;
    padding: 70px 0 15px;
  }
  nav ul {
    display: none;
    background-color: black;
  }
  nav ul li {
    float: none;
    text-align: center;
  }
  nav ul li a {
    padding: 15px;
    line-height: 20px;
    color: royalblue;
  }
  nav ul li ul li a {
    padding-left: 30px;
  }
}
@media screen and (min-width: 796px) {
  /* NavBar Styles on Scroll */
  .nav-on-scroll {
    position: fixed !important;
    background-color: black; /* NavBar BackGround Color on Scroll */
    top: 0 !important;

    .brand {
      img {
        max-width: 70%;
        transition: all 0.3s ease-out;
      }
    }
  }
  /* NavBar Styles on Scroll */

  .navigation,
  .nav-mobile {
    transition: all 0.5s ease-out;

    .brand {
      margin-left: 50px;
    }

    nav {
      margin-right: 50px;
    }

    nav ul li a,
    nav ul li a:visited {
      background: transparent;
    }

    .nav-link {
      color: white !important; /* NavLink Color */
      transition: all 0.5s ease-out;
    }
    .nav-link:hover {
      color: black !important; /* NavLink Color on HOVER */
      transition: all 0.5s ease-out;
    }

    .nav-item {
      transition: all 0.5s ease-out;
    }

    .nav-item:hover {
      background: white; /* NavItem BackGround Color on HOVER */
      transition: all 0.5s ease-out;
    }
  }

  .nav-list {
    display: contents !important;
  }
}
#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
}
#nav-toggle span,
#nav-toggle span:before,
#nav-toggle span:after {
  cursor: pointer;
  border-radius: 1px;
  height: 5px;
  width: 35px;
  background: white; /* NavMenu Button Color */
  position: absolute;
  display: block;
  content: "";
  transition: all 300ms ease-in-out;
}
#nav-toggle span:before {
  top: -10px;
}
#nav-toggle span:after {
  bottom: -10px;
}
#nav-toggle.active span {
  background-color: transparent;
}
#nav-toggle.active span:before,
#nav-toggle.active span:after {
  top: 0;
}
#nav-toggle.active span:before {
  transform: rotate(45deg);
}
#nav-toggle.active span:after {
  transform: rotate(-45deg);
}

```


## Código CSS
```css showLineNumbers
.navigation {
  height: auto;
  background-color: #192e3f; /* NavBar BackGround Color */
  top: 0px;
  position: absolute;
  z-index: 900;
  width: 100%;
}
.navigation .active {
  /* NavItem Active Class */
}
.navigation .active a {
  color: red !important;
}
.navigation .nav-align {
  /* NavBar Items Alignment */
  display: flex;
  justify-content: space-between;
}

.brand {
  padding: 10px;
}
.brand img {
  width: 90px; /* NavBar Logo Width */
  transition: all 0.3s ease-out;
}

.brand a,
.brand a:visited {
  color: black;
  text-decoration: none;
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
}

nav {
  display: flex;
  align-items: center;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

nav ul li {
  float: left;
  position: relative;
}

nav ul li a,
nav ul li a:visited {
  color: white !important; /* NavBar Mobile Links Color */
  display: block;
  padding: 0 20px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: bolder;
  font-size: 1.2rem;
  text-shadow: 4px 3px 9px rgba(0, 0, 0, 0.73);
}

nav ul li a:hover,
nav ul li a:visited:hover {
  background: white; /* HOVER NavBar Mobile BackGround Color */
  color: black !important; /* HOVER NavBar Mobile Links Color */
}

nav ul li a:not(:only-child):after,
nav ul li a:visited:not(:only-child):after {
  padding-left: 4px;
  content: " ▾";
}

nav ul li ul li {
  min-width: 190px;
}

nav ul li ul li a {
  padding: 15px;
  line-height: 20px;
}

/* Mobile navigation */
.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  height: 70px;
  width: 70px;
}

@media only screen and (max-width: 795px) {
  .nav-align {
    display: flex;
    justify-content: center !important;
  }
  .nav-on-scroll {
    position: fixed !important;
  }
  .navigation {
    height: 100px;
    top: 0px;
    background-color: black;
  }
  .navigation .lines {
    display: none !important;
  }
  .navigation .brand {
    position: absolute;
    padding: 20px;
    margin-left: 0px !important;
    text-align: center;
  }
  .navigation .brand img {
    width: 70px;
  }
  .nav-mobile {
    display: block;
  }
  .nav-mobile a {
    left: 0px !important;
    top: 35px !important;
  }
  .nav-list {
    width: 100%;
    padding: 20px 0px;
  }
  nav {
    width: 100%;
    padding: 70px 0 15px;
  }
  nav ul {
    display: none;
    background-color: black;
  }
  nav ul li {
    float: none;
    text-align: center;
  }
  nav ul li a {
    padding: 15px;
    line-height: 20px;
    color: royalblue;
  }
  nav ul li ul li a {
    padding-left: 30px;
  }
}
@media screen and (min-width: 796px) {
  /* NavBar Styles on Scroll */
  .nav-on-scroll {
    position: fixed !important;
    background-color: black; /* NavBar BackGround Color on Scroll */
    top: 0 !important;
  }
  .nav-on-scroll .brand img {
    max-width: 70%;
    transition: all 0.3s ease-out;
  }
  /* NavBar Styles on Scroll */
  .navigation,
  .nav-mobile {
    transition: all 0.5s ease-out;
  }
  .navigation .brand,
  .nav-mobile .brand {
    margin-left: 50px;
  }
  .navigation nav,
  .nav-mobile nav {
    margin-right: 50px;
  }
  .navigation nav ul li a,
  .navigation nav ul li a:visited,
  .nav-mobile nav ul li a,
  .nav-mobile nav ul li a:visited {
    background: transparent;
  }
  .navigation .nav-link,
  .nav-mobile .nav-link {
    color: white !important; /* NavLink Color */
    transition: all 0.5s ease-out;
  }
  .navigation .nav-link:hover,
  .nav-mobile .nav-link:hover {
    color: black !important; /* NavLink Color on HOVER */
    transition: all 0.5s ease-out;
  }
  .navigation .nav-item,
  .nav-mobile .nav-item {
    transition: all 0.5s ease-out;
  }
  .navigation .nav-item:hover,
  .nav-mobile .nav-item:hover {
    background: white; /* NavItem BackGround Color on HOVER */
    transition: all 0.5s ease-out;
  }
  .nav-list {
    display: contents !important;
  }
}
#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
}

#nav-toggle span,
#nav-toggle span:before,
#nav-toggle span:after {
  cursor: pointer;
  border-radius: 1px;
  height: 5px;
  width: 35px;
  background: white; /* NavMenu Button Color */
  position: absolute;
  display: block;
  content: "";
  transition: all 300ms ease-in-out;
}

#nav-toggle span:before {
  top: -10px;
}

#nav-toggle span:after {
  bottom: -10px;
}

#nav-toggle.active span {
  background-color: transparent;
}

#nav-toggle.active span:before,
#nav-toggle.active span:after {
  top: 0;
}

#nav-toggle.active span:before {
  transform: rotate(45deg);
}

#nav-toggle.active span:after {
  transform: rotate(-45deg);
}
```