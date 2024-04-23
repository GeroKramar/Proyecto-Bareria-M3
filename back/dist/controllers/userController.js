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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.getUserController = exports.createUserController = void 0;
const userServices_1 = require("../services/userServices");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, active } = req.body;
    const newUser = yield (0, userServices_1.createUserService)({ name, email, active });
    res.status(201).json(newUser);
});
exports.createUserController = createUserController;
const getUserController = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.getUserController = getUserController;
const deleteUserController = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteUserController = deleteUserController;
