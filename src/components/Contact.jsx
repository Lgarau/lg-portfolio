const Contact = () => {
  return (
    <div id="contact" className="flex min-h-screen min-w-full items-center justify-center bg-black py-20 px-4">
      <div className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold text-white">
          Let's Chat!
        </h2>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to drop me a message, and I'll get back to you as soon as I can!
        </p>

        {/* Bottone che apre il client di posta */}
        <a 
          href="mailto:lauragarau23@gmail.com?subject=Hello!&body=I would like to get in touch."
          className="bg-white text-black px-6 py-3 rounded-md text-lg font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          Send Email
        </a>

      </div>
    </div>
  );
};

export default Contact;
