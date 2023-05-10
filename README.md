# Projet Chi-Carré

Ce projet implémente un test chi-carré pour l'analyse des tableaux de contingence. Il permet de déterminer si les différences entre les valeurs observées et attendues dans un tableau sont statistiquement significatives.

## Contributeurs

- Chanfour Kalani
- NOPOLY Laurent

## Installation et Exécution

1. Assurez-vous d'avoir [Node.js](https://nodejs.org) installé sur votre système.
2. Téléchargez ou clonez ce repository sur votre machine.
3. Dans un terminal, accédez au répertoire du projet.
4. Exécutez la commande suivante pour installer les dépendances :

   ```bash
   npm install
   ```

5. Vous pouvez maintenant exécuter le fichier `Main.js` en utilisant la commande :

   ```bash
   node Main.js
   ```

   Assurez-vous de remplacer les valeurs du tableau observé dans le fichier `Main.js` par vos propres données avant d'exécuter le script.

6. Les résultats du test chi-carré seront affichés dans la console, comprenant la valeur du chi-carré calculée, la valeur critique du chi-carré et une indication sur la différence significative entre les valeurs observées et attendues.

## Personnalisation des données

Pour effectuer le test chi-carré sur vos propres données, vous devez remplacer les valeurs du tableau observé dans le fichier `Main.js`. Le tableau doit être au format suivant :

```javascript
const observedValues = [
    [/* Ligne 1 */],
    [/* Ligne 2 */],
    // ...
];
```

Remplacez chaque élément `/* Ligne */` par les valeurs observées correspondantes pour chaque ligne du tableau de contingence. Assurez-vous que toutes les lignes ont le même nombre d'éléments.

## Ressources supplémentaires

- Pour en savoir plus sur le test chi-carré et son interprétation, consultez la [documentation de JStat](https://jstat.github.io/).


