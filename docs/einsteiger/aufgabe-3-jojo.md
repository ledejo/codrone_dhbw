---
sidebar_position: 5
---

# Das Jo-Jo
In dieser Aufgabe bringen wir Dynamik in den Flug. Wir programmieren ein Jo-Jo: Die Drohne soll sich in der Luft auf und ab bewegen.

## Aufgabenstellung
Programmiert eure Drohne fuer ein vertikales Manoever:

1. Start: Abheben in die Grundhoehe.
2. Sinken: Die Drohne soll kontrolliert tiefer sinken (aber nicht landen) und dort kurz stehen bleiben.
3. Aufsteigen: Wieder zurueck auf die urspruengliche Hoehe steigen.
4. Landung: Sichere Landung.

### Wichtige Funktionen
Die folgenden Funktionen benoetigt ihr um die Aufgabe zu bearbeiten:

Schreibt diese zwischen `drone.connect()` und `drone.disconnect()`

**Starten der Drohne**: `drone.takeoff()`

**Schweben in der Luft**: `drone.hover(Dauer in Sekunden)`

**Bewegen der Drohne**: `drone.go(richtung, power=50, dauer in sekunden)`

Nutzt fuer die Funktion `drone.go()` die Werte Richtung = "up" und "down", power = 50% - 80% und fuer die Dauer maximal 1.5 Sekunden.

**Landen der Drohne**: `drone.land()`
