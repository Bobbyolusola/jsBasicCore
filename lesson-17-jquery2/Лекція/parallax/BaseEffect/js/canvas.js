(function () {
    console.log(window.innerWidth)
    var countPoint;
    if(window.innerWidth<800){
        countPoint = 15
    }
    else {
        countPoint = 35
    }
    var canvasBody = document.getElementById("canvas"),
    canvas = canvasBody.getContext("2d"),

    w = canvasBody.width = window.innerWidth,
    h = canvasBody.height = window.innerHeight,



    opts = {
        particleAmount: countPoint,

        backgroundColor: "#fff",
        particleColor: "#fff",

        defaultRadius: 2,
        addedRadius: 2,

        defaultSpeed: 0.6,
        addedSpeed: 0.8,

        lineWidth: 0.5,
        lineColor: "rgba(0,0,0,opacity)",

        communicationRadius: 170
    },
    particles = [],
    Particle = function (Xpos, Ypos) {
        this.x = Xpos ? Xpos : Math.random()*w;
        this.y = Ypos ? Ypos : Math.random()*h;

        this.speed = opts.defaultSpeed + Math.random()*opts.addedSpeed;
        this.directionAngle = Math.floor(Math.random()*360);
        this.color = opts.particleColor;
        this.radius = opts.defaultRadius + Math.random()*opts.addedRadius;
        this.direc = {
            x: Math.cos(this.directionAngle)*this.speed,
            y: Math.sin(this.directionAngle)*this.speed

        };
        this.update = function () {
            this.border();
            this.x += this.direc.x;
            this.y += this.direc.y;
        };
        this.border = function () {
            if(this.x >= w || this.x <= 0){
                this.direc.x *= -1;
            };
            if(this.y >= h || this.y <= 0){
                this.direc.y *= -1;
            };
            this.x > w ? this.x = w : this.x;
            this.y > h ? this.y = h : this.y;
            this.x < 0 ? this.x = 0 : this.x;
            this.y < 0 ? this.y = 0 : this.y;
        };
        this.draw = function () {
            canvas.beginPath();
            canvas.arc(this.x, this.y, this.radius, 0, Math.PI*2);
            canvas.closePath();
            canvas.fillStyle = this.color;
            canvas.fill();
        }
    },
    checkDistance = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };
    communicatePoints = function (point1, father) {
        for(var i = 0; i < father.length; i++){
            var distance = checkDistance(point1.x, point1.y, father[i].x, father[i].y);
            var opacity = 1 - distance/opts.communicationRadius;
            if(opacity > 0){
                canvas.lineWidth = opts.lineWidth;
                canvas.strokeStyle = opts.lineColor.replace("opacity", opacity);
                canvas.beginPath();
                canvas.moveTo(point1.x, point1.y);
                canvas.lineTo(father[i].x, father[i].y);
                canvas.closePath();
                canvas.stroke();
            }
        }
    }
    
    function setup() {
        for(var i = 0; i < opts.particleAmount; i++){
            particles.push(new Particle());
        }
        window.requestAnimationFrame(loop);
    }
    
    function loop() {
        canvas.fillStyle = opts.backgroundColor;
        canvas.fillRect(0,0,w,h);
        for(var i = 0; i < particles.length; i++){
            particles[i].update();
            particles[i].draw();
        }
        for (var a = 0; a < particles.length; a++){
            communicatePoints(particles[a], particles);
        }
        window.requestAnimationFrame(loop);
    }

    setup();

    canvasBody.addEventListener("click", function (e) {
        particles.push(new Particle(e.pageX, e.pageY));
    });
    // canvas.addEventListener("contextmenu", function (e) {
    //     e.preventDefault();
    //     particles.slice(particles.length - 1, 1);
    // })
})();

(function (){

})()