---
sidebar_position: 16
---

# Lösung: Sensorfusion + Telemetrie-Challenge

```python
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

drone.set_initial_pressure()
drone.takeoff()

start = time.time()
while time.time() - start < 15:
    h_range = drone.get_height("cm")
    h_pressure = drone.height_from_pressure()
    data = drone.get_sensor_data(0.05)
    battery = data[29]

    if battery <= 35:
        drone.drone_buzzer_sequence("warning")
        break

    if abs(h_range - h_pressure) > 20:
        drone.drone_buzzer_sequence("warning")

    drone.hover(0.2)

drone.land()
drone.close()
```
