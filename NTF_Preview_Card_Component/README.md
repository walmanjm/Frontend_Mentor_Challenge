# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/NTF_Preview_Card_Component/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | NFT preview card component](https://walmanjm.github.io/Frontend_Mentor_Challenge/NTF_Preview_Card_Component/index.html)

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
    <link rel="stylesheet" href="style.css">
    <title>Frontend Mentor | NFT preview card component</title>
</head>

<body>
    <div class="card1">
        <div class="card2">
            <div class="card3">
                <div class="top">
                    <img src="images/image-equilibrium.jpg" alt="#">
                    <img src="images/icon-view.svg" alt="#" class="icon-view">
                </div>

                <h1>Equilibrium #3429</h1>

                <p>Our Equilibrium collection promotes balance and calm.</p>

                <div class=" time-left">
                    <div class="period etherum">
                        <img src="images/icon-ethereum.svg" alt="#"><span>0.041 ETH</span>
                    </div>
                    <div class="period clock">
                        <img src="images/icon-clock.svg" alt="#"><span>3 days left</span>
                    </div>
                </div>

                <div class="bottom">
                    <img src="images/image-avatar.png" alt="#">
                    <p>Creation of <span>Jules Wyvern</span></p>
                </div>
            </div>
        </div>
    </div>
    <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.</a>
        Coded by
        <a href="https://walmanjm.github.io/Frontend_Mentor_Challenge" target="_blank">walmanjm.</a>
    </div>
</body>

</html>
```
#### css
```css
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap");
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-family: 'Outfit', sans-serif;
}

body {
  background-color: #0d192b;
  max-width: 1440px;
  font-size: 18px;
  height: 100vh;
  display: -ms-grid;
  display: grid;
  place-items: center;
  margin: 0 auto;
}

.card1 {
  background-color: #0d1a2d;
  border-radius: 3rem;
  padding: 2rem;
  margin: 4rem 4rem 1rem 4rem;
}

.card2 {
  background-color: #0c1627;
  border-radius: 3rem;
  padding: 0 1rem 2.5rem 1rem;
}

.card3 {
  background-color: #14253d;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 1.5rem;
  width: 20rem;
  border-radius: 1rem;
  padding: 1.5rem;
}

.card3 .top {
  display: -ms-grid;
  display: grid;
  place-items: center;
  border-radius: .5rem;
  overflow: hidden;
  position: relative;
}

.card3 .top .icon-view {
  display: none;
  height: 2rem;
  width: auto;
  position: absolute;
}

.card3 .top img {
  display: block;
  height: 17rem;
  width: 100%;
}

.card3 .top:hover {
  background-color: #00fff7;
  cursor: pointer;
}

.card3 .top:hover .icon-view {
  display: block;
  opacity: 100%;
}

.card3 .top:hover img {
  opacity: 50%;
}

.card3 h1 {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
}

.card3 h1:hover {
  color: #00fff7;
  cursor: pointer;
}

.card3 p {
  font-size: 1rem;
  font-weight: 400;
  color: #8bacda;
  width: 18rem;
}

.card3 .time-left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  font-size: .9rem;
}

.card3 .time-left .period {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.card3 .time-left .period img {
  margin-right: .3rem;
}

.card3 .time-left .etherum {
  color: #00fff7;
}

.card3 .time-left .clock {
  color: #8bacda;
}

.card3 .bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-top: 1px solid #2f415b;
  padding-top: 1rem;
}

.card3 .bottom img {
  height: 2rem;
  width: auto;
  border: 1px solid white;
  border-radius: 50rem;
  margin-right: 1rem;
}

.card3 .bottom p {
  color: #8bacda;
  font-size: .9rem;
  font-weight: 400;
}

.card3 .bottom p span {
  color: white;
}

.card3 .bottom p span:hover {
  color: #00fff7;
  cursor: pointer;
}

.attribution {
  font-size: 11px;
  text-align: center;
  color: #8bacda;
  padding: 1rem;
}

.attribution a {
  color: #8bacda;
}

.attribution a:hover {
  color: #00fff7;
}

@media (max-width: 768px) {
  .card1 {
    padding: 0;
    margin: 4rem 0 1rem 0;
  }
  .card2 {
    border-radius: 2rem;
    padding: 1.5rem;
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
