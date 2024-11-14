function Helloo() {
  return (
    <span>
      <button
        onClick={() => {
          hiAll("Chàoo các bạnnn");
        }}
      >
        Hi All
      </button>
      <button
        onClick={() => {
          hiYou("Chào bạn");
        }}
      >
        Hi You
      </button>
    </span>
  );
}
const hiAll = () => {
  alert("Hi everyone");
};
const hiYou = (name) => {
  alert("Hello " + name);
};
export { Helloo, hiAll, hiYou };
