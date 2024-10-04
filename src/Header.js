function Item({ props }) {
  return (
    <li>
      <a href={props.link}>{props.content}</a>
    </li>
  );
}
function Menu({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <Item props={item} key={index} />
      ))}
    </ul>
  );
}
function Header() {
  const list = [{ link: "/home", content: "trang chủ" }];
  return <Menu list={list} />;
}
export { Item, Menu, Header };
