
## Messaging Tutorial SMS Email Push Notifications Full Course

https://www.youtube.com/watch?v=bZFj8GCZmq4&t=518s 


```
Introduction
Targets
The SDK
Sending an Email in Node.js
Sending an SMS in Node.js
Push Notifications
Let's build a Project !
```

Targets
```
Devices 
Phone Numbers
Email Address
```

#### AppWrite
- https://appwrite.io/ 

## Create a Project
```
Messaging 
	Next
Regions
	Frankfurt 
			Create
Auth
Create User
	Name
	Email ( Target )
	Phone
	Password
		Create

Messages
Create Message
	Email
		Subject
			Test Email
		Message 
			Hi 
		Next
		
Select targets to get started 
		Select Targets
			Email Rodrigo	
			rodrigomvsrodrigo@gmail.com ( Select ) 
			Add

SDK ( Software Development Kit )
```

## Visual Studio Code

#### React Project

Terminal
```
npx create-react-app appwrite-messaging
```

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
```

```javascript
index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
```

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
```

```javascript
App.js
const App = () => {
    return(
        <div className="app">

        </div>
    )
}

export default App
```

## Visual Studio Code

Terminal
```
npm i node-appwrite
```

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
package.json
```

```json
package.json
{
  "dependencies": {
    "node-appwrite": "^13.0.0"
  }
}
```

## Visual Studio Code
Terminal
```
npm i 
```

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
server.js
```

```javascript
server.js
const sdk = require('node-appwrite')

const client = new sdk.Client()
    .setEndpoint() // Your API Endpoint
    .setProject() // Your Project ID
    .setKey() // Your secret API Key
```

AppWrite UI
- https://appwrite.io/ 

```
AppWrite Messaging Project ID
66eab5c400233fd76cc7 

Settings 
	API Credentials
	API Endpoint
		https://cloud.appwrite.io/v1 

Integrate with your Server
API Key
	Name
		Demo
	Expiration Date
		Never
		Next
Scopes 
	Select All
	Create

API Kye
standard_3f8e1eebb5554b0d2874dad2f9738c878323e3cd6f8d6e201d6882b16bb2763bff9d4b8efcaa0268669e3a5b7b4899f304ba15e6a3afd56e5bf00782eed14ae104f21c07eb3db2d4e753c38e3d0ae5d30063d985e4ba0d9b7590cbdb337ae728366b73820864a826e85dcf9a13e5074fc2f5d24cf1b215cb22a0576a6dee1f18
```

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
server.js
```

```javascript
server.js
const sdk = require('node-appwrite')

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint   
    .setProject('66eab5c400233fd76cc7') // Your Project ID
    .setKey('standard_3f8e1eebb5554b0d2874dad2f9738c878323e3cd6f8d6e201d6882b16bb2763bff9d4b8efcaa0268669e3a5b7b4899f304ba15e6a3afd56e5bf00782eed14ae104f21c07eb3db2d4e753c38e3d0ae5d30063d985e4ba0d9b7590cbdb337ae728366b73820864a826e85dcf9a13e5074fc2f5d24cf1b215cb22a0576a6dee1f18') // Your secret API Key
```
    
Sending an Email in Node.js

Randomly Generated UUII ID 
- https://www.uuidgenerator.net/ 
ee5165ae-63b0-4df1-a1b7-e46864655071 

AppWrite UI
- https://appwrite.io/

```
Auth 
	User ID
66eab5c400233fd76cc7

Messaging
	Providers
Create Provider
	Email
	Name 
		SendGrid
Select a provider you would like to enable for sending emails.
	Next
```

SendGrid UI
- https://sendgrid.com/en-us 

```
Settings 
	API Keys
	Create API Key
	API Key Name
		Messaging 
		Full Access 
		Create and View 
Copy and Paste API Key ( … ) 
```

AppWrite UI
- https://appwrite.io/

```
Messaging
	Providers
	API Key
	Paste ( SendGrid API Key ) 

	Sender Email
		rodrigomvsrodrigo@gmail.com
	Reply to Email
		rodrigomvsrodrigo@gmail.com
	Sender Name
		Rodrigo
	Reply to Name
		Rodrigo
	Update
```

SendGrid UI
- https://sendgrid.com/en-us 

```
Dashboard
	Sender Authentication
		Start
	Verify a Single Sender
	Create a Sender
	From
		Ania
	From Email Address
		rodrigomvsrodrigo@gmail.com
	Reply To
		rodrigomvsrodrigo@gmail.com 
	Company Address
	Code with Ania
	City
		Dubai
	Country
		United Arab Emirates
	NickName
		Code With Ania

	Create
	Close
	Refresh Page
