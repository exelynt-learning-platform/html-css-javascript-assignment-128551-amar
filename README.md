# html-css-javascript-assignment-128551-amar

Module & Week Assignments - This repository contains module-wise and week-wise assignment submissions.

**Author:** Amar Jadhav

## Week 1 - Layout with Flexbox: Product Cards

A small product page for an imaginary desk accessories shop, "Desk Corner".

### Files
- `products.html` - a navigation bar and three product cards (name + price in rupees) inside a container
- `products.css` - the flexbox layout and styles

### How flexbox is used
- `.navbar` uses `display: flex` with `justify-content: space-between` and `align-items: center` to put the brand on the left and the links on the right
- `.nav-links` uses `display: flex` and `gap` to lay the three links out in a row
- `.product-container` uses `display: flex`, `justify-content: center` and `gap: 24px` so the three cards sit side by side with space between them; `flex-wrap: wrap` lets them stack on small screens

### How to run
Open `products.html` in a browser, or right-click it in VS Code and choose **Open with Live Server**.

### What I learned
- `display: flex`, `justify-content` and `align-items`
- Using `gap` and `flex-wrap`
- Building a simple navigation bar with flexbox
