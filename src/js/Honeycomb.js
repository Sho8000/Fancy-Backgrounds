$(()=>{

  //spotLight//////////////////////
  let mousePosition = {
    x:0,
    y:0
  };

  $("body").on("mousemove",(mouse)=>{
    mousePosition = {
      x: mouse.pageX,
      y: mouse.pageY
    }
    console.log(mouse.pageX,"fghjk",mouse.pageY)
  })

  const loop = () => {
    $(`#gradient`).css('transform',`translate(${mousePosition.x}px, ${mousePosition.y}px)`);

    window.requestAnimationFrame(loop)

  }

  window.requestAnimationFrame(loop)
  //spotLight//////////////////////

  //honeycomb/////////////////////

  const patternElement = $("#pattern");
  const countY = Math.ceil(patternElement.height() / 40) + 1;
  const countX = Math.ceil(patternElement.width()/ 48) + 1;
  for (let i = 0; i < countY; i++) {
    for (let j = 0; j < countX; j++) {
      const hexagon = $("<div></div>").css({
          "background": "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=') no-repeat",
          "width": "44px", 
          "height": "50px",
          "backgroundSize": "contain",
          "position": "absolute",
          "top": `${i * 40}px`,
          "left": `${j * 48 + ((i * 24) % 48 )}px`
        });
  
      patternElement.append(hexagon);
    }
  }
  
  
  
})