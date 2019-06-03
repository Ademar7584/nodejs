'use strict';
var fs = require('fs');
var server = require('../server/server.js');

const client = require('./urlFront').credential.googleDriveService;
const folders = require('./urlFront').credential.foldersId;
const { google } = require('googleapis');
var signal = server.registry.modelBuilder.getModel('signal');
var news = server.registry.modelBuilder.getModel('news');
var coach = server.registry.modelBuilder.getModel('coach');
var user = server.registry.modelBuilder.getModel('user');

const drive = google.drive('v3');
const jwtClient = new google.auth.JWT(
  client.client_email,
  null,
  client.private_key,
  [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://www.googleapis.com/auth/drive.metadata',
  ],
  null
);

function getFilesInFolder(realPath, callback) {
  fs.readdir(realPath, (err, files) => {
    if (err) return callback(0);
    if (!files.length) return callback([]);
    var r = [];
    for (var i = 0; i < files.length; i++) {
      var f = files[i];
      callback(f);
    }
  });
};

// var filter = {
//   where: {
//     image: '3-perfil-9.jpg',
//   },
// };

// var folderId = folders['news'];
// const fileMetadata = {
//   name: '3-perfil-9.jpg',
//   parents: [folderId],
// };

// var media = {
//   mimeType: 'image/jpeg',
//   body: fs.createReadStream('/home/amh/Dropbox/Aplicaciones/criptomoneda/news/3-perfil-9.jpg'),
// };
// news.find(filter).then(s => {
//   drive.files.create({
//     auth: jwtClient,
//     resource: fileMetadata,
//     media: media,
//     fields: 'id, name, mimeType, webContentLink, webViewLink, thumbnailLink',
//   }, (err, image) => {
//     // console.log(image.data);
//     if (err) {
//       console.error(err);
//     } else {
//       s[0].perfilLink = image.data.webContentLink;
//       s[0].save();
//     }
//   });
// });

/**
 * Metodo para subir un listado de imagenes digitales a google drive
 * guardando el link de la image en la base de datos
 * 
 * NOTA: para el uso de la funcion para una carpte o modelo,
 * asegurarse cambiar signal por el modelo o carpeta q desee trabajar
 * por ejemplo
 * 
 * OLD path = '/home/amh/Dropbox/Aplicaciones/criptomoneda/signal/'
 * NEW path = '/home/amh/Dropbox/Aplicaciones/criptomoneda/news/'
 * 
 * OLD var folderId = folders['signal'];
 * NEW var folderId = folders['news'];
 * 
 * OLD news.find(filter).then(s => {
 * NEW news.find(filter).then(s => {
 */
var path = '/home/amh/Dropbox/Aplicaciones/criptomoneda/user/';
getFilesInFolder(path, (file) => {
  console.log(file);
  if (file == []) return;
  var filter = {
    where: {
      image: file,
    },
  };
  var folderId = folders['user'];
  const fileMetadata = {
    name: file,
    parents: [folderId],
  };

  var media = {
    mimeType: 'image/' + file.split('.')[1],
    body: fs.createReadStream(path + file),
  };
  user.find(filter).then(s => {
    drive.files.create({
      auth: jwtClient,
      resource: fileMetadata,
      media: media,
      fields: 'id, name, mimeType, webContentLink, webViewLink',
    }, (err, image) => {
      // console.log(image.data);
      if (err) {
        console.error('Error!!!');
      } else {
        console.error(image.data);
        s[0].perfilLink = image.data.webContentLink;
        s[0].save();
      }
    });
  });
});
