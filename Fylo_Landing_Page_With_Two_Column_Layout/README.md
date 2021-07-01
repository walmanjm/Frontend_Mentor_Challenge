# Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Fylo_Landing_Page_With_Two_Column_Layout/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Fylo landing page with two column layout](https://walmanjm.github.io/Frontend_Mentor_Challenge/Fylo_Landing_Page_With_Two_Column_Layout/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- `display: grid;`
- `display: flex;`

### What I learned

Use anything in your knowledge about html css as much as you have.

#### html
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- displays site properly based on user's device -->
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <title>Frontend Mentor | Fylo landing page with two column layout</title>
  <link rel="stylesheet" href="index.css">
  <script src="https://kit.fontawesome.com/c08e1bd072.js" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>
  <div class="container">

    <nav>
      <ul class="nav-list">
        <li class="nav-item"><img src="images/logo.svg" alt=""></li>
        <li class="nav-item"><a href="#">Features</a></li>
        <li class="nav-item"><a href="#">Team</a></li>
        <li class="nav-item"><a href="#">Sign In</a></li>
      </ul>
    </nav>


    <main>
      <div class="sec1-text">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>Fylo stores your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.</p>
        <div class="sec1-form">
          <form action="" method="">
            <input type="email" placeholder="Enter your email" required>
            <button>Get Started</button>
          </form>
        </div>
      </div>

      <div class="sec1-img">
        <img src="images/illustration-1.svg" alt="">
      </div>


      <div class="bg-curve"></div>


      <div class="sec2-text">
        <h1>Stay productive, wherever you are</h1>
        <p>Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.</p>
        <p>Securely share files and folders with friends, family and colleagues for
          live collaboration. No email attachments required!</p>
        <div class="arrow">
          <a href="#">See how Fylo works <img src="images/icon-arrow.svg" alt=""></a>
        </div>
        <div class="sec2-sub-text">
          <img src="images/icon-quotes.svg" alt="">
          <p>Fylo has improved our team productivity by an order of magnitude. Since
            making the switch our team has become a well-oiled collaboration machine.</p>
          <div class="sec2-sub-img">
            <div>
              <img src="images/avatar-testimonial.jpg" alt="">
            </div>
            <div>
              <h3>Kyle Burton</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sec2-img">
        <img src="images/illustration-2.svg" alt="">
      </div>


      <div class="sec3-text">
        <div>
          <h2>Get early access today</h2>
          <p>It only takes a minute to sign up and our free starter tier is extremely generous.
            If you have any questions, our support team would be happy to help you.</p>
        </div>
        <div class="sec3-form">
          <form action="" method="">
            <input type="email" placeholder="email@example.com" required>
            <button>Get Started For Free</button>
          </form>
        </div>
      </div>
    </main>

    <footer>
      <div class="footer-logo">
        <img src="images/logo.svg" alt="" class="filtersvg">
      </div>
      <div class="footer-nav">
        <ul class="footer-list">
          <li class="footer-item"><a href="#"><img src="images/icon-phone.svg" alt="">Phone: +1-543-123-4567</a></li>
          <li class="footer-item"><a href="#"><img src="images/icon-email.svg" alt="">example@fylo.com</a></li>
        </ul>
        <ul class="footer-list">
          <li class="footer-item"><a href="#">About Us</a></li>
          <li class="footer-item"><a href="#">Jobs</a></li>
          <li class="footer-item"><a href="#">Press</a></li>
          <li class="footer-item"><a href="#">Blog</a></li>
        </ul>
        <ul class="footer-list">
          <li class="footer-item"><a href="#">Contact Us</a></li>
          <li class="footer-item"><a href="#">Terms</a></li>
          <li class="footer-item"><a href="#">Privacy</a></li>
        </ul>
        <ul class="footer-list sosmed">
          <li class="footer-item"><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li class="footer-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li class="footer-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </footer>

    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.
      </a>
      Coded by
      <a href="https://walmanjm.github.io/Frontend_Mentor_Challenge" target="_blank">walmanjm.
      </a>
    </div>
  </div>
</body>

</html>
```
#### css
```css
:root {
  --VeryDarkBlue: hsl(243, 87%, 12%);
  --DesaturatedBlue: hsl(238, 22%, 44%);
  --BrightBlue: hsl(224, 93%, 58%);
  --ModerateCyan: hsl(170, 45%, 43%);
  --LightGrayishBlue: hsl(240, 75%, 98%);
  --LightGray: hsl(0, 0%, 75%);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  max-width: 1440px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
}
.container {
  display: grid;
}

