function calculate(){
    const totalamount=document.getElementById("totalamount");
    const rateinput=document.getElementById("rate");
    const principleinput=document.getElementById("principle");
    const yearsinput=document.getElementById("years");

    let principle=Number(principleinput.value);
    let rate=Number(rateinput.value/100);
    let years=Number(yearsinput.value);

    if(principle<0||isNaN(principle)){
        principle=0;
        principleinput.value=0
    }
    if(rate<0||isNaN(rate)){
        rate=0;
        rateinput.value=0;
    }
    if(years<0||isNaN(years)){
        years=0;
        yearsinput.value=0;
    }

    const result=principle*Math.pow((1+rate),1*years);

    totalamount.textContent=result.toLocaleString(undefined,{style:"currency",currency:"INR"});

}