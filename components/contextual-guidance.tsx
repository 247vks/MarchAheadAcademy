import { ArrowRight, MessageCircle } from 'lucide-react';

export function ContextualGuidance({ topic }: { topic: string }) {
  const message = encodeURIComponent(
    `Hello March Ahead Academy, I would like guidance about ${topic}.`,
  );
  return (
    <aside
      className="border border-[#cbd8d2] border-l-4 border-l-[#397fa8] bg-[#f4f9fb] p-6 shadow-[0_8px_24px_rgba(7,31,61,.04)]"
      aria-label={`Guidance about ${topic}`}
    >
      <div className="flex items-start gap-4">
        <MessageCircle
          className="mt-1 shrink-0 text-[#397fa8]"
          size={22}
          aria-hidden="true"
        />
        <div>
          <p className="text-xs font-bold tracking-[.14em] text-[#397fa8] uppercase">
            Need a second pair of eyes?
          </p>
          <h2 className="mt-2 font-heading text-2xl">
            Discuss {topic} with March Ahead.
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#596975]">
            We can help you identify what to verify and plan the next sensible
            step. The current official notification always controls.
          </p>
          <a
            href={`https://wa.me/919820096800?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 bg-[#30471f] px-4 py-3 text-sm font-bold text-white"
          >
            Start a WhatsApp conversation <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </aside>
  );
}
