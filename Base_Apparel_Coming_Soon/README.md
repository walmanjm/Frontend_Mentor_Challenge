# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Base_Apparel_Coming_Soon/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Base Apparel coming soon page](https://walmanjm.github.io/Frontend_Mentor_Challenge/Base_Apparel_Coming_Soon/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- `display: flex;`
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
    <title>Frontend Mentor | Base Apparel coming soon page</title>
</head>

<body>
    <main>
        <div class="wrapper">
            <div class="leftbox">
                <img src="images/logo.svg" alt="#" class="logo">
                <div class="bg-mobile">
                    <img src="images/hero-mobile.jpg" alt="#">
                </div>
                <h1><span>We're</span> coming soon</h1>
                <p>Hello fellow shoppers! We're currently building our new fashion store.
                    Add your email below to stay up-to-date with announcements and our launch deals.</p>

                <form action="#" id="form">
                    <input type="text" name="email" id="email" placeholder="Email Address">
                    <img src="images/icon-error.svg" alt="#" class="error erorricon">
                    <button><img src="images/icon-arrow.svg" alt="#"></button>
                    <p class="error errortext">Please provide a valid email</p>
                </form>
            </div>
            <div class="rightbox">
                <img src="images/hero-desktop.jpg" alt="#">
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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap");
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-family: 'Josefin Sans', sans-serif;
}

body {
  max-width: 1440px;
  height: 100vh;
  font-size: 16px;
  margin: 0 auto;
  background-image: url(images/bg-pattern-desktop.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.leftbox {
  padding: 4rem 6rem;
}

.leftbox .logo {
  display: block;
  margin-bottom: 6rem;
}

.leftbox h1 {
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 1rem;
}

.leftbox h1 span {
  color: #ce9797;
  font-weight: 300;
}

.leftbox p {
  color: #ce9797;
  margin: 1rem 0;
  line-height: 1.5rem;
  font-weight: 400;
  width: 28rem;
}

.leftbox form {
  position: relative;
}

.leftbox form input {
  background-color: transparent;
  height: 3rem;
  padding: 0 1rem;
  border: 1px solid #ce9797;
  border-radius: 5rem;
  outline: #ce9797;
  width: 20rem;
}

.leftbox form input::-webkit-input-placeholder {
  color: #ce9797;
}

.leftbox form input:-ms-input-placeholder {
  color: #ce9797;
}

.leftbox form input::-ms-input-placeholder {
  color: #ce9797;
}

.leftbox form input::placeholder {
  color: #ce9797;
}

.leftbox form button {
  background-image: linear-gradient(135deg, #f8bfbf, #ee8c8c);
  height: 3rem;
  padding: 0 2rem;
  border: 1px solid #ce9797;
  border-radius: 5rem;
  outline: #ce9797;
  cursor: pointer;
  position: absolute;
  left: 16rem;
  top: 0;
}

.leftbox form .erorricon {
  display: none;
  position: absolute;
  left: 14rem;
  top: .8rem;
}

.leftbox form .errortext {
  display: none;
  margin-top: .5rem;
  padding-left: 1rem;
  font-size: small;
  color: #f96262;
}

.leftbox .error input {
  border: 2px solid #f96262;
}

.leftbox .error .erorricon,
.leftbox .error .errortext {
  display: block;
}

.bg-mobile {
  display: none;
}

footer {
  color: #ce9797;
  font-size: 11px;
  text-align: center;
  padding-top: 1rem;
}

footer a {
  color: #ce9797;
}

footer a:hover {
  color: #f96262;
}

@media (max-width: 768px) {
  .leftbox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    padding: 0;
  }
  .leftbox .logo {
    margin: 2rem;
    -ms-flex-item-align: start;
        align-self: flex-start;
  }
  .leftbox h1 {
    text-align: center;
    width: auto;
    font-size: 2.5rem;
    letter-spacing: .5rem;
    margin: 2rem;
  }
  .leftbox p {
    text-align: center;
    width: auto;
    font-size: .9rem;
    margin: 0 2rem;
  }
  .leftbox form {
    margin: 2rem 0;
  }
  .leftbox form input {
    height: 2.5rem;
    width: 16rem;
  }
  .leftbox form button {
    height: 2.5rem;
    left: 12rem;
  }
  .leftbox form .erorricon {
    left: 10rem;
    top: .5rem;
  }
  .leftbox form .errortext {
    padding-left: 0;
  }
  .bg-mobile {
    display: block;
  }
  .bg-mobile img {
    display: block;
    height: 18rem;
    width: 100%;
  }
  .rightbox {
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
