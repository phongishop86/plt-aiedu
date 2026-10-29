/* Liên kết qua lại PLT-Edu ⇄ AI Edu và nút Đăng nhập dùng chung.
   Trang có header.top: gắn biểu tượng trang kia cạnh logo, nút Đăng nhập vào hàng menu (không còn thanh riêng).
   Trang không có header.top: hiện một thanh mảnh phía trên như cũ.
   Dùng: window.PLT_ECO = { current: 'edu' | 'ai', base: 'đường dẫn tới thư mục gốc', loginBefore: 'selector (tuỳ chọn)' } trước khi nạp file. */
(function () {
  'use strict';
  var cfg = window.PLT_ECO || {}; var cur = cfg.current || 'edu'; var base = cfg.base || '';
  var SITES = {
    edu: { name: 'PLT-Edu', sub: 'Học tập · Luyện thi', url: 'https://phongishop86.github.io/plt-edu/', logo: base + 'assets/img/eco-edu.png' },
    ai: { name: 'AI Edu', sub: 'Học AI miễn phí', url: 'https://phongishop86.github.io/plt-aiedu/', logo: base + 'assets/img/eco-ai.png' }
  };
  var css = '.eco{background:#0C1322;color:#C2CCDD;font:500 13px/1.2 "Be Vietnam Pro",system-ui,sans-serif;position:relative;z-index:30}' +
    '.eco .in{max-width:1180px;margin:auto;display:flex;align-items:center;gap:6px;padding:5px 16px;overflow-x:auto;scrollbar-width:none}' +
    '.eco .lbl{white-space:nowrap;margin-right:6px;color:#8FA0BD;font-size:12px;letter-spacing:.04em}' +
    '.eco a.t{display:flex;align-items:center;gap:6px;padding:4px 10px 4px 5px;border-radius:99px;text-decoration:none;color:#FAF7F0;white-space:nowrap;border:1px solid transparent}' +
    '.eco a.t img{width:22px;height:22px;border-radius:50%}.eco a.t small{color:#8FA0BD;font-size:11px}' +
    '.eco a.t.on{background:rgba(244,162,97,.16);border-color:rgba(244,162,97,.55)}.eco a.t:hover{border-color:#F4A261}' +
        '.eco button.lg{margin-left:auto;font:inherit;font-weight:700;color:#1B2A4A;background:#F4A261;border:0;border-radius:99px;padding:5px 12px;cursor:pointer;white-space:nowrap}' +
    '.eco-m{position:fixed;inset:0;background:rgba(12,19,34,.55);display:grid;place-items:center;z-index:100;padding:16px}' +
    '.eco-m .b{background:#FFFDF8;color:#1B2A4A;border-radius:18px;max-width:440px;width:100%;padding:22px;font:15px/1.55 "Be Vietnam Pro",system-ui,sans-serif;box-shadow:0 24px 48px rgba(0,0,0,.35)}' +
    '.eco-m h3{margin:0 0 8px;font-size:19px}.eco-m ul{margin:8px 0 14px;padding-left:18px}.eco-m button{font:inherit;font-weight:700;border:0;border-radius:10px;padding:9px 16px;background:#1B2A4A;color:#FAF7F0;cursor:pointer}' +
    '.eco-sis{display:inline-flex;align-items:center;gap:6px;margin-left:10px;padding:4px 10px 4px 4px;border-radius:99px;border:1px solid rgba(255,255,255,.18);color:#FAF7F0;text-decoration:none;font:600 13px/1.1 "Be Vietnam Pro",system-ui,sans-serif;white-space:nowrap}' +
    '.eco-sis img{width:24px;height:24px;border-radius:50%}.eco-sis small{display:block;color:#8FA0BD;font-size:10.5px;font-weight:500}.eco-sis:hover{border-color:#F4A261}' +
    '.eco-lg{font:700 14px/1 "Be Vietnam Pro",system-ui,sans-serif;color:#1B2A4A;background:#F4A261;border:0;border-radius:99px;padding:9px 14px;cursor:pointer;white-space:nowrap;margin-left:8px}.eco-lg:hover{filter:brightness(1.06)}' +
    'header.top .logo{white-space:nowrap}' +
    '@media (max-width:1360px){.eco-sis small{display:none}.eco-lg span{display:none}.eco-lg{padding:8px 10px}}' +
    '@media (max-width:860px){.eco-sis b{display:none}.eco-sis{padding:3px;margin-left:6px}}' +
    '@media (max-width:560px){header.top .logo span,header.top .logo{font-size:0}header.top .logo img{font-size:initial}header.top .btn{white-space:nowrap;padding:8px 12px}.eco-lg{margin-left:4px}}' +
    '@media (max-width:560px){.eco a.t small{display:none}}';
  function tab(k) { var s = SITES[k]; return '<a class="t' + (k === cur ? ' on' : '') + '" href="' + (k === cur ? (base || './') : s.url) + '"' + (k === cur ? ' aria-current="page"' : '') + '><img src="' + s.logo + '" alt="">' + s.name + ' <small>' + s.sub + '</small></a>'; }
  function login() {
    var m = document.createElement('div'); m.className = 'eco-m';
    m.innerHTML = '<div class="b" role="dialog" aria-label="Đăng nhập"><h3>👤 Tài khoản PLT-Edu</h3>Một tài khoản dùng chung cho cả <b>PLT-Edu</b> và <b>AI Edu</b> (đang hoàn thiện):<ul><li>Lưu tiến độ học, điểm kiểm tra trên mọi thiết bị</li><li>Theo dõi lịch học theo tuần, nhắc bài chưa làm</li><li>Phụ huynh, thầy cô xem báo cáo học tập</li></ul><p style="color:#55607A;margin:0 0 14px">Hiện tại tiến độ được lưu ngay trên trình duyệt của máy này, chưa cần đăng nhập.</p><button type="button">Đã hiểu</button></div>';
    m.addEventListener('click', function (e) { if (e.target === m || e.target.tagName === 'BUTTON') m.remove(); });
    document.body.appendChild(m);
  }
  function mount() {
    if (document.querySelector('.eco,.eco-sis')) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var head = document.querySelector('header.top'); var logo = head && head.querySelector('.logo');
    if (logo) { // gắn vào header sẵn có
      var k = cur === 'edu' ? 'ai' : 'edu', o = SITES[k];
      var a = document.createElement('a'); a.className = 'eco-sis'; a.href = o.url; a.title = 'Sang ' + o.name + ' – ' + o.sub;
      a.innerHTML = '<img src="' + o.logo + '" alt=""><span><b>' + o.name + '</b><small>' + o.sub + '</small></span>';
      logo.parentNode.insertBefore(a, logo.nextSibling);
      var b = document.createElement('button'); b.type = 'button'; b.className = 'eco-lg'; b.title = 'Đăng nhập'; b.innerHTML = '👤<span> Đăng nhập</span>'; b.addEventListener('click', login);
      var ref = cfg.loginBefore && head.querySelector(cfg.loginBefore);
      if (ref) ref.parentNode.insertBefore(b, ref); else logo.parentNode.appendChild(b);
      return;
    }
    var bar = document.createElement('div'); bar.className = 'eco'; bar.setAttribute('role', 'navigation'); bar.setAttribute('aria-label', 'PLT-Edu và AI Edu');
    bar.innerHTML = '<div class="in">' + tab('edu') + tab('ai') + '<button type="button" class="lg">👤 Đăng nhập</button></div>';
    bar.querySelector('.lg').addEventListener('click', login);
    document.body.insertBefore(bar, document.body.firstChild);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
