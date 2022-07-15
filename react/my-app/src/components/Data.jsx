import { useState } from "react";
import { Link } from "react-router-dom";

function Data(){
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [identificationNumber, setidentificationNumber] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    return (
        <form>
            <div class="bg-gradient-to-b from-white to-purple-200">
                <div class="text-center antialiased bg-purple-600 text-white lg:h-32 bg-gradient-to-t from-purple-500 to-purple-700">
                    <p class="underline lg:pt-6 lg:text-2xl">Clients</p>
                    <Link to="Form">
                        <p class="lg:text-2xl lg:mt-1">New client</p>
                    </Link>
                </div>
                <div class="grid grid-cols-2 mt-12">
                    <div class="flex items-center justify-center flex-col">
                        <p class="text-center text-purple-700 font-semibold lg:mt-32 lg:text-3xl">ID</p>
                        <input class="text-center border-gray-500 lg:border-2 lg:pl-40 lg:pr-40 lg:pt-1 lg:pb-1 lg:mb-24 lg:mt-3.5" placeholder="Ex. 31190468"
                            type="text"
                            onChange={(e) => {setfirstName(e.target.value)}}/>
                        <p class="text-center text-purple-700 font-semibold lg:text-3xl">Has spent ($)</p>
                        <input class="text-center border-gray-500 lg:border-2 lg:pl-40 lg:pr-40 lg:pt-1 lg:pb-1 lg:mb-24 lg:mt-3.5" placeholder="Ex. 2,089.00"
                            type="text"
                            onChange={(e) => {setidentificationNumber(e.target.value)}}/>
                        <button class="lg:pt-3 text-center lg:pr-6 lg:pl-5 lg:pb-3 lg:text-2xl text-white bg-purple-600 lg:rounded-2xl lg:mt-6 lg:mb-48" type="submit">Update</button>
                    </div>
                    <div class="flex items-center justify-center flex-col grid grid-cols-3 pb-80">
                        <p class="text-center text-purple-700 font-semibold lg:text-2xl">Name</p>
                        <p class="text-center text-purple-700 font-semibold lg:text-2xl">ID</p>
                        <p class="text-center text-purple-700 font-semibold lg:text-2xl">$</p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Data;