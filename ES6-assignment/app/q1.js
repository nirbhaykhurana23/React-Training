function q1(numbers)
{
  let orignalNumber=numbers;
  let numbersGreater=orignalNumber.filter((num)=>num>70);
  console.log("Numbers greater than 70 are: " + numbersGreater);
}

export { q1 };