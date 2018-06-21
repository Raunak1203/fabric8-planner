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
const ui = require("../../ui");
const workitem_quickpreview_1 = require("./workitem-quickpreview");
class WorkItemDetailPage extends workitem_quickpreview_1.WorkItemQuickPreview {
    constructor() {
        super(...arguments);
        this.detailPageDiv = new ui.BaseElement(this.$('#wi-detail-form'), 'wi detail page');
        this.stateToggle = new ui.BaseElement(this.$('#wi-detail-state'), 'WorkItem State toggle');
        this.stateDropdownDetail = new ui.Dropdown(this.stateToggle, this.$('.open .dropdown-menu'), 'WorkItem State dropdown');
    }
    changeState(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.stateDropdownDetail.clickWhenReady();
            yield this.stateDropdownDetail.select(state);
        });
    }
}
exports.WorkItemDetailPage = WorkItemDetailPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2l0ZW0tZGV0YWlscGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtpdGVtLWRldGFpbHBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtRUFBK0Q7QUFFL0Qsd0JBQWdDLFNBQVEsNENBQW9CO0lBQTVEOztRQUNFLGtCQUFhLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hGLGdCQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsRUFBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JGLHdCQUFtQixHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBTXJILENBQUM7SUFKTyxXQUFXLENBQUMsS0FBYTs7WUFDN0IsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDaEQsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtDQUNGO0FBVEQsZ0RBU0MifQ==