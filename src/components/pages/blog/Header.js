function Header({ props }) {
  let { title, date } = props;
  return (
    <>
      <h1 className="green">{title}</h1>
      <h5>{date}</h5>
    </>
  );
}

export default Header;
