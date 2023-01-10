import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Vorname: {
        type: String,
    },
    Nachname: {
        type: String,
    },
    Firmenname: {
        type: String,
    },
    EMailAdresse: {
        type: String,
        required: true,
    },
    Grosskunde: {
        type: Boolean,
    },
    Gesamtumsatz: {
        type: Number,
    },
});

const Report = mongoose.model("Kunden", schema); // Collection => kunden


export const getAll = async () => {
    const kunden = await Kunde.find();
    return kunden;
}

// export const create = async (title, description, test) => {
//     // Zum Erstellen eines neuen Datensatzes instanziieren wir ein neues Objekt des Models.
//     // Im Constructor übergeben wir das zu erstellende Dokument.
//     const newReport = new Report({ title, description, test });

//     // Erst wenn wir save() ausführen, wird der Datensatz in der Collection gespeichert.
//     const result = await newReport.save();
//     return result;
// }

