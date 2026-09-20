# SEN Teranga Restaurant — Menu interactif

## Principe de l'application

Cette application simule le menu interactif d'un restaurant sénégalais.
Elle affiche une liste de plats (entrées, plats principaux, desserts)
générée dynamiquement à partir d'un tableau de données statiques (JavaScript pur,
sans base de données ni API).

## Fonctionnalités

- **Filtrer les plats par catégorie** (Tous / Plats / Desserts / Entrées) grâce aux boutons du menu.
- **Rechercher un plat en temps réel** en tapant son nom dans la barre de recherche (mise à jour du DOM à chaque frappe clavier).
- **Ajouter un ou plusieurs plats au panier** en cliquant sur "Ajouter".
- Le **panier se met à jour automatiquement** : liste des plats, nombre d'articles et total en FCFA.
- **Vider le panier** en un clic.

## Comment utiliser l'application

1. Parcourir le menu ou utiliser les filtres/la recherche pour trouver un plat.
2. Cliquer sur **Ajouter** pour l'ajouter au panier.
3. Consulter le panier (en bas à droite) pour voir le récapitulatif et le total.
4. Cliquer sur **Vider panier** pour recommencer une commande.

## Structure du projet

- `index.html` — structure de la page
- `style.css` — mise en forme
- `script.js` — logique de l'application (filtrage, recherche, gestion du panier)

## Auteur

[Nogaye DIOUF] — Mini-projet JavaScript & DOM, Licence 1 Informatique
