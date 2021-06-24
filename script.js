const monitor = document.getElementById("monitor");
let firstOp, secondOp, plusG, minusG, divideG, multiplyG, percentG;

function secMon() {
  if (
    monitor.innerText == "+" ||
    monitor.innerText == "-" ||
    monitor.innerText == "\u00d7" ||
    monitor.innerText == "\u00f7" ||
    monitor.innerText == "\u0025"
  ) {
    monitor.innerText = "";
  }
}

function inputMon(placeholder) {
  if (monitor.innerText.length <= 15) {
    monitor.innerText = `${monitor.innerText}${placeholder}`;
  } else {
    return;
  }
}

one.addEventListener("click", () => {
  secMon();
  inputMon(1);
});

two.addEventListener("click", () => {
  secMon();
  inputMon(2);
  
});

three.addEventListener("click", () => {
  secMon();
  inputMon(3);
});

four.addEventListener("click", () => {
  secMon();
  inputMon(4);
});

five.addEventListener("click", () => {
  secMon();
  inputMon(5);
});

six.addEventListener("click", () => {
  secMon();
  inputMon(6);
});

seven.addEventListener("click", () => {
  secMon();
  inputMon(7);
});

eight.addEventListener("click", () => {
  secMon();
  inputMon(8);
});

nine.addEventListener("click", () => {
  secMon();
  inputMon(9);
});

zero.addEventListener("click", () => {
  secMon();
  inputMon(0);
  });

doublezero.addEventListener("click", () => {
  secMon();
  inputMon("00");
});

point.addEventListener("click", () => {
   secMon();
   if(monitor.innerText.indexOf('.')==-1){
   inputMon('.');
 }else{
   return;
 }}
 );

del.addEventListener("click", () => {
  monitor.innerText = `${monitor.innerText.slice(
    0,
    monitor.innerText.length - 1
  )}`;
});

allClear.addEventListener("click", () => {
  monitor.innerText = "";
});

plus.addEventListener("click", () => {
  if (monitor.innerText.length <= 16) {
    firstOp=Number(monitor.innerText);
    monitor.innerText = "+";
    plusG=1;
  } else {
    return;
  }
});

minus.addEventListener("click", () => {
  if (monitor.innerText.length <= 16) {
    firstOp=Number(monitor.innerText);
    monitor.innerText = "-";
    minusG=1;
  } else {
    return;
  }
});

multiply.addEventListener("click", () => {
  if (monitor.innerText.length <= 16) {
    firstOp=Number(monitor.innerText);
    monitor.innerText = "\u00d7";
    multiplyG=1;
  } else {
    return;
  }
});

divide.addEventListener("click", () => {
  if (monitor.innerText.length <= 16) {
    firstOp=Number(monitor.innerText);
    monitor.innerText = "\u00f7";
    divideG=1;
  } else {
    return;
  }
});

percent.addEventListener('click',()=>{
  if (monitor.innerText.length <= 16) {
    firstOp=Number(monitor.innerText);
    monitor.innerText = "\u0025";
    percentG=1;
  } else {
    return;
  }
 })

equal.addEventListener('click', ()=>{
  if(plusG==1){
    secondOp=Number(monitor.innerText);
    monitor.innerText=`${firstOp + secondOp}`;
    plusG=0;
  }
  else if(minusG==1){
    secondOp=Number(monitor.innerText);
    monitor.innerText=`${firstOp - secondOp}`;
    minusG=0;
  }
  else if(multiplyG==1){
    secondOp=Number(monitor.innerText);
    monitor.innerText=`${firstOp * secondOp}`;
    multiplyG=0;
  }
  else if(divideG==1){
    secondOp=Number(monitor.innerText);
    monitor.innerText=`${firstOp / secondOp}`;
    divideG=0;
  }
  else if(percentG==1){
    secondOp=Number(monitor.innerText);
    monitor.innerText=`${firstOp * (secondOp / 100)}`;
    percentG=0;
  }else{
    return;
  }
  firstOp=0;
  secondOp=0;

})

