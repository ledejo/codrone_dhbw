---
sidebar_position: 7
---

# Flugmanoever und Akrobatik
Jetzt wird es Zeit fuer echte Flugfiguren. Die CoDrone EDU hat eingebaute Programme fuer geometrische Formen und Stunts.

## Aufgabenstellung
Sucht euch eine der folgenden Figuren aus und bringt eure Drohne zum Tanzen:

**Quadrat**: `drone.square()`

**Kreis**: `drone.circle()`

**Dreieck**: `drone.triangle()`

**Stunt**: `drone.flip()`

## Achtung
Achtet darauf, dass ihr genug Platz habt.

Besonders die Funktion `drone.flip()` benoetigt Platz und mindestens 50% Akkukapazitaet.

Nutzt aus Sicherheitsgruenden fuer den Flip diesen Code:

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