```

AppWrite UI
- https://appwrite.io/

```
Messaging
Create Message
	Email
	Subject
		This is a test
	Message
		Hello
	Next
Targets
	Select targets to get started
		Select Targets
	Email
		rodrigomvsrodrigo@gmail.com
	Add
	Next
	Send
	Send
	Refresh Page
```

```
Email ( rodrigomvsrodrigo@gmail.com )
This is a test
Rodrigo via sendgrid.net
Hello
```

##Visual Studio Code
Terminal
```
node server.js
```

```
Email ( rodrigomvsrodrigo@gmail.com )
Welcome!
Rodrigo via sendgrid.net
Hi
```

AppWrite UI
- https://appwrite.io/

```
Messaging
	Refresh Page
```

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
server.js
```

```javascript
server.js
const sdk = require('node-appwrite')

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint   
    .setProject('66eab5c400233fd76cc7') // Your Project ID
    .setKey('standard_3f8e1eebb5554b0d2874dad2f9738c878323e3cd6f8d6e201d6882b16bb2763bff9d4b8efcaa0268669e3a5b7b4899f304ba15e6a3afd56e5bf00782eed14ae104f21c07eb3db2d4e753c38e3d0ae5d30063d985e4ba0d9b7590cbdb337ae728366b73820864a826e85dcf9a13e5074fc2f5d24cf1b215cb22a0576a6dee1f18') // Your secret API Key

const messaging = new sdk.Messaging(client)

const sendEmail = async () => {
	const message = await messaging.createEmail(
		'ee5165ae-63b0-4df1-a1b7-e46864655071', // messageId
		'Welcome!', // subject
		'Hi', // content
		[], // topics (optional)
		['66eab5c400233fd76cc7'] // users (optional)
	)
	console.log(message)
}
sendEmail()

// https://www.uuidgenerator.net/ (Online UUID Generator)
// ee5165ae-63b0-4df1-a1b7-e46864655071
```

## Visual Studio Code
Terminal
```
node server.js
```

Sending an SMS in node.js 

AppWrite UI
- https://appwrite.io/

```
Messaging
Providers
	+ Create Provider
	SMS
	Name
		Twilio
	Select a provider you would like to enable for sending SMS.
		Twilio
	Next
```

Twilio UI
- https://www.twilio.com/en-us 

```
Account Info
Account Sid
	Copy... 
```

AppWrite UI
- https://appwrite.io/

```
Messaging
Providers
	+ Create Provider
	SMS
	Name
		Twilio
	Select a provider you would like to enable for sending SMS.
		Twilio
	Next

Settings 
Set up the credentials below to enable Twilio for sending SMS.
Account SID 
	Past...
```

Twilio UI
- https://www.twilio.com/en-us 

```
Account Info
Account Sid
	Copy... 

Auth Token
	Copy...
```

AppWrite UI
- https://appwrite.io/

```
Messaging
Providers
	+ Create Provider
	SMS
	Name
		Twilio
	Select a provider you would like to enable for sending SMS.
		Twilio
	Next

Settings 
Set up the credentials below to enable Twilio for sending SMS.
Account SID 
	Past...

Auth Token
	Past...
```

Twilio UI
- https://www.twilio.com/en-us 

```
Account Info
Account Sid
	Copy... 

Auth Token
	Copy...

My Twilio phone number
	Copy...
```

AppWrite UI
- https://appwrite.io/

```
Messaging
Providers
	+ Create Provider
	SMS
	Name
		Twilio
	Select a provider you would like to enable for sending SMS.
		Twilio
	Next

Settings 
Set up the credentials below to enable Twilio for sending SMS.
Account SID 
	Past...

Auth Token
	Past...

Sender Number
	Past...

	Create
```

Twilio UI
- https://www.twilio.com/en-us 

```
Develop
Messaging
	Try it out
		Send an SMS
	
Send to Virtual Phone
	To
	(Copy phone number ...)
```

AppWrite UI
- https://appwrite.io/

```
Auth
Phone
	Phone
	Past phone number...
	Update

Messaging
	+ Create Message
	SMS

Message
Create SMS messages that will be displayed to your subscribers. 
Message
	This is a test.
	Next

Targets
Select targets to whom this message should be directed.
	+
	Select Targets
	Rodrigo
		SMS
		Add
		Next
		Send
		Send
```

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
server.js
```

```javascript
server.js
const sdk = require('node-appwrite')

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint   
    .setProject('66eab5c400233fd76cc7') // Your Project ID
    .setKey('standard_3f8e1eebb5554b0d2874dad2f9738c878323e3cd6f8d6e201d6882b16bb2763bff9d4b8efcaa0268669e3a5b7b4899f304ba15e6a3afd56e5bf00782eed14ae104f21c07eb3db2d4e753c38e3d0ae5d30063d985e4ba0d9b7590cbdb337ae728366b73820864a826e85dcf9a13e5074fc2f5d24cf1b215cb22a0576a6dee1f18') // Your secret API Key

