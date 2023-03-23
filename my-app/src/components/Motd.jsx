import { useEffect } from "react";
import { useState } from "react";

export function Motd() {
    const [data, setData] = useState("");
    const [dataMessage, setDataMessage] = useState(null);
    const [shouldFetch, setShouldFetch] = useState(true);
    function handleFetch() {

        setShouldFetch(true);
        if (data === null) {
            return <div>Loading message</div>
        }
        setDataMessage(`Message of the day: "${data.message}"`);
    }

    useEffect(() => {
        if (shouldFetch === true) {
        fetch("/assets/data.json")
        .then(response => {
            return response.json();

        })
        .then(json => {
            setData(json);
            setShouldFetch(false);
        });
    }
    },[shouldFetch]);   


   
    console.log(data);
    return (
    <div>
    <button type="button" onClick={handleFetch}>FETCH</button>
        <div>{dataMessage}</div>
    </div>
    );
}