function getArray(){
                   return ["hello","I","am","ankit"];
                   }
                   var[greeting,pronoun]=getArray();

                   console.log(greeting);
                   console.log(pronoun);

 
 
                   var [greeting="hi",name="ankit"]=  ["hello"];

                    console.log(greeting);
                    console.log(name);


                    const [a,b,...restofthevalue]=[1,2,3,4,'x','y',100];
                    console.log(a);
                    console.log(b);
                    console.log(restofthevalue);


                    const obj= {x: 123, y:'yo yo'}
                    const {x,y}=obj;



                    console.log(x);
                    console.log(y);


                    // const{a,b}=obj;

                    // console.log(a);
                    // console.log(b);










