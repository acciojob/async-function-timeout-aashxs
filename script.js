//your JS code here. If required.
let output=document.querySelector("#output")
let text=document.querySelector("#text")
let delay=document.querySelector("#delay")

function display(){
	const promise1=()=>{
		return  new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(text.value)
			},delay.value)
		})
	}

	async function result(){
		let ans=await promise1();
		output.innerText=ans;
	}

	result();
	
}