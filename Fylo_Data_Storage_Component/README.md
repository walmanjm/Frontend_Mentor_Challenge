# Frontend Mentor - Fylo data storage component solution

This is a solution to the [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Fylo_Data_Storage_Component/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Fylo data storage component](https://walmanjm.github.io/Frontend_Mentor_Challenge/Fylo_Data_Storage_Component/index.html)

## My process

### Built with
- Semantic HTML5 markup
- CSS custom properties
- `display: grid;`
- `display: flex;`

### What I learned
Use anything in your knowledge about html css as much as you have.
- `position: relative;` `position: absolute;` >> [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- `::after` >> [::after (:after)](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)
- `border-color` >> [border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)


#### html
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link rel="stylesheet" href="index.css">
  <title>Frontend Mentor | Fylo data storage component</title>
</head>

<body>
  <main class="wrapper">
    <div class="folder">
      <img class="folder-logo" src="images/logo.svg" alt="#">
      <div class="folder-item">
        <a href="#"><img src="images/icon-document.svg" alt="#"></a>
        <a href="#"><img src="images/icon-folder.svg" alt="#"></a>
        <a href="#"><img src="images/icon-upload.svg" alt="#"></a>
      </div>
    </div>

    <div class="progress">
      <div class="gb-used">
        <p>You’ve used <span>815 GB</span> of your storage</p>
      </div>

      <div class="gb-bar">
        <div class="gb-left">
          <p>185 <span>GB Left</span> </p>
        </div>
        <div class="gb-bar-gradient">
          <div class="gb-bar-dot"></div>
        </div>
      </div>

      <div class="gb-size">
        <p>0 GB</p>
        <p>1000 GB</p>
      </div>
    </div>
  </main>

  <footer class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.</a>
    Coded by <a href="https://walmanjm.github.io/Frontend_Mentor_Challenge" target="_blank">walmanjm.</a>
  </footer>
</body>

</html>
```
#### css
```css
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

:root {
  --PaleBlue: hsl(243, 100%, 93%);
  --GrayishBlue: hsl(229, 7%, 55%);
  --DarkBlue: hsl(228, 56%, 26%);
  --VeryDarkBlue: hsl(229, 57%, 11%);
  --Gradient: hsl(6, 100%, 80%) to hsl(335, 100%, 65%);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  max-width: 1440px;
  font-size: 14px;
  height: 100vh;
  width: 100%;
  background-color: var(--VeryDarkBlue);
  background-image: url(images/bg-desktop.png);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
.wrapper {
  display: grid;
  grid-template-columns: auto auto;
  align-items: flex-end;
  column-gap: 1rem;
}

.folder {
  background-color: var(--DarkBlue);
  padding: 2rem 6rem 2rem 2rem;
  border-radius: 0.5rem 6rem 0.5rem 0.5rem;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  gap: 1rem;
  align-items: center;
  height: 12rem;
  width: 20rem;
}
.folder-logo {
  width: auto;
  height: 2rem;
}
.folder-item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.folder-item a {
  background-color: var(--VeryDarkBlue);
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  transition: all 1.5s;
}
.folder-item a:hover {
  background-color: hsl(335, 100%, 65%);
}

.progress {
  position: relative;
  padding: 2rem;
  border-radius: 0.5rem;
  display: grid;
  row-gap: 0.5rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  background-color: var(--DarkBlue);
  height: 8rem;
  width: 32rem;
}
.gb-used {
  color: var(--PaleBlue);
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}
.gb-used span {
  font-weight: 700;
}
.gb-used span:hover {
  color: hsl(335, 100%, 65%);
  cursor: pointer;
}

.gb-bar {
  background-color: var(--VeryDarkBlue);
  height: 1.1rem;
  display: grid;
  align-items: center;
  border-radius: 1rem;
}
.gb-bar-gradient {
  width: 75%;
  height: 0.6rem;
  background: linear-gradient(to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%));
  display: grid;
  justify-items: end;
  align-items: center;
  border-radius: 1rem;
  margin-left: 0.2rem;
}
.gb-bar-dot {
  background: var(--PaleBlue);
  height: 0.4rem;
  width: 0.4rem;
  display: grid;
  align-items: center;
  border-radius: 1rem;
  margin-right: 0.2rem;
}

.gb-left {
  position: absolute;
  top: -2rem;
  right: 2rem;
  color: var(--VeryDarkBlue);
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  background: #ffffff;
  border-radius: 0.5rem;
  border-bottom-right-radius: unset;
  padding: 0.8rem 1rem;
}
.gb-left ::after {
  content: "";
  position: absolute;
  bottom: -1rem;
  right: 0;
  border: 0.5rem solid #ffffff;
  border-left-color: transparent;
  border-bottom-color: transparent;
}
.gb-left span {
  color: var(--GrayishBlue);
  font-weight: 400;
  font-size: 1rem;
}
.gb-left p:hover {
  color: hsl(335, 100%, 65%);
  cursor: pointer;
}

.gb-size {
  display: flex;
  justify-content: space-between;
  color: var(--PaleBlue);
  font-family: "Raleway", sans-serif;
  font-weight: 700;
}
.gb-size :hover {
  color: hsl(335, 100%, 65%);
  font-size: 1rem;
  cursor: pointer;
}

.attribution {
  font-size: 11px;
  text-align: center;
  margin-top: 8rem;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
.attribution a:hover {
  color: hsl(335, 100%, 65%);
}

@media screen and (max-width: 768px) {
  body {
    background-image: url(images/bg-mobile.png);
    background-size: cover;
  }
  .wrapper {
    grid-template-columns: auto;
    row-gap: 1rem;
  }
  .folder,
  .progress {
    width: 19rem;
  }
  .folder {
    height: 10.5rem;
  }
  .progress {
    height: 9rem;
  }
  .gb-bar {
    width: auto;
  }
  .gb-left {
    top: 7.5rem;
    right: 5rem;
    border-radius: 0.5rem;
    padding: 0.8rem 1rem;
  }
  .gb-left ::after {
    display: none;
  }
  .gb-used p {
    font-size: 0.8rem;
  }
  .attribution {
    margin-top: 6rem;
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

