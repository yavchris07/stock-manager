// src/infrastructure/mocks/index.ts

export const mockUser = {
  id: "u1",
  name: "Admin User",
  email: "admin@stock.com",
  role: "admin",
  avatar: "https://ui-avatars.com/api/?name=Admin+User"
};

export const mockStats = {
  totalSales: "12,450 €",
  totalStock: "1,204 Items",
  lowStockAlerts: 5,
  pendingOrders: 12,
  salesTrend: [120, 230, 180, 340, 290, 400, 450], // Chart data
};

export const mockProducts = [
  { id: "p1", name: "MacBook Pro M3", sku: "APL-M3-001", price: 1499.00, stock: 12, category: "Electronics", image: "https://via.placeholder.com/100" },
  { id: "p2", name: "Sony WH-1000XM5", sku: "SNY-HP-002", price: 349.00, stock: 45, category: "Audio", image: "https://via.placeholder.com/100" },
  { id: "p3", name: "Logitech MX Master 3", sku: "LOG-MSE-003", price: 99.00, stock: 3, category: "Accessories", image: "https://via.placeholder.com/100" }, // Low stock
];

export const mockWarehouses = [
  { id: "w1", name: "Main Warehouse", location: "Paris, FR", capacity: 5000, currentStock: 1204 },
  { id: "w2", name: "Distribution Center", location: "Lyon, FR", capacity: 2000, currentStock: 850 },
];

export const mockRecentActivity = [
  { id: 1, user: "Jean D.", action: "Updated stock for MacBook Pro", time: "2 min ago" },
  { id: 2, user: "System", action: "Low stock alert for Logitech Mouse", time: "1 hour ago" },
  { id: 3, user: "Marie L.", action: "Created new Sale #INV-2024-001", time: "3 hours ago" },
];

export const mockSales = [
  { id: "s1", invoice: "INV-2024-001", customer: "Tech Solutions Inc", total: 4500.00, date: "2023-10-25", status: "Paid" },
  { id: "s2", invoice: "INV-2024-002", customer: "John Doe", total: 349.00, date: "2023-10-24", status: "Pending" },
];


// src/infrastructure/mocks/index.ts (Append this)

export const mockUsers = [
  { id: "u1", name: "Admin User", email: "admin@stock.com", role: "Admin", status: "Active" },
  { id: "u2", name: "Warehouse Manager", email: "warehouse@stock.com", role: "Manager", status: "Active" },
  { id: "u3", name: "Sales Agent", email: "sales@stock.com", role: "User", status: "Inactive" },
];

export const mockSuppliers = [
  { id: "sup1", name: "Apple Inc.", contact: "tim@apple.com", phone: "+1 555 0192", status: "Verified" },
  { id: "sup2", name: "Sony Corp", contact: "support@sony.com", phone: "+1 555 0193", status: "Verified" },
];

export const mockInventoryLogs = [
  { id: "inv1", date: "2023-10-25", type: "Adjustment", product: "MacBook Pro", change: -2, reason: "Damaged", user: "Admin" },
  { id: "inv2", date: "2023-10-24", type: "Count", product: "Sony WH-1000XM5", change: 0, reason: "Monthly Audit", user: "Manager" },
];