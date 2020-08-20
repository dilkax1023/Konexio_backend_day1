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
		nationality: 'US',
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

//** /authors/id/ */

app.get('/authors/1/', (req, res) => {
	console.log('server has started');
	// res.send(`${authors[0].name}, ${authors[0].nationality}`);
	res.json({
		name: `${authors[0].name}`,
		nationality: `${authors[0].nationality}`,
	});
});
app.get('/authors/2/', (req, res) => {
	console.log('server has started');
	// res.send(`${authors[1].name}, ${authors[1].nationality}`);
	res.json({
		name: `${authors[1].name}`,
		nationality: `${authors[1].nationality}`,
	});
});
app.get('/authors/3/', (req, res) => {
	console.log('server has started');
	// res.send(`${authors[2].name}, ${authors[2].nationality}`);
	res.json({
		name: `${authors[2].name}`,
		nationality: `${authors[2].nationality}`,
	});
});
app.get('/authors/4/', (req, res) => {
	console.log('server has started');
	// res.send(`${authors[3].name}, ${authors[3].nationality}`);
	res.json({
		name: `${authors[3].name}`,
		nationality: `${authors[3].nationality}`,
	});
});

//** /authors/id/books */

app.get('/authors/1/books/', (req, res) => {
	console.log('server has started');
	// res.send(`${authors[0].books.join()}`);
	res.json({ books: `${authors[0].books}` });
});
app.get('/authors/2/books/', (req, res) => {
	console.log('server has started');
	// res.send(`${authors[1].books.join()}`);
	res.json({ books: `${authors[1].books}` });
});
app.get('/authors/3/books/', (req, res) => {
	console.log('server has started');
	// res.send(`${authors[2].books.join()}`);
	res.json({ books: `${authors[2].books}` });
});
app.get('/authors/4/books/', (req, res) => {
	console.log('server has started');
	// res.send(`${authors[3].books.join()}`);
	res.json({ books: `${authors[3].books}` });
});

//** all the other routes */

app.get('*', (req, res) => {
	res.send(
		'<h1>SORRY, PAGE NOT FOUND</h1>, <a href="/">please go back to home page</a> '
	);
});

//**  start the server  */
app.listen(port, () => {
	console.log('Server started on port: ' + port);
});
