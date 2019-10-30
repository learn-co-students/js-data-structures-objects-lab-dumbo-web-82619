// Write your solution in this file!
var driver = {
    name: "Sam",
    address: "12 Broadway"
}

// const address = {'11 Broadway'}

function updateDriverWithKeyAndValue(driver,key,value){
    return Object.assign({}, driver, { [key]: value });
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
 
  return driver;  

}
function deleteFromDriverByKey(driver, key){
   let newObject = Object.assign({},driver)
     delete newObject[key]
        return newObject
}
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}
