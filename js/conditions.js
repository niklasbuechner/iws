class LetterCondition {
    render(humanFriendly) {
        if (humanFriendly) {
            return `ist ein Brief`;
        } else {
            return `Brief`
        }
    }
    matches(element) {
        return element.type === 'letter';
    }
}
class ParcelCondition {
    render(humanFriendly) {
        if (humanFriendly) {
            return `ist ein Paket`;
        } else {
            return `Paket`
        }
    }
    matches(element) {
        return element.type === 'parcel';
    }
}
class BulkyCondition {
    render(humanFriendly) {
        if (humanFriendly) {
            return `ist ein Sperrgut`;
        } else {
            return `Sperrgut`
        }
    }
    matches(element) {
        return element.type === 'bulky';
    }
}
class CatchAllCondition {
    render(humanFriendly) {
        if (humanFriendly) {
            return `Alles`;
        } else {
            return `*`
        }
    }
    matches(element) {
        return true;
    }
}
class PlzCondition {
    constructor(plzStartsWith) {
        this.plzStartsWith = plzStartsWith;
    }
    render(humanFriendly) {
        if (humanFriendly) {
            return `PLZ beginnt mit ${this.plzStartsWith}`;
        } else {
            return `${this.plzStartsWith}*`;
        }
    }
    matches(element) {
        return element.plz.startsWith(this.plzStartsWith);
    }
}
class CountryCondition {
    constructor(country) {
        this.country = country;
    }
    render(humanFriendly) {
        if (humanFriendly) {
            return `Land ${this.country}`;
        } else {
            return this.country;
        }
    }
    matches(element) {
        return element.country.toLowerCase() === this.country.toLowerCase();
    }
}
class DangerousCondition {
    constructor (isDangerous) {
        this.isDangerous = isDangerous;
    } 

    render(humanFriendly) {
        if (humanFriendly) {
            return `ist Gefahrengut`;
        } else {
            return `Gefahrengut`;
        }
    }
    matches(element) {
        if (this.isDangerous) {
            return element.isDangerous;
        } else {
            return !element.isDangerous;
        }
    }
}
class MaxWeightCondition {
    constructor (maxWeight) {
        this.maxWeight = maxWeight;
    } 

    render(humanFriendly) {
        return `Maximalgewicht ${this.maxWeight}`;
    }
    matches(element) {
        return !!element.weight && element.weight < this.maxWeight;
    }
}
class ExpressCondition {
    constructor (isExpress) {
        this.isExpress = isExpress;
    } 

    render(humanFriendly) {
        if (humanFriendly) {
            return `Expressversand`;
        } else {
            return `Expressversand`;
        }
    }
    matches(element) {
        if (this.isExpress) {
            return element.isExpress;
        } else {
            return !element.isExpress;
        }
    }
}
class ErrorCondition {
    constructor(error) {
        this.error = error;
    }
    render(humanFriendly) {
        return `<span style="color: red;">Attribute ${this.error} existiert nicht.</span>`;
    }
    matches(element) {
        return false;
    }
}

function createCondition(condition) {
    condition = condition.trim()
    
    if (condition.toLowerCase() === "brief") {
        return new LetterCondition()
    } else if (condition.toLowerCase() === "paket") {
        return new ParcelCondition()
    } else if (/[\d]+\*/.test(condition)) {
        return new PlzCondition(condition.replaceAll('*', ''));
    } else if (/^[a-zA-ZäöüÄÜÖ]+$/.test(condition)) {
        return new CountryCondition(condition);
    } else if (condition === "*") {
        return new CatchAllCondition();
    } else {
        return new ErrorCondition(condition);
    }
}

function getConditions(content) {
    if (content.includes(',')) {
        return content
            .split(',')
            .map(condition => condition.trim())
            .filter(condition => condition !== "")
            .map(condition => createCondition(condition))
    }

    return [createCondition(content)]
}
