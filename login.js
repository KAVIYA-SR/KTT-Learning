const submit=document.getElementById("button");

submit.addEventListener('click',()=>{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var msg1=document.getElementById("mail");
    var msg2=document.getElementById("pass");
    console.log(email,password);
    // console.log(email.length);
    if(email.length>12 && email.includes('@') && email.includes('.') && !email.includes(" ")){
        var a=email.indexOf('@');
        var b=email.indexOf('.');
        if(email.substring(b)=== ".com"){
            var domain=email.substring(a+1,b);
            if(domain!=="gmail" && domain !== "yahoo" && domain!=="outlook" && domain!=="hotmail"){
                msg1.style.color="red";
                msg1.innerHTML="please enter a valid email id";
                setTimeout(() =>{
                    msg1.innerHTML="";
                },2000)
            }
            else{
                var pass=true;
                const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                const lower="abcdefghijklmnopqrstuvwxyz";
                const special="@#!$%^&*(){_+}:?<>~`][";
                if(password.length>=6 ){
                    var up=false,lo=false,sp=false,nu=false;
                    for(const char of password){
                        
                        if(upper.includes(char))
                            up=true;
                        if(lower.includes(char))
                            lo=true;
                        if(char==0||char==1||char=='2'||char=='3'||char=='4'||char=='5'||char==6||char=='7'||char=='8'||char=='9')
                            nu=true;
                        if(special.includes(char))
                            sp=true;
                    }
                    console.log(up,lo,sp,nu)
                    if(up==true && lo==true && nu==true && sp==true && !password.includes(" ")){
                        msg2.style.color="green";
                        msg2.innerHTML="You have successfully loged in";
                        setTimeout(() =>{
                            msg2.innerHTML="";                          
                        },2000)
                    }
                    else{
                        msg2.style.color="red";
                        msg2.innerHTML="please enter a valid password";
                        setTimeout(() =>{
                            msg2.innerHTML="";
                            password.innerHTML="";
                        },2000)
                    }
                }
                else{
                    msg2.style.color="red";
                    msg2.innerHTML="please enter a password";
                    setTimeout(() =>{
                        msg2.innerHTML="";
                    },2000)
                }
            }
        }
        else{
            msg1.style.color="red";
            msg1.innerHTML="please enter a valid email id";
            setTimeout(() =>{
                msg1.innerHTML="";
                email.innerHTML="";
                password.innerHTML="";
            },2000)    
        }
    }
    else{
        msg1.style.color="red";
        msg1.innerHTML="please enter a valid email id";
        setTimeout(() =>{
            msg1.innerHTML="";
            email.innerHTML="";
            password.innerHTML="";
        },2000)
    }
    document.getElementById("email").innerText="";
    document.getElementById("password").innerText="";
})

