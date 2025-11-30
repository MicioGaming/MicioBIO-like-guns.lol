# MicioBIO-like-guns.lol
## 🔗 Wszystkie moje linki

Kompaktowa, szybka i minimalistyczna strona typu link-in-bio. Zbudowana od podstaw w oparciu o czysty HTML, CSS i JavaScript, aby zapewnić najwyższą wydajność i natychmiastowe ładowanie. Idealna jako centralne miejsce dla wszystkich moich platform społecznościowych, streamów i projektów.

---

### ✨ Główne Funkcje

* **Minimalizm:** Szybkie ładowanie i czysty interfejs w stylu *Glassmorphism* (szkła).
* **Responsywność:** Działa idealnie na każdym urządzeniu mobilnym i komputerze.
* **Interaktywność:** Kolorowe efekty hover i animacja przewijania (Marquee) dla aktualnie odtwarzanej muzyki.
* **Audio Player:** Zintegrowany, niestandardowy odtwarzacz muzyki z kontrolą głośności.
* **Ikony SVG:** Lekkie ikony dla wszystkich kluczowych platform (Twitch, Instagram, Discord, Steam, Roblox, GitHub, NameMC).

---

### 🚀 Uruchomienie Projektu

Aby sklonować i uruchomić projekt lokalnie, wykonaj następujące kroki.

#### Wymagania

Projekt nie wymaga żadnych zewnętrznych zależności ani narzędzi poza przeglądarką internetową.

#### Instalacja

1.  **Sklonuj Repozytorium:**
    ```bash
    git clone https://github.com/MicioGaming/MicioBIO-like-guns.lol.git
    ```
2.  **Przejdź do Katalogu:**
    ```bash
    cd MicioHub
    ```
3.  **Otwórz Stronę:**
    * Otwórz plik `index.html` bezpośrednio w swojej przeglądarce.

---

### ⚙️ Konfiguracja i Dostosowanie

Wszystkie kluczowe elementy strony można dostosować w trzech plikach:

#### 1. `index.html` (Zawartość i struktura)

* **Tytuł strony (H1) i Opis (P):** Zmień bezpośrednio w sekcji `.card`.
* **Linki do ikon:** Zaktualizuj atrybut `href` w każdym elemencie `<a class="social-icon ...">`.
* **Tooltip Discorda:** Zmień atrybut `data-tooltip` w linku Discorda.

#### 2. `style.css` (Wygląd)

* **Kolor Akcentu:** Zmień zmienną CSS `--accent` na górze pliku, aby szybko zmienić główny kolor strony (domyślnie: `#ff3366`).
* **Kolory Poświaty:** Dostosuj kolory w sekcji `/* Specyficzne kolory poświaty */` dla każdej ikony.
* **Prędkość Marquee:** Zmień wartość `20s` w regule `@keyframes marquee` (im mniejsza liczba, tym szybciej).

#### 3. `script.js` (Muzyka)

* **Lista Piosenek (`musics`):** W tym pliku definiujesz listę piosenek odtwarzanych w tle.
    ```javascript
    const musics = [
      { title: 'Tytuł Piosenki 1 - Artysta', file: 'music/piosenka1.mp3' },
      { title: 'Tytuł Piosenki 2 - Artysta', file: '[https://external.link/piosenka2.mp3](https://external.link/piosenka2.mp3)' }
      // ... dodaj więcej
    ];
    ```
    * **Uwaga:** Pliki MP3 należy umieścić w katalogu `music/`.

---

### 🛠️ Technologie

* HTML5
* CSS3
* JavaScript (ES6+)

---

### 🤝 Autor

* **MicioGaming** - *Pomysł i kodowanie* - [https://github.com/MicioGaming](https://github.com/MicioGaming)

---

### ⚖️ Licencja

Ten projekt jest licencjonowany na zasadach **MIT** - zobacz plik [LICENSE.md](LICENSE.md) po szczegóły.
