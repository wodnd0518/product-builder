# Product Builder Blueprint

## Overview

A "Odd One Out" synonym quiz game with a contact form and Google AdSense integration. The user is presented with a set of words and must select the one that doesn't fit with the others. The application tracks the user's history and score.

## Features & Design

### Implemented

*   **Quiz Logic:** Presents questions from a predefined set.
*   **Interactive UI:** Users can select answers and progress through the quiz.
*   **History Tracking:** Displays a history of answered questions and their correctness.
*   **Scoring:** Calculates and displays the final score.
*   **Styling:** A visually appealing "glassmorphism" theme with dark and light modes.
*   **Theme Toggle:** A button to switch between dark and light modes, with the preference saved in `localStorage`.
*   **Contact Form:** A page with a Formspree-powered contact form for partnership inquiries.

### Current Plan: Google AdSense Integration

*   **Goal:** Integrate Google AdSense for monetization.
*   **Steps:**
    1.  Add the AdSense `meta` tag and script to the `<head>` of all HTML pages.
    2.  Create the `ads.txt` file with the provided publisher information.
    3.  Insert ad unit display slots into the `index.html` and `contact.html` pages.

## Deployment

*   **Repository:** `https://github.com/wodnd0518/product-builder.git`
*   **Action:** Push the final code to the `main` branch.
