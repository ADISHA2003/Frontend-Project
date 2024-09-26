function submitForm(event) {
    event.preventDefault();

    const nameField = document.querySelector('input[type="text"]');
    const genderValue = document.querySelector('input[name="gender"]:checked').value;
    const mobileNumber = document.querySelector('input[type="tel"]');
    const emailField = document.querySelector('input[type="email"]');
    const appointmentDate = document.querySelector('input[type="date"]');
    const messageField = document.querySelector('textarea');

    const name = encodeURIComponent(nameField.value);
    const gender = encodeURIComponent(genderValue);
    const number = encodeURIComponent(mobileNumber.value);
    const email = encodeURIComponent(emailField.value);
    const date = encodeURIComponent(appointmentDate.value);
    const message = encodeURIComponent(messageField.value);

    const whatsappMessage = `Name: ${name}%0AGender: ${gender}%0AMobile No.: ${number}%0AEmail: ${email}%0AAppointment Date: ${date}%0AMessage: ${message}`;

    window.open(`https://api.whatsapp.com/send?phone=9289665096&text=${whatsappMessage}`, '_blank');
}