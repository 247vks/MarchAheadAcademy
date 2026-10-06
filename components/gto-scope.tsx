import { Info } from 'lucide-react';

export function GtoScope({ path }: { path: string }) {
  if (
    !/^\/ssb-gto(?:\/|$)|^\/selection\/ssb\/group-(?:testing|discussion)\/?$/.test(
      path,
    )
  )
    return null;
  return (
    <aside
      aria-label="GTO guidance scope"
      className="my-6 border-y border-[#d8e1dd] py-5"
    >
      <h2 className="flex items-center gap-3 font-heading text-xl">
        <Info
          className="shrink-0 text-[#397fa8]"
          size={22}
          aria-hidden="true"
        />
        Guidance, not outdoor GTO training
      </h2>
      <p className="mt-3 leading-7 text-[#536371]">
        March Ahead Academy does not provide outdoor GTO training. These guides
        explain the tasks and support preparation for discussion, planning and
        communication. One-to-one guidance does not replace live group practice
        or supervised outdoor training.
      </p>
    </aside>
  );
}
