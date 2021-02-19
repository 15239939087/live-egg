/**
 * 扩展统一返回的格式
 * @type {{parseMsg: (function(*, *=, *=))}}
 */
module.exports = {
    /**
     *
     * @param action 动作
     * @param payload 参数
     * @param metadata
     * @returns {{meta: {timestamp: number}, data: {action: *, payload: {}}}}
     */
    parseMsg(action, payload = {}, metadata = {}) {
        const meta = {
            timestamp: Date.now(),
            ...metadata
        };

        return {
            meta,
            data: {
                action,
                payload,
            },
        };
    },
}