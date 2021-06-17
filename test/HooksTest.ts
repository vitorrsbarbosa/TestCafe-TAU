import { Selector } from 'testcafe';

const testcafePage = 'https://devexpress.github.io/testcafe/example/';
const developerName = 'TAU';
const developerNameInput = Selector('#developer-name');
const osOption = Selector('input#linux')
const submitButton = Selector('#submit-button')
const thanksMessage = Selector('#article-header');

fixture('Using hooks').meta('fixture', 'hooks')
    .page(testcafePage).beforeEach(async t => {
        await t
            .maximizeWindow()
            .setTestSpeed(0.9)
            .setPageLoadTimeout(1);
    });
test.meta('test', 'CT01')('First Test with TestCafe', async t => {
    await t
        .typeText(developerNameInput, developerName)
        .click(osOption)
        .click(submitButton).expect(thanksMessage.innerText).contains(developerName)
});