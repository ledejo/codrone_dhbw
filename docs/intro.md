---
sidebar_position: 1
---
# Willkommen zum CoDrone EDU Workshop
Wir nutzen die CoDrone EDU, eine professionelle Lerndrohne, die mit Sensoren vollgepackt ist um programmieren zu lernen.

## Was kann die CoDrone?
Die Drohne ist nicht nur ein Spielzeug, sondern ein fliegender Computer. Sie verfügt über:

**Sensoren**: Farbe, Abstand, Luftdruck, Gyroskop, etc.

**LED-Display**: Für visuelles Feedback auf dem Controller.

**Stabilität**: Sie kann die Höhe automatisch halten, was das Programmieren für Anfänger sicher macht.

**Wichtigste Regel**: Wenn die Drohne mal "ausbricht" – Finger weg von den Propellern! In der Web-IDE gibt es einen Notfall-Aus Knopf. **Die Drohne niemals mit den Händen fangen!**

## Crashkurs: Python in 2 Minuten
Wir programmieren in der Programmiersprache Python. Das ist eine der meistgenutzten Programmiersprachen der Welt.
Python an sich ist schon sehr intuitiv, die Web-IDE von Robolink setzt für die ersten Schritte nur wenig Wissen voraus.

**Achte besonders auf diese drei Dinge:**

**Die Library(Bibliothek) laden:** Jedes Programm beginnt mit `from codrone_edu.drone import *`. Das sagt dem Computer, dass er die Drohnen-Befehle laden soll.

**Drohne verbinden:** In jedem Programm muss der Befehl `drone.connect()` stehen damit das Programm sich mit der Drohne verbindet.

**Klammern nicht vergessen:** Befehle sehen immer so aus: `drone.takeoff()`. Manchen Funktionen kann man auch Werte in den Klammern - wie Sekunden oder die Geschwindigkeit - mitgeben. Die Klammern am Ende sagen Python: "Tu es jetzt sofort!".

**Genauigkeit:** Python verzeiht keine Tippfehler. Drone ist nicht das Gleiche wie drone.

## Euer Werkzeug: Die Web-IDE
Wir arbeiten komplett im Web-Browser. Ihr müsst nichts installieren. Ich empfehle euch Google Chrome.

Die **Robolink* Web-IDE findet ihr hier: [Web-IDE](https://codrone.robolink.com/edu/python/).

Verbindet eure Drohne über den Button **"Connect"** unten links.

Klickt auf **"Run"**, um euren Flug zu starten.

Für eine kontrollierte Landung nutzt bitte entweder den Befehl `drone.land()` im Code oder den Button "Land" oben in der Web-IDE. Drückt ihr den Button **"Stop"** gehen die Rotoren aus und die Drohne stürzt ab. Sie ist zwar robust gebaut und geht nicht sofort kaputt, nutzt diese Funktion aber wirklich nur im Notfall!

