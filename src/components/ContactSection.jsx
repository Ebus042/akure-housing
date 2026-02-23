import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      return "Please fill all required fields.";
    }

    if (!formData.email.includes("@")) {
      return "Please enter a valid email address.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await emailjs.send(
        "service_26qmlbm",
        "template_dpu0cnd",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "ItwcPnzp33zLoylGV",
      );

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Try again.");
    }

    setLoading(false);
  };
  return (
    <section className="my-10 px-6 md:px-20">
      <div>
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="w-6 h-6 text-gray-700 cursor-pointer"
        />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Contact Us
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Akure Housing Agency</h3>
          <p>Alagbaka, Akure, Ondo State</p>
          <p>📞 +234 8100655023</p>
          <p>📧 info@akurehousing.com</p>
          <p>🕒 Mon – Sat (9am – 6pm)</p>

          <a
            href="https://wa.me/2348100655023"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          />

          <textarea
            name="message"
            placeholder="Your Message *"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          ></textarea>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-white transition
              ${loading ? "bg-gray-400" : "bg-green-900 hover:bg-green-800"}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
