import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongoDb connected succesfully: ${mongoose.connection.host}`)

    } catch (error) {
        console.log(`Error connecting to monogDB : ${error.message}`)
    }
}

export default connectDB