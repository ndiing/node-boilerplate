## Modules

<dl>
<dt><a href="#module_cert">cert</a></dt>
<dd></dd>
<dt><a href="#module_env">env</a></dt>
<dd></dd>
<dt><a href="#module_jwt">jwt</a></dt>
<dd></dd>
<dt><a href="#module_middleware">middleware</a></dt>
<dd></dd>
<dt><a href="#module_otp">otp</a></dt>
<dd></dd>
<dt><a href="#module_file">file</a></dt>
<dd></dd>
<dt><a href="#module_resilience">resilience</a></dt>
<dd></dd>
<dt><a href="#module_string">string</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#Mutex">Mutex</a></dt>
<dd><p>Kelas yang mengimplementasikan mekanisme mutex untuk penguncian sumber daya.</p>
</dd>
<dt><a href="#Semaphore">Semaphore</a></dt>
<dd><p>Kelas yang mengimplementasikan mekanisme semaphore untuk pengelolaan akses ke sumber daya.</p>
</dd>
</dl>

<a name="module_cert"></a>

## cert

-   [cert](#module_cert)
    -   [.defaultAttrs](#module_cert.defaultAttrs) : <code>Array.&lt;Object&gt;</code>
    -   [.getExtensionSAN(domain)](#module_cert.getExtensionSAN) ⇒ <code>Object</code>
    -   [.getKeysAndCert([serialNumber])](#module_cert.getKeysAndCert) ⇒ <code>Object</code>
    -   [.generateRootCA([commonName])](#module_cert.generateRootCA) ⇒ <code>Object</code>
    -   [.generateCertsForHostname(domain, rootCAConfig)](#module_cert.generateCertsForHostname) ⇒ <code>Object</code>
    -   [.setDefaultAttrs(attrs)](#module_cert.setDefaultAttrs)
    -   [.getCertsForHostname(domain)](#module_cert.getCertsForHostname) ⇒ <code>Object</code>

<a name="module_cert.defaultAttrs"></a>

### cert.defaultAttrs : <code>Array.&lt;Object&gt;</code>

Atribut default yang digunakan untuk sertifikat.

**Kind**: static property of [<code>cert</code>](#module_cert)  
**Properties**

| Name        | Type                | Description                     |
| ----------- | ------------------- | ------------------------------- |
| name        | <code>string</code> | Nama atribut.                   |
| value       | <code>string</code> | Nilai atribut.                  |
| [shortName] | <code>string</code> | Nama pendek atribut (opsional). |

<a name="module_cert.getExtensionSAN"></a>

### cert.getExtensionSAN(domain) ⇒ <code>Object</code>

Mengambil ekstensi Subject Alternative Name (SAN) berdasarkan domain.

**Kind**: static method of [<code>cert</code>](#module_cert)  
**Returns**: <code>Object</code> - - Objek yang berisi nama dan alternatif nama.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| domain | <code>string</code> | Domain yang akan digunakan. |

<a name="module_cert.getKeysAndCert"></a>

### cert.getKeysAndCert([serialNumber]) ⇒ <code>Object</code>

Menghasilkan pasangan kunci dan sertifikat.

**Kind**: static method of [<code>cert</code>](#module_cert)  
**Returns**: <code>Object</code> - - Objek yang berisi kunci dan sertifikat.

| Param          | Type                | Description                  |
| -------------- | ------------------- | ---------------------------- |
| [serialNumber] | <code>string</code> | Nomor seri untuk sertifikat. |

<a name="module_cert.generateRootCA"></a>

### cert.generateRootCA([commonName]) ⇒ <code>Object</code>

Menghasilkan Root Certificate Authority (CA).

**Kind**: static method of [<code>cert</code>](#module_cert)  
**Returns**: <code>Object</code> - - Objek yang berisi kunci privat, kunci publik, dan sertifikat.

| Param        | Type                | Description                 |
| ------------ | ------------------- | --------------------------- |
| [commonName] | <code>string</code> | Nama umum untuk sertifikat. |

<a name="module_cert.generateCertsForHostname"></a>

### cert.generateCertsForHostname(domain, rootCAConfig) ⇒ <code>Object</code>

Menghasilkan sertifikat untuk hostname tertentu.

**Kind**: static method of [<code>cert</code>](#module_cert)  
**Returns**: <code>Object</code> - - Objek yang berisi kunci privat, kunci publik, dan sertifikat.

| Param        | Type                | Description                   |
| ------------ | ------------------- | ----------------------------- |
| domain       | <code>string</code> | Nama domain untuk sertifikat. |
| rootCAConfig | <code>Object</code> | Konfigurasi Root CA.          |

<a name="module_cert.setDefaultAttrs"></a>

### cert.setDefaultAttrs(attrs)

Mengatur atribut default.

**Kind**: static method of [<code>cert</code>](#module_cert)

| Param | Type                              | Description                                       |
| ----- | --------------------------------- | ------------------------------------------------- |
| attrs | <code>Array.&lt;Object&gt;</code> | Array atribut yang ingin disetel sebagai default. |

<a name="module_cert.getCertsForHostname"></a>

### cert.getCertsForHostname(domain) ⇒ <code>Object</code>

Mengambil sertifikat untuk hostname tertentu.

**Kind**: static method of [<code>cert</code>](#module_cert)  
**Returns**: <code>Object</code> - - Objek yang berisi kunci privat dan sertifikat.

| Param  | Type                | Description                   |
| ------ | ------------------- | ----------------------------- |
| domain | <code>string</code> | Nama domain untuk sertifikat. |

<a name="module_env"></a>

## env

<a name="module_env.read"></a>

### env.read([filename])

Membaca file .env dan mengatur variabel lingkungan (environment variables) ke dalam `process.env`.

**Kind**: static method of [<code>env</code>](#module_env)  
**Throws**:

-   <code>Error</code> - Melempar error jika terjadi kesalahan saat membaca file.

| Param      | Type                | Default                                     | Description                                                      |
| ---------- | ------------------- | ------------------------------------------- | ---------------------------------------------------------------- |
| [filename] | <code>string</code> | <code>&quot;\&quot;.env\&quot;&quot;</code> | Nama file yang akan dibaca. Secara default, akan membaca ".env". |

<a name="module_jwt"></a>

## jwt

-   [jwt](#module_jwt)
    -   [.signer](#module_jwt.signer)
    -   [.verifier](#module_jwt.verifier)
    -   [.encode(header, payload, secret)](#module_jwt.encode) ⇒ <code>string</code>
    -   [.decode(token, secret)](#module_jwt.decode) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_jwt.signer"></a>

### jwt.signer

Kumpulan fungsi untuk melakukan signing (penandatanganan) menggunakan berbagai algoritma.

**Kind**: static constant of [<code>jwt</code>](#module_jwt)  
<a name="module_jwt.verifier"></a>

### jwt.verifier

Kumpulan fungsi untuk melakukan verifikasi signature menggunakan berbagai algoritma.

**Kind**: static constant of [<code>jwt</code>](#module_jwt)  
<a name="module_jwt.encode"></a>

### jwt.encode(header, payload, secret) ⇒ <code>string</code>

Meng-encode header dan payload menjadi token JWT (JSON Web Token).

**Kind**: static method of [<code>jwt</code>](#module_jwt)  
**Returns**: <code>string</code> - - Token JWT dalam format string.

| Param   | Type                | Description                                                              |
| ------- | ------------------- | ------------------------------------------------------------------------ |
| header  | <code>Object</code> | Header JWT yang berisi informasi tentang algoritma dan tipe token.       |
| payload | <code>Object</code> | Payload JWT yang berisi klaim atau data yang ingin disimpan dalam token. |
| secret  | <code>string</code> | Kunci rahasia atau kunci privat untuk signing.                           |

<a name="module_jwt.decode"></a>

### jwt.decode(token, secret) ⇒ <code>Object</code> \| <code>null</code>

Meng-decode token JWT dan memverifikasi signature-nya.

**Kind**: static method of [<code>jwt</code>](#module_jwt)  
**Returns**: <code>Object</code> \| <code>null</code> - - Mengembalikan payload jika verifikasi berhasil, null jika gagal.

| Param  | Type                | Description                                       |
| ------ | ------------------- | ------------------------------------------------- |
| token  | <code>string</code> | Token JWT yang akan di-decode.                    |
| secret | <code>string</code> | Kunci rahasia atau kunci publik untuk verifikasi. |

<a name="module_middleware"></a>

## middleware

-   [middleware](#module_middleware)
    -   [.security()](#module_middleware.security) ⇒ <code>function</code>
    -   [.cors()](#module_middleware.cors) ⇒ <code>function</code>
    -   [.cookies()](#module_middleware.cookies) ⇒ <code>function</code>
    -   [.compression()](#module_middleware.compression) ⇒ <code>function</code>
    -   [.messages()](#module_middleware.messages) ⇒ <code>function</code>
    -   [.auth(permissions)](#module_middleware.auth) ⇒ <code>function</code>
    -   [.missing()](#module_middleware.missing) ⇒ <code>function</code>
    -   [.catchAll(err)](#module_middleware.catchAll) ⇒ <code>function</code>

<a name="module_middleware.security"></a>

### middleware.security() ⇒ <code>function</code>

Middleware untuk menambahkan header keamanan pada respons HTTP.
Header yang ditambahkan meliputi:

-   X-Content-Type-Options
-   X-Frame-Options
-   X-XSS-Protection
-   Content-Security-Policy
-   Strict-Transport-Security
-   Referrer-Policy

**Kind**: static method of [<code>middleware</code>](#module_middleware)  
**Returns**: <code>function</code> - Middleware Express untuk menambahkan header keamanan.  
<a name="module_middleware.cors"></a>

### middleware.cors() ⇒ <code>function</code>

Middleware untuk menangani Cross-Origin Resource Sharing (CORS).
Mengatur header CORS seperti:

-   Access-Control-Allow-Origin
-   Access-Control-Allow-Methods
-   Access-Control-Allow-Headers
-   Access-Control-Allow-Credentials

**Kind**: static method of [<code>middleware</code>](#module_middleware)  
**Returns**: <code>function</code> - Middleware Express untuk menangani CORS.  
<a name="module_middleware.cookies"></a>

### middleware.cookies() ⇒ <code>function</code>

Middleware untuk memparsing cookie dari permintaan HTTP dan memungkinkan pengaturan cookie dalam respons.

**Kind**: static method of [<code>middleware</code>](#module_middleware)  
**Returns**: <code>function</code> - Middleware Express untuk menangani cookie.  
<a name="module_middleware.compression"></a>

### middleware.compression() ⇒ <code>function</code>

Middleware untuk mengompresi respons HTTP menggunakan Brotli, gzip, atau deflate.
Menyesuaikan dengan header "Accept-Encoding" dari permintaan.

**Kind**: static method of [<code>middleware</code>](#module_middleware)  
**Returns**: <code>function</code> - Middleware Express untuk mengompresi respons.  
<a name="module_middleware.messages"></a>

### middleware.messages() ⇒ <code>function</code>

Middleware untuk memparsing isi dari body permintaan POST, PATCH, atau PUT.
Mendukung parsing untuk content-type "application/json" dan "application/x-www-form-urlencoded".

**Kind**: static method of [<code>middleware</code>](#module_middleware)  
**Returns**: <code>function</code> - Middleware Express untuk menangani body dari permintaan.  
<a name="module_middleware.auth"></a>

### middleware.auth(permissions) ⇒ <code>function</code>

Middleware untuk mengatur autentikasi berdasarkan izin yang diberikan.
Memeriksa token Bearer di header Authorization.

**Kind**: static method of [<code>middleware</code>](#module_middleware)  
**Returns**: <code>function</code> - Middleware Express untuk menangani autentikasi.

| Param       | Type                              | Description                                                                    |
| ----------- | --------------------------------- | ------------------------------------------------------------------------------ |
| permissions | <code>Array.&lt;Object&gt;</code> | Daftar izin yang memperbolehkan akses berdasarkan path, metode, dan alamat IP. |

<a name="module_middleware.missing"></a>

### middleware.missing() ⇒ <code>function</code>

Middleware untuk menangani rute yang tidak ditemukan (404).

**Kind**: static method of [<code>middleware</code>](#module_middleware)  
**Returns**: <code>function</code> - Middleware Express untuk menangani kesalahan 404.  
<a name="module_middleware.catchAll"></a>

### middleware.catchAll(err) ⇒ <code>function</code>

Middleware untuk menangani semua error yang tidak tertangani.
Mengembalikan error dalam bentuk JSON.

**Kind**: static method of [<code>middleware</code>](#module_middleware)  
**Returns**: <code>function</code> - Middleware Express untuk menangani error.

| Param | Type               | Description               |
| ----- | ------------------ | ------------------------- |
| err   | <code>Error</code> | Objek error yang terjadi. |

<a name="module_otp"></a>

## otp

-   [otp](#module_otp)
    -   [.hotp([options])](#module_otp.hotp) ⇒ <code>string</code>
    -   [.totp([options])](#module_otp.totp) ⇒ <code>string</code>

<a name="module_otp.hotp"></a>

### otp.hotp([options]) ⇒ <code>string</code>

Menghasilkan HMAC-based One-Time Password (HOTP) berdasarkan secret dan nilai penghitung.

**Kind**: static method of [<code>otp</code>](#module_otp)  
**Returns**: <code>string</code> - - Mengembalikan HOTP dalam bentuk string dengan panjang yang ditentukan oleh `digits`.

| Param               | Type                | Default                                   | Description                                                                 |
| ------------------- | ------------------- | ----------------------------------------- | --------------------------------------------------------------------------- |
| [options]           | <code>Object</code> | <code>{}</code>                           | Opsi untuk menghasilkan HOTP.                                               |
| options.secret      | <code>string</code> |                                           | Kunci rahasia yang digunakan untuk menghasilkan OTP.                        |
| options.count       | <code>number</code> |                                           | Nilai penghitung yang terus meningkat.                                      |
| [options.algorithm] | <code>string</code> | <code>&quot;&#x27;sha1&#x27;&quot;</code> | Algoritma hash yang digunakan untuk HMAC ('sha1', 'sha256', atau 'sha512'). |
| [options.digits]    | <code>number</code> | <code>6</code>                            | Jumlah digit pada OTP yang dihasilkan.                                      |

<a name="module_otp.totp"></a>

### otp.totp([options]) ⇒ <code>string</code>

Menghasilkan Time-based One-Time Password (TOTP) berdasarkan secret dan waktu saat ini.

**Kind**: static method of [<code>otp</code>](#module_otp)  
**Returns**: <code>string</code> - - Mengembalikan TOTP dalam bentuk string dengan panjang yang ditentukan oleh `digits`.

| Param               | Type                | Default                                    | Description                                                                 |
| ------------------- | ------------------- | ------------------------------------------ | --------------------------------------------------------------------------- |
| [options]           | <code>Object</code> | <code>{}</code>                            | Opsi untuk menghasilkan TOTP.                                               |
| options.secret      | <code>string</code> |                                            | Kunci rahasia yang digunakan untuk menghasilkan OTP.                        |
| [options.T]         | <code>number</code> | <code>Math.floor(Date.now() / 1000)</code> | Waktu dalam detik. Default adalah waktu saat ini dalam detik.               |
| [options.T0]        | <code>number</code> | <code>0</code>                             | Waktu awal (epoch time). Default adalah 0.                                  |
| [options.X]         | <code>number</code> | <code>30</code>                            | Interval waktu (dalam detik) antara setiap TOTP. Default adalah 30 detik.   |
| [options.algorithm] | <code>string</code> | <code>&quot;&#x27;sha1&#x27;&quot;</code>  | Algoritma hash yang digunakan untuk HMAC ('sha1', 'sha256', atau 'sha512'). |
| [options.digits]    | <code>number</code> | <code>6</code>                             | Jumlah digit pada OTP yang dihasilkan.                                      |

<a name="module_file"></a>

## file

-   [file](#module_file)
    -   [.read(filename)](#module_file.read) ⇒ <code>string</code> \| <code>null</code>
    -   [.write(filename, data)](#module_file.write)

<a name="module_file.read"></a>

### file.read(filename) ⇒ <code>string</code> \| <code>null</code>

Membaca konten dari file dengan nama yang diberikan.

**Kind**: static method of [<code>file</code>](#module_file)  
**Returns**: <code>string</code> \| <code>null</code> - - Mengembalikan konten file dalam bentuk string atau `null` jika terjadi kesalahan.

| Param    | Type                | Description                 |
| -------- | ------------------- | --------------------------- |
| filename | <code>string</code> | Nama file yang akan dibaca. |

<a name="module_file.write"></a>

### file.write(filename, data)

Menulis data ke file dengan nama yang diberikan.
Jika direktori tidak ada, direktori akan dibuat.

**Kind**: static method of [<code>file</code>](#module_file)

| Param    | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| filename | <code>string</code> | Nama file di mana data akan ditulis. |
| data     | <code>string</code> | Konten yang akan ditulis ke file.    |

<a name="module_resilience"></a>

## resilience

-   [resilience](#module_resilience)
    -   _static_
        -   [.retry(fn, [retries], [delay])](#module_resilience.retry) ⇒ <code>Promise.&lt;any&gt;</code>
        -   [.timeout(fn, ms)](#module_resilience.timeout) ⇒ <code>Promise.&lt;any&gt;</code>
    -   _inner_
        -   [~CircuitBreaker](#module_resilience..CircuitBreaker)
            -   [new CircuitBreaker([failureThreshold], [resetTimeout])](#new_module_resilience..CircuitBreaker_new)
            -   [.execute(fn)](#module_resilience..CircuitBreaker+execute) ⇒ <code>Promise.&lt;any&gt;</code>
            -   [.reset()](#module_resilience..CircuitBreaker+reset)
        -   [~Bulkhead](#module_resilience..Bulkhead)
            -   [new Bulkhead(maxRequests)](#new_module_resilience..Bulkhead_new)
            -   [.execute(fn)](#module_resilience..Bulkhead+execute) ⇒ <code>Promise.&lt;any&gt;</code>
            -   [.processQueue()](#module_resilience..Bulkhead+processQueue)
        -   [~RateLimiter](#module_resilience..RateLimiter)
            -   [new RateLimiter(maxRequests, interval)](#new_module_resilience..RateLimiter_new)
            -   [.execute(fn)](#module_resilience..RateLimiter+execute) ⇒ <code>Promise.&lt;any&gt;</code>

<a name="module_resilience.retry"></a>

### resilience.retry(fn, [retries], [delay]) ⇒ <code>Promise.&lt;any&gt;</code>

Mencoba menjalankan fungsi secara berulang hingga berhasil atau mencapai batas retry.

**Kind**: static method of [<code>resilience</code>](#module_resilience)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - Mengembalikan hasil dari fungsi yang berhasil.  
**Throws**:

-   <code>Error</code> - Melemparkan kesalahan jika semua percobaan gagal.

| Param     | Type                  | Default           | Description                                                              |
| --------- | --------------------- | ----------------- | ------------------------------------------------------------------------ |
| fn        | <code>function</code> |                   | Fungsi yang akan dicoba. Harus mengembalikan sebuah promise.             |
| [retries] | <code>number</code>   | <code>3</code>    | Jumlah maksimum percobaan sebelum melemparkan kesalahan.                 |
| [delay]   | <code>number</code>   | <code>1000</code> | Waktu dalam milidetik untuk menunggu sebelum mencoba lagi setelah gagal. |

<a name="module_resilience.timeout"></a>

### resilience.timeout(fn, ms) ⇒ <code>Promise.&lt;any&gt;</code>

Menjalankan fungsi dan mengatur batas waktu. Jika fungsi tidak selesai dalam waktu yang ditentukan, akan melemparkan kesalahan "Timeout".

**Kind**: static method of [<code>resilience</code>](#module_resilience)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - Mengembalikan hasil dari fungsi jika selesai dalam batas waktu.  
**Throws**:

-   <code>Error</code> - Melemparkan kesalahan jika fungsi tidak selesai dalam waktu yang ditentukan.

| Param | Type                  | Description                                                      |
| ----- | --------------------- | ---------------------------------------------------------------- |
| fn    | <code>function</code> | Fungsi yang akan dijalankan. Harus mengembalikan sebuah promise. |
| ms    | <code>number</code>   | Waktu maksimum dalam milidetik sebelum timeout.                  |

<a name="module_resilience..CircuitBreaker"></a>

### resilience~CircuitBreaker

Kelas CircuitBreaker untuk mengelola dan melindungi fungsi dari kesalahan yang berulang.
Circuit Breaker mencegah fungsi dari pemanggilan berulang ketika kesalahan telah mencapai ambang batas.

**Kind**: inner class of [<code>resilience</code>](#module_resilience)

-   [~CircuitBreaker](#module_resilience..CircuitBreaker)
    -   [new CircuitBreaker([failureThreshold], [resetTimeout])](#new_module_resilience..CircuitBreaker_new)
    -   [.execute(fn)](#module_resilience..CircuitBreaker+execute) ⇒ <code>Promise.&lt;any&gt;</code>
    -   [.reset()](#module_resilience..CircuitBreaker+reset)

<a name="new_module_resilience..CircuitBreaker_new"></a>

#### new CircuitBreaker([failureThreshold], [resetTimeout])

| Param              | Type                | Default           | Description                                                             |
| ------------------ | ------------------- | ----------------- | ----------------------------------------------------------------------- |
| [failureThreshold] | <code>number</code> | <code>3</code>    | Ambang batas jumlah kesalahan sebelum sirkuit terbuka.                  |
| [resetTimeout]     | <code>number</code> | <code>5000</code> | Waktu dalam milidetik sebelum sirkuit setengah terbuka setelah terbuka. |

<a name="module_resilience..CircuitBreaker+execute"></a>

#### circuitBreaker.execute(fn) ⇒ <code>Promise.&lt;any&gt;</code>

Menjalankan fungsi dan menerapkan circuit breaker.
Jika sirkuit terbuka, fungsi tidak akan dieksekusi hingga waktu reset berlalu.

**Kind**: instance method of [<code>CircuitBreaker</code>](#module_resilience..CircuitBreaker)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - Mengembalikan hasil dari fungsi jika berhasil.  
**Throws**:

-   <code>Error</code> - Melemparkan kesalahan jika fungsi gagal atau jika sirkuit terbuka.

| Param | Type                  | Description                                                      |
| ----- | --------------------- | ---------------------------------------------------------------- |
| fn    | <code>function</code> | Fungsi yang akan dijalankan. Harus mengembalikan sebuah promise. |

<a name="module_resilience..CircuitBreaker+reset"></a>

#### circuitBreaker.reset()

Mereset status circuit breaker ke keadaan tertutup dan mengatur ulang hitungan kesalahan.

**Kind**: instance method of [<code>CircuitBreaker</code>](#module_resilience..CircuitBreaker)  
<a name="module_resilience..Bulkhead"></a>

### resilience~Bulkhead

Kelas Bulkhead untuk mengelola batas maksimum permintaan yang dapat dieksekusi secara bersamaan.
Bulkhead membantu mencegah satu bagian dari aplikasi mempengaruhi bagian lainnya dengan membatasi
jumlah permintaan yang dapat diproses dalam waktu bersamaan.

**Kind**: inner class of [<code>resilience</code>](#module_resilience)

-   [~Bulkhead](#module_resilience..Bulkhead)
    -   [new Bulkhead(maxRequests)](#new_module_resilience..Bulkhead_new)
    -   [.execute(fn)](#module_resilience..Bulkhead+execute) ⇒ <code>Promise.&lt;any&gt;</code>
    -   [.processQueue()](#module_resilience..Bulkhead+processQueue)

<a name="new_module_resilience..Bulkhead_new"></a>

#### new Bulkhead(maxRequests)

| Param       | Type                | Description                                                      |
| ----------- | ------------------- | ---------------------------------------------------------------- |
| maxRequests | <code>number</code> | Jumlah maksimum permintaan yang dapat diproses secara bersamaan. |

<a name="module_resilience..Bulkhead+execute"></a>

#### bulkhead.execute(fn) ⇒ <code>Promise.&lt;any&gt;</code>

Menjalankan fungsi dan mengatur antrian permintaan jika batas maksimum tercapai.

**Kind**: instance method of [<code>Bulkhead</code>](#module_resilience..Bulkhead)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - Mengembalikan hasil dari fungsi jika berhasil.

| Param | Type                  | Description                                                      |
| ----- | --------------------- | ---------------------------------------------------------------- |
| fn    | <code>function</code> | Fungsi yang akan dijalankan. Harus mengembalikan sebuah promise. |

<a name="module_resilience..Bulkhead+processQueue"></a>

#### bulkhead.processQueue()

Memproses antrian permintaan yang menunggu jika ada kapasitas yang tersedia.

**Kind**: instance method of [<code>Bulkhead</code>](#module_resilience..Bulkhead)  
<a name="module_resilience..RateLimiter"></a>

### resilience~RateLimiter

Kelas RateLimiter untuk membatasi jumlah permintaan yang dapat dilakukan dalam jangka waktu tertentu.
Berguna untuk menghindari kelebihan beban pada server atau API.

**Kind**: inner class of [<code>resilience</code>](#module_resilience)

-   [~RateLimiter](#module_resilience..RateLimiter)
    -   [new RateLimiter(maxRequests, interval)](#new_module_resilience..RateLimiter_new)
    -   [.execute(fn)](#module_resilience..RateLimiter+execute) ⇒ <code>Promise.&lt;any&gt;</code>

<a name="new_module_resilience..RateLimiter_new"></a>

#### new RateLimiter(maxRequests, interval)

| Param       | Type                | Description                                                     |
| ----------- | ------------------- | --------------------------------------------------------------- |
| maxRequests | <code>number</code> | Jumlah maksimum permintaan yang diizinkan dalam interval waktu. |
| interval    | <code>number</code> | Interval waktu dalam milidetik untuk membatasi permintaan.      |

<a name="module_resilience..RateLimiter+execute"></a>

#### rateLimiter.execute(fn) ⇒ <code>Promise.&lt;any&gt;</code>

Menjalankan fungsi jika batas permintaan belum terlampaui.

**Kind**: instance method of [<code>RateLimiter</code>](#module_resilience..RateLimiter)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - Mengembalikan hasil dari fungsi jika batas permintaan belum terlampaui.  
**Throws**:

-   <code>Error</code> - Melempar error jika batas permintaan telah terlampaui.

| Param | Type                  | Description                                                      |
| ----- | --------------------- | ---------------------------------------------------------------- |
| fn    | <code>function</code> | Fungsi yang akan dijalankan. Harus mengembalikan sebuah promise. |

<a name="module_string"></a>

## string

-   [string](#module_string)
    -   [.toPascalCase(string)](#module_string.toPascalCase) ⇒ <code>string</code>
    -   [.toCamelCase(string)](#module_string.toCamelCase) ⇒ <code>string</code>
    -   [.toSnakeCase(string)](#module_string.toSnakeCase) ⇒ <code>string</code>
    -   [.toKebabCase(string)](#module_string.toKebabCase) ⇒ <code>string</code>
    -   [.toTitleCase(string)](#module_string.toTitleCase) ⇒ <code>string</code>

<a name="module_string.toPascalCase"></a>

### string.toPascalCase(string) ⇒ <code>string</code>

Mengubah string menjadi format PascalCase.

**Kind**: static method of [<code>string</code>](#module_string)  
**Returns**: <code>string</code> - - String dalam format PascalCase.

| Param  | Type                | Description                    |
| ------ | ------------------- | ------------------------------ |
| string | <code>string</code> | String input yang akan diubah. |

<a name="module_string.toCamelCase"></a>

### string.toCamelCase(string) ⇒ <code>string</code>

Mengubah string menjadi format camelCase.

**Kind**: static method of [<code>string</code>](#module_string)  
**Returns**: <code>string</code> - - String dalam format camelCase.

| Param  | Type                | Description                    |
| ------ | ------------------- | ------------------------------ |
| string | <code>string</code> | String input yang akan diubah. |

<a name="module_string.toSnakeCase"></a>

### string.toSnakeCase(string) ⇒ <code>string</code>

Mengubah string menjadi format snake_case.

**Kind**: static method of [<code>string</code>](#module_string)  
**Returns**: <code>string</code> - - String dalam format snake_case.

| Param  | Type                | Description                    |
| ------ | ------------------- | ------------------------------ |
| string | <code>string</code> | String input yang akan diubah. |

<a name="module_string.toKebabCase"></a>

### string.toKebabCase(string) ⇒ <code>string</code>

Mengubah string menjadi format kebab-case.

**Kind**: static method of [<code>string</code>](#module_string)  
**Returns**: <code>string</code> - - String dalam format kebab-case.

| Param  | Type                | Description                    |
| ------ | ------------------- | ------------------------------ |
| string | <code>string</code> | String input yang akan diubah. |

<a name="module_string.toTitleCase"></a>

### string.toTitleCase(string) ⇒ <code>string</code>

Mengubah string menjadi format Title Case.

**Kind**: static method of [<code>string</code>](#module_string)  
**Returns**: <code>string</code> - - String dalam format Title Case.

| Param  | Type                | Description                    |
| ------ | ------------------- | ------------------------------ |
| string | <code>string</code> | String input yang akan diubah. |

<a name="Mutex"></a>

## Mutex

Kelas yang mengimplementasikan mekanisme mutex untuk penguncian sumber daya.

**Kind**: global class

-   [Mutex](#Mutex)
    -   [.lock()](#Mutex+lock) ⇒ <code>Promise.&lt;void&gt;</code>
    -   [.unlock()](#Mutex+unlock)

<a name="Mutex+lock"></a>

### mutex.lock() ⇒ <code>Promise.&lt;void&gt;</code>

Mengunci mutex. Jika sudah terkunci, menunggu sampai dapat mengunci.

**Kind**: instance method of [<code>Mutex</code>](#Mutex)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - Sebuah promise yang diselesaikan saat mutex terkunci.  
<a name="Mutex+unlock"></a>

### mutex.unlock()

Membuka kunci mutex dan memberi kesempatan kepada antrean untuk mengunci.

**Kind**: instance method of [<code>Mutex</code>](#Mutex)  
<a name="Semaphore"></a>

## Semaphore

Kelas yang mengimplementasikan mekanisme semaphore untuk pengelolaan akses ke sumber daya.

**Kind**: global class

-   [Semaphore](#Semaphore)
    -   [new Semaphore(max)](#new_Semaphore_new)
    -   [.acquire()](#Semaphore+acquire) ⇒ <code>Promise.&lt;void&gt;</code>
    -   [.release()](#Semaphore+release)

<a name="new_Semaphore_new"></a>

### new Semaphore(max)

| Param | Type                | Description                                           |
| ----- | ------------------- | ----------------------------------------------------- |
| max   | <code>number</code> | Jumlah maksimum akses yang diizinkan pada satu waktu. |

<a name="Semaphore+acquire"></a>

### semaphore.acquire() ⇒ <code>Promise.&lt;void&gt;</code>

Mengakuisisi akses semaphore. Jika sudah mencapai maksimum, menunggu sampai ada akses yang dilepaskan.

**Kind**: instance method of [<code>Semaphore</code>](#Semaphore)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - Sebuah promise yang diselesaikan saat akses diperoleh.  
<a name="Semaphore+release"></a>

### semaphore.release()

Membebaskan akses semaphore, memberi kesempatan kepada antrean untuk mengakuisisi akses.

**Kind**: instance method of [<code>Semaphore</code>](#Semaphore)
