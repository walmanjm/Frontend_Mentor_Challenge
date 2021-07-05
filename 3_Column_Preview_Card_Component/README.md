# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/3_Column_Preview_Card_Component/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | 3-column preview card component](https://walmanjm.github.io/Frontend_Mentor_Challenge/3_Column_Preview_Card_Component/index.html)

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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link rel="stylesheet" href="index.css">
  <title>Frontend Mentor | 3-column preview card component</title>
</head>

<body>
  <div class="wraper">
    <div class="box boxone">
      <img src="images/icon-sedans.svg" alt="#">
      <h1>Sedans</h1>
      <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
        or on your next road trip.</p>
      <button class="btn btnsedans">Learn More</button>
    </div>
    <div class="box boxtwo">
      <img src="images/icon-suvs.svg" alt="#">
      <h1>SUVs</h1>
      <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
        and off-road adventures.</p>
      <button class="btn btnsuvs">Learn More</button>
    </div>
    <div class="box boxthree">
      <img src="images/icon-luxury.svg" alt="#">
      <h1>Luxury</h1>
      <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
        rental and arrive in style.</p>
      <button class="btn btnluxury">Learn More</button>
    </div>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">FrontendMentor</a>.
      <br>Coded by <a href="https://walmanjm.github.io/Frontend_Mentor_Challenge" target="_blank">walmanjm</a>.
    </div>
  </div>

</body>

</html>
```
#### css
```css
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&display=swap");

:root {
  --BrightOrange: hsl(31, 77%, 52%);
  --DarkCyan: hsl(184, 100%, 22%);
  --VeryDarkCyan: hsl(179, 100%, 13%);

  --TransparentWhite: hsla(0, 0%, 100%, 0.75);
  --VeryLightGray: hsl(0, 0%, 95%);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 15px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: var(--VeryLightGray);
}
.wraper {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: auto auto;
  width: 45rem;
  margin: 0 auto;
  margin-top: 10%;
}
.box {
  padding: 2rem;
}
.boxone {
  background-color: var(--BrightOrange);
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
}
.boxtwo {
  background-color: var(--DarkCyan);
}
.boxthree {
  background-color: var(--VeryDarkCyan);
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
img {
  width: 3rem;
  height: auto;
  margin-bottom: 1rem;
}
h1 {
  color: var(--VeryLightGray);
  font-family: "Big Shoulders Display", cursive;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
p {
  color: var(--TransparentWhite);
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.4rem;
  margin-bottom: 4rem;
}
.btn {
  padding: 0.7rem 1.5rem;
  border-radius: 50rem;
  border: none;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
}
.btnsedans {
  color: var(--BrightOrange);
}
.btnsedans:hover {
  color: var(--VeryLightGray);
  background-color: var(--BrightOrange);
  cursor: pointer;
  border: 0.2rem solid var(--VeryLightGray);
}
.btnsuvs {
  color: var(--DarkCyan);
}
.btnsuvs:hover {
  color: var(--VeryLightGray);
  background-color: var(--DarkCyan);
  cursor: pointer;
  border: 0.2rem solid var(--VeryLightGray);
}
.btnluxury {
  color: var(--VeryDarkCyan);
}
.btnluxury:hover {
  color: var(--VeryLightGray);
  background-color: var(--VeryDarkCyan);
  cursor: pointer;
  border: 0.2rem solid var(--VeryLightGray);
}
.attribution {
  text-align: center;
  color: var(--BrightOrange);
  font-size: smaller;
  margin-top: 1rem;
}
.attribution a {
  color: var(--BrightOrange);
  text-decoration: none;
}
.attribution a:hover {
  color: var(--DarkCyan);
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 768px) {
  .wraper {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    width: auto;
    margin: 4rem 2rem;
  }
  .boxone {
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0;
  }
  .boxthree {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0;
  }
  .attribution {
    color: var(--DarkCyan);
  }
  .attribution a {
    color: var(--DarkCyan);
  }
  .attribution a:hover {
    color: var(--BrightOrange);
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

