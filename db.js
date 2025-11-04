/*
  db.js
  Fitur: Koneksi ke database MySQL (simulasi)
*/
const mysql = require('mysql');

function buatKoneksi() {
  const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kampus'
  });

  koneksi.connect(err => {
    if (err) {
      console.error('Koneksi ke database gagal:', err.message);
      return;
    }
    console.log('✅ Terhubung ke database MySQL');
  });

  return koneksi;
}

module.exports = { buatKoneksi };
