import { NgModule } from '@angular/core';

import { JHiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JHiSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JHiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JHiSharedCommonModule {}
