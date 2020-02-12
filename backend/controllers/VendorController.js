/** 
 *  --- Boas Práticas ---
 * Os 5 métodos fundamentais no Controller. Só podem ter esse métodos. 
 * INDEX: Uma lista daquele recurso.
 * SHOW: Retornar um único daquele recurso.
 * STORE: Criar um recurso.
 * UPDATE: Atualizar um recurso.
 * DELETE: Excluir um recurso.
*/

const Vendor = require('../models/Vendor');

module.exports = {

    index(req, res) {
        Vendor.find().exec((err, vendors) => {
            if(err) {
                return res.status(500).json({ message: err });
            }

           return res.status(200).json({ message: "Vendors fetched Successfully", vendors });
        })
    },

    show(req, res) {
        const vendorId = req.params.id;        
        Vendor.findById(vendorId).exec((err, vendor) => {
            if(err) {
                return res.status(500).json({ message: err });
            }

            return res.status(200).json({ message: 'Vendor Detail fetched Successfully', vendor });
        })
    },  

    store(req, res) {
         Vendor.create(req.body, (err, vendor) => {
            if (err) {                
                return res.status(500).json({ message : err });
            }

            return res.status(201).json({ message: "Vendor Created Successfully", vendor });
        });
    },

    update(req, res) {
        const vendorId = req.params.id;
        Vendor.findByIdAndUpdate(vendorId, { $set: req.body }).exec((err, vendor) => {
            if (err) {
                return res.status(500).json({message : err});
            }
                
            return res.status(200).json({ message: "Vendor updated", vendor });
        });
    },

    delete(req, res) {
        const vendorId = req.params.id;
        Vendor.findByIdAndRemove(vendorId).exec((err, response) => {
            if (err) { 
                return res.status(500).json({ message: err });
            }

            return res.status(200).json({ message: "Vendor Deleted", response });
        });
    }

}