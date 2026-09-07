import {
  BookOpen,
  CalendarCheck,
  ClipboardCheck,
  Compass,
  MessageCircle,
  Users,
  ShieldCheck,
  Lightbulb,
} from 'lucide-react';

export function TopicIcon({
  topic,
  compact = false,
}: {
  topic: string;
  compact?: boolean;
}) {
  const Icon = /discuss|group|team/i.test(topic)
    ? Users
    : /interview|communicat|reflect|description/i.test(topic)
      ? MessageCircle
      : /notice|notification|document|eligib|requirement/i.test(topic)
        ? ClipboardCheck
        : /plan|routine|week|schedule/i.test(topic)
          ? CalendarCheck
          : /career|route|path|choice/i.test(topic)
            ? Compass
            : /medical|fitness|service|responsib/i.test(topic)
              ? ShieldCheck
              : /learn|study|exam|practice|prepar/i.test(topic)
                ? BookOpen
                : Lightbulb;
  return (
    <span
      className={
        compact
          ? 'inline-flex shrink-0 items-center text-[#397fa8]'
          : 'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#d8e1dd] bg-white text-[#397fa8]'
      }
    >
      <Icon size={compact ? 17 : 23} strokeWidth={1.7} aria-hidden="true" />
    </span>
  );
}
