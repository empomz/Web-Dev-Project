(function (){ // Function to initialize the SDK with my pub key
    emailjs.init({
        publicKey: "LLYuY_o0nMHMlKO8W",
    });
})
();

    const btn = document.getElementById('button');

    document.getElementById('form')
    .
    addEventListener('submit', function (event) { //Listens to the form for it's information
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_8a16mts';

    emailjs.sendForm(serviceID, templateID, this) // Sends the contact form to my email
    .then(() => {
    btn.value = 'Send Email';
    alert('Sent!');
}, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
});
})
;
