
import { Document } from "mongoose";
import * as Kunde from "../models/Kunde.js";

export const getAll = async (req, res) => {
    // In diesem Controller greifen wir auf die Model-Methode getAll() zu, um alle Reports zu erhalten.
    const kunden = await Kunde.getAll();
    res.json(kunden);
};

export const create = async (req, res) => {
    // Hier rufen wir create() aus dem Model auf.
    // Dabei übergeben wir die relevanten Daten aus req.body an die Methode.
    // Wir hatten im Model definiert, dass wir drei Argumente übergeben können,
    // Alternativ ist natürlich auch ein Objekt oder jede andere Form von Argumenten möglich.
    const result = await Kunde.create(Document);

    res.status(201).json(result);
}
