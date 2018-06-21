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
const mixins = require("../mixins");
const support = require("../support");
var PageOpenMode;
(function (PageOpenMode) {
    PageOpenMode[PageOpenMode["AlreadyOpened"] = 0] = "AlreadyOpened";
    PageOpenMode[PageOpenMode["RefreshBrowser"] = 1] = "RefreshBrowser";
})(PageOpenMode = exports.PageOpenMode || (exports.PageOpenMode = {}));
class BasePage {
    constructor(url) {
        // add logging mixin
        this.name = '...';
        this.url = url;
        this.debug(`url: '${url}'`);
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    open(mode = PageOpenMode.AlreadyOpened) {
        return __awaiter(this, void 0, void 0, function* () {
            if (mode === PageOpenMode.RefreshBrowser) {
                yield this.openInBrowser();
            }
            yield this.ready();
            this.log('Opened');
            return this;
        });
    }
    openInBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.url === undefined) {
                throw Error('Trying to open an undefined url');
            }
            this.log("Authenticating with Auth and Refresh token");
            yield support.loginWithTokens();
            this.log('Opening', this.url);
            let currentUrl = yield protractor_1.browser.getCurrentUrl();
            this.debug('at  :', currentUrl);
            this.debug(`goto: '${this.url}'`);
            yield protractor_1.browser.get(this.url);
            let urlNow = yield protractor_1.browser.getCurrentUrl();
            this.debug('now :', urlNow);
        });
    }
    waitUntilUrlContains(text, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.urlContains(text), timeout);
        });
    }
}
exports.BasePage = BasePage;
mixins.applyMixins(BasePage, [mixins.Logging]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZS5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUQ7QUFDekQsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUd0QyxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsaUVBQWEsQ0FBQTtJQUNiLG1FQUFjLENBQUE7QUFDaEIsQ0FBQyxFQUhXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCO0FBRUQ7SUFjRSxZQUFZLEdBQVk7UUFieEIsb0JBQW9CO1FBRXBCLFNBQUksR0FBVyxLQUFLLENBQUM7UUFZbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUssS0FBSzs7UUFDWCxDQUFDO0tBQUE7SUFHSyxJQUFJLENBQUMsT0FBc0IsWUFBWSxDQUFDLGFBQWE7O1lBRXpELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDekMsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDN0IsQ0FBQztZQUVELE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtJQUVLLGFBQWE7O1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBVSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUM3QixJQUFJLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLElBQUksTUFBTSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxJQUFZLEVBQUUsT0FBZ0I7O1lBQ3ZELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLENBQUM7S0FBQTtDQUNGO0FBdERELDRCQXNEQztBQUVELE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMifQ==