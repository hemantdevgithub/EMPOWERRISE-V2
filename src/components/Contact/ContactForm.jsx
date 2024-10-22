import { useState } from "react";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const apiUrl = import.meta.env.VITE_GOOGLE_SHEET_API;
  const onSubmit = async (data) => {
    setIsLoading(true);
    const formdata = new FormData();
    formdata.append("firstname", data.firstname);
    formdata.append("lastname", data.lastname);
    formdata.append("email", data.email);
    formdata.append("subject", data.subject);
    formdata.append("message", data.message);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formdata,
      });
      if (response.redirected) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (e) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <div className="h-full space-y-10">
      <ToastContainer />
      <div>
        <p className="text-lg font-bold font-poppins uppercase text-primary">
          Get In Touch
        </p>
        <h2 className="text-4xl font-bold">
          <span className="text-primary font-alegreya">Connect</span> With Us
        </h2>
        <div className="h-2 w-[80px] group-hover:w-full duration-300 mt-3 bg-gradient-to-l to-[#291fbc] from-[#488fed]" />
      </div>
      <p className="text-lg font-poppins">
        Please contact us using the details below. For more information about
        our services, please visit the <br /> corresponding page on our web.
      </p>
      {/* Form */}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-y-2 lg:gap-x-2 ">
          <div className="col-span-12 md:col-span-6">
            <InputField
              text={"First Name"}
              name={"firstname"}
              register={register}
            />
            {errors.firstname && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          <div className="col-span-12 md:col-span-6">
            <InputField
              text={"Last Name"}
              name={"lastname"}
              register={register}
            />
            {errors.lastname && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
        </div>
        <InputField text={"Email Address"} name={"email"} register={register} />
        {errors.email && (
          <span className="text-red-400">This field is required</span>
        )}
        <InputField
          text={"How can I help You?"}
          name={"subject"}
          register={register}
        />
        {errors.subject && (
          <span className="text-red-400">This field is required</span>
        )}
        <textarea
          className="w-full
                h-[220px]
                bg-white
                px-8
                py-3
                rounded-lg
                focus:outline-none
                text-[18px]
                border-2"
          placeholder="Tell me more about your requirements?"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="text-red-400">This field is required</span>
        )}

        <button
          type="submit"
          className={`animate-bounce hover:animate-none mt-2 float-right rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
            {isLoading ? "Submitting..." : "Contact"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
