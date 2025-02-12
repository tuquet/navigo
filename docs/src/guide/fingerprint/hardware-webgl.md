# Hardware: WebGL

WebGL là một API Javascript giúp trình duyệt render các khối 3D (như một khối tam giác 3D, hình hộp…), mỗi loại card khi render cũng sẽ hơi khác nhau một chút, thuật toán khử răng cưa, làm mịn ảnh cũng khác nhau nên đây cũng là một trong những thông số giúp xác định sự khác nhau giữa các loại card màn hình. Việc render 3D phức tạp hơn render 2D rất nhiều và có khá nhiều tùy chỉnh nâng cao nhất là đối với các loại card rời hiện nay, nên việc thêm noise đúng kỹ thuật trong quá trình render là khá tốt đối với nhiều website.

## Đặc điểm của kĩ thuật noise

- Kĩ thuật noise có thể tạo ra thiết kế 3D khác nhau từ danh sách card đồ họa mà chúng tôi đã cung cấp nhằm tạo ra sự khác biệt giữa các loại card giúp tăng tính duy nhất cho fingerprint.

- Kĩ thuật noise có thể bị phát hiện bởi các hệ thống lớn có thu thập big data để kiểm tra

::: tip Ví dụ đơn giản

Facebook có thể sử dụng JavaScript để kiểm tra xem trình duyệt của người dùng có hỗ trợ WebGL hay không. Thu thập thông tin về card đồ họa của người dùng thông qua WebGL. Xác định phiên bản WebGL của trình duyệt. Phân tích hiệu suất WebGL. Theo dõi lỗi WebGL.

Từ đó họ có thể xác định được thông tin về card đồ họa của người dùng, từ đó xác định được người dùng đó là ai.

:::
