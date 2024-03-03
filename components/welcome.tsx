const WelcomeSection = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fw800/background/20231012/pngtree-nail-care-essentials-manicure-accessories-on-a-stylish-grey-textured-table-image_13615682.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-white py-12 bg-fixed bg-opacity-75 backdrop-filter backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Welcome to Elegant Nails
          </h2>
          <p className="text-lg text-white mb-6">
            At <strong>Elegant Nails</strong>, we believe in the art of beauty
            and wellness. Located in the heart of the city, our salon offers a
            serene and welcoming environment where you can escape the hustle and
            bustle of everyday life. Our team of experienced professionals is
            dedicated to providing you with the highest quality of nail care,
            spa treatments, and beauty services.
          </p>
          <p className="text-lg text-white mb-6">
            We specialize in a wide range of services from luxurious manicures
            and pedicures to cutting-edge nail art and design. Our commitment to
            cleanliness, health, and customer satisfaction ensures a safe and
            elegant experience for all our guests. Using only the finest
            products and state-of-the-art technology, we aim to rejuvenate your
            senses, enhance your style, and make you feel refreshed.
          </p>
          <p className="text-lg text-white mb-6">
            Whether you&apos;re looking for a quick polish change, a relaxing
            spa day, or a complete beauty makeover, Elegant Nails is your
            premier destination. Join us for an unforgettable experience where
            beauty meets relaxation and style meets wellness.
          </p>
          <div className="text-center">
            <a
              href="/book"
              className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-2 px-4 rounded hover:from-pink-600 hover:to-orange-600 transition-colors duration-300"
            >
              Book Your Visit Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
