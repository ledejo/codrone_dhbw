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

## Beispielcode

```python
from codrone_edu.drone import *
import time

TARGET_COLOR = "blue"
MAX_ATTEMPTS = 6

drone = Drone()
drone.pair()

for attempt in range(1, MAX_ATTEMPTS + 1):
    drone.takeoff()
    drone.hover(1)

    if attempt % 2 == 1:
        drone.go("forward", 25, 0.8)
    else:
        drone.go("right", 25, 0.6)

    drone.land()
    time.sleep(1)

    color_name = drone.get_front_color("name")

    if color_name == TARGET_COLOR:
        drone.set_drone_LED_mode(0, 255, 0, "double_blink", 5)
        break

    drone.set_drone_LED_mode(255, 0, 0, "blink", 8)
    time.sleep(1)

drone.close()
```
