import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    builderName:String,
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
},
    { timestamps: true })

// const formModel = mongoose.model("buy", formSchema)
export default mongoose.models.buy || mongoose.model('buy', formSchema);
// export default formModel;