---
sidebar_position: 1
---

# Abstandshalter

Die Drohne soll mit dem Front-Range-Sensor einen konstanten Abstand zu einem Hindernis halten.

## Aufgabenstellung

1. Startet die Drohne.
2. Messt wiederholt den Abstand nach vorne mit `get_front_range("cm")`.
3. Haltet den Zielabstand von 60 cm für 12 Sekunden:
- Ist der Abstand zu groß, fliegt kurz vorwärts.
- Ist der Abstand zu klein, fliegt kurz rückwärts.
- Liegt der Abstand in der Toleranz, schwebt.
4. Landet kontrolliert.

### Wichtige Funktionen

Schreibt diese zwischen `drone.pair()` und `drone.close()`.

- `drone.pair()`
- `drone.takeoff()`
- `drone.get_front_range("cm")`
- `drone.go(direction, power, duration)`
- `drone.hover(seconds)`
- `drone.land()`
- `drone.close()`

