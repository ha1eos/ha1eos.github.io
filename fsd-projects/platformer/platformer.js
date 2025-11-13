$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //This project can be as complex as you want to be, pay attention to what each 
    //argument means for each functions
    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(750,650,75,40, "lime");
    createPlatform(525,575,75,40,'pink');
    createPlatform(350,465,75,30,'blue');
    createPlatform(200,400,75,30, 'red');
    createPlatform(0,300,75,30, 'purple');

    // TODO 3 - Create Collectables
    createCollectable("diamond",900,700,0.5,0.3);
    createCollectable("steve", 400,250,0.8,0);
    createCollectable("max",0,100,0.4,0);
    createCollectable("kennedi",100,475,0,0);

    
    // TODO 4 - Create Cannons
    createCannon("left",500,3000);
    createCannon("right",390,1500);
    createCannon("right",450,1300);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
