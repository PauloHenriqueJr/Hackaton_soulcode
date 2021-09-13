const express = require('express')
const campaignController = require('../controllers/campaign-controller')
const router = express.Router()

//redirect to main page
router.get('/', campaignController.redirect)

//load main page
router.get('/praia-limpa', campaignController.get_main_page)

//load FAQ page
router.get('/faq', campaignController.get_FAQ_page)

//load FAQ page
// router.get('/praia-limpa/parceiros', campaignController.get_partners_page)

//enter system interface
router.get('/system/list', campaignController.system_get_list)

//toogle system interface buttons
router.post('/system/editItem/:id', campaignController.toggle_system_edit_item)
router.post('/system/deleteItem/:id', campaignController.toggle_system_delete_item)
router.post('/system/addItem', campaignController.toggle_system_add_item)

//forms
router.post('/system/editItem', campaignController.post_system_edit_item)
router.post('/system/add', campaignController.system_add_item)
router.post('/interest/add', campaignController.post_add_item)



module.exports = router