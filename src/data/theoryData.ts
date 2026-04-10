export interface TheorySection {
  id: string;
  title: string;
  content: string;
}

export const theorySections: TheorySection[] = [
  {
    id: "concept",
    title: "1. Khái niệm Prompt Engineering",
    content: `**Prompt Engineering** là quá trình thiết kế và viết các câu lệnh (input) một cách rõ ràng, chính xác để AI tạo ra kết quả (output) đúng và hữu ích nhất.

Hiệu quả của AI phụ thuộc rất lớn vào cách lập trình viên đưa ra yêu cầu.`,
  },
  {
    id: "techniques",
    title: "2. Các kỹ thuật Prompt phổ biến",
    content: `**Instruction-based (Theo hướng dẫn):** Đưa ra yêu cầu trực tiếp, rõ ràng. VD: "Viết phương thức sắp xếp mảng trong Java"

**Zero-shot (Không ví dụ):** Yêu cầu AI thực hiện nhiệm vụ mà không cần cung cấp ví dụ

**Few-shot (Có ví dụ):** Cung cấp một vài ví dụ để AI hiểu cách trả lời mong muốn

**Chain-of-thought (Chuỗi suy nghĩ):** Yêu cầu AI giải thích và giải từng bước → phù hợp bài toán phức tạp

**Role-based (Theo vai trò):** Gán vai trò cho AI để điều chỉnh cách trả lời. VD: "Đóng vai giảng viên Java 10 năm kinh nghiệm"

**Contextual (Theo ngữ cảnh):** Cung cấp thông tin nền để AI đưa ra kết quả phù hợp thực tế`,
  },
  {
    id: "sdlc",
    title: "3. Ứng dụng trong SDLC",
    content: `Prompt Engineering hỗ trợ toàn bộ vòng đời phát triển phần mềm:

**Lập kế hoạch (Planning):** Phân tích yêu cầu, đề xuất kiến trúc hệ thống

**Phát triển (Development):** Sinh code, hoàn thiện hàm, refactor code

**Kiểm thử (Testing):** Tạo test case (unit test, integration test)

**Bảo trì (Maintenance):** Phát hiện bug, debug, tối ưu hiệu suất, cập nhật tài liệu`,
  },
  {
    id: "best-practices",
    title: "4. Best Practices",
    content: `Khi sử dụng Prompt Engineering, cần chú ý:

✅ **Rõ ràng, cụ thể** → tránh yêu cầu mơ hồ

✅ **Cung cấp ngữ cảnh** → giúp AI hiểu đúng vấn đề

✅ **Thử nghiệm và cải thiện** → điều chỉnh prompt nếu kết quả chưa tốt

✅ **Kiểm tra lại kết quả** → không phụ thuộc hoàn toàn vào AI`,
  },
  {
    id: "exam-tips",
    title: "5. Tips đi thi (rất quan trọng)",
    content: `📝 Viết câu ngắn thôi (đừng cố dài)

📝 Dùng cấu trúc lặp lại: "This helps...", "It is used to..."

📝 Nếu bí → viết keyword cũng có điểm

📝 Nhớ mấy cụm quan trọng:
- reduce overfitting
- improve performance
- easy to use
- save cost`,
  },
];
