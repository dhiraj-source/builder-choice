import formModel from "@/models/formSchema"
import connectDB from "@/utils/db"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const conn = await connectDB()
        try {
            const formData = await formModel.find();
            console.log(typeof (formData))

            console.log("serverSIde", formData)
            res.status(200).json({
                success: true,
                message: "Data found successfully",
                formData
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    } else {
        res.status(405).json({
            success: false,
            message: "METHOD NOT ALLOWED"
        })
    }
}