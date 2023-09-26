const Image = (props) => {
  const { mobileImg, desktopImg } = props;

  return (
    <picture>
      <source media="(min-width: 500px)" srcset={desktopImg} />
      <img src={mobileImg} alt="Chris standing up holding his daughter Elva" />
    </picture>
  );
};

export default Image;