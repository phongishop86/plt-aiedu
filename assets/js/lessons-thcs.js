/* Dữ liệu khóa AI cho THCS (12–15 tuổi): 12 buổi.
   Mỗi buổi: thông tin, điều cần nhớ, quiz, và slide bài giảng.
   Ảnh: assets/img/bXX-1.jpg, bXX-2.jpg — xem docs/prompt-anh.md. Thiếu ảnh thì trang tự hiện hình minh họa thay thế. */
window.AIEDU_THCS = {
parts: {
  1: {"cls":"p1","name":"Phần 1 · Hiểu AI"},
  2: {"cls":"p2","name":"Phần 2 · Dùng AI thông minh"},
  3: {"cls":"p3","name":"Phần 3 · Sáng tạo với AI"},
  4: {"cls":"p4","name":"Phần 4 · Tư duy và tự động hóa"}
},
lessons: [
{
 p: 1, t: "AI là gì và AI quanh ta",
 g: "Nói được AI là gì và nhận ra AI trong đời sống hằng ngày.",
 pts: [
  "<b>AI (trí tuệ nhân tạo)</b> là máy tính làm được việc thường cần trí thông minh con người: nhận ra hình, hiểu lời nói, dịch, gợi ý, trò chuyện.",
  "<b>Chương trình thường</b> làm theo luật người viết sẵn. <b>AI</b> tự rút ra quy luật từ rất nhiều ví dụ, gọi là dữ liệu.",
  "AI quanh em: TikTok gợi ý video, Google Dịch, mở khóa bằng khuôn mặt, lọc thư rác, Google Maps báo kẹt xe.",
  "AI nhanh, không mệt, nhưng không thật sự hiểu và có thể sai rất tự tin. AI không có cảm xúc."
 ],
 q: [
  ["Thiết bị nào có dùng AI?",["Máy tính bỏ túi","TikTok gợi ý video","Đồng hồ báo thức"],1,"TikTok học từ những video em đã xem để gợi ý video mới."],
  ["AI khác chương trình thường ở chỗ nào?",["Chạy nhanh hơn","Tự rút ra quy luật từ dữ liệu","Có màn hình đẹp"],1,"Chương trình thường làm theo luật viết sẵn; AI tự học quy luật từ ví dụ."],
  ["AI có cảm xúc thật không?",["Có","Không"],1,"AI chỉ là công cụ, không có cảm xúc hay ý thức."]
 ],
 s: [
  {"k":"cover","img":"b01-1","alt":"Học sinh nhìn quanh lớp học, thấy AI ẩn trong điện thoại, camera, loa thông minh","sub":"Hôm nay em sẽ nhận ra AI đang ở quanh mình mỗi ngày.","n":"Mở đầu: hỏi “Sáng nay em đã gặp AI ở đâu?” Ghi nhanh lên bảng, cuối buổi xem lớp đoán đúng mấy cái."},
  {"k":"concept","title":"Trí tuệ nhân tạo","big":"Máy tính làm được những việc thường cần trí thông minh của con người.","ex":["Ví dụ","Em chụp ảnh bài toán, ứng dụng nhận ra chữ số và phép tính. Việc “nhìn ra chữ” đó là AI."]},
  {"k":"split","img":"b01-2","alt":"Robot nhỏ đang nhận ra hình con mèo, dịch chữ và trò chuyện","title":"AI là gì?","html":"<p class='big'>AI là máy tính làm được những việc thường cần <b>trí thông minh của con người</b>.</p><p>Nhận ra hình ảnh · hiểu lời nói · dịch · gợi ý · trò chuyện.</p>"},
  {"k":"cards","title":"AI quanh em","items":[["Gợi ý video","TikTok, YouTube đoán em thích gì"],["Google Dịch","Dịch câu sang ngôn ngữ khác"],["Mở khóa khuôn mặt","Điện thoại nhận ra em"],["Lọc thư rác","Gmail tự bỏ thư lừa đảo"],["Báo kẹt xe","Google Maps dự đoán đường đông"],["Trợ lý giọng nói","Hiểu khi em hỏi bằng lời"]]},
  {"k":"timeline","title":"AI đã đi một chặng đường dài","items":[["1950","Alan Turing hỏi: “Máy có thể suy nghĩ không?”"],["1956","Tên gọi “trí tuệ nhân tạo” ra đời"],["1997","Máy Deep Blue thắng nhà vô địch cờ vua thế giới"],["2016","AlphaGo thắng kỳ thủ cờ vây hàng đầu Lee Sedol"],["2022","ChatGPT ra mắt, chatbot trở nên phổ biến"]],"n":"Không cần học thuộc năm. Chỉ cần thấy AI không mới, nhưng vài năm gần đây tiến rất nhanh."},
  {"k":"compare","title":"Làm theo lệnh hay tự học?","a":["Chương trình thường","Người viết sẵn mọi luật: <b>“Nếu trời tối thì bật đèn.”</b><br>Ví dụ: máy tính bỏ túi, đồng hồ báo thức."],"b":["Trí tuệ nhân tạo","Máy <b>tự rút ra quy luật</b> từ rất nhiều ví dụ.<br>Ví dụ: Quick, Draw! đoán hình em vẽ nhờ học từ hàng chục triệu hình vẽ."]},
  {"k":"try","q":"Máy tính bỏ túi có phải là AI không?","opts":["Có, vì nó tính rất nhanh","Không, vì nó chỉ làm đúng luật người viết sẵn"],"a":1,"why":"Tính nhanh không phải là AI. Máy tính bỏ túi không tự học từ ví dụ."},
  {"k":"myth","items":[["Robot nào cũng là AI.","Nhiều robot chỉ làm theo lệnh lặp lại. Còn nhiều AI không có thân robot, chỉ là phần mềm trong điện thoại."],["AI có cảm xúc như người.","AI chỉ mô phỏng cách nói. Nó không vui, không buồn, không thương em."]]},
  {"k":"fact","text":"Mỗi lần em lướt TikTok hay YouTube, AI ghi nhận em xem video nào lâu, video nào lướt qua, rồi đoán video tiếp theo em sẽ thích. Vì vậy hai bạn cùng mở ứng dụng sẽ thấy hai danh sách khác nhau."},
  {"k":"act","title":"Thử ngay","items":["Chơi “AI hay không AI?” trong mục Trò chơi.","Vẽ cho AI đoán tại Quick, Draw!","Liệt kê 5 AI em gặp trong một ngày vào Phiếu 1."],"link":["Mở Quick, Draw!","https://quickdraw.withgoogle.com"],"n":"Quick, Draw! dùng được trên điện thoại và máy tính, không cần đăng nhập. Học sinh chơi theo cặp, một bạn vẽ, một bạn ghi kết quả."},
  {"k":"quote","label":"Ghi vào Sổ tay AI","text":"AI giỏi: nhanh, không mệt. AI kém: không thật sự hiểu, có thể sai rất tự tin. AI là công cụ, em là người dùng."},
  {"k":"recap","items":["AI là máy làm được việc cần trí thông minh.","Chương trình thường làm theo luật; AI tự học từ dữ liệu.","AI ở quanh em: gợi ý video, dịch, mở khóa khuôn mặt.","AI nhanh nhưng có thể sai và không có cảm xúc."]}
 ]
},
{
 p: 1, t: "Máy học như thế nào",
 g: "Nắm 3 bước học máy và thấy dữ liệu xấu làm AI sai.",
 pts: [
  "Máy học qua 3 bước: <b>Dữ liệu</b> (ví dụ có gắn nhãn) → <b>Huấn luyện</b> (tìm quy luật, tạo mô hình) → <b>Dự đoán</b> (đoán nhãn cho dữ liệu mới).",
  "<b>Độ tin cậy</b> cho biết AI chắc đến mức nào, ví dụ 92%. AI hiếm khi chắc chắn 100%.",
  "<b>Rác vào, rác ra:</b> dữ liệu ít, sai nhãn hay lệch thì AI đoán sai.",
  "<b>Thiên kiến:</b> chỉ dạy bằng ảnh mèo trắng thì AI có thể không nhận ra mèo đen."
 ],
 q: [
  ["Thứ tự đúng của máy học là?",["Huấn luyện → Dữ liệu → Dự đoán","Dữ liệu → Huấn luyện → Dự đoán","Dự đoán → Dữ liệu → Huấn luyện"],1,"Phải có dữ liệu trước, rồi mới huấn luyện và dự đoán."],
  ["Chỉ dạy AI bằng ảnh mèo trắng thì sao?",["AI nhận ra mọi con mèo","AI có thể không nhận ra mèo đen","AI tự đi tìm ảnh mèo đen"],1,"Đó là thiên kiến do dữ liệu bị lệch."],
  ["“Bút, tin cậy 92%” nghĩa là?",["AI chắc chắn đúng","AI khá chắc nhưng vẫn có thể sai","92% ảnh bị lỗi"],1,"Độ tin cậy cao vẫn không phải là chắc chắn."]
 ],
 s: [
  {"k":"cover","img":"b02-1","alt":"Robot nhỏ ngồi học bên chồng ảnh có dán nhãn bút, tẩy","sub":"Máy không được ai dạy luật. Nó tự học từ ví dụ, giống em."},
  {"k":"concept","title":"Dữ liệu có nhãn","big":"Mỗi ví dụ đi kèm “đáp án” để máy học: ảnh này là bút, ảnh kia là tẩy.","ex":["Giống như","Thầy cô cho em xem 100 bài toán kèm lời giải. Xem đủ nhiều, em tự rút ra cách giải dạng bài đó."]},
  {"k":"steps","title":"Máy học trong 3 bước","items":[["Dữ liệu","Nhiều ảnh có gắn nhãn: “bút”, “tẩy”."],["Huấn luyện","Máy tìm quy luật, tạo ra một mô hình."],["Dự đoán","Ảnh mới → “Bút, tin cậy 92%”."]],"note":"Giống em học nhận ra con chó: nhìn nhiều con chó → rút ra đặc điểm → nhận ra con chó chưa gặp bao giờ."},
  {"k":"compare","title":"Em học và máy học","a":["Em học","Nhìn vài con chó là nhận ra chó. Hiểu vì sao, biết giải thích."],"b":["Máy học","Cần hàng nghìn ảnh chó. Tìm ra quy luật trong ảnh nhưng không “hiểu” con chó là gì."]},
  {"k":"guess","label":"AI đoán kèm độ tin cậy","title":"Ảnh này là ___","items":[["Bút",92],["Thước kẻ",6],["Tẩy",2]],"note":"AI đưa ra độ tin cậy cho từng khả năng và chọn khả năng cao nhất. 92% vẫn có thể sai.","n":"Nhấn mạnh: độ tin cậy cao không có nghĩa là chắc chắn đúng. Nhắc lại khi học sinh làm Teachable Machine."},
  {"k":"split","img":"b02-2","alt":"Robot bối rối nhìn con mèo đen vì chỉ được học ảnh mèo trắng","title":"Dữ liệu tốt thì AI mới tốt","html":"<p class='big'><b>Rác vào, rác ra.</b></p><p>Dữ liệu ít, sai nhãn hoặc bị lệch thì AI đoán sai.</p><p><b>Thiên kiến:</b> chỉ dạy bằng ảnh mèo trắng → AI có thể không nhận ra mèo đen.</p>","n":"Hỏi lớp: nếu chỉ dạy AI bằng ảnh học sinh mặc áo trắng, AI có nhận ra học sinh mặc áo thể dục không?"},
  {"k":"try","q":"Muốn AI nhận ra con chó tốt hơn, cách nào hiệu quả nhất?","opts":["Thêm thật nhiều ảnh chó đủ giống, đủ màu, đủ góc chụp","Chỉ dùng 10 ảnh chó đẹp nhất"],"a":0,"why":"Dữ liệu nhiều và đa dạng giúp AI không bị “lệch”."},
  {"k":"story","text":"Nhóm của Nam dạy AI nhận ra quả chuối chín bằng 200 ảnh chuối vàng. Khi thử với một quả chuối xanh, AI nói: “Không phải chuối”.","q":"Vì sao AI sai và sửa thế nào?","a":"Dữ liệu bị lệch: AI chỉ thấy chuối vàng nên nghĩ “chuối là thứ màu vàng”. Cần thêm ảnh chuối xanh, chuối chín vừa, nhiều kiểu chụp, và đặt nhãn cho rõ: “chuối chín”, “chuối xanh”."},
  {"k":"fact","text":"Trò chơi Quick, Draw! của Google đã thu thập hơn 50 triệu hình vẽ từ người chơi khắp thế giới. Chính những hình vẽ đó là dữ liệu để AI học đoán hình."},
  {"k":"act","title":"Tự huấn luyện AI với Teachable Machine","items":["Vào Teachable Machine → Image Project.","Tạo 3 lớp: Bút, Tẩy, Không có gì.","Chụp 50–100 ảnh mỗi lớp, rồi bấm Train Model.","Thử bút khác màu, chỗ tối, vật lạ. Ghi kết quả vào Phiếu 2."],"link":["Mở Teachable Machine","https://teachablemachine.withgoogle.com"],"n":"Teachable Machine chạy trên trình duyệt, cần webcam. Ảnh dùng để huấn luyện ở lại trên máy, trừ khi bấm lưu lên mạng. Nhắc học sinh chụp đồ vật, không chụp mặt bạn."},
  {"k":"quote","label":"Ghi vào Sổ tay AI","text":"Dữ liệu → Huấn luyện → Dự đoán. AI chỉ giỏi bằng dữ liệu nó được học."},
  {"k":"recap","items":["Máy học: Dữ liệu → Huấn luyện → Dự đoán.","Dữ liệu có nhãn là ví dụ kèm đáp án.","Độ tin cậy cao vẫn có thể sai.","Rác vào, rác ra: dữ liệu lệch thì AI lệch."]}
 ]
},
{
 p: 1, t: "Chatbot và AI tạo sinh",
 g: "Hiểu chatbot tạo câu trả lời ra sao và vì sao nó có thể bịa.",
 pts: [
  "<b>AI tạo sinh</b> tạo nội dung mới: chữ, hình, nhạc, video.",
  "Chatbot <b>đoán từ tiếp theo hợp lý nhất</b>, lặp lại hàng trăm lần để thành câu trả lời.",
  "<b>Ảo giác:</b> chatbot chọn câu nghe hợp lý chứ không tra sự thật, nên có thể bịa tên sách, nguồn, số liệu.",
  "Chatbot không có cảm xúc, không thay được thầy cô và cha mẹ."
 ],
 q: [
  ["Chatbot tạo câu trả lời bằng cách nào?",["Tra từ điển","Đoán từ tiếp theo hợp lý nhất","Hỏi một người thật"],1,"Mô hình ngôn ngữ dự đoán từng từ một."],
  ["“Ảo giác” của AI là gì?",["Màn hình bị nhòe","AI trả lời sai nhưng nghe rất thuyết phục","AI từ chối trả lời"],1,"Vì vậy luôn phải kiểm chứng."],
  ["Việc nào chatbot hay sai nhất?",["Giải thích khái niệm","Kể tên nguồn, số liệu cụ thể","Gợi ý ý tưởng"],1,"Tên nguồn và số liệu là chỗ AI hay bịa."]
 ],
 s: [
  {"k":"cover","img":"b03-1","alt":"Robot nhỏ đang ghép từng mảnh chữ thành câu như xếp domino","sub":"Chatbot không “biết” câu trả lời. Nó đoán từng từ một."},
  {"k":"concept","title":"AI tạo sinh","big":"AI tạo ra nội dung mới: chữ, hình, nhạc, video.","ex":["Ví dụ","Gõ “bài thơ 4 câu về mùa thu Hà Nội”, chatbot viết ra một bài thơ chưa từng có trước đó."]},
  {"k":"cards","title":"AI tạo sinh làm được gì?","items":[["Chữ","Trả lời câu hỏi, viết đoạn văn, tóm tắt"],["Hình","Vẽ tranh từ mô tả bằng chữ"],["Âm thanh","Đọc văn bản, tạo nhạc"],["Video","Tạo đoạn phim ngắn từ mô tả"]]},
  {"k":"guess","title":"Con mèo đang ngủ trên ___","items":[["ghế",45],["giường",32],["sofa",15]],"note":"Chọn một từ, đoán tiếp từ sau, lặp lại hàng trăm lần → thành câu trả lời. (Số phần trăm chỉ để minh họa.)","n":"Cho cả lớp chơi: thầy cô nói nửa câu, học sinh đoán từ tiếp theo. Đó chính là việc chatbot làm, chỉ là nhanh hơn rất nhiều lần."},
  {"k":"compare","title":"Chatbot chọn câu nghe hợp lý, không tra sự thật","a":["Thường làm tốt","Giải thích khái niệm<br>Tóm tắt, gợi ý ý tưởng<br>Luyện ngoại ngữ"],"b":["Hay sai, phải kiểm tra","Tên sách, nguồn, số liệu<br>Tin tức mới<br>Đếm chữ, tính nhiều bước"]},
  {"k":"split","img":"b03-2","alt":"Robot tự tin cầm cuốn sách không có thật, phía sau là dấu hỏi lớn","title":"Ảo giác: khi AI bịa","html":"<p class='big'>AI có thể trả lời sai mà giọng vẫn <b>rất chắc chắn</b>.</p><p>Thử hỏi: “Kể tên 3 cuốn sách của nhà văn Trần Văn Không Có.” AI tốt sẽ nói không tìm thấy.</p>","n":"Thầy cô nên thử trước câu hỏi trên lớp. Nếu chatbot trả lời đúng, đổi sang nhà văn ít nổi tiếng hơn hoặc hỏi số trang, năm xuất bản."},
  {"k":"fact","text":"Cùng một câu hỏi, hỏi chatbot hai lần có thể nhận hai câu trả lời khác nhau, vì khi chọn từ tiếp theo chatbot có thêm một chút ngẫu nhiên."},
  {"k":"try","q":"Chatbot trả lời: “Bài thơ này của Nguyễn Du, viết năm 1820.” Em nên làm gì?","opts":["Chép ngay vào bài vì chatbot nói rất chắc chắn","Kiểm tra lại trong sách giáo khoa hoặc nguồn tin cậy"],"a":1,"why":"Tên tác giả, năm, số liệu là những chỗ chatbot hay bịa."},
  {"k":"myth","items":[["Chatbot lúc nào cũng tra mạng trước khi trả lời.","Thường nó trả lời từ những gì đã học. Có chatbot tìm kiếm được trên mạng nhưng vẫn có thể tóm tắt sai."],["Chatbot là bạn hiểu em nhất.","Chatbot không có cảm xúc. Khi buồn, hãy tìm bạn bè, thầy cô, cha mẹ."]]},
  {"k":"story","text":"Minh hỏi chatbot ngày sinh của một nhà thơ để làm bài thuyết trình. Chatbot trả lời ngay một ngày tháng cụ thể. Bạn Hoa tra sách thì thấy khác.","q":"Minh nên làm gì?","a":"Tin nguồn đáng tin hơn (sách giáo khoa, trang chính thức), không tin chatbot chỉ vì nó trả lời nhanh và chắc. Ghi nguồn vào slide."},
  {"k":"quote","label":"Ghi vào Sổ tay AI","text":"Chatbot không có cảm xúc, không phải bạn thật, không thay được thầy cô và cha mẹ."},
  {"k":"recap","items":["AI tạo sinh tạo ra chữ, hình, nhạc, video mới.","Chatbot đoán từng từ tiếp theo.","Ảo giác: chatbot có thể bịa mà vẫn nói chắc chắn.","Tên sách, nguồn, số liệu: luôn kiểm tra lại."]}
 ]
},
{
 p: 2, t: "Viết prompt hiệu quả",
 g: "Viết prompt theo công thức 5 ngón tay và biết hỏi tiếp.",
 pts: [
  "<b>Prompt</b> là lời yêu cầu em gửi cho AI. Rõ ràng thì kết quả đúng ý.",
  "Công thức 5 ngón tay: <b>Vai trò – Nhiệm vụ – Bối cảnh – Định dạng – Giới hạn</b>.",
  "Ví dụ tốt: “Bạn là thầy giáo Sinh học. Em học lớp 8, sắp thuyết trình. Giải thích hiệu ứng nhà kính bằng 5 gạch đầu dòng. Không dùng thuật ngữ khó.”",
  "Hỏi tiếp để chỉnh: “ngắn hơn”, “cho ví dụ khác”, “giải thích như cho lớp 5”."
 ],
 q: [
  ["“Trả lời bằng 5 gạch đầu dòng” là ngón nào?",["Vai trò","Định dạng","Bối cảnh"],1,"Định dạng nói AI trả lời theo hình thức nào."],
  ["“Em học lớp 7, sắp kiểm tra” là ngón nào?",["Nhiệm vụ","Bối cảnh","Giới hạn"],1,"Bối cảnh cho AI biết em là ai, cần để làm gì."],
  ["Câu trả lời quá khó hiểu, em nên làm gì?",["Bỏ, không dùng AI nữa","Hỏi tiếp: giải thích như cho lớp 5","Gõ lại y hệt câu cũ"],1,"Hỏi tiếp là cách nhanh nhất để chỉnh câu trả lời."]
 ],
 s: [
  {"k":"cover","img":"b04-1","alt":"Bàn tay xòe năm ngón, mỗi ngón gắn một nhãn màu, robot nhỏ chỉ vào","sub":"Một bàn tay, năm ngón, đủ để AI hiểu đúng ý em."},
  {"k":"concept","title":"Prompt là gì?","big":"Lời yêu cầu em gửi cho AI. Yêu cầu rõ thì kết quả đúng ý.","ex":["Giống như","Nhờ bạn mua đồ ăn sáng: “mua gì cũng được” thì bạn đoán mò; “1 bánh mì trứng, không cay, dưới 20 nghìn” thì đúng ý ngay."]},
  {"k":"cards","title":"Công thức 5 ngón tay","items":[["Ngón cái · Vai trò","AI đóng vai ai? Thầy giáo Sinh học"],["Ngón trỏ · Nhiệm vụ","Làm gì? Giải thích, tóm tắt, ra đề"],["Ngón giữa · Bối cảnh","Em là ai, để làm gì? Lớp 8, sắp thuyết trình"],["Ngón áp út · Định dạng","Dạng gì? 5 gạch đầu dòng, bảng"],["Ngón út · Giới hạn","Tránh gì? Không dùng từ khó"]],"n":"Cho học sinh giơ tay, chạm từng ngón khi đọc. Mẹo nhớ: Vai – Việc – Cảnh – Dạng – Giới."},
  {"k":"compare","title":"Prompt kém và prompt tốt","a":["Kém · 1 ngón","<b>“Viết về môi trường.”</b><br>AI phải đoán mò: dài, chung chung."],"b":["Tốt · đủ 5 ngón","“Bạn là thầy giáo Sinh học. Em học lớp 8, đang chuẩn bị thuyết trình. Hãy giải thích hiệu ứng nhà kính bằng 5 gạch đầu dòng, kèm 1 ví dụ ở Việt Nam. Không dùng thuật ngữ khó.”"]},
  {"k":"try","q":"Prompt “Bạn là cô giáo Tiếng Anh. Giải thích thì hiện tại hoàn thành.” còn thiếu ngón nào?","opts":["Bối cảnh, Định dạng, Giới hạn","Vai trò và Nhiệm vụ"],"a":0,"why":"Đã có vai trò (cô giáo) và nhiệm vụ (giải thích). Còn thiếu: em học lớp mấy, trình bày thế nào, giới hạn gì."},
  {"k":"split","img":"b04-2","alt":"Học sinh trò chuyện qua lại với robot, các bong bóng thoại ngắn dần","title":"Hỏi tiếp để chỉnh","html":"<p class='big'>Câu trả lời chưa ưng? <b>Đừng bỏ, hãy hỏi tiếp.</b></p><p>“ngắn hơn” · “cho ví dụ khác” · “giải thích như cho lớp 5” · “chuyển thành bảng”</p>","n":"Cho học sinh thi “3 lượt hỏi tiếp”: ai làm câu trả lời tốt lên nhiều nhất sau 3 lượt."},
  {"k":"table","title":"Câu hỏi tiếp hay dùng","head":["Muốn","Gõ"],"rows":[["Ngắn hơn","Rút còn 5 gạch đầu dòng."],["Dễ hiểu hơn","Giải thích như cho học sinh lớp 5."],["Ví dụ khác","Cho ví dụ gần với đời sống học sinh."],["Kiểm tra lại","Câu nào trong đó bạn chưa chắc chắn?"]]},
  {"k":"fact","text":"Chatbot không đọc được suy nghĩ của em. Nó chỉ biết những gì em viết trong prompt. Vì vậy cùng một AI, người hỏi giỏi nhận câu trả lời tốt hơn hẳn."},
  {"k":"myth","items":[["Prompt càng dài càng tốt.","Prompt cần rõ, không cần dài. Đủ 5 ngón tay là được, bỏ chữ thừa."],["Phải viết bằng tiếng Anh AI mới hiểu.","Các chatbot lớn hiểu tiếng Việt tốt. Viết bằng ngôn ngữ em diễn đạt rõ nhất."]]},
  {"k":"story","text":"Lan gõ: “Lập kế hoạch học.” Chatbot đưa ra một kế hoạch chung chung cho người đi làm, học 4 tiếng mỗi ngày.","q":"Lan nên sửa prompt thế nào?","a":"Thêm bối cảnh và giới hạn: “Bạn là thầy chủ nhiệm. Em học lớp 9, còn 3 tuần thi vào 10, mỗi ngày học thêm được 2 tiếng. Lập kế hoạch ôn Toán, Văn, Anh theo bảng từng ngày.”"},
  {"k":"act","title":"Luyện tập","items":["Mở Phòng tập prompt, gõ prompt và xem máy chấm mấy ngón.","Viết lại 5 prompt kém trong Phiếu 4.","Thi prompt: “Lập kế hoạch ôn Toán trong 1 tuần”."],"link":["Mở Phòng tập prompt","index.html#phong-tap-prompt"]},
  {"k":"recap","items":["Prompt là lời yêu cầu gửi cho AI.","5 ngón tay: Vai trò – Nhiệm vụ – Bối cảnh – Định dạng – Giới hạn.","Chưa ưng thì hỏi tiếp, đừng bỏ.","Rõ ràng quan trọng hơn dài dòng."]}
 ]
},
{
 p: 2, t: "AI làm gia sư",
 g: "Dùng AI để hiểu bài, không chép đáp án.",
 pts: [
  "<b>Máy chép bài:</b> hỏi đáp án rồi chép. <b>Gia sư:</b> hỏi gợi ý, tự làm, nhờ chấm. Chỉ cách thứ hai giúp em giỏi lên.",
  "Câu thần chú: “Đừng cho tôi đáp án. Hãy gợi ý từng bước và hỏi tôi để tôi tự giải.”",
  "5 cách học: giải thích lại, gợi ý từng bước, tạo câu trắc nghiệm, chấm bài em tự làm, luyện hội thoại tiếng Anh.",
  "AI vẫn có thể giải sai. Bài kiểm tra và bài nộp: hỏi thầy cô trước có được dùng AI không."
 ],
 q: [
  ["Câu nào là kiểu gia sư?",["Giải hộ bài 5 trang 32","Gợi ý bước đầu tiên, đừng giải hết","Viết bài văn để em nộp"],1,"Gợi ý giúp em tự suy nghĩ."],
  ["3x + 7 = 22 thì x bằng?",["3","5","7"],1,"3x = 22 − 7 = 15, nên x = 5."],
  ["Muốn dùng AI khi làm bài kiểm tra thì sao?",["Cứ dùng thoải mái","Hỏi thầy cô trước","Dùng lén"],1,"Mỗi lớp có quy định riêng, phải hỏi trước."]
 ],
 s: [
  {"k":"cover","img":"b05-1","alt":"Robot nhỏ đeo kính như thầy giáo, chỉ bảng cho học sinh tự giải bài","sub":"AI là gia sư kiên nhẫn, nếu em biết cách nhờ."},
  {"k":"compare","title":"Máy chép bài hay gia sư?","a":["Máy chép bài","“Giải hộ bài 5 trang 32.” → chép → nộp.<br>Não không làm việc, nên không nhớ gì."],"b":["Gia sư","Hỏi gợi ý → tự làm → nhờ chấm.<br>Em tự nghĩ ra nên em giỏi lên."],"n":"Hỏi lớp: “Nếu chép đáp án cả năm, đến giờ thi em có máy chép bài không?” Để học sinh tự rút ra kết luận."},
  {"k":"quote","label":"Câu thần chú gia sư","text":"“Đừng cho tôi đáp án. Hãy gợi ý từng bước và hỏi tôi để tôi tự giải.”"},
  {"k":"steps","title":"Một buổi học với gia sư AI","items":[["Hỏi khái niệm","“Giải thích … bằng ví dụ đời thường.”"],["Tự làm","Làm bài trước, không hỏi đáp án"],["Nhờ gợi ý","Bí chỗ nào hỏi chỗ đó"],["Nhờ chấm","“Chỉ ra chỗ sai, đừng làm lại hộ.”"],["Tự kiểm tra","“Ra 5 câu trắc nghiệm cho tôi.”"]]},
  {"k":"cards","title":"5 cách học cùng AI","items":[["Giải thích lại","Khái niệm khó bằng ví dụ đời thường"],["Gợi ý từng bước","Cho bài toán đang bí"],["Tạo câu trắc nghiệm","Để tự kiểm tra"],["Chấm bài em làm","Chỉ chỗ sai, không làm lại hộ"],["Luyện tiếng Anh","Hội thoại, AI sửa lỗi sau mỗi câu"],["Luôn kiểm tra lại","AI vẫn có thể giải sai"]]},
  {"k":"fact","text":"Các nhà khoa học đã chứng minh: tự làm bài kiểm tra giúp nhớ lâu hơn nhiều so với đọc đi đọc lại. Nhờ AI ra câu hỏi để tự kiểm tra là cách học rất hiệu quả.","n":"Đây là “hiệu ứng kiểm tra” (testing effect / retrieval practice), được nhiều nghiên cứu tâm lý học giáo dục xác nhận."},
  {"k":"try","q":"Câu nào biến AI thành gia sư?","opts":["Giải hộ bài 5 trang 32.","Đây là bài em làm. Chỉ ra bước sai, đừng giải lại hộ em."],"a":1,"why":"Em vẫn tự suy nghĩ, AI chỉ chỉ chỗ cần sửa."},
  {"k":"story","text":"Bình nhờ AI gợi ý bài toán hình. AI giải và ra đáp số 24 cm². Bình tự làm lại thì được 12 cm².","q":"Bình nên làm gì?","a":"AI cũng có thể giải sai, nhất là Toán nhiều bước. Bình kiểm tra lại từng bước, hỏi AI “bước nào bạn tính diện tích?”, và khi còn nghi ngờ thì hỏi thầy cô."},
  {"k":"myth","items":[["Dùng AI để học là gian lận.","Dùng AI để hiểu bài là học. Nhờ AI làm hộ rồi nộp như bài của mình mới là gian lận."],["AI giải Toán không bao giờ sai.","Chatbot vẫn có thể tính sai, nhất là bài nhiều bước. Luôn tự kiểm tra lại."]]},
  {"k":"split","img":"b05-2","alt":"Học sinh luyện nói tiếng Anh với robot trong vai người bán hàng","title":"Thử ở 3 trạm","html":"<p><b>Trạm Toán:</b> nhờ gợi ý giải 3x + 7 = 22.</p><p><b>Trạm Tiếng Anh:</b> hội thoại gọi món, AI sửa lỗi.</p><p><b>Trạm Ôn tập:</b> AI tạo 5 câu trắc nghiệm, đổi nhóm làm.</p>","n":"Chia lớp thành 3 nhóm luân phiên qua 3 trạm, mỗi trạm 10 phút. Học sinh dưới 13 tuổi làm cùng thầy cô trên máy của lớp."},
  {"k":"recap","items":["Gia sư: hỏi gợi ý, tự làm, nhờ chấm.","Câu thần chú: “Đừng cho tôi đáp án.”","Tự kiểm tra bằng câu hỏi AI tạo giúp nhớ lâu.","AI có thể giải sai; bài kiểm tra hỏi thầy cô trước."]}
 ]
},
{
 p: 2, t: "Kiểm chứng thông tin, deepfake",
 g: "Kiểm tra lại điều AI nói và nhận biết tin giả.",
 pts: [
  "AI sai vì bịa, vì dữ liệu cũ, hoặc vì hiểu nhầm câu hỏi.",
  "4 bước: <b>DỪNG</b> (đừng vội chia sẻ) – <b>HỎI</b> (ai nói?) – <b>TÌM</b> (nguồn khác?) – <b>TRUY</b> (gốc từ đâu?).",
  "<b>Quy tắc 3 nguồn:</b> đối chiếu thêm ít nhất 2 nguồn đáng tin như sách giáo khoa, trang .gov.vn, báo chính thống.",
  "<b>Deepfake</b> là ảnh, video, giọng giả bằng AI. Cuộc gọi lạ xin tiền gấp: cúp máy, gọi lại số quen, hỏi “mật khẩu gia đình”."
 ],
 q: [
  ["Thấy một tin gây sốc, bước đầu tiên là?",["Chia sẻ ngay","Dừng lại","Bình luận"],1,"Dừng lại trước khi tin và chia sẻ."],
  ["“Việt Nam hiện có 63 tỉnh, thành phố” — đúng hay sai?",["Đúng","Sai"],1,"Từ năm 2025 Việt Nam còn 34 đơn vị cấp tỉnh. AI dùng dữ liệu cũ có thể nói sai."],
  ["Giọng giống anh trai gọi xin chuyển tiền gấp, em làm gì?",["Chuyển tiền ngay","Cúp máy, gọi lại số quen, báo người lớn","Gửi mã OTP"],1,"Giọng nói có thể bị giả bằng AI."]
 ],
 s: [
  {"k":"cover","img":"b06-1","alt":"Học sinh đội mũ thám tử cầm kính lúp soi một bản tin trên điện thoại","sub":"Hôm nay em là thám tử thông tin."},
  {"k":"concept","title":"Tin giả","big":"Thông tin sai được làm cho trông như thật, thường để gây sốc, kiếm lượt xem hoặc lừa tiền.","ex":["Dấu hiệu","Tít giật gân, nhiều dấu chấm than, không rõ ai viết, thúc giục “chia sẻ ngay”."]},
  {"k":"steps","title":"4 bước trước khi tin và chia sẻ","items":[["DỪNG","Đừng vội tin, đừng vội chia sẻ."],["HỎI","Ai nói điều này? Họ có đáng tin không?"],["TÌM","Nguồn khác có đưa tin giống vậy không?"],["TRUY","Số liệu, ảnh, câu trích từ đâu ra?"]],"note":"Quy tắc 3 nguồn: đối chiếu thêm ít nhất 2 nguồn đáng tin — sách giáo khoa, trang .gov.vn, báo chính thống.","n":"Thực hành ngay trên một tin giả thầy cô chuẩn bị sẵn. Học sinh làm theo từng bước, giơ tay khi tìm ra điểm đáng ngờ."},
  {"k":"table","title":"Nguồn nào đáng tin hơn?","head":["Đáng tin hơn","Cần cẩn thận"],"rows":[["Sách giáo khoa","Bài đăng “nghe nói…”"],["Trang .gov.vn của cơ quan nhà nước","Trang lạ, không rõ tác giả"],["Báo chính thống có tên tác giả","Ảnh cắt ghép không rõ nguồn"],["Thầy cô, chuyên gia","Câu trả lời chatbot không có nguồn"]]},
  {"k":"split","img":"b06-2","alt":"Hai bức ảnh gần giống nhau, một bức có bàn tay sáu ngón được khoanh tròn","title":"Dấu hiệu deepfake","html":"<p>Tay, ngón tay kỳ lạ · chữ trong ảnh bị méo · ánh sáng vô lý · môi không khớp lời.</p><p class='big'>Deepfake ngày càng giống thật → <b>kiểm tra nguồn quan trọng hơn soi hình</b>.</p>"},
  {"k":"fact","text":"Ngày nay AI chỉ cần một đoạn ghi âm ngắn vài giây là có thể bắt chước giọng nói của một người. Kẻ xấu có thể giả giọng người thân để lừa tiền."},
  {"k":"try","q":"Em thấy video một ca sĩ nổi tiếng kêu gọi chuyển tiền ủng hộ vào tài khoản cá nhân. Việc đầu tiên?","opts":["Dừng lại, kiểm tra trên trang chính thức của ca sĩ","Chia sẻ ngay cho mọi người cùng ủng hộ"],"a":0,"why":"Có thể là deepfake. Dừng – Hỏi – Tìm – Truy trước khi tin."},
  {"k":"story","text":"Tối nay mẹ của Hà nhận cuộc gọi video, giọng và mặt giống hệt Hà: “Mẹ ơi con bị tai nạn, chuyển gấp cho con 10 triệu!” Hà đang ngồi học ở phòng bên.","q":"Gia đình Hà nên làm gì để phòng tình huống này?","a":"Đặt sẵn “mật khẩu gia đình”. Khi có cuộc gọi lạ xin tiền gấp: cúp máy, gọi lại số đã lưu, hỏi mật khẩu gia đình, báo người lớn khác."},
  {"k":"cards","title":"Cuộc gọi lạ xin tiền gấp?","items":[["1. Không chuyển tiền","Cúp máy trước đã"],["2. Gọi lại số quen","Số của người thân em đã lưu"],["3. Hỏi mật khẩu gia đình","Câu bí mật cả nhà đã đặt"],["4. Báo người lớn","Ngay lập tức"]],"n":"Gợi ý học sinh về nhà kể cho ông bà nghe 4 bước này. Người lớn tuổi là nhóm hay bị lừa nhất."},
  {"k":"myth","items":[["Ảnh trông thật thì là ảnh thật.","AI tạo được ảnh rất giống thật. Phải kiểm tra nguồn gốc."],["Nhiều người chia sẻ thì chắc là đúng.","Tin giả thường lan nhanh hơn tin thật. Số lượt chia sẻ không chứng minh điều gì."]]},
  {"k":"quote","label":"Bài về nhà","text":"Cùng bố mẹ đặt một “mật khẩu gia đình”. Tìm một tin trên mạng và kiểm chứng theo 4 bước."},
  {"k":"recap","items":["4 bước: Dừng – Hỏi – Tìm – Truy.","Quy tắc 3 nguồn trước khi tin.","Deepfake giả được mặt và giọng.","Cuộc gọi xin tiền gấp: cúp máy, gọi lại, hỏi mật khẩu gia đình."]}
 ]
},
{
 p: 2, t: "An toàn, riêng tư và đạo đức",
 g: "Biết thông tin nào không đưa cho AI, dùng AI trung thực và tử tế.",
 pts: [
  "<b>Đèn đỏ</b> (không bao giờ): họ tên kèm trường lớp, địa chỉ, số điện thoại, mật khẩu, ảnh mặt. <b>Vàng</b> (hỏi người lớn): ảnh bài có tên, chuyện riêng gia đình. <b>Xanh</b>: câu hỏi bài học.",
  "Độ tuổi: ChatGPT từ 13 tuổi và cần phụ huynh đồng ý; Gemini từ 13 tuổi; Claude từ 18 tuổi.",
  "Nộp bài AI viết như bài của mình là gian lận. Ghi rõ “Có sự hỗ trợ của AI ở phần…”.",
  "Không ghép mặt, chế ảnh, giả giọng bạn bè. Có chuyện buồn, hãy nói với người lớn tin cậy."
 ],
 q: [
  ["Số điện thoại của mẹ thuộc đèn nào?",["Xanh","Vàng","Đỏ"],2,"Không bao giờ đưa số điện thoại cho AI."],
  ["Nộp bài AI viết như bài của mình là?",["Bình thường","Gian lận"],1,"Dùng AI để học, không để làm hộ."],
  ["Claude dành cho người từ bao nhiêu tuổi?",["13","16","18"],2,"Học sinh THCS không tự dùng Claude."]
 ],
 s: [
  {"k":"cover","img":"b07-1","alt":"Robot nhỏ làm cảnh sát giao thông đứng cạnh cột đèn đỏ vàng xanh","sub":"Dữ liệu cũng có đèn giao thông."},
  {"k":"concept","title":"Thông tin cá nhân","big":"Thông tin giúp người khác biết em là ai, ở đâu, liên lạc với em thế nào.","ex":["Ví dụ","Họ tên kèm trường lớp, địa chỉ nhà, số điện thoại, ảnh khuôn mặt, mật khẩu."]},
  {"k":"lights","title":"Đèn giao thông dữ liệu","items":[["r","Đỏ · Không bao giờ","Họ tên kèm trường lớp, địa chỉ nhà, số điện thoại, mật khẩu, ảnh khuôn mặt, tài khoản của gia đình."],["y","Vàng · Hỏi người lớn","Ảnh bài làm có ghi tên, chuyện riêng của gia đình, ảnh chụp chung với bạn."],["g","Xanh · Thoải mái","Câu hỏi bài học, ý tưởng chung, bài viết không có thông tin cá nhân."]],"n":"Nhấn mạnh: dữ liệu gửi cho chatbot rời khỏi máy em, đến máy chủ của công ty AI."},
  {"k":"try","q":"“Nhà em ở ngõ 15 Trần Phú, viết bài văn tả ngôi nhà giúp em.” Câu này có vấn đề gì?","opts":["Không sao, chỉ là bài văn","Có địa chỉ nhà: đèn đỏ, cần xóa trước khi gửi"],"a":1,"why":"Chỉ cần mô tả ngôi nhà, không cần địa chỉ thật."},
  {"k":"table","title":"Quy định độ tuổi","head":["Công cụ","Điều kiện"],"rows":[["ChatGPT","Từ 13 tuổi, cần phụ huynh đồng ý"],["Gemini","Từ 13 tuổi"],["Claude","Từ 18 tuổi"]],"note":"Dưới tuổi quy định: học cùng thầy cô hoặc cha mẹ.","n":"Theo trang hỗ trợ của Google, tài khoản dưới 18 tuổi dùng ứng dụng Gemini có thể bị giới hạn ngôn ngữ và tính năng. Người dạy kiểm tra quy định mới nhất trước buổi học."},
  {"k":"split","img":"b07-2","alt":"Các bạn học sinh cùng ký tên lên tấm bảng cam kết lớp học","title":"Trung thực và tử tế","html":"<p><b>Trung thực:</b> nộp bài AI viết như bài của mình là gian lận.</p><p><b>Tử tế:</b> không ghép mặt, chế ảnh, giả giọng bạn bè.</p><p><b>Chăm sóc bản thân:</b> có chuyện buồn, hãy nói với người lớn tin cậy.</p>"},
  {"k":"story","text":"Một bạn trong lớp lấy ảnh của Tuấn, dùng AI ghép vào cảnh hài hước rồi đăng lên nhóm lớp. Cả nhóm cười, Tuấn buồn không muốn đi học.","q":"Chuyện này sai ở đâu, và các bạn nên làm gì?","a":"Ghép mặt người khác khi chưa được đồng ý là xúc phạm và có thể vi phạm pháp luật. Bạn đăng cần gỡ ảnh, xin lỗi Tuấn. Các bạn khác không chia sẻ tiếp và báo thầy cô."},
  {"k":"fact","text":"Việt Nam có Luật Bảo vệ dữ liệu cá nhân, hiệu lực từ ngày 01/01/2026. Thông tin cá nhân của em được pháp luật bảo vệ, và em cũng phải tôn trọng thông tin của người khác."},
  {"k":"myth","items":[["Xóa tin nhắn là thông tin biến mất hẳn.","Thông tin có thể đã được lưu trên máy chủ hoặc bị người khác chụp màn hình."],["Ghi rõ “có AI hỗ trợ” thì bị điểm kém.","Trung thực là điều thầy cô quý nhất. Giấu mới là gian lận."]]},
  {"k":"act","title":"Hoạt động","items":["Chơi “Đèn giao thông dữ liệu” trong mục Trò chơi.","Thảo luận 4 tình huống đạo đức trong Phiếu 7.","Cả lớp viết Cam kết dùng AI gồm 5 quy tắc và ký tên."],"link":["Chơi Đèn giao thông","index.html#tro-choi"]},
  {"k":"recap","items":["Đỏ không bao giờ, Vàng hỏi người lớn, Xanh yên tâm.","Làm đúng quy định độ tuổi của từng công cụ.","Trung thực: ghi rõ phần có AI hỗ trợ.","Tử tế: không ghép mặt, giả giọng bạn bè."]}
 ]
},
{
 p: 3, t: "Sáng tạo hình ảnh với AI",
 g: "Viết prompt ảnh 6 yếu tố và làm poster có trách nhiệm.",
 pts: [
  "AI tạo ảnh đã học từ hàng tỷ ảnh kèm mô tả, nên vẽ được ảnh mới từ chữ.",
  "Prompt ảnh 6 yếu tố: <b>Chủ thể + Hành động + Bối cảnh + Phong cách + Ánh sáng, màu + Góc nhìn</b>.",
  "Chữ trong ảnh sai → tạo ảnh không chữ, thêm chữ bằng Canva. Tay lạ → đổi góc nhìn.",
  "Không tạo ảnh người thật, ghi “Ảnh tạo bởi AI”. Poster: 1 thông điệp, chữ to, tối đa 3 màu."
 ],
 q: [
  ["“Tranh màu nước” là yếu tố nào?",["Chủ thể","Phong cách","Góc nhìn"],1,"Phong cách quyết định ảnh trông như vẽ bằng gì."],
  ["Chữ trong ảnh AI bị sai chính tả, em làm gì?",["Để nguyên","Tạo ảnh không chữ, thêm chữ bằng Canva"],1,"AI tạo ảnh hay viết sai chữ."],
  ["Có nên tạo ảnh AI về bạn cùng lớp để trêu?",["Có","Không"],1,"Đó là bắt nạt và có thể vi phạm pháp luật."]
 ],
 s: [
  {"k":"cover","img":"b08-1","alt":"Robot nhỏ cầm cọ vẽ, từ bảng màu bay ra những bức tranh","sub":"Từ chữ thành tranh: em là đạo diễn, AI là họa sĩ."},
  {"k":"concept","title":"AI tạo ảnh","big":"AI học từ hàng tỷ ảnh kèm mô tả, rồi vẽ ảnh mới theo lời em viết.","ex":["Ví dụ","“Chú mèo cam đọc sách trong thư viện, tranh màu nước” → một bức tranh mới hoàn toàn."]},
  {"k":"cards","title":"Prompt ảnh: 6 yếu tố","items":[["1. Chủ thể","chú robot nhỏ màu xanh"],["2. Hành động","đang tưới cây"],["3. Bối cảnh","trong vườn trường"],["4. Phong cách","tranh màu nước"],["5. Ánh sáng, màu","nắng sớm dịu"],["6. Góc nhìn","ngang tầm mắt"]],"n":"Mỗi học sinh viết một câu 6 yếu tố trên giấy trước khi dùng máy, để tập trung vào ý tưởng chứ không thử bừa."},
  {"k":"split","img":"b08-2","alt":"Tranh màu nước: chú robot nhỏ màu xanh tưới cây trong vườn trường lúc nắng sớm","title":"Kết quả từ prompt","html":"<p class='big'>“Một chú robot nhỏ màu xanh đang tưới cây trong vườn trường, tranh màu nước, nắng sớm dịu, góc nhìn ngang tầm mắt.”</p>"},
  {"k":"compare","title":"Prompt ảnh kém và tốt","a":["Kém","“Vẽ con mèo.” → AI tự chọn tất cả: màu gì, ở đâu, kiểu gì."],"b":["Tốt","“Chú mèo cam mập đang ngủ trên bậu cửa sổ, ngoài trời mưa, tranh màu nước, ánh sáng ấm, nhìn ngang.”"]},
  {"k":"try","q":"Muốn ảnh trông như tranh màu nước, em thêm yếu tố nào?","opts":["Phong cách","Góc nhìn"],"a":0,"why":"“Tranh màu nước”, “hoạt hình 3D”, “ảnh chụp” là phong cách."},
  {"k":"table","title":"Sửa lỗi ảnh AI","head":["Lỗi","Cách sửa"],"rows":[["Chữ trong ảnh sai","Tạo ảnh không chữ, thêm chữ bằng Canva"],["Tay, ngón kỳ lạ","Đổi góc nhìn, tạo lại"],["Không giống ý","Thêm chi tiết từng yếu tố"]],"note":"Không tạo ảnh người thật. Ghi “Ảnh tạo bởi AI” khi đăng."},
  {"k":"fact","text":"Theo Luật Trí tuệ nhân tạo của Việt Nam (hiệu lực từ 01/3/2026), hình ảnh, video, âm thanh do AI tạo ra phải có dấu hiệu nhận biết. Vì vậy em nên ghi “Ảnh tạo bởi AI” trên sản phẩm."},
  {"k":"myth","items":[["Ảnh AI vẽ thì muốn dùng sao cũng được.","Không được tạo ảnh giả người thật, không gây hiểu nhầm. Một số công cụ còn có quy định riêng về cách dùng ảnh."],["Ảnh đẹp nhờ AI giỏi, không cần ý tưởng.","Ý tưởng và thông điệp là của em. AI chỉ là cây bút."]]},
  {"k":"story","text":"Nhóm của Mai làm poster An toàn giao thông. Ảnh AI tạo ra có biển báo ghi chữ sai chính tả và một bạn nhỏ có 6 ngón tay.","q":"Nhóm nên xử lý thế nào?","a":"Tạo lại ảnh không có chữ, thêm chữ đúng bằng Canva. Đổi góc nhìn hoặc giấu tay sau tay lái. Kiểm tra kỹ trước khi in."},
  {"k":"act","title":"Dự án poster","items":["Chủ đề: “Trường em xanh – sạch – đẹp” hoặc “An toàn giao thông”.","1 thông điệp chính dưới 10 chữ, tối đa 3 màu.","Ảnh AI + chữ tự viết, ghép trên Canva. Làm theo Phiếu 8."],"n":"Chấm poster theo 3 tiêu chí: thông điệp rõ, ảnh hợp nội dung, có ghi “Ảnh tạo bởi AI”. Học sinh dưới 13 tuổi tạo ảnh cùng thầy cô."},
  {"k":"recap","items":["Prompt ảnh 6 yếu tố: chủ thể, hành động, bối cảnh, phong cách, ánh sáng – màu, góc nhìn.","Chữ trong ảnh sai: thêm chữ bằng Canva.","Không tạo ảnh người thật; ghi “Ảnh tạo bởi AI”.","Ý tưởng là của em, AI là cây bút."]}
 ]
},
{
 p: 3, t: "Thuyết trình và kể chuyện",
 g: "Để AI gợi ý và góp ý, còn nội dung do em viết.",
 pts: [
  "Quy trình 5 bước: <b>Ý tưởng</b> (em) → <b>Dàn ý</b> (AI gợi ý) → <b>Viết</b> (em) → <b>Góp ý</b> (AI) → <b>Trình bày</b> (em).",
  "<b>Quy tắc 70/30:</b> ít nhất 70% nội dung là của em.",
  "Prompt góp ý: “Chỉ ra 3 điểm mạnh và 3 điểm cần sửa. Đừng viết lại hộ tôi.”",
  "Slide tốt: mỗi slide một ý, tối đa 6 dòng, chữ to, có hình."
 ],
 q: [
  ["Theo quy tắc 70/30, ai viết phần lớn nội dung?",["AI","Em"],1,"Em cầm lái, AI ngồi cạnh."],
  ["Prompt xin góp ý tốt là?",["“Viết lại hộ tôi cho hay”","“Chỉ ra điểm mạnh, điểm cần sửa, đừng viết lại hộ”"],1,"Em giữ quyền quyết định sửa gì."],
  ["Một slide tốt có đặc điểm gì?",["Nhiều chữ nhỏ","Mỗi slide một ý, chữ to"],1,"Người nghe đọc được từ cuối lớp."]
 ],
 s: [
  {"k":"cover","img":"b09-1","alt":"Học sinh tự tin thuyết trình trước lớp, robot nhỏ đứng cạnh cầm bảng gợi ý","sub":"Em cầm lái, AI ngồi cạnh."},
  {"k":"concept","title":"Quy tắc 70/30","big":"Ít nhất 70% nội dung là của em. AI chỉ gợi ý và góp ý.","ex":["Vì sao?","Thuyết trình là để em hiểu và nói được. Thầy cô hỏi thêm, chỉ người tự làm mới trả lời được."]},
  {"k":"steps","title":"Quy trình 5 bước","items":[["Ý tưởng · Em","Chọn chủ đề, điều muốn nói"],["Dàn ý · AI gợi ý","Em chọn và sửa"],["Viết · Em","Tự viết nội dung"],["Góp ý · AI","Em quyết định sửa gì"],["Trình bày · Em","Luyện nói, lên thuyết trình"]],"note":"Quy tắc 70/30: ít nhất 70% nội dung là của em."},
  {"k":"quote","label":"Prompt xin góp ý","text":"“Đây là bài thuyết trình của tôi. Hãy chỉ ra 3 điểm mạnh và 3 điểm cần sửa. Đừng viết lại hộ tôi.”"},
  {"k":"try","q":"Cách nào đúng quy tắc 70/30?","opts":["Em viết bài, nhờ AI chỉ ra 3 chỗ cần sửa","Nhờ AI viết cả bài, em đọc lại một lượt"],"a":0,"why":"Nội dung chính do em viết, AI chỉ góp ý."},
  {"k":"split","img":"b09-2","alt":"So sánh hai slide: một slide chi chít chữ nhỏ, một slide một ý với hình to","title":"Một slide tốt","html":"<p>Mỗi slide một ý · tối đa 6 dòng · chữ to · có hình minh họa.</p><p><b>Kể chuyện:</b> mở đầu → vấn đề → cao trào → kết thúc có thông điệp.</p>"},
  {"k":"cards","title":"Câu chuyện 4 phần","items":[["Mở đầu","Nhân vật, bối cảnh"],["Vấn đề","Có chuyện gì xảy ra?"],["Cao trào","Lúc căng thẳng nhất"],["Kết thúc","Giải quyết, bài học rút ra"]]},
  {"k":"fact","text":"Có một quy tắc làm slide nổi tiếng tên “10 – 20 – 30”: không quá 10 slide, không quá 20 phút, chữ không nhỏ hơn cỡ 30. Học sinh có thể áp dụng: ít slide, nói ngắn, chữ to.","n":"Quy tắc do Guy Kawasaki đề xuất cho bài thuyết trình gọi vốn; dùng ở đây như mẹo dễ nhớ."},
  {"k":"myth","items":[["Slide càng nhiều chữ càng chứng tỏ chuẩn bị kỹ.","Người nghe đọc chữ thì không nghe em nói. Slide chỉ cần ý chính và hình."],["Nhờ AI viết lời thoại thì nói sẽ hay hơn.","Lời của người khác đọc lên rất gượng. Tự viết bằng giọng em sẽ tự nhiên hơn."]]},
  {"k":"act","title":"Thực hành","items":["Chọn chủ đề thuyết trình 3 phút (Phiếu 9).","Tự viết dàn ý, nhờ AI gợi ý thêm 2 ý, em chọn giữ hay bỏ.","Làm 5 slide theo quy tắc mỗi slide một ý.","Nhờ AI góp ý bằng prompt ở trên, sửa rồi trình bày trước nhóm."],"n":"Yêu cầu học sinh ghi rõ trong slide cuối: phần nào có AI hỗ trợ."},
  {"k":"recap","items":["Quy trình 5 bước: em cầm lái, AI ngồi cạnh.","Quy tắc 70/30.","Nhờ AI góp ý, không nhờ viết hộ.","Mỗi slide một ý, chữ to, có hình."]}
 ]
},
{
 p: 4, t: "Tư duy thuật toán với Scratch",
 g: "Hiểu thuật toán và tự làm chatbot đố vui có tính điểm.",
 pts: [
  "<b>Thuật toán</b> là các bước rõ ràng, theo thứ tự để làm một việc, như công thức nấu ăn.",
  "4 kỹ năng: <b>Chia nhỏ – Tìm quy luật – Lược bỏ – Thiết kế thuật toán</b>.",
  "Chatbot Scratch: khi bấm cờ xanh → đặt Điểm = 0 → hỏi và đợi → nếu trả lời đúng thì cộng điểm → cuối cùng nói điểm.",
  "Chatbot Scratch chỉ theo luật em viết sẵn; chatbot AI tự học từ dữ liệu."
 ],
 q: [
  ["Thuật toán là gì?",["Một loại máy tính","Các bước rõ ràng, theo thứ tự"],1,"Máy làm đúng từng bước em viết."],
  ["Quên “đặt Điểm thành 0” thì sao?",["Không sao","Điểm bị cộng dồn qua các lần chơi"],1,"Luôn đặt lại biến khi bắt đầu."],
  ["Scratch có coi “HÀ NỘI” bằng “Hà Nội” không?",["Có","Không"],0,"Phép so sánh = của Scratch không phân biệt chữ hoa, chữ thường, nhưng phân biệt dấu."]
 ],
 s: [
  {"k":"cover","img":"b10-1","alt":"Robot nhỏ làm theo từng thẻ hướng dẫn pha mì gói, thẻ xếp thành hàng","sub":"Máy làm đúng từng chữ em viết, nên lệnh phải thật rõ."},
  {"k":"concept","title":"Thuật toán","big":"Các bước rõ ràng, theo thứ tự, để làm xong một việc.","ex":["Ví dụ","Công thức nấu ăn, hướng dẫn lắp đồ chơi, cách đi từ nhà đến trường đều là thuật toán."]},
  {"k":"steps","title":"Thuật toán pha mì gói","items":[["Đun nước","Đun 400 ml nước sôi"],["Bóc gói","Cho mì và gia vị vào bát"],["Đổ nước","Đổ nước sôi ngập mì"],["Đậy nắp","Chờ 3 phút"],["Thưởng thức","Trộn đều và ăn"]],"note":"Đổi thứ tự (đổ nước trước khi đun) là hỏng ngay. Máy tính cũng vậy.","n":"Trò chơi: một học sinh làm “robot”, chỉ làm đúng từng chữ bạn khác nói. Lớp sẽ thấy lệnh mơ hồ gây lỗi buồn cười thế nào."},
  {"k":"cards","title":"4 kỹ năng tư duy máy tính","items":[["Chia nhỏ","Việc lớn thành nhiều việc nhỏ"],["Tìm quy luật","Thấy chỗ giống để dùng lại cách giải"],["Lược bỏ","Bỏ chi tiết không cần thiết"],["Thiết kế thuật toán","Viết các bước theo thứ tự"]]},
  {"k":"try","q":"Thuật toán: “Đi thẳng, rẽ trái, đến trường.” thiếu điều gì?","opts":["Đi thẳng bao xa, rẽ ở đâu","Không thiếu gì"],"a":0,"why":"Máy cần lệnh chính xác: đi thẳng 200 m, rẽ trái ở ngã tư thứ hai…"},
  {"k":"fact","text":"Từ “thuật toán” (algorithm) bắt nguồn từ tên nhà toán học al-Khwarizmi, sống ở Baghdad khoảng thế kỷ 9. Ông viết sách hướng dẫn cách tính toán theo từng bước."},
  {"k":"blocks","title":"Chatbot đố vui trong Scratch","items":[["ev","khi bấm vào lá cờ xanh"],["va","đặt [Điểm] thành 0"],["se","hỏi “Thủ đô của Việt Nam là gì?” và đợi"],["co","nếu ‹trả lời = Hà Nội› thì"],["lo","nói “Chính xác!” trong 2 giây",1],["va","thay đổi [Điểm] một lượng 1",1],["co","nếu không thì"],["lo","nói “Chưa đúng, đáp án là Hà Nội”",1],["lo","nói (kết hợp “Điểm của bạn: ” và Điểm)"]],"note":"Chatbot Scratch chỉ theo luật em viết sẵn. Chatbot AI tự học từ dữ liệu.","n":"Màu khối theo Scratch: vàng là sự kiện, cam là biến, xanh lam nhạt là cảm biến (hỏi và đợi), cam đậm là điều kiện, tím là hiển thị."},
  {"k":"compare","title":"Chatbot Scratch và chatbot AI","a":["Chatbot Scratch","Chỉ trả lời được đúng những câu em đã viết sẵn. Gõ “hà nội” chữ thường có thể bị chấm sai."],"b":["Chatbot AI","Học từ rất nhiều dữ liệu, trả lời được câu hỏi mới. Nhưng có thể bịa."]},
  {"k":"myth","items":[["Máy tính thông minh nên tự hiểu ý em.","Máy làm đúng từng chữ em viết, kể cả khi em viết sai."],["Lập trình là phải gõ code khó.","Scratch kéo thả khối, dùng tư duy y như lập trình thật."]]},
  {"k":"act","title":"Lập trình ngay","items":["Vào Scratch, bấm Tạo.","Làm chatbot theo các khối trên, tự đặt 3 câu hỏi.","Lỗi hay gặp: quên “đặt Điểm thành 0” nên điểm cộng dồn."],"link":["Mở Scratch","https://scratch.mit.edu/projects/editor/"],"n":"Thử thách thêm cho nhóm nhanh: thêm khối “thay đổi Điểm một lượng -1” khi trả lời sai, hoặc dùng khối “chữ thường” để chấp nhận “hà nội”."},
  {"k":"recap","items":["Thuật toán là các bước rõ ràng, theo thứ tự.","4 kỹ năng: chia nhỏ, tìm quy luật, lược bỏ, thiết kế thuật toán.","Scratch: sự kiện, biến, hỏi – đợi, điều kiện.","Chatbot Scratch theo luật; chatbot AI học từ dữ liệu."]}
 ]
},
{
 p: 4, t: "Tự động hóa việc học",
 g: "Nhờ AI lập kế hoạch và làm bảng theo dõi tự tính trên Google Sheets.",
 pts: [
  "<b>Tự động hóa:</b> máy làm phần lặp lại, em làm phần cần suy nghĩ.",
  "<span class='mono'>=SUM(D2:D50)</span> cộng tổng phút học; <span class='mono'>=COUNTIF(E2:E50,TRUE)</span> đếm việc đã tick.",
  "Tỉ lệ hoàn thành: <span class='mono'>=COUNTIF(E2:E50,TRUE)/COUNTA(C2:C50)</span>. Tô màu tự động bằng định dạng có điều kiện <span class='mono'>=$E2=TRUE</span>.",
  "Nhờ AI viết công thức, lập thời gian biểu ôn thi, hoặc soạn câu hỏi cho Google Forms tự chấm."
 ],
 q: [
  ["Công thức tính tổng số phút từ D2 đến D6?",["=COUNT(D2:D6)","=SUM(D2:D6)","=D2+D6"],1,"SUM cộng tất cả các ô trong vùng."],
  ["Xong 3 trên 5 việc là bao nhiêu phần trăm?",["30%","60%","35%"],1,"3 ÷ 5 = 0,6 = 60%."],
  ["Tự động hóa nghĩa là?",["Máy làm hết, em không cần nghĩ","Máy làm phần lặp lại, em làm phần cần suy nghĩ"],1,"Em vẫn là người quyết định."]
 ],
 s: [
  {"k":"cover","img":"b11-1","alt":"Robot nhỏ tự động sắp xếp thời gian biểu và bảng tính trong khi học sinh đọc sách","sub":"Để máy làm phần lặp lại, em dành sức cho phần cần suy nghĩ."},
  {"k":"concept","title":"Tự động hóa","big":"Để máy làm phần lặp lại, em dành thời gian cho phần cần suy nghĩ.","ex":["Ví dụ","Thay vì tự cộng số phút học mỗi tuần, bảng tính tự cộng ngay khi em nhập."]},
  {"k":"table","title":"Bảng theo dõi học tập mẫu","head":["Ngày","Môn","Nhiệm vụ","Phút","Xong"],"rows":[["Thứ 2","Toán","Bài tập trang 45","30","Đã xong"],["Thứ 3","Anh","Học 10 từ mới","45","Chưa"],["Thứ 4","Văn","Đọc bài thơ","20","Đã xong"],["Thứ 5","Toán","Ôn chương 2","60","Đã xong"],["Thứ 6","Sinh","Vẽ sơ đồ","25","Chưa"]],"note":"Tổng 180 phút · hoàn thành 3/5 = 60%."},
  {"k":"cards","title":"3 công thức cần nhớ","items":[["<span class='mono'>=SUM(D2:D50)</span>","Cộng tổng số phút học"],["<span class='mono'>=COUNTIF(E2:E50,TRUE)</span>","Đếm số việc đã tick hoàn thành"],["<span class='mono'>=$E2=TRUE</span>","Tô màu tự động dòng đã xong"]],"n":"Lưu ý: Google Sheets bản tiếng Việt có thể dùng dấu chấm phẩy “;” thay dấu phẩy giữa các phần của công thức."},
  {"k":"steps","title":"Tạo bảng theo dõi trong 4 bước","items":[["Tạo bảng","Google Sheets → Trang tính mới"],["Đặt tiêu đề","Ngày · Môn · Nhiệm vụ · Phút · Xong"],["Chèn hộp kiểm","Chọn cột E → Chèn → Hộp kiểm"],["Thêm công thức","Tổng phút, số việc xong, tỉ lệ %"]]},
  {"k":"try","q":"Cột D ghi số phút học từ dòng 2 đến dòng 8. Công thức nào tính tổng?","opts":["=SUM(D2:D8)","=COUNT(D2:D8)"],"a":0,"why":"SUM cộng các số. COUNT chỉ đếm có bao nhiêu ô có số."},
  {"k":"quote","label":"Nhờ AI viết công thức","text":"“Trong Google Sheets, cột E là hộp kiểm, cột C là tên nhiệm vụ. Viết công thức tính phần trăm việc đã xong.”"},
  {"k":"fact","text":"Một bảng Google Sheets có thể chia sẻ cho cả nhóm cùng sửa một lúc. Cả nhóm dự án có thể dùng chung một bảng phân công và tick khi xong việc."},
  {"k":"split","img":"b11-2","alt":"Màn hình điện thoại hiện bài kiểm tra trắc nghiệm tự chấm điểm với dấu tích xanh","title":"Bài kiểm tra tự chấm","html":"<p>Google Forms → Cài đặt → <b>Đặt làm bài kiểm tra</b> → nhập đáp án đúng.</p><p>Câu hỏi có thể nhờ AI soạn, nhưng em phải kiểm tra lại.</p>"},
  {"k":"myth","items":[["Tự động hóa là để máy học hộ em.","Máy chỉ làm phần lặp lại như cộng, đếm, tô màu. Việc học vẫn là của em."],["Công thức AI viết thì chắc chắn đúng.","Thử trên vài dòng em biết trước kết quả rồi mới dùng."]]},
  {"k":"act","title":"Thực hành","items":["Tạo bảng theo dõi học tập 1 tuần theo mẫu (Phiếu 11).","Thêm 3 công thức: tổng phút, số việc xong, tỉ lệ hoàn thành.","Tô màu tự động dòng đã xong.","Nhờ AI viết thêm 1 công thức em muốn, tự kiểm tra kết quả."],"n":"Học sinh cần tài khoản Google; dưới 13 tuổi dùng tài khoản do nhà trường hoặc phụ huynh quản lý."},
  {"k":"recap","items":["Tự động hóa: máy làm phần lặp lại.","SUM cộng, COUNTIF đếm theo điều kiện.","Định dạng có điều kiện tô màu tự động.","Công thức AI viết phải thử lại trước khi dùng."]}
 ]
},
{
 p: 4, t: "Dự án cuối khóa",
 g: "Dùng kiến thức cả khóa để giải một vấn đề thật ở lớp em.",
 pts: [
  "5 bước: <b>Tìm vấn đề</b> (hỏi 5 bạn) → <b>Chọn giải pháp</b> → <b>Làm sản phẩm</b> → <b>Kiểm tra an toàn</b> → <b>Thuyết trình 5 phút</b>.",
  "Gợi ý sản phẩm: AI phân loại rác, chatbot Scratch ôn bài, bộ prompt gia sư, poster “Dùng AI an toàn”, bảng nhắc bài tập.",
  "Chấm theo 5 tiêu chí: vấn đề, sản phẩm, dùng AI đúng cách, an toàn – đạo đức, thuyết trình. Tối đa 15 điểm.",
  "Thuyết trình: vấn đề → giải pháp → chạy thử → điều nhóm học được."
 ],
 q: [
  ["Bước đầu tiên của dự án là?",["Làm slide","Tìm vấn đề, hỏi ý kiến bạn bè"],1,"Bắt đầu từ vấn đề thật."],
  ["Trước khi thuyết trình phải kiểm tra gì?",["Màu áo","Không có thông tin cá nhân của ai"],1,"An toàn là một tiêu chí chấm điểm."],
  ["Dự án được chấm theo mấy tiêu chí?",["3","5","10"],1,"5 tiêu chí, mỗi tiêu chí tối đa 3 điểm."]
 ],
 s: [
  {"k":"cover","img":"b12-1","alt":"Nhóm bốn học sinh cùng robot nhỏ quanh bàn làm mô hình phân loại rác","sub":"AI giúp lớp em: một vấn đề thật, một sản phẩm thật."},
  {"k":"steps","title":"5 bước làm dự án","items":[["Tìm vấn đề","Hỏi ít nhất 5 bạn"],["Chọn giải pháp","Công cụ nào giúp được?"],["Làm sản phẩm","Bản mẫu chạy được"],["Kiểm tra an toàn","Không có thông tin cá nhân"],["Thuyết trình","5 phút + chạy thử"]],"n":"Chia nhóm 3–4 bạn. Mỗi nhóm có “thư ký AI” ghi lại mọi chỗ dùng AI và đã kiểm chứng thế nào."},
  {"k":"timeline","title":"Lịch làm dự án","items":[["Tuần 1","Hỏi ý kiến 5 bạn, chọn vấn đề"],["Tuần 2","Chọn giải pháp, làm bản mẫu đầu tiên"],["Tuần 3","Thử với bạn bè, sửa lỗi, kiểm tra an toàn"],["Tuần 4","Hoàn thiện, luyện thuyết trình 5 phút"]]},
  {"k":"cards","title":"Gợi ý sản phẩm","items":[["A. Mô hình nhận diện","Teachable Machine phân loại rác"],["B. Chatbot ôn bài","Scratch đố vui 10 câu"],["C. Bộ gia sư AI","10 prompt gia sư cho một môn"],["D. Chiến dịch poster","3 poster “Dùng AI an toàn”"],["E. Công cụ tự động","Sheets nhắc bài tập + Forms tự chấm"]]},
  {"k":"try","q":"Nhóm làm chatbot ôn bài muốn thêm tên và số điện thoại các bạn trong lớp vào câu hỏi cho vui. Có nên không?","opts":["Không, đó là thông tin cá nhân","Có, vì chỉ trong lớp thôi"],"a":0,"why":"Kiểm tra an toàn: sản phẩm không chứa thông tin cá nhân."},
  {"k":"table","title":"Chấm theo 5 tiêu chí","head":["Tiêu chí","Đạt điểm tối đa (3) khi…"],"rows":[["Vấn đề","Là vấn đề thật, có hỏi ý kiến bạn bè"],["Sản phẩm","Chạy được, giải quyết đúng vấn đề"],["Dùng AI đúng cách","Ghi rõ phần AI hỗ trợ, đã kiểm chứng"],["An toàn, đạo đức","Không có thông tin cá nhân, tôn trọng người khác"],["Thuyết trình","Rõ ràng, đúng giờ, trả lời được câu hỏi"]]},
  {"k":"story","text":"Nhóm của Khoa làm AI phân loại rác bằng Teachable Machine. Thử trên lớp, AI nhận chai nhựa thành giấy.","q":"Nhóm nên làm gì trước buổi thuyết trình?","a":"Xem lại dữ liệu: thêm ảnh chai nhựa nhiều màu, nhiều góc, nền khác nhau; huấn luyện lại; ghi lại tỉ lệ đúng trước và sau. Khi thuyết trình, kể cả lỗi này: đó là điều nhóm học được."},
  {"k":"myth","items":[["Dự án phải hoàn hảo mới được trình bày.","Bản mẫu chạy được và biết mình đã sửa lỗi gì quan trọng hơn hoàn hảo."],["Dùng AI càng nhiều càng được điểm cao.","Điểm dành cho việc dùng AI đúng cách, có kiểm chứng và trung thực."]]},
  {"k":"fact","text":"Nhiều phát minh hữu ích bắt đầu từ việc để ý một vấn đề nhỏ quanh mình. Một bảng nhắc bài tập cho lớp hay một chatbot ôn bài cũng là sản phẩm công nghệ thật."},
  {"k":"split","img":"b12-2","alt":"Cả lớp vỗ tay, học sinh nhận giấy chứng nhận hoàn thành khóa học","title":"AI là công cụ. Em là người cầm lái.","html":"<p>An toàn với thông tin cá nhân · Luôn kiểm chứng điều AI nói · Trung thực: AI giúp học, không làm hộ.</p>"},
  {"k":"recap","items":["Dự án: vấn đề thật → giải pháp → sản phẩm → an toàn → thuyết trình.","Ghi rõ phần AI hỗ trợ và đã kiểm chứng.","Không có thông tin cá nhân trong sản phẩm.","AI là công cụ. Em là người cầm lái."],"title":"Cả khóa học, em đã học"}
 ]
}
]
};
window.AIEDU_LEVEL = Object.assign(window.AIEDU_THCS, {
key: "plt-aiedu-thcs-v1",
level: "THCS",
age: "12–15 tuổi",
gym: {
  tag: "Buổi 4 · Công thức 5 ngón tay",
  title: "Phòng tập prompt",
  intro: "Gõ prompt của em, máy chấm ngay em đã có đủ 5 ngón chưa. Bài chấm chạy ngay trên máy, không gửi đi đâu.",
  unit: "ngón",
  checks: [
    ["Vai trò", "AI đóng vai ai?", "(bạn là|đóng vai|hãy là|vai trò|như một|là một (thầy|cô|chuyên gia|huấn luyện|gia sư|nhà))", "Thêm: “Bạn là thầy giáo Sinh học…”"],
    ["Nhiệm vụ", "AI cần làm gì?", "(giải thích|tóm tắt|viết|liệt kê|tạo|lập|gợi ý|so sánh|dịch|kiểm tra|chấm|ra đề|soạn|hướng dẫn|đặt câu hỏi|luyện|cho (tôi|em|mình))", "Thêm động từ rõ: giải thích, tóm tắt, lập kế hoạch…"],
    ["Bối cảnh", "Em là ai, để làm gì?", "(em là|tôi là|mình là|lớp \\d+|học sinh|đang|sắp|chuẩn bị|để (thuyết|ôn|học|làm|kiểm))", "Thêm: “Em học lớp 8, sắp kiểm tra…”"],
    ["Định dạng", "Trả lời dạng gì?", "(gạch đầu dòng|bảng|danh sách|đoạn văn|\\d+\\s*(ý|câu|dòng|bước|từ|đoạn|ngày|gạch)|dưới \\d+|ngắn gọn|dạng)", "Thêm: “bằng 5 gạch đầu dòng” hoặc “dạng bảng”."],
    ["Giới hạn", "Điều cần tránh?", "(không |đừng|tránh|chỉ dùng|không quá|tối đa)", "Thêm: “Không dùng thuật ngữ khó.”"]
  ],
  samples: ["Viết về môi trường.", "Bạn là thầy giáo Sinh học. Em học lớp 8, đang chuẩn bị thuyết trình. Hãy giải thích hiệu ứng nhà kính bằng 5 gạch đầu dòng, mỗi dòng dưới 20 từ, kèm 1 ví dụ ở Việt Nam. Không dùng thuật ngữ khó.", "Lập kế hoạch ôn Toán.", "Cho tôi từ vựng tiếng Anh."]
},
games: [
  { tag: "Buổi 1", title: "AI hay không AI?",
    choices: [["1", "Có AI"], ["0", "Không có AI"]],
    items: [
      ["Máy tính bỏ túi", "0", "Chỉ tính theo phép toán cố định, không học gì."],
      ["Mở khóa điện thoại bằng khuôn mặt", "1", "AI nhận diện khuôn mặt đã học từ rất nhiều ảnh."],
      ["TikTok gợi ý video", "1", "AI học từ thói quen xem của em."],
      ["Đèn hành lang tự bật khi trời tối", "0", "Chỉ một luật: tối thì bật."],
      ["Google Dịch", "1", "AI dịch đã học từ lượng văn bản khổng lồ."],
      ["Nồi cơm điện thường", "0", "Làm theo nhiệt độ cài sẵn."],
      ["Gmail tự lọc thư rác", "1", "AI học nhận ra thư rác từ hàng triệu thư."],
      ["Google Maps báo kẹt xe", "1", "AI dự đoán từ dữ liệu di chuyển."],
      ["Đồng hồ báo thức", "0", "Chỉ kêu đúng giờ đã đặt."],
      ["Trợ lý giọng nói “Hey Google”", "1", "AI hiểu lời nói của em."]
    ] },
  { tag: "Buổi 7", title: "Đèn giao thông dữ liệu",
    choices: [["r", "Đỏ · không bao giờ", "l-r"], ["y", "Vàng · hỏi người lớn", "l-y"], ["g", "Xanh · thoải mái", "l-g"]],
    items: [
      ["Họ tên đầy đủ, tên trường và lớp của em", "r", "Đủ để người lạ tìm ra em."],
      ["“Giải thích quang hợp cho em”", "g", "Câu hỏi bài học, không có thông tin cá nhân."],
      ["Số điện thoại của mẹ", "r", "Không bao giờ đưa số điện thoại cho AI."],
      ["Ảnh bài kiểm tra có ghi họ tên", "y", "Che tên đi, hoặc hỏi người lớn trước."],
      ["Mật khẩu Facebook", "r", "Mật khẩu không bao giờ đưa cho ai."],
      ["Ý tưởng cho truyện tranh của em", "g", "Thoải mái sáng tạo."],
      ["Chuyện bố mẹ em cãi nhau", "y", "Chuyện riêng của gia đình, hãy hỏi người lớn tin cậy."],
      ["Địa chỉ nhà", "r", "Không bao giờ chia sẻ."],
      ["Ảnh selfie của em", "r", "Ảnh khuôn mặt là thông tin cá nhân."],
      ["Bài văn không ghi tên, nhờ góp ý", "g", "Không có thông tin cá nhân."]
    ] }
]
});
