import { Component, OnInit } from '@angular/core';
import { env } from '../../env';

/**
 * Dashboard Ĭ��ҳ���
 */
@Component({
    selector: 'app-dashboard-v1',
    templateUrl: env.dev() ? '/View/Home/Dashboard/V1' : './html/v1.component.html',
})
export class DashboardV1Component implements OnInit {
    /**
     * ��ʼ��
     */
    ngOnInit() {
    }
}