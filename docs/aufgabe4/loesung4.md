---
sidebar_position: 2
---
# Lösung

## Quadrat
```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()
drone.takeoff()

# Fliegt ein Quadrat
drone.square()

drone.land()
drone.disconnect()
```

## Kreis
```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()
drone.takeoff()

# Fliegt einen Kreis
drone.circle()

drone.land()
drone.disconnect()
```

## Dreieck
```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()
drone.takeoff()

# Fliegt ein Dreieck
drone.triangle()

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

drone.hover(3) # kurz stabilisieren
drone.flip("back") 
time.sleep(4)  # mindestens 4 Sekunden Pause nach einem Flip.

drone.land()
drone.disconnect()
```
