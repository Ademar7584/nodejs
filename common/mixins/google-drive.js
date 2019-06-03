'use strict';

var fs = require('fs');
const client = require('../../lib/urlFront').credential.googleDriveService;
const folders = require('../../lib/urlFront').credential.foldersId;
const { google } = require('googleapis');

module.exports = (Model, options) => {
  // crear cuanta dde servicio en google
  // link: https://console.developers.google.com/iam-admin/serviceaccounts?project=criptoanalisis-212807&folder&organizationId
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

  Model.defineProperty('image', { type: String });
  Model.defineProperty('perfilLink', { type: String });

  // CODIGO COMENTADO PARA MEJORAMIENTO DE API CUANDO
  // SE CARGAR IMAGENES INDEPENTIENDES
  // Model.googledrive = (perfil, ctx, options) => {
  //   console.log(perfil);
  // };

  // Model.remoteMethod('googledrive', {
  //   accepts: [
  //     { arg: 'id', type: 'string'},
  //     { arg: 'file', type: 'object', http: { source: 'req' } },
  //     { arg: 'res', type: 'object', http: { source: 'res' } },
  //   ],
  //   returns: { arg: 'data', type: Model.definition.name, root: true },
  //   http: { path: '/:id/upload/', verb: 'post' },
  //   description: 'load main image in google drive',
  // });

  Model.upload = (image, username, options, callback) => {
    if (callback === undefined && typeof options === 'function') {
      callback = options;
      options = {
        folderGenerate: () => {
          return Model.definition.name;
        },
        nameGenerate: (folder) => {
          var idImage;
          var ext = image.mimetype.split('/')[1];
          var date = new Date().getTime();
          idImage = username;
          if (folder !== 'user') {
            idImage += '-' + folder + '-' + date;
          }
          const nameImage = idImage + '.' + ext;
          return nameImage;
        },
      };
    }
    image.mv('./storage/drive/drive.' + image.mimetype.split('/')[1], (err) => {
      if (err) throw err;
      var folderId = -1;
      const __FOLDER__ = options.folderGenerate();
      folderId = folders[__FOLDER__];
      if (folderId === undefined) {
        folderId = __FOLDER__;
      }
      const fileMetadata = {
        name: options.nameGenerate(__FOLDER__),
        parents: [folderId],
      };

      var media = {
        mimeType: image.mimetype,
        body: fs.createReadStream('./storage/drive/drive.' + image.mimetype.split('/')[1]),
      };
      drive.files.create({
        auth: jwtClient,
        resource: fileMetadata,
        media: media,
        fields: 'id, name, mimeType, webContentLink, webViewLink',
      }, (err, file) => {
        if (err) {
          callback(err);
        } else {
          callback(err, file.data);
        }
      });
    });
  };

  Model.folder = (name, parentId, callback) => {
    var folderIds = [];
    if (parentId !== null) {
      folderIds.push(parentId);
    }
    var fileMetadata = {
      name: name,
      mimeType: 'application/vnd.google-apps.folder',
      parents: folderIds,
    };
    drive.files.create({
      auth: jwtClient,
      resource: fileMetadata,
      fields: 'id',
    }, (err, file) => {
      if (err) {
        callback(err);
      } else {
        callback(null, file.data);
      }
    });
  };

  Model.folder = (name, parentId) => {
    var promise = new Promise((resolve, reject) => {
      var folderIds = [];
      if (parentId !== null) {
        folderIds.push(parentId);
      }
      var fileMetadata = {
        name: name,
        mimeType: 'application/vnd.google-apps.folder',
        parents: folderIds,
      };
      drive.files.create({
        auth: jwtClient,
        resource: fileMetadata,
        fields: 'id',
      }, (err, file) => {
        if (err) reject(err);
        else
          resolve(file.data);
      });
    });
    return promise;
  };

  Model.delete = (fileId, callback) => {
    var fileMetadata = {
      'mimeType': 'application/vnd.google-apps.folder',
    };
    drive.files.delete({
      auth: jwtClient,
      resource: fileMetadata,
      fileId: fileId,
      fields: 'id',
    }, (err, file) => {
      if (err) {
        callback(err);
      } else {
        callback(err, file.data);
      }
    });
  };

  Model.download = (parentId, callback) => {
    drive.files.list({
      auth: jwtClient,
      fileId: parentId,
      fields: 'nextPageToken, files(id, name)',
    }, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(err, res.data);
      }
    });
  };
};
