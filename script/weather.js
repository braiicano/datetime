const OPTIONS = {
  method: "GET",
};
const URL =
  "http://api.weatherapi.com/v1/current.json?key=700e672b3fc64b0e9de174731231305&q=Buenos Aires&aqi=no";

function iter(e, ...c) {
  for (let i of c) {
    e.appendChild(i);
  }
}
function fn(e, t) {
  let { event, target } = t;
  e.addEventListener(event, (_e) => {
    target.classList.toggle("w-open");
  });
}
function _C(n) {
  let e = document.createElement(n.element);
  n.id ? (e.id = n.id) : 0;
  n.style ? (e.className = n.style) : 0;
  n.text ? (e.innerText = n.text) : 0;
  n.attr ? e.setAttribute(n.attr[0], n.attr[1]) : 0;
  n.element == "img" ? (e.src = n.src) : 0;
  n.child ? iter(e, ...n.child) : 0;
  n.function ? fn(e, n.function) : 0;
  return e;
}
var _c, _t, _i, _cn, _w, _wd, _pp, _pc, _h, _cl, _uv, __F, __M;
const Req = async () => {
  let req = await fetch(URL, OPTIONS);
  let res = await req.json();
  _c = _C({ element: "span", style: "w-name", text: res.location.name });
  _t = _C({ element: "span", style: "w-temp", text: `${res.current.temp_c}°` });
  _i = _C({ element: "img", style: "w-img", src: res.current.condition.icon });
  //   _cn = _C({ element: "span", style: "w-w", text: res.current.condition.text });
  _w = _C({
    element: "span",
    style: "w-wind",
    text: `viento a ${res.current.wind_kph}km/h`,
  });
  //   _wd = _C({ element: "span", style: "w-w", text: res.current.wind_dir });
  //   _pp = _C({ element: "span", style: "w-w", text: res.current.pressure_mb });
  _pc = _C({
    element: "span",
    style: "w-precip",
    text: `${
      res.current.precip_mm < 10
        ? "0" + res.current.precip_mm
        : res.current.precip_mm
    }% precipitaciones`,
  });
  _h = _C({
    element: "span",
    style: "w-hum",
    text: `${res.current.humidity}% humedad`,
  });
  //   _cl = _C({ element: "span", style: "w-w", text: res.current.cloud });
  //   _uv = _C({ element: "span", style: "w-w", text: res.current.uv });
  __M = _C({ element: "div", style: "w-modal", child: [_c, _w, _pc, _h] });
  __F = _C({
    element: "span",
    style: "w-city",
    child: [_i, _t],
    function: { event: "click", target: __M },
  });
  return [__F, __M];
};

export async function weather(w) {
  const l = await Req();
  iter(w, ...l);
}
