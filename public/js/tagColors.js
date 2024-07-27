const tagColors = {};
const classNames = [
  'cyan1',
  'cyan2',
  'cyan3',
  'purple1',
  'purple2',
  'purple3',
  'red1',
  'red2',
  'red3',
  'orange1',
  'orange2',
  'orange3',
  'lime1',
  'lime2',
  'lime3',
  'green1',
  'green2',
  'green3',
  'blue1',
  'blue2',
  'blue3',
  'black1',
  'black2',
  'black3',
];
let classIndex = 0;

function getClassNameForTag(tag) {
  if (!tagColors[tag]) {
    // Assign a class name from the list
    tagColors[tag] = classNames[classIndex];
    classIndex = (classIndex + 1) % classNames.length;
  }
  return tagColors[tag];
}

function applyTagColors() {
  const tags = document.querySelectorAll('[data-tag]');
  tags.forEach(tagElement => {
    const tag = tagElement.getAttribute('data-tag');
    const className = getClassNameForTag(tag);
    tagElement.classList.add(className);
  });
}

document.addEventListener('DOMContentLoaded', applyTagColors);