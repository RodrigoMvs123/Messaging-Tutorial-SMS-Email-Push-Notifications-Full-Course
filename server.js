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