var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.c = new Map();
    }
    //  订阅指定的主题
    EventEmitter.prototype.subscribe = function (topic) {
        var handles = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            handles[_i - 1] = arguments[_i];
        }
        var topics = this.c.get(topic);
        if (!topics) {
            this.c.set(topic, topics = []);
        }
        topics.push.apply(topics, handles);
    };
    // 取消订阅指定的主题
    EventEmitter.prototype.unsubscribe = function (topic, handler) {
        if (!handler) {
            console.log("1");
            return this.c["delete"](topic);
        }
        var topics = this.c.get(topic);
        if (!topics) {
            console.log("2");
            return false;
        }
        var index = topics.indexOf(handler);
        if (index < 0) {
            console.log("3");
            return false;
        }
        topics.splice(index, 1);
        if (topics.length === 0) {
            this.c["delete"](topic);
        }
        return true;
    };
    //  为指定的主题发布消息
    EventEmitter.prototype.publish = function (topic) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var topics = this.c.get(topic);
        if (!topics) {
            return null;
        }
        return topics.map(function (handler) {
            try {
                return handler.apply(void 0, args);
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    };
    return EventEmitter;
}());
var eventEmitter = new EventEmitter();
eventEmitter.subscribe("ts", function (msg) { return console.log("\u6536\u5230\u8BA2\u9605\u7684\u6D88\u606F\uFF1A" + msg); });
eventEmitter.publish('ts', "typescript 发布订阅");
eventEmitter.unsubscribe("ts");
eventEmitter.publish("ts", "typescript 发布订阅");
