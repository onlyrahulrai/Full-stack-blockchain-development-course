/* 
    Question-1. Carefully observe this example.
        a) Is the InnerFunction() a closure?
        b) What is output of this program


    function OuterFunction() {
    var outerVariable = 100;
    function InnerFunction() {
        alert(outerVariable);
    }
    return InnerFunction;
    }
    var innerFunc = OuterFunction();
    innerFunc();

    Answer - 1 : 100; 

*/

/*
    Question - 2. What is the difference between a closure and a scope ?

    Answer - 2. Whenever We create a function within another function, then the inner function is closure. This closure is usually returned so you can use the outer function's variables at a later time.Whereas a scope in javascript defines what variables you have access to. There are two kinds of scope - Global scope and local scope.
*/

/* 
    Question - 3. What is lexical scope and how is it related to closure?

    Answer - 3. The lexical scope allows a function scope to access statically the variables from the outer scopes. Finally, a closure is a function that captures variables from its lexical scope. In simple words, the closure remembers the variables from the place where it is defines, no matter where it is executed. 
*/


/*
    Question - 4. Output of following closure?

    for(var i = 0; i < 3; i++){
        setTimeout(function log(){
            console.log(i);
        },100)
    }


    Answer - 4.

            3
            3
            3
*/