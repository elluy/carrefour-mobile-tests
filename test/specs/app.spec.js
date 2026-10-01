
describe('Inicialização do aplicativo', () => {
    it('Deve abrir o aplicativo com sucesso', async () => {
        const appState = await driver.queryAppState(
            'com.wdiodemoapp'
        );

        expect(appState).toBe(4);
    });
});
