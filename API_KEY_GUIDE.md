# Hướng Dẫn Lấy Groq API Key

## Tổng Quan

Groq API key để kết nối với AI model của Groq để chấm bài tự động trong ứng dụng Prompt Pal.

## Bước 1: Đăng Ký Tài Khoản Groq

1. Truy cập: https://console.groq.com/
2. Click "Sign up" nếu chưa có tài khoản
3. Đăng ký bằng:
   - Google Account
   - GitHub Account
   - Hoặc email thường

## Bước 2: Đăng Nhập Và Xác Minh

1. Đăng nhập vào: https://console.groq.com/
2. Nếu cần, xác minh email (check inbox và click link xác minh)
3. Hoàn thành profile nếu yêu cầu

## Bước 3: Tạo API Key

### Cách 1: Qua Console (Dễ nhất)

1. Sau khi đăng nhập, click menu "Keys" ở bên trái
   - Hoặc truy cập trực tiếp: https://console.groq.com/keys
2. Click nút "Create Key" (màu xanh)
3. Đặt tên cho key (vị dụ: "Prompt Pal Key")
4. Chọn permissions:
   - Mặc định là "All" - giữ nguyên
5. Click "Create Key"

### Cách 2: Qua API Keys Section

1. Trong dashboard, click "API Keys"
2. Click "Generate new key"
3. Đặt tên và confirm

## Bước 4: Lưu Trữ API Key

**QUAN TRỌNG:** API key chỉ hiện lên 1 LẦN duy nhất!

1. Copy key có định dạng: `gsk_xxxxxxxxxxxxx...`
2. Lưu vào:
   - Notepad/Text file
   - Password manager
   - Hoặc dùng ngay trong app

## Bước 5: Sử Dụng Trong Prompt Pal

1. Mở ứng dụng Prompt Pal
2. Khi hỏi API key, paste key vào
3. Click "Xác nhận & Bắt đầu"

## Các Lỗi Thường Gặp

### "Invalid API Key"

- Kiểm tra lại key có copy đầy đủ không
- Đảm bảo có "gsk\_" ở đầu

### "Rate Limit Exceeded"

- Groq có limit miễn phí (thường 30 requests/phút)
- Chờ 1-2 phút thử lại

### "Key Expired"

- Tạo key mới nếu cần
- Xóa key cũ trong security settings

## Quản Lý API Key

### Xem Key Đã Tạo

1. Vào: https://console.groq.com/keys
2. Có thể xem tên key đã tạo
3. Không thể xem giá trị key (chỉ có tên)

### Xóa Key

1. Trong Keys section
2. Click delete icon bên cạnh key
3. Confirm deletion

### Tạo Key Mới

- Có thể tạo nhiều key cho các project khác nhau
- Để quản lý và bảo mật

## Security Tips

1. **KHÔNG CHIA SẺ** API key với bất kỳ ai
2. **KHÔNG COMMIT** key vào git/public repository
3. **KHÔNG ĐƯA** key vào frontend code (chỉ dùng trong environment variables)
4. **THAY ĐỔI** key nếu nghi bị leak
5. **SỬ DỤNG** key mới cho mỗi production environment

## Environment Variables Setup (Cho Developer)

Nếu bạn là developer, setup environment variable:

```
# .env file
VITE_GROQ_API_KEY=gsk_your_actual_key_here
```

Trong code:

```javascript
const apiKey = import.meta.env.VITE_GROQ_API_KEY;
```

## Support

- Groq Documentation: https://console.groq.com/docs
- Support Email: support@groq.com
- Discord Community: https://discord.gg/groq

---

**Lưu ý:** API key Groq miễn phí có limit, nếu cần dùng cao cấp hãy xem pricing plans.
