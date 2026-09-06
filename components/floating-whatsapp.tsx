import { MessageCircleQuestionMark } from 'lucide-react';

const whatsappUrl =
  'https://wa.me/919820096800?text=Hello%20March%20Ahead%20Academy%2C%20I%20would%20like%20guidance%20about%20a%20career%20in%20the%20Indian%20Defence%20Forces.';

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 z-50 grid h-14 w-14 place-items-center rounded-full border border-white/70 bg-[#167c3a] text-white shadow-[0_0_0_6px_rgba(22,124,58,.10),0_8px_24px_rgba(7,31,61,.22)] transition hover:-translate-y-0.5 hover:bg-[#126b32] hover:shadow-[0_0_0_8px_rgba(22,124,58,.14),0_10px_28px_rgba(7,31,61,.26)] focus-visible:outline-white sm:right-6 sm:bottom-6"
      aria-label="Connect with March Ahead Academy on WhatsApp"
      title="Connect on WhatsApp"
    >
      <MessageCircleQuestionMark
        size={27}
        strokeWidth={1.8}
        aria-hidden="true"
      />
    </a>
  );
}
