---
outline: deep
---

# Kiểm Soát Truy Cập

Framework được tích hợp sẵn hai loại phương pháp kiểm soát truy cập:

- Xác định xem một menu hoặc nút có thể được truy cập dựa trên vai trò người dùng hay không
- Xác định xem một menu hoặc nút có thể được truy cập thông qua một API hay không

## Kiểm Soát Truy Cập Frontend

**Nguyên tắc triển khai**: Quyền cho các route được mã hóa cứng (hardcoded) ở frontend, chỉ định những quyền nào là bắt buộc để xem một số route nhất định. Chỉ các route chung được khởi tạo, còn các route yêu cầu quyền thì không được thêm vào bảng route. Sau khi đăng nhập hoặc thu được vai trò người dùng thông qua các phương tiện khác, các vai trò này được sử dụng để duyệt qua bảng route nhằm tạo ra một bảng route mà vai trò đó có thể truy cập. Bảng này sau đó được thêm vào instance router bằng cách sử dụng `router.addRoute`, đạt được việc lọc quyền.

**Nhược điểm**: Các quyền tương đối kém linh hoạt; nếu backend thay đổi vai trò, frontend cần được điều chỉnh tương ứng. Cách này phù hợp với các hệ thống có vai trò tương đối cố định.

### Các bước

- Đảm bảo chế độ hiện tại được đặt thành kiểm soát truy cập frontend.

Điều chỉnh `preferences.ts` trong thư mục ứng dụng tương ứng để đảm bảo `accessMode='frontend'`.

```ts
import { defineOverridesPreferences } from '@vben/preferences';

export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    // Giá trị mặc định, tùy chọn
    accessMode: 'frontend',
  },
});
```

- Cấu hình quyền truy cập route.

#### Nếu không được cấu hình, nó sẽ hiển thị mặc định.

```ts {3}
 {
    meta: {
      authority: ['super'],
    },
},
```

- Đảm bảo các vai trò được trả về bởi giao diện (interface) khớp với các quyền trong bảng route.

Bạn có thể tìm trong `src/store/auth` trong ứng dụng để tìm đoạn code sau:

```ts
// Thiết lập thông tin người dùng đăng nhập, đảm bảo rằng userInfo.roles là một mảng và chứa các quyền từ bảng route
// Ví dụ: userInfo.roles=['super', 'admin']
authStore.setUserInfo(userInfo);
```

Đến thời điểm này, cấu hình đã hoàn tất. Bạn cần đảm bảo rằng các vai trò được trả về bởi giao diện sau khi đăng nhập khớp với các quyền trong bảng route; nếu không, quyền truy cập sẽ không khả thi.

### Menu Hiển Thị Nhưng Bị Cấm Truy Cập

Đôi khi, chúng ta cần menu hiển thị nhưng cấm truy cập vào nó. Điều này có thể đạt được bằng cách đặt `menuVisibleWithForbidden` thành `true`. In this case, Trong trường hợp này, menu sẽ hiển thị, nhưng quyền truy cập sẽ bị cấm, chuyển hướng đến trang 403.

```ts
{
    meta: {
      menuVisibleWithForbidden: true,
    },
},
```

## Kiểm Soát Truy Cập Backend

**Nguyên tắc triển khai**: Điều này đạt được bằng cách tạo động một bảng routing thông qua một API, API này trả về dữ liệu tuân theo một cấu trúc nhất định. Frontend xử lý dữ liệu này thành một cấu trúc dễ nhận biết, sau đó thêm nó vào routing instance bằng cách sử dụng `router.addRoute`, hiện thực hóa việc tạo động các quyền.

**Nhược điểm**: Backend cần cung cấp một cấu trúc dữ liệu đáp ứng các tiêu chuẩn, và frontend cần xử lý cấu trúc này. Điều này phù hợp với các hệ thống có các quyền phức tạp hơn.

### Các bước

- Đảm bảo chế độ hiện tại được đặt thành kiểm soát truy cập backend.

