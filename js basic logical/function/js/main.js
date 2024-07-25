

//type-1

function palindrom(a) {
     let sum=0;
	  while(a!=0){
	     let rem=a%10;
		  a=(a-rem)/10
		   sum=(sum*10)+rem
	  }
	 return sum
	 }
	 function check(){
	    let b=232;
		 let x=palindrom(b);
		 
		 if(x==b){
			 console.log("palindrom")
		 }
		 else{
			 console.log("not a palindrom")
		 }
	 }
	 check()
		 
		 
		        //type-2
				
				
				
				  function add(c,d){
					   let z=c+d;
					    // return z
				  }
				  
				  function display(a,b,c){
					  let d=c(a,b)
					  // console.log(d)
					  // return d
				  }
				  let e=display(8,7,add)
				   console.log(e) 
					  