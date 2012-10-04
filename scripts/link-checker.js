#!/usr/bin/env node

var fs  = require("fs")
,   pth = require("path")
,   exec = require("child_process").exec
,   wrench = require("wrench")
;

// where are we?
var rootDir = pth.join(__dirname, "..")
,   hbDir = pth.join(rootDir, "heartbeat")
;

// excludes
//  (?:http:\\/\\/www\\.w3\\.org\\/\\$)|(?:Icons\\/w3c_home)|(?:\\/StyleSheets\\/)
//  http://www.w3.org/
//  http://www.w3.org/Icons/w3c_home
//  http://www.w3.org/StyleSheets/*

// check, check, check
var files = fs.readdirSync(hbDir)
,   done = 0
,   total = files.length
,   checkLink = function () {
        if (!files.length) return;
        done++;
        var file = files.shift();
        console.log("Checking file " + done + " of " + total + " (" + file + ")");
        if (file.match(/\.html$/)) {
            exec("checklink -s -b -q -X \"(?:http:\\/\\/www\\.w3\\.org\\/\\$)|(?:Icons\\/w3c_home)|(?:\\/StyleSheets\\/)\" " +
                    pth.join(hbDir, file), { cwd: hbDir }, function (err, stdout, stderr) {
                console.log(stdout);
                if (err) throw err;
                checkLink();
            });
        }
        else {
            checkLink();
        }
    }
;

console.log("Checking " + files.length + " files");
checkLink();
