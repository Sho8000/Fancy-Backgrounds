$(()=>{
  
  //height value => less snow
  //low value => much snow
  let value = 70;
  let value2 = 250;

  const createSnow = () =>{
    let snow = document.createElement("span");
    snow.className = "snow";
    
    minSize = 10;
    maxSize = 20;

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

  const createSnowflake = () =>{
    let snowflake = document.createElement("span");
    snowflake.className = "snowflake";
    
    minSize = 10;
    maxSize = 20;
    minOpacity = 0.5;
    maxOpacity = 1;

    let snowflakeSize = Math.random() * (maxSize -minSize) + minSize;
    let snowflakeOpacity = Math.random() * (maxOpacity -minOpacity) + minOpacity;

    snowflake.style.width = snowflakeSize + "px";
    snowflake.style.height = snowflakeSize + "px";
    snowflake.style.opacity = snowflakeOpacity;

    snowflake.style.left = Math.random() * 100 + "%"

    $(".snow-container").append(snowflake);

    setTimeout(()=>{
      snowflake.remove();
    },10000)
  }

  setInterval(createSnowflake, value2);
})