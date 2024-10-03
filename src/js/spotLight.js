$(()=>{

  const spot = $(".spotLight")

  const spotLight = (event) => {
    console.log("here",event);
     spot.attr(
      "style",
       `background-image:
        radial-gradient(circle at ${event.pageX}px ${event.pageY}px,
        rgba(167, 253, 167, 0.774) 50px,
        rgb(44, 44, 44) 250px)`
    
    );
  };

  spot.on("mousemove",spotLight)


})