function moveSqrt(e){
    var sqrt = document.getElementById("sqrt");
    // получаем стиль для sqrt
    var cs = window.getComputedStyle(sqrt);
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);
    var speedMovement = 16;

    if(e.keyCode ==65){          // если нажата клавиша A
        if(left>0)
            sqrt.style.marginLeft = left - speedMovement + "px";
            return;
    }

    if(e.keyCode ==87){         // если нажата клавиша W
        if(top>0)
            sqrt.style.marginTop = top - speedMovement + "px";
            return;
    } 
    if(e.keyCode ==68){         // если нажата клавиша D
        if(left < document.documentElement.clientWidth - sqrt.clientWidth){
            sqrt.style.marginLeft = left + speedMovement + "px";
            return;
        }else{
            sqrt.style.marginLeft = left + speedMovement + "px";
            window.scrollBy(speedMovement,0);
            return;
        }
    }
    if(e.keyCode ==83){// если нажата клавиша S       
        if(top < document.documentElement.clientHeight - sqrt.clientHeight-20){
            sqrt.style.marginTop = top + speedMovement + "px";
            return;
        }else{
            sqrt.style.marginTop = top + speedMovement + "px";
            window.scrollBy(0,speedMovement);
        }
    }
} 
addEventListener("keydown", moveSqrt);