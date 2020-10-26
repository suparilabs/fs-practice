const contacts = require('./contacts.model');
const { Router } = require('express');
const router = Router();
router.route('/').get((req, res) => {
    contacts.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const contact = new contacts(req.body);
    contact.save(function (err, c) {
        if (err)
            res.send(err);
        res.json(c);
    });
})

router.route('/:id').get((req, res) => {
    contacts.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    contacts.findByIdAndDelete(req.params.id)
        .then(() => res.json('Contact deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
    contacts.findById(req.params.id)
        .then(contacts => {
            contacts.FirstName = req.body.FirstName;
            contacts.LastName = req.body.LastName;
            contacts.ContactNumber = req.body.ContactNumber;

            contacts.save()
                .then(() => res.json('Contact updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;