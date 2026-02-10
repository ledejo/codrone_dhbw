---
sidebar_position: 1
---

# Zusatzaufgabe: Parcour

Natürlich war das nicht alles was die Drohne kann. 

Es gibt noch zahlreiche Funktionen und Möglichkeiten die Drohne zu steuern. Wenn ihr möchtet könnt ihr die folgenden Funktionen nutzen um die Drohne zu lenken um sie beispielweise durch einen Parcour zu manövrieren. 

### Drehung nach links

`drone.turn_left()`

### Drehung nach rechts

`drone.turn_right()`

### Seitlich fliegen

mit `drone.go("right",power,dauer)` oder `"left"` könnt ihr die Drohne auch seitwärts fliegen lassen. 


So könnte euer Code beispielsweise aussehen:
```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()

drone.takeoff()

# 2 Sekunden schweben
drone.hover(2)

# Vorwärts, 50% Power, 2 Sekunden
drone.go("forward",50,2)

# 1 Sekunde schweben
drone.hover(1)

# 90 Grad Drehung nach rechts
drone.turn_right()

# 1 Sekunde schweben
drone.hover(1)

# Vorwärts, 50% Power, 1 Sekunde
drone.go("forward",50,1)

# 1 Sekunde schweben
drone.land()

drone.disconnect()
```