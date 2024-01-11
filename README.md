# Documentation pour le générateur de CV en ligne

![Logo](jobintech.png)

## Présentation

**Présentée par :** Diversity

**Membres de l'équipe :**

- Siham Alouani
- Nazha ait El Hajja
- Zidane Aboukhalid
- Ismail Baidar
- Mustapha Roudani
- Amina Gadiri

## Objectif du projet

Le principal objectif de ce projet est de concevoir et de développer une application conviviale permettant aux utilisateurs de créer facilement un CV personnalisé en ligne. Cette application vise à fournir une solution intuitive et complète pour faciliter le processus de création de CV, en mettant l'accent sur la personnalisation, la flexibilité et la facilité d'utilisation.

## Technologies Utilisées

Pour le développement de notre application de génération de CV en ligne, nous avons choisi d'utiliser React JS et Vite afin d'assurer une expérience utilisateur fluide et réactive. React JS, en tant que framework JavaScript moderne et robuste, facilite la création d'interfaces utilisateur interactives et dynamiques, tout en permettant une gestion efficace de l'état de l'application.

En complément, nous avons intégré Vite en tant qu'outil de build. Vite est reconnu pour sa rapidité exceptionnelle, offrant une expérience de développement rapide et efficace. Grâce à Vite, nous profitons d'une compilation instantanée, accélérant ainsi le processus de développement et améliorant la performance globale de notre application.

## Planification

### Jour 1: Conception et Développement de Base

1. Développement des Composants de Base avec JSX
   - Création des composants React pour différentes sections du CV (Information Personnelle, Expérience professionnelle, Formation, Compétences, Langage, Reference).
   - Création des composants React pour différentes sections de la page (Footer et Sidebar).

### Jour 2: Intégration

2. Utilisation de useState pour la Gestion des Données
   - Implémentation de l'état pour gérer les informations du CV.
3. Création de Formulaires Contrôlés
   - Développement de formulaires pour saisir les informations du CV (Information Personnelle, Expérience professionnelle, Formation, Compétences, Langage, Reference).
4. Reverse Data Flow
   - Utilisation des props pour faire remonter les données des formulaires vers le composant parent.

### Jour 3: Finalisation

5. Rendu Final et Impression
   - Permettre à l'utilisateur de voir un aperçu du CV et de l'imprimer.
6. Présentation et Documentation
   - Préparation de la présentation du projet.
   - Finalisation de la documentation du projet.

## Fonctionnalité de l'Application

Découvrez les puissantes fonctionnalités offertes par notre application de génération de CV en ligne. Chaque aspect a été soigneusement conçu pour simplifier le processus de création de votre CV et offrir une expérience utilisateur exceptionnelle. Voici un aperçu des fonctionnalités principales :

1. **Création Intuitive du CV :** Concevez votre CV en ligne de manière intuitive en utilisant des formulaires conviviaux pour chaque section, de l'information personnelle à l'expérience professionnelle.
2. **Modularité des Composants :** Profitez de la modularité des composants React, permettant une personnalisation facile et une gestion efficace de chaque section du CV.
3. **Gestion Dynamique des Données :** Utilisez la gestion dynamique des données avec useState pour une expérience utilisateur fluide et une mise à jour instantanée des informations du CV.
4. **Prévisualisation en Temps Réel :** Visualisez instantanément les changements apportés à votre CV grâce à une prévisualisation en temps réel, vous permettant d'ajuster et de perfectionner votre présentation.
5. **Impression Facilitée :** Imprimez votre CV directement depuis l'application, garantissant une qualité optimale de la version papier.
6. **Gestion Complète des Compétences et des Langues :** Ajoutez, modifiez et supprimez facilement vos compétences, langues parlées et niveaux de maîtrise.
7. **Ajout Facile de Références :** Intégrez des références professionnelles pour renforcer votre crédibilité auprès des employeurs.

Explorez ces fonctionnalités pour créer un CV qui vous représente de manière professionnelle et percutante.

## Description des Composants

L'architecture de notre application de génération de CV en ligne repose sur des composants React modulaires, chacun contribuant de manière spécifique à la création et à la personnalisation du CV. Voici une brève description de chaque composant :

1. **App.js:**

   - Composant racine intégrant tous les autres composants.
   - Gère l'état global de l'application et les données du CV.
   - Intègre le composant de prévisualisation et le sélecteur de thème.

2. **Sidebar:**

   - Affiche le logo de l'application et les composants pour remplir le CV.

3. **Footer:**

   - Contient des informations de bas de page.

4. **PersonalInfo:**

   - Formulaire permettant de saisir les informations personnelles (photo, nom, titre, profil, adresse, e-mail, téléphone, LinkedIn).
   - Utilise useState pour gérer l'état local des informations.

5. **Education:**

   - Permet aux utilisateurs d'ajouter des informations sur leur formation.
   - Gère l'ajout, la modification et la suppression des entrées de formation.

6. **WorkExperience:**

   - Permet aux utilisateurs d'ajouter des informations sur leur expérience professionnelle.
   - Permet d'ajouter plusieurs expériences avec des dates, des missions et des types de travail.

7. **Skills:**

   - Permet aux utilisateurs de lister leurs compétences.
   - Gère l'ajout, la modification et la suppression des entrées de compétence.

8. **Languages:**

   - Section pour ajouter les langues parlées et leur niveau de maîtrise avec la gestion de chaque langue.

9. **References:**

   - Composant optionnel pour ajouter des références professionnelles.

10. **Preview:**

    - Composant permettant de visualiser en temps réel les informations saisies dans les autres composants (PersonalInfo, Education, etc.).

11. **ThemeSelector:**
    - Sélecteur de thème permettant à l'utilisateur de choisir le thème du CV.

Chaque composant est conçu de manière autonome, contribuant à une structure modulaire qui facilite la maintenance, la réutilisation et l'extension de l'application. Ces éléments collaboratifs travaillent ensemble harmonieusement pour offrir une expérience utilisateur complète et personnalisée dans la création de CV en ligne.

## Guides d'utilisation

Pour tirer pleinement parti de notre application de génération de CV en ligne, suivez ces instructions détaillées pour chaque fonctionnalité clé. Créez un CV professionnel et personnalisé en quelques étapes simples :

1. Saisissez vos informations personnelles telles que la photo, le nom, le titre, le profil, l'adresse, l'e-mail, le téléphone et le profil LinkedIn.
2. Ajoutez, modifiez ou supprimez des détails sur votre formation pour structurer votre parcours académique.
3. Ajoutez des détails sur votre expérience professionnelle, y compris les dates, les missions et les types de travail.
4. Liste de manière optimale vos compétences professionnelles en suivant ces instructions.
5. Ajoutez vos compétences linguistiques avec la gestion de chaque langue pour une présentation précise de votre maîtrise linguistique.
6. Ajoutez des références professionnelles pour renforcer la crédibilité de votre CV.
7. Prévisualisez votre CV et imprimez-le pour obtenir une version physique. Assurez-vous de vérifier la mise en page avant l'impression pour une présentation optimale.

Suivez ces étapes simples pour créer votre CV en ligne de manière efficace.

## Annexe : Utilisation du Code Source

Si vous souhaitez explorer le code source de notre application de génération de CV en ligne, suivez ces étapes simples pour le télécharger, le configurer et le faire fonctionner localement sur votre machine. Cela vous permettra de comprendre le fonctionnement interne de l'application et de potentiellement apporter des modifications ou des améliorations.

**Étapes :**

1. **Téléchargement à partir de GitHub :**
   - Sur le dépôt GitHub de l'application à l'adresse [https://github.com/SihamAlouani/CVGenerateur/](https://github.com/SihamAlouani/CVGenerateur/).
   - Cliquez sur le bouton "Code" et choisissez l'option
2. **Utilisation de Visual Studio Code :**
   - Installez Visual Studio Code sur votre machine s’il n’est pas déjà installé.
   - Ouvrez Visual Studio Code.
3. **Installation des Dépendances :**
   - Dans le terminal, exécutez la commande `npm install` pour installer toutes les dépendances du
     projet.
4. **Lancement de l’Application en Mode Développement :**
   - Après l’installation des dépendances, exécutez la commande `npm run dev` dans le terminal.
   - Cela lancera l’application en mode développement sur votre machine locale.
5. **Accès à l’Application :**
   - Une fois le processus de construction terminé, ouvrez votre navigateur web et accédez à l’URL
     [http://localhost:5173/](http://localhost:5173/) pour voir l’application en action.

Vous pouvez maintenant explorer le code source, apporter des modifications selon vos besoins et même
contribuer au développement de l’application si vous le souhaitez.
