function runTests(rules) {
    const tests = [{
        type: 'letter',
        country: 'Deutschland',
        plz: '68477',
        expectedAccount: '12'
    }, {
        type: 'parcel',
        country: 'Deutschland',
        plz: '96584',
        expectedAccount: '13'
    }, {
        type: 'letter',
        country: 'Deutschland',
        plz: '03753',
        expectedAccount: '14'
    }, {
        type: 'letter',
        country: 'Österreich',
        plz: '03753',
        expectedAccount: '10'
    }, {
        type: 'parcel',
        country: 'Deutschland',
        plz: '68477',
        expectedAccount: '11'
    }, {
        type: 'parcel',
        country: 'Schweden',
        plz: '68477',
        expectedAccount: '19'
    }];

    const html = tests.map(test => runTest(rules, test)).join('');
    document.getElementById('tests').innerHTML = html;
}

function runTest(rules, test) {
    const testDescription = `
        <div class="test-result">
        🕵️‍♀️ Test
        Land ${test.country},
        PLZ: ${test.plz},
        Type: ${test.type === 'letter' ? 'Brief' : 'Paket'},
        Erwarteter Account: ${test.expectedAccount}<br />`;
    const applyingRule = rules.find(rule => rule.test(test))

    if (!applyingRule) {
        return `${testDescription} ❌ Test fehlgeschlagen</div>`;
    }

    const matchedHtml = `- Account: ${applyingRule.account}, Zeile der angewandten Regel: ${applyingRule.number}`;
    if (test.expectedAccount === applyingRule.account) {
        return `${testDescription} ✅ Test erfolgreich ${matchedHtml}</div>`;
    } else {
        return `${testDescription} ❌ Test fehlgeschlagen ${matchedHtml}</div>`;
    }
}