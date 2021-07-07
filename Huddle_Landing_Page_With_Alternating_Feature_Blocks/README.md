# Frontend Mentor - Huddle landing page with alternating feature blocks solution

This is a solution to the [Huddle landing page with alternating feature blocks challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Huddle_Landing_Page_With_Alternating_Feature_Blocks/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Huddle landing page with alternating feature blocks](https://walmanjm.github.io/Frontend_Mentor_Challenge/Huddle_Landing_Page_With_Alternating_Feature_Blocks/index.html)

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
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link rel="stylesheet" href="index.css">
  <script src="https://kit.fontawesome.com/c08e1bd072.js" crossorigin="anonymous"></script>
  <title>Frontend Mentor | Huddle landing page with alternating feature blocks</title>
</head>

<body>
  <div class="container">
    <header>
      <div class="top">
        <img class="top-logo" src="images/logo.svg" alt="#">
        <a href="#" class="top-btn">Try It Free</a>
      </div>
      <div class="heading">
        <div class="heading-text">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion.</p>
          <button>Get Started For Free</button>
        </div>
        <div class="heading-ilustration">
          <img src="images/illustration-mockups.svg" alt="#">
        </div>
      </div>
    </header>

    <main>
      <div class="main-box1 box">
        <div class="box1-text">
          <h3>Grow Together</h3>
          <p>Generate meaningful discussions with your audience and build a strong, loyal community.
            Think of the insightful conversations you miss out on with a feedback form.</p>
        </div>
        <div class="box1-ilustration ilustration">
          <img src="images/illustration-grow-together.svg" alt="#">
        </div>
      </div>
      <div class="main-box2 box">
        <div class="box2-ilustration ilustration">
          <img src="images/illustration-flowing-conversation.svg" alt="#">
        </div>
        <div class="box2-text">
          <h3>Flowing Conversations</h3>
          <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads
            have just-in-time loading for a more natural flow.</p>
        </div>
      </div>
      <div class="main-box3 box">
        <div class="box3-text">
          <h3>Your Users</h3>
          <p>It takes no time at all to integrate Huddle with your app's authentication solution.
            This means, once signed in to your app, your users can start chatting immediately.</p>
        </div>
        <div class="box3-ilustration ilustration">
          <img src="images/illustration-your-users.svg" alt="#">
        </div>
      </div>
      <div class="main-box4">
        <div>
          <h2>Ready To Build Your Community?</h2>
          <button>Get Started For Free</button>
        </div>
      </div>
    </main>

    <footer>
      <div class="footer-logo">
        <img src="images/logo.svg" alt="#">
      </div>

      <div class="footer-list">
        <div class="footer-info">
          <img src="images/icon-location.svg" alt="#">
          <a href="#" class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua</a>
          <img src="images/icon-phone.svg" alt="#">
          <a href="#">+1-543-123-4567</a>
          <img src="images/icon-email.svg" alt="#">
          <a href="#">example@huddle.com</a>
        </div>
        <div class="footer-about">
          <a href="#">About Us</a>
          <a href="#">What We Do</a>
          <a href="#">FAQ</a>
        </div>
        <div class="footer-contact">
          <a href="#">Career</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="footer-sosmed">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-copyright">
        &copy; Copyright 2018 Huddle. All rights reserved.
      </div>
      <p class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">FrontendMentor.</a>
        Coded by <a href="https://walmanjm.github.io/Frontend_Mentor_Challenge" target="_blank">walmanjm.</a>
      </p>
    </footer>
  </div>
</body>

</html>
```
#### css
```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

:root {
  --Pink: hsl(322, 100%, 66%);
  --VeryPaleCyan: hsl(193, 100%, 96%);
  --VeryDarkCyan: hsl(192, 100%, 9%);
  --GrayishBlue: hsl(208, 11%, 55%);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 18px;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  justify-items: center;
}

/* ---header--- */
header {
  display: grid;
  row-gap: 2rem;
  background: url(images/bg-hero-desktop.svg) no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--VeryPaleCyan);
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 4rem 1rem 4rem;
}
.top img {
  width: auto;
  height: 2rem;
}
.top a {
  padding: 0.5rem 2.5rem;
  background: #ffffff;
  color: #000000;
  border: 0;
  border-radius: 50rem;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: 0.1rem 0.1rem 0.5rem #d3d3d3;
}
.top a:hover {
  color: #808080;
}
.heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 2rem;
  padding: 0 4rem 4rem 4rem;
}
.heading-ilustration,
.heading-text {
  align-self: center;
  justify-self: center;
}
.heading-ilustration img {
  width: auto;
  height: 25rem;
}
.heading-text h1 {
  color: var(--VeryDarkCyan);
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  width: 25rem;
  margin-bottom: 1rem;
}
.heading-text p {
  color: var(--VeryDarkCyan);
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  width: 32rem;
  line-height: 1.5rem;
  margin-bottom: 2rem;
}
button {
  padding: 1rem 4rem;
  background: var(--Pink);
  color: var(--VeryPaleCyan);
  border: 0;
  border-radius: 50rem;
  box-shadow: 0.1rem 0.1rem 0.5rem #d3d3d3;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
}

