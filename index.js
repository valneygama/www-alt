const http = require("http");
const path = require("path");
const express = require("express");
const fs = require("fs");
var MarkdownIt = require('markdown-it');

const app = express();
const md = new MarkdownIt();
const directoryPath = path.join(__dirname, '.');
const preDiv = "<html><head><title>Tribunal de Contas do Estado do Piauí</title></head><body><div class='html' style='margin:2em auto;max-width:800px;padding:1em;border:solid 1px #ddd;border-radius:3px;'>";
const posDiv = "</div></body></html>";

app.use(express.static('./'));

app.get("/", function(_, res) {
    fs.readdir(directoryPath, function (err,files) {
        if (err) return;
        let responseText = "";
        
        for (i = 0; i<files.length; i++) {
            if (files[i].endsWith(".txt")) {
                data = fs.readFileSync(files[i], 'utf8');
                responseText += preDiv + md.render(data) + posDiv;
            }
        }
        res.send(responseText);
    });
});

http.createServer(app).listen(80, () => console.log("Servidor rodando local na porta 80"));

