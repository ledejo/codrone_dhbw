---
sidebar_position: 14
---

# Multi-Sensor-Interaktion: Kollisionswarner

In dieser Aufgabe lernt ihr, wie die Drohne gleichzeitig Hindernisse vor und unter sich erkennt und darauf mit visuellen und akustischen Signalen reagiert.

## Challenge-Ziel

1. Fragt die Distanzwerte des Front-Infrarotsensors und des Bottom-ToF-Sensors ab.
2. Nutzt eine logische **ODER-Verknüpfung**, um auf Annäherungen aus zwei Richtungen zu reagieren.
3. Gebt die Sensordaten live in der Konsole aus, um die Schwellenwerte zu überprüfen.
4. Schaltet bei Gefahr ein Warnsignal (Rote LED + Buzzer) ein.

### Wichtige Funktionen

Schreibt diese zwischen `drone.pair()` und `drone.close()`.

- `drone.pair()`
- `drone.takeoff()`
- `drone.get_front_range()`
- `drone.get_bottom_range()`
- `drone.set_drone_LED(r, g, b, brightness)`
- `drone.drone_buzzer(note, duration)`
- `drone.land()`
- `drone.close()`
