/* Ảnh dự phòng: ảnh chưa có thì hiện khung minh họa kèm mô tả */
window.AIPH = function (img) {
  var d = document.createElement("div");
  d.className = "ph";
  d.setAttribute("role", "img");
  d.setAttribute("aria-label", img.alt || "Hình minh họa");
  var s = document.createElement("span");
  s.textContent = img.alt || "";
  d.appendChild(s);
  img.replaceWith(d);
};
window.AIIMG = function (base, name, alt, cls) {
  var a = String(alt || "").replace(/"/g, "&quot;");
  return '<img class="' + (cls || "") + '" src="' + base + 'assets/img/' + name + '.jpg" alt="' + a + '" loading="lazy" onerror="AIPH(this)">';
};
