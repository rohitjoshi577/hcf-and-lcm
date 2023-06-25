let a = 36;
let b= 48;

function min (x,y){
    if(x>y){
        return y;
    }
    else if(x<y){
        return x;
    }
    
    else return x
}

let c = min(a,b);
let hcf ;

for(let i=c ;i >=2 ;i--){
    if((a%i==0)  && (b%i==0)){
        hcf = i;
        console.log(i);
        let  lcm = (a*b)/hcf;
        console.log(lcm)
        return;
    }
}