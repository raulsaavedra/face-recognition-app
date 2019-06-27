const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'test',
    database : 'face-recognition-app'
  }
});

db.select('*').from('users').then(data => {
	console.log(data);
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
		users: [
		{
			id: '123',
			name: 'hehe',
			email: 'hehe@gmail.com',
			password: 'water',
			entries: 0,
			joined: new Date(),
		},
		{
			id: '124',
			name: 'haha',
			email: 'haha@gmail.com',
			password: 'beef',
			entries: 2,
			joined: new Date()
		}
	]
}

app.get('/', (req, res) => {
	res.send(database.users);
})

app.post('/signin', (req, res) => {
	bcrypt.compare('chicken', '$2b$10$uYpsRQyS2COlzT8GSrwAFOdGp3kI7QfFGrKuvKY1svKuJFn6LC/QO', function(err, res) {
	  console.log('first guess', res);
	});
	bcrypt.compare('veggies', '$2b$10$uYpsRQyS2COlzT8GSrwAFOdGp3kI7QfFGrKuvKY1svKuJFn6LC/QO', function(err, res) {
	  console.log('second guess', res);
	});
	if (req.body.email === database.users[1].email && req.body.password === database.users[1].password) {
			res.json(database.users[1]);
	} else {
		res.status(400).json('error logging in');
	}
})

app.post('/register', (req, res) => {
	const {email, name, password} = req.body;
	const hash = bcrypt.hashSync(password, 10);
	db.transaction(trx => {
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail => )
	})
	return db('users')
		.returning('*')
		.insert({
			name: name,
			email: email,
			joined: new Date() 
		})
		.then(user => {
			res.json(user[0]);
		})
	.catch(err => res.status(400).json('unable to register'))
})


app.get('/profile/:id', (req, res) => {
	const { id } = req.params;
	db.select('*').from('users').where({
		id: id
	}).then(user => {
		if (user.length) {
			res.json(user[0])
		} else {
			res.status(400).json('not found!');
		}
	})
	.catch(err => res.status(400).json('error getting user'))
})

app.put('/image', (req, res) => {
	const { id } = req.body;
	db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => res.status(400).json('unable to get entries'))
})


app.listen(3000, () =>  {
	console.log('Server is working!');
})

/*
root route
sign in route --> POST = success or fail
sign up route --> POST = user
/profile/:userId --> GET = user
/image --> PUT = user

*/