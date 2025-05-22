import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false);
        },
        () => {
          toast.error("Failed to send message, please try again.");
          setLoading(false);
        }
      );
    e.target.reset();
  };

  return (
    <section className="min-h-screen bg-black bg-[url('/public/Bg.avif')] bg-cover bg-center flex items-center justify-center p-4">
      <section className="bg-[#f5b723] bg-[url('/public/GoldBg.avif')] bg-contain bg-center bg-repeat text-black rounded-xl w-full max-w-6xl p-8 md:p-12 shadow-xl" >
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Text Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold">Let’s Talk</h2>
            <p className="text-lg">
              We would love to hear from you! Whether you're looking to become a distributor, share feedback, or have any questions, feel free to reach out.
            </p>
            <div>
              <h4 className="font-bold text-lg">Email</h4>
              <p>Kssrletsgrowpvtltd@gmail.com</p>
            </div>
          </div>

          {/* Right Form Section */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full mt-1 p-2 rounded-md bg-white  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here"
                className="w-full mt-1 p-2 rounded-md bg-white  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;