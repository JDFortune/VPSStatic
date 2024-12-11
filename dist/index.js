"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
const path = require('path');
app.use('/images', express_1.default.static(path.join(__dirname, 'images')));
app.get('/', (req, res) => {
    res.send('<img src="../../images/me.jpg" width="600" alt="picture of me">');
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
//# sourceMappingURL=index.js.map