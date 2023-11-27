
// Element 
let duration = document.getElementById("duration");
let spot = [document.getElementById("prec25"),document.getElementById("prec50"),document.getElementById("prec75")];
let float = document.getElementById("float");


// Listner 

duration.addEventListener("change",()=>{
    let runtime = duration.value;
    if (runtime == ""){
        runtime = "00:00:00:00";
    }else{
    timecodeSpilt(runtime);
    }
});

float.addEventListener("click",async()=>{
    var PnP = await documentPictureInPicture.requestWindow();
    PnP.document.body.innerHTML = document.body.innerHTML;
    PnP.document.head.innerHTML = document.head.innerHTML;
});



// Function Timecode Precentage 
function timecodeSpilt(runtime){
    let hour;
    let min;
    let precStart=[];
    let precEnd=[];


    let m=0;

    let runtimeSpilt = runtime.split(":");
    hour = parseInt(runtimeSpilt[0]);
    min = parseInt(runtimeSpilt[1]);

    let total = (hour*60) + min;
    for(let i =0;i<3;i++){
        precStart[i]= Math.ceil(total *(25*(i+1)/100))-1;
        let h=0;
        //console.log(precStart[i]);
        let condition = true;
        do {
            if(precStart[i] >=60){
                console.log("g"+h);
                h++;
                precStart[i]= precStart[i]-60;
                //console.log(precStart[i]);
                console.log(h);
            }else{
                m= precStart[i];
                condition=false;
                break;
            }
        } while(condition);
        h= h.toString();
        m=m.toString();
        if(h.length == 1){
            h = "0"+h;
        }if(m.length ==1){
            m="0"+m;
        }
        spot[i].innerText= h+":"+m+":00:00";
    }

}
