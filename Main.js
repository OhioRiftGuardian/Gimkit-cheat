// ==UserScript==
// @name         Gimkit Answer Revealer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Reveals answers on Gimkit
// @author       Your Name
// @match        *://www.gimkit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const revealAnswers = () => {
        const answers = document.querySelectorAll('.answer');
        answers.forEach(answer => {
            answer.style.display = 'block';
            answer.style.opacity = '1';
        });
    };

    const observer = new MutationObserver(revealAnswers);
    observer.observe(document.body, { childList: true, subtree: true });
})();
