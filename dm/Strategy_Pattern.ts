interface Strategy {
    authenticate(...args: any): any;
}

class Authenticator {
    strategy: any;
    constructor() {
        this.strategy = null
    }

    setStrategy(strategy: any) {
        this.strategy = strategy
    }

    authenticate(...args: any) {
        if(!this.strategy){
            console.log('尚未设置认证策略')
            return ;
        }
        return this.strategy.authenticate(...args);
    }
}

class WechatStrategy implements Strategy {
    authenticate(wechatToken: string) {
        if(wechatToken !== "123"){
            console.log('无效的微信用户');
            return ;
        }

        console.log('微信认证成功');
    }
}

class LocalStrategy implements Strategy {
    authenticate(username: string, password: string) {
        if(username !== 'aobo' && password !== '123'){
            console.log('account error');
            return ;
        }

        console.log('account authenticate successful')
    }
}

//  exm

const auth = new Authenticator();

auth.setStrategy(new WechatStrategy());

auth.authenticate('123456');

auth.setStrategy(new LocalStrategy())

auth.authenticate('aobo','123')

auth.setStrategy(new WechatStrategy());

auth.authenticate('123');
