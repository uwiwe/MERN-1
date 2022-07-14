import { useState } from "react";
import { Link } from "react-router-dom";

function Form(){
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [identificationNumber, setidentificationNumber] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    return (
        <form>
            <div class="bg-gradient-to-b from-white to-purple-200">
                <div class="text-center antialiased bg-purple-600 text-white lg:h-32 bg-gradient-to-t from-purple-500 to-purple-700">
                    <Link to="/">
                        <p class="lg:pt-6 lg:text-2xl">Clients</p>
                    </Link>
                    <p class="underline lg:text-2xl lg:mt-1">New client</p>
                </div>
                <div class="grid grid-cols-2 mt-12">
                    <div class="flex items-center justify-center flex-col">
                        <p class="text-center text-purple-700 font-semibold lg:text-3xl">First name</p>
                        <input class="text-center border-gray-500 lg:border-2 lg:pl-40 lg:pr-40 lg:pt-1 lg:pb-1 lg:mb-24 lg:mt-3.5" placeholder="Ex. Juan"
                            type="text"
                            onChange={(e) => {setfirstName(e.target.value)}}/>
                        <p class="text-center text-purple-700 font-semibold lg:text-3xl">ID</p>
                        <input class="text-center border-gray-500 lg:border-2 lg:pl-40 lg:pr-40 lg:pt-1 lg:pb-1 lg:mb-24 lg:mt-3.5" placeholder="Ex. 31190468"
                            type="text"
                            onChange={(e) => {setidentificationNumber(e.target.value)}}/>
                    </div>
                    <div class="flex items-center justify-center flex-col">
                        <p class="text-center text-purple-700 font-semibold lg:text-3xl">Last name</p>
                        <input class="text-center border-gray-500 lg:border-2 lg:pl-40 lg:pr-40 lg:pt-1 lg:pb-1 lg:mb-24 lg:mt-3.5" placeholder="Ex. Rodríguez"
                            type="text"
                            onChange={(e) => {setlastName(e.target.value)}}/>
                        <p class="text-center text-purple-700 font-semibold lg:text-3xl">Date of birth</p>
                        <input class="text-center border-gray-500 lg:border-2 lg:pl-40 lg:pr-40 lg:pt-1 lg:pb-1 lg:mb-24 lg:mt-3.5"
                            type="date"
                            onChange={(e) => {setdateOfBirth(e.target.value)}}/>
                    </div>
                </div>
                <div class="flex items-center justify-center flex-col">
                <p class="text-center text-purple-700 font-semibold lg:text-3xl">Phone number</p>
                        <input class="text-center border-gray-500 lg:border-2 lg:pl-40 lg:pr-40 lg:pt-1 lg:pb-1 lg:mb-24 lg:mt-3.5" placeholder="Ex. +1 (760) 750-3008"
                            type="text"
                            onChange={(e) => {setphoneNumber(e.target.value)}}/>
                                <Link to="/">
                                    <button class="lg:pt-2 text-center lg:pr-3.5 lg:pl-3 lg:pb-2 lg:text-2xl text-white bg-purple-700 lg:rounded-lg lg:mt-6 lg:mb-36" type="submit">Submit</button>
                                </Link>
                </div>
            </div>
        </form>
    )
}

export default Form;