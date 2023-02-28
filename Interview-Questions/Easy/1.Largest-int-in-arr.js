//Write a function that takes a list of numbers, numbers, and returns the largest number in the list.
//If there are no numbers in the list, return 0.


/*First define a function called solution, that has the parameters numbers. Numbers will be the list
we feed the function*/
const solution = (numbers) => {

    let largest = 0; /*We define a variable named largest and set its value to zero. This will be the value that compares itself to
    each element in the array*/

    numbers.forEach((element) => {

        if (Number.isInteger(element) && element>largest) { 
            largest = element;
        }
        /*By implementing this condition, first we check if the element is a number. If so we can get the largest number.
         For example, consider an array [2,1,0,9]. If the element is greater than any of than the numbers, we assign that 
         element to largest.
        
        Is element[0](2) > 0? yes, largest = 2
        Is element[1](1) > 2? No, largest remains = 2
        is element[2](0) > 2? no Largest reamins =2
        is element[3](9) > 2? Yes, largest = 9
        */

        //This just insures if theres no number or an empty list the function will return zero
        else {
            return 0;
        }

    });

    return largest;
}

console.log(solution([3,7,2,9,-76,"z"]));