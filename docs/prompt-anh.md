# Bộ prompt ảnh cho Google Flow / Gemini

Trang web chạy được khi chưa có ảnh: chỗ thiếu ảnh hiện khung minh họa. Có ảnh thật thì trang tự dùng ảnh.

## File dùng với extension h2dev_flow (mỗi dòng `tên-file.jpg | prompt`)
| File | Số ảnh | Khổ |
|---|---|---|
| `prompt-anh-trang-chu-4x3.txt` | 5 | 4:3 |
| `prompt-anh-thcs-16x9.txt` | 24 | 16:9 |
| `prompt-anh-tieu-hoc-16x9.txt` | 40 | 16:9 |
| `prompt-anh-thpt-16x9.txt` | 31 | 16:9 |
| `prompt-anh-di-lam-16x9.txt` | 32 | 16:9 |

- Mở tab Google Flow, chọn chế độ **Tạo hình ảnh** (không phải video) và đúng tỉ lệ khung trước khi chạy.
- File `.csv` cùng tên: bảng đối chiếu tên file, mô tả tiếng Việt, prompt đầy đủ.

## Mỗi ảnh một diện mạo riêng
Bộ cũ gắn chung một đoạn phong cách rất dài nên ảnh ra na ná nhau. Bộ mới:
- Phần chung rút gọn: hoạt hình 3D kiểu phim chiếu rạp, nhân vật người Việt, không chữ, không logo.
- Mỗi ảnh xoay vòng **góc máy** (toàn cảnh, cận cảnh, từ trên xuống, qua vai, mô hình thu nhỏ…), **ánh sáng** (sáng sớm, hoàng hôn, đèn đêm…), **bảng màu** (cam – xanh ngọc, pastel, xanh navy – vàng…) và **chất liệu** (bóng mịn, đất sét, đồ chơi thu nhỏ, giấy cắt lớp, nét cọ).
- Cảnh đã tự nêu góc máy, ánh sáng thì giữ nguyên.
- Rô-bi chỉ xuất hiện khoảng một nửa số ảnh (luôn giữ khi Rô-bi là nhân vật chính).

## Tạo lại prompt
Sửa cảnh (trường `ep`) trong file bài học, rồi chạy: `python3 tools/tao_prompt_anh.py`. Cảnh THCS và trang chủ lấy từ `prompt-anh.csv`.

## Đưa ảnh lên web
1. Giảm còn khoảng 1600 px chiều ngang, dưới 400 KB (squoosh.app miễn phí).
2. Repo → thư mục `assets/img` → **Add file → Upload files** → kéo ảnh vào → **Commit changes**. 1–2 phút sau web tự cập nhật.
