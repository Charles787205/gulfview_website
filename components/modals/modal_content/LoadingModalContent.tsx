import { ModalContent, ModalBody } from "@nextui-org/react";
import { LoadingRing } from "@/components";
const LoadingModalContent = () => {
  return (
    <ModalContent>
      <ModalBody>
        <LoadingRing width={100} height={100} title={"Loading please wait.."} />
      </ModalBody>
    </ModalContent>
  );
};

export default LoadingModalContent;
