class Review {
  constructor(root) {
    this.timer = root.querySelector('.js-review__days-ago');
    this.date = this.timer.dataset.date;
    this.local_days = this.timer.dataset.localDays;
    this.local_weeks = this.timer.dataset.localWeeks;
    this.local_months = this.timer.dataset.localMonths;
    this.local_years = this.timer.dataset.localYears;
    this.local_ago = this.timer.dataset.localAgo;

    this.#init();
  }

  #init = () => {
    const daysAgo = Math.floor((new Date() - new Date(this.date)) / (24 * 3600000));
    this.timer.textContent = `${this.#parseDate(daysAgo)} ${this.local_ago}`;
  }

  #parseDate = (amountOfDays) => {
    let days = amountOfDays;
    const years = parseInt(days / 340, 10);
    days -= years * 330;
    const months = parseInt(days / 30, 10);
    days -= months * 30;
    const weeks = parseInt(days / 7, 10);
    days -= weeks * 7;

    let createdString = '';

    if (years > 0) createdString = `${years} ${this.local_years}`;
    else if (months > 0) createdString = `${months} ${this.local_months}`;
    else if (weeks > 0) createdString = `${weeks} ${this.local_weeks}`;
    else if (days) createdString = `${days} ${this.local_days}`;
    else createdString = 'today';

    return createdString;
  }
}

export default Review;
