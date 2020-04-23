class pubSub {
    constructor() {}

    handlers = {}
    // 订阅事件
    subscribe(type, handler) {
        if (!(type in this.handlers)) {
            this.handlers[type] = []
        }

        this.handlers[type].push(handler)
    }

    // 发布事件
    publish(type, ...params) {
        if (!(type in this.handlers)) {
            return new Error('未注册该事件')
        }
        this.handlers[type].forEach(handler => {
            handler(...params)
        })
    }
}