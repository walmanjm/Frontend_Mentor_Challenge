# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Four_Card_Feature_Section/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Four card feature section](https://walmanjm.github.io/Frontend_Mentor_Challenge/Four_Card_Feature_Section/index.html)

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
  <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">

  <title>Frontend Mentor | Four card feature section</title>
  <link rel="stylesheet" href="index.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap" rel="stylesheet">
  <style>
    .attribution {
      font-size: 11px;
      text-align: center;
    }

    .attribution a {
      color: hsl(228, 45%, 44%);
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="top">
      <h1>Reliable, efficient delivery</h1>
      <h2>Powered by Technology</h2>
      <p>Our Artificial Intelligence powered tools use millions of project data points
        to ensure that your project is successful</p>
    </div>

    <div class="card card1">
      <h1>Supervisor</h1>
      <p>Monitors activity to identify project roadblocks</p>
      <img src="images/icon-supervisor.svg" alt="">
    </div>

    <div class="card card2">
      <h1>Team Builder</h1>
      <p>Scans our talent network to create the optimal team for your project</p>
      <img src="images/icon-team-builder.svg" alt="">
    </div>

    <div class="card card3">
      <h1>Karma</h1>
      <p>Regularly evaluates our talent to ensure quality</p>
      <img src="images/icon-karma.svg" alt="">
    </div>

    <div class="card card4">
      <h1>Calculator</h1>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src="images/icon-calculator.svg" alt="">
    </div>

    <footer>
      <p class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        <br>Coded by <a href="https://walmanjm.github.io/Frontend_Mentor_Challenge" target="_blank">walmanjm.
        </a>
      </p>
    </footer>
  </div>
</body>

</html>
```
#### css
```css
:root {
  --red: hsl(0, 78%, 62%);
  --cyan: hsl(180, 62%, 55%);
  --orange: hsl(34, 97%, 64%);
  --blue: hsl(212, 86%, 64%);
  --verydarkblue: hsl(234, 12%, 34%);
  --grayishblu: hsl(229, 6%, 66%);
  --verylightgray: hsl(0, 0%, 98%);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  max-width: 1440px;
  background: var(--verylightgray);
}
h1,
h2 {
  color: var(--verydarkblue);
}
p {
  color: var(--grayishblu);
}

.container {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(6, auto);
  gap: 2rem;
  margin: 0 auto;
  padding: 2rem 8rem 1rem 8rem;
}
.top {
  grid-column: 1 / 4;
  grid-row: 1 / 2;
}
.card1 {
  grid-column: 1 / 2;
  grid-row: 3 / 5;
}
.card2 {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
}
.card3 {
  grid-column: 2 / 3;
  grid-row: 4 / 6;
}
.card4 {
  grid-column: 3 / 4;
  grid-row: 3 / 5;
}
footer {
  grid-column: 1 / 4;
  grid-row: 7 / 8;
}

.top h1,
.top h2,
.top p {
  text-align: center;
  margin: 0 auto;
}
.top h1,
.top h2 {
  font-size: 1.5rem;
}
.top h1 {
  font-weight: 200;
}
.top p {
  font-size: 0.8rem;
  font-weight: 400;
  padding-top: 1rem;
  max-width: 25rem;
  margin: 0 auto;
}

.card {
  background: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0rem 0.5rem 1rem var(--grayishblu);
  padding: 2rem;
}
.card1 {
  border-top: 0.3rem solid var(--cyan);
}
.card2 {
  border-top: 0.3rem solid var(--red);
}
.card3 {
  border-top: 0.3rem solid var(--orange);
}
.card4 {
  border-top: 0.3rem solid var(--blue);
}

.card h1 {
  font-size: 1rem;
}
.card p {
  font-size: 0.8rem;
  font-weight: 400;
  padding-top: 1rem;
  padding-bottom: 2rem;
}
.card img {
  width: 3rem;
  height: 3rem;
  position: relative;
  left: 80%;
}

@media screen and (max-width: 768px) {
  .container {
    display: grid;
    grid-template-rows: repeat(6, auto);
    grid-template-columns: auto;
    gap: 2rem;
    margin: 0 auto;
    padding: 2rem 2rem 1rem 2rem;
  }
  .top {
    grid-column: 1;
    grid-row: 1;
  }
  .card1 {
    grid-column: 1;
    grid-row: 2;
  }
  .card2 {
    grid-column: 1;
    grid-row: 3;
  }
  .card3 {
    grid-column: 1;
    grid-row: 4;
  }
  .card4 {
    grid-column: 1;
    grid-row: 5;
  }
  footer {
    grid-column: 1;
    grid-row: 6;
  }
  .top h1,
  .top h2 {
    font-size: 1.2rem;
  }
  .card {
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
