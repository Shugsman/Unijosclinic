document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('appointment-form');
   const successMessage = document.getElementById('success-message');

   form.addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent form submission to server
       
       // Here you can add logic to handle form data, e.g., send it to a server
       
       // Display success message
       successMessage.classList.remove('hidden');
       
       // Optionally, reset the form
       form.reset();
       
       // Optionally, hide the success message after a few seconds
       setTimeout(function() {
           successMessage.classList.add('hidden');
       }, 5000);
   });
});