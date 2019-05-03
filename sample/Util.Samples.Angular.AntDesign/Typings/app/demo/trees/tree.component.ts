import { Component, Injector } from '@angular/core';
import { ComponentBase } from '../../../util';
import { env } from '../../env';
import { RoleQuery } from './model/role-query';

@Component({
    selector: 'app-table-list',
    templateUrl: !env.dev() ? './html/tree.component.html' : '/View/Demo/Trees/Tree',
})
export class TreeComponent extends ComponentBase {
    /**
     * ��ѯ����
     */
    queryParam: RoleQuery;

    /**
     * ��ʼ��
     * @param injector ע����
     */
    constructor( injector: Injector ) {
        super( injector );
        this.queryParam = this.createQuery();
    }

    /**
     * ������ѯ����
     */
    protected createQuery() {
        return new RoleQuery();
    }
}
