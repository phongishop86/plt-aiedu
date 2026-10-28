/* Dữ liệu khóa AI cho Người đi làm: 16 buổi × 120 phút.
   Phần 1–2: buổi 1–8 (file này). Phần 3–4: buổi 9–16 (lessons-di-lam-2.js).
   n = ghi chú cho người dạy; ep = mô tả cảnh tiếng Anh để tạo ảnh (docs/prompt-anh-di-lam.csv). */
window.AIEDU_LEVEL = {
key: "plt-aiedu-di-lam-v1",
level: "Người đi làm",
age: "Từ 18 tuổi",
factLabel: "Bạn có biết?",
recapLabel: "Mang về công việc",
parts: {
  1: { cls: "p1", name: "Phần 1 · Nền tảng dùng AI trong công việc" },
  2: { cls: "p2", name: "Phần 2 · AI cho việc văn phòng" },
  3: { cls: "p3", name: "Phần 3 · AI cho chuyên môn và kinh doanh" },
  4: { cls: "p4", name: "Phần 4 · Tự động hóa công việc" }
},
gym: {
  tag: "Buổi 2 · Prompt công việc 6 thành phần",
  title: "Phòng tập prompt công việc",
  intro: "Gõ yêu cầu bạn định gửi cho AI, máy chấm theo 6 thành phần và cảnh báo nếu có dữ liệu nhạy cảm. Bài chấm chạy ngay trên máy, không gửi đi đâu.",
  unit: "thành phần",
  checks: [
    ["Vai trò", "AI đóng vai ai?", "(bạn là|đóng vai|hãy là|vai trò|với tư cách|như một)", "Thêm: “Bạn là chuyên viên chăm sóc khách hàng 10 năm kinh nghiệm…”"],
    ["Nhiệm vụ", "Việc cụ thể cần làm", "(viết|soạn|tóm tắt|phân tích|lập|liệt kê|so sánh|kiểm tra|rà soát|đề xuất|gợi ý|dịch|chuyển|trả lời|tạo|sửa)", "Thêm động từ rõ: soạn email, tóm tắt, lập bảng, rà soát lỗi…"],
    ["Bối cảnh", "Ai đọc, mục tiêu gì, tình hình ra sao", "(gửi cho|người nhận|khách hàng|sếp|đồng nghiệp|phòng|công ty|mục tiêu|để|vì|bối cảnh|tình huống)", "Thêm: “Email gửi khách hàng doanh nghiệp, mục tiêu là hẹn lịch gặp…”"],
    ["Mẫu", "Cho AI xem ví dụ hoặc văn phong mẫu", "(ví dụ|mẫu|như sau|theo dạng|tương tự|văn phong|giọng)", "Thêm: “Giọng lịch sự, ngắn gọn, giống mẫu sau: …”"],
    ["Định dạng", "Kết quả trình bày thế nào", "(bảng|gạch đầu dòng|danh sách|\\d+\\s*(ý|câu|dòng|bước|từ|đoạn|chữ)|dưới \\d+|tiêu đề|cột|json|đoạn văn)", "Thêm: “Dưới 150 chữ, có tiêu đề email và 3 ý chính…”"],
    ["Kiểm tra", "Yêu cầu nêu giả định, chỗ chưa chắc", "(kiểm tra lại|nếu không chắc|không bịa|hỏi lại tôi|nêu giả định|nguồn|trích dẫn|đánh dấu|chưa rõ)", "Thêm: “Nếu thiếu thông tin, hãy hỏi lại tôi trước khi viết.”"]
  ],
  privacy: "(\\b0\\d{9}\\b|\\b\\d{12}\\b|\\b\\d{16}\\b|cccd|cmnd|căn cước|mật khẩu|\\botp\\b|số tài khoản|số thẻ|mã pin|địa chỉ nhà|lương của)",
  privacyMsg: "<b>Đèn đỏ!</b> Yêu cầu này có vẻ chứa dữ liệu nhạy cảm (số CCCD, số tài khoản, số thẻ, mật khẩu, OTP, số điện thoại, lương…). Thay bằng dữ liệu giả hoặc ký hiệu như [KHÁCH A], [STK] trước khi gửi cho AI.",
  samples: [
    "Viết email xin lỗi khách.",
    "Bạn là chuyên viên chăm sóc khách hàng của một cửa hàng đồ gia dụng. Hãy soạn email xin lỗi gửi cho khách hàng [KHÁCH A] vì giao hàng trễ 3 ngày, mục tiêu là giữ khách và đề nghị giảm 5% đơn sau. Giọng lịch sự, chân thành, theo mẫu: lời xin lỗi – lý do – cách khắc phục – lời cảm ơn. Dưới 150 chữ, có tiêu đề email. Nếu thiếu thông tin, hãy hỏi lại tôi trước khi viết.",
    "Tóm tắt báo cáo này.",
    "Tóm tắt hồ sơ của khách Nguyễn Văn A, CCCD 001234567890."
  ]
},
games: [
  { tag: "Buổi 3", title: "Dán vào AI công cộng được không?",
    choices: [["g", "Được dán", "l-g"], ["y", "Ẩn danh trước", "l-y"], ["r", "Không bao giờ", "l-r"]],
    items: [
      ["Bài đăng tuyển dụng công ty đã đăng công khai trên website", "g", "Thông tin đã công khai."],
      ["Danh sách 200 khách hàng kèm số điện thoại và lịch sử mua hàng", "r", "Dữ liệu cá nhân và bí mật khách hàng, không đưa vào công cụ ngoài."],
      ["Mật khẩu hệ thống nội bộ để AI “kiểm tra độ mạnh”", "r", "Mật khẩu không bao giờ chia sẻ với bất kỳ ai, kể cả AI."],
      ["Bản nháp email gửi khách, có tên khách và số hợp đồng", "y", "Thay tên, số hợp đồng bằng [KHÁCH A], [HĐ-01] rồi mới nhờ AI sửa."],
      ["Câu hỏi “cách dùng hàm XLOOKUP trong Excel”", "g", "Kiến thức chung, không có dữ liệu riêng."],
      ["Bảng lương phòng ban để AI tính thưởng", "y", "Bỏ tên thật, chỉ giữ cột số liệu cần tính, hoặc dùng công cụ công ty cho phép."],
      ["Ảnh chụp CCCD của khách để AI đọc thông tin", "r", "Giấy tờ tùy thân là dữ liệu cá nhân nhạy cảm, chỉ xử lý trên hệ thống được phép."],
      ["Đoạn code Python tự viết, không chứa khóa bí mật hay dữ liệu thật", "g", "Được, nhưng xóa mọi khóa API, mật khẩu, đường dẫn nội bộ nếu có."]
    ] },
  { tag: "Buổi 10", title: "Lừa đảo hay thật?",
    choices: [["r", "Lừa đảo", "l-r"], ["y", "Phải xác minh", "l-y"], ["g", "Bình thường", "l-g"]],
    items: [
      ["Tin nhắn: “Tài khoản của bạn bị khóa, bấm link bit.ly/... để mở lại trong 30 phút”", "r", "Tạo gấp gáp + link lạ là dấu hiệu kinh điển. Ngân hàng không gửi link yêu cầu đăng nhập."],
      ["Gọi video từ “sếp” nhờ chuyển gấp tiền cho đối tác, hình hơi giật, sếp bảo đang họp không nói được lâu", "r", "Mẫu lừa đảo deepfake. Gọi lại sếp qua số đã lưu, làm theo quy trình phê duyệt."],
      ["Người thân nhắn Zalo mượn tiền, giọng văn khác ngày thường", "y", "Gọi điện trực tiếp, hỏi một điều chỉ hai người biết."],
      ["Ngân hàng nhắn OTP khi chính bạn vừa bấm chuyển tiền trên app", "g", "Bình thường, nhưng tuyệt đối không đọc OTP cho ai."],
      ["“Cán bộ công an” gọi báo bạn liên quan vụ án, yêu cầu chuyển tiền vào “tài khoản tạm giữ”", "r", "Cơ quan nhà nước không làm việc qua điện thoại và không yêu cầu chuyển tiền."],
      ["Email từ đối tác quen báo “đổi số tài khoản nhận tiền”, tên miền email khác một chữ", "r", "Giả mạo email doanh nghiệp. Xác minh qua số điện thoại đã biết trước khi đổi."],
      ["Cửa hàng online yêu cầu chuyển khoản trước 100%, trang mới lập, bình luận toàn khen", "y", "Xem lịch sử trang, chọn thanh toán khi nhận hàng hoặc sàn có bảo vệ người mua."],
      ["Ứng dụng ngân hàng tải từ CH Play / App Store chính thức, yêu cầu xác thực khuôn mặt khi chuyển 15 triệu", "g", "Đúng quy định xác thực sinh trắc học với giao dịch trên 10 triệu đồng."]
    ] }
],
lessons: [
{
 p: 1, t: "AI tạo sinh trong công việc",
 g: "Hiểu AI tạo sinh làm được gì, không làm được gì; chọn công cụ phù hợp; tìm 3 việc của bạn có thể giao cho AI.",
 pts: [
  "<b>AI tạo sinh</b> (Generative AI) tạo ra nội dung mới: chữ, hình, tiếng, video, code, dựa trên quy luật học từ rất nhiều dữ liệu.",
  "Chatbot hoạt động bằng cách <b>đoán từ tiếp theo</b> hợp lý nhất. Vì vậy nó viết trôi chảy nhưng có thể <b>bịa</b> thông tin nghe rất thật.",
  "AI mạnh ở: viết nháp, tóm tắt, dịch, sắp xếp ý, giải thích, viết công thức và code. AI yếu ở: số liệu chính xác, sự kiện mới, việc cần trách nhiệm pháp lý.",
  "Nguyên tắc vàng: <b>AI là trợ lý, bạn là người chịu trách nhiệm</b>. Mọi sản phẩm gửi đi đều phải qua mắt bạn."
 ],
 q: [
  ["Vì sao chatbot có thể “bịa” thông tin?", ["Vì nó tạo câu trả lời bằng cách đoán từ hợp lý, không tra cứu sự thật", "Vì nó cố tình nói dối", "Vì mạng internet chậm"], 0, "Mô hình ngôn ngữ dự đoán từ tiếp theo, câu nghe hợp lý chưa chắc đúng."],
  ["Việc nào nên giao AI làm bản nháp?", ["Soạn khung báo cáo tuần", "Ký duyệt hợp đồng", "Quyết định tuyển ai vào làm"], 0, "Bản nháp thì AI giúp nhanh; quyết định và trách nhiệm thuộc về con người."],
  ["Ai chịu trách nhiệm cho email bạn gửi đi do AI viết nháp?", ["Bạn", "Công ty làm ra AI", "Không ai cả"], 0, "Người gửi luôn chịu trách nhiệm với nội dung."]
 ],
 s: [
  { k: "cover", img: "dl01-1", alt: "Nhân viên văn phòng ngoài 30 làm việc cùng trợ lý AI giữa văn phòng hiện đại", ep: "Wide shot of an elegant open-plan office flooded with morning light, a Vietnamese office administrator woman about 32 in a cream blazer at a standing desk with two curved monitors where an AI assistant panel sorts emails, charts and documents into neat stacks, colleagues of different ages at nearby desks with laptops and tablets, smart speakers, wireless chargers and a large wall display showing an AI dashboard", sub: "Trợ lý mới của bạn: làm nhanh, không biết mệt, nhưng thỉnh thoảng nói bừa.", n: "Mở đầu bằng câu hỏi: “Tuần qua bạn mất nhiều thời gian nhất vào việc gì?” Ghi 5–6 câu trả lời lên bảng, cuối buổi quay lại xem việc nào AI giúp được." },
  { k: "concept", title: "AI tạo sinh là gì?", big: "Máy tạo ra nội dung mới dựa trên quy luật học từ hàng tỷ ví dụ.", ex: ["Ví dụ trong công việc", "Gõ: “Soạn thông báo nghỉ lễ 2/9 cho nhân viên” → AI viết ngay bản nháp đúng khung, bạn chỉ sửa ngày giờ và chi tiết riêng."] },
  { k: "guess", title: "Kính gửi Quý khách, chúng tôi xin ___", items: [["thông báo", 46], ["cảm ơn", 27], ["lỗi", 15], ["phép", 8], ["chúc", 4]], note: "Chatbot chọn từ có xác suất cao, nối dần thành cả bức thư. Nó giỏi văn mẫu, nhưng không “biết” sự thật về công ty bạn.", n: "Các con số là minh họa. Nhấn mạnh: vì đoán theo xác suất, khi thiếu thông tin AI vẫn đoán tiếp chứ không dừng lại → đó là nguồn gốc của “ảo giác”." },
  { k: "cards", title: "AI làm tốt và làm chưa tốt", items: [["Làm tốt", "Viết nháp, tóm tắt, dịch, đổi giọng văn, gợi ý ý tưởng, giải thích, viết công thức Excel, viết code"], ["Cần kiểm tra kỹ", "Số liệu, ngày tháng, điều luật, trích dẫn, tên người, sự kiện mới"], ["Không giao cho AI", "Quyết định cuối cùng, ký duyệt, việc cần trách nhiệm pháp lý, xử lý dữ liệu khách khi chưa được phép"]] },
  { k: "table", title: "Chọn công cụ nào?", head: ["Công cụ", "Điểm mạnh", "Bản miễn phí"], rows: [["ChatGPT", "Đa năng, viết, phân tích file, tạo ảnh", "Có, giới hạn lượt dùng mô hình mạnh"], ["Gemini", "Gắn với Gmail, Docs, Sheets; tìm kiếm Google", "Có"], ["Claude", "Viết dài, đọc tài liệu dài, viết code", "Có, giới hạn lượt"], ["Microsoft Copilot", "Gắn với Word, Excel, Outlook (bản trả phí)", "Có bản web miễn phí"], ["NotebookLM", "Trả lời chỉ dựa trên tài liệu bạn tải lên", "Có"]], note: "Học bản miễn phí trước. Chỉ trả phí khi đã dùng hằng ngày và chạm giới hạn.", n: "Tính năng và giới hạn thay đổi thường xuyên, người dạy nên kiểm tra lại trang chính thức trước buổi học. Nếu công ty có công cụ AI nội bộ hoặc bản doanh nghiệp, ưu tiên dùng bản đó cho dữ liệu công việc." },
  { k: "split", img: "dl01-2", alt: "Trưởng phòng ngoài 40 nghi ngờ bản báo cáo AI tự tin trình bày nhưng có số liệu sai", ep: "Medium shot in a glass-walled manager office, a Vietnamese department manager man about 45 with glasses and a navy suit raising an eyebrow at a large monitor where an AI chatbot proudly presents a polished report whose numbers are subtly scrambled and glowing red, he holds a red pen over a printed copy, Robi beside the monitor looking sheepish, bright daylight from floor-to-ceiling windows", title: "Tự tin không có nghĩa là đúng", html: "<p class='big'>AI trả lời sai với giọng <b>chắc chắn như trả lời đúng</b>.</p><p>Hiện tượng này gọi là <b>ảo giác</b> (hallucination). Càng hỏi về con số, luật, sự kiện cụ thể, càng phải kiểm tra.</p>" },
  { k: "fact", text: "Năm 2023, một luật sư ở New York nộp cho tòa bản luận cứ dẫn 6 bản án do ChatGPT “tìm giúp”. Cả 6 bản án đều không có thật. Tòa phạt luật sư và công ty luật 5.000 USD.", n: "Vụ Mata v. Avianca, tòa liên bang Manhattan. Bài học: AI không thay thế tra cứu nguồn gốc." },
  { k: "myth", items: [["AI sẽ thay thế hết nhân viên văn phòng.", "AI thay đổi cách làm việc. Người biết dùng AI làm nhanh hơn và dễ được giao việc giá trị hơn người không biết dùng."], ["Bản trả phí thì không bao giờ sai.", "Bản trả phí mạnh hơn nhưng vẫn có thể sai. Kiểm tra vẫn là việc của bạn."], ["Phải biết lập trình mới dùng được AI.", "Chỉ cần viết yêu cầu rõ ràng bằng tiếng Việt."]] },
  { k: "try", q: "Việc nào hợp nhất để giao AI làm trước?", opts: ["Soạn bản nháp thư mời họp tổng kết quý", "Quyết định nhân viên nào được tăng lương"], a: 0, why: "Thư mời là văn mẫu, sửa nhanh. Quyết định nhân sự cần con người cân nhắc và chịu trách nhiệm." },
  { k: "act", title: "Thực hành: kiểm kê công việc", items: ["Liệt kê 10 việc bạn làm trong tuần và số giờ mỗi việc.", "Tô xanh việc lặp lại, có khuôn mẫu (email, báo cáo, nhập liệu).", "Chọn 3 việc xanh tốn giờ nhất, ghi vào Phiếu 1.", "Mở một chatbot miễn phí, thử nhờ nó làm nháp 1 trong 3 việc."], n: "Mỗi học viên cần có tài khoản Google hoặc email để đăng nhập chatbot. Nhắc: dùng dữ liệu giả trong buổi học." },
  { k: "recap", items: ["AI tạo sinh tạo nội dung mới bằng cách đoán theo xác suất.", "Mạnh ở viết nháp, tóm tắt, giải thích; yếu ở số liệu, sự kiện cụ thể.", "AI là trợ lý, bạn chịu trách nhiệm cuối cùng.", "Bắt đầu với bản miễn phí, chọn 3 việc lặp lại để giao cho AI."] }
 ]
},
{
 p: 1, t: "Prompt cho công việc: 6 thành phần",
 g: "Viết yêu cầu cho AI đủ 6 thành phần; biết hỏi tiếp để sửa kết quả; xây thư viện prompt của riêng bạn.",
 pts: [
  "Prompt tốt có 6 thành phần: <b>Vai trò – Nhiệm vụ – Bối cảnh – Mẫu – Định dạng – Kiểm tra</b>.",
  "Không cần đủ cả 6 mọi lúc, nhưng việc càng quan trọng càng nên đủ.",
  "Kết quả đầu tiên hiếm khi hoàn hảo: <b>hỏi tiếp</b> để sửa (“ngắn hơn”, “trang trọng hơn”, “thêm số liệu”) thay vì viết lại từ đầu.",
  "Lưu prompt dùng tốt vào <b>thư viện prompt</b> (một file Docs hoặc Sheets) để dùng lại và chia sẻ với đồng nghiệp."
 ],
 q: [
  ["Thành phần “Bối cảnh” trả lời câu hỏi nào?", ["Ai đọc, mục tiêu gì, tình hình ra sao", "AI đóng vai ai", "Trình bày dạng bảng hay đoạn văn"], 0, "Bối cảnh giúp AI hiểu tình huống thật của bạn."],
  ["Kết quả AI viết hơi dài. Nên làm gì?", ["Hỏi tiếp: “Rút còn 100 chữ, giữ 3 ý chính”", "Xóa cuộc trò chuyện, gõ lại từ đầu", "Bỏ không dùng AI nữa"], 0, "Hỏi tiếp trong cùng cuộc trò chuyện để AI sửa theo ý bạn."],
  ["Câu “Nếu thiếu thông tin, hãy hỏi lại tôi” thuộc thành phần nào?", ["Kiểm tra", "Vai trò", "Mẫu"], 0, "Yêu cầu AI hỏi lại giúp giảm việc AI tự đoán và bịa."]
 ],
 s: [
  { k: "cover", img: "dl02-1", alt: "Kỹ sư trẻ ghép 6 mảnh ghép thành một yêu cầu hoàn chỉnh cho AI", ep: "Low-angle shot of a Vietnamese software engineer woman about 28 in a smart casual shirt in a bright tech workspace, assembling six large translucent glowing puzzle pieces with simple icons (mask, target, map, stamp, table grid, magnifying glass) into one complete shape floating above her keyboard, triple monitors and a laptop dock around her, a mechanical keyboard and headphones on the desk", sub: "Hỏi mơ hồ thì AI đoán mò. Hỏi rõ ràng thì AI làm đúng ý." },
  { k: "compare", title: "Cùng một việc, hai cách hỏi", a: ["Hỏi mơ hồ", "“Viết email xin lỗi khách.” → AI viết chung chung, sai tình huống, bạn phải sửa gần hết."], b: ["Hỏi rõ ràng", "“Bạn là CSKH… xin lỗi vì giao máy in trễ 3 ngày… đề nghị giảm 5%… dưới 150 chữ…” → dùng được gần như ngay."] },
  { k: "cards", title: "6 thành phần của prompt công việc", items: [["1. Vai trò", "Bạn là chuyên viên pháp chế / kế toán trưởng / CSKH…"], ["2. Nhiệm vụ", "Soạn, tóm tắt, rà soát, lập bảng, so sánh…"], ["3. Bối cảnh", "Gửi ai, mục tiêu gì, tình hình hiện tại"], ["4. Mẫu", "Văn phong, ví dụ, cấu trúc mong muốn"], ["5. Định dạng", "Độ dài, bảng, gạch đầu dòng, tiêu đề"], ["6. Kiểm tra", "Hỏi lại nếu thiếu, nêu giả định, không bịa"]], n: "Mẹo nhớ: “Vai – Việc – Cảnh – Mẫu – Dạng – Soát”." },
  { k: "table", title: "Một prompt mẫu, tách từng phần", head: ["Thành phần", "Nội dung"], rows: [["Vai trò", "Bạn là trưởng phòng hành chính."], ["Nhiệm vụ", "Soạn thông báo lịch nghỉ Tết."], ["Bối cảnh", "Gửi toàn công ty 45 người; nghỉ từ 14/2 đến hết 22/2; phòng IT trực luân phiên."], ["Mẫu", "Giọng trang trọng, ấm áp, theo cấu trúc: lịch nghỉ – lịch trực – lời chúc."], ["Định dạng", "Dưới 200 chữ, có tiêu đề, lịch trực dạng bảng."], ["Kiểm tra", "Nếu thiếu thông tin cần thiết, hỏi lại tôi trước khi viết."]] },
  { k: "steps", title: "Hỏi tiếp để sửa: vòng lặp 4 bước", items: [["Hỏi lần đầu", "Prompt đủ thành phần"], ["Đọc và chấm", "Đúng ý chưa? Thiếu gì? Sai gì?"], ["Góp ý cụ thể", "“Ngắn hơn”, “bỏ đoạn 2”, “thêm số liệu Q3”"], ["Chốt và lưu", "Lưu prompt tốt vào thư viện"]] },
  { k: "table", title: "Câu hỏi tiếp hay dùng", head: ["Muốn", "Gõ"], rows: [["Ngắn lại", "Rút còn 5 gạch đầu dòng, mỗi dòng dưới 15 chữ."], ["Đổi giọng", "Viết lại thân thiện hơn, như nói với khách quen."], ["Nhiều phương án", "Cho tôi 3 phiên bản tiêu đề khác nhau."], ["Tự phản biện", "Chỉ ra 3 điểm yếu của bản này rồi sửa."], ["Giải thích", "Vì sao bạn chọn cách viết này?"]] },
  { k: "split", img: "dl02-2", alt: "Chuyên viên nhân sự ngoài 30 chọn mẫu prompt trên thư viện số", ep: "Over-the-shoulder shot of a Vietnamese HR specialist woman about 36 in a soft blouse browsing a large touchscreen wall that shows a neat digital library of prompt cards arranged like book spines with simple icons, she taps one card and it expands, minimalist Scandinavian-style office with light wood, plants and a coffee bar, soft natural light", title: "Thư viện prompt của bạn", html: "<p class='big'>Prompt dùng tốt là <b>tài sản</b>, đừng để mất.</p><p>Tạo một bảng 4 cột: <b>Việc – Prompt – Ghi chú – Lần dùng gần nhất</b>. Chỗ thay đổi mỗi lần đặt trong ngoặc vuông, ví dụ [TÊN KHÁCH], [NGÀY].</p>" },
  { k: "try", q: "Prompt nào tốt hơn để nhờ AI tóm tắt biên bản họp?", opts: ["Tóm tắt biên bản này giúp tôi.", "Bạn là thư ký. Tóm tắt biên bản họp dưới đây cho sếp chưa dự họp: 5 ý chính, bảng việc cần làm (việc – người phụ trách – hạn). Ý nào chưa rõ thì đánh dấu [?]."], a: 1, why: "Có vai trò, người đọc, định dạng rõ và yêu cầu đánh dấu chỗ chưa chắc." },
  { k: "quote", label: "Nguyên tắc", text: "Hãy viết prompt như đang giao việc cho một nhân viên mới rất giỏi nhưng chưa biết gì về công ty bạn." },
  { k: "act", title: "Thực hành: phòng tập prompt", items: ["Mở Phòng tập prompt công việc trên trang khóa học.", "Viết prompt cho 1 trong 3 việc đã chọn ở Buổi 1, đạt đủ 6/6.", "Gửi cho chatbot, hỏi tiếp ít nhất 2 lần để sửa.", "Lưu prompt cuối vào thư viện prompt (Phiếu 2)."], link: ["Mở phòng tập", "./#phong-tap-prompt"] },
  { k: "recap", items: ["Prompt công việc: Vai – Việc – Cảnh – Mẫu – Dạng – Soát.", "Giao việc cho AI như giao cho nhân viên mới.", "Hỏi tiếp để sửa, đừng làm lại từ đầu.", "Lưu prompt tốt vào thư viện để dùng lại."] }
 ]
},
{
 p: 1, t: "Bảo mật dữ liệu và quy định khi dùng AI",
 g: "Phân loại dữ liệu trước khi đưa vào AI; ẩn danh hóa; nắm các quy định chính của Việt Nam về dữ liệu cá nhân và AI.",
 pts: [
  "Dữ liệu bạn dán vào chatbot công cộng được <b>gửi lên máy chủ</b> của nhà cung cấp, có thể được lưu lại và tùy cài đặt có thể dùng để cải thiện mô hình.",
  "Phân loại theo <b>đèn giao thông</b>: Xanh (công khai), Vàng (nội bộ, cần ẩn danh), Đỏ (dữ liệu cá nhân, bí mật khách hàng, mật khẩu: không đưa vào AI ngoài).",
  "<b>Ẩn danh hóa</b>: thay tên, số giấy tờ, số tài khoản bằng ký hiệu [KHÁCH A], [STK-1] trước khi nhờ AI.",
  "Luật Bảo vệ dữ liệu cá nhân (số 91/2025/QH15, hiệu lực 01/01/2026) và Luật Trí tuệ nhân tạo (số 134/2025/QH15, hiệu lực 01/3/2026). Luôn tuân thủ thêm quy định nội bộ của công ty."
 ],
 q: [
  ["Danh sách khách hàng kèm số điện thoại và địa chỉ thuộc loại nào?", ["Đỏ: không đưa vào AI công cộng", "Xanh: thoải mái", "Vàng: chỉ cần viết hoa"], 0, "Dữ liệu cá nhân và bí mật khách hàng không đưa vào công cụ ngoài."],
  ["Ẩn danh hóa nghĩa là gì?", ["Thay thông tin nhận diện bằng ký hiệu trước khi dùng", "Đăng nhập AI không cần tài khoản", "Xóa lịch sử trò chuyện"], 0, "Ví dụ: “Nguyễn Văn A, STK 0123…” → “[KHÁCH A], [STK-1]”."],
  ["Luật Bảo vệ dữ liệu cá nhân có hiệu lực từ khi nào?", ["01/01/2026", "01/01/2024", "Chưa có hiệu lực"], 0, "Luật số 91/2025/QH15 có hiệu lực từ 01/01/2026."]
 ],
 s: [
  { k: "cover", img: "dl03-1", alt: "Nhân viên pháp chế cất hồ sơ mật vào két điện tử trước khi làm việc với AI", ep: "Medium shot of a Vietnamese legal officer man about 40 in a crisp white shirt and tie placing glowing red confidential folders into a sleek biometric digital safe built into a modern cabinet, while passing only a blurred anonymized green document to an AI terminal on his desk, a large padlock hologram above, clean bright office with frosted glass partitions and security cameras", sub: "Một lần dán nhầm dữ liệu khách có thể trả giá bằng cả sự nghiệp." },
  { k: "concept", title: "Dữ liệu đi đâu khi bạn bấm Gửi?", big: "Nó rời máy bạn, đến máy chủ của nhà cung cấp AI, và có thể được lưu lại.", ex: ["Điều cần làm", "Đọc chính sách của công cụ; kiểm tra cài đặt “dùng dữ liệu để cải thiện mô hình”; với dữ liệu công việc, ưu tiên công cụ AI mà công ty đã cho phép."], n: "Các bản doanh nghiệp (ChatGPT Business/Enterprise, Gemini cho Workspace, Claude cho tổ chức…) thường cam kết không dùng dữ liệu để huấn luyện, nhưng vẫn phải tuân thủ quy định nội bộ. Người dạy kiểm tra chính sách hiện hành trước khi trình bày." },
  { k: "lights", title: "Đèn giao thông dữ liệu", items: [["g", "Xanh · Dán được", "Thông tin công khai, kiến thức chung, văn bản tự viết không có dữ liệu riêng."], ["y", "Vàng · Ẩn danh trước", "Tài liệu nội bộ, email có tên khách, số liệu kinh doanh: thay bằng ký hiệu, bỏ chi tiết thừa."], ["r", "Đỏ · Không bao giờ", "CCCD, số tài khoản, số thẻ, mật khẩu, OTP, hồ sơ khách hàng, dữ liệu tài chính cá nhân, bí mật kinh doanh."]] },
  { k: "table", title: "Ẩn danh hóa trước khi nhờ AI", head: ["Dữ liệu thật", "Thay bằng"], rows: [["Nguyễn Văn An", "[KHÁCH A]"], ["CCCD 0012xxxxxxxx", "[CCCD]"], ["STK 1903xxxxxxxx", "[STK-1]"], ["Công ty TNHH Minh Phát", "[CÔNG TY X]"], ["Hợp đồng 2.350.000.000 đ", "Hợp đồng khoảng 2,3 tỷ (nếu số chính xác không cần thiết)"]], note: "Làm xong, thay ký hiệu bằng dữ liệu thật trên máy của bạn, không làm việc đó trong chatbot." },
  { k: "timeline", title: "Khung pháp lý cần biết", items: [["2023", "Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân"], ["06/2025", "Quốc hội thông qua Luật Bảo vệ dữ liệu cá nhân (91/2025/QH15)"], ["12/2025", "Quốc hội thông qua Luật Trí tuệ nhân tạo (134/2025/QH15)"], ["01/01/2026", "Luật Bảo vệ dữ liệu cá nhân có hiệu lực"], ["01/3/2026", "Luật Trí tuệ nhân tạo có hiệu lực"]], n: "Luật AI cấm dùng AI để lừa dối, thao túng, khai thác nhóm dễ bị tổn thương, tạo nội dung giả gây hại; nội dung âm thanh, hình ảnh, video do AI tạo ra phải có dấu hiệu nhận biết. Đây là giáo trình phổ cập, không phải tư vấn pháp lý: khi cần, tra văn bản gốc tại cổng thông tin chính thức." },
  { k: "fact", text: "Năm 2023, một số kỹ sư của Samsung dán mã nguồn và nội dung cuộc họp nội bộ vào ChatGPT để nhờ sửa lỗi và tóm tắt. Sau sự cố, Samsung tạm cấm nhân viên dùng chatbot AI công cộng trên thiết bị công ty.", n: "Sự việc được nhiều báo quốc tế đưa tin (tháng 4–5/2023). Dùng để thảo luận: lỗi không nằm ở AI mà ở quy trình dùng dữ liệu." },
  { k: "split", img: "dl03-2", alt: "Nhân viên IT ngoài 30 tắt các công tắc quyền riêng tư trên màn hình cảm ứng lớn", ep: "Close-up on hands and face of a Vietnamese IT administrator man about 34 in a polo shirt adjusting large privacy toggle switches on a wall-mounted touchscreen, server rack lights and network switches softly visible behind glass in the background, a shield icon on the screen, Robi holding a small shield, cool bright clean light", title: "Làm ngay hôm nay", html: "<p class='big'>Mở <b>Cài đặt → Quyền riêng tư / Kiểm soát dữ liệu</b> của chatbot bạn dùng.</p><p>Xem mục cho phép dùng cuộc trò chuyện để cải thiện mô hình, quyết định bật hay tắt. Dùng chế độ trò chuyện tạm thời khi cần.</p>" },
  { k: "story", text: "Chị Lan cần viết gấp một báo cáo đánh giá hồ sơ khách hàng. Chị định chụp toàn bộ hồ sơ (CCCD, hợp đồng, bảng thu nhập) rồi dán vào chatbot để nhờ viết.", q: "Chị nên làm thế nào?", a: "Không dán hồ sơ thật. Chị nhờ AI soạn <b>khung báo cáo</b> và các câu văn mẫu với dữ liệu giả [KHÁCH A], giá trị [X] triệu… rồi tự điền số liệu thật trên hệ thống nội bộ. Nếu đơn vị có công cụ AI nội bộ được phép, dùng công cụ đó." },
  { k: "myth", items: [["Xóa cuộc trò chuyện là dữ liệu biến mất ngay.", "Nhà cung cấp có thể vẫn lưu một thời gian theo chính sách của họ. An toàn nhất là không đưa dữ liệu đỏ vào."], ["Dữ liệu ít thì không sao.", "Chỉ một số CCCD hay một số tài khoản bị lộ đã đủ gây hại cho khách và vi phạm quy định."]] },
  { k: "act", title: "Thực hành", items: ["Chơi trò “Dán vào AI công cộng được không?” trên trang khóa học.", "Lấy một email công việc thật, ẩn danh hóa theo bảng ở trên (Phiếu 3).", "Kiểm tra cài đặt quyền riêng tư của chatbot bạn dùng.", "Hỏi bộ phận IT hoặc pháp chế: công ty cho phép dùng công cụ AI nào?"], link: ["Chơi trò chơi", "./#tro-choi"] },
  { k: "recap", items: ["Dữ liệu gửi cho AI rời khỏi máy bạn.", "Xanh dán được, Vàng ẩn danh trước, Đỏ không bao giờ.", "Thay thông tin nhận diện bằng ký hiệu [KHÁCH A].", "Tuân thủ luật và quy định nội bộ, ưu tiên công cụ công ty cho phép."] }
 ]
},
{
 p: 1, t: "Kiểm chứng: đừng tin AI tuyệt đối",
 g: "Nhận diện ảo giác; kiểm tra số liệu, nguồn, điều luật; dùng quy trình 4 bước trước khi dùng kết quả AI.",
 pts: [
  "AI có thể bịa <b>số liệu, trích dẫn, điều luật, đường link</b>. Câu trả lời càng cụ thể càng phải kiểm.",
  "Quy trình <b>4 bước Đọc – Đánh dấu – Đối chiếu – Duyệt</b>: đọc hết, đánh dấu câu có sự kiện cụ thể, đối chiếu nguồn gốc, rồi mới duyệt dùng.",
  "Nguồn gốc đáng tin: văn bản pháp luật trên cổng chính thức, báo cáo của cơ quan nhà nước, tài liệu nội bộ chính thức, website nhà sản xuất.",
  "Dùng AI để <b>tính toán</b> thì yêu cầu AI chạy code hoặc tự tính lại bằng Excel; đừng tin phép tính “nhẩm” của chatbot."
 ],
 q: [
  ["Loại thông tin nào AI dễ bịa nhất?", ["Trích dẫn, số liệu, điều luật cụ thể", "Lời chào đầu email", "Cách sắp xếp ý"], 0, "Chi tiết cụ thể là chỗ ảo giác hay xuất hiện."],
  ["AI trích “Điều 15 Luật X” cho bạn. Bước tiếp theo?", ["Mở văn bản gốc kiểm tra Điều 15", "Dán ngay vào báo cáo", "Hỏi lại AI “bạn chắc không?” là đủ"], 0, "Hỏi lại AI không thay được kiểm tra nguồn gốc."],
  ["Nhờ AI cộng tổng một bảng số liệu dài, cách an toàn là?", ["Kiểm tra lại bằng hàm SUM trong Excel", "Tin vì máy tính không sai", "Làm tròn cho dễ nhìn"], 0, "Chatbot có thể tính sai; Excel hoặc code cho kết quả kiểm chứng được."]
 ],
 s: [
  { k: "cover", img: "dl04-1", alt: "Kế toán ngoài 40 soi từng dòng báo cáo do AI viết", ep: "Side view of a Vietnamese chief accountant woman about 47 with short hair and reading glasses in a smart cardigan leaning toward a wide monitor with a magnifying-glass cursor tool highlighting lines of an AI-written report, some lines marked green as verified and a few red as wrong, printed ledgers, a calculator and a document scanner on her tidy desk, warm afternoon sunlight through blinds", sub: "Một phút kiểm tra tiết kiệm cả tuần sửa sai." },
  { k: "concept", title: "Ảo giác của AI", big: "Câu trả lời nghe hợp lý, trình bày đẹp, nhưng chứa thông tin không có thật.", ex: ["Ví dụ", "Hỏi “Thông tư nào quy định hạn mức chuyển tiền?” AI có thể đưa ra số thông tư, ngày ban hành rất cụ thể nhưng sai hoàn toàn."] },
  { k: "steps", title: "Quy trình 4Đ trước khi dùng kết quả", items: [["Đọc", "Đọc hết, không chỉ lướt phần đầu"], ["Đánh dấu", "Tô vàng mọi con số, tên, ngày, điều luật, link"], ["Đối chiếu", "Kiểm từng chỗ tô vàng với nguồn gốc"], ["Duyệt", "Sửa hoặc xóa chỗ sai, rồi mới dùng"]] },
  { k: "table", title: "Kiểm cái gì, ở đâu?", head: ["Loại thông tin", "Kiểm ở đâu"], rows: [["Văn bản pháp luật", "Cổng thông tin chính thức của Chính phủ, bộ ngành, cơ sở dữ liệu văn bản pháp luật"], ["Quy định nội bộ", "Văn bản, quy trình chính thức của công ty"], ["Số liệu kinh tế", "Tổng cục Thống kê, Ngân hàng Nhà nước, báo cáo gốc"], ["Thông số sản phẩm", "Website nhà sản xuất, datasheet"], ["Phép tính", "Excel, Google Sheets hoặc code Python"]] },
  { k: "split", img: "dl04-2", alt: "Luật sư so sánh câu trả lời AI với văn bản gốc trên hai màn hình", ep: "Symmetrical composition of a Vietnamese lawyer woman about 38 in a dark suit seated between two vertical monitors, the left showing a chatbot answer with a hairline crack effect, the right showing an official source document with a seal icon, she compares them calmly with a stylus on a tablet, bookshelf with law books and a modern conference room behind, soft diffused skylight", title: "Prompt giảm ảo giác", html: "<p>Thêm vào prompt:</p><p class='big'>“Chỉ dùng thông tin trong tài liệu tôi gửi. Nếu tài liệu không có, hãy nói <b>‘không có trong tài liệu’</b>. Trích nguyên văn câu làm căn cứ.”</p><p>Cách này giảm bịa, nhưng vẫn phải kiểm.</p>" },
  { k: "fact", text: "NotebookLM của Google trả lời dựa trên tài liệu bạn tải lên và đánh số trích dẫn tới đúng đoạn trong tài liệu. Bấm vào số là thấy câu gốc, kiểm chứng rất nhanh.", n: "Demo nếu có mạng: tải lên một văn bản quy định, hỏi 2 câu, bấm vào trích dẫn để xem đoạn gốc. Nhắc lại: tài liệu tải lên vẫn phải tuân thủ đèn giao thông dữ liệu." },
  { k: "try", q: "AI viết: “Doanh thu quý 3 tăng 23% so với quý 2.” Bạn làm gì?", opts: ["Mở bảng số liệu gốc, tự tính lại tỷ lệ tăng", "Giữ nguyên vì AI đã đọc file rồi"], a: 0, why: "AI có thể đọc nhầm cột hoặc tính sai. Số đưa vào báo cáo phải tự kiểm." },
  { k: "story", text: "Anh Tùng nhờ AI viết bài giới thiệu sản phẩm máy chiếu. AI ghi “độ sáng 5.000 lumen, bảo hành 5 năm”. Thực tế máy chỉ 3.600 lumen, bảo hành 2 năm. Bài đã đăng lên fanpage công ty.", q: "Hậu quả và cách phòng tránh?", a: "Khách có thể khiếu nại vì quảng cáo sai sự thật, ảnh hưởng uy tín công ty. Phòng tránh: dán thông số thật từ datasheet vào prompt, yêu cầu AI chỉ dùng số liệu đó, và đối chiếu lần cuối trước khi đăng." },
  { k: "myth", items: [["Hỏi lại “Bạn chắc chứ?” là AI sẽ sửa đúng.", "AI có thể đổi ý sang một câu sai khác, hoặc giữ nguyên câu sai. Phải kiểm nguồn gốc."], ["AI có trích link thì chắc đúng.", "Link cũng có thể bịa hoặc không chứa nội dung như AI nói. Mở link ra đọc."]] },
  { k: "act", title: "Thực hành: săn ảo giác", items: ["Hỏi chatbot 3 câu cụ thể về lĩnh vực của bạn (một quy định, một số liệu, một sự kiện).", "Áp dụng quy trình 4Đ, ghi kết quả vào Phiếu 4.", "Đếm: bao nhiêu chi tiết đúng, bao nhiêu sai, bao nhiêu không kiểm được?", "Chia sẻ với nhóm ví dụ ảo giác “đáng sợ” nhất bạn tìm được."] },
  { k: "recap", items: ["AI có thể bịa số liệu, trích dẫn, điều luật.", "Quy trình 4Đ: Đọc – Đánh dấu – Đối chiếu – Duyệt.", "Yêu cầu AI chỉ dùng tài liệu bạn gửi và trích nguyên văn.", "Phép tính phải kiểm bằng Excel hoặc code."] }
 ]
},
{
 p: 2, t: "Email và văn bản hành chính",
 g: "Dùng AI soạn và sửa email, công văn, thông báo nhanh và chuyên nghiệp; giữ đúng thể thức và giọng của bạn.",
 pts: [
  "Email tốt có: <b>tiêu đề rõ việc</b>, mở đầu nêu mục đích ngay, nội dung chia ý, <b>đề nghị hành động</b> cụ thể (ai làm gì, khi nào).",
  "AI giúp ba việc: <b>viết nháp</b> từ ý gạch đầu dòng, <b>sửa</b> văn bản bạn đã viết, <b>trả lời</b> email khó (khiếu nại, từ chối, nhắc nợ).",
  "Văn bản hành chính phải theo thể thức của cơ quan, đơn vị (ở cơ quan nhà nước là Nghị định 30/2020/NĐ-CP). AI soạn nội dung, bạn đặt vào mẫu chuẩn.",
  "Giữ <b>giọng của bạn</b>: gửi AI 2–3 email cũ bạn viết (đã ẩn danh) và yêu cầu viết theo văn phong đó."
 ],
 q: [
  ["Phần nào giúp người nhận biết phải làm gì?", ["Đề nghị hành động: ai làm gì, khi nào", "Lời chào", "Chữ ký"], 0, "Email công việc cần kết thúc bằng hành động cụ thể."],
  ["Muốn AI viết giống giọng bạn, nên làm gì?", ["Gửi kèm 2–3 email mẫu bạn đã viết (đã ẩn danh)", "Ghi “viết hay vào”", "Không làm được"], 0, "Đưa mẫu thật là cách nhanh nhất để AI bắt chước văn phong."],
  ["Khi nhờ AI trả lời khách đang tức giận, điều nên dặn AI?", ["Ghi nhận cảm xúc, xin lỗi phần mình sai, đưa giải pháp cụ thể", "Phản bác từng ý của khách", "Viết thật dài cho trang trọng"], 0, "Ghi nhận – xin lỗi – giải pháp giúp xoa dịu khách."]
 ],
 s: [
  { k: "cover", img: "dl05-1", alt: "Thư ký điều hành ngoài 30 xử lý hộp thư gọn gàng nhờ AI", ep: "Eye-level medium shot of a Vietnamese executive assistant woman about 33 in an elegant blouse smiling at an ultrawide monitor where dozens of email icons glide out of an overflowing inbox into neatly labeled folders, AI draft replies appearing in a side panel, a smartphone on a wireless charger and a video-call camera on top of the screen, bright reception-level office with marble and plants", sub: "Từ hộp thư quá tải đến email gọn gàng trong 5 phút." },
  { k: "cards", title: "Cấu trúc email công việc", items: [["Tiêu đề", "Việc + thời hạn. Ví dụ: “[Cần duyệt trước 15/11] Báo giá máy chủ cho chi nhánh Cần Thơ”"], ["Mở đầu", "Nêu mục đích trong 1–2 câu đầu"], ["Nội dung", "Chia ý, gạch đầu dòng, số liệu chính"], ["Hành động", "Ai làm gì, trước khi nào"]] },
  { k: "table", title: "3 cách dùng AI cho email", head: ["Cách", "Prompt mẫu"], rows: [["Viết từ ý", "Viết email từ các ý sau, giọng lịch sự, dưới 150 chữ: – hẹn họp thứ 5 – chuẩn bị số liệu Q3 – xác nhận trước thứ 3"], ["Sửa", "Sửa lỗi chính tả, ngữ pháp và làm email này rõ ràng hơn. Giữ nguyên ý, đánh dấu chỗ đã sửa."], ["Trả lời", "Khách phàn nàn như dưới. Soạn thư trả lời: ghi nhận, xin lỗi phần chúng tôi sai, giải pháp cụ thể, không hứa điều chưa chắc."]] },
  { k: "compare", title: "Trước và sau khi nhờ AI sửa", a: ["Trước", "“Anh ơi em gửi báo cáo, anh xem rồi cho em ý kiến nhé, có gì sai anh bảo em sửa.”"], b: ["Sau", "“Em gửi anh báo cáo doanh số tháng 10 (đính kèm). Anh góp ý giúp em trước 17h thứ Năm để em kịp chỉnh trước họp giao ban.”"] },
  { k: "split", img: "dl05-2", alt: "Nhân viên chăm sóc khách hàng ngoài 20 xoa dịu khách bằng email chân thành", ep: "Split composition: on the left a Vietnamese customer service officer man about 27 wearing a headset in a modern contact center with rows of monitors drafting a sincere reply with an AI assistant panel, on the right a Vietnamese customer man about 50 reading it on his phone at home as a small storm cloud above his head turns into sunshine, bright cheerful lighting", title: "Email khó: khiếu nại, từ chối, nhắc nợ", html: "<p class='big'>Công thức <b>Ghi nhận – Xin lỗi – Giải pháp – Cảm ơn</b>.</p><p>Dặn AI: “Không đổ lỗi cho khách, không hứa điều chưa được duyệt, không tiết lộ thông tin nội bộ.”</p>" },
  { k: "table", title: "Văn bản hành chính AI soạn được", head: ["Loại", "Gợi ý cho AI"], rows: [["Thông báo", "Mục đích, đối tượng, thời gian, nơi liên hệ"], ["Công văn", "Kính gửi, trích yếu, căn cứ, nội dung đề nghị"], ["Tờ trình", "Lý do, phương án, chi phí, đề xuất"], ["Biên bản", "Thời gian, thành phần, nội dung, kết luận"], ["Quyết định", "Căn cứ, điều khoản; người có thẩm quyền rà soát"]], note: "AI soạn nội dung. Thể thức (quốc hiệu, số ký hiệu, chữ ký) theo mẫu chuẩn của đơn vị." },
  { k: "fact", text: "Gmail và Outlook đều có tính năng AI gợi ý viết email ngay trong hộp thư (Gemini trong Gmail, Copilot trong Outlook), nhưng thường cần gói trả phí. Bản chatbot miễn phí vẫn đủ để soạn nháp rồi dán vào.", n: "Kiểm tra gói tài khoản của học viên. Không bắt buộc mua; chỉ giới thiệu để biết." },
  { k: "try", q: "Tiêu đề email nào tốt hơn?", opts: ["Báo cáo", "[Duyệt trước 15/11] Báo cáo chi phí sửa chữa máy lạnh chi nhánh Q1"], a: 1, why: "Người nhận biết ngay việc gì, gấp không, liên quan đâu." },
  { k: "story", text: "Một đối tác xin giảm giá thêm 15% cho đơn hàng, công ty chỉ đồng ý tối đa 5% kèm miễn phí vận chuyển.", q: "Prompt nào giúp AI soạn thư từ chối khéo?", a: "“Bạn là trưởng phòng kinh doanh. Soạn email từ chối khéo đề nghị giảm 15% của đối tác [CÔNG TY X], đưa phương án thay thế: giảm 5% và miễn phí vận chuyển. Giữ quan hệ tốt, giọng chân thành, dưới 150 chữ, có tiêu đề.”" },
  { k: "act", title: "Thực hành", items: ["Chọn 1 email bạn sắp phải viết trong tuần.", "Ghi 3–5 ý gạch đầu dòng, nhờ AI viết thành email (dùng dữ liệu đã ẩn danh).", "Nhờ AI viết thêm phiên bản ngắn gọn hơn, chọn bản tốt nhất.", "Ghi thời gian tiết kiệm được vào Phiếu 5."] },
  { k: "recap", items: ["Email tốt: tiêu đề rõ, mục đích trước, hành động cuối.", "AI viết nháp, sửa, trả lời email khó.", "Email khó: Ghi nhận – Xin lỗi – Giải pháp – Cảm ơn.", "Văn bản hành chính: AI soạn nội dung, bạn đặt vào thể thức chuẩn."] }
 ]
},
{
 p: 2, t: "Họp và tóm tắt tài liệu",
 g: "Dùng AI chuẩn bị họp, viết biên bản, tóm tắt tài liệu dài và hỏi đáp trên tài liệu của bạn.",
 pts: [
  "<b>Trước họp</b>: AI soạn chương trình họp, câu hỏi cần thảo luận, tóm tắt tài liệu cho người dự.",
  "<b>Sau họp</b>: từ ghi chép thô hoặc bản ghi lời nói, AI viết biên bản: quyết định, việc cần làm, người phụ trách, hạn.",
  "<b>Tài liệu dài</b>: tóm tắt theo tầng (1 câu – 5 ý – chi tiết), hoặc dùng NotebookLM để hỏi đáp có trích dẫn.",
  "Ghi âm, ghi hình cuộc họp phải được <b>thông báo và đồng ý</b>; nội dung họp mật không đưa vào công cụ AI ngoài."
 ],
 q: [
  ["Phần quan trọng nhất của biên bản họp là?", ["Việc cần làm: ai – làm gì – hạn khi nào", "Danh sách món ăn", "Thời tiết hôm họp"], 0, "Biên bản phải dẫn đến hành động."],
  ["Tóm tắt theo tầng nghĩa là?", ["1 câu chính → 5 ý → chi tiết từng ý", "Tóm tắt từ trang cuối lên", "Chỉ đọc tiêu đề"], 0, "Người đọc chọn mức độ chi tiết phù hợp."],
  ["Trước khi ghi âm cuộc họp để AI tóm tắt, cần?", ["Thông báo và được người dự đồng ý", "Ghi âm lén cho tự nhiên", "Không cần gì"], 0, "Tôn trọng quyền riêng tư và quy định của công ty."]
 ],
 s: [
  { k: "cover", img: "dl06-1", alt: "Nhóm đồng nghiệp nhiều lứa tuổi họp, bảng tóm tắt AI hiện ra tự động", ep: "Wide shot of a modern glass meeting room with a huge display and a 360-degree conference camera in the center of the table, a diverse team of Vietnamese professionals aged 26 to 50 (an engineer, a marketer, a project manager, an accountant) discussing, their speech turning into a live AI summary with checkboxes and names on the display, laptops and tablets open, bright daylight", sub: "Họp xong là có biên bản, không ai quên việc của mình." },
  { k: "steps", title: "AI trong vòng đời một cuộc họp", items: [["Trước", "Chương trình, câu hỏi, tóm tắt tài liệu"], ["Trong", "Ghi chép ý chính (có đồng ý)"], ["Sau", "Biên bản, bảng việc cần làm"], ["Theo dõi", "Email nhắc việc, kiểm tra tiến độ"]] },
  { k: "table", title: "Prompt viết biên bản từ ghi chép thô", head: ["Phần", "Nội dung"], rows: [["Vai trò", "Bạn là thư ký cuộc họp chuyên nghiệp."], ["Nhiệm vụ", "Viết biên bản từ ghi chép dưới đây."], ["Định dạng", "1) Thông tin chung 2) 5 nội dung chính 3) Quyết định 4) Bảng: việc – người phụ trách – hạn"], ["Kiểm tra", "Không thêm thông tin không có trong ghi chép. Chỗ chưa rõ ghi [cần xác nhận]."]] },
  { k: "concept", title: "Tóm tắt theo tầng", big: "Một tài liệu, ba mức đọc: 1 câu – 5 ý – chi tiết.", ex: ["Prompt", "“Tóm tắt tài liệu này theo 3 tầng: (1) một câu cốt lõi, (2) 5 ý chính, (3) mỗi ý 2–3 câu chi tiết kèm số trang. Chỉ dùng thông tin trong tài liệu.”"] },
  { k: "split", img: "dl06-2", alt: "Trưởng nhóm ngoài 40 nhận bản tóm tắt một trang từ chồng tài liệu dày", ep: "High-angle shot of a Vietnamese project manager woman about 44 in a smart jacket at a large desk where a tall stack of thick documents is fed into a sleek scanner and a holographic AI panel condenses it into a single elegant summary page with numbered citations, she reads it with a satisfied look, modern library-style office with tall windows and warm wood", title: "Hỏi đáp trên tài liệu của bạn", html: "<p class='big'><b>NotebookLM</b> (miễn phí): tải lên PDF, Docs, trang web, rồi hỏi.</p><p>Câu trả lời có <b>trích dẫn đánh số</b> tới đoạn gốc. Hợp với quy trình nội bộ, hợp đồng mẫu, tài liệu sản phẩm (đã được phép chia sẻ).</p>" },
  { k: "table", title: "Câu hỏi hay dùng với tài liệu dài", head: ["Mục đích", "Câu hỏi"], rows: [["Nắm nhanh", "Tài liệu này giải quyết vấn đề gì? Cho ai?"], ["Tìm rủi ro", "Liệt kê các điều khoản bất lợi cho bên mua."], ["So sánh", "Bản sửa đổi khác bản cũ ở những điểm nào?"], ["Hành động", "Tôi cần làm gì, trước khi nào, theo tài liệu này?"]] },
  { k: "fact", text: "Google Meet, Microsoft Teams và Zoom đều đã có tính năng AI tự ghi chép và tóm tắt cuộc họp, thường trong các gói trả phí. Khi tính năng bật, người dự họp được thông báo.", n: "Nếu công ty chưa có, có thể ghi chép tay hoặc dùng bản ghi tự viết, rồi dán vào chatbot (đã lọc nội dung nhạy cảm)." },
  { k: "try", q: "Ghi chép họp có câu: “Hùng lo vụ báo giá”. AI nên ghi vào biên bản thế nào?", opts: ["Anh Hùng gửi báo giá cho khách trước 15/11", "Anh Hùng phụ trách báo giá [cần xác nhận hạn]"], a: 1, why: "Ghi chép không có hạn; AI không được tự bịa ngày. Đánh dấu để xác nhận." },
  { k: "myth", items: [["AI tóm tắt là đủ, không cần đọc tài liệu gốc nữa.", "Với hợp đồng, quy định, quyết định quan trọng: tóm tắt giúp định hướng, nhưng phải đọc phần liên quan trong bản gốc."]] },
  { k: "act", title: "Thực hành", items: ["Dùng ghi chép mẫu trong Phiếu 6, nhờ AI viết biên bản theo prompt ở trên.", "Kiểm tra: AI có thêm thông tin không có trong ghi chép không?", "Tải một tài liệu công khai (ví dụ một văn bản luật) lên NotebookLM, hỏi 3 câu.", "Bấm vào trích dẫn để kiểm tra từng câu trả lời."], link: ["Mở NotebookLM", "https://notebooklm.google.com"] },
  { k: "recap", items: ["AI hỗ trợ trước, trong, sau cuộc họp.", "Biên bản phải có bảng việc: ai – làm gì – hạn.", "Tóm tắt theo tầng: 1 câu – 5 ý – chi tiết.", "Hỏi đáp tài liệu bằng NotebookLM, luôn kiểm trích dẫn."] }
 ]
},
{
 p: 2, t: "Excel và Google Sheets cùng AI",
 g: "Nhờ AI viết và giải thích công thức; làm sạch dữ liệu; tổng hợp bằng bảng tổng hợp (Pivot) mà không cần học thuộc hàm.",
 pts: [
  "Mô tả bằng lời, AI viết công thức: “Cột B là tên sản phẩm, cột D là doanh thu. Viết công thức tính tổng doanh thu của sản phẩm ở ô G2.”",
  "Hàm hay dùng: <b>SUMIFS</b> (tổng có điều kiện), <b>COUNTIFS</b> (đếm có điều kiện), <b>XLOOKUP</b> (tra cứu), <b>IFERROR</b> (xử lý lỗi), <b>TEXT</b> (định dạng ngày, số).",
  "Làm sạch dữ liệu: xóa khoảng trắng thừa (TRIM), thống nhất chữ hoa – thường, tách – gộp cột, xóa dòng trùng.",
  "<b>Pivot Table</b> tổng hợp hàng nghìn dòng theo nhóm chỉ bằng kéo thả. Nhờ AI chỉ cách đặt hàng, cột, giá trị."
 ],
 q: [
  ["Muốn tính tổng doanh thu của sản phẩm “Chuột” trong tháng 10, dùng hàm?", ["SUMIFS", "VLOOKUP", "TRIM"], 0, "SUMIFS cộng theo nhiều điều kiện."],
  ["Hàm XLOOKUP dùng để?", ["Tra cứu giá trị tương ứng ở bảng khác", "Xóa khoảng trắng", "Vẽ biểu đồ"], 0, "XLOOKUP tìm một giá trị và trả về giá trị ở cột tương ứng."],
  ["Khi nhờ AI viết công thức, thông tin quan trọng nhất cần cho AI?", ["Cột nào chứa dữ liệu gì, kết quả đặt ở ô nào", "Tên công ty", "Màu của bảng"], 0, "AI cần biết cấu trúc bảng để viết đúng địa chỉ ô."]
 ],
 s: [
  { k: "cover", img: "dl07-1", alt: "Chuyên viên phân tích dữ liệu ngoài 20 điều khiển bảng tính tự sắp xếp", ep: "Dynamic tilted shot of a Vietnamese data analyst man about 29 with glasses in a smart casual shirt at a curved ultrawide monitor where a giant colorful spreadsheet rearranges itself into a pivot table, formulas floating as small labels, a second screen with charts, a drawing tablet and coffee on the desk, open office with big windows and city skyline", sub: "Không cần học thuộc hàm. Chỉ cần mô tả rõ điều bạn muốn." },
  { k: "concept", title: "Nói bằng lời, AI viết công thức", big: "Mô tả bảng + kết quả mong muốn → AI viết công thức và giải thích.", ex: ["Prompt mẫu", "“Bảng Excel: cột A ngày, B sản phẩm, C số lượng, D doanh thu, dữ liệu từ dòng 2 đến 500. Viết công thức ở G2 tính tổng doanh thu của sản phẩm ghi ở F2 trong tháng 10/2026. Giải thích từng phần.”"] },
  { k: "table", title: "5 hàm đáng giá nhất", head: ["Hàm", "Làm gì", "Ví dụ"], rows: [["SUMIFS", "Tổng có điều kiện", "=SUMIFS(D:D, B:B, \"Chuột\")"], ["COUNTIFS", "Đếm có điều kiện", "=COUNTIFS(B:B, \"Chuột\", C:C, \">5\")"], ["XLOOKUP", "Tra cứu", "=XLOOKUP(F2, A:A, C:C, \"Không có\")"], ["IFERROR", "Thay lỗi bằng giá trị khác", "=IFERROR(C2/B2, 0)"], ["TEXT", "Định dạng ngày, số", "=TEXT(A2, \"dd/mm/yyyy\")"]], note: "Excel bản Việt hóa hoặc máy đặt dấu phẩy thập phân dùng dấu chấm phẩy “;” thay cho dấu phẩy giữa các tham số.", n: "XLOOKUP có trong Excel 2021, Microsoft 365 và Google Sheets. Excel 2016/2019 dùng INDEX + MATCH hoặc VLOOKUP. Nhắc học viên báo cho AI biết phiên bản Excel." },
  { k: "split", img: "dl07-2", alt: "Nhân viên kho vận làm sạch dữ liệu lộn xộn trên máy tính bảng", ep: "Medium shot of a Vietnamese logistics coordinator woman about 35 in a company polo and a light safety vest standing at a bright modern warehouse office window overlooking neat shelves and an automated conveyor, holding a rugged tablet where messy tangled data rows flow in and come out clean and aligned, barcode scanner and label printer on the counter", title: "Làm sạch dữ liệu", html: "<p>Dữ liệu thật thường lộn xộn: “ hà nội”, “Hà Nội ”, “HA NOI”.</p><p class='big'>Gửi AI <b>5–10 dòng mẫu</b> (đã ẩn danh), hỏi: “Viết công thức chuẩn hóa cột này.”</p><p>Ví dụ: =PROPER(TRIM(B2)) xóa khoảng trắng thừa và viết hoa chữ cái đầu.</p>" },
  { k: "steps", title: "Tạo Pivot Table trong 4 bước", items: [["Chọn dữ liệu", "Bảng có tiêu đề cột, không dòng trống"], ["Chèn Pivot", "Insert → PivotTable (Sheets: Chèn → Bảng tổng hợp)"], ["Kéo trường", "Hàng: sản phẩm; Cột: tháng; Giá trị: tổng doanh thu"], ["Đọc kết quả", "Nhờ AI nhận xét xu hướng từ bảng tổng hợp"]] },
  { k: "try", q: "Công thức =IFERROR(XLOOKUP(F2,A:A,C:C),\"Không có\") trả về gì khi không tìm thấy F2?", opts: ["Chữ “Không có”", "Lỗi #N/A"], a: 0, why: "IFERROR thay lỗi bằng giá trị bạn chỉ định." },
  { k: "fact", text: "Bạn có thể dán thông báo lỗi Excel (#VALUE!, #N/A, #REF!) cùng công thức vào chatbot và hỏi “Vì sao lỗi và sửa thế nào?”. Đây là một trong những cách dùng AI tiết kiệm thời gian nhất cho dân văn phòng." },
  { k: "table", title: "Prompt Excel hay dùng", head: ["Tình huống", "Prompt"], rows: [["Không hiểu công thức", "Giải thích công thức này từng phần cho người mới: …"], ["Báo lỗi", "Công thức … báo lỗi #N/A. Dữ liệu cột A dạng … Vì sao và sửa thế nào?"], ["Định dạng có điều kiện", "Chỉ cách tô đỏ các dòng có hạn thanh toán đã quá hôm nay."], ["Phân tích", "Đây là bảng tổng hợp doanh thu theo tháng. Nêu 3 nhận xét và 2 câu hỏi cần tìm hiểu thêm."]] },
  { k: "myth", items: [["Dán cả file Excel khách hàng vào AI cho nhanh.", "Chỉ gửi cấu trúc cột và vài dòng mẫu đã ẩn danh. AI chỉ cần biết hình dạng dữ liệu để viết công thức."], ["Công thức AI viết thì chạy đúng ngay.", "Thử trên vài dòng biết trước kết quả, rồi mới kéo cho cả bảng."]] },
  { k: "act", title: "Thực hành với file mẫu", items: ["Mở file bán hàng mẫu trong Phiếu 7 (Google Sheets hoặc Excel).", "Nhờ AI viết công thức: tổng doanh thu theo sản phẩm, số đơn trên 5 sản phẩm.", "Làm sạch cột tên tỉnh bằng công thức AI gợi ý.", "Tạo Pivot Table doanh thu theo sản phẩm và tháng, nhờ AI nhận xét."] },
  { k: "recap", items: ["Mô tả cấu trúc bảng rõ ràng, AI viết công thức.", "5 hàm đáng giá: SUMIFS, COUNTIFS, XLOOKUP, IFERROR, TEXT.", "Gửi AI vài dòng mẫu đã ẩn danh, không gửi cả file.", "Thử công thức trên dòng biết trước kết quả."] }
 ]
},
{
 p: 2, t: "Báo cáo và thuyết trình",
 g: "Từ số liệu thô đến báo cáo có nhận định và slide thuyết trình; biết dùng AI phân tích nhưng tự kiểm số liệu.",
 pts: [
  "Báo cáo tốt trả lời 3 câu: <b>Chuyện gì xảy ra? Vì sao? Nên làm gì?</b> Số liệu chỉ là bằng chứng.",
  "Quy trình: <b>bạn</b> tổng hợp số liệu (Excel) → <b>AI</b> gợi ý nhận định, cấu trúc → <b>bạn</b> kiểm và quyết định thông điệp.",
  "Slide: <b>mỗi slide một thông điệp</b>, tiêu đề là câu kết luận (“Doanh thu Q3 tăng nhờ kênh online”), không phải chủ đề (“Doanh thu Q3”).",
  "Công cụ: chatbot viết dàn ý; Gamma, Canva, Google Slides, PowerPoint Copilot tạo slide từ dàn ý (nhiều công cụ có bản miễn phí giới hạn)."
 ],
 q: [
  ["Tiêu đề slide nào tốt hơn?", ["“Doanh thu Q3 tăng 18% nhờ kênh online”", "“Doanh thu Q3”", "“Slide số 5”"], 0, "Tiêu đề là kết luận giúp người nghe nắm ý ngay."],
  ["Trong quy trình làm báo cáo, ai chốt thông điệp chính?", ["Bạn", "AI", "Phần mềm làm slide"], 0, "AI gợi ý, bạn quyết định và chịu trách nhiệm."],
  ["Ba câu hỏi một báo cáo tốt cần trả lời?", ["Chuyện gì xảy ra – Vì sao – Nên làm gì", "Ai viết – Viết bao lâu – Dài mấy trang", "Màu gì – Font gì – Cỡ chữ"], 0, "Báo cáo phục vụ quyết định."]
 ],
 s: [
  { k: "cover", img: "dl08-1", alt: "Giám đốc kinh doanh ngoài 40 thuyết trình trước màn hình biểu đồ", ep: "Low-angle hero shot of a confident Vietnamese sales director woman about 42 in a tailored blazer presenting in front of a giant LED wall with a clean rising bar chart and one bold takeaway icon, colleagues of mixed ages nodding in a modern auditorium-style meeting room, a presentation clicker in her hand, bright stage lighting", sub: "Con số chỉ có giá trị khi kể được câu chuyện." },
  { k: "cards", title: "Báo cáo trả lời 3 câu hỏi", items: [["Chuyện gì xảy ra?", "Doanh thu tháng 10 giảm 12% so với tháng 9."], ["Vì sao?", "Hai khách lớn dời đơn sang tháng 11; kênh online vẫn tăng."], ["Nên làm gì?", "Chốt lịch giao với 2 khách lớn; tăng ngân sách kênh online 10%."]] },
  { k: "steps", title: "Quy trình làm báo cáo với AI", items: [["Số liệu · Bạn", "Tổng hợp bằng Excel / Pivot"], ["Nhận định · AI", "Gợi ý xu hướng, điểm bất thường"], ["Kiểm · Bạn", "Đối chiếu từng con số"], ["Viết · AI + Bạn", "AI viết nháp, bạn chốt thông điệp"], ["Slide · Công cụ", "Dàn ý → slide"]] },
  { k: "table", title: "Prompt phân tích bảng số liệu", head: ["Phần", "Nội dung"], rows: [["Vai trò", "Bạn là chuyên viên phân tích kinh doanh."], ["Dữ liệu", "Bảng tổng hợp doanh thu theo tháng và kênh bán (dán bảng đã ẩn danh)."], ["Nhiệm vụ", "Nêu 3 xu hướng, 2 điểm bất thường, 3 câu hỏi cần làm rõ."], ["Kiểm tra", "Ghi rõ phép tính cho mỗi tỷ lệ % bạn đưa ra."]] },
  { k: "compare", title: "Tiêu đề slide: chủ đề hay kết luận?", a: ["Chủ đề", "“Tình hình nhân sự Q3”"], b: ["Kết luận", "“Nghỉ việc giảm còn 4% nhờ chương trình đào tạo mới”"] },
  { k: "split", img: "dl08-2", alt: "Nhân viên marketing biến dàn ý thành bộ slide trên màn hình lớn", ep: "Over-the-shoulder shot of a Vietnamese marketing specialist man about 31 in a turtleneck at a large touchscreen desk where a simple handwritten outline on a digital notepad unfolds into a row of polished presentation slides, a second monitor showing an AI slide generator, bright creative studio with mood boards and plants, soft morning light", title: "Từ dàn ý đến slide", html: "<p>Nhờ chatbot: “Từ báo cáo này, lập dàn ý <b>8 slide</b>, mỗi slide: tiêu đề là kết luận, 3 gạch đầu dòng, gợi ý biểu đồ.”</p><p class='big'>Dán dàn ý vào công cụ làm slide, rồi <b>chỉnh lại số liệu và hình ảnh</b> của bạn.</p>" },
  { k: "table", title: "Chọn biểu đồ đúng", head: ["Muốn thể hiện", "Biểu đồ"], rows: [["Thay đổi theo thời gian", "Đường (line)"], ["So sánh giữa các nhóm", "Cột (bar)"], ["Tỷ trọng, tối đa 5 phần", "Tròn hoặc cột chồng"], ["Quan hệ giữa hai đại lượng", "Phân tán (scatter)"]] },
  { k: "try", q: "AI viết: “Kênh online chiếm 60% doanh thu”. Bảng của bạn: online 420 triệu, tổng 840 triệu. Đúng không?", opts: ["Sai, chỉ 50%", "Đúng, 60%"], a: 0, why: "420 / 840 = 50%. Luôn tự tính lại mọi tỷ lệ AI đưa ra." },
  { k: "quote", label: "Quy tắc thuyết trình", text: "Nếu người nghe chỉ nhớ một câu, bạn muốn đó là câu nào? Hãy đặt câu đó lên slide đầu và slide cuối." },
  { k: "act", title: "Thực hành", items: ["Dùng bảng tổng hợp từ Buổi 7, nhờ AI phân tích theo prompt ở trên.", "Tự kiểm tra mọi con số % AI đưa ra (Phiếu 8).", "Nhờ AI lập dàn ý 6–8 slide với tiêu đề kết luận.", "Tạo slide bằng một công cụ miễn phí, trình bày 3 phút cho nhóm."] },
  { k: "recap", items: ["Báo cáo trả lời: chuyện gì, vì sao, nên làm gì.", "Bạn lo số liệu và thông điệp, AI lo nháp và gợi ý.", "Tiêu đề slide là câu kết luận.", "Tự tính lại mọi tỷ lệ % trước khi trình bày."] }
 ]
}
]
};