const messaging = new sdk.Messaging(client)

const sendEmail = async () => {
	const message = await messaging.createEmail(
		'ee5165ae-63b0-4df1-a1b7-e46864655071', // messageId
		'Welcome!', // subject
		'Hi', // content
		[], // topics (optional)
		['66eab5c400233fd76cc7'] // users (optional)
	)
	console.log(message)
}

const sendSMS = async () => {
	const message = await messaging.createSms(
		'e7913030-5f10-4ed3-8256-fffcff3a089f', // messageId
		'This is a test.', // content
		[], // topics (optional)
		['66eab5c400233fd76cc7'] // users (optional)
	)
	console.log(message)
}
sendSMS()

// https://www.uuidgenerator.net/ (Online UUID Generator)
// e7913030-5f10-4ed3-8256-fffcff3a089f
```

#### Visual Studio Code

Terminal
```
node server.js
```

Twilio UI
- https://www.twilio.com/en-us 

```
Develop
Messaging
	Try it out
		Send an SMS
	
Send to Virtual Phone
	To
	(Copy phone number ...)

		Messaging Logs
		Recent Messaging Logs
		Sender type							Phone number	
		Phone number / Messaging Service / 	...

Recent messages sent from (BR)+55...

Timestamp      From           Status
2024/...       (BR)+55...     Delivered
```

Understanding Push Notifications 

AppWrite UI
- https://appwrite.io/

```
Providers
	+ Create Provider
	Push Notification

Provider
Name
	APNS 
Select a provider you would like to enable for sending notifications.
	APNS
	Apple Push Notification Service 
	Next
Settings...

// appwrite.io/docs/products/messaging/send-push-notifications
```

Let us Build a Project !

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
server.js
```

```javascript
App.js
import { useState } from "react"
import googlePlayLogo from "./images/google-play-download-icon.svg.png"
import appleStoreLogo from "./images/app-store-download-icon.svg.png"

const App = () => {
	const [user, setUser ] = useState (null) 

	const updateUser = (e) => {
		setUser({...user, e.target.name : e.target.value })
	}

	console.log(user)

	const registerUser = () => {

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
```

## Terminal 
```
npm i nodemon
npm run start:backend
npm run start:frontend
```

localhost:3000

```
ⓧ

Sign Up

By signing up you agree to our terms and conditions. Learn about our Privacy Police before clicking submit.

email		Phone Number [] I agree to the termns and conditions. Submit

download the app

Get it on		Download on the
Google Play 	App Store
```
```
inspect web page 
```

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
server.js
```

```javascript
App.js
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
```

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
server.js
```

```javascript
server.js
const PORT = 8000 
const express = require ('express')
const app = express()
const uuid4 = require('uuid4')
const cors = require('cors')
app.use(cors())
app.use(express.json())

const sdk = require('node-appwrite')

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint   
    .setProject('66eab5c400233fd76cc7') // Your Project ID
    .setKey('standard_3f8e1eebb5554b0d2874dad2f9738c878323e3cd6f8d6e201d6882b16bb2763bff9d4b8efcaa0268669e3a5b7b4899f304ba15e6a3afd56e5bf00782eed14ae104f21c07eb3db2d4e753c38e3d0ae5d30063d985e4ba0d9b7590cbdb337ae728366b73820864a826e85dcf9a13e5074fc2f5d24cf1b215cb22a0576a6dee1f18') // Your secret API Key

const messaging = new sdk.Messaging(client)

const sendEmail = async () => {
	const message = await messaging.createEmail(
		'ee5165ae-63b0-4df1-a1b7-e46864655071', // messageId
		'Welcome!', // subject
		'Hi', // content
		[], // topics (optional)
		['66eab5c400233fd76cc7'] // users (optional)
	)
	console.log(message)
}

const sendSMS = async () => {
	const message = await messaging.createSms(
		'e7913030-5f10-4ed3-8256-fffcff3a089f', // messageId
		'This is a test.', // content
		[], // topics (optional)
		['66eab5c400233fd76cc7'] // users (optional)
	)
	console.log(message)
}
sendSMS()

// https://www.uuidgenerator.net/ (Online UUID Generator)
// e7913030-5f10-4ed3-8256-fffcff3a089f
```

## Visual Studio Code
Terminal
```
npm i express uuid4 cors
```

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
server.js
```

```javascript
server.js
const PORT = 8000 
const express = require ('express')
const app = express()
const uuid4 = require('uuid4')
const cors = require('cors')
app.use(cors())
app.use(express.json())

