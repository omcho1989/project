const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").innerHTML = `&copy; ${currentYear}`;

const lastModified = document.lastModified;
document.querySelector("#lastmodified").textContent = lastModified;

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            console.log('Menu button clicked');
            menuButton.style.display = 'none'; 
            nav.classList.add('open'); 
        });
    }

    const contactForm = document.querySelector('.contactform');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const nameInput = document.querySelector('#name');
            const firstName = nameInput.value.split(' ')[0];
            alert(`Thank you, ${firstName}, for your interest with 'The MSP Guys'!`);
        });
    }
});


// Conditional branching added
document.addEventListener('DOMContentLoaded', () => {
    const availabilityElement = document.querySelector('#availability');
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

    
    if (currentDay === 0 || currentDay === 6) {
        availabilityElement.textContent = 'We are closed on weekends. Emergency services only.';
    } else if (currentHour < 8 || currentHour > 17) {
        availabilityElement.textContent = 'Our hours are 8 AM to 5 PM, Monday through Friday.';
    } else {
        availabilityElement.textContent = 'We are open! Feel free to contact us.';
    }
});

//added javascript array
const faqs = [
    {
        question: "How much do your services cost?",
        answer: "We charge by 15 minutes, not by the hour. An hour comes to $75.00."
    },
    {
        question: "Can anyone from anywhere use your services?",
        answer: "While we are a Utah-based company, we offer remote services like backups."
    },
    {
        question: "What times are you available?",
        answer: "We are generally open from 8 to 5, Monday through Friday."
    }
];

//template literal added with FAQ's
document.addEventListener('DOMContentLoaded', () => {
    const faqList = document.querySelector('#faq-list');
    faqs.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');
        faqItem.innerHTML = `
            <p><strong>${faq.question}</strong></p>
            <p>${faq.answer}</p>
        `;
        faqList.appendChild(faqItem);
    });
});

//use of localStorage
document.addEventListener('DOMContentLoaded', () => {
    let visitCount = localStorage.getItem('visitCount');

    if (visitCount) {
        visitCount = parseInt(visitCount) + 1;
    } else {
        visitCount = 1;
    }

    
    localStorage.setItem('visitCount', visitCount);

   
    const visitCountElement = document.createElement('p');
    visitCountElement.textContent = `This site has ${visitCount} visits.`;
    document.body.appendChild(visitCountElement);
});