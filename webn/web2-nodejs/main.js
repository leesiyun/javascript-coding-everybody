const http = require(`http`);
const fs = require(`fs`);
const url = require(`url`);

const app = http.createServer(function(request, response) {
  const _url = request.url;
  const queryData = url.parse(_url, true).query;
  const pathname = url.parse(_url, true).pathname;
  let title = queryData.id;

  if (pathname === `/`) {
    fs.readdir(`./data`, (error, fileList) => {
      let list = `<ol>`;

      let i = 0;
      while (i < fileList.length) {
        list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
        i++;
      }
      list += `</ol>`;

      fs.readFile(`data/${title}`, `utf-8`, (err, description) => {
        if (title === undefined) {
          title = `Welcome`;
          description = `<p>Hello, Node.js</p>`;
        }

        const template = `
      <!DOCTYPE html>
    <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8" />
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        <h2>${title}</h2>
        <div>${description}</div>
      </body>
    </html>
      `;
        response.writeHead(200);
        response.end(template);
      });
    });
  } else {
    response.writeHead(404);
    response.end(`Not found`);
  }
});
app.listen(3000);
