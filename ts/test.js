new Promise(function (resolve) {
    resolve();
}).then(function () {
    console.log(1);
    for (var i = 0; i < 10; i++) {
        console.log('for', i);
    }
    return 1;
}).then(function (res) {
    console.log(2, res);
});
