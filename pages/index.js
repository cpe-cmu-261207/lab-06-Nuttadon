import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [genAmount, setGenAmount] = useState(0);
  const genUsers = async () => {
    if (genAmount < 1) {
      alert("Invalid number of users");
      return;
    }
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${genAmount}`
    );

    const newUser = [];
    for (const x of resp.data.results) {
      newUser.push({
        name: x.name.first + " " + x.name.last,
        email: x.email,
        imgUrl: x.picture.large,
        address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
      });
    }
    setUsers(newUser);
    console.log(users);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          onChange={(event) => {
            setGenAmount(event.target.value);
          }}
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>
      <div>
        {users.map((a) => (
          <UserCard
            key={a.name}
            name={a.name}
            email={a.email}
            imgUrl={a.imgUrl}
            address={a.address}
          />
        ))}
      </div>

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Nuttadon Punyapan 640610647
      </p>
    </div>
  );
}
