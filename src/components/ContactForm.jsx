import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulasi pengiriman form
    setFormStatus({
      submitted: true,
      success: true,
      message:
        "Successfull, Thanks for your message!",
    });

    // Reset form setelah berhasil
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormStatus({ submitted: false, success: false, message: "" });
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formStatus.submitted && (
        <div
          className={`p-4 rounded-md ${
            formStatus.success
              ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
              : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
          }`}
        >
          {formStatus.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary-light dark:focus:border-primary-dark focus:ring focus:ring-primary-light/20 dark:focus:ring-primary-dark/20 bg-white dark:bg-gray-800"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary-light dark:focus:border-primary-dark focus:ring focus:ring-primary-light/20 dark:focus:ring-primary-dark/20 bg-white dark:bg-gray-800"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary-light dark:focus:border-primary-dark focus:ring focus:ring-primary-light/20 dark:focus:ring-primary-dark/20 bg-white dark:bg-gray-800"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors"
        >
          Send
        </button>
      </div>
    </form>
  );
}
