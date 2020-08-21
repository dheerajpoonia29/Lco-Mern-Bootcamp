# LCO MEARN BOOTCAMP
<hr/>
<br>

## **01 Introduction To Full Stack**
### dependency
		*	visual studio code: integrated developement env
		*	robo 3t: gui to interact with mongodb server
		*	postman: platform for api development
		*	nodejs: javascript runtime environment
		*	mongodb: nosql database, document oriented
		*	coggle.it: freeware mind mapping web application
### content
		1 	install software and dependency
		2 	brief about full stack, backend, frontend
		3 	various error code in backend
		4 	file structure of project 
		5 	mind mapping of store management			
### note
		-	before starting project run always run mongodb server
			--	C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe 
		-	attachement 05
			--	mind mapping of project by instructor
		-	django is model-view-template
		-	mern is model-view-controller	
### task 		
		+ view mango db documentation
			https://docs.mongodb.com/manual/introduction/
		+ create mind mapping of store management
			task coggle.it > https://bit.ly/346uXeH


## **02 Express, Nodemon and Npm**
### dependency: 
		*	express: nodejs web framework
		*	nodemon: monitor for any changes in your source and automatically restart your server
		*	npm: package manager for javascript programming language 
### content:
		1	initialize npm, install express
		2 	create first server				
### note: 
		-	npm command
			--	<npm init> it make package.json file which contain information about project
			--	<npm i package_name> and <npm i nodemon_or_express> download package in node_modules dirctory and list there name & dependencies in package.json file
			--	<npm install> install all package listed in package.json
			--	<npm uninstall package_name> remove package from node_modules
		-	4 type of request we perform on server get (retrieve data), post (send data), put (update data), delete (remove data)
		-	console.log('${port}') vs console.log(`server is running at ${port}`)
			--	first won't print port number but 2nd did, difference of ' vs ` (this are known as backtag)			
		-	<node index.js> node run server, <npm start> nodemon run server using script "start": "nodemon index.js" in package.json		
		- concept of callback and function
			-- app.get('/', (req, res)=>{
				return "anything";
			})
			-- app.get('/', myfun) 
				--- function myfun(req, res){	return "anything" };
			-- both work similar, first one is callback
			-- callback also written as 
				--- app.get('/', ()=>)
				--- app.get('/', ()=>())
				--- app.get('/', ()=>{})
### task:
		+ view express js documentation
			https://expressjs.com/en/starter/hello-world.html
		+ npm documentation
			https://docs.npmjs.com/downloading-and-installing-packages-locally
		+ create logout routes and show msg
		+ create new routes with you name and show greetings
### error
		~ nodemon package installation (not resolve)
			error : fetchMetadata: sill resolveWithNewModule nodemon@2.0.4 checking installable status

## **03 Mongoose and Preparing Database Models**
### dependency:
		*	mongoose: odm(object data modelling) library for mongodb
		*	crypto: nodejs module for data encryption and decryption
		*	uuid: package used to generate a random string for hashing the password
### content:
		1	basic schema of user - 03
		2	making hash using uuid and crypto - 06
		3	making virtual for password and above generate hash - 07
### note: 
		-	salt is random string that user enter with password or we generate using uuid package to make strong cryptograph hash 
		-	mongoose
			--	var userSchema = new mongoose.Schema({ name: {type: string, required: true}, address: string})
				syntax to define schema
			--	userSchema.methods = {}
				define our own custom document instance methods.
				according to me method is like function to schema
				if we want to run function on schema then we use method, where method contain multiple function
				or method is like controller of schema
			--	userSchema.virtual("password") .set(function(password){}) .get(function(password){})
				virtual is property of mongodb which is used for computing and then store on db
			--	module.exports = mongoose.model("User", userSchema);
				convert usershema into model/table to use them outside, mongoose.model take model name, schema name
			--	const { ObjectId } = mongoose.Schema;
		-	anything written into curly braces {} is object 
### task:
		+ 	read mongoose docs	
			https://mongoosejs.com/docs/
		+	read uuid
			https://www.npmjs.com/package/uuid
		+	read crypto
			https://nodejs.org/api/crypto.html

## **04 Creating Schema with Mongoose**
### content:
		1	creating a different schema category, product, order - 01, 02, 03
		2	linking two schema - 02
### note: 
		-	const productSchema = new mongoose.Schema({}, {timestamps: true})
			-- automatically store data time, when particular entry or product comes in
		-	const { ObjectId } = mongoose.Schema;
			const productSchema = new mongoose.Schema({category: {type: ObjectId, ref: "Category", required: true});
			--	for ex we have 2 schema category and product and we need to mention attach product with category then above 2 line write in product schema, where line make make objectId of product then and 2nd line connect product with category using ref, ref contain the model name of schema so Category is model of categorySchema
### task:
		+	read more about objectId
			https://mongoosejs.com/docs/api/mongoose.html#mongoose_Mongoose-ObjectId

## **05 Database Connectivity**
### dependency:
		*	dotenv: module which provide the abstaction on sensitive information like database connection url, api key, private key etc
### content:
		1	connecting node server with database (mongoDb) - 01
		2	changing the content 1 connectivity syntax with more advance syntax using dotenv - 02
### note: 
		-	myfun.run().then().catch()
			--	 its like a ternary operator in js, if run is successful then then() executed when run() error then catch() run
		-	mongodb connection syntax
			--	mongoose.connect("mongodb://host_name:port_name/db_name", {useNewUrlParser: true, useUnifiedTopology: true,	useCreateIndex: true})
			-- useUnifiedTopology: it make db connection alive
		-	require("dotenv).config() similar to const env = require("dotenv) then env.config()
		-	 dotenv module that loads environment variables from a .env file into process.env
		-	dotenv syntax
			--	mongoose.connect(process.env.DATABASE, {})
			-- 	const port = const port = process.env.PORT || 8000;
			-- 	process is attach with all dependencies, env is file, variable 
		-	.env (environement variable file) 
			--	DATABASE = mongodb://host_name:port_name/db_name
			--	PORT = 3000
			-- 	variable in caps
### task:
		+ 	read mongoose db connection parameter
			https://mongoosejs.com/docs/connections.html
		+	read dotenv docs
			https://www.npmjs.com/package/dotenv

## **06 Middleware and Initial Routes - watch again**
### dependency:
		*	
### content:
		1	
### note: 
		-	
			--	 
### task:
		+

## **07 Authentication routes and tokens - watch again**
### dependency:
		*	
### content:
		1	
### note: 
		-	
			--	 
### task:
		+

## ****
### dependency:
		*	
### content:
		1	
### note: 
		-	
			--	 
### task:
		+