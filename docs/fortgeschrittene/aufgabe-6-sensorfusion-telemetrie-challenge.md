---
sidebar_position: 6
---

# Sensorfusion + Telemetrie-Challenge

In dieser Aufgabe kombiniert ihr Hoehenwerte aus zwei Sensorquellen und nutzt Telemetriedaten fuer Entscheidungen.

## Challenge-Ziel

1. Vergleicht Range-Höhe (`get_height`) mit Druck-Höhe (`height_from_pressure`).
2. Liest parallel Telemetriedaten mit `get_sensor_data()`.
3. Reagiert auf Bedingungen:
- Bei niedriger Batterie: früh landen.
- Bei größerer Höhenabweichung: Warnsignal.

### Wichtige Funktionen

Schreibt diese zwischen `drone.pair()` und `drone.close()`.

- `drone.pair()`
- `drone.set_initial_pressure()`
- `drone.takeoff()`
- `drone.get_height("cm")`
- `drone.height_from_pressure()`
- `drone.get_sensor_data()`
- `drone.get_battery()`
- `drone.drone_buzzer_sequence(kind)`
- `drone.land()`
- `drone.close()`

## Beispielcode

```python
from codrone_edu.drone import *
import time

LOW_BATTERY_LIMIT = 35
ALLOWED_DIFF_CM = 20
RUN_TIME = 15

drone = Drone()
drone.pair()

drone.set_initial_pressure()
drone.takeoff()

start = time.time()
while time.time() - start < RUN_TIME:
    h_range = drone.get_height("cm")
    h_pressure = drone.height_from_pressure()

    data = drone.get_sensor_data(0.05)
    battery = data[29]

    if battery <= LOW_BATTERY_LIMIT:
        drone.drone_buzzer_sequence("warning")
        break

    if abs(h_range - h_pressure) > ALLOWED_DIFF_CM:
        drone.drone_buzzer_sequence("warning")

    drone.hover(0.2)

drone.land()
drone.close()
```
