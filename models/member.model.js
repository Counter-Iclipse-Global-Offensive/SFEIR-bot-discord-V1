const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    memberId: {
        type: String,
        required: true
    },
    vihBadge: {
        type: Boolean,
        default: false
    },
    vihGoodAwnsers: {
        type: Number,
        default: 0
    },
    hepatiteBadge: {
        type: Boolean,
        default: false
    },
    hepatiteGoodAwnsers: {
        type: Number,
        default: 0
    },
    papillomavirusBadge: {
        type: Boolean,
        default: false
    },
    papillomavirusGoodAwnsers: {
        type: Number,
        default: 0
    },
    herpesBadge: {
        type: Boolean,
        default: false
    },
    herpesGoodAwnsers: {
        type: Number,
        default: 0
    },
    syphilisBadge: {
        type: Boolean,
        default: false
    },
    syphilisGoodAwnsers: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('member', memberSchema);