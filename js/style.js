const items = document.querySelectorAll('.secteur-item');

// Ajoute un gestionnaire d'événements à chaque élément
items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('clicked')) {
            // Réinitialise tous les éléments
            items.forEach(el => el.classList.remove('clicked', 'notclicked'));
        } else {
            // Ajoute la classe "clicked" à l'élément cliqué
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
    });
});


/* cree 6 div dans le html avec une class secteur-item*/
const secteur = document.querySelector('.secteur');
const secteurItem = document.createElement('div');

secteurItem.classList.add('secteur-ieazetem');
secteurItem.innerHTML = "1";
secteur.appendChild(secteurItem);

const secteurItem2 = document.createElement('div');

secteurItem2.classList.add('secteur-item');
secteurItem2.innerHTML = "2";
secteur.appendChild(secteurItem2);

const secteurItem3 = document.createElement('div');

secteurItem3.classList.add('secteur-item');
secteurItem3.innerHTML = "3";
secteur.appendChild(secteurItem3);
