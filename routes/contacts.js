const routes = require("express").Router();
const contactController = require("../controllers/contacts");

// Define routes for contacts
routes.get("/", contactController.getAllContacts);
routes.get("/:fname/:lname", contactController.getContactByFnameAndLname);

module.exports = routes;