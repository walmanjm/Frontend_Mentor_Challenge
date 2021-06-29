# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Huddle_Landing_Page_With_Single_Introductory_Section/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Huddle landing page with single introductory section](https://walmanjm.github.io/Frontend_Mentor_Challenge/Huddle_Landing_Page_With_Single_Introductory_Section/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- `display: grid;`

### What I learned

Use anything in your knowledge about html css as much as you have.

#### html
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- displays site properly based on user's device -->
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
  <title>
    Frontend Mentor | Huddle landing page with single introductory section
  </title>
  <link rel="stylesheet" href="index.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
  <script src="https://kit.fontawesome.com/c08e1bd072.js" crossorigin="anonymous"></script>
</head>

<body>
  <div class="container">
    <header>
      <img src="images/logo.svg" alt="" />
    </header>

    <section class="introductory">
      <div>
        <img src="images/illustration-mockups.svg" alt="" />
      </div>
      <div class="heading">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Register</button>
      </div>
    </section>

    <footer>
      <a href=""><i class="fab fa-facebook"></i></a>
      <a href=""><i class="fab fa-twitter"></i></a>
      <a href=""><i class="fab fa-instagram"></i></a>
    </footer>
  </div>
</body>

</html>
```
#### css
```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  max-width: 1440px;
  background: url(images/bg-desktop.svg) no-repeat;
  background-size: contain;
  background-color: hsl(257, 40%, 49%);
  margin: 2rem;
}
h1 {
  font-family: "Poppins", sans-serif;
  color: hsl(0, 100%, 100%);
  font-weight: 600;
}
p {
  font-family: "Open Sans", sans-serif;
  color: hsl(0, 100%, 100%);
  font-weight: 400;
}

/* container */
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
}
header {
  grid-column: 1;
  grid-row: 1 / 2;
}
.introductory {
  grid-column: 1;
  grid-row: 2 / 3;
}
footer {
  grid-column: 1;
  grid-row: 3 / 4;
}

/* header */
header img {
  height: 3rem;
  width: auto;
}

/* section1 introductory */
.introductory {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}
.introductory {
  padding-top: 4rem;
}
.introductory img {
  height: auto;
  width: 100%;
}
.heading {
  padding-top: 3rem;
  padding-left: 3rem;
}
.heading h1 {
  font-size: 2rem;
  max-width: 25rem;
}
.heading p {
  margin-top: 1rem;
  max-width: 30rem;
}
button {
  padding: 1rem 4rem 1rem 4rem;
  border-radius: 50rem;
  border: none;
  color: hsl(257, 40%, 49%);
  background-color: hsl(0, 100%, 100%);
  box-shadow: 0.2rem 0.3rem 0.1rem hsl(300, 57%, 73%);
  font-weight: 600;
  margin-top: 2rem;
}
button:hover {
  cursor: pointer;
  color: hsl(0, 100%, 100%);
  background-color: hsl(300, 69%, 71%);
}

/* footer */
footer {
  text-align: right;
  padding-right: 3rem;
}
footer a {
  color: hsl(0, 100%, 100%);
  font-size: 2rem;
  padding-right: 1rem;
}
footer a:hover {
  color: hsl(300, 69%, 71%);
  font-size: 2.1rem;
  cursor: pointer;
}

/* media */
@media (max-width: 768px) {
  body {
    margin: 2rem;
  }
  .container {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: auto;
  }
  header {
    grid-column: 1;
    grid-row: 1;
    margin: 0;
  }
  .introductory {
    grid-column: 1;
    grid-row: 2;
    margin: 0;
  }
  footer {
    grid-column: 1;
    grid-row: 3;
    margin: 0;
  }

  header img {
    height: 2rem;
    width: auto;
  }
  .introductory {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding-top: 2rem;
  }
  .introductory img {
    width: 100%;
    height: auto;
    padding-top: 1rem;
  }
  .heading {
    padding-top: 2rem;
    padding-left: 0;
    text-align: center;
    margin: 0 auto;
  }
  .heading h1 {
    text-align: center;
    font-size: 1.4rem;
    margin: 0 auto;
  }
  .heading p {
    text-align: center;
    font-size: 1;
    margin: 0 auto;
    padding-top: 1.5rem;
    line-height: 1.5rem;
  }
  button {
    padding: 0.5rem 4rem 0.5rem 4rem;
  }
  footer {
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 0;
    padding-right: 0;
  }
  footer a {
    font-size: 1.5rem;
  }
  footer a:hover {
    font-size: 1.5rem;
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
