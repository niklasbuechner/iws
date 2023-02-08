class Line {
    constructor(content, number) {
        this.content = content;
        this.number = number;
    }
    renderLineNumber() {
        return `${this.number}:`;
    }
    test() {
        return false;
    }
}
class EmptyLine extends Line {
    constructor(line) {
        super("", line);
    }
    render() {
        return this.renderLineNumber()
    }
}
class FaultyLine extends Line {
    constructor(content, line, error) {
        super(content, line);
        this.error = error;
    }
    render() {
        return `
        ${this.renderLineNumber()} ${this.content}<br />
        <span style="color: red;">&uarr; ${this.error}</span>`
    }
}
class Rule extends Line {
    constructor(content, line, conditions, account) {
        super(content, line);
        this.conditions = conditions ?? [];
        this.account = account;
    }
    render(humanFriendly) {
        const conditions = this.conditions
            .map(condition => condition.render(humanFriendly))
            .join('<span style="color:red;">, </span>')

        return `
            ${this.renderLineNumber()}
            <span style="color:green;">${conditions}</span>
            <span style="color:red;">-></span>
            <span style="color:blue;">${this.account}</span>
        `;
    }
    test(element) {
        for (let condition of this.conditions) {
            if (!condition.matches(element)) {
                return false;
            }
        }

        return true;
    }

    setAccount(account) {
        this.account = account

        return this
    }

    addPlzCondition(startWith) {
        this.conditions.push(new PlzCondition(startWith))

        return this
    }

    addMaxWeightCondition(weight) {
        this.conditions.push(new MaxWeightCondition(weight))

        return this
    }

    addLetterCondition() {
        this.conditions.push(new LetterCondition())

        return this
    }

    addParcelCondition() {
        this.conditions.push(new ParcelCondition())

        return this
    }

    addCountryCondition(country) {
        this.conditions.push(new CountryCondition(country))

        return this
    }

    addCatchAllCondition() {
        this.conditions.push(new CatchAllCondition())

        return this
    }
    
    addBulkyCondition() {
        this.conditions.push(new BulkyCondition())

        return this
    }

    addDangerousCondition(isDangerous) {
        this.conditions.push(new DangerousCondition(isDangerous))

        return this
    }

    addExpressCondition(isExpress) {
        this.conditions.push(new ExpressCondition(isExpress))

        return this
    }

    prepareNegativeConditions() {
        const dangerousCondition = this.conditions.find(condition => condition.isDangerous)
        if (!dangerousCondition) {
            this.addDangerousCondition(false);
        }

        const expressCondition = this.conditions.find(condition => condition.isExpress)
        if (!expressCondition) {
            this.addExpressCondition(false);
        }

        if (this.conditions.length === 0) {
            this.addCatchAllCondition();
        }
    }
}

function createRule(account) {
    return new Rule('', '', [], account)
}