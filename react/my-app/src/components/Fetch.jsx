import { useState, useEffect } from "react";
function Fetch() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/customers')
        .then((res) => res.json())
        .then((info) => setData(data));
    }, []);

    if (data) {
        console.log(data)
    }

    return (
        <>
        {
            data ? 
            (data.map((element) => {
                return (<p>{element.nombre} {element.apellido}</p>)
            }))
            :
            ('No hay datos')
        }
        </>
    );
}

export default Fetch