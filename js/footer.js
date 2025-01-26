

/*
.then(response => response.text())
.then(data => document.getElementById('navbar').innerHTML = data)
.catch(error => console.error('Erreur lors du chargement de la navigation:', error));
 */
fetch('../footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data)
.catch(error => console.error('Erreur lors du chargement du footer:', error));

