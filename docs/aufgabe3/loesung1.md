---
sidebar_position: 2
---
# Lösung
```python
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.takeoff()

# 1. Sinken: "down" mit 30% Power für 1 Sekunden
drone.go("down", 50, 1)

# 2. Kurzes Schweben für 1 Sekunde
drone.hover(1)

# 3. Aufsteigen: "up" mit 50% Power für 1 Sekunden
drone.go("up", 50, 1)

# 4. Kurzes Schweben für 1 Sekunde
drone.hover(1)

drone.land()
drone.close()
```

