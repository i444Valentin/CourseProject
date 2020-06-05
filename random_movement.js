function moveSqrt(e){
    var sqrt = document.getElementById("sqrt");
    // получаем стиль для sqrt
    var cs = window.getComputedStyle(sqrt);
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);
    var speedMovement = 5;

    if (e.keyCode == 32){
        var direction = Math.random()*3;
        direction = Math.round(direction);

        if(direction ==0){          // если нажата клавиша A
            if(left>0)
                sqrt.style.marginLeft = left - speedMovement + "px";
                return;
        }

        if(direction ==1){         // если нажата клавиша W
            if(top>0)
                sqrt.style.marginTop = top - speedMovement + "px";
                return;
        } 
        if(direction ==2){         // если нажата клавиша D
            if(left < document.documentElement.clientWidth - sqrt.clientWidth)
                sqrt.style.marginLeft = left + speedMovement + "px";
                return;
        }
        if(direction ==3){// если нажата клавиша S       
            if(top < document.documentElement.clientHeight - sqrt.clientHeight)
                sqrt.style.marginTop = top + speedMovement + "px";
                return;
        }
    }
}

addEventListener("keydown", moveSqrt);