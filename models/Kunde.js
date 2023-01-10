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
    EmailAdresse: {
        type: String,
        required: true,
        unique: true,
    },
    Grosskunde: {
        type: Boolean,
    },
    Gesamtumsatz: {
        type: Number,
    },
});

const Kunde = mongoose.model("Customer", schema); // Collection => kunden


export const getAll = async () => {
    const kunden = await Kunde.find();
    return kunden;
}

export const create = async (document) => {
    // Zum Erstellen eines neuen Datensatzes instanziieren wir ein neues Objekt des Models.
    // Im Constructor übergeben wir das zu erstellende Dokument.
    const newKunde = new Kunde(document);

    // Erst wenn wir save() ausführen, wird der Datensatz in der Collection gespeichert.
    const result = await newKunde.save();
    return result;
}

