const tagColors = {};
const classNames = [
  'purple-to-blue',
  'cyan-to-blue',
  'green-to-blue',
  'purple-to-pink',
  'pink-to-orange',
  'teal-to-lime',
  'red-to-yellow'
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