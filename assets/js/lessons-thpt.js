/* Dữ liệu khóa AI cho THPT (16–18 tuổi): 16 buổi × 90 phút.
   Phần 1–2: buổi 1–8 (file này). Phần 3–4: buổi 9–16 (lessons-thpt-2.js).
   n = ghi chú cho người dạy; ep = mô tả cảnh tiếng Anh để tạo ảnh (docs/prompt-anh-thpt.csv). */
window.AIEDU_LEVEL = {
key: "plt-aiedu-thpt-v1",
level: "THPT",
age: "16–18 tuổi",
factLabel: "Bạn có biết?",
recapLabel: "Ghi nhớ hôm nay",
parts: {
  1: { cls: "p1", name: "Phần 1 · Hiểu AI tận gốc" },
  2: { cls: "p2", name: "Phần 2 · AI cho học tập và ôn thi" },
  3: { cls: "p3", name: "Phần 3 · Python và tự động hóa" },
  4: { cls: "p4", name: "Phần 4 · AI có trách nhiệm và định hướng" }
},
gym: {
  tag: "Buổi 5 · Prompt 6 thành phần",
  title: "Phòng tập prompt",
  intro: "Gõ prompt của bạn, máy chấm theo 6 thành phần của prompt nâng cao. Bài chấm chạy ngay trên máy, không gửi đi đâu.",
  unit: "thành phần",
  checks: [
    ["Vai trò", "AI đóng vai ai?", "(bạn là|đóng vai|hãy là|vai trò|với tư cách|như một)", "Thêm: “Bạn là giáo viên Hóa học giàu kinh nghiệm…”"],
    ["Nhiệm vụ", "Việc cụ thể cần làm", "(giải thích|tóm tắt|viết|liệt kê|tạo|lập|gợi ý|so sánh|phân tích|kiểm tra|chấm|ra đề|soạn|hướng dẫn|đánh giá|sửa)", "Thêm động từ rõ: phân tích, ra 10 câu trắc nghiệm, chấm bài…"],
    ["Bối cảnh", "Bạn là ai, mục tiêu gì", "(tôi là|em là|mình là|lớp 1[0-2]|học sinh|ôn thi|sắp thi|tốt nghiệp|mục tiêu|đang học)", "Thêm: “Tôi học lớp 12, ôn thi tốt nghiệp môn Hóa…”"],
    ["Ví dụ mẫu", "Cho AI xem mẫu mong muốn", "(ví dụ|mẫu|như sau|theo dạng|tương tự)", "Thêm: “Ví dụ một câu mẫu: …”"],
    ["Định dạng", "Trả lời theo hình thức nào", "(bảng|gạch đầu dòng|danh sách|\\d+\\s*(ý|câu|dòng|bước|từ|đoạn)|dưới \\d+|markdown|json|đoạn văn)", "Thêm: “Trình bày dạng bảng 3 cột…”"],
    ["Kiểm tra", "Yêu cầu AI tự kiểm tra, nêu nguồn", "(kiểm tra lại|tự kiểm tra|nguồn|trích dẫn|nếu không chắc|không bịa|hỏi lại tôi|giải thích vì sao)", "Thêm: “Nếu không chắc, hãy nói rõ. Nêu nguồn nếu có.”"]
  ],
  samples: ["Giải thích về pin.", "Bạn là giáo viên Hóa học. Tôi học lớp 12, đang ôn thi tốt nghiệp. Hãy giải thích nguyên lý pin điện hóa Zn–Cu theo 5 bước, ví dụ mẫu: “Bước 1: …”. Trình bày dạng bảng 2 cột (bước, giải thích). Nếu không chắc chi tiết nào, hãy nói rõ.", "Ra đề Lịch sử.", "Sửa bài văn này."]
},
games: [
  { tag: "Buổi 1", title: "Kiểu học nào của máy?",
    choices: [["s", "Có giám sát"], ["u", "Không giám sát"], ["r", "Tăng cường"]],
    items: [
      ["Lọc thư rác từ hàng triệu thư đã gắn nhãn “rác / không rác”", "s", "Dữ liệu có nhãn → học có giám sát."],
      ["Chia khách hàng thành các nhóm có thói quen mua giống nhau, không ai gắn nhãn trước", "u", "Tự tìm nhóm khi không có nhãn → không giám sát."],
      ["AI tự chơi cờ vây hàng triệu ván, thắng được thưởng, thua bị phạt", "r", "Học từ thưởng – phạt → học tăng cường."],
      ["Dự đoán giá nhà từ diện tích, có sẵn giá các căn đã bán", "s", "Có đáp án mẫu (giá đã bán) → có giám sát."],
      ["Nhận diện chữ viết tay từ ảnh đã ghi đúng chữ", "s", "Mỗi ảnh có nhãn là chữ đúng."],
      ["Robot tập đi, ngã thì bị trừ điểm, đi xa được cộng điểm", "r", "Học qua thử – sai và phần thưởng."],
      ["Gom các bài báo cùng chủ đề lại với nhau mà không có danh mục sẵn", "u", "Tự phát hiện cấu trúc trong dữ liệu."],
      ["Chẩn đoán ảnh X-quang từ ảnh đã được bác sĩ ghi kết luận", "s", "Kết luận của bác sĩ là nhãn."]
    ] },
  { tag: "Buổi 7", title: "Nguồn này tin được không?",
    choices: [["g", "Đáng tin", "l-g"], ["y", "Cần kiểm chứng thêm", "l-y"], ["r", "Không nên tin", "l-r"]],
    items: [
      ["Văn bản luật đăng trên trang của Chính phủ (.gov.vn)", "g", "Nguồn gốc, chính thức."],
      ["Câu trả lời của chatbot, không có nguồn đi kèm", "y", "AI có thể bịa; phải đối chiếu nguồn gốc."],
      ["Ảnh “tin nóng” trên một trang lạ, không rõ tác giả, giật tít", "r", "Không rõ nguồn, dễ là tin giả hoặc ảnh AI."],
      ["Bài báo khoa học có tác giả, có trích dẫn, đăng trên tạp chí", "g", "Có phản biện và nguồn rõ ràng."],
      ["Bài đăng mạng xã hội “nghe nói…”, nhiều lượt chia sẻ", "y", "Nhiều người chia sẻ không có nghĩa là đúng."],
      ["Sách giáo khoa hiện hành", "g", "Đã được thẩm định."],
      ["Video người nổi tiếng kêu gọi đầu tư, giọng hơi lạ, link lạ", "r", "Dấu hiệu deepfake lừa đảo."],
      ["Wikipedia", "y", "Hữu ích để bắt đầu; kiểm tra tiếp các nguồn được trích ở cuối bài."]
    ] }
],
lessons: [
{
 p: 1, t: "AI, học máy, học sâu",
 g: "Phân biệt AI, học máy, học sâu; nắm các mốc lịch sử; biết 3 kiểu học của máy.",
 pts: [
  "<b>AI</b> là lĩnh vực làm cho máy thực hiện được việc cần trí thông minh. <b>Học máy</b> là cách làm AI phổ biến nhất: máy tự học quy luật từ dữ liệu. <b>Học sâu</b> là học máy dùng mạng nơ-ron nhiều lớp.",
  "Mốc chính: 1950 Turing đặt câu hỏi “máy có thể suy nghĩ?”; 1956 tên gọi AI ra đời; 1997 Deep Blue thắng Kasparov; 2012 học sâu bùng nổ; 2016 AlphaGo thắng Lee Sedol; 2017 kiến trúc Transformer; 2022 ChatGPT.",
  "3 kiểu học: <b>có giám sát</b> (dữ liệu có nhãn), <b>không giám sát</b> (tự tìm nhóm), <b>tăng cường</b> (học từ thưởng – phạt).",
  "AI hiện nay là AI “hẹp”: rất giỏi một số việc, không có ý thức hay hiểu biết như con người."
 ],
 q: [
  ["Quan hệ đúng giữa AI, học máy, học sâu là?", ["Học sâu ⊂ Học máy ⊂ AI", "AI ⊂ Học máy ⊂ Học sâu", "Ba khái niệm không liên quan"], 0, "Học sâu là một nhánh của học máy, học máy là một cách làm AI."],
  ["Lọc thư rác từ thư đã gắn nhãn là kiểu học nào?", ["Có giám sát", "Không giám sát", "Tăng cường"], 0, "Dữ liệu có nhãn → có giám sát."],
  ["Năm 2017 đánh dấu sự kiện gì?", ["Kiến trúc Transformer ra đời", "Deep Blue thắng Kasparov", "Tên gọi AI ra đời"], 0, "Transformer là nền tảng của các chatbot hiện nay."]
 ],
 s: [
  { k: "cover", img: "tp01-1", alt: "Học sinh THPT đứng trước dòng thời gian phát sáng của lịch sử AI", ep: "A confident Vietnamese teenage girl aged 17 standing in front of a giant glowing holographic timeline of AI history with floating icons of a chess piece, a Go board, a neural network and a chat bubble, Robi floating beside her pointing, futuristic school hall", sub: "Từ câu hỏi của Turing năm 1950 đến chatbot trong túi bạn." },
  { k: "concept", title: "Ba khái niệm lồng nhau", big: "Học sâu nằm trong học máy, học máy nằm trong AI.", ex: ["Cách nhớ", "AI là mục tiêu (máy thông minh). Học máy là phương pháp (học từ dữ liệu). Học sâu là công cụ mạnh nhất hiện nay (mạng nơ-ron nhiều lớp)."], n: "Vẽ 3 vòng tròn lồng nhau lên bảng. Hỏi: hệ thống luật “nếu – thì” do người viết có phải AI không? (Có thể gọi là AI kiểu cũ, nhưng không phải học máy.)" },
  { k: "timeline", title: "Các mốc lịch sử", items: [["1950", "Alan Turing hỏi: máy có thể suy nghĩ?"], ["1956", "Tên gọi “trí tuệ nhân tạo” ra đời tại Dartmouth"], ["1997", "Deep Blue thắng nhà vô địch cờ vua Kasparov"], ["2012", "Học sâu thắng lớn cuộc thi nhận diện ảnh ImageNet"], ["2016", "AlphaGo thắng kỳ thủ cờ vây Lee Sedol 4–1"], ["2017", "Bài báo giới thiệu kiến trúc Transformer"], ["2022", "ChatGPT ra mắt, AI tạo sinh phổ biến"]], n: "Turing đề xuất “trò chơi bắt chước” (sau gọi là phép thử Turing) trong bài báo năm 1950. Mô hình chiến thắng ImageNet 2012 tên là AlexNet." },
  { k: "cards", title: "3 kiểu học của máy", items: [["Có giám sát", "Học từ dữ liệu có nhãn. Ví dụ: lọc thư rác, nhận diện chữ viết tay."], ["Không giám sát", "Tự tìm nhóm, tìm cấu trúc khi không có nhãn. Ví dụ: phân nhóm khách hàng."], ["Tăng cường", "Thử – sai, nhận thưởng hoặc phạt. Ví dụ: AlphaGo, robot tập đi."]] },
  { k: "split", img: "tp01-2", alt: "Rô-bi tự chơi cờ vây với chính mình hàng nghìn ván", ep: "Robi playing Go against a mirror copy of itself at lightning speed, thousands of tiny ghost game boards stacking up behind like a tower, glowing reward stars popping out, dramatic lighting", title: "Học tăng cường: tự chơi với chính mình", html: "<p class='big'>AlphaGo học từ ván cờ của người, rồi <b>tự chơi với chính nó</b> hàng triệu ván.</p><p>Thắng được thưởng, thua bị phạt. Dần dần nó tìm ra những nước đi con người chưa từng nghĩ tới.</p>" },
  { k: "try", q: "Gom các bài báo cùng chủ đề lại với nhau, không có danh mục sẵn. Đây là kiểu học nào?", opts: ["Có giám sát", "Không giám sát", "Tăng cường"], a: 1, why: "Không có nhãn, máy tự tìm nhóm → không giám sát." },
  { k: "myth", items: [["AI hiện nay đã có ý thức như con người.", "AI hiện nay là AI hẹp: giỏi một số việc, không có ý thức hay cảm xúc."], ["Học sâu là phép màu, không ai hiểu nó.", "Học sâu là toán học: ma trận, đạo hàm, xác suất. Khó giải thích từng quyết định, nhưng nguyên lý rất rõ."]] },
  { k: "fact", text: "Trận đấu năm 2016, AlphaGo đi nước thứ 37 ở ván 2 khiến giới cờ vây bối rối vì không ai nghĩ người chơi giỏi sẽ đi như vậy. Sau này nước đi đó được xem là sáng tạo." },
  { k: "act", title: "Thảo luận nhóm", items: ["Mỗi nhóm nhận 4 ứng dụng AI (lọc thư rác, gợi ý video, xe tự lái, chatbot).", "Xác định: dùng kiểu học nào? Dữ liệu là gì? Nhãn là gì?", "Chơi “Kiểu học nào của máy?” trên web để kiểm tra."], link: ["Chơi trên web", "index.html#tro-choi"] },
  { k: "recap", items: ["Học sâu ⊂ Học máy ⊂ AI.", "Mốc lớn: 1950, 1956, 1997, 2012, 2016, 2017, 2022.", "3 kiểu học: có giám sát, không giám sát, tăng cường.", "AI hiện nay là AI hẹp, không có ý thức."] }
 ]
},
{
 p: 1, t: "Dữ liệu và mô hình",
 g: "Hiểu tập huấn luyện – tập kiểm tra, quá khớp, cách đo độ chính xác và thiên kiến dữ liệu.",
 pts: [
  "<b>Mô hình</b> là “công thức” máy tìm ra sau khi học từ dữ liệu.",
  "Dữ liệu chia làm <b>tập huấn luyện</b> (để học) và <b>tập kiểm tra</b> (để chấm). Không bao giờ chấm bằng chính dữ liệu đã học.",
  "<b>Quá khớp</b>: mô hình “học vẹt” tập huấn luyện, gặp dữ liệu mới thì sai nhiều. <b>Chưa khớp</b>: mô hình quá đơn giản, học chưa đủ.",
  "<b>Độ chính xác</b> = số dự đoán đúng / tổng số. Dữ liệu lệch có thể làm độ chính xác cao mà vẫn vô dụng; dữ liệu thiên kiến dẫn tới quyết định bất công."
 ],
 q: [
  ["Vì sao phải tách tập kiểm tra riêng?", ["Để chấm khách quan trên dữ liệu máy chưa thấy", "Để máy học nhanh hơn"], 0, "Giống đề thi không được trùng bài đã cho chép."],
  ["Mô hình đúng 99% trên tập huấn luyện nhưng 60% trên tập kiểm tra là dấu hiệu gì?", ["Quá khớp", "Chưa khớp", "Mô hình hoàn hảo"], 0, "Học vẹt, không tổng quát hóa được."],
  ["100 ca, mô hình đúng 85 ca. Độ chính xác là?", ["85%", "15%", "100%"], 0, "85/100 = 85%."]
 ],
 s: [
  { k: "cover", img: "tp02-1", alt: "Học sinh phân loại hai chồng dữ liệu: học và kiểm tra", ep: "Two Vietnamese teenagers aged 17 in white school shirts sorting a mountain of glowing data cards into two piles labeled only by color, a big green pile and a small orange pile, Robi acting as a strict exam proctor with glasses, bright classroom", sub: "Mô hình giỏi hay không, phải chấm bằng đề nó chưa từng thấy." },
  { k: "concept", title: "Mô hình là gì?", big: "Mô hình là “công thức” máy tìm ra sau khi học từ dữ liệu.", ex: ["Ví dụ", "Từ số giờ học và điểm của 1.000 học sinh, máy tìm ra công thức dự đoán điểm theo giờ học. Công thức đó là mô hình."] },
  { k: "steps", title: "Quy trình làm một mô hình", items: [["Thu thập dữ liệu", "Đủ nhiều, đúng nhãn, đa dạng"], ["Chia dữ liệu", "Thường 70–80% học, 20–30% kiểm tra"], ["Huấn luyện", "Máy tìm quy luật trên tập học"], ["Đánh giá", "Chấm trên tập kiểm tra"], ["Cải tiến", "Thêm dữ liệu, chỉnh mô hình"]] },
  { k: "compare", title: "Quá khớp và chưa khớp", a: ["Quá khớp", "Học vẹt từng câu trong đề cương. Đề thi đổi số là sai.<br>Học thuộc nhiễu thay vì quy luật."], b: ["Chưa khớp", "Chỉ đọc lướt đề cương. Đề dễ cũng sai.<br>Mô hình quá đơn giản."] },
  { k: "split", img: "tp02-2", alt: "Rô-bi học thuộc lòng nhưng đứng hình trước đề lạ", ep: "Robi proudly reciting a thick textbook word by word, then freezing with a shocked face as a new exam paper appears with different numbers, a teenage classmate laughing, comedic split moment", title: "Bài học từ học vẹt", html: "<p class='big'>Mô hình đúng 99% trên dữ liệu đã học nhưng chỉ 60% trên dữ liệu mới: đó là <b>quá khớp</b>.</p><p>Cách chữa: thêm dữ liệu, đơn giản hóa mô hình, dừng huấn luyện đúng lúc.</p>" },
  { k: "concept", title: "Đo độ chính xác", big: "Độ chính xác = số dự đoán đúng ÷ tổng số dự đoán.", ex: ["Cẩn thận", "Bệnh hiếm gặp ở 1% dân số: mô hình luôn đoán “không bệnh” vẫn đúng 99% mà vô dụng. Phải xem thêm cách khác như tỉ lệ phát hiện đúng ca bệnh."], n: "Đây là lúc giới thiệu sơ ý “precision/recall” cho lớp khá: tỉ lệ đúng trong số ca máy báo dương tính và tỉ lệ ca dương tính thật mà máy bắt được." },
  { k: "try", q: "200 email kiểm tra, mô hình xếp đúng 180 email. Độ chính xác?", opts: ["90%", "80%", "18%"], a: 0, why: "180 ÷ 200 = 0,9 = 90%." },
  { k: "story", text: "Một công ty dùng AI lọc hồ sơ xin việc. AI học từ hồ sơ những người được tuyển 10 năm qua, phần lớn là nam giới.", q: "Điều gì có thể xảy ra?", a: "AI có thể chấm thấp hồ sơ của nữ giới vì “học” theo quyết định cũ. Đây là thiên kiến dữ liệu. Cần kiểm tra mô hình theo từng nhóm người và để con người giám sát quyết định.", n: "Đã có trường hợp được báo chí quốc tế đưa tin về công cụ tuyển dụng bị bỏ dùng vì thiên kiến giới tính. Dùng làm ví dụ thảo luận, không cần nêu tên công ty." },
  { k: "myth", items: [["Càng nhiều dữ liệu thì mô hình càng tốt.", "Dữ liệu phải đúng và đa dạng. Nhiều dữ liệu lệch chỉ làm mô hình lệch chắc chắn hơn."], ["Độ chính xác 99% nghĩa là mô hình rất tốt.", "Phải xem dữ liệu có cân bằng không và mô hình sai ở nhóm nào."]] },
  { k: "fact", text: "Khoảng thời gian làm dữ liệu (thu thập, làm sạch, gắn nhãn) thường chiếm phần lớn công sức của một dự án học máy, nhiều hơn cả thời gian huấn luyện mô hình." },
  { k: "recap", items: ["Mô hình là công thức máy tìm ra từ dữ liệu.", "Luôn chấm trên tập kiểm tra máy chưa thấy.", "Quá khớp = học vẹt; chưa khớp = học chưa đủ.", "Độ chính xác cao chưa chắc tốt; coi chừng thiên kiến."] }
 ]
},
{
 p: 1, t: "Chatbot hoạt động thế nào",
 g: "Hiểu token, dự đoán từ tiếp theo, cửa sổ ngữ cảnh, nhiệt độ, quá trình huấn luyện và vì sao chatbot “ảo giác”.",
 pts: [
  "Chatbot dựa trên <b>mô hình ngôn ngữ lớn</b> (LLM): đọc lượng văn bản khổng lồ, học cách dự đoán <b>token</b> (mảnh chữ) tiếp theo.",
  "Kiến trúc <b>Transformer</b> có cơ chế “chú ý”: khi đoán từ, mô hình cân nhắc từ nào trong câu liên quan nhiều nhất.",
  "Huấn luyện 2 giai đoạn: <b>tiền huấn luyện</b> trên văn bản lớn → <b>tinh chỉnh</b> với ví dụ và phản hồi của con người để trả lời hữu ích, an toàn hơn.",
  "<b>Cửa sổ ngữ cảnh</b> giới hạn lượng chữ mô hình “nhìn” được trong một lần. <b>Nhiệt độ</b> càng cao, câu trả lời càng ngẫu nhiên. <b>Ảo giác</b>: mô hình tạo câu nghe hợp lý nhưng sai."
 ],
 q: [
  ["LLM tạo câu trả lời bằng cách nào?", ["Dự đoán token tiếp theo, lặp lại nhiều lần", "Tra một cơ sở dữ liệu câu trả lời có sẵn", "Hỏi một người trực"], 0, "Đó là cơ chế cốt lõi của LLM."],
  ["Tăng “nhiệt độ” thì câu trả lời…", ["ngẫu nhiên, sáng tạo hơn", "luôn chính xác hơn"], 0, "Nhiệt độ cao → chọn từ ít phổ biến hơn."],
  ["Vì sao chatbot có thể bịa ra trích dẫn?", ["Nó tạo chữ nghe hợp lý, không tự kiểm chứng sự thật", "Nó cố tình lừa người dùng"], 0, "Ảo giác là hệ quả của cách mô hình tạo chữ."]
 ],
 s: [
  { k: "cover", img: "tp03-1", alt: "Bên trong chatbot: những mảnh chữ phát sáng nối với nhau", ep: "A cinematic peek inside a giant glowing transparent brain made of flowing word fragments and light beams connecting them, a Vietnamese teenage boy aged 17 and Robi floating inside like explorers, awe-struck faces", sub: "Mở nắp “bộ não” của chatbot." },
  { k: "concept", title: "Token là gì?", big: "Token là mảnh chữ nhỏ mà mô hình đọc và viết: có thể là một từ, một âm tiết hay một phần của từ.", ex: ["Ví dụ", "“Trí tuệ nhân tạo” có thể bị tách thành nhiều token. Tiếng Việt thường tốn nhiều token hơn tiếng Anh cho cùng nội dung."] },
  { k: "guess", title: "Hà Nội là thủ đô của ___", items: [["Việt Nam", 92], ["nước", 5], ["Đông Dương", 1]], note: "Mô hình tính khả năng cho từng token, chọn một, rồi đoán tiếp. (Số phần trăm chỉ để minh họa.)" },
  { k: "concept", title: "Cơ chế “chú ý”", big: "Khi đoán từ tiếp theo, mô hình cân nhắc những từ nào trong câu liên quan nhiều nhất.", ex: ["Ví dụ", "“Con mèo không ăn cá vì <b>nó</b> đã no.” Mô hình học được “nó” chỉ con mèo, không phải con cá."], n: "Đây là ý tưởng chính của bài báo “Attention Is All You Need” (2017) giới thiệu kiến trúc Transformer." },
  { k: "steps", title: "Một chatbot được tạo ra thế nào", items: [["Tiền huấn luyện", "Đọc lượng văn bản khổng lồ, học đoán token tiếp theo"], ["Tinh chỉnh", "Học từ các cặp câu hỏi – câu trả lời mẫu"], ["Học từ phản hồi", "Con người chấm câu trả lời tốt – xấu"], ["Ra mắt", "Kèm bộ lọc an toàn"]] },
  { k: "cards", title: "3 thông số nên biết", items: [["Cửa sổ ngữ cảnh", "Lượng chữ mô hình “nhìn” được trong một cuộc trò chuyện. Quá dài, phần đầu có thể bị bỏ qua."], ["Nhiệt độ", "Thấp: trả lời ổn định. Cao: sáng tạo, ngẫu nhiên hơn."], ["Mốc kiến thức", "Mô hình chỉ biết dữ liệu tới một thời điểm, trừ khi được tra web."]] },
  { k: "split", img: "tp03-2", alt: "Rô-bi tự tin trình bày trích dẫn không có thật", ep: "Robi confidently presenting a scroll full of official-looking citations on a podium, while a Vietnamese teenage girl in a white school shirt checks a laptop and raises one suspicious eyebrow, comedic contrast", title: "Ảo giác: vì sao AI bịa?", html: "<p class='big'>Mô hình tạo chữ <b>nghe hợp lý</b>, không tự kiểm chứng sự thật.</p><p>Hay gặp với trích dẫn, số liệu, tên sách, sự kiện mới. Luôn đối chiếu với nguồn gốc.</p>" },
  { k: "try", q: "Hỏi cùng một câu 2 lần, chatbot trả lời hơi khác nhau. Vì sao?", opts: ["Mô hình chọn token có yếu tố ngẫu nhiên", "Máy bị hỏng"], a: 0, why: "Có yếu tố ngẫu nhiên khi chọn token (liên quan nhiệt độ)." },
  { k: "myth", items: [["Chatbot tra cứu câu trả lời có sẵn trong kho.", "Chatbot tạo câu mới từng token một, trừ khi được nối với công cụ tìm kiếm."], ["Chatbot hiểu và có quan điểm riêng.", "Chatbot mô phỏng ngôn ngữ rất giỏi; nó không có trải nghiệm hay niềm tin như người."]] },
  { k: "act", title: "Thí nghiệm với chatbot", items: ["Hỏi cùng một câu 3 lần, so sánh câu trả lời.", "Hỏi về một sự kiện tuần trước: mô hình có biết không?", "Nhờ chatbot nêu nguồn cho một con số, rồi tự mở nguồn đó kiểm tra.", "Ghi kết quả vào Phiếu 3."], n: "Học sinh dưới 18 tuổi cần phụ huynh đồng ý khi dùng ChatGPT; Claude chỉ dành cho người từ 18 tuổi. Có thể làm theo nhóm trên máy giáo viên." },
  { k: "recap", items: ["LLM đoán token tiếp theo, lặp lại thành câu.", "Transformer dùng cơ chế chú ý.", "Huấn luyện: tiền huấn luyện → tinh chỉnh → phản hồi con người.", "Cửa sổ ngữ cảnh, nhiệt độ, mốc kiến thức; ảo giác là có thật."] }
 ]
},
{
 p: 1, t: "Bản đồ công cụ AI",
 g: "Biết các nhóm công cụ AI, chọn đúng công cụ cho việc, nắm quy định độ tuổi và nguyên tắc bảo mật.",
 pts: [
  "Nhóm công cụ: <b>chatbot</b> (ChatGPT, Gemini, Claude, Copilot), <b>tìm kiếm có nguồn</b>, <b>trợ lý trên tài liệu của bạn</b> (như NotebookLM), <b>tạo ảnh – video</b>, <b>lập trình</b> (Google Colab).",
  "Chọn công cụ theo việc: cần sự thật mới → tìm kiếm có nguồn; cần hiểu tài liệu → trợ lý trên tài liệu; cần ý tưởng → chatbot.",
  "Độ tuổi: ChatGPT từ 13 tuổi, dưới 18 cần phụ huynh đồng ý; Gemini từ 13 tuổi; Claude từ 18 tuổi.",
  "Không đưa thông tin cá nhân, bài kiểm tra chưa thi, dữ liệu của người khác vào công cụ AI."
 ],
 q: [
  ["Muốn biết tin tức tuần này, chọn công cụ nào?", ["Tìm kiếm có trích nguồn", "Chatbot không có tìm kiếm"], 0, "Chatbot không tra web chỉ biết tới mốc kiến thức."],
  ["Bạn 17 tuổi muốn dùng ChatGPT, cần gì?", ["Phụ huynh đồng ý", "Không cần gì"], 0, "Từ 13 đến dưới 18 tuổi cần phụ huynh đồng ý."],
  ["Thông tin nào KHÔNG nên đưa cho AI?", ["Số căn cước, mật khẩu", "Câu hỏi về định luật Newton"], 0, "Thông tin định danh, mật khẩu là đèn đỏ."]
 ],
 s: [
  { k: "cover", img: "tp04-1", alt: "Học sinh đứng giữa bản đồ phát sáng các công cụ AI", ep: "A Vietnamese teenage boy aged 17 standing in the center of a glowing holographic city map where each building is a different AI tool icon: chat bubble tower, magnifying glass tower, paint palette tower, code bracket tower, Robi holding a compass guiding him", sub: "Đúng việc, đúng công cụ." },
  { k: "cards", title: "Các nhóm công cụ AI", items: [["Chatbot", "Hỏi đáp, gợi ý, viết, giải thích: ChatGPT, Gemini, Claude, Copilot"], ["Tìm kiếm có nguồn", "Trả lời kèm đường dẫn để kiểm chứng"], ["Trợ lý trên tài liệu", "Hỏi đáp dựa trên chính tài liệu bạn tải lên, ví dụ NotebookLM"], ["Tạo ảnh, video", "Từ lời mô tả thành hình ảnh, đoạn phim"], ["Lập trình", "Google Colab: chạy Python miễn phí trên trình duyệt"], ["Học ngoại ngữ", "Luyện nói, sửa phát âm, hội thoại"]] },
  { k: "table", title: "Chọn công cụ theo việc", head: ["Việc cần làm", "Nên dùng", "Vì sao"], rows: [["Tin tức, số liệu mới", "Tìm kiếm có nguồn", "Có đường dẫn để kiểm tra"], ["Hiểu một tài liệu dài", "Trợ lý trên tài liệu", "Trả lời bám tài liệu, ít bịa"], ["Lên ý tưởng, dàn ý", "Chatbot", "Nhanh, đa dạng"], ["Ôn bài, tự kiểm tra", "Chatbot ở chế độ gia sư", "Hỏi đáp, ra đề, giải thích"], ["Phân tích dữ liệu", "Python trên Colab", "Tính toán chính xác, lặp lại được"]] },
  { k: "table", title: "Quy định độ tuổi", head: ["Công cụ", "Điều kiện"], rows: [["ChatGPT", "Từ 13 tuổi; dưới 18 tuổi cần phụ huynh đồng ý"], ["Gemini", "Từ 13 tuổi; dưới 18 tuổi một số tính năng bị giới hạn"], ["Claude", "Từ 18 tuổi"]], note: "Quy định có thể thay đổi; kiểm tra trang hỗ trợ của từng công cụ trước khi dùng.", n: "Theo trang hỗ trợ của Google (2026): người dùng dưới 18 tuổi hiện chỉ dùng web Gemini bằng tiếng Anh. Thầy cô nên kiểm tra lại trước mỗi khóa." },
  { k: "lights", title: "Đèn giao thông dữ liệu", items: [["r", "Đỏ · Không đưa", "Số căn cước, mật khẩu, tài khoản ngân hàng, ảnh mặt, địa chỉ, dữ liệu của người khác, đề kiểm tra chưa thi."], ["y", "Vàng · Cân nhắc", "Bài làm có tên, chuyện riêng gia đình, ảnh có người khác."], ["g", "Xanh · Thoải mái", "Câu hỏi kiến thức, bài viết đã ẩn tên, ý tưởng chung."]] },
  { k: "split", img: "tp04-2", alt: "Học sinh kiểm tra phần cài đặt quyền riêng tư của ứng dụng AI", ep: "A Vietnamese teenage girl aged 16 carefully flipping glowing privacy switches on a giant floating settings panel, a shield icon lighting up, Robi giving a thumbs up, cozy bedroom desk at night", title: "Cài đặt quyền riêng tư", html: "<p class='big'>Nhiều công cụ cho phép <b>tắt lưu lịch sử</b> hoặc tắt việc dùng cuộc trò chuyện để cải thiện mô hình.</p><p>Hãy mở phần Cài đặt và đọc kỹ trước khi dùng.</p>" },
  { k: "try", q: "Bạn cần tóm tắt 3 chương sách giáo khoa Sinh học bạn có file PDF. Công cụ hợp nhất?", opts: ["Trợ lý trên tài liệu", "Công cụ tạo ảnh"], a: 0, why: "Trợ lý trả lời dựa trên đúng tài liệu bạn đưa vào." },
  { k: "myth", items: [["Bản trả phí luôn tốt hơn nên phải mua.", "Bản miễn phí đủ cho phần lớn việc học. Chỉ cân nhắc trả phí khi có nhu cầu rõ và hỏi ý kiến gia đình."], ["Xóa cuộc trò chuyện là dữ liệu biến mất hoàn toàn.", "Tùy chính sách từng công ty; có thể vẫn được lưu một thời gian."]] },
  { k: "act", title: "Lập “hộp công cụ” của bạn", items: ["Liệt kê 5 việc học tập bạn hay làm.", "Chọn công cụ phù hợp cho từng việc và lý do.", "Kiểm tra điều kiện độ tuổi của từng công cụ.", "Ghi vào Phiếu 4."] },
  { k: "recap", items: ["5 nhóm công cụ: chatbot, tìm kiếm có nguồn, trợ lý tài liệu, tạo ảnh – video, lập trình.", "Chọn công cụ theo việc.", "Nắm quy định độ tuổi.", "Đèn đỏ dữ liệu: không bao giờ đưa cho AI."] }
 ]
},
{
 p: 2, t: "Prompt nâng cao",
 g: "Viết prompt theo 6 thành phần; dùng ví dụ mẫu, chia bước, yêu cầu tự kiểm tra; biết hỏi tiếp để tinh chỉnh.",
 pts: [
  "Prompt 6 thành phần: <b>Vai trò – Nhiệm vụ – Bối cảnh – Ví dụ mẫu – Định dạng – Kiểm tra</b>.",
  "<b>Ví dụ mẫu</b> (few-shot): cho AI xem 1–3 mẫu, AI làm theo đúng kiểu.",
  "<b>Chia bước</b>: yêu cầu AI giải từng bước giúp câu trả lời chặt chẽ hơn với bài toán, lập luận.",
  "<b>Kiểm tra</b>: yêu cầu AI nói rõ khi không chắc, nêu nguồn, tự rà lỗi. Hỏi tiếp để tinh chỉnh thay vì viết lại từ đầu."
 ],
 q: [
  ["“Ví dụ một câu mẫu: …” thuộc thành phần nào?", ["Ví dụ mẫu", "Vai trò"], 0, "Cho AI xem mẫu để làm theo."],
  ["Yêu cầu “nếu không chắc, hãy nói rõ” giúp gì?", ["Giảm nguy cơ AI bịa", "Làm câu trả lời dài hơn"], 0, "Đây là thành phần Kiểm tra."],
  ["Câu trả lời chưa ưng, cách hiệu quả nhất là?", ["Hỏi tiếp, chỉ rõ cần sửa gì", "Bỏ, mở cuộc trò chuyện mới với câu hỏi y hệt"], 0, "Tinh chỉnh từng bước hiệu quả hơn."]
 ],
 s: [
  { k: "cover", img: "tp05-1", alt: "Học sinh lắp ráp prompt từ 6 mảnh ghép phát sáng", ep: "A focused Vietnamese teenage boy aged 17 assembling six glowing puzzle pieces of different colors into a complete shining key, Robi holding the last piece, dramatic studio lighting with sparkles", sub: "6 mảnh ghép tạo nên một prompt tốt." },
  { k: "cards", title: "Prompt 6 thành phần", items: [["Vai trò", "Bạn là giáo viên Hóa học giàu kinh nghiệm"], ["Nhiệm vụ", "Giải thích pin điện hóa Zn–Cu"], ["Bối cảnh", "Tôi học lớp 12, ôn thi tốt nghiệp"], ["Ví dụ mẫu", "Bước 1: … Bước 2: …"], ["Định dạng", "Bảng 2 cột, tối đa 8 dòng"], ["Kiểm tra", "Nếu không chắc chi tiết nào, hãy nói rõ"]] },
  { k: "compare", title: "Trước và sau", a: ["Trước", "“Giải thích về pin.”<br>Trả lời chung chung, có thể lạc đề sang pin điện thoại."], b: ["Sau", "“Bạn là giáo viên Hóa. Tôi học lớp 12, ôn thi tốt nghiệp. Giải thích pin điện hóa Zn–Cu theo 5 bước, dạng bảng 2 cột. Nếu không chắc chi tiết nào, hãy nói rõ.”"] },
  { k: "concept", title: "Ví dụ mẫu (few-shot)", big: "Cho AI xem 1–3 mẫu, AI sẽ làm theo đúng kiểu đó.", ex: ["Ví dụ", "“Ra 10 câu trắc nghiệm theo mẫu: Câu 1: … A. … B. … C. … D. … Đáp án: B. Giải thích: …”"] },
  { k: "concept", title: "Chia bước", big: "Yêu cầu AI giải từng bước trước khi kết luận.", ex: ["Dùng khi", "Bài toán nhiều bước, bài lập luận, so sánh. Sau đó tự kiểm tra từng bước, đừng chỉ nhìn đáp án."] },
  { k: "table", title: "Mẫu prompt dùng ngay", head: ["Mục đích", "Prompt mẫu"], rows: [["Hiểu bài", "Giải thích [khái niệm] cho học sinh lớp 11, kèm 1 ví dụ đời thường và 1 lỗi hay gặp."], ["Ra đề", "Ra 10 câu trắc nghiệm [chủ đề] mức vận dụng, kèm đáp án và giải thích ngắn."], ["Chấm bài", "Đây là bài làm của tôi. Chỉ ra lỗi sai và gợi ý sửa, đừng viết lại hộ."], ["Ôn nhanh", "Tóm tắt [chương] thành 10 ý chính, mỗi ý dưới 20 từ."]] },
  { k: "try", q: "Prompt: “Bạn là giáo viên Sử. Ra 5 câu hỏi về Cách mạng tháng Tám, dạng bảng.” Thiếu thành phần nào quan trọng?", opts: ["Bối cảnh và Kiểm tra", "Vai trò"], a: 0, why: "Đã có vai trò, nhiệm vụ, định dạng. Thiếu bối cảnh (lớp mấy, mức độ) và yêu cầu kiểm tra." },
  { k: "split", img: "tp05-2", alt: "Học sinh và Rô-bi tinh chỉnh câu trả lời qua nhiều vòng", ep: "A Vietnamese teenage girl aged 16 and Robi sculpting a glowing answer statue together, each round chiseling it into a cleaner shape, three stages shown left to right with sparkles, art studio", title: "Hỏi tiếp để tinh chỉnh", html: "<p>“Rút gọn còn một nửa.” · “Thêm ví dụ thực tế ở Việt Nam.” · “Kiểm tra lại bước 3.” · “Viết lại cho học sinh lớp 10.”</p><p class='big'>Tinh chỉnh từng bước hiệu quả hơn viết lại từ đầu.</p>" },
  { k: "act", title: "Phòng tập prompt", items: ["Mở Phòng tập prompt, viết prompt cho môn bạn đang ôn.", "Sửa đến khi đủ 6 thành phần.", "Chạy trên chatbot (theo quy định độ tuổi), so sánh với prompt 1 dòng.", "Lưu 3 prompt tốt nhất vào sổ."], link: ["Mở Phòng tập", "index.html#phong-tap-prompt"] },
  { k: "fact", text: "Nhiều công ty nay có vị trí chuyên thiết kế prompt và quy trình làm việc với AI. Kỹ năng viết yêu cầu rõ ràng được đánh giá cao ở hầu hết ngành nghề." },
  { k: "recap", items: ["6 thành phần: vai trò, nhiệm vụ, bối cảnh, ví dụ mẫu, định dạng, kiểm tra.", "Ví dụ mẫu giúp AI làm đúng kiểu.", "Chia bước cho bài khó.", "Hỏi tiếp để tinh chỉnh."] }
 ]
},
{
 p: 2, t: "Học sâu và ôn thi với AI",
 g: "Áp dụng khoa học ghi nhớ (gợi nhớ chủ động, lặp lại ngắt quãng, Feynman) với AI; lập kế hoạch ôn thi; giữ liêm chính.",
 pts: [
  "<b>Gợi nhớ chủ động</b>: tự trả lời câu hỏi nhớ lâu hơn đọc lại nhiều lần. Nhờ AI ra câu hỏi, bạn tự trả lời.",
  "<b>Lặp lại ngắt quãng</b>: ôn lại sau 1 ngày, 3 ngày, 1 tuần… để chống “đường cong lãng quên”.",
  "<b>Kỹ thuật Feynman</b>: giải thích lại cho AI như dạy người mới, nhờ AI chỉ chỗ hiểu sai.",
  "AI là gia sư, không phải người làm bài hộ. Bài thi, bài kiểm tra: tuân thủ quy định của trường."
 ],
 q: [
  ["Cách ôn nào nhớ lâu hơn?", ["Tự trả lời câu hỏi", "Đọc lại tài liệu 5 lần"], 0, "Gợi nhớ chủ động hiệu quả hơn đọc lại."],
  ["Lặp lại ngắt quãng nghĩa là?", ["Ôn lại theo các khoảng cách giãn dần", "Học một lần thật lâu"], 0, "1 ngày, 3 ngày, 1 tuần…"],
  ["Kỹ thuật Feynman là?", ["Giải thích lại bằng lời đơn giản để tìm chỗ chưa hiểu", "Chép lại sách"], 0, "Nếu không giải thích đơn giản được, bạn chưa hiểu đủ."]
 ],
 s: [
  { k: "cover", img: "tp06-1", alt: "Học sinh ôn thi với Rô-bi làm gia sư bên bàn học đêm", ep: "A determined Vietnamese teenage boy aged 18 studying at a cozy desk at night with a warm lamp, flashcards floating around him in a spiral, Robi as a tutor holding up a quiz card, a wall calendar with circled exam date", sub: "Học ít mà nhớ lâu, nhờ khoa học và AI." },
  { k: "concept", title: "Đường cong lãng quên", big: "Không ôn lại, phần lớn kiến thức mới học sẽ bị quên dần chỉ sau vài ngày.", ex: ["Cách chống", "Ôn lại đúng lúc sắp quên: sau 1 ngày, 3 ngày, 1 tuần, 2 tuần. Mỗi lần ôn, trí nhớ bền hơn."], n: "Nhà tâm lý học Hermann Ebbinghaus mô tả hiện tượng này từ năm 1885 qua các thí nghiệm ghi nhớ của chính ông." },
  { k: "cards", title: "3 kỹ thuật học + AI", items: [["Gợi nhớ chủ động", "Nhờ AI ra 10 câu hỏi; bạn tự trả lời trước khi xem đáp án"], ["Lặp lại ngắt quãng", "Nhờ AI lập lịch ôn theo ngày 1–3–7–14"], ["Feynman", "Giải thích lại cho AI, nhờ AI chỉ chỗ sai"]] },
  { k: "table", title: "Prompt cho từng kỹ thuật", head: ["Kỹ thuật", "Prompt"], rows: [["Gợi nhớ chủ động", "Hỏi tôi từng câu về [chủ đề], chờ tôi trả lời rồi mới chấm và giải thích."], ["Feynman", "Tôi sẽ giải thích [khái niệm]. Hãy chỉ ra chỗ tôi hiểu sai hoặc thiếu."], ["Lập lịch ôn", "Lập lịch ôn 4 tuần cho 3 môn, mỗi ngày 2 giờ, áp dụng lặp lại ngắt quãng."], ["Học từ lỗi", "Đây là 5 câu tôi làm sai. Tìm điểm chung trong lỗi của tôi."]] },
  { k: "split", img: "tp06-2", alt: "Học sinh giải thích bài cho Rô-bi như cô giáo nhỏ", ep: "A Vietnamese teenage girl aged 17 explaining a physics concept on a small whiteboard to Robi who sits like an attentive student taking notes, a lightbulb glowing above her, bright study room", title: "Dạy lại là cách học tốt nhất", html: "<p class='big'>Nếu bạn không giải thích được bằng lời đơn giản, bạn <b>chưa hiểu đủ</b>.</p><p>Giải thích cho AI, để AI đặt câu hỏi vặn lại như một bạn học khó tính.</p>" },
  { k: "try", q: "Cách nào tận dụng AI tốt nhất khi ôn thi?", opts: ["Nhờ AI hỏi, tự trả lời rồi mới xem giải thích", "Nhờ AI làm hộ đề cương rồi đọc lại"], a: 0, why: "Gợi nhớ chủ động mới tạo trí nhớ bền." },
  { k: "story", text: "Một bạn chụp đề kiểm tra 15 phút gửi chatbot trong giờ làm bài.", q: "Việc này sai ở đâu?", a: "Đây là gian lận, vi phạm quy chế. Ngoài ra, bạn mất cơ hội học thật, và có thể làm lộ đề. Dùng AI để luyện trước, không dùng trong giờ kiểm tra." },
  { k: "myth", items: [["Học với AI là lười biếng.", "Dùng AI để luyện hỏi đáp, chấm lỗi là học chủ động. Lười biếng là để AI làm hộ."], ["Đọc lại nhiều lần là cách ôn tốt nhất.", "Tự kiểm tra và ôn ngắt quãng hiệu quả hơn đọc lại."]] },
  { k: "act", title: "Lập kế hoạch ôn 4 tuần", items: ["Chọn 3 môn bạn sẽ thi.", "Dùng prompt lập lịch ôn, chỉnh cho hợp thời gian biểu thật.", "Mỗi ngày: 1 phiên gợi nhớ chủ động với AI.", "Ghi nhật ký lỗi sai vào Phiếu 6."] },
  { k: "fact", text: "Các nghiên cứu tâm lý học giáo dục cho thấy tự kiểm tra thường giúp nhớ tốt hơn so với đọc lại cùng thời lượng. Hiện tượng này gọi là “hiệu ứng kiểm tra”." },
  { k: "recap", items: ["Gợi nhớ chủ động > đọc lại.", "Ôn ngắt quãng theo 1–3–7–14 ngày.", "Feynman: giải thích lại để tìm chỗ hổng.", "AI là gia sư, không làm hộ; không dùng trong giờ thi."] }
 ]
},
{
 p: 2, t: "Nghiên cứu và kiểm chứng",
 g: "Tìm thông tin có nguồn, đánh giá độ tin cậy, đọc ngang để kiểm chứng, nhận biết deepfake và trích dẫn đúng.",
 pts: [
  "Ưu tiên công cụ trả lời <b>kèm nguồn</b>, và luôn mở nguồn đọc tận nơi.",
  "4 câu hỏi đánh giá nguồn: <b>Ai viết?</b> · <b>Khi nào?</b> · <b>Bằng chứng gì?</b> · <b>Mục đích gì?</b>",
  "<b>Đọc ngang</b>: mở tab khác tìm xem các nguồn độc lập nói gì về thông tin và về chính trang đó.",
  "Deepfake: kiểm tra nguồn đăng, tìm ảnh gốc (Google Lens), xem có báo chính thống đưa tin không. Trích dẫn đầy đủ khi dùng ý của người khác."
 ],
 q: [
  ["Câu trả lời của chatbot có trích nguồn. Bước tiếp theo?", ["Mở nguồn đọc xem có đúng không", "Tin luôn vì đã có nguồn"], 0, "AI có thể trích sai hoặc bịa nguồn."],
  ["“Đọc ngang” là gì?", ["Mở tab khác kiểm tra thông tin ở các nguồn độc lập", "Đọc lướt thật nhanh"], 0, "Người kiểm chứng chuyên nghiệp làm vậy."],
  ["Video người nổi tiếng kêu gọi đầu tư, link lạ. Nên?", ["Nghi ngờ deepfake, kiểm tra trang chính thức", "Đầu tư ngay"], 0, "Lừa đảo bằng deepfake rất phổ biến."]
 ],
 s: [
  { k: "cover", img: "tp07-1", alt: "Nhóm học sinh làm thám tử thông tin với nhiều màn hình", ep: "Three Vietnamese teenagers aged 17 in a high-tech detective room with many glowing screens connected by red strings, one holding a magnifying glass, Robi pinning a photo to the board, cinematic noir lighting with warm accents", sub: "Thông tin nhiều vô kể; kỹ năng là biết tin cái gì." },
  { k: "cards", title: "4 câu hỏi đánh giá nguồn", items: [["Ai viết?", "Tác giả, tổ chức có chuyên môn không?"], ["Khi nào?", "Còn cập nhật không?"], ["Bằng chứng gì?", "Có số liệu, trích dẫn, nguồn gốc không?"], ["Mục đích gì?", "Thông tin, bán hàng, hay kích động?"]] },
  { k: "concept", title: "Đọc ngang", big: "Thay vì đọc kỹ một trang lạ, hãy mở tab khác xem các nguồn độc lập nói gì về nó.", ex: ["Ví dụ", "Thấy trang “Viện nghiên cứu ABC” khẳng định điều gây sốc: tìm tên viện đó trên báo chính thống trước khi tin."], n: "Kỹ thuật này được nhóm Stanford History Education Group nghiên cứu khi so sánh cách học sinh và người kiểm chứng tin chuyên nghiệp đọc web." },
  { k: "split", img: "tp07-2", alt: "Màn hình hiện video giả người nổi tiếng, học sinh phát hiện", ep: "A Vietnamese teenage boy aged 17 pausing a video on a laptop where a cartoon celebrity's face has glitchy pixel edges and mismatched lip movement, he points at the glitch, Robi holding a warning sign with an exclamation icon", title: "Deepfake và lừa đảo", html: "<p>Dấu hiệu: môi không khớp tiếng, ánh sáng lạ, giọng đều đều, <b>kêu gọi chuyển tiền gấp</b>.</p><p class='big'>Kiểm tra trang chính thức của người đó trước khi tin.</p>" },
  { k: "steps", title: "Quy trình kiểm chứng 4 bước", items: [["Dừng", "Đừng chia sẻ ngay"], ["Tìm nguồn gốc", "Ai đăng đầu tiên?"], ["Đọc ngang", "Nguồn độc lập nói gì?"], ["Quyết định", "Tin, chưa tin, hay bác bỏ"]] },
  { k: "try", q: "Chatbot trích: “Theo nghiên cứu của Đại học X năm 2023…”. Bạn tìm mãi không thấy nghiên cứu đó. Kết luận?", opts: ["Có thể là trích dẫn bịa, không dùng", "Vẫn dùng vì AI nói vậy"], a: 0, why: "Không tìm thấy nguồn gốc thì không dùng." },
  { k: "concept", title: "Trích dẫn đúng", big: "Dùng ý, số liệu, câu chữ của người khác thì ghi nguồn: tác giả, tên tài liệu, năm, đường dẫn.", ex: ["Với AI", "Ghi rõ phần nào có hỗ trợ của AI, công cụ nào, dùng để làm gì. Không ghi AI là “nguồn” của sự thật."] },
  { k: "myth", items: [["Nhiều người chia sẻ thì chắc là thật.", "Tin giả thường lan nhanh hơn tin thật vì gây cảm xúc mạnh."], ["Có ảnh, có video là có bằng chứng.", "Ảnh và video có thể do AI tạo ra rất giống thật."]] },
  { k: "act", title: "Thử thách kiểm chứng", items: ["Mỗi nhóm nhận 3 “tin” (thật, sai, nửa đúng nửa sai).", "Áp dụng 4 câu hỏi và đọc ngang.", "Trình bày kết luận kèm nguồn trong 2 phút.", "Chơi “Nguồn này tin được không?” trên web."], link: ["Chơi trên web", "index.html#tro-choi"] },
  { k: "recap", items: ["Ưu tiên câu trả lời có nguồn, và mở nguồn ra đọc.", "4 câu hỏi: ai, khi nào, bằng chứng, mục đích.", "Đọc ngang để kiểm chứng.", "Cảnh giác deepfake; trích dẫn đầy đủ."] }
 ]
},
{
 p: 2, t: "Viết và thuyết trình có trách nhiệm",
 g: "Dùng AI hỗ trợ quy trình viết và thuyết trình mà vẫn giữ giọng văn, suy nghĩ của mình; liêm chính học thuật.",
 pts: [
  "Quy trình: <b>Ý tưởng</b> (bạn) → <b>Dàn ý</b> (AI gợi ý, bạn chọn) → <b>Viết</b> (bạn) → <b>Phản biện</b> (AI) → <b>Hoàn thiện</b> (bạn).",
  "Nhờ AI <b>phản biện</b>: tìm lỗ hổng lập luận, phản đề, câu khó hiểu. Đừng nhờ AI viết lại hộ.",
  "Giữ giọng văn của bạn: AI hay dùng câu sáo rỗng, giống nhau; giáo viên và người đọc nhận ra.",
  "Liêm chính học thuật: công khai việc dùng AI theo quy định lớp; không nộp bài AI viết như của mình."
 ],
 q: [
  ["Dùng AI cho bài văn nghị luận thế nào là đúng?", ["Nhờ AI phản biện lập luận bạn tự viết", "Nhờ AI viết rồi chép"], 0, "AI hỗ trợ tư duy, bạn là tác giả."],
  ["Bài thuyết trình nên có?", ["Mỗi slide một ý, có hình", "Chép nguyên đoạn văn lên slide"], 0, "Slide là điểm tựa, không phải bài đọc."],
  ["Quy định của lớp không cho dùng AI cho bài này. Bạn nên?", ["Tuân thủ", "Dùng lén"], 0, "Liêm chính học thuật."]
 ],
 s: [
  { k: "cover", img: "tp08-1", alt: "Học sinh tự tin thuyết trình trên sân khấu, Rô-bi điều khiển slide", ep: "A confident Vietnamese teenage girl aged 17 presenting on a school auditorium stage with a big screen behind her, classmates who are Vietnamese teenagers in white shirts clapping, Robi in the corner operating the slide clicker, warm spotlight", sub: "Bạn là tác giả. AI là biên tập viên khó tính." },
  { k: "steps", title: "Quy trình viết có AI hỗ trợ", items: [["Ý tưởng · Bạn", "Quan điểm, luận điểm chính"], ["Dàn ý · AI gợi ý", "Bạn chọn và sắp xếp"], ["Viết · Bạn", "Bằng giọng văn của bạn"], ["Phản biện · AI", "Tìm lỗ hổng, phản đề"], ["Hoàn thiện · Bạn", "Bạn quyết định sửa gì"]] },
  { k: "table", title: "Prompt phản biện", head: ["Mục đích", "Prompt"], rows: [["Tìm lỗ hổng", "Đóng vai giám khảo khó tính. Chỉ ra 3 điểm yếu trong lập luận của bài này."], ["Phản đề", "Nêu 2 ý kiến phản bác mạnh nhất với luận điểm của tôi."], ["Rõ ràng", "Câu nào trong bài khó hiểu? Giải thích vì sao, đừng viết lại."], ["Bằng chứng", "Luận điểm nào của tôi đang thiếu dẫn chứng?"]] },
  { k: "split", img: "tp08-2", alt: "Hai bài văn: một bài sáo rỗng, một bài có giọng riêng", ep: "Two floating essay papers side by side: the left one grey and generic with repetitive stamp patterns, the right one colorful with personal doodles and sparkles, a Vietnamese teenage boy holding the colorful one proudly, Robi nodding approvingly", title: "Giữ giọng văn của bạn", html: "<p class='big'>Văn AI thường trơn tru nhưng <b>na ná nhau</b>, nhiều câu sáo rỗng.</p><p>Trải nghiệm thật, ví dụ của chính bạn, cách nói của bạn mới làm bài viết có giá trị.</p>" },
  { k: "cards", title: "Thuyết trình hiệu quả", items: [["Mở đầu gây chú ý", "Câu hỏi, con số, câu chuyện"], ["Mỗi slide một ý", "Tối đa 6 dòng, chữ to, có hình"], ["Kết có thông điệp", "Người nghe nhớ điều gì?"], ["Luyện tập", "Nhờ AI đặt 5 câu hỏi khó để tập trả lời"]] },
  { k: "try", q: "Đâu là cách dùng AI đúng liêm chính học thuật?", opts: ["Tự viết, nhờ AI chỉ lỗi, ghi rõ đã dùng AI để rà lỗi", "Nhờ AI viết, sửa vài chữ cho khác đi"], a: 0, why: "Công khai và giữ phần tư duy cho mình." },
  { k: "story", text: "Bạn nộp bài luận AI viết. Giáo viên gọi lên hỏi 3 câu về lập luận trong bài, bạn không trả lời được.", q: "Bài học là gì?", a: "Bài làm phải phản ánh hiểu biết của bạn. Ngoài vi phạm quy định, bạn còn mất cơ hội rèn kỹ năng lập luận, thứ sẽ cần cho đại học và công việc." },
  { k: "myth", items: [["Công cụ phát hiện AI luôn chính xác.", "Các công cụ này có thể sai, kể cả với bài người viết. Liêm chính là việc của bạn, không phải trò trốn công cụ."]] },
  { k: "act", title: "Thực hành", items: ["Viết một đoạn nghị luận 200 chữ về một vấn đề bạn quan tâm.", "Dùng 2 prompt phản biện, ghi lại góp ý.", "Tự sửa, so sánh bản đầu và bản cuối.", "Ghi vào Phiếu 8 phần nào có hỗ trợ của AI."] },
  { k: "recap", items: ["Bạn là tác giả, AI là biên tập viên.", "Nhờ AI phản biện, không nhờ viết hộ.", "Giữ giọng văn và trải nghiệm của bạn.", "Công khai việc dùng AI theo quy định."] }
 ]
}
]
};
