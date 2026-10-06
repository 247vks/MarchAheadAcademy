// Only fixed categories cross this boundary; never send notes, answers or time inputs.
export type EngagementAction = 'start' | 'complete' | 'print';
export type EngagementTool =
  | 'ssb_planner'
  | 'entry_finder'
  | 'self_description';
export function trackTool(action: EngagementAction, tool: EngagementTool) {
  if (typeof window !== 'undefined')
    window.dispatchEvent(
      new CustomEvent('maa-tool-engagement', { detail: { action, tool } }),
    );
}
