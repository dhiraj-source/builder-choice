import mongoose from "mongoose";

const formSchema =  new mongoose.Schema({
    builder: String,
    area: String,
    quality: String,
    design: String,
    aminities: String,
    delivery: String,
    location: String,
    rent: String,
    neighbourhood: String,
    cost: String,
    total: Number
})

const formModel = mongoose.model("buy", formSchema)
export default formModel;