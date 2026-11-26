# uptest.no

Daugiakalbė (**EN / LT / NO**) statinė svetainė, sukurta su **Jekyll** ir **Tailwind CSS v3**, talpinama per **GitHub Pages** ([https://uptest.no](https://uptest.no)).

---

## Projekto struktūra

| Kelias | Paskirtis |
| --- | --- |
| `_config.yml` | Jekyll konfigūracija (`url`, `collections`, `exclude`) |
| `_data/data.yaml` | Navigacija, kalbos, kontaktai, pagrindinio puslapio skaidrės, kortelės ir UI vertimai |
| `_layouts/` | Puslapių šablonai (`home.html`, `page.html`, `job.html`) |
| `_includes/` | Bendri komponentai (`head.html`, `header.html`, `footer.html`, `gallery.html`, `job-list.html` ir kt.) |
| `_jobs/` | Darbo skelbimų kolekcija (`_template.md` – šablonas naujam skelbimui) |
| `index.html`, `about-us/`, ... | Angliški (**EN**) puslapiai (šakninis katalogas) |
| `lt/` | Lietuviški (**LT**) puslapiai |
| `no/` | Norvegiški (**NO**) puslapiai |
| `assets/css/input.css` | Tailwind CSS šaltinio failas |
| `assets/css/main.css` | Sukompiliuotas CSS failas (įtraukiamas į Git, nes GitHub Pages jo nekompiliuoja) |
| `home.js` | Pagrindinio puslapio hero *slider* logika |
| `sitemap.xml`, `robots.txt` | Dinaminis SEO svetainės žemėlapis su `hreflang` |

---

## 1. Pirminis aplinkos paruošimas (macOS)

Lokaliai peržiūrai ir kūrimui reikalingi:
* **Node.js ir npm** (Tailwind CSS kompiliavimui)
* **Ruby 3.3** ir **Bundler** (Jekyll serveriui; standartinis macOS `/usr/bin/ruby 2.6` yra per senas ir netinka `github-pages`)

### Žingsniai

1. **Įdiekite Ruby 3.3 per Homebrew** (rekomenduojama versija stabiliam darbui su `github-pages`):
   ```bash
   brew install ruby@3.3
   ```

2. **Pridėkite Homebrew Ruby prie `PATH`** (į `~/.zshrc`):
   ```bash
   echo 'export PATH="/usr/local/opt/ruby@3.3/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```
   *(Jei naudojate Apple Silicon Mac, kelias bus `/opt/homebrew/opt/ruby@3.3/bin`.)*

   Patikrinkite, ar naudojamas teisingas Ruby:
   ```bash
   ruby -v
   # Turėtų rodyti: ruby 3.3.x ...
   ```

3. **Įdiekite projekto priklausomybes** (projekto šakniniame aplanke):
   ```bash
   npm install
   bundle config set --local path 'vendor/bundle'
   bundle install
   ```

---

## 2. Kaip paleisti ir testuoti lokaliai

### Greitas paleidimas (rekomenduojama)

Viena komanda sukompiliuoja CSS, įjungia Tailwind automatinį sekimą (`--watch --minify`) ir paleidžia Jekyll serverį su automatiniu naršyklės perkrovimu (`--livereload`):

```bash
npm run dev
```

Atidarykite naršyklėje: **http://127.0.0.1:4000**

Sustabdyti serverį: `Ctrl + C`.

### Atskiros komandos

| Komanda | Ką daro |
| --- | --- |
| `npm run dev` | Paleidžia Tailwind `watch` + Jekyll `serve --livereload` viename terminale |
| `npm run build` | Vieną kartą sukompiliuoja ir minimizuoja `assets/css/main.css` |
| `npm run watch` | Stebi HTML/MD/CSS pakeitimus ir automatiškai perkompiliuoja `assets/css/main.css` |
| `npm run serve` | Paleidžia tik Jekyll serverį (`bundle exec jekyll serve --livereload`) |
| `npm run jekyll:build` | Sugeneruoja statinį projektą į `_site/` (patikrai be serverio) |

Jei norite stebėti žurnalus atskirai, galite viename terminale paleisti `npm run watch`, o kitame – `npm run serve`.

---

## 3. Lokalaus testavimo kontrolinis sąrašas

Prieš atliekant `git push`, rekomenduojama lokaliai patikrinti:

1. **Visos 3 kalbinės versijos:**
   * EN: `http://127.0.0.1:4000/`
   * LT: `http://127.0.0.1:4000/lt/`
   * NO: `http://127.0.0.1:4000/no/`
2. **Kalbų perjungiklis ir navigacija:**
   * Perjungus kalbą vidiniame puslapyje arba darbo skelbime, turi nukreipti į atitinkamą tos kalbos puslapį (ne į pradžios puslapį).
3. **Mobili versija ir interaktyvūs elementai:**
   * Naršyklėje atidarykite DevTools (`Cmd + Option + I` → mobilios peržiūros režimas).
   * Patikrinkite mobilųjį meniu, pagrindinio puslapio skaidres (*slider*), galeriją ir kortelių išdėstymą.
4. **Darbo skelbimai ir SEO:**
   * Patikrinkite `/career/`, `/lt/karjera/`, `/no/karriere/`.
   * Peržiūrėkite `http://127.0.0.1:4000/sitemap.xml` – įsitikinkite, kad nauji skelbimai atsirado, o `active: false` skelbimai išnyko.
   * Patikrinkite puslapio kodą (`View Source`) – ar teisingos `<title>`, `meta description`, `canonical` ir `hreflang` žymos.
5. **Konsolė ir tinklas (DevTools → Console / Network):**
   * Neturi būti JS klaidų ar `404` klaidų (trūkstamų paveikslėlių, šriftų ar CSS).
6. **Galutinis build patikrinimas:**
   ```bash
   npm run build && npm run jekyll:build
   ```
   Abi komandos turi baigtis be klaidų.

---

## 4. Darbas su turiniu ir stiliais

### Tailwind CSS
* Stilių pakeitimus darykite HTML/Markdown failuose (Tailwind klasės) arba [`assets/css/input.css`](assets/css/input.css).
* **Neredaguokite [`assets/css/main.css`](assets/css/main.css) ranka** – jis perrašomas automatiškai.
* Prieš commit'inant pakeitimus, įsitikinkite, kad `assets/css/main.css` yra atnaujintas (`npm run build`), nes **GitHub Pages pats Tailwind CSS nekompiliuoja**.

### Naujo darbo skelbimo pridėjimas (`_jobs/`)
1. Nukopijuokite [`_jobs/_template.md`](_jobs/_template.md) į 3 failus (po vieną kiekvienai kalbai):
   * `_jobs/en-pozicija.md` → `permalink: /career/pozicija/`
   * `_jobs/lt-pozicija.md` → `permalink: /lt/karjera/pozicija/`
   * `_jobs/no-pozicija.md` → `permalink: /no/karriere/pozicija/`
2. Visuose trijuose failuose nurodykite **tą patį `job_id`** – tai automatiškai susies kalbų perjungiklį ir `hreflang` žymas.
3. **Svarbu:** norvegų kalbos kodą YAML dalyje visada rašykite kabutėse: `lang: "no"` (be kabučių YAML `no` traktuoja kaip `false`).
4. **Uždarant skelbimą:** pakeiskite `active: false`. Skelbimas automatiškai dings iš sąrašo ir `sitemap.xml`, gaus `noindex` žymą ir rodys uždarytos pozicijos pranešimą.

### Meniu, kontaktai ir skaidrės
Bendri tekstai, nuorodos, kontaktinė informacija ir pagrindinio puslapio skaidrės saugomi [`_data/data.yaml`](_data/data.yaml). Redaguojant šį failą, taip pat visada rašykite `"no":` kabutėse.

---

## 5. Publikavimas (Deploy)

Svetainė publikuojama automatiškai per **GitHub Pages** iš `main` šakos:

```bash
npm run build
git status
git add .
git commit -m "Trumpas pakeitimų aprašymas"
git push origin main
```

Po `git push` pakeitimai svetainėje `https://uptest.no` paprastai atsiranda per 1–2 minutes.

---

## Dažniausios problemos (Troubleshooting)

* **Klaida su macOS Ruby 2.6 (`Operation not permitted` arba `requires Ruby version >= ...`):**
  Patikrinkite `which ruby` ir `ruby -v`. Jei rodo `/usr/bin/ruby`, įdiekite `ruby@3.3` per Homebrew ir atnaujinkite `PATH` (žr. 1 skyrių).
* **Pakeitus Tailwind klases dizainas neatsinaujina:**
  Patikrinkite, ar paleistas `npm run dev` (arba `npm run watch`), arba paleiskite `npm run build` ir naršyklėje atlikite *Hard Reload* (`Cmd + Shift + R`).
* **Užimtas 4000 prievadas (`Address already in use`):**
  Paleiskite Jekyll kitame prievade:
  ```bash
  bundle exec jekyll serve --port 4001 --livereload
  ```
