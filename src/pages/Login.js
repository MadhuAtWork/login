import React from 'react';
import { useState, useEffect , useHistory,useRef} from "react";
import Logo from '../assets/img/Jana-Small-Finance-logo4.jpg';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';


function Login() {

	const [inputs, setInputs] = useState({});
	const [error, seterror] = useState({});
	const [page, setpage] = useState(false);
	const userref = useRef();
	const passref = useRef();
	const Navigate = useNavigate()

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({ ...values, [name]: value }))
	}

	const handleSubmit = async (event) => {

		event.preventDefault();		
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				"username": inputs.username,
				"password": inputs.password
			})
		};
		await fetch('http://192.168.0.58:8090/login', requestOptions)
			.then(response => response.json())
			.then((response) => {
				console.log(response);
				seterror(response)
				console.log(error)				
			})
			
			var username = userref.current.value;
			var password = passref.current.value;

			if(username === "" || username === null ||username === undefined){
				alert("enter user name")
			} else if(password === "" || password === null || password === undefined) {
				alert("enter upassword")
			}else{
				alert("success")
		event.preventDefault();		
			
			// window.location.href = 'http://localhost:3000//Dashboard';
			Navigate("/dashboard");
	     setpage(<Dashboard></Dashboard>);
			}
	}
	return (
		<>
			<div className="hero-img  login-page">
		
				<div className="login-content">
					<div className='row h-100'>
						<div className="col-6 d-flex justify-content-center align-items-center h-100">
							<div className="card rounded  p-4 shadow-lg">
								<div className="text-center mb-4">
									<img className="" src={Logo} />
								</div>
								<span>{error.message}</span>
								<form action="login" className="form" onSubmit={handleSubmit}>
									<div className="input-div one mt-3">
										<div className="i">
										<FontAwesomeIcon icon={faUser}/> 
										</div>
										<div className="div">
											<input type="text" className="form-control" id="username" name="username"
												autoComplete="off" maxLength="50" minlenght="1" placeholder="User Name"  ref={userref} value={inputs.username || ""}
												onChange={handleChange} />
										</div>
									</div>
									<div className="input-div pass mb-4">
										<div className="i">
										<FontAwesomeIcon icon={faLock}/> 
										</div>
										<div className="div">
											<input type="password" className="form-control" id="password"
												name="password" autoComplete="off" maxLength="30" minlenght="8" placeholder="Password" ref={passref} value={inputs.password || ""}
												onChange={handleChange} />
										</div>
									</div>
									<input type="submit" value="Login" className="btn text-center my-2" id="loginSubmit"></input>
									
								</form>

							</div>
						</div>
						<div className="col-6 d-flex justify-content-center align-items-center h-100">
						</div>
					</div>
				</div>
			</div>
 
	 <div>
			  {
				page ? <Dashboard></Dashboard> :""

				}   
			</div> 
		
		</>
	);
}

export default Login;