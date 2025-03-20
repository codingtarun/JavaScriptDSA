export function calculator(num1,num2,opt){
    /**
     *
     * Returns the result of the calculations.
     * @param {number} num1 - the first number
     * @param {number} num2 - the second number
     * @param {string} operator - the operator to use in the calculation.
     * @return {number} - the result of the calculation.
     *
     */
    let result = 0;
    switch (opt){
        case '+':
            result = num1+num2;
            break;
        case '-':
            result = num1-num2;
            break;
        case '*':
            result = num1*num2;
            break;
        case '/':
            result = num1/num2;
            break;
        default:
            throw new Error("Invalid Operator: " + opt);
    }
    return result;
}