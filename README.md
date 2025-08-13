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

## **Clone repository**

    ```bash
    git clone https://github.com/mfauzi-dev/express-auth-template
    ```

## **Setup Project Baru**

1. **Rename folder sesuai project baru**

    ```bash
    mv express-auth-starter my-new-project
    cd my-new-project
    ```

2. **Hapus riwayat Git lama**

    ```bash
    rm -rf .git
    ```

3. **Install dependencies**

    ```bash
    npm install
    ```

4. **Buat file .env berdasarkan .env.example**

    ```bash
    APP_PORT=5000
    CLIENT_URL=http://localhost:5173

    SMTP_HOST=smtp.example.com
    SMTP_PORT=587
    SMTP_SECURE=false
    SMTP_MAIL=you@example.com
    SMTP_PASSWORD=your_email_password

    JWT_SECRET=your_jwt_secret_here

    DB_HOST=localhost
    DB_USER=your_database_username
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    ```

5. **Jalankan project**
    ```bash
    npm run dev
    ```

## Teknologi

-   Express.js

-   Sequelize

-   MySQL

-   JWT

-   bcrypt

## Lisensi

Proyek ini menggunakan lisensi MIT.  
Lihat file [LICENSE](LICENSE) untuk detailnya.
