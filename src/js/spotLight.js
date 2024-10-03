$(()=>{

  const spot = $(".spotLight")
  let flag = 0;

  const blackie = () =>{
    let blackie = document.createElement("div");
    let blackieShape = document.createElement("div")
    blackie.className = "blackie";
    blackieShape.className = "blackieShape";
    
    minTop = 5;
    maxTop = 100;
    minLeft = 5;
    maxLeft = 100;

    let blackiePositionTop = Math.random() * (maxTop -minTop) + minTop;
    let blackiePositionLeft = Math.random() * (maxLeft -minLeft) + minLeft;

    blackie.style.top = `calc(${blackiePositionTop}% - 50px)`;
    blackie.style.left = `calc(${blackiePositionLeft}% - 50px)`;
    blackieShape.style.top = `calc(${blackiePositionTop}% - 50px)`;
    blackieShape.style.left = `calc(${blackiePositionLeft}% - 50px)`;

    $("body").append(blackie);
    $("body").append(blackieShape);

  }


  const spotLight = (event) => {
    console.log("here",event);
     spot.attr(
      "style",
       `background-image:
        radial-gradient(circle at ${event.pageX}px ${event.pageY}px,
        rgba(167, 253, 167, 0.5) 50px,
        rgb(0, 0, 0) 250px);
        position: absolute;
        z-index:2;`
    );
    if(flag==0){
      blackie();
      flag = 1;
    }
    $(".blackieShape").on("click",()=>{
      $(".blackie").remove();
      $(".blackieShape")
      blackie();
    })
  
  };

  spot.on("mousemove",spotLight)





})