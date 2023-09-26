const ListItem = (props) => {
  const {text} = props;

  return (
    <>
    <img src="src/assets/images/icon-list.svg" />
    <p>{text}</p>
    </>
  )
}

export default ListItem;