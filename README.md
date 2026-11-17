# Cytology study site

Interactive notes, questions and flashcards built from the lecture slides.
It works offline once opened, and can be installed on a phone's home screen.

## Run it on your computer

```bash
npm install
npm run dev
```

Open the address it prints (for example `http://localhost:5173`). The `--host` flag in the dev
script also prints a `Network:` address; open that one on a phone on the same Wi-Fi.

## Put it online

The build output is a plain static folder (`dist/`) that works at any URL, so either option works.

### Option A: Netlify (fastest, no Git needed)

1. Run `npm run build`. This creates the `dist` folder.
2. Go to <https://app.netlify.com/drop> and sign in.
3. Drag the `dist` folder onto the page. Netlify gives you a link like
   `https://something.netlify.app`.
4. To update later: build again and drag the new `dist` folder onto the same site
   (Site → Deploys → drag and drop).

If the project is on GitHub, you can also choose "Import from Git" in Netlify. `netlify.toml`
already sets the build command and the output folder.

### Option B: GitHub Pages

1. Create an empty repository on GitHub, for example `cytology-study`.
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Cytology study site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/cytology-study.git
   git push -u origin main
   ```
3. On GitHub: repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes the site. After a minute or
   two the site is at `https://<your-username>.github.io/cytology-study/`.
   Every later `git push` updates it.

## Install it on your phone (offline use)

Open the site link once while online, then:

- **Android (Chrome):** menu ⋮ → *Add to Home screen* / *Install app*.
- **iPhone (Safari):** Share → *Add to Home Screen*.

After that it opens from the home screen and works without internet. Your progress is saved on the
phone itself (in the browser's storage).

## Adding a lecture

1. Create `src/content/<id>.ts` (copy `cytology-1.ts` for the shape; types are in `types.ts`).
2. Add one import line to `src/content/index.ts`.
3. Run `npm run check:content`. It fails if a question has a bad answer index, or if any
   high-yield term isn't covered by a question.
4. `npm run answers` prints every question with its keyed answer for a final check against the
   slides.

## Pictures

Slide pictures live in `public/fig/<lecture>/`. They are produced from the PDFs by:

```bash
python -I scripts/export_figures.py "<folder with the lecture PDFs>"
```

Which slides are used, their captions, crops and the "Spot it" questions are listed in
`scripts/figures_spec.py`; the script regenerates `src/content/figures.ts` from it.
