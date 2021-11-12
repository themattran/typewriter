const sentence = "hello there from lighthouse labs"; 

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    if (i === sentence.length - 1) {
      process.stdout.write(`${sentence[i]}` + '\n');  
    } else {
      process.stdout.write(`${sentence[i]}`);  
    }
  }, i * 50); 

  //FOREACH METHOD
  
  // let sentenceArr = sentence.split(""); 
  
  // sentenceArr.forEach((char, i) => {
  //   setTimeout(() => {
  //     if (i === sentenceArr.length - 1) {
  //       process.stdout.write(`${char}` + '\n');  
  //     } else {
  //       process.stdout.write(`${char}`);  
  //     }
  //   }, i * 50); 
  // });
}