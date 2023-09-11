import { GetGlobal } from '@benbraide/inlinejs';
import { AlertMagicHandlerCompact } from './magic/alert';

import { AlertConceptName } from './names';
import { AlertConcept } from './concept';

export function Initialize(){
    GetGlobal().SetConcept(AlertConceptName, new AlertConcept);
    AlertMagicHandlerCompact();
}
