function encode(a) {
  // seu código aqui
  let input = "how are you today";
  let resultEnc = input;
  for (let i = 0; i < input.length; i++) {
    resultEnc = resultEnc.replace("a", "1");
    resultEnc = resultEnc.replace("e", "2");
    resultEnc = resultEnc.replace("i", "3");
    resultEnc = resultEnc.replace("o", "4");
    resultEnc = resultEnc.replace("u", "5");
  }
  console.log(resultEnc);
}

function decode(a) {
  // seu código aqui
  let input = "p5tz gr3ll1";
  let result = input.replace("1", "a");
  result = result.replace("2", "e");
  result = result.replace("3", "i");
  result = result.replace("4", "o");
  result = result.replace("5", "u");

  console.log(result);
}
