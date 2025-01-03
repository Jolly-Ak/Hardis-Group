document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi réel du formulaire

  const popup = document.getElementById('popup');
  popup.style.display = 'block';

  setTimeout(function() {
    popup.style.display = 'none';
  }, 3000); // Popup disparaît après 3 secondes
});
