# Product Builder Blueprint

## Overview

A "Odd One Out" synonym quiz game. The user is presented with a set of words and must select the one that doesn't fit with the others. The application tracks the user's history and score.

## Features & Design

### Implemented

*   **Quiz Logic:** Presents questions from a predefined set.
*   **Interactive UI:** Users can select answers and progress through the quiz.
*   **History Tracking:** Displays a history of answered questions and their correctness.
*   **Scoring:** Calculates and displays the final score.
*   **Styling:** A visually appealing "glassmorphism" light theme.

### Current Plan: Theme Toggle

*   **Goal:** Implement a toggle for dark and light modes.
*   **Steps:**
    1.  Add a toggle button to `index.html`.
    2.  In `style.css`, add a `[data-theme='dark']` selector to override CSS variables for a dark theme.
    3.  In `main.js`, add logic to toggle the `data-theme` attribute on the `body` or `html` element.
    4.  Use `localStorage` to persist the chosen theme across sessions.

## Deployment

*   **Repository:** `https://github.com/wodnd0518/product-builder.git`
*   **Action:** Push the final code to the `main` branch.
