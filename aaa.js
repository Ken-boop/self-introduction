let nume=document.getElementById("numeron");

let hun=Math.floor(Math.random()*10);

let ten=Math.floor(Math.random()*10);
while (hun==ten) {
	ten=Math.floor(Math.random()*10);
}

let one=Math.floor(Math.random()*10);
while (hun==one||ten==one) {
	one=Math.floor(Math.random()*10);
}
let button=document.getElementById("btn");

let x=0,y=0,z=1;

button.addEventListener("click",function(){

    let H=document.getElementById("H");
	console.log(H.value);
	let T=document.getElementById("T");
	console.log(T.value);
	let O=document.getElementById("O");
	console.log(O.value);

	if (H.value==T.value||H.value==O.value||T.value==O.value){
		alert("数が重複しているので、選択しなおしてください");
	}else{
	

	if (H.value==hun){
		x++;
	}else if(H.value==ten||H.value==one){
		y++;
	};
	if (T.value==ten){
		x++;
	}else if(T.value==hun||T.value==one){
		y++;
	};
	if (O.value==one){
		x++;
	}else if(O.value==ten||O.value==hun){
		y++;
	};	


		let result=document.createElement("p");
		result.innerHTML=z+"回目："+H.value+T.value+O.value+"  "+x+'Eat'+y+'Bite';
		nume.appendChild(result);
		if (x==3){
			let result=document.createElement("p");
			result.innerHTML="正解おめでとう("+z+"回の試行)";
			nume.appendChild(result);
		}



	x=0,y=0;
	z++;

	}

});




