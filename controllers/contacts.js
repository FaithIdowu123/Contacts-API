const mongodb = require("../models/contacts");

exports.getAllContacts = async (req, res) => {
    const result = await mongodb.getDb().db("User").collection('Contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists); 
    });
}

exports.getContactByFnameAndLname = async (req, res) => {
    const { fname, lname } = req.params;
    const result = await mongodb.getDb().db("User").collection('Contacts').find({ firstName: fname, lastName: lname });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); 
    });
}