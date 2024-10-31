// Link Repository  : https://github.com/rqz234/UTS_PAWII_SI5B

const Mahasiswa = require('../model/mahasiswa');
exports.createMahasiswa = async (req, res) => {
    try {
        const newMahasiswa = new Mahasiswa(req.body);
        await newMahasiswa.save();
        res.status(201).json({
            message: "Data Berhasil Disimpan",
            data: newMahasiswa
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
