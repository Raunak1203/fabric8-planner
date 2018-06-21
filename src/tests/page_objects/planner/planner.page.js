"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const uuid_1 = require("uuid");
const app_page_1 = require("../app.page");
const planner_1 = require("./../../ui/planner");
const planner_2 = require("./../../ui/planner");
const support = require("./../../support");
// this is what you see when you click on the Plan Tab button
class PlannerPage extends app_page_1.AppPage {
    constructor(url) {
        super(url);
        this.workItemList = new planner_1.WorkItemList(protractor_1.$('alm-work-item-list'));
        this.quickAdd = new planner_2.WorkItemQuickAdd(protractor_1.$('alm-work-item-quick-add'));
        this.inlineQuickAdd = new planner_1.WorkItemInlineQuickAdd(protractor_1.$('#workItemList_quickAdd_inline'));
        this.sidePanel = new planner_1.SidePanel(protractor_1.$('aside.f8-sidepanel'));
        this.quickPreview = new planner_1.WorkItemQuickPreview(protractor_1.$('work-item-detail'));
        this.header = new planner_1.ToolbarHeader(protractor_1.$('#header-div'));
        this.settings = new planner_1.Settings(protractor_1.$('div.f8-wi-list__settings'));
        this.iteration = new planner_1.Iteration(protractor_1.$('fab-planner-iteration-modal'));
        this.detailPage = new planner_1.WorkItemDetailPage(protractor_1.$('work-item-detail'));
        this.confirmModalButton = new planner_1.WorkItemList(protractor_1.$('#modal-confirm'));
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            support.debug(' ... check if Planner page is Ready');
            yield _super("ready").call(this);
            yield this.workItemList.ready();
            yield this.quickAdd.ready();
            yield this.sidePanel.ready();
            support.debug(' ... check if Planner page is Ready - OK');
        });
    }
    createWorkItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            this.debug('create item', JSON.stringify(item));
            yield this.quickAdd.addWorkItem(item);
        });
    }
    createUniqueWorkItem() {
        return __awaiter(this, void 0, void 0, function* () {
            let workItemTitle = uuid_1.v4();
            yield this.createWorkItem({ "title": workItemTitle });
            return workItemTitle;
        });
    }
    createInlineWorkItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            this.debug('create inline item', JSON.stringify(item));
            yield this.inlineQuickAdd.addInlineWorkItem(item);
        });
    }
    resetState() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sidePanel.clickScenarios();
            yield protractor_1.$('body').sendKeys(protractor_1.Key.ESCAPE);
            yield this.quickPreview.notificationToast.untilHidden();
        });
    }
}
exports.PlannerPage = PlannerPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbm5lci5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhbm5lci5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkM7QUFDN0MsK0JBQWtDO0FBQ2xDLDBDQUFzQztBQUV0QyxnREFBNks7QUFDN0ssZ0RBQXNEO0FBR3RELDJDQUEyQztBQUUzQyw2REFBNkQ7QUFDN0QsaUJBQXlCLFNBQVEsa0JBQU87SUFZdEMsWUFBWSxHQUFZO1FBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQVpiLGlCQUFZLEdBQUcsSUFBSSxzQkFBWSxDQUFDLGNBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDekQsYUFBUSxHQUFJLElBQUksMEJBQWdCLENBQUMsY0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUMvRCxtQkFBYyxHQUFJLElBQUksZ0NBQXNCLENBQUMsY0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUNqRixjQUFTLEdBQUcsSUFBSSxtQkFBUyxDQUFDLGNBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDbkQsaUJBQVksR0FBRyxJQUFJLDhCQUFvQixDQUFDLGNBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDL0QsV0FBTSxHQUFHLElBQUksdUJBQWEsQ0FBQyxjQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM3QyxhQUFRLEdBQUcsSUFBSSxrQkFBUSxDQUFDLGNBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDdkQsY0FBUyxHQUFHLElBQUksbUJBQVMsQ0FBQyxjQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQzVELGVBQVUsR0FBRyxJQUFJLDRCQUFrQixDQUFDLGNBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDM0QsdUJBQWtCLEdBQUcsSUFBSSxzQkFBWSxDQUFDLGNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFJM0QsQ0FBQztJQUVLLEtBQUs7OztZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUNyRCxNQUFNLGVBQVcsV0FBRSxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsSUFBYzs7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUssb0JBQW9COztZQUN4QixJQUFJLGFBQWEsR0FBRyxTQUFJLEVBQUUsQ0FBQztZQUMzQixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBQyxPQUFPLEVBQUcsYUFBYSxFQUFDLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUNLLG9CQUFvQixDQUFDLElBQWM7O1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFFSyxVQUFVOztZQUNkLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QyxNQUFNLGNBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUQsQ0FBQztLQUFBO0NBQ0Y7QUE3Q0Qsa0NBNkNDIn0=