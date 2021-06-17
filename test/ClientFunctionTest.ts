import { Selector, ClientFunction } from 'testcafe';

const developerNameInput = Selector('#developer-name');
const osOption = Selector('#linux');
const submitButton = Selector('#submit-button');
const developerName = 'vito';

const getPageURL = ClientFunction(() => window.location.href);
const page = 'https://devexpress.github.io/testcafe/example/';
const ty = 'thank-you';

fixture('Client function test').meta('fixture', 'clientfunction')
	.page(page);

test('First test with client function', async (t) => {
	await t
		.typeText(developerNameInput, developerName)
		.click(osOption)
		.click(submitButton)
		.expect(getPageURL()).contains(ty)
});
