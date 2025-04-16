import React, { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import emailjs from "@emailjs/browser";
import Contactimg from "../assets/Image/Contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Contact: "",
    Message: "",
  });

  const [contactError, setContactError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.Name ||
      !formData.Email ||
      !formData.Contact || !formData.Message
    ) {
      alert("Please fill out all fields.");
      return;
    } 

    else if(formData.Contact.length===10)
    {
      const serviceId = "service_h3c0khq";
      const templateid = "template_v4mprnl";
      const publicKey = "N3hmabd-5wbOCl6VH";

      const templateParams = {
        fromName: formData.Name,
        fromEmail: formData.Email,
        fromContact: formData.Contact,
        fromMessage: formData.Message,
      };

      emailjs
        .send(serviceId, templateid, templateParams, publicKey)
        .then((response) => {
          alert("Email sent successfully!");
          console.log("Email response:", response);
          setFormData({ Name: "", Email: "", Contact: "", Message: "" });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email. Please try again later.");
        });
    }
    else
    {
      alert("Contact should be 10 digit")
    }
    
      
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "Name" || name === "Message") {
      setFormData({ ...formData, [name]: value });
    } else if (name === "Contact") {
      setFormData({ ...formData, [name]: value });

      if (/^\d*$/.test(value)) {
        setContactError("");
      } else {
        setContactError("Please enter valid contact number");
      }
    } else if (name === "Email") {
      setFormData({ ...formData, [name]: value });

      if (
        value === "" ||
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ) {
        setEmailError("");
      } else {
        setEmailError("Please enter valid email address");
      }
    }
  };

  return (
    <>
      <div className="font-roboto pt-30 ">
        <div>
          <h1 className="text-4xl text-center font-bold md:text-6xl text-[#d1fa02]">
            Contact Us !
            <p className="text-2xl font-semibold text-red-600 md:text-3xl pt-3">
              - Get in touch -
            </p>
          </h1>
        </div>

        <div className=" w-full flex flex-wrap justify-center items-center md:justify-evenly gap-y-5 pt-5">
          <div className="">
            <img
              src={Contactimg}
              alt=""
              className="size-90 md:size-130 hover:-translate-y-5 duration-400 drop-shadow-[2px_0_20px_rgba(209,250,2,1)]"
            />
          </div>

          <div>
            <form
              onSubmit={handleOnSubmit}
              className="gap-y-5 flex flex-col justify-center items-center"
            >
              <input
                type="text"
                className=" h-15 w-80 md:w-120  rounded-xl pl-5 text-white bg-gray-800  border border-gray-600 focus:border-2 focus:border-[#d1fa02] focus:outline-none"
                placeholder="Enter your name"
                value={formData.Name}
                onChange={handleOnChange}
                name="Name"
                required
              />

              <div>
                <input
                  type="text"
                  className=" h-15 w-80 md:w-120  rounded-xl pl-5 text-white bg-gray-800  border border-gray-600 focus:border-2 focus:border-[#d1fa02] focus:outline-none"
                  placeholder="Enter your phone  "
                  value={formData.Contact}
                  onChange={handleOnChange}
                  name="Contact"
                  required
                />
                <p className="text-red-800 text-[18px] font-medium">
                  {contactError}
                </p>
              </div>

              <div>
                <input
                  type="email"
                  className=" h-15 w-80 md:w-120  rounded-xl pl-5 text-white bg-gray-800  border border-gray-600 focus:border-2 focus:border-[#d1fa02] focus:outline-none"
                  placeholder="Enter your email"
                  value={formData.Email}
                  onChange={handleOnChange}
                  name="Email"
                  required
                />
                <p className="text-red-800 text-[18px] font-medium">
                  {emailError}
                </p>
              </div>

              <textarea
                className=" h-30 w-80 md:h-20 md:w-120  rounded-xl pl-5  text-white bg-gray-800 pt-2 border-gray-600 focus:border-2 focus:border-[#d1fa02] focus:outline-none"
                placeholder="Enter your message"
                value={formData.Message}
                onChange={handleOnChange}
                name="Message"
              ></textarea>

              <button
                type="submit"
                className="h-12 w-40 border-2 border-[#d1fa02] hover:bg-[#d1fa02] text-xl text-[#d1fa02] hover:text-black font-semibold rounded-md hover:scale-110 duration-300 hover:shadow-[0_0_20px_rgba(209,250,2,1)] mb-10 mt-2 md:mb-0 md:mt-0 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
