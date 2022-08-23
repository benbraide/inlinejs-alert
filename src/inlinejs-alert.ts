import { GetGlobal, WaitForGlobal } from '@benbraide/inlinejs';
import { AlertMagicHandlerCompact } from './magic/alert';

import { AlertConceptName } from './names';
import { AlertConcept } from './concept';

WaitForGlobal().then(() => {
    GetGlobal().SetConcept(AlertConceptName, new AlertConcept);
    AlertMagicHandlerCompact();
});
