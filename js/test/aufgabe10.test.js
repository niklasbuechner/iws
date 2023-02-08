let tests = [{
    type: 'letter',
    country: 'Deutschland',
    plz: '68477',
    expectedAccount: '1'
}, {
    type: 'parcel',
    country: 'Deutschland',
    plz: '96584',
    expectedAccount: '4'
}, {
    type: 'letter',
    country: 'England',
    plz: '03753',
    expectedAccount: '20'
}];

function getAccount(delivery) {
    rules = [];
    createInternalDsl();

    return getAccountFromRules(delivery)
}

window.addEventListener('load', () => {
    setupAnimationInElement('animation');
    renderTests(tests);
    setTest(tests[0]);
    document.getElementById('runTests').addEventListener('click', () => runTests(tests, getAccount));
});