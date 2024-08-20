const form = document.querySelector('form');

form.addEventListener('submit', function(e){
e.preventDefault();

const num= parseInt(document.querySelector('#guessField1').value);
const birthyear= parseInt(document.querySelector('#guessField2').value);
const celebrate= parseInt(document.querySelector('#guessField3').value);

const result= document.querySelector('#result');

if(isNaN(num)  || num<2  || num>9  || num===''){

    result.innerHTML= ` Please enter a valid number between 2 and 9 `;

}


else if(isNaN(birthyear)   || birthyear===''){

    result.innerHTML= ` Please enter a valid birthyear `;

}

// else if( celebrate!=true  && celebrate!="false"){
// result.innerHTML=` Please enter yes or no`

// }


else {

    const ans= ((num*2)+5)*50;
    if(celebrate.checked===true){
    ans+1761;
    
    }
    else{
        ans+1760;
    }

const age=ans-birthyear;
 result.innerHTML=`<span>The age according to the given data will come by adding all digits of this nuber ${age} </span>`;
}



})
