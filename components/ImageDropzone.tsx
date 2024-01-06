"use client";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

interface ImageDropzoneProps {
  limit: number | undefined;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  limit,
  files,
  setFiles,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file: File) => {
        const reader = new FileReader();

        reader.readAsArrayBuffer(file);

        if (acceptedFiles?.length) {
          setFiles!((previousFiles: File[]) => [
            ...acceptedFiles.map((file) =>
              Object.assign(file, { preview: URL.createObjectURL(file) })
            ),
            ...previousFiles,
          ]);
        }
      });
    },
    [setFiles]
  );
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop: onDrop,
    noClick: true,
    accept: { "image/*": [] },
  });

  if (limit) {
    console.log(files.length);
    if (files.length > limit) {
      setFiles(files.splice(0, limit));
    }
  }
  files.map((file) => {
    console.log(file);
  });
  return (
    <>
      <div
        {...getRootProps()}
        className="rounded-lg border border-slate-400 p-5 flex gap-2 overflow-auto justify-center"
      >
        <input {...getInputProps()} />
        {!files.length && (
          <p className="text-slate-400">{`Drag 'n' drop image here`}</p>
        )}
        {files.map((file, key) => {
          const modFile = file as File & { preview: string };
          return (
            <Image
              width="0"
              height="0"
              src={modFile.preview}
              alt=""
              key={key}
              className="w-[100px] h-auto"
            />
          );
        })}
      </div>
    </>
  );
};

export default ImageDropzone;
