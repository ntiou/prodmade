## Prodmade test procedure

1. Créer la base de données `prodmade` dans MySQL
2. creer un fichier .env a la racine du projet Copier et coller le contenu du fichier .env.example dans ce dernier
3. Dans l’invite de commande aller à la racine du projet dans le dossier ‘prodmade’
4. Ajouter les tables dans la base de données : commande à entrer dans l’invite de commande (`php artisan migrate`)
5. Ajouter les données dans la base de données : commande à entrer dans l’invite de commande (`php artisan db:seed DatabaseSeeder`)
6. Lancer le server : commande à entrer dans l’invite de commande (`php artisan serve`)
7. Dans votre navigateur entrer l’url http://127.0.0.1:8000
8. Connectez vous et rechercher un produit en entrant son identifiant ou son nom dans le champ de recherche.
