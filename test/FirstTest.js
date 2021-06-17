fixture('Simple Fixture').meta('fixture','first')
	.page('https://devexpress.github.io/testcafe/example/');
test('First Test with TestCafe submiting with Linux',  async t => {
	await t
		.typeText('#developer-name','vitor')
		.click('#remote-testing')
		.click('#reusing-js-code')
		.click('#background-parallel-testing')
		.click('#tried-test-cafe')
		.click('input#linux')
	await t
		.click('#preferred-interface')
	await t.click('#submit-button');
	await t.expect('#article-header').ok();
	});

test('Second Test with TestCafe submiting with Windows', async t => {
	await t
		.typeText('#developer-name','TAU-vitor')
		.click('input#windows')
		.click('#submit-button');
		});