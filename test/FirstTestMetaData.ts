import { Selector } from 'testcafe'

const developerName = Selector('#developer-name');
const osOption = Selector('input#macos')
const submitButton = Selector('#submit-button')
const thanksMessage = Selector('#article-header');
const page = 'https://devexpress.github.io/testcafe/example/';

fixture('Metadata of testcafe').meta('fixture', 'F01')
	.page(page);
test.meta('test', 'CT01')('First Test with TestCafe', async t => {
	await t
		.typeText(developerName, 'TAU')
		.click(osOption)
		.click(submitButton).expect(thanksMessage.innerText).contains('TAU')
});