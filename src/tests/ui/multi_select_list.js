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
const base_element_1 = require("./base.element");
const checkbox_1 = require("./checkbox");
class MultipleSelectionList extends base_element_1.BaseElement {
    constructor(element, name = '') {
        super(element, name);
        this.list = new base_element_1.BaseElement(this.$('div > ul'));
    }
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield _super("ready").call(this);
            yield this.list.ready();
        });
    }
    item(text) {
        let el = this.list.element(protractor_1.by.cssContainingText('li.checkbox label', text));
        return new checkbox_1.Checkbox(el);
    }
    select(text) {
        return __awaiter(this, void 0, void 0, function* () {
            let checkbox = this.item(text);
            yield checkbox.clickWhenReady();
        });
    }
}
exports.MultipleSelectionList = MultipleSelectionList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlfc2VsZWN0X2xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdWx0aV9zZWxlY3RfbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELGlEQUE2QztBQUM3Qyx5Q0FBc0M7QUFLdEMsMkJBQW1DLFNBQVEsMEJBQVc7SUFHcEQsWUFBWSxPQUFzQixFQUFFLE9BQWUsRUFBRTtRQUNuRCxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSHZCLFNBQUksR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBSTNDLENBQUM7SUFFSyxLQUFLOzs7WUFDVCxNQUFNLGVBQVcsV0FBRSxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFFRCxJQUFJLENBQUMsSUFBWTtRQUNmLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FDN0MsbUJBQW1CLEVBQUUsSUFBSSxDQUMxQixDQUFDLENBQUE7UUFDRixNQUFNLENBQUMsSUFBSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFSyxNQUFNLENBQUMsSUFBWTs7WUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixNQUFNLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0tBQUE7Q0FDRjtBQXZCRCxzREF1QkMifQ==