Messaging Tutorial SMS Email Push Notifications Full Course

https://www.youtube.com/watch?v=bZFj8GCZmq4&t=518s 

21:14

Introduction
Targets
The SDK
Sending an Email in Node.js
Sending an SMS in Node.js
Push Notifications
Let's build a Project !

Targets

Devices 
Phone Numbers
Email Address

AppWrite
https://appwrite.io/ 

Create a Project
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

Visual Studio Code

React Project
Terminal
npx create-react-app appwrite-messaging

Visual Studio Code
Open Editors
Explorer 
index.js

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

Visual Studio Code
Open Editors
Explorer 
index.js
App.js

App.js
const App = () => {
    return(
        <div className="app">

        </div>
    )
}

export default App

Visual Studio Code
Terminal
npm i node-appwrite
Visual Studio Code
Open Editors
Explorer 
index.js
App.js
package.json

package.json
{
  "dependencies": {
    "node-appwrite": "^13.0.0"
  }
}

Visual Studio Code
Terminal
npm i 

Visual Studio Code
Open Editors
Explorer 
index.js
App.js
server.js

server.js
const sdk = require('node-appwrite')

const client = new sdk.Client()
    .setEndpoint() // Your API Endpoint
    .setProject() // Your Project ID
    .setKey() // Your secret API Key

AppWrite UI
https://appwrite.io/ 

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

Visual Studio Code
Open Editors
Explorer 
index.js
App.js
server.js

server.js
const sdk = require('node-appwrite')

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint   
    .setProject('66eab5c400233fd76cc7') // Your Project ID
    .setKey('standard_3f8e1eebb5554b0d2874dad2f9738c878323e3cd6f8d6e201d6882b16bb2763bff9d4b8efcaa0268669e3a5b7b4899f304ba15e6a3afd56e5bf00782eed14ae104f21c07eb3db2d4e753c38e3d0ae5d30063d985e4ba0d9b7590cbdb337ae728366b73820864a826e85dcf9a13e5074fc2f5d24cf1b215cb22a0576a6dee1f18') // Your secret API Key

    
Sending an Email in Node.js

Randomly Generated UUII ID 
https://www.uuidgenerator.net/ 
ee5165ae-63b0-4df1-a1b7-e46864655071 

AppWrite UI
https://appwrite.io/

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

SendGrid UI
https://sendgrid.com/en-us 
Settings 
	API Keys
	Create API Key
	API Key Name
		Messaging 
		Full Access 
		Create and View 
Copy and Paste API Key ( … ) 

AppWrite UI
https://appwrite.io/

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


SendGrid UI
https://sendgrid.com/en-us 

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


AppWrite UI
https://appwrite.io/

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

Email ( rodrigomvsrodrigo@gmail.com )
This is a test
Rodrigo via sendgrid.net
Hello

Visual Studio Code
Terminal
node server.js

Email ( rodrigomvsrodrigo@gmail.com )
Welcome!
Rodrigo via sendgrid.net
Hi

AppWrite UI
https://appwrite.io/

Messaging
	Refresh Page




