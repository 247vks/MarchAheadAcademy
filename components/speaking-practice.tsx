'use client';
import { useEffect, useRef, useState } from 'react';
import { Clock, Printer } from 'lucide-react';

const prompts = [
  'Should colleges include a weekly community-service activity?',
  'How can a team make decisions when members disagree?',
  'What makes information trustworthy enough to share?',
  'Should students prioritise depth in one interest or try several?',
  'How can a community reduce everyday waste?',
  'What can people learn from taking responsibility for a mistake?',
];
export function SpeakingPractice() {
  const [prompt, setPrompt] = useState(prompts[0]);
  const [phase, setPhase] = useState('Preparation');
  const [duration, setDuration] = useState(120);
  const [remaining, setRemaining] = useState(120);
  const [running, setRunning] = useState(false);
  const [message, setMessage] = useState('Timer ready. Use it only if helpful.');
  const [notes, setNotes] = useState<Record<string, string>>({});
  const deadline = useRef(0);
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      const next = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000));
      setRemaining(next);
      if (next === 0) { setRunning(false); setMessage('Time complete. Reflect on the practice before starting again.'); }
    }, 200);
    return () => window.clearInterval(timer);
  }, [running]);
  function reset(seconds = duration) { setRunning(false); setRemaining(seconds); setMessage('Timer reset.'); }
  const field = 'block mt-2 w-full border border-[#81918b] bg-white p-3 rounded';
  return <section className="mt-8" aria-labelledby="practice-tool">
    <h2 id="practice-tool" className="font-heading text-2xl">Choose a prompt and practise</h2>
    <p className="mt-3 leading-7">Original Academy prompts, not official SSB questions. Timings are your practice choices, not board instructions. No microphone, recording, account or automated score. Notes remain in this page only and disappear on reload; print them if you want to keep them.</p>
    <div className="speaking-screen mt-6">
      <label htmlFor="speaking-prompt" className="font-semibold">Practice prompt</label>
      <select id="speaking-prompt" className={field} value={prompt} onChange={(e) => { setPrompt(e.target.value); reset(); }}>
        {prompts.map((item) => <option key={item}>{item}</option>)}
      </select>
      <p className="mt-4 border-l-2 border-[#397fa8] pl-4 text-lg font-semibold leading-7">{prompt}</p>
      <p className="mt-3 text-sm leading-6">Prepare a view, reasons and an example; consider another perspective. Solo practice develops structure. For listening and interaction, practise with willing peers—it is not a substitute for live group experience.</p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label htmlFor="speaking-phase">Timer purpose<select id="speaking-phase" className={field} value={phase} onChange={(e) => { setPhase(e.target.value); reset(); }}><option>Preparation</option><option>Speaking</option></select></label>
        <label htmlFor="speaking-duration">Optional timer length<select id="speaking-duration" className={field} value={duration} onChange={(e) => { const value = Number(e.target.value); setDuration(value); reset(value); }}>{[60,120,180].map((seconds) => <option key={seconds} value={seconds}>{seconds / 60} minute{seconds === 60 ? '' : 's'}</option>)}</select></label>
      </div>
      <p className="mt-5 flex items-center gap-3 text-3xl tabular-nums" aria-label={`${phase} time remaining`}><Clock aria-hidden="true" />{Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2,'0')}</p>
      <output className="mt-3 block" aria-live="polite">{message}</output>
      <div className="mt-4 flex flex-wrap gap-3">
        <button className="min-h-11 bg-[#30471f] px-5 py-3 font-bold text-white disabled:opacity-50" disabled={running || remaining === 0} onClick={() => { deadline.current = Date.now() + remaining * 1000; setRunning(true); setMessage(`${phase} timer running.`); }}>Start / resume</button>
        <button className="min-h-11 border px-5 py-3 disabled:opacity-50" disabled={!running} onClick={() => { setRemaining(Math.max(0, Math.ceil((deadline.current-Date.now())/1000))); setRunning(false); setMessage('Timer paused.'); }}>Pause</button>
        <button className="min-h-11 border px-5 py-3" onClick={() => reset()}>Reset timer</button>
      </div>
      <label htmlFor="speaking-notes" className="mt-6 block font-semibold">Your reflection on this prompt</label>
      <p id="reflection-hint" className="mt-2 leading-7">Was my point clear? What supported it? Did I address another perspective? If practising with peers, what did I hear and respond to? What will I change next time?</p>
      <textarea id="speaking-notes" aria-describedby="reflection-hint" rows={6} maxLength={6000} className={field} value={notes[prompt] ?? ''} onChange={(e) => setNotes({ ...notes, [prompt]: e.target.value })} />
      <p className="mt-2 text-sm">Each prompt keeps its own notes while this page stays open. Avoid including private details about other people.</p>
      <button className="mt-5 inline-flex min-h-11 items-center gap-2 bg-[#30471f] px-5 py-3 font-bold text-white" onClick={() => window.print()}><Printer size={18} aria-hidden="true" />Print / save practice notes</button>
    </div>
    <div className="speaking-print"><h2>Speaking practice notes</h2>{prompts.filter((item) => notes[item]?.trim() || item === prompt).map((item) => <section key={item} className="mt-6"><h3 className="font-bold">{item}</h3><p className="mt-3 whitespace-pre-wrap break-words">{notes[item] || 'No notes entered.'}</p></section>)}</div>
    <style>{`.speaking-print{display:none}@media print{.speaking-screen{display:none!important}.speaking-print{display:block}.speaking-content{max-width:none;padding:0}.speaking-print section{break-inside:avoid}@page{size:A4;margin:16mm}}`}</style>
  </section>;
}
