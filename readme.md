# TodoList Application

## Description
Cette application TodoList est un projet web simple conçu pour gérer des tâches quotidiennes. Elle permet aux utilisateurs de créer, marquer comme complétées, et supprimer des tâches.

## Fonctionnalités
- **Ajouter des tâches** : Les utilisateurs peuvent ajouter des tâches à leur liste en saisissant du texte dans un champ et en soumettant un formulaire.
- **Marquer des tâches comme complétées** : Chaque tâche peut être marquée comme complétée en cliquant sur une checkbox.
- **Supprimer des tâches** : Les tâches peuvent être supprimées individuellement.
- **Filtrer les tâches** : Les tâches peuvent être filtrées selon qu'elles sont toutes affichées, seulement les actives ou les complétées.

## Technologies Utilisées
- HTML
- CSS
- JavaScript
- Bootstrap pour le style

## Structure du Projet
- `index.html` : Le fichier HTML principal.
- `app.js` : Contient la logique principale de l'application.
- `dom.js` : Gère la création et les interactions des éléments du DOM.
- `storage.js` : Responsable de la sauvegarde et du chargement des tâches depuis `localStorage`.
- `TodoItem.js` : Définit la classe `TodoItem` utilisée pour créer des tâches.
- `TodoList.js` : Définit la classe `TodoList` qui gère la liste des tâches.

## Installation
Pour utiliser cette application, clonez simplement le dépôt et ouvrez le fichier `index.html` dans votre navigateur web.