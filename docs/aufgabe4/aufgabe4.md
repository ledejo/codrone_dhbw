---
sidebar_position: 1
---
# Aufgabe 4: Flugmanöver & Akrobatik

Jetzt wird es Zeit für echte Flugfiguren! Die CoDrone EDU hat eingebaute Programme für geometrische Formen und Stunts. Ihr müsst nicht alles selbst programmieren sondern könnte diese einfach nutzen 

## Die Aufgabenstellung
Sucht euch eine der folgenden Figuren aus und bringt eure Drohne zum Tanzen:

**Quadrat**: `drone.square()`

**Kreis**: `drone.circle()`

**Dreieck**: `drone.triangle()`

**Stunt**: `drone.flip()`

## Achtung!

Achtet darauf, dass ihr genug Platz habt. 

Besonders die Funktion **`drone.flip()`** benötigt Platz und mindestens 50% Akkukapazität.

Nutzt aus Sicherheitsgründen für den **Flip** diesen Code:

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