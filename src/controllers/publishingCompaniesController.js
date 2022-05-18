import publishingCompanies from '../models/PublishingCompany.js';

class PublishingCompanyController {
    static getAllPCs = (req, res) => {
        publishingCompanies.find((err, publishingCompanies) => {
            if (err) {
                res.status(500).json({
                    message: 'Internal server error'
                });
            } else {
                res.status(200).json(publishingCompanies);
            }
        });
    }

    static getPCById = (req, res) => {
        const id = req.params.id;

        publishingCompanies.findById(id, (err, publishingCompany) => {
            if (err) {
                res.status(400).json({
                    message: 'Publishing Company not found'
                });
            } else {
                res.status(200).json(publishingCompany);
            }
        })
    }

    static createPC = (req, res) => {
        let publishingCompany = new publishingCompanies(req.body);

        publishingCompany.save((err) => {
            if(err){
                res.status(500).json({ message: `${err.message} - Fail on create publishingCompany.` });
            }
            else {
                res.status(201).json({ message: 'Publishing Company created successfully.', publishingCompany });
            }
        })
    }

    static updatePC = (req, res) => {
        const id = req.params.id;

        publishingCompanies.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(err){
                res.status(500).json({ message: `${err.message} - Fail on update the Publishing Company.` });
            }
            else {
                res.status(200).json({ message: 'Publishing Company updated successfully.' });
            }
        })
    }

    static deletePC = (req, res) => {
        const id = req.params.id;

        publishingCompanies.findByIdAndRemove(id, (err) => {
            if(err){
                res.status(500).json({ message: `${err.message} - Fail on delete the Publishing Company.` });
            }
            else {
                res.status(200).json({ message: 'Publishing Company deleted successfully.' });
            }
        })
    }
}

export default PublishingCompanyController;