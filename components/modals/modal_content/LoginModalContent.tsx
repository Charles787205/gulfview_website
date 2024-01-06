"use client";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
  signIn,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import { LoadingRing } from "../..";

const LoginModalContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    console.log("hello");
    setIsLoading(true);
    setUpProviders();
    console.log("providers", providers);
    if (providers != null) {
      setIsLoading(false);
    }
  }, [providers]);

  return (
    <ModalContent className="bg-slate-300 text-primary-blue text-center pb-5">
      <ModalHeader className="flex flex-col gap-1">
        You need to login before you can submit.
      </ModalHeader>
      <ModalBody>
        {isLoading && <LoadingRing width={80} height={80} />}
        {!isLoading && (
          <button
            className="flex items-center gap-3 mx-auto rounded-full shadow p-3 hover:bg-neutral-200 shadow-slate-400 bg-white"
            onClick={() => signIn(providers?.google.id)}
          >
            <Image
              width={20}
              height={20}
              src="/google-icon.png"
              alt="google icon"
            />
            <p>Login with google</p>
          </button>
        )}
      </ModalBody>
    </ModalContent>
  );
};

export default LoginModalContent;
