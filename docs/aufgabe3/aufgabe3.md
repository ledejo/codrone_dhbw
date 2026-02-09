---
sidebar_position: 1
---



# Das Jo-Jo
In dieser Aufgabe bringen wir Dynamik in den Flug! Ein echtes Fluggerät muss seine Höhe präzise anpassen können. Wir programmieren ein "Jo-Jo": Die Drohne soll sich in der Luft auf und ab bewegen.

# Aufgabenstellung

Programmiert eure Drohne für ein vertikales Manöver:

**1. Start**: Abheben in die Grundhöhe.

**2. Sinken**: Die Drohne soll kontrolliert tiefer sinken (aber nicht landen!) und dort für eine Sekunden stehen bleiben.

**3. Aufsteigen**: Wieder zurück auf die ursprüngliche Höhe steigen.

**4. Landung**: Sichere Landung.


### Wichtige Funktionen

Die folgenden Funktionen benötigt ihr um die Aufgabe zu bearbeiten:

Schreibt diese zwischen `drone.connect()` und `drone.disconnect()`

**Starten der Drohne**: `drone.takeoff()`

**Schweben in der Luft**: `drone.hover(Dauer in Sekunden)`

**Bewegen der Drohne**: `drone.go(richtung, power=50, dauer in sekunden)`
Nutzt für die Funktion `drone.go()` die Werte Richtung = "up" und "down", power = 50% - 80% und für die Dauer maximal 1.5 Sekunden. Fangt klein an und steigert euch, sonst stürzt die Drohne unkontrolliert ab.

**Landen der Drohne**: `drone.land()`
