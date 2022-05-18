import mongoose from "mongoose";

const pcSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true}
    }
);

const publishingCompanies = mongoose.model("publishing_companies", pcSchema);

export default publishingCompanies;