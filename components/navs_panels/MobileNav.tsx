"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, Dispatch, SetStateAction, useRef } from "react";
import { signOut, signIn } from "next-auth/react";
import { NavProps } from "@/types";
import { useOutsideAlerter } from "@/utils/OutsideClick";

const MobileNav = ({ session, providers }: NavProps) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef(null);
  useOutsideAlerter(
    wrapperRef,
    () => {
      setMenuOpened(false);
    },
    menuRef
  );
  return (
    <>
      <div
        className="flex flex-col gap-[3px] items-center justify-center ml-4 cursor-pointer md:hidden"
        onClick={() => {
          setMenuOpened(!menuOpened);
        }}
        ref={menuRef}
      >
        <span className="py-[3px] px-3 bg-primary-blue rounded"></span>
        <span className="py-[3px] px-3 bg-primary-blue rounded"></span>
        <span className="py-[3px] px-3 bg-primary-blue rounded"></span>
      </div>
      <div
        className={`side-menu ${menuOpened ? "left-[0px]" : "left-[-15rem]"}`}
        ref={wrapperRef}
      >
        <Link
          href="/"
          className="nav_link"
          onClick={() => setMenuOpened(false)}
        >
          Home
        </Link>
        <Link
          href="/services"
          className="nav_link"
          onClick={() => setMenuOpened(false)}
        >
          Services
        </Link>
        <Link
          href="/officers"
          className="nav_link"
          onClick={() => setMenuOpened(false)}
        >
          Officers
        </Link>
        <Link
          href="/news"
          className="nav_link"
          onClick={() => setMenuOpened(false)}
        >
          News
        </Link>

        <li className="nav_link">About</li>

        {session?.user ? (
          <>
            <Link
              href="/profile"
              className="nav_link"
              onClick={() => setMenuOpened(false)}
            >
              Profile
            </Link>
            <Link
              href="/"
              className="nav_link"
              onClick={() => setMenuOpened(false)}
            >
              My Post
            </Link>
            <Link
              href="/"
              className="nav_link"
              onClick={() => setMenuOpened(false)}
            >
              Monthly Dues
            </Link>

            <li
              className="nav_link"
              onClick={() => {
                signOut({ redirect: true, callbackUrl: "/" });
                setMenuOpened(false);
              }}
            >
              <span className="mr-3">
                <Image
                  src={session?.user.image!}
                  width={30}
                  height={30}
                  className="rounded-full  cursor-pointer"
                  alt="profile"
                />
              </span>
              Sign Out
            </li>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <li
                  onClick={() => signIn(provider.id)}
                  key={provider.id}
                  className="nav_link"
                >
                  Sign In
                </li>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default MobileNav;
