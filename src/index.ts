const sayHi = (name: string, age: number, gender?: string): string => {
  //gender? => gender is optional
  return `Hello ${name} , you are ${age} , you are a ${gender}!`;
};

console.log(sayHi("euna", 21, "female"));

export {};
