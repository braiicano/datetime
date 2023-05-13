const T = (D = new Date()) => {
  let day, date, month, year, hour, minute, second, fullDate, fullTime;
  function Day(n) {
    let d;
    return (d =
      n == 1
        ? "Lunes"
        : n == 2
        ? "Martes"
        : n == 3
        ? "Miercoles"
        : n == 4
        ? "Jueves"
        : n == 5
        ? "Viernes"
        : n == 6
        ? "Sábado"
        : n == 7
        ? "Domingo"
        : "Err");
  }
  function Month(n) {
    let m;
    return (m =
      n == 1
        ? "enero"
        : n == 2
        ? "febrero"
        : n == 3
        ? "marzo"
        : n == 4
        ? "abril"
        : n == 5
        ? "mayo"
        : n == 6
        ? "junio"
        : n == 7
        ? "julio"
        : n == 8
        ? "agosto"
        : n == 9
        ? "septiembre"
        : n == 10
        ? "octubre"
        : n == 11
        ? "noviembre"
        : n == 12
        ? "diciembre"
        : "Err");
  }
  return {
    day: (day = Day(D.getDay())),
    date: (date = D.getDate()),
    month: (month = D.getMonth()),
    monthName: Month(month),
    year: (year = D.getFullYear()),
    hour: (hour = D.getHours() < 10 ? "0" + D.getHours() : D.getHours()),
    minute: (minute =
      D.getMinutes() < 10 ? "0" + D.getMinutes() : D.getMinutes()),
    second: (second =
      D.getSeconds() < 10 ? "0" + D.getSeconds() : D.getSeconds()),
    fullDate: (fullDate = `${day}, ${date} de ${Month(month)}.`),
    fullTime: (fullTime = `${hour}:${minute}:${second}`),
  };
};

function _C(n) {
  let e = document.createElement(n.element);
  n.id ? (e.id = n.id) : 0;
  n.style ? (e.className = n.style) : 0;
  n.text ? (e.innerText = n.text) : 0;
  return e;
}

var _h = _C({ element: "span", style: "c-hour", text: T().hour }),
  _m = _C({ element: "span", style: "c-minute", text: T().minute }),
  _s = _C({ element: "span", style: "c-second", text: T().second }),
  _d = _C({ element: "div", style: "c-date", text: T().fullDate });

export function clock(id) {
  id.appendChild(_h);
  id.appendChild(_m);
//   id.appendChild(_s);
  id.appendChild(_d);

  setInterval(() => {
    _h.textContent != T().hour ? (_h.textContent = T().hour) : 1;
    _m.textContent != T().minute ? (_m.textContent = T().minute) : 1;
    _s.textContent != T().second ? (_s.textContent = T().second) : 1;
    _d.textContent != T().fullDate ? (_d.textContent = T().fullDate) : 1;
  }, 1000);
}
