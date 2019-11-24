// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver,key,value){

    // newDriver = {...driver} <--INCORRECT(THIS DOES NOT RETURN THE ORGINAL DRIVER)
    // newDriver[key] = value
    // return newDriver <--RETURNS ONLY NEW DRIVER
    return Object.assign({},driver,{[key]:value}) //<-- CORRECT(THIS RETURNS THE ORGINAL DRIVER)
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key,value){
    driver[key]=value //<-- destructively updates the driver directly 
    return driver;
}

function deleteFromDriverByKey(driver,key){
    const newDriver = Object.assign({}, driver)

    delete newDriver[key] //<-- brakcets for deleting, pass key from param and delete

    return newDriver
    
}

function destructivelyDeleteFromDriverByKey(driver ,key){
   delete driver[key]; //<-- use brackets when deleting
   return driver; 
    
}
