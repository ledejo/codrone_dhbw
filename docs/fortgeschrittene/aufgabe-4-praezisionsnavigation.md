---
sidebar_position: 4
---

# Praezisionsnavigation

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

## Beispielcode

```python
from codrone_edu.drone import *
import time

TARGET_X = 80
TARGET_Y = -40   # negatives Y ist rechts
TOL = 15
POWER = 20
STEP = 0.2
TIMEOUT = 20

drone = Drone()
drone.pair()

drone.takeoff()
time.sleep(1)

x0 = drone.get_pos_x("cm")
y0 = drone.get_pos_y("cm")

start = time.time()
while time.time() - start < TIMEOUT:
    x = drone.get_pos_x("cm") - x0
    y = drone.get_pos_y("cm") - y0

    dx = TARGET_X - x
    dy = TARGET_Y - y

    if abs(dx) <= TOL and abs(dy) <= TOL:
        drone.hover(1)
        break

    if abs(dx) >= abs(dy):
        if dx > TOL:
            drone.go("forward", POWER, STEP)
        elif dx < -TOL:
            drone.go("backward", POWER, STEP)
    else:
        if dy > TOL:
            drone.go("left", POWER, STEP)
        elif dy < -TOL:
            drone.go("right", POWER, STEP)

drone.land()
drone.close()
```
