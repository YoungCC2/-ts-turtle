var Authenticator = /** @class */ (function () {
    function Authenticator() {
        this.strategy = null;
    }
    Authenticator.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Authenticator.prototype.authenticate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        if (!this.strategy) {
            console.log('尚未设置认证策略');
            return;
        }
        return (_a = this.strategy).authenticate.apply(_a, args);
    };
    return Authenticator;
}());
var WechatStrategy = /** @class */ (function () {
    function WechatStrategy() {
    }
    WechatStrategy.prototype.authenticate = function (wechatToken) {
        if (wechatToken !== "123") {
            console.log('无效的微信用户');
            return;
        }
        console.log('微信认证成功');
    };
    return WechatStrategy;
}());
var LocalStrategy = /** @class */ (function () {
    function LocalStrategy() {
    }
    LocalStrategy.prototype.authenticate = function (username, password) {
        if (username !== 'aobo' && password !== '123') {
            console.log('account error');
            return;
        }
        console.log('account authenticate successful');
    };
    return LocalStrategy;
}());
//  exm
var auth = new Authenticator();
auth.setStrategy(new WechatStrategy());
auth.authenticate('123456');
auth.setStrategy(new LocalStrategy());
auth.authenticate('aobo', '123');
auth.setStrategy(new WechatStrategy());
auth.authenticate('123');
