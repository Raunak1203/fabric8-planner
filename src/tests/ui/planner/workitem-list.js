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
const base_element_1 = require("./../base.element");
const protractor_1 = require("protractor");
const workitem_list_entry_1 = require("./workitem-list-entry");
const ui = require("../../ui");
class WorkItemList extends base_element_1.BaseElement {
    constructor(el, name = 'Work Item List') {
        super(el, name);
        this.overlay = new base_element_1.BaseElement(this.$('div.lock-overlay-list'));
        this.datatableHeaderdiv = new ui.BaseElement(this.$('.datatable-header'), 'datatable header div');
        this.datatableHeaderCell = new ui.BaseElementArray(this.$$('datatable-header-cell'), 'datatable header cell');
        this.datatableHeaderCellLabel = new ui.BaseElementArray(this.$$('datatable-header-cell-label'));
        this.datatableRow = new ui.BaseElementArray(this.$$('datatable-body-row'), 'datatable row');
        this.childWorkItemTypeDropdown = new ui.Dropdown(this.$('.f8-quick-add-inline .dropdown-toggle'), this.$('.f8-quick-add-inline .dropdown-menu'), 'Child WorkItem Type dropdown');
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("ready").call(this);
            yield this.overlay.untilHidden();
        });
    }
    clickWorkItem(title) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.overlay.untilHidden();
            yield this.workItem(title).openQuickPreview();
        });
    }
    hasWorkItem(title, showCompleted = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!showCompleted) {
                yield this.workItem(title).untilTextIsPresent(title);
            }
            return this.workItem(title).isPresent();
        });
    }
    workItem(title) {
        return new workitem_list_entry_1.WorkItemListEntry(this.element(protractor_1.by.xpath("//datatable-body-row[.//p[text()='" + title + "']]")), "Work Item - " + title);
    }
    clickInlineQuickAdd(title) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.workItem(title).clickInlineQuickAdd();
        });
    }
    getInlineQuickAddClass(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.workItem(title).getInlineQuickAddClass();
        });
    }
    getDataTableHeaderCellCount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.datatableHeaderdiv.untilDisplayed();
            return yield this.datatableHeaderCell.count();
        });
    }
    selectChildWorkItemType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.childWorkItemTypeDropdown.clickWhenReady();
            yield this.childWorkItemTypeDropdown.select(type);
        });
    }
    iterationText(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.workItem(title).getIterationText();
        });
    }
    clickWorkItemLabel(title) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.workItem(title).clickLabel();
        });
    }
    isTitleTextBold(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.workItem(title).title.getAttribute('className');
        });
    }
    openDetailPage(title) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().mouseMove(this.workItem(title)).perform();
            yield this.workItem(title).clickDetailIcon();
        });
    }
    getUnassignedWorkItemCount(assigneeName) {
        return __awaiter(this, void 0, void 0, function* () {
            // let assignees: any = await this.$$('f8-assignee').getAttribute('innerText');
            // let unassigned:any = assignees.filter(assignee => assignee === assigneeName);
            // return unassigned.length;
        });
    }
}
exports.WorkItemList = WorkItemList;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2l0ZW0tbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtpdGVtLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9EQUFnRDtBQUNoRCwyQ0FBd0Q7QUFFeEQsK0RBQTBEO0FBQzFELCtCQUErQjtBQUUvQixrQkFBMEIsU0FBUSwwQkFBVztJQVkzQyxZQUFZLEVBQWlCLEVBQUUsSUFBSSxHQUFHLGdCQUFnQjtRQUNwRCxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBWmxCLFlBQU8sR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDM0QsdUJBQWtCLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzVGLHdCQUFtQixHQUFHLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3hHLDZCQUF3QixHQUFHLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQzNGLGlCQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZGLDhCQUF5QixHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUMsQ0FBQyxFQUMvQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLEVBQzdDLDhCQUE4QixDQUMvQixDQUFDO0lBSUYsQ0FBQztJQUVLLEtBQUs7OztZQUNULE1BQU0sZUFB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