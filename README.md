
# 🎬 React Authentication Basic App - Chill Movie

Aplikasi website statis berbasis React JS yang mensimulasikan sistem autentikasi sederhana melalui halaman Register, Login, dan Homepage.  
Project ini dibuat untuk mempelajari fundamental React seperti component, props, dan responsive UI.

---

## Tujuan Project
Memahami konsep dasar pengembangan UI modern menggunakan React:

- UI berbasis component
- Reusable component
- Props data flow
- Navigasi halaman
- Responsive design
- Simulasi autentikasi tanpa backend

---

## Fitur Aplikasi

### Register
User dapat membuat akun dengan:
- Nama
- Email
- Password

### Login
User login menggunakan akun terdaftar:
- Validasi email & password
- Redirect ke homepage

### Homepage
Halaman setelah login:
- Menampilkan informasi user
- Logout session
- Hero Section Film

---

## Konsep Implementasi

Component Based UI  
Antarmuka dibangun dari komponen kecil yang reusable.

Props Data Flow  
Pengiriman data antar component menggunakan props.

Responsive Design  
Tampilan menyesuaikan mobile, tablet, dan desktop.

---

## Menjalankan Project
Clone repository
git clone https://github.com/username/nama-repository.git

Masuk folder
cd nama-repository

Install dependency
npm install

Run project
npm run dev

---

Project ini hanya untuk pembelajaran (bukan production ready).

---

## Pengembangan Lanjutan
- Integrasi API
- JWT Auth
- Global State
- Detail page
- Favorites

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
