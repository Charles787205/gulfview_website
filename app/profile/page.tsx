"use client";
import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState, Suspense, lazy } from "react";
import { UserType } from "@/types";
import LoadingRing from "@/components/LoadingRing";

const ProfilePage = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const { data: session } = useSession({
    required: true,
  });
  const [isEdit, setIsEdit] = useState(false);
  const [isFieldNull, setIsFieldNull] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(`api/user/profile`, {
        method: "GET",
      });
      const user = await response.json();
      console.log(user);
      setUser(user);
    };

    getProfile();
  }, []);
  if (user) {
  }

  const ProfileCard = lazy(() => import("@/components/cards/ProfileCard"));

  const handleClick = (firstName: string, lastName: string) => {
    if (isEdit) {
      setIsEdit(false);
      if (firstName != "" || lastName != "") {
        user!.firstName = firstName;
        user!.lastName = lastName;
      }
      const patchUser = async () => {
        const response = await fetch("api/user/profile", {
          method: "PATCH",
          body: JSON.stringify(user),
        });
        setUser(await response.json());
      };
      patchUser();
    } else {
      setIsEdit(true);
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-100 h-[100vh] ">
      <Suspense
        fallback={
          <div className="mt-[5rem]">
            <LoadingRing width={100} height={100} title="Profile" />
          </div>
        }
      >
        <ProfileCard
          isFieldNull={isFieldNull}
          user={user}
          isEdit={isEdit}
          handleClick={handleClick}
        />
      </Suspense>
    </div>
  );
};

export default ProfilePage;
