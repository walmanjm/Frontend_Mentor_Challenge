# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Single_Price_Grid_Component/design/desktop-design.jpg?raw=true)

### Links

- Solution URL: [Testimonials_Grid_Section README.md](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/7f8d15996244c5340fa6d91b35d3a3966ca1a4c6/Single_Price_Grid_Component/README.md)
- Live Site URL: [Frontend Mentor | Single Price Grid Component](https://walmanjm.github.io/Frontend_Mentor_Challenge/Single_Price_Grid_Component/index.html)

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
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Frontend Mentor | Single Price Grid Component</title>
    <link rel="stylesheet" href="index.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Karla&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <div class="container">
      <div class="col col1">
        <h1 class="community">Join our community</h1>
        <p class="guarantee">30-day, hassle-free money back guarantee</p>
        <p class="access">
          Gain access to our full library of tutorial along with expert code
          reviews. <br />Perfect for any developers who are serious about honing
          their skills.
        </p>
      </div>
      <div class="col col2">
        <h1 class="subs">Monthly Subscription</h1>
        <p class="permonth"><strong>&dollar;29</strong> per month</p>
        <p class="perday">Full access for less than &dollar;1 a day</p>
        <button>Sign Up</button>
      </div>
      <div class="col col3">
        <h1 class="whyus">Why Us</h1>
        <p class="expert">
          Tutorial by industrial experts <br />Peer &amp; expert code review
          <br />Coding exercises <br />Access to our GitHub repos
          <br />Community forum <br />Flashcard decks <br />New Videos every
          week
        </p>
      </div>

      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor.
        </a>
        <br />
        Coded by
        <a
          href="https://walmanjm.github.io/Frontend_Mentor_Challenge"
          target="_blank"
          >walmanjm.
        </a>
      </div>
    </div>
  </body>
</html>
```
#### css
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 16px;
}
body {
  background-color: hsl(210, 46%, 95%);
  font-family: "Karla", sans-serif;
  max-width: 1440px;
  margin: 0 auto;
  padding: 6rem;
  display: grid;
  place-items: center;
}
.container {
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 1fr;
}
.col1 {
  padding: 2rem;
  grid-column: 1 / 3;
  background-color: hsl(0, 0%, 100%);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.col2 {
  padding: 2rem;
  grid-column: 1;
  background-color: hsl(179, 62%, 43%);
  border-bottom-left-radius: 0.5rem;
}
.col3 {
  padding: 2rem;
  grid-column: 2;
  background-color: hsl(179, 58%, 50%);
  border-bottom-right-radius: 0.5rem;
}

.community {
  color: hsl(179, 62%, 43%);
  font-size: 1.3rem;
  font-weight: 700;
  padding-bottom: 1rem;
}
.guarantee {
  color: hsl(71, 73%, 54%);
  font-size: 1rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
}
.access {
  color: hsl(218, 22%, 67%);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.3rem;
}

.subs {
  color: hsl(204, 43%, 93%);
  font-size: 1rem;
  font-weight: 700;
  padding-bottom: 1rem;
}
.permonth {
  color: hsl(204, 43%, 93%);
  font-size: 0.9rem;
  font-weight: 400;
  padding-bottom: 0.5rem;
}
strong {
  font-size: 1.5rem;
  padding-right: 0.5rem;
}
.perday {
  color: hsl(204, 43%, 93%);
  font-size: 0.9rem;
  font-weight: 400;
  padding-bottom: 2rem;
}
button {
  width: 100%;
  height: 2.5rem;
  border: none;
  border-radius: 0.3rem;
  background-color: hsl(71, 73%, 54%);
  color: hsl(204, 43%, 93%);
}

.whyus {
  color: hsl(204, 43%, 93%);
  font-size: 1rem;
  font-weight: 700;
  padding-bottom: 1rem;
}
.expert {
  color: hsl(204, 43%, 93%);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2rem;
}
.attribution {
  color: hsl(218, 22%, 67%);
  font-size: 0.9rem;
  text-align: left;
  padding-top: 1rem;
}
.attribution a {
  color: hsl(218, 22%, 67%);
  text-decoration: none;
}
.attribution a:hover {
  color: hsl(179, 62%, 43%);
  text-decoration: underline;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 575px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 1fr;
  }
  .col1 {
    grid-column: 1;
  }
  .col2 {
    grid-column: 1;
    border-bottom-left-radius: 0;
  }
  .col3 {
    grid-column: 1;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
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

