# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Stats_Preview_Card_Component/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Stats preview card component](https://walmanjm.github.io/Frontend_Mentor_Challenge/Stats_Preview_Card_Component/index.html)

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
  <title>Frontend Mentor | Stats preview card component</title>
</head>

<body>
  <div class="container">
    <div class="card">
      <div class="card-left">
        <div class="heading">
          <h1>Get <span>insights</span> that help your business grow.</h1>
          <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer
            experience, and overall efficiency.</p>
        </div>
        <div class="stats">
          <div class="stat">
            <h2>10k+</h2>
            <p>companies</p>
          </div>
          <div class="stat">
            <h2>314</h2>
            <p>templates</p>
          </div>
          <div class="stat">
            <h2>12m+</h2>
            <p>queries</p>
          </div>
        </div>
      </div>

      <div class="card-right"></div>

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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");

:root {
  --mainbackground: hsl(233, 47%, 7%);
  --cardbackground: hsl(244, 38%, 16%);
  --softviolet: hsl(277, 64%, 61%);
  --white: hsl(0, 0%, 100%);
  --mainparagraph: hsla(0, 0%, 100%, 0.75);
  --statheadings: hsla(0, 0%, 100%, 0.6);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  max-width: 1440px;
  font-size: 15px;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  margin: 0 auto;
  background-color: var(--mainbackground);
}
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 1rem;
}
.card-left {
  display: grid;
  background: var(--cardbackground);
  padding: 4rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.card-right {
  display: grid;
  background-color: var(--softviolet);
  background-image: url(images/image-header-desktop.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.card-right:hover {
  background-blend-mode: normal;
}
.heading h1 {
  font-family: "Inter", sans-serif;
  color: var(--white);
  width: 22rem;
}
span {
  color: var(--softviolet);
}
span:hover {
  color: var(--white);
  cursor: pointer;
}
.heading p {
  font-family: "Lexend Deca", sans-serif;
  color: var(--mainparagraph);
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  width: 22rem;
}
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
}
.stat h2 {
  font-family: "Inter", sans-serif;
  color: var(--white);
}
.stat h2:hover {
  color: var(--softviolet);
  cursor: pointer;
}
.stat p {
  font-family: "Lexend Deca", sans-serif;
  color: var(--statheadings);
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-top: 0.5rem;
}
.attribution {
  font-family: "Lexend Deca", sans-serif;
  color: var(--softviolet);
  font-size: smaller;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.attribution a {
  color: var(--statheadings);
  text-decoration: none;
}
.attribution a:hover {
  color: var(--softviolet);
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 768px) {
  .card {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15rem auto;
    padding: 4rem 2rem 2rem 2rem;
  }
  .card-right {
    grid-column: 1;
    grid-row: 1/2;
    background-image: url(images/image-header-mobile.jpg);
    border-top-left-radius: 0.5rem;
    border-bottom-right-radius: 0;
  }
  .card-left {
    grid-column: 1;
    grid-row: 2/3;
    text-align: center;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0.5rem;
  }
  .stats {
    grid-template-columns: 1fr;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .stat {
    padding-top: 2rem;
  }
  .heading h1 {
    width: auto;
  }
  .heading p {
    width: auto;
  }
  .card-left {
    padding: 1rem;
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
