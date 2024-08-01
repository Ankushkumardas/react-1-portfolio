import React from "react";

function Contact() {
  return (
    <div className="p-2 mx-auto mt-3 text-center bg-white shadow-md rounded-xl md:p-5 md:text-left hover:shadow-xl w-[50%]">
      <div>
        <h1 className="text-xl font-bold">Contact Me</h1>
        <p className="mt-2">
          Interested in Working together? Contact me at{" "}
          <a href="anksuh114@gmail.com" className="text-blue-600">
            test@gmail.com
          </a>
        </p>
        <form action="" className="mt-3 ">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 mb-2 text-md rounded-2xl focus:outline-none bg-slate-100"/>
            <input type="email" placeholder="Email" className="w-full px-4 py-2 mb-2 text-md rounded-2xl focus:outline-none bg-slate-100"/>
            <textarea name="" id="" placeholder="Your Thoughts" className="w-full px-4 py-2 text-md rounded-2xl focus:outline-none bg-slate-100 " rows='3'></textarea>
            <button className="w-full px-3 py-2 mt-4 font-bold text-white bg-blue-400 shadow-xl rounded-3xl" >Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
