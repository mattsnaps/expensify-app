


const selectExpensesTotal = (expenses) => {
    const costArray = (expenses.map((cost) => (parseInt(cost.amount))));
    const sum = costArray.reduce((total, num, index) => (total + num), 0);

    return sum;
};


export default selectExpensesTotal;