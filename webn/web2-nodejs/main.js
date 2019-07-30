const http = require('http');
const fs = require('fs');
const url = require('url');

const templateHTML = (title, list, body) => {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;
};

const templateList = fileList =>
  fileList.map(file => `<li><a href="/?id=${file}">${file}</a></li>`);

const app = http.createServer(function(request, response) {
  const _url = request.url;
  const queryData = url.parse(_url, true).query;
  const pathname = url.parse(_url, true).pathname;
  let title = queryData.id;

  if (pathname === '/') {
    fs.readdir('./data', (error, fileList) => {
      const list = `<ol>${templateList(fileList).join('')}</ol>`;

      fs.readFile(`data/${title}`, 'utf-8', (err, description) => {
        if (title === undefined) {
          title = 'Welcome';
          description = '<p>Hello, Node.js</p>';
        } else if (description === undefined) {
          response.writeHead(404);
          response.end('Not found');
        }

        const template = templateHTML(
          title,
          list,
          `<h2>${title}</h2>${description}`
        );

        response.writeHead(200);
        response.end(template);
      });
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);
