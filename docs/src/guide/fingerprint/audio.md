# Hardware: Audio

Tương tự với Canvas, WebGL là đặc trưng của các loại card đồ họa, thì Audio context là đặc trưng của card âm thanh.

Việc xử lý cũng tương tự là sử dụng **kĩ thuật noise** để âm thanh sau khi render khác với âm thanh gốc, từ đó tạo sự khác nhau về fingerprint.

## Đặc điểm của kĩ thuật noise

- Kĩ thuật noise không thể biến hình ảnh sau render của card đồ họa A giống hệt với hình ảnh sau render của card đồ họa B, giống như việc phẫu thuật thẩm mỹ, không thể phẫu thuật người A thành người B được (tất cả chi tiết từng chân tơ kẽ tóc), mà chỉ làm người A lúc sau khác với người A lúc trước.

- Kĩ thuật này giúp tạo nên sự đa dạng và tính duy nhất rất lớn cho fingerprint.

- Kĩ thuật noise có thể bị phát hiện bởi các hệ thống lớn có thu thập big data để kiểm tra
