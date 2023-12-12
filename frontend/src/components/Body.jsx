import { useState } from "react"
import { Link } from "react-router-dom"
import Thankyou from "./Thankyou";







const Body = () => {
    // const api_uri = process.env.API_URI
    const api_uri = "http://127.0.0.1:3000"

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        rollNumber: '',
        regNumber: '',
        branch: '',
        phoneNumber: '',
        gender: '',
        dob: '',
        district: '',
        city: '',
        zipCode: '',
        email: '',
        igusername: '',
        hobby: '',
        currentSem: ''

    });

    const [successSubmit,setSuccessSubmit] = useState(false);
    const [showDetail,setShowDetail] = useState(false)

    

    const handleChange = (e) => {
        const { name, value } = e.target;


        let parsedValue = value

        if (name === 'currentSem' || name === 'regNumber' || name === 'zipCode' || name === 'phoneNumber') parsedValue = parseInt(value, 10);

        setFormData({ ...formData, [name]: parsedValue })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(formData)


        try {
            const response = await fetch(api_uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if(response.ok){
                console.log('[+] received data..')
                const resData = await response.json();
                console.log(resData)
                setSuccessSubmit(true)

            }else{
                console.error('Failed to send form data to the API')
            }
        }catch(err){
            console.error('err: ',err)
        }


    }


    if(successSubmit){
        return <Thankyou firstName={formData.firstName}/>
    }else if(showDetail){
        console.log('details')
    }else


    return (
        <div className="flex-grow m-3 pt-4">

            <div className="bg-reed-200 mx-auto max-w-3xl">

                {/* body */}

                
                <span className="text-4xl box-decoration-slice  bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                    Fill &<br />
                    Feel
                </span>&nbsp;
                <span className="box-decoration-clone bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 ...">
                    Hello<br />
                    World
                </span>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6 justify-center">
                        <div className="flex justify-center gap-2">
                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">First name</label>
                                <br />
                                <input required type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="first name..." name='firstName' onChange={handleChange} />

                            </div>
                            <div className="flex-grow">
                                <label htmlFor="lname">Last name</label>
                                <br />
                                <input required type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="last name..." name="lastName" onChange={handleChange} />
                            </div>
                        </div>
                        {/* <div>
                            <input required type="text" className="w-full p-3 border-solid border-2 border-zinc-300 rounded-md focus:shadow-xl hover:shadow-lg" placeholder="first name..." />
                        </div> */}
                        <div className="flex justify-center gap-2">
                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">Roll number</label>
                                <br />
                                <input required type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="roll number..." name="rollNumber" onChange={handleChange} />

                            </div>
                            <div className="flex-grow">
                                <label htmlFor="lname">Registration number</label>
                                <br />
                                <input required type="number" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="registration number..." name="regNumber" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="flex justify-center gap-2">
                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">branch</label>
                                <br />


                                <select name="branch" id="branch" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg h-[68%] cursor-pointer" onChange={handleChange}>
                                    <option value="cse" selected>CSE</option>
                                    <option value="it">IT</option>
                                    <option value="me">ME</option>
                                    <option value="eee">EEE</option>
                                </select>



                            </div>
                            <div className="flex-grow">
                                <label htmlFor="lname">phone number</label>
                                <br />
                                <input required type="number" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="phone number..." name="phoneNumber" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="flex justify-center gap-2">
                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">gender</label>
                                <br />


                                <select name="gender" id="gender" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg h-[68%] cursor-pointer" onChange={handleChange}>
                                    <option value="cse" selected>male</option>
                                    <option value="it">female</option>
                                    <option value="me">others</option>

                                </select>



                            </div>
                            <div className="flex-grow">
                                <label htmlFor="lname">Date of birth</label>
                                <br />
                                <input required type="date" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg cursor-pointer" placeholder="Date of birth..." name="dob" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="flex justify-center gap-2">

                            <div className="flex-grow">
                                <label htmlFor="lname">district</label>
                                <br />
                                <input required type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="dist..." name="district" onChange={handleChange} />
                            </div>

                            <div className="flex-grow">
                                <label htmlFor="lname">city</label>
                                <br />
                                <input required type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="city..." name="city" onChange={handleChange} />
                            </div>

                            <div className="flex-grow">
                                <label htmlFor="lname">ZIP code</label>
                                <br />
                                <input required type="number" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="zip" name="zipCode" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="flex justify-center gap-2">
                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">Email</label>
                                <br />


                                <input required type="email" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg " placeholder="email..." name="email" onChange={handleChange} />


                            </div>
                            <div className="flex-grow">
                                <label htmlFor="lname">Instagram Username</label>
                                <br />
                                <input required type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg " placeholder="insta_id" name="igusername" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="justify-center gap-2 flex">



                            <label htmlFor="">Mention Your Hobby</label>
                            <br />

                            <input required type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="type here..." name="hobby" onChange={handleChange} />


                        </div>


                        <div className="bg-red-200t flex justify-center gap-3">



                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">Current Semester</label>
                                <br />


                                <input required type="number" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg " placeholder="sem.." name="currentSem" onChange={handleChange} />


                            </div>

                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname"></label>
                                <br />


                                <button type="submit"
                                    className="
                                    bg-slate-600
                                    text-white
                                    w-full
                                    py-3.5

                                    hover:bg-slate-700

                                    hover:text-lg

                                    rounded-md
                                    shadow-xl
                                "
                                >
                                    {/* <Link to='/thankyou'>Submit</Link> */}

                                    Submit
                                </button>


                            </div>

                        </div>
                        <br />

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Body