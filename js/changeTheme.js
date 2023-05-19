//смена темы
$("#black").click(function () {
    let theme = document.querySelector("body");
    let ling = document.querySelector("#item");
    let footer = document.querySelector("footer");
    theme.style.backgroundColor = "black";
    footer.style.backgroundColor = "black";
  });

$("#white").click(function () {
  let theme = document.querySelector("body");
  let colorTextLi = document.querySelector("#itemList");
  theme.style.backgroundColor = "rgb(190,190,190)";
  colorTextLi.style.color="black";
});


$("#melica").click(function () {
    let theme = document.querySelector("body");
    let colorTextLi = document.querySelector("*");
    theme.style.backgroundColor = "#98ff98";
    colorTextLi.style.color="black";
  });