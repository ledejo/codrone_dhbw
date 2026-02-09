---
sidebar_position: 1
---

# Final Challenge: Präzisionsflug


In dieser letzten Aufgabe bestimmt ihr wohin die Drohne fliegt. Es geht hierbei um Präzision und Schnelligkeit.

## Die Aufgabe: "Punktlandung"
Platziert in ca. 2 Metern Entfernung ein Ziel (z. B. ein Blatt Papier). Eure Drohne soll:

1. Starten und kurz schweben.

2. Das Ziel auf direktem Weg ansteuern

3. Möglichst genau auf dem Ziel landen.

### Der Plan
Ihr müsst die Flugzeiten und Geschwindigkeiten perfekt abstimmen. Nutzt dafür die go()-Funktion, die ihr schon kennt.

Ihr könnt in die `drone.go()` Funktion verschiedene Richtungen eintragen.

Beispiel für euren Code:


```python
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()

# 1. Vorwärts fliegen (Anpassen: Power und Zeit)
drone.go("forward", 30, 1.5)
# 2. Rückwärte fliegen
drone.go("backward", 30, 1) 
# 3. Nach rechts oder links fliegen
drone.go("right", 30, 1.0)
drone.go("left", 30, 1.0)
# 4. Wieder nach vorne zum Ziel
drone.go("forward", 30, 1.0)

# 5. Landung auf dem Zielpunkt
drone.land()
drone.close()
```

### 💡 Tipps für den Sieg

**Trial & Error:** Keiner schafft es beim ersten Mal! Ändert die Sekundenwerte (z. B. von 1.5 auf 1.8), um die Entfernung feinzujustieren.

**Konsistenz:** Nutzt immer den gleichen Start- und Landepunkt, sonst bekommt ihr immer andere Ergebnisse.
