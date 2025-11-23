import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: '127.0.0.1',     // <--- JANGAN PAKAI 'localhost', GANTI JADI INI
  user: 'root',
  password: '',
  database: 'cv_anisa',
  port: 3306
});