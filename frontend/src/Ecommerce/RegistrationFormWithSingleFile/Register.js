import { useEffect, useState, useRef } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import registerStyle from './Register.module.css'

const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const GMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const username_REGEX = /^[a-zA-Z]{3,30}$/;
const PINCode_REGEX = /^\d{6}$/;


const Register = () => {
    const usernameRef = useRef();
    const gmailRef = useRef();
    const errRef = useRef();


    // const [user,setUser]=useState('');
    // const [validName,setValidName]=useState(false);
    // const [userFocus,setUserFocus]=useState(false);
    const [customer_name, setUsername] = useState('');
    const [validUsername, setvalidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [gmail, setGmail] = useState('');
    const [validGmail, setValidGmail] = useState(false);
    const [gmailFocus, setGmailFocus] = useState(false);

    const [pincode, setPincode] = useState('');
    const [validPincode, setValidPincode] = useState(false);
    const [pincodeFocus, setPincodeFocus] = useState(false);

    const [address, setAddress] = useState('');

    const [country, setCountry] = useState('');

    const [allCountry, setAllcountry] = useState([]);

    const [allState, setAllState] = useState([]);
    const [state, setState] = useState([]);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [activeTerms, setActiveTerms] = useState(false);
    const [validActiveTerms, setValidActiveTerms] = useState(false);
    const [ActiveTermsFocus, setActiveTermsFocus] = useState(false);

    const [enableBtn, setEnableBtn] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);


    useEffect(() => {
        console.log("I am here");
        console.log(country);
        usernameRef.current.focus();
        axios.get("http://localhost:8090/countrys")
            .then((response) => {
                let country = response.data;
                var value = country.map((countryDetails, index) => {
                    return countryDetails;
                })
                var value2 = value.map((countryName) => {
                    //console.log(io2s)
                    return countryName.io2s;
                })

                setAllcountry(value2);
            })
            .catch((error) => { console.log(error) })
    }, [])

    useEffect(() => {
         if (country !== "") {
            axios.get(`http://localhost:8090/state/${country}`)
                .then((res) => {
                    console.log(country);
                    let allStatesName = res.data;
                    let stateName= allStatesName.map((stateName)=>{
                        return stateName.stateNme;
                    })
                    setAllState(stateName)
                  //  console.log(state)
                }).catch((error) => {
                    console.log(error);
                })
         }

    }, [country]);


    useEffect(() => {
        const emailValidation = GMAIL_REGEX.test(gmail);
        setValidGmail(emailValidation)

    }, [gmail]);


    useEffect(() => {
        // const pincodeValidation = PINCode_REGEX.test(pincode);
        // console.log(pincodeValidation)
        console.log(pincode.length);
        if (pincode.length == 6) {
            setValidPincode(true);
        }
        console.log(validPincode)
    }, [pincode])

    useEffect(() => {

        const usernameValidation = username_REGEX.test(customer_name);
        console.log(usernameValidation)
        setvalidUsername(usernameValidation);

    }, [customer_name])


    useEffect(() => {
        const passwordValidation = PASS_REGEX.test(pwd);
        setValidPwd(passwordValidation);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        console.log(validPincode, validGmail, validUsername, validPwd)
        if (validPincode === true && validGmail === true
            && validUsername === true && validPwd === true) {
            console.log("In setEnable useEffect nikku");
            setEnableBtn(true);
        }

    }, [validPincode, validUsername, validGmail, validPwd])
    //[pincode,  gmail, address, customer_name, country, state, pwd])

    useEffect(() => {
        setErrMsg('');
    }, [customer_name, pwd, matchPwd]);

    function saveData(event) {

        event.preventDefault();
        console.log(customer_name)
        console.log(country, state)

        const registrationDetails = {
            active_terms:activeTerms,
            address: address,
            country: country,
            customer_name: customer_name,
            gmail: gmail,
            password: pwd,
            pincode: pincode,
            states: state
        };


        axios.post("http://localhost:8090/addcustomer", registrationDetails)
            .then(responce => console.log(responce))
            .catch((e) => {
                console.log(e)
            })
        console.log(registrationDetails);
        setUsername('');
        setGmail('');
        setAddress('');
        setPwd('');
        setMatchPwd('');
        setPincode('')
        setEnableBtn(false);
    }

    return (
        <section className={registerStyle.container}>
            <p aria-live="assertive" ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
            <h1>Register</h1>
            <form className={registerStyle.registerForm} >

                <label >
                    username:
                </label>
                <input type="text"
                    onChange={(e) => setUsername(e.target.value)}

                    value={customer_name}
                    ref={usernameRef}
                    autoComplete="off"
                    required
                    aria-invalid={validUsername ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUsernameFocus(true)}
                    onBlur={() => setUsernameFocus(false)} />

                <label htmlFor="gmailname">
                    Gmail:
                    <span className={validGmail ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validGmail || !gmail ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input type="text"
                    onChange={(e) => setGmail(e.target.value)}
                    id="gmailname"
                    value={gmail}
                    ref={gmailRef}
                    autoComplete="off"
                    required
                    aria-invalid={validGmail ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setGmailFocus(true)}
                    onBlur={() => setGmailFocus(false)} />
                <p id="uidnote" className={gmailFocus && gmail &&
                    !validGmail ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Enter valid email.
                </p>

                 <label className={registerStyle.labelName}>
                    Pincode:
                </label>
                <input type="text"
                    onChange={(event) => { console.log(event.target.value); setPincode(event.target.value) }}
                    id="gmailname"
                    value={pincode}
                    autoComplete="off"
                    required
                    aria-invalid={validPincode ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setPincodeFocus(true)}
                    onBlur={() => setPincodeFocus(false)}
                />
                 <label className={registerStyle.labelName}>
                    Address:
                </label>
                <input type="text"
                    onChange={(event) => setAddress(event.target.value)}
                    value={address}
                    id="gmailname"
                    autoComplete="off"
                    required
                    // aria-invalid={validAddress ? "false": "true"}
                    aria-describedby="uidnote"
                // onFocus={() => setAddressFocus(true)}
                // onBlur={() => setAddressFocus(false)}
                />
                 <label className={registerStyle.labelName}>
                    Country:
                </label>
                <select onChange={(e) => setCountry(e.currentTarget.value)}>
                    {allCountry.map((country, index) => (
                        <option value={country} key={index}>
                            {country}
                        </option>
                    ))}
                </select>
                <lable>
                    State:
                </lable>

                <select id="gmailname" onChange={(e) => setState(e.currentTarget.value)}>
                    {allState.map((state, index) => (
                        <option value={state} key={index}>
                            {state}
                        </option>
                    ))}
                </select>

                <label htmlFor="password">
                    Password:
                    <span className={validPwd ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
             <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
             </p>

                <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                </p>
                <label className={registerStyle.labelName}>
                    Active Terms
                </label>
                <input type="checkbox" required onChange={(e) => setActiveTerms(e.target.checked)} />

                <button className={registerStyle.submitButton} disabled={!enableBtn ? true : false} onClick={saveData}>Sign Up</button>
            </form>
            <p>
                Already registered?<br />
                <span className="line">
                    {/*put router link here*/}
                    <a className={registerStyle.alreadyRegistered} href="/">Sign In</a>
                </span>
            </p>
        </section>

    )
}
export default Register;