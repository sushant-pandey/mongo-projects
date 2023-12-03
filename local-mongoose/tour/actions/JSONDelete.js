const query = {
    difficulty: "easy",
    page: '2',
    sort: '1',
    limit: '10'
};

delete query['difficulty'];

console.log(query);