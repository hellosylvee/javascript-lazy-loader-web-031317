"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"

  return carsJSON.map(function(car) {
    var car = `<div class="col-md-4 car">
                 <h2>${car.Make}</h2>
                 <p><strong>Model:</strong> ${car.Model}</p>
                 <p><strong>Year:</strong> ${car.Year}</p>
               </div>`
    return car
  })
}


function addCarsToDOM(carsJSON) {

  // this function should pass carsJSON to formatCars() and then
  var showCars = formatCars(carsJSON); //[array of objects]
  console.log("awesome possum")
  // add the resulting HTML to the div with an id of "cars"
  $("#cars").append(showCars);

}

let page = 1

function fetchJSON() {
  console.log("You're fetching JSON son!");
  const numOfCars = 3
  const url = `http://mimeocarlisting.azurewebsites.net/api/cars/${page}/${numOfCars}`
  // this function will make the ajax call
  $.ajax({
    method: 'GET',
    url: url,
    dataType: "jsonp",
    // on success of the ajax call, it will pass the returned data
    success: function(carsJSON) {
      addCarsToDOM(carsJSON)
    },
    error: function(err){
      console.log("error!!!")
    }
  })
  page++
}
