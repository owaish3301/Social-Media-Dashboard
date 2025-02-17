# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- Toggle color theme to their preference

### Screenshot

![Preview](./public/images/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Dark/Light theme switcher
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - For styles
- [Context API](src/context/AppContext.jsx) - For state management 


### What I learned


Through this project, I gained valuable experience in:

1. **React Context API Implementation**
   - Created a global state management system using Context API for theme switching and responsive design
   - Implemented proper context cleanup with useEffect hooks
   ```jsx
   useEffect(() => {
       window.addEventListener('resize', setMode);
       return () => {
           window.removeEventListener('resize', setMode);
       }
   }, [])

2. **Responsive Design with TailwindCSS**
    - Implemented mobile-first design principles
    - Used dynamic classes for responsive layouts
    - Created a seamless responsive grid system for stats cards


3. **Theme Switching Logic**
    - Built a dark/light theme toggle system
    - Managed theme state across components
    - Implemented dynamic styling based on theme state

4. **Component Architecture**
    - Created reusable components for followers and overview cards
    - Implemented proper prop drilling and state management
    - Structured data management with separate data files


### Continued development

In future projects, I want to focus on:

1. **Performance Optimization**
    - Implement React.memo for performance optimization
    - Explore more efficient ways to handle window resize events
    - Add loading states and error boundaries

2. **Accessibility**
    - Improve keyboard navigation
    - Add ARIA labels and roles
    - Ensure proper contrast ratios for both themes

3. **State Management**
    - Explore other state management solutions like Redux or Zustand
    - Implement persistent theme preference storage
    - Add more complex state interactions

### Useful resources
- [React Docs - ContextAPI](https://react.dev/) - Helped me set up global state management.
- [Tailwind CSS docs](https://tailwindcss.com/) - Guided me in designing a clean, responsive UI.

## Author
- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@ShadowKiD14](https://www.frontendmentor.io/profile/ShadowKiD14)

## Acknowledgments
Thanks to the Frontend Mentor community for the inspiring solutions that guided my approach to this challenge. Special shoutout to Tailwind CSS for simplifying responsive design.