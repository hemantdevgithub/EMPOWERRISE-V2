import { MdOutlinePhoneCallback, MdEmail } from "react-icons/md";
const ContactAddress = () => {
  return (
    <div className="space-y-5 ">
      <div className="h-[300px] flex flex-col rounded-lg border justify-between w-full lg:w-[400px] shadow-lg p-8">
        <p>
          <MdOutlinePhoneCallback size={60} />
        </p>
        <h2 className="text-2xl font-poppins font-bold">Phone</h2>
        <p className="text-accent font-semibold text-lg">
          Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm
        </p>
        <p className="text-xl font-bold flex flex-col ">
          <span>(IND) +91 7618420994</span>
          <span>(US) +1 9088793691</span>
        </p>
      </div>
      <div className="h-[300px] flex flex-col rounded-lg border justify-between lg:w-[400px] w-full shadow-lg p-8">
        <p>
          <MdEmail size={60} />
        </p>
        <h2 className="text-2xl font-poppins font-bold">Email</h2>
        <p className="text-accent font-semibold text-lg">
          Our support team will get back to in 48-h during standard business
          hours.
        </p>
        <p className="text-xl font-bold ">Sai.kotla@empowerrise.org</p>
        <p className="text-xl font-bold ">Hemant.yadav@empowerrise.org</p>
      </div>
    </div>
  );
};

export default ContactAddress;
