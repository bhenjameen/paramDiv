//Write a function that takes one parameter (a whole number/integer) and checks if numbers from 1 to the given parameter (inclusive) are divisible by 2,3,5 while replacing with the appropriate words as specified below


function paramDiv(paramtr) {
    const array = [];
    for (let i = 1; i <= paramtr; i++) {

        var divTrue = false;
        const val = [];

        if (i % 2 == 0) {
            divTrue = true;
            val.push("yu");
        }

        if (i % 3 == 0) {
            divTrue = true;
            val.push("gi");
        }

        if (i % 5 == 0) {
            divTrue = true;
            val.push("oh");
        }

        if (divTrue) {
            array.push(val.join('-'))

        } else {
            array.push(i)
        }
    }
    console.log(array);
}



paramDiv(100);

paramDiv(4691);