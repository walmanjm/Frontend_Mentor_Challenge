# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Clipboard_Landing_Page/design/desktop-preview.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Clipboard landing page](https://walmanjm.github.io/Frontend_Mentor_Challenge/Clipboard_Landing_Page/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
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
    <!-- displays site properly based on user's device -->
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./images/favicon-32x32.png"
    />
    <title>Frontend Mentor | Clipboard landing page</title>
    <link rel="stylesheet" href="index.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://kit.fontawesome.com/c08e1bd072.js"
      crossorigin="anonymous"
    ></script>
  </head>

  <body>
    <header>
      <div class="header-logo">
        <img src="images/logo.svg" alt="" />
      </div>
      <div class="header-text">
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
      <div class="btn">
        <button class="btn btn-cyan">Download for iOS</button>
        <button class="btn btn-blue">Download for Mac</button>
      </div>
    </header>

    <main>
      <div class="snippets">
        <div class="sippets-text">
          <h2>Keep track of your snippets</h2>
          <p>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>

        <div class="snippets-cards">
          <img src="images/image-computer.png" alt="" />
          <div class="snippets-cards-list">
            <div class="card">
              <h3>Quick Search</h3>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div class="card">
              <h3>iCloud Sync</h3>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div class="card">
              <h3>Complete History</h3>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="access">
        <div class="access-text">
          <h2>Access Clipboard anywhere</h2>
          <p>
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
        </div>

        <div class="access-device">
          <img src="images/image-devices.png" alt="" />
        </div>
      </div>

      <div class="workflow">
        <div class="workflow-text">
          <h2>Supercharge your workflow</h2>
          <p>We’ve got the tools to boost your productivity.</p>
        </div>

        <div class="workflow-list">
          <div>
            <img src="images/icon-blacklist.svg" alt="" />
            <h3>Create blacklists</h3>
            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>

          <div>
            <img src="images/icon-text.svg" alt="" />
            <h3>Plain text snippets</h3>
            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>

          <div>
            <img src="images/icon-preview.svg" alt="" />
            <h3>Sneak preview</h3>
            <p>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>

      <div class="logo">
        <div class="logo-list">
          <div>
            <img src="images/logo-google.png" alt="" />
          </div>
          <div>
            <img src="images/logo-ibm.png" alt="" />
          </div>
          <div>
            <img src="images/logo-microsoft.png" alt="" />
          </div>
          <div>
            <img src="images/logo-hp.png" alt="" />
          </div>
          <div>
            <img src="images/logo-vector-graphics.png" alt="" />
          </div>
        </div>
      </div>

      <div class="cipboard-download-text">
        <h2>Clipboard for iOS and Mac OS</h2>
        <p>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
        <div class="btn">
          <button class="btn btn-cyan">Download for iOS</button>
          <button class="btn btn-blue">Download for Mac</button>
        </div>
      </div>
    </main>

    <footer>
      <div class="footer-logo">
        <img src="images/logo.svg" alt="" />
      </div>

      <div class="footer-nav">
        <div class="nav">
          <ul>
            <li><a href="">FAQs</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
        <div class="nav">
          <ul>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Press Kit</a></li>
          </ul>
        </div>
        <div class="nav">
          <ul>
            <li><a href="">Install Guide</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-sosmed">
        <ul>
          <li>
            <a href=""><i class="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href=""><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href=""><i class="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </footer>
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
  </body>
</html>
```
#### css
```css
:root {
  --strong_cyan: hsl(171, 66%, 44%);
  --light_blue: hsl(233, 100%, 69%);
  --dark_grayish_blue: hsl(210, 10%, 33%);
  --grayish_blue: hsl(201, 11%, 66%);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 18px;
  font-weight: 400;
  max-width: 1440px;
}
h1,
h2,
h3 {
  color: var(--dark_grayish_blue);
  padding-bottom: 1rem;
  text-align: center;
  max-width: 40rem;
  display: block;
  margin: 0 auto;
}
p {
  color: var(--grayish_blue);
  padding-bottom: 2rem;
  line-height: 1.5rem;
  text-align: center;
  max-width: 40rem;
  display: block;
  margin: 0 auto;
}

/* header */
header {
  padding-top: 5rem;
  background: url("images/bg-header-desktop.png") center top no-repeat;
}
.header-logo {
  padding-bottom: 2rem;
}
.header-logo img {
  display: block;
  margin: 0 auto;
}
.btn {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 50rem;
  margin: 0rem 1rem 3rem 0;
  color: #ffffff;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: smaller;
  text-align: center;
}
.btn-cyan {
  background: var(--strong_cyan);
  box-shadow: 0.2rem 0.2rem hsl(171, 67%, 39%);
}
.btn-cyan:hover {
  cursor: pointer;
  background: hsl(171, 67%, 39%);
}
.btn-blue {
  background: var(--light_blue);
  box-shadow: 0.2rem 0.2rem hsl(233, 72%, 62%);
}
.btn-blue:hover {
  cursor: pointer;
  background: hsl(233, 72%, 62%);
}

/* snippets */
.sippets-text {
  padding-bottom: 2rem;
}
.snippets-cards {
  display: flex;
}
.snippets-cards img {
  margin-left: -2rem;
  max-width: 40rem;
  display: block;
}
.snippets-cards-list {
  padding-top: 3rem;
  padding-left: 5rem;
  width: 25rem;
}
.snippets-cards-list h3,
.snippets-cards-list p {
  text-align: left;
}

/* access */
.access {
  padding-top: 6rem;
  padding-bottom: 3rem;
}
.access-device img {
  max-width: 40rem;
  display: block;
  margin: 0 auto;
}

/* workflow */
.workflow-text {
  margin-top: 2rem;
  text-align: center;
  max-width: 40rem;
  display: block;
  margin: 0 auto;
}
.workflow-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.workflow-list div {
  width: 25rem;
  padding: 2rem 2rem 0 2rem;
}
.workflow-list h3 {
  margin-top: 1rem;
}

/* logo */

.logo-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logo-list img {
  margin: 5rem 2rem 5rem 2rem;
}

/* footer */
footer {
  background-color: hsl(0, 0%, 97%);
  display: flex;
  flex-direction: row;
  padding: 2rem 0 1rem 0;
}
.footer-logo img {
  width: 3rem;
  height: 3rem;
}
.footer-logo {
  padding: 0 0 0 10rem;
}

.footer-nav {
  display: flex;
}
.footer-nav ul {
  list-style: none;
}
.footer-nav li {
  margin: 0 0 1rem 6rem;

  font-size: smaller;
}
.footer-sosmed {
  margin-left: 15rem;
}
.footer-sosmed ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.footer-sosmed li {
  list-style: none;
  padding: 1rem;
  cursor: pointer;
}
.footer-sosmed img {
  width: 1.2rem;
  height: 1.2rem;
}

i {
  font-size: 1.5rem;
  color: var(--dark_grayish_blue);
}
i:hover {
  font-size: 1.6rem;
  cursor: pointer;
  color: var(--strong_cyan);
}

a {
  text-decoration: none;
  color: var(--dark_grayish_blue);
}
a:hover {
  cursor: pointer;
  color: var(--strong_cyan);
}

/* attribution */
.attribution {
  background-color: hsl(0, 0%, 97%);
  color: var(--dark_grayish_blue);
  font-size: 0.8rem;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 1rem;
}
.attribution a {
  color: var(--dark_grayish_blue);
  text-decoration: none;
}
.attribution a:hover {
  color: var(--strong_cyan);
  text-decoration: underline;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 812px) {
  h1,
  h2,
  h3,
  p {
    max-width: 18rem;
    display: block;
    margin: 0 auto;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  header {
    padding-top: 2rem;
    background: url("images/bg-header-mobile.png") center top no-repeat;
    background-size: cover;
    padding-bottom: 4rem;
  }
  .btn {
    margin: 0rem 0.5rem 1rem 0;
    padding: 0.8rem 4rem;
  }
  footer,
  .footer-sosmed,
  .footer-nav,
  .logo-list,
  .workflow-list,
  .snippets-cards,
  .snippets-cards-list {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
  }
  .snippets-cards img,
  .access-device img {
    max-width: 18rem;
    display: block;
    margin: 0 auto;
  }
  .snippets-cards-list {
    padding-top: 4rem;
    margin: 0 auto;
  }
  .snippets-cards-list h3,
  .snippets-cards-list p {
    text-align: center;
  }
  .logo-list img {
    margin: 2rem 0rem;
  }
  .cipboard-download-text {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .footer-logo,
  .footer-nav li,
  .footer-sosmed li {
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
  }
  .footer-sosmed img {
    width: 1.5rem;
    height: 1.5rem;
  }
  .footer-logo {
    padding-top: 3rem;
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
