import { remainingSeconds } from './timer';
describe('remainingSeconds',()=>{it('derives remaining time from timestamps',()=>{expect(remainingSeconds({targetEndAtMs:70000,nowMs:10000})).toBe(60)});it('never returns a negative duration',()=>{expect(remainingSeconds({targetEndAtMs:10000,nowMs:70000})).toBe(0)})});
