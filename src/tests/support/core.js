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
const fs = require("fs");
var BrowserMode;
(function (BrowserMode) {
    BrowserMode[BrowserMode["Phone"] = 0] = "Phone";
    BrowserMode[BrowserMode["Tablet"] = 1] = "Tablet";
    BrowserMode[BrowserMode["Desktop"] = 2] = "Desktop";
})(BrowserMode = exports.BrowserMode || (exports.BrowserMode = {}));
exports.seconds = (n) => n * 1000;
exports.minutes = (n) => n * exports.seconds(60);
exports.DEFAULT_WAIT = exports.seconds(60);
exports.LONG_WAIT = exports.minutes(3);
exports.LONGER_WAIT = exports.minutes(10);
exports.LONGEST_WAIT = exports.minutes(30);
function setBrowserMode(mode) {
    return __awaiter(this, void 0, void 0, function* () {
        let window = protractor_1.browser.driver.manage().window();
        switch (mode) {
            case BrowserMode.Phone:
                yield window.setSize(430, 667);
                break;
            case BrowserMode.Tablet:
                yield window.setSize(768, 1024);
                break;
            case BrowserMode.Desktop:
                yield window.setSize(1920, 1080);
                break;
            default:
                throw Error('Unknown mode');
        }
    });
}
exports.setBrowserMode = setBrowserMode;
function desktopTestSetup() {
    return __awaiter(this, void 0, void 0, function* () {
        yield setBrowserMode(BrowserMode.Desktop);
    });
}
exports.desktopTestSetup = desktopTestSetup;
/*
* The function uses auth and refresh tokens to login
*/
function loginWithTokens() {
    return __awaiter(this, void 0, void 0, function* () {
        // Bypass login by supplying auth and refresh token
        protractor_1.browser.get(protractor_1.browser.baseUrl + "/?token_json=" + protractor_1.browser.token);
    });
}
exports.loginWithTokens = loginWithTokens;
/*
 * Joins the arguments as URI paths ensuring there's exactly one '/' between each path entry
 */
function joinURIPath(...args) {
    // TODO: improve this method using available modules for uri operations
    let answer = null;
    for (let i = 0, j = arguments.length; i < j; i++) {
        let arg = arguments[i];
        if (i === 0 || !answer) {
            answer = arg;
        }
        else {
            if (!answer.endsWith('/')) {
                answer += '/';
            }
            if (arg.startsWith('/')) {
                arg = arg.substring(1);
            }
            answer += arg;
        }
    }
    return answer;
}
exports.joinURIPath = joinURIPath;
/**
 * Write screenshot to file
 * Example usage:
 *   support.writeScreenshot('exception1.png');
 *
 * Ref: http://blog.ng-book.com/taking-screenshots-with-protractor/
 */
function writeScreenshot(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        let png = yield protractor_1.browser.takeScreenshot();
        let stream = fs.createWriteStream(filename);
        stream.write(new Buffer(png, 'base64'));
        stream.end();
        info(`Saved screenshot to: ${filename}`);
    });
}
exports.writeScreenshot = writeScreenshot;
function timestamp() {
    let date = new Date();
    let time = date.toLocaleTimeString('en-US', { hour12: false });
    let ms = (date.getMilliseconds() + 1000).toString().substr(1);
    return `${time}.${ms}`;
}
function debugEnabled(...msg) {
    console.log(`[${timestamp()}]:`, ...msg);
}
function debugNoop(...msg) { }
function info(...msg) {
    console.info(`[${timestamp()}]:`, ...msg);
}
exports.info = info;
exports.debug = process.env.DEBUG ? debugEnabled : debugNoop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyx5QkFBeUI7QUFHekIsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ3JCLCtDQUFLLENBQUE7SUFDTCxpREFBTSxDQUFBO0lBQ04sbURBQU8sQ0FBQTtBQUNULENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQUVZLFFBQUEsT0FBTyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2xDLFFBQUEsT0FBTyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsZUFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRXpDLFFBQUEsWUFBWSxHQUFHLGVBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzQixRQUFBLFNBQVMsR0FBRyxlQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsUUFBQSxXQUFXLEdBQUcsZUFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFCLFFBQUEsWUFBWSxHQUFHLGVBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUV4Qyx3QkFBcUMsSUFBaUI7O1FBQ3BELElBQUksTUFBTSxHQUFHLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLFdBQVcsQ0FBQyxLQUFLO2dCQUNwQixNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLENBQUM7WUFDUixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUNyQixNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dC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