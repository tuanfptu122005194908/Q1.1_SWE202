# Huong Dan Lay Groq API Key

## Tong Quan
Groq API key de ket noi voi AI model cua Groq de chamm bai tu dong trong ung dung Prompt Pal.

## Buoc 1: Dang Ky Tai Khoan Groq

1. Truy cap: https://console.groq.com/
2. Click "Sign up" neu chua co tai khoan
3. Dang ky bang:
   - Google Account
   - GitHub Account  
   - Hoac email thuong

## Buoc 2: Dang Nhap Va Xac Minh

1. Dang nhap vao: https://console.groq.com/
2. Neu can, xac minh email (check inbox va click link xac minh)
3. Hoan thanh profile neu yeu cau

## Buoc 3: Tao API Key

### Cach 1: Qua Console (De nhat)

1. Sau khi dang nhap, click menu "Keys" o ben trai
   - Hoac truy cap truc tiep: https://console.groq.com/keys
2. Click nut "Create Key" (mau xanh)
3. Dat ten cho key (vi: "Prompt Pal Key")
4. Chon permissions:
   - Mac dinh la "All" - giu nguyen
5. Click "Create Key"

### Cach 2: Qua API Keys Section

1. Trong dashboard, click "API Keys"
2. Click "Generate new key"
3. Dat ten va confirm

## Buoc 4: Luu Tru API Key

**QUAN TRONG:** API key chi hien len 1 LAN duy nhat!

1. Copy key co dinh dang: `gsk_xxxxxxxxxxxxx...`
2. Luu vao:
   - Notepad/Text file
   - Password manager
   - Hoac dung ngay trong app

## Buoc 5: Su Dung Trong Prompt Pal

1. Mo ung dung Prompt Pal
2. Khi hoi API key, paste key vao
3. Click "Xac nhan & Bat dau"

## Cac Loi Thuong Gap

### "Invalid API Key"
- Kiem tra lai key co copy day du khong
- Dam bao co "gsk_" o dau

### "Rate Limit Exceeded"
- Groq co limit mien phi (thuong 30 requests/phut)
- Cho 1-2 phut thu lai

### "Key Expired"
- Tao key moi neu can
- Xoa key cu trong security settings

## Quan Ly API Key

### Xem Key Da Tao
1. Vao: https://console.groq.com/keys
2. Co the xem ten key da tao
3. Khong the xem gia tri key (chi co ten)

### Xoa Key
1. Trong Keys section
2. Click delete icon ben canh key
3. Confirm deletion

### Tao Key Moi
- Co the tao nhieu key cho cac project khac nhau
- De quan ly va bao mat

## Security Tips

1. **KHONG CHIA SE** API key voi bat ky ai
2. **KHONG COMMIT** key vao git/public repository
3. **KHONG DUA** key vao frontend code (chi dung trong environment variables)
4. **THAY DOI** key neu nghi bi leak
5. **SU DUNG** key moi cho moi production environment

## Environment Variables Setup (Cho Developer)

Neu ban la developer, setup environment variable:

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

**Lu y:** API key Groq mien phi co limit, neu can dung cao cap hay xem pricing plans.
