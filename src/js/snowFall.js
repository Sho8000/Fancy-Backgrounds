$(()=>{
  
  //height value => less snow
  //low value => much snow
  let value = 50;

  const createSnow = () =>{
    let snow = document.createElement("span");
    snow.className = "snow";
    
    minSize = 5;
    maxSize = 10;

    let snowSize = Math.random() * (maxSize -minSize) + minSize;

    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";

    snow.style.left = Math.random() * 100 + "%"

    $(".snow-container").append(snow);

    setTimeout(()=>{
      snow.remove();
    },10000)
  }

  setInterval(createSnow, value);
})