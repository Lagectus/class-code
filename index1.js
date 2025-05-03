let a ={x:10} //x011
let b ={y:11} //x012
console.log(a==b);
let user={
    ...a,...b,sayName(){
        console.log(this.x);
        
    }
}
Object.assign(user,a,b)
console.log(user.sayName());

let areOccurrencesEqual= (s) => {
    let obj = {}
    for(let i of s){
        if(!obj[i]){
            obj[i]=1
        }
        else{
            obj[i]+=1
        }
    }
    let set = new Set()
    for(let i in obj){
        set.add(obj[i])
    }    
   return [...set].length ==1 ? true : false
    
};

// console.log(areOccurrencesEqual('aabba'))
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    let prefix = strs[0];
    for(let i = 1;i<strs.length;i++){
        while(strs[i].indexOf(prefix) !==0 ){
            prefix= prefix.slice(0,-1);
            if(!prefix) return ""
        }
    }
    return prefix
    
};

console.log(longestCommonPrefix(["lower","fow","flight"]));
<!-- <script type="module" src="/src/main.jsx"> -->
<!-- <script>     console.log("fff")
  let obj1 = {
  name:"pritam",
  age:20,

}
function sayName(p,pa){
    console.log(`your name is ${this.name} ${this.age} ${p},${pa}`); 
  }

let obj2 = {
  name:"ram",
  age:20

}
let obj3 = {
  name:"shayam",
  age:20,
}
let obj4 = Object.create(obj3)
// console.log(obj4);

// console.log(obj4.name);
// // call apply bind
// sayName.call(obj1,"kfkf","dkdkfjd")
// sayName.apply(obj1,["kfkf","dkdkfjd"])
// let fg= sayName.bind(obj1,"kfkf","dkdkfjd")
// fg()
// console.log(obj1);
// function + obj 
function fn(){

}
fn.meraHello =()=>{
  console.log("fffff");
  
}
fn.meraHello()
// console.log(Array.prototype);

  
// console.log(fn.prototype,'dd');

let userMethods = {
saydescription(){
      console.log(this,'this');
      console.log(this.age,this.email,this.name);
      
      
    }
  }

function CreateUser(name,age,email,phone){
  // let obj = Object.create(userMethods)
  //    obj.name =name
  //   obj.age = age
  //   obj.email = email
  //   obj.phone = phone
  //   return obj
  this.name = name
  this.age = age;
  this.email = email;
  this.phone = phone;

  CreateUser.prototype.sayName=()=>{
    console.log(this,'this');
      console.log(this.age,this.email,this.name);
      
      
  }
  
}



function CreateUser1(name,age,email,phone){
 
  this.name = name
  this.age = age;
  this.email = email;
  this.phone = phone;

  CreateUser.prototype.sayName=()=>{
    console.log(this,'this');
      console.log(this.age,this.email,this.name);
      
      
  }
  
}

let user1=new CreateUser('pritm',20,'pritam@gmail','1234')
// let user2= createUser('pritm',20,'pritam@gmail','1234')
// let user3= createUser('pritm',20,'pritam@gmail','1234')
// let user4= createUser('pritm',20,'pritam@gmail','1234')
console.log(user1.sayName());





</script> -->