const cv = document.getElementById('cv')
const ctx = cv.getContext('2d')
cv.width = window.innerWidth
cv.height = window.innerHeight
window.addEventListener('resize',()=>{
    cv.width = window.innerWidth
cv.height = window.innerHeight
})
class Particles{
    constructor(){
        this.x = Math.random()*cv.width;
        this.y = Math.random()*cv.height;
        this.size = Math.random()*4+3;
        this.vx = Math.tan(Math.random()*2+2);
        this.vy = Math.sin(Math.random()*2+2);
        
    }
    draw(){
        ctx.globalAlpha = 0.8
        ctx.fillStyle = 'fuchsia';
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.fill()
    }
    
    update(){
        if(this.x<this.size || this.x>cv.width){
            this.vx*=-1
            
            }
            
        if(this.y<this.size || this.y>cv.height){
            this.vy*=-1
            
        }
        this.x+=this.vx
        this.y+=this.vy
    }
}
let Particlesarray = []
if(cv.width>550){
for(let i = 0; i<40; i++){
    Particlesarray.push(new Particles())
}
}
if(cv.width<550){
    for(let i = 0; i<27; i++){
        Particlesarray.push(new Particles())
    }
}

let menubtn = document.getElementById('menu')
let dialog = document.getElementById('dialog')
let closedialogbtn = document.getElementById('closedialog')
menubtn.onclick = ()=>{
    dialog.showModal()
    document.getElementById('h1').style.color = 'rgb(0,0,25)'
}
closedialogbtn.onclick = ()=>{
    dialog.close()
    document.getElementById('h1').style.color = 'rgba(255, 254, 254, 0.8)'
}

function animate(){
    ctx.clearRect(0,0,cv.width,cv.height)
    Particlesarray.forEach(p=>p.draw())
    Particlesarray.forEach(p=>p.update())
    requestAnimationFrame(animate)
}
animate()