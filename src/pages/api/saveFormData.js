import connectDB from "@/utils/db";
import formModel from "@/models/formSchema";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            let db = await connectDB()

            const { data, total, builderName } = req.body;

            //connection to db
            // Insert the form data and total score into the database

            // const result = await formModel.insertOne({ data, total })
            // res.status(201).json({
            //     success: true,
            //     message: 'Form data save successfully',
            //     result
            // })

            // Create a new FormData instance
            const formData = new formModel({
                ...data, total, builderName
            });

            const result = await formData.save() 

            res.status(201).json({
                success: true,
                message: "Form data save successfully",
                result
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            })

        }
    } else {
        res.status(405).json(({
            success: false,
            message: 'METHOD not ALLOWED'
        }))
    }
}