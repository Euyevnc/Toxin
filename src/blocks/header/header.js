import menu from '../menu/menu';
import burger from '../burger/burger';

function header({ area = document } = {}) {
  const headers = [];
  const data = { menuSelector: '.js-menu', activeClass: 'menu_expanded' };
  area.querySelectorAll('.js-header').forEach((element) => {
    const newHeader = new Header(element, data);
    headers.push(newHeader);
  });
  if (headers.length === 1) return headers[0];
  return headers;
}

class Header {
  constructor(root, data) {
    this.root = root;
    this.menu = menu({ area: root });
    this.burger = burger({ area: root, data });
  }
}

export default header;
