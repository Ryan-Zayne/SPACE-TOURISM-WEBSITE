# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Space tourism website solution](#frontend-mentor---space-tourism-website-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](/assets/FireShot/Space%20tourism%20website%20-%20Screenshot.png)

### Links

- Solution URL: [Click here](https://www.frontendmentor.io/solutions/space-tourism-site-using-html-css-and-some-javascript-j3g7PrsR_G)
- Live Site URL: [Click here](https://zayne-space-tour-vercel.app)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS custom Utility classes
- Flexbox
- Mobile-first workflow
- Javascript


### What I learned

I learnt how to use CSS and a little JS to make a fully functional hamburger menu. I also learnt how utility classes and css @imports basically help make you life easier when writing multiple stylesheets. 
In summary, I truly learnt a worthy chunk of good stuff whilst building this site.

Below are some css and js solutions I'm really proud, since I came up with them after a good struggle:

```CSS
 This source code of the transparent line between logo and navbar

.nav-bar::before{
        content: '';
        position: absolute;
        height: 1px;
        width:  55%;            
        transform: translateX(-42vw);
        background-color: hsl( var(--clr-white), 0.25);
    }   /*PS: Even the King of CSS(yeah, you know the guy🧔), struggled with this aspect of the project too💆‍♂️... Just a testament to how rough the issue was😑*/
```

```JS
  Customized hamburger js

hamburgerToggle.addEventListener("click", () => {
  navBar.classList.toggle("menu-toggle");
  hamburgerToggle.classList.toggle("close");
});
// This block is to make the hamburger disappear if user clicks outside the navigation block
mainContent.addEventListener("click", () => {
  if (navBar.classList.contains("menu-toggle") && hamburgerToggle.classList.contains("close")) {
    navBar.classList.remove("menu-toggle");
    hamburgerToggle.classList.remove("close");
  }
});

}
```


### Continued development

I'd want to learn react and tailwind next after this project because for one, I noticed that some there were some limitations to plain HTML in the sense that some components could not be reused without endless copying and pasting, as well as the fact that writing from scratch and debbuging multiple stylesheets can be a serious pain in the behind.



## Author

- Frontend Mentor - [@Ryan Zayne](https://www.frontendmentor.io/profile/Ryan-Zayne)
- Twitter - [@Zayne Kayden](https://www.twitter.com/Zayne_Kayden)


## Acknowledgments

I'd like to give a hattip to Kevin Powell's solution on scrimba as I picked up some techniques as well as code refactor tips from his follow along. A big shout-out to his work on the internet as a hardcore css evangelist. You have my undiluted respect man🧎‍♂️.

