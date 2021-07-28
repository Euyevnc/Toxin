const avatarImg = require('../images/review-1-avatar.jpg').default;
const avatarImg2 = require('../images/review-2-avatar.jpg').default;

const review1 = {
  name: 'Мурад Сарафанов',
  avatar: avatarImg,
  review: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
  date: '03,05,2021',
  likes: 12,
  isLiked: true,
  local_days: 'дней',
  local_weeks: 'недель',
  local_months: 'месяцев',
  local_years: 'лет',
  local_ago: 'назад',
};

const review2 = {
  name: 'Патрисия Стёклышкова',
  avatar: avatarImg2,
  review: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент.',
  date: '03,21,2021',
  likes: 2,
  isLiked: false,
  local_days: 'дней',
  local_weeks: 'недель',
  local_months: 'месяцев',
  local_years: 'лет',
  local_ago: 'назад',
};

export default [review1, review2];
