
function handleMouseEnter() {
  this.classList.add('s-card--hovered');//Adiciona a classe ao elemento
  document.body.id = `${this.id}-hovered`;//Adiciona a classe ao body

}
function handleMouseLeave() {
  this.classList.remove('s-card--hovered');//remove a classe ao elemento
  document.body.id = '';

}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

  }
}


document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);


// carrousel

function selectCarouselItem(selectedButtomElement) {
  const selectedItem = selectedButtomElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); //pegar o valor do rotateY regex "coisa estranha estudar"
  const rotateYDeg = -90 * (Number(selectedItem) - 1); //rotacionar a carrousel de acordo com o item selecionado "negativa roda ante horario (number converte o string em number)"
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`); //substituir o valor do rotateY pelo novo valor"replace"


  carousel.style.transform = newTransform;

  //add o active nos botoes
  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');  
  selectedButtomElement.classList.add('s-controller__button--active');
}
