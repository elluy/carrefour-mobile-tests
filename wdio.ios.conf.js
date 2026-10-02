const { config } = require('./wdio.conf');

exports.config = {
    ...config,

    maxInstances: 1,

    specs: [
        './test/specs/app.spec.js'
    ],

    capabilities: [{
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone 16 Pro',
        'appium:platformVersion': '18.5',
        'appium:app': './apps/ios/wdiodemoapp.app'
    }]
};