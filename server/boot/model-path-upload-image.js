'use strict';
const folders = require('../../lib/urlFront').credential.foldersId;

module.exports = (server) => {
  var router = server.loopback.Router();
  /**
   * modelos de la api
   */

  const User = server.models.user;

  var cargar = (user, files, req, callback) => {
    Object.keys(files).forEach(key => {
      const options = {
        folderGenerate: () => {
          return user.folderId;
        },
        nameGenerate: (folder) => {
          if (!folder) folder = 'user';
          var idImage;
          var ext = files[key].mimetype.split('/')[1];
          var date = new Date().getTime();
          idImage = user.username;
          if (folder !== 'user') {
            idImage += '-' + folder + '-' + date;
          }
          const nameImage = idImage + '.' + ext;
          return nameImage;
        },
      };
      User.upload(files[key], user.username, options, (err, file) => {
        if (err) throw err;
        if (req.type == 'documents' || req.type == 'settings') {
          const meta = server.models.UserMeta;
          const body = {
            meta_key: req.type,
            meta_value: {},
            userId: user.id,
          };
          body.meta_value[key] = {};
          body.meta_value[key].id = file.id;
          body.meta_value[key].name = file.name;
          body.meta_value[key].link = file.webViewLink;
          body.meta_value[key].created = new Date();
          if (req.options !== undefined) {
            body.meta_value[key].link = file.webContentLink;
            const options = JSON.parse(req.options);
            Object.keys(options).forEach(option => {
              body.meta_value[key][option] = options[option];
            })
          }
          meta.find({ userId: user.id, meta_key: req.type }, (err, model) => {
            if (model === undefined || model.length == 0) {
              meta.create(body)
            } else {
              model[0].meta_value[key] = {};
              model[0].meta_value[key] = body.meta_value[key];
              model[0].save();
            }
          });
        } else if (req.type == 'upload') {
          user.perfilLink = file.webContentLink;
          user.image = file.name;
          callback(user);
        }
      });
    });
    setTimeout(() => {
      if (Object.keys(files).length > 1) callback(user);
    }, 500);
  };

  /**
   * ruta para cargar imagenes independientes
   */
  router.post('/users/:id/upload', async (req, res) => {
    if (req.accessToken == null) return res.status(403).send('Error!. No tiene permisos para este evente');
    const file = req.files;
    const id = req.params.id;
    const user = await User.findById(id);
    const folderUserId = folders['user'];
    if (!user.folderId || user.folderId === undefined) {
      const folder = await User.folder(user.firstName, folderUserId);
      if (!folder) throw err;
      user.folderId = folder.id;
    }
    cargar(user, file, req.body, (data) => {
      User.upsert(user);
      res.send(data);
    });
  });
  server.use(router);
};
