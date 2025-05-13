
// Enums
export enum ProductType {
    FRUIT = "FRUIT",
    VEGETABLE = "VEGETABLE",
    GRAIN = "GRAIN",
    LEGUME = "LEGUME",
    TUBER = "TUBER",
    DAIRY = "DAIRY",
    MEAT = "MEAT",
    POULTRY = "POULTRY",
    OTHER = "OTHER"
  }
  
  export enum Unit {
    KG = "KG",
    LITERS = "LITERS",
    BAGS = "BAGS",
    CRATES = "CRATES",
    BUNCHES = "BUNCHES",
    PIECES = "PIECES",
    OTHER = "OTHER"
  }
  
  export enum ProductStatus {
    AVAILABLE = "AVAILABLE",
    SOLD = "SOLD",
    PENDING = "PENDING",
    EXPIRED = "EXPIRED",
    RESERVED = "RESERVED"
  }
  
  export enum Rating {
    ONE = "ONE",
    TWO = "TWO",
    THREE = "THREE",
    FOUR = "FOUR",
    FIVE = "FIVE",
    SIX = "SIX",
    SEVEN = "SEVEN",
    EIGHT = "EIGHT",
    NINE = "NINE",
    TEN = "TEN"
  }
  export type User ={
  id: string  
  firstname:string
  isactive:boolean 
  email:string
  usertype:Role
  Order: Order[]
}
export enum DeliveryType {
  BUYER='BUYER',
  SUPPLIER='SUPPLIER'
}

export type Order= {
  id:string
  customertype:DeliveryType 
  userId           : string
  user              :User        
  productid         :string
  productobj?        :Product
  farmerid          :string
  farmerobj         :Farmer       
  deliverylatitude?  :number
  deliverylongitude? :number
  deliveryoption    :Delivery  
  quantity          :number
  totalcost         :number
  createdAt         :Date
  updatedAt         :Date 
  tracking          :Tracking     

}
enum Tracking {
  DELIVERED='DELIVERED',
  ENROUTE='ENROUTE',
  PACKING='PACKING',
  PACKED='PACKED'
}
export enum Role {
  guest='guest',
  buyer='buyer',
  supplier='supplier',
  farmer='farmer',
  admin='admin',
  worker='worker',
  
}
  export type Admin ={
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    isactive: boolean;
    
  }
  export type Worker ={
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    isactive: boolean;
    
  }
  export type Farmer ={
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    isactive: boolean;
    products?: Product[];
  }
  
  export type Buyer ={
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    isactive: boolean;
  }
  
  export type Supplier ={
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    isactive: boolean;
  }
  export enum Delivery {
    FARMER,
    SELF,
    SERVICE
  }
  
  export type Product ={
    id?: string;
    name: string;
    type: ProductType;
    unit: Unit;
    priceperunit: number;
    quantity: number;
    variety: string;
    perishdate: string;
    location: string;
    status: ProductStatus;
    description: string;
    images: any;
    createdAt: string;
    updatedAt: string;
    farmerid: string;
    farmerobj?: Farmer;
    reviews?: Review[];
  }
  
  export type Review ={
    id?: string;
    userId: string;
    rating: Rating;
    comment: string;
    productid: string;
    productobj?: Product;
  }

