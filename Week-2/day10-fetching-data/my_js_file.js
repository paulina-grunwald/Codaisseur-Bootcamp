fetch("https://swapi.co/api/people/3/")
  .then(response => response.json())
  .then(myJson => {
    document.body.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
        fetch(myJson.homeworld)
        .then(secondResponse => secondResponse.json())
        .then(planet => console.log(planet.name))
  })