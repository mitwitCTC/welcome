function current_time() {
    const NowDate = new Date();
    const y = NowDate.getFullYear();
    const mm = NowDate.getMonth() + 1;
    const dd = NowDate.getDate();
    const h = NowDate.getHours();
    const m = NowDate.getMinutes();
    const s = NowDate.getSeconds();
    document.getElementById('current').innerHTML = y + ' 年 ' + mm + ' 月 ' + dd + ' 日 ' + h + ' 時 ' + m + ' 分 ' + s + ' 秒';
    setTimeout('current_time()', 1000);
}

current_time();

function fzchange1(x) {
    var chagefz = document.getElementById("changesize1");
    chagefz.style.fontSize = Number(x) + "px";
}
function fzchange2(x) {
    var chagefz = document.getElementById("changesize2");
    chagefz.style.fontSize = Number(x) + "px";
}