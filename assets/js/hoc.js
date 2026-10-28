/* Trang học dùng chung cho mọi cấp: danh sách bài, quiz, phòng tập, trò chơi.
   Dữ liệu và cấu hình: window.AIEDU_LEVEL (key, parts, lessons, gym, games). */
(function () {
var D = window.AIEDU_LEVEL, L = D.lessons;
var st = { done: [], cur: 0 };
try { var s = JSON.parse(localStorage.getItem(D.key) || "null"); if (s && Array.isArray(s.done)) { st.done = s.done; st.cur = s.cur || 0; } } catch (e) {}
function save() { try { localStorage.setItem(D.key, JSON.stringify(st)); } catch (e) {} }
function $(q) { return document.querySelector(q); }
function each(list, fn) { Array.prototype.forEach.call(list, fn); }
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

$("#total").textContent = L.length;

function progress() {
  $("#doneCount").textContent = st.done.length;
  $("#barFill").style.width = (st.done.length / L.length * 100) + "%";
}
function toc() {
  var h = "", last = 0;
  L.forEach(function (l, i) {
    if (l.p !== last) { h += '<div class="part">' + D.parts[l.p].name + '</div>'; last = l.p; }
    h += '<button type="button" data-i="' + i + '" aria-current="' + (i === st.cur) + '"><span class="n">' + String(i + 1).padStart(2, "0") + '</span><span class="t">' + l.t + '</span><span class="ok">' + (st.done.indexOf(i) > -1 ? "✓" : "") + '</span></button>';
  });
  $("#toc").innerHTML = h;
}
function lesson() {
  var i = st.cur, l = L[i], P = D.parts[l.p], cov = l.s[0];
  var h = '<div class="cover">' + AIIMG("../", cov.img, cov.alt) + '</div><div class="in">';
  h += '<span class="tag ' + P.cls + '">' + P.name + ' · Buổi ' + (i + 1) + '</span><h2>' + l.t + '</h2><p class="goal">' + l.g + '</p>';
  h += '<div class="watch"><a class="btn" href="bai-giang.html?b=' + (i + 1) + '">Xem bài giảng (' + l.s.length + ' slide)</a></div>';
  h += '<h3>Điều cần nhớ</h3><ul class="points">' + l.pts.map(function (p) { return "<li>" + p + "</li>"; }).join("") + '</ul>';
  h += '<h3>Kiểm tra nhanh</h3><div class="quiz">';
  l.q.forEach(function (q, qi) {
    h += '<div class="q" data-q="' + qi + '"><p>' + (qi + 1) + '. ' + q[0] + '</p><div class="opts">' + q[1].map(function (o, oi) { return '<button class="opt" type="button" data-o="' + oi + '">' + o + '</button>'; }).join("") + '</div><p class="fb" role="status"></p></div>';
  });
  var isDone = st.done.indexOf(i) > -1;
  h += '</div><div class="done-row"><button class="btn dark" type="button" id="markBtn">' + (isDone ? "Đã học xong ✓" : "Đánh dấu đã học") + '</button>';
  if (i < L.length - 1) h += '<button class="btn ghost" type="button" id="nextBtn">Buổi ' + (i + 2) + ' →</button>';
  h += '<span class="muted" id="quizMsg">Trả lời đúng cả ' + l.q.length + ' câu là bài tự được đánh dấu.</span></div></div>';
  $("#lesson").innerHTML = h;
  var right = {};
  each($("#lesson").querySelectorAll(".q"), function (qel) {
    var q = l.q[+qel.dataset.q];
    each(qel.querySelectorAll(".opt"), function (b) {
      b.addEventListener("click", function () {
        var o = +b.dataset.o, fb = qel.querySelector(".fb");
        each(qel.querySelectorAll(".opt"), function (x) { x.classList.remove("right", "wrong"); });
        if (o === q[2]) { b.classList.add("right"); fb.innerHTML = '<b class="g">Đúng rồi.</b> ' + q[3]; right[qel.dataset.q] = 1; }
        else { b.classList.add("wrong"); fb.innerHTML = '<b class="r">Chưa đúng.</b> Thử lại nhé.'; }
        if (Object.keys(right).length === l.q.length && st.done.indexOf(i) < 0) { mark(true); $("#quizMsg").textContent = "Giỏi lắm! Bài này đã được đánh dấu."; }
      });
    });
  });
  $("#markBtn").addEventListener("click", function () { mark(st.done.indexOf(i) < 0); });
  var nb = $("#nextBtn"); if (nb) nb.addEventListener("click", function () { go(i + 1); window.scrollTo({ top: 0 }); });
}
function mark(on) {
  var i = st.cur;
  st.done = st.done.filter(function (x) { return x !== i; }); if (on) st.done.push(i);
  save(); progress(); toc();
  $("#markBtn").textContent = on ? "Đã học xong ✓" : "Đánh dấu đã học";
}
function go(i) { st.cur = i; save(); toc(); lesson(); }
$("#toc").addEventListener("click", function (e) { var b = e.target.closest("button[data-i]"); if (b) go(+b.dataset.i); });

/* Phòng tập */
var G = D.gym;
$("#gymTag").textContent = G.tag; $("#gymTitle").textContent = G.title; $("#gymIntro").textContent = G.intro;
$("#gymUnit").textContent = "/ " + G.checks.length + " " + G.unit;
$("#gymTab").textContent = G.title;
$("#promptBox").value = G.samples[0];
$("#samples").innerHTML = G.samples.map(function (t, k) { return '<button class="chip" type="button" data-sample="' + k + '">' + (k === 0 ? "Mẫu: câu chưa rõ" : k === 1 ? "Mẫu: câu rõ ràng" : "Thử: " + esc(t)) + '</button>'; }).join("");
var CK = G.checks.map(function (c) { return { name: c[0], desc: c[1], re: new RegExp(c[2]), tip: c[3] }; });
function grade() {
  var t = $("#promptBox").value.toLowerCase() + " ", n = 0, h = "";
  CK.forEach(function (f) {
    var ok = f.re.test(t); if (ok) n++;
    h += '<li class="' + (ok ? "yes" : "no") + '"><span class="st">' + (ok ? "✓" : "–") + '</span><span><b>' + f.name + '</b> · ' + f.desc + '<small>' + (ok ? "Đã có." : f.tip) + '</small></span></li>';
  });
  var all = CK.length;
  $("#fingers").innerHTML = h; $("#scoreNum").textContent = n;
  $("#scoreMsg").textContent = t.trim().length < 3 ? "Gõ một câu để bắt đầu." : n >= all ? "Đủ " + all + " " + G.unit + "! Câu này rất rõ ràng." : n >= Math.ceil(all / 2) ? "Khá tốt. Thêm phần còn thiếu để AI hiểu đúng ý hơn." : "AI sẽ phải đoán mò. Thêm các phần còn thiếu nhé.";
  var risk = (G.privacy ? new RegExp(G.privacy) : /(\b0\d{9}\b|địa chỉ nhà|mật khẩu|số tài khoản|số điện thoại|tên trường|nhà em ở)/).test(t);
  var pv = $("#privacy"); pv.hidden = !risk;
  if (risk) pv.innerHTML = G.privacyMsg || "<b>Đèn đỏ!</b> Câu này có vẻ chứa thông tin riêng (số điện thoại, địa chỉ, mật khẩu, trường học…). Xóa phần đó trước khi gửi cho AI.";
}
$("#promptBox").addEventListener("input", grade);
$("#samples").addEventListener("click", function (e) { var b = e.target.closest("[data-sample]"); if (b) { $("#promptBox").value = G.samples[+b.dataset.sample]; grade(); } });
$("#copyBtn").addEventListener("click", function () {
  var box = $("#promptBox"), msg = $("#copyMsg");
  function fallback() { box.focus(); box.select(); msg.textContent = "Đã chọn sẵn, nhấn Ctrl+C để sao chép."; }
  try { navigator.clipboard.writeText(box.value).then(function () { msg.textContent = "Đã sao chép."; }, fallback); } catch (e) { fallback(); }
});

/* Trò chơi */
$("#gamesBox").innerHTML = D.games.map(function (g, k) {
  return '<div class="panel" id="g' + k + '"><span class="tag ' + (k % 2 ? "p2" : "p1") + '">' + g.tag + '</span><h2>' + g.title + '</h2><div class="counter"></div><div class="card-q"></div><div class="choice">' +
    g.choices.map(function (c) { return '<button class="opt" type="button" data-a="' + c[0] + '">' + (c[2] ? '<span class="light ' + c[2] + '"></span>' : "") + c[1] + '</button>'; }).join("") +
    '</div><p class="fb" role="status"></p><button class="btn dark nx" type="button" hidden>Câu tiếp</button></div>';
}).join("");
D.games.forEach(function (g, gk) {
  var items = g.items, k = 0, score = 0, answered = false;
  var root = $("#g" + gk), qEl = root.querySelector(".card-q"), fb = root.querySelector(".fb"), cnt = root.querySelector(".counter"), nx = root.querySelector(".nx");
  var btns = Array.prototype.slice.call(root.querySelectorAll(".choice .opt"));
  function show() {
    answered = false; nx.hidden = true; fb.innerHTML = "";
    btns.forEach(function (b) { b.classList.remove("right", "wrong"); b.disabled = false; });
    if (k >= items.length) { qEl.textContent = "Xong! Em đúng " + score + "/" + items.length + " câu."; cnt.textContent = ""; btns.forEach(function (b) { b.disabled = true; }); nx.hidden = false; nx.textContent = "Chơi lại"; return; }
    cnt.textContent = "Câu " + (k + 1) + "/" + items.length + " · Đúng " + score; qEl.textContent = items[k][0];
  }
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      if (answered) return; answered = true;
      var it = items[k], ok = b.dataset.a === it[1];
      if (ok) score++;
      btns.forEach(function (x) { x.disabled = true; if (x.dataset.a === it[1]) x.classList.add("right"); });
      if (!ok) b.classList.add("wrong");
      fb.innerHTML = '<b class="' + (ok ? "g" : "r") + '">' + (ok ? "Đúng rồi." : "Chưa đúng.") + '</b> ' + it[2];
      cnt.textContent = "Câu " + (k + 1) + "/" + items.length + " · Đúng " + score;
      nx.hidden = false; nx.textContent = k === items.length - 1 ? "Xem kết quả" : "Câu tiếp";
    });
  });
  nx.addEventListener("click", function () { if (k >= items.length) { k = 0; score = 0; } else k++; show(); });
  show();
});

/* Điều hướng theo #: #bai-hoc, #phong-tap-prompt, #tro-choi, #bai-3 */
var views = ["bai-hoc", "phong-tap-prompt", "tro-choi"];
function route() {
  var hsh = location.hash.slice(1), v = "bai-hoc";
  var m = /^bai-(\d+)$/.exec(hsh);
  if (m) { var n = Math.min(Math.max(+m[1], 1), L.length) - 1; if (n !== st.cur) go(n); }
  else if (views.indexOf(hsh) > -1) v = hsh;
  views.forEach(function (x) { $("#v-" + x).hidden = x !== v; });
  each(document.querySelectorAll("nav.tabs a"), function (a) { a.setAttribute("aria-current", a.dataset.view === v ? "page" : "false"); });
}
window.addEventListener("hashchange", route);
if (st.cur >= L.length) st.cur = 0;
progress(); toc(); lesson(); grade(); route();
})();
