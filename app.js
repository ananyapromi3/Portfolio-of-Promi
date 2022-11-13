const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control');
const sectionAll = document.querySelectorAll('.main-content');

function pageTransitions() {
    // Button click activation
    for (let i = 0; i < sectionButton.length; i++) {
        sectionButton[i].addEventListener('click', function () {
            let currentButton = document.querySelectorAll('.active-button');
            currentButton[0].className = currentButton[0].className.replace('active-button', '');
            this.className += ' active-button';
        });
    }
    // Active sections
    sectionAll[0].addEventListener('click', (e) => {
        // console.log(e.target);
        const id = e.target.dataset.id;
        if (id) {
            // Remove section from other buttons
            sectionButtons.forEach((button) => {
                button.classList.remove('active');
            });
            e.target.classList.add('active');
            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
    // Toggle theme
    const themeButton = document.querySelector('.theme-button');
    themeButton.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });
}

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "bub.bub.1007@gmail.com",
        Password: "1164085D11472C71C1E153ECE9712B7BE27C",
        To: 'ananyapromi3@yahoo.com',
        From: 'bub.bub.1007@gmail.com',
        Subject: document.getElementById("subject").value,
        Body: "Name: " + document.getElementById("name").value + "<br>" +
            "Email: " + document.getElementById("email").value + "<br>" +
            "Subject: " + document.getElementById("subject").value + "<br>" +
            "Message:\n" + document.getElementById("message").value + "<br>"
    }).then(
        message => alert(message)
    );
}

pageTransitions();