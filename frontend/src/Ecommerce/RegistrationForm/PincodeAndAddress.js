import { useState } from "react"

function PincodeAndAddress(){

//    const PINCODE_REGEX = /^{6}$/;

    let[pincode, setPincode] = useState(0);
    let[validPincode, setValidPincode] = useState(false);
    let[pincodeFocus, setPincodeFocus] = useState(false);

    let[address, setAddress] = useState(0);
    let[validAddress, setValidAddress] = useState(false);
    let[addressFocus, setAddressFocus] = useState(false);

    return <>
        <label>
            Pincode:
        </label>
            <input type="text"
                onChange={(event)=> setPincode(event.target.value)}
                id="gmailname"
                autoComplete="off"
                required
                aria-invalid={validPincode ? "false": "true"}
                aria-describedby="uidnote"
                onFocus={() => setPincodeFocus(true)}
                onBlur={() => setPincodeFocus(false)}
            />  
        <label>
            Address:
        </label>
            <input type="text"
                onChange={(event)=> setAddress(event.target.value)}
                id="gmailname"
                autoComplete="off"
                required
                aria-invalid={validAddress ? "false": "true"}
                aria-describedby="uidnote"
                onFocus={() => setAddressFocus(true)}
                onBlur={() => setAddressFocus(false)}
            />  
    </>
}

export default PincodeAndAddress; 