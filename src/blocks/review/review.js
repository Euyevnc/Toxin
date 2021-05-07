class Review {
  constructor(root) {
    this.timer = root.querySelector('.js-review__days-ago');
    this.date = this.timer.dataset.date;
    this.local_days = this.timer.dataset.local_days;
    this.local_weeks = this.timer.dataset.local_weeks;
    this.local_months = this.timer.dataset.local_months;
    this.local_years = this.timer.dataset.local_years;
    this.local_ago = this.timer.dataset.local_ago;

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
    if (years > 0) {
      if (years === 1 || years % 10 === 1) createdString = `${years} ${this.local_years}`;
      else if (years > 4 || years % 10 > 4) createdString = `${years} ${this.local_years}`;
      else createdString = `${years} ${this.local_years}`;
    } else if (months > 0) {
      if (months === 1 || months % 10 === 1) createdString = `${months} ${this.local_months}`;
      else if (months > 4 || months % 10 > 4) createdString = `${months} ${this.local_months}`;
      else createdString = `${months} ${this.local_months}`;
    } else if (weeks > 0) {
      if (weeks === 1 || weeks % 10 === 1) createdString = `${weeks} ${this.local_weeks}`;
      else if (weeks > 4 || weeks % 10 > 4) createdString = `${weeks} ${this.local_weeks}`;
      else createdString = `${weeks} ${this.local_weeks}`;
    } else if (days === 1 || days % 10 === 1) createdString = `${days} ${this.local_days}`;

    else if (days > 4 || days % 10 > 4) createdString = `${days} ${this.local_days}`;
    else createdString = `${days} ${this.local_days}`;

    return createdString;
  }
}

export default Review;