export const productsData = [
  {
    id: "cbe95a8b-a3e0-4a94-b5b1-6f1a70c16f8e",
    name: "Maize",
    type: ProductType.GRAIN,
    unit: Unit.BAGS,
    priceperunit: 336,
    quantity: 71,
    variety: "Local",
    perishdate: new Date("2025-04-25T14:42:43.581384"),
    location: "Nyeri",
    status: ProductStatus.AVAILABLE,
    description: "High quality maize from Kenyan farms.",
    images: ["/images/product_1.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581422"),
    updatedAt: new Date("2025-04-16T14:42:43.581424"),
    farmerid: "8b7db486-7f8c-4c6b-9192-3f1a3cf91606",
  },
  {
    id: "f875fb31-2e13-45c2-89ed-76817fb3321a",
    name: "Tomatoes",
    type: ProductType.VEGETABLE,
    unit: Unit.CRATES,
    priceperunit: 486,
    quantity: 13,
    variety: "Hybrid",
    perishdate: new Date("2025-04-28T14:42:43.581429"),
    location: "Thika",
    status: ProductStatus.SOLD,
    description: "High quality tomatoes from Kenyan farms.",
    images: ["/images/product_2.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581440"),
    updatedAt: new Date("2025-04-16T14:42:43.581441"),
    farmerid: "8a5103b5-df05-4155-8cb6-522158adf034",
  },
  {
    id: "b20ff074-5d4d-481d-af26-e77047cefe25",
    name: "Milk",
    type: ProductType.DAIRY,
    unit: Unit.LITERS,
    priceperunit: 291,
    quantity: 84,
    variety: "Organic",
    perishdate: new Date("2025-04-20T14:42:43.581445"),
    location: "Nairobi",
    status: ProductStatus.RESERVED,
    description: "High quality milk from Kenyan farms.",
    images: ["/images/product_3.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581453"),
    updatedAt: new Date("2025-04-16T14:42:43.581455"),
    farmerid: "9b1f0215-71e2-4383-82e8-c153080f156d",
  },
  {
    id: "c34c294f-bf9d-4c6b-8e7f-4c887e764a8f", 
    name: "Chicken",
    type: ProductType.POULTRY,
    unit: Unit.PIECES,
    priceperunit: 417,
    quantity: 73,
    variety: "Dairy breed",
    perishdate: new Date("2025-04-21T14:42:43.581459"),
    location: "Kisumu",
    status: ProductStatus.EXPIRED,
    description: "High quality chicken from Kenyan farms.",
    images: ["/images/product_4.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581466"),
    updatedAt: new Date("2025-04-16T14:42:43.581468"),
    farmerid: "f575a004-df7a-4324-b7b1-5c64be5aa119",
  },
  {
    id: "ed836506-c49f-4a82-9877-b82e76f53159",
    name: "Mangoes",
    type: ProductType.FRUIT,
    unit: Unit.CRATES,
    priceperunit: 181,
    quantity: 43,
    variety: "Broiler",
    perishdate: new Date("2025-04-25T14:42:43.581472"),
    location: "Kisumu",
    status: ProductStatus.EXPIRED,
    description: "High quality mangoes from Kenyan farms.",
    images: ["/images/product_5.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581478"),
    updatedAt: new Date("2025-04-16T14:42:43.581480"),
    farmerid: "9de17d9b-906a-4992-bcf7-63186fd7ff8d",
  },
  {
    id: "edc154d1-7c95-48f9-b94c-22999f6584ad",
    name: "Potatoes",
    type: ProductType.TUBER,
    unit: Unit.KG,
    priceperunit: 430,
    quantity: 4,
    variety: "Sweet",
    perishdate: new Date("2025-04-23T14:42:43.581484"),
    location: "Nairobi",
    status: ProductStatus.PENDING,
    description: "High quality potatoes from Kenyan farms.",
    images: ["/images/product_6.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581491"),
    updatedAt: new Date("2025-04-16T14:42:43.581493"),
    farmerid: "d48f07a5-7ccd-4bfc-8ca6-4ec31e70236d",
  },
  {
    id: "b7e83adb-9140-425e-8e5a-921ac86c4129",
    name: "Beans",
    type: ProductType.LEGUME,
    unit: Unit.BAGS,
    priceperunit: 136,
    quantity: 16,
    variety: "Red",
    perishdate: new Date("2025-04-30T14:42:43.581496"),
    location: "Eldoret",
    status: ProductStatus.RESERVED,
    description: "High quality beans from Kenyan farms.",
    images: ["/images/product_7.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581503"),
    updatedAt: new Date("2025-04-16T14:42:43.581505"),
    farmerid: "e9a7fa66-b864-4122-bf01-f6b0012305a2",
  },
  {
    id: "765334b7-4689-4879-acfd-427d7128d2b0",
    name: "Carrots",
    type: ProductType.VEGETABLE,
    unit: Unit.KG,
    priceperunit: 53,
    quantity: 37,
    variety: "Green",
    perishdate: new Date("2025-04-25T14:42:43.581511"),
    location: "Kitale",
    status: ProductStatus.RESERVED,
    description: "High quality carrots from Kenyan farms.",
    images: ["/images/product_8.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581519"),
    updatedAt: new Date("2025-04-16T14:42:43.581521"),
    farmerid: "84207683-8e85-44cd-8788-645d57717d42",
  },
  {
    id: "51693a98-f721-4dda-8285-1775fdce4934",
    name: "Cabbage",
    type: ProductType.VEGETABLE,
    unit: Unit.KG,
    priceperunit: 148,
    quantity: 39,
    variety: "Fresh",
    perishdate: new Date("2025-04-26T14:42:43.581525"),
    location: "Meru",
    status: ProductStatus.PENDING,
    description: "High quality cabbage from Kenyan farms.",
    images: ["/images/product_9.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581533"),
    updatedAt: new Date("2025-04-16T14:42:43.581535"),
    farmerid: "2ce0d3ee-051a-4d2e-a204-0a0ff07f04e0",
  },
  {
    id: "e9a51581-4b54-4da1-971f-126e6fd88196",
    name: "Bananas",
    type: ProductType.FRUIT,
    unit: Unit.BUNCHES,
    priceperunit: 137,
    quantity: 94,
    variety: "Dry",
    perishdate: new Date("2025-04-26T14:42:43.581539"),
    location: "Nyeri",
    status: ProductStatus.EXPIRED,
    description: "High quality bananas from Kenyan farms.",
    images: ["/images/product_10.jpg"],
    createdAt: new Date("2025-04-16T14:42:43.581546"),
    updatedAt: new Date("2025-04-16T14:42:43.581548"),
    farmerid: "d6b9fb1d-722e-4a4d-95a8-1b9684a5e681",
  },
];

