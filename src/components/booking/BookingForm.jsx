import React from "react";

const BookingForm = () => {
  return (
    <div className="mx-4 my-10 md:w-[500px] md:mx-auto">
      <div>
        <h2 className="text-2xl font-bold my-2">Book an Inspection</h2>
        <p className="mb-4 text-gray-500">
          Please fill out the form below to schedule an inspection for the
          property. We will contact you to confirm the details.
        </p>
      </div>
      <form action="" className="grid gap-4">
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
        <div className="relative w-full">
          <input
            className="border-2 peer focus:outline-none pt-5 rounded-md w-full p-2"
            type="date"
            id="date"
            name="date"
            required
          />
          <label
            htmlFor="date"
            className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
               peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white 
               peer-focus:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:bg-white peer-valid:px-1"
          >
            Select Date
          </label>
        </div>
        <div className="relative w-full">
          <input
            className="border-2 peer focus:outline-none pt-5 rounded-md w-full p-2
            placeholder:text-gray-950 text-xl"
            type="time"
            id="time"
            name="time"
            required
          />
          <label
            htmlFor="date"
            className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
               peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white 
               peer-focus:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:bg-white peer-valid:px-1"
          >
            Select Time
          </label>
        </div>
        <button
          type="submit"
          className="block text-lg font-bold my-5 border-2 w-[200px]
         bg-green-900 px-4 py-1 text-white rounded-md mx-auto"
        >
          Book Inspection
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
