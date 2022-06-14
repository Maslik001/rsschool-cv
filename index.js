'use strict'

function textAnimation() {
    let textBox = document.getElementById('aboutMeText');
    textBox.innerHTML = `
    <p>Very passionate about web development. I like solving tasks, bringing the implementation to a
                        logical solution. I love perfectionism in my work (I tend to pay attention to every detail and
                        do not leave anything unfinished). I am a very sociable and tolerant kind of person. I do find
                        common ground with the interlocutor pretty easily. I do my very best to develop my professional
                        skills.</p>
    <h5>AnyOpportunityToDevelop (skills) => return theResultToYou</h5>
    `

    let text = textBox.innerText;
    let newHTML = '';

    for (let i = 0; i < text.length; i++) {

        newHTML += '<span>' + text[i] + '</span>';
    }
    textBox.innerHTML = newHTML;

    let spans = textBox.querySelectorAll('span'),
        count = 0,
        timeout = 0;
    typing_text(spans, count, timeout, text);
}

/**
 * Скорость набора
 * @param spans
 * @param count
 * @param timeout
 * @param text
 */
function typing_text(spans, count = 0, timeout = 0, text) {
    spans[count].classList.add('visible');
    if (spans[count].innerText === ' ' || spans[count].innerHTML === ' ') {
        timeout = Math.floor(Math.random() * Math.floor(1000));
        spans[count].classList.add('cursor');
    } else {
        timeout = 50;
    }

    if (count < text.length - 1) {
        setTimeout(() => {
            spans[count].classList.remove('cursor');
            count++;
            typing_text(spans, count, timeout, text);
        }, timeout);
    }
}
setTimeout(textAnimation,2000)
