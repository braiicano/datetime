import { clock } from "./clock.js";
import { weather } from "./weather.js";
const $ = (s) => document.querySelector(s);
const C = $("#clock");
clock(C);
const W = $("#weather");
weather(W);
