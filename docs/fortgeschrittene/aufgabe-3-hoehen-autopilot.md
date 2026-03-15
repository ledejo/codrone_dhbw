---
sidebar_position: 3
---

# Höhen-Autopilot

Die Drohne soll ihre Höhe aktiv mit dem Bottom-Range-Sensor halten.

## Aufgabenstellung

1. Startet die Drohne.
2. Messt die Höhe mit `get_height("cm")`.
3. Haltet die Drohne 15 Sekunden auf der Zielhöhe 70-90 cm.
4. Korrigiert die Höhe nur in kurzen Impulsen.
5. Landet sauber.

### Wichtige Funktionen

Schreibt diese zwischen `drone.pair()` und `drone.close()`.

- `drone.pair()`
- `drone.takeoff()`
- `drone.get_height("cm")`
- `drone.set_throttle(power)`
- `drone.move(duration)`
- `drone.reset_move_values()`
- `drone.land()`
- `drone.close()`
