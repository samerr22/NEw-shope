import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSilce";

export default function () {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-[#ff834b]  ">
      <div className=" flex justify-between items-center mr-10 max-w-6xl mx-auto p-3">
        <ul className="flex justify-center items-center gap-16 ml-32">
          <Link to="/beauty">
            <li className="text-white font-serif">Beauty</li>
          </Link>

          <Link to="/cloth">
            <li className="text-white font-serif">Cloth</li>
          </Link>
          <Link to="/book">
            <li className="text-white font-serif">Book</li>
          </Link>
          <Link to="/elec">
            <li className="text-white font-serif">Electrict</li>
          </Link>
          <Link to="/frunit">
            <li className="text-white font-serif">Frunite</li>
          </Link>

           

          {currentUser && (
            <li
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              shope
            </li>
          )}
          {isMenuOpen && (
            <div
              className=" absolute ml-[500px]  mt-52 bg-white border border-gray-200 rounded w-32 shadow-md"
              ref={menuRef}
            >
              

              {currentUser && (
                <>
                  <div className="flex justify-center items-center">
                    <h1>Shope</h1>
                  </div>
                  <div>
                    <Link to="/beauty">
                      <li className="text-black font-serif hover:bg-black hover:bg-opacity-40 hover:text-white w-32 ">
                     Beauty
                      </li>
                    </Link>
                    <Link to="/cloth">
                      <li className="text-black font-serif hover:bg-black hover:bg-opacity-40 hover:text-white w-32 ">
                        Cloth
                      </li>
                    </Link>
                    <Link to="/book">
                      <li className="text-black font-serif hover:bg-black hover:bg-opacity-40 hover:text-white w-32 ">
                       Book
                      </li>
                    </Link>
                    <Link to="/elect">
                      <li className="text-black font-serif hover:bg-black hover:bg-opacity-40 hover:text-white w-32 ">
                       Electict
                      </li>
                    </Link>
                    <Link to="/frunit">
                      <li className="text-black font-serif hover:bg-black hover:bg-opacity-40 hover:text-white w-32 ">
                       Frunite
                      </li>
                    </Link>
                  </div>
                </>
              )}
            </div>
          )}










          {currentUser ? (
            <span onClick={handleSignout} className="cursor-pointer text-white">
              Sign Out
            </span>
          ) : (
            <Link to="/sign-in">
              <li className="text-white">Sing In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
