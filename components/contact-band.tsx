import { Mail, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

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
      className="section-spacing bg-white px-5 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div
        className="relative mx-auto max-w-7xl overflow-hidden border border-[#3f5a2b] bg-[#30471f] bg-cover bg-center shadow-[0_18px_50px_rgba(7,31,61,.12)]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(40,63,26,.98), rgba(40,63,26,.9)), url('/aspirant-guidance-banner.webp')",
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
              One-on-one coaching, personalised to your goals, preparation needs
              and learning pace. Book a consultation to discuss your defence
              career path and the next step.
            </p>
          </div>
          <Link
            href="/consultation"
            className="mt-5 inline-block font-bold text-white underline underline-offset-4 transition hover:text-[#b9d68f]"
          >
            Plan your consultation →
          </Link>
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
                  className="group flex min-h-36 min-w-0 flex-col justify-between bg-[#30471f]/95 p-6 transition hover:bg-[#3b5727] focus-visible:outline-white sm:min-h-44 sm:p-8 lg:p-9"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center border border-white/30 bg-white/5 transition group-hover:bg-white/10">
                      <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold tracking-[.17em] text-[#b9d68f] uppercase">
                      {contact.label}
                    </span>
                  </span>
                  <span className="mt-6 block min-w-0 break-words font-heading text-xl leading-tight tracking-[-.02em] text-white sm:text-2xl lg:text-[1.65rem]">
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
