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
const ui = require("../../ui");
class WorkItemListEntry extends ui.BaseElement {
    constructor(element, name) {
        super(element, name);
        this.cellSelector = protractor_1.$$('.datatable-body-cell');
        this.inlineQuickAdd = new ui.Clickable(this.$('.quick-add-icon'), 'Inline quick add button');
        this.id = new ui.BaseElement(this.$('span.margin-0'), 'WorkItem ID');
        this.type = new ui.BaseElement(this.$('datatable-body-cell:nth-child(3) work-item-cell > div'), 'WorkItem Type');
        this.title = new ui.Clickable(this.$('.wi-detail-title p'), 'WorkItem Title');
        this.labels = new ui.BaseElement(this.$('f8-label'), 'WorkItem Labels');
        this.inlineCloseButton = new ui.Clickable(this.$('.pficon-close'), 'inline close');
        this.treeExpander = new ui.Clickable(this.$('.tree-icon'), 'WorkItem Expander');
        this.labelName = new ui.Clickable(this.element(protractor_1.by.cssContainingText('.label-name', 'sample_label_1')), 'WorkItem Label');
        this.detailIcon = new ui.Clickable(this.$('.wi-detail-icon'), 'WorkItem detail page');
        this.iteration = new ui.BaseElement(this.$('#table-iteration'), 'Table Workitem Iteration Name');
    }
    openQuickPreview() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.title.run("Click WorkItem Title: " + this.name, () => __awaiter(this, void 0, void 0, function* () { return this.title.clickWhenReady(); }));
        });
    }
    clickInlineQuickAdd() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inlineQuickAdd.clickWhenReady();
        });
    }
    clickInlineClose() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inlineCloseButton.clickWhenReady();
        });
    }
    getInlineQuickAddClass() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.inlineQuickAdd.getAttribute('className');
        });
    }
    clickExpandWorkItem() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.treeExpander.clickWhenReady();
        });
    }
    getIterationText() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.iteration.getTextWhenReady();
        });
    }
    clickLabel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.labelName.clickWhenReady();
        });
    }
    clickDetailIcon() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.detailIcon.clickWhenReady();
        });
    }
}
exports.WorkItemListEntry = WorkItemListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2l0ZW0tbGlzdC1lbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtpdGVtLWxpc3QtZW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFzRDtBQUV0RCwrQkFBK0I7QUFFL0IsdUJBQStCLFNBQVEsRUFBRSxDQUFDLFdBQVc7SUFrQm5ELFlBQVksT0FBc0IsRUFBRSxJQUFZO1FBQzlDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFsQnZCLGlCQUFZLEdBQUcsZUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDMUMsbUJBQWMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDeEYsT0FBRSxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLFNBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1REFBdUQsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzVHLFVBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDekUsV0FBTSxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDbkUsc0JBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0UsaUJBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQzNFLGNBQVMsR0FBSSxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBRSxDQUFDO1FBQ3RILGVBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLENBQUE7UUFJaEYsY0FBUyxHQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsK0JBQStCLENBQUMsQ0FBQztJQU0zRixDQUFDO0lBRUssZ0JBQWdCOztZQUNwQixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBUyxFQUFFLGdEQUFDLE1BQU0sQ0FBTixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBLEdBQUEsQ0FBQyxDQUFDO1FBQ3RHLENBQUM7S0FBQTtJQUVLLG1CQUFtQjs7WUFDdkIsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLENBQUM7S0FBQTtJQUVLLGdCQUFnQjs7WUFDcEIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEQsQ0FBQztLQUFBO0lBRUssc0JBQXNCOztZQUMxQixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxDQUFDO0tBQUE7SUFFSyxtQkFBbUI7O1lBQ3ZCLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEQsQ0FBQztLQUFBO0lBQ0ssZ0JBQWdCOztZQUNwQixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDakQsQ0FBQztLQUFBO0lBRUssVUFBVTs7WUFDZCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUssZUFBZTs7WUFDbkIsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pDLENBQUM7S0FBQTtDQUNGO0FBcERELDhDQW9EQyJ9