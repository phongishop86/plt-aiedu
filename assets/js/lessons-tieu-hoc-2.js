/* Khóa AI Tiểu học — buổi 9–16 */
window.AIEDU_LEVEL.lessons.push(
{
 p: 3, t: "Chatbot là gì?",
 g: "Hiểu chatbot là chương trình biết trò chuyện bằng cách đoán từ; biết chatbot không phải bạn thân và phải dùng cùng người lớn.",
 pts: [
  "<b>Chatbot</b> là chương trình máy tính biết trò chuyện bằng chữ hoặc giọng nói.",
  "Chatbot trả lời bằng cách <b>đoán từ tiếp theo hợp lý nhất</b>, giống trò chơi nối từ.",
  "Chatbot không phải người, không có cảm xúc, không phải bạn thân.",
  "Trẻ dưới 13 tuổi chỉ dùng chatbot <b>cùng thầy cô hoặc bố mẹ</b>."
 ],
 q: [
  ["Chatbot là gì?", ["Chương trình máy tính biết trò chuyện", "Một người thật trốn trong máy"], 0, "Chatbot là chương trình máy tính."],
  ["Em 9 tuổi muốn hỏi chatbot thì làm sao?", ["Nhờ bố mẹ hoặc thầy cô cùng dùng", "Tự lập tài khoản"], 0, "Chatbot có quy định độ tuổi."],
  ["Chatbot có phải bạn thân của em không?", ["Có", "Không"], 1, "Chatbot không có tình cảm. Bạn thân là người thật."]
 ],
 s: [
  { k: "cover", img: "th09-1", alt: "Bé và mẹ cùng trò chuyện với chatbot trên máy tính", ep: "A little boy and his mother sitting together at a desk chatting with a friendly glowing chat window on a computer, cute speech bubbles floating out, Robi waving from inside the screen", sub: "Làm quen với những chiếc máy biết trò chuyện." },
  { k: "concept", title: "Chatbot là gì?", big: "Chatbot là chương trình máy tính biết trò chuyện bằng chữ hoặc giọng nói.", ex: ["Một số chatbot", "ChatGPT, Gemini, trợ lý giọng nói trên điện thoại."] },
  { k: "split", img: "th09-2", alt: "Rô-bi xếp từng chữ thành câu như xếp domino", ep: "Robi lining up glowing word blocks like dominoes to build a sentence, each new block popping up with sparkles, two kids watching with mouths open", title: "Chatbot nói chuyện thế nào?", html: "<p class='big'>Chatbot <b>đoán từ tiếp theo</b> hợp lý nhất, rồi đoán tiếp, cứ thế thành câu.</p><p>Giống trò chơi nối từ!</p>", n: "Chatbot đã đọc một lượng chữ khổng lồ nên đoán từ rất giỏi, nhưng nó không thật sự hiểu như người." },
  { k: "try", q: "“Bầu trời màu …” từ tiếp theo hợp lý nhất là?", opts: ["xanh", "bánh"], a: 0, why: "“Bầu trời màu xanh” là câu hợp lý nhất." },
  { k: "act", title: "Trò chơi nối từ", items: ["Cả lớp ngồi thành vòng tròn.", "Mỗi bạn chỉ được nói 1 từ để nối thành câu chuyện.", "Sau 2 vòng, cô kể lại câu chuyện cả lớp vừa tạo.", "Chatbot cũng nói chuyện đúng như vậy!"] },
  { k: "compare", title: "Chatbot và người bạn", a: ["Chatbot", "Trả lời nhanh, biết nhiều điều<br>Không có cảm xúc<br>Có thể nói sai"], b: ["Người bạn", "Hiểu và thương em<br>Chơi cùng em<br>Giúp em khi buồn"] },
  { k: "split", img: "th09-3", alt: "Cô giáo cùng cả lớp hỏi chatbot trên màn hình lớn", ep: "A young Vietnamese female teacher typing on a big classroom screen while excited kids raise hands to suggest questions, a friendly chat window on screen, Robi pointing at it", title: "Dùng cùng người lớn", html: "<p class='big'>Các chatbot như ChatGPT, Gemini có <b>quy định độ tuổi</b>.</p><p>Dưới 13 tuổi, em hỏi chatbot cùng bố mẹ hoặc thầy cô.</p>", n: "Theo hướng dẫn của OpenAI: khi dùng ChatGPT trong giáo dục cho trẻ dưới 13 tuổi, người lớn phải là người trực tiếp thao tác." },
  { k: "act", title: "Cô hỏi chatbot", items: ["Cả lớp chọn 1 câu hỏi về con vật yêu thích.", "Cô gõ vào chatbot trên màn hình lớn.", "Cả lớp đọc câu trả lời và nhận xét: có đúng không? có dễ hiểu không?"] },
  { k: "myth", items: [["Chatbot hiểu và thương em như bạn.", "Chatbot chỉ là chương trình, không có tình cảm."], ["Chatbot biết hết mọi thứ.", "Chatbot có thể không biết hoặc nói sai."]] },
  { k: "recap", items: ["Chatbot là chương trình biết trò chuyện.", "Chatbot đoán từ tiếp theo để tạo câu.", "Dùng chatbot cùng bố mẹ, thầy cô."] }
 ]
},
{
 p: 3, t: "Hỏi AI thật rõ",
 g: "Đặt câu hỏi cho AI theo công thức 3 phần: Em là ai? Em cần gì? Em muốn thế nào?",
 pts: [
  "Câu hỏi càng rõ, AI trả lời càng đúng ý.",
  "Công thức 3 phần: <b>Em là ai?</b> · <b>Em cần gì?</b> · <b>Em muốn thế nào?</b>",
  "Ví dụ: “Em là học sinh lớp 3. Hãy kể chuyện về chú voi. Kể ngắn 5 câu, thật vui.”",
  "Chưa ưng thì hỏi tiếp: “ngắn hơn”, “dùng từ dễ hơn”, “thêm ví dụ”."
 ],
 q: [
  ["Câu hỏi nào rõ hơn?", ["“Kể chuyện.”", "“Em học lớp 3. Kể chuyện về chú voi, 5 câu, thật vui.”"], 1, "Câu thứ hai có đủ 3 phần."],
  ["“Kể ngắn 5 câu” thuộc phần nào?", ["Em là ai?", "Em muốn thế nào?"], 1, "Ngắn hay dài là “em muốn thế nào”."],
  ["Câu trả lời khó hiểu, em làm gì?", ["Hỏi tiếp: “giải thích dễ hơn cho em”", "Bỏ đi"], 0, "Hỏi tiếp để AI chỉnh lại."]
 ],
 s: [
  { k: "cover", img: "th10-1", alt: "Bé cầm micro đặt câu hỏi, Rô-bi lắng nghe chăm chú", ep: "A confident little girl holding a toy microphone asking a question, Robi listening carefully with a hand behind its ear, three glowing question cards floating above", sub: "Hỏi đúng cách, AI trả lời đúng ý." },
  { k: "concept", title: "Vì sao phải hỏi rõ?", big: "AI không biết em đang nghĩ gì. Em nói càng rõ, AI càng hiểu đúng.", ex: ["Giống như", "Em bảo mẹ “mua bánh” thì mẹ chưa biết mua bánh gì. Nói “bánh bông lan nhỏ, vị dâu” thì mẹ mua đúng ý."] },
  { k: "cards", title: "Công thức 3 phần", items: [["1. Em là ai?", "Học sinh lớp 3"], ["2. Em cần gì?", "Kể chuyện, giải thích, đố vui"], ["3. Em muốn thế nào?", "Ngắn, vui, 5 câu, từ dễ hiểu"]], n: "Đây là phiên bản rút gọn của công thức 5 ngón tay mà các em sẽ học ở THCS (vai trò, nhiệm vụ, bối cảnh, định dạng, giới hạn)." },
  { k: "compare", title: "Câu hỏi mờ và câu hỏi rõ", a: ["Mờ", "“Kể chuyện.”<br>AI không biết kể chuyện gì, dài hay ngắn."], b: ["Rõ", "“Em là học sinh lớp 3. Hãy kể chuyện về chú voi con đi học. Kể ngắn 5 câu, thật vui.”"] },
  { k: "try", q: "“Em là học sinh lớp 2” thuộc phần nào?", opts: ["Em là ai?", "Em cần gì?", "Em muốn thế nào?"], a: 0, why: "Đây là phần giới thiệu em là ai." },
  { k: "split", img: "th10-2", alt: "Rô-bi sửa câu trả lời ngắn lại theo yêu cầu", ep: "Robi trimming a very long scroll of paper with giant scissors into a short neat card, a little boy giving a thumbs up, sparkles", title: "Hỏi tiếp để chỉnh", html: "<p class='big'>Chưa ưng thì <b>hỏi tiếp</b>:</p><p>“ngắn hơn nữa” · “dùng từ dễ hơn” · “thêm một ví dụ” · “kể vui hơn”</p>" },
  { k: "act", title: "Phòng tập hỏi AI", items: ["Mở Phòng tập hỏi AI trên web.", "Gõ câu hỏi, xem máy chấm đủ mấy phần.", "Sửa đến khi đủ 3 phần."], link: ["Mở Phòng tập", "index.html#phong-tap-prompt"] },
  { k: "act", title: "Cô hỏi AI thử", items: ["Mỗi tổ viết một câu hỏi đủ 3 phần lên giấy.", "Cô gõ câu hỏi của từng tổ vào chatbot.", "Cả lớp so sánh: câu hỏi nào cho câu trả lời hay nhất?"] },
  { k: "fact", text: "Người lớn làm việc với AI cũng phải học cách hỏi rõ. Kỹ năng này có tên là “viết prompt”. Prompt là câu lệnh em gửi cho AI." },
  { k: "recap", items: ["Hỏi rõ thì AI trả lời đúng ý.", "3 phần: Em là ai? Em cần gì? Em muốn thế nào?", "Chưa ưng thì hỏi tiếp."] }
 ]
},
{
 p: 3, t: "AI có thể sai",
 g: "Biết AI có thể nói sai, ảnh có thể là giả; hình thành 3 bước kiểm tra: dừng lại – tìm trong sách – hỏi người lớn.",
 pts: [
  "AI có thể trả lời <b>sai mà vẫn rất tự tin</b>. Người lớn gọi đó là AI “bịa”.",
  "Kiểm tra lại với sách giáo khoa, thầy cô, bố mẹ.",
  "Ảnh và video cũng có thể do AI làm giả: mèo biết bay, cá đi xe đạp.",
  "Thấy điều lạ, đáng sợ, hoặc bị bảo giữ bí mật: dừng lại và hỏi người lớn."
 ],
 q: [
  ["AI có thể nói sai không?", ["Có", "Không"], 0, "AI có thể sai mà vẫn rất tự tin."],
  ["Muốn kiểm tra điều AI nói, em hỏi ai?", ["Thầy cô, bố mẹ, sách", "Một người lạ trên mạng"], 0, "Người lớn tin cậy và sách là nguồn đáng tin."],
  ["Thấy ảnh con mèo biết bay, em nghĩ gì?", ["Có thể là ảnh giả làm bằng AI", "Chắc chắn là thật"], 0, "Mèo không biết bay ngoài đời."]
 ],
 s: [
  { k: "cover", img: "th11-1", alt: "Bé làm thám tử nhí cầm kính lúp", ep: "A little detective boy in a deerstalker hat squinting through a giant magnifying glass at a tablet, Robi holding a notebook, playful mystery spotlight", sub: "Thám tử nhí: AI nói đúng hay sai?" },
  { k: "concept", title: "AI cũng biết “bịa”", big: "AI có thể trả lời sai mà giọng vẫn rất chắc chắn.", ex: ["Vì sao?", "AI chọn câu nghe hợp lý, chứ không phải lúc nào cũng tra sự thật."] },
  { k: "story", text: "Em hỏi AI: “Con voi có mấy chân?” AI trả lời: “Con voi có 6 chân.”", q: "Em làm gì?", a: "AI sai rồi! Voi có 4 chân. Em kiểm tra trong sách và kể cho thầy cô." },
  { k: "steps", title: "3 bước kiểm tra", items: [["Dừng lại", "Đừng tin ngay"], ["Tìm trong sách", "Hoặc hỏi nguồn đáng tin"], ["Hỏi người lớn", "Thầy cô, bố mẹ"]] },
  { k: "split", img: "th11-2", alt: "Chú cá đạp xe — ảnh giả bằng AI", ep: "A hilarious obviously fake picture inside a photo frame: a goldfish riding a bicycle, Robi and a little girl examining it with raised eyebrows, a big orange question mark", title: "Ảnh giả bằng AI", html: "<p class='big'>AI có thể vẽ ảnh trông như thật: mèo biết bay, cá đạp xe.</p><p>Thấy lạ quá thì có thể là <b>ảnh giả</b>.</p>" },
  { k: "try", q: "Ảnh “con cá đang đạp xe”. Thật hay giả?", opts: ["Thật", "Giả"], a: 1, why: "Cá không thể đạp xe ngoài đời." },
  { k: "cards", title: "Dấu hiệu cần cảnh giác", items: [["Quá lạ", "Không thể xảy ra ngoài đời"], ["Đáng sợ", "Làm em lo lắng, sợ hãi"], ["Bảo em làm gì", "Bấm vào, gửi đi, giữ bí mật"]], n: "Dấu hiệu thứ ba là quan trọng nhất về an toàn: mọi lời nhắn bảo trẻ giữ bí mật với bố mẹ đều cần báo ngay cho người lớn." },
  { k: "myth", items: [["Cái gì trên mạng cũng là thật.", "Trên mạng có cả thông tin sai và ảnh giả."], ["AI nói chắc chắn thì là đúng.", "AI nói chắc vẫn có thể sai."]] },
  { k: "act", title: "Trò chơi Đúng hay Sai", items: ["Cô đọc 6 câu “AI nói”.", "Câu đúng: giơ thẻ xanh. Câu sai: giơ thẻ đỏ.", "Cả lớp cùng tìm trong sách để kiểm tra."], n: "Gợi ý câu: Voi có 4 chân (đúng). Mặt Trời mọc ở hướng Tây (sai). Cá thở bằng mang (đúng). Con mèo đẻ trứng (sai). Nước sôi khi đun đủ nóng (đúng). Ếch có lông vũ (sai)." },
  { k: "recap", items: ["AI có thể sai mà vẫn tự tin.", "Ảnh có thể là ảnh giả.", "Dừng lại – tìm trong sách – hỏi người lớn."] }
 ]
},
{
 p: 3, t: "Bí mật cần giữ",
 g: "Biết thông tin riêng cần giữ kín; biết xử lý khi người lạ trên mạng xin thông tin hoặc bảo giữ bí mật.",
 pts: [
  "Thông tin riêng: họ tên đầy đủ, địa chỉ nhà, trường lớp, số điện thoại, mật khẩu, ảnh khuôn mặt.",
  "Không bao giờ nói thông tin riêng cho AI hay người lạ trên mạng.",
  "Ai bảo em giữ bí mật với bố mẹ → kể ngay cho bố mẹ, thầy cô.",
  "AI không phải bạn thân. Khi buồn, hãy tìm bố mẹ, thầy cô, bạn bè."
 ],
 q: [
  ["Đâu là thông tin riêng?", ["Địa chỉ nhà", "Màu em thích"], 0, "Người lạ biết địa chỉ có thể tìm tới nhà em."],
  ["Người lạ trên mạng xin ảnh của em, em làm gì?", ["Không gửi, kể với bố mẹ", "Gửi ngay"], 0, "Không gửi ảnh cho người lạ."],
  ["Khi buồn, em nên làm gì?", ["Nói với bố mẹ, thầy cô", "Chỉ kể với chatbot"], 0, "Người thân hiểu và giúp em thật sự."]
 ],
 s: [
  { k: "cover", img: "th12-1", alt: "Bé mặc áo choàng siêu anh hùng che chắn chiếc rương bí mật", ep: "A brave little girl in a superhero cape and mask guarding a glowing treasure chest with a lock, Robi in a matching tiny cape standing beside her, heroic low angle", sub: "Em là siêu anh hùng bảo vệ bí mật!" },
  { k: "concept", title: "Thông tin riêng là gì?", big: "Là những điều giúp người khác biết em là ai và tìm được em.", ex: ["Ví dụ", "Họ tên đầy đủ, địa chỉ nhà, trường lớp, số điện thoại, mật khẩu, ảnh khuôn mặt."] },
  { k: "lights", title: "Đèn giao thông bí mật", items: [["r", "Đỏ · Không bao giờ nói", "Họ tên đầy đủ, địa chỉ nhà, trường lớp, số điện thoại, mật khẩu, ảnh mặt."], ["y", "Vàng · Hỏi bố mẹ trước", "Ảnh có bạn bè, chuyện trong nhà."], ["g", "Xanh · Thoải mái", "Câu hỏi bài học, con vật yêu thích, ý tưởng vẽ tranh."]] },
  { k: "story", text: "Một tài khoản lạ khen em vẽ đẹp, rồi xin địa chỉ để gửi quà và dặn: “Đừng kể với bố mẹ nhé.”", q: "Em làm gì?", a: "Không trả lời, không gửi địa chỉ. Kể ngay cho bố mẹ. Người tốt không bao giờ bảo em giữ bí mật với bố mẹ.", n: "Đây là dấu hiệu dụ dỗ trẻ qua mạng. Nhắc phụ huynh cùng con đặt quy tắc: mọi lời làm quen của người lạ đều kể cho bố mẹ." },
  { k: "split", img: "th12-2", alt: "Bé kể chuyện cho mẹ nghe, mẹ ôm bé", ep: "A little boy telling his mother something important on a sofa, the mother hugging him warmly and listening, Robi giving a heart sign in the corner, soft warm light", title: "Không giữ bí mật xấu", html: "<p class='big'>Bí mật vui như quà sinh nhật thì được.</p><p>Bí mật làm em <b>sợ, khó chịu</b> thì phải kể ngay cho người lớn.</p>" },
  { k: "cards", title: "Quy tắc siêu anh hùng", items: [["Dừng", "Không bấm, không gửi vội"], ["Nghĩ", "Đây có phải thông tin riêng không?"], ["Kể", "Báo bố mẹ, thầy cô"]] },
  { k: "try", q: "Chatbot hỏi: “Em tên gì, học trường nào?” Em làm gì?", opts: ["Trả lời đầy đủ", "Không trả lời, hỏi bố mẹ"], a: 1, why: "Tên và trường là thông tin riêng." },
  { k: "split", img: "th12-3", alt: "Các bạn nhỏ chơi đùa cùng nhau ngoài sân", ep: "A group of happy little kids playing together on a sunny school yard under a red flame tree, laughing and holding hands, Robi watching happily from a bench", title: "AI không phải bạn thân", html: "<p class='big'>Khi buồn hay cô đơn, hãy tìm <b>bố mẹ, thầy cô, bạn bè</b>.</p><p>Họ hiểu và giúp em thật sự.</p>" },
  { k: "act", title: "Trò chơi “Bí mật hay không?”", items: ["Chơi trên web: xếp 8 thông tin vào đèn đỏ, vàng, xanh.", "Cả lớp giải thích vì sao."], link: ["Chơi ngay", "index.html#tro-choi"] },
  { k: "recap", items: ["Không bao giờ nói thông tin riêng cho AI hay người lạ.", "Ai bảo giữ bí mật với bố mẹ: kể ngay.", "Khi buồn, tìm người thân."] }
 ]
},
{
 p: 4, t: "Kể chuyện cùng AI",
 g: "Dùng AI để gợi ý ý tưởng; tự sáng tác truyện 4 phần; trung thực khi dùng ý của AI.",
 pts: [
  "AI có thể gợi ý ý tưởng: nhân vật, nơi chốn, chuyện gì xảy ra.",
  "<b>Em là tác giả</b>: em chọn ý, em kể, em vẽ. AI chỉ là người gợi ý.",
  "Câu chuyện có 4 phần: mở đầu – rắc rối – giải quyết – kết thúc.",
  "Khi dùng ý của AI, em nói thật: “Có ý gợi ý từ AI”."
 ],
 q: [
  ["Ai là tác giả câu chuyện?", ["Em", "AI"], 0, "AI chỉ gợi ý, em mới là tác giả."],
  ["Câu chuyện có mấy phần chính?", ["4 phần", "1 phần"], 0, "Mở đầu, rắc rối, giải quyết, kết thúc."],
  ["AI giúp gì khi em kể chuyện?", ["Gợi ý ý tưởng", "Viết hết để em nộp"], 0, "Em tự sáng tạo, AI chỉ gợi ý."]
 ],
 s: [
  { k: "cover", img: "th13-1", alt: "Các nhân vật cổ tích bay ra từ cuốn sách mở", ep: "An open magical storybook with fairy tale characters flying out: a little elephant, a rabbit with a backpack, a dragon kite, kids reading on a rug with sparkling eyes, Robi turning the page", sub: "Em là tác giả, AI là người gợi ý." },
  { k: "concept", title: "Em là tác giả", big: "Em chọn ý, em kể, em vẽ. AI chỉ là người gợi ý.", ex: ["Giống như", "Bạn bè gợi ý trò chơi, nhưng em quyết định chơi thế nào."] },
  { k: "steps", title: "Câu chuyện có 4 phần", items: [["Mở đầu", "Ai? Ở đâu?"], ["Rắc rối", "Chuyện gì xảy ra?"], ["Giải quyết", "Nhân vật làm gì?"], ["Kết thúc", "Bài học là gì?"]] },
  { k: "try", q: "Câu nào là phần “rắc rối”?", opts: ["Ngày xửa ngày xưa có chú thỏ con.", "Bỗng nhiên thỏ con bị lạc trong rừng."], a: 1, why: "Bị lạc là chuyện rắc rối xảy ra." },
  { k: "split", img: "th13-2", alt: "Cô giáo hỏi AI gợi ý nhân vật, cả lớp bình chọn", ep: "A young Vietnamese female teacher pointing at a big screen showing three cute character cards: a turtle, an owl and a little robot, kids voting by raising colorful cards, Robi counting votes", title: "AI gợi ý, em chọn", html: "<p class='big'>Cô hỏi AI: “Gợi ý 3 nhân vật cho truyện về khu rừng.”</p><p>Cả lớp <b>bình chọn</b> nhân vật mình thích nhất.</p>" },
  { k: "cards", title: "Ý tưởng mở đầu", items: [["Nhân vật", "Chú rùa muốn bay"], ["Nơi chốn", "Ngôi làng ven sông"], ["Rắc rối", "Cơn bão làm gãy cây cầu"]] },
  { k: "act", title: "Truyện tranh 4 khung", items: ["Cô hỏi AI gợi ý ý tưởng, cả lớp bình chọn.", "Mỗi em vẽ truyện 4 khung theo 4 phần.", "Kể lại cho bạn bên cạnh nghe.", "Ghi ở góc tranh: “Có ý gợi ý từ AI”."] },
  { k: "myth", items: [["Dùng AI là xấu.", "Dùng AI để lấy ý tưởng là tốt, miễn em tự sáng tạo và nói thật."], ["AI viết hay hơn nên để AI viết hết.", "Truyện do em viết mới là của em và giúp em giỏi lên."]] },
  { k: "fact", text: "Nhiều nhà văn kể rằng ý tưởng hay nhất của họ đến từ những câu hỏi “Nếu như…?”. Ví dụ: Nếu như chú mèo biết nói thì sao?" },
  { k: "recap", items: ["AI gợi ý, em là tác giả.", "Truyện có 4 phần: mở đầu, rắc rối, giải quyết, kết thúc.", "Dùng ý AI thì nói thật."] }
 ]
},
{
 p: 4, t: "Vẽ tranh từ lời tả",
 g: "Viết lời tả 4 phần để AI vẽ tranh; dùng tranh AI có trách nhiệm.",
 pts: [
  "AI vẽ tranh có thể tạo hình mới từ lời tả bằng chữ.",
  "Lời tả tốt có 4 phần: <b>Ai/cái gì</b> · <b>Đang làm gì</b> · <b>Ở đâu</b> · <b>Màu sắc, kiểu vẽ</b>.",
  "Ví dụ: “Chú mèo cam đang đọc sách trong thư viện, kiểu tranh màu nước.”",
  "Không vẽ người thật, không làm ảnh giả để trêu bạn. Ghi “Tranh vẽ bằng AI”."
 ],
 q: [
  ["Lời tả nào rõ hơn?", ["“con mèo”", "“Chú mèo cam đang đọc sách trong thư viện, tranh màu nước”"], 1, "Lời tả thứ hai có đủ 4 phần."],
  ["“trong thư viện” là phần nào?", ["Ở đâu", "Màu sắc"], 0, "Thư viện là nơi chốn."],
  ["Có nên dùng AI làm ảnh giả để trêu bạn?", ["Không", "Có"], 0, "Làm ảnh giả trêu bạn là bắt nạt."]
 ],
 s: [
  { k: "cover", img: "th14-1", alt: "Rô-bi vẽ tranh, những bức tranh nhỏ bay ra như bướm", ep: "Robi painting at an easel with a huge smile, small colorful paintings flying out of the palette like butterflies, a little girl laughing and catching one, bright art room", sub: "Từ lời tả thành bức tranh." },
  { k: "concept", title: "AI vẽ tranh như thế nào?", big: "AI đã xem rất nhiều tranh kèm lời tả. Khi em tả, AI vẽ tranh mới theo lời em.", ex: ["Nhớ nhé", "AI không chép tranh có sẵn, mà vẽ một bức mới."] },
  { k: "cards", title: "Lời tả 4 phần", items: [["Ai / cái gì", "chú mèo cam"], ["Đang làm gì", "đọc sách"], ["Ở đâu", "trong thư viện"], ["Màu sắc, kiểu vẽ", "tranh màu nước"]] },
  { k: "split", img: "th14-2", alt: "Tranh màu nước chú mèo cam đọc sách trong thư viện", ep: "Watercolor painting of an orange cat reading a book in a cozy library, soft warm light, gentle washes of color", style: "watercolor", title: "Kết quả", html: "<p class='big'>“Chú mèo cam đang đọc sách trong thư viện, tranh màu nước.”</p>" },
  { k: "try", q: "Lời tả “chú chó đang chơi bóng” còn thiếu phần nào?", opts: ["Ở đâu và màu sắc, kiểu vẽ", "Ai / cái gì"], a: 0, why: "Đã có “chú chó” và “đang chơi bóng”, còn thiếu nơi chốn và kiểu vẽ." },
  { k: "act", title: "Trò chơi “Họa sĩ mô tả”", items: ["Bạn A vẽ một hình đơn giản, không cho ai xem.", "Bạn A tả bằng lời, cả lớp vẽ theo.", "So sánh: lời tả càng rõ, tranh càng giống!"] },
  { k: "act", title: "Cô vẽ cùng AI", items: ["Mỗi tổ viết một lời tả đủ 4 phần.", "Cô nhập vào công cụ vẽ AI trên màn hình lớn.", "Cả lớp xem tranh và nhận xét."], n: "Có thể dùng tính năng tạo ảnh của Gemini, Canva hoặc Google Flow trên tài khoản giáo viên. Kiểm tra ảnh trước khi chiếu cho học sinh." },
  { k: "split", img: "th14-3", alt: "Bé dán nhãn “Tranh vẽ bằng AI” lên bức tranh", ep: "A proud little boy hanging his colorful AI-assisted painting on a classroom wall gallery and sticking a small blank label sticker on the corner, Robi holding the tape", title: "Dùng tranh AI đúng cách", html: "<p class='big'>Không vẽ người thật. Không làm ảnh giả.</p><p>Khi khoe tranh, ghi rõ: <b>“Tranh vẽ bằng AI”</b>.</p>" },
  { k: "myth", items: [["Tranh AI là tranh em tự vẽ.", "Tranh AI do máy vẽ theo lời em tả. Hãy nói thật khi khoe."]] },
  { k: "recap", items: ["AI vẽ tranh theo lời tả.", "Lời tả 4 phần: ai, làm gì, ở đâu, màu sắc – kiểu vẽ.", "Không vẽ người thật, không làm ảnh giả."] }
 ]
},
{
 p: 4, t: "Lập trình kéo thả đầu tiên",
 g: "Ghép khối lệnh để tạo chương trình đầu tiên trên ScratchJr (lớp 1–3) hoặc Scratch (lớp 4–5).",
 pts: [
  "<b>Lập trình</b> là viết thuật toán cho máy tính bằng ngôn ngữ máy hiểu.",
  "Với ScratchJr (lớp 1–3) hoặc Scratch (lớp 4–5), em ghép các <b>khối lệnh</b> như xếp hình.",
  "Khối bắt đầu (lá cờ xanh), khối di chuyển, khối nói, khối lặp lại.",
  "Chương trình đầu tiên: nhân vật đi tới, nói “Xin chào!”, nhảy 3 lần."
 ],
 q: [
  ["Lập trình kéo thả là gì?", ["Ghép khối lệnh như xếp hình", "Vẽ bằng bút chì"], 0, "Mỗi khối là một lệnh."],
  ["Muốn nhân vật nhảy 3 lần, dùng khối nào?", ["Lặp lại 3 lần", "Dừng"], 0, "Lặp lại giúp viết lệnh gọn."],
  ["Chương trình Scratch thường chạy khi bấm vào đâu?", ["Lá cờ xanh", "Nút tắt máy"], 0, "Khối “khi bấm lá cờ xanh” là điểm bắt đầu."]
 ],
 s: [
  { k: "cover", img: "th15-1", alt: "Các khối lệnh nhiều màu ghép vào nhau như đồ chơi", ep: "Giant colorful puzzle-like code blocks in yellow, blue, purple and orange snapping together in mid-air like toy bricks, a little boy and Robi assembling them excitedly, sparkles at each connection", sub: "Viết chương trình đầu tiên bằng cách xếp hình!" },
  { k: "concept", title: "Lập trình là gì?", big: "Lập trình là viết thuật toán cho máy tính bằng ngôn ngữ máy hiểu.", ex: ["Kéo thả", "Không cần gõ chữ. Em kéo các khối lệnh và ghép lại như xếp hình."] },
  { k: "split", img: "th15-2", alt: "Bé lớp 2 dùng máy tính bảng, bé lớp 5 dùng máy tính", ep: "A small girl using a tablet with big colorful blocks on screen and an older boy using a laptop with a cat character on screen, sitting side by side happily, Robi between them", title: "ScratchJr và Scratch", html: "<p><b>ScratchJr</b>: lớp 1–3, trên máy tính bảng.</p><p><b>Scratch</b>: lớp 4–5, trên máy tính.</p><p class='big'>Cả hai đều <b>miễn phí</b>.</p>", n: "ScratchJr tải từ kho ứng dụng (iPad, Android, Chromebook). Scratch dùng trực tiếp tại scratch.mit.edu, không bắt buộc đăng ký để thử." },
  { k: "blocks", title: "Chương trình đầu tiên", items: [["ev", "khi bấm vào lá cờ xanh"], ["mo", "đi 10 bước"], ["lo", "nói “Xin chào!” trong 2 giây"], ["co", "lặp lại 3 lần"], ["mo", "nhảy lên", 1], ["mo", "đáp xuống", 1]], note: "Bấm lá cờ xanh: nhân vật đi tới, chào, rồi nhảy 3 lần." },
  { k: "steps", title: "Các bước làm", items: [["Mở Scratch", "Bấm “Tạo”"], ["Chọn nhân vật", "Mèo hoặc nhân vật em thích"], ["Ghép khối", "Theo chương trình mẫu"], ["Bấm cờ xanh", "Xem nhân vật chạy"]] },
  { k: "try", q: "Nhân vật không chạy khi bấm cờ xanh. Em quên khối nào?", opts: ["khi bấm vào lá cờ xanh", "nói “Xin chào!”"], a: 0, why: "Thiếu khối bắt đầu thì chương trình không chạy." },
  { k: "act", title: "Lập trình ngay", items: ["Mở Scratch, chọn nhân vật.", "Ghép chương trình đầu tiên.", "Thử đổi lời chào và số lần nhảy.", "Khoe với bạn bên cạnh."], link: ["Mở Scratch", "https://scratch.mit.edu/projects/editor/"] },
  { k: "fact", text: "Scratch được tạo ra ở Viện Công nghệ Massachusetts (MIT, Mỹ). Hàng triệu bạn nhỏ trên thế giới dùng Scratch để làm trò chơi và phim hoạt hình." },
  { k: "myth", items: [["Lập trình chỉ dành cho người lớn.", "Các bạn 5–6 tuổi đã có thể lập trình bằng khối kéo thả."]] },
  { k: "recap", items: ["Lập trình là viết thuật toán cho máy tính.", "Kéo thả: ghép khối lệnh như xếp hình.", "Bắt đầu bằng khối lá cờ xanh."] }
 ]
},
{
 p: 4, t: "Ngày hội AI nhí",
 g: "Trưng bày sản phẩm, trình bày 3 phút, ôn lại toàn khóa và 3 quy tắc vàng.",
 pts: [
  "Mỗi nhóm chọn một sản phẩm: máy nhận diện đồ vật, truyện tranh có ý tưởng từ AI, chương trình Scratch, poster an toàn trên mạng.",
  "Trình bày 3 phút: sản phẩm là gì, làm được gì, em học được gì.",
  "Ôn 3 quy tắc vàng: <b>giữ bí mật</b> · <b>kiểm tra lại</b> · <b>có người lớn đi cùng</b>.",
  "Nhận bằng khen “Nhà thám hiểm AI nhí”."
 ],
 q: [
  ["3 quy tắc vàng là gì?", ["Giữ bí mật – Kiểm tra lại – Có người lớn đi cùng", "Chơi nhiều – Ngủ ít – Ăn kẹo"], 0, "Đây là 3 quy tắc an toàn khi dùng AI."],
  ["Mỗi nhóm trình bày bao lâu?", ["3 phút", "30 phút"], 0, "Ngắn gọn, đủ 3 ý."],
  ["AI là gì?", ["Công cụ do con người làm ra", "Một người bạn có cảm xúc"], 0, "AI là công cụ, em là người dùng."]
 ],
 s: [
  { k: "cover", img: "th16-1", alt: "Lớp học trang trí bóng bay, các nhóm trưng bày sản phẩm", ep: "A festive classroom fair with balloons and paper garlands, kids proudly presenting their projects at small booths: a laptop, a comic book, a poster, parents and teachers clapping, Robi wearing a party hat", sub: "Ngày hội AI nhí: khoe sản phẩm, ôn bài, nhận bằng khen!" },
  { k: "cards", title: "Chọn sản phẩm của nhóm", items: [["Máy nhận diện", "Teachable Machine nhận ra đồ dùng học tập"], ["Truyện tranh", "4 khung, ý tưởng gợi ý từ AI"], ["Chương trình Scratch", "Nhân vật chào và nhảy múa"], ["Poster an toàn", "3 quy tắc vàng trên mạng"]] },
  { k: "steps", title: "Chuẩn bị", items: [["Chọn", "Sản phẩm của nhóm"], ["Làm", "Cùng nhau, chia việc"], ["Tập nói", "3 phút"], ["Trưng bày", "Mời bạn tới xem"]] },
  { k: "cards", title: "Trình bày 3 phút", items: [["1. Đây là gì?", "Giới thiệu sản phẩm"], ["2. Nó làm gì?", "Cho mọi người xem thử"], ["3. Em học được gì?", "Một điều em nhớ nhất"]] },
  { k: "recap", title: "Cả khóa, em đã học", items: ["Máy biết học từ ví dụ, và cũng có lúc nhầm.", "Tư duy máy tính: chia nhỏ, ra lệnh rõ, lặp lại, nếu – thì, tìm quy luật.", "Trò chuyện với AI an toàn: hỏi rõ, kiểm tra lại, giữ bí mật.", "Sáng tạo cùng AI: kể chuyện, vẽ tranh, lập trình."] },
  { k: "split", img: "th16-2", alt: "Ba bạn nhỏ giơ ba tấm biển biểu tượng ổ khóa, kính lúp, trái tim", ep: "Three cheerful kids each holding up a big round sign with a simple icon: a padlock, a magnifying glass and a family heart, Robi jumping in the middle, confetti", title: "3 quy tắc vàng", html: "<p><b>Giữ bí mật</b>: không nói thông tin riêng.</p><p><b>Kiểm tra lại</b>: AI có thể sai.</p><p><b>Có người lớn đi cùng</b>: khi dùng chatbot và mạng.</p>" },
  { k: "quote", label: "Lời hứa AI nhí", text: "Em dùng AI để học và sáng tạo. Em giữ bí mật của mình. Em kiểm tra lại và hỏi người lớn khi cần." },
  { k: "split", img: "th16-3", alt: "Cả lớp vui mừng nhận bằng khen", ep: "The whole class of little kids cheering and jumping with blank certificates in hand, Robi launching confetti from a tiny cannon, festive classroom with balloons", title: "Nhà thám hiểm AI nhí", html: "<p class='big'>Chúc mừng các em đã hoàn thành khóa học!</p><p>Hẹn gặp lại ở khóa AI cho học sinh THCS.</p>" }
 ]
}
);
