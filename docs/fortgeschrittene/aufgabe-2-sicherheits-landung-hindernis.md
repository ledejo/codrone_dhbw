---
sidebar_position: 2
---

# Sicherheits-Landung bei Hindernis

Die Drohne soll vorwärts fliegen und bei einem nahen Hindernis sofort sicher landen.

## Aufgabenstellung

1. Startet die Drohne und schwebt 1 Sekunde.
2. Fliegt in kleinen Schritten vorwärts.
3. Prüft vor jedem Schritt mit `detect_wall(distance)`, ob ein Hindernis in 35 cm ist.
4. Bei Hindernis:
- sofort in `hover(1)` wechseln
- kontrolliert landen
5. Spätestens nach 15 Sekunden ebenfalls landen (Timeout).

### Wichtige Funktionen

Schreibt diese zwischen `drone.pair()` und `drone.close()`.

- `drone.pair()`
- `drone.takeoff()`
- `drone.detect_wall(distance)`
- `drone.go("forward", power, duration)`
- `drone.hover(seconds)`
- `drone.land()`
- `drone.close()`
