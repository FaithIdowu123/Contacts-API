const { ObjectId } = require("mongodb");
const mongodb = require("../models/contacts");
const e = require("express");

exports.getAllContacts = async (req, res) => {
    // swagger.tag=["Users"];
    const result = await mongodb.getDb().db("User").collection('Contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists); 
    });
}

exports.getContactById = async (req, res) => {
    // swagger.tag=["Users"];
    const { id } = req.params;
    const result = await mongodb.getDb().db("User").collection('Contacts').find({ _id: new ObjectId(id) });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); 
    });
}

exports.createContact = async (req, res) => {
    // swagger.tag=["Users"];
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db("User").collection('Contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(201).json(response);
    }
    else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
}

exports.updateContact = async (req, res) => {
    // swagger.tag=["Users"];
    const { id } = req.params;
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db("User").collection('Contacts').updateOne({ _id: new ObjectId(id) }, { $set: contact });
    if (response.modifiedCount > 0) {
        res.status(201).json(response);
    }
    else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
}

exports.deleteContact = async (req, res) => {
    // swagger.tag=["Users"];
    const { id } = req.params;
    const response = await mongodb.getDb().db("User").collection('Contacts').deleteOne({ _id: new ObjectId(id) });
    if (response.deletedCount > 0) {
        res.status(200).json(response);
    }
    else {
        res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
}