var promise= new Promise((resolve,reject)=>{
    var check= false;
    setTimeout(()=>{ check=true;
        if(check==true)
            {
                resolve("true");
            }
            else{
                reject("false");
            }
    },1000)
    
})
promise.then(result=>console.log(result));
promise.catch(err=>console.log(err));

var api=fetch("https://dummyjson.com/posts");
api.then(result=>result.json()).then(result=>console.log(result.posts[0].body));