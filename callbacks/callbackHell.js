
function callStack(str){
    console.log(str);
}

function print(){
    setTimeout( ()=>{      
        console.log("First timeOut"); 
        setTimeout(()=>{
            console.log("Second time out");
            setTimeout(()=>{
            console.log("Third time out");
            },callStack("third call finished"),1);
        },callStack("second call finished"),2);
    },callStack("first call finished"),9);
}

print();