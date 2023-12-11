import { Link } from "react-router-dom"

const Data = () => {
    return (
        <div>
            Body Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ad sequi dolorem ipsa nihil quibusdam saepe consectetur, a quis accusamus blanditiis repudiandae praesentium laborum sint sed harum rerum debitis odio.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, temporibus, autem nostrum incidunt delectus exercitationem neque aspernatur eligendi et laborum rerum quaerat mollitia quam officiis consequatur eaque asperiores! Consequatur itaque, quae laborum nostrum qui ipsam ex voluptas dolorum aliquid incidunt, dolorem eius vitae molestias. Maiores consequatur quas enim, tempore aliquid esse doloribus eaque laborum distinctio numquam quibusdam quis ipsa inventore. Animi, voluptatem delectus. Eligendi ullam quis, porro dicta itaque mollitia amet quod qui! Dicta iste beatae nobis cum? Atque enim debitis vitae delectus, repellendus corrupti reiciendis omnis magni odio dolor vero quam perspiciatis soluta tempora fugit sit, maxime commodi ducimus eligendi animi praesentium! Totam, deleniti! Laboriosam, magnam qui. Odio consectetur dolore dignissimos quaerat architecto iure aliquid. Facere impedit aspernatur delectus sapiente nemo dolorem, officiis quis. Ipsam debitis voluptatum, nemo quos beatae doloribus reiciendis? Cum sunt quasi excepturi modi in distinctio suscipit autem ipsa repudiandae accusantium facere eaque pariatur odit officiis eum laboriosam, animi praesentium! Nemo saepe repellendus consectetur eum quasi laborum laboriosam natus maxime ratione. At, amet corporis! Placeat laborum fuga amet error quaerat optio quisquam beatae quibusdam hic natus, quae dolores tempore eos animi nihil repellendus quasi numquam facilis, debitis vitae cupiditate. Eum aspernatur qui officia illum autem cupiditate quibusdam expedita excepturi doloribus in quidem perspiciatis ut doloremque ad tenetur nemo, iure, odit ab cum voluptate dolor! Molestiae possimus sint, iste debitis quis odit labore temporibus rem nesciunt esse. Non error inventore illum eius pariatur sit eaque ipsa vitae dolorem cupiditate saepe eveniet quidem maxime consectetur culpa sunt modi id, et, dolore dolorum quas ab soluta officiis explicabo! Magni, iure omnis praesentium harum molestias ad repellendus fugiat excepturi, sed, inventore ipsa commodi fugit quo rem quidem itaque? Doloremque optio perspiciatis est tempora ullam eos earum magni dolor, nemo voluptas, voluptatem facilis possimus debitis sed fugiat? Cumque architecto aut, iusto aspernatur ipsam veritatis. Vitae ab, nihil minima labore sed molestias laboriosam illum aspernatur optio quaerat, enim voluptates error quod reiciendis culpa corrupti pariatur mollitia, distinctio quisquam magnam. Nihil et, debitis porro nulla obcaecati molestiae error sit! Consequuntur earum enim quam aliquam, veniam provident odit eaque, hic, voluptas velit sed reiciendis ea. Dolores soluta optio labore in itaque consequuntur cumque hic exercitationem quis tempora. Perspiciatis et, veritatis possimus, ex ab rem voluptatum facere dolore excepturi aspernatur, earum officia ipsum est libero commodi quidem dicta magnam optio molestiae sed totam? Eaque saepe enim at id accusantium magnam culpa, atque, delectus quibusdam sunt ipsum reiciendis sequi nobis libero voluptatibus ut? Quisquam, hic aut nisi dicta ab enim provident omnis id, ex placeat earum laborum rem obcaecati consequatur modi amet reprehenderit dolores quas optio a, repellendus odio officia repellat sapiente. Fugit nam temporibus asperiores quis eaque. Repudiandae numquam debitis soluta, sed eligendi nam similique quaerat et esse impedit deleniti. Quisquam aliquam iusto libero maxime enim esse fugit aut voluptas expedita sunt, doloribus perferendis eaque voluptatem nulla, nesciunt, cumque voluptates. Nobis voluptas corrupti necessitatibus inventore minus excepturi incidunt iste nulla, tenetur quam. Blanditiis consequuntur aspernatur saepe voluptas obcaecati, eum ab ducimus fuga quas adipisci illo!
        </div>
    )
}

