function objectDeclaration() {
    return {
        title: "ONE PIECE",
        body: "The Story about the World",
        author: "Eichiro Oda",
        views: "Over 300M",
        comments: function about(a, b) {                             // diffrent ways to call the values
            return { a, b };                                        //  return [a, b]; op: [5, 11]
                                                                   //   return {a, b}; op:{a:5, b:11}
                                                                  //    return a, b; op: 11
        },
        isLive: true
    };
}
const obj = objectDeclaration();
console.log(obj);
console.log(obj.comments(5, 11));