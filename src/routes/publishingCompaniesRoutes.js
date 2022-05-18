import express from 'express';
import PublishingCompanyController from '../controllers/publishingCompaniesController.js';

const router = express.Router();

router
    .get("/publishingCompanies",          PublishingCompanyController.getAllPCs)
    .get("/publishingCompanies/:id",      PublishingCompanyController.getPCById)
    .post("/publishingCompanies",         PublishingCompanyController.createPC)
    .put("/publishingCompanies/:id",      PublishingCompanyController.updatePC)
    .delete("/publishingCompanies/:id",   PublishingCompanyController.deletePC);

export default router;