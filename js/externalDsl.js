const keywordTypes = new Map();
keywordTypes.set('sende', 'start-rule');
keywordTypes.set('paket', 'parcel');
keywordTypes.set('brief', 'letter');
keywordTypes.set('land', 'country');
keywordTypes.set('warenausgang', 'account');
keywordTypes.set('expressversand', 'express');
keywordTypes.set('sperrgut', 'bulky');
keywordTypes.set('gefahrengut', 'dangerous');
keywordTypes.set('maximalgewicht', 'weight');
keywordTypes.set('plz', 'plz');

const irrelevantWords = [
    '.',
    'als',
    'ein',
    'eine',
    'einem',
    'einen',
    'im',
    'kg',
    'mit',
    'sendung',
    'und',
    'von',
    'zu',
    'zum',
];

function parseRules() {
    const dsl = document.getElementById('external-dsl').value;

    const tokens = lex(dsl);
    const rules = createRulesFromTokens(tokens);

    return rules;
}

function lex(text) {
    return text
        .split("\n")
        .flatMap((line, index) => {
            return line
                .split(" ")
                .flatMap(token => {
                    if (token.includes(".")) {
                        return [token.replace('.', ''), '.'];
                    } else {
                        return [token];
                    }
                })
                .flatMap(token => {
                    if (token.includes("kg") && token.length > 2) {
                        return [token.replace('kg', ''), 'kg'];
                    } else {
                        return [token];
                    }
                })
                .map(token => token.trim())
                .filter(token => token.length > 0)
                .map(tokenValue => {
                    const tokenObject = {
                        number: index + 1,
                        value: tokenValue,
                    };

                    const token = tokenValue.toLowerCase();
                    const keywordType = keywordTypes.get(token);
                    if (keywordType) {
                        tokenObject.type = keywordType;
                    } else if (irrelevantWords.includes(token)) {
                        tokenObject.type = "irrelevant";
                    } else {
                        tokenObject.type = "value";
                    }

                    return tokenObject;
                });
        });
}

function createRulesFromTokens(tokens) {
    const rules = [];
    const tokenIterator = getRelevantTokenIterator(tokens);
    for (token of tokenIterator) {
        if (token.type === 'start-rule') {
            if (rules.length != 0) {
                rules[rules.length - 1].prepareNegativeConditions();
            }

            rules.push(new Rule(token.number));
        }

        if (rules.length == 0) {
            document.getElementById('alert_output').innerHTML ='Die externe DSL konnte nicht geparst werden, da sie nicht mit der Definition einer Regel beginnt.';

            return;
        }
        
        switch (token.type) {
            case 'letter':
                rules[rules.length - 1].addLetterCondition();
                break;
            case 'parcel':
                rules[rules.length - 1].addParcelCondition();
                break;
            case 'country':
                const country = tokenIterator.next();
                if (country.value.type !== "value") {
                    document.getElementById('alert_output').innerHTML =`Die externe DSL konnte nicht geparst werden, da in Zeile ${token.number} kein Land auf das Land Keyword folgt.`
                    return;
                }

                rules[rules.length - 1].addCountryCondition(country.value.value);
                break;
            case 'plz':
                const plz = tokenIterator.next();
                if (plz.value.type !== "value") {
                    document.getElementById('alert_output').innerHTML =`Die externe DSL konnte nicht geparst werden, da in Zeile ${token.number} keine PLZ auf das PLZ Keyword folgt.`;

                    return;
                }

                rules[rules.length - 1].addPlzCondition(plz.value.value);
                break;
            case 'weight':
                const weight = tokenIterator.next();
                if (weight.value.type !== "value") {
                    document.getElementById('alert_output').innerHTML =`Die externe DSL konnte nicht geparst werden, da in Zeile ${token.number} kein Maximalgewicht auf das Maximalgewicht Keyword folgt.`;

                    return;
                }

                rules[rules.length - 1].addMaxWeightCondition(weight.value.value);
                break;
            case 'account':
                const account = tokenIterator.next();
                if (account.value.type !== "value") {
                    document.getElementById('alert_output').innerHTML =`Die externe DSL konnte nicht geparst werden, da in Zeile ${token.number} kein Warenausgang auf das Warenausgang Keyword folgt.`;

                    return;
                }

                rules[rules.length - 1].setAccount(account.value.value);
                break;
            case 'express':
                rules[rules.length - 1].addExpressCondition(true);
                break;
            case 'bulky':
                rules[rules.length - 1].addBulkyCondition(true);
                break;
            case 'dangerous':
                rules[rules.length - 1].addDangerousCondition(true);
                break;
            case 'value':
                document.getElementById('alert_output').innerHTML =`Die externe DSL konnte nicht geparst werden, da in Zeile ${token.number} der Wert "${token.value}" ohne zugehörige Bedingung gefunden wurde.`;
                break;
        }
    }

    return rules;
}

function getTokenIterator(tokens) {
    let index = -1;

    return {
        next() {
            index += 1;
    
            return { value: tokens[index], done: tokens.length == index };
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}

function getRelevantTokenIterator(tokens) {
    const tokenIterator = getTokenIterator(tokens);

    return {
        next() {
            let token = tokenIterator.next();
            while (!token.done && token.value.type == 'irrelevant') {
                token = tokenIterator.next();
            }

            return token;
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}

function getAccount(test) {
    const rules = parseRules();

    if(rules === undefined) {
        return
    }
    rules.forEach(rule => rule.prepareNegativeConditions());

    return evaluateRules(rules, test)
}