import { WaitForGlobal } from '@benbraide/inlinejs';
import { AlertMagicHandlerCompact } from './magic/alert';

WaitForGlobal().then(() => {
    AlertMagicHandlerCompact();
});
