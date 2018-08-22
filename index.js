// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(d){
    return d.toLowerCase();
  })
}

function nameToAttributes(drivers){
const driverSep = {}
drivers.map(function(d){
  let full = d.split(" ")
Object.assign(driverSep,{firstName: full[0], lastName: full[1]})
})
return driverSep;
}
