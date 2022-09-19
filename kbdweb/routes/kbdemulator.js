var express = require('express');
var router = express.Router();

// Require controller modules.
var kbdfilesController = require('../controllers/kbdfilesController');

// GET kbdfiles home page.
router.get('/', kbdfilesController.index);

// GET request for upload of a file.
router.get('/upload', kbdfilesController.upload_get);
/*

// POST request for upload file.
router.post('/upload', kbdfilesController.upload_post);

// GET request for deleting a file.
router.get('/delete', kbdfilesController.delete_get);

// POST request for deleting a file.
router.post('/delete', kbdfilesController.delete_post);
*/
module.exports = router;