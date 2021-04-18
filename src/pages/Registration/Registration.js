import './Registration.scss';
import Header from '../../blocks/header/header';
import Registration from '../../blocks/registration/registration';

document.addEventListener('DOMContentLoaded', handlerDocumentDomLoaded);

function handlerDocumentDomLoaded() {
  /* eslint-disable no-unused-vars */
  const headerObject = new Header();
  const registrationObject = new Registration();
  registrationObject.init();
}
