# Automação de Testes Mobile — Banco Carrefour

Projeto de automação de testes funcionais do aplicativo de demonstração [WebdriverIO Native Demo App](https://github.com/webdriverio/native-demo-app), desenvolvido como parte de um desafio técnico de Quality Assurance.

A implementação atual contempla **Android**, com execução local e no **GitHub Actions**, geração de evidências pelo **Allure Report** e publicação do relatório no **GitHub Pages**.

## Tecnologias

- **JavaScript** e **Node.js 22**
- **WebdriverIO 9** e **Mocha**
- **Appium 3** com driver **UiAutomator2**
- **Android Emulator** (Pixel 7)
- **Allure Report**
- **GitHub Actions** e **GitHub Pages**

## Estratégia e organização

Os testes seguem o padrão **Page Object**, separando seletores e ações das validações realizadas nos arquivos de especificação. Dados de entrada de login e cadastro ficam em arquivos próprios, facilitando manutenção e reutilização. As verificações utilizam as asserções do WebdriverIO e priorizam seletores de acessibilidade e identificadores estáveis.

## Observações

Nunca tinha utilizado o WebdriverIO, estou mais acostumado com o RobotFramework com Python, mas a ideia e estrutura de projetos são bem parecidas.

Os testes rodam na pipeline tmb através do Run Workflow, caso queira ter acesso para acionar e ver o resultado na pipeline, é só solicitar por email, informando o nome de usuário do github.

Realizei apenas os testes focados no Android, até cheguei a criar em outra branch a parte do iOS, mas faltou tempo para estabilizar e testar.

```text
carrefour-mobile-tests/
├── .github/
│   └── workflows/
│       └── mobile-tests.yml
├── apps/
│   └── native-demo-app.apk       # Download local; não versionado
├── scripts/
│   └── run-android-tests.sh
├── test/
│   ├── data/
│   │   ├── login.data.js
│   │   └── signup.data.js
│   ├── pageobjects/
│   │   ├── forms.page.js
│   │   ├── login.page.js
│   │   └── navigation.page.js
│   └── specs/
│       ├── app.spec.js
│       ├── forms.spec.js
│       ├── login.spec.js
│       ├── navigation.spec.js
│       └── signup.spec.js
├── wdio.conf.js
├── package.json
└── README.md
```

## Cobertura automatizada

A suíte possui **11 cenários** distribuídos em cinco arquivos:

| Área | Cenários | Quantidade |
| --- | --- | ---: |
| Inicialização | Verificar que o aplicativo está em execução | 1 |
| Navegação | Navegar da tela inicial para Login | 1 |
| Login | Login válido; e-mail inválido; senha com menos de oito caracteres | 3 |
| Cadastro | Cadastro válido; confirmação de senha divergente | 2 |
| Formulários | Preenchimento de texto; alteração do switch; seleção no dropdown; botão ativo | 4 |
| **Total** | | **11** |

Os cenários verificam resultados visíveis da interface, incluindo mensagens de sucesso, mensagens de validação e estado de componentes.

## Pré-requisitos para execução local

- Windows com **Node.js 22** e npm instalados.
- **Java JDK 17** e **Android SDK** configurados.
- **Android Studio** com emulador Pixel 7 (identificador `emulator-5554`).
- **Appium 3** e driver **UiAutomator2** instalados.
- APK **Native Demo App v2.2.0** em `apps/native-demo-app.apk`.

O APK não é versionado no repositório. A versão Android utilizada está disponível nas [releases oficiais do Native Demo App](https://github.com/webdriverio/native-demo-app/releases/tag/v2.2.0).

### 1. Instalar as dependências

Na raiz do projeto:

```bash
npm ci
```

Se necessário, instalar o Appium e o driver Android:

```bash
npm install -g appium@3
appium driver install uiautomator2
```

### 2. Iniciar o emulador

Abra o Android Studio, inicie o **Pixel 7** pelo Device Manager e confira:

```bash
adb devices
```

O dispositivo deverá aparecer como `emulator-5554` com estado `device`.

### 3. Iniciar o Appium

Em um terminal separado:

```bash
appium
```

Mantenha o servidor aberto durante a execução.

### 4. Executar os testes

Em outro terminal, na raiz do projeto:

```bash
npx wdio run ./wdio.conf.js
```

Para executar apenas um arquivo de cenários, por exemplo, Login:

```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/login.spec.js
```

## Relatórios e evidências

A execução produz dados do **Allure** em `allure-results/`. O projeto registra resultados dos cenários, informações do ambiente e **screenshots em caso de falha**.

Para gerar e abrir o relatório localmente:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

Para evitar misturar execuções, limpe `allure-results/` antes de iniciar uma nova rodada de testes, quando necessário.

**Relatório público:** [Allure no GitHub Pages](https://elluy.github.io/carrefour-mobile-tests/).

O relatório publicado corresponde à execução mais recente da branch `main` que conseguiu gerar e publicar um relatório, **inclusive quando algum teste falha**. Em caso de erro de infraestrutura que impeça sua geração, a versão anteriormente publicada poderá permanecer disponível.

## Integração contínua — GitHub Actions

O workflow está em `.github/workflows/mobile-tests.yml` e pode ser acionado por:

- `push` na branch `main`;
- `pull_request` direcionado à `main`;
- execução manual com `workflow_dispatch`.

Para executar manualmente: **GitHub → Actions → Mobile Tests → Run workflow → main → Run workflow**.

O job Android instala as dependências, prepara o Appium, baixa o APK oficial, inicia um emulador Android e executa a suíte. Em seguida, gera o relatório Allure e publica os arquivos como **Artifacts**, mesmo quando há falhas nos testes, desde que os resultados possam ser gerados.

Um job separado publica o relatório no **GitHub Pages** para execuções da `main` iniciadas por `push` ou manualmente. Execuções de pull request **não substituem** o relatório público. O status da execução continua refletindo falhas dos testes.

> A automação na CI utiliza um emulador Android. Ela não equivale à validação em dispositivo físico.

## Limitações e evolução

- **Android:** implementado e executável localmente e no GitHub Actions.

## Referências

- [WebdriverIO](https://webdriver.io/)
- [Appium](https://appium.io/)
- [Native Demo App](https://github.com/webdriverio/native-demo-app)
- [Allure Report](https://allurereport.org/)
