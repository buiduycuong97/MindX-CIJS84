import { useTheme } from "./Context.js";

const Todolist = () => {
  const { a } = useTheme();
  return <div>{a}</div>;
};

export default Todolist;
