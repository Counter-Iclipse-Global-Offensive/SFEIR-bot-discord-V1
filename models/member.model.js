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
    vihGoodAnswers: {
        type: Number,
        default: 0
    },
    hepatiteBadge: {
        type: Boolean,
        default: false
    },
    hepatiteGoodAnswers: {
        type: Number,
        default: 0
    },
    papillomavirusBadge: {
        type: Boolean,
        default: false
    },
    papillomavirusGoodAnswers: {
        type: Number,
        default: 0
    },
    herpesBadge: {
        type: Boolean,
        default: false
    },
    herpesGoodAnswers: {
        type: Number,
        default: 0
    },
    syphilisBadge: {
        type: Boolean,
        default: false
    },
    syphilisGoodAnswers: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('memberData', memberSchema);