# Node Boilerplate

## Deskripsi

Node Boilerplate adalah template dasar untuk memulai proyek Node.js dengan struktur yang baik dan konfigurasi yang siap pakai. Ini bertujuan untuk mempercepat proses pengembangan dengan menyediakan fondasi yang solid.

## Fitur

-   Struktur folder yang terorganisir
-   Konfigurasi untuk linting dan format kode
-   Pengaturan dasar untuk pengujian
-   Contoh penggunaan modul
-   ... (tambahkan fitur lain jika diperlukan)

## Library yang Digunakan

Berikut adalah beberapa library yang ada di dalam proyek ini:

-   **@ndiinginc/cert**:

    -   `setDefaultAttrs`: Mengatur atribut default untuk sertifikat.
    -   `getExtensionSAN`: Mendapatkan Subject Alternative Name (SAN) untuk ekstensi.
    -   `getKeysAndCert`: Mengambil kunci dan sertifikat.
    -   `generateRootCA`: Menghasilkan Root Certificate Authority.
    -   `generateCertsForHostname`: Menghasilkan sertifikat untuk hostname tertentu.
    -   `getCertsForHostname`: Mengambil sertifikat untuk hostname tertentu.

-   **@ndiinginc/jwt**:

    -   `signer`: Menghasilkan tanda tangan JWT.
    -   `verifier`: Memverifikasi tanda tangan JWT.
    -   `encode`: Mengkodekan data ke dalam JWT.
    -   `decode`: Menguraikan JWT.

-   **@ndiinginc/otp**:

    -   `hotp`: Menghasilkan One-Time Password (HOTP).
    -   `totp`: Menghasilkan Time-based One-Time Password (TOTP).

-   **@ndiinginc/router**: Middleware untuk menangani routing.

    -   `security`, `cors`, `cookies`, `compression`, `messages`, `auth`, `missing`, `catchAll`.

-   **@ndiinginc/util**:

    -   Utilitas untuk berbagai fungsi.
    -   `read`, `write`: Fungsi untuk membaca dan menulis.
    -   `Mutex`, `Semaphore`: Untuk pengelolaan akses bersamaan.
    -   `retry`, `timeout`, `CircuitBreaker`, `Bulkhead`, `RateLimiter`: Untuk penanganan operasi asinkron dan pengelolaan permintaan.
    -   `toPascalCase`, `toCamelCase`, `toSnakeCase`, `toKebabCase`, `toTitleCase`: Fungsi untuk mengubah format string.

-   **@ndiinginc/fetch**:

    -   `CookieStore`, `Storage`, `Store`, `create`: Fungsi dan objek untuk pengelolaan penyimpanan dan pengambilan data.

-   **express**: Framework minimalis untuk membangun aplikasi web dan API di Node.js.
-   **ws**: Library untuk menyediakan WebSocket yang mudah digunakan.

## Penerapan SEA (Single Executable Applications)

SEA (Single Executable Applications) adalah pendekatan untuk mengemas aplikasi Node.js menjadi satu file eksekusi. Berikut adalah langkah-langkah untuk menerapkan SEA pada aplikasi ini:

1. **Kompilasi menggunakan Webpack**:
 <pre>
 npx webpack --mode=production --node-env=production
 </pre>

2. **Menjalankan konfigurasi SEA**:
 <pre>
 node --experimental-sea-config sea-config.json
 </pre>

3. **Menyalin file eksekusi**:
 <pre>
 node -e "require('fs').copyFileSync(process.execPath, 'out/main.exe')"
 </pre>

4. **Menghapus signature yang ada**:
 <pre>
 "C:/Program Files (x86)/Windows Kits/10/bin/10.0.26100.0/x64/signtool" remove /s out/main.exe
 </pre>

5. **Menerapkan post-project**:
 <pre>
 npx postject out/main.exe NODE_SEA_BLOB out/main.blob ^
 --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
 </pre>

6. **Menandatangani file eksekusi**:
 <pre>
 "C:/Program Files (x86)/Windows Kits/10/bin/10.0.26100.0/x64/signtool" sign /fd SHA256 /a out/main.exe
 </pre>

## Skrip yang Tersedia

Berikut adalah beberapa skrip yang tersedia di dalam proyek ini:

-   **`test`**: Menjalankan perintah untuk menunjukkan bahwa tidak ada pengujian yang ditentukan.
    <pre>
    "test": "echo \"Error: no test specified\" && exit 1"
    </pre>

-   **`build`**: Membangun proyek dalam mode produksi menggunakan Webpack.
    <pre>
    "build": "webpack --mode=production --node-env=production"
    </pre>

-   **`build:dev`**: Membangun proyek dalam mode pengembangan menggunakan Webpack.
    <pre>
    "build:dev": "webpack --mode=development"
    </pre>

-   **`build:prod`**: Membangun proyek dalam mode produksi dengan environment produksi.
    <pre>
    "build:prod": "webpack --mode=production --node-env=production"
    </pre>

-   **`watch`**: Memantau perubahan dalam proyek dan membangun ulang otomatis.
    <pre>
    "watch": "webpack --watch"
    </pre>

-   **`prettier`**: Menjalankan Prettier untuk format kode.
    <pre>
    "prettier": "npx prettier . --write"
    </pre>

-   **`dev`**: Menjalankan aplikasi menggunakan Nodemon untuk pengembangan.
    <pre>
    "dev": "nodemon src/index.js"
    </pre>

## Contoh File .env

Berikut adalah contoh file `.env` dasar yang bisa digunakan dalam proyek ini:

<pre>
HOST=localhost
HTTP_PORT=80
HTTPS_PORT=443
HTTP_PROXY=http://127.0.0.1:8888
NODE_TLS_REJECT_UNAUTHORIZED=0
</pre>

## Instalasi

1. Clone repositori ini:
 <pre>
 git clone https://github.com/ndiing/node-boilerplate.git
 </pre>

2. Masuk ke direktori proyek:
 <pre>
 cd node-boilerplate
 </pre>

3. Install dependensi:
 <pre>
 npm install
 </pre>

## Penggunaan

Jelaskan bagaimana cara menggunakan template ini untuk memulai proyek baru, misalnya menjalankan server, menambahkan modul, dll.

## Kontribusi

Kami sangat menghargai kontribusi! Silakan fork repositori ini dan buat pull request untuk perubahan yang ingin Anda usulkan.

## Lisensi

Distribusi di bawah lisensi MIT. Lihat `LICENSE` untuk informasi lebih lanjut.

## Kontak

Jika ada pertanyaan, silakan hubungi saya di [ndiing.inc@gmail.com](mailto:ndiing.inc@gmail.com).
