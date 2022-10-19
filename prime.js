function Prime(num) {
    // Write code here
        let isprime = "Yes";
    
    if(num === 1){
        isprime = "No";
    }else if(num === 2){
        isprime = "Yes";
    }else if(num === 3){
         isprime = "Yes";
    }else{
        for(let x = 2 ; x < num ; x++){
            if(num % x === 0){
                isprime = " ";
                
            }
        }
    }
    console.log(isprime);
}