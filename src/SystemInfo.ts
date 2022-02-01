const si = require('systeminformation');



let result = null;

const valueObject = {
    cpu: '*',
    system: '*',
    mem: '*',
    osInfo: '*',
    currentLoad: '*',
    processes: '*',
    diskLayout: '*',
    networkInterfaces: '*'
}

si.get(valueObject).then(data => result = data);

// // callback style
// si.cpu(function (data) {
//     console.log('CPU-Information:');
//     console.log(data);
// });

// // promises style - new in version 3
// si.cpu()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// si.mem()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// si.system()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// si.osInfo()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// si.currentLoad()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// si.processes()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// si.diskLayout()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// si.networkInterfaces()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// full async / await example (node >= 7.6)
export async function all_result() {
    try {
        let result = null;

        const valueObject = {
            cpu: '*',
            system: '*',
            mem: '*',
            osInfo: '*',
            currentLoad: '*',
            processes: '*',
            diskLayout: '*',
            networkInterfaces: '*'
        }

        si.get(valueObject).then(data => result = data);

        return result
    } catch (e) {
        //console.log(e)
    }
}

// https://stackoverflow.com/questions/10332565/how-to-get-system-statistics-with-node-js