
describe('Inicialização do aplicativo', () => {
    it('Deve iniciar o aplicativo corretamente', async () => {
        if (driver.isAndroid) {
            const state = await driver.queryAppState('com.wdiodemoapp');
            expect(state).toBe(4);
        } else {
            const state = await driver.queryAppState('org.wdiodemoapp');
            expect(state).toBe(4);
        }
    });
});
