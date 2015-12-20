var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

module.exports = mongoose.model('Warzone', {
	uuid: String,
	name: String,
	kits: [],
	kills: Number,
	deaths: Number,
	matches: String
}, 'warzone');