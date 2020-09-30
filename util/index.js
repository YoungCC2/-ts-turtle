"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_promise_1 = __importDefault(require("ts-promise"));
var util = {
    toString: function () {
        return "";
    },
    promisy: function (fn) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ts_promise_1.default(function (resolve, reject) {
                try {
                    fn.apply(void 0, args.concat([resolve]));
                }
                catch (error) {
                    reject(error);
                }
            });
        };
    }
};