export const reviewsData = [
  { userId: "f1983746-3b3c-4fce-80ea-fe6be478a840", rating: Rating.NINE, comment: "Great quality maize!", productid: "cbe95a8b-a3e0-4a94-b5b1-6f1a70c16f8e" },
  { userId:  "e2e919c3-e247-4090-a355-334cc6c5e89a", rating: Rating.THREE, comment: "Great quality tomatoes!", productid:"f875fb31-2e13-45c2-89ed-76817fb3321a" },
  { userId: "8c87212d-24b2-405c-8c5f-9936537a16db", rating: Rating.ONE, comment: "Great quality milk!", productid: "b20ff074-5d4d-481d-af26-e77047cefe25"},
  { userId: "42616117-8096-4f74-95d3-182c197863ec", rating: Rating.TEN, comment: "Great quality chicken!", productid: "c34c294f-bf9d-4c6b-8e7f-4c887e764a8f" },
  { userId: "cb3d022b-cce2-4382-bccd-02840f672478", rating: Rating.TWO, comment: "Great quality mangoes!", productid: "ed836506-c49f-4a82-9877-b82e76f53159" },
  { userId: "d0c40705-c2eb-48bf-9604-559fa8318b8e", rating: Rating.TWO, comment: "Great quality potatoes!", productid:  "edc154d1-7c95-48f9-b94c-22999f6584ad" },
  { userId: "89144a03-7352-49c5-b4c0-a54b8076ec08", rating: Rating.ONE, comment: "Great quality beans!", productid: "b7e83adb-9140-425e-8e5a-921ac86c4129"},
  { userId: "7e6cac7a-0476-459a-8562-4524aff951af", rating: Rating.SIX, comment: "Great quality carrots!", productid: "765334b7-4689-4879-acfd-427d7128d2b0" },
  { userId: "39f21486-bcae-4029-b784-15a0555c40b1", rating: Rating.EIGHT, comment: "Great quality cabbage!", productid: "51693a98-f721-4dda-8285-1775fdce4934"},
  { userId: "297b8cf5-17f2-4aa9-aa4d-e8c864b8ed57", rating: Rating.SEVEN, comment: "Great quality bananas!", productid:  "e9a51581-4b54-4da1-971f-126e6fd88196" },
];

  export const farmersData = [
    { id: "d6b9fb1d-722e-4a4d-95a8-1b9684a5e681",firstname: "Wanjiku", lastname: "Kiprotich", email: "farmer1@example.com", password: "kiprotich", phone: "+254742525132", isactive: true },
    { id: "2ce0d3ee-051a-4d2e-a204-0a0ff07f04e0",firstname: "Ouma", lastname: "Kiprotich", email: "farmer2@example.com", password: "password", phone: "+254773089312", isactive: true },
    { id: "84207683-8e85-44cd-8788-645d57717d42",firstname: "Chebet", lastname: "Barasa", email: "farmer3@example.com", password: "barasa", phone: "+254767284463", isactive: true },
    { id: "e9a7fa66-b864-4122-bf01-f6b0012305a2",firstname: "Mwangi", lastname: "Kiprotich", email: "farmer4@example.com", password: "hashed_password1", phone: "+254722631670", isactive: true },
    { id: "d48f07a5-7ccd-4bfc-8ca6-4ec31e70236d",firstname: "Mwangi", lastname: "Kiprotich", email: "farmer5@example.com", password: "hashed_password2", phone: "+254712132242", isactive: true },
    { id: "9de17d9b-906a-4992-bcf7-63186fd7ff8d",firstname: "Mwangi", lastname: "Wambui", email: "farmer6@example.com", password: "hashed_password3", phone: "+254741199462", isactive: true },
    { id: "f575a004-df7a-4324-b7b1-5c64be5aa119",firstname: "Achieng", lastname: "Cheruiyot", email: "farmer7@example.com", password: "hashed_password4", phone: "+254726569429", isactive: true },
    { id: "8b7db486-7f8c-4c6b-9192-3f1a3cf91606",firstname: "Kiptoo", lastname: "Mutua", email: "farmer8@example.com", password: "hashed_password5", phone: "+254760733041", isactive: true },
    { id: "8a5103b5-df05-4155-8cb6-522158adf034",firstname: "Ouma", lastname: "Mutua", email: "farmer9@example.com", password: "hashed_password6", phone: "+254741415930", isactive: true },
    { id: "9b1f0215-71e2-4383-82e8-c153080f156d", firstname: "Kamau", lastname: "Koech", email: "farmer10@example.com", password: "hashed_password7", phone: "+254723272337", isactive: true }
  ];
  export const buyersData = [
    { id:"d0c40705-c2eb-48bf-9604-559fa8318b8e",firstname: "Mwangi", lastname: "Were", email: "buyer1@example.com", password: "awesome1", phone: "+254728011241", isactive: true },
    { id: "89144a03-7352-49c5-b4c0-a54b8076ec08",firstname: "Nyambura", lastname: "Odhiambo", email: "buyer2@example.com", password: "awesome2", phone: "+254712886214", isactive: true },
    { id: "7e6cac7a-0476-459a-8562-4524aff951af",firstname: "Wanjiku", lastname: "Cheruiyot", email: "buyer3@example.com", password: "hashed_password8", phone: "+254752216085", isactive: true },
    { id: "39f21486-bcae-4029-b784-15a0555c40b1",firstname: "Kamau", lastname: "Mutua", email: "buyer4@example.com", password: "hashed_password9", phone: "+254782422423", isactive: true },
    { id: "297b8cf5-17f2-4aa9-aa4d-e8c864b8ed57",firstname: "Mwangi", lastname: "Cheruiyot", email: "buyer5@example.com", password: "hashed_password10", phone: "+254770962464", isactive: true },
    { firstname: "Njeri", lastname: "Wambui", email: "buyer6@example.com", password: "hashed_password11", phone: "+254739542246", isactive: true },
    { firstname: "Otieno", lastname: "Koech", email: "buyer7@example.com", password: "hashed_password12", phone: "+254793244530", isactive: true },
    { firstname: "Chebet", lastname: "Kiprotich", email: "buyer8@example.com", password: "hashed_password13", phone: "+254763805003", isactive: true },
    { firstname: "Kiptoo", lastname: "Odhiambo", email: "buyer9@example.com", password: "hashed_password14", phone: "+254732688702", isactive: true },
    { firstname: "Mwangi", lastname: "Muthoni", email: "buyer10@example.com", password: "hashed_password15", phone: "+254783917184", isactive: true }
  ];
  export const suppliersData = [
    { id: "8c87212d-24b2-405c-8c5f-9936537a16db",firstname: "Wanjiku", lastname: "Barasa", email: "supplier1@example.com", password: "secure", phone: "+254775564309", isactive: true },
    {  id: "e2e919c3-e247-4090-a355-334cc6c5e89a",firstname: "Ouma", lastname: "Wambui", email: "supplier2@example.com", password: "safe", phone: "+254735941037", isactive: true },
    {  id: "42616117-8096-4f74-95d3-182c197863ec",firstname: "Mwangi", lastname: "Wambui", email: "supplier3@example.com", password: "hashed_password16", phone: "+254762790374", isactive: true },
    { id: "cb3d022b-cce2-4382-bccd-02840f672478",firstname: "Nyambura", lastname: "Odhiambo", email: "supplier4@example.com", password: "hashed_password17", phone: "+254751776309", isactive: true },
    {  id: "f1983746-3b3c-4fce-80ea-fe6be478a840",firstname: "Njeri", lastname: "Barasa", email: "supplier5@example.com", password: "hashed_password18", phone: "+254762159218", isactive: true },
    { firstname: "Wanjiku", lastname: "Were", email: "supplier6@example.com", password: "hashed_password19", phone: "+254789667298", isactive: true },
    { firstname: "Wanjiku", lastname: "Omondi", email: "supplier7@example.com", password: "hashed_password20", phone: "+254770269661", isactive: true },
    { firstname: "Mwangi", lastname: "Kiprotich", email: "supplier8@example.com", password: "hashed_password21", phone: "+254773138548", isactive: true },
    { firstname: "Achieng", lastname: "Muthoni", email: "supplier9@example.com", password: "hashed_password22", phone: "+254791391832", isactive: true },
    { firstname: "Ouma", lastname: "Kiprotich", email: "supplier10@example.com", password: "hashed_password23", phone: "+254792148933", isactive: true }
  ];

 
    