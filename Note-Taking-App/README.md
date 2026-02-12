# Note Taking App (HTML, CSS, JavaScript)

A simple browser-based Note Taking App built with **Vanilla JavaScript**, **HTML5**, and **CSS3**.  
Users can **add notes**, **view/edit notes**, **delete notes**, and **search notes by title** — all inside a clean, responsive UI.

## Features

- **Add a note** with a title and note body
- **View & edit** an existing note
- **Delete** notes with a confirmation prompt
- **Search notes** instantly by title
- **Responsive layout** for small screens (mobile-friendly)

## How it works

- Notes are stored in the UI as table rows.
- Each note record contains:
  - **Title**
  - **Body**
- Clicking **View** loads the note’s title and body into the form fields to update it.
- Clicking **Delete** removes the selected row after confirmation.
- Search filters the table rows by matching the title text.

## Tech Stack

- **HTML5**
- **CSS3** (Flexbox layout + responsive media queries)
- **JavaScript (ES6)** (DOM manipulation, event handling, array conversion with `Array.from()`)

## How to Run Locally

1. Download or clone the repository
2. Open `index.html` in your browser  
   _(No extra installations required)_

## Key JavaScript Concepts Used

- DOM selection and manipulation
- Event handling (`submit`, `keyup`, `click`)
- Form validation and reset handling
- Conditional rendering (show/hide the table when there are no notes)
- Live search filtering (case-insensitive title matching)
