# 🍠 Hướng dẫn web Khoai Dẻo

## Cấu trúc thư mục

```
KhoaiDeo/
├── index.html                    ← Trang chủ
├── assets/
│   ├── css/style.css             ← Style (không cần đụng)
│   ├── js/main.js                ← Script (không cần đụng)
│   └── img/                      ← Để ảnh bìa vào đây
└── truyen/
    ├── day-dua/
    │   ├── index.html            ← Mục lục Dây Dưa
    │   ├── chuong-01.html
    │   └── chuong-02.html        ← Tạo thêm khi có chương mới
    └── long-hanh-khoa/
        ├── index.html
        └── chuong-01.html
```

---

## ✦ Thêm chương mới (siêu dễ!)

**Bước 1:** Copy file `chuong-01.html` → đặt tên `chuong-02.html`

**Bước 2:** Mở `chuong-02.html`, sửa 4 chỗ:
- Thẻ `<title>`: đổi "Chương 1" → "Chương 2"
- Thẻ `<h2>`: đổi "Chương 1" → "Chương 2"
- Nút chương trước: đổi `class="disabled"` → xóa disabled, href="chuong-01.html"
- Nút chương sau: đổi href sang chương tiếp hoặc thêm `class="disabled"` nếu là chương cuối
- Dán nội dung vào trong `<div class="chapter-body">`

**Bước 3:** Mở `index.html` của truyện, thêm dòng này vào danh sách chương:
```html
<a href="chuong-02.html" class="chapter-item">
  <span class="chapter-num">Chương 2</span>
  <span class="chapter-name">Tên chương (nếu có)</span>
  <span class="chapter-arrow">›</span>
</a>
```

**Bước 4:** Upload file mới lên GitHub → xong!

---

## ✦ Thêm ảnh bìa truyện

**Bước 1:** Lưu ảnh vào `assets/img/` — đặt tên dễ nhớ, ví dụ `day-dua.jpg`

**Bước 2:** Mở `index.html` trang chủ, tìm card truyện Dây Dưa:
```html
<!-- XÓA đoạn này: -->
<div class="novel-cover-placeholder">
  <span class="cover-icon">✦</span>
  <span class="cover-title">Dây Dưa</span>
</div>

<!-- THAY bằng: -->
<img src="assets/img/day-dua.jpg" class="novel-cover" alt="Dây Dưa">
```

**Bước 3:** Làm tương tự trong `truyen/day-dua/index.html` (tìm `novel-header-cover-ph`)

---

## ✦ Thêm truyện mới

**Bước 1:** Tạo thư mục mới trong `truyen/`, ví dụ `truyen/ten-truyen-moi/`

**Bước 2:** Copy toàn bộ file từ `truyen/day-dua/` vào

**Bước 3:** Mở từng file, thay "Dây Dưa" → tên truyện mới, "day-dua" → tên thư mục

**Bước 4:** Mở `index.html` trang chủ, copy 1 card truyện và đổi tên/link

---

## ✦ Sửa màu sắc

Mở `assets/css/style.css`, tìm phần `:root` ở đầu file:
```css
:root {
  --purple:      #9B7EC8;   ← màu tím chính
  --purple-deep: #6B4E9E;   ← tím đậm
  --lavender-bg: #F0EBF8;   ← màu nền
}
```

---

## ✦ Gắn tên miền khoaideo.com

**Sau khi mua domain tại Namecheap/Cloudflare:**

1. Tạo file `CNAME` (không có đuôi) trong thư mục gốc, nội dung:
   ```
   khoaideo.com
   ```

2. Vào trang quản lý domain, thêm DNS record:
   - Type: `CNAME`
   - Name: `www`
   - Value: `mimosa89.github.io`

3. Vào GitHub repo → Settings → Pages → Custom domain → nhập `khoaideo.com`

4. Chờ 10-30 phút là xong!

---

## ✦ Upload lên GitHub

**Cách nhanh nhất — kéo thả trên web:**
1. Vào `github.com/mimosa89/KhoaiDeo`
2. Kéo thả file/thư mục vào trang
3. Bấm "Commit changes"

**Hoặc dùng GitHub Desktop** nếu muốn upload nhiều file cùng lúc.
