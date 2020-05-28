var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var sanityClient = require("@sanity/client");
var fetchData = require("node-fetch");
var client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false
});
var documentArray = function () { return __awaiter(_this, void 0, void 0, function () {
    var docs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchData("https://" + process.env.SANITY_PROJECT_ID + ".api.sanity.io/v1/data/query/production?query=*[_type == \"app\"]", {
                    method: "get",
                    headers: {
                        "Content-type": "application/json",
                        Authorization: "Bearer " + process.env.SANITY_API_TOKEN
                    }
                })
                    .then(function (response) { return response.json(); })
                    .then(function (result) { return result.result; })];
            case 1:
                docs = _a.sent();
                return [2 /*return*/, docs];
        }
    });
}); };
exports.handler = function () { return __awaiter(_this, void 0, void 0, function () {
    var responseBodyArray, documents, _loop_1, i, state_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                responseBodyArray = [];
                return [4 /*yield*/, documentArray()];
            case 1:
                documents = _a.sent();
                _loop_1 = function (i) {
                    var doc, SITE_URL, url, fetchScreenshot, data, resetTimestamp, resetTime, errorMessage, screenshotImage, buff, _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                doc = documents[i];
                                SITE_URL = doc.url;
                                url = "https://api.apiflash.com/v1/urltoimage?access_key=7f3eb66149a5493abd0711522577c96b&format=jpeg&quality=85&response_type=image&transparent=true&url=" + SITE_URL + "&width=1080";
                                return [4 /*yield*/, fetchData(url)];
                            case 1:
                                fetchScreenshot = _d.sent();
                                return [4 /*yield*/, fetchScreenshot];
                            case 2:
                                data = _d.sent();
                                if (!(data.status !== 200)) return [3 /*break*/, 3];
                                resetTimestamp = data.headers.get("x-rate-limit-reset");
                                resetTime = new Date(resetTimestamp * 1000).toLocaleString();
                                errorMessage = {
                                    error: data.statusText,
                                    rateLimitResetTime: resetTime
                                };
                                return [2 /*return*/, { value: { body: JSON.stringify(errorMessage), statusCode: "500" } }];
                            case 3:
                                responseBodyArray.push(doc._id);
                                return [4 /*yield*/, data.arrayBuffer()];
                            case 4:
                                screenshotImage = _d.sent();
                                _b = (_a = Buffer).from;
                                _c = Uint8Array.bind;
                                return [4 /*yield*/, screenshotImage];
                            case 5: return [4 /*yield*/, _b.apply(_a, [new (_c.apply(Uint8Array, [void 0, _d.sent()]))()])];
                            case 6:
                                buff = _d.sent();
                                client.assets
                                    .upload("image", buff, {
                                    filename: doc._id + "-screenshot.png"
                                })
                                    .then(function (imageAsset) {
                                    var mutations = [
                                        {
                                            patch: {
                                                id: doc._id,
                                                set: {
                                                    screenshot: {
                                                        _type: "image",
                                                        asset: {
                                                            _type: "reference",
                                                            _ref: imageAsset._id
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                    ];
                                    fetchData("https://" + process.env.SANITY_PROJECT_ID + ".api.sanity.io/v1/data/mutate/production", {
                                        method: "post",
                                        headers: {
                                            "Content-type": "application/json",
                                            Authorization: "Bearer " + process.env.SANITY_API_TOKEN
                                        },
                                        body: JSON.stringify({ mutations: mutations })
                                    })
                                        .then(function (response) { return response.json(); })
                                        .then(function (result) {
                                        responseBodyArray.push(result);
                                    });
                                });
                                _d.label = 7;
                            case 7: return [2 /*return*/];
                        }
                    });
                };
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < documents.length)) return [3 /*break*/, 5];
                return [5 /*yield**/, _loop_1(i)];
            case 3:
                state_1 = _a.sent();
                if (typeof state_1 === "object")
                    return [2 /*return*/, state_1.value];
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                console.log(responseBodyArray);
                return [2 /*return*/, { body: JSON.stringify(responseBodyArray), statusCode: "200" }];
        }
    });
}); };
