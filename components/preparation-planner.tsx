'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { ClipboardList, Printer } from 'lucide-react';
import {
  buildPreparationPlan,
  preparationAreas,
  type PlanInput,
} from '@/lib/preparation-plan';
import { trackTool } from '@/lib/engagement';

export function PreparationPlanner() {
  const [attempt, setAttempt] = useState<PlanInput['attempt']>('first');
  const [focus, setFocus] = useState<PlanInput['focus']>('psychology');
  const [days, setDays] = useState('28');
  const [hours, setHours] = useState('5');
  const [plan, setPlan] =
    useState<ReturnType<typeof buildPreparationPlan>>(null);
  const [error, setError] = useState('');
  const started = useRef(false);
  const result = useRef<HTMLDivElement>(null);
  function start() {
    if (!started.current) {
      started.current = true;
      trackTool('start', 'ssb_planner');
    }
  }
  function changed() {
    start();
    setPlan(null);
    setError('');
  }
  const field =
    'mt-2 block min-h-12 w-full rounded border border-[#81918b] bg-white p-3 text-[#0a1e33]';
  return (
    <section className="mt-8" aria-labelledby="planner-heading">
      <h2
        id="planner-heading"
        className="flex items-center gap-3 font-heading text-2xl"
      >
        <ClipboardList className="text-[#397fa8]" aria-hidden="true" />
        Build your practice plan
      </h2>
      <p className="mt-4 leading-7 text-[#536371]">
        No account or personal details required. Your choices are used in this
        page only and are not saved or sent with analytics. This is an Academy
        planning aid, not an official timetable or selection prediction.
      </p>
      <form
        className="planner-screen mt-6"
        onSubmit={(event) => {
          event.preventDefault();
          start();
          const next = buildPreparationPlan({
            attempt,
            focus,
            days: Number(days),
            hours: Number(hours),
          });
          if (!next) {
            setError(
              'Enter whole numbers: 1–365 days and 1–30 available hours per week.',
            );
            return;
          }
          setError('');
          setPlan(next);
          trackTool('complete', 'ssb_planner');
          requestAnimationFrame(() => result.current?.focus());
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="font-semibold">
            Attempt stage
            <select
              className={field}
              value={attempt}
              onChange={(event) => {
                changed();
                setAttempt(event.target.value as PlanInput['attempt']);
              }}
            >
              <option value="first">First attempt</option>
              <option value="repeat">Repeat candidate</option>
            </select>
          </label>
          <label className="font-semibold">
            Main preparation focus
            <select
              className={field}
              value={focus}
              onChange={(event) => {
                changed();
                setFocus(event.target.value as PlanInput['focus']);
              }}
            >
              {preparationAreas.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.label}
                </option>
              ))}
            </select>
          </label>
          <label className="font-semibold">
            Days until SSB or your planning target
            <input
              className={field}
              type="number"
              min="1"
              max="365"
              step="1"
              required
              value={days}
              onChange={(event) => {
                changed();
                setDays(event.target.value);
              }}
            />
          </label>
          <label className="font-semibold">
            Available practice hours per week
            <input
              className={field}
              type="number"
              min="1"
              max="30"
              step="1"
              required
              value={hours}
              onChange={(event) => {
                changed();
                setHours(event.target.value);
              }}
            />
          </label>
        </div>
        {error && (
          <p role="alert" className="mt-4 text-[#963425]">
            {error}
          </p>
        )}
        <button
          className="mt-6 min-h-12 bg-[#30471f] px-6 py-3 font-bold text-white hover:bg-[#3f5b2b]"
          type="submit"
        >
          Create my preparation plan
        </button>
      </form>
      {plan && (
        <div
          ref={result}
          tabIndex={-1}
          className="mt-8 border-t-2 border-[#397fa8] pt-6 focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-labelledby="plan-result"
        >
          <h2 id="plan-result" className="font-heading text-3xl">
            Your next {plan.blockDays} {plan.blockDays === 1 ? 'day' : 'days'}{' '}
            of preparation
          </h2>
          <p className="mt-4 leading-7">{plan.introduction}</p>
          <p className="mt-3 leading-7">
            Suggested practice budget: {plan.minutes} minutes across this block,
            based on your available weekly time. Split it into manageable
            sessions; these allocations are a starting point, not a
            prescription.
          </p>
          <ol className="mt-5 grid gap-5 sm:grid-cols-2">
            {plan.tasks.map((task) => (
              <li
                key={task.id}
                className="planner-task border border-[#d8e1dd] p-5"
              >
                <h3 className="font-heading text-xl">{task.label}</h3>
                <p className="mt-2 font-bold text-[#30471f]">
                  {task.minutes} minutes across the block
                </p>
                <p className="mt-3 leading-7 text-[#536371]">{task.task}</p>
                <Link
                  className="text-link mt-4 inline-flex min-h-11 items-center"
                  href={task.href}
                >
                  Read the supporting guide
                </Link>
              </li>
            ))}
          </ol>
          <h3 className="mt-6 font-heading text-2xl">Review, then adapt</h3>
          <p className="mt-3 leading-7">
            {plan.weeks > 1
              ? `Your target spans approximately ${plan.weeks} weeks. At the end of each week, choose one useful change and rebuild the next block around it.`
              : 'Keep this short window realistic: focus on familiarisation, logistics and clear expression rather than an intensive last-minute overhaul.'}{' '}
            Keep the final days manageable, follow your call-up instructions and
            protect rest. A short plan cannot guarantee readiness or
            recommendation.
          </p>
          <div className="planner-screen mt-5 flex flex-wrap gap-5">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 border border-[#397fa8] px-4 py-3 font-bold text-[#245b7a]"
              onClick={() => {
                trackTool('print', 'ssb_planner');
                window.print();
              }}
            >
              <Printer size={18} aria-hidden="true" />
              Print / save plan as PDF
            </button>
            <Link
              className="text-link inline-flex min-h-11 items-center"
              href="/ssb-coaching/"
            >
              Discuss individual preparation support
            </Link>
          </div>
        </div>
      )}
      <noscript>
        <p className="mt-5">
          The interactive planner requires JavaScript. Use the written routine
          below or our printable worksheets instead.
        </p>
      </noscript>
    </section>
  );
}
