"use client";
import { FormEvent, useState, useEffect } from "react";
import { maintenanceRequestDetailsType } from "@/types";
import { useSession } from "next-auth/react";
import { useDisclosure } from "@nextui-org/react";
import { LoginModal } from "@/components";
import { SubmitModal } from "@/components";

const MaintenanceRequestPage = () => {
  const { data: session, status } = useSession();
  const [message, setMessage] = useState<{ success: string; error: string }>({
    success: "Your request has been submitted to the officers.",
    error:
      "Error submitting your request. Please check your internet connection",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "success" | "loading" | "error" | "waiting_input"
  >("waiting_input");

  const submitDisclosure = useDisclosure();

  const [requestDetails, setRequestDetails] =
    useState<maintenanceRequestDetailsType>({
      subject: "",
      description: "",
      user: session?.user.id,
    });

  const checkFields = () => {
    Object.keys(requestDetails).map((key) => {
      if (requestDetails[key] == "") {
        throw new Error(`Please fill all the fields. (Missing ${key} field.)`);
      }
    });
  };

  const handleClick = () => {
    setSubmitStatus("waiting_input");
    submitDisclosure.onOpen();
  };

  const handleSubmit = async () => {
    setSubmitStatus("loading");
    try {
      checkFields();
      const response = await fetch("/api/services/maintenance_request", {
        method: "POST",
        body: JSON.stringify(requestDetails),
      });
      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.log(error);
      setMessage({ ...message, error: `${error}` });
      setSubmitStatus("error");
    }
  };
  return (
    <div className="h-[calc(100vh-50px)] md:p-4 overflow-y-auto   lg:p-5 pt-0">
      <SubmitModal
        disclosure={submitDisclosure}
        status={status}
        onSubmit={handleSubmit}
        submitStatus={submitStatus}
        errorMessage={message.error}
        successMessage="Your request has been submitted to the officers."
      />
      <div className="lg:w-[80%] mx-auto shadow-lg shadow-neutral-500 bg-slate-200 h-full md:h-auto p-5 pb-10 rounded">
        <h1 className="text-[40px] font-bold">Maintenance Request</h1>
        <p>
          If you encounter any issues or notice something not working as
          expected, please don’t hesitate to let us know. Your feedback is
          crucial in helping us maintain the highest standards of service. We
          appreciate your assistance in keeping our system efficient and
          effective. Thank you!
        </p>
        <div className="mt-[20px] flex flex-col">
          <h3 className="text-[20px] font-semibold">Subject:</h3>
          <input
            type="text"
            name="subject"
            className="page-input mt-2"
            onChange={(e) =>
              setRequestDetails({
                ...requestDetails,
                subject: e.target.value,
              })
            }
            value={requestDetails.subject}
          />
          <h3 className="text-[20px] mt-5 font-semibold">Description:</h3>
          <textarea
            name="description"
            cols={30}
            rows={10}
            className="page-input mt-2"
            onChange={(e) =>
              setRequestDetails({
                ...requestDetails,
                description: e.target.value,
              })
            }
            value={requestDetails.description}
          ></textarea>
          <button
            onClick={handleClick}
            className="p-2 bg-primary-blue text-white font-bold mt-[40px] md:w-[150px] md:ml-auto rounded shadow-lg shadow-slate-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceRequestPage;
