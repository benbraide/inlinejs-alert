import { GetGlobal, WaitForGlobal } from '@benbraide/inlinejs';

import { SwalConceptName } from './names';
import { SwalAlert } from './concept/swal';

import { AlertMagicHandlerCompact } from './magic/alert';

WaitForGlobal().then(() => {
    GetGlobal().SetConcept(SwalConceptName, new SwalAlert());
    AlertMagicHandlerCompact();
});
