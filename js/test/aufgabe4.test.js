let tests = [{
    type: 'bulky',
    country: 'Deutschland',
    plz: '68477',
    expectedAccount: '6',
}, {
    type: 'bulky',
    country: 'Österreich',
    plz: '1014',
    expectedAccount: '7',
}, {
    type: 'bulky',
    country: 'England',
    plz: '7500',
    expectedAccount: '21',
}, {
    type: 'letter',
    country: 'Österreich',
    plz: '1010',
    expectedAccount: '2'
}, {
    type: 'parcel',
    country: 'Österreich',
    plz: '1014',
    expectedAccount: '5'
}, {
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
    expectedAccount: '21'
}];

window.addEventListener('load', () => {
    setupAnimationInElement('animation');
    renderTests(tests);
    setTest(tests[0]);
    document.getElementById('runTests').addEventListener('click', () => runTests(tests, getAccount))
});