/*
 * @Author: tangdaoyong
 * @Date: 2021-05-07 15:20:03
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-17 14:52:55
 * @Description: git 相关
 */
/**
 * 更新版本号
 * @param {*} gulp 
 * @param {*} plugins 
 * @param {*} cb 
 */
const git_version = async function (gulp, plugins, cb) {
    const add = 'git add -A :/'; // 添加
    const commit = 'git commit -m "更新版本号"'; // 备注
    const push = 'git push'; // 提交
    // 执行指令
    await plugins.shell.exec(`
        ${add}
        ${commit}
        ${push}
    `, (error, stdout, stderr) => {
        if (error) {
            console.error(`git_version指令 exec error: ${error}`)
            cb()
            return
        }
        cb()
    });
}

/**
 * 第一次提交
 * @param {*} gulp 
 * @param {*} plugins 
 * @param {*} cb 
 */
const git_first = async function (gulp, plugins, cb) {
    const add = 'git add -A :/'; // 添加
    const commit = 'git commit -m "第一次提交"'; // 备注
    const push = 'git push'; // 提交
    // 执行指令
    await plugins.shell.exec(`
        ${add}
        ${commit}
        ${push}
    `, (error, stdout, stderr) => {
        if (error) {
            console.error(`git_first指令 exec error: ${error}`)
            cb()
            return
        }
        cb()
    });
}

/**
 * feat提交
 * @param {*} gulp 
 * @param {*} plugins 
 * @param {*} cb 
 */
const git_feat = async function (gulp, plugins, cb) {
    const argv = plugins.minimist(process.argv.slice(2))
    const m = argv.m
    if (!m) {
        console.error(`git_feat指令需要添加提交说明（如： gulp git_feat -m '提交'）`)
        cb()
        return
    }
    const add = 'git add -A :/'; // 添加
    const commit = `git commit -m "feat: - ${m}"`; // 备注
    const push = 'git push'; // 提交
    // 执行指令
    await plugins.shell.exec(`
        ${add}
        ${commit}
        ${push}
    `, (error, stdout, stderr) => {
        if (error) {
            console.error(`git_feat指令 exec error: ${error}`)
            cb()
            return
        }
        cb()
    });
}

/**
 * fix提交
 * @param {*} gulp 
 * @param {*} plugins 
 * @param {*} cb 
 */
const git_fix = async function (gulp, plugins, cb) {
    const argv = plugins.minimist(process.argv.slice(2))
    const m = argv.m
    if (!m) {
        console.error(`git_fix 指令需要添加提交说明（如： gulp git_fix -m '提交'）`)
        cb()
        return
    }
    const add = 'git add -A :/'; // 添加
    const commit = `git commit -m "fix: - ${m}"`; // 备注
    const push = 'git push'; // 提交
    // 执行指令
    await plugins.shell.exec(`
        ${add}
        ${commit}
        ${push}
    `, (error, stdout, stderr) => {
        if (error) {
            console.error(`git_fix指令 exec error: ${error}`)
            cb()
            return
        }
        cb()
    });
}

// 导出
module.exports = {
    git_version,
    git_first,
    git_feat,
    git_fix,
}