/* nav */
.nav-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 3rem;
}
.nav-item {
  margin-right: 3rem;
}
.nav-item:first-child {
  margin-right: auto;
}
.nav-item a {
  text-decoration: none;
  color: var(--VeryDarkBlue);
  transition: all 200ms ease-in-out;
}
.nav-item a:hover {
  color: var(--BrightBlue);
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat (4, auto);
  grid-template-areas:
    "aa bb"
    "cc cc"
    "dd ee"
    "ff ff";
}
.sec1-text {
  grid-area: aa;
  align-self: center;
}
.sec1-img {
  grid-area: bb;
}
.bg-curve {
  grid-area: cc;
}
.sec2-text {
  grid-area: dd;
}
.sec2-img {
  grid-area: ee;
}
.sec3-text {
  grid-area: ff;
}

/* main sec1 */
.sec1-text h1 {
  color: var(--VeryDarkBlue);
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  line-height: 2.7rem;
  margin: 3rem 3rem 0rem 3rem;
}
.sec1-text p {
  color: var(--DesaturatedBlue);
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  line-height: 1.3rem;
  margin: 1.5rem 3rem 0rem 3rem;
}
.sec1-img img,
.sec2-img img {
  width: auto;
  height: 25rem;
  margin: 3rem;
}
.sec1-form {
  display: flex;
  flex-direction: row;
  margin: 2rem 3rem 0rem 3rem;
}
.sec1-form input {
  height: 2rem;
  width: 16rem;
  margin-right: 0.5rem;
}
.sec1-form input:focus {
  outline-color: #ff0000;
}
.sec1-form button {
  background: var(--BrightBlue);
  color: var(--LightGrayishBlue);
  font-family: "Open Sans", sans-serif;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.2rem;
}
.sec1-form button:hover {
  background: hsl(224, 97%, 65%);
  cursor: pointer;
}

.bg-curve {
  background-image: url("images/bg-curve-desktop.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 5rem;
  width: 100%;
  margin-top: 5rem;
}
/* main sec2 */
.sec2-text {
  background: var(--LightGrayishBlue);
}
.sec2-text h1 {
  color: var(--VeryDarkBlue);
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin: 3rem 3rem 0rem 3rem;
}
.sec2-text p {
  color: var(--DesaturatedBlue);
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  margin: 2rem 3rem 2rem 3rem;
}
.arrow a {
  color: var(--ModerateCyan);
  text-decoration: underline;
  text-underline-offset: 0.3rem;
  align-items: center;
  margin: 0rem 3rem 0rem 3rem;
}
.arrow a:hover {
  color: hsl(182, 97%, 45%);
  cursor: pointer;
}
.sec2-img {
  background: var(--LightGrayishBlue);
}
.sec2-sub-text {
  background: #ffffff;
  box-shadow: 0.1rem 0.1rem 0.5rem 0.1rem #808080;
  width: 22rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.3rem;
  margin: 3rem 3rem 4rem 3rem;
}
.sec2-sub-text p {
  line-height: 1.5rem;
  font-size: 0.9rem;
  margin: 0;
}
.sec2-sub-img {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.sec2-sub-img img {
  width: 2rem;
  height: 2rem;
  border-radius: 50rem;
  margin-right: 0.5rem;
}
.sec2-sub-img h3 {
  font-size: 0.7rem;
  margin: 0;
}
.sec2-sub-img p {
  font-size: 0.6rem;
  margin: 0;
}

/* main sec3 */
.sec3-text {
  background: var(--DesaturatedBlue);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: center;
}
.sec3-text h2 {
  font-size: 1.5rem;
  color: var(--LightGrayishBlue);
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  margin: 4rem 3rem 1rem 3rem;
}
.sec3-text p {
  font-size: 1rem;
  color: var(--LightGrayishBlue);
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  line-height: 1.5rem;
  width: 30rem;
  margin: 0rem 3rem 4rem 3rem;
}
.sec3-form input {
  height: 2rem;
  width: 25rem;
  display: block;
}
.sec3-form input:focus {
  outline-color: #ff0000;
}
.sec3-form button {
  background: var(--BrightBlue);
  color: var(--LightGrayishBlue);
  font-family: "Open Sans", sans-serif;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
}
.sec3-form button:hover {
  background: hsl(224, 97%, 65%);
  cursor: pointer;
}

/* footer */
footer {
  background: var(--VeryDarkBlue);
  color: var(--LightGrayishBlue);
  display: grid;
}
.footer-logo {
  margin: 4rem 3rem 1rem 3rem;
}
.filtersvg {
  filter: invert(100%);
}
.footer-nav {
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin: 0 3rem 3rem 3rem;
}
.footer-nav img {
  margin-right: 1rem;
}
.footer-nav ul {
  list-style: none;
  margin-right: 10rem;
}
.footer-nav li {
  margin-bottom: 1rem;
}
.footer-nav a {
  color: var(--LightGrayishBlue);
  text-decoration: none;
}
.footer-nav a:hover {
  color: var(--BrightBlue);
  cursor: pointer;
}
.sosmed {
  display: flex;
}
.sosmed a {
  margin-right: 1rem;
  font-size: 2rem;
}

/* frontend mentor */
.attribution {
  font-size: 11px;
  text-align: center;
  background: var(--VeryDarkBlue);
  color: var(--LightGrayishBlue);
}
.attribution a {
  color: hsl(228, 45%, 44%);
}

@media (max-width: 768px) {
  .container {
    display: grid;
    align-items: center;
  }
  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat (7, auto);
    grid-template-areas:
      "bb"
      "aa"
      "cc"
      "ee"
      "dd"
      "ff"
      "gg";
  }
  .nav-list {
    margin: 2rem;
  }
  .nav-list img {
    width: auto;
    height: 2rem;
    margin: 0 auto;
  }

  .sec1-text {
    margin: 0 auto;
  }
  .sec1-text h1 {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    line-height: 3rem;
    margin-bottom: 2rem;
    font-size: 2.3rem;
  }
  .sec1-text p {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    line-height: 2rem;
    font-size: 1.4rem;
  }
  .sec1-form {
    display: grid;
    text-align: center;
    margin: 0;
  }
  .sec1-form input {
    margin-top: 2rem;
    margin-right: 0;
    width: 30rem;
    height: 2.5rem;
  }
  .sec1-form button {
    width: 30rem;
    margin-top: 1rem;
    padding: 0.7rem 2rem;
  }

  .bg-curve {
    background-image: url("images/bg-curve-mobile.svg");
  }

  .sec2-text h1 {
    font-size: 1.5rem;
    font-family: "Open Sans", sans-serif;
    text-align: center;
  }
  .sec2-text p {
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
  }
  .arrow {
    text-align: center;
    margin-bottom: 3rem;
  }
  .sec2-sub-text {
    width: 25rem;
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  .sec3-text {
    grid-template-columns: 1fr;
    align-items: center;
    place-items: center;
  }
  .sec3-text p {
    text-align: center;
    width: 25rem;
    margin-top: 1rem;
    margin-left: 0;
    margin-right: 0;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  .sec3-form form {
    margin: 0rem 0rem 3rem 0rem;
    text-align: center;
  }
  .sec3-form input {
    width: 30rem;
    height: 2.5rem;
  }
  .sec3-form button {
    width: 30rem;
    margin-top: 1rem;
    padding: 0.7rem 2rem;
  }

  .footer-nav {
    grid-template-columns: auto;
    font-size: 1.5rem;
  }
  .footer-nav ul {
    margin-right: 0rem;
    margin-bottom: 2rem;
  }
  .sosmed {
    justify-content: center;
  }
  .sosmed a {
    font-size: 2rem;
  }
}
```
### Continued development

this is knew to me but i like it, im still learning and will continue learning 

### Useful resources

- [w3schools](https://www.w3schools.com) - This helped for anyone who want to start to learn.
- [3 minute read Mastering Markdown](https://guides.github.com/features/mastering-markdown) - This is an article which helped me about "Markdown"

## Author

- Website - [walmanjm.github.io](https://walmanjm.github.io/Frontend_Mentor_Challenge)
- Frontend Mentor - [frontendmentor.io/walmanjm](https://www.frontendmentor.io/profile/walmanjm)

## Acknowledgments

looking forward for anyone to help..
