# Rahmat Azrima Portfolio

Portofolio modern berbasis Next.js, TypeScript, Tailwind CSS, dan Framer Motion.

## Menjalankans

```bash
npm install
npm run dev
```

## Menjalankan dengan Docker

```bash
docker build -t porto-rahmat .
docker run --rm -p 3000:3000 porto-rahmat
```

Buka `http://localhost:3000` setelah container berjalan.

## Deploy ke GitHub Pages

GitHub Pages tidak menjalankan container Docker secara langsung. Workflow
`.github/workflows/deploy-pages.yml` akan mengekspor aplikasi sebagai static
site dan melakukan deploy otomatis setiap push ke branch `main`.

Aktifkan Pages di repository GitHub melalui **Settings > Pages**, pilih
**GitHub Actions** sebagai source. Setelah workflow selesai, situs tersedia di:

`https://rahmatazrima.github.io/PortoRahmat/`

## Mengubah konten

Edit data utama di:

- `src/data/portfolio.ts`

## Catatan

Nama proyek di `package.json` menggunakan huruf kecil agar valid di npm, meskipun folder workspace tetap bernama `PortoRahmat`.
