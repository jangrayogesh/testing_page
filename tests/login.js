const { Selector } = require("testcafe");

fixture`Login`.page('https://dev.deepthought.education/login')
test('Valid Login', async (t) => {
    await t
    .typeText("#username", "yogesh")
    .typeText("#password", "Yogesh@1")
    .click("#login");
    //.expect(Selector(".title").innerText).eql('DEEP THOUGHT')
});