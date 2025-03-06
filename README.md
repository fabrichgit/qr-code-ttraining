---

# 📌 QRCode Utility  

Une bibliothèque simple pour **générer** et **scanner** des QR Codes en JavaScript avec Node.js et le navigateur.  

## 🚀 Fonctionnalités  

### 1️⃣ Génération de QR Code  
- **Description** : Convertit un texte en une image QR Code.  
- **Résultat attendu** : Un fichier image est créé.  
- **Utilisé** : [`qrcode`](https://www.npmjs.com/package/qrcode)  

### 2️⃣ Scan et Lecture d'un QR Code  
- **Description** : Scanne un QR Code à partir de la webcam et affiche son contenu.  
- **Résultat attendu** : Affichage de l'ID.  
- **Utilisé** : [`html5-qrcode`](https://www.npmjs.com/package/html5-qrcode)  

## 📦 Installation  

```sh
npm install qrcode html5-qrcode
```

## 📜 Usage  

### 🔹 Générer un QR Code  

```javascript
const QRCode = require('qrcode');

const generateQRCode = async (text) => {
  try {
    await QRCode.toFile('qrcode.png', text);
    console.log('✅ QR Code généré : qrcode.png');
  } catch (err) {
    console.error('❌ Erreur :', err);
  }
};

generateQRCode('Hello, World!');
```

### 🔹 Scanner un QR Code (Webcam)  

Dans un fichier HTML :  

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.com/html5-qrcode"></script>
  <title>Scan QR Code</title>
</head>
<body>
  <div id="reader"></div>
  <script>
    function onScanSuccess(decodedText, decodedResult) {
      console.log(`Scanné: ${decodedText}`);
      alert(`ID détecté: ${decodedText}`);
    }

    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start({ facingMode: "environment" }, { fps: 10, qrbox: 250 }, onScanSuccess);
  </script>
</body>
</html>
```

## 🛠️ Auteur  
**Fabrich** - Passionné par le JavaScript et son écosystème. 🚀  

## 📄 Licence  
Ce projet est sous licence **MIT**.  

---

J'espère que ce README te convient ! 😊
