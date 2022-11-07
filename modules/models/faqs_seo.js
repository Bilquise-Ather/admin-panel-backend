'use strict';
let mongoose = require("../helpers/asf_mongodb"),
    Schema = mongoose.Schema;

let tempSchema = new Schema({
    seotitle: { type: String },
    seodescription: { type: String },
    seokeyword: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, { versionKey: false, collection: 'faqs_seo' });

let VIModel = mongoose.model("faqs_seo", tempSchema);
module.exports = VIModel;



