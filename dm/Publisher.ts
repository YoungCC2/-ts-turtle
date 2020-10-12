type EventHandle = (...args: any[]) => any;

class EventEmitter {
    private c = new Map<string, EventHandle[]>();

    //  订阅指定的主题
    subscribe(topic: string, ...handles: EventHandle[]) {
        let topics = this.c.get(topic);

        if (!topics) {
            this.c.set(topic, topics = []);
        }

        topics.push(...handles);

    }

    // 取消订阅指定的主题
    unsubscribe(topic: string, handler?: EventHandle): boolean {

        if (!handler) {
            console.log('取消订阅')
            return this.c.delete(topic);
        }

        const topics = this.c.get(topic)
        if (!topics) {
            console.log("2")
            return false;
        }

        const index = topics.indexOf(handler);
        if (index < 0) {
            console.log("3")
            return false
        }

        topics.splice(index, 1)
        if (topics.length === 0) {
            this.c.delete(topic);
        }

        

        return true
    }

    //  为指定的主题发布消息
    publish(topic: string, ...args: any[]): any[] | null {
        const topics = this.c.get(topic);

        if (!topics) {
            console.log('不存在的主题')
            return null;
        }

        return topics.map((handler: any) => {
            try {
                return handler(...args);
            } catch (error) {
                console.error(error)
                return null
            }
        })
    }

}

const eventEmitter = new EventEmitter()

eventEmitter.subscribe("ts",(msg)=> console.log(`收到订阅的消息：${msg}`) );

eventEmitter.publish('ts',"typescript 发布订阅");

eventEmitter.unsubscribe("ts")

eventEmitter.publish("ts","typescript 发布订阅")

