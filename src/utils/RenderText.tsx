const renderText = (
  text: string | string[],
  className: string,
  baseWeight: number = 400
) => {
  const characters = Array.isArray(text) ? text : Array.from(text);

  return characters.map((char, index) => (
    <span
      key={index}
      className={className}
      style={{ fontVariationSettings: `wght ${baseWeight}` }}
    >
      {char}
    </span>
  ));
};

export default renderText;
