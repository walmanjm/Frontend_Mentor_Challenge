# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Build out the project to the designs provided

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Profile_Card_Component/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Profile card component](https://walmanjm.github.io/Frontend_Mentor_Challenge/Profile_Card_Component/index.html)

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
  <title>Frontend Mentor | Profile card component</title>
  <link rel="stylesheet" href="index.css">
</head>

<body>
  <div class="container">
    <div class="card">
      <div class="bgpattern">
        <img src="images/bg-pattern-card.svg" alt="">
      </div>
      <div class="victor">
        <img src="images/image-victor.jpg" alt="">
        <h1>Victor Crest <span> 26 </span></h1>
        <p>London</p>
      </div>
      <div class="likes">
        <div>
          <h1>80K</h1>
          <p>Followers</p>
        </div>
        <div>
          <h1>803K</h1>
          <p>Likes</p>
        </div>
        <div>
          <h1>1.4K</h1>
          <p>Photos</p>
        </div>
      </div>
    </div>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">FrontendMentor.</a>
      <br />Coded by <a href="https://walmanjm.github.io/Frontend_Mentor_Challenge" target="_blank">walmanjm.</a>
    </div>
  </div>
</body>

</html>
```
#### css
```css
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

:root {
  --Dark_cyan: hsl(185, 75%, 39%);
  --Very_dark_desaturated_blue: hsl(229, 23%, 23%);
  --Dark_grayish_blue: hsl(227, 10%, 46%);
  --Dark_gray: hsl(0, 0%, 59%);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-size: 18px;
  max-width: 1440;
  font-family: "Kumbh Sans", sans-serif;
  background-color: var(--Dark_cyan);
  background-image: url("images/bg-pattern-top.svg"),
    url("images/bg-pattern-bottom.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: left -40rem top -55rem, right -35rem bottom -60rem;
  background-size: cover, cover;
  overflow: hidden;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 9rem 0;
}
.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #fff;
  border-radius: 1rem;
}
h1 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--Very_dark_desaturated_blue);
}
.victor h1 {
  margin-top: 0.5rem;
}
.likes h1 {
  margin-top: 1rem;
}
span {
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--Very_dark_desaturated_blue);
}
p {
  font-size: 1rem;
  font-weight: 400;
  color: var(--Dark_grayish_blue);
}
.victor p {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
.likes p {
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}
.bgpattern img {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.victor img {
  border: 0.5rem solid #fff;
  border-radius: 50rem;
  margin-top: -18%;
}
.likes {
  display: grid;
  grid-template-columns: repeat(3, auto);
  text-align: center;
  border-top: 0.1rem solid var(--Dark_gray);
}
.attribution {
  margin: 1rem;
}
.attribution {
  font-size: 11px;
  text-align: center;
  color: hsl(228, 45%, 44%);
}
.attribution a {
  color: hsl(228, 45%, 44%);
}

@media (max-width: 768px) {
  body {
    background-position: left -25rem top -25rem, right -25rem bottom -25rem;
  }
  .container {
    margin: 6rem 0;
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
