

const benchmark = (func, input, iterations) => {
    iterations = iterations ?? 100000;

    const start = window.performance.now();

    for (let i = 0; i < iterations; ++i) {
        const res = func(input);

        if (i === 0) {
            console.log(res);
        }
    }
    const end = window.performance.now();
    const time = end - start;
    console.log(time);
    return time;
}


const print_recap = (results) => {

    let highest = [null, 0];
    const assign_highest = (tag, duration) => { highest[0] = tag; highest[1] = duration; };
    for (const [tag, duration] of Object.entries(results)) {
        if (highest[0] === null ) {
            assign_highest(tag, duration);
            continue;
        }

        if (duration > highest[1]) {
            assign_highest(tag, duration);
        }
    }

    let table = [];

    for (const [tag, duration] of Object.entries(results)) {
        let row = [];
        row.push(tag);
        row.push(Math.round((duration * 100) / highest[1]));
        row.push(Math.round(duration));

        table.push(row);
    }

    console.log("[ r e c a p ]");
    let str = "";
    for (let i = 0; i < table.length; ++i) {
        str = `${str}${table[i][0]} - ${table[i][1]}% - ${table[i][2]}ms\n`;
    }
    console.log(str);
}

export { benchmark, print_recap };
