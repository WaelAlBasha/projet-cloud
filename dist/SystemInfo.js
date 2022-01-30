"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpu = void 0;
const si = require('systeminformation');
si.cpu(function (data) {
    console.log('CPU-Information:');
    console.log(data);
});
si.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));
async function cpu() {
    try {
        const data = await si.cpu();
        console.log(data);
    }
    catch (e) {
        console.log(e);
    }
}
exports.cpu = cpu;
//# sourceMappingURL=SystemInfo.js.map