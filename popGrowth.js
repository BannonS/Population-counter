let popU = 1000;

const popIncrease = () => {
    let newPop = popU + (popU * .02) + 50;
    popU = newPop;
    return newPop.toFixed();
};

for (let i = 0; i < 5; i++) {
let newPopulation = popIncrease();
console.log(newPopulation);
}
