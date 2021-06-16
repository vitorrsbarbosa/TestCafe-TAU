import { Selector } from 'testcafe';

const fileUpload = Selector('input#file-upload');
const uploadFileButton = Selector('input#file-submit.button');
const uploadPage = 'https://the-internet.herokuapp.com/upload';

fixture('File Upload fixture').meta('fixture', 'upload')
    .page(uploadPage);

test('Upload file test', async (t) => {
    await t
        .setFilesToUpload(fileUpload, '../files/logo.jpg')
        .click(uploadFileButton);
});
