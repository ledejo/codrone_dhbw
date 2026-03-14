---
sidebar_position: 8
---

# Lösung: Flugmanoever und Akrobatik

## Quadrat
```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()

drone.takeoff()
drone.hover(1)
drone.square()
drone.hover(1)

drone.land()
drone.disconnect()
```

## Kreis
```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()

drone.takeoff()
drone.hover(1)
drone.circle()
drone.hover(1)

drone.land()
drone.disconnect()
```

## Dreieck
```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()

drone.takeoff()
drone.hover(1)
drone.triangle()
drone.hover(1)

drone.land()
drone.disconnect()
```

## Flip
```python
from codrone_edu.drone import *
import time

drone = Drone()
drone.connect()

drone.takeoff()
drone.hover(3)

drone.flip("back")
time.sleep(4)

drone.land()
drone.disconnect()
```
