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
            <div class="text-center antialiased bg-purple-700 text-white lg:h-32">
                    <p class="underline lg:pt-6 lg:text-2xl">Clients</p>
                <Link to="Form">
                    <p class="lg:text-2xl lg:mt-1">New client</p>
                </Link>
            </div>
            <div class="grid grid-cols-2">
                <div class="flex items-center justify-center flex-col">
                    <p class="text-center text-purple-700 font-semibold lg:text-2xl">First name</p>
                    <input class="text-center"
                        type="text"
                        onChange={(e) => {setfirstName(e.target.value)}}/>
                </div>
                <div class="flex items-center justify-center flex-col">
                    <p class="text-center text-purple-700 font-semibold lg:text-2xl">Last name</p>
                    <input class="text-center"
                        type="text"
                        onChange={(e) => {setlastName(e.target.value)}}/>
                </div>
            </div>
            <div class="text-center">{"Welcome, "+firstName+" "+lastName}</div>
        </form>
    )
}

export default Data;