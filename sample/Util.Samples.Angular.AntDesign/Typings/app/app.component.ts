import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TitleService } from '@delon/theme';
import { NzModalService } from 'ng-zorro-antd';

/**
 * Ӧ�ø����
 */
@Component( {
    selector: 'app',
    template: `<router-outlet></router-outlet>`,
} )
export class AppComponent implements OnInit {
    /**
     * ��ʼ��
     */
    constructor( private router: Router, private titleSrv: TitleService, private modalSrv: NzModalService ) {
    }

    /**
     * ��ʼ��
     */
    ngOnInit() {
        this.router.events
            .pipe( filter( evt => evt instanceof NavigationEnd ) )
            .subscribe( () => {
                this.titleSrv.setTitle();
                this.modalSrv.closeAll();
            } );
    }
}