/* ---main--- */
main {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  align-items: center;
  justify-items: center;
  margin: 8rem 6rem;
  row-gap: 2.5rem;
}
.box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  column-gap: 2rem;
  border-radius: 1rem;
  padding: 2rem 6rem;
  box-shadow: 0.1rem 0.1rem 1.5rem #d3d3d3;
}
.box h3 {
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: var(--VeryDarkCyan);
  margin-bottom: 1rem;
}
.box p {
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: var(--GrayishBlue);
}
.main-box4 {
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 2.5rem 4rem;
  margin-top: 6rem;
  margin-bottom: -13rem;
  text-align: center;
  box-shadow: 0.1rem 0.1rem 0.5rem #d3d3d3;
}
.main-box4 h2 {
  font-family: "Poppins", sans-serif;
  color: var(--VeryDarkCyan);
  margin-bottom: 2rem;
}
.main-box4 button {
  padding: 1.5rem 5rem;
  background: var(--Pink);
  color: var(--VeryPaleCyan);
  border: 0;
  border-radius: 50rem;
  box-shadow: 0.1rem 0.1rem 0.5rem #d3d3d3;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
}
button:hover {
  background: hsl(322, 86%, 73%);
  cursor: pointer;
}
.ilustration img {
  width: auto;
  height: 20rem;
}

/* ---footer--- */
footer {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  row-gap: 1rem;
  background-color: var(--VeryDarkCyan);
  padding: 8rem 4rem 4rem 4rem;
}
footer a {
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: var(--VeryPaleCyan);
}
.footer-logo img {
  width: auto;
  height: 2rem;
}
.footer-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  font-size: 0.9rem;
}
.footer-info {
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 1rem;
}
.footer-info a {
  margin-left: 1rem;
}
.footer-about,
.footer-contact {
  display: grid;
  justify-self: center;
}
.footer-about a:hover,
.footer-contact a:hover {
  text-decoration: underline;
  text-decoration-color: var(--Pink);
  text-underline-offset: 0.2rem;
  cursor: pointer;
}
.footer-sosmed {
  justify-self: center;
  font-size: 1.5rem;
}
.footer-sosmed a {
  padding-right: 1rem;
}
.footer-sosmed a:hover {
  color: var(--Pink);
}
.footer-copyright,
.attribution {
  font-family: "Open Sans", sans-serif;
  color: var(--VeryPaleCyan);
  font-size: 0.7rem;
  text-align: right;
}
.attribution a:hover {
  color: var(--Pink);
}

/* ---media--- */
@media (max-width: 768px) {
  header {
    background: url(images/bg-hero-mobile.svg) no-repeat;
  }
  .top {
    padding: 1rem 1rem;
  }
  .top img {
    width: auto;
    height: 1rem;
  }
  .top a {
    padding: 0.3rem 1rem;
    font-size: 0.7rem;
  }
  .heading {
    grid-template-columns: 1fr;
    padding: 1rem;
    text-align: center;
  }
  .heading-text {
    margin-bottom: 3rem;
  }
  .heading-text h1 {
    width: auto;
    font-size: 1.7rem;
  }
  .heading-text p {
    width: auto;
  }
  .heading-ilustration img {
    width: auto;
    height: 14rem;
  }

  main {
    margin: 2rem 1rem;
  }
  .box {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    row-gap: 2rem;
    padding: 2rem 1rem;
    text-align: center;
  }
  .box1-ilustration,
  .box3-ilustration {
    grid-column: 1;
    grid-row: 1/2;
  }
  .box1-text,
  .box3-text {
    grid-column: 1;
    grid-row: 2/3;
  }
  .ilustration img {
    width: auto;
    height: 13rem;
  }
  .main-box4 {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    padding: 2rem 2rem;
    margin-bottom: -5rem;
  }
  .main-box4 h2 {
    font-size: 1rem;
  }
  .main-box4 button {
    padding: 0.7rem 2rem;
    font-size: 0.7rem;
  }

  footer {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    padding: 8rem 1rem 1rem 1rem;
  }
  .footer-list {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
  }
  .footer-about,
  .footer-contact {
    justify-self: left;
  }
  .footer-about,
  .footer-sosmed {
    margin-top: 2rem;
  }
  .footer-about a,
  .footer-contact a {
    justify-self: left;
    margin-top: 1rem;
    font-size: 1rem;
  }
  .footer-copyright,
  .attribution {
    text-align: center;
  }
  .footer-copyright {
    margin-top: 2rem;
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
