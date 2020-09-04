"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyCLAb81cLOT50zp1FYRYK6Sem4y43xnT7I",
  authDomain: "tinderclone-6cb80.firebaseapp.com",
  databaseURL: "https://tinderclone-6cb80.firebaseio.com",
  projectId: "tinderclone-6cb80",
  storageBucket: "tinderclone-6cb80.appspot.com",
  messagingSenderId: "1024334380714",
  appId: "1:1024334380714:web:890c9d6db65eaf18f4dad3",
  measurementId: "G-TDF1BL2T6Q"
};

var firebaseApp = _firebase["default"].initializeApp(firebaseConfig);

var database = firebaseApp.firestore();
var _default = database;
exports["default"] = _default;