var runs = [1, 0, 2, 4, 3, 6, 0, 0, 0, 2, 6, 2, 6, 6, 6, 4, 1, 1, 2, 4, 6, 1];

const getTotal = function (runs) {

    return runs.reduce(
        (a, b) => {
            return a + b;
        }, 0);
}


const getRunsPerOVer = function (runs) {

    const balls = runs.length % 6;
    const completedOvers = (runs.length - balls) / 6;

    const runsPerOver = {};

    for (let i = 1; i <= completedOvers; i++) {

        let runsInOver = 0;

        for (let j = (i - 1) * 6; j < (i * 6); j++) {
            runsInOver += runs[j];
        }

        runsPerOver[`Over${i}`] = runsInOver;

    }

    if (balls) {

        let runsInCurrentOver = 0;

        for (let i = completedOvers * 6; i < runs.length; i++) {
            runsInCurrentOver += runs[i];
        }
        runsPerOver['CurrentOver'] = runsInCurrentOver;
    }

    return runsPerOver;
}


console.log(getTotal(runs));
console.log(getRunsPerOVer(runs));