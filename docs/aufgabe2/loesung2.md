---
sidebar_position: 2
---


# Lösung 

Die richtige Reihenfolge der Funktionen ist entscheidend. 
Zuerst starten wir die Drohne mit `drone.takeoff()`, mit `drone.hover(3)`schwebt die Drohne für drei Sekunden auf der Stelle. Gelandet wird die Drohne mit `drone.land()`


```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()

drone.takeoff()

drone.hover(3)

drone.land()

drone.disconnect()
```