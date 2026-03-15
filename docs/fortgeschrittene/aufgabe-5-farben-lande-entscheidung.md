---
sidebar_position: 5
---

# Farben als Lande-Entscheidung

Die Farberkennung erfolgt in dieser Aufgabe nach der Landung. Bei falscher Farbe blinkt die LED rot und die Drohne startet den nächsten Suchschritt.

## Aufgabenstellung

1. Definiert eine Zielfarbe, z. B. `"blue"`.
2. Drohne startet, fliegt einen kurzen Suchschritt und landet.
3. Nach der Landung Farbe lesen mit `get_front_color("name")` oder `get_back_color("name")`.
4. Wenn Farbe korrekt: grüne LED und Ende.
5. Wenn falsch: rote Blink-LED und nächster Versuch.

### Wichtige Funktionen

Schreibt diese zwischen `drone.pair()` und `drone.close()`.

- `drone.pair()`
- `drone.takeoff()`
- `drone.go(...)`
- `drone.land()`
- `drone.get_front_color("name")`
- `drone.set_drone_LED_mode(r, g, b, mode, speed)`
- `drone.close()`
