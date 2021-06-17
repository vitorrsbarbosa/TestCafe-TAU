import { Selector } from 'testcafe'

const developerName = Selector('#developer-name');
const submitButton = Selector('#submit-button');
const thanksMessage = Selector('#article-header');
const page = 'https://devexpress.github.io/testcafe/example/';
const dropdownList = Selector('#preferred-interface ')

const interfaceSelect = Selector('select#preferred-interface');
const interfaceOptions = interfaceSelect.find('option');

fixture('Dropdown list test').meta('fixture', 'dropdown').page(page);
test.meta('test', 'CT01')('Select an element test', async t => {
	await t
		.typeText(developerName, 'vito')
		.click(dropdownList.withText('Both'));
});