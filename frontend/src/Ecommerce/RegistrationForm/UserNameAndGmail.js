import { useEffect, useState, useRef } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const gmail_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,25}$/;

const UserNameAndGmail = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const gmailRef = useRef();
    const errRef = useRef();

    const [gmail, setGmail] = useState('');
    const [validGmail, setValidGmail] = useState(false);
    const [gmailFocus, setGmailFocus] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [FirstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        console.log("I am herer");
        firstNameRef.current.focus();
    }, [])

    useEffect(() => {
        const emailValidation = gmail_REGEX.test(gmail);
        console.log(emailValidation);
        setValidGmail(emailValidation)
    }, [gmail]);


    return (
        <>
            <label htmlFor="confirm_pwd">
                FirstName:
            </label>
            <input type="text"
                onChange={(e) => setFirstName(e.target.value)}
                id="gmailname"
                ref={firstNameRef}
                autoComplete="off"
                required
                aria-invalid={validFirstName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setFirstNameFocus(true)}
                onBlur={() => setFirstNameFocus(false)} />
            <label htmlFor="confirm_pwd">
                LastName:
            </label>
            <input type="text"
                onChange={(e) => setLastName(e.target.value)}
                id="gmailname"
                ref={lastNameRef}
                autoComplete="off"
                required
                aria-invalid={validLastName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => setLastNameFocus(false)} />
            <label htmlFor="gmailname">
                Gmail:
                <span className={validLastName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validLastName || !gmail ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input type="text"
                onChange={(e) => setGmail(e.target.value)}
                id="gmailname"
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
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
            </p>

        </>

    )
}
export default UserNameAndGmail;