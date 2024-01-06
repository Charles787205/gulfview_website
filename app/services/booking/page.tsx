"use client";

import { FormEvent, useState } from "react";
import { bookingDetailsType, BookingPageProps } from "@/types";
import { useDisclosure } from "@nextui-org/react";
import { SubmitModal } from "@/components";

import { signIn, getSession, getProviders, useSession } from "next-auth/react";
import Swal from "sweetalert2";

const BookingPage = () => {
  const [message, setMessage] = useState<{ success: string; error: string }>({
    success:
      "The request for booking has been sent, please wait for the response of the officers on your gmail account.",
    error:
      "Error submitting your request. Please check your internet connection",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "success" | "loading" | "error" | "waiting_input"
  >("waiting_input");
  const submitDisclosure = useDisclosure();
  const { data: session, status } = useSession();
  const [bookingDetails, setBookingDetails] = useState<bookingDetailsType>({
    amenity: "gym",
    name: "",
    description: "",
    date: "",
    time: "",
    hours: 0,
  });

  const checkFields = () => {
    for (let key of Object.keys(bookingDetails)) {
      let value = bookingDetails[key];
      if (value === "" || value === 0) {
        throw new Error(`Please fill all the fields. (Missing ${key} field.)`);
      }
    }
    return true;
  };

  const checkDate = () => {
    const inputDate = new Date(Date.parse(bookingDetails.date));
    const nowDate = new Date();
    inputDate.setHours(0, 0, 0, 0);
    nowDate.setHours(0, 0, 0, 0);
    const numNowDate = Date.parse(nowDate.toDateString());
    const numInputDate = Date.parse(inputDate.toDateString());
    if (numNowDate >= numInputDate) {
      // Date is not in the future. (Can't book in the past)
      console.log("nd < id", numNowDate, numInputDate);

      throw new Error("Please enter a valid date");
    }
  };

  const handleClick = () => {
    setSubmitStatus("waiting_input");
    submitDisclosure.onOpen();
  };

  const handleSubmit = async () => {
    setSubmitStatus("loading");
    try {
      checkFields();
      checkDate();
      const response = await fetch("/api/services/booking", {
        method: "POST",
        body: JSON.stringify(bookingDetails),
      });
      console.log(response.json());
      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setMessage({ ...message, error: response.statusText });
        setSubmitStatus("error");
      }
    } catch (error) {
      console.log(error);
      setMessage({ ...message, error: `${error}` });
      setSubmitStatus("error");
    }
  };

  const handleSubmitd = async (e: FormEvent) => {
    e.preventDefault();

    Swal.fire({
      title: "Submit",
      icon: "info",
      text: "Are you sure to submit",
      showCancelButton: true,
      confirmButtonText: "Ok",

      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          checkDate();
          checkFields();
        } catch (error) {
          console.log(error);
          Swal.showValidationMessage(`${error}`);

          return false;
        }
        return await fetch("/api/services/booking", {
          method: "POST",
          body: JSON.stringify(bookingDetails),
        })
          .then((response) => {
            console.log(
              "Response",
              response.json().then((result) => {
                console.log(result);
              })
            );
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return true;
            return response.json();
          })
          .catch((error) => {
            console.log(error);
            Swal.showValidationMessage(`Error ${error}`);
          });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="max-h-[calc(100vh-50px)] md:p-4 overflow-y-auto">
      <SubmitModal
        disclosure={submitDisclosure}
        status={status}
        onSubmit={handleSubmit}
        submitStatus={submitStatus}
        errorMessage={message.error}
        onSubmitMessage="Submit booking request to the officers?"
        successMessage="Your request for booking has been submitted to the officers."
      />
      <div className="md:mt-3 md:w-[700px] m-auto flex flex-col  gap-3 p-4 shadow-lg shadow-neutral-600 bg-slate-200 rounded ">
        <h1 className="text-center mt-4 text-[30px]">Amenities Booking</h1>
        <h1 className="text-[20px]">Amenity:</h1>
        <select
          value={bookingDetails.amenity}
          onChange={(e) => {
            setBookingDetails({ ...bookingDetails, amenity: e.target.value });
          }}
          className="page-input"
          name="amenity_type"
          id="amenity_type"
        >
          <option value="gym">Gym</option>
          <option value="plaza">Plaza</option>
        </select>
        <h1 className="text-[20px]">Name:</h1>
        <input
          type="text"
          className="page-input"
          value={bookingDetails.name}
          onChange={(e) => {
            setBookingDetails({
              ...bookingDetails,
              name: e.target.value,
            });
          }}
        />
        <h1 className="text-[20px]">Description:</h1>
        <textarea
          value={bookingDetails.description}
          onChange={(e) => {
            setBookingDetails({
              ...bookingDetails,
              description: e.target.value,
            });
          }}
          className="page-input"
          name="description"
          id=""
          cols={30}
          rows={10}
        ></textarea>
        <h1 className="text-[20px]">Date:</h1>
        <input
          value={bookingDetails.date}
          onChange={(e) => {
            setBookingDetails({ ...bookingDetails, date: e.target.value });
          }}
          type="date"
          name="date_time"
          id="date_time"
          className="page-input"
          min={new Date().getDate()}
          title="Date of usage"
        />
        <div className="flex justify-evenly">
          <div className="">
            <h1 className="text-[20px]">Time:</h1>
            <input
              value={bookingDetails.time}
              onChange={(e) => {
                setBookingDetails({ ...bookingDetails, time: e.target.value });
              }}
              type="time"
              name="date_time"
              id="date_time"
              className="page-input"
              title="Time of usage"
            />
          </div>
          <div className="">
            <h1 className="text-[20px]">Hours:</h1>
            <input
              onChange={(e) => {
                setBookingDetails({
                  ...bookingDetails,
                  hours: Number.parseInt(e.target.value),
                });
              }}
              type="number"
              className="page-input"
              title="Number of hours of amenity usage"
            />
          </div>
        </div>
        <button
          className="bg-yellow rounded w-[100px] p-2 shadow-lg ml-auto text-primary-blue"
          onClick={handleClick}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
