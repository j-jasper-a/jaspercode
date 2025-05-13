import { ContactForm } from "./contact-form/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="pt-20">
      <SectionHeading title="Contact" description="Get in touch" />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div></div>
        <ContactForm />
      </div>
    </section>
  );
}
