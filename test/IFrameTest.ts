import { Selector } from 'testcafe'

const iframe = Selector('iframe#mce_0_ifr')
const textArea = Selector('body#tinymce.mce-content-body')

fixture.meta('fixture', 'iframe')('IFrame fixture').page('https://the-internet.herokuapp.com/iframe');
test('iFrame test', async (t) => {
	await t.switchToIframe(iframe)
		.click(textArea)
		.pressKey('ctrl+a delete');
	await t
		.typeText(textArea, 'Hello World').expect(textArea.innerText).contains('Hello World')
		.switchToMainWindow();
});
