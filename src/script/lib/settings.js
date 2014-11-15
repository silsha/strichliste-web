var ms = require('ms');

module.exports = {
    server: 'http://localhost:8080',
    currency: "€",
    inactiveUserPeriod: ms('30d'),
    idleTimeout: ms('30s'),
    audio: {
        transaction: 'cash-register.ogg'
    },
    paymentSteps: {
        deposit: [0.50, 1.00, 2.00, 5.00, 10.00],
        dispense: [0.50, 1.00, 1.50, 2.00, 0.70],
        customTransactions: true
    },
    i18n: {
        dateFormat: 'YYYY-MM-DD HH:mm:ss',
        timezone: 'auto',
        preferredLanguage: 'en'
    }
};