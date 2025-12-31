export type Tenant = {
  id: string;
  name: string;
  timezone: string;
};

export type User = {
  id: string;
  name: string;
  role: "Owner" | "Agent";
  phone: string;
};

export type Message = {
  id: string;
  from: "agent" | "customer" | "ai";
  content: string;
  time: string;
};

export type Conversation = {
  id: string;
  customerName: string;
  phone: string;
  channel: "WhatsApp" | "Instagram" | "Facebook";
  status: "open" | "pending" | "closed";
  sentiment: "هادئ" | "متوتر" | "غاضب";
  lastMessageAt: string;
  messages: Message[];
};

export type Customer = {
  id: string;
  name: string;
  phone: string;
  ordersCount: number;
  lastContact: string;
};

export type Order = {
  id: string;
  status: "جارٍ المعالجة" | "مكتمل" | "ملغي";
  amount: number;
  date: string;
  customer: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
};

export type Workflow = {
  id: string;
  name: string;
  status: "نشط" | "متوقف";
  channel: string;
  lastRun: string;
};

export type Report = {
  id: string;
  name: string;
  value: string;
  change: string;
};

const delay = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms));

const tenant: Tenant = {
  id: "tenant-1",
  name: "متجر النخبة",
  timezone: "Asia/Riyadh",
};

const mockUsers: User[] = [
  { id: "1", name: "سارة المالكي", role: "Owner", phone: "+966500000001" },
  { id: "2", name: "أحمد الشهري", role: "Agent", phone: "+966500000002" },
];

const mockConversations: Conversation[] = [
  {
    id: "c1",
    customerName: "ليان",
    phone: "+966511234567",
    channel: "WhatsApp",
    status: "open",
    sentiment: "هادئ",
    lastMessageAt: "قبل دقائق",
    messages: [
      { id: "m1", from: "customer", content: "أحتاج مساعدة في طلبي الأخير.", time: "10:20" },
      { id: "m2", from: "agent", content: "بكل سرور، هل يمكن تزويدي برقم الطلب؟", time: "10:21" },
    ],
  },
  {
    id: "c2",
    customerName: "راكان",
    phone: "+966533332222",
    channel: "WhatsApp",
    status: "pending",
    sentiment: "متوتر",
    lastMessageAt: "قبل ساعة",
    messages: [
      { id: "m1", from: "customer", content: "متى يصل الطلب؟", time: "09:10" },
    ],
  },
];

const mockCustomers: Customer[] = [
  { id: "cust1", name: "ليان القحطاني", phone: "+966511234567", ordersCount: 4, lastContact: "اليوم" },
  { id: "cust2", name: "راكان العتيبي", phone: "+966533332222", ordersCount: 2, lastContact: "أمس" },
  { id: "cust3", name: "مها الشهراني", phone: "+966544445555", ordersCount: 7, lastContact: "قبل 3 أيام" },
];

const mockOrders: Order[] = [
  { id: "1001", status: "جارٍ المعالجة", amount: 320, date: "2024-12-28", customer: "ليان" },
  { id: "1002", status: "مكتمل", amount: 540, date: "2024-12-29", customer: "راكان" },
  { id: "1003", status: "ملغي", amount: 120, date: "2024-12-25", customer: "مها" },
];

const mockProducts: Product[] = [
  { id: "p1", name: "حقيبة جلد فاخرة", category: "إكسسوارات", price: 299, stock: 18 },
  { id: "p2", name: "عباية رسمية", category: "أزياء", price: 450, stock: 5 },
  { id: "p3", name: "عطر شرقي", category: "عطور", price: 199, stock: 42 },
];

const mockWorkflows: Workflow[] = [
  { id: "w1", name: "تأكيد الدفع", status: "نشط", channel: "WhatsApp", lastRun: "قبل ساعة" },
  { id: "w2", name: "تذكير السلة", status: "نشط", channel: "WhatsApp", lastRun: "أمس" },
];

const dashboardReports: Report[] = [
  { id: "r1", name: "معدل الرضا", value: "92%", change: "+3%" },
  { id: "r2", name: "متوسط زمن الرد", value: "42 ثانية", change: "-8%" },
  { id: "r3", name: "قنوات واتساب", value: "1", change: "ثابت" },
];

export async function login(phone: string) {
  await delay();
  return { user: mockUsers[0], tenant };
}

export async function register(name: string, storeName: string) {
  await delay();
  return { user: { id: "3", name, role: "Owner", phone: "+966500000003" }, tenant: { ...tenant, name: storeName } };
}

export async function getTenant() {
  await delay();
  return tenant;
}

export async function getDashboardStats() {
  await delay();
  return {
    kpis: [
      { label: "إجمالي المحادثات اليوم", value: "128" },
      { label: "متوسط زمن الرد", value: "42 ثانية" },
      { label: "محادثات بانتظار تصعيد", value: "5" },
      { label: "الطلبات اليوم", value: "36" },
      { label: "رضا العملاء", value: "92%" },
    ],
    conversationsSeries: [
      { name: "اليوم", value: 45 },
      { name: "أمس", value: 30 },
      { name: "قبل 3 أيام", value: 50 },
      { name: "قبل 4 أيام", value: 60 },
    ],
    channels: [{ name: "WhatsApp", value: 90 }],
    activity: [
      "تم ربط قناة واتساب بنجاح",
      "تم إنشاء رد ذكي جديد: تأكيد الدفع",
      "تم تصعيد محادثة من راكان إلى سارة",
    ],
  };
}

export async function getConversations() {
  await delay();
  return mockConversations;
}

export async function getCustomers() {
  await delay();
  return mockCustomers;
}

export async function getOrders() {
  await delay();
  return mockOrders;
}

export async function getProducts() {
  await delay();
  return mockProducts;
}

export async function getWorkflows() {
  await delay();
  return mockWorkflows;
}

export async function getReports() {
  await delay();
  return dashboardReports;
}
