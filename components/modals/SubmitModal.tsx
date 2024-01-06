"use client";

import LoginModalContent from "./modal_content/LoginModalContent";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import AuthModalContent from "./modal_content/AuthModalContent";
import LoadingModalContent from "./modal_content/LoadingModalContent";
import { LoadingRing } from "..";

const SubmitModal = ({
  disclosure,
  onSubmit,
  status,
  submitStatus,
  errorMessage,
  successMessage,
  onSubmitMessage,
}: {
  disclosure: ReturnType<typeof useDisclosure>;
  onSubmit: () => void;
  status: "loading" | "authenticated" | "unauthenticated";
  submitStatus: "loading" | "success" | "error" | "waiting_input";
  errorMessage?: string;
  successMessage?: string;
  onSubmitMessage?: string;
}) => {
  const { isOpen, onOpen, onOpenChange, onClose } = disclosure;

  const LoadingContent = () => {
    return (
      <ModalContent>
        <ModalHeader className="bg-primary-blue text-white text-[30px] flex justify-center">
          Loading
        </ModalHeader>
        <ModalBody>
          <LoadingRing
            width={100}
            height={100}
            title="Loading please wait..."
          />
        </ModalBody>
      </ModalContent>
    );
  };

  const SuccessContent = () => {
    return (
      <ModalContent>
        <ModalHeader className="flex justify-center text-[30px] text-white bg-green-500">
          Success!
        </ModalHeader>
        <ModalBody>
          <p>{successMessage ? successMessage : "success"}</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} color="success">
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    );
  };

  const ErrorContent = () => {
    return (
      <ModalContent>
        <ModalHeader className="flex justify-center text-[30px] text-white bg-red-600">
          Ooops!
        </ModalHeader>
        <ModalBody>
          <p>{errorMessage ? errorMessage : "Error"}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={onSubmit}>
            Try again
          </Button>
          <Button color="primary" onClick={onClose}>
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    );
  };

  const authModals = {
    //this will render based on authentication staus
    unauthenticated: <LoginModalContent />,
    authenticated: (
      <AuthModalContent
        onClose={onClose}
        onSubmit={onSubmit}
        prompt={onSubmitMessage}
      />
    ),
    loading: <LoadingModalContent />,
  };

  const userPressedSubmit: boolean =
    status === "authenticated" && submitStatus !== "waiting_input";
  const submitContent = {
    loading: <LoadingContent />,
    success: <SuccessContent />,
    error: <ErrorContent />,
    waiting_input: "",
  } as const;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      {!userPressedSubmit && authModals[status]}
      {userPressedSubmit && submitContent[submitStatus]}
    </Modal>
  );
};

export default SubmitModal;
