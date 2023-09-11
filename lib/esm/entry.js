import { WaitForGlobal } from '@benbraide/inlinejs';
import { Initialize } from './initialize';
export function InlineJSAlert() {
    WaitForGlobal().then(() => Initialize());
}
