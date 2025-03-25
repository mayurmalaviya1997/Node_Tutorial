
const { readData } = require('../utils/index.js');


const getAllItems = async (req, res) => {
  let data = await readData()
  console.log(`====>> DATA :::`,data)
  res.status(200).json()
};

const getItem = (req, res) => {

};

const createItem = (req, res) => {

};

const updateItem = (req, res) => {

};

const deleteItem = (req, res) => {

};


module.exports = {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}