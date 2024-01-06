"use client";
import { UserType } from "@/types";
import { useState, Suspense } from "react";

type profileCardProps = {
  isFieldNull: boolean;
  isEdit: boolean;
  handleClick: Function;
  user: UserType | null;
};

const ProfileCard = ({
  isFieldNull,
  isEdit,
  user,
  handleClick,
}: profileCardProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div className="flex flex-col gap-3 md:w-[80%] mt-8 shadow-lg bg-white rounded p-10 ">
      <h1 className="text-[40px] font-bold">My Profile</h1>
      {isFieldNull && (
        <p className="text-green-600">Complete your registration</p>
      )}
      <div className="flex items-center">
        <h1 className="mr-2">First Name: </h1>
        {isEdit ? (
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className="p-[2px] ml-3 border-[1px] rounded"
          />
        ) : user?.firstName ? (
          user?.firstName
        ) : (
          "None"
        )}
      </div>
      <div className="flex items-center">
        <h1 className="mr-2">Last Name:</h1>
        {isEdit ? (
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="p-[2px] ml-3 border-[1px] rounded"
          />
        ) : user?.lastName ? (
          user?.lastName
        ) : (
          "None"
        )}
      </div>
      <div className="flex items-center">
        <h1>Email:</h1>
        <p className="ml-3">{user?.email}</p>
      </div>

      {user?.position && (
        <div className="flex items-center">
          <h1>Position:</h1>
          <p className="ml-3">{user.position}</p>
        </div>
      )}
      <button
        className="w-[200px] p-2 bg-blue-600 hover:bg-blue-700 text-white rounded hover:scale-[1.03]"
        onClick={() => {
          handleClick(firstName, lastName);
        }}
      >
        {isEdit ? "Save Changes" : "Edit Profile"}
      </button>
    </div>
  );
};

export default ProfileCard;
