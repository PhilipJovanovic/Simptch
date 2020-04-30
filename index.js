const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const min = 5000;
const max = 7000;

yeet();

async function yeet(){
    if(document.querySelector(".community-points-summary button.tw-button")){
        console.log("[" + new Date().toISOString() + "] YEEETED EXTRA POINTS!!! MOFOGGU");
        document.querySelector(".community-points-summary button.tw-button").click()
    }else{
        console.log("[" + new Date().toISOString() + "] No extra points :(");
    }
        
    await sleep(min + Math.floor(Math.random() * (max - min)));

    return yeet();
}