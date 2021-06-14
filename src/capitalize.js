const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  const firstChar = text[0].toUpperCase();
  const restText = text.slice(1);
  return `${firstChar}${restText}`;
};

export default capitalize;
