const routes = require("express").Router();
const contactController = require("../controllers/contacts");

// Define routes for contacts
routes.get("/", contactController.getAllContacts);
routes.get("/:id", contactController.getContactById);

module.exports = routes;