import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../member/member-edit/member-edit.component';
import { AlertifyService } from '../_services/alertify.service';


@Injectable()

export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> { 
    constructor(private alertify: AlertifyService) {}

    canDeactivate(component: MemberEditComponent) {
        if (component.editForm.dirty) {
            // return this.alertify.confirm('Are you sure you want to continue? Any unsaved changes will be lost.');
             return confirm('Are you sure you want to continue? Any unsaved changes will be lost.');
        }
        return true;
    }
}
