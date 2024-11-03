const Contact = () => {
  return (
    <div className="w-full p-5 text-center">
      <p className="font-bold text-xl text-gray-700">
        Call us at{" "}
        <a href="tel:123-45-678" className="text-blue-500 hover:underline">
          123-45-678
        </a>{" "}
        or send an email to{" "}
        <a
          href="mailto:info@pizzas.no"
          className="text-blue-500 hover:underline"
        >
          info@pizzas.no
        </a>
      </p>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.264396083197!2d10.748570111667316!3d59.9111592738588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e8a1c253d39%3A0xe77bcdda7048ef3b!2sOslo%20Central%20Station!5e0!3m2!1sen!2sno!4v1730672274963!5m2!1sen!2sno"
          width="90%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          className="mt-5 absolute h-1/2  overflow-y-scroll "
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
