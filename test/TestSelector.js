import { Selector } from 'testcafe'

const developerName = Selector('#developer-name');
const osOption = Selector('input#macos')
const submitButton = Selector('#submit-button')
const thanksMessage = Selector('#article-header');

fixture('Testcafe selector').meta('fixture','testselector')
	.page('https://devexpress.github.io/testcafe/example/');
test('First Test with TestCafe', async t => {
	await t
		.typeText(developerName, 'TAU')
		.click(osOption)
		.click(submitButton).expect(thanksMessage.innerText).contains('TAU')
});