/* Khóa AI THPT — buổi 9–16. Mọi đoạn code đã chạy thử với Python 3, pandas, scikit-learn. */
window.AIEDU_LEVEL.lessons.push(
{
 p: 3, t: "Làm quen Python với Google Colab",
 g: "Chạy Python trên Google Colab; dùng biến, kiểu dữ liệu, nhập – xuất; nhờ AI giải thích code đúng cách.",
 pts: [
  "<b>Python</b> là ngôn ngữ lập trình phổ biến nhất trong AI và phân tích dữ liệu, cú pháp gần tiếng Anh.",
  "<b>Google Colab</b>: viết và chạy Python trên trình duyệt, miễn phí, chỉ cần tài khoản Google.",
  "Kiến thức nền: <b>biến</b> (hộp chứa giá trị), <b>kiểu dữ liệu</b> (số nguyên int, số thực float, chuỗi str, đúng/sai bool), <b>print</b> và <b>input</b>.",
  "Nhờ AI <b>giải thích từng dòng</b> code và <b>giải thích thông báo lỗi</b>; tự gõ lại code để nhớ."
 ],
 q: [
  ["<code>input()</code> luôn trả về kiểu gì?", ["Chuỗi (str)", "Số nguyên (int)"], 0, "Muốn tính toán phải đổi bằng int() hoặc float()."],
  ["Kết quả của <code>print(7 // 2, 7 % 2)</code>?", ["3 1", "3.5 0"], 0, "// là chia lấy phần nguyên, % là lấy phần dư."],
  ["Google Colab chạy Python ở đâu?", ["Trên máy chủ của Google, qua trình duyệt", "Phải cài đặt vào máy"], 0, "Không cần cài gì."]
 ],
 s: [
  { k: "cover", img: "tp09-1", alt: "Học sinh gõ dòng code đầu tiên, màn hình bật pháo hoa", ep: "An excited Vietnamese teenage boy aged 16 typing his first line of code on a laptop, the screen bursts with colorful fireworks and floating code brackets, Robi cheering with both arms up, cozy computer lab, a young Vietnamese computer science teacher man about 27 in a polo shirt leaning in to help", sub: "Dòng code đầu tiên của bạn chỉ cách 30 giây." },
  { k: "concept", title: "Vì sao học Python?", big: "Python là ngôn ngữ chính của AI, khoa học dữ liệu và tự động hóa, dễ đọc như tiếng Anh.", ex: ["Ai dùng Python?", "Nhà khoa học dữ liệu, kỹ sư AI, nhà nghiên cứu, cả nhân viên văn phòng muốn tự động hóa việc lặp lại."] },
  { k: "steps", title: "Mở Google Colab", items: [["Vào colab.research.google.com", "Đăng nhập tài khoản Google"], ["New notebook", "Tạo sổ tay mới"], ["Gõ code vào ô", "Mỗi ô một đoạn code"], ["Bấm ▶ hoặc Shift+Enter", "Kết quả hiện ngay dưới ô"]] },
  { k: "code", title: "Chương trình đầu tiên", code: "ten = input(\"Tên bạn là gì? \")\ntuoi = int(input(\"Bạn bao nhiêu tuổi? \"))\nprint(\"Chào\", ten + \"!\")\nprint(\"Năm sau bạn\", tuoi + 1, \"tuổi.\")", out: "Tên bạn là gì? Lan\nBạn bao nhiêu tuổi? 16\nChào Lan!\nNăm sau bạn 17 tuổi.", note: "int() đổi chuỗi nhập vào thành số để cộng được." },
  { k: "table", title: "Kiểu dữ liệu cơ bản", head: ["Kiểu", "Ví dụ", "Dùng để"], rows: [["int", "<code>16</code>", "Số nguyên: tuổi, số lượng"], ["float", "<code>8.5</code>", "Số thực: điểm, giá tiền"], ["str", "<code>\"Lan\"</code>", "Chuỗi chữ: tên, câu"], ["bool", "<code>True</code>, <code>False</code>", "Đúng / sai: đã nộp bài chưa"]] },
  { k: "code", title: "Phép tính trong Python", code: "a = 7\nb = 2\nprint(a + b, a - b, a * b)\nprint(a / b)    # chia thường\nprint(a // b)   # chia lấy phần nguyên\nprint(a % b)    # lấy phần dư\nprint(a ** b)   # lũy thừa", out: "9 5 14\n3.5\n3\n1\n49" },
  { k: "try", q: "Đoạn code <code>tuoi = input(\"Tuổi: \")</code> rồi <code>print(tuoi + 1)</code> báo lỗi. Vì sao?", opts: ["input trả về chuỗi, không cộng được với số", "Thiếu dấu chấm phẩy"], a: 0, why: "Phải viết int(input(...)). Python không cần dấu chấm phẩy." },
  { k: "split", img: "tp09-2", alt: "Rô-bi đóng vai phiên dịch, dịch thông báo lỗi đỏ thành lời dễ hiểu", ep: "Robi wearing a tiny translator headset converting a scary red error message floating in the air into a friendly green speech bubble, a relieved Vietnamese teenage girl aged 16 at a laptop, bright computer lab", title: "Nhờ AI đúng cách khi học code", html: "<p>“Giải thích từng dòng code này cho người mới học.”</p><p>“Thông báo lỗi này nghĩa là gì? Gợi ý cách sửa, đừng viết lại cả bài.”</p><p class='big'>Hiểu rồi <b>tự gõ lại</b> mới nhớ.</p>" },
  { k: "myth", items: [["Phải giỏi Toán mới học được lập trình.", "Lập trình cần tư duy logic và kiên nhẫn nhiều hơn Toán khó."], ["Có AI viết code thì không cần học lập trình.", "Phải hiểu code mới biết AI viết đúng hay sai, và mới sửa được khi lỗi."]] },
  { k: "act", title: "Thực hành", items: ["Mở Colab, chạy chương trình đầu tiên.", "Viết chương trình hỏi chiều dài, chiều rộng và in diện tích hình chữ nhật.", "Cố tình tạo một lỗi, nhờ AI giải thích thông báo lỗi.", "Hoàn thành Phiếu 9."], link: ["Mở Google Colab", "https://colab.research.google.com"] },
  { k: "recap", items: ["Python là ngôn ngữ chính của AI.", "Colab: chạy Python miễn phí trên trình duyệt.", "Biến, kiểu dữ liệu, print, input; input trả về chuỗi.", "Nhờ AI giải thích, tự gõ lại để nhớ."] }
 ]
},
{
 p: 3, t: "Điều kiện và vòng lặp",
 g: "Dùng if – elif – else, vòng lặp for và while; viết chương trình xếp loại điểm và trò chơi đoán số.",
 pts: [
  "<b>if – elif – else</b>: chọn nhánh theo điều kiện. Thụt lề 4 dấu cách để chỉ khối lệnh bên trong.",
  "<b>for</b>: lặp qua từng phần tử hoặc một số lần định trước, ví dụ <code>for i in range(5)</code>.",
  "<b>while</b>: lặp khi điều kiện còn đúng; dùng <b>break</b> để thoát. Cẩn thận vòng lặp vô tận.",
  "Toán tử so sánh: <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&gt;=</code>; kết hợp bằng <code>and</code>, <code>or</code>, <code>not</code>."
 ],
 q: [
  ["<code>range(5)</code> tạo ra dãy nào?", ["0, 1, 2, 3, 4", "1, 2, 3, 4, 5"], 0, "range bắt đầu từ 0 và không gồm số cuối."],
  ["Điểm trung bình 7,75 với ngưỡng Giỏi ≥ 8, Khá ≥ 6,5 thì xếp loại?", ["Khá", "Giỏi"], 0, "7,75 < 8 nhưng ≥ 6,5."],
  ["Dùng lệnh nào để thoát khỏi vòng lặp while?", ["break", "stop"], 0, "break dừng vòng lặp ngay lập tức."]
 ],
 s: [
  { k: "cover", img: "tp10-1", alt: "Rô-bi đứng ở ngã ba đường với các biển chỉ dẫn phát sáng", ep: "Robi standing at a glowing three-way road junction with arrow signs lighting up depending on its choice, a looping roller-coaster track in the background, a Vietnamese teenage boy aged 17 cheering, dynamic theme-park style scene", sub: "Dạy máy biết chọn và biết làm đi làm lại." },
  { k: "code", title: "if – elif – else: xếp loại điểm", code: "diem = [8.5, 7.0, 9.0, 6.5]\ntb = sum(diem) / len(diem)\nif tb >= 8:\n    xep_loai = \"Giỏi\"\nelif tb >= 6.5:\n    xep_loai = \"Khá\"\nelif tb >= 5:\n    xep_loai = \"Trung bình\"\nelse:\n    xep_loai = \"Yếu\"\nprint(f\"Điểm trung bình: {tb:.2f} - {xep_loai}\")", out: "Điểm trung bình: 7.75 - Khá", note: "Ngưỡng xếp loại ở đây chỉ là ví dụ để luyện code." },
  { k: "concept", title: "Thụt lề là ngữ pháp", big: "Python dùng thụt lề (4 dấu cách) để biết lệnh nào nằm trong khối if, for, while.", ex: ["Lỗi hay gặp", "IndentationError: thụt lề sai. Kiểm tra các dòng trong cùng khối có thẳng hàng không."] },
  { k: "code", title: "Vòng lặp for", code: "for i in range(1, 6):\n    print(f\"{i} x 7 = {i * 7}\")\n\nmon_hoc = [\"Toán\", \"Văn\", \"Anh\"]\nfor mon in mon_hoc:\n    print(\"Ôn môn\", mon)", out: "1 x 7 = 7\n2 x 7 = 14\n3 x 7 = 21\n4 x 7 = 28\n5 x 7 = 35\nÔn môn Toán\nÔn môn Văn\nÔn môn Anh" },
  { k: "code", title: "Vòng lặp while: trò chơi đoán số", code: "import random\nbi_mat = random.randint(1, 20)\nlan = 0\nwhile True:\n    doan = int(input(\"Đoán số từ 1 đến 20: \"))\n    lan += 1\n    if doan < bi_mat:\n        print(\"Lớn hơn nữa!\")\n    elif doan > bi_mat:\n        print(\"Nhỏ hơn nữa!\")\n    else:\n        print(f\"Chính xác! Bạn đoán {lan} lần.\")\n        break", out: "Đoán số từ 1 đến 20: 10\nNhỏ hơn nữa!\nĐoán số từ 1 đến 20: 5\nLớn hơn nữa!\nĐoán số từ 1 đến 20: 7\nChính xác! Bạn đoán 3 lần.", note: "Kết quả mỗi lần chạy khác nhau vì số bí mật ngẫu nhiên." },
  { k: "try", q: "Vòng lặp <code>for i in range(3): print(i)</code> in ra gì?", opts: ["0 1 2", "1 2 3", "0 1 2 3"], a: 0, why: "range(3) gồm 0, 1, 2." },
  { k: "fact", text: "Chiến lược đoán số tốt nhất là luôn đoán số ở giữa khoảng còn lại. Với 1–20, bạn chắc chắn đoán đúng trong tối đa 5 lần. Đây là ý tưởng của thuật toán tìm kiếm nhị phân." },
  { k: "myth", items: [["while và for dùng thay nhau thoải mái.", "for khi biết trước số lần lặp hoặc lặp qua danh sách; while khi lặp đến khi một điều kiện xảy ra."]] },
  { k: "act", title: "Bài tập lập trình", items: ["Chương trình kiểm tra năm nhuận (chia hết cho 4 và không chia hết cho 100, hoặc chia hết cho 400).", "In bảng cửu chương từ 2 đến 9.", "Thêm giới hạn 5 lần vào trò chơi đoán số.", "Bí thì hỏi AI gợi ý từng bước, đừng xin code hoàn chỉnh."], link: ["Mở Google Colab", "https://colab.research.google.com"] },
  { k: "recap", items: ["if – elif – else chọn nhánh; thụt lề 4 dấu cách.", "for lặp qua dãy; range bắt đầu từ 0.", "while lặp theo điều kiện; break để thoát.", "Đoán số giữa = tìm kiếm nhị phân."] }
 ]
},
{
 p: 3, t: "Danh sách, hàm và tệp",
 g: "Dùng list, dict, viết hàm; đọc tệp CSV; đọc thông báo lỗi và gỡ lỗi cùng AI.",
 pts: [
  "<b>list</b>: danh sách có thứ tự, ví dụ <code>[8, 9, 7.5]</code>. <b>dict</b>: cặp khóa – giá trị, ví dụ <code>{\"An\": [8, 9]}</code>.",
  "<b>Hàm</b> (<code>def</code>) gói một việc để dùng lại nhiều lần, nhận đầu vào và <code>return</code> kết quả.",
  "Đọc tệp CSV bằng module <code>csv</code> (hoặc pandas ở buổi sau) để xử lý dữ liệu thật.",
  "Gỡ lỗi: đọc dòng cuối thông báo lỗi (tên lỗi + mô tả), xem số dòng, in giá trị biến ra kiểm tra."
 ],
 q: [
  ["<code>ds = [5, 8, 6]</code>, <code>ds[1]</code> bằng?", ["8", "5"], 0, "Chỉ số bắt đầu từ 0."],
  ["Từ khóa để khai báo hàm là?", ["def", "function"], 0, "def ten_ham(tham_so):"],
  ["Thông báo lỗi <code>KeyError: 'Hoa'</code> nghĩa là?", ["Trong dict không có khóa 'Hoa'", "Hết bộ nhớ"], 0, "Kiểm tra lại tên khóa."]
 ],
 s: [
  { k: "cover", img: "tp11-1", alt: "Rô-bi xếp dữ liệu vào các ngăn kéo có nhãn", ep: "Robi happily organizing glowing data cubes into a big wooden cabinet of labeled drawers, a Vietnamese teenage girl aged 17 handing it a box labeled only with a function symbol, warm library-like room", sub: "Sắp xếp dữ liệu gọn gàng và viết code dùng lại được." },
  { k: "code", title: "list và dict", code: "diem_toan = [8, 6.5, 9.5]\nprint(diem_toan[0], len(diem_toan))\ndiem_toan.append(7)\nprint(diem_toan)\n\nlop = {\"An\": 8.0, \"Bình\": 6.5}\nlop[\"Chi\"] = 9.5\nprint(lop[\"Chi\"], list(lop.keys()))", out: "8 3\n[8, 6.5, 9.5, 7]\n9.5 ['An', 'Bình', 'Chi']" },
  { k: "code", title: "Hàm: viết một lần, dùng nhiều lần", code: "def xep_loai(tb):\n    if tb >= 8:\n        return \"Giỏi\"\n    elif tb >= 6.5:\n        return \"Khá\"\n    elif tb >= 5:\n        return \"Trung bình\"\n    return \"Yếu\"\n\nlop = {\"An\": [8, 9, 7.5], \"Bình\": [6, 5.5, 7], \"Chi\": [9.5, 9, 10]}\nfor ten, ds in lop.items():\n    tb = sum(ds) / len(ds)\n    print(f\"{ten}: {tb:.2f} - {xep_loai(tb)}\")", out: "An: 8.17 - Giỏi\nBình: 6.17 - Trung bình\nChi: 9.50 - Giỏi" },
  { k: "code", title: "Đọc tệp CSV", code: "# Tệp diem.csv có dòng đầu: ten,toan,van\nimport csv\nwith open(\"diem.csv\", encoding=\"utf-8\") as f:\n    for dong in csv.DictReader(f):\n        tb = (float(dong[\"toan\"]) + float(dong[\"van\"])) / 2\n        print(dong[\"ten\"], round(tb, 2))", out: "An 7.5\nBình 7.25\nChi 9.0", note: "Trên Colab: bấm biểu tượng thư mục bên trái để tải tệp diem.csv lên." },
  { k: "table", title: "Các lỗi hay gặp", head: ["Lỗi", "Nghĩa", "Cách sửa"], rows: [["SyntaxError", "Sai cú pháp", "Thiếu dấu :, ngoặc, nháy"], ["IndentationError", "Thụt lề sai", "Căn thẳng các dòng cùng khối"], ["NameError", "Dùng biến chưa tạo", "Kiểm tra chính tả tên biến"], ["TypeError", "Sai kiểu dữ liệu", "Đổi kiểu bằng int(), float(), str()"], ["IndexError / KeyError", "Chỉ số hoặc khóa không tồn tại", "In ra danh sách, dict để kiểm tra"]] },
  { k: "split", img: "tp11-2", alt: "Học sinh dùng đèn pin soi tìm con bọ trong code", ep: "A Vietnamese teenage boy aged 17 using a flashlight to find a cute glowing bug creature hiding between lines of code on a giant screen, Robi holding a butterfly net ready, playful adventure lighting", title: "Quy trình gỡ lỗi", html: "<p><b>1.</b> Đọc dòng cuối thông báo lỗi. <b>2.</b> Xem số dòng bị lỗi. <b>3.</b> In giá trị biến ra kiểm tra. <b>4.</b> Bí thì hỏi AI: dán thông báo lỗi và đoạn code liên quan.</p><p class='big'>Đọc lỗi là kỹ năng, không phải thất bại.</p>" },
  { k: "try", q: "<code>lop = {\"An\": 8}</code> rồi <code>print(lop[\"an\"])</code>. Kết quả?", opts: ["KeyError vì phân biệt chữ hoa thường", "In ra 8"], a: 0, why: "\"an\" khác \"An\"." },
  { k: "myth", items: [["Code chạy không báo lỗi là đúng.", "Code có thể chạy mà cho kết quả sai (lỗi logic). Luôn thử với dữ liệu mà bạn biết trước kết quả."]] },
  { k: "act", title: "Mini dự án: sổ điểm của lớp", items: ["Tạo tệp CSV 10 học sinh, 3 môn (dữ liệu tự đặt, không dùng tên thật).", "Viết hàm tính điểm trung bình và hàm xếp loại.", "In học sinh điểm cao nhất, thấp nhất.", "Ghi lại 1 lỗi bạn gặp và cách sửa vào Phiếu 11."] },
  { k: "recap", items: ["list có thứ tự, dict là cặp khóa – giá trị.", "def tạo hàm, return trả kết quả.", "csv.DictReader đọc tệp CSV.", "Đọc dòng cuối thông báo lỗi trước tiên."] }
 ]
},
{
 p: 3, t: "Phân tích dữ liệu với pandas",
 g: "Dùng pandas đọc, lọc, sắp xếp, tính toán bảng dữ liệu; vẽ biểu đồ; tự động hóa báo cáo; nhờ AI viết code phân tích có kiểm tra.",
 pts: [
  "<b>pandas</b> là thư viện xử lý bảng dữ liệu: đọc CSV, Excel; lọc, sắp xếp, nhóm, tính trung bình.",
  "<b>DataFrame</b> là bảng có hàng và cột, giống trang tính Excel nhưng xử lý bằng code.",
  "<b>matplotlib</b> vẽ biểu đồ; biểu đồ cột để so sánh, biểu đồ đường để xem xu hướng theo thời gian.",
  "Tự động hóa: viết code một lần, mỗi tuần chỉ cần thay tệp dữ liệu là có báo cáo mới."
 ],
 q: [
  ["Lệnh tính trung bình cột toan của DataFrame df?", ["df[\"toan\"].mean()", "mean(df)"], 0, "Chọn cột rồi gọi .mean()."],
  ["So sánh điểm 5 bạn ở 3 môn, biểu đồ hợp nhất?", ["Biểu đồ cột", "Biểu đồ tròn"], 0, "Cột giúp so sánh giữa các nhóm."],
  ["Lọc các bạn có điểm Toán từ 8 trở lên?", ["df[df[\"toan\"] >= 8]", "df.toan(8)"], 0, "Đặt điều kiện trong dấu ngoặc vuông."]
 ],
 s: [
  { k: "cover", img: "tp12-1", alt: "Biểu đồ phát sáng mọc lên từ bảng tính", ep: "A big spreadsheet table on a desk with glowing 3D bar charts and line graphs growing out of it like plants, a Vietnamese teenage girl aged 17 conducting them with a pen, Robi watering the charts with a tiny can, magical analytics scene", sub: "Từ bảng số khô khan đến biểu đồ biết nói." },
  { k: "code", title: "Tạo và tính toán bảng điểm", code: "import pandas as pd\ndf = pd.DataFrame({\n    \"ten\": [\"An\", \"Bình\", \"Chi\", \"Dũng\", \"Em\"],\n    \"toan\": [8.0, 6.5, 9.5, 5.0, 7.5],\n    \"van\": [7.0, 8.0, 8.5, 6.0, 9.0],\n    \"anh\": [9.0, 7.0, 10.0, 6.5, 8.0],\n})\ndf[\"tb\"] = df[[\"toan\", \"van\", \"anh\"]].mean(axis=1).round(2)\nprint(df.sort_values(\"tb\", ascending=False))\nprint(\"Điểm TB môn Toán:\", df[\"toan\"].mean())", out: "    ten  toan  van   anh    tb\n2   Chi   9.5  8.5  10.0  9.33\n4    Em   7.5  9.0   8.0  8.17\n0    An   8.0  7.0   9.0  8.00\n1  Bình   6.5  8.0   7.0  7.17\n3  Dũng   5.0  6.0   6.5  5.83\nĐiểm TB môn Toán: 7.3" },
  { k: "table", title: "Lệnh pandas hay dùng", head: ["Việc", "Lệnh"], rows: [["Đọc tệp", "<code>pd.read_csv(\"diem.csv\")</code>"], ["Xem 5 dòng đầu", "<code>df.head()</code>"], ["Thống kê nhanh", "<code>df.describe()</code>"], ["Lọc", "<code>df[df[\"toan\"] >= 8]</code>"], ["Sắp xếp", "<code>df.sort_values(\"tb\")</code>"], ["Nhóm và tính", "<code>df.groupby(\"lop\")[\"tb\"].mean()</code>"], ["Ghi ra Excel", "<code>df.to_excel(\"bao_cao.xlsx\")</code>"]] },
  { k: "code", title: "Vẽ biểu đồ", code: "import matplotlib.pyplot as plt\ndf.plot(x=\"ten\", y=[\"toan\", \"van\", \"anh\"], kind=\"bar\")\nplt.title(\"Điểm 3 môn\")\nplt.ylabel(\"Điểm\")\nplt.show()", out: "(Biểu đồ cột: mỗi bạn 3 cột Toán, Văn, Anh)" },
  { k: "cards", title: "Chọn biểu đồ đúng", items: [["Cột", "So sánh giữa các nhóm"], ["Đường", "Xu hướng theo thời gian"], ["Phân tán", "Quan hệ giữa 2 đại lượng"], ["Tròn", "Tỉ lệ trong tổng, chỉ khi ít phần"]] },
  { k: "split", img: "tp12-2", alt: "Rô-bi tự động in báo cáo mỗi tuần trong khi học sinh nghỉ ngơi", ep: "Robi operating a cute printing machine that automatically produces weekly report pages with charts, a calendar flipping pages behind, a relaxed Vietnamese teenage boy aged 17 sipping juice and smiling, sunny room, his mother, a Vietnamese small-business owner about 40 in a smart blouse, looking at the report impressed", title: "Tự động hóa báo cáo", html: "<p class='big'>Viết code một lần. Mỗi tuần chỉ thay tệp dữ liệu, chạy lại là có <b>bảng và biểu đồ mới</b>.</p><p>Đây là cách người đi làm tiết kiệm hàng giờ mỗi tuần.</p>" },
  { k: "table", title: "Nhờ AI viết code phân tích", head: ["Bước", "Việc"], rows: [["Mô tả dữ liệu", "Tên cột, kiểu dữ liệu, vài dòng mẫu (không dữ liệu thật của người khác)"], ["Nêu yêu cầu", "Muốn tính gì, vẽ gì"], ["Chạy thử", "Trên dữ liệu nhỏ biết trước kết quả"], ["Kiểm tra", "Đối chiếu vài con số bằng tay"]] },
  { k: "try", q: "Muốn biết điểm trung bình của từng lớp trong bảng có cột lop và tb, dùng lệnh nào?", opts: ["df.groupby(\"lop\")[\"tb\"].mean()", "df.sort_values(\"lop\")"], a: 0, why: "groupby nhóm theo lớp rồi tính trung bình." },
  { k: "act", title: "Mini dự án", items: ["Dùng sổ điểm ở buổi 11 (hoặc dữ liệu mở như thời tiết, dân số).", "Tính 3 con số đáng chú ý.", "Vẽ 1 biểu đồ phù hợp, đặt tiêu đề và tên trục.", "Viết 3 câu nhận xét từ biểu đồ."], link: ["Mở Google Colab", "https://colab.research.google.com"] },
  { k: "recap", items: ["pandas xử lý bảng: đọc, lọc, sắp xếp, nhóm.", "matplotlib vẽ biểu đồ; chọn loại theo mục đích.", "Code một lần, báo cáo tự động mỗi tuần.", "Code AI viết phải chạy thử và kiểm tra."] }
 ]
},
{
 p: 3, t: "Huấn luyện mô hình đầu tiên",
 g: "Dùng scikit-learn huấn luyện mô hình hồi quy và phân loại; chia tập học – kiểm tra; đo độ chính xác; nhận ra giới hạn.",
 pts: [
  "<b>scikit-learn</b> là thư viện học máy cho Python, có sẵn trên Colab.",
  "<b>Hồi quy</b>: dự đoán một con số (điểm, giá nhà). <b>Phân loại</b>: dự đoán một nhóm (loài hoa, thư rác hay không).",
  "Quy trình: chia dữ liệu → <code>fit</code> (huấn luyện) → <code>predict</code> (dự đoán) → đánh giá trên tập kiểm tra.",
  "Mô hình chỉ tốt bằng dữ liệu của nó; dự đoán ngoài phạm vi dữ liệu đã học dễ sai."
 ],
 q: [
  ["Dự đoán giá nhà là bài toán gì?", ["Hồi quy", "Phân loại"], 0, "Kết quả là một con số."],
  ["Lệnh huấn luyện mô hình trong scikit-learn?", [".fit()", ".print()"], 0, "model.fit(X_train, y_train)."],
  ["Mô hình học từ học sinh học 1–6 giờ/ngày. Dự đoán cho người học 20 giờ/ngày có tin được không?", ["Không, vì ngoài phạm vi dữ liệu", "Có, mô hình luôn đúng"], 0, "Ngoại suy rất dễ sai."]
 ],
 s: [
  { k: "cover", img: "tp13-1", alt: "Học sinh cho Rô-bi ăn dữ liệu, Rô-bi lớn lên thông minh hơn", ep: "A Vietnamese teenage girl aged 17 feeding glowing data cubes into Robi like snacks while a progress gauge on Robi's chest fills up, a holographic decision tree sprouting above Robi's head, playful futuristic lab, a Vietnamese university AI researcher woman about 35 in a lab coat guiding her with a tablet", sub: "Tự tay huấn luyện một mô hình học máy thật." },
  { k: "cards", title: "Hai bài toán chính", items: [["Hồi quy", "Dự đoán con số: điểm thi, giá nhà, nhiệt độ ngày mai"], ["Phân loại", "Dự đoán nhóm: loài hoa, thư rác hay không, đỗ hay trượt"]] },
  { k: "code", title: "Hồi quy: giờ học → điểm", code: "from sklearn.linear_model import LinearRegression\ngio_hoc = [[1], [2], [3], [4], [5], [6]]\ndiem = [4.5, 5.5, 6.0, 7.0, 8.0, 8.5]\nm = LinearRegression().fit(gio_hoc, diem)\nprint(\"Học 7 giờ, dự đoán điểm:\", round(m.predict([[7]])[0], 1))", out: "Học 7 giờ, dự đoán điểm: 9.4", note: "Dữ liệu tự đặt, chỉ để luyện. Thử dự đoán cho 20 giờ để thấy mô hình “vượt” thang điểm 10." },
  { k: "code", title: "Phân loại: nhận biết loài hoa iris", code: "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\n\nX, y = load_iris(return_X_y=True)\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.3, random_state=42)\nmodel = DecisionTreeClassifier(max_depth=3, random_state=42)\nmodel.fit(X_train, y_train)\ndu_doan = model.predict(X_test)\nprint(\"Độ chính xác:\", accuracy_score(y_test, du_doan))", out: "Độ chính xác: 1.0", note: "Bộ iris có 150 bông hoa, 3 loài, 4 số đo cánh. Ở đây 105 bông để học, 45 bông để kiểm tra." },
  { k: "concept", title: "Cây quyết định", big: "Mô hình hỏi lần lượt các câu “có – không” để đi tới kết luận, giống trò 20 câu hỏi.", ex: ["Ví dụ", "Cánh hoa ngắn hơn 2,5 cm? → Loài A. Nếu không: cánh hoa rộng hơn 1,7 cm? → Loài C, còn lại loài B."], n: "Cây quyết định dễ giải thích nên phù hợp để dạy. Có thể in cây bằng sklearn.tree.plot_tree(model) để học sinh xem." },
  { k: "fact", text: "Bộ dữ liệu hoa iris được nhà thống kê Ronald Fisher dùng trong một bài báo năm 1936 và đến nay vẫn là bài tập “nhập môn” kinh điển của học máy." },
  { k: "split", img: "tp13-2", alt: "Rô-bi dự đoán điểm 15/10, học sinh bật cười", ep: "Robi proudly holding up a scoreboard showing an impossible giant glowing number far above the top of the scale, a Vietnamese teenage boy aged 17 laughing and facepalming, a chart line shooting off the edge of the board, comedic classroom scene", title: "Giới hạn của mô hình", html: "<p class='big'>Hỏi mô hình “học 20 giờ được mấy điểm”, nó có thể trả lời <b>trên 10 điểm</b>.</p><p>Mô hình không biết thang điểm; nó chỉ kéo dài đường thẳng. Dự đoán ngoài phạm vi dữ liệu rất dễ sai.</p>" },
  { k: "try", q: "Độ chính xác trên tập huấn luyện 100%, trên tập kiểm tra 70%. Nên làm gì?", opts: ["Nghi quá khớp: giảm độ phức tạp, thêm dữ liệu", "Mô hình hoàn hảo, dùng luôn"], a: 0, why: "Chênh lệch lớn là dấu hiệu quá khớp." },
  { k: "act", title: "Thử nghiệm", items: ["Chạy 2 đoạn code trên Colab.", "Đổi max_depth thành 1, 2, 5; ghi độ chính xác vào Phiếu 13.", "Đổi test_size thành 0.5; nhận xét.", "Thử dự đoán điểm cho 20 giờ học và giải thích vì sao sai."], link: ["Mở Google Colab", "https://colab.research.google.com"] },
  { k: "recap", items: ["scikit-learn: fit để học, predict để đoán.", "Hồi quy đoán số, phân loại đoán nhóm.", "Luôn đánh giá trên tập kiểm tra.", "Ngoài phạm vi dữ liệu, mô hình dễ sai."] }
 ]
},
{
 p: 4, t: "Đạo đức, pháp luật và an toàn",
 g: "Nắm các nguyên tắc đạo đức AI, quy định pháp luật Việt Nam liên quan, bảo vệ dữ liệu cá nhân và phòng lừa đảo dùng AI.",
 pts: [
  "Nguyên tắc AI có trách nhiệm: <b>công bằng</b>, <b>minh bạch</b>, <b>riêng tư</b>, <b>an toàn</b>, <b>con người giám sát</b>.",
  "Luật Trí tuệ nhân tạo (số 134/2025/QH15) có hiệu lực từ 01/3/2026: cấm dùng AI để lừa dối, thao túng, tạo nội dung giả mạo gây nguy hại; nội dung âm thanh, hình ảnh, video do AI tạo phải có dấu hiệu nhận biết.",
  "Luật Bảo vệ dữ liệu cá nhân (số 91/2025/QH15) có hiệu lực từ 01/01/2026: dữ liệu cá nhân phải được xử lý đúng mục đích, có sự đồng ý.",
  "Phòng lừa đảo: không cung cấp mã OTP, mật khẩu; xác minh lại qua kênh khác khi thấy cuộc gọi video, giọng nói nhờ chuyển tiền."
 ],
 q: [
  ["Luật Trí tuệ nhân tạo của Việt Nam có hiệu lực từ?", ["01/3/2026", "01/01/2020"], 0, "Luật số 134/2025/QH15."],
  ["Dùng AI ghép mặt bạn học vào ảnh để bêu xấu là?", ["Vi phạm pháp luật và đạo đức", "Trò đùa vô hại"], 0, "Xâm phạm danh dự, quyền hình ảnh của người khác."],
  ["Người quen gọi video nhờ chuyển tiền gấp, hình hơi giật. Nên?", ["Cúp máy, gọi lại số quen để xác minh", "Chuyển ngay"], 0, "Cuộc gọi deepfake là thủ đoạn lừa đảo phổ biến."]
 ],
 s: [
  { k: "cover", img: "tp14-1", alt: "Rô-bi cầm cán cân công lý giữa hai nhóm người", ep: "Robi holding a glowing balance scale of justice in a grand modern hall, on each side groups of diverse Vietnamese teenagers watching, a shield of light protecting them, solemn but hopeful cinematic lighting, a Vietnamese lawyer woman about 45 in a dark suit and a civics teacher man about 50 holding a law book standing beside the students", sub: "Sức mạnh lớn đi cùng trách nhiệm lớn." },
  { k: "cards", title: "5 nguyên tắc AI có trách nhiệm", items: [["Công bằng", "Không phân biệt đối xử vì giới tính, vùng miền, hoàn cảnh"], ["Minh bạch", "Cho biết khi nào AI được dùng và vì sao ra quyết định"], ["Riêng tư", "Bảo vệ dữ liệu cá nhân"], ["An toàn", "Không gây hại cho người dùng và xã hội"], ["Con người giám sát", "Quyết định quan trọng phải có người chịu trách nhiệm"]] },
  { k: "table", title: "Pháp luật Việt Nam cần biết", head: ["Văn bản", "Hiệu lực", "Điểm chính"], rows: [["Luật Trí tuệ nhân tạo 134/2025/QH15", "01/3/2026", "Cấm dùng AI lừa dối, thao túng, tạo nội dung giả mạo gây nguy hại; nội dung AI tạo phải có dấu hiệu nhận biết"], ["Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15", "01/01/2026", "Xử lý dữ liệu cá nhân đúng mục đích, có sự đồng ý của chủ thể"]], note: "Tóm tắt để học tập; khi cần áp dụng, đọc văn bản chính thức.", n: "Nguồn tham khảo: thuvienphapluat.vn, luatvietnam.vn, báo Nhân Dân. Luật Trí tuệ nhân tạo được Quốc hội thông qua ngày 10/12/2025." },
  { k: "split", img: "tp14-2", alt: "Cuộc gọi video giả người thân, học sinh nghi ngờ", ep: "A Vietnamese teenage girl aged 17 holding a phone showing a video call from a cartoon relative whose face has glitchy pixel edges, she frowns suspiciously with a shield icon glowing, Robi beside her holding a sign with a phone and check mark icon, her father, a Vietnamese technician about 44 in a work jacket, leaning in to look at the screen", title: "Lừa đảo bằng AI", html: "<p>Giả giọng, giả mặt người thân qua cuộc gọi video; tin nhắn “trúng thưởng”; trang web giả ngân hàng.</p><p class='big'><b>Cúp máy, gọi lại số quen, hỏi câu bí mật gia đình.</b> Không bao giờ đưa mã OTP.</p>" },
  { k: "story", text: "Một bạn dùng ứng dụng AI ghép mặt một bạn nữ cùng lớp vào ảnh nhạy cảm rồi gửi vào nhóm chat “cho vui”.", q: "Hành vi này sai ở đâu?", a: "Xâm phạm danh dự, nhân phẩm, quyền hình ảnh và dữ liệu cá nhân của người khác; có thể bị xử lý theo pháp luật. Người nhận không chia sẻ tiếp, báo giáo viên và lưu bằng chứng.", n: "Xử lý nhạy cảm, tránh đi sâu vào chi tiết. Nhấn mạnh: nạn nhân không có lỗi; cần báo người lớn tin cậy." },
  { k: "concept", title: "Bản quyền và AI", big: "Tác phẩm của người khác (bài viết, ảnh, nhạc) được bảo hộ. Dùng phải xin phép hoặc trích dẫn đúng.", ex: ["Với nội dung AI tạo", "Không tạo nội dung mạo danh người thật, không sao chép phong cách để giả làm tác phẩm của người khác; ghi rõ nội dung có AI hỗ trợ."] },
  { k: "try", q: "Bạn tạo ảnh bằng AI để đăng mạng xã hội. Nên làm gì?", opts: ["Ghi rõ “Ảnh tạo bằng AI”", "Nói là ảnh tự chụp"], a: 0, why: "Minh bạch, đúng tinh thần quy định gắn nhãn nội dung AI." },
  { k: "myth", items: [["Đăng lên mạng là của chung, ai dùng cũng được.", "Ảnh, bài viết trên mạng vẫn có chủ sở hữu và được pháp luật bảo vệ."], ["Ẩn danh trên mạng thì không ai biết.", "Hành vi trên mạng để lại dấu vết và có thể bị truy cứu."]] },
  { k: "act", title: "Tranh biện", items: ["Chủ đề: “Trường học nên cấm hoàn toàn AI” — hai đội ủng hộ và phản đối.", "Mỗi đội chuẩn bị 3 luận điểm, có dẫn chứng.", "Kết thúc: cả lớp cùng viết bộ quy tắc dùng AI cho lớp mình."] },
  { k: "recap", items: ["5 nguyên tắc: công bằng, minh bạch, riêng tư, an toàn, con người giám sát.", "Luật Trí tuệ nhân tạo hiệu lực 01/3/2026; Luật Bảo vệ dữ liệu cá nhân hiệu lực 01/01/2026.", "Không mạo danh, không xâm phạm hình ảnh người khác.", "Phòng lừa đảo: xác minh qua kênh khác, không đưa OTP."] }
 ]
},
{
 p: 4, t: "AI và nghề nghiệp tương lai",
 g: "Hiểu AI đang thay đổi công việc thế nào; biết các ngành học, nghề nghiệp liên quan AI; lập kế hoạch phát triển kỹ năng và hồ sơ năng lực.",
 pts: [
  "AI tự động hóa <b>nhiệm vụ</b> nhiều hơn thay thế cả <b>nghề</b>: việc lặp lại giảm, việc cần phán đoán, giao tiếp, sáng tạo tăng giá trị.",
  "Nghề gắn với AI: kỹ sư AI, khoa học dữ liệu, kỹ sư dữ liệu, an toàn thông tin, thiết kế sản phẩm số; và mọi nghề “+ AI” (bác sĩ, kế toán, giáo viên, marketing biết dùng AI).",
  "Kỹ năng bền vững: <b>tư duy phản biện</b>, <b>giải quyết vấn đề</b>, <b>giao tiếp</b>, <b>học suốt đời</b>, cùng nền tảng Toán, Tin, Tiếng Anh.",
  "Bắt đầu hồ sơ năng lực (portfolio): dự án nhỏ, sản phẩm, chứng chỉ miễn phí, đóng góp cộng đồng."
 ],
 q: [
  ["AI thường tác động lên điều gì trước?", ["Các nhiệm vụ lặp lại trong một nghề", "Xóa sổ ngay mọi nghề"], 0, "Nghề thay đổi thành phần công việc."],
  ["Kỹ năng nào khó bị AI thay thế?", ["Phán đoán, giao tiếp, chịu trách nhiệm", "Gõ lại dữ liệu theo mẫu"], 0, "Đây là thế mạnh của con người."],
  ["Portfolio là gì?", ["Bộ sản phẩm, dự án chứng minh năng lực", "Bảng điểm học bạ"], 0, "Cho người khác thấy bạn làm được gì."]
 ],
 s: [
  { k: "cover", img: "tp15-1", alt: "Học sinh đứng trước nhiều cánh cửa nghề nghiệp, mỗi cửa có một người làm nghề chào đón", ep: "A hopeful Vietnamese teenage boy aged 18 standing in a bright corridor of many glowing doors, beside each door a Vietnamese professional of a different age and job welcomes him: a doctor woman about 40 in a white coat, a software engineer man about 30 with a laptop, a graphic designer woman about 28 with a drawing tablet, an agricultural engineer man about 45 with a drone, an automotive technician woman about 33 in overalls, Robi holding a lantern lighting the way, inspiring cinematic scene", sub: "Không phải AI hay con người, mà là con người biết dùng AI." },
  { k: "concept", title: "Nhiệm vụ, không phải cả nghề", big: "Mỗi nghề gồm nhiều nhiệm vụ. AI làm thay những nhiệm vụ lặp lại; con người tập trung vào phần cần phán đoán và trách nhiệm.", ex: ["Ví dụ kế toán", "AI đọc hóa đơn, nhập liệu. Kế toán viên kiểm tra, phân tích, tư vấn cho doanh nghiệp."] },
  { k: "cards", title: "Nghề trực tiếp làm AI", items: [["Kỹ sư AI, học máy", "Xây dựng và huấn luyện mô hình"], ["Khoa học dữ liệu", "Phân tích dữ liệu, tìm ra hiểu biết mới"], ["Kỹ sư dữ liệu", "Xây hệ thống thu thập, lưu trữ dữ liệu"], ["An toàn thông tin", "Bảo vệ hệ thống, chống tấn công"], ["Thiết kế sản phẩm số", "Làm AI dễ dùng, hữu ích"], ["Chuyên gia đạo đức, chính sách AI", "Đảm bảo AI an toàn, công bằng"]] },
  { k: "table", title: "Mọi nghề + AI", head: ["Nghề", "AI giúp gì", "Con người vẫn làm"], rows: [["Bác sĩ", "Đọc ảnh chụp, gợi ý chẩn đoán", "Thăm khám, quyết định điều trị, đồng cảm"], ["Giáo viên", "Soạn bài, chấm bài trắc nghiệm", "Truyền cảm hứng, hiểu từng học sinh"], ["Marketing", "Viết nháp nội dung, phân tích số liệu", "Chiến lược, hiểu khách hàng"], ["Ngân hàng", "Phát hiện giao dịch bất thường", "Thẩm định, tư vấn, chịu trách nhiệm"]] },
  { k: "split", img: "tp15-2", alt: "Học sinh xây chiếc cầu từ các khối kỹ năng", ep: "A Vietnamese teenage girl aged 17 building a glowing bridge across a gap using blocks with simple icons (lightbulb, speech bubble, book, puzzle), Robi passing her the next block, sunrise background, inspiring, a mentor, a Vietnamese factory automation technician man about 38 in a work uniform, giving a thumbs up from the other side", title: "Kỹ năng bền vững", html: "<p><b>Tư duy phản biện</b> · <b>Giải quyết vấn đề</b> · <b>Giao tiếp, hợp tác</b> · <b>Học suốt đời</b></p><p class='big'>Nền tảng Toán, Tin học, Tiếng Anh mở cửa cho hầu hết ngành liên quan AI.</p>" },
  { k: "cards", title: "Ngành học liên quan ở đại học", items: [["Khoa học máy tính", "Nền tảng lập trình, thuật toán"], ["Trí tuệ nhân tạo", "Nhiều trường đã mở ngành riêng"], ["Khoa học dữ liệu", "Thống kê + lập trình + lĩnh vực ứng dụng"], ["An toàn thông tin", "Bảo mật hệ thống"]], n: "Tên ngành và tổ hợp xét tuyển thay đổi theo từng năm; hướng dẫn học sinh tra cứu đề án tuyển sinh chính thức của từng trường." },
  { k: "try", q: "Cách nào giúp bạn nổi bật khi xin học bổng, việc làm?", opts: ["Portfolio có dự án thật bạn tự làm", "Chỉ liệt kê “biết dùng ChatGPT”"], a: 0, why: "Sản phẩm thật chứng minh năng lực rõ nhất." },
  { k: "myth", items: [["AI sẽ lấy hết việc làm.", "AI thay đổi công việc; xuất hiện cả nghề mới. Người biết dùng AI có lợi thế."], ["Muốn làm AI phải là thiên tài Toán.", "Có nhiều vai trò: dữ liệu, sản phẩm, đạo đức, ứng dụng. Kiên trì học quan trọng hơn năng khiếu."]] },
  { k: "act", title: "Kế hoạch 1 năm của bạn", items: ["Chọn 1 lĩnh vực bạn quan tâm.", "Tìm hiểu 3 nhiệm vụ trong nghề đó AI đang hỗ trợ.", "Đặt mục tiêu: 1 dự án, 1 khóa học miễn phí, 1 kỹ năng mềm.", "Ghi vào Phiếu 15, chia sẻ với bạn cùng nhóm."] },
  { k: "recap", items: ["AI thay đổi nhiệm vụ, không xóa sổ ngay cả nghề.", "Có nghề làm AI và mọi nghề + AI.", "Kỹ năng bền vững + nền tảng Toán, Tin, Anh.", "Bắt đầu portfolio từ hôm nay."] }
 ]
},
{
 p: 4, t: "Dự án cuối khóa",
 g: "Làm một sản phẩm giải quyết vấn đề thật bằng AI hoặc Python; trình bày, phản biện và đánh giá theo tiêu chí.",
 pts: [
  "Nhóm 3–4 bạn, chọn 1 trong 4 hướng: <b>phân tích dữ liệu</b>, <b>mô hình học máy</b>, <b>trợ lý học tập</b> (bộ prompt + quy trình), <b>chiến dịch truyền thông AI an toàn</b>.",
  "Quy trình: vấn đề → dữ liệu → giải pháp → thử nghiệm → đánh giá → trình bày.",
  "Trình bày 7 phút + 3 phút hỏi đáp; nêu rõ phần nào có AI hỗ trợ.",
  "Chấm theo 5 tiêu chí: vấn đề, giải pháp kỹ thuật, kiểm chứng – đánh giá, đạo đức – an toàn, trình bày."
 ],
 q: [
  ["Bước đầu tiên của dự án là?", ["Xác định vấn đề thật và người hưởng lợi", "Chọn công cụ AI xịn nhất"], 0, "Vấn đề rõ thì giải pháp mới đúng."],
  ["Dự án dùng dữ liệu bạn học cần lưu ý gì?", ["Ẩn danh, có sự đồng ý", "Đăng công khai tên và điểm"], 0, "Bảo vệ dữ liệu cá nhân."],
  ["Khi trình bày, phần dùng AI cần?", ["Nêu rõ công cụ và mục đích", "Giấu đi"], 0, "Minh bạch là tiêu chí chấm điểm."]
 ],
 s: [
  { k: "cover", img: "tp16-1", alt: "Nhóm học sinh trình bày dự án trước hội đồng", ep: "A team of four Vietnamese teenagers aged 17 in white school shirts presenting their AI project on a big screen with charts at a school science fair, a judging panel of Vietnamese adults (an IT engineer woman about 35, a university lecturer man about 55, an entrepreneur woman about 42) applauding, Robi holding a trophy, festive lighting with confetti", sub: "Từ ý tưởng đến sản phẩm thật." },
  { k: "cards", title: "4 hướng dự án", items: [["Phân tích dữ liệu", "Ví dụ: thói quen ngủ và học tập của khối 11 (khảo sát ẩn danh)"], ["Mô hình học máy", "Ví dụ: phân loại rác qua ảnh, dự đoán lượng nước tiêu thụ"], ["Trợ lý học tập", "Bộ prompt + quy trình ôn thi cho một môn, đã thử nghiệm"], ["Truyền thông AI an toàn", "Chuỗi video, poster chống lừa đảo deepfake cho phụ huynh"]] },
  { k: "steps", title: "Quy trình 6 bước", items: [["Vấn đề", "Ai gặp khó? Khó ở đâu?"], ["Dữ liệu", "Lấy ở đâu, có hợp pháp không?"], ["Giải pháp", "Công cụ, mô hình, quy trình"], ["Thử nghiệm", "Chạy thử với người dùng thật"], ["Đánh giá", "Đo hiệu quả, nêu giới hạn"], ["Trình bày", "7 phút + hỏi đáp"]] },
  { k: "table", title: "Tiêu chí chấm (tối đa 20 điểm)", head: ["Tiêu chí", "Điểm", "Mức tốt nhất"], rows: [["Vấn đề", "4", "Vấn đề thật, có khảo sát người dùng"], ["Giải pháp kỹ thuật", "4", "Chạy được, giải thích được cách làm"], ["Kiểm chứng, đánh giá", "4", "Có số liệu đánh giá và nêu giới hạn"], ["Đạo đức, an toàn", "4", "Dữ liệu ẩn danh, minh bạch việc dùng AI"], ["Trình bày", "4", "Rõ, đúng giờ, trả lời phản biện tốt"]] },
  { k: "split", img: "tp16-2", alt: "Nhóm học sinh làm việc bên bảng kế hoạch đầy giấy note", ep: "Four Vietnamese teenagers brainstorming around a glass wall covered with colorful sticky notes and sketches, one pointing at a timeline, Robi sticking a note on top, energetic teamwork in a modern school makerspace, their mentor, a Vietnamese teacher woman about 33 in smart casual clothes, listening with a notebook", title: "Làm việc nhóm hiệu quả", html: "<p>Phân vai: trưởng nhóm, phụ trách dữ liệu, phụ trách kỹ thuật, phụ trách trình bày.</p><p class='big'>Họp ngắn mỗi tuần: đã làm gì, sẽ làm gì, đang vướng gì.</p>" },
  { k: "lights", title: "Kiểm tra an toàn trước khi nộp", items: [["r", "Không được có", "Tên thật, ảnh mặt, điểm số của người khác khi chưa đồng ý; nội dung mạo danh."], ["y", "Phải ghi rõ", "Phần có AI hỗ trợ, nguồn dữ liệu, giới hạn của sản phẩm."], ["g", "Nên có", "Thử nghiệm với người dùng thật, kế hoạch cải tiến."]] },
  { k: "quote", label: "Lời nhắn cuối khóa", text: "AI là công cụ mạnh nhất thế hệ các bạn có trong tay. Hãy dùng nó để học sâu hơn, làm tốt hơn, và tử tế hơn." },
  { k: "recap", title: "Cả khóa, bạn đã học", items: ["Hiểu AI tận gốc: học máy, dữ liệu, mô hình, chatbot.", "Dùng AI để học: prompt nâng cao, ôn thi khoa học, kiểm chứng, viết có trách nhiệm.", "Python: biến, điều kiện, vòng lặp, hàm, pandas, scikit-learn.", "AI có trách nhiệm: đạo đức, pháp luật, an toàn, nghề nghiệp tương lai."] }
 ]
}
);
