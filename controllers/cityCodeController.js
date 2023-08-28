const { cityCodeList} = require("../mongoConfig");
const mongoDb = require("mongodb");
const addCityCodes = (req) => {
    return cityCodeList.insertOne(req.body)
}

const getAllCodes = (req) => {
    const { page = 1, count = 10 } = req.query;
   return cityCodeList.find({})
   .skip((parseInt(page) - 1) * parseInt(count))
   .limit(parseInt(count))
   .sort("title","asc").toArray();
}

module.exports = { addCityCodes, getAllCodes}
