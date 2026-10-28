/* Khóa AI Người đi làm — buổi 9–16. Mọi đoạn code Python đã chạy thử với Python 3 + pandas; Apps Script đã kiểm tra cú pháp. */
window.AIEDU_LEVEL.lessons.push(
{
 p: 3, t: "AI trong nghiệp vụ chuyên môn",
 g: "Hiểu các tổ chức đang dùng AI ra sao; nhận diện rủi ro thiên lệch và yêu cầu giải thích được; dùng AI tạo sinh hỗ trợ việc chuyên môn của bạn một cách an toàn.",
 pts: [
  "Tổ chức dùng AI cho 5 nhóm việc: <b>nhận diện</b> (giấy tờ, hình ảnh, giọng nói), <b>dự báo</b> (nhu cầu, doanh số), <b>phát hiện bất thường</b> (gian lận, lỗi), <b>chatbot</b> chăm sóc khách, <b>hỗ trợ nhân viên</b> (tìm tài liệu, soạn thảo).",
  "Rủi ro: mô hình học từ dữ liệu cũ có thể <b>thiên lệch</b>; quyết định ảnh hưởng tới con người cần <b>giải thích được</b> và có người rà soát.",
  "Nhân viên dùng AI tạo sinh để: soạn khung văn bản nghiệp vụ, giải thích sản phẩm/dịch vụ cho khách dễ hiểu, tóm tắt quy định, đóng vai khách để tập tư vấn, viết code phân tích, luôn với <b>dữ liệu đã ẩn danh</b> và công cụ đơn vị cho phép.",
  "Chatbot trả lời khách thay mặt tổ chức thì tổ chức <b>chịu trách nhiệm</b> với câu trả lời đó. Con số đưa cho khách phải tính bằng <b>công thức hoặc code</b>."
 ],
 q: [
  ["Nhóm việc nào KHÔNG phải ứng dụng AI phổ biến trong tổ chức?", ["Ký thay giám đốc", "Phát hiện giao dịch bất thường", "Dự báo nhu cầu"], 0, "Ký duyệt là trách nhiệm của con người."],
  ["Mô hình học từ dữ liệu tuyển dụng cũ có thể gặp rủi ro gì?", ["Thiên lệch, bất lợi cho một nhóm ứng viên", "Chạy quá nhanh", "Không cần điện"], 0, "Dữ liệu quá khứ mang theo thiên lệch của quá khứ."],
  ["Chatbot của công ty trả lời sai chính sách cho khách. Ai chịu trách nhiệm?", ["Công ty sở hữu chatbot", "Không ai, vì là máy", "Khách hàng vì đã tin"], 0, "Tổ chức chịu trách nhiệm với thông tin chatbot của mình đưa ra."]
 ],
 s: [
  { k: "cover", img: "dl09-1", alt: "Trung tâm dịch vụ khách hàng hiện đại, nhân viên dùng trợ lý AI hỗ trợ khách lớn tuổi", ep: "Wide shot of a bright modern Vietnamese customer service center with tall windows and plants, a friendly service staff woman about 30 in a neat uniform blazer helping an elderly Vietnamese couple at a sleek desk, a transparent display beside her showing a simple AI assistant with document and chart icons, self-service kiosks and a queue display in the background", sub: "AI đã vào hầu hết các ngành, trước cả khi có chatbot." },
  { k: "cards", title: "Tổ chức đang dùng AI làm gì?", items: [["Nhận diện", "Đọc giấy tờ, nhận diện khuôn mặt, chuyển giọng nói thành chữ"], ["Dự báo", "Ước lượng nhu cầu, doanh số, tồn kho"], ["Phát hiện bất thường", "Cảnh báo giao dịch lạ, lỗi sản xuất, đơn hàng gian lận"], ["Chatbot", "Trả lời câu hỏi thường gặp 24/7"], ["Gợi ý", "Đề xuất sản phẩm, nội dung phù hợp từng người"], ["Hỗ trợ nhân viên", "Tìm tài liệu nội bộ, soạn thảo, viết code phân tích"]] },
  { k: "concept", title: "Dự báo bằng học máy", big: "Mô hình học từ dữ liệu quá khứ (doanh số theo mùa, thời tiết, khuyến mãi) để ước lượng tương lai.", ex: ["Điều cần nhớ", "Dự báo là thông tin hỗ trợ, không phải lời hứa. Quyết định vẫn do người có thẩm quyền đưa ra, theo quy định của đơn vị."], n: "Liên hệ khóa THPT Buổi 12 (hồi quy tuyến tính). Gợi ý thảo luận: trong công việc của bạn, dữ liệu nào có thể dùng để dự báo?" },
  { k: "split", img: "dl09-2", alt: "Quản lý ngoài 40 kiểm tra cán cân hồ sơ bị lệch do dữ liệu", ep: "Close-up of a Vietnamese operations manager man about 46 with greying temples in a light grey suit studying a holographic balance scale floating above his desk, one side heavy with neat profile cards and the other with a single card, tilted unfairly, a monitor showing fairness charts, modern office at golden hour with warm sunlight through glass", title: "Thiên lệch và giải thích được", html: "<p class='big'>Dữ liệu quá khứ lệch thì mô hình <b>học luôn cái lệch</b>.</p><p>Vì vậy quyết định ảnh hưởng tới con người cần: lý do giải thích được, con người rà soát, và kiểm tra định kỳ mô hình có công bằng không.</p>" },
  { k: "fact", text: "Năm 2018, hãng tin Reuters đưa tin Amazon đã bỏ một công cụ AI sàng lọc hồ sơ xin việc vì nó đánh giá thấp hồ sơ của phụ nữ. Công cụ học từ hồ sơ trúng tuyển 10 năm trước, phần lớn là nam giới.", n: "Ví dụ kinh điển về thiên lệch dữ liệu. Nhấn mạnh: không ai cố ý lập trình để phân biệt, máy tự học điều đó từ dữ liệu." },
  { k: "table", title: "Dùng AI tạo sinh trong việc chuyên môn", head: ["Việc", "Cách làm an toàn"], rows: [["Văn bản nghiệp vụ", "AI soạn khung và câu văn mẫu với [KHÁCH A]; số liệu thật điền trên hệ thống của đơn vị"], ["Giải thích cho khách", "“Giải thích dịch vụ này cho người lớn tuổi, dưới 120 chữ, không thuật ngữ”"], ["Tóm tắt quy định", "Tải văn bản công khai lên NotebookLM, hỏi có trích dẫn"], ["Tập tư vấn", "AI đóng vai khách khó tính để bạn tập trả lời"], ["Phân tích số liệu", "AI viết code, chạy trên dữ liệu giả hoặc môi trường được phép"]] },
  { k: "code", fit: "wide small", title: "Tính trả góp hằng tháng (trả đều, lãi cố định)", code: `def tra_gop(goc, lai_nam, so_thang):
    r = lai_nam / 12
    return goc * r / (1 - (1 + r) ** -so_thang)

goc = 500_000_000
for thang in (12, 24, 36):
    m = tra_gop(goc, 0.10, thang)
    print(f"{thang} tháng: {m:,.0f} đ/tháng, tổng lãi {m*thang-goc:,.0f} đ")`, out: `12 tháng: 43,957,944 đ/tháng, tổng lãi 27,495,323 đ
24 tháng: 23,072,463 đ/tháng, tổng lãi 53,739,116 đ
36 tháng: 16,133,594 đ/tháng, tổng lãi 80,809,369 đ`, note: "Bài toán tài chính cá nhân quen thuộc khi mua trả góp. Kết quả khớp hàm PMT của Excel: =PMT(10%/12, 12, -500000000).", n: "Đây là ví dụ học tập với lãi suất cố định. Hợp đồng thật có thể có lãi thả nổi, phí, cách tính khác." },
  { k: "story", text: "Năm 2022, một khách hàng hỏi chatbot trên website hãng hàng không Air Canada về vé giảm giá khi có người thân qua đời. Chatbot trả lời sai chính sách. Hãng từ chối hoàn tiền, nói rằng chatbot “tự chịu trách nhiệm”.", q: "Kết quả và bài học là gì?", a: "Năm 2024, cơ quan giải quyết tranh chấp ở Canada buộc hãng bồi hoàn cho khách: tổ chức chịu trách nhiệm với mọi thông tin trên website của mình, kể cả do chatbot nói. Chatbot trả lời khách phải được kiểm tra nội dung và có đường chuyển sang người thật." },
  { k: "try", q: "Khách hỏi chatbot của công ty: “Tôi có chắc chắn được duyệt không?” Chatbot nên trả lời thế nào?", opts: ["“Chắc chắn được, anh đến ký luôn nhé!”", "Giải thích điều kiện chung, mời khách để lại thông tin để nhân viên tư vấn"], a: 1, why: "Chatbot không được hứa kết quả cần thẩm định; quyết định cần quy trình và con người." },
  { k: "myth", items: [["AI ra quyết định khách quan tuyệt đối vì là máy.", "Máy học từ dữ liệu do con người tạo ra, có thể mang thiên lệch. Cần kiểm tra và giám sát."], ["Nhân viên không được dùng AI trong công việc chuyên môn.", "Được dùng theo chính sách của đơn vị, với công cụ được phép và dữ liệu đúng quy định."]] },
  { k: "act", title: "Thực hành", items: ["Nhờ AI giải thích một sản phẩm hoặc dịch vụ trong lĩnh vực của bạn cho người 65 tuổi, dưới 120 chữ (không dùng thông tin nội bộ).", "Nhờ AI đóng vai khách khó tính, bạn tập trả lời 5 lượt.", "Chạy code trả góp trên Google Colab, đổi lãi 8% và 12%, so sánh với hàm PMT trong Excel.", "Ghi vào Phiếu 9: 3 việc chuyên môn của bạn có thể dùng AI an toàn."] },
  { k: "recap", items: ["AI trong tổ chức: nhận diện, dự báo, phát hiện bất thường, chatbot, hỗ trợ nhân viên.", "Mô hình có thể thiên lệch; quyết định cần giải thích được và con người rà soát.", "Tổ chức chịu trách nhiệm với câu trả lời của chatbot.", "Dùng AI với dữ liệu ẩn danh, công cụ được phép; con số tính bằng công thức hoặc code."] }
 ]
},
{
 p: 3, t: "Phòng chống lừa đảo và deepfake",
 g: "Nhận diện các kiểu lừa đảo dùng AI; áp dụng quy trình xác minh; hướng dẫn khách hàng và người thân tự bảo vệ.",
 pts: [
  "<b>Deepfake</b>: AI tạo video, giọng nói giả giống người thật. Kẻ gian dùng để giả sếp, người thân, cán bộ nhà nước.",
  "Dấu hiệu chung: <b>gấp gáp</b>, <b>bí mật</b> (“đừng nói ai”), <b>yêu cầu chuyển tiền hoặc mã OTP</b>, <b>kênh lạ</b> (link, số lạ, email gần giống).",
  "Quy tắc vàng: <b>Dừng – Kiểm tra – Gọi lại</b> qua số đã lưu sẵn, không qua số người kia đưa. Doanh nghiệp: mọi chuyển tiền phải theo quy trình phê duyệt, không ngoại lệ vì “gấp”.",
  "Ngân hàng và cơ quan nhà nước <b>không bao giờ</b> yêu cầu cung cấp OTP, mật khẩu, hoặc chuyển tiền vào “tài khoản tạm giữ”."
 ],
 q: [
  ["Dấu hiệu nào KHÔNG phải dấu hiệu lừa đảo điển hình?", ["Bạn tự mở app ngân hàng chính thức để chuyển tiền cho người quen đã gọi xác nhận", "Yêu cầu gấp và giữ bí mật", "Đề nghị đọc mã OTP"], 0, "Chủ động, đúng kênh và đã xác minh là hành vi an toàn."],
  ["“Sếp” gọi video nhờ chuyển gấp tiền cho đối tác. Việc đầu tiên?", ["Gọi lại sếp qua số đã lưu và làm theo quy trình phê duyệt", "Chuyển ngay vì sếp đang gấp", "Hỏi lại trong chính cuộc gọi đó"], 0, "Xác minh qua kênh độc lập; deepfake có thể trả lời rất trơn tru."],
  ["Cơ quan nào được yêu cầu bạn chuyển tiền vào “tài khoản tạm giữ” qua điện thoại?", ["Không cơ quan nào", "Công an", "Ngân hàng Nhà nước"], 0, "Đây là chiêu lừa đảo giả danh cơ quan chức năng."]
 ],
 s: [
  { k: "cover", img: "dl10-1", alt: "Kế toán ngoài 30 nghi ngờ cuộc gọi video có khuôn mặt giả", ep: "Over-the-shoulder shot of a Vietnamese accountant woman about 37 in a smart blouse looking skeptically at a video call on her monitor where the caller's face is subtly breaking into digital pixels at the edges, her hand pulling away from a transfer approval button, a desk phone and a security key on the desk, bright modern finance office with glass walls", sub: "Khuôn mặt quen, giọng nói quen, nhưng có thể là giả." },
  { k: "fact", text: "Đầu năm 2024, một nhân viên tài chính tại Hồng Kông của tập đoàn Arup tham gia cuộc họp video với “giám đốc tài chính” và nhiều “đồng nghiệp”, tất cả đều là deepfake. Anh đã chuyển 15 lần, tổng khoảng 200 triệu đô la Hồng Kông (khoảng 25 triệu USD).", n: "Nguồn: cảnh sát Hồng Kông công bố tháng 2/2024; Arup xác nhận tháng 5/2024. Nhấn mạnh: nạn nhân không kém hiểu biết, chỉ là thiếu quy trình xác minh độc lập." },
  { k: "cards", title: "Các kiểu lừa đảo dùng AI", items: [["Giả giọng người thân", "Chỉ cần vài giây giọng nói trên mạng xã hội để AI bắt chước"], ["Gọi video deepfake", "Giả sếp, giả đối tác, giả người thân mượn tiền"], ["Tin nhắn, email hoàn hảo", "AI viết không lỗi chính tả, cá nhân hóa theo nạn nhân"], ["Giả danh cơ quan", "“Công an”, “thuế”, “điện lực” yêu cầu chuyển tiền, cài app"], ["Trang web giả", "Giống hệt trang ngân hàng, sàn thương mại để lấy mật khẩu, OTP"], ["Đầu tư “AI” lãi khủng", "Quảng cáo bot giao dịch, lãi cam kết cao bất thường"]] },
  { k: "lights", title: "Bốn dấu hiệu cảnh báo", items: [["r", "Gấp gáp", "“Phải chuyển trong 30 phút”, “tài khoản sẽ bị khóa”."], ["r", "Bí mật", "“Đừng nói với ai”, “việc riêng của anh”."], ["r", "Đòi tiền, OTP, mật khẩu", "Không ai hợp pháp cần OTP của bạn."], ["y", "Kênh lạ", "Số lạ, link rút gọn, email khác một chữ, tài khoản Zalo mới lập."]] },
  { k: "steps", title: "Quy tắc Dừng – Kiểm tra – Gọi lại", items: [["Dừng", "Không làm gì ngay, dù bị hối thúc"], ["Kiểm tra", "Tên miền, số tài khoản, người nhận có đúng không?"], ["Gọi lại", "Qua số đã lưu sẵn, không dùng số người kia đưa"], ["Báo cáo", "Báo bộ phận an ninh, ngân hàng, hoặc cơ quan công an"]] },
  { k: "split", img: "dl10-2", alt: "Gia đình người Việt ba thế hệ thống nhất mật mã gia đình", ep: "Top-down slightly angled view of a bright modern Vietnamese apartment living room, a Vietnamese technician man about 38 and his wife about 36 sitting with their parents in their 60s on a sofa, teaching them on smartphones and a tablet, a small shared lock icon glowing between the devices, a smart TV and smart home hub in the background, warm daylight", title: "Mật mã gia đình", html: "<p class='big'>Thống nhất với người thân một <b>câu hỏi bí mật</b> chỉ cả nhà biết.</p><p>Khi có cuộc gọi mượn tiền gấp, hỏi câu đó. Deepfake giả được mặt và giọng, không đoán được bí mật gia đình.</p>" },
  { k: "code", title: "Ý tưởng phát hiện giao dịch bất thường (minh họa)", code: `import pandas as pd
gd = pd.DataFrame({
    "khach": ["A","A","A","A","B","B","B","B"],
    "so_tien": [2_000_000, 1_500_000, 2_500_000, 45_000_000,
                800_000, 1_000_000, 900_000, 1_200_000],
    "gio": [10, 14, 9, 2, 11, 15, 20, 13]})
tb = gd.groupby("khach")["so_tien"].transform("mean")
gd["bat_thuong"] = (gd["so_tien"] > 3 * tb) | (gd["gio"] < 5)
print(gd[gd["bat_thuong"]])`, out: `  khach   so_tien  gio  bat_thuong
3     A  45000000    2        True`, note: "Quy tắc: số tiền gấp 3 lần trung bình của khách, hoặc giao dịch lúc 0–5 giờ sáng. Hệ thống thật dùng học máy với hàng trăm đặc trưng.", n: "Dữ liệu hoàn toàn giả. Mục tiêu: hiểu tư duy “so với thói quen của chính khách hàng”, không phải xây hệ thống chống gian lận." },
  { k: "fact", text: "Từ 01/7/2024, theo Quyết định 2345/QĐ-NHNN, chuyển tiền online trên 10 triệu đồng một lần, hoặc tổng trên 20 triệu đồng một ngày, phải xác thực bằng khuôn mặt. Quy định này giúp chặn kẻ gian dùng tài khoản của người khác." },
  { k: "story", text: "Kế toán công ty nhận email từ địa chỉ giống hệt nhà cung cấp quen, chỉ khác “minhphat” thành “minhphal”: “Từ tháng này, vui lòng chuyển tiền vào tài khoản mới…”. Kèm hóa đơn đúng mẫu.", q: "Kế toán nên làm gì?", a: "Không chuyển. Gọi điện cho nhà cung cấp qua số trong hợp đồng để xác minh. Báo IT kiểm tra email giả mạo. Công ty nên có quy định: đổi số tài khoản nhận tiền phải xác nhận bằng văn bản và qua điện thoại với người đã biết." },
  { k: "try", q: "Bác hàng xóm lớn tuổi nhờ bạn chỉ cách chuyển 300 triệu cho “cán bộ điều tra” để “chứng minh tài sản trong sạch”. Bạn nên?", opts: ["Chỉ bác cách chuyển cho nhanh", "Giải thích đây là dấu hiệu lừa đảo, gọi cho con cháu của bác, cùng bác báo công an phường"], a: 1, why: "Không cơ quan nào yêu cầu chuyển tiền để “chứng minh tài sản”. Người lớn tuổi rất cần một người bình tĩnh ở bên lúc này." },
  { k: "act", title: "Thực hành", items: ["Chơi trò “Lừa đảo hay thật?” trên trang khóa học.", "Viết kịch bản 1 phút giải thích cho người thân lớn tuổi về lừa đảo deepfake (nhờ AI gợi ý, bạn chỉnh lời).", "Thống nhất “mật mã gia đình” với người thân.", "Kiểm tra quy trình phê duyệt chuyển tiền của đơn vị bạn có kẽ hở nào (Phiếu 10)."], link: ["Chơi trò chơi", "./#tro-choi"] },
  { k: "recap", items: ["Deepfake giả được mặt và giọng người quen.", "Bốn dấu hiệu: gấp, bí mật, đòi tiền/OTP, kênh lạ.", "Dừng – Kiểm tra – Gọi lại qua số đã lưu.", "Không ai hợp pháp cần OTP hay mật khẩu của bạn."] }
 ]
},
{
 p: 3, t: "Bán hàng online cùng AI",
 g: "Dùng AI viết mô tả sản phẩm, lên lịch nội dung fanpage, trả lời khách và chăm sóc sau bán đúng giọng thương hiệu.",
 pts: [
  "Bắt đầu từ <b>khách hàng</b>: họ là ai, gặp vấn đề gì, sợ điều gì khi mua. Cho AI biết điều này trước khi viết.",
  "Mô tả sản phẩm theo công thức <b>Vấn đề – Giải pháp – Bằng chứng – Kêu gọi</b>; thông số luôn lấy từ nguồn chính thức.",
  "Lịch nội dung: xoay vòng các loại bài <b>giá trị (mẹo, hướng dẫn) – câu chuyện – sản phẩm – tương tác</b>, tránh chỉ đăng bán.",
  "Chăm sóc khách: chuẩn bị sẵn <b>bộ câu trả lời mẫu</b> nhờ AI soạn; khiếu nại phải có người thật xử lý."
 ],
 q: [
  ["Thông tin nên đưa cho AI đầu tiên khi nhờ viết nội dung bán hàng?", ["Chân dung khách hàng: là ai, cần gì, lo gì", "Màu logo", "Số lượng nhân viên"], 0, "Viết cho đúng người thì mới bán được."],
  ["Thông số kỹ thuật trong bài bán hàng lấy từ đâu?", ["Tài liệu chính thức của nhà sản xuất", "Để AI tự điền", "Copy của đối thủ"], 0, "AI có thể bịa thông số; sai thông số là quảng cáo sai sự thật."],
  ["Fanpage chỉ đăng bài bán hàng liên tục thường gặp vấn đề gì?", ["Ít tương tác, người xem chán", "Bán được nhiều hơn", "Không có vấn đề gì"], 0, "Xen kẽ nội dung giá trị giúp giữ người theo dõi."]
 ],
 s: [
  { k: "cover", img: "dl11-1", alt: "Chủ shop online ngoài 30 đóng gói hàng trong kho nhỏ hiện đại", ep: "Medium shot of a cheerful Vietnamese small business owner man about 35 in a polo shirt packing colorful thermos bottles and kitchenware in a compact bright home warehouse with tidy shelves, a label printer, a barcode scanner and a monitor showing an AI order dashboard, his phone on a stand lighting up with order notifications, golden afternoon light through a window", sub: "Một người, một chiếc điện thoại, và một trợ lý không ngủ." },
  { k: "table", title: "Chân dung khách hàng: cho AI biết trước", head: ["Câu hỏi", "Ví dụ: shop đồ gia dụng"], rows: [["Khách là ai?", "Người đi làm 25–40 tuổi, bận rộn, hay mang đồ uống theo"], ["Họ cần gì?", "Bình giữ nhiệt bền, giữ nóng lâu, dễ rửa, giao nhanh"], ["Họ sợ gì?", "Mua phải hàng kém, rò nước, không đổi trả được"], ["Họ ở đâu?", "Facebook, TikTok, Zalo, sàn thương mại điện tử"]] },
  { k: "cards", title: "Mô tả sản phẩm: Vấn đề – Giải pháp – Bằng chứng – Kêu gọi", items: [["Vấn đề", "“Cà phê pha từ sáng, đến trưa đã nguội ngắt?”"], ["Giải pháp", "Bình giữ nhiệt 2 lớp, nắp khóa chống rò, vừa hộc xe máy"], ["Bằng chứng", "Thông số giữ nhiệt từ nhà sản xuất, chính sách đổi trả, ảnh thật"], ["Kêu gọi", "“Nhắn tin để nhận mã giảm giá trong tuần này”"]] },
  { k: "table", title: "Prompt viết mô tả sản phẩm", head: ["Phần", "Nội dung"], rows: [["Vai trò", "Bạn là người viết nội dung bán hàng cho shop đồ gia dụng."], ["Bối cảnh", "Khách: người đi làm bận rộn, sợ hàng kém, rò nước."], ["Dữ liệu", "Thông số chính thức: (dán từ datasheet)."], ["Nhiệm vụ", "Viết mô tả theo Vấn đề – Giải pháp – Bằng chứng – Kêu gọi."], ["Ràng buộc", "Chỉ dùng thông số đã cho. Không dùng từ “tốt nhất”, “số 1”. Dưới 150 chữ, 3 phiên bản."]] },
  { k: "split", img: "dl11-2", alt: "Chuyên viên nội dung ngoài 20 lên lịch đăng bài trên màn hình cảm ứng", ep: "Slightly high angle shot of a Vietnamese content strategist woman about 27 with a ponytail planning on a large interactive touchscreen showing a colorful monthly content calendar with four colors of post cards, laptop and ring light nearby, bright co-working space with big windows and greenery", title: "Lịch nội dung 4 loại bài", html: "<p>Nhờ AI: “Lập lịch 4 tuần, mỗi tuần 4 bài cho fanpage shop đồ gia dụng, xoay vòng: <b>mẹo – câu chuyện – sản phẩm – tương tác</b>. Bảng gồm ngày, loại bài, tiêu đề, ý chính.”</p><p class='big'>Bạn duyệt, sửa, rồi lên lịch đăng.</p>" },
  { k: "table", title: "Bộ câu trả lời mẫu cho khách", head: ["Tình huống", "Hướng trả lời (AI soạn, bạn duyệt)"], rows: [["Hỏi giá", "Báo giá + 1 lợi ích chính + hỏi nhu cầu để tư vấn đúng"], ["Chê đắt", "Ghi nhận, so sánh giá trị (chất liệu, bảo hành, đổi trả), đưa lựa chọn rẻ hơn nếu có"], ["Hỏi còn hàng", "Trả lời ngay + thời gian giao dự kiến"], ["Khiếu nại", "Xin lỗi, xin thông tin đơn, hẹn thời gian xử lý, chuyển người phụ trách"], ["Sau bán", "Hỏi thăm sau 7 ngày, hướng dẫn sử dụng, mời đánh giá"]] },
  { k: "fact", text: "Đánh giá, nhận xét giả mạo tên khách hàng là hành vi gây hiểu nhầm cho người mua và có thể vi phạm pháp luật về quảng cáo, bảo vệ người tiêu dùng. Dùng AI để viết lời mời khách đánh giá thật, không để viết đánh giá giả." },
  { k: "try", q: "Câu quảng cáo nào an toàn hơn?", opts: ["“Bình giữ nhiệt tốt nhất Việt Nam, giữ nóng mãi mãi!”", "“Giữ nóng khoảng 6 giờ theo thông số nhà sản xuất, đổi trả trong 7 ngày.”"], a: 1, why: "Thông tin cụ thể, kiểm chứng được, không phóng đại." },
  { k: "myth", items: [["AI viết nội dung thì không cần hiểu khách.", "AI chỉ viết hay khi bạn cho nó biết khách là ai. Hiểu khách là việc của chủ shop."], ["Đăng càng nhiều càng tốt.", "Đều đặn và có giá trị quan trọng hơn số lượng."]] },
  { k: "act", title: "Thực hành", items: ["Viết chân dung khách hàng cho sản phẩm của bạn (Phiếu 11).", "Nhờ AI viết 3 phiên bản mô tả cho 1 sản phẩm, dùng thông số thật.", "Lập lịch nội dung 2 tuần bằng AI, chọn 2 bài để viết hoàn chỉnh.", "Soạn bộ 5 câu trả lời mẫu cho khách."] },
  { k: "recap", items: ["Hiểu khách trước, rồi mới nhờ AI viết.", "Mô tả: Vấn đề – Giải pháp – Bằng chứng – Kêu gọi.", "Lịch nội dung xoay vòng 4 loại bài.", "Thông số thật, không phóng đại, không đánh giá giả."] }
 ]
},
{
 p: 3, t: "Video ngắn và hình ảnh bằng AI",
 g: "Lên kịch bản video ngắn 30–60 giây; dùng AI tạo hình, giọng đọc, phụ đề; tuân thủ dán nhãn nội dung AI và bản quyền.",
 pts: [
  "Video ngắn thành công nhờ <b>3 giây đầu</b> (hook): câu hỏi, con số bất ngờ, hình ảnh lạ.",
  "Khung kịch bản 30 giây: <b>Hook (0–3s) – Vấn đề (3–10s) – Giải pháp (10–25s) – Kêu gọi (25–30s)</b>.",
  "Công cụ: chatbot viết kịch bản; Canva, CapCut dựng và phụ đề; công cụ tạo ảnh, video AI (như Google Flow, gói AI có sẵn) cho cảnh minh họa; giọng đọc AI.",
  "Nội dung do AI tạo ra phải <b>có dấu hiệu nhận biết</b> theo Luật Trí tuệ nhân tạo; TikTok và Facebook đều có nhãn nội dung AI. Ghi rõ khi gắn <b>link tiếp thị liên kết</b> (affiliate)."
 ],
 q: [
  ["Phần quan trọng nhất quyết định người xem có lướt qua không?", ["3 giây đầu (hook)", "Lời cảm ơn cuối video", "Tên kênh"], 0, "Người xem quyết định rất nhanh có xem tiếp hay không."],
  ["Video có cảnh người thật do AI tạo ra, cần làm gì khi đăng?", ["Bật nhãn nội dung AI của nền tảng / ghi rõ", "Không cần ghi gì", "Ghi “video thật 100%”"], 0, "Pháp luật và nền tảng yêu cầu minh bạch nội dung AI."],
  ["Dùng nhạc nổi tiếng không có bản quyền làm nhạc nền thường dẫn đến?", ["Video bị tắt tiếng, gỡ hoặc kênh bị cảnh cáo", "Video lên xu hướng chắc chắn", "Không sao"], 0, "Dùng thư viện nhạc có bản quyền của nền tảng."]
 ],
 s: [
  { k: "cover", img: "dl12-1", alt: "Nhà sáng tạo nội dung ngoài 30 quay video dọc trong studio sáng", ep: "Dynamic low-angle shot of a Vietnamese content creator man about 33 with trendy hair filming a vertical video reviewing a thermos bottle with a smartphone on a gimbal, ring light and softbox, a monitor showing AI subtitle and voice tools, colorful LED strips on a bright home studio wall", sub: "30 giây để giữ chân người xem. AI giúp bạn làm nhanh hơn, không thay bạn sáng tạo." },
  { k: "timeline", title: "Khung kịch bản 30 giây", items: [["0–3s", "Hook: “Cà phê của bạn nguội sau 30 phút?”"], ["3–10s", "Vấn đề: cảnh cốc cà phê nguội trên bàn làm việc"], ["10–25s", "Giải pháp: đo nhiệt độ bình giữ nhiệt sau 3 giờ"], ["25–30s", "Kêu gọi: “Nhắn tin nhận mã giảm giá”"]] },
  { k: "table", title: "Prompt viết kịch bản video ngắn", head: ["Phần", "Nội dung"], rows: [["Vai trò", "Bạn là biên kịch video TikTok cho kênh mẹo đồ dùng hằng ngày."], ["Nhiệm vụ", "Viết 3 kịch bản 30 giây về chủ đề: …"], ["Định dạng", "Bảng: giây – hình ảnh – lời thoại – chữ trên màn hình."], ["Ràng buộc", "Hook trong 3 giây đầu, lời thoại dưới 80 chữ, giọng gần gũi, không phóng đại."]] },
  { k: "cards", title: "Bộ công cụ làm video ngắn", items: [["Kịch bản", "ChatGPT, Gemini, Claude"], ["Hình, cảnh minh họa", "Tạo ảnh / video AI trong gói AI bạn đang có"], ["Giọng đọc", "Giọng đọc AI tiếng Việt (CapCut, Canva và các công cụ chuyển văn bản thành giọng nói)"], ["Dựng, phụ đề", "CapCut, Canva: phụ đề tự động, mẫu có sẵn"]], note: "Dùng công cụ miễn phí và gói đang có trước. Chỉ trả phí khi kênh đã ra video đều đặn.", n: "Các công cụ thay đổi nhanh; người dạy kiểm tra tính năng và điều khoản sử dụng thương mại trước buổi học." },
  { k: "split", img: "dl12-2", alt: "Người xem tin tưởng khi video có nhãn nội dung AI rõ ràng", ep: "Close-up of a hand holding a smartphone showing a short vertical video of an animated city scene with a small clear AI-content badge in the corner, a Vietnamese woman about 40 in office wear smiling with trust while on a coffee break, bright modern office pantry with bokeh lights, shallow depth of field", title: "Minh bạch nội dung AI", html: "<p class='big'>Luật Trí tuệ nhân tạo (hiệu lực 01/3/2026): âm thanh, hình ảnh, video do AI tạo ra phải <b>có dấu hiệu nhận biết</b>.</p><p>Bật nhãn “nội dung AI” của TikTok, Facebook. Không dùng AI giả mạo người thật, không tạo nội dung gây hiểu nhầm.</p>" },
  { k: "lights", title: "Đèn giao thông nội dung", items: [["g", "Nên làm", "Cảnh minh họa AI có ghi nhãn, giọng đọc AI cho video hướng dẫn, nhạc trong thư viện nền tảng."], ["y", "Cẩn thận", "Gắn link affiliate (phải ghi rõ), đánh giá sản phẩm (phải dùng thật), xu hướng nhạy cảm."], ["r", "Không làm", "Giả mặt, giả giọng người thật; dùng nhạc, phim có bản quyền; hứa hẹn sai sự thật."]] },
  { k: "fact", text: "Người xem quyết định lướt hay xem trong vài giây đầu. Vì vậy nhiều nhà sáng tạo viết 5–10 phương án hook cho mỗi video, thử và giữ lại kiểu hook có tỷ lệ xem hết cao nhất. AI rất hợp để nghĩ nhanh nhiều phương án hook." },
  { k: "try", q: "Hook nào mạnh hơn cho video về bình giữ nhiệt?", opts: ["“Xin chào các bạn, hôm nay mình giới thiệu một sản phẩm.”", "“Uống cà phê nguội lần thứ 3 trong tuần? Lỗi không phải do bạn pha chậm.”"], a: 1, why: "Đánh trúng vấn đề người xem đang gặp ngay câu đầu." },
  { k: "story", text: "Một kênh dùng AI tạo video “ca sĩ nổi tiếng giới thiệu máy lọc không khí” để gắn link affiliate. Video lên xu hướng.", q: "Vấn đề ở đây là gì?", a: "Giả mạo hình ảnh, giọng nói người thật để quảng cáo là lừa dối người xem, vi phạm quyền của người đó và Luật Trí tuệ nhân tạo. Kênh có thể bị gỡ video, khóa tài khoản và chịu trách nhiệm pháp lý. Hãy dùng nhân vật hoạt hình riêng của bạn hoặc chính bạn." },
  { k: "act", title: "Thực hành", items: ["Nhờ AI viết 10 hook cho một sản phẩm hoặc chủ đề của bạn, chọn 3 hook tốt nhất.", "Viết kịch bản 30 giây theo bảng giây – hình – lời – chữ (Phiếu 12).", "Tạo 2 cảnh minh họa bằng công cụ tạo ảnh AI bạn có.", "Dựng video bằng CapCut hoặc Canva, bật phụ đề và nhãn nội dung AI."] },
  { k: "recap", items: ["3 giây đầu quyết định tất cả.", "Kịch bản: Hook – Vấn đề – Giải pháp – Kêu gọi.", "AI viết kịch bản, tạo cảnh, giọng đọc; bạn giữ ý tưởng và cá tính.", "Dán nhãn nội dung AI, ghi rõ affiliate, tôn trọng bản quyền."] }
 ]
},
{
 p: 4, t: "Python cho dân văn phòng",
 g: "Chạy Python trên Google Colab; đọc file Excel, thêm cột tính toán, tổng hợp theo nhóm; gộp nhiều file Excel trong vài giây.",
 pts: [
  "<b>Google Colab</b>: chạy Python trên trình duyệt, miễn phí, không cần cài đặt. Chỉ cần tài khoản Google.",
  "Thư viện <b>pandas</b> đọc Excel thành bảng (DataFrame), làm được mọi việc của Excel nhưng lặp lại được với hàng trăm file.",
  "Bốn thao tác cốt lõi: <b>đọc</b> (read_excel), <b>tính cột</b> (df[\"a\"] * df[\"b\"]), <b>nhóm</b> (groupby), <b>ghi</b> (to_excel).",
  "Bạn không cần thuộc code: mô tả việc cần làm cho AI, AI viết code, bạn <b>chạy thử trên dữ liệu giả</b>, đọc kết quả, rồi mới dùng với dữ liệu thật."
 ],
 q: [
  ["Lệnh nào đọc file Excel bằng pandas?", ["pd.read_excel(\"file.xlsx\")", "print(\"file.xlsx\")", "open.excel()"], 0, "read_excel đọc file thành DataFrame."],
  ["df.groupby(\"san_pham\")[\"thanh_tien\"].sum() làm gì?", ["Tính tổng thành tiền theo từng sản phẩm", "Xóa cột sản phẩm", "Sắp xếp theo tên"], 0, "Giống Pivot Table: nhóm theo sản phẩm, cộng thành tiền."],
  ["Khi nào Python có lợi hơn hẳn Excel?", ["Khi phải lặp lại cùng thao tác với nhiều file hoặc hằng tuần", "Khi chỉ sửa một ô", "Khi in một trang"], 0, "Viết một lần, chạy lại bao nhiêu lần cũng được."]
 ],
 s: [
  { k: "cover", img: "dl13-1", alt: "Nhân viên hành chính ngoài 30 xem hàng trăm file Excel gộp thành một báo cáo", ep: "Isometric miniature diorama of a tidy modern office desk where hundreds of tiny green spreadsheet file icons stream like a river into a friendly funnel machine and come out as one neat report on a monitor, a Vietnamese admin officer woman about 34 watching with arms crossed and a satisfied grin, a laptop with a code notebook open, bright pastel lighting", sub: "Việc mất cả buổi chiều mỗi tuần, chạy trong 3 giây." },
  { k: "steps", title: "Bắt đầu với Google Colab", items: [["Mở Colab", "colab.research.google.com, đăng nhập Google"], ["Tạo notebook", "Tệp → Sổ tay mới"], ["Tải file lên", "Biểu tượng thư mục bên trái → Tải lên"], ["Chạy code", "Dán code vào ô, bấm nút ▶ hoặc Ctrl+Enter"]], n: "Chuẩn bị sẵn file ban_hang.xlsx và thư mục bao_cao (3 file chi nhánh) với dữ liệu giả. File tải lên Colab bị xóa khi phiên kết thúc; nhắc học viên không tải dữ liệu thật của công ty." },
  { k: "concept", title: "DataFrame = bảng Excel trong Python", big: "Mỗi cột có tên, mỗi dòng là một bản ghi, làm việc theo cả cột cùng lúc.", ex: ["So sánh", "Excel: kéo công thức =C2*D2 xuống 5.000 dòng. pandas: df[\"thanh_tien\"] = df[\"so_luong\"] * df[\"don_gia\"], một dòng cho cả bảng."] },
  { k: "code", fit: "wide small", title: "Đọc file, tính cột, tổng hợp theo sản phẩm", code: `import pandas as pd
df = pd.read_excel("ban_hang.xlsx")
df["thanh_tien"] = df["so_luong"] * df["don_gia"]
print(df.head(3))
theo_sp = df.groupby("san_pham")["thanh_tien"].sum()
print(theo_sp.sort_values(ascending=False))
print("Tổng doanh thu:", f"{df['thanh_tien'].sum():,}", "đ")`, out: `         ngay  san_pham  so_luong  don_gia  thanh_tien
0  2026-10-01     Chuột         5   150000      750000
1  2026-10-01  Bàn phím         2   450000      900000
2  2026-10-02     Chuột         3   150000      450000
san_pham
Chuột       2100000
Bàn phím    1350000
Tai nghe    1280000
Name: thanh_tien, dtype: int64
Tổng doanh thu: 4,730,000 đ`, note: "head(3) xem 3 dòng đầu để kiểm tra dữ liệu đọc đúng chưa." },
  { k: "code", fit: "wide small", title: "Gộp báo cáo của nhiều chi nhánh", code: `import pandas as pd
from pathlib import Path
files = sorted(Path("bao_cao").glob("*.xlsx"))
df = pd.concat(
    [pd.read_excel(f).assign(chi_nhanh=f.stem) for f in files],
    ignore_index=True)
tong = df.groupby("chi_nhanh")["doanh_so"].sum().sort_values(ascending=False)
print(tong)
tong.to_excel("tong_hop.xlsx")
print("Đã gộp", len(files), "tệp,", len(df), "dòng.")`, out: `chi_nhanh
HCM       590
HaNoi     405
DaNang    295
Name: doanh_so, dtype: int64
Đã gộp 3 tệp, 9 dòng.`, note: "Thư mục bao_cao có HaNoi.xlsx, HCM.xlsx, DaNang.xlsx cùng cấu trúc cột. Có 3 hay 300 file thì code vẫn y nguyên.", n: "f.stem là tên file không có đuôi, dùng làm tên chi nhánh. Nếu các file khác tên cột, pandas sẽ tạo cột trống: dặn AI “kiểm tra các file có cùng tên cột không”." },
  { k: "table", title: "Excel và pandas: cùng việc, khác cách", head: ["Việc", "Excel", "pandas"], rows: [["Lọc", "Filter", "df[df[\"so_luong\"] > 5]"], ["Sắp xếp", "Sort", "df.sort_values(\"don_gia\")"], ["Pivot", "PivotTable", "df.pivot_table(index=..., columns=..., values=..., aggfunc=\"sum\")"], ["Tra cứu", "XLOOKUP", "df.merge(bang_gia, on=\"ma_sp\")"], ["Xóa trùng", "Remove Duplicates", "df.drop_duplicates()"]] },
  { k: "split", img: "dl13-2", alt: "Kỹ thuật viên ngoài 40 mô tả yêu cầu, trợ lý AI viết code", ep: "Two-shot at a bright cafe corner of a modern office, a Vietnamese maintenance technician man about 43 in a work jacket with a tablet describing a task with hand gestures, Robi sitting opposite typing code on a tiny laptop with green code lines rising like steam from a coffee cup, a second monitor showing a Python notebook, relaxed warm morning light", title: "Nhờ AI viết code đúng cách", html: "<p>Prompt: “Viết code Python dùng pandas chạy trên Google Colab. File ban_hang.xlsx có các cột: ngay, san_pham, so_luong, don_gia. Hãy tính doanh thu theo tháng và theo sản phẩm, xuất ra file Excel. <b>Giải thích từng dòng</b> cho người mới.”</p><p class='big'>Cho AI biết <b>tên cột chính xác</b> là chìa khóa.</p>" },
  { k: "try", q: "Code báo lỗi KeyError: 'doanh_thu'. Nguyên nhân hay gặp nhất?", opts: ["Tên cột trong file khác với tên cột trong code", "Máy tính bị hỏng"], a: 0, why: "Kiểm tra print(df.columns) rồi sửa đúng tên cột, hoặc dán lỗi cho AI giải thích." },
  { k: "myth", items: [["Học Python mất vài năm mới dùng được.", "Với AI hỗ trợ, dân văn phòng có thể chạy được script gộp file, tổng hợp số liệu ngay trong buổi học đầu tiên."], ["Code chạy không báo lỗi là kết quả đúng.", "Luôn đối chiếu vài con số với cách tính tay hoặc Excel."]] },
  { k: "act", title: "Thực hành trên Colab", items: ["Mở Colab, tải file ban_hang.xlsx mẫu (Phiếu 13), chạy code đầu tiên.", "Sửa code để tính doanh thu theo ngày thay vì theo sản phẩm.", "Tải 3 file chi nhánh vào thư mục bao_cao, chạy code gộp file.", "Đối chiếu tổng doanh số với cách cộng trong Excel."], link: ["Mở Google Colab", "https://colab.research.google.com"] },
  { k: "recap", items: ["Colab: chạy Python miễn phí trên trình duyệt.", "pandas: đọc – tính cột – nhóm – ghi.", "Gộp 3 hay 300 file Excel: cùng một đoạn code.", "Cho AI tên cột chính xác, chạy thử trên dữ liệu giả, đối chiếu kết quả."] }
 ]
},
{
 p: 4, t: "Tự động hóa Google Sheets với Apps Script",
 g: "Hiểu Apps Script; nhờ AI viết script gửi email nhắc hạn từ Google Sheets; đặt lịch chạy tự động hằng ngày.",
 pts: [
  "<b>Apps Script</b> là công cụ lập trình miễn phí có sẵn trong Google Sheets, Docs, Gmail (ngôn ngữ JavaScript).",
  "Việc hợp với Apps Script: <b>gửi email nhắc việc</b>, tạo báo cáo định kỳ, chuyển dữ liệu từ Google Form, tạo file Docs hàng loạt từ mẫu.",
  "<b>Trình kích hoạt</b> (trigger) theo thời gian giúp script tự chạy mỗi ngày, mỗi giờ, không cần mở máy.",
  "Giới hạn: tài khoản Gmail cá nhân gửi tối đa khoảng <b>100 người nhận/ngày</b> qua script. Lần đầu chạy, Google hỏi cấp quyền: đọc kỹ quyền trước khi đồng ý."
 ],
 q: [
  ["Apps Script mở từ đâu trong Google Sheets?", ["Tiện ích mở rộng → Apps Script", "Tệp → In", "Chèn → Biểu đồ"], 0, "Menu Tiện ích mở rộng (Extensions) → Apps Script."],
  ["Muốn script tự chạy lúc 8 giờ sáng mỗi ngày, dùng gì?", ["Trình kích hoạt theo thời gian (trigger)", "Bấm chạy bằng tay mỗi sáng", "Không làm được"], 0, "Trigger theo thời gian chạy script tự động."],
  ["Lần đầu chạy script, Google hỏi cấp quyền gửi email. Nên làm gì?", ["Đọc kỹ quyền, chỉ đồng ý với script mình hiểu và tin tưởng", "Luôn bấm đồng ý cho nhanh", "Gửi mật khẩu cho người viết script"], 0, "Script có quyền thì làm được việc thay bạn, kể cả việc xấu nếu là script lạ."]
 ],
 s: [
  { k: "cover", img: "dl14-1", alt: "Bảng tính tự động gửi thư nhắc việc trong văn phòng lúc bình minh", ep: "Wide cinematic shot of an empty elegant office at sunrise with a city skyline through floor-to-ceiling windows, a laptop on a tidy desk showing a spreadsheet, paper-plane email icons flying out of the screen by themselves toward phones on colleagues' desks, a smart clock showing early morning, golden-pink sky", sub: "Bạn còn đang ngủ, bảng tính đã nhắc việc cho cả nhóm." },
  { k: "concept", title: "Apps Script là gì?", big: "Code nhỏ chạy trên máy chủ Google, điều khiển được Sheets, Gmail, Docs, Calendar của bạn.", ex: ["Ví dụ", "Mỗi sáng 8 giờ, đọc bảng “Công việc”, việc nào còn ≤ 2 ngày đến hạn mà chưa xong thì gửi email nhắc người phụ trách."] },
  { k: "table", title: "Chuẩn bị bảng “CongViec”", head: ["A · Việc", "B · Email", "C · Hạn", "D · Trạng thái"], rows: [["Gửi báo giá cho khách X", "an@congty.vn", "30/10/2026", "Đang làm"], ["Nộp báo cáo tháng", "binh@congty.vn", "05/11/2026", "Đang làm"], ["Gia hạn tên miền", "chi@congty.vn", "29/10/2026", "Xong"]], note: "Cột C phải là kiểu Ngày (Định dạng → Số → Ngày) thì script mới tính được số ngày.", n: "Email trong bảng là ví dụ, khi thực hành học viên dùng email của chính mình để thử." },
  { k: "code", lang: "Apps Script", title: "Script gửi email nhắc hạn", code: `function guiNhacHan() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("CongViec");
  const rows = sheet.getDataRange().getValues();
  const homNay = new Date();
  for (let i = 1; i < rows.length; i++) {
    const [viec, email, han, trangThai] = rows[i];
    if (!viec || trangThai === "Xong") continue;
    const conNgay = Math.ceil((han - homNay) / 86400000);
    if (conNgay <= 2) {
      MailApp.sendEmail(email, "Nhắc hạn: " + viec,
        "Công việc \\"" + viec + "\\" còn " + conNgay + " ngày đến hạn.");
    }
  }
}`, note: "i bắt đầu từ 1 để bỏ qua dòng tiêu đề. 86400000 là số mili giây trong một ngày. Việc đã quá hạn sẽ có số ngày âm.", n: "Giải thích từng dòng: lấy sheet → lấy toàn bộ dữ liệu → duyệt từng dòng → bỏ qua dòng trống hoặc đã xong → tính số ngày còn lại → gửi email. Khuyến khích học viên dán script vào chatbot và hỏi “giải thích từng dòng”." },
  { k: "steps", title: "Cài đặt và chạy", items: [["Mở Apps Script", "Tiện ích mở rộng → Apps Script"], ["Dán code, lưu", "Đặt tên dự án, bấm biểu tượng lưu"], ["Chạy thử", "Chọn hàm guiNhacHan → Chạy → cấp quyền"], ["Đặt lịch", "Trình kích hoạt (đồng hồ) → Theo thời gian → Hằng ngày 8–9 giờ"]] },
  { k: "split", img: "dl14-2", alt: "Kỹ sư điện ngoài 30 soi kỹ hộp thoại cấp quyền", ep: "Medium close-up of a Vietnamese electrical engineer woman about 31 in a smart work shirt holding up a big glowing permission card to the light like checking a banknote, a monitor behind her showing an access request dialog, control panels with indicator lights in a clean bright engineering office, Robi holding a checklist", title: "Cẩn thận với quyền truy cập", html: "<p class='big'>Script được cấp quyền có thể <b>đọc, sửa, gửi</b> dữ liệu thay bạn.</p><p>Chỉ chạy script bạn hiểu (nhờ AI giải thích từng dòng). Không chạy script lạ người khác gửi. Dùng tài khoản công ty theo quy định IT.</p>" },
  { k: "table", title: "Ý tưởng tự động hóa khác", head: ["Việc", "Prompt cho AI"], rows: [["Báo cáo tuần", "Viết Apps Script mỗi thứ Hai tổng hợp sheet “BanHang” tuần trước theo nhân viên, gửi email cho quản lý."], ["Form đăng ký", "Khi có người gửi Google Form, tự gửi email xác nhận cho họ."], ["Tạo hợp đồng", "Từ mỗi dòng trong sheet, tạo một file Google Docs theo mẫu, thay [TÊN], [NGÀY]."], ["Lịch họp", "Tạo sự kiện Google Calendar từ danh sách trong sheet."]] },
  { k: "fact", text: "Tài khoản Gmail cá nhân có hạn mức gửi qua Apps Script khoảng 100 người nhận mỗi ngày; tài khoản Google Workspace cao hơn nhiều. Nếu cần gửi hàng loạt cho khách, dùng công cụ email marketing có đăng ký và cho phép hủy nhận.", n: "Hạn mức có thể thay đổi, kiểm tra trang “Quotas for Google Services” trước buổi học." },
  { k: "try", q: "Script gửi nhắc cho cả việc đã “Xong”. Dòng nào cần kiểm tra?", opts: ["if (!viec || trangThai === \"Xong\") continue;", "const homNay = new Date();"], a: 0, why: "Có thể cột D ghi “xong” chữ thường hoặc có khoảng trắng. Sửa dữ liệu hoặc so sánh không phân biệt hoa – thường." },
  { k: "act", title: "Thực hành", items: ["Tạo Google Sheet “CongViec” theo mẫu, dùng email của chính bạn (Phiếu 14).", "Dán script, chạy thử, kiểm tra hộp thư.", "Nhờ AI sửa script: thêm tên người phụ trách vào lời chào.", "Đặt trình kích hoạt hằng ngày, kiểm tra sáng hôm sau."] },
  { k: "recap", items: ["Apps Script miễn phí, có sẵn trong Google Sheets.", "Script nhắc hạn: đọc bảng → tính ngày → gửi email.", "Trigger giúp chạy tự động hằng ngày.", "Chỉ cấp quyền cho script bạn hiểu; chú ý hạn mức gửi email."] }
 ]
},
{
 p: 4, t: "Xử lý file hàng loạt an toàn",
 g: "Dùng Python đổi tên, sắp xếp file hàng loạt dựa trên nội dung bên trong file; áp dụng quy trình 5 bước an toàn khi chạy code do AI viết.",
 pts: [
  "Việc lặp lại với file: <b>đổi tên</b>, <b>chuyển thư mục</b>, <b>trích thông tin</b> từ nhiều file, gộp – tách PDF. Python làm hàng nghìn file trong vài giây.",
  "Mẹo hay: đặt tên file theo <b>nội dung bên trong</b> (kỳ báo cáo, đơn vị, mã chứng từ) để sắp xếp và tìm kiếm tức thì.",
  "Quy trình an toàn 5 bước: <b>Sao lưu – Chạy thử trên bản sao – Xem trước (không thay đổi) – Chạy thật – Kiểm tra</b>.",
  "Code do AI viết có thể xóa, ghi đè file. Luôn đọc phần giải thích, tìm các lệnh <b>xóa, ghi đè, đổi tên</b> trước khi chạy."
 ],
 q: [
  ["Bước nào phải làm trước khi chạy code đổi tên hàng loạt?", ["Sao lưu và chạy thử trên bản sao", "Chạy ngay trên thư mục gốc", "Xóa file cũ cho gọn"], 0, "Sai một dòng code có thể làm hỏng hàng nghìn file."],
  ["“Chạy xem trước” (dry-run) nghĩa là?", ["In ra kết quả dự kiến mà chưa thay đổi file nào", "Chạy thật nhưng nhanh hơn", "Chạy khi máy tắt"], 0, "Code mẫu in ra tên cũ → tên mới, lệnh rename đang để trong dấu #."],
  ["Lệnh nào nguy hiểm nhất nếu chạy nhầm?", ["shutil.rmtree", "print", "pd.read_excel"], 0, "rmtree xóa cả thư mục và mọi file bên trong, không vào thùng rác."]
 ],
 s: [
  { k: "cover", img: "dl15-1", alt: "Phòng lưu trữ số: hàng nghìn tài liệu tự xếp vào đúng ngăn", ep: "Wide shot of a bright modern archive room with glass cabinets and digital labels, thousands of documents flying in a spiral like a flock of birds and landing in the correct drawers, a Vietnamese office manager woman about 48 in an elegant ao dai-inspired jacket standing in the center with a tablet, amazed, shafts of daylight from high windows", sub: "Từ 500 file “bao_cao (1).xlsx” đến kho tài liệu ngăn nắp." },
  { k: "compare", title: "Tên file trước và sau", a: ["Trước", "bao_cao (1).xlsx, bao_cao (2).xlsx, file_tai_ve.xlsx… không biết file nào của ai, kỳ nào."], b: ["Sau", "2026-09_Kinhdoanh.xlsx: kỳ báo cáo – đơn vị. Sắp xếp theo tên là theo thời gian, tìm kiếm tức thì."] },
  { k: "code", fit: "wide small", title: "Đọc nội dung file và xem trước tên mới", code: `from pathlib import Path
import pandas as pd

for f in sorted(Path("tai_ve").glob("*.xlsx")):
    dong1 = pd.read_excel(f, nrows=1).iloc[0]
    don_vi = str(dong1["don_vi"]).replace(" ", "")
    ky = str(dong1["ky_bao_cao"])
    moi = f.with_name(f"{ky}_{don_vi}.xlsx")
    if moi.exists():
        print("Bỏ qua, trùng tên:", moi.name)
        continue
    print(f.name, "->", moi.name)
    # f.rename(moi)   # bỏ dấu # sau khi đã kiểm tra danh sách`, out: `bao_cao (1).xlsx -> 2026-09_Kinhdoanh.xlsx
bao_cao (2).xlsx -> 2026-10_Kythuat.xlsx`, note: "Mỗi file có cột don_vi và ky_bao_cao. Code đọc dòng đầu tiên, ghép tên mới, gặp tên trùng thì bỏ qua và báo lại.", n: "File mẫu tự tạo với dữ liệu giả. Có thể đổi sang nội dung khác (mã chứng từ, ngày, tên dự án) tùy công việc của học viên; luôn chạy xem trước trên vài file và kiểm tra bằng mắt." },
  { k: "steps", title: "Quy trình 5 bước khi chạy code xử lý file", items: [["Sao lưu", "Copy toàn bộ thư mục gốc"], ["Bản sao", "Chạy trên thư mục thử chỉ có 5–10 file"], ["Xem trước", "In ra kết quả dự kiến, chưa đổi gì"], ["Chạy thật", "Bỏ dấu #, chạy trên toàn bộ"], ["Kiểm tra", "Đếm số file, mở ngẫu nhiên vài file"]] },
  { k: "lights", title: "Lệnh cần soi kỹ trong code AI viết", items: [["r", "Xóa", "os.remove, shutil.rmtree, unlink: có thể xóa vĩnh viễn, không vào thùng rác."], ["r", "Ghi đè", "Mở file với chế độ \"w\", to_excel cùng tên file gốc."], ["y", "Đổi tên, di chuyển", "rename, shutil.move: trùng tên có thể ghi đè hoặc báo lỗi."], ["g", "Chỉ đọc", "read_excel, glob, print: an toàn."]] },
  { k: "split", img: "dl15-2", alt: "Nhân viên IT ngoài 20 thử code trên bản sao, bản gốc được khóa an toàn", ep: "Side view with strong foreground depth of a Vietnamese IT support specialist man about 26 in a hoodie at a dual-monitor desk, on one screen a golden folder locked inside a glass case with a shield icon, on the other a blue copy folder being tested with Robi wearing safety goggles, a test checklist on a clipboard, clean bright lab-like office", title: "Prompt an toàn khi nhờ AI viết code xử lý file", html: "<p>Thêm vào prompt:</p><p class='big'>“Mặc định chỉ <b>in ra</b> thay đổi dự kiến, không sửa file. Không dùng lệnh xóa. Nếu trùng tên thì bỏ qua và báo lại. Giải thích từng dòng.”</p>" },
  { k: "table", title: "Việc file hàng loạt hay gặp", head: ["Việc", "Thư viện / cách làm"], rows: [["Đổi tên theo quy tắc", "pathlib (có sẵn trong Python)"], ["Lấy thông tin nhiều file ra một bảng", "pandas: đọc từng file, gộp, to_excel"], ["Gộp, tách PDF", "pypdf"], ["Chia một file Excel thành nhiều file theo nhóm", "pandas: groupby rồi to_excel từng nhóm"], ["Sắp file vào thư mục theo tháng", "pathlib + shutil.move"]] },
  { k: "try", q: "AI viết code có dòng shutil.rmtree(\"tai_ve\"). Bạn nên?", opts: ["Hỏi AI dòng này làm gì, bỏ nó đi nếu không cần xóa thư mục", "Chạy luôn vì AI đã viết"], a: 0, why: "rmtree xóa cả thư mục và mọi file bên trong, không vào thùng rác." },
  { k: "story", text: "Chị Hoa nhờ AI viết code đổi tên 800 file báo cáo và chạy ngay trên thư mục gốc. Nhiều file cùng kỳ, cùng đơn vị nên code tạo trùng tên và dừng giữa chừng: 300 file đã đổi tên, 500 file chưa.", q: "Chị nên làm khác thế nào?", a: "Sao lưu trước; chạy xem trước để phát hiện trùng tên; thêm một thông tin phân biệt vào tên file (mã chứng từ, số thứ tự); dặn AI xử lý trường hợp trùng tên (bỏ qua và ghi lại danh sách)." },
  { k: "act", title: "Thực hành", items: ["Tải 2 file Excel mẫu (Phiếu 15) lên Colab vào thư mục tai_ve.", "Chạy code ở chế độ xem trước, kiểm tra danh sách tên mới.", "Nhờ AI sửa code để chép mỗi file vào thư mục con theo kỳ báo cáo (chế độ xem trước).", "Viết prompt an toàn cho một việc xử lý file của bạn."] },
  { k: "recap", items: ["Python xử lý hàng nghìn file trong vài giây.", "Đặt tên file theo nội dung bên trong để dễ sắp xếp.", "5 bước: Sao lưu – Bản sao – Xem trước – Chạy thật – Kiểm tra.", "Soi kỹ lệnh xóa, ghi đè trong code AI viết."] }
 ]
},
{
 p: 4, t: "Dự án cuối: quy trình làm việc của bạn với AI",
 g: "Thiết kế một quy trình công việc có AI, đo thời gian tiết kiệm, trình bày dự án; lập kế hoạch 30 ngày và bộ quy tắc dùng AI cho nhóm.",
 pts: [
  "Chọn <b>một việc thật</b> lặp lại hằng tuần, vẽ quy trình hiện tại, đánh dấu bước AI hoặc tự động hóa giúp được.",
  "Đo trước – sau: <b>thời gian</b>, <b>số lỗi</b>, <b>mức hài lòng</b>. Con số thật thuyết phục sếp và đồng nghiệp hơn mọi lời giới thiệu.",
  "Bộ quy tắc dùng AI cho nhóm: công cụ được phép, đèn giao thông dữ liệu, bước kiểm tra bắt buộc, ghi nhận khi có AI hỗ trợ.",
  "Kế hoạch <b>30 ngày</b>: mỗi tuần một thói quen mới, cuối tháng tổng kết và chia sẻ thư viện prompt với đồng nghiệp."
 ],
 q: [
  ["Việc nào hợp làm dự án cuối?", ["Một việc thật, lặp lại hằng tuần, tốn thời gian", "Một việc chỉ làm một lần trong đời", "Việc của phòng khác bạn không rõ"], 0, "Việc lặp lại thì lợi ích tự động hóa nhân lên mỗi tuần."],
  ["Chỉ số nào nên đo trước và sau khi áp dụng AI?", ["Thời gian, số lỗi, mức hài lòng", "Số lần mở chatbot", "Độ dài prompt"], 0, "Đo kết quả công việc, không đo mức độ dùng công cụ."],
  ["Bộ quy tắc dùng AI cho nhóm cần có gì?", ["Công cụ được phép, phân loại dữ liệu, bước kiểm tra bắt buộc", "Danh sách người giỏi AI nhất", "Cấm hoàn toàn mọi công cụ AI"], 0, "Quy tắc rõ giúp cả nhóm dùng AI an toàn và đều tay."]
 ],
 s: [
  { k: "cover", img: "dl16-1", alt: "Nhóm đồng nghiệp nhiều lứa tuổi, nhiều nghề ăn mừng quy trình mới", ep: "Wide celebratory shot of a joyful diverse team of Vietnamese colleagues aged 25 to 50 (an office administrator, a technician in a work jacket, an engineer, a sales manager, an accountant) high-fiving on a modern office rooftop terrace at golden hour, a large digital whiteboard behind them with a simple flowchart of arrows and checkmarks, city skyline in the background, Robi throwing confetti", sub: "Không phải học thêm một công cụ, mà là làm việc theo cách mới." },
  { k: "steps", title: "Thiết kế quy trình có AI", items: [["Chọn việc", "Lặp lại, tốn giờ, có khuôn mẫu"], ["Vẽ hiện tại", "Các bước, thời gian từng bước"], ["Gắn AI", "Bước nào AI nháp, bước nào code tự động"], ["Gắn kiểm tra", "Ai kiểm, kiểm gì, trước khi gửi"], ["Đo và cải tiến", "So sánh trước – sau sau 2 tuần"]] },
  { k: "table", title: "Ví dụ: báo cáo doanh số tuần", head: ["Bước", "Trước", "Sau"], rows: [["Gom file chi nhánh", "60 phút copy – dán", "1 phút chạy Python"], ["Tổng hợp, Pivot", "30 phút", "Có sẵn trong script"], ["Viết nhận xét", "40 phút", "10 phút (AI nháp, bạn sửa)"], ["Kiểm tra số liệu", "Thường bỏ qua", "10 phút, bắt buộc"], ["Tổng", "130 phút", "21 phút"]], note: "Số liệu minh họa. Dự án của bạn dùng số đo thật trong 2 tuần.", n: "Nhấn mạnh: thời gian kiểm tra tăng lên là điều tốt. Mục tiêu là nhanh hơn và đúng hơn, không chỉ nhanh hơn." },
  { k: "cards", title: "Bộ quy tắc dùng AI cho nhóm", items: [["Công cụ", "Danh sách công cụ được phép cho từng loại việc"], ["Dữ liệu", "Đèn giao thông: xanh – vàng – đỏ, ví dụ cụ thể của nhóm"], ["Kiểm tra", "Số liệu, trích dẫn, điều luật phải đối chiếu nguồn"], ["Minh bạch", "Ghi chú khi sản phẩm có AI hỗ trợ đáng kể"], ["Trách nhiệm", "Người gửi chịu trách nhiệm cuối cùng"], ["Chia sẻ", "Thư viện prompt chung, cập nhật mỗi tháng"]] },
  { k: "split", img: "dl16-2", alt: "Nhân viên ngoài 30 bước lên bậc thang lộ trình 4 tuần ứng dụng AI", ep: "Epic wide shot of four large glowing steps rising inside a futuristic bright atrium toward a sunrise window, each step with a simple icon (envelope, spreadsheet, gear, people), a Vietnamese office worker woman about 35 with a laptop bag climbing confidently, colleagues of different ages and professions on the steps below, screens and robotic devices lining the walls", title: "Kế hoạch 30 ngày", html: "<p><b>Tuần 1</b>: mỗi ngày nhờ AI nháp ít nhất 1 email hoặc văn bản.</p><p><b>Tuần 2</b>: dùng AI cho Excel và tóm tắt tài liệu.</p><p><b>Tuần 3</b>: tự động hóa 1 việc bằng Python hoặc Apps Script.</p><p><b>Tuần 4</b>: đo kết quả, chia sẻ thư viện prompt với nhóm.</p>" },
  { k: "table", title: "Khung trình bày dự án 5 phút", head: ["Phút", "Nội dung"], rows: [["1", "Việc gì, vì sao chọn, tốn bao nhiêu thời gian"], ["2", "Quy trình mới: bước nào AI, bước nào bạn"], ["3", "Demo ngắn: prompt hoặc code chạy thật"], ["4", "Kết quả đo: thời gian, lỗi, phản hồi"], ["5", "Rủi ro đã kiểm soát và bước tiếp theo"]] },
  { k: "fact", text: "Cách nhanh nhất để giỏi AI không phải đọc thêm mà là dùng hằng ngày cho việc thật. Mỗi lần AI làm sai là một bài học về cách viết yêu cầu và cách kiểm tra." },
  { k: "try", q: "Sau 2 tuần, quy trình mới nhanh hơn nhưng có 2 lỗi số liệu lọt ra ngoài. Nên làm gì?", opts: ["Bổ sung bước kiểm tra bắt buộc vào quy trình, giữ phần tự động hóa", "Bỏ hẳn AI, quay lại cách cũ"], a: 0, why: "Sửa quy trình ở đúng chỗ hỏng; lợi ích tốc độ vẫn giữ được." },
  { k: "quote", label: "Lời kết khóa học", text: "AI không làm bạn giỏi hơn. Bạn dùng AI đúng cách, mỗi ngày, mới làm bạn giỏi hơn." },
  { k: "act", title: "Dự án cuối", items: ["Hoàn thành Phiếu 16: việc chọn, quy trình cũ – mới, số đo.", "Viết bộ quy tắc dùng AI 1 trang cho nhóm của bạn (nhờ AI nháp).", "Trình bày dự án 5 phút theo khung, nhận góp ý.", "Lập kế hoạch 30 ngày, hẹn ngày tổng kết."] },
  { k: "recap", items: ["Chọn việc thật, lặp lại, tốn giờ.", "Đo trước – sau: thời gian, lỗi, hài lòng.", "Bộ quy tắc AI giúp cả nhóm dùng an toàn.", "Dùng hằng ngày trong 30 ngày để thành thói quen."] }
 ]
}
);
