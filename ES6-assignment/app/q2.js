var videoNames = new Array();

//ques 2 (i)
let list = document.getElementById("list").getElementsByTagName("li");
for (var i = 0; i < list.length; i++) {
    videoNames.push(list[i].innerHTML);
}

//ques 2 (ii)
var flexBoxArray= videoNames.filter((a)=>a.includes("Flexbox"));

//ques 2 (iii)
let arrayTime=new Array();
for(var i=0;i<list.length;i++)
{
    arrayTime.push(list[i].getAttribute("data-time"));
}

//ques 2 (iv)
let arraySecond = new Array();
arraySecond = arrayTime.map((a) => a.split(":")).map((a) => (Number(a[0] * 60) + Number(a[1])));

//ques 2 (v)
let totalTime;
totalTime=arraySecond.reduce((total,num)=>total+num);

export {list, flexBoxArray, arrayTime, arraySecond, totalTime};

