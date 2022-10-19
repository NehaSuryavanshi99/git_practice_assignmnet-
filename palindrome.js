function Palindrome(N, str) {
    //write code here
    
    
    for(let x = N-1 ; x > 0 ; x--){
        rev+=str[x];    
    }
    
    if(str == rev){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
