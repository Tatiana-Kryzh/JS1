let div = document.createElement("div");

let formLogin = document.createElement("form");

let inputEmail = document.createElement("input");
inputEmail.placeholder = "Email";
inputEmail.required = true;

let inputPassword = document.createElement("input");
inputPassword.placeholder = "Password";
inputPassword.required = true;

let btnEntrance = document.createElement("button");
btnEntrance.innerText = "Вход";

formLogin.addEventListener("submit", () => {
  formLogin.remove();
  formCheckin.remove();
  document.body.append(menu);
  document.body.append(menuBody);
});

let formCheckin = document.createElement("form");

let inputEmailChin = document.createElement("input");
inputEmailChin.placeholder = "Email";
inputEmailChin.required = true;

let inputPasswordChin = document.createElement("input");
inputPasswordChin.placeholder = "Password";
inputPasswordChin.required = true;

let inputPasswordChin2 = document.createElement("input");
inputPasswordChin2.placeholder = "Password";
inputPasswordChin2.required = true;

let btnCheckin = document.createElement("button");
btnCheckin.innerText = "Регистрация";

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

formLogin.append(inputEmail, inputPassword, btnEntrance);
formCheckin.append(
  inputEmailChin,
  inputPasswordChin,
  inputPasswordChin2,
  btnCheckin
);
div.append(formLogin);
div.append(formCheckin);
document.body.prepend(div);

//////////////////////////////////////////////////

let menu = document.createElement("header");
menu.style.display = "flex";
menu.style.flexDirection = "row";
menu.style.justifyContent = "space-between";
///document.body.append(menu);

let menuBody = document.createElement("div");

let main = document.createElement("div");
main.innerText = "Главная";
main.addEventListener("click", () => {
  let h = document.createElement("h1");
  h.innerHTML = "Приветственный текст";

  let userDeviceArray = [
    { device: "Android", platform: /Android/ },
    { device: "iPhone", platform: /iPhone/ },
    { device: "iPad", platform: /iPad/ },
    { device: "Symbian", platform: /Symbian/ },
    { device: "Windows Phone", platform: /Windows Phone/ },
    { device: "Tablet OS", platform: /Tablet OS/ },
    { device: "Linux", platform: /Linux/ },
    { device: "Windows", platform: /Windows NT/ },
    { device: "Macintosh", platform: /Macintosh/ },
  ];

  let platform = navigator.userAgent;

  function getPlatform() {
    for (let i in userDeviceArray) {
      if (userDeviceArray[i].platform.test(platform)) {
        return userDeviceArray[i].device;
      }
    }
    return "Неизвестная платформа!" + platform;
  }
  let platformInfo = "Ваша платформа: " + getPlatform();

  let mainInfo = document.createElement("div");
  mainInfo.append(h, platformInfo);

  menuBody.append(mainInfo);
});

let client = document.createElement("div");
client.innerText = "Клиенты";
client.addEventListener("click", () => {
  menuBody.append(divClients);
});

let mapMenu = document.createElement("div");
mapMenu.innerText = "Карта";
mapMenu.addEventListener("click", () => {
  menuBody.append(map);
});

let btn = document.createElement("button");
btn.innerText = "Выход";
btn.addEventListener("click", () => {
  menu.remove();
  menuBody.remove();
  document.body.prepend(formLogin, formCheckin);
});

menu.append(main, client, mapMenu, btn);

///////////////////////////////////////////////////////////

let divClients = document.createElement("div");
///document.body.append(divClients);

let table = document.createElement("table");
divClients.append(table);
table.style.borderWidth = "5px";
table.style.borderColor = "#000000";

let thName = document.createElement("th");
thName.innerText = "Имя";
let thCompany = document.createElement("th");
thCompany.innerText = "Компания";
let thEmail = document.createElement("th");
thEmail.innerText = "Email";
let thPhone = document.createElement("th");
thPhone.innerText = "Телефон";
let thBalance = document.createElement("th");
thBalance.innerText = "Баланс";
let thData = document.createElement("th");
thData.innerText = "Дата";

let trHeader = document.createElement("tr");
trHeader.append(thName, thCompany, thEmail, thPhone, thBalance, thData);

table.append(trHeader);

async function getElement() {
  let results = await fetch(
    "https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json"
  ).then((response) => response.json());
  for (let i = 0; i < results.length; i++) {
    let tdN = document.createElement("td");
    tdN.innerHTML = results[i].name;
    let tdC = document.createElement("td");
    tdC.innerHTML = results[i].company;
    let tdE = document.createElement("td");
    tdE.innerHTML = results[i].email;
    let tdP = document.createElement("td");
    tdP.innerHTML = results[i].phone;
    let tdB = document.createElement("td");
    tdB.innerHTML = results[i].balance;
    let tdD = document.createElement("td");
    tdD.innerHTML = results[i].registered;

    let tdBtn = document.createElement("td");
    let btnDelete = document.createElement("button");
    btnDelete.innerText = "Удалить";
    btnDelete.addEventListener("click", function () {
      let divDelete = document.createElement("div");
      divDelete.style.backgroundColor = "#FF0000";
      divDelete.style.position = "fixed";

      let p = document.createElement("p");
      p.innerText = "Вы действительно хотите удалить строку";
      divDelete.append(p);

      let btnConfirm = document.createElement("button");
      btnConfirm.innerText = "Подтвердить";
      btnConfirm.addEventListener("click", function () {
        divDelete.remove();
        tr.remove();
        let divInfo = document.createElement("div");
        let btnInfo = document.createElement("button");
        btnInfo.innerHTML = "x";
        divInfo.addEventListener("click", () => {
          divInfo.remove();
        });
        divInfo.innerHTML = "Данные успешно удалены ";
        divInfo.append(btnInfo);
        divInfo.style.backgroundColor = "#20B2AA";
        divInfo.style.width = "250px";
        document.body.prepend(divInfo);
      });

      let btnCancel = document.createElement("button");
      btnCancel.innerText = "Отменить";
      btnCancel.addEventListener("click", function () {
        divDelete.remove();
      });

      divDelete.append(btnConfirm, btnCancel);
      tdBtn.append(divDelete);
    });
    tdBtn.append(btnDelete);

    let active = results[i].isActiv;

    if (active === false) {
      tr.style.backgroundColor = "#C0C0C0";
    }

    let tr = document.createElement("tr");
    tr.append(tdN, tdC, tdE, tdP, tdB, tdD, tdBtn);
    table.append(tr);

    table.append(tr);

    /*            let gender = results[i].gender;
           let arr = [];
          for (let index = 0; index < arr.length; index++) {
              arr[index] = results[i].gender
              
          }
          console.log(arr); */
  }
}

getElement();

let btnUp = document.createElement("button");
btnUp.innerHTML = "вернуться к началу";
divClients.append(btnUp);

btnUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

///////////////////////////////////////////////////////////

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
