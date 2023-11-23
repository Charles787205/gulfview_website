"use client";
import Link from "next/link";
import Image from "next/image";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import { signOut, signIn } from "next-auth/react";
import { NavProps } from "@/types";
import { useOutsideAlerter } from "@/utils/OutsideClick";

const DesktopNav = ({ session, providers, isAdmin }: NavProps) => {
  const [profileMenuOpened, setProfileMenuOpened] = useState(false);

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
      {isAdmin && (
        <Link href="/admin" className="nav_link ml-auto">
          Admin
        </Link>
      )}
      {session?.user ? (
        <div className="mx-3">
          <Image
            src={session?.user.image!}
            width={37}
            height={37}
            className="rounded-full  cursor-pointer"
            alt="profile"
            onClick={() => {
              setProfileMenuOpened((prevState: boolean) => {
                return !prevState;
              });
            }}
          />

          <ProfileMenu
            setProfileMenuOpened={setProfileMenuOpened}
            profileMenuOpened={profileMenuOpened}
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
                className="sign-in-button"
              >
                Sign In
              </button>
            ))}
        </>
      )}
    </div>
  );
};

const ProfileMenu = ({
  profileMenuOpened,
  setProfileMenuOpened,
}: {
  profileMenuOpened: boolean;
  setProfileMenuOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef, (e) => {
    setProfileMenuOpened(false);
  });
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
