import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
//This is the modal conent when user is authenticated (logged in);
const AuthModalContent = ({
  onClose,
  onSubmit,

  prompt,
}: {
  onClose: () => void;
  onSubmit: () => void;
  prompt?: string;
}) => {
  return (
    <ModalContent>
      <ModalHeader>Submit?</ModalHeader>
      <ModalBody>
        <p>{prompt && prompt}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" onClick={onSubmit}>
          Submit
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default AuthModalContent;
