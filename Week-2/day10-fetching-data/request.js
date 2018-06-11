const request = new XMLHttpRequest()
request.addEventListener("load", function() {
  document.body.innerHTML =
    "<pre>" +
    JSON.stringify(JSON.parse(this.responseText), null, " ") +
    "</pre>"
})
request.open("GET", "https://swapi.co/api/people/1/")
request.send()


fetch("https://swapi.co/api/people/3/")
  .then(response => response.json())
  .then(myJson => {
    document.body.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })