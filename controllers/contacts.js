const { ObjectId } = require("mongodb");
const mongodb = require("../models/contacts");

exports.getAllContacts = async (req, res) => {
    const result = await mongodb.getDb().db("User").collection('Contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists); 
    });
}

exports.getContactById = async (req, res) => {
    const { id } = req.params;
    const result = await mongodb.getDb().db("User").collection('Contacts').find({ _id: new ObjectId(id) });
    result.toArray().then((lists) => {
        console.log(lists);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); 
    });
}