# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Social_Proof_Section/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Social proof section](https://walmanjm.github.io/Frontend_Mentor_Challenge/Social_Proof_Section/index.html)

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
  <title>Frontend Mentor | Social proof section</title>
  <link rel="stylesheet" href="index.css">
</head>

<body>
  <div class="container">
    <div class="rone">
      <div class="news">
        <h1 class="news-title">10,000+ of our users love our products.</h1>
        <p class="news-subtitle">We only provide great products combined with excellent customer service.
          See what our satisfied customers are saying about our services.</p>
      </div>
      <div class="rated">
        <p class="star reviews">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <span>5 Stars in Reviews</span>
        </p>
        <p class="star report">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <span>Rated 5 Stars in Report Guru</span>
        </p>
        <p class="star besttech">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <img src="images/icon-star.svg" alt="#">
          <span>Rated 5 Stars in BestTech</span>
        </p>
      </div>
    </div>
    <div class="rtwo">
      <div class="card sc">
        <div class="profil">
          <img src="images/image-colton.jpg" alt="#">
          <div>
            <h2 class="pfl-name">Colton Smith</h2>
            <p class="pfl-buyer">Verified Buyer</p>
          </div>
        </div>
        <p class="card-quotes">"We needed the same printed design as the one we had ordered a week prior.
          Not only did they find the original order, but we also received it in time.
          Excellent!"</p>
      </div>
      <div class="card ir">
        <div class="profil">
          <img src="images/image-irene.jpg" alt="#">
          <div>
            <h2 class="pfl-name">Irene Roberts</h2>
            <p class="pfl-buyer">Verified Buyer</p>
          </div>
        </div>
        <p class="card-quotes">"Customer service is always excellent and very quick turn around. Completely
          delighted with the simplicity of the purchase and the speed of delivery."</p>
      </div>
      <div class="card aw">
        <div class="profil">
          <img src="images/image-anne.jpg" alt="#">
          <div>
            <h2 class="pfl-name">Anne Wallace</h2>
            <p class="pfl-buyer">Verified Buyer</p>
          </div>
        </div>
        <p class="card-quotes">"Put an order with this company and can only praise them for the very high
          standard. Will definitely use them again and recommend them to everyone!"</p>
      </div>
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
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap");

:root {
  --VeryDarkMagenta: hsl(300, 43%, 22%);
  --SoftPink: hsl(333, 80%, 67%);
  --DarkGrayishMagenta: hsl(303, 10%, 53%);
  --LightGrayishMagenta: hsl(300, 24%, 96%);
  --White: hsl(0, 0%, 100%);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  max-width: 1440px;
  font-size: 15px;
  font-family: "Spartan", sans-serif;
  background: url(images/bg-pattern-top-desktop.svg) left top no-repeat,
    url(images/bg-pattern-bottom-desktop.svg) bottom right no-repeat;
}
.container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  margin: 6rem;
  row-gap: 2rem;
}
.rone {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 2rem;
}
.news-title {
  color: var(--VeryDarkMagenta);
  font-size: 3rem;
  font-weight: 700;
  width: 30rem;
}
.news-subtitle {
  color: var(--DarkGrayishMagenta);
  margin-top: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
}
.star {
  color: var(--VeryDarkMagenta);
  padding: 1rem;
  background-color: var(--LightGrayishMagenta);
  margin-top: 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 0.5rem;
  width: 30rem;
}
span {
  margin-left: 1rem;
}
.report {
  margin-left: 2rem;
}
.besttech {
  margin-left: 4rem;
}

.rtwo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 2rem;
}
.card {
  background-color: var(--VeryDarkMagenta);
  padding: 2rem;
  border-radius: 0.5rem;
}
.card-quotes {
  color: var(--LightGrayishMagenta);
  font-size: 0.8rem;
  margin-top: 1rem;
  line-height: 1.2rem;
}
.profil {
  display: flex;
  align-items: center;
}
.profil img {
  border-radius: 50rem;
  width: auto;
  height: 3rem;
  margin-right: 1rem;
}
.pfl-name {
  color: var(--LightGrayishMagenta);
  font-size: 0.9rem;
}
.pfl-buyer {
  color: var(--SoftPink);
  font-size: 0.8rem;
  margin-top: 0.2rem;
}
.sc {
  margin-bottom: 4rem;
}
.ir {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.aw {
  margin-top: 4rem;
}

.attribution {
  text-align: right;
  color: var(--DarkGrayishMagenta);
  font-size: smaller;
}
.attribution a {
  color: var(--DarkGrayishMagenta);
}
.attribution a:hover {
  color: var(--SoftPink);
}

@media (max-width: 768px) {
  body {
    background: url(images/bg-pattern-top-mobile.svg) left top no-repeat,
      url(images/bg-pattern-bottom-mobile.svg) bottom right no-repeat;
  }
  .container {
    margin: 4rem 2rem;
  }
  .rone {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    text-align: center;
  }
  .news-title {
    font-size: 2rem;
    width: auto;
  }
  .news-subtitle {
    font-size: 0.8rem;
  }
  .star {
    width: auto;
  }
  span {
    display: block;
    padding-top: 0.5rem;
    margin-left: 0;
  }
  .report,
  .besttech {
    margin-left: 0rem;
  }

  .rtwo {
    grid-template-columns: 1fr;
    row-gap: 1rem;
    margin-top: 1rem;
  }
  .sc {
    margin-bottom: 0rem;
  }
  .ir {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .aw {
    margin-top: 0rem;
  }
  .attribution {
    text-align: center;
    font-size: 0.8rem;
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
