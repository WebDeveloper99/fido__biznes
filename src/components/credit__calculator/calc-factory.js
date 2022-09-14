export const calculate = (type) => {
    console.log( action[type], type);
        return action[type];
}

const action = {
    "anuited": (summ, pay, select, time, method) => {
        let sum = (summ * ((select / (time * 100)) + ((select / (time * 100)) / (Math.pow((1 + (select / (time * 100))), time) - 1))));
        return {
            monthlyPay:sum,
            qarz: (sum - summ * (select / (time * 100))),
            foiz: (summ * (select / (time * 100)))
        }
    },
    "differ": (summ, pay, select, time, method) => {
        return {
            monthlyPay: ((summ / time) + (summ * (select / (time * 100)))),
            qarz: (summ / time),
            foiz: (summ * (select / (time * 100)))
        }
    }

}