/* Dữ liệu khóa AI cho Tiểu học (6–11 tuổi): 16 buổi, mỗi buổi 40 phút.
   Phần 1: buổi 1–8 (file này). Phần 2: buổi 9–16 (lessons-tieu-hoc-2.js).
   Mỗi slide có thể có: n = ghi chú cho người dạy (kiến thức nền, câu hỏi gợi mở).
   Ảnh: assets/img/thXX-N.jpg; ep = mô tả cảnh tiếng Anh để tạo ảnh (xem docs/prompt-anh-tieu-hoc.csv). */
window.AIEDU_LEVEL = {
key: "plt-aiedu-tieu-hoc-v1",
level: "Tiểu học",
age: "6–11 tuổi",
parts: {
  1: { cls: "p1", name: "Phần 1 · Máy biết học" },
  2: { cls: "p2", name: "Phần 2 · Tư duy như máy tính" },
  3: { cls: "p3", name: "Phần 3 · Trò chuyện với AI an toàn" },
  4: { cls: "p4", name: "Phần 4 · Sáng tạo cùng AI" }
},
gym: {
  tag: "Buổi 10 · Hỏi AI thật rõ",
  title: "Phòng tập hỏi AI",
  intro: "Gõ câu em muốn hỏi AI. Máy chấm xem câu hỏi đã đủ 3 phần chưa. Bài chấm chạy ngay trên máy, không gửi đi đâu.",
  unit: "phần",
  checks: [
    ["Em là ai?", "Cho AI biết em là ai", "(em là|tôi là|con là|mình là|học sinh|lớp \\d|\\d tuổi)", "Thêm: “Em là học sinh lớp 3.”"],
    ["Em cần gì?", "Nói rõ việc em muốn AI làm", "(kể|giải thích|vẽ|đố|gợi ý|viết|tìm|so sánh|cho em|hãy|dạy)", "Thêm: “Hãy kể chuyện về chú voi.”"],
    ["Em muốn thế nào?", "Ngắn hay dài, vui hay nghiêm túc", "(ngắn|vui|dễ hiểu|\\d+ câu|đơn giản|chậm|kiểu|màu|có hình|từ dễ)", "Thêm: “Kể ngắn 5 câu, thật vui.”"]
  ],
  samples: ["Kể chuyện.", "Em là học sinh lớp 3. Hãy kể chuyện về chú voi con đi học. Kể ngắn 5 câu, thật vui, dùng từ dễ hiểu.", "Giải thích cầu vồng.", "Đố em một câu đố."]
},
games: [
  { tag: "Buổi 1", title: "Máy làm theo lệnh hay máy biết học?",
    choices: [["1", "Máy biết học (AI)"], ["0", "Máy làm theo lệnh"]],
    items: [
      ["Cái quạt điện", "0", "Quạt chỉ chạy khi bấm nút, không học gì."],
      ["Điện thoại mở khóa bằng khuôn mặt", "1", "Điện thoại đã học nhận ra khuôn mặt chủ nhân."],
      ["Đèn pin", "0", "Bật là sáng, tắt là tối."],
      ["Loa thông minh nghe hiểu giọng nói", "1", "Loa đã học từ rất nhiều giọng nói."],
      ["Nồi cơm điện thường", "0", "Nấu theo nhiệt độ cài sẵn."],
      ["Ứng dụng dịch tiếng Anh", "1", "Máy dịch học từ rất nhiều câu văn."],
      ["Máy tính bỏ túi", "0", "Chỉ làm phép tính theo nút bấm."],
      ["Camera đếm xe trên đường", "1", "Camera đã học cách nhận ra ô tô, xe máy."]
    ] },
  { tag: "Buổi 12", title: "Bí mật hay không?",
    choices: [["r", "Đỏ · không bao giờ nói", "l-r"], ["y", "Vàng · hỏi bố mẹ trước", "l-y"], ["g", "Xanh · thoải mái", "l-g"]],
    items: [
      ["Địa chỉ nhà em", "r", "Người lạ biết địa chỉ có thể tìm tới nhà em."],
      ["Con vật em thích nhất", "g", "Không phải thông tin riêng."],
      ["Mật khẩu máy tính bảng", "r", "Mật khẩu chỉ em và bố mẹ biết."],
      ["Ảnh chụp chung với các bạn", "y", "Có mặt bạn khác, phải hỏi bố mẹ trước."],
      ["Tên trường và lớp em học", "r", "Người lạ có thể tìm tới trường em."],
      ["Câu hỏi: vì sao trời mưa?", "g", "Câu hỏi bài học, thoải mái hỏi."],
      ["Số điện thoại của bố", "r", "Không bao giờ nói cho người lạ hay AI."],
      ["Chuyện nhà em hôm qua", "y", "Chuyện riêng trong nhà, hỏi bố mẹ trước."]
    ] }
],
lessons: [
{
 p: 1, t: "Máy móc quanh em",
 g: "Phân biệt máy làm theo lệnh và máy biết học (AI); kể được 3 ví dụ AI quanh em.",
 pts: [
  "Máy móc giúp con người làm việc nhanh hơn, đỡ mệt hơn: quạt, nồi cơm, máy giặt, điện thoại.",
  "Có máy <b>chỉ làm theo lệnh</b> (bấm nút là chạy). Có máy <b>biết học từ ví dụ</b>: đó là trí tuệ nhân tạo, gọi tắt là <b>AI</b>.",
  "AI ở quanh em: điện thoại mở khóa bằng khuôn mặt, loa nghe hiểu giọng nói, máy dịch, gợi ý phim hoạt hình.",
  "AI là công cụ do con người làm ra. AI không có cảm xúc như người và cũng có lúc nhầm."
 ],
 q: [
  ["Máy nào biết học từ ví dụ?", ["Cái quạt", "Điện thoại mở khóa bằng khuôn mặt", "Cái đèn pin"], 1, "Điện thoại đã học nhận ra khuôn mặt của chủ nhân."],
  ["AI là viết tắt của từ nào?", ["Trí tuệ nhân tạo", "Âm nhạc vui"], 0, "AI = Artificial Intelligence = Trí tuệ nhân tạo."],
  ["AI có biết buồn, vui như người không?", ["Có", "Không"], 1, "AI là chương trình máy tính, không có cảm xúc."]
 ],
 s: [
  { k: "cover", img: "th01-1", alt: "Hai bạn nhỏ ngạc nhiên thấy đồ vật trong nhà phát sáng như có phép thuật", ep: "Two little kids gasping in wonder in a cozy Vietnamese living room as everyday machines glow with magical light: a fan, a rice cooker, a smartphone and a smart speaker, Robi peeking from behind a sofa", sub: "Khám phá những chiếc máy thông minh quanh em." },
  { k: "concept", title: "Máy móc giúp gì cho em?", big: "Máy móc giúp con người làm việc nhanh hơn và đỡ mệt hơn.", ex: ["Ví dụ ở nhà em", "Nồi cơm nấu cơm, máy giặt giặt đồ, quạt làm mát, tủ lạnh giữ thức ăn tươi."], n: "Hỏi lớp: ở nhà em có những máy gì? Ghi lên bảng 8–10 tên máy để dùng lại ở slide sau." },
  { k: "compare", title: "Máy làm theo lệnh và máy biết học", a: ["Làm theo lệnh", "Bấm nút là chạy, lần nào cũng giống nhau.<br>Ví dụ: quạt, đèn pin, máy tính bỏ túi."], b: ["Biết học (AI)", "Xem thật nhiều ví dụ rồi tự đoán.<br>Ví dụ: điện thoại nhận ra mặt chủ nhân."], n: "Dùng danh sách máy trên bảng, cả lớp xếp vào 2 cột. Gợi ý: máy nào “nhận ra”, “nghe hiểu”, “đoán” là AI." },
  { k: "split", img: "th01-2", alt: "Rô-bi đọc thật nhiều sách ảnh để học", ep: "Robi sitting on a pile of picture books, reading eagerly with sparkling eyes, little pictures of cats, apples and cars floating out of the books like bubbles", title: "AI là gì?", html: "<p class='big'><b>AI</b> là máy tính biết <b>học từ thật nhiều ví dụ</b> để làm việc thông minh.</p><p>Nhận ra hình ảnh · nghe hiểu lời nói · trò chuyện · dịch tiếng.</p>", n: "AI là viết tắt của Artificial Intelligence. Nhấn mạnh từ khóa “học từ ví dụ” — cả khóa học xoay quanh ý này." },
  { k: "cards", title: "AI ở quanh em", items: [["Mở khóa khuôn mặt", "Điện thoại nhận ra bố mẹ"], ["Loa thông minh", "Nghe hiểu khi em hỏi"], ["Máy dịch", "Dịch tiếng Anh sang tiếng Việt"], ["Gợi ý phim", "Đoán em thích phim nào"], ["Bản đồ chỉ đường", "Biết đường nào đang đông xe"], ["Camera đếm xe", "Nhận ra ô tô, xe máy"]] },
  { k: "fact", text: "Chữ “rô-bốt” xuất hiện lần đầu năm 1920 trong một vở kịch. Tên gọi “trí tuệ nhân tạo” ra đời năm 1956, khi các nhà khoa học họp bàn về máy biết suy nghĩ.", n: "Vở kịch R.U.R. của nhà văn Séc Karel Čapek (1920). Hội thảo Dartmouth (Mỹ, 1956) đặt tên “artificial intelligence”." },
  { k: "try", q: "Cái quạt điện có phải là AI không?", opts: ["Có", "Không"], a: 1, why: "Quạt chỉ làm theo nút bấm, không học được gì." },
  { k: "myth", items: [["AI là người máy biết suy nghĩ y như người.", "AI là chương trình máy tính. Nó không suy nghĩ và không có cảm xúc như người."], ["AI luôn đúng.", "AI cũng có lúc nhầm, giống bạn đang tập học."]] },
  { k: "act", title: "Trò chơi: Máy nào thông minh?", items: ["Cô đọc tên 8 đồ vật.", "Đồ vật biết học: giơ thẻ mặt cười. Chỉ làm theo lệnh: giơ thẻ bàn tay.", "Mời 2 bạn giải thích vì sao."], link: ["Chơi trên web", "index.html#tro-choi"] },
  { k: "split", img: "th01-3", alt: "Bé dùng máy tính bảng cùng mẹ, Rô-bi đứng cạnh", ep: "A little girl using a tablet together with her smiling mother on a sofa, Robi standing beside them like a helpful assistant, warm evening light", title: "AI là công cụ", html: "<p class='big'>Con dao giúp nấu ăn nhưng phải dùng cẩn thận. <b>AI cũng vậy.</b></p><p>AI có ích khi em dùng đúng cách và có người lớn hướng dẫn.</p>" },
  { k: "recap", items: ["AI là máy tính biết học từ ví dụ.", "AI ở quanh em: điện thoại, loa, máy dịch, bản đồ.", "AI không có cảm xúc, AI cũng có lúc nhầm."] }
 ]
},
{
 p: 1, t: "Máy học bằng cách xem ví dụ",
 g: "Hiểu máy học từ dữ liệu có nhãn; biết dữ liệu nhiều và đa dạng giúp máy giỏi hơn.",
 pts: [
  "Em học nhận ra con mèo bằng cách nhìn nhiều con mèo. Máy cũng học như vậy.",
  "Những ví dụ dùng để dạy máy gọi là <b>dữ liệu</b>.",
  "Mỗi ví dụ cần một tên gọi đúng, gọi là <b>nhãn</b>: ảnh này là “mèo”, ảnh kia là “chó”.",
  "Dữ liệu càng <b>nhiều</b> và càng <b>đa dạng</b> (nhiều màu, nhiều góc, to nhỏ), máy đoán càng giỏi."
 ],
 q: [
  ["Muốn máy nhận ra quả táo, cần cho máy xem gì?", ["Nhiều ảnh quả táo có ghi tên “táo”", "Một bài hát", "Một ảnh con chó"], 0, "Máy cần nhiều ví dụ đúng tên."],
  ["Tên gọi gắn cho mỗi ví dụ gọi là gì?", ["Nhãn", "Pin"], 0, "Nhãn giống tên dán trên vở."],
  ["Máy học giỏi hơn khi nào?", ["Xem ít ví dụ giống nhau", "Xem nhiều ví dụ khác nhau"], 1, "Ví dụ đa dạng giúp máy không bị nhầm."]
 ],
 s: [
  { k: "cover", img: "th02-1", alt: "Rô-bi đeo cặp đi học, vui vẻ bước vào lớp", ep: "Robi wearing a tiny school backpack happily walking into a bright Vietnamese primary school classroom, kids waving hello", sub: "Máy cũng đi học, nhưng học bằng cách xem thật nhiều ví dụ." },
  { k: "concept", title: "Em học như thế nào?", big: "Em đã nhìn rất nhiều con mèo, nên gặp con mèo lạ em vẫn biết đó là mèo.", ex: ["Máy cũng vậy", "Cho máy xem thật nhiều ảnh mèo, máy tự tìm ra điểm chung: tai nhọn, ria mép, đuôi dài."] },
  { k: "steps", title: "Máy học trong 3 bước", items: [["Xem ví dụ", "Thật nhiều ảnh có ghi tên"], ["Tìm điểm chung", "Máy tự tìm quy luật"], ["Đoán", "Gặp ảnh mới, máy đoán tên"]], note: "Ba bước này có tên gọi: dữ liệu → huấn luyện → dự đoán.", n: "Các em lớp 4–5 có thể học thêm 3 từ: dữ liệu, huấn luyện, dự đoán." },
  { k: "split", img: "th02-2", alt: "Các bức ảnh mèo, chó có dán nhãn tên", ep: "A colorful wall of photo cards of cats and dogs, each with a little name tag sticker, Robi carefully sticking a tag on a cat photo with its tongue out in concentration", title: "Nhãn là gì?", html: "<p class='big'><b>Nhãn</b> là tên gọi gắn cho mỗi ví dụ, giống tên dán trên vở.</p><p>Ảnh này: “mèo”. Ảnh kia: “chó”. Không có nhãn, máy không biết mình đang học gì.</p>" },
  { k: "cards", title: "Dữ liệu tốt là dữ liệu…", items: [["Nhiều", "Càng nhiều ví dụ càng tốt"], ["Đa dạng", "Nhiều màu, nhiều góc, to nhỏ"], ["Đúng nhãn", "Mèo phải ghi là mèo"]] },
  { k: "try", q: "Muốn dạy máy nhận ra quả chuối, em cho máy xem gì?", opts: ["Nhiều ảnh quả chuối, ghi tên “chuối”", "Một ảnh quả táo"], a: 0, why: "Máy cần nhiều ví dụ đúng tên." },
  { k: "fact", text: "Trò chơi vẽ hình Quick, Draw! của Google đã thu thập hơn 50 triệu hình vẽ của mọi người trên thế giới để dạy máy nhận ra hình vẽ.", n: "Bộ dữ liệu Quick, Draw! công bố năm 2017, gồm khoảng 50 triệu hình vẽ thuộc 345 chủ đề." },
  { k: "act", title: "Trò chơi: Cả lớp làm máy học", items: ["Cô cho xem 6 thẻ hình nhóm “quả” và nhóm “không phải quả”.", "Cả lớp tìm điểm chung của nhóm “quả”.", "Cô đưa thẻ mới, cả lớp làm “máy” đoán thẻ thuộc nhóm nào."], n: "Đây là hoạt động không cần máy tính. Có thể thay bằng nhóm “con vật biết bay” và “không biết bay”." },
  { k: "myth", items: [["Máy tự biết mọi thứ ngay từ đầu.", "Máy phải được con người cho xem dữ liệu mới học được."], ["Chỉ cần 1 ảnh là máy học được.", "Máy cần rất nhiều ảnh, nhiều hơn em cần rất nhiều lần."]] },
  { k: "split", img: "th02-3", alt: "Rô-bi ngơ ngác nhìn chú mèo đen", ep: "Robi tilting its head in total confusion at a fluffy black kitten, behind it a gallery wall of only white cat photos, question marks floating", title: "Thêm ví dụ, máy giỏi hơn", html: "<p class='big'>Chỉ cho máy xem mèo trắng, máy có thể <b>không nhận ra mèo đen</b>.</p><p>Hãy cho máy xem mèo đủ màu, đủ kiểu!</p>" },
  { k: "recap", items: ["Máy học bằng cách xem thật nhiều ví dụ (dữ liệu).", "Mỗi ví dụ cần nhãn đúng.", "Dữ liệu nhiều, đa dạng thì máy giỏi."] }
 ]
},
{
 p: 1, t: "Dạy máy nhận ra hình",
 g: "Cùng cô dạy máy nhận ra đồ vật bằng Teachable Machine; hiểu máy trả lời kèm phần trăm.",
 pts: [
  "Máy “nhìn” bằng camera. Với máy, bức ảnh là rất nhiều chấm màu nhỏ xíu.",
  "Teachable Machine là trang web miễn phí của Google để tự dạy máy: tạo nhóm → chụp ảnh → huấn luyện → thử.",
  "Máy trả lời kèm <b>phần trăm</b>: số càng cao, máy càng chắc chắn.",
  "Chỉ chụp đồ vật, không chụp mặt bạn: ảnh khuôn mặt là thông tin riêng."
 ],
 q: [
  ["Máy báo “Bút 90%” nghĩa là gì?", ["Máy khá chắc đây là cây bút", "Có 90 cây bút"], 0, "Phần trăm cho biết máy chắc chắn đến đâu."],
  ["Trước khi máy đoán được, mình phải làm gì?", ["Huấn luyện máy bằng nhiều ảnh", "Tắt máy đi"], 0, "Máy phải học trước rồi mới đoán."],
  ["Quick, Draw! đoán được hình em vẽ vì sao?", ["Máy đã học từ rất nhiều hình vẽ", "Máy nhìn trộm bài em"], 0, "Máy học từ hàng chục triệu hình vẽ."]
 ],
 s: [
  { k: "cover", img: "th03-1", alt: "Cả lớp giơ đồ vật trước máy tính có camera", ep: "A cheerful group of little kids holding up a pencil, an eraser and a toy car in front of a laptop webcam in a classroom, the screen shows glowing labels, Robi cheering on top of the laptop", sub: "Hôm nay cả lớp sẽ tự tay dạy máy nhận ra đồ vật!" },
  { k: "concept", title: "Máy nhìn bằng gì?", big: "Máy “nhìn” bằng camera. Với máy, bức ảnh là rất nhiều chấm màu nhỏ xíu.", ex: ["Thử tưởng tượng", "Phóng thật to bức ảnh, em sẽ thấy những ô vuông màu. Máy học từ những ô màu đó."], n: "Mỗi ô màu gọi là điểm ảnh (pixel). Có thể cho các em xem một ảnh phóng to trên màn hình để thấy các ô vuông." },
  { k: "steps", title: "Dạy máy với Teachable Machine", items: [["Tạo nhóm", "Bút · Tẩy · Không có gì"], ["Chụp ảnh", "Mỗi nhóm khoảng 50 ảnh"], ["Huấn luyện", "Bấm Train Model, chờ máy học"], ["Thử", "Đưa đồ vật vào camera"]] },
  { k: "split", img: "th03-2", alt: "Màn hình hiện thanh phần trăm, Rô-bi chỉ vào", ep: "A big friendly computer screen showing two glowing bars, one long green and one short, Robi pointing at the long bar with a proud face, a pencil floating in front of the camera", title: "Máy trả lời bằng phần trăm", html: "<p class='big'>Máy nói: <b>“Bút 90%”</b>.</p><p>Nghĩa là máy khá chắc chắn đây là cây bút. Nếu chỉ khoảng 50%, máy đang phân vân.</p>" },
  { k: "try", q: "Máy báo “Tẩy 55%, Bút 45%”. Máy có chắc chắn không?", opts: ["Rất chắc chắn", "Đang phân vân"], a: 1, why: "Hai số gần bằng nhau nghĩa là máy chưa chắc." },
  { k: "act", title: "Thử ngay: Quick, Draw!", items: ["Cô mở Quick, Draw! trên màn hình lớn.", "Mời 4 bạn lên vẽ, mỗi bạn 20 giây.", "Cả lớp xem máy đoán đúng hay sai."], link: ["Mở Quick, Draw!", "https://quickdraw.withgoogle.com"] },
  { k: "act", title: "Cùng cô dạy máy", items: ["Cô mở Teachable Machine, cả lớp chọn 2 đồ vật.", "Từng tổ giơ đồ vật trước camera để chụp ảnh.", "Cô bấm huấn luyện, cả lớp đếm ngược.", "Thử đồ vật lạ, xem máy đoán gì."], link: ["Mở Teachable Machine", "https://teachablemachine.withgoogle.com"], n: "Teachable Machine không cần tài khoản. Ảnh xử lý ngay trên trình duyệt. Chuẩn bị sẵn 2 đồ vật khác màu rõ rệt để máy học nhanh." },
  { k: "myth", items: [["Máy nhìn thấy giống hệt mắt người.", "Máy chỉ thấy các chấm màu và tìm quy luật trong đó."]] },
  { k: "fact", text: "Ô tô tự lái cũng dùng camera và AI để nhận ra người đi bộ, đèn giao thông và các xe khác." },
  { k: "split", img: "th03-3", alt: "Bé che camera khi bạn muốn chụp mặt", ep: "A kind little boy gently holding up his hand toward a camera with a polite smile, while Robi holds up a toy teddy bear to be photographed instead", title: "An toàn khi chụp ảnh", html: "<p class='big'>Chỉ chụp <b>đồ vật</b>, không chụp mặt bạn.</p><p>Ảnh khuôn mặt là thông tin riêng, cần giữ kín.</p>" },
  { k: "recap", items: ["Máy nhìn bằng camera, thấy các chấm màu.", "Dạy máy: tạo nhóm → chụp ảnh → huấn luyện → thử.", "Phần trăm càng cao, máy càng chắc."] }
 ]
},
{
 p: 1, t: "Máy cũng có lúc nhầm",
 g: "Biết vì sao máy nhầm và cách sửa; hình thành thói quen hỏi người lớn khi máy nói điều lạ.",
 pts: [
  "Máy có thể nhầm khi xem <b>quá ít ví dụ</b> hoặc ví dụ <b>toàn giống nhau</b>.",
  "Máy có thể nhầm khi ảnh <b>tối, mờ, bị che</b>, hoặc gặp đồ vật chưa học bao giờ.",
  "Khi máy nhầm, con người sửa bằng cách thêm ví dụ đúng rồi dạy lại.",
  "Máy nói điều lạ hoặc nguy hiểm: em dừng lại và hỏi người lớn."
 ],
 q: [
  ["Vì sao máy nhầm mèo đen thành chó?", ["Máy chỉ được học ảnh mèo trắng", "Máy ghét mèo đen"], 0, "Dữ liệu thiếu mèo đen nên máy không biết."],
  ["Muốn máy bớt nhầm, mình làm gì?", ["Thêm nhiều ví dụ đúng và đa dạng", "La mắng máy"], 0, "Thêm dữ liệu rồi dạy lại."],
  ["Ứng dụng nói cây nấm lạ “ăn được”, em làm gì?", ["Ăn thử", "Hỏi người lớn, không ăn"], 1, "Máy có thể nhầm, nấm lạ có thể gây ngộ độc."]
 ],
 s: [
  { k: "cover", img: "th04-1", alt: "Rô-bi bối rối, quả táo xanh làm Rô-bi nhầm", ep: "Robi with comically crossed spiral eyes holding a green apple and a red ball, unsure which is the apple, kids giggling in the background", sub: "Máy giỏi lắm, nhưng máy cũng biết nhầm!" },
  { k: "concept", title: "Vì sao máy nhầm?", big: "Máy chỉ biết những gì nó đã được học.", ex: ["Giống như em", "Nếu em chỉ thấy toàn táo đỏ, gặp quả táo xanh em có thể ngập ngừng."] },
  { k: "cards", title: "3 lý do máy nhầm", items: [["Ít ví dụ", "Học quá ít ảnh"], ["Ví dụ giống nhau", "Toàn mèo trắng, không có mèo đen"], ["Ảnh khó", "Tối, mờ, bị che một nửa"]], n: "Người lớn gọi lý do thứ hai là “thiên kiến dữ liệu”. Không cần dạy từ này cho các em, chỉ cần ví dụ mèo trắng – mèo đen." },
  { k: "split", img: "th04-2", alt: "Máy nhận ra mèo đen thành chó, các bạn bật cười", ep: "A funny scene: a computer screen labels a black kitten as a dog with a big glowing tag, the kitten looks offended, Robi facepalming, kids laughing", title: "Máy đoán nhầm rồi!", html: "<p class='big'>Máy chỉ học ảnh mèo trắng, nên gặp mèo đen máy đoán là <b>chó</b>.</p><p>Không phải máy hư. Máy chỉ thiếu ví dụ.</p>" },
  { k: "try", q: "Máy chỉ học ảnh táo đỏ. Đưa quả táo xanh, máy có thể…?", opts: ["Nhận ra ngay", "Đoán sai"], a: 1, why: "Máy chưa từng thấy táo xanh." },
  { k: "story", text: "Ứng dụng trên điện thoại nói cây nấm em hái trong vườn là “ăn được”.", q: "Em có nên ăn không?", a: "Không! Máy có thể nhầm. Em phải hỏi người lớn. Nấm lạ có thể gây ngộ độc rất nguy hiểm.", n: "Nhấn mạnh: với việc liên quan tới sức khỏe và an toàn, không bao giờ chỉ tin máy." },
  { k: "steps", title: "Sửa khi máy nhầm", items: [["Phát hiện", "Thấy máy đoán sai"], ["Thêm ví dụ", "Thêm ảnh đúng, đa dạng"], ["Dạy lại", "Huấn luyện lần nữa"], ["Thử lại", "Kiểm tra xem đã đúng chưa"]] },
  { k: "act", title: "Thí nghiệm: làm máy nhầm", items: ["Dùng máy đã dạy ở buổi 3.", "Thử trong chỗ tối, che một nửa đồ vật, đưa đồ vật lạ.", "Ghi lần nào máy nhầm vào Phiếu 4.", "Thêm ảnh, dạy lại và thử lần nữa."] },
  { k: "myth", items: [["Máy nói là chắc chắn đúng.", "Máy có thể nhầm. Hãy kiểm tra lại."], ["Máy nhầm là do máy hư.", "Thường là do máy học chưa đủ ví dụ."]] },
  { k: "split", img: "th04-3", alt: "Bé hỏi cô giáo, Rô-bi đứng chờ", ep: "A curious little girl raising her hand to ask a kind young Vietnamese female teacher in an ao dai a question, Robi waiting patiently beside with a question mark above its head", title: "Người lớn là người kiểm tra", html: "<p class='big'>Máy nói điều lạ hoặc nguy hiểm: <b>dừng lại và hỏi</b> bố mẹ, thầy cô.</p>" },
  { k: "recap", items: ["Máy nhầm vì ít ví dụ, ví dụ giống nhau, hoặc ảnh khó.", "Sửa: thêm ví dụ đúng rồi dạy lại.", "Việc nguy hiểm: luôn hỏi người lớn."] }
 ]
},
{
 p: 2, t: "Chia nhỏ việc lớn",
 g: "Biết chia một việc lớn thành các bước nhỏ theo thứ tự — kỹ năng đầu tiên của tư duy máy tính.",
 pts: [
  "Việc lớn trông khó, nhưng <b>chia thành các bước nhỏ</b> thì dễ làm.",
  "Máy tính luôn làm việc theo từng bước nhỏ, rõ ràng.",
  "Ví dụ đánh răng: lấy bàn chải → bóp kem → chải răng 2 phút → súc miệng → rửa bàn chải.",
  "Chia nhỏ là kỹ năng đầu tiên của <b>tư duy máy tính</b>."
 ],
 q: [
  ["Chia nhỏ việc lớn giúp gì?", ["Dễ làm hơn", "Khó hơn"], 0, "Từng bước nhỏ thì dễ làm."],
  ["Khi đánh răng, bước nào đứng trước “chải răng”?", ["Bóp kem", "Súc miệng"], 0, "Bóp kem trước rồi mới chải."],
  ["Máy tính làm việc theo cách nào?", ["Từng bước rõ ràng", "Tùy hứng"], 0, "Máy cần các bước rõ ràng."]
 ],
 s: [
  { k: "cover", img: "th05-1", alt: "Rô-bi cắt chiếc bánh khổng lồ thành nhiều miếng nhỏ", ep: "Robi cheerfully slicing a giant colorful layer cake into small easy pieces for a line of happy kids holding plates", sub: "Việc khó đến mấy cũng chia nhỏ được!" },
  { k: "concept", title: "Tư duy máy tính là gì?", big: "Là cách suy nghĩ để giải quyết vấn đề gọn gàng, giống cách máy tính làm việc.", ex: ["Kỹ năng đầu tiên", "Chia nhỏ: tách việc lớn thành nhiều bước nhỏ."], n: "Tư duy máy tính gồm 4 kỹ năng: chia nhỏ, tìm quy luật, lược bỏ, thiết kế thuật toán. Phần 2 học lần lượt các kỹ năng này." },
  { k: "steps", title: "Đánh răng có mấy bước?", items: [["Lấy bàn chải", ""], ["Bóp kem", "Bằng hạt đậu"], ["Chải răng", "Khoảng 2 phút"], ["Súc miệng", ""], ["Rửa bàn chải", ""]] },
  { k: "split", img: "th05-2", alt: "Bé dọn phòng từng bước, Rô-bi giúp", ep: "A tidy-up montage in a cute kid bedroom: a little boy picking up toys, stacking books, folding a blanket, Robi sweeping with a tiny broom, motion lines and sparkles", title: "Dọn phòng cũng chia nhỏ", html: "<p class='big'>Nhặt đồ chơi → xếp sách → gấp chăn → quét nhà.</p><p>Từng bước nhỏ, phòng sạch lúc nào không hay!</p>" },
  { k: "try", q: "Khi rửa tay, bước nào làm trước tiên?", opts: ["Mở vòi nước", "Lau tay khô"], a: 0, why: "Phải có nước trước rồi mới rửa." },
  { k: "cards", title: "Việc lớn quanh em", items: [["Chuẩn bị đi học", "Thay đồ → ăn sáng → đeo cặp"], ["Trồng cây", "Đào đất → gieo hạt → tưới nước"], ["Làm thiệp", "Gấp giấy → vẽ → tô màu → viết lời chúc"]] },
  { k: "act", title: "Trò chơi xếp thẻ", items: ["Mỗi tổ nhận bộ thẻ các bước pha nước cam bị xáo trộn.", "Xếp lại đúng thứ tự.", "Tổ nhanh và đúng nhất thắng."], n: "Các bước pha nước cam: rửa cam → cắt đôi → vắt lấy nước → thêm nước và đường → khuấy đều → rót ra cốc." },
  { k: "fact", text: "Để đưa tàu vũ trụ lên Mặt Trăng, các nhà khoa học đã chia nhiệm vụ khổng lồ thành hàng nghìn bước nhỏ, mỗi nhóm lo một phần." },
  { k: "myth", items: [["Việc lớn thì phải làm một lần là xong.", "Chia nhỏ ra làm từng bước sẽ dễ và ít sai hơn."]] },
  { k: "recap", items: ["Tư duy máy tính là cách giải quyết vấn đề gọn gàng.", "Chia nhỏ việc lớn thành các bước nhỏ.", "Các bước phải đúng thứ tự."] }
 ]
},
{
 p: 2, t: "Ra lệnh thật rõ ràng",
 g: "Hiểu thuật toán là các bước rõ ràng, đúng thứ tự; biết gỡ lỗi khi lệnh sai.",
 pts: [
  "<b>Thuật toán</b> là các bước rõ ràng, theo đúng thứ tự để làm một việc. Công thức nấu ăn là một thuật toán.",
  "Máy làm đúng từng chữ mình nói, không tự đoán ý.",
  "Lệnh tốt: rõ ràng, đủ bước, đúng thứ tự.",
  "Khi máy làm sai, mình tìm chỗ sai trong lệnh và sửa. Việc này gọi là <b>gỡ lỗi</b>."
 ],
 q: [
  ["Thuật toán là gì?", ["Các bước rõ ràng theo thứ tự", "Một loại kẹo"], 0, "Công thức nấu ăn là một thuật toán."],
  ["Bảo rô-bốt “đi tới cửa” mà không nói đi mấy bước, rô-bốt sẽ thế nào?", ["Có thể đi sai", "Luôn đi đúng"], 0, "Máy không tự đoán ý."],
  ["Tìm và sửa chỗ sai trong lệnh gọi là gì?", ["Gỡ lỗi", "Tô màu"], 0, "Người lập trình gỡ lỗi mỗi ngày."]
 ],
 s: [
  { k: "cover", img: "th06-1", alt: "Cô giáo đóng vai rô-bốt, cả lớp cầm thẻ lệnh", ep: "A playful young Vietnamese female teacher pretending to be a robot with a cardboard box helmet, kids holding big arrow command cards and laughing, Robi acting as referee with a whistle", sub: "Hôm nay cô là rô-bốt, các em là người ra lệnh!" },
  { k: "concept", title: "Thuật toán là gì?", big: "Thuật toán là các bước rõ ràng, theo đúng thứ tự để làm một việc.", ex: ["Ví dụ", "Công thức nấu ăn chính là một thuật toán."] },
  { k: "compare", title: "Lệnh mơ hồ và lệnh rõ ràng", a: ["Mơ hồ", "“Đi lấy cái bút.”<br>Rô-bốt không biết bút ở đâu, đi mấy bước."], b: ["Rõ ràng", "“Tiến 3 bước. Quay phải. Giơ tay phải. Cầm cây bút đỏ.”"] },
  { k: "split", img: "th06-2", alt: "Rô-bi cho cả túi bánh mì vào máy nướng", ep: "Robi comically pushing a whole sealed plastic bag of bread into a toaster while a kid gasps and points, smoke puffs, funny kitchen scene", title: "Rô-bốt làm đúng từng chữ", html: "<p class='big'>Em nói “cho bánh mì vào máy” mà quên “bóc túi”, rô-bốt sẽ cho <b>cả túi</b> vào!</p><p>Máy không tự đoán ý em.</p>" },
  { k: "cards", title: "Thẻ lệnh di chuyển", items: [["Tiến", "Đi lên 1 ô"], ["Quay trái", "Xoay sang trái tại chỗ"], ["Quay phải", "Xoay sang phải tại chỗ"], ["Nhặt", "Cầm đồ vật lên"]] },
  { k: "act", title: "Trò chơi rô-bốt người", items: ["Dán lưới 4×4 ô trên sàn bằng băng dính.", "Một bạn làm rô-bốt, các bạn khác xếp thẻ lệnh dẫn rô-bốt tới kho báu.", "Rô-bốt chỉ được làm đúng lệnh trên thẻ.", "Sai thì cả tổ gỡ lỗi và thử lại."], n: "Đặt “kho báu” (một món đồ chơi) ở ô xa nhất. Tổ dùng ít thẻ nhất mà vẫn đúng được thưởng sao." },
  { k: "try", q: "Rô-bốt đang quay mặt lên trên. Kho báu ở bên phải 2 ô. Lệnh nào đúng?", opts: ["Quay phải, Tiến, Tiến", "Tiến, Tiến, Tiến"], a: 0, why: "Phải quay sang phải trước rồi mới tiến 2 ô." },
  { k: "concept", title: "Gỡ lỗi là gì?", big: "Gỡ lỗi là tìm chỗ sai trong lệnh rồi sửa lại.", ex: ["Đừng buồn khi sai", "Người lập trình giỏi nhất cũng gỡ lỗi mỗi ngày."] },
  { k: "fact", text: "Năm 1947, các kỹ sư tìm thấy một con bướm đêm kẹt trong máy tính. Họ dán nó vào sổ, ghi là “con bọ” đầu tiên được tìm thấy. Ngày nay lỗi máy tính vẫn được gọi vui là “con bọ” (bug).", n: "Câu chuyện gắn với nhóm của nhà khoa học Grace Hopper (máy Harvard Mark II)." },
  { k: "recap", items: ["Thuật toán là các bước rõ ràng, đúng thứ tự.", "Máy làm đúng từng chữ, không đoán ý.", "Sai thì gỡ lỗi và thử lại."] }
 ]
},
{
 p: 2, t: "Lặp lại và Nếu – thì",
 g: "Dùng được “lặp lại” để viết lệnh gọn và “nếu – thì” để máy chọn việc theo điều kiện.",
 pts: [
  "<b>Lặp lại</b>: thay vì nói “tiến, tiến, tiến, tiến”, ta nói “lặp lại 4 lần: tiến”. Gọn hơn!",
  "<b>Nếu – thì</b>: máy làm việc khác nhau tùy điều kiện. Nếu trời mưa thì mang ô.",
  "<b>Nếu – thì – không thì</b>: Nếu đèn đỏ thì dừng, không thì đi.",
  "Mọi trò chơi và ứng dụng đều dùng lặp lại và nếu – thì."
 ],
 q: [
  ["“Lặp lại 3 lần: vỗ tay”. Em vỗ tay mấy lần?", ["3 lần", "1 lần"], 0, "Lặp lại 3 lần nghĩa là làm 3 lần."],
  ["Nếu trời mưa thì…", ["mang ô", "ăn kem"], 0, "Mưa thì cần ô."],
  ["“Nếu đèn đỏ thì dừng, không thì đi.” Đèn xanh em làm gì?", ["Đi", "Dừng"], 0, "Đèn không đỏ nên làm phần “không thì”."]
 ],
 s: [
  { k: "cover", img: "th07-1", alt: "Các bạn nhảy theo nhịp, Rô-bi đánh trống", ep: "Kids dancing in a circle on a sunny school yard under a red flame tree, repeating the same funny move, Robi drumming the beat with musical notes flying", sub: "Hai “phép thuật” làm lệnh gọn và thông minh hơn." },
  { k: "concept", title: "Lặp lại", big: "Làm một việc nhiều lần thì dùng “lặp lại” cho gọn.", ex: ["Ví dụ", "“Tiến, tiến, tiến, tiến” → “Lặp lại 4 lần: tiến”."] },
  { k: "split", img: "th07-2", alt: "Rô-bi tưới cây mỗi ngày không biết mệt", ep: "Robi watering a row of potted plants one after another with a tiny watering can, a calendar with days flipping in the air behind, plants sprouting happily", title: "Lặp lại trong đời sống", html: "<p class='big'>Đánh răng mỗi sáng, tưới cây mỗi ngày, vỗ tay theo nhịp.</p><p>Máy tính rất giỏi lặp lại mà không biết mệt.</p>" },
  { k: "try", q: "Viết gọn: “nhảy, nhảy, nhảy, nhảy, nhảy”", opts: ["Lặp lại 5 lần: nhảy", "Nhảy 1 lần"], a: 0, why: "Có 5 lần nhảy nên lặp lại 5 lần." },
  { k: "concept", title: "Nếu – thì", big: "Nếu điều kiện đúng thì làm việc này.", ex: ["Ví dụ", "Nếu trời mưa thì mang ô. Nếu đói thì ăn cơm."] },
  { k: "compare", title: "Nếu – thì – không thì", a: ["Nếu đèn đỏ", "Dừng lại"], b: ["Không thì", "Đi tiếp"] },
  { k: "story", text: "Máy tưới cây tự động có lệnh: “Nếu đất khô thì tưới nước.” Hôm nay trời mưa to, đất ướt sũng.", q: "Máy có tưới cây không?", a: "Không. Điều kiện “đất khô” không đúng nên máy không tưới." },
  { k: "cards", title: "Nếu – thì quanh em", items: [["Nếu đói", "thì ăn cơm"], ["Nếu buồn ngủ", "thì đi ngủ"], ["Nếu người lạ nhắn tin", "thì báo bố mẹ"]] },
  { k: "act", title: "Trò chơi “Cô bảo”", items: ["Nếu cô giơ tay trái thì các em vỗ tay, không thì dậm chân.", "Lặp lại 5 lần, mỗi lần nhanh hơn.", "Bạn làm sai thì ngồi xuống. Bạn cuối cùng thắng."] },
  { k: "fact", text: "Máy giặt nhà em cũng dùng nếu – thì: nếu nước đầy thì bắt đầu quay, nếu hết giờ thì dừng lại." },
  { k: "recap", items: ["Lặp lại: làm nhiều lần, viết gọn.", "Nếu – thì: làm theo điều kiện.", "Nếu – thì – không thì: chọn 1 trong 2 việc."] }
 ]
},
{
 p: 2, t: "Tìm quy luật",
 g: "Nhận ra và tạo quy luật; hiểu AI học bằng cách tìm quy luật trong dữ liệu; biết lược bỏ chi tiết thừa.",
 pts: [
  "<b>Quy luật</b> là điều lặp lại theo một cách nhất định: đỏ, xanh, đỏ, xanh…",
  "Tìm ra quy luật giúp đoán được cái tiếp theo.",
  "AI học bằng cách <b>tìm quy luật trong dữ liệu</b>, ví dụ dự báo thời tiết.",
  "<b>Lược bỏ</b> chi tiết không cần thiết giúp thấy điều quan trọng rõ hơn, như bản đồ chỉ vẽ đường đi."
 ],
 q: [
  ["Tròn, vuông, tròn, vuông, … tiếp theo là gì?", ["tròn", "tam giác"], 0, "Tròn và vuông xen kẽ nhau."],
  ["2, 4, 6, 8, … số tiếp theo là?", ["10", "9"], 0, "Mỗi số cộng thêm 2."],
  ["AI học bằng cách nào?", ["Tìm quy luật trong dữ liệu", "Ngủ một giấc"], 0, "Đó là cách máy học."]
 ],
 s: [
  { k: "cover", img: "th08-1", alt: "Bé làm thám tử soi chuỗi hạt màu", ep: "A little detective girl with a magnifying glass inspecting a long colorful bead necklace with a repeating pattern, Robi holding the last hidden bead behind its back with a cheeky grin", sub: "Trở thành thám tử quy luật!" },
  { k: "concept", title: "Quy luật là gì?", big: "Quy luật là điều lặp lại theo một cách nhất định.", ex: ["Ví dụ", "Đỏ, xanh, đỏ, xanh… · Thứ Hai, Thứ Ba, Thứ Tư…"] },
  { k: "try", q: "Tròn, vuông, tròn, vuông, … tiếp theo là gì?", opts: ["tròn", "tam giác"], a: 0, why: "Tròn và vuông xen kẽ nhau." },
  { k: "try", q: "2, 4, 6, 8, … số tiếp theo là?", opts: ["10", "9"], a: 0, why: "Mỗi lần cộng thêm 2." },
  { k: "split", img: "th08-2", alt: "Hoa hướng dương với hạt xếp xoắn ốc", ep: "A giant sunflower close-up with seeds arranged in beautiful glowing spirals, Robi and a little boy staring at it in awe, bright garden", title: "Quy luật trong thiên nhiên", html: "<p class='big'>Ngày và đêm, bốn mùa, hạt hoa hướng dương xếp thành hình xoắn ốc.</p><p>Thiên nhiên đầy quy luật!</p>" },
  { k: "concept", title: "AI tìm quy luật", big: "AI xem thật nhiều dữ liệu rồi tìm ra quy luật, nhờ đó đoán được điều sắp tới.", ex: ["Ví dụ", "Ứng dụng thời tiết tìm quy luật từ số liệu nhiều năm để dự báo mưa nắng."] },
  { k: "concept", title: "Lược bỏ", big: "Bỏ đi những chi tiết không cần thiết để nhìn rõ điều quan trọng.", ex: ["Ví dụ", "Bản đồ không vẽ từng chiếc lá, chỉ vẽ đường đi và ngôi nhà."], n: "Lược bỏ (trừu tượng hóa) là kỹ năng thứ ba của tư duy máy tính. Cho các em so sánh ảnh chụp trường và sơ đồ đường tới trường." },
  { k: "act", title: "Trò chơi “Chuỗi hạt bí ẩn”", items: ["Cô xếp chuỗi hạt màu có quy luật, che hạt cuối.", "Các tổ đoán hạt bị che.", "Mỗi tổ tự tạo một quy luật để đố tổ khác."] },
  { k: "fact", text: "Hạt hoa hướng dương xếp thành những đường xoắn ốc theo một quy luật toán học rất đẹp, giúp bông hoa chứa được nhiều hạt nhất." },
  { k: "recap", items: ["Quy luật là điều lặp lại theo một cách nhất định.", "Tìm được quy luật thì đoán được cái tiếp theo.", "AI cũng học bằng cách tìm quy luật."] }
 ]
}
]
};
