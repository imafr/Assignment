let x="";
let ans=0;
let symbols=['+','-','x','÷'];
function fun1(params) {
    if(params==='clear'){
        x="";
    }
    else if(symbols.includes(params)){
        x+=" "+params+" ";
    }
    else if(params==='='){
        x=x.replace("÷","/");
        x=x.replace('x','*');
        x= eval(x.trim());
    }
    else{
        x+=params;
    }
    
    document.getElementById('textBox1').innerText=x;
}