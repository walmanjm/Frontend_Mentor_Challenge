# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Testimonials_Grid_Section/design/desktop-design.jpg?raw=true)

### Links

- Solution URL: [Testimonials_Grid_Section README.md](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Testimonials_Grid_Section/README.md)
- Live Site URL: [Frontend Mentor | Testimonials_Grid_Section](https://walmanjm.github.io/Frontend_Mentor_Challenge/Testimonials_Grid_Section/index.html)

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
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./images/favicon-32x32.png"
    />
    <title>Frontend Mentor | Testimonials_Grid_Section</title>
    <link rel="stylesheet" href="index.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
      <div class="testimoni daniel">
        <div class="header">
          <div class="pictures">
            <img
              class="m-picture"
              src="images/image-daniel.jpg"
              alt="picture of Daniel"
            />
          </div>
          <div class="name">
            <h1 class="m-names">Daniel Clifford</h1>
            <p class="m-graduate">Verified Graduate</p>
          </div>
        </div>
        <h1 class="m-head">
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny’s worth.
        </h1>
        <p class="m-quotes">
          “ I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </p>
      </div>

      <div class="testimoni jonathan">
        <div class="header">
          <div class="pictures">
            <img
              class="m-picture"
              src="images/image-jonathan.jpg"
              alt="picture of Jonathan"
            />
          </div>
          <div class="name">
            <h1 class="m-names">Jonathan Walters</h1>
            <p class="m-graduate">Verified Graduate</p>
          </div>
        </div>
        <h1 class="m-head">
          The team was very supportive and kept me motivated
        </h1>
        <p class="m-quotes">
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself. ”
        </p>
      </div>

      <div class="testimoni jeanette">
        <div class="header">
          <div class="pictures">
            <img
              class="f-picture"
              src="images/image-jeanette.jpg"
              alt="picture of Jeanette"
            />
          </div>
          <div class="name">
            <h1 class="f-names">Jeanette Harmon</h1>
            <p class="f-graduate">Verified Graduate</p>
          </div>
        </div>
        <h1 class="f-head">An overall wonderful and rewarding experience</h1>
        <p class="f-quotes">
          “ Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love. ”
        </p>
      </div>

      <div class="testimoni patrick">
        <div class="header">
          <div class="pictures">
            <img
              class="m-picture"
              src="images/image-patrick.jpg"
              alt="picture of Patrick"
            />
          </div>
          <div class="name">
            <h1 class="m-names">Patrick Abrams</h1>
            <p class="m-graduate">Verified Graduate</p>
          </div>
        </div>
        <h1 class="m-head">
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.
        </h1>
        <p class="m-quotes">
          “ The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people. ”
        </p>
      </div>

      <div class="testimoni kira">
        <div class="header">
          <div class="pictures">
            <img
              class="f-picture"
              src="images/image-kira.jpg"
              alt="picture of Kira"
            />
          </div>
          <div class="name">
            <h1 class="f-names">Kira Whittle</h1>
            <p class="f-graduate">Verified Graduate</p>
          </div>
        </div>
        <h1 class="f-head">
          Such a life-changing experience. Highly recommended!
        </h1>
        <p class="f-quotes">
          “ Before joining the bootcamp, I’ve never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I’ve
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! ”
        </p>
      </div>

      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor.
        </a>
        <br />
        Coded by
        <a
          href="https://walmanjm.github.io/Frontend_Mentor_Challenge"
          target="_blank"
          >walmanjm.
        </a>
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
html {
  font-size: 13px;
}
body {
  background-color: hsl(210, 46%, 95%);
  font-family: "Barlow Semi Condensed", sans-serif;
  max-width: 1440px;
  margin: 0 auto;
  padding: 6rem;
  display: grid;
  place-items: center;
}
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  grid-template-areas:
    "daniel daniel jonathan kira"
    "jeanette patrick patrick kira"
    "attribution attribution attribution attribution";
  gap: 2rem;
}
.testimoni {
  border-radius: 0.5rem;
  padding: 2rem;
}
.daniel {
  grid-area: daniel;
  background: url(images/bg-pattern-quotation.svg) no-repeat hsl(263, 55%, 52%);
  background-position: 80% 0%;
}
.jonathan {
  grid-area: jonathan;
  background-color: hsl(217, 19%, 35%);
}
.jeanette {
  grid-area: jeanette;
  background-color: hsl(0, 0%, 100%);
}
.patrick {
  grid-area: patrick;
  background-color: hsl(219, 29%, 14%);
}
.kira {
  grid-area: kira;
  background-color: hsl(0, 0%, 100%);
}
.attribution {
  grid-area: attribution;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  color: hsl(228, 45%, 44%);
}
img {
  height: 2.5rem;
  width: 2.5rem;
}
.header {
  display: flex;
}
.m-picture {
  border: 0.2rem solid hsl(263, 55%, 60%);
  border-radius: 50rem;
}
.f-picture {
  border: 0.2rem solid hsl(210, 46%, 95%);
  border-radius: 50rem;
}
.name {
  padding-left: 1rem;
}
.m-names {
  font-size: 1rem;
  font-weight: 600;
  color: hsl(0, 0%, 81%);
}
.m-graduate {
  font-size: 0.9rem;
  font-weight: 500;
  color: hsl(0, 0%, 70%);
}
.f-names {
  font-size: 1rem;
  font-weight: 600;
  color: hsl(217, 19%, 35%);
}
.f-graduate {
  font-size: 1rem;
  font-weight: 500;
  color: hsl(217, 19%, 50%);
}
.m-head {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  padding-top: 1rem;
  color: hsl(0, 0%, 81%);
}
.m-quotes {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding-top: 1rem;
  color: hsl(0, 0%, 70%);
}
.f-head {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  padding-top: 1rem;
  color: hsl(217, 19%, 35%);
}
.f-quotes {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding-top: 1rem;
  color: hsl(217, 19%, 50%);
}
.attribution a {
  color: hsl(228, 45%, 44%);
  text-decoration: none;
}
.attribution a:hover {
  color: hsl(219, 29%, 14%);
  text-decoration: underline;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 575px) {
  body {
    padding: 2rem 4rem;
  }
  .container {
    grid-template-areas:
      "daniel"
      "jonathan"
      "jeanette"
      "patrick"
      "kira"
      "attribution";
    grid-template-rows: repeat(6, auto);
    grid-template-columns: 1fr;
  }
  .daniel {
    grid-area: daniel;
  }
  .jonathan {
    grid-area: jonathan;
  }
  .jeanette {
    grid-area: jeanette;
  }
  .patrick {
    grid-area: patrick;
  }
  .kira {
    grid-area: kira;
  }
  .attribution {
    grid-area: attribution;
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
