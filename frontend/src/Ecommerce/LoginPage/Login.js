// Login.js
import { useRef, useState, useEffect } from 'react';
import loginStyle from './Login.module.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  let emailFocus = useRef();
  const navigate = useNavigate();

  let [pwd, setPwd] = useState('');
  let [email, setEmail] = useState('');

  let [submit, setSubmit] = useState(false);
  let [enableButton, setEnableButton] = useState(false);

  useEffect(() => {
    emailFocus.current.focus();
  }, []);

  useEffect(() => {
    if (email !== '' && pwd !== '') {
      setEnableButton(true);
    }
  }, [email, pwd]);

  useEffect(() => {
    if (submit) {
      axios
        .get(`http://localhost:8090/login/${email}/${pwd}`)
        .then((response) => {
          console.log(response.data);
          if (response.data === true) {
            setEmail('');
            setPwd('');
            setSubmit(false);
            console.log('Nikku In the if');
            navigate('/home');
          } else {
            setEmail('');
            setPwd('');
            setSubmit(false);
            alert('You have entered the wrong email or password');
          }
        })
        .catch((error) => {
          setSubmit(false);
          console.log(error);
        });
    }
  }, [submit]);

  const display = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <>
      <form className={loginStyle.container}>
        <div className={loginStyle.formGroup}>
          <label htmlFor="user">User:</label>
          <input
            className={loginStyle.inputField}
            ref={emailFocus}
            type="text"
            id="user"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={loginStyle.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            className={loginStyle.inputField}
            type="password"
            id="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <div className={loginStyle.buttonGroup}>
          <button
            type="submit"
            disabled={!enableButton}
            onClick={display}
            className={loginStyle.submitButton}
          >
            Login
          </button>
          <Link to="/registration" className={loginStyle.registerButton}>
            Register
          </Link>
        </div>
      </form>
    </>
  );
}

export default Login;
