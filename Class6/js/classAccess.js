"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Derived_name;
Object.defineProperty(exports, "__esModule", { value: true });
class Derived {
    constructor() {
        _Derived_name.set(this, "derived");
        console.log("My name is " + __classPrivateFieldGet(this, _Derived_name, "f"));
    }
}
_Derived_name = new WeakMap();
// Prints "base", not "derived"
const d = new Derived();
console.log("Accessing from Outside " + d.name);
