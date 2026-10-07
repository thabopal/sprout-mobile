export type TimerSnapshot={targetEndAtMs:number;nowMs:number};
export function remainingSeconds({targetEndAtMs,nowMs}:TimerSnapshot):number{return Math.max(0,Math.ceil((targetEndAtMs-nowMs)/1000))}
