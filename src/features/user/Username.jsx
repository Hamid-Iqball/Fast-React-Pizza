import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) return;
  return (
    <div className=" md:block text-sm font-semibold hidden">{username}</div>
  );
}

export default Username;
