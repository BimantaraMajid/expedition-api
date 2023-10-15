
# Expedition API
Expedition API adalah sebuah sistem API yang dirancang untuk mengelola data ekspedisi dan pengiriman barang. Proyek ini dibangun menggunakan teknologi terkini dan dirancang untuk memudahkan manajemen pengiriman barang, pelacakan, dan manajemen logistik secara efisien.

## Fitur Utama
- Manajemen Pengiriman: Anda dapat dengan mudah menambahkan, mengedit, dan menghapus pengiriman barang dalam sistem.
- Pelacakan Pengiriman: Sistem ini memungkinkan Anda untuk melacak status pengiriman barang secara real-time.
- Manajemen Penerima: Anda dapat mengelola data penerima dengan mudah, termasuk alamat, kontak, dan informasi lainnya.
- Manajemen Pengemudi: Mengelola pengemudi dan kendaraan yang terlibat dalam pengiriman barang.
Laporan dan Analitik: Sistem menyediakan laporan dan analitik yang dapat membantu Anda dalam pengambilan keputusan yang lebih baik.

## Teknologi yang Digunakan
- Node.js: Proyek ini menggunakan Node.js sebagai bahasa pemrograman utama.
-Express.js: Framework Express digunakan untuk membuat API yang efisien dan terstruktur.
PostgreSQL: Saat ini masih menggunakan Postgre sebagai database utama, namun nantinya akan migrasi ke Database NoSQL MongoDB.
Postman: Untuk testint API sekaligus sebagai dokumentasi sementara, nantinya dokumentasi akan menggunakan swagger.
Swagger: (Soon)

## Instalasi

Pastikan Anda telah menginstal Node.js dan npm di komputer Anda sebelum menjalankan proyek ini.

1. Clone repositori ini ke komputer Anda:
   ```bash
   git clone [URL repositori];
   cd expedition-api
2. Instal semua dependensi dengan menjalankan perintah berikut:
   ```shell
   npm install
3.  Buat env.sh dari env.sh.template, dan isi value sesuai dengan dabase yang ingin digunakan

4. Penggunaan Proyek ini dapat dijalankan dengan menjalankan perintah berikut:
   ```shell
   npm start
5. Perintah di atas akan menjalankan aplikasi Anda dengan Nodemon, sehingga server akan restart otomatis setiap kali ada perubahan pada kode.

### Skrip Lainnya

- Untuk menjalankan ESLint:
  ```shell
  npm run eslint
- Untuk menjalankan migrasi basis data:
  ```shell
  npm run migrate:up
- Untuk membatalkan migrasi basis data:
  ```shell
  npm run migrate:undo
- Untuk menambahkan data awal ke basis data:
  ```shell
  npm run seed

## Dependensi Utama
- Express
- Express Validator
- Morgan
- pg
- Sequelize

untuk lebih detil bisa dilihat pada file package.json
## Lisensi
Proyek ini dilisensikan di bawah MIT License.

