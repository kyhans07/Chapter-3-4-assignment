# Chapter-3-4-assignment


* Description: A web-based flashcard application that allows users to add,
* list, quiz, and clear study materials.
* Author: Kyler Hanson
* Date: 2-12-2026
* GitHub URL: https://github.com/kyhans07/Chapter-3-4-assignment
  

## Overview
This program provides a simple interface for students to create their own digital flashcards. It handles data validation (ensuring questions and answers aren't blank), automatic formatting (capitalization and adding question marks), and a quiz mode that toggles between questions and answers.

## Features
- **Add Card**: Validates input, formats text, and stores cards in memory.
- **List Cards**: Displays all currently stored questions with index numbering.
- **Quiz Mode**: A state-based study tool that cycles through cards one by one.
- **Load Defaults**: Quickly populates the app with pre-set study questions.
- **Clear Data**: Resets all arrays and input fields to start fresh.

## Technical Implementation
- **JavaScript Fundamentals**: Uses `const` and `let` for block-scoping, `switch` statements for command handling, and `for...in` loops for array iteration.
- **DOM Manipulation**: Interfaces with HTML elements using `getElementById` and updates content via `textContent` and `value`.
- **Event Handling**: Uses `preventDefault()` on form submission to handle data processing without page reloads.

## Setup
1. Clone the repository:
   `git clone https://github.com/kyhans07/Chapter-3-4-assignment`
2. Open `index.html` in any modern web browser.
3. Select a command from the dropdown and click "Run".

## Screenshots

### Main Interface
![App Interface](![img_3.png](img_3.png))

### Quiz Mode in Action
![Quiz Mode](images/quiz_mode.png)
