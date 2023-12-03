const strToReplace = "{ duration : { gte : 5}}";

const newStr = strToReplace.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

console.log(strToReplace);
console.log(newStr);