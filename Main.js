// ==UserScript==
// @name         Gimkit Answer Revealer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reveals answers on Gimkit
// @author       You
// @match        *://www.gimkit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const revealAnswers = () => {
        const answers = document.querySelectorAll('.answer'); // Adjust selector as needed
        answers.forEach(answer => {
            console.log(answer.innerText); // Logs the answer to the console
        });
    };

    setInterval(revealAnswers, 5000); // Adjust interval as needed
})();
