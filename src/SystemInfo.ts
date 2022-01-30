const si = require('systeminformation');

// callback style
si.cpu(function (data) {
    console.log('CPU-Information:');
    console.log(data);
});

// promises style - new in version 3
si.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));

si.mem()
    .then(data => console.log(data))
    .catch(error => console.error(error));

si.system()
    .then(data => console.log(data))
    .catch(error => console.error(error));

si.osInfo()
    .then(data => console.log(data))
    .catch(error => console.error(error));

si.currentLoad()
    .then(data => console.log(data))
    .catch(error => console.error(error));

si.processes()
    .then(data => console.log(data))
    .catch(error => console.error(error));

si.diskLayout()
    .then(data => console.log(data))
    .catch(error => console.error(error));

si.networkInterfaces()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// full async / await example (node >= 7.6)
export async function all_result() {
    try {
        const result = [];
        result.push(await si.cpu());
        result.push(await si.mem());
        result.push(await si.system());
        result.push(await si.osInfo());
        result.push(await si.currentLoad());
        result.push(await si.processes());
        result.push(await si.diskLayout());
        result.push(await si.networkInterfaces());
        return result
    } catch (e) {
        //console.log(e)
    }
}

// https://stackoverflow.com/questions/10332565/how-to-get-system-statistics-with-node-js