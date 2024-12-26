document.querySelectorAll('.secteur-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.add('clicked');
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.secteur-item')) {
        document.querySelectorAll('.secteur-item.clicked').forEach(item => {
            item.classList.remove('clicked');
        });
    }
});