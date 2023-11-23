"use client";
import { useState, useMemo } from "react";
import { ImageDropzone } from "@/components";
import Image from "next/image";

type newsFormObject = {
  headline: String;
  description: String;
  image: File;
};
const NewsPage = () => {
  const [inputs, setInputs] = useState({
    headline: "",
    description: "",
  });

  const [isError, setIsError] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleImageDrop = useMemo(
    () =>
      (droppedFiles: File[]): void => {
        setFiles(droppedFiles);
      },
    []
  );
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    setInputs({ ...inputs, [name]: event.target.value });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("headline", inputs.headline);
    formData.append("description", inputs.description);
    if (
      files.length !== 0 &&
      inputs.headline !== "" &&
      inputs.description != ""
    ) {
      formData.append("file", files[0]);
      console.log(formData);
      const response = await fetch("/api/news", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setIsOk(true);
        setIsError(false);
        setInputs({ description: "", headline: "" });
        setFiles([]);
      } else {
        setIsOk(false);
        setIsError(true);
      }
    } else {
      setIsError(true);
      setIsOk(false);
    }
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

        <ImageDropzone limit={3} files={files} setFiles={setFiles} />
        <button
          className="shadow rounded bg-blue-500 w-[150px] text-white self-center"
          onClick={(e) => {
            handleSubmit();
            e.preventDefault();
          }}
        >
          Submit
        </button>
        {isOk && (
          <div className="rounded-lg bg-green-300 p-2 border border-green-600">
            <p className="text-green-600 text-[20px]">News Added</p>
          </div>
        )}
        {isError && (
          <div className="rounded-lg bg-red-300 p-2 border border-red-600">
            <p className="text-red-600 text-[20px]">Error</p>
            <button>close</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsPage;
