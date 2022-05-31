import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faTachometerAlt,
  faRocket,
  faCog,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
export default function LeftNavbar() {
  return (
    <div className='bg-black text-white w-56'>
      <h1 className='font-bold px-4 py-4 text-2xl'>Streamline</h1>
      <div className='py-5'>
        <ul className='px-4'>
          <li className='navbaritem'>
            <FontAwesomeIcon
              icon={faTachometerAlt}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href='#' className='ml-2'>
              Dashboard
            </a>
          </li>
          <li className='navbaritem'>
            <FontAwesomeIcon
              icon={faRocket}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href='#' className='ml-2'>
              Explore
            </a>
          </li>
          <li className='navbaritem'>
            <FontAwesomeIcon
              icon={faBookOpen}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href='#' className='ml-2'>
              Library
            </a>
          </li>
          <li className='navbaritem'>
            <FontAwesomeIcon
              icon={faCog}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href='#' className='ml-2'>
              Favourite
            </a>
          </li>
          <li className='navbaritem'>
            <FontAwesomeIcon
              icon={faSignOut}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href='#' className='ml-2'>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
