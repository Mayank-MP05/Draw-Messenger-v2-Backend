/**
 * Redis cache connector module.
 * @module redis-cache-connector
 */

const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;
const REDIS_PORT = process.env.REDIS_PORT;

const redis = require("redis");

/**
 * Redis client instance.
 * @type {Object}
 */
let redisClient = null;

/**
 * Creates a singleton Redis client instance.
 * @async
 * @function createSingletonRedisClient
 * @returns {Promise<Object>} Redis client instance.
 */
const createSingletonRedisClient = () => {
    if (!redisClient) {
        console.log("[INIT] Redis Server Started");
        redisClient = redis.createClient({
            host: REDIS_HOSTNAME,
            port: REDIS_PORT // Default redis port
        });

        asyncConnectRedis(redisClient);
        return redisClient;
    }
    return redisClient;
}

/**
 * Connects to Redis server.
 * @async
 * @function asyncConnectRedis
 * @param {Object} redisClient - Redis client instance.
 * @returns {Promise<void>}
 */
const asyncConnectRedis = async (redisClient) => {
    try {
        await redisClient.connect();
        console.log("[INIT] Redis connection successful");
    } catch (err) {
        console.log("[INIT] Redis Server Error: ", err);
    }
}

redisClient = createSingletonRedisClient();

module.exports = redisClient;