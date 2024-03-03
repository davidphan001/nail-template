import React from "react";

const LocationSection: React.FC = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 w-full">
          <div
            className="flex w-full"
            style={{ maxWidth: "900px", height: "450px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.9741785866267!2d-87.85674472350793!3d42.7042675132855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880542a73b24db83%3A0x6bc8d400a02036b1!2sIvy%20Nails!5e0!3m2!1sen!2sus!4v1708736083244!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-md shadow-md"
            ></iframe>
          </div>
          <div className="w-full lg:w-auto text-black flex justify-center lg:justify-end">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-xl font-semibold">Hours</h3>
              <p>Mon-Fri: 9:00am - 7:30pm</p>
              <p>Sat: 10:00am - 5:30pm</p>
              <p>Sun: 11:00am - 5:00pm</p>
              <h3 className="text-xl font-semibold mt-4">Call Us</h3>
              <p>(123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
