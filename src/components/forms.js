import { useEffect, useState } from "react"

const Forms = () => {

    const [builderName, setBuilderName] = useState("")
    const [formDatas, setFormDatas] = useState([])
    const [total, setTotal] = useState(0)
    const [formSubmit, setFormSubmit] = useState(false)
    const [store, setStore] = useState(false)
    const [data, setData] = useState({
        // builderName:'',
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


    //save
    const handleSave = async () => {
        console.log("handleSave calling", builderName, total, data)
        try {
            const response = await fetch("/api/saveFormData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data, builderName: builderName, total: total })
            });
            if (response.ok) {
                console.log("FORM data saved succesfully")
            } else {
                console.error("Error : ", response.statusText)
            }
        } catch (error) {
            console.error("Error :", error)
        }
        setStore(false)
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        console.log("name", name, value)
        setData((prev) => ({
            ...prev, [name]: value
        }))
    }

    useEffect(() => {
    }, [formDatas])
    const handleUpdate = async () => {
        try {
            const response = await fetch("/api/getFormData")

            if (response.ok) {
                const respoValue = await response.json()
                // console.log("dhaha", respoValue)
                console.log("thala", respoValue.formData)
                const result = await respoValue.formData
                console.log("ttttt", typeof (result))
                setFormDatas(result)
            } else {
                console.error("Error : ", response.statusText)
            }

            // setFormData(respoValue)

        } catch (error) {
            console.log("Errror:", error)
        }
        setFormSubmit(false)

    }



    const handleSubmit = (e) => {
        e.preventDefault()

        for (let key in data) {
            if (data[key] === '') {
                setFormSubmit(false)
                return;
            }
        }

        console.log("got data", data)
        // const nameExtract = Object.values(data).pop()
        // console.log("array rem", nameExtract)
        // let newValue =  Object.values(data).filter(item => item == item. )
        let totalPoints = Object.values(data).reduce((acc, value) => acc + parseInt(value), 0)
        console.log("the totalPoints value is :" + " ", totalPoints)
        console.log("finding", typeof (totalPoints))
        setTotal(totalPoints)
        setFormSubmit(true)
        setStore(true)

        // api call for FORM POST MEthod

    }


    // if (formSubmit) {
    //     useEffect(() => {
    //         const fetchData = async () => {

    //         }
    //         fetchData()
    //     }, [])
    // }

    return (
        <section className="bg-gradient-to-b from-gray-200 to-gray-800 min-h-screen">
            <div className="text-4xl flex justify-center text-center py-10 space-x-3">
                <p>Total Points Gain's : </p>{store ? <div className="flex font-extrabold"><p className="text-red-800">{total}</p><p>/46</p></div> : "--no Value--"}
            </div>
            <div className="flex justify-center text-3xl px-2 py-2 bg-black text-white tracking-wider">
                {store ? <p className="text-green-400">Succesfully Calculated Now you can SAVE IT !!!</p> : <p className="text-red-400">Please Select all the fields</p>}
            </div>

            <div className="container grid grid-cols-2 mx-auto my-auto px-6 py-6">

                <form className="grid grid-rows-10 space-y-4 col-span-1" onSubmit={handleSubmit}>
                    <div className="text-red-400"> after calculate <p className="text-green-600">click on UPDATE then SAVE DETAILS to Save in DATABASE</p></div>
                    <div className=" text-xl ">
                        <label htmlFor="builderName" className="font-bold uppercase px-4">Enter Builder Name :</label>{" "}
                        <input className="px-4"
                            placeholder="enter builder name"
                            id="builderName"
                            value={builderName}
                            name="builderName"
                            onChange={(e) => setBuilderName(e.target.value)}
                        >

                        </input>
                    </div>

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
                            <option value={1}>after 2.5 yr(1 points)</option>
                            <option value={2}>before 2.4 yr(2 points)</option>
                            <option value={3}>within 2 yr (3 points)</option>
                            <option value={4}>within 1 yr(4 points)</option>
                            <option value={5}>within 6 months (5 points)</option>
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
                            <option value="" disabled> Select points</option>
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
                        </select>
                    </div>
                    <div className=" text-xl">
                        <label htmlFor="neighbourhood" className="font-bold uppercase px-4">9. neighbourhood</label>{" "}
                        <select className="px-4"
                            id="neighbourhood"
                            name="neighbourhood"
                            value={data.neighbourhood}
                            onChange={handleChange}
                        >
                            <option value="" disabled> Select points</option>
                            <option value={1}> (1 points)</option>
                            <option value={2}> (2 points)</option>
                        </select>
                    </div>
                    <div className=" text-xl ">
                        <label htmlFor="cost" className="font-bold uppercase px-4">10. cost (Lakhs)</label>{" "}
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
                        {formSubmit ?

                            <>
                                <button onClick={handleSave} className="px-4 bg-red-800 text-white text-2xl py-2 rounded-xl">Save Details</button>
                            </>
                            :
                            <>
                                <button type="submit" className="px-4 bg-blue-800 text-white text-2xl py-2 rounded-xl">Total Points</button>
                            </>

                        }
                        <button onClick={handleUpdate} className="px-4 py-2 bg-yellow-600 rounded-2xl text-2xl text-white">Update</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col bg-orange-200 px-4 py-4 justify-center">
                <div>Data Save Lists !!</div>
                <div className="flex flex-wrap justify-center">
                    {formDatas.length >= 0 && formDatas.map((item, idx) => (
                        <div className="bg-gray-500 text-white text-lg px-2 my-4 gap-2  w-full">
                            <ul key={idx} className="grid sm:grid-cols-6  grid-cols-4 grid-rows-3 sm:grid-rows-2   gap-4">
                                <li> <p className="font-extrabold text-2xl text-amber-400">{item?.builderName}</p></li>
                                <li className="text-red-500 font-bold">builder:
                                    <p className="text-black font-bold">{item?.builder} rating</p>
                                </li>
                                <li className="text-red-500 font-bold">area:
                                    <p className="text-black font-bold">
                                        {item?.area} rating
                                    </p>
                                </li>

                                <li className="text-red-500 font-bold">quality: <p className="text-black font-bold">{item?.quality} rating</p></li>
                                <li className="text-red-500 font-bold">design: <p className="text-black font-bold">{item?.design} rating</p></li>
                                <li className="text-red-500 font-bold">aminities: <p className="text-black font-bold">{item?.aminities} rating</p></li>
                                <li className="text-red-500 font-bold">delivery: <p className="text-black font-bold">{item?.delivery} rating</p></li>
                                <li className="text-red-500 font-bold">location: <p className="text-black font-bold">{item?.location} rating</p></li>
                                <li className="text-red-500 font-bold">rent: <p className="text-black font-bold">{item?.rent} rating</p></li>
                                <li className="text-red-500 font-bold">neighbourhood: <p className="text-black font-bold">{item?.neighbourhood} rating</p></li>
                                <li className="text-red-500 font-bold">cost: <p className="text-black font-bold">{item?.cost} rating</p></li>
                                <li className="text-amber-600 font-bold">Total:<p className="text-blue-700 font-bold">{item?.total} rating</p></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Forms