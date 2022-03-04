import ContactForm from "../components/ContactForm";
import Head from "../components/Head";
import Layout from "../components/Layout";

export default function Contact(){

    return(
        <>
        <Head/>
        <Layout page='Contact'>
            <h2 className="text-2xl ">Contactez nous</h2>
            <br />
            <ContactForm/>
           
        </Layout>
        </>
    )
}