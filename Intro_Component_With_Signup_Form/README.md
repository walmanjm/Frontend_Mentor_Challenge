# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](https://github.com/walmanjm/Frontend_Mentor_Challenge/blob/main/Intro_Component_With_Signup_Form/design/desktop-design.jpg?raw=true)

### Links

- Live Site URL: [Frontend Mentor | Intro component with sign up form](https://walmanjm.github.io/Frontend_Mentor_Challenge/Intro_Component_With_Signup_Form/index.html)

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
    <title>Frontend Mentor | Intro component with sign up form</title>
</head>

<body>
    <main class="wrapper">
        <div class="leftbox">
            <h1>Learn to code by watching others</h1>
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                but understanding how developers think is invaluable.</p>
        </div>
        <div class="rightbox">
            <button class="btn" id="btn"><span>Try it free 7 days</span> then $20/mo. thereafter</button>
            <form action="#" id="form">
                <div class="forminput">
                    <input type="text" name="fname" id="fname" placeholder="First Name">
                    <img src="images/icon-error.svg" alt="#" class="error erroricon">
                    <small class="error errortext"><em>First Name cannot be empty</em></small>
                </div>
                <div class="forminput">
                    <input type="text" name="lname" id="lname" placeholder="Last Name">
                    <img src="images/icon-error.svg" alt="#" class="error erroricon">
                    <small class="error errortext"><em>Last Name cannot be empty</em></small>
                </div>
                <div class="forminput">
                    <input type="email" name="email" id="email" placeholder="Email Address">
                    <img src="images/icon-error.svg" alt="#" class="error erroricon">
                    <small class="error errortext"><em>Looks like this is not an email</em></small>
                </div>
                <div class="forminput">
                    <input type="password" name="pass" id="pass" placeholder="Password">
                    <img src="images/icon-error.svg" alt="#" class="error erroricon">
                    <small class="error errortext"><em>Password cannot be empty</em></small>
                </div>
                <button type="submit" id="submit">Claim your free trial</button>
                <p>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></p>
            </form>
        </div>
    </main>
    <footer class="attribution">
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  font-size: 16px;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  background-color: #ff7a7a;
  background-image: url(images/bg-intro-desktop.png);
}

.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 100vh;
  margin: 0 8rem;
}

.leftbox {
  width: 50%;
  color: #fff;
}

.leftbox h1 {
  font-size: 2.5rem;
  width: 25rem;
}

.leftbox p {
  font-size: 1rem;
  margin-top: 1rem;
}

.rightbox {
  width: 50%;
}

.rightbox .btn {
  background-color: #6055a5;
  color: #b9b6d3;
  outline: none;
  border: 1px solid #6055a5;
  border-radius: .5rem;
  padding: .5rem;
  width: 100%;
  margin-bottom: 1.5rem;
  -webkit-box-shadow: 0 8px 2px 0 rgba(0, 0, 0, 0.2);
          box-shadow: 0 8px 2px 0 rgba(0, 0, 0, 0.2);
  font-weight: 600;
}

.rightbox .btn:hover {
  background-color: #7e75b8;
  border: 1px solid #7e75b8;
  cursor: pointer;
}

.rightbox .btn span {
  color: #fff;
}

.rightbox form {
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: 2rem;
  width: 100%;
  border-radius: .5rem;
  -webkit-box-shadow: 0 8px 2px 0 rgba(0, 0, 0, 0.2);
          box-shadow: 0 8px 2px 0 rgba(0, 0, 0, 0.2);
}

.rightbox form .forminput {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-bottom: 1rem;
  position: relative;
}

.rightbox form .forminput input {
  height: 2.5rem;
  padding: 1rem;
  outline: none;
  border: 1px solid #b9b6d3;
  border-radius: .25rem;
  font-weight: 500;
}

.rightbox form .forminput input:focus {
  border: 2px solid #b9b6d3;
}

.rightbox form .forminput .erroricon {
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: .2rem;
  top: .7rem;
  display: none;
}

.rightbox form .forminput .errortext {
  margin-left: auto;
  color: #ff7a7a;
  font-size: .7rem;
  display: none;
}

.rightbox form button {
  background-color: #38cc8c;
  color: #fff;
  outline: none;
  border: 1px solid #38cc8c;
  border-radius: .25rem;
  padding: .5rem;
  text-transform: uppercase;
  font-weight: 600;
}

.rightbox form button:hover {
  background-color: #61d6a3;
  border: 1px solid #61d6a3;
  cursor: pointer;
}

.rightbox form p {
  text-align: center;
  font-size: .5rem;
  font-weight: 600;
  color: #b9b6d3;
  margin-top: 1rem;
}

.rightbox form p a {
  text-decoration: none;
  color: #ff7a7a;
}

.rightbox .error .forminput input {
  border: 2px solid #ff7a7a;
}

.rightbox .error .forminput .erroricon,
.rightbox .error .forminput .errortext {
  display: block;
}

.attribution {
  font-size: 11px;
  text-align: center;
  color: #3e3c49;
}

.attribution a {
  color: #3e3c49;
}

.attribution a:hover {
  color: #b9b6d3;
}

@media (max-width: 768px) {
  body {
    background-image: url(images/bg-intro-mobile.png);
  }
  .wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin: 3rem 2rem;
    height: 100%;
  }
  .leftbox {
    width: 100%;
  }
  .leftbox h1 {
    font-size: 1.5rem;
    width: auto;
    text-align: center;
  }
  .leftbox p {
    font-size: .8rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .rightbox {
    width: 100%;
  }
  .rightbox .btn {
    padding: .5rem 4rem;
  }
  .rightbox form {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 2rem;
  }
  .rightbox form p {
    font-size: .6rem;
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
