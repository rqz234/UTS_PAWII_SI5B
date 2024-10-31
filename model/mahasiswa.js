const mongoose = require('mongoose');

const MahasiswaSchema = new mongoose.Schema({
    nama: {type: String,required: true},
    jurusan: {type: String,required: true},
    angkatan: {type: Number,required: true},
});

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema);
