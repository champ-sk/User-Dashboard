import { useState } from "react";
import axios from 'axios';

export function PageLoad() {
  const [data, setData] = useState(null);

  const handle = async (userId) => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${userId}`);
      setData(res.data.data); // Access the nested data property
      console.log(res.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={() => handle(1)}> A </button>
      <button onClick={() => handle(2)}> B </button>
      <button onClick={() => handle(3)}> C </button>
      <button onClick={() => handle(4)}> D </button>
      {data && (
        <ul>
          <li>Email: {data.email}</li>
          <li>Name: {data.first_name} {data.last_name}</li>
        </ul>
      )}
      {data && <img src={data.avatar} alt={`${data.first_name} ${data.last_name}`} />}
    </div>
  );
}
