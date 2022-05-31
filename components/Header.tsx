import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <div className='h-28'>
      <div className='py-5 px-10 flex justify-between'>
        <div>
          <h2 className='text-3xl font-bold'>
            Hello, <span>John</span>
          </h2>
          <p className='text-xl'>Welcome to the board</p>
        </div>

        <div>
          <FontAwesomeIcon
            icon={faWineGlass}
            style={{ width: "40px", cursor: "pointer" }}
            className='ml-4'
          />
        </div>
      </div>
    </div>
  );
}
