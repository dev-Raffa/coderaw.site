import { ContactForm } from "../../forms/contact/contact-form.component";
export default function Cta() {
  return (
    <section className="section" id="contact">
      <div className="section-texts">
        <h2 className="section-title">
          Pronto para transformar o seu negócio?
        </h2>
        <p className="section-subtitle">
          Entre em contato conosco hoje mesmo e descubra como podemos ajudar a
          impulsionar sua empresa com soluções tecnológicas inovadoras.
        </p>
      </div>
      <div className="section-content relative justify-center">
        <section className="bg-coderaw-bg min-w-[300px] w-[100%] text-coderaw-text">
          <ContactForm />
        </section>
      </div>
    </section>
  );
}
