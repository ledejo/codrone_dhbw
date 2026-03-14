---
sidebar_position: 9
---

# Final Challenge: Praezisionsflug
In dieser letzten Aufgabe bestimmt ihr, wohin die Drohne fliegt. Es geht um Praezision und Schnelligkeit.

## Aufgabenstellung: Punktlandung
Platziert in ca. 2 Metern Entfernung ein Ziel (z. B. ein Blatt Papier). Eure Drohne soll:

1. Starten und kurz schweben.
2. Das Ziel auf direktem Weg ansteuern.
3. Moeglichst genau auf dem Ziel landen.

### Wichtige Funktionen
Nutzt die Funktion `drone.go()` mit passenden Richtungen, Power und Zeiten.

Beispiel:

```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()
drone.takeoff()

drone.go("forward", 30, 1.5)
drone.go("backward", 30, 1)
drone.go("right", 30, 1.0)
drone.go("left", 30, 1.0)
drone.go("forward", 30, 1.0)

drone.land()
drone.disconnect()
```
