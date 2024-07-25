let x=parseInt(prompt("enter the num"));
let y=x;
let sum=0;
   while(x!=0){
     let rem=x%10
	  x=(x-rem)/10
	  sum=(sum*10)+rem
	  }
	      document.write(sum) 
	  // if(sum==y){
	        // document.write("this is palintrom")
			// }
			// else{
			 // document.write("not a palintrom")
			 // }
			 