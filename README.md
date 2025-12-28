# Max Klok - Portfolio Website

Een moderne, responsive portfolio website gebouwd met HTML, CSS en JavaScript.

## Features

- ✨ Modern en clean design
- 📱 Volledig responsive (mobiel, tablet, desktop)
- 🎨 Smooth animaties en transities
- 🚀 Snel en lichtgewicht
- 🎯 Portfolio grid met hover effecten

## GitHub Pages Deployment

### Stap 1: GitHub Repository Aanmaken

1. Ga naar [GitHub.com](https://github.com) en log in
2. Klik op de "+" knop rechtsboven en kies "New repository"
3. Geef je repository een naam (bijvoorbeeld: `portfolio` of `maxklok-portfolio`)
4. Kies "Public" (belangrijk voor GitHub Pages)
5. Klik op "Create repository"

### Stap 2: Code Uploaden naar GitHub

Open PowerShell in deze folder en voer de volgende commando's uit:

```powershell
# Git installeren (als je dat nog niet hebt)
# Download van: https://git-scm.com/download/win

# Initialiseer Git repository
git init

# Voeg alle bestanden toe
git add .

# Maak je eerste commit
git commit -m "Initial commit - Portfolio website"

# Voeg je GitHub repository toe (vervang USERNAME en REPO-NAME)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Upload naar GitHub
git branch -M main
git push -u origin main
```

**Belangrijk:** Vervang `USERNAME` met je GitHub gebruikersnaam en `REPO-NAME` met de naam van je repository.

### Stap 3: GitHub Pages Activeren

1. Ga naar je repository op GitHub
2. Klik op "Settings" (tandwiel icoon)
3. Klik in het linker menu op "Pages"
4. Bij "Source" kies "Deploy from a branch"
5. Bij "Branch" selecteer "main" en folder "/ (root)"
6. Klik op "Save"

### Stap 4: Website Bekijken

Na enkele minuten is je website live op:
```
https://USERNAME.github.io/REPO-NAME/
```

## Je Eigen Content Toevoegen

### Afbeeldingen Vervangen

1. Maak een `images` folder in deze directory
2. Plaats je portfolio afbeeldingen erin
3. Vervang in `index.html` de placeholder URLs:
   ```html
   <img src="images/project1.jpg" alt="Project 1">
   ```

### Teksten Aanpassen

Open [index.html](index.html) en pas aan:
- Portfolio project titels en beschrijvingen
- About sectie tekst
- Contact email adres
- Social media links

### Kleuren Aanpassen

Open [style.css](style.css) en wijzig de CSS variabelen bovenaan:
```css
:root {
    --primary-color: #1a1a1a;
    --accent-color: #0066cc;
    /* Etc... */
}
```

## Lokaal Testen

Open simpelweg [index.html](index.html) in je browser, of gebruik een live server voor development.

## Support

Voor vragen of hulp, neem contact op via de repository issues.

---

© 2025 Max Klok. All rights reserved.
