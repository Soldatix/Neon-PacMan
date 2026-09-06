# Neon Pac-Man

A modern browser maze-chase game. Open `index.html` in a current browser. Progress, settings, and the leaderboard are stored locally on the current device.

## Hrvatski

### Kako igrati

- Pokrenite novu igru ili nastavite prethodno spremljenu partiju.
- Držite strelice ili tipke **W, A, S, D** za kretanje i otpustite ih za zaustavljanje. Na mobitelu držite tipku smjera ili povucite prstom preko labirinta.
- Pojedite sve male točkice kako biste završili razinu.
- Izbjegavajte duhove. Velike energetske kugle privremeno vam omogućuju da pojedete duhove i osvojite dodatne bodove.
- Imate tri života. Brzina raste na višim razinama.
- **Spremi i izađi** sprema trenutačnu partiju. **Izađi bez spremanja** napušta je bez spremanja novih promjena.
- Pomoću zasebnih gumba u zaglavlju uključite/isključite zvučne efekte i pozadinsku glazbu, otvorite puni zaslon, promijenite jezik ili otvorite informacije.
- Rang-lista prikazuje deset najboljih rezultata spremljenih na tom uređaju.

## English

### How to play

- Start a new game or continue a previously saved run.
- Hold the **arrow keys** or **W, A, S, D** to move and release them to stop. On mobile, hold the direction pad or swipe across the maze.
- Eat every small dot to complete the level.
- Avoid the ghosts. Large power pellets temporarily let you eat ghosts for bonus points.
- You have three lives. The game gets faster on higher levels.
- **Save & Exit** stores the current run. **Exit without save** leaves without saving the new changes.
- Use the separate header buttons to toggle sound effects and background music, enter fullscreen, change language, or open information.
- The leaderboard shows the ten best scores stored on the current device.

## Deutsch

### Spielanleitung

- Starte ein neues Spiel oder setze einen gespeicherten Spielstand fort.
- Halte die **Pfeiltasten** oder **W, A, S, D** zum Bewegen gedrückt und lasse sie zum Stoppen los. Auf Mobilgeräten kannst du das Steuerkreuz gedrückt halten oder über das Labyrinth wischen.
- Friss alle kleinen Punkte, um das Level abzuschließen.
- Meide die Geister. Große Kraftkugeln ermöglichen es dir vorübergehend, Geister für Bonuspunkte zu fressen.
- Du hast drei Leben. In höheren Levels wird das Spiel schneller.
- **Speichern & beenden** speichert den aktuellen Spielstand. **Ohne Speichern beenden** verwirft die neuen Änderungen.
- Über separate Schaltflächen oben kannst du Soundeffekte und Hintergrundmusik ein- oder ausschalten sowie Vollbild, Sprache und Informationen steuern.
- Die Bestenliste zeigt die zehn besten Ergebnisse, die auf diesem Gerät gespeichert sind.

## Italiano

### Come giocare

- Avvia una nuova partita o continua una partita salvata.
- Tieni premute le **frecce** o **W, A, S, D** per muoverti e rilasciale per fermarti. Sul telefono tieni premuto il pad direzionale o scorri sul labirinto.
- Mangia tutti i puntini per completare il livello.
- Evita i fantasmi. Le grandi sfere energia ti permettono temporaneamente di mangiare i fantasmi e ottenere punti bonus.
- Hai tre vite. La velocità aumenta nei livelli più alti.
- **Salva ed esci** memorizza la partita attuale. **Esci senza salvare** abbandona la partita senza salvare le nuove modifiche.
- I pulsanti separati in alto permettono di attivare o disattivare gli effetti sonori e la musica di sottofondo, oltre a gestire schermo intero, lingua e informazioni.
- La classifica mostra i dieci punteggi migliori salvati sul dispositivo attuale.

## Español

### Cómo jugar

- Inicia una nueva partida o continúa una partida guardada.
- Mantén pulsadas las **flechas** o **W, A, S, D** para moverte y suéltalas para parar. En el móvil mantén pulsado el control direccional o desliza sobre el laberinto.
- Come todos los puntos pequeños para completar el nivel.
- Evita a los fantasmas. Las bolas de poder grandes te permiten comerlos temporalmente para obtener puntos extra.
- Tienes tres vidas. La velocidad aumenta en los niveles superiores.
- **Guardar y salir** almacena la partida actual. **Salir sin guardar** abandona la partida sin guardar los nuevos cambios.
- Usa los botones superiores separados para activar o desactivar los efectos de sonido y la música de fondo, además de controlar la pantalla completa, el idioma y la información.
- La clasificación muestra las diez mejores puntuaciones guardadas en el dispositivo actual.

## Technical notes

- No external assets or libraries are required.
- The background music is an original built-in Web Audio chiptune and does not use the copyrighted Pac-Man melody or external audio files.
- Pac-Man, ghosts, maze walls, power pellets, and controls use layered 3D shading. Power-ups, ghost bonuses, level completion, and lost lives include animated particle, popup, flash, and shake effects.
- The game state uses browser `localStorage`.
- Fullscreen activation always requires a user gesture because of browser security rules.

---

## Apps & Games deployment

This repository contains the standalone Neon Pac-Man build for the **Apps & Games** portal.

- Main file: `index.html`
- Intended production URL: `https://neonpacman.appsandgames.org/`
- The game is self-contained and does not require external JavaScript libraries.
- The **Information / Donations** panel follows the standard Apps & Games layout with PayPal, Stripe and crypto options.
- Interface and Info/Donations content are available in English, Croatian, German, Italian and Spanish.

The final production deployment is intended to be served through Cloudflare Pages connected to this GitHub repository.
