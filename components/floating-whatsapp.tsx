import { MessageCircle } from 'lucide-react';

const whatsappUrl =
  'https://wa.me/919820096800?text=Hello%20March%20Ahead%20Academy%2C%20I%20would%20like%20guidance%20about%20a%20career%20in%20the%20Indian%20Defence%20Forces.';

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 z-50 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#167c3a] px-4 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(7,31,61,.28)] transition hover:-translate-y-0.5 hover:bg-[#126b32] focus-visible:outline-white sm:right-6 sm:bottom-6"
      aria-label="Connect with March Ahead Academy on WhatsApp"
    >
      <span
        className="grid h-9 w-9 place-items-center rounded-full bg-white/15"
        aria-hidden="true"
      >
        <MessageCircle size={23} strokeWidth={2} />
      </span>
      <span className="hidden pr-1 sm:block">WhatsApp us</span>
    </a>
  );
}
