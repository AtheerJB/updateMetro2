document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    document.getElementById('payment-form').classList.add('hidden'); 
    document.getElementById('confirmation-message').classList.remove('hidden'); 
});