import React from "react";
import contact1 from "@/assets/img/icons/contact-1.svg";
import contact2 from "@/assets/img/icons/contact-2.svg";
import Image from "next/image";

function Contact() {
  return (
    <section className="aai-contact-form">
      <div className="container">
        <div className="row g-5 align-items-center justify-content-between">
          <div className="col-xl-6 col-lg pe-lg-5">
            <div>
              <h2 className="section-title mb-5">
                We love to collab with, Let’s do great together!
              </h2>
              <div className="">
                <div className="aai-contact-widget mb-4">
                  <div className="aai-contact-widget-inner d-flex">
                    <div>
                      <Image
                        src={contact1.src}
                        height={contact1.height}
                        width={contact1.width}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="aai-contact-widget-title">Our Address</h3>
                      <address className="aai-contact-address">
                        1012 Pebda Parkway, Mirpur 2 <br />
                        Dhaka, Bangladesh
                      </address>
                    </div>
                  </div>
                </div>
                <div className="aai-contact-widget mb-4">
                  <div className="aai-contact-widget-inner d-flex">
                    <div>
                      <Image
                        src={contact2.src}
                        height={contact2.height}
                        width={contact2.width}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="aai-contact-widget-title">Contact Info</h3>
                      <p className="aai-contact-support">
                        Open a chat or give us call at
                      </p>
                      <a href="tel:3108415500" className="aai-contact-address">
                        310 841 5500
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg">
            <div className="aai-contact-form">
              <form>
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-6">
                    <div className="aai-form-input">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="aai-form-input">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="aai-form-input">
                      <textarea
                        className="form-control shadow-none text-area"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="d-flex justify-content-start">
                      <button className="aai-btn btn-pill-solid">
                        Send A Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