const sdk = require('node-appwrite')

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint   
    .setProject('66eab5c400233fd76cc7') // Your Project ID
    .setKey('standard_3f8e1eebb5554b0d2874dad2f9738c878323e3cd6f8d6e201d6882b16bb2763bff9d4b8efcaa0268669e3a5b7b4899f304ba15e6a3afd56e5bf00782eed14ae104f21c07eb3db2d4e753c38e3d0ae5d30063d985e4ba0d9b7590cbdb337ae728366b73820864a826e85dcf9a13e5074fc2f5d24cf1b215cb22a0576a6dee1f18') // Your secret API Key

const messaging = new sdk.Messaging(client)
const users = new.sdk.Users(client)

app.post('/register', async (req, resp) => {
	try {
		const user = req.body
		const id = uuid4()
		
		const result = await users.create(
			id, // userId
			user.email // email ( optional )
			user.tel // telephone ( optional )
		)
		console.log

		if (result) {
			await sendEmail(result)
			await sendSMS(result)
		}

	} catch (error) {
		console.error(error)
	}
})

const sendEmail = async (result) => {
	const id = ()uuid4 
	const email = result.email
	const userId = result['$id']

	const message = await messaging.createEmail(
		id, // messageId
		`Welcome! ${email}`, // subject
		'Thank you so much for signing up. We welcome you to our email community.', // content
		[], // topics (optional)
		[userId] // users (optional)
	)
	console.log(message)
}

const sendSMS = async (result) => {
	const id = uuid4()
	const userId = result['$id']

	const message = await messaging.createSms(
		id, // messageId
		'Thank you so much for signing up. We welcome you to our SMS community', // content
		[], // topics (optional)
		[userId] // users (optional)
	)
	console.log(message)
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// https://www.uuidgenerator.net/ (Online UUID Generator)
// e7913030-5f10-4ed3-8256-fffcff3a089f
```

localhost:3000

```
ⓧ

Sign Up

By signing up you agree to our terms and conditions. Learn about our Privacy Police before clicking submit.

rodrigomvsrodrigo@gmail.com		+5516996181167 [v] I agree to the termns and conditions. Submit

download the app

Get it on		Download on the
Google Play 	App Store
```

AppWrite UI
- https://appwrite.io/

Refresh Page

```
Auth
Users

Name    IDENTIFIERS                    STATUS       ID        LABELS    JOINED              LAST ACTIVITY
		rodrigomvsrodrigo@gmail.com    unverified   User ID				Nov14, 2024, 09:27  never

Auth
Messaging 

Messages

MessageID                                  TYPE      STATUS      SCHEDULE AT
e7913030-5f10-4ed3-8256-fffcff3a089f       Email     Sent        -

```

## Source Code
```
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
server.js
styles.css
```

```css
styles.css
@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@100;200;700&display=swap");

*{
	font-family: "Readex Pro", sans-serif;
}

body {
	padding: 0;
	margin: 0;
	background-image: url("./images/purple-theme-background.jpg");
	background-size: cover;
	height: 100vh;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}

h2 {
	text-transform: uppercase;
	font-style: italic;	
}

p {
	font-size: 15px;
}

.auth-modal {
	background-color: rgb(255, 255, 255);
	width: 360px;
	border-radius: 10px;
	padding: 40px;
	box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px rgba(0, 0, 0, 0.08) 0 0 0 1px; 
}

.auth-modal form {
	display: flex;
	flex-direction: column;
}

.auth-modal input {
	padding: 8px;
	margin: 8px;
	font-size: 17px;

}

.auth-modal .form-button {
	color: rgb( 255, 255, 255);
	text-transform: uppercase;
	font-size: 15px;
	padding: 12px 30px;
	border-radius: 30px;
	margin: 6px;
	border: rgb(255, 255, 255) solid 2px;
	background: linear-gradient(45deg, rgb(185, 48, 254) rgb(255, 64, 153));
}

.auth-modal .form-button:hover {
	color: rgb(48, 48, 48);
	border: rgb( 48, 48, 48) solid 2px;
}

.auth-modal .link-container {
	display: flex;
	justify-content: space-betoween;
}

.auth-modal .link-container img {
	width: 170px;
	margin: 5px;
}

.close-icon {
	float: right:
}
```

localhost:3000

```
ⓧ

Sign Up

By signing up you agree to our terms and conditions. Learn about our Privacy Police before clicking submit.

email		
Phone Number 
[] I agree to the termns and conditions. 
Submit

download the app

Get it on		Download on the
Google Play 	App Store
```