Điều chỉnh  `preferences.ts` trong thư mục ứng dụng tương ứng để đảm bảo `accessMode='backend'`.

```ts
import { defineOverridesPreferences } from '@vben/preferences';

export const overridesPreferences = defineOverridesPreferences({
  // ghi đè
  app: {
  // Giá trị mặc định, tùy chọn
    accessMode: 'backend',
  },
});
```

- Đảm bảo cấu trúc của dữ liệu menu được trả về bởi giao diện là chính xác.

Bạn có thể tìm trong `src/router/access.ts` trong ứng dụng để tìm đoạn code sau:

```ts
async function generateAccess(options: GenerateMenuAndRoutesOptions) {
  return await generateAccessible(preferences.app.accessMode, {
    fetchMenuListAsync: async () => {
      // This interface is for the menu data returned by the backend
      return await getAllMenus();
    },
  });
}
```

- Giao diện trả về dữ liệu menu, xem phần bình luận để biết giải thích.

::: details Ví dụ về Giao diện trả về Dữ liệu Menu

```ts
const dashboardMenus = [
  {
    // Here, 'BasicLayout' is hardcoded and cannot be changed
    component: 'BasicLayout',
    meta: {
      order: -1,
      title: 'page.dashboard.title',
    },
    name: 'Dashboard',
    path: '/',
    redirect: '/analytics',
    children: [
      {
        name: 'Analytics',
        path: '/analytics',
        // Here is the path of the page, need to remove 'views/' and '.vue'
        component: '/dashboard/analytics/index',
        meta: {
          affixTab: true,
          title: 'page.dashboard.analytics',
        },
      },
      {
        name: 'Workspace',
        path: '/workspace',
        component: '/dashboard/workspace/index',
        meta: {
          title: 'page.dashboard.workspace',
        },
      },
    ],
  },
];
```

:::

Đến thời điểm này, cấu hình đã hoàn tất. Bạn cần đảm bảo rằng sau khi đăng nhập, định dạng của menu được trả về bởi giao diện là chính xác; nếu không, quyền truy cập sẽ không khả thi.

## Kiểm Soát Chi Tiết Các Nút

Trong một số trường hợp, chúng ta cần kiểm soát việc hiển thị các nút với độ chi tiết cao. Chúng ta có thể kiểm soát việc hiển thị các nút thông qua các giao diện hoặc vai trò.

### Code Phân Quyền

Code phân quyền là code được trả về bởi giao diện. Logic để xác định xem một nút có được hiển thị hay không nằm ở `src/store/auth`:

```ts
const [fetchUserInfoResult, accessCodes] = await Promise.all([
  fetchUserInfo(),
  getAccessCodes(),
]);

userInfo = fetchUserInfoResult;
authStore.setUserInfo(userInfo);
accessStore.setAccessCodes(accessCodes);
```

Tìm giao diện `getAccessCodes` tương ứng, giao diện này có thể được điều chỉnh theo logic nghiệp vụ.

Cấu trúc dữ liệu được trả về bởi code phân quyền là một mảng các chuỗi, ví dụ: `['AC_100100', 'AC_100110', 'AC_100120', 'AC_100010']`

Với các code phân quyền, bạn có thể sử dụng component `AccessControl` và API được cung cấp bởi `@vben/access` để hiển thị và ẩn các nút.

#### Phương thức Component

```vue
<script lang="ts" setup>
import { AccessControl, useAccess } from '@vben/access';

const { accessMode, hasAccessByCodes } = useAccess();
</script>

<template>
  <!-- You need to specify type="code" -->
  <AccessControl :codes="['AC_100100']" type="code">
    <Button> Visible to Super account ["AC_1000001"] </Button>
  </AccessControl>
  <AccessControl :codes="['AC_100030']" type="code">
    <Button> Visible to Admin account ["AC_100010"] </Button>
  </AccessControl>
  <AccessControl :codes="['AC_1000001']" type="code">
    <Button> Visible to User account ["AC_1000001"] </Button>
  </AccessControl>
  <AccessControl :codes="['AC_100100', 'AC_100010']" type="code">
    <Button>
      Visible to Super & Admin account ["AC_100100","AC_1000001"]
    </Button>
  </AccessControl>
</template>
```

