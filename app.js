import { useState } from "react"
import googlePlayLogo from "./images/google-play-download-icon.svg.png"
import appleStoreLogo from "./images/app-store-download-icon.svg.png"

const App = () => {
	const [user, setUser ] = useState (null) 

	const updateUser = (e) => {
		setUser({...user, e.target.name : e.target.value })
	}

	console.log(user)

	const registerUser = async (e) => {
		e.preventDefault()
		try {
			const options = {
				method: "POST",
				body: json.Stringify(user),
				headers: {
					"Content-Type": "application/json"
				}
			}
			const response = await fetch ("http://localhost:8000/register", options)
			const data = await.response.json()
			console.log(data)
			
			} catch (error) {
			console.error(error)
		}
	}

    return(
        <div className="auth-modal">
			<div className="close-icon">ⓧ</div>
			<h2>Sign Up</h2>
			<p>
				By signing up you agree to our terms and conditions. Learn about our Privacy Police before clicking submit.
			</p>
			<form onSubmit={registerUser}>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="email"
					onChange={updateUser}
					value={user?.email}
				/>
				<input
					type="tel"
					id="tel"
					name="tel"
					placeholder="Phone Number"
					onChange={updateUser}
					value={user?.tel}
				/>
				<lable>
					<input type="checkbox" required/>
					I agree to the terms and Conditions. 
				</label>
				<input type="submit" className="form-botton"/>
			</form>

			<hr/>

			<h2>download the app</h2>

			<div className="link-container">
				<a href="http://play.google.com/store">
					<img src={googlePlayLogo} alt="google play icon"/>
				</a>
				<a href="http://www.apple.com/store">
					<img src={appStoreLogo} alt="apple store icon"/>
				</a>
			</div>

        </div>
    )
}

export default App