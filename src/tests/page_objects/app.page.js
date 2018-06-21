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
const base_page_1 = require("./base.page");
class AppPage extends base_page_1.BasePage {
    /**
     * Extend this class, to describe Application Page(after logging in)
     *
     * @param {url} string URL where the extended page resides
     */
    constructor(url) {
        super(url);
        this.appTag = protractor_1.$('f8-app');
    }
    /**
     * Returns an instance of the BaseElement that can be found using
     * the {css} and contains the {text}.
     *
     * @param {ui} The Base Element Class e.g. Button, TextInput
     * @param {css}  Css within the appTag that identifies the element
     * @param {text} text in the element
     *
     */
    innerElement(ui, css, text) {
        const element = this.appTag.element(protractor_1.by.cssContainingText(css, text));
        return new ui(element, text);
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.appTag));
        });
    }
}
exports.AppPage = AppPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXlFO0FBSXpFLDJDQUF1QztBQUV2QyxhQUE4QixTQUFRLG9CQUFRO0lBRzVDOzs7O09BSUc7SUFDSCxZQUFZLEdBQVk7UUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBUmIsV0FBTSxHQUFHLGNBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQVNyQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxZQUFZLENBQUMsRUFBc0IsRUFBRSxHQUFXLEVBQUUsSUFBWTtRQUM1RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUssS0FBSzs7WUFDVCxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7S0FBQTtDQUVGO0FBOUJELDBCQThCQyJ9