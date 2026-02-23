import { ChevronRight } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const BookingForm = ({ property }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    type: "", // "success" or "error"
  });

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      setModal({
        show: true,
        type: "success", // or "error"
      });
    }, 2000); // 2 seconds loading
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true); // start spinner

    emailjs
      .sendForm(
        "service_26qmlbm",
        "template_uf127bg",
        form.current,
        "ItwcPnzp33zLoylGV",
      )
      .then(
        () => {
          setIsLoading(false);
          setModal({ show: true, type: "success" });
          form.current.reset();
        },
        () => {
          setIsLoading(false);
          setModal({ show: true, type: "error" });
        },
      );
  };

  return (
    <div className="mx-4 my-10 md:w-[500px] md:mx-auto">
      <div>
        <h2 className="text-2xl font-bold my-2">Book an Inspection</h2>
        <p className="mb-4 text-gray-500">
          Please fill out the form below to schedule an inspection for the
          property. We will contact you to confirm the details.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="grid gap-4">
        <div>
          {/* <label htmlFor="name">Full Name</label> */}
          <input
            className="border-2 rounded-md w-full p-2
            placeholder:text-gray-950 text-lg"
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          {/* <label htmlFor="number">Phone Number</label> */}
          <input
            className="border-2 rounded-md w-full p-2
            placeholder:text-gray-950 text-lg"
            type="tel"
            id="number"
            name="number"
            placeholder="Phone Number"
            required
          />
        </div>
        <div>
          {/* <label htmlFor="email">Email</label> */}
          <input
            className="border-2 rounded-md w-full p-2
             placeholder:text-gray-950 text-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="border-2 rounded-md w-full p-3 text-lg appearance-none min-h-[44px]"
          />
        </div>
        <label
          htmlFor="date"
          className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white 
peer-focus:px-1"
        >
          Select Date
        </label>

        <div>
          <input
            type="time"
            id="time"
            name="time"
            required
            className="border-2 rounded-md w-full p-3 text-lg appearance-none min-h-[44px]"
          />
        </div>

        <label
          htmlFor="time"
          className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white 
peer-focus:px-1"
        >
          Select Time
        </label>

        <input
          type="hidden"
          name="house"
          value={`${property?.title} - 
        ${property?.location} - ₦${property?.price.toLocaleString()} per year`}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`text-lg font-bold my-5 border-2 w-[300px]
    px-4 py-2 text-white rounded-md mx-auto flex items-center justify-center gap-2
    ${
      isLoading
        ? "bg-green-700 cursor-not-allowed"
        : "bg-green-900 hover:bg-green-800"
    }
  `}
        >
          {isLoading ? (
            <>
              <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
              Processing...
            </>
          ) : (
            <>
              Confirm Appointment
              <ChevronRight className="w-5 h-5 text-white" />
            </>
          )}
        </button>
        <p className="font-bold mb-4">
          Booking for: {property?.title} in {property?.location} with a price
          range of ₦{property?.price.toLocaleString()} per year.
        </p>
      </form>
      {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-80 text-center shadow-lg">
            {modal.type === "success" ? (
              <>
                <h3 className="text-green-700 font-bold text-lg">
                  Booking Successful 🎉
                </h3>
                <p className="mt-2 text-gray-600">
                  Your inspection request has been sent. Please check your email
                  for confirmation and further details.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-red-600 font-bold text-lg">
                  Booking Failed ❌
                </h3>
                <p className="mt-2 text-gray-600">
                  Something went wrong. Please try again.
                </p>
              </>
            )}

            <button
              onClick={() => setModal({ show: false, type: "" })}
              className="mt-4 px-4 py-2 bg-green-900 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
