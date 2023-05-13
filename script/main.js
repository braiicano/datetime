import { clock } from "./clock.js";
const $ = (s) => document.querySelector(s);
const C = $("#clock");
clock(C);
