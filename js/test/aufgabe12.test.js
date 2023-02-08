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
    country: 'Österreich',
    plz: '1405',
    expectedAccount: '20'
}];

window.addEventListener('load', () => {
    setupAnimationInElement('animation');
    renderTests(tests);
    setTest(tests[0]);
    document.getElementById('runTests').addEventListener('click', () => runTests(tests, getAccount));
});