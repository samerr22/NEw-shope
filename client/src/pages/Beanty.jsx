import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Beanty() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  const [Form, setform] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const currentuserId = currentUser ? currentUser._id : null;
  console.log("arra", Form);
  const [formId, setformId] = useState("");
  const [filter, setfilter] = useState([]);
  const [query, setQuery] = useState(" ");

  useEffect(() => {
    const fetchform = async () => {
      try {
        const res = await fetch(`/api/beauty/BgetAll`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setform(data.getbeaty);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchform();
  }, []);

  //search funtion
  useEffect(() => {
    if (query.trim() === "") {
      // If the query is empty, display all data
      setfilter([...Form]);
    } else {
      // If there's a query, filter the data
      const filteredData = Form.filter(
        (formm) =>
          formm.name && formm.name.toLowerCase().includes(query.toLowerCase())
      );
      setfilter(filteredData);
    }
  }, [query, Form]);

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/beauty/deletebeauty/${formId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setform((prev) => prev.filter((formm) => formm._id !== formId));
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center text-3xl font-serif mt-4 text-slate-900">
        <h1>Beauty</h1>
      </div>
      <div className="ml-8 mt-7 flex justify-center items-center">
        <form>
          <input
            type="text"
            placeholder="Search... "
            className=" w-[300px] h-8 rounded-lg shadow-xl"
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
      <div>
        {currentUser?.isInventManger && (
          <>
            <div className="flex justify-center items-center gap-6 mt-8 ml-12">
              <Link
                to={"/create-shope"}
                className="hidden sm:inline   bg-orange-500 hover:bg-red-500  text-white font-serif  py-2 px-4   rounded-full cursor-pointer"
              >
                Add new Shope
              </Link>
              <div></div>
            </div>
          </>
        )}

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {filter && filter.length > 0 ? (
              <>
                {filter.slice(0, showMore ? filter.length : 2).map((formm) => (
                  <div
                    key={formm._id}
                    className="w-[400px] h-[520px] mt-10 mb-10 rounded-xl border border-black bg-orange-600 bg-opacity-10 shadow-xl"
                  >
                    <div className="px-6 py-4">
                      <div className="flex justify-center items-center border border-black rounded-3xl  bg-white bg-opacity-10 shadow-2xl">
                        <img
                          className="w-[200px] h-[200px]"
                          src={formm.image}
                        />
                      </div>

                      <div className=" border border-black rounded-3xl mt-6 h-64  bg-white bg-opacity-50 shadow-2xl">
                        <div className="flex gap-4 ml-4">
                          <div className="font-extralight text-md">Name:</div>

                          <div className="font-extralight text-md mb-2 max-w-[200px] break-words">
                            {formm.name}
                          </div>
                        </div>
                        <div className="flex gap-4 ml-4">
                          <div className="font-extralight text-md">
                            StallNumber:
                          </div>

                          <div className=" text-md mb-2 max-w-[100px] font-extralight break-words">
                            {formm.stallNumber}
                          </div>
                        </div>
                        <div className="flex gap-4 ml-4">
                          <div className="font-extralight text-md">
                            FloorNumber:
                          </div>

                          <div className=" text-md mb-2 max-w-[100px] font-extralight break-words">
                            {formm.FloorNumber}
                          </div>
                        </div>

                        <div className="flex gap-4 ml-4">
                          <div className="font-extralight text-md">
                            Description:
                          </div>

                          <div className="text-gray-700  text-sm mt-2   max-w-[200px] font-extralight break-words">
                            {formm.Des}
                          </div>
                        </div>
                      </div>

                      {currentUser?.isInventManger && (
                        <>
                          <div className="flex justify-center items-center gap-6 mt-6">
                            <Link
                              to={`/update-shope/${formm._id}`}
                              className="hidden sm:inline   bg-orange-500 hover:bg-red-500 bg-opacity-90  text-white font-serif  py-1 px-8  rounded-xl cursor-pointer"
                            >
                              Edit
                            </Link>
                            <div>
                              <span
                                onClick={() => {
                                  setformId(formm._id);
                                  handleDelete();
                                }}
                                className="hidden sm:inline    bg-orange-500 hover:bg-red-500  bg-opacity-90 text-white font-serif py-2 px-6  rounded-xl cursor-pointer"
                              >
                                Delete
                              </span>
                            </div>
                            </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}

                {!showMore && Form.length > 2 && (
                  <div className="mt-4 md:hidden sm:hidden lg:block mb-4 ml-[60px]">
                    <button
                      className="bg-[#ff834b] hover:bg-red-700 text-white font-bold rounded"
                      onClick={() => setShowMore(true)}
                    >
                      Show More
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p>You have no items yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
