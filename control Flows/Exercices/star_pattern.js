function star_Pattern(rows) {
    for (let row = 0; row <= rows; row++) {
        pattern = "";
        for (let i = 0; i < row; i++) {
            pattern += "*";
        };
        console.log(row, pattern);
    };
};
star_Pattern(5);