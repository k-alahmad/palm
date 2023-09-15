const LinkElement = ({ name, link, styled, onClick, selectedLink }) => {
  return (
    <div
      className={`pb-[8px]  ${
        link == selectedLink
          ? "border-b-4 border-fifth text-fifth font-bold"
          : "text-primary font-medium"
      }`}
      onClick={onClick}
    >
      <p className={`px-1 cursor-pointer text-med ${styled}`}>{name}</p>
    </div>
  );
};

export default LinkElement;
