---
sidebar_position: 3
---

# Höhen-Autopilot

Die Drohne soll ihre Höhe aktiv mit dem Bottom-Range-Sensor halten.

## Aufgabenstellung

1. Startet die Drohne.
2. Messt die Hoehe mit `get_height("cm")`.
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

## Beispielcode

```python
from codrone_edu.drone import *
import time

LOW_CM = 70
HIGH_CM = 90
RUN_TIME = 15

drone = Drone()
drone.pair()

drone.takeoff()
start = time.time()

while time.time() - start < RUN_TIME:
    h = drone.get_height("cm")

    if h < LOW_CM:
        drone.set_throttle(20)
        drone.move(0.25)
        drone.reset_move_values()
    elif h > HIGH_CM:
        drone.set_throttle(-20)
        drone.move(0.25)
        drone.reset_move_values()
    else:
        drone.hover(0.2)

drone.land()
drone.close()
```
