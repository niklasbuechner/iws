let currentRule = createRule()
let rules = [];

Object.defineProperty(window, 'plz', {
    set: (plz) => currentRule.addPlzCondition(plz)
});
Object.defineProperty(window, 'maxWeight', {
    set: (weight) => currentRule.addMaxWeightCondition(weight)
});
Object.defineProperty(window, 'letter', {
    get: () => currentRule.addLetterCondition(),
    set: (isLetter) => {
        if (!isLetter) {
            return
        }

        currentRule.addLetterCondition()
    },
});
Object.defineProperty(window, 'parcel', {
    get: () => currentRule.addParcelCondition(),
    set: (isParcel) => {
        if (!isParcel) {
            return
        }

        currentRule.addParcelCondition()
    },
});
Object.defineProperty(window, 'bulky', {
    get: () => currentRule.addBulkyCondition(),
    set: (isBulky) => {
        if (!isBulky) {
            return
        }

        currentRule.addBulkyCondition()
    },
});
Object.defineProperty(window, 'dangerous', {
    get: () => currentRule.addDangerousCondition(true),
    set: (isDangerous) => {
        if (!isDangerous) {
            return
        }

        currentRule.addDangerousCondition(true)
    },
});
Object.defineProperty(window, 'express', {
    get: () => currentRule.addExpressCondition(true),
    set: (isExpress) => {
        if (!isExpress) {
            return
        }

        currentRule.addExpressCondition(true)
    },
});
Object.defineProperty(window, 'country', {
    set: (country) => currentRule.addCountryCondition(country)
});
Object.defineProperty(window, 'account', {
    // Account needs to be a string
    set: (account) => currentRule.account = '' + account
});

function rule() {
    const current = currentRule;
    currentRule = createRule();

    return current;
}

function getAccount(test) {
    const rules = getInternalDsl();
    rules.forEach(rule => rule.prepareNegativeConditions());

    return evaluateRules(rules, test)
}
