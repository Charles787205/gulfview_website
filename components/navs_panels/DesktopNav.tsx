"use client";
import Link from "next/link";
import Image from "next/image";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { signOut, signIn } from "next-auth/react";
import { NavProps } from "@/types";
import { useOutsideAlerter } from "@/utils/OutsideClick";

const DesktopNav = ({ session, providers, isAdmin }: NavProps) => {
  const [profileMenuOpened, setProfileMenuOpened] = useState(false);
  const profileImageRef = useRef(null);
  return (
    <div className=" hidden md:flex items-center w-[100%] overflow-hidden">
      <Link href="/" className="flex flex-row">
        <Image
          src="/gulfviewlogo.svg"
          width={40}
          height={40}
          className="object-contain mx-3"
          alt="gulfview logo"
        />
        <h1 className="flex text-primary-blue font-extrabold text-[24px] items-center cursor-pointer mx-1 md:text-[30px]">
          GVEHAI
        </h1>
      </Link>
      <ul className="flex ">
        <Link href="/services" className="nav_link">
          Services
        </Link>
        <Link href="/officers" className="nav_link">
          Officers
        </Link>
        <Link href="/news" className="nav_link">
          News
        </Link>
        <li className="nav_link justify-center">About</li>
      </ul>
      <div className="ml-auto flex items-center mr-3 ">
        {isAdmin && (
          <Link href="/admin" className="nav_link ml-auto">
            Admin
          </Link>
        )}

        {session?.user ? (
          <div>
            <Image
              ref={profileImageRef}
              src={session?.user.image!}
              width={37}
              height={37}
              className="rounded-full  cursor-pointer"
              alt="profile"
              onClick={() => {
                setProfileMenuOpened((prevState: boolean) => {
                  console.log("profile menu", !prevState);
                  return !prevState;
                });
              }}
            />

            <ProfileMenu
              setProfileMenuOpened={setProfileMenuOpened}
              profileMenuOpened={profileMenuOpened}
              imageRef={profileImageRef}
            />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider?.name}
                  onClick={() => signIn(provider?.id)}
                  className="sign-in-button "
                >
                  <Image
                    width={20}
                    height={20}
                    src="/google-icon.png"
                    alt="google icon"
                  />
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

const ProfileMenu = ({
  profileMenuOpened,
  setProfileMenuOpened,
  imageRef,
}: {
  profileMenuOpened: boolean;
  setProfileMenuOpened: Dispatch<SetStateAction<boolean>>;
  imageRef: React.RefObject<HTMLImageElement>;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(
    wrapperRef,
    (e) => {
      console.log("image close");
      setProfileMenuOpened(false);
    },
    imageRef
  );
  return (
    <div
      className={`dropdown-menu-show ${
        !profileMenuOpened && "dropdown-menu-hidden"
      }`}
      ref={wrapperRef}
    >
      <Link
        href="/profile"
        className="dropdown-link"
        onClick={() => setProfileMenuOpened(false)}
      >
        Profile
      </Link>
      <Link
        href="/"
        className="dropdown-link"
        onClick={() => setProfileMenuOpened(false)}
      >
        My Post
      </Link>
      <Link
        href="/"
        className="dropdown-link"
        onClick={() => setProfileMenuOpened(false)}
      >
        Monthly Dues
      </Link>
      <h1
        className="dropdown-link mt-auto mb-3"
        onClick={() => {
          signOut({ redirect: true, callbackUrl: "/" });
          setProfileMenuOpened(false);
        }}
      >
        Sign Out
      </h1>
    </div>
  );
};
export default DesktopNav;
