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
const ui = require("../../ui");
class ToolbarHeader extends base_element_1.BaseElement {
    constructor(el, name = 'ToolBar Header') {
        super(el, name);
        this.notificationToast = new ui.BaseElementArray(protractor_1.$$('pfng-toast-notification'), 'Notification Toast');
        this.header = new base_element_1.BaseElement(this.$('.toolbar-pf-view-selector'), 'header div');
        this.showTree = new base_element_1.BaseElement(this.$('.toolbar-pf-view-selector #showTree'), 'show Tree');
        this.filterDropdown = new ui.Dropdown(this.$('.input-group-btn'), this.$('.input-group-btn .dropdown-menu'), 'Filter-By dropdown');
        this.selectFilterCondition = new ui.Dropdown(this.$('.filter-select'), this.$('.filter-select .dropdown-menu'), 'Select Filter Condition');
        this.clearAllFilter = new ui.Clickable(this.$('.clear-filters'), 'Clear All filters');
        this.showCompleted = new base_element_1.BaseElement(this.$('.toolbar-pf-view-selector #showCompleted'), 'Show Completed');
        this.saveFilter = new ui.Clickable(this.$('.save-filters'), 'Save');
        this.saveFilterDialog = new base_element_1.BaseElement(this.$('.save-filter-dropdown'));
        this.saveFilterBtn = new ui.Button(this.saveFilterDialog.$('.save-cq-btn'), 'Save');
        this.closeBtn = new ui.Button(this.$('.cancel-cq-btn'), 'Cancel');
        this.titleTextInput = new ui.TextInput(this.saveFilterDialog.$('input.form-control'), 'Query Title');
        this.activeFiltersList = new ui.BaseElementArray(this.$$('.f8-filters--active li'), 'Active filters div');
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("ready").call(this);
            yield this.header.untilPresent();
        });
    }
    clickShowTree() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ready();
            while (true) {
                try {
                    yield this.showTree.clickWhenReady();
                    break;
                }
                catch (e) {
                    yield protractor_1.browser.sleep(1000);
                    yield this.notificationToast.untilCount(0);
                }
            }
        });
    }
    selectFilter(Label, LabelTest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ready();
            yield this.filterDropdown.clickWhenReady();
            yield this.filterDropdown.select(Label);
            yield this.selectFilterCondition.clickWhenReady();
            yield this.selectFilterCondition.select(LabelTest);
        });
    }
    clickClearAllFilters() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAllFilter.clickWhenReady();
        });
    }
    clickShowCompleted() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ready();
            yield this.showCompleted.untilDisplayed();
            while (true) {
                try {
                    yield this.showCompleted.clickWhenReady();
                    break;
                }
                catch (e) {
                    yield protractor_1.browser.sleep(1000);
                    yield this.notificationToast.untilCount(0);
                }
            }
        });
    }
    saveFilters(title) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveFilter.clickWhenReady();
            yield this.titleTextInput.enterText(title);
            yield this.saveFilterBtn.clickWhenReady();
        });
    }
    getFilterConditions() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.activeFiltersList.getTextWhenReady();
        });
    }
}
exports.ToolbarHeader = ToolbarHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhckhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvb2xiYXJIZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9EQUFnRDtBQUNoRCwyQ0FBd0Q7QUFDeEQsK0JBQStCO0FBRS9CLG1CQUEyQixTQUFRLDBCQUFXO0lBdUI1QyxZQUFZLEVBQWlCLEVBQUUsSUFBSSxHQUFHLGdCQUFnQjtRQUNwRCxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBdkJsQixzQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFFLENBQUMseUJBQXlCLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pHLFdBQU0sR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzVFLGFBQVEsR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZGLG1CQUFjLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsaUNBQWlDLENBQUMsRUFDekMsb0JBQW9CLENBQ3JCLENBQUM7UUFDRiwwQkFBcUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQ3JDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxFQUN2Qyx5QkFBeUIsQ0FDMUIsQ0FBQztRQUNNLG1CQUFjLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pGLGtCQUFh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