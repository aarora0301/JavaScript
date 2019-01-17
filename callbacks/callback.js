
function wait(ms){
    let waitUntil=Date.now()+ms;
    console.log('processing wait function');
    while(Date.now()<waitUntil) continue;
}

function testCallback(){

console.log("start!");
   setTimeout(()=>{
       console.log('50 milliseconds have passed')}
       ,50);

    wait(100);

    console.log('100 milliseconds have passed');
   }

   testCallback();