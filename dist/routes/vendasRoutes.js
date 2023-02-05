"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _VendasController = require('../controllers/VendasController'); var _VendasController2 = _interopRequireDefault(_VendasController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.post('/', _loginRequired2.default,_VendasController2.default.store);
router.get('/', _VendasController2.default.index);

exports. default = router;
