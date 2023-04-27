// Registering component in Collider.js
AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables
        var posX = Math.random() * -5 + 5;
        var posY = Math.random() * 2 ;
        var posZ = Math.random() * 15 ;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.c(id, position);
      }
    },
    c: (id, position) => {
      //Get the terrain element
      var terrainEl = document.querySelector("#terrain");
  
      var cEl = document.createElement("a-entity");
  
      //Setting multiple attributes
      cEl.setAttribute("id", id);
  
      cEl.setAttribute("position", position);
      cEl.setAttribute("scale", { x: 0.01, y: 0.01, z: 0.01 });
  
      //set the gLTF model attribute
      cEl.setAttribute("gltf-model", "./assets/models/coin/scene.gltf");
  
      //set animation mixer of models with animation
      cEl.setAttribute("animation-mixer", {});
  
      //set the static body of the physic system
      cEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 3.2,
      });
  
      //set the game play attribute
      cEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });
  
      terrainEl.appendChild(cEl);
    },
  });
  