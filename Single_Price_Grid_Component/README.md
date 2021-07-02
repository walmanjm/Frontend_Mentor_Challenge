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
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Frontend Mentor | Single Price Grid Component</title>
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
  <link rel="stylesheet" href="index.css" />
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
      <ul class="expert">
        <li>Tutorial by industrial experts</li>
        <li>Peer &amp; expert code review</li>
        <li>Coding exercises</li>
        <li>Access to our GitHub repos</li>
        <li>Community forum</li>
        <li>Flashcard decks</li>
        <li>New Videos every week</li>
      </ul>
    </div>

    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.
      </a>
      <br />
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
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap");

:root {
  --Cyan: hsl(179, 62%, 43%);
  --Bright_Yellow: hsl(71, 73%, 54%);
  --Light_Gray: hsl(204, 43%, 93%);
  --Grayish_Blue: hsl(218, 22%, 67%);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--Light_Gray);
  font-family: "Karla", sans-serif;
  font-size: 16px;
  max-width: 1440px;
  display: grid;
  place-items: center;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat (3, auto);
  width: auto;
  padding: 6rem 0;
}
.col1 {
  padding: 2rem;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  background-color: hsl(0, 0%, 100%);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.col2 {
  padding: 2rem;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-color: var(--Cyan);
  border-bottom-left-radius: 0.5rem;
}
.col3 {
  padding: 2rem;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: hsl(179, 58%, 50%);
  border-bottom-right-radius: 0.5rem;
}

.community {
  color: var(--Cyan);
  font-size: 1.3rem;
  font-weight: 700;
  padding-bottom: 1rem;
}
.guarantee {
  color: var(--Bright_Yellow);
  font-size: 1rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
}
.access {
  color: var(--Grayish_Blue);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.3rem;
}

.subs {
  color: var(--Light_Gray);
  font-size: 1rem;
  font-weight: 700;
  padding-bottom: 1rem;
}
.permonth {
  color: var(--Light_Gray);
  font-size: 0.9rem;
  font-weight: 400;
  padding-bottom: 0.5rem;
}
strong {
  font-size: 1.5rem;
  padding-right: 0.5rem;
}
.perday {
  color: var(--Light_Gray);
  font-size: 0.9rem;
  font-weight: 400;
  padding-bottom: 2rem;
}
button {
  width: 100%;
  height: 2.5rem;
  border: none;
  border-radius: 0.3rem;
  background-color: var(--Bright_Yellow);
  color: var(--Light_Gray);
}

.whyus {
  color: var(--Light_Gray);
  font-size: 1rem;
  font-weight: 700;
  padding-bottom: 1rem;
}
.expert {
  color: var(--Light_Gray);
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.2rem;
}
ul {
  list-style: none;
}
.attribution {
  color: var(--Grayish_Blue);
  font-size: 0.9rem;
  text-align: left;
  padding-top: 1rem;
}
.attribution a {
  color: var(--Grayish_Blue);
  text-decoration: none;
}
.attribution a:hover {
  color: var(--Cyan);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .container {
    grid-template-rows: repeat(3, 1fr) auto;
    grid-template-columns: 1fr;
    padding: 4rem 2rem;
    margin: 0 auto;
  }
  .col1 {
    grid-row: 1;
    grid-column: 1;
  }
  .col2 {
    grid-row: 2;
    grid-column: 1;
    border-bottom-left-radius: 0;
  }
  .col3 {
    grid-row: 3;
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

