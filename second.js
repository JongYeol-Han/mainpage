let divs = document.querySelectorAll('.color');
   

    function changeNum(idx){
        let num = 0;
        let targetNum = divs[idx].getAttribute('data-rate');
        let timer = setInterval(function(){
            ++num;
            divs[idx].innerText = num;
            if (num == targetNum){
                clearInterval(timer);
            }
        }, 30);
    }

    for(let i = 0; i < divs.length;i++){
        changeNum(i);
    }
    