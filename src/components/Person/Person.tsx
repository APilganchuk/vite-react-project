import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Button from "../Button";

interface Person {
  name: string;
  height: string;
}

const fetchPerson = async (id: number): Promise<Person> => {
  const response = await axios.get(`https://swapi.info/api/people/${id}`);
  return response.data;
};

export default function Person() {
  const [count, setCount] = useState(1);

  const { data, error, isLoading, isError } = useQuery<Person>({
    queryKey: ["person", count],
    queryFn: () => fetchPerson(count),
  });

  return (
    <>
      <Button
        clickFn={() => setCount((prev) => prev + 1)}
        variant="ordinary"
        text="Get next character"
      />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error?.message}</p>}
      {data && (
        <ul>
          <li>{data.name}</li>
          <li>{data.height} cm</li>
        </ul>
      )}
    </>
  );
}
