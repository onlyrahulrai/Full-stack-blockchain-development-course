/*
    Question 1. Are Higer Order Functions and Call back functions the same? if not, briefly explain about both functions.

    Answer 1. Higher Order functions and Callback functions are different

    Higer-Order Function(HoF): A function that takes another function(s) as an argument(s) and/or returns a function as a value.

    Callback Functions(CB): A function that is passed to another function.
*/

/* 
    Question 2. Is filter a Higher Order function in Javascript? If yes, why?.

    Answer 2.Filter function is a Higher-Order Function.because A higher-order function is a function that either returns a function or takes in a function as an argument. The filter() function creates a new array populated with all the elements that passed the condition of the callback function; Just like the map function, the filter function also accepts thress arguments: an element, an index and an array.So filter function is a higher order function.
*/

/*
    Question 3. Give an example of a Higher Order function and a call back function used in the same program.

    Answer 3.

        function incrArr(arr, n) {
            let result = [];
            arr.forEach((element) => {
                result.push(element + n);
            });
            return result;
        }

        function decrArr(arr, n) {
            let result = [];
            arr.forEach((element) => {
                result.push(element - n);
            });
            return result;
        }

        function smartOperation1(arr, op, n) {
            let result = [];

            arr.forEach((element) => {
                switch (op) {
                case "incr":
                    result.push(element + n);
                    break;
                case "decr":
                    result.push(element - n);
                    break;
                default:
                    return null;
                }
            });

            return result;
        }

        function incr(element, n) {
            return element + n;
        }

        function decr(element, n) {
            return element - n;
        }

        function mul(element, n) {
            return element * n;
        }

        function smartOperation2(arr, op, n) {
            let result = [];

            arr.forEach((element) => result.push(op(element, n)));

            return result;
        }

        console.log(smartOperation2([1, 2, 3], incr, 2));
        console.log(smartOperation2([1, 2, 3], decr, 2));
        console.log(smartOperation2([1, 2, 3], mul, 2));
*/



/*
    Question 4.Carefully check the example below:
        a) What will be the output of this program ?
        b) Which function is a Higher Order function here ?
    
        const names= ['John', 'Tina','Kale','Max']

        function useFunction(arr,fn){
            for(let i=0; i<arr.length; i++){
                fn(arr[I]);
            }
        }
        function argFn (name){
            console.log("Hello " + name );
        }
        useFunction(names,argFn);


    Answer 4(a).Hello John 
                Hello Tina 
                Hello Kale
                Hello Max

    Answer 4(b).useFunction is a higher order function which takes two parameter one is an array of names and another is a function which will add another string Hello to passed parameter.
    

*/
