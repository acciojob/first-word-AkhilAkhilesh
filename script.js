function firstWord(s) {
  // your code here
	s=s.trim()
	let newstr=""
	for(let c of s){
		if(c!==" ") newstr+=c;
		else return newstr;
	}
	return newstr;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
