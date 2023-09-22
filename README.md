# eJam - Test Assignment Solution

This is a solution to the [Full Stack Developer Test Assignment from eJam](https://docs.google.com/document/d/1XrQ17jc0t63pgNhQxO-JLkzCX4eVJ3Eq-rzHFcAsQRY/edit).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I Applied](#what-i-applied)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

**Background:**

We are looking to create a new upsell page for one of our products. The graphic designer has created a UI/UX design using Figma.

We need you to create a working webpage that we can visit with a public URL, that is pixel perfect to the design we provide in Figma below.

**Instructions:**

1. Recreate the Figma design with your software of choice. Link to Figma: [Click Here](https://www.figma.com/file/gHf56mhtFr0lXky0poofoQ/ejam---Clarifion-Upsell-%5B-Client-V-%5D-(Copy)?node-id=1%3A137&mode=dev)
2. You may use any software or page builder you want to recreate the design
3. Design must also be mobile formatted
4. Reply to the email that sent you the test assignment with a working link so that anyone can view your webpage


### Screenshot

| Desktop version | Mobile version |
|---|---|
| ![image](https://github.com/franclobo/Clarifion/assets/58642949/9792d4fc-69b8-4a3f-9244-0efbf2c1f63c) | ![image](https://github.com/franclobo/Clarifion/assets/58642949/80249e62-8775-47df-b0f2-32a654d29b51) |

### Links

- Solution URL: [Test Assignment Solution](https://github.com/franclobo/Clarifion)
- Live Site URL: [Test Assignment Solution](https://clarifion-test.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Sass
- [Vite React](https://vitejs.dev/guide/)


### What I Applied

I applied the following Frontend concepts, Sass, React, React Router.

```js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Navbar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App

```

### Continued development

I want to fix some events to allow the navigation between the steps. I want to add some animations to the page. I want to add some tests to the project.

### Useful resources

- [React hooks](https://react.dev/reference/react) - This helped me to understand how to use the hooks in React and figure out how to use them in my project.

## Author

- Website - [Portfolio](https://borja-lobato-francisco-potfolio.netlify.app/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)
- LinkedIn - [Francisco Borja](https://www.linkedin.com/in/francisco-borja-lobato/)

## Acknowledgments

I want to acknowledge to eJam for this opportunity. I'm really grateful for the opportunity to learn and improve my skills. I'm looking forward to the next challenge.

I would like to acknowledge to the author of the [original design](https://www.figma.com/file/gHf56mhtFr0lXky0poofoQ/ejam---Clarifion-Upsell-%5B-Client-V-%5D-(Copy)?node-id=1%3A137&mode=dev)
