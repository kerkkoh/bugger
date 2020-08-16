"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./api"));
const app = express_1.default();
app.set('json spaces', 2);
app.use(express_1.default.json());
app.use(express_1.default.static('frontend'));
app.use('/api/v1', api_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🐛🐜🐛 Bugger running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map