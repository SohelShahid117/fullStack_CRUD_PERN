import * as clientService from "../services/clientServices.js";

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    res.status(200).json(clients);
  } catch (err) {
    console.error("Error fetching clients:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const createClients = async (req, res) => {
  try {
    const clientsData = req.body;
    const newClient = await clientService.createClients(clientsData);
    res.status(200).json(newClient);
  } catch (err) {
    console.error("Error adding client:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const updateClients = async (req, res) => {
  try {
    const clientId = req.params.id;
    const clientData = req.body;
    const updateClient = await clientService.updateClients(
      clientId,
      clientData
    );

    if (!updateClient) {
      return res.status(404).json({ message: "client not found" });
    }
    res.status(200).json(updateClient);
  } catch (err) {
    console.error("Error update clients:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const deleteClients = async (req, res) => {
  try {
    const clientId = req.params.id;
    const deleteClient = await clientService.deleteClient(clientId);

    if (!deleteClient) {
      return res.status(404).json({ message: "client not found" });
    }
    res.status(200).json(deleteClient);
  } catch (err) {
    console.error("Error delete client:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const searchClients = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const clients = await clientService.searchClients(searchTerm);
    res.status(200).json(clients);
  } catch (err) {
    console.error("Error searching clients:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
