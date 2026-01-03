function isValid(s: string): boolean {
    const stack: string[] = [];
    const mapping: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (mapping[char]) {
            stack.push(mapping[char]);
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;    
};

console.log(isValid("([])"))
