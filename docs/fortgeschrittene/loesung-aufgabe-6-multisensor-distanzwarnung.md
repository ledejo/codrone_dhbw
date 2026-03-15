---
sidebar_position: 14
---

# Lösung: Multi-Sensor-Distanzwarnung

```python
from codrone_edu.drone import *
import time

THRESHOLD_FRONT = 30
THRESHOLD_BOTTOM = 20

drone = Drone()
drone.pair()
drone.takeoff()

start_time = time.time()
while time.time() - start_time < 20:
    f_dist = drone.get_front_range()
    b_dist = drone.get_bottom_range()
    
    print(f"Sensoren -> Front: {f_dist}mm | Bottom: {b_dist}mm")

    if f_dist < THRESHOLD_FRONT or b_dist < THRESHOLD_BOTTOM:
        drone.set_drone_LED(255, 0, 0, 100)
        drone.drone_buzzer(Note.C5, 50)
    else:
        drone.set_drone_LED(0, 255, 0, 100)

    time.sleep(0.1)

drone.land()
drone.close()