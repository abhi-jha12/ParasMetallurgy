import React from 'react';

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <div className="-mt-4">
      <form action="">
        <div className="max-w-md mx-auto p-8 rounded-lg">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <label htmlFor="name" className="block text-gray-700 w-32">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="flex-grow border-2 border-black rounded-md p-2"
              />
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="companyName" className="block text-gray-700 w-32">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="flex-grow border-2 border-black rounded-md p-2"
              />
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 w-32">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="flex-grow border-2 border-black rounded-md p-2"
              />
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="email" className="block text-gray-700 w-32">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="flex-grow border-2 border-black rounded-md p-2"
              />
            </div>
            <div className="flex items-start gap-4">
              <label htmlFor="queries" className="block text-gray-700 w-32">Queries</label>
              <textarea
                id="queries"
                name="queries"
                className="flex-grow border-2 border-black rounded-md p-2"
                rows={4}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
