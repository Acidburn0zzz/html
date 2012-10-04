#!/usr/bin/env node

var fs  = require("fs")
,   pth = require("path")
,   exec = require("child_process").exec
,   wrench = require("wrench")
;

// basic setup
var rootDir = pth.join(__dirname, "..")
,   hbDir = pth.join(rootDir, "heartbeat")
;
if (fs.existsSync(hbDir)) wrench.rmdirSyncRecursive(hbDir);
fs.mkdirSync(hbDir);

// build the spec
exec("make html", { cwd: rootDir }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if (err) throw err;
    wrench.copyDirSyncRecursive(pth.join(rootDir, "output/html/"), hbDir);
    fs.renameSync(pth.join(hbDir, "spec.html"), pth.join(hbDir, "Overview.html"));
    console.log([   "The specification has been generated. You may now wish to:"
                ,   "\t\u2022 Run the link checker on everything (link-checker.js)"
                ,   "\t\u2022 Run pubrules on everything (pubrules.js)"
                 ].join("\n"));
});
