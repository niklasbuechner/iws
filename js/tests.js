const plzToCity = {
    '68477': 'Darmstadt',
    '96584': 'München',
    '03753': 'Norfork',
};

const countriesTranslations = {
    'Germany': 'Deutschland',
    'Austria': 'Österreich',
};

function renderTests(tests) {
    const testHtml = tests.map(test => {
        const testResultHtml = getTestHtml(test.result)

        const html = `
            <div class="test-result ${testResultHtml.class}">
                🕵️‍♀️
                Land ${countriesTranslations[test.country] ?? test.country},
                PLZ: ${test.plz},
                Type: ${test.type === 'letter' ? 'Brief' : 'Paket'},
                Erwarteter Account: ${test.expectedAccount}
                <br />${testResultHtml.html}
                <!--
                    Render an invisible emoji here to suppress the width change during rendering.
                    Yes, I know that this is an ugly hack, but I don't want to deal with the CSS
                    right now.
                -->
                <span style="opacity:0 ">✅</span>
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
    setTest(tests[0]);

    for (let i = 0; i < tests.length; i += 1) {
        setTest(tests[i]);
        const account = getAccount(tests[i]);
        tests[i].result = account === tests[i].expectedAccount;

        await toggleAnimation(account, tests[i].result, tests[(i + 1) % tests.length])
        renderTests(tests)
    }
}

function setTest(test) {
    document.getElementById('parcelType').textContent = test.type === 'letter' ? 'Brief' : 'Paket';
    document.getElementById('city').textContent = `${test.plz} ${plzToCity[test.plz] ?? ''}`;
    document.getElementById('country').textContent = countriesTranslations[test.country] ?? test.country;
    document.getElementById('weight').textContent = test.weight ?? '';
    document.getElementById('express').textContent = test.isExpress ? 'Express' : '';
    document.getElementById('bulky').textContent = test.isBulky ? 'Sperrgut' : '';
    document.getElementById('dangerous').textContent = test.isDangerous ? 'Gefahrengut' : '';
}

/**
 * - Brief/Paket
 * - Land
 * - PLZ
 * - Sperrgut
 * - Gefahrengut
 * - Express
 */