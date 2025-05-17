import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const port = 3000;
const indexPath = path.join(__dirname, '../public/index.html');

const server = http.createServer((_, res) => {
	fs.readFile(indexPath, (err, data) => {
		if (err) {
			res.statusCode = 500;
			res.end('Error loading index.html');
		} else {
			res.setHeader('Content-Type', 'text/html');
			res.end(data);
		}
	});
});

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
