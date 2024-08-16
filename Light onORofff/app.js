var btn = document.getElementById("btn");
var div_container = document.getElementById("div_container");

// function , 2 , event , function
btn.addEventListener("click", function () {
  alert("Hello Click Event");
});

btn.addEventListener("mouseover", function () {
  alert("Light on & off horahi hai");
});

div_container.addEventListener("mouseover", function () {
  console.log(div_container.src);
  div_container.src = "https://media3.giphy.com/media/TaC6gXdan989My4Eub/giphy.webp?cid=790b76116r1a9sg21008k0c7i6tc92et0x3ircslnm3erj0g&ep=v1_gifs_search&rid=giphy.webp&ct=g";

  div_container.style.height = "400px";
  div_container.style.width = "400px";
  div_container.style.borderRadius = "100%";
});
div_container.addEventListener("mouseout", function () {
  div_container.src =
    "https://th.bing.com/th/id/OIF.KjS9TQL0nbfMSk2kEvnP1g?rs=1&pid=ImgDetMain";
});