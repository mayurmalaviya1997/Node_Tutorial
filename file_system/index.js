const fs = require('fs');
const path = require('path');
const { argv } = require('process');
const [, , cmd, name, contetnt] = argv
console.log(`====>> `, cmd, name, contetnt)


if (cmd === 'create') {
    fs.writeFileSync(name, contetnt)
} else if (cmd === 'remove') {
    fs.unlinkSync(name)
} else if (cmd === "update") {
    fs.existsSync(name, contetnt)
} else if (cmd === 'read') {
    fs.readFileSync(name, 'utf-8', (err, file) => {
        debugger
        if (!err) {
            console.log(`====>> `, file)
        } else console.log(`====>> Facing Trouble in file reading!!!!`,)
    })
} else {
    console.log(`====>> Opps Somethong went Wrong!!!`,)
}

console.clear()
console.log(`====>> `, path.parse('C:\Node_Tutorial\file_system\index.js'));

// const fs = require('fs');
const os = require('os');

// Get the root directory names based on the OS
function getRootDirectories() {
    if (os.platform() === 'win32') {
        // On Windows, root directories are typically drive letters (e.g., C:/)
        const rootDirectories = [];
        for (let i = 65; i <= 90; i++) { // ASCII codes for A to Z
            const driveLetter = String.fromCharCode(i);
            const rootPath = driveLetter + ':\\';
            if (fs.existsSync(rootPath)) {
                rootDirectories.push(rootPath);
            }
        }
        return rootDirectories;
    } else {
        // On other platforms, there may be only one root directory ("/")
        return ["/"];
    }
}

const rootDirs = getRootDirectories();
console.log("Root Directories:");
console.log(rootDirs);

