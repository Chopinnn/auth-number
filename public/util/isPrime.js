/**
 * 判断n是否是素数
 * 素数：仅能被1和自身整除
 * @param {*} n 
 */
export default function (n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= n - 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}