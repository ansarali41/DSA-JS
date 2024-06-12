function uniqueName(arr) {
    const uniqueNameArray = [];
    arr.forEach(name => {
        if (!uniqueNameArray.includes(name)) {
            uniqueNameArray.push(name);
        }
    });
    return uniqueNameArray;
}

console.log(uniqueName(['a', 'b', 'c', 'd', 'e', 'a', 'b', 'j']));
