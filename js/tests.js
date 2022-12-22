function renderTests(tests) {
    const testHtml = tests.map(test => {
        const testResultHtml = getTestHtml(test.result)

        const html = `
            <div class="test-result ${testResultHtml.class}">
                🕵️‍♀️ Test
                Land ${test.country},
                PLZ: ${test.plz},
                Type: ${test.type === 'letter' ? 'Brief' : 'Paket'},
                Erwarteter Account: ${test.expectedAccount}
                <br />${testResultHtml.html} &nbsp;
            </div>`

        return html;
    }).join('\n');

    document.getElementById('tests').innerHTML = testHtml;
}

function getTestHtml(success) {
    if (success === true) {
        return {
            html: `✅ Test successful`,
            class: 'successful',
        };
    } else if (success === false) {
        return {
            html: `❌ Test failed`,
            class: 'failed',
        };
    } else {
        return { html: '', class: '' }
    }
}

async function runTests(tests, getAccount) {
    tests = tests.map(test => {
        delete test.result;

        return test;
    })
    renderTests(tests);

    for (let i = 0; i < tests.length; i += 1) {
        const account = getAccount(tests[i]);
        tests[i].result = account === tests[i].expectedAccount;

        await toggleAnimation(account)
        renderTests(tests)
    }
}