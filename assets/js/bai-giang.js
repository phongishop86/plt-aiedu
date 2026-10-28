/* Trình chiếu bài giảng dùng chung cho mọi cấp.
   Dữ liệu: window.AIEDU_LEVEL (hoặc AIEDU_THCS cho bản cũ). Trang gọi: bai-giang.html?b=3 */
(function () {
var D = window.AIEDU_LEVEL || window.AIEDU_THCS, L = D.lessons;
var BASE = "../";
var qs = new URLSearchParams(location.search);
var b = Math.min(Math.max(parseInt(qs.get("b") || "1", 10) || 1, 1), L.length) - 1;
var i = 0;
var pick = document.getElementById("pick");
pick.innerHTML = L.map(function (l, k) { return '<option value="' + (k + 1) + '"' + (k === b ? " selected" : "") + '>Buổi ' + (k + 1) + ' · ' + l.t + '</option>'; }).join("");
pick.addEventListener("change", function () { location.search = "?b=" + pick.value; });

function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function img(s) { return '<div class="img">' + AIIMG(BASE, s.img, s.alt) + '</div>'; }
function tag() { return '<div class="foot-tag">Buổi ' + (b + 1) + ' · ' + L[b].t + '</div>'; }
function note(s) { return s.note ? '<p class="note">' + s.note + '</p>' : ""; }

function R(s) {
  var l = L[b], P = D.parts[l.p], h = "";
  switch (s.k) {
  case "cover":
    return '<section class="slide s-cover"><div><div class="eyebrow">Buổi ' + (b + 1) + ' · ' + P.name + '</div><h1>' + l.t + '</h1><p class="sub">' + s.sub + '</p></div>' + img(s) + '</section>';
  case "split":
    return '<section class="slide s-split"><div class="txt"><h2>' + s.title + '</h2>' + s.html + '</div>' + img(s) + tag() + '</section>';
  case "concept":
    return '<section class="slide s-concept"><div class="left"><div class="eyebrow">Khái niệm</div><h2>' + s.title + '</h2><p class="def">' + s.big + '</p></div><div class="ex"><b>' + s.ex[0] + '</b><p>' + s.ex[1] + '</p></div>' + tag() + '</section>';
  case "cards":
    var n = s.items.length, cols = n <= 3 ? n : (n === 4 ? 2 : 3);
    h = '<div class="grid" style="grid-template-columns:repeat(' + cols + ',1fr)">' + s.items.map(function (c, k) { return '<div class="card' + (k === n - 1 && n === 6 ? " hl" : "") + '"><b>' + c[0] + '</b><span>' + c[1] + '</span></div>'; }).join("") + '</div>';
    return '<section class="slide"><h2>' + s.title + '</h2>' + h + note(s) + tag() + '</section>';
  case "compare":
    return '<section class="slide"><h2>' + s.title + '</h2><div class="cmp"><div class="a"><h3>' + s.a[0] + '</h3><p>' + s.a[1] + '</p></div><div class="b"><h3>' + s.b[0] + '</h3><p>' + s.b[1] + '</p></div></div>' + tag() + '</section>';
  case "steps":
    h = '<div class="steps">' + s.items.map(function (c, k) { return '<div class="step"><i>' + (k + 1) + '</i><b>' + c[0] + '</b><span>' + c[1] + '</span></div>'; }).join("") + '</div>';
    return '<section class="slide"><h2>' + s.title + '</h2>' + h + note(s) + tag() + '</section>';
  case "quote":
    return '<section class="slide s-quote"><div class="eyebrow">' + s.label + '</div><p class="q">' + s.text + '</p>' + tag() + '</section>';
  case "fact":
    return '<section class="slide s-fact"><div class="eyebrow">' + (D.factLabel || "Em có biết?") + '</div><p class="q">' + s.text + '</p>' + tag() + '</section>';
  case "myth":
    h = '<div class="myth">' + s.items.map(function (x) { return '<div><p class="m"><small>Hiểu lầm</small>' + x[0] + '</p><p class="t"><small>Sự thật</small>' + x[1] + '</p></div>'; }).join("") + '</div>';
    return '<section class="slide"><h2>' + (s.title || "Hiểu lầm và sự thật") + '</h2>' + h + tag() + '</section>';
  case "try":
    h = '<div class="opts2">' + s.opts.map(function (o, k) { return '<span data-k="' + k + '">' + o + '</span>'; }).join("") + '</div>';
    return '<section class="slide s-try" data-a="' + s.a + '"><div class="eyebrow">Thử ngay</div><p class="q">' + s.q + '</p>' + h + '<button class="reveal" type="button">Xem đáp án</button><p class="ans" hidden>' + s.why + '</p>' + tag() + '</section>';
  case "story":
    return '<section class="slide s-story"><div class="eyebrow">Tình huống</div><p class="tx">' + s.text + '</p><p class="q">' + s.q + '</p><button class="reveal" type="button">Xem cách xử lý</button><p class="ans" hidden>' + s.a + '</p>' + tag() + '</section>';
  case "recap":
    return '<section class="slide s-recap"><div class="eyebrow">Tóm tắt</div><h2>' + (s.title || D.recapLabel || "Hôm nay em đã học") + '</h2><ul>' + s.items.map(function (x) { return '<li><i></i><span>' + x + '</span></li>'; }).join("") + '</ul>' + tag() + '</section>';
  case "act":
    var lk = s.link ? '<a class="btn" href="' + s.link[1] + '"' + (/^https?:/.test(s.link[1]) ? ' target="_blank" rel="noopener"' : '') + '>' + s.link[0] + '</a>' : "";
    return '<section class="slide"><div class="eyebrow">Hoạt động</div><h2>' + s.title + '</h2><div class="act"><ol>' + s.items.map(function (x) { return "<li>" + x + "</li>"; }).join("") + '</ol>' + lk + '</div>' + tag() + '</section>';
  case "guess":
    var mx = Math.max.apply(null, s.items.map(function (x) { return x[1]; }));
    h = '<div class="bars">' + s.items.map(function (x) { return '<div><b>' + x[0] + '</b><i style="width:' + (x[1] / mx * 100) + '%;opacity:' + (0.45 + 0.55 * x[1] / mx) + '"></i><span>' + x[1] + '%</span></div>'; }).join("") + '</div>';
    return '<section class="slide guess"><div class="eyebrow">' + (s.label || "Chatbot nói bằng cách đoán từ tiếp theo") + '</div><p class="sent">' + s.title.replace("___", '<em>___</em>') + '</p>' + h + '<p class="note">' + s.note + '</p>' + tag() + '</section>';
  case "lights":
    h = '<div class="lights">' + s.items.map(function (x) { return '<div class="' + x[0] + '"><b>' + x[1] + '</b><p>' + x[2] + '</p></div>'; }).join("") + '</div>';
    return '<section class="slide"><h2>' + s.title + '</h2>' + h + tag() + '</section>';
  case "table":
    h = '<div class="tbl"><table><tr>' + s.head.map(function (x) { return "<th>" + x + "</th>"; }).join("") + '</tr>' + s.rows.map(function (r) { return "<tr>" + r.map(function (x) { return "<td>" + x + "</td>"; }).join("") + "</tr>"; }).join("") + '</table></div>';
    return '<section class="slide"><h2>' + s.title + '</h2>' + h + note(s) + tag() + '</section>';
  case "blocks":
    h = '<div class="blk"><div class="blocks">' + s.items.map(function (x) { return '<p class="' + x[0] + (x[2] ? " in" : "") + '">' + x[1] + '</p>'; }).join("") + '</div><div class="side"><p>' + s.note + '</p></div></div>';
    return '<section class="slide"><h2>' + s.title + '</h2>' + h + tag() + '</section>';
  case "code":
    h = '<div class="codewrap' + (s.out ? "" : " solo") + (s.fit ? " " + s.fit : "") + '"><div class="pane"><span>' + (s.lang || "Code Python") + '</span><pre class="code"><code>' + esc(s.code) + '</code></pre></div>' +
      (s.out ? '<div class="pane"><span>Kết quả</span><pre class="code out"><code>' + esc(s.out) + '</code></pre></div>' : "") + '</div>';
    return '<section class="slide"><h2>' + s.title + '</h2>' + h + note(s) + tag() + '</section>';
  case "timeline":
    h = '<ol class="tl">' + s.items.map(function (x) { return '<li><b>' + x[0] + '</b><span>' + x[1] + '</span></li>'; }).join("") + '</ol>';
    return '<section class="slide"><h2>' + s.title + '</h2>' + h + note(s) + tag() + '</section>';
  }
  return "";
}

var S = L[b].s, stage = document.getElementById("stage"), notesEl = document.getElementById("notes"), noteBox = document.getElementById("showNotes");
var showNotes = false;
try { showNotes = localStorage.getItem("aiedu-notes") === "1"; } catch (e) {}
if (noteBox) {
  noteBox.checked = showNotes;
  noteBox.addEventListener("change", function () { showNotes = noteBox.checked; try { localStorage.setItem("aiedu-notes", showNotes ? "1" : "0"); } catch (e) {} renderNotes(); });
}
function renderNotes() {
  if (!notesEl) return;
  var n = S[i].n;
  notesEl.hidden = !(showNotes && n);
  notesEl.innerHTML = n ? "<b>Ghi chú cho người dạy</b>" + n : "";
}
function bindReveal() {
  var btn = stage.querySelector(".reveal");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var sl = stage.querySelector(".slide");
    sl.querySelector(".ans").hidden = false;
    btn.hidden = true;
    var a = sl.getAttribute("data-a");
    if (a !== null) { var ok = sl.querySelector('.opts2 span[data-k="' + a + '"]'); if (ok) ok.classList.add("ok"); }
  });
}
function show() {
  stage.innerHTML = R(S[i]);
  bindReveal();
  renderNotes();
  document.getElementById("count").textContent = (i + 1) + " / " + S.length;
  document.getElementById("prev").disabled = i === 0;
  document.getElementById("next").disabled = i === S.length - 1;
  document.getElementById("dots").innerHTML = S.map(function (_, k) { return '<i class="' + (k === i ? "on" : "") + '"></i>'; }).join("");
  var e = document.getElementById("endbox");
  e.innerHTML = i === S.length - 1 ? 'Xong bài giảng! <a href="./#bai-' + (b + 1) + '">Làm quiz Buổi ' + (b + 1) + '</a>' + (b < L.length - 1 ? ' · <a href="?b=' + (b + 2) + '">Sang Buổi ' + (b + 2) + ' →</a>' : "") : "";
  document.title = "Buổi " + (b + 1) + " · " + L[b].t + " — PLT AIEdu";
}
function go(d) { var n = i + d; if (n < 0 || n >= S.length) return; i = n; show(); }
document.getElementById("prev").onclick = function () { go(-1); };
document.getElementById("next").onclick = function () { go(1); };
document.addEventListener("keydown", function (e) {
  if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;
  if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); go(1); }
  if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(-1); }
});
var x0 = null;
stage.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
stage.addEventListener("touchend", function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); x0 = null; });
document.getElementById("full").onclick = function () {
  var v = document.getElementById("viewer");
  if (document.fullscreenElement) document.exitFullscreen();
  else if (v.requestFullscreen) v.requestFullscreen().catch(function () {});
};
show();
})();
