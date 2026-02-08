---
sidebar_position: 2
---
# Lösung

## Quadrat
```python
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()

# Fliegt ein Quadrat
drone.square()

drone.land()
drone.close()
```

## Kreis
```python
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()

# Fliegt einen Kreis
drone.circle()

drone.land()
drone.close()
```

## Dreieck
```python
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()

# Fliegt einen Kreis
drone.triangle()

drone.land()
drone.close()
```


## Flip
```python
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()
drone.takeoff()

drone.hover(3) # kurz stabilisieren
drone.flip("back") 
time.sleep(4)  # mindestens 4 Sekunden Pause nach einem Flip.

drone.land()
drone.close()
```
