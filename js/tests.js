const plzToCity = {
  68477: "Darmstadt",
  96584: "München",
  "03753": "Norfork",
};

function renderTests(tests,isRunning=false) {
  const testHtml = tests
    .map((test, index) => {
      const testResultHtml = getTestHtml(test.result);
      const html = `
            <div class="test-result ${testResultHtml.class}">
                <div class="test-result-content">
                    🕵️‍♀️
                    Land: ${test.country},
                    PLZ: ${test.plz},
                    Typ: ${test.type === "letter" ? "Brief" : test.type === "parcel" ? "Paket": "Sperrgut"},
                    ${test.isExpress ? "Expressversand," : ""}
                    ${test.weight ? `Gewicht ${test.weight}kg,` : ""}
                    ${test.isDangerous ? "Gefahrgut," : ""}
                    Erwarteter Warenausgang: ${test.expectedAccount} ${
        test.expectedAccount === "21"
          ? "(Zoll)"
          : test.expectedAccount === "20"
          ? "(Zurück an den Absender)"
          : test.expectedAccount === "22"
          ? "(Manuelle Prüfung)"
          : test.expectedAccount === "23"
          ? "(Versanddienstleister ABC)"
          : ""
      }  
      
      
                    <br />${testResultHtml.html}
                    ${test.account>0?("=> Aktueller Warenausgang "+test.account):""}
                    <!--
                        Render an invisible emoji here to suppress the height change during rendering.
                        Yes, I know that this is an ugly hack, but I don't want to deal with the CSS
                        right now.
                    -->
                    <span style="opacity:0 ">✅</span>
                </div>
                <div class="execute-single-test">
                    <input ${isRunning?'disabled':''} class="testExecute" type="button" value="Testen" onClick='executeSingleTest(${index})' />
                </div>
            </div>`;

      return html;
    })
    .join("\n");

  document.getElementById("tests").innerHTML = testHtml;
}

function getTestHtml(success) {
  if (success === true) {
    return {
      html: `✅ Test successful`,
      class: "successful",
    };
  } else if (success === false) {
    return {
      html: `❌ Test failed`,
      class: "failed",
    };
  } else {
    return { html: "", class: "" };
  }
}

async function runTests(tests) {
  
  document.getElementById('runTests').disabled = true; 
  tests = tests.map((test) => {
    delete test.result;

    return test;
  });
  renderTests(tests,true);
  setTest(tests[0]);

  for (let i = 0; i < tests.length; i += 1) {
    await executeSingleTest(i, tests[(i + 1) % tests.length],true);
  }

  document.getElementById('runTests').disabled = false;
  renderTests(tests);
}

function setTest(test) {
  document.getElementById("parcelType").textContent =
    test.type === "letter" ? "Brief" : test.type === "parcel" ? "Paket": "Sperrgut";
  document.getElementById("city").textContent = `${test.plz} ${
    plzToCity[test.plz] ?? ""
  }`;
  document.getElementById("country").textContent = test.country;
  document.getElementById("weight").textContent = test.weight
    ? `Gewicht ${test.weight}kg`
    : "";
  document.getElementById("express").textContent = test.isExpress
    ? "Express"
    : "";
  document.getElementById("dangerous").textContent = test.isDangerous
    ? "Gefahrengut"
    : "";
  document.getElementById("expectedAccount").textContent = test.expectedAccount;

  const parcelOuterBox = document.getElementById("Paket-1").children[0].getBBox()
  const textBox = document.getElementById("expectedAccount").getBBox()

  const textX = parcelOuterBox.x + (parcelOuterBox.width - textBox.width) / 2;
  document.getElementById("expectedAccount").setAttribute('x', `${textX}px`);
}

async function executeSingleTest(index, nextTest = null,isRunning=false) {
  // TODO: remove dependency on global state... This is ugly.
  delete tests[index].result;
  renderTests(tests,isRunning);

  setTest(tests[index]);
  const account = getAccount({
    ...tests[index],
    expectedAccount: null,
  });
  tests[index].result = account?.toString() === tests[index].expectedAccount;
  tests[index].account = account;

  await toggleAnimation(account, tests[index].result, nextTest ?? tests[index]);
  renderTests(tests,isRunning);
}

function evaluateRules(rules, test) {
  const applyingRule = rules.find((rule) => rule.test(test));
  if (applyingRule) {
    return applyingRule.account;
  } else {
    return 20;
  }
}
