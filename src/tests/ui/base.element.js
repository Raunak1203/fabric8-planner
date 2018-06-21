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
const support_1 = require("../support");
function makeNumberComparer(compare) {
    if (typeof (compare) == "number") {
        return (n) => n >= compare;
    }
    return compare;
}
/**
 * to use with browser.wait to wait for multiple elements to present
 * e.g.
 *  browser.wait(untilCount($('foobar'), n => n >= 5 ))
 *  browser.wait(untilCount($('foobar'), 5)) // same as above
 */
function untilCount(elements, expectation) {
    let compare = makeNumberComparer(expectation);
    return () => elements.count().then(compare);
}
class BaseElement extends protractor_1.ElementFinder {
    /**
     * Extend this class, to describe single custom fragment on your page
     *
     * @param {ElementFinder} elementFinder ElementFinder that you want to extend
     * @param {string} name to indentify the element in the logs
     */
    constructor(wrapped, name = 'unnamed') {
        // Basically we are recreating ElementFinder again with same parameters
        super(wrapped.browser_, wrapped.elementArrayFinder_);
        // add logging mixin
        this.name = '';
        this.name = name;
    }
    untilClickable(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitFor('clickable', protractor_1.ExpectedConditions.elementToBeClickable(this), timeout);
        });
    }
    untilPresent(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitFor('present', protractor_1.ExpectedConditions.presenceOf(this), timeout);
        });
    }
    untilDisplayed(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitFor('visible', protractor_1.ExpectedConditions.visibilityOf(this), timeout);
        });
    }
    untilTextIsPresent(text, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            let condition = protractor_1.ExpectedConditions.textToBePresentInElement(this, text);
            yield this.waitFor(`text ${text}`, condition, timeout);
        });
    }
    untilTextIsPresentInValue(text, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            let condition = protractor_1.ExpectedConditions.textToBePresentInElementValue(this, text);
            yield this.waitFor(`text ${text}`, condition, timeout);
        });
    }
    untilHidden(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.waitFor('hidden', protractor_1.ExpectedConditions.invisibilityOf(this), timeout);
            }
            catch (e) {
                this.debug("Element: ", this.name, " no longer exists.");
            }
        });
    }
    untilAbsent(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitFor('absence', protractor_1.ExpectedConditions.stalenessOf(this), timeout);
        });
    }
    clickWhenReady(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run('click', () => __awaiter(this, void 0, void 0, function* () {
                yield this.untilDisplayed(timeout);
                yield this.untilClickable(timeout);
                yield this.click();
            }));
        });
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: may have to revert back to just until present
            // await this.untilPresent();
            yield this.untilDisplayed();
        });
    }
    waitFor(msg, condition, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            let wait = timeout || support_1.DEFAULT_WAIT;
            this.debug(`waiting for "${msg}"`, `  | timeout: '${wait}'`);
            yield protractor_1.browser.wait(condition, wait);
            this.debug(`waiting for "${msg}"`, '  - OK');
        });
    }
    run(msg, fn) {
        return __awaiter(this, void 0, void 0, function* () {
            this.debug(msg, '- ACTION STARTED');
            yield fn();
            this.debug(msg, '- DONE');
        });
    }
    getTextWhenReady(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.untilDisplayed(timeout);
            return yield this.getText();
        });
    }
    scrollIntoView() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript('arguments[0].scrollIntoView(true)', this.getWebElement());
        });
    }
}
exports.BaseElement = BaseElement;
class BaseElementArray extends protractor_1.ElementArrayFinder {
    constructor(wrapped, name = 'unnamed') {
        // see: clone https://github.com/angular/protractor/blob/5.2.0/lib/element.ts#L106
        super(wrapped.browser_, wrapped.getWebElements, wrapped.locator_, wrapped.actionResults_);
        this.name = name;
    }
    untilCount(compare, wait, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(untilCount(this, compare), wait, msg);
        });
    }
    ready(count = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.untilCount(count);
            yield this.each((item, index) => __awaiter(this, void 0, void 0, function* () {
                let tempItem = new BaseElement(item, this.name + ' - ' + index);
                yield tempItem.ready();
            }));
        });
    }
    getTextWhenReady() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ready();
            return yield this.getText();
        });
    }
    untilHidden() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.each((item, index) => __awaiter(this, void 0, void 0, function* () {
                let tempItem = new BaseElement(item, this.name + ' - ' + index);
                try {
                    yield tempItem.untilHidden();
                }
                catch (e) {
                    this.debug("Element: ", tempItem.name, " no longer exists.");
                }
            }));
        });
    }
}
exports.BaseElementArray = BaseElementArray;
class Clickable extends BaseElement {
    ready() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run('ready', () => __awaiter(this, void 0, void 0, function* () {
                yield _super("ready").call(this);
                yield this.untilClickable();
            }));
        });
    }
}
exports.Clickable = Clickable;
mixins.applyMixins(BaseElement, [mixins.Logging]);
mixins.applyMixins(BaseElementArray, [mixins.Logging]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5lbGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZS5lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FHb0I7QUFFcEIsb0NBQW9DO0FBQ3BDLHdDQUEwQztBQVExQyw0QkFBNEIsT0FBdUI7SUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBRSxDQUFDLElBQUksT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILG9CQUFvQixRQUE0QixFQUFFLFdBQTJCO0lBQzNFLElBQUksT0FBTyxHQUFxQixrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRSxNQUFNLENBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBVUQsaUJBQXlCLFNBQVEsMEJBQWE7SUFPNUM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQXNCLEVBQUUsT0FBZSxTQUFTO1FBQzFELHVFQUF1RTtRQUN2RSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQWJ2RCxvQkFBb0I7UUFDcEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQWFoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUssY0FBYyxDQUFDLE9BQWdCOztZQUNuQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLCtCQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUUsQ0FBQztLQUFBO0lBRUss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