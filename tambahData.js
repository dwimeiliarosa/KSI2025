/*
  tambahData.js
  Fitur: Menambah data mahasiswa ke database
*/
const { buatKoneksi } = require('./db');

function tambahMahasiswa(nama, nim, jurusan) {
  const db = buatKoneksi();
  const sql = `INSERT INTO mahasiswa (nama, nim, jurusan) VALUES ('${nama}', '${nim}', '${jurusan}')`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Gagal menambah data:', err.message);
      return;
    }
    console.log('✅ Data mahasiswa berhasil ditambahkan');
  });

  db.end();
}

module.exports = { tambahMahasiswa };
