# RUAG MRO – Stellensuche

Version 1.0

---

Die Stellensuche der RUAG wird durch Solique umgsetzt. Solique's Stellensuche-Lösung ist bereits im Einsatz und bedarf einer Erweiterung in technischer Hinsicht und bedarf optischer Anpassungen an den neuen Auftritt der RUAG MRO Schweiz.

Joinbox stellt Solique das Markup und das entsprechende CSS für die Stellensuche zur Verfügung. Solique kann sich auf diese stützen und verwendet die von Joinbox vorgegebenen CSS-Klassen und soweit möglich die vorgegebene DOM-Struktur. Dadurch wird garantiert, dass sich die Stellensuche nahtlos in die neue Website einfügen lässt und den Look n Feel übernimmt.

Diese Arbeiten stützen sich auf die [Anforderungen für die Integration der Stellensuche](https://docs.google.com/document/d/1kxOjLWtOLRKewrE3sZUgugCVkHEyIBf8fqWZoRnmLvY/edit#heading=h.e37285517tv).

Dieses Repo wird laufend ergänzt und beinhaltet vorerst die lose Übersicht der Stellensuche.

# Technische Umsetzung

Solique nutzt die von Joinbox im diesem Repo hinterlegten Code-Blöcke (HTML und CSS) und wendet diese auf ihre Patterns/Templates an, übernimmt dabei die CSS-Klassennamen, soweit möglich die DOM-Struktur und nutzt [das CSS, das von Joinbox zur Verfügung gestellt wird](src/main.css).

Die Bauklötze sind so konzipiert, dass sie – soweit möglich, siehe «Anforderungen» – isoliert funktionieren und korrekt dargestellt werden. Dazu muss ihr Markup übernommen werden und das CSS  geladen werden.

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

## 1. Lose Übersicht

Joinbox stellt diesen Teil am 23. März 2020 Solique zur Verfügung und erwartet Feedback bis am 27. März dazu.
Die «lose Übersicht» hat Testcharakter. Solique soll Joinbox mitteilen, wo Probleme bestehen und welche Teile optimiert werden können, um eine möglichst reibungslose Implementation der Stellensuche zu ermöglichen.

### Erläuterungen
- Die Kacheln der Stellensuche haben je eine bestimmte Breite. Um – für die Desktop-Ansicht – 3 x 2 Kacheln darstellen zu können, bedarf es einem Wrapper, der die Breitenbeschränkung vornimmt.
- die letzte Kachel hat einen BEM-modifier von `accent`, um die Kachel rot einzufärben.
- Testhalber sind in der [index.html](src/index.html) weitere CSS verknüpft, um deren Auswirkung auf die Patterns eruieren zu können. Die hinterlegten CSS-Dateien sind jene, die Solique auf der Stellensuche für die RUAG verwendet.


## 2. Übersicht mit Filterfunktion

Folgt.

## 3. Detailansicht einer Stelle

Abhängig von der «Übersicht mit Filterfunktion».

---


# Kontakt

Bei Fragen kontaktiert Solique Fabian Jordi ([fabian@joinbox.com](fabian@joinbox.com), [+41 76 548 76 06](+41 76 548 76 06)).
