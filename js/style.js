const items = document.querySelectorAll('.secteur-item');

// Ajoute un gestionnaire d'événements à chaque élément
items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('clicked')) {
            // Réinitialise tous les éléments
            items.
            forEach(el => el.classList.remove('clicked', 'notclicked'));
        } else {
            // Ajoute la classe "clicked" à l'élément cliqué
            loopitem(item);
        }
    });
});

function loopitem(item) {
    items.forEach(el => {
        if (el !== item) {
            el.classList.add('notclicked');
            el.classList.remove('clicked');
        } else {
            el.classList.add('clicked');
            el.classList.remove('notclicked');
        }
    });
}

