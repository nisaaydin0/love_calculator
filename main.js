let firstName = document.getElementById("fName");
let secondName = document.getElementById("secName");
let loveScoreContainer = document.getElementById("result");



let calculate = document.getElementById("calc-btn");
calculate.addEventListener('click',function(){

    let name1 = firstName.value.trim();
    let name2 = secondName.value.trim();


//if there is empty name area i want to throw error
    if (name1 === "" || name2 === "") {
        loveScoreContainer.textContent = "Please enter both names before calculating the love score!";
        loveScoreContainer.style.color = "red";
    return;}
    else{
    loveScoreContainer.style.color = "black";
}



    let random = Math.floor((Math.random()*100)+1);
    if(random<10){
    loveScoreContainer.textContent = `Your love score is ${random}% ${name1}.  I do not see any future between you and your lover or should I call loser... Always their loss , do not forget`;
    }else if(random>=10 && random<20){  
        loveScoreContainer.textContent =`Your love score is ${random}% ${name1}.  Definetly garbage,Dump to ${name2}`;
    }else if(random>=20 && random<30){ 
        loveScoreContainer.textContent =`Your love score is ${random}% ${name1}.  Friendly reminder !! Naah your time is precious, do not waste it with this person. `;
    }else if(random>=30 && random<50){ 
        loveScoreContainer.textContent =`Your love score is ${random}% ${name1}.  Maybe ... Maybe... `;
    }else if(random>=50 && random<70){ 
        loveScoreContainer.textContent =`Your love score is ${random}% ${name1} You can have tough days but you know.. Nobody says love is easy.This is like Sofia s Choice `;
    }else if(random>=70 && random<80){ 
        loveScoreContainer.textContent =`Your love score is ${random}% ${name1}. Yes you find the one!!! Do not let ${name2} go. `;    
    }else{ 
        loveScoreContainer.textContent =`Your love score is ${random}% ${name1}. . You guys make me believe love... God created you two for eachothers.`;}

        firstName.value = "";
        secondName.value = "";
    

    })

    


