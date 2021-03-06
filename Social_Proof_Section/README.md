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
- `display: flex;`

### What I learned

Use anything in your knowledge about html css as much as you have.

#### html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
    <link rel="stylesheet" href="style.css">
    <title>Frontend Mentor | Social proof section</title>
</head>

<body>
    <main>
        <div class="container">
            <div class="rone">
                <div class="news">
                    <h1 class="news-title">10,000+ of our users love our products.</h1>
                    <p class="news-subtitle">We only provide great products combined with excellent customer service.
                        See what our satisfied customers are saying about our services.</p>
                </div>
                <div class="rated">
                    <div class="star reviews">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <span>5 Stars in Reviews</span>
                    </div>

                    <div class="star report">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <span>Rated 5 Stars in Report Guru</span>
                    </div>
                    <div class="star besttech">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <img src="images/icon-star.svg" alt="#">
                        <span>Rated 5 Stars in BestTech</span>
                    </div>
                </div>
            </div>
            <div class="rtwo">
                <div class="card cs">
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
        </div>
    </main>
    <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">FrontendMentor</a>.
        <br>
        Coded by <a href="https://walmanjm.github.io/Frontend_Mentor_Challenge" target="_blank">walmanjm</a>.
    </footer>

</body>

</html>
```
#### css
```css
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap");
* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  max-width: 1440px;
  font-size: 15px;
  height: 100vh;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  font-family: "Spartan", sans-serif;
  background: url(images/bg-pattern-top-desktop.svg) left top no-repeat, url(images/bg-pattern-bottom-desktop.svg) bottom right no-repeat;
  margin: 0 auto;
}

.container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
  -ms-grid-rows: auto auto auto;
      grid-template-rows: auto auto auto;
  row-gap: 2rem;
  margin: 6rem 6rem 1rem;
}

.rone {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: .75fr .55fr;
      grid-template-columns: .75fr .55fr;
  -ms-grid-rows: auto;
      grid-template-rows: auto;
  -webkit-column-gap: 2rem;
          column-gap: 2rem;
}

.rone .news .news-title {
  color: #502050;
  font-size: 3rem;
  font-weight: 700;
  width: 25rem;
}

.rone .news .news-subtitle {
  color: #937b92;
  font-weight: 500;
  line-height: 1.5rem;
  width: 30rem;
  margin-top: 1rem;
}

.rone .rated {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 1rem;
}

.rone .rated .reviews {
  -ms-flex-item-align: start;
      align-self: flex-start;
}

.rone .rated .report {
  -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
}

.rone .rated .besttech {
  -ms-flex-item-align: end;
      align-self: flex-end;
}

.rone .rated .star {
  color: #502050;
  background-color: #f7f2f7;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 25rem;
}

.rone .rated .star span {
  margin-left: 1rem;
}

.rtwo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 2rem;
  height: 15rem;
}

.rtwo .cs {
  -ms-flex-item-align: start;
      -ms-grid-row-align: start;
      align-self: start;
}

.rtwo .ir {
  -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
}

.rtwo .aw {
  -ms-flex-item-align: end;
      -ms-grid-row-align: end;
      align-self: end;
}

.rtwo .card {
  background-color: #502050;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 22rem;
}

.rtwo .card .profil {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.rtwo .card .profil img {
  border-radius: 50rem;
  width: auto;
  height: 3rem;
  margin-right: 1rem;
}

.rtwo .card .profil .pfl-name {
  color: #f7f2f7;
  font-size: 0.9rem;
}

.rtwo .card .profil .pfl-buyer {
  color: #ee68a4;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}

.rtwo .card .card-quotes {
  color: #f7f2f7;
  font-size: 0.8rem;
  margin-top: 1rem;
  line-height: 1.2rem;
}

.attribution {
  text-align: center;
  color: #937b92;
  font-size: smaller;
  padding: 1rem 0;
}

.attribution a {
  color: #937b92;
}

.attribution a:hover {
  color: #ee68a4;
}

@media (max-width: 768px) {
  body {
    background: url(images/bg-pattern-top-mobile.svg) left top no-repeat, url(images/bg-pattern-bottom-mobile.svg) bottom right no-repeat;
  }
  .container {
    margin: 4rem 2rem 1rem;
  }
  .container .rone {
    -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
    row-gap: 2rem;
    text-align: center;
  }
  .container .rone .news .news-title {
    font-size: 2rem;
    width: auto;
  }
  .container .rone .news .news-subtitle {
    font-size: 0.8rem;
    width: auto;
  }
  .container .rone .rated .reviews,
  .container .rone .rated .report,
  .container .rone .rated .besttech {
    -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
  }
  .container .rone .rated .star {
    width: 100%;
  }
  .container .rone .rated .star span {
    display: block;
    padding-top: 0.5rem;
    margin-left: 0;
  }
  .container .rtwo {
    height: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .container .rtwo .cs,
  .container .rtwo .ir,
  .container .rtwo .aw {
    -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
  }
  .container .rtwo .card {
    width: 100%;
  }
}
/*# sourceMappingURL=style.css.map */
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
