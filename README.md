Erstelle eine REST API mit Express und Mongoose, die es ermöglicht, einen neuen Kunden-Account anzulegen und alle Accounts auszulesen.
Achte besonders auf eine saubere Struktur nach dem MVC-Pattern. Richte ein Model für Kunden-Accounts über Mongoose ein und nutze dieses für die beiden Endpoints.
Mit dem Frontend-Team wurden folgende Endpoints besprochen:
POST /customers
Legt neuen Kunden-Account an.
Übertragene Daten:
-> Vorname
-> Nachname
-> Firmenname
-> E-Mail-Adresse (eindeutig, benötigt)
-> Großkunde (ja oder nein)
-> Gesamtumsatz in €
GET /customers
Gibt alle Kunden-Accounts aus.