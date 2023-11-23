"use client";
import { useState } from "react";

type newsFormProps = {
  handleSubmit: (headline: string, description: string) => void;
};
const NewsForm = ({ handleSubmit }: newsFormProps) => {
  const [inputs, setInputs] = useState({
    headline: "",
    description: "",
  });
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    setInputs({ ...inputs, [name]: event.target.value });
    console.log(name);
  };

  return (
    <div className="w-[100%] flex justify-center items-center flex-col">
      <h1 className="text-[30px] font-bold">News</h1>
      <form
        action=""
        className=" flex flex-col gap-2 mt-5 text-center text-md w-[80%] md:w-[500px] "
      >
        <label>Headline:</label>
        <input
          type="text"
          name="headline"
          id="headline"
          className="md:w-full shadow-md border-slate-300 border  rounded"
          value={inputs.headline}
          onChange={handleChange}
        />

        <label className="mt-3">News Description:</label>
        <textarea
          name="description"
          id="description"
          value={inputs.description}
          onChange={handleChange}
          cols={20}
          rows={20}
          className="shadow-md border-slate-300 border max-h-[150px] p-2 rounded-3xl"
        ></textarea>

        <button
          className="shadow rounded bg-blue-500 w-[150px] text-white self-center"
          onClick={() => {
            handleSubmit(inputs.headline, inputs.description);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsForm;
