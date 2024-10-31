const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controller/mahasiswa');

router.post('/', mahasiswaController.createMahasiswa);

module.exports = router;