const Body = () => {
    return (
        <div className="flex-grow m-3 pt-4">

            <div className="bg-reed-200 mx-auto max-w-3xl">

                {/* body */}
                <span class="text-4xl box-decoration-slice  bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                    Fill &<br />
                    Feel
                </span>
                <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                    Hello<br />
                    World
                </span>

                <form>
                    <div className="flex flex-col gap-6 justify-center">
                        <div className="flex justify-center gap-2">
                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">first name</label>
                                <br />
                                <input type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="first name..." />

                            </div>
                            <div className="flex-grow">
                                <label htmlFor="lname">last name</label>
                                <br />
                                <input type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="last name..." />
                            </div>
                        </div>
                        {/* <div>
                            <input type="text" className="w-full p-3 border-solid border-2 border-zinc-300 rounded-md focus:shadow-xl hover:shadow-lg" placeholder="first name..." />
                        </div> */}
                        <div className="flex justify-center gap-2">
                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">roll number</label>
                                <br />
                                <input type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="roll number..." />

                            </div>
                            <div className="flex-grow">
                                <label htmlFor="lname">registration number</label>
                                <br />
                                <input type="number" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="registration number..." />
                            </div>
                        </div>

                        <div className="flex justify-center gap-2">
                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">branch</label>
                                <br />


                                <select name="language" id="language" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg h-[68%] cursor-pointer">
                                    <option value="cse">CSE</option>
                                    <option value="it">IT</option>
                                    <option value="me">ME</option>
                                    <option value="eee">EEE</option>
                                </select>



                            </div>
                            <div className="flex-grow">
                                <label htmlFor="lname">phone number</label>
                                <br />
                                <input type="number" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="phone number..." />
                            </div>
                        </div>

                        <div className="flex justify-center gap-2">
                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">gender</label>
                                <br />


                                <select name="language" id="language" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg h-[68%] cursor-pointer">
                                    <option value="cse">male</option>
                                    <option value="it">female</option>
                                    <option value="me">others</option>

                                </select>



                            </div>
                            <div className="flex-grow">
                                <label htmlFor="lname">Date of birth</label>
                                <br />
                                <input type="date" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg cursor-pointer" placeholder="Date of birth..." />
                            </div>
                        </div>

                        <div className="flex justify-center gap-2">

                            <div className="flex-grow">
                                <label htmlFor="lname">district</label>
                                <br />
                                <input type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="dist..." />
                            </div>

                            <div className="flex-grow">
                                <label htmlFor="lname">city</label>
                                <br />
                                <input type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="city..." />
                            </div>

                            <div className="flex-grow">
                                <label htmlFor="lname">ZIP code</label>
                                <br />
                                <input type="number" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="zip" />
                            </div>
                        </div>

                        <div className="flex justify-center gap-2">
                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">Email</label>
                                <br />


                                <input type="email" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg " placeholder="email..." />


                            </div>
                            <div className="flex-grow">
                                <label htmlFor="lname">Instagram Username</label>
                                <br />
                                <input type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg " placeholder="insta_id" />
                            </div>
                        </div>

                        <div className="justify-center gap-2 flex">



                            <label htmlFor="">Mention Your Hobby</label>
                            <br />

                            <input type="text" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg" placeholder="type here..." />


                        </div>


                        <div className="bg-red-200t flex justify-center gap-3">



                            <div className="flex-grow bg-slatte-400">
                                <label htmlFor="fname">Current Semester</label>
                                <br />


                                <input type="number" className="p-3 border-solid border-2 border-zinc-300 rounded-md w-full focus:shadow-xl hover:shadow-lg " placeholder="sem.." />


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
                                ><Link to='/thankyou'>Submit</Link></button>


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