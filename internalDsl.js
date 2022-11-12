let currentRule = null
let rules = [];

Object.defineProperty(window, 'plz', {
    set: (plz) => currentRule.addPlzCondition(plz)
});
Object.defineProperty(window, 'isLetter', {
    get: () => currentRule.addLetterCondition(),
    set: (isLetter) => {
        if (!isLetter) {
            return
        }

        currentRule.addLetterCondition()
    },
});
Object.defineProperty(window, 'isParcel', {
    get: () => currentRule.addParcelCondition(),
    set: (isParcel) => {
        if (!isParcel) {
            return
        }

        currentRule.addParcelCondition()
    },
});
Object.defineProperty(window, 'country', {
    set: (country) => currentRule.addCountryCondition(country)
});
Object.defineProperty(window, 'account', {
    // Account needs to be a string
    set: (account) => currentRule.account = '' + account
});

function getInternalDslRules(ruleDefinitions) {
    rules = [];

    ruleDefinitions.map(rule => {
        currentRule = createRule()
        rules.push(currentRule)

        rule()
    })

    return rules.map(rule => {
        if (rule.conditions.length === 0) {
            rule.addCatchAllCondition()
        }

        return rule
    });
}