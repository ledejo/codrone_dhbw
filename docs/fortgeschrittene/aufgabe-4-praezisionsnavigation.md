---
sidebar_position: 4
---

# Präzisionsnavigation

In dieser Aufgabe steuert ihr die Drohne mit Positionsdaten statt nur mit Zeitwerten.

## Aufgabenstellung

1. Startet die Drohne und speichert den Startpunkt (`x0`, `y0`).
2. Fliegt zu einem Zielpunkt, z. B. 80 cm vor und 40 cm rechts vom Start.
3. Nutzt `get_pos_x("cm")` und `get_pos_y("cm")` in einer Regel-Schleife.
4. Landet erst, wenn ihr in einer Toleranz (z. B. +/-15 cm) seid.

### Wichtige Funktionen

Schreibt diese zwischen `drone.pair()` und `drone.close()`.

- `drone.pair()`
- `drone.takeoff()`
- `drone.get_pos_x("cm")`
- `drone.get_pos_y("cm")`
- `drone.go(direction, power, duration)`
- `drone.hover(seconds)`
- `drone.land()`
- `drone.close()`
