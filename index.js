// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(d){
    return d.toLowerCase();
  })
}

function nameToAttributes(drivers){
  debugger;
const driverSep = {};
return drivers.map(function(d){
  let full = d.split(" ")
return Object.assign(driverSep,{firstName: full[0], lastName: full[1]})
})
}

function attributesToPhrase(drivers){
  const drivers1 = drivers
return drivers1.map(function(d){
    return "${d['name']} is from ${d['hometown']";
  })
}
