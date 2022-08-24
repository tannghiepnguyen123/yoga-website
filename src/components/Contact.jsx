import React, { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(null);
  const [emailMessage, setEmailMessage] = useState("");
  const [emailTextColor, setEmailTextColor] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmailMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [emailMessage]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0c0h0bb",
        "template_gne1a0l",
        form.current,
        "zyzh5ntWv2Ic1DFSU"
      )
      .then(
        (result) => {
          setEmailMessage("Your email was sent");
          setEmailTextColor("green");
        },
        (error) => {
          setEmailMessage("Your email was not sent");
          setEmailTextColor("red");
        }
      );
    e.target.reset();
  };

  return (
    <section className="section-sm lg:pt-[250px]">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]"
          data-aos-offset="400"
          data-aos="zoom"
        >
          <div
            className="flex-1 flex flex-col justify-center pl-8"
            data-aos-delay="300"
            data-aos="fade-down"
            data-aos-offset="500"
          >
            <h2 className="h2 mb-3 lg:mb-7">
              Get in Touch With us for yoga Course.
            </h2>
            <p className="mb-7 lg:mb-0">
              Get in touch with use for any kind of help. We are here to give
              you the best and also here to help you find your yoga course
            </p>
          </div>
          <form
            onSubmit={(e) => sendEmail(e)}
            ref={form}
            className="flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20"
            data-aos-delay="300"
            data-aos="fade-up"
            data-aos-offset="300"
          >
            <input
              className="form-control"
              placeholder="First name"
              type="text"
              name="user_firstname"
              required
            />
            <input
              className="form-control"
              placeholder="Last name"
              type="text"
              name="user_lastname"
              required
            />
            <input
              className="form-control"
              placeholder="Email address"
              type="email"
              name="user_email"
              required
            />
            <textarea
              className="form-control py-5 h-[165px] resize-none"
              placeholder="Message"
              name="user_message"
            ></textarea>
            <button type="submit" className="btn btn-lg btn-orange">
              Send message
            </button>
            <p style={{ color: emailTextColor }}>{emailMessage}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
