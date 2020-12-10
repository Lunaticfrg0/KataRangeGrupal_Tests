ParseInput = (input) =>{
    const obj = {};
    obj.leftP = input[0]
    obj.rightP = input[input.length -1]
    obj.nums = input.substring(1, input.length -1 ).split(",").map(num=>Number(num));
    return obj;
}
AreEquals = (r1, r2) =>{
    const [L1, R1] = EndPoints(r1)
    const[L2, R2] = EndPoints(r2)
    return L1 === L2 && R1 === R2;
}
EndPoints = (r) =>{
    const R = ParseInput(r);
    let l1, r1; 
    if(R.leftP === '(') l1 = R.nums[0] + 1; 
    else l1 = R.nums[0];
    if(R.rightP === ')') r1 = R.nums[R.nums.length - 1] - 1;
    else r1 = R.nums[R.nums.length -1];
    return [l1, r1];
}

module.exports = {
    EndPoints : EndPoints,
    AreEquals : AreEquals,
}