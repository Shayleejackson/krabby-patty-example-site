// script.js

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const confirmationMessage = `Thank you, ${name}! We have received your message and will get back to you at ${email}.`;
    document.getElementById('contact-confirmation').innerText = confirmationMessage;
    document.getElementById('contact-form').reset();
});

// Calculate the total cost based on the quantities selected
function calculateTotal() {
    const item1Price = 12.99;
    const item2Price = 19.99;
    const item3Price = 27.99;
	const item4Price = 17.99;
    const item5Price = 7.99;
    const item6Price = 12.99;
	const item7Price = 9.99;
    const item8Price = 14.99;
    const item9Price = 7.99;
    const item10Price = 12.99;
    const item1Quantity = parseInt(document.getElementById('item1').value) || 0;
    const item2Quantity = parseInt(document.getElementById('item2').value) || 0;
    const item3Quantity = parseInt(document.getElementById('item3').value) || 0;
	const item4Quantity = parseInt(document.getElementById('item4').value) || 0;
    const item5Quantity = parseInt(document.getElementById('item5').value) || 0;
    const item6Quantity = parseInt(document.getElementById('item6').value) || 0;
    const item7Quantity = parseInt(document.getElementById('item7').value) || 0;
    const item8Quantity = parseInt(document.getElementById('item8').value) || 0;
    const item9Quantity = parseInt(document.getElementById('item9').value) || 0;
	const item10Quantity = parseInt(document.getElementById('item10').value) || 0;

    const total = (item1Price * item1Quantity) + (item2Price * item2Quantity) + (item3Price * item3Quantity) + (item4Price * item4Quantity) + (item5Price * item5Quantity) + (item6Price * item6Quantity) + (item7Price * item7Quantity) + (item8Price * item8Quantity) + (item9Price * item9Quantity) + (item10Price * item10Quantity);
    
    document.getElementById('total').innerText = total.toFixed(2);
}

// Update the total whenever a quantity input changes
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateTotal);
});

// Order Form Submission
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const total = document.getElementById('total').innerText;

    const confirmationMessage = `Thank you, ${name}! Your order totaling $${total} has been placed. A confirmation email has been sent to ${email}. Your order will be delivered to: ${address}.`;
    document.getElementById('order-confirmation').innerText = confirmationMessage;
    document.getElementById('order-form').reset();
    document.getElementById('total').innerText = "0.00";
});
