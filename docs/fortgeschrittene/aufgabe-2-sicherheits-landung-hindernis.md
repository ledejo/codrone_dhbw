---
sidebar_position: 2
---

# Sicherheits-Landung bei Hindernis

Die Drohne soll vorwärts fliegen und bei einem nahen Hindernis sofort sicher landen.

## Aufgabenstellung

1. Startet die Drohne und schwebt 1 Sekunde.
2. Fliegt in kleinen Schritten vorwärts.
3. Prueft vor jedem Schritt mit `detect_wall(distance)`, ob ein Hindernis in 35 cm ist.
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

## Beispielcode

```python
from codrone_edu.drone import *
import time

STOP_DISTANCE_CM = 35
POWER = 25
STEP_TIME = 0.2
MAX_TIME = 15

drone = Drone()
drone.pair()

drone.takeoff()
drone.hover(1)

start = time.time()
while time.time() - start < MAX_TIME:
    if drone.detect_wall(STOP_DISTANCE_CM):
        print("Hindernis erkannt -> Sicherheitslandung")
        drone.hover(1)
        break

    drone.go("forward", POWER, STEP_TIME)

drone.land()
drone.close()
```
