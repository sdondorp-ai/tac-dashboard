TAC Media Dashboard — Installatie-instructies
=============================================

STAP 1: MAP NEERZETTEN
-----------------------
Zet de map "tac-app" ergens op je laptop, bijv.:
  C:\Users\Samuel\TAC Dashboard\

STAP 2: SERVER STARTEN
-----------------------
Dubbelklik op: Start_TAC_Dashboard.bat

Dit opent automatisch het dashboard in je browser
op http://localhost:8765

STAP 3: INSTALLEREN ALS APP (Chrome of Edge)
---------------------------------------------
Als het dashboard open is:
- Chrome: klik het installatie-icoon rechts in de adresbalk (pijltje naar beneden)
  OF: menu (···) > "TAC Media Dashboard installeren"
- Edge: klik het app-icoon in de adresbalk
  OF: menu (···) > Apps > "Deze site als app installeren"

Na installatie staat de app in je Startmenu en op je taakbalk.
Je kunt hem openen zonder browser-UI, als een echte Windows-app.

STAP 4: DATA LADEN
------------------
- Sleep Offer18 exports (per maand) in het dashboard
- Sleep Stats_Affiliation.xlsx erbij voor TAC eigen resultaten
- Meerdere bestanden tegelijk is mogelijk

TIP: Maak een snelkoppeling naar Start_TAC_Dashboard.bat op je bureaublad.

VEREISTEN
---------
- Windows 10/11
- Chrome of Edge (voor PWA installatie)
- Python (optioneel, voor lokale server — meeste Windows-laptops hebben dit)
  Zonder Python werkt het dashboard ook direct als HTML-bestand.

UPDATE v2.0 — Modules overzicht
================================
Het dashboard heeft nu 5 pagina's in de linkerzijbalk:

1. Dashboard      — Offer18 performance + Stats Affiliation (maanddata)
2. Publishers     — Rejection rates, geo analyse, publisher ranking
3. Adverteerders  — Offer lifecycle, geo×model matrix, concentratie
4. Prospects & CRM — CSV import adverteerders + publishers, profielen
5. Campaign Matching — Publisher-campagne matchingscore op basis van profiel

DATA BEWAREN (Prospects)
Prospects-data wordt opgeslagen in je browser (localStorage).
Wis NOOIT de sitedata van localhost:8765 in Chrome/Edge — dan verdwijnen je prospects.
Voor back-up: gebruik de "Export CSV" knop op de Prospects pagina.

CSV IMPORTFORMAAT
Adverteerders: naam,website,email,land,vertical,model,opmerking
Publishers:    naam,website,email,landen,verticals,model,opmerking
              (landen = NL,DE,UK  gescheiden door komma of puntkomma)
