import { $, browser, Key } from 'protractor';
import { v4 as uuid } from 'uuid';
import { AppPage } from '../app.page';
import * as planner from './../../ui/planner';
import { WorkItemList, WorkItemInlineQuickAdd, SidePanel, WorkItemQuickPreview, ToolbarHeader,Settings, Iteration, WorkItemDetailPage, WorkItem  } from './../../ui/planner';
import { WorkItemQuickAdd } from './../../ui/planner';


import * as support from './../../support';

// this is what you see when you click on the Plan Tab button
export class PlannerPage extends AppPage {
  workItemList = new WorkItemList($('alm-work-item-list'));
  quickAdd =  new WorkItemQuickAdd($('alm-work-item-quick-add'));
  inlineQuickAdd =  new WorkItemInlineQuickAdd($('#workItemList_quickAdd_inline'));
  sidePanel = new SidePanel($('aside.f8-sidepanel'));
  quickPreview = new WorkItemQuickPreview($('work-item-detail'));
  header = new ToolbarHeader($('#header-div'));
  settings = new Settings($('div.f8-wi-list__settings'));
  iteration = new Iteration($('fab-planner-iteration-modal'));
  detailPage = new WorkItemDetailPage($('work-item-detail'));
  confirmModalButton = new WorkItemList($('#modal-confirm'));

  constructor(url?: string){
    super(url);
  }

  async ready() {
    support.debug(' ... check if Planner page is Ready');
    await super.ready();
    await this.workItemList.ready();
    await this.quickAdd.ready();
    await this.sidePanel.ready();
    support.debug(' ... check if Planner page is Ready - OK');
  }

  async createWorkItem(item: WorkItem) {
    this.debug('create item', JSON.stringify(item));
    await this.quickAdd.addWorkItem(item);
  }

  async createUniqueWorkItem(): Promise<string> {
    let workItemTitle = uuid();
    await this.createWorkItem({"title" : workItemTitle});
    return workItemTitle;
  }
  async createInlineWorkItem(item: WorkItem) {
    this.debug('create inline item', JSON.stringify(item));
    await this.inlineQuickAdd.addInlineWorkItem(item);
  }

  async resetState() {
    await this.sidePanel.clickScenarios();
    await $('body').sendKeys(Key.ESCAPE);
    await this.quickPreview.notificationToast.untilHidden();
  }
}
