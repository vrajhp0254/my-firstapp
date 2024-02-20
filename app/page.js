"use client";
import React, { useState } from "react";

function page() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deletehandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };
  let renderTask = <h2>no Task available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center mb-1">
          <div className="flex justify-between items-center mb-1 w-2/3">
            <h5 className=" text-2xl font-semibold">{t.title}</h5>
            <h6 className=" text-xl font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deletehandler(i);
            }}
            className=" bg-red-600 text-white rounded px-1 py-2"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <div className="bg-black text-white h-[80px] text-3xl md:text-5xl text-center uppercase pt-5">
        my todo-list
      </div>
      <form
        onSubmit={submithandler}
        className="flex sm:justify-evenly items-center flex-col pt-5 sm:flex-row"
      >
        <input
          className="border-2 border-black sm:w-[25rem] w-[75vw] it p-1 m-4"
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          className="border-2 border-black sm:w-[25rem] w-[75vw] p-1 m-4"
          type="text"
          placeholder="enter description  here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="border-2 border-black w-[10rem] h-[2rem] rounded bg-black text-white ">
          Add task
        </button>
      </form>

      <div className="bg-slate-200 p-5 m-2">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default page;
