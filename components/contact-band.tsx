import { Mail, MessageCircle, Phone } from 'lucide-react';

const contacts = [
  {
    label: 'Call',
    value: '+91 98200 96800',
    href: 'tel:+919820096800',
    icon: Phone,
  },
  {
    label: 'Email',
    value: 'hello@marchaheadacademy.com',
    href: 'mailto:hello@marchaheadacademy.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: 'Start a conversation',
    href: 'https://wa.me/919820096800?text=Hello%20March%20Ahead%20Academy%2C%20I%20would%20like%20guidance%20about%20a%20career%20in%20the%20Indian%20Defence%20Forces.',
    icon: MessageCircle,
  },
] as const;

export function ContactBand() {
  return (
    <section
      className="bg-white px-5 py-10 sm:py-12 lg:px-8 lg:py-14"
      aria-labelledby="contact-heading"
    >
      <div
        className="relative mx-auto max-w-7xl overflow-hidden bg-[#30471f] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(40,63,26,.98), rgba(40,63,26,.9)), url('/aspirant-guidance-banner.png')",
        }}
      >
        <div className="px-6 py-8 text-white sm:px-7 sm:py-9 lg:px-12 lg:py-11">
          <div>
            <p className="text-xs font-bold tracking-[.17em] text-[#d9e8f2] uppercase">
              Connect with March Ahead Academy
            </p>
            <h2
              id="contact-heading"
              className="mt-3 font-heading text-3xl leading-tight sm:text-4xl"
            >
              Questions about the right defence career path?
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-white/80 sm:text-base">
              Contact us for guidance about career routes, preparation and the
              next sensible step.
            </p>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden border border-white/25 bg-white/25 sm:grid-cols-3">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const external = contact.label === 'WhatsApp';
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="group flex min-h-36 flex-col justify-between bg-[#30471f]/95 p-5 transition hover:bg-[#3b5727] sm:p-6"
                >
                  <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  <span className="mt-4 block text-[10px] font-bold tracking-[.15em] text-[#b9d68f] uppercase">
                    {contact.label}
                  </span>
                  <span className="mt-1 block break-words text-sm font-bold leading-5">
                    {contact.value}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
