
let x;
let y;
let z;

console.log(x);
console.log(y);
console.log(z);

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 20) +1;
    y = Math.floor(Math.random() * 20) + 1;
    z = Math.floor(Math.random() * 20) + 1;

    if(x==y==z){
        document.getElementBylog("win");
    }
    else if(x==y==z){
        console.log("win");
    }

  else if(x==y){
        console.log("win");
    }
    else if(x==z){
        console.log("win");
    }
    else if(y==z){
        console.log('win');
    }
    else if(x){
        console.log("loose");
    }
    else if(y){
        console.log("loose");
    }
    else if(z){
        console.log("loose");
    }
    else{
        console.log("");
    }
  

    document.getElementById("xlabel").innerHTML = x; 
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
} 