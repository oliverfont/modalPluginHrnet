# m0d4l_plugin

`m0d4l_plugin` est un plugin React léger et personnalisable pour afficher des modales. Il permet aux développeurs de configurer la taille, le contenu, l'icône de fermeture, et plus encore.

## Table des matières

1. [Installation](#installation)
2. [Utilisation de Base](#utilisation-de-base)
3. [Configuration des Props](#configuration-des-props)
4. [Exemple d'Utilisation avec Configuration](#exemple-dutilisation-avec-configuration)
5. [Licence](#licence)

## Installation

Installez le plugin via npm :

```bash
npm install m0d4l_plugin@latest
```

## Utilisation de Base

Voici un exemple simple d'utilisation du plugin dans un composant React.

```bash
import React, { useState } from 'react';
import Modal from 'm0d4l_plugin';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la Modale</button>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <p>Contenu de la modale</p>
      </Modal>
    </div>
  );
};

export default App;
```

## Configuration des Props

Le composant Modal accepte plusieurs props qui permettent de le personnaliser en fonction de vos besoins.
Prop	Type	Description	Valeur par défaut
isOpen	boolean	Contrôle si la modale est ouverte ou fermée	false
onClose	function	Fonction de rappel appelée pour fermer la modale	() => {}
title	string	Titre de la modale	''
size	string	Taille de la modale (small, medium, large)	medium
closeIcon	string	Chemin vers l'image de l'icône de fermeture	''
customStyles	object	Objet contenant les styles personnalisés	{}
closeButtonStyles	object	Styles personnalisés pour le bouton de fermeture	{}
Détails des Props

    isOpen : Détermine si la modale doit être affichée ou non. Le contrôle de cet état est géré par votre composant parent.
    onClose : Fonction appelée lorsque la modale doit être fermée (comme lors du clic sur l'icône de fermeture).
    title : Un titre optionnel pour la modale, qui sera affiché au-dessus du contenu principal.
    size : Définit la taille de la modale (small, medium, large).
    closeIcon : Vous permet de personnaliser l'icône de fermeture. Par exemple, vous pouvez passer un chemin d'image pour utiliser une icône spécifique.
    customStyles : Un objet vous permettant de surcharger les styles par défaut de la modale.
    closeButtonStyles : Permet de personnaliser les styles du bouton de fermeture.

## Exemple d'Utilisation avec Configuration

Voici un exemple plus avancé qui montre comment personnaliser la modale en utilisant différentes props.

```bash
import React, { useState } from 'react';
import Modal from 'm0d4l_plugin';
import closeIcon from './assets/close.png';  // Icône de fermeture personnalisée

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Ouvrir la Modale</button>
      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        title="Titre de la modale"
        size="large"
        closeIcon={closeIcon}
        customStyles={{
          modal: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
          modalContent: { padding: '20px', borderRadius: '10px' }
        }}
      >
        <p>Contenu de la modale personnalisé</p>
      </Modal>
    </div>
  );
};

export default App;
```

## Licence

m0d4l_plugin est sous licence MIT.