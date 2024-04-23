"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
const userController_1 = require("../controllers/userController");
userRouter.post("/", userController_1.createUserController);
exports.default = userRouter;
