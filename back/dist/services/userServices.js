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
exports.deleteUserService = exports.getUserService = exports.createUserService = void 0;
const users = [];
const id = 1;
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    };
    users.push(newUser);
    return newUser;
});
exports.createUserService = createUserService;
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.getUserService = getUserService;
const deleteUserService = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteUserService = deleteUserService;
