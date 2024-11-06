export const GetUID = (() => {
    let idCounter = 0;
    return (prefix = 'unique-id') => {
        idCounter += 1;
        return `${prefix}-${idCounter}`;
    };
})();