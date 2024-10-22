import ContactAddress from "../components/Contact/ContactAddress";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
 const Contact = () => {
  return (
    <>
      <TopBanner
        img={"contact.jpg"}
        heading={"Contact Us"}
        pageName={"Contact"}
        subHeading={
          "Contact us to see if our firm can support you Grow your online company."
        }
      />
      <div className="my-20 flex flex-col lg:flex-row justify-center items-center gap-10">
        <ContactAddress />
        <ContactForm />
      </div>
      <Footer />
    </>
  ); 
}
export default Contact;