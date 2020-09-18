# RUAG MRO – Stellensuche

Version 3.0 (aktualisiert am 18. September 2020)

---

Die Stellensuche der RUAG wird durch Solique umgsetzt. Solique's Stellensuche-Lösung ist bereits im Einsatz und bedarf einer Erweiterung in technischer Hinsicht und bedarf optischer Anpassungen an den neuen Auftritt der RUAG MRO Schweiz.

Joinbox stellt Solique das Markup und das entsprechende CSS für die Stellensuche zur Verfügung. Solique kann sich auf diese stützen und verwendet die von Joinbox vorgegebenen CSS-Klassen und soweit möglich die vorgegebene DOM-Struktur. Dadurch wird garantiert, dass sich die Stellensuche nahtlos in die neue Website einfügen lässt und den Look n Feel übernimmt.

Diese Arbeiten stützen sich auf die [Anforderungen für die Integration der Stellensuche (aktualisiert am 22. April)](https://docs.google.com/document/d/1kxOjLWtOLRKewrE3sZUgugCVkHEyIBf8fqWZoRnmLvY/edit#heading=h.e37285517tv) und orientieren sich an den entsprechenden [Mockups](https://xd.adobe.com/view/5d82d7e2-780e-4bc0-6c6d-b59bb700aa59-2bb3/) gemäss Slide 1, 7 und 8.

# Technische Umsetzung

Solique nutzt die von Joinbox im diesem Repo hinterlegten Code-Blöcke (HTML und CSS) und wendet diese auf ihre Patterns/Templates an, übernimmt dabei die CSS-Klassennamen, soweit möglich die DOM-Struktur und nutzt [das CSS, das von Joinbox zur Verfügung gestellt wird](src/main.css).

Die Bauklötze sind so konzipiert, dass sie – soweit möglich, siehe «Anforderungen» – isoliert funktionieren und korrekt dargestellt werden. Dazu muss ihr Markup übernommen werden und das CSS  geladen werden.

Testhalber sind in den hinterlegten HTML-Dateien weitere CSS verknüpft, um deren Auswirkung auf die Patterns eruieren zu können. Die hinterlegten CSS-Dateien sind jene, die Solique auf der Stellensuche für die RUAG verwendet.

## Schriften

Die verwendeten Schriften sind im [webfonts-Ordner](src/webfonts) hinterlegt; deren Implementation lassen sich in der [other.css](src/other.css) finden.

## Anforderungen

Da die Bauklötze abhängig sind von einigen Eigenschaften, die typischerweise auf dem `html`- oder `body`-Tag hinterlegt sind, sind folgende Angaben für das korrekte Funktionieren zu hinterlegen:
- Nutzung einer aktuellen [normalize.css](https://necolas.github.io/normalize.css/)
- Einbinden des [CSS von Joinbox](src/main.css), das für die Darstellung der Bauklötze notwendig ist.
- Gemäss den grafischen Anforderungen unterscheidet sich die Schriftgrösse abhängig vom genutzten Endgerät: für mobile Endgeräte sollen 15px, für grössere Endgeräte 16px gewählt werden. Diese Angaben müssen auf dem html-Tag hinterlegt werden, da unsere Bauklötze für Schriftgrössenangaben die `rem`-Einheit nutzen.
- für eine allfällige Synchronisation von Breakpoints zwischen CSS und JS fügen wir auf jenen Komponenten, welche Breakpoint-spezifisches JavaScript benötigen, ein after-Element mit dem Breakpoint als Content hinzu.

# Drei Ansichten

Die Stellensuche besteht aus drei Ansichten:

## 1. Lose Übersicht (Kachelübersicht)

- Datei: [index.html](src/index.html)
- Die Kacheln der Stellensuche haben je eine bestimmte Breite. Um – für die Desktop-Ansicht – 3 x 2 Kacheln darstellen zu können, bedarf es einem Wrapper, der die Breitenbeschränkung vornimmt.
- Auf Mobile werden nur 3 Kacheln dargestellt, was durch Ausblenden der letzten 3 grauen Kachlen mittels CSS passiert.
- die letzte Kachel hat einen BEM-modifier von `accent`, um die Kachel rot einzufärben.


## 2. Übersicht mit Filterfunktion

- Datei: [jobs.html](src/jobs.html)
- Auf den Hover-Effekt bei den Dropdowns (grüner Border) wurde verzichtet.

## 3. Detailansicht einer Stelle

- Datei: [job.html](src/job.html)
- JS für den Header und das Akkordion (nur mobile): [job.js](src/job.js)
- Diese Ansicht ist für den Druck optimiert

## Verhalten der Links zwischen den einzelnen Ansichten

- Von der **Kachel-Übersicht** soll nie ein neuer Tab geöffnet werden – egal, ob man direkt auf einen Job oder die rote Kachel klickt
	- Klick auf einen (grauen) Job öffnet die Detail-Seite im bestehenden Browser-Fenster via „_top“ oder „_parent“-Target-Attribut auf dem Link im Iframe. Allenfalls benötigt das Iframe zusätzlich einen base-Tag.
	- selbiges Verhalten gilt für die rote Kachel. Sie führt zur filterbaren Übersicht, aber ohne einen neuen Tab zu öffnen.
- Somit gilt selbiges für die **filterbare Übersicht**: Die Detail-Ansicht eines Jobs öffnet sich nicht in einem neuen Tab, sondern „löst“ sich aus dem Iframe. Das führt zu folgendem Zurück-Link-Verhalten:
- Auf einer **Detail-Seite** eines Jobs verhält sich der „Zurück zu Ruag“-Link folgendermassen:
	- gelangt man von Kachel-Übersicht auf einen Job, so soll der Zurück-Link zur Kachel-Übersicht
	- gelangt man von der filterbaren Übersicht auf einen Job, so soll man zurück zur filterbaren Übersicht kommen
	- gelangt man von Google oder sonstwo auf einen Job, so soll der Zurück-Link auf die Startseite der Ruag-Website linken.
Für dieses Verhalten werden Sie die opener-URL jeweils an die Links hängen müssen. Prüfen Sie dabei diese auf ihre Korrektheit, um böswillige Redirects zu unterbinden. Eine Regex dazu finden Sie in den [Anforderungen]((https://docs.google.com/document/d/1kxOjLWtOLRKewrE3sZUgugCVkHEyIBf8fqWZoRnmLvY/edit#heading=h.e37285517tv)).

---


# Kontakt

Bei Fragen kontaktiert Solique Fabian Jordi unter [fabian@joinbox.com](fabian@joinbox.com) oder [+41 76 548 76 06](tel:+41765487606).