#### Phương thức API

```vue
<script lang="ts" setup>
import { AccessControl, useAccess } from '@vben/access';

const { hasAccessByCodes } = useAccess();
</script>

<template>
  <Button v-if="hasAccessByCodes(['AC_100100'])">
    Visible to Super account ["AC_1000001"]
  </Button>
  <Button v-if="hasAccessByCodes(['AC_100030'])">
    Visible to Admin account ["AC_100010"]
  </Button>
  <Button v-if="hasAccessByCodes(['AC_1000001'])">
    Visible to User account ["AC_1000001"]
  </Button>
  <Button v-if="hasAccessByCodes(['AC_100100', 'AC_1000001'])">
    Visible to Super & Admin account ["AC_100100","AC_1000001"]
  </Button>
</template>
```

#### Phương thức Directive

> Directive hỗ trợ binding một hoặc nhiều code phân quyền. Đối với một code duy nhất, bạn có thể truyền một chuỗi hoặc một mảng chứa một code phân quyền và đối với nhiều code phân quyền, bạn có thể truyền một mảng.

```vue
<template>
  <Button class="mr-4" v-access:code="'AC_100100'">
    Visible to Super account 'AC_100100'
  </Button>
  <Button class="mr-4" v-access:code="['AC_100030']">
    Visible to Admin account ["AC_100010"]
  </Button>
  <Button class="mr-4" v-access:code="['AC_1000001']">
    Visible to User account ["AC_1000001"]
  </Button>
  <Button class="mr-4" v-access:code="['AC_100100', 'AC_1000001']">
    Visible to Super & Admin account ["AC_100100","AC_1000001"]
  </Button>
</template>
```

### Vai trò

Phương thức xác định vai trò không yêu cầu code phân quyền được trả về bởi giao diện; nó trực tiếp xác định xem các nút có được hiển thị hay không dựa trên vai trò.

#### Phương thức Component

```vue
<script lang="ts" setup>
import { AccessControl } from '@vben/access';
</script>

<template>
  <AccessControl :codes="['super']">
    <Button> Visible to Super account </Button>
  </AccessControl>
  <AccessControl :codes="['admin']">
    <Button> Visible to Admin account </Button>
  </AccessControl>
  <AccessControl :codes="['user']">
    <Button> Visible to User account </Button>
  </AccessControl>
  <AccessControl :codes="['super', 'admin']">
    <Button> Super & Visible to Admin account </Button>
  </AccessControl>
</template>
```

#### Phương thức API

```vue
<script lang="ts" setup>
import { useAccess } from '@vben/access';

const { hasAccessByRoles } = useAccess();
</script>

<template>
  <Button v-if="hasAccessByRoles(['super'])"> Visible to Super account </Button>
  <Button v-if="hasAccessByRoles(['admin'])"> Visible to Admin account </Button>
  <Button v-if="hasAccessByRoles(['user'])"> Visible to User account </Button>
  <Button v-if="hasAccessByRoles(['super', 'admin'])">
    Super & Visible to Admin account
  </Button>
</template>
```

#### Phương thức Directive

> Directive hỗ trợ binding một hoặc nhiều code phân quyền. Đối với một code duy nhất, bạn có thể truyền một chuỗi hoặc một mảng chứa một code phân quyền và đối với nhiều code phân quyền, bạn có thể truyền một mảng.

```vue
<template>
  <Button class="mr-4" v-access:role="'super'">
    Visible to Super account
  </Button>
  <Button class="mr-4" v-access:role="['admin']">
    Visible to Admin account
  </Button>
  <Button class="mr-4" v-access:role="['user']">
    Visible to User account
  </Button>
  <Button class="mr-4" v-access:role="['super', 'admin']">
    Super & Visible to Admin account
  </Button>
</template>
```
