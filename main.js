// Câu 1: Constructor function Product để tạo đối tượng sản phẩm
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Mảng products chứa ít nhất 6 sản phẩm, thuộc ít nhất 2 danh mục
const products = [
    new Product(1, "iPhone 15 Pro Max", 34000000, 10, "Smartphone", true),
    new Product(2, "Samsung Galaxy S24 Ultra", 32000000, 7, "Smartphone", true),
    new Product(3, "AirPods Max", 14500000, 0, "Accessories", false),
    new Product(4, "MacBook Pro M3", 45000000, 5, "Laptop", true),
    new Product(5, "Apple Watch Series 10", 11900000, 20, "Smartwatch", true),
    new Product(6, "iPad Air M2", 16900000, 3, "Tablet", true),
    new Product(7, "Sony WH-1000XM5", 9500000, 12, "Accessories", true)  // Thêm để đủ đa dạng
];

console.log("Câu 1 & 2 - Danh sách sản phẩm:");
console.table(products);  // Hiển thị dưới dạng bảng trong Console

// Câu 3: Mảng chỉ chứa name và price
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3 - Mảng name & price:", nameAndPrice);

// Câu 4: Sản phẩm còn hàng (quantity > 0)
const inStock = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:", inStock.map(p => p.name));

// Câu 5: Có ít nhất 1 sản phẩm giá > 30 triệu không?
const hasExpensive = products.some(p => p.price > 30000000);
console.log("Câu 5 - Có sản phẩm > 30 triệu?:", hasExpensive);

// Câu 6: Tất cả sản phẩm Accessories có đang bán không?
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

console.log("Câu 6 - Tất cả Accessories đang bán?:", allAccessoriesAvailable);

// Câu 7: Tổng giá trị kho hàng
const totalInventoryValue = products.reduce((sum, p) => {
    return sum + (p.price * p.quantity);
}, 0);

console.log("Câu 7 - Tổng giá trị kho:", totalInventoryValue.toLocaleString() + " VNĐ");

// Câu 8: for...of - In tên - danh mục - trạng thái
console.log("Câu 8 - Duyệt for...of:");
for (const p of products) {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
}

// Câu 9: for...in - In tên thuộc tính và giá trị (ví dụ sản phẩm đầu tiên)
console.log("\nCâu 9 - for...in với sản phẩm đầu tiên:");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// Câu 10: Danh sách tên sản phẩm đang bán VÀ còn hàng
const availableAndInStock = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("\nCâu 10 - Sản phẩm đang bán và còn hàng:", availableAndInStock);