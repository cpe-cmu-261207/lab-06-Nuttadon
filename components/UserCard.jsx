import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";

export default function UserCard(props) {
  const [isArrowClick, setIsArrowClick] = useState(false);
  const onClickDown = () => {
    if (isArrowClick == false) {
      setIsArrowClick(true);
    } else {
      setIsArrowClick(false);
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center p-3" onClick={onClickDown}>
        <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {isArrowClick == false && <IconChevronDown />}
        {isArrowClick == true && <IconChevronUp />}
      </div>
      {isArrowClick == true && (
        <div className="text-center">
          <p>
            <IconMailForward /> {props.email}
          </p>
          <p>
            <IconMapPins /> {props.address}
          </p>
        </div>
      )}
    </div>
  );
}
