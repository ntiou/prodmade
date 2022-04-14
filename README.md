## Prodmade test procedure

1. Créer la base de données `prodmade` dans MySQL
2. Dans l’invite de commande aller à la racine du projet dans le dossier ‘prodmade’
3. Ajouter les tables dans la base de données : commande à entrer dans l’invite de commande (`php artisan migrate`)
4. Ajouter les données dans la base de données : commande à entrer dans l’invite de commande (`php artisan db:seed DatabaseSeeder`)
5. Lancer le server : commande à entrer dans l’invite de commande (`php artisan serve`)
6. Dans votre navigateur entrer l’url http://127.0.0.1:8000
7. Connectez vous et rechercher un produit en entrant son identifiant ou son nom dans le champ de recherche.
