# uptest.no

## Ką naudojame

* **Jekyll** (`github-pages`, Ruby 3.3) – statinių puslapių generavimui (**EN / LT / NO**)
* **Tailwind CSS v3** (Node.js / npm) – stiliams (`assets/css/input.css` → `assets/css/main.css`)
* **GitHub Pages** – automatinis publikavimas iš `main` šakos į [https://uptest.no](https://uptest.no)

## Kaip įjungti testavimo nuorodą

Projekto aplanke paleiskite:

```bash
npm run dev
```

Komanda sukompiliuoja Tailwind CSS, įjungia automatinį stilių sekimą ir paleidžia lokalų Jekyll serverį su `livereload`.

* **Testavimo nuoroda:** http://127.0.0.1:4000
* **Sustabdyti:** `Ctrl + C`

> **Svarbu (jei neužsikrauna CSS / paveikslėliai):** Jekyll (WEBrick) statiniams failams (`main.css`, šriftams, paveikslėliams) naudoja `sendfile`, todėl `npm run dev` **privalo būti leidžiamas įprastame terminale (be sandbox / tinklo apribojimų)**. Apribotoje aplinkoje HTML dar užsikrauna dėl `livereload`, bet CSS ir kiti statiniai failai krenta su `Errno::EPERM: Operation not permitted - sendfile`.

## Kitos komandos

| Komanda | Paskirtis |
| --- | --- |
| `npm run dev` | Paleidžia testavimo nuorodą (`http://127.0.0.1:4000`) su Tailwind watch + livereload |
| `npm run build` | Sukompiliuoja `assets/css/main.css` (būtina prieš `git push`, nes GitHub Pages Tailwind nekompiliuoja) |
| `npm run jekyll:build` | Sugeneruoja statinį projektą į `_site/` patikrai be serverio |
