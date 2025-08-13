# Express Auth Starter

Starter project untuk membangun API menggunakan **Express.js** dengan fitur autentikasi lengkap, siap digunakan untuk project baru tanpa perlu membangun auth dari nol.

## Fitur Utama

-   **Autentikasi JWT** (JSON Web Token)
-   **Cookie-based auth** untuk keamanan tambahan
-   **Sequelize ORM** (MySQL)
-   **Modular folder structure** (controller, route, middleware, utils)
-   **Winston logger** untuk logging terstruktur
-   **dotenv** untuk konfigurasi environment
-   **Template HTML Email** untuk verifikasi & reset password
-   **Password hashing** dengan bcrypt

1. **Clone repository**

    ```bash
    git clone https://github.com/mfauzi-dev/express-auth-template
    ```

2. **Rename folder sesuai project baru**

    ```bash
    mv express-auth-starter my-new-project
    cd my-new-project
    ```

3. **Hapus riwayat Git lama**

    ```bash
    rm -rf .git
    ```

4. **Install dependencies**

    ```bash
    npm install
    ```

5. **Buat file .env berdasarkan .env.example**

    ```bash
    PORT=
    DB_HOST=
    DB_USER=
    DB_PASS=
    DB_NAME=
    JWT_SECRET=
    ```

6. **Jalankan project**
    ```bash
    npm run dev
    ```

## Teknologi

Express.js

Sequelize

MySQL

JWT

bcrypt

## Lisensi

Proyek ini menggunakan lisensi MIT.  
Lihat file [LICENSE](LICENSE) untuk detailnya.
