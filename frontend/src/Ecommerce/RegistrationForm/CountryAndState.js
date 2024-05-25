import { useEffect, useState, useRef } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CountryAndState(props){


    const [country, setCountry] = useState('');
    // const [validGmail, setValidGmail] = useState(false);
    // const [gmailFocus, setGmailFocus] = useState(false);

    const [state, setState] = useState('');
    // const [validFirstName, setValidFirstName] = useState(false);
    // const [FirstNameFocus, setFirstNameFocus] = useState(false);

    useEffect(()=>{}, [country, state])
    return <>

        <lable>
            Country:
        </lable>
        <select id="gmailname" onChange={(e) => setCountry(e.currentTarget.value)} >
                <option value="India" >India</option>
                <option value="Uk">Uk</option>
                <option value="Srilanka">Srilanka</option>
                <option value="Usa">Usa</option>
        </select>
        <lable>
            State:
        </lable>
        <select id="gmailname" onChange={(e) => setState(e.currentTarget.value)}>
                <option value="India">India</option>
                <option value="Uk">Uk</option>
                <option value="Srilanka">Srilanka</option>
                <option value="Usa">Usa</option>
        </select>

    </>
}
export default CountryAndState;