import { NgModule } from '@angular/core';

//���ģ��
import { FrameworkModule } from '../framework.module';

//�������
import { LayoutDefaultComponent } from './layout/default/default.component';
import { LayoutFullScreenComponent } from './layout/fullscreen/fullscreen.component';
import { HeaderComponent } from './layout/default/header/header.component';
import { SidebarComponent } from './layout/default/sidebar/sidebar.component';
import { HeaderSearchComponent } from './layout/default/header/components/search.component';
import { HeaderNotifyComponent } from './layout/default/header/components/notify.component';
import { HeaderTaskComponent } from './layout/default/header/components/task.component';
import { HeaderIconComponent } from './layout/default/header/components/icon.component';
import { HeaderFullScreenComponent } from './layout/default/header/components/fullscreen.component';
import { HeaderStorageComponent } from './layout/default/header/components/storage.component';
import { HeaderUserComponent } from './layout/default/header/components/user.component';
import { LayoutPassportComponent } from './layout/passport/passport.component';

//�Ǳ���
import { DashboardV1Component } from './dashboard/v1.component';

//����б�
const components = [
    HeaderSearchComponent,
    HeaderNotifyComponent,
    HeaderTaskComponent,
    HeaderIconComponent,
    HeaderFullScreenComponent,
    HeaderStorageComponent,
    HeaderUserComponent,
    LayoutDefaultComponent,
    LayoutFullScreenComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutPassportComponent,
    DashboardV1Component
];

/**
 * ������ģ��
 */
@NgModule({
    imports: [FrameworkModule],
    declarations: components,
    exports: components
})
export class HomeModule { }
