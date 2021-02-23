export default props => {
  const { children, name } = props;
  return (
    <article>
      <h1>{name}</h1>
      <div title='test'>{children}</div>
    </article>
  );
};
