import { useState } from "react"

const Forms = () => {

    const [total, setTotal] = useState(0)
    const [formSubmit, setFormSubmit] = useState(false)
    const [store, setStore] = useState(false)
    const [data, setData] = useState({
        builder: '',
        area: '',
        quality: '',
        design: '',
        aminities: "",
        delivery: '',
        location: '',
        rent: '',
        neighbourhood: '',
        cost: '',
    })

    const handleChange = (e) => {
        const { value, name } = e.target;
        setData((prev) => ({
            ...prev, [name]: value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        for (let key in data) {
            if (data[key] === '') {
                setFormSubmit(false)
                return;
            }
        }

        console.log("got data", data)
        let totalPoints = Object.values(data).reduce((acc, value) => acc + parseInt(value), 0)
        console.log("the totalPoints value is :" + " ", totalPoints)
        setTotal(totalPoints)
        setFormSubmit(true)
        setStore(true)

        // api call for FORM POST MEthod
        try {
            const response = await fetch("/api/saveFormData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data, total: totalPoints })
            });
            if (response.ok) {
                console.log("FORM data saved succesfully")
            } else {
                console.error("Error : ", response.statusText)
            }
        } catch (error) {
            console.error("Error :", error)
        }

    }
    return (
        <section className="bg-gradient-to-b from-gray-200 to-gray-800 min-h-screen">
            <div className="text-4xl flex justify-center text-center py-10 space-x-3">
                <p>Total Points Gain's : </p>{formSubmit ? <div className="flex font-extrabold"><p className="text-red-800">{total}</p><p>/46</p></div> : "--no Value--"}
            </div>
            <div className="flex justify-center text-3xl px-2 py-2 bg-black text-white tracking-wider">
                {store ? <p className="text-green-400">Succesfully Calculated Now you can SAVE IT !!!</p> : <p className="text-red-400">Please Select all the fields</p>}
            </div>
            <div className="container flex mx-auto my-auto px-6 py-6">
                <form className="grid grid-rows-10 space-y-4" onSubmit={handleSubmit}>
                    <div className=" text-xl ">
                        <label htmlFor="builder" className="font-bold uppercase px-4">1. Builder Reputation :</label>{" "}
                        <select className="px-4"
                            id="builder"
                            value={data.builder}
                            name="builder"
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select points</option>
                            <option value={1} >1 points</option>
                            <option value={2}>2 points</option>
                            <option value={3}>3 points</option>
                        </select>
                    </div>
                    <div className=" text-xl">
                        <label htmlFor="area" className="font-bold uppercase px-4">2. Carpet Area</label>{" "}
                        <select className="px-4"
                            id="area"
                            value={data.area}
                            name="area"
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select points</option>
                            <option value={1}>650 - 675 (1 points)</option>
                            <option value={2}>675 - 700 (2 points)</option>
                            <option value={3}>700 - 725 (3 points)</option>
                            <option value={4}>725 - 750 (4 points)</option>
                            <option value={5}>750 - 800 (5 points)</option>
                        </select>
                    </div>
                    <div className=" text-xl">
                        <label htmlFor="quality" className="font-bold uppercase px-4">3. Construction quality</label>{" "}
                        <select className="px-4"
                            id="quality"
                            name="quality"
                            value={data.quality}
                            onChange={handleChange}>
                            <option value="" disabled>Select points</option>
                            <option value={1}> 1 points</option>
                            <option value={2}> 2 points</option>
                            <option value={3}> 3 points</option>
                            <option value={4}> 4 points</option>
                            <option value={5}> 5 points</option>
                        </select>
                    </div>
                    <div className=" text-xl">
                        <label htmlFor="design" className="font-bold uppercase px-4">4. Design</label>{" "}
                        <select className="px-4"
                            id="design"
                            name="design"
                            value={data.design}
                            onChange={handleChange}>
                            <option value="" disabled>Select points</option>
                            <option value={1}> 1 points</option>
                            <option value={2}> 2 points</option>
                            <option value={3}> 3 points</option>
                            <option value={4}> 4 points</option>
                            <option value={5}> 5 points</option>
                        </select>
                    </div>
                    <div className=" text-xl">
                        <label htmlFor="aminities" className="font-bold uppercase px-4">5. Aminities</label>{" "}
                        <select className="px-4"
                            id="aminities"
                            name="aminities"
                            value={data.aminities}
                            onChange={handleChange}>
                            <option value="" disabled>Select points</option>
                            <option value={1}> (1 points)</option>
                            <option value={2}> (2 points)</option>
                            <option value={3}> (3 points)</option>
                        </select>
                    </div>
                    <div className=" text-xl">
                        <label htmlFor="delivery" className="font-bold uppercase px-4">6. Delivery Time</label>{" "}
                        <select className="px-4"
                            id="delivery"
                            name="delivery"
                            value={data.delivery}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select points</option>
                            <option value={1}> (1 points)</option>
                            <option value={2}> (2 points)</option>
                            <option value={3}> (3 points)</option>
                            <option value={4}> (4 points)</option>
                            <option value={5}> (5 points)</option>
                        </select>
                    </div>
                    <div className=" text-xl">
                        <label htmlFor="location" className="font-bold uppercase px-4">7. Location</label>{" "}
                        <select className="px-4"
                            id="location"
                            name="location"
                            value={data.location}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select points</option>
                            <option value={1}> (1 points)</option>
                            <option value={2}> (2 points)</option>
                            <option value={3}> (3 points)</option>
                            <option value={4}> (4 points)</option>
                            <option value={5}> (5 points)</option>
                        </select>
                    </div>
                    <div className=" text-xl">
                        <label htmlFor="rent" className="font-bold uppercase px-4">8. Rent/yeild</label>{" "}
                        <select className="px-4"
                            id="rent"
                            name="rent"
                            value={data.rent}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select points</option>
                            <option value={1}> (1 points)</option>
                            <option value={2}> (2 points)</option>
                            <option value={3}> (3 points)</option>
                            <option value={4}> (4 points)</option>
                            <option value={5}> (5 points)</option>
                        </select>
                    </div>
                    <div className=" text-xl">
                        <label htmlFor="neighbourhood" className="font-bold uppercase px-4">neighbourhood</label>{" "}
                        <select className="px-4"
                            id="neighbourhood"
                            name="neighbourhood"
                            value={data.neighbourhood}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select points</option>
                            <option value={1}> (1 points)</option>
                            <option value={2}> (2 points)</option>
                            <option value={3}> (3 points)</option>
                            <option value={4}> (4 points)</option>
                            <option value={5}> (5 points)</option>
                        </select>
                    </div>
                    <div className=" text-xl ">
                        <label htmlFor="cost" className="font-bold uppercase px-4">cost (Lakhs)</label>{" "}
                        <select className="px-4"
                            id="cost"
                            value={data.cost}
                            name="cost"
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select points</option>
                            <option value={5}>60 - 65 (5 points)</option>
                            <option value={4}>65 - 68 (4 points)</option>
                            <option value={3}>68 - 72 (3 points)</option>
                            <option value={2}>72 - 75 (2 points)</option>
                            <option value={1}>75 - 78 (1 points)</option>
                        </select>
                    </div>
                    <div className=" flex space-x-6">
                        {store ?
                            <button type="submit" className="px-4 bg-red-800 text-white text-2xl py-2 rounded-xl">Save Details</button>
                            :
                            <button type="submit" className="px-4 bg-blue-800 text-white text-2xl py-2 rounded-xl">Total Points</button>
                        }

                    </div>
                </form>
            </div>
        </section>
    )
}

export default Forms