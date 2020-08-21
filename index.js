const express = require('express');
const app = express();
const port = 3000;
const authors = [
	{ name: 'Lawrence Nowell', nationality: 'UK', books: ['Beowulf'] },
	{
		name: 'William Shakespeare',
		nationality: 'UK',
		books: ['Hamlet, Othello, Romeo and Juliet, MacBeth'],
	},
	{
		name: 'Charles Dickens',
		nationality: 'UK',
		books: ['Oliver Twist, A Christmas Carol'],
	},
	{
		name: 'Oscar Wilde',
		nationality: 'UK',
		books: ['The Picture of Dorian Gray, The Importance of Being Earnest'],
	},
];

//** home page*/

app.get('/', (req, res) => {
	console.log('server has started');
	res.send('Authors API');
});

//** /authors/:id/ */

app.get('/authors/:id', (req, res) => {
	const id = req.params.id;
	const index = Number(id) - 1;
	if (id > 0 && id < 5) {
		// res.send(`${authors[index].name}, ${authors[index].nationality}`);
		res.json({
			name: `${authors[index].name}`,
			nationality: `${authors[index].nationality}`,
		});
		return;
	}
	res.send(`page with id of author ${id} not found`);
});

//** /authors/:id/books */

app.get('/authors/:id/books', (req, res) => {
	const id = req.params.id;
	const index = Number(id) - 1;
	if (id > 0 && id < 5) {
		// res.send(`${authors[index].books}`);
		res.json({ books: `${authors[index].books}` });
		return;
	}
	res.send(`books of author with an id ${id} not found`);
});

//**  start the server  */
app.listen(port, () => {
	console.log('Server started on port: ' + port);
});
