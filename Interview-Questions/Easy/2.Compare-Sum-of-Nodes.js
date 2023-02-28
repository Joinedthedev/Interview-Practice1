/*<-----------QUESTION------------>

Suppose you’re given a binary tree represented as an array. For example, [3,6,2,9,-1,10]. Write a function 
that determines whether the left or right tree is larger. The size of each branch is the sum of the node values. 
The function should return the string “Right” if the right side is larger and “Left” if the left side is larger. 
If the tree has 0 nodes, if if the size of the branches are equal, return the empty string using JavaScript. 
(-1 should be treated as a non existent value)
*/ ///

//first we define a function that takes in array that represents a binary tree.
const solution = (array) => {

    /*within that function we define a recursive function that will sum up the nodes based on their
    index*/

    const sumNodes = (nodeIndex) => {

        //if the node is not included in the length of the array or the node=-1 we should
        //return 0 hence treating -1 as a non existent value
        if (nodeIndex >= array.length || array[nodeIndex] === -1) {
            return 0;
        }

        /*Assuming the root index stars at zero, these formula can be used to get the index*/
        const leftSum = sumNodes(2 * nodeIndex + 1)
        const rightSum = sumNodes(2 * nodeIndex + 2)

        return array[nodeIndex] + leftSum + rightSum; //this returns the summmed up value
    }

    //we store the sum of the left and right side in these constants
    const leftSum = sumNodes(1);
    const rightSum = sumNodes(2);

    //simple if else statement that returns which side is greater
    if (leftSum > rightSum) {
        return "Left";
    }

    else if (rightSum > leftSum) {
        return "Right";
    }

    else {
        return "";
    }
}

console.log(solution([1, 4, 100, 5]))

