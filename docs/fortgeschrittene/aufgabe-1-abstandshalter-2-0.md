---
sidebar_position: 1
---

# Abstandshalter

Die Drohne soll mit dem Front-Range-Sensor einen konstanten Abstand zu einem Hindernis halten.

## Aufgabenstellung

1. Startet die Drohne.
2. Messt wiederholt den Abstand nach vorne mit `get_front_range("cm")`.
3. Haltet den Zielabstand von 60 cm fuer 12 Sekunden:
- Ist der Abstand zu gross, fliegt kurz vorwärts.
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

## Beispielcode

```python
from codrone_edu.drone import *
import time

TARGET_CM = 60
TOLERANCE_CM = 10
POWER = 25
STEP_TIME = 0.25
RUN_TIME = 12

drone = Drone()
drone.pair()

drone.takeoff()
start = time.time()

while time.time() - start < RUN_TIME:
    d = drone.get_front_range("cm")

    if d > TARGET_CM + TOLERANCE_CM:
        drone.go("forward", POWER, STEP_TIME)
    elif d < TARGET_CM - TOLERANCE_CM:
        drone.go("backward", POWER, STEP_TIME)
    else:
        drone.hover(0.2)

drone.land()
drone.close()
```
