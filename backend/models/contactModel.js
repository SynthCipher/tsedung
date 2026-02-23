import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactInfo: { type: String },
    message: { type: String, required: true },
    chapter: { type: Number, default: 0 },
    date: { type: Number, default: Date.now }
}, { minimize: false, timestamps: true });

const contactModel = mongoose.models.contact || mongoose.model('contact', contactSchema);

export default contactModel;
