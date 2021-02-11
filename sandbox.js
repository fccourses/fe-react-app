function sandbox(props) {
  const { isBool:bool = false, name = 'Anonymous' } = props;

  if (bool) {
    return `str ${name}`;
  }

  return `10 ${name}`;
}

sandbox();
