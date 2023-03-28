fetch("https://randomuser.me/api")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.results[0].cell);

    document.querySelector(".name").innerHTML =
      "<h1>" + data.results[0].name.first + "</h1>";
    document.querySelector(".name").textContent = data.results[0].name.last;
    document.querySelector(
      ".image"
    ).innerHTML = `<img src = '${data.results[0].picture.large}'>`;
    document.querySelector(".out").textContent = data.results[0].name.first;
    document.querySelector(".userName").textContent =
      data.results[0].login.username;
    document.querySelector(".number").textContent = data.results[0].cell;
    document.querySelector(".eMail").textContent = data.results[0].email;
    document.querySelector(".Location").textContent =
      data.results[0].location.city;
    document.querySelector(".country").textContent =
      data.results[0].location.country;
    document.querySelector(".street").textContent =
      data.results[0].location.street.name;
  });
fetch("https://randomuser.me/api")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.querySelector(".name1").innerHTML =
      "<h1>" + data.results[0].name.first + "</h1>";
    document.querySelector(".name1").textContent = data.results[0].name.last;
    document.querySelector(
      ".image1"
    ).innerHTML = `<img src = '${data.results[0].picture.large}'>`;

    document.querySelector(".out1").textContent = data.results[0].name.first;
    document.querySelector(".userName1").textContent =
      data.results[0].login.username;
    document.querySelector(".number1").textContent = data.results[0].cell;
    document.querySelector(".eMail1").textContent = data.results[0].email;
    document.querySelector(".Location1").textContent =
      data.results[0].location.city;
    document.querySelector(".country1").textContent =
      data.results[0].location.country;
    document.querySelector(".street1").textContent =
      data.results[0].location.street.name;
    console.log(data);
  });
