function delay(ms,str,end){
    return new Promise(resolve=>{
        console.log(str);
        console.log(end);
        setTimeout(resolve,ms);
    })
}
   function print(){
        delay(1,"First Timeout","First call finished")
        .then(()=>delay(2,"Second Timeout","Second call Finished"))
        .then(()=>delay(3,"Third Timeout","Third call Finished"));
    }

    print();