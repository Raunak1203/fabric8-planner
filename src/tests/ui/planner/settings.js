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
class Settings extends ui.BaseElement {
    constructor(el, name = 'Settings') {
        super(el, name);
        this.settingsDropdownDiv = new ui.BaseElement(this.$('.f8-wi-list__settings-dropdown'), 'settings div');
        this.settingsDropDown = new ui.Dropdown(this.$('.f8-wi-list__settings .dropdown-toggle'), this.$('.f8-wi-list__settings-dropdown'));
        this.moveToDisplayedAttributeButton = new ui.Clickable(this.settingsDropdownDiv.$("span[tooltip='Move to Displayed Attributes']"), 'move to displayed attribute');
        this.moveToAvailableAttributeButton = new ui.Clickable(this.settingsDropdownDiv.$("span[tooltip='Move to Available Attributes']"), 'move to available attribute');
        this.close = new ui.Clickable(this.settingsDropdownDiv.$('.fa-close.btn'), ' close button');
    }
    settingready() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.settingsDropDown.ready();
        });
    }
    clickSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.settingsDropDown.ready();
            yield this.settingsDropDown.clickWhenReady();
        });
    }
    selectAttribute(AttributeValue) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.settingsDropDown.select(AttributeValue);
        });
    }
    moveToDisplayedAttribute() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.moveToDisplayedAttributeButton.clickWhenReady();
            yield this.close.clickWhenReady();
        });
    }
    moveToAvailableAttribute() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.moveToAvailableAttributeButton.clickWhenReady();
            yield this.close.clickWhenReady();
        });
    }
}
exports.Settings = Settings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsK0JBQStCO0FBRS9CLGNBQXNCLFNBQVEsRUFBRSxDQUFDLFdBQVc7SUFVMUMsWUFBWSxFQUFpQixFQUFFLElBQUksR0FBRyxVQUFVO1FBQzlDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFWbEIsd0JBQW1CLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNuRyxxQkFBZ0IsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQ2hDLElBQUksQ0FBQyxDQUFDLENBQUMsd0NBQXdDLENBQUMsRUFDaEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUN6QyxDQUFDO1FBQ0YsbUNBQThCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsOENBQThDLENBQUMsRUFBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzVKLG1DQUE4QixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLDhDQUE4QyxDQUFDLEVBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUM1SixVQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUMsZUFBZSxDQUFDLENBQUM7SUFJdEYsQ0FBQztJQUVLLFlBQVk7O1lBQ2hCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLGFBQWE7O1lBQ2pCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9DLENBQUM7S0FBQTtJQUVLLGVBQWUsQ0FBQyxjQUFzQjs7WUFDMUMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtJQUVLLHdCQUF3Qjs7WUFDNUIsTUFBTSxJQUFJLENBQUMsOEJBQThCLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDM0QsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVLLHdCQUF3Qjs7WUFDNUIsTUFBTSxJQUFJLENBQUMsOEJBQThCLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDM0QsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLENBQUM7S0FBQTtDQUNGO0FBcENELDRCQW9DQyJ9