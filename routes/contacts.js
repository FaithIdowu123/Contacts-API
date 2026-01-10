const routes = require("express").Router();
const contactController = require("../controllers/contacts");

// Define routes for contacts
routes.get("/", contactController.getAllContacts);

routes.get("/:id", contactController.getContactById);

routes.post("/", contactController.createContact);

routes.put("/:id", contactController.updateContact);

routes.delete("/:id", contactController.deleteContact);

module.exports = routes;