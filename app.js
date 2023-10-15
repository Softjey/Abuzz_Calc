const form = document.querySelector('.calc');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const participantAmount = form.elements.participantAmount.value;
  const OurAccountsAmount = form.elements.OurAccountsAmount.value;
  const PrizesAmount = form.elements.PrizesAmount.value;
  const OnePrizeValue = form.elements.OnePrizeValue.value;

  const winChance = 1 - ((participantAmount - PrizesAmount) / participantAmount) ** OurAccountsAmount;
  const projectedIncome = winChance * OnePrizeValue;
  const projIncomeForOne = projectedIncome / OurAccountsAmount;

  const winChanceDiv = document.querySelector('#winChance');
  winChanceDiv.textContent = (winChance * 100).toFixed(2) + '%';

  const projectedIncomeDiv = document.querySelector('#projectedIncome');
  projectedIncomeDiv.textContent =  projectedIncome.toFixed(2) + '$';

  const projIncomeForOneDiv = document.querySelector('#projIncomeForOne');
  projIncomeForOneDiv.textContent = projIncomeForOne.toFixed(2) + '$';
});
