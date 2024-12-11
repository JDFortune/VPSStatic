"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs = require('fs');
const app = (0, express_1.default)();
const PORT = 3000;
const path = require('path');
app.use('/images', express_1.default.static(path.join(__dirname, 'public/images')));
app.get('/', (req, res) => {
    fs.readFile(__dirname + '/index.html', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading HTML file:', err);
            res.status(500).send('<h1>Internal Server Error</h1>');
        }
        else {
            res.send(data);
        }
    });
    // res.send('<img src="../../images/me.jpg" width="600" alt="picture of me">');
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
//# sourceMappingURL=index.js.map