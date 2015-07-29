'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MessageSchema = new Schema({
  fromUser: String,
  toUser: String,
  isRead:{
    type:Boolean,
    default: false
  },
  content:String,
  subject:String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});


module.exports = mongoose.model('Message', MessageSchema);
