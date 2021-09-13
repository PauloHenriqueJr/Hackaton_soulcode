
const { render } = require('ejs')
const Interested = require('../models/campaign-model')

exports.redirect = (req, res) => {
    return res.redirect('/praia-limpa')
}

exports.get_main_page = (req, res) => {
    res.render('views/pages/landing-page')
}
exports.get_partners_page = (req, res) => {
    res.render('views/pages/partners')
}
exports.get_FAQ_page = (req, res) => {
    res.render('views/pages/faq-page')
}

exports.post_add_item = (req, res) => {
    let generic_interest = new Interested();
    generic_interest.name = req.body.name
    generic_interest.email = req.body.email
    generic_interest.phone = req.body.phone
    generic_interest.save((err) => {
        if (err) return res.status(500).send('Erro ao registrar. Tente novament mais tarde');
        return res.redirect('/praia-limpa');
    })
}

//delete
exports.toggle_system_delete_item = (req, res) => {
    console.log(req)
    id_to_delete = req.params.id
    Interested.deleteOne({ _id: id_to_delete }, (err, result) => {
        console.log(result);
        if (err) return res.status(500).send("Erro ao deletar item");
    });
    res.redirect('/system/list');
}

//redirect to list
exports.system_get_list = (req, res) => {
    Interested.find({}, (err, element) => {
        if (err) return res.status(500).send('Erro ao consultar livros');
        res.render('views/pages/list', { items: element });
    });
}

//toggle system add item
exports.toggle_system_add_item = (req, res) => {
    res.render('views/pages/systemAddItem')
}

exports.system_add_item = (req, res) => {
    let generic_interest = new Interested();
    generic_interest.name = req.body.name
    generic_interest.email = req.body.email
    generic_interest.phone = req.body.phone
    generic_interest.save((err) => {
        if (err) return res.status(500).send('Erro ao registrar. Tente novament mais tarde');
        return res.redirect('/system/list');
    })
}

//get edit button click || loads edit form
exports.toggle_system_edit_item = (req, res) => {
    Interested.findById(req.params.id, (err, result) => {
        if (err) return res.status(500).send("Erro ao editar item");
        res.render('views/pages/systemEditItem', { item: result });
    })
}

//save chages
exports.post_system_edit_item = (req, res) => {
    let id = req.body.id
    console.log(id)
    Interested.findById(id, (err, generic_interest) => {
        generic_interest.name = req.body.name
        generic_interest.email = req.body.email
        generic_interest.phone = req.body.phone

        generic_interest.save((err) => {
            if (err) return res.status(500).send('Erro ao registrar. Tente novament mais tarde');
            return res.redirect('/system/list');
        })
    })
}




