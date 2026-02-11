import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BookingForm from "./BookingForm";

const BookInpection = () => {
  const navigate = useNavigate();
  return (
    <section>
      <header className="flex gap-8 my-3 mx-3">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="w-6 h-6 text-gray-700 cursor-pointer"
        />

        <h2 className="text-xl font-bold">Book Inspection</h2>
      </header>

      <BookingForm />
    </section>
  );
};

export default BookInpection;
