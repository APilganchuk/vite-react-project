import Button from "../Button";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Input() {
  const { setUsername } = useContext(UserContext);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setIsDisabled(value.length === 0);
  };

  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username");
    if (typeof username !== "string") {
      return;
    }
    console.log("Username:", username);
    setUsername(username);

    setIsDisabled(true);
  };

  return (
    <form action={handleSubmit}>
      <input autoFocus onChange={handleChange} type="text" name="username" />
      <Button disabled={isDisabled} variant="ordinary" text="Add Player" />
    </form>
  );
}
