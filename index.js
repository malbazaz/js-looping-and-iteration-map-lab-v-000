// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(d){
    return d.toLowerCase();
  })
}

function nameToAttributes(drivers){
const driverSep = {}
return drivers.map(function(d){
  const full = d.split(" ")
driverSep = Object.assign({firstName: full[0], lastName: full[1]})
})
return driverSep;
}
