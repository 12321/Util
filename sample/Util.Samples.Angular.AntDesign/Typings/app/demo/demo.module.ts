import { NgModule } from '@angular/core';

//���ģ��
import { FrameworkModule } from '../framework.module';

//·��ģ��
import { DemoRoutingModule } from './demo-routing.module';

//�����
import { BasicFormComponent } from "./forms/basic-form.component";

/**
 * Demoģ��
 */
@NgModule( {
    imports: [FrameworkModule, DemoRoutingModule],
    declarations: [
        BasicFormComponent
    ]
} )
export class DemoModule { }
