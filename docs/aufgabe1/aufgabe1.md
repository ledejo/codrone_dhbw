---
sidebar_position: 1
---


# Teambuilding 
Bevor wir die Motoren starten, müssen wir die Kommunikation zwischen eurem Computer und der Drohne testen. 

Das Ziel dieser Aufgabe ist es, der Drohne eine eigene Identität zu geben: Eure Teamfarbe.


# Aufgabenstellung
Sucht euch in der Gruppe eine Teamfarbe aus. Eure Drohne soll diese Farbe nach dem Starten dauerhaft anzeigen.

Schritt für Schritt Anleitung:

1. Öffne die Robolink Web-IDE.

2. Verbinde deinen Controller per USB.

3. Kopiere den folgenden Code in den Editor und passt die Werte für eure Farbe an.

```python
from codrone_edu.drone import *

drone = Drone()
drone.connect()

# die Werte in den Klammern der Funktion können verändert werden (R,G,B,Helligkeit)
drone.set_drone_LED(100, 0, 255, 100)


drone.disconnect()
```


# Das RGB-Farbsystem
Die Drohne nutzt das RGB-Farbsystem. Ihr könnt jede beliebige Farbe mischen, indem ihr die drei Zahlen (R,G,B) in der Funktion `set_drone_LED(R,G,B,Helligkeit)` im Code anpasst (nur Werte zwischen 0 und 255 sind zulässig).

Eine einfache Möglichkeit die Farben mit den RGB-Werten zu sehen findet ihr hier: https://rgbcolorpicker.com/