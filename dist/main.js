(()=>{"use strict";const t=(t,e,i)=>{const h=Math.atan2(e[1]-t[1],e[0]-t[0]);return s([Math.cos(h),Math.sin(h)],i)},s=(t,s)=>[t[0]*s,t[1]*s],e=(t,s)=>Math.sqrt((t[0]-s[0])**2+(t[1]-s[1])**2),i=class{constructor(t){this.pos=t.pos,this.vel=t.vel,this.game=t.game,this.radius=t.radius,this.color=t.color}draw(t){t.beginPath(),t.fillStyle=this.color,t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!0),t.fill(),t.closePath()}move(t){key.isPressed("w")&&(this.pos[1]+=1),key.isPressed("d")&&(this.pos[0]-=1),key.isPressed("s")&&(this.pos[1]-=1),key.isPressed("a")&&(this.pos[0]+=1),this.pos[0]=this.pos[0]+this.vel[0]*(t/20),this.pos[1]=this.pos[1]+this.vel[1]*(t/20)}isCollidedWith(t){return e(this.pos,t.pos)<this.radius+t.radius}collideWith(t){}};class h extends i{static RADIUS=20;static COLOR="#FFFF00";constructor(t,s){const e={};e.pos=t,e.vel=s.vecToPlayer(t),e.game=s,e.radius=h.RADIUS,e.color=h.COLOR,super(e)}move(t){this.vel=this.game.vecToPlayer(this.pos),super.move(t)}collideWith(t){if(this.isCollidedWith(t)){let s=this.radius+t.radius-e(this.pos,t.pos),i=Math.atan2(t.pos[1]-this.pos[1],t.pos[0]-this.pos[0]);t instanceof r?(this.pos[0]-=s*Math.cos(i),this.pos[1]-=s*Math.sin(i),t.damage()):(this.pos[0]-=s*Math.cos(i)/2,this.pos[1]-=s*Math.sin(i)/2,t.pos[0]+=s*Math.cos(i)/2,t.pos[1]+=s*Math.sin(i)/2)}}}const a=h;class o extends i{static RADIUS=3;static COLOR="#0000FF";constructor(t,s){const e={};e.pos=t,e.vel=[0,0],e.game=s,e.radius=o.RADIUS,e.color=o.COLOR,super(e)}}const l=o;class n extends i{static RADIUS=15;static COLOR="#FF00FF";constructor(t,s){const e={};e.pos=t,e.vel=[0,0],e.game=s,e.radius=n.RADIUS,e.color=n.COLOR,super(e),this.health=100,this.experience=0}draw(t){t.beginPath(),t.rect(this.pos[0]-this.radius,this.pos[1]+this.radius,2*this.radius*(this.health/100),5),t.fillStyle="red",t.fill(),t.closePath(),t.beginPath(),t.fillStyle=this.color,t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!0),t.fill(),t.closePath()}move(){}damage(){this.health-=1,0===this.health&&alert("game over!")}level(){}collideWith(t){if(this.isCollidedWith(t)&&t instanceof a){let s=this.radius+t.radius-dist(this.pos,t.pos),e=Math.atan2(t.pos[1]-this.pos[1],t.pos[0]-this.pos[0]);t.pos[0]+=s*Math.cos(e),t.pos[1]+=s*Math.sin(e),this.damage()}else this.isCollidedWith(t)&&t instanceof l&&(this.game.remove(t),this.experience+=1)}}const r=n;class c extends i{static RADIUS=4;static COLOR="#00FF00";constructor(t,s,e){const i={};i.pos=t,i.vel=s,i.game=e,i.radius=c.RADIUS,i.color=c.COLOR,super(i)}collideWith(t){this.isCollidedWith(t)&&t instanceof a&&(this.game.remove(t),this.game.remove(this))}}const d=c;class p{static DIM_X=750;static DIM_Y=500;constructor(t){this.player=new r([p.DIM_X/2,p.DIM_Y/2],this),this.enemies=[],this.bullets=[],this.exps=[],this.enemySetup(),this.bulletSetup()}enemySetup(){this.enemyInterval=setInterval(this.addEnemy.bind(this),2e3),setTimeout((()=>{clearInterval(this.enemyInterval),this.enemyInterval=setInterval(this.addEnemy.bind(this),1e3)}),1e4),setTimeout((()=>{clearInterval(this.enemyInterval),this.enemyInterval=setInterval(this.addEnemy.bind(this),500)}),2e4),setTimeout((()=>{clearInterval(this.enemyInterval),this.enemyInterval=setInterval(this.addEnemy.bind(this),4e3)}),3e4),setTimeout((()=>clearInterval(this.enemyInterval)),4e4)}bulletSetup(){this.bulletInterval=setInterval(this.addBullet.bind(this),2e3)}add(t){t instanceof a?this.enemies.push(t):t instanceof d?this.bullets.push(t):t instanceof l&&this.exps.push(t)}addEnemy(){this.add(new a(this.randomOuterPos(),this))}addBullet(){let t=this.checkClosest(),s=[this.player.pos[0]+t[0],this.player.pos[1]+t[1]];this.add(new d(s,t,this))}randomPosition(){return[Math.random()*p.DIM_X,Math.random()*p.DIM_Y]}randomOuterPos(){const t=[];return t.push([2*-a.RADIUS,Math.random()*p.DIM_Y]),t.push([p.DIM_X+2*a.RADIUS,Math.random()*p.DIM_Y]),t.push([Math.random()*p.DIM_X,2*-a.RADIUS]),t.push([Math.random()*p.DIM_X,p.DIM_Y+2*a.RADIUS]),t[Math.floor(4*Math.random())]}vecToPlayer(t){const s=[0,0];return t[0]<p.DIM_X/2?s[0]=1:t[0]>p.DIM_X/2&&(s[0]=-1),t[1]<p.DIM_Y/2?s[1]=1:t[1]>p.DIM_Y/2&&(s[1]=-1),s}allObjects(){return this.bullets.concat(this.enemies).concat([this.player]).concat(this.exps)}draw(t){t.clearRect(0,0,p.DIM_X,p.DIM_Y),t.fillStyle="#000000",t.fillRect(0,0,p.DIM_X,p.DIM_Y),t.fillStyle="blue",t.fillRect(0,0,p.DIM_X*(this.player.experience/10),15),this.allObjects().forEach((s=>{s.draw(t)}))}moveObjects(t){this.allObjects().forEach((s=>{s.move(t)}))}checkCollisions(){for(let t=0;t<this.allObjects().length;t++){const s=this.allObjects()[t];for(let e=t+1;e<this.allObjects().length;e++){const t=this.allObjects()[e];s.isCollidedWith(t)&&s.collideWith(t)}}}checkClosest(){let i=1/0,h=(t=>{const e=2*Math.PI*Math.random();return s([Math.sin(e),Math.cos(e)],1)})();for(let s=0;s<this.enemies.length;s++){let a=this.enemies[s],o=e(this.player.pos,a.pos);o<i&&(i=o,h=t(this.player.pos,a.pos,4))}return h}step(t){this.moveObjects(t),this.checkCollisions()}remove(t){if(t instanceof a){this.enemies=this.enemies.filter((s=>s!==t));let s=[t.pos[0],t.pos[1]];this.add(new l(s,this))}else t instanceof d?this.bullets=this.bullets.filter((s=>s!==t)):t instanceof l&&(this.exps=this.exps.filter((s=>s!==t)))}}const m=p;console.log("webpack is working");const u=document.getElementById("game-canvas"),I=u.getContext("2d");u.width=m.DIM_X,u.height=m.DIM_Y,new class{constructor(t){this.ctx=t,this.game=new m(t),this.lastTime=0}start(){window.requestAnimationFrame(this.animate.bind(this))}animate(t){let s=t-this.lastTime;this.game.draw(this.ctx),this.game.step(s),this.lastTime=t,window.requestAnimationFrame(this.animate.bind(this))}}(I).start()})();