function delay(ms,str){
    return new Promise(resolve=>{
        console.log(str)
        setTimeout(resolve,ms);
    })
}

async function print(){
    console.log("first timeout");
    await delay(100,"first first call finished");
    console.log("second delay");
    await delay(100, "second call finished");
    console.log("third delay");
    await delay(100,"third call finished");

}
print();