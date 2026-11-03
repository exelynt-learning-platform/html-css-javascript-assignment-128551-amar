# html-css-javascript-assignment-128551-amar

Module & Week Assignments - This repository contains module-wise and week-wise assignment submissions.

**Author:** Amar Jadhav

## Week 1 - JavaScript Clicks & GitHub Pages: Like Button

A page with a heart "Like" button. Every click adds one to the likes count shown on the page.

### Files
- `like.html` - the heart button and a `<span>` that shows the likes count; loads `like.js` with a `<script>` tag at the end of `<body>`
- `like.js` - selects the button and the count with `querySelector`, then uses `addEventListener('click', ...)` to add one and update the text

### Live site (GitHub Pages)
GitHub Pages could not be turned on: this repository belongs to the `exelynt-learning-platform` organisation and my account does not have admin access to the repository settings ("You don't have access to repository options").
Once Pages is enabled (Settings > Pages > Deploy from branch), the page will be at:
`https://exelynt-learning-platform.github.io/html-css-javascript-assignment-128551-amar/like.html`

### How to run locally
Open `like.html` in a browser, or right-click it in VS Code and choose **Open with Live Server**, then click the button.

### What I learned
- Adding a script to a page
- Selecting elements with `querySelector`
- Handling click events with `addEventListener`
- Updating text on the page with `textContent`
- How GitHub Pages publishes a site from a branch
