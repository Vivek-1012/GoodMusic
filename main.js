const motivationalBtn = document.querySelector("#motivational");
const outputM = document.querySelector("#motivationalP")

motivationalBtn.addEventListener("click", printlist)
// var list = ["happy "," sad"];
// function printlist(){
//     // for (var i=0; i>list.length; i++){
//  console.log(list);
//  outputM.innerText=[list];

//     }


function music1 (music , artist , raiting){

music1 ("ruk jana nhi", "kishor kumar", "4.5/5")
music1 ("chak de india", "surinder","4/5")
}

function printlist() {
    outputM.innerText=(music1[1]);
}