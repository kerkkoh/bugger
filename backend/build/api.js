"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_1 = require("@gitbeaker/node");
const constants_1 = require("./constants");
const lodash_1 = __importDefault(require("lodash"));
const router = express_1.default.Router();
const api = new node_1.Gitlab({
    host: 'https://gitlab.com',
    token: constants_1.GITLAB_SECRET,
});
const getProject = () => __awaiter(void 0, void 0, void 0, function* () { return yield api.Projects.show(constants_1.PROJECT); });
const getIssues = () => __awaiter(void 0, void 0, void 0, function* () { return yield api.Issues.all({ projectId: constants_1.PROJECT }); });
router.get('/project', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield lodash_1.default.memoize(getProject)());
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
router.get('/issues', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield lodash_1.default.memoize(getIssues)());
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
router.get('/ping', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.send('pong'); }));
exports.default = router;
//# sourceMappingURL=api.js.map