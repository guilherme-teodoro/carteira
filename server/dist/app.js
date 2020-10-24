"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const t = __importStar(require("io-ts"));
const shared_1 = require("shared");
const decimal_js_1 = __importDefault(require("decimal.js"));
const app = express_1.default();
const port = 4000;
app.use(cors_1.default());
const response = [
    {
        type: 'credit',
        amount: new decimal_js_1.default(200.4),
        category: 'salary',
        description: 'olar',
        teste: true
    },
    {
        type: 'debit',
        amount: new decimal_js_1.default(200),
        category: 'food',
        description: 'a little text'
    }
];
app.get('/', (req, res) => {
    res.json(t.array(shared_1.EntryCodec).encode(response));
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map