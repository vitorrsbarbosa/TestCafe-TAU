import { Selector } from 'testcafe';

const page = 'https://devexpress.github.io/testcafe/example/';
const developerName = 'vito';
const developerNameInput = Selector('#developer-name')

fixture('Assertion example').meta('fixture', 'assertions').page(page);
test('Check property of element', async t => {
	await t
		.expect(developerNameInput.value).eql('')
		.typeText(developerNameInput, developerName)
		.typeText(developerNameInput, developerName)
		.expect(developerNameInput.value).contains(developerName + developerName);
});

test("Asserting visibility of element", async t => {
	const developerNameElement = await developerNameInput.with({ visibilityCheck: true })();

	await t
		.expect(developerNameElement.value).eql('')
		.typeText(developerNameInput, developerName)
		.typeText(developerNameInput, developerName)
		.expect(developerNameInput.value).contains(developerName + developerName);
});