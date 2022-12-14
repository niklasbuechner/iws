function parse() {
    let lineNumber = 0;
    const dsl = document.getElementById('input').value;

    const rules = dsl
        .split("\n")
        .map(line => ({
            number: lineNumber++,
            content: line.trim(),
        }))
        .map(line => {
            if (line.content === "") {
                return new EmptyLine(line.number);
            }

            const sides = line.content.split("->")
            if (sides.length !== 2) {
                return new FaultyLine(line.content, line.number, 'Zeile konnte nicht geparst werden')
            }

            return new Rule(line.content, line.number, getConditions(sides[0]), sides[1].trim())
        });

    return rules;
}