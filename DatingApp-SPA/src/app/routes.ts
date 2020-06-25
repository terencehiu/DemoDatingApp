import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from './_resolvers/lists.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            {path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver},
            canDeactivate: [PreventUnsavedChanges]},
            {path: 'lists', component: ListsComponent, resolve: {users: ListsResolver}},
            {path: 'messages', component: MessagesComponent}
        ]
    },
   // {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
   // {path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
  //  {path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
