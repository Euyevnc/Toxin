function review() {
  const reviews = [];
  document.querySelectorAll('.js-review').forEach((element) => {
    const newReview = new Review(element);
    newReview.init();
    reviews.push(newReview);
  });
  if (reviews.length === 1) return reviews[0];
  return reviews;
}

class Review {
  constructor(root) {
    this.root = root;
  }

  init() {
    this.timer = this.root.querySelector('.review__days-ago');
    this.date = this.timer.dataset.date;

    const daysAgo = Math.floor((new Date() - new Date(this.date)) / (24 * 3600000));

    this.timer.textContent = parseDate(daysAgo);
    /// ////
    function parseDate(amountOfDays) {
      let days = amountOfDays;
      const years = parseInt(days / 340, 10);
      days -= years * 330;
      const months = parseInt(days / 30, 10);
      days -= months * 30;
      const weeks = parseInt(days / 7, 10);
      days -= weeks * 7;
      let createdString = '';
      // В этом случае, думаю допустимо кириллицу использовать,
      // она тут без привязки к элементу
      if (years > 0) {
        if (years === 1 || years % 10 === 1) createdString = `${years} год`;
        else if (years > 4 || years % 10 > 4) createdString = `${years} года`;
        else createdString = `${years} лет`;
      } else if (months > 0) {
        if (months === 1 || months % 10 === 1) createdString = `${months} месяц`;
        else if (months > 4 || months % 10 > 4) createdString = `${months} месяцев`;
        else createdString = `${months} месяца`;
      } else if (weeks > 0) {
        if (weeks === 1 || weeks % 10 === 1) createdString = `${weeks} неделя`;
        else if (weeks > 4 || weeks % 10 > 4) createdString = `${weeks} недели`;
        else createdString = `${weeks} недель`;
      } else if (days === 1 || days % 10 === 1) createdString = `${days} день`;

      else if (days > 4 || days % 10 > 4) createdString = `${days} дней`;
      else createdString = `${days} дня`;

      return createdString;
    }
  }
}

export default review;
