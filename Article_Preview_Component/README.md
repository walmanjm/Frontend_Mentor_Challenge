# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot
![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Article_Preview_Component/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Article preview component](https://walmanjm.github.io/Frontend_Mentor_Challenge/Article_Preview_Component/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS (CSS with superpowers)
- `display: grid;`
- `display: flex;`
- `::after`
- `position: relative;`
- `position: absolute;`

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
    <title>Frontend Mentor | Article preview component</title>
</head>

<body>
    <main>
        <div class="wrapper">
            <div class="leftbox">
                <img src="images/drawers.jpg" alt="">
            </div>
            <div class="rightbox">
                <div class="rightbox-text">
                    <h1>Shift the overall look and feel by adding these wonderful
                        touches to furniture in your home</h1>

                    <p>Ever been in a room and felt like something was missing? Perhaps
                        it felt slightly bare and uninviting. I’ve got some simple tips
                        to help you make any room feel complete.</p>
                </div>

                <div class="profile">
                    <div class="profile-detail">
                        <img src="images/avatar-michelle.jpg" alt="">
                        <div class="profile-info">
                            <h1>Michelle Appleton</h1>
                            <p>28 Jun 2020</p>
                        </div>
                    </div>

                    <div class="profilesosmed">
                        <img src="images/icon-share.svg" alt="#" class="iconshare">
                    </div>

                </div>
                <div class="sosmed">
                    <span>Share</span>
                    <img src="images/icon-facebook.svg" alt="#">
                    <img src="images/icon-twitter.svg" alt="#">
                    <img src="images/icon-pinterest.svg" alt="#">
                </div>
            </div>
        </div>
    </main>
    <footer>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.</a>
        Coded by
        <a href="https://walmanjm.github.io/Frontend_Mentor_Challenge" target="_blank">walmanjm.</a>
    </footer>
    <script src="main.js"></script>
</body>

</html>
```
#### css
```css
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap");
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
}

body {
  background-color: #ecf2f8;
  max-width: 1440px;
  font-size: 13px;
  height: 100vh;
  margin: 0 auto;
  padding: 10rem;
}

.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #fff;
  border-radius: .5rem;
  width: 43rem;
  margin: 0 auto;
}

.leftbox {
  border-top-left-radius: .5rem;
  border-bottom-left-radius: .5rem;
  overflow: hidden;
}

.leftbox img {
  display: block;
  height: 17rem;
  width: auto;
  position: center;
}

.rightbox {
  padding: 2rem 2rem 1rem 2rem;
  position: relative;
}

.rightbox .rightbox-text h1 {
  color: #48556a;
  font-size: 1.3rem;
  font-weight: 700;
  width: 22rem;
}

.rightbox .rightbox-text p {
  color: #6d7f97;
  line-height: 1.2rem;
  font-weight: 700;
  margin: 1rem 0;
  width: 23rem;
}

.rightbox .profile {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.rightbox .profile .profile-detail {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.rightbox .profile .profile-detail img {
  display: block;
  height: 3rem;
  width: auto;
  border-radius: 50rem;
  margin-right: 1rem;
}

.rightbox .profile .profile-detail .profile-info h1 {
  color: #48556a;
  font-size: .9rem;
  font-weight: 700;
}

.rightbox .profile .profile-detail .profile-info p {
  color: #6d7f97;
}

.rightbox .profilesosmed {
  background-color: #ecf2f8;
  padding: .8em;
  border-radius: 50rem;
  cursor: pointer;
}

.rightbox .profilesosmed img {
  display: block;
  height: .8rem;
  width: auto;
}

.rightbox .sosmed {
  display: none;
}

.rightbox .sosmed.active {
  background-color: #48556a;
  position: absolute;
  right: -4rem;
  bottom: 5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 1rem 2rem;
  border-radius: .5rem;
  cursor: pointer;
}

.rightbox .sosmed.active span {
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #9eafc2;
}

.rightbox .sosmed.active img {
  margin-left: 1rem;
  height: 1rem;
  width: auto;
}

.rightbox .sosmed.active img:hover {
  height: 1.5rem;
}

.rightbox .sosmed ::after {
  content: "";
  position: absolute;
  right: 6rem;
  bottom: -1.8rem;
  border: 1rem solid #48556a;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
}

footer {
  color: #48556a;
  font-size: 11px;
  text-align: center;
  padding: 1rem;
}

footer a {
  color: #3e52a3;
}

footer a:hover {
  color: #48556a;
}

@media (max-width: 768px) {
  body {
    padding: 2rem 2rem 0 2rem;
  }
  .wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }
  .leftbox {
    border-radius: 0;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }
  .leftbox img {
    height: 12rem;
    width: 100%;
  }
  .rightbox {
    padding: 1.5rem 1.5rem .5rem 1.5rem;
    overflow: hidden;
  }
  .rightbox .rightbox-text h1 {
    font-size: 1rem;
    width: 16rem;
  }
  .rightbox .rightbox-text p {
    margin: .9rem 0;
    width: 16rem;
  }
  .rightbox .profilesosmed {
    z-index: 1;
  }
  .rightbox .sosmed.active {
    height: 4rem;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0;
    border-bottom-right-radius: .5rem;
    border-bottom-left-radius: .5rem;
  }
  .rightbox .sosmed.active img {
    height: 1.2rem;
    width: auto;
  }
  .rightbox .sosmed ::after {
    display: none;
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
