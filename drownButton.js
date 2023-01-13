    function createWaterWave(elementId) {
        var element = document.getElementById("create-wave-button");
        
        var water = document.createElement("div");
        water.classList.add("water");

        element.appendChild(water);
        
        var wave = document.createElement("div");
        wave.classList.add("wave");
        
        water.appendChild(wave);
        
        var wave2 = document.createElement("div");
        wave2.classList.add("wave");
        
        water.appendChild(wave2);
        
        var wave3 = document.createElement("div");
        wave3.classList.add("wave");
        
        water.appendChild(wave3);
        
        var wave4 = document.createElement("div");
        wave4.classList.add("wave");
        
        water.appendChild(wave4);
        
        var wave5 = document.createElement("div");
        wave5.classList.add("wave");
        
        water.appendChild(wave5);
        
        // CSS animation for the waves
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".wave { width: 100%; height: 100%; position: absolute; top: 0; left: 0; animation: wave-animation 4s linear infinite; }" +
        "@keyframes wave-animation { 0% { transform: translateX(-1000px) scaleY(0.4); } 100% { transform: translateX(1000px) scaleY(0.4); } }";
        document.body.appendChild(css);

      }