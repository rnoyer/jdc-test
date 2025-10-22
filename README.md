# Test technique Vue

## Énoncé

Voici un Token API : 432cc4e418414d2abf781706230612 pour :

https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2

En se servant de la route https://api.weatherapi.com/v1/current.json créez une Applet front qui permet de récupérer et afficher température/humidité actuelle d’une ville.

vous pouvez facilement tester en passant par ce lien:

https://www.weatherapi.com/api-explorer.aspx 

Dans le cadre de cet exercice, l'api a été manipulée pour ne renvoyer seulement que les champs temp_c et humidity

Pendant le développement, vous expliquerez vos choix techniques.

Vous devrez réaliser ce projet vous-même, pour cela, vous avez le droit à toutes les ressources à votre disposition.

Dans le cadre de cet exercice récupérer un projet similaire d’une source externe n’est pas autorisé.

Limite de temps 45min.

Le but n’est pas spécialement de finir l’exercice, mais d’expliquer sa démarche et ses choix et d’avancer le plus possible dans le temps imparti.


## Résultat attendu

Lorsque le bouton est cliqué, l'application doit envoyer une requête à l'api avec la ville renseignée dans le champ de recherche. La réponse de cette requête doit être utilisée pour hydrater la page à savoir :

- Le composant humidité (en pourcentage)
- Le composant température (en celsius ou en fahrenheit si l'on clique sur le composant)
- Le composant historique (un liste des recherches précédentes et de leurs résultats ce qui comprend le nom de la ville, l'humidité en pourcentage et la température en celsius)