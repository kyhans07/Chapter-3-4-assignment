// This is a program to create flashcards to be used a study tool where it gives the functionality
// to generate new flash cards to cycle through them
// Author: Kyler Hanson
// date: 2-12-2026
// https://github.com/kyhans07/Chapter-3-4-assignment

"use strict";

// declare two arrays for the questions and answers
const questions = [];
const answers = [];

/*
Two global script variables used during quiz mode:
1) currentIndex for keeping track of which question is being displayed
2) displayAnswer used during the quiz phase to only show the answer after first displaying the question
 */
let currentIndex = 0;
let displayAnswer = false;

/*
Create DOM references for all the DOM elements that have ids
use getElementById() which is the safest default (slightly faster)
instead of using querySelector() for advanced selection like CSS selector support
*/
const commandEl = document.getElementById("command"); // add, list, quiz, clear
const commandErrorEl = document.getElementById("commandError");

const questionEl = document.getElementById("question");
const questionErrorEl = document.getElementById("questionError");

const answerEl = document.getElementById("answer");
const answerErrorEl = document.getElementById("answerError");

const outputEl = document.getElementById("output"); // display output to the user

const form = document.getElementById("flashcardForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default form button behavior

    // clear all errors from the previous submit
    commandErrorEl.textContent = "";
    questionErrorEl.textContent = "";
    answerErrorEl.textContent = "";
    outputEl.textContent = "";

    /* TODO: Finish me
     - use a switch to run the appropriate function based on the commandEl.value
     - use a default block to display an "Unknown command" error using the commandErrorEL
     - NOTE: for "add" pass the question and answer trim value to the addCard function
     */

    switch (commandEl.value.toLowerCase()){

        case "add":
            addCard(questionEl.value.trim(), answerEl.value.trim());
            break;
        case "list":
            listCards()
            break;
        case "quiz":
            showNextCard()
            break;
        case "clear":
            clearCards()
            break;
        case "load_default":
            loadDefault()
            break;
        default:
            commandErrorEl.textContent = "Unknown command";
            break;
    }
});

/**
 * Verify that both the question and answer contain a values using a boolean comparison
 * and if they are empty then display the error message(s) and return
 * make sure the first character of the question and answer are capitalized using the function
 * make sure the question ends with a question mark
 * add the question and answer to the arrays
 * display the question #, question, and answer in the output area
 *
 * @param question the input question trimmed value
 * @param answer the input answer trimmed value
 */
function addCard(question, answer) {
    let dataValidationError = false;

    // checks for user input for question and throws an error if it remains blank
    if (question === "") {
        questionErrorEl.textContent = "Please enter a question";
        dataValidationError = true;
    }

    // checks for user unput for answer and throws an error if it remains blank
    if (answer === "") {
        answerErrorEl.textContent = "Please enter an answer";
        dataValidationError = true;
    }

    // returns if there is an error thrown
    if (dataValidationError === true ){
        return;
    }
    // capitalizes the first letter of the question and answer
    question = capitalizeFirstChar(question);
    answer = capitalizeFirstChar(answer);

    // adds question mark to end of questions that do not contain a question mark
    if (question.endsWith ("?") === false ){
        question = question + "?";
    }

    questions.push(question);
    answers.push(answer);
    // outputs the question with its number and answer.
    outputEl.textContent = "Card# " + questions.length + " added: " + question + " -> " + answer;

}

/**
 * Set the question and answer input fields to an empty string using textContent
 * If there are no questions, display an error message in the output area
 * Define a string that says "All cards:\n"
 * using a for...in display the card #, question (do not display the answer)
 * NOTE: the first card should display #1 instead #0
 */
function listCards() {
    // TODO: Finish me

    questionEl.value = "";
    answerEl.value = "";

    // error if no questions
    if (questions.length === 0){
        outputEl.textContent = "There are no cards to list.";
        return;
    }

    let listOutput = "All cards: \n";
    // for loop to add all cards
    for (let i in questions) {

        let cardNumber = Number(i) + 1;
        // add card number and question but not the answer
        listOutput = listOutput + "#" + cardNumber + ": " + questions[i] + "\n";
    }
    // put the whole string into the output area
    outputEl.textContent = listOutput;
}

/**
 * Set the question and answer input fields to an empty string using textContent
 * Clear the current questions and answers using the function
 * and then load a few default questions and answers
 * and display how many questions were loaded in the output area
 */
function loadDefault() {
    // TODO: Finish me

    questionEl.value = "";
    answerEl.value = "";

    clearCards();

    questions.push("What time is Debbie's class?");
    answers.push("2PM");

    questions.push("what is 2 + 2?");
    answers.push("4");

    questions.push("What color is the sky?");
    answers.push("blue");

    outputEl.textContent = "Loaded " + questions.length + " default questions.";

}

/**
 * Set the question and answer input fields to an empty string using textContent
 * if there are no questions, display an error in the output area and return
 * if displayAnswer is true then
 *    display the card #, question, and answer using the currentIndex variable
 *    and tell the user to Press run to see the answer
 *    NOTE: the first card should display #1 not #0
 *    set displayAnswer to false
 *    increment currentIndex
 *    if currentIndex is equal to the array's length and reset back to 0
 * else
 *    only display the card # and current question to the output area
 *    and tell the user to Press run to see the next question
 *    NOTE: the first card should display #1 not #0
 *    set displayAnswer to true
  */
function showNextCard() {
    // TODO: Finish me
    questionEl.value = "";
    answerEl.value = "";

    if (questions.length === 0){
        outputEl.textContent = "There are no cards to list.";
    }

    if (displayAnswer === true ) {
        outputEl.textContent = "card #" + (currentIndex + 1) + " : " +
            questions[currentIndex] + "\nAnswer: " +
            answers[currentIndex] + "\n(Press Run to see next question)";

        displayAnswer = false;
        currentIndex = currentIndex + 1;

        if (currentIndex >= questions.length) {
            currentIndex = 0;
        }
    }
    else {
        outputEl.textContent = "card #" + (currentIndex + 1) +
                " : " + questions[currentIndex] + "\n(Please Run to see answer): ";
        displayAnswer = true;
    }

}

/**
 * Set the question and answer input fields to an empty string using textContent
 * clear the question and answer fields
 * clear all arrays by setting the length to 0
 * reset currentIndex to 0
 * display "All cards cleared." to the output area
 */
function clearCards() {
    // TODO: Finish me
    //reset input fields to empty string
    questionEl.value = "";
    answerEl.value = "";

    //clears arrays by setting value to 0
    questions.length = 0;
    answers.length = 0;
    // resets index value
    currentIndex = 0;

    outputEl.textContent = "All cards cleared!";
}

/**
 * if !str then return the str unchanged
 * else using method chaining charAt, toUpperCase, slice
 * @param str the user's input for question or answer
 * @returns {*|string} where the first letter is uppercased
 */
function capitalizeFirstChar(str) {
    if(!str) {
        return str;
    }
    else{
        return str[0].charAt(0).toUpperCase() + str.slice(1);
    }
}
