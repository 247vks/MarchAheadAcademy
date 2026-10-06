'use client';

import { useState } from 'react';
import { NotebookPen, Printer, Trash2 } from 'lucide-react';

export function ReflectionWorkspace({ prompts }: { prompts: string[] }) {
  const [notes, setNotes] = useState<string[]>(() => prompts.map(() => ''));
  const [confirmClear, setConfirmClear] = useState(false);
  return (
    <section
      id="online-workspace"
      className="reflection-workspace mt-9 scroll-mt-28 border-t-2 border-[#397fa8] pt-7"
      aria-labelledby="workspace-heading"
    >
      <h2
        id="workspace-heading"
        className="flex items-start gap-3 font-heading text-2xl"
      >
        <NotebookPen className="shrink-0 text-[#397fa8]" aria-hidden="true" />
        Use online: your Self Description reflection workspace
      </h2>
      <p className="mt-4 leading-7">
        Start with real experiences. These prompts help you reflect; they are
        not an official test, model answer or personality score.
      </p>
      <p className="worksheet-screen-only mt-3 text-sm leading-7 text-[#536371]">
        Your notes stay in this open page: this tool does not upload or save
        them. Refreshing or closing the page clears them. Print or choose “Save
        as PDF” in your print dialog before leaving. Avoid recording sensitive
        details about yourself or other people.
      </p>
      <div className="mt-6 space-y-6">
        {prompts.map((prompt, index) => (
          <div key={prompt}>
            <label
              htmlFor={`reflection-${index}`}
              className="block font-semibold leading-7"
            >
              {index + 1}. {prompt}
            </label>
            <textarea
              id={`reflection-${index}`}
              value={notes[index]}
              onChange={(event) => {
                const value = event.target.value;
                setNotes((current) =>
                  current.map((note, i) => (i === index ? value : note)),
                );
              }}
              rows={5}
              maxLength={6000}
              autoComplete="off"
              spellCheck={false}
              className="worksheet-screen-only mt-3 w-full resize-y rounded border border-[#81918b] bg-white p-3 text-[#0a1e33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#397fa8]"
            />
            <p className="reflection-print-note mt-3 whitespace-pre-wrap break-words">
              {notes[index] || 'No notes entered.'}
            </p>
          </div>
        ))}
      </div>
      <div className="worksheet-screen-only mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex min-h-11 items-center gap-2 bg-[#30471f] px-5 py-3 font-bold text-white hover:bg-[#3f5b2b]"
        >
          <Printer size={18} aria-hidden="true" />
          Print / save your notes as PDF
        </button>
        <button
          type="button"
          onClick={() => setConfirmClear(true)}
          className="inline-flex min-h-11 items-center gap-2 border border-[#81918b] px-5 py-3 font-semibold"
        >
          <Trash2 size={18} aria-hidden="true" />
          Clear notes
        </button>
        {confirmClear && (
          <fieldset className="w-full border border-[#81918b] p-4">
            <legend>Confirm clearing notes</legend>
            <p>Clear all notes? This cannot be undone.</p>
            <button
              type="button"
              className="mr-5 mt-3 min-h-11 font-bold underline"
              onClick={() => {
                setNotes(prompts.map(() => ''));
                setConfirmClear(false);
              }}
            >
              Yes, clear notes
            </button>
            <button
              type="button"
              className="min-h-11 underline"
              onClick={() => setConfirmClear(false)}
            >
              Keep notes
            </button>
          </fieldset>
        )}
      </div>
      <style>{`.reflection-print-note { display:none; } @media print { .reflection-print-note { display:block; overflow-wrap:anywhere; } .worksheet-content:has(.reflection-workspace) .worksheet-prompts { display:none; } .reflection-workspace { border:0; } }`}</style>
    </section>
  );
}
