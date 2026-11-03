# Chai Corner - Tiny Cafe Menu

A tiny menu web page for a local chai and snacks cafe, built with plain HTML, CSS and JavaScript.

**Author:** Amar Jadhav

## Live site
GitHub Pages could not be turned on for this repository: it is owned by the `exelynt-learning-platform` organisation and my account does not have admin access to repository settings. Once Pages is enabled (Settings > Pages > Deploy from branch `main`, folder `/root`), the live page will be:

https://exelynt-learning-platform.github.io/html-css-javascript-assignment-128551-amar/

## What the page shows
- The cafe name as the main heading and a short welcome paragraph
- Three menu item cards (Masala Chai, Vada Pav, Samosa) with prices in rupees, laid out side by side with flexbox
- A list of opening hours
- A link to the cafe's location on Google Maps
- A button that switches between a day and a night theme

## How the theme button works
`script.js` selects the button with `querySelector('#theme-toggle')` and listens for clicks with `addEventListener`. On each click it calls `document.body.classList.toggle('night')`, which adds the `night` class if it is missing and removes it if it is present. In `style.css` the `body.night` rule swaps the colour variables to a darker palette. The button label and `aria-pressed` are updated so users know which theme comes next.

## Files
- `index.html` - page structure
- `style.css` - warm colours, Nunito font, flexbox layout, day and night themes
- `script.js` - the theme toggle

## Setup
1. Clone the repository and open it in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server** (or open the file directly in a browser).

## What I learned
- Structuring a page with headings, paragraphs, lists and links
- Styling with CSS custom properties and a Google Font
- Laying out cards with `display: flex`, `gap` and `flex-wrap`
- Changing a page on click with `addEventListener` and `classList.toggle`
- Working on a feature branch and merging it through a pull request
