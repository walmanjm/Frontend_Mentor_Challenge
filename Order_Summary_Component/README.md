# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- See hover states for interactive elements

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Order_Summary_Component/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Order summary](https://walmanjm.github.io/Frontend_Mentor_Challenge/Order_Summary_Component/index.html)

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
  <title>Frontend Mentor | Order summary card</title>
</head>

<body>
  <main class="container">
    <img src="images/illustration-hero.svg" alt="#">
    <div class="order">
      <h1>Order Summary</h1>
      <p>You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!</p>
    </div>

    <div class="plan">
      <img src="images/icon-music.svg" alt="#">
      <div class="plandetail">
        <h2>Annual Plan</h2>
        <p> $59.99/year</p>
      </div>
      <a href="#" class="change">Change</a>
    </div>

    <a href="#" class="payment">Proceed to Payment</a>
    <a href="#" class="cancel">Cancel Order</a>

    <footer class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.</a>
      Coded by <a href="https://walmanjm.github.io/Frontend_Mentor_Challenge" target="_blank">walmanjm.</a>
    </footer>
  </main>
</body>

</html>
```
#### css
```css
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,500;0,700;1,900&display=swap");

:root {
  --Paleblue: hsl(225, 100%, 94%);
  --Brighblue: hsl(245, 75%, 52%);
  --Verypaleblue: hsl(225, 100%, 98%);
  --Desaturatedblue: hsl(224, 23%, 55%);
  --Darkblue: hsl(223, 47%, 23%);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  max-width: 1440px;
  padding: 4rem 0;
  margin: 0 auto;
  background-color: var(--Paleblue);
  background-image: url(images/pattern-background-desktop.svg);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  font-family: "Red Hat Display", sans-serif;
}

.container {
  background-color: white;
  border-radius: 1rem;
  display: grid;
}
.container img {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.order {
  justify-self: center;
  text-align: center;
  max-width: 20rem;
  margin-top: 2rem;
}
.order h1 {
  margin-bottom: 1rem;
  color: var(--Darkblue);
  font-size: 1.5rem;
  font-weight: 700;
}
.order p {
  color: var(--Desaturatedblue);
}

.plan {
  display: flex;
  align-items: center;
  background-color: var(--Verypaleblue);
  padding: 1rem;
  margin: 1rem 2rem;
  border-radius: 1rem;
}
.plan img {
  padding-right: 1rem;
}
.plandetail h2 {
  color: var(--Darkblue);
  font-size: 1rem;
}
.plandetail p {
  color: var(--Desaturatedblue);
}

.change {
  margin-left: auto;
  color: var(--Brighblue);
}
.change:hover {
  text-decoration: none;
  color: var(--Desaturatedblue);
}

.payment {
  background-color: var(--Brighblue);
  color: var(--Verypaleblue);
  padding: 1rem;
  margin: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  text-decoration: none;
  box-shadow: 0.1rem 0.5rem 1rem #a6a2c9;
}
.payment:hover {
  background-color: var(--Desaturatedblue);
}

.cancel {
  margin: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  color: var(--Desaturatedblue);
}
.cancel:hover {
  color: var(--Darkblue);
}

.attribution {
  font-size: 11px;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 1rem;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
.attribution a:hover {
  color: var(--Desaturatedblue);
}

@media (max-width: 768px) {
  body {
    background-image: url(images/pattern-background-mobile.svg);
    padding: 4rem 2rem;
  }
  .container img {
    height: auto;
    width: 100%;
  }
  .order {
    max-width: 17rem;
  }
  .plan {
    font-size: 0.9rem;
  }
  .plan img {
    height: auto;
    width: 3.5rem;
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
