---
sidebar_position: 15
---

# Lösung: Farben als Lande-Entscheidung

```python
from codrone_edu.drone import *
import time

TARGET_COLOR = "blue"

drone = Drone()
drone.pair()

for attempt in range(6):
    drone.takeoff()
    drone.hover(1)

    if attempt % 2 == 0:
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
