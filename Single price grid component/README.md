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

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Single%20price%20grid%20component/img/dekstop.jpeg?raw=true)

### Links

- Solution URL: [Testimonials_Grid_Section README.md](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/24fda64f0ce44e520446045592b0d82bb92f261b/Single%20price%20grid%20component/README.md)
- Live Site URL: [Frontend Mentor | Single Price Grid Component](https://walmanjm.github.io/Frontend_Mentor_Challenge/Single%20price%20grid%20component/index.html)

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
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frontend Mentor | Single Price Grid Component</title>
  <link rel="stylesheet" href="index.css">
  <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200&display=swap" rel="stylesheet">
</head>

<body>
  <div class="container">
    <div class="col col1">
      <h1 class="community">Join our community</h1>
      <p class="guarantee">30-day, hassle-free money back guarantee</p>
      <p class="access">Gain access to our full library of tutorial along with expert code reviews.
        <br>Perfect for any developers who are serious about honing their skills.
      </p>
    </div>
    <div class="col col2">
      <h1 class="subs">Monthly Subscription</h1>
      <p class="permonth"><strong>$29</strong> per month</p>
      <p class="perday">Full access for less then $1 a day</p>
      <button>Sign Up</button>
    </div>
    <div class="col col3">
      <h1 class="whyus">Why Us</h1>
      <p class="expert">Tutorial by industrial experts
        <br>Peer & expert code review
        <br>Coding exercises
        <br>Access to our GitHub repos
        <br>Community forum
        <br>Flashcard decks
        <br>New Videos every week
      </p>
    </div>
  </div>
</body>

</html>
```
#### css
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  display: grid;
  place-items: center;
  padding: 5rem 0 5rem 0;
  font-family: "Karla", sans-serif;
  background-color: hsl(204, 43%, 93%);
}
.container {
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 1fr;
}
.col1 {
  padding: 2rem;
  grid-column: 1 / 3;
  background-color: hsl(0, 0%, 100%);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.col2 {
  padding: 2rem;
  grid-column: 1;
  background-color: hsl(179, 62%, 43%);
  border-bottom-left-radius: 0.5rem;
}
.col3 {
  padding: 2rem;
  grid-column: 2;
  background-color: hsl(179, 62%, 60%);
  border-bottom-right-radius: 0.5rem;
}

.community {
  color: hsl(179, 62%, 43%);
  font-weight: 700;
  font-size: 1.2rem;
  padding-bottom: 1rem;
}
.guarantee {
  color: hsl(71, 100%, 45%);
  font-weight: 700;
  padding-bottom: 0.5rem;
}
.access {
  color: hsl(0, 0%, 65%);
  font-size: 0.9rem;
  line-height: 1.3rem;
}

.subs {
  color: hsl(0, 0%, 100%);
  font-weight: 700;
  font-size: 1rem;
  padding-bottom: 1rem;
}
.permonth {
  color: hsl(0, 0%, 100%);
  font-size: 0.9rem;
  padding-bottom: 0.5rem;
}
strong {
  font-size: 1.5rem;
  padding-right: 0.5rem;
}
.perday {
  color: hsl(0, 0%, 100%);
  font-size: 0.9rem;
  font-weight: 400;
  padding-bottom: 2rem;
}

button {
  width: 100%;
  height: 2.5rem;
  border: none;
  border-radius: 0.3rem;
  background-color: hsl(71, 100%, 45%);
  color: hsl(0, 0%, 100%);
}

.whyus {
  color: hsl(0, 0%, 100%);
  font-weight: 700;
  font-size: 1rem;
  padding-bottom: 1rem;
}
.expert {
  color: hsl(0, 0%, 100%);
  font-size: 0.9rem;
  line-height: 1.2rem;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  body {
    display: grid;
    place-items: center;
  }
  .container {
    width: 60%;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 1fr;
  }
  .col1 {
    grid-column: 1;
  }
  .col2 {
    grid-column: 1;
    border-bottom-left-radius: 0;
  }
  .col3 {
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

- Website - [walmanjm](https://walmanjm.github.io/Frontend_Mentor_Challenge)
- Frontend Mentor - [@walmanjm](https://www.frontendmentor.io/profile/walmanjm)

## Acknowledgments

looking forward for anyone to help..
