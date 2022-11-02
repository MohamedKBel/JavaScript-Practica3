for (let i = 0; i <= 100; i++) {
    if (i %3 == 0 && i %5 == 0) {
        console.log(`${i} -> javascript`);
    } else if (i %3 == 0) {
        console.log(`${i} -> java`);
    } else if (i %5 == 0) {
        console.log(`${i} -> script`);
    } else {
        console.log(`${i}`);
    }
}
