const appName = process.env.REACT_APP_NAME

module.exports = {

  'translation': {

    'menuAboutButton': 'Sur',

    'menuAdminButton': 'Admin',

    'checkpointsTab': 'Points de contrôle',

    'statusTab': 'Statut',

    'welcomeMessage': `Bienvenue à ${appName}. Pour participer à l'effort de suivi de la propagation du virus SARS-COV-2, veuillez scanner un point de contrôle chaque fois que vous interagissez avec d'autres d'une manière qui pourrait transmettre le virus.`,

    'joinCheckpointButton': 'Scanner un point de contrôle',

    'noCameraPermissionMessage': "Cette application n'est pas autorisée à accéder à la caméra de votre appareil. Au lieu de cela, vous pouvez prendre une photo du code QR.",

    'takePictureButton': 'Prendre une photo',

    'backButton': 'Retour',

    'joinSuccessfulMessage': 'Vous avez rejoint le point de contrôle avec succès.',

    'scanErrorMessage': 'Le code QR n\'a pas pu être lu. Veuillez réessayer.',

    'statusLoadingMessage': 'Chargement de votre statut...',

    'statusNegativeMessage': 'Aucun lien de transmission d\'individus infectés vers vous n\'a été découvert à ce jour. Cependant, tout le monde est à risque et les individus doivent suivre les directives du Service de la Santé Publique et du gouvernement local.',

    'statusPositiveMessage': 'Un lien de transmission possible d\'un individu infecté à vous a été découvert. Vous devez prendre des mesures de précaution pour vous protéger et protéger les autres, conformément aux directives de l\'autorité de santé publique et du gouvernement local.',

    'loadingMessage': 'Chargement...',

    'standardRiskLevelMessage': 'normal',

    'elevatedRiskLevelMessage': 'Élevé',

    'yourRiskLevelMessage': 'Votre niveau de risque',

    'aboutReportMessage': 'Si vous avez reçu un test positif, vous pouvez télécharger vos points de contrôle récents ci-dessous et partager ce fichier avec votre médecin. Cela avertira ceux qui pourraient avoir été exposés de leur risque accru. Vous resterez anonyme.',

    'downloadHistoryButton': 'Télécharger les points de contrôle',

    'elevatedRiskAlertMessage': 'Votre niveau de risque est élevé.',

    'seeStatusTabMessage': 'Voir l’onglet statut.'

  }

}
