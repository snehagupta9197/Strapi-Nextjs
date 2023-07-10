"use client";
// export default function Contact() {
//   return (
//     <h1 className="flex justify-center items-center content-center py-4">
//       Contact us page coming soon
//     </h1>
//   );
// }
import Nav from "../components/nav";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <div className="flex justify-center items-center bg-white mx-auto w-2/4 rounded-lg my-16 p-16 text-gray-700">
          <br />

          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
