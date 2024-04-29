/*
Write function "convertNested" that will convert an array of nested objects into
a normalized object containing only flattened data. The final object must be
normalized by ids - each key is an id with a value of all the data in the
original obj, flattened. You must exclude the key of "details" but make sure to
flatten its original data.

ex: {
    [id]: { <all keys from original object, flattened. 'details' key is
    excluded>
    }
}

Use console logging to inspect the data you are working with.
*/

/*** do not change or modify below setup code ***/
const { faker } = require('@faker-js/faker')
const genNestedData = (length=10, result=[]) => {
    for(let i=0; i<length; ++i){
        result.push({
            id: faker.database.mongodbObjectId(),
            name: faker.company.name(),
            location: faker.address.cityName(),
            details: {
                account_number: faker.finance.account(),
                account_name: faker.finance.accountName(),
                routing_number: faker.finance.routingNumber(),
                balance: faker.finance.amount()
            }
        })
    }
    return result
}

const dataArray = genNestedData(5) // generate an array of nested objects, length of 5 (override default length of 10)

const convertNested = (array) => {
    // your code here
    // convert array to normalized object
    // return the normalized object
    // details key is excluded, but its data is flattened
    let flattenedData = {}
    for (let i = 0; i < array.length; i ++) {
        let id = array[i].id
        let detailsVal = array[i].details
        let newObj = {...array[i]}
        delete newObj.details
        flattenedData[id] = {...newObj, ...detailsVal}
    }
    return flattenedData;
}

// console.log('dataArray: ', dataArray)
// console.log(convertNested(dataArray))

/*** Do not change the code after this line ***/
module.exports = {
    convertNested,
    genNestedData
};

