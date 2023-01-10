// In diesem Modul verbinden wir uns mit der MongoDB-Datenbank.
// Wir verwenden die Methode connect() von Mongoose,
// wodurch die Verbindung direkt an das Mongoose-Modul angehängt wird.
// Überall, wo wir Mongoose verwenden, wird also diese Verbindung genutzt.
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose.set('strictQuery', false);

mongoose.connect(
    process.env.MONGODB_URI,
    {
        // Wenn wir den Datenbankname nicht im Connection String hinterlegt haben,
        // können wir über die Options einen Namen übergeben.
        // Da wir in der Environment bereits diese Trennung haben,
        // ist der Name in diesem Beispiel separat übergeben worden.
        dbName: process.env.DATABASE,
    }
).then(() => console.log("connected via mongoose"))
// .catch(console.error);

mongoose.connection.on("error", error => console.error(error));
