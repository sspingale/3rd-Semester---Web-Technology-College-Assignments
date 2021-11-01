let global=10.35;

{
    let block = 25;
    console.log(`The block level scope variable is of ${block}`);
    document.getElementById("write1").innerHTML = `The block level scope variable is of ${block}`;
    console.log(`Global level variable can be accessed from here. It's value is ${global}`);
    document.getElementById("write2").innerHTML = `Global level variable can be accessed from here. It's value is ${global}`;
    variable();
}

function variable(){
    let variable = 93.83;
    console.log(`Function scope variable can be accessed when the function is called. It's value is ${variable}`);
    document.getElementById("write3").innerHTML = `Function scope variable can be accessed when the function is called. It's value is ${variable}`;
}
