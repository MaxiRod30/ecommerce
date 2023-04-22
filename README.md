# Ecommerce ✨RopMax✨
## Descripción 
RopMax es una aplicación que ha sido desarrollada con React, una biblioteca popular de JavaScript utilizada para construir interfaces de usuario dinámicas y de alto rendimiento. Acompañado de Firebase que es una plataforma de desarrollo de apps que te ayuda a compilar y desarrollar las apps que les encantan a los usuarios. Con el respaldo de Google y la confianza de millones de empresas de todo el mundo
***
## Características de la aplicación

- Interfaz de usuario intuitiva y fácil de usar que permite a los usuarios navegar y comprar productos fácilmente.

- Notificacion por medio de las dependencias de toastify y sweetalert2.

- Catálogo de productos que se actualiza automáticamente a medida que se agregan nuevos artículos.

- Integración con un carrito de compras que permite a los usuarios agregar y eliminar productos, así como actualizar las cantidades.

- Página de detalles del producto que proporciona información detallada sobre los productos, incluyendo imágenes, descripción, precio y tallas disponibles.

- Sistema de búsqueda que permite a los usuarios buscar productos por marca.

- Al finalizar la compra automaticamente se le enviara un mail al cliente con toda la informacion de la compra.
***
## Dependencias utilizadas

    "@emailjs/browser": "^3.11.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "babel-plugin-react-html-attrs": "^3.0.5",
    "bootstrap": "^5.2.3",
    "firebase": "^9.19.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.7.2",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0",
    "react-router-dom": "^6.9.0",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.1.2",
    "sweetalert2": "^11.7.3",
    "web-vitals": "^2.1.4"

***
## Si quieres probarla te dejo disponible el link:

[Deploy](https://ecommerce-three-virid.vercel.app/)

***
## Lo necesario para iniciar la aplicación

1 - Instala [node.js] en tu entorno de desarrollo.

2 - Clona este repositorio en tu PC.
```
git clone https://github.com/MaxiRod30/ecommerce.git
```

3 - Abre una terminal en la carpeta raíz del proyecto.

4 - Ejecuta el comando para instalar las dependencias

```
npm install
```
5 - En este paso vamos a tener que configurar [Firebase](https://firebase.google.com/) con los productos y marcas necesarios para la aplicacion. En Firestore crear las siguientes colecciones `brand` y `products`.
Donde `products` tendra la siguiente estructura de documentos:
```
Datos de ejemplo

(string)brand: "DL"
(string)category: "Camiseta"
(string)description : "Unisex: talle S al talle XXL"
(string)img : "https://firebasestorage.googleapis.com/v0/b/backendropmax.appspot.com/o/DL%2FDL_RemeraCamisetaAudiMod3.webp?alt=media&token=0858c963-966f-48e3-b229-7539a304d007"
(string)name : "Remera Camiseta Audi Mod 3"
(number)price : 506
(number)stock : 25
```

Y `brand` la siguiente:
```
Datos de ejemplo

(string)label : "Umbro"
(number)order : 5
(string)slug : "Umbro"
```
Le seleccionamos que el `id` de los documentos se los determine automaticamente Firestore .

6 - Crear un archivo `.env` en la raíz del proyecto y configurar las siguientes variables de entorno:
```
REACT_APP_apiKey=(Firestore)
REACT_APP_authDomain=(Firestore)
REACT_APP_projectId=(Firestore)
REACT_APP_storageBucket=(Firestore)
REACT_APP_messagingSenderId=(Firestore)
REACT_APP_appId=(Firestore)
REACT_APP_YOUR_SERVICE_ID=(emailjs/servidorGmail)
REACT_APP_YOUR_TEMPLATE_ID=(emailjs/IDtemplate)
REACT_APP_YOUR_PUBLIC_KEY=(emailjs/publicKey)
REACT_APP_YOUR_TEMPLATE_ID2=(emailjs/IDtemplate)
```
Esto permitira poder conectarte con [Firebase](https://firebase.google.com/) y [emailjs](https://www.emailjs.com/)(servicio de mails utilizado en las dependecias).

7-Crear 2 templates en la dependencia [emailjs](https://www.emailjs.com/) para darle formato al mail.Esto se realiza logiandote a [emailjs](https://www.emailjs.com/) y luego creando un servidor de gmail.

8- Ejecutar ```npm start``` para dar inicio a la aplicacion

***
## Scripts 🛠️
```
start: Inicia la aplicación en modo de desarrollo.
build: Genera una versión optimizada para producción de la aplicación.
test: Ejecuta pruebas unitarias.
eject: Expulsa la configuración de la aplicación.
```
***
## Nota
Para comentarte que ante cualquier duda que tengas sobre la aplicación siempre estaré abierto a respóndete, espero que las disfrutes.
Saludos
Maximiliano Rodríguez