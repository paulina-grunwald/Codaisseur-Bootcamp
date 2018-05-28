var temperature = window.prompt('What is the temparature?');

if (temperature < 5) {
  console.log("Parka weather");
}

else if (temperature > 4 && temperature < 18) {
  console.log("Jacket weather");
}

else {
  console.log("T-shirt weather");
}
