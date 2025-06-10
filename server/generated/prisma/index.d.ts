
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model buyer
 * 
 */
export type buyer = $Result.DefaultSelection<Prisma.$buyerPayload>
/**
 * Model farmer
 * 
 */
export type farmer = $Result.DefaultSelection<Prisma.$farmerPayload>
/**
 * Model myorder
 * 
 */
export type myorder = $Result.DefaultSelection<Prisma.$myorderPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>
/**
 * Model supplier
 * 
 */
export type supplier = $Result.DefaultSelection<Prisma.$supplierPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model worker
 * 
 */
export type worker = $Result.DefaultSelection<Prisma.$workerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const order_customertype: {
  BUYER: 'BUYER',
  SUPPLIER: 'SUPPLIER'
};

export type order_customertype = (typeof order_customertype)[keyof typeof order_customertype]


export const review_rating: {
  ONE: 'ONE',
  TWO: 'TWO',
  THREE: 'THREE',
  FOUR: 'FOUR',
  FIVE: 'FIVE',
  SIX: 'SIX',
  SEVEN: 'SEVEN',
  EIGHT: 'EIGHT',
  NINE: 'NINE',
  TEN: 'TEN'
};

export type review_rating = (typeof review_rating)[keyof typeof review_rating]


export const product_type: {
  CEREAL: 'CEREAL',
  FRUIT: 'FRUIT',
  VEGETABLE: 'VEGETABLE',
  LEGUME: 'LEGUME',
  TUBER: 'TUBER',
  HERB: 'HERB',
  SPICE: 'SPICE',
  NUT_AND_SEED: 'NUT_AND_SEED',
  DAIRY: 'DAIRY',
  LIVESTOCK: 'LIVESTOCK',
  POULTRY: 'POULTRY',
  AQUACULTURE: 'AQUACULTURE',
  HONEY_AND_BEE: 'HONEY_AND_BEE',
  FLOWER_AND_ORNAMENTAL: 'FLOWER_AND_ORNAMENTAL',
  ANIMAL_FEED: 'ANIMAL_FEED',
  AGROCHEMICAL: 'AGROCHEMICAL',
  FARM_TOOL_EQUIPMENT: 'FARM_TOOL_EQUIPMENT',
  PROCESSED_FOOD: 'PROCESSED_FOOD',
  BEVERAGE_CROP: 'BEVERAGE_CROP',
  FIBER_CROP: 'FIBER_CROP',
  OTHER: 'OTHER'
};

export type product_type = (typeof product_type)[keyof typeof product_type]


export const user_usertype: {
  buyer: 'buyer',
  supplier: 'supplier',
  farmer: 'farmer',
  admin: 'admin',
  worker: 'worker'
};

export type user_usertype = (typeof user_usertype)[keyof typeof user_usertype]


export const product_unit: {
  KG: 'KG',
  LITERS: 'LITERS',
  BAGS: 'BAGS',
  CRATES: 'CRATES',
  BUNCHES: 'BUNCHES',
  PIECES: 'PIECES',
  ANIMALS: 'ANIMALS',
  PACKETS: 'PACKETS',
  TOOLS: 'TOOLS',
  OTHER: 'OTHER'
};

export type product_unit = (typeof product_unit)[keyof typeof product_unit]


export const order_deliveryoption: {
  FARMER: 'FARMER',
  SELF: 'SELF',
  SERVICE: 'SERVICE'
};

export type order_deliveryoption = (typeof order_deliveryoption)[keyof typeof order_deliveryoption]


export const product_status: {
  AVAILABLE: 'AVAILABLE',
  SOLD: 'SOLD',
  PENDING: 'PENDING',
  EXPIRED: 'EXPIRED',
  RESERVED: 'RESERVED'
};

export type product_status = (typeof product_status)[keyof typeof product_status]


export const order_tracking: {
  DELIVERED: 'DELIVERED',
  ENROUTE: 'ENROUTE',
  PACKING: 'PACKING',
  PACKED: 'PACKED'
};

export type order_tracking = (typeof order_tracking)[keyof typeof order_tracking]

}

export type order_customertype = $Enums.order_customertype

export const order_customertype: typeof $Enums.order_customertype

export type review_rating = $Enums.review_rating

export const review_rating: typeof $Enums.review_rating

export type product_type = $Enums.product_type

export const product_type: typeof $Enums.product_type

export type user_usertype = $Enums.user_usertype

export const user_usertype: typeof $Enums.user_usertype

export type product_unit = $Enums.product_unit

export const product_unit: typeof $Enums.product_unit

export type order_deliveryoption = $Enums.order_deliveryoption

export const order_deliveryoption: typeof $Enums.order_deliveryoption

export type product_status = $Enums.product_status

export const product_status: typeof $Enums.product_status

export type order_tracking = $Enums.order_tracking

export const order_tracking: typeof $Enums.order_tracking

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buyer`: Exposes CRUD operations for the **buyer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buyers
    * const buyers = await prisma.buyer.findMany()
    * ```
    */
  get buyer(): Prisma.buyerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farmer`: Exposes CRUD operations for the **farmer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farmers
    * const farmers = await prisma.farmer.findMany()
    * ```
    */
  get farmer(): Prisma.farmerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.myorder`: Exposes CRUD operations for the **myorder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Myorders
    * const myorders = await prisma.myorder.findMany()
    * ```
    */
  get myorder(): Prisma.myorderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.supplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worker`: Exposes CRUD operations for the **worker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workers
    * const workers = await prisma.worker.findMany()
    * ```
    */
  get worker(): Prisma.workerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin: 'admin',
    buyer: 'buyer',
    farmer: 'farmer',
    myorder: 'myorder',
    product: 'product',
    review: 'review',
    supplier: 'supplier',
    user: 'user',
    worker: 'worker'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "buyer" | "farmer" | "myorder" | "product" | "review" | "supplier" | "user" | "worker"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      buyer: {
        payload: Prisma.$buyerPayload<ExtArgs>
        fields: Prisma.buyerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.buyerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.buyerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          findFirst: {
            args: Prisma.buyerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.buyerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          findMany: {
            args: Prisma.buyerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>[]
          }
          create: {
            args: Prisma.buyerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          createMany: {
            args: Prisma.buyerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.buyerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          update: {
            args: Prisma.buyerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          deleteMany: {
            args: Prisma.buyerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.buyerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.buyerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$buyerPayload>
          }
          aggregate: {
            args: Prisma.BuyerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuyer>
          }
          groupBy: {
            args: Prisma.buyerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuyerGroupByOutputType>[]
          }
          count: {
            args: Prisma.buyerCountArgs<ExtArgs>
            result: $Utils.Optional<BuyerCountAggregateOutputType> | number
          }
        }
      }
      farmer: {
        payload: Prisma.$farmerPayload<ExtArgs>
        fields: Prisma.farmerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.farmerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.farmerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>
          }
          findFirst: {
            args: Prisma.farmerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.farmerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>
          }
          findMany: {
            args: Prisma.farmerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>[]
          }
          create: {
            args: Prisma.farmerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>
          }
          createMany: {
            args: Prisma.farmerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.farmerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>
          }
          update: {
            args: Prisma.farmerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>
          }
          deleteMany: {
            args: Prisma.farmerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.farmerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.farmerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$farmerPayload>
          }
          aggregate: {
            args: Prisma.FarmerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmer>
          }
          groupBy: {
            args: Prisma.farmerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmerGroupByOutputType>[]
          }
          count: {
            args: Prisma.farmerCountArgs<ExtArgs>
            result: $Utils.Optional<FarmerCountAggregateOutputType> | number
          }
        }
      }
      myorder: {
        payload: Prisma.$myorderPayload<ExtArgs>
        fields: Prisma.myorderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.myorderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$myorderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.myorderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$myorderPayload>
          }
          findFirst: {
            args: Prisma.myorderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$myorderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.myorderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$myorderPayload>
          }
          findMany: {
            args: Prisma.myorderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$myorderPayload>[]
          }
          create: {
            args: Prisma.myorderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$myorderPayload>
          }
          createMany: {
            args: Prisma.myorderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.myorderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$myorderPayload>
          }
          update: {
            args: Prisma.myorderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$myorderPayload>
          }
          deleteMany: {
            args: Prisma.myorderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.myorderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.myorderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$myorderPayload>
          }
          aggregate: {
            args: Prisma.MyorderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyorder>
          }
          groupBy: {
            args: Prisma.myorderGroupByArgs<ExtArgs>
            result: $Utils.Optional<MyorderGroupByOutputType>[]
          }
          count: {
            args: Prisma.myorderCountArgs<ExtArgs>
            result: $Utils.Optional<MyorderCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      supplier: {
        payload: Prisma.$supplierPayload<ExtArgs>
        fields: Prisma.supplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findFirst: {
            args: Prisma.supplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findMany: {
            args: Prisma.supplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          create: {
            args: Prisma.supplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          createMany: {
            args: Prisma.supplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.supplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          update: {
            args: Prisma.supplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          deleteMany: {
            args: Prisma.supplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.supplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.supplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.supplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      worker: {
        payload: Prisma.$workerPayload<ExtArgs>
        fields: Prisma.workerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workerPayload>
          }
          findFirst: {
            args: Prisma.workerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workerPayload>
          }
          findMany: {
            args: Prisma.workerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workerPayload>[]
          }
          create: {
            args: Prisma.workerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workerPayload>
          }
          createMany: {
            args: Prisma.workerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.workerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workerPayload>
          }
          update: {
            args: Prisma.workerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workerPayload>
          }
          deleteMany: {
            args: Prisma.workerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.workerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workerPayload>
          }
          aggregate: {
            args: Prisma.WorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorker>
          }
          groupBy: {
            args: Prisma.workerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.workerCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: adminOmit
    buyer?: buyerOmit
    farmer?: farmerOmit
    myorder?: myorderOmit
    product?: productOmit
    review?: reviewOmit
    supplier?: supplierOmit
    user?: userOmit
    worker?: workerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FarmerCountOutputType
   */

  export type FarmerCountOutputType = {
    order: number
    product: number
  }

  export type FarmerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | FarmerCountOutputTypeCountOrderArgs
    product?: boolean | FarmerCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmerCountOutputType
     */
    select?: FarmerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: myorderWhereInput
  }

  /**
   * FarmerCountOutputType without action
   */
  export type FarmerCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    order: number
    review: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ProductCountOutputTypeCountOrderArgs
    review?: boolean | ProductCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: myorderWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    order: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | UserCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: myorderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    isactive: boolean | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    isactive: boolean | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    isactive: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    isactive?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    isactive?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    isactive?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    email: string
    password: string
    isactive: boolean
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    isactive?: boolean
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    isactive?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "isactive", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      email: string
      password: string
      isactive: boolean
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'String'>
    readonly firstname: FieldRef<"admin", 'String'>
    readonly lastname: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly isactive: FieldRef<"admin", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model buyer
   */

  export type AggregateBuyer = {
    _count: BuyerCountAggregateOutputType | null
    _min: BuyerMinAggregateOutputType | null
    _max: BuyerMaxAggregateOutputType | null
  }

  export type BuyerMinAggregateOutputType = {
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    phone: string | null
    isactive: boolean | null
    id: string | null
  }

  export type BuyerMaxAggregateOutputType = {
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    phone: string | null
    isactive: boolean | null
    id: string | null
  }

  export type BuyerCountAggregateOutputType = {
    firstname: number
    lastname: number
    email: number
    password: number
    phone: number
    isactive: number
    id: number
    _all: number
  }


  export type BuyerMinAggregateInputType = {
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    phone?: true
    isactive?: true
    id?: true
  }

  export type BuyerMaxAggregateInputType = {
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    phone?: true
    isactive?: true
    id?: true
  }

  export type BuyerCountAggregateInputType = {
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    phone?: true
    isactive?: true
    id?: true
    _all?: true
  }

  export type BuyerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which buyer to aggregate.
     */
    where?: buyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buyers to fetch.
     */
    orderBy?: buyerOrderByWithRelationInput | buyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: buyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned buyers
    **/
    _count?: true | BuyerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuyerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuyerMaxAggregateInputType
  }

  export type GetBuyerAggregateType<T extends BuyerAggregateArgs> = {
        [P in keyof T & keyof AggregateBuyer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuyer[P]>
      : GetScalarType<T[P], AggregateBuyer[P]>
  }




  export type buyerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: buyerWhereInput
    orderBy?: buyerOrderByWithAggregationInput | buyerOrderByWithAggregationInput[]
    by: BuyerScalarFieldEnum[] | BuyerScalarFieldEnum
    having?: buyerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuyerCountAggregateInputType | true
    _min?: BuyerMinAggregateInputType
    _max?: BuyerMaxAggregateInputType
  }

  export type BuyerGroupByOutputType = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive: boolean
    id: string
    _count: BuyerCountAggregateOutputType | null
    _min: BuyerMinAggregateOutputType | null
    _max: BuyerMaxAggregateOutputType | null
  }

  type GetBuyerGroupByPayload<T extends buyerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuyerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuyerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuyerGroupByOutputType[P]>
            : GetScalarType<T[P], BuyerGroupByOutputType[P]>
        }
      >
    >


  export type buyerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isactive?: boolean
    id?: boolean
  }, ExtArgs["result"]["buyer"]>



  export type buyerSelectScalar = {
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isactive?: boolean
    id?: boolean
  }

  export type buyerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"firstname" | "lastname" | "email" | "password" | "phone" | "isactive" | "id", ExtArgs["result"]["buyer"]>

  export type $buyerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "buyer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      firstname: string
      lastname: string
      email: string
      password: string
      phone: string
      isactive: boolean
      id: string
    }, ExtArgs["result"]["buyer"]>
    composites: {}
  }

  type buyerGetPayload<S extends boolean | null | undefined | buyerDefaultArgs> = $Result.GetResult<Prisma.$buyerPayload, S>

  type buyerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<buyerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuyerCountAggregateInputType | true
    }

  export interface buyerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['buyer'], meta: { name: 'buyer' } }
    /**
     * Find zero or one Buyer that matches the filter.
     * @param {buyerFindUniqueArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends buyerFindUniqueArgs>(args: SelectSubset<T, buyerFindUniqueArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Buyer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {buyerFindUniqueOrThrowArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends buyerFindUniqueOrThrowArgs>(args: SelectSubset<T, buyerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buyer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerFindFirstArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends buyerFindFirstArgs>(args?: SelectSubset<T, buyerFindFirstArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buyer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerFindFirstOrThrowArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends buyerFindFirstOrThrowArgs>(args?: SelectSubset<T, buyerFindFirstOrThrowArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buyers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buyers
     * const buyers = await prisma.buyer.findMany()
     * 
     * // Get first 10 Buyers
     * const buyers = await prisma.buyer.findMany({ take: 10 })
     * 
     * // Only select the `firstname`
     * const buyerWithFirstnameOnly = await prisma.buyer.findMany({ select: { firstname: true } })
     * 
     */
    findMany<T extends buyerFindManyArgs>(args?: SelectSubset<T, buyerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Buyer.
     * @param {buyerCreateArgs} args - Arguments to create a Buyer.
     * @example
     * // Create one Buyer
     * const Buyer = await prisma.buyer.create({
     *   data: {
     *     // ... data to create a Buyer
     *   }
     * })
     * 
     */
    create<T extends buyerCreateArgs>(args: SelectSubset<T, buyerCreateArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buyers.
     * @param {buyerCreateManyArgs} args - Arguments to create many Buyers.
     * @example
     * // Create many Buyers
     * const buyer = await prisma.buyer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends buyerCreateManyArgs>(args?: SelectSubset<T, buyerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Buyer.
     * @param {buyerDeleteArgs} args - Arguments to delete one Buyer.
     * @example
     * // Delete one Buyer
     * const Buyer = await prisma.buyer.delete({
     *   where: {
     *     // ... filter to delete one Buyer
     *   }
     * })
     * 
     */
    delete<T extends buyerDeleteArgs>(args: SelectSubset<T, buyerDeleteArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Buyer.
     * @param {buyerUpdateArgs} args - Arguments to update one Buyer.
     * @example
     * // Update one Buyer
     * const buyer = await prisma.buyer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends buyerUpdateArgs>(args: SelectSubset<T, buyerUpdateArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buyers.
     * @param {buyerDeleteManyArgs} args - Arguments to filter Buyers to delete.
     * @example
     * // Delete a few Buyers
     * const { count } = await prisma.buyer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends buyerDeleteManyArgs>(args?: SelectSubset<T, buyerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buyers
     * const buyer = await prisma.buyer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends buyerUpdateManyArgs>(args: SelectSubset<T, buyerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Buyer.
     * @param {buyerUpsertArgs} args - Arguments to update or create a Buyer.
     * @example
     * // Update or create a Buyer
     * const buyer = await prisma.buyer.upsert({
     *   create: {
     *     // ... data to create a Buyer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buyer we want to update
     *   }
     * })
     */
    upsert<T extends buyerUpsertArgs>(args: SelectSubset<T, buyerUpsertArgs<ExtArgs>>): Prisma__buyerClient<$Result.GetResult<Prisma.$buyerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerCountArgs} args - Arguments to filter Buyers to count.
     * @example
     * // Count the number of Buyers
     * const count = await prisma.buyer.count({
     *   where: {
     *     // ... the filter for the Buyers we want to count
     *   }
     * })
    **/
    count<T extends buyerCountArgs>(
      args?: Subset<T, buyerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuyerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuyerAggregateArgs>(args: Subset<T, BuyerAggregateArgs>): Prisma.PrismaPromise<GetBuyerAggregateType<T>>

    /**
     * Group by Buyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {buyerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends buyerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: buyerGroupByArgs['orderBy'] }
        : { orderBy?: buyerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, buyerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuyerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the buyer model
   */
  readonly fields: buyerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for buyer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__buyerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the buyer model
   */
  interface buyerFieldRefs {
    readonly firstname: FieldRef<"buyer", 'String'>
    readonly lastname: FieldRef<"buyer", 'String'>
    readonly email: FieldRef<"buyer", 'String'>
    readonly password: FieldRef<"buyer", 'String'>
    readonly phone: FieldRef<"buyer", 'String'>
    readonly isactive: FieldRef<"buyer", 'Boolean'>
    readonly id: FieldRef<"buyer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * buyer findUnique
   */
  export type buyerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Filter, which buyer to fetch.
     */
    where: buyerWhereUniqueInput
  }

  /**
   * buyer findUniqueOrThrow
   */
  export type buyerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Filter, which buyer to fetch.
     */
    where: buyerWhereUniqueInput
  }

  /**
   * buyer findFirst
   */
  export type buyerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Filter, which buyer to fetch.
     */
    where?: buyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buyers to fetch.
     */
    orderBy?: buyerOrderByWithRelationInput | buyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buyers.
     */
    cursor?: buyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buyers.
     */
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }

  /**
   * buyer findFirstOrThrow
   */
  export type buyerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Filter, which buyer to fetch.
     */
    where?: buyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buyers to fetch.
     */
    orderBy?: buyerOrderByWithRelationInput | buyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buyers.
     */
    cursor?: buyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buyers.
     */
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }

  /**
   * buyer findMany
   */
  export type buyerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Filter, which buyers to fetch.
     */
    where?: buyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buyers to fetch.
     */
    orderBy?: buyerOrderByWithRelationInput | buyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing buyers.
     */
    cursor?: buyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buyers.
     */
    skip?: number
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }

  /**
   * buyer create
   */
  export type buyerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * The data needed to create a buyer.
     */
    data: XOR<buyerCreateInput, buyerUncheckedCreateInput>
  }

  /**
   * buyer createMany
   */
  export type buyerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many buyers.
     */
    data: buyerCreateManyInput | buyerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * buyer update
   */
  export type buyerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * The data needed to update a buyer.
     */
    data: XOR<buyerUpdateInput, buyerUncheckedUpdateInput>
    /**
     * Choose, which buyer to update.
     */
    where: buyerWhereUniqueInput
  }

  /**
   * buyer updateMany
   */
  export type buyerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update buyers.
     */
    data: XOR<buyerUpdateManyMutationInput, buyerUncheckedUpdateManyInput>
    /**
     * Filter which buyers to update
     */
    where?: buyerWhereInput
    /**
     * Limit how many buyers to update.
     */
    limit?: number
  }

  /**
   * buyer upsert
   */
  export type buyerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * The filter to search for the buyer to update in case it exists.
     */
    where: buyerWhereUniqueInput
    /**
     * In case the buyer found by the `where` argument doesn't exist, create a new buyer with this data.
     */
    create: XOR<buyerCreateInput, buyerUncheckedCreateInput>
    /**
     * In case the buyer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<buyerUpdateInput, buyerUncheckedUpdateInput>
  }

  /**
   * buyer delete
   */
  export type buyerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
    /**
     * Filter which buyer to delete.
     */
    where: buyerWhereUniqueInput
  }

  /**
   * buyer deleteMany
   */
  export type buyerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which buyers to delete
     */
    where?: buyerWhereInput
    /**
     * Limit how many buyers to delete.
     */
    limit?: number
  }

  /**
   * buyer without action
   */
  export type buyerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buyer
     */
    select?: buyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buyer
     */
    omit?: buyerOmit<ExtArgs> | null
  }


  /**
   * Model farmer
   */

  export type AggregateFarmer = {
    _count: FarmerCountAggregateOutputType | null
    _min: FarmerMinAggregateOutputType | null
    _max: FarmerMaxAggregateOutputType | null
  }

  export type FarmerMinAggregateOutputType = {
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    phone: string | null
    isactive: boolean | null
    id: string | null
  }

  export type FarmerMaxAggregateOutputType = {
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    phone: string | null
    isactive: boolean | null
    id: string | null
  }

  export type FarmerCountAggregateOutputType = {
    firstname: number
    lastname: number
    email: number
    password: number
    phone: number
    isactive: number
    id: number
    _all: number
  }


  export type FarmerMinAggregateInputType = {
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    phone?: true
    isactive?: true
    id?: true
  }

  export type FarmerMaxAggregateInputType = {
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    phone?: true
    isactive?: true
    id?: true
  }

  export type FarmerCountAggregateInputType = {
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    phone?: true
    isactive?: true
    id?: true
    _all?: true
  }

  export type FarmerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which farmer to aggregate.
     */
    where?: farmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmerOrderByWithRelationInput | farmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: farmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned farmers
    **/
    _count?: true | FarmerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmerMaxAggregateInputType
  }

  export type GetFarmerAggregateType<T extends FarmerAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmer[P]>
      : GetScalarType<T[P], AggregateFarmer[P]>
  }




  export type farmerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: farmerWhereInput
    orderBy?: farmerOrderByWithAggregationInput | farmerOrderByWithAggregationInput[]
    by: FarmerScalarFieldEnum[] | FarmerScalarFieldEnum
    having?: farmerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmerCountAggregateInputType | true
    _min?: FarmerMinAggregateInputType
    _max?: FarmerMaxAggregateInputType
  }

  export type FarmerGroupByOutputType = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive: boolean
    id: string
    _count: FarmerCountAggregateOutputType | null
    _min: FarmerMinAggregateOutputType | null
    _max: FarmerMaxAggregateOutputType | null
  }

  type GetFarmerGroupByPayload<T extends farmerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmerGroupByOutputType[P]>
            : GetScalarType<T[P], FarmerGroupByOutputType[P]>
        }
      >
    >


  export type farmerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isactive?: boolean
    id?: boolean
    order?: boolean | farmer$orderArgs<ExtArgs>
    product?: boolean | farmer$productArgs<ExtArgs>
    _count?: boolean | FarmerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmer"]>



  export type farmerSelectScalar = {
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isactive?: boolean
    id?: boolean
  }

  export type farmerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"firstname" | "lastname" | "email" | "password" | "phone" | "isactive" | "id", ExtArgs["result"]["farmer"]>
  export type farmerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | farmer$orderArgs<ExtArgs>
    product?: boolean | farmer$productArgs<ExtArgs>
    _count?: boolean | FarmerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $farmerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "farmer"
    objects: {
      order: Prisma.$myorderPayload<ExtArgs>[]
      product: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      firstname: string
      lastname: string
      email: string
      password: string
      phone: string
      isactive: boolean
      id: string
    }, ExtArgs["result"]["farmer"]>
    composites: {}
  }

  type farmerGetPayload<S extends boolean | null | undefined | farmerDefaultArgs> = $Result.GetResult<Prisma.$farmerPayload, S>

  type farmerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<farmerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmerCountAggregateInputType | true
    }

  export interface farmerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['farmer'], meta: { name: 'farmer' } }
    /**
     * Find zero or one Farmer that matches the filter.
     * @param {farmerFindUniqueArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends farmerFindUniqueArgs>(args: SelectSubset<T, farmerFindUniqueArgs<ExtArgs>>): Prisma__farmerClient<$Result.GetResult<Prisma.$farmerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farmer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {farmerFindUniqueOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends farmerFindUniqueOrThrowArgs>(args: SelectSubset<T, farmerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__farmerClient<$Result.GetResult<Prisma.$farmerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerFindFirstArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends farmerFindFirstArgs>(args?: SelectSubset<T, farmerFindFirstArgs<ExtArgs>>): Prisma__farmerClient<$Result.GetResult<Prisma.$farmerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerFindFirstOrThrowArgs} args - Arguments to find a Farmer
     * @example
     * // Get one Farmer
     * const farmer = await prisma.farmer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends farmerFindFirstOrThrowArgs>(args?: SelectSubset<T, farmerFindFirstOrThrowArgs<ExtArgs>>): Prisma__farmerClient<$Result.GetResult<Prisma.$farmerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farmers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farmers
     * const farmers = await prisma.farmer.findMany()
     * 
     * // Get first 10 Farmers
     * const farmers = await prisma.farmer.findMany({ take: 10 })
     * 
     * // Only select the `firstname`
     * const farmerWithFirstnameOnly = await prisma.farmer.findMany({ select: { firstname: true } })
     * 
     */
    findMany<T extends farmerFindManyArgs>(args?: SelectSubset<T, farmerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$farmerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farmer.
     * @param {farmerCreateArgs} args - Arguments to create a Farmer.
     * @example
     * // Create one Farmer
     * const Farmer = await prisma.farmer.create({
     *   data: {
     *     // ... data to create a Farmer
     *   }
     * })
     * 
     */
    create<T extends farmerCreateArgs>(args: SelectSubset<T, farmerCreateArgs<ExtArgs>>): Prisma__farmerClient<$Result.GetResult<Prisma.$farmerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farmers.
     * @param {farmerCreateManyArgs} args - Arguments to create many Farmers.
     * @example
     * // Create many Farmers
     * const farmer = await prisma.farmer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends farmerCreateManyArgs>(args?: SelectSubset<T, farmerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Farmer.
     * @param {farmerDeleteArgs} args - Arguments to delete one Farmer.
     * @example
     * // Delete one Farmer
     * const Farmer = await prisma.farmer.delete({
     *   where: {
     *     // ... filter to delete one Farmer
     *   }
     * })
     * 
     */
    delete<T extends farmerDeleteArgs>(args: SelectSubset<T, farmerDeleteArgs<ExtArgs>>): Prisma__farmerClient<$Result.GetResult<Prisma.$farmerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farmer.
     * @param {farmerUpdateArgs} args - Arguments to update one Farmer.
     * @example
     * // Update one Farmer
     * const farmer = await prisma.farmer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends farmerUpdateArgs>(args: SelectSubset<T, farmerUpdateArgs<ExtArgs>>): Prisma__farmerClient<$Result.GetResult<Prisma.$farmerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farmers.
     * @param {farmerDeleteManyArgs} args - Arguments to filter Farmers to delete.
     * @example
     * // Delete a few Farmers
     * const { count } = await prisma.farmer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends farmerDeleteManyArgs>(args?: SelectSubset<T, farmerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farmers
     * const farmer = await prisma.farmer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends farmerUpdateManyArgs>(args: SelectSubset<T, farmerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Farmer.
     * @param {farmerUpsertArgs} args - Arguments to update or create a Farmer.
     * @example
     * // Update or create a Farmer
     * const farmer = await prisma.farmer.upsert({
     *   create: {
     *     // ... data to create a Farmer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farmer we want to update
     *   }
     * })
     */
    upsert<T extends farmerUpsertArgs>(args: SelectSubset<T, farmerUpsertArgs<ExtArgs>>): Prisma__farmerClient<$Result.GetResult<Prisma.$farmerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farmers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerCountArgs} args - Arguments to filter Farmers to count.
     * @example
     * // Count the number of Farmers
     * const count = await prisma.farmer.count({
     *   where: {
     *     // ... the filter for the Farmers we want to count
     *   }
     * })
    **/
    count<T extends farmerCountArgs>(
      args?: Subset<T, farmerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FarmerAggregateArgs>(args: Subset<T, FarmerAggregateArgs>): Prisma.PrismaPromise<GetFarmerAggregateType<T>>

    /**
     * Group by Farmer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farmerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends farmerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: farmerGroupByArgs['orderBy'] }
        : { orderBy?: farmerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, farmerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the farmer model
   */
  readonly fields: farmerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for farmer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__farmerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends farmer$orderArgs<ExtArgs> = {}>(args?: Subset<T, farmer$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product<T extends farmer$productArgs<ExtArgs> = {}>(args?: Subset<T, farmer$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the farmer model
   */
  interface farmerFieldRefs {
    readonly firstname: FieldRef<"farmer", 'String'>
    readonly lastname: FieldRef<"farmer", 'String'>
    readonly email: FieldRef<"farmer", 'String'>
    readonly password: FieldRef<"farmer", 'String'>
    readonly phone: FieldRef<"farmer", 'String'>
    readonly isactive: FieldRef<"farmer", 'Boolean'>
    readonly id: FieldRef<"farmer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * farmer findUnique
   */
  export type farmerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null
    /**
     * Filter, which farmer to fetch.
     */
    where: farmerWhereUniqueInput
  }

  /**
   * farmer findUniqueOrThrow
   */
  export type farmerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null
    /**
     * Filter, which farmer to fetch.
     */
    where: farmerWhereUniqueInput
  }

  /**
   * farmer findFirst
   */
  export type farmerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null
    /**
     * Filter, which farmer to fetch.
     */
    where?: farmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmerOrderByWithRelationInput | farmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for farmers.
     */
    cursor?: farmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of farmers.
     */
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }

  /**
   * farmer findFirstOrThrow
   */
  export type farmerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null
    /**
     * Filter, which farmer to fetch.
     */
    where?: farmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmerOrderByWithRelationInput | farmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for farmers.
     */
    cursor?: farmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` farmers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of farmers.
     */
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }

  /**
   * farmer findMany
   */
  export type farmerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null
    /**
     * Filter, which farmers to fetch.
     */
    where?: farmerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of farmers to fetch.
     */
    orderBy?: farmerOrderByWithRelationInput | farmerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing farmers.
     */
    cursor?: farmerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` farmers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` farmers.
     */
    skip?: number
    distinct?: FarmerScalarFieldEnum | FarmerScalarFieldEnum[]
  }

  /**
   * farmer create
   */
  export type farmerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null
    /**
     * The data needed to create a farmer.
     */
    data: XOR<farmerCreateInput, farmerUncheckedCreateInput>
  }

  /**
   * farmer createMany
   */
  export type farmerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many farmers.
     */
    data: farmerCreateManyInput | farmerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * farmer update
   */
  export type farmerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null
    /**
     * The data needed to update a farmer.
     */
    data: XOR<farmerUpdateInput, farmerUncheckedUpdateInput>
    /**
     * Choose, which farmer to update.
     */
    where: farmerWhereUniqueInput
  }

  /**
   * farmer updateMany
   */
  export type farmerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update farmers.
     */
    data: XOR<farmerUpdateManyMutationInput, farmerUncheckedUpdateManyInput>
    /**
     * Filter which farmers to update
     */
    where?: farmerWhereInput
    /**
     * Limit how many farmers to update.
     */
    limit?: number
  }

  /**
   * farmer upsert
   */
  export type farmerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null
    /**
     * The filter to search for the farmer to update in case it exists.
     */
    where: farmerWhereUniqueInput
    /**
     * In case the farmer found by the `where` argument doesn't exist, create a new farmer with this data.
     */
    create: XOR<farmerCreateInput, farmerUncheckedCreateInput>
    /**
     * In case the farmer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<farmerUpdateInput, farmerUncheckedUpdateInput>
  }

  /**
   * farmer delete
   */
  export type farmerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null
    /**
     * Filter which farmer to delete.
     */
    where: farmerWhereUniqueInput
  }

  /**
   * farmer deleteMany
   */
  export type farmerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which farmers to delete
     */
    where?: farmerWhereInput
    /**
     * Limit how many farmers to delete.
     */
    limit?: number
  }

  /**
   * farmer.order
   */
  export type farmer$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    where?: myorderWhereInput
    orderBy?: myorderOrderByWithRelationInput | myorderOrderByWithRelationInput[]
    cursor?: myorderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyorderScalarFieldEnum | MyorderScalarFieldEnum[]
  }

  /**
   * farmer.product
   */
  export type farmer$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * farmer without action
   */
  export type farmerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farmer
     */
    select?: farmerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the farmer
     */
    omit?: farmerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: farmerInclude<ExtArgs> | null
  }


  /**
   * Model myorder
   */

  export type AggregateMyorder = {
    _count: MyorderCountAggregateOutputType | null
    _avg: MyorderAvgAggregateOutputType | null
    _sum: MyorderSumAggregateOutputType | null
    _min: MyorderMinAggregateOutputType | null
    _max: MyorderMaxAggregateOutputType | null
  }

  export type MyorderAvgAggregateOutputType = {
    deliverylatitude: number | null
    deliverylongitude: number | null
    totalcost: number | null
    quantity: number | null
  }

  export type MyorderSumAggregateOutputType = {
    deliverylatitude: number | null
    deliverylongitude: number | null
    totalcost: number | null
    quantity: number | null
  }

  export type MyorderMinAggregateOutputType = {
    id: string | null
    customertype: $Enums.order_customertype | null
    productid: string | null
    deliverylatitude: number | null
    deliverylongitude: number | null
    deliveryoption: $Enums.order_deliveryoption | null
    totalcost: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tracking: $Enums.order_tracking | null
    farmerid: string | null
    userId: string | null
    quantity: number | null
  }

  export type MyorderMaxAggregateOutputType = {
    id: string | null
    customertype: $Enums.order_customertype | null
    productid: string | null
    deliverylatitude: number | null
    deliverylongitude: number | null
    deliveryoption: $Enums.order_deliveryoption | null
    totalcost: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tracking: $Enums.order_tracking | null
    farmerid: string | null
    userId: string | null
    quantity: number | null
  }

  export type MyorderCountAggregateOutputType = {
    id: number
    customertype: number
    productid: number
    deliverylatitude: number
    deliverylongitude: number
    deliveryoption: number
    totalcost: number
    createdAt: number
    updatedAt: number
    tracking: number
    farmerid: number
    userId: number
    quantity: number
    _all: number
  }


  export type MyorderAvgAggregateInputType = {
    deliverylatitude?: true
    deliverylongitude?: true
    totalcost?: true
    quantity?: true
  }

  export type MyorderSumAggregateInputType = {
    deliverylatitude?: true
    deliverylongitude?: true
    totalcost?: true
    quantity?: true
  }

  export type MyorderMinAggregateInputType = {
    id?: true
    customertype?: true
    productid?: true
    deliverylatitude?: true
    deliverylongitude?: true
    deliveryoption?: true
    totalcost?: true
    createdAt?: true
    updatedAt?: true
    tracking?: true
    farmerid?: true
    userId?: true
    quantity?: true
  }

  export type MyorderMaxAggregateInputType = {
    id?: true
    customertype?: true
    productid?: true
    deliverylatitude?: true
    deliverylongitude?: true
    deliveryoption?: true
    totalcost?: true
    createdAt?: true
    updatedAt?: true
    tracking?: true
    farmerid?: true
    userId?: true
    quantity?: true
  }

  export type MyorderCountAggregateInputType = {
    id?: true
    customertype?: true
    productid?: true
    deliverylatitude?: true
    deliverylongitude?: true
    deliveryoption?: true
    totalcost?: true
    createdAt?: true
    updatedAt?: true
    tracking?: true
    farmerid?: true
    userId?: true
    quantity?: true
    _all?: true
  }

  export type MyorderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which myorder to aggregate.
     */
    where?: myorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of myorders to fetch.
     */
    orderBy?: myorderOrderByWithRelationInput | myorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: myorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` myorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` myorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned myorders
    **/
    _count?: true | MyorderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MyorderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MyorderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MyorderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MyorderMaxAggregateInputType
  }

  export type GetMyorderAggregateType<T extends MyorderAggregateArgs> = {
        [P in keyof T & keyof AggregateMyorder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyorder[P]>
      : GetScalarType<T[P], AggregateMyorder[P]>
  }




  export type myorderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: myorderWhereInput
    orderBy?: myorderOrderByWithAggregationInput | myorderOrderByWithAggregationInput[]
    by: MyorderScalarFieldEnum[] | MyorderScalarFieldEnum
    having?: myorderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MyorderCountAggregateInputType | true
    _avg?: MyorderAvgAggregateInputType
    _sum?: MyorderSumAggregateInputType
    _min?: MyorderMinAggregateInputType
    _max?: MyorderMaxAggregateInputType
  }

  export type MyorderGroupByOutputType = {
    id: string
    customertype: $Enums.order_customertype
    productid: string
    deliverylatitude: number | null
    deliverylongitude: number | null
    deliveryoption: $Enums.order_deliveryoption
    totalcost: number
    createdAt: Date
    updatedAt: Date
    tracking: $Enums.order_tracking
    farmerid: string
    userId: string
    quantity: number
    _count: MyorderCountAggregateOutputType | null
    _avg: MyorderAvgAggregateOutputType | null
    _sum: MyorderSumAggregateOutputType | null
    _min: MyorderMinAggregateOutputType | null
    _max: MyorderMaxAggregateOutputType | null
  }

  type GetMyorderGroupByPayload<T extends myorderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MyorderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MyorderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MyorderGroupByOutputType[P]>
            : GetScalarType<T[P], MyorderGroupByOutputType[P]>
        }
      >
    >


  export type myorderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customertype?: boolean
    productid?: boolean
    deliverylatitude?: boolean
    deliverylongitude?: boolean
    deliveryoption?: boolean
    totalcost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tracking?: boolean
    farmerid?: boolean
    userId?: boolean
    quantity?: boolean
    farmer?: boolean | farmerDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myorder"]>



  export type myorderSelectScalar = {
    id?: boolean
    customertype?: boolean
    productid?: boolean
    deliverylatitude?: boolean
    deliverylongitude?: boolean
    deliveryoption?: boolean
    totalcost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tracking?: boolean
    farmerid?: boolean
    userId?: boolean
    quantity?: boolean
  }

  export type myorderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customertype" | "productid" | "deliverylatitude" | "deliverylongitude" | "deliveryoption" | "totalcost" | "createdAt" | "updatedAt" | "tracking" | "farmerid" | "userId" | "quantity", ExtArgs["result"]["myorder"]>
  export type myorderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmer?: boolean | farmerDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $myorderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "myorder"
    objects: {
      farmer: Prisma.$farmerPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customertype: $Enums.order_customertype
      productid: string
      deliverylatitude: number | null
      deliverylongitude: number | null
      deliveryoption: $Enums.order_deliveryoption
      totalcost: number
      createdAt: Date
      updatedAt: Date
      tracking: $Enums.order_tracking
      farmerid: string
      userId: string
      quantity: number
    }, ExtArgs["result"]["myorder"]>
    composites: {}
  }

  type myorderGetPayload<S extends boolean | null | undefined | myorderDefaultArgs> = $Result.GetResult<Prisma.$myorderPayload, S>

  type myorderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<myorderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MyorderCountAggregateInputType | true
    }

  export interface myorderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['myorder'], meta: { name: 'myorder' } }
    /**
     * Find zero or one Myorder that matches the filter.
     * @param {myorderFindUniqueArgs} args - Arguments to find a Myorder
     * @example
     * // Get one Myorder
     * const myorder = await prisma.myorder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends myorderFindUniqueArgs>(args: SelectSubset<T, myorderFindUniqueArgs<ExtArgs>>): Prisma__myorderClient<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Myorder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {myorderFindUniqueOrThrowArgs} args - Arguments to find a Myorder
     * @example
     * // Get one Myorder
     * const myorder = await prisma.myorder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends myorderFindUniqueOrThrowArgs>(args: SelectSubset<T, myorderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__myorderClient<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Myorder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {myorderFindFirstArgs} args - Arguments to find a Myorder
     * @example
     * // Get one Myorder
     * const myorder = await prisma.myorder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends myorderFindFirstArgs>(args?: SelectSubset<T, myorderFindFirstArgs<ExtArgs>>): Prisma__myorderClient<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Myorder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {myorderFindFirstOrThrowArgs} args - Arguments to find a Myorder
     * @example
     * // Get one Myorder
     * const myorder = await prisma.myorder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends myorderFindFirstOrThrowArgs>(args?: SelectSubset<T, myorderFindFirstOrThrowArgs<ExtArgs>>): Prisma__myorderClient<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Myorders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {myorderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Myorders
     * const myorders = await prisma.myorder.findMany()
     * 
     * // Get first 10 Myorders
     * const myorders = await prisma.myorder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const myorderWithIdOnly = await prisma.myorder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends myorderFindManyArgs>(args?: SelectSubset<T, myorderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Myorder.
     * @param {myorderCreateArgs} args - Arguments to create a Myorder.
     * @example
     * // Create one Myorder
     * const Myorder = await prisma.myorder.create({
     *   data: {
     *     // ... data to create a Myorder
     *   }
     * })
     * 
     */
    create<T extends myorderCreateArgs>(args: SelectSubset<T, myorderCreateArgs<ExtArgs>>): Prisma__myorderClient<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Myorders.
     * @param {myorderCreateManyArgs} args - Arguments to create many Myorders.
     * @example
     * // Create many Myorders
     * const myorder = await prisma.myorder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends myorderCreateManyArgs>(args?: SelectSubset<T, myorderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Myorder.
     * @param {myorderDeleteArgs} args - Arguments to delete one Myorder.
     * @example
     * // Delete one Myorder
     * const Myorder = await prisma.myorder.delete({
     *   where: {
     *     // ... filter to delete one Myorder
     *   }
     * })
     * 
     */
    delete<T extends myorderDeleteArgs>(args: SelectSubset<T, myorderDeleteArgs<ExtArgs>>): Prisma__myorderClient<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Myorder.
     * @param {myorderUpdateArgs} args - Arguments to update one Myorder.
     * @example
     * // Update one Myorder
     * const myorder = await prisma.myorder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends myorderUpdateArgs>(args: SelectSubset<T, myorderUpdateArgs<ExtArgs>>): Prisma__myorderClient<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Myorders.
     * @param {myorderDeleteManyArgs} args - Arguments to filter Myorders to delete.
     * @example
     * // Delete a few Myorders
     * const { count } = await prisma.myorder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends myorderDeleteManyArgs>(args?: SelectSubset<T, myorderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Myorders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {myorderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Myorders
     * const myorder = await prisma.myorder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends myorderUpdateManyArgs>(args: SelectSubset<T, myorderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Myorder.
     * @param {myorderUpsertArgs} args - Arguments to update or create a Myorder.
     * @example
     * // Update or create a Myorder
     * const myorder = await prisma.myorder.upsert({
     *   create: {
     *     // ... data to create a Myorder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Myorder we want to update
     *   }
     * })
     */
    upsert<T extends myorderUpsertArgs>(args: SelectSubset<T, myorderUpsertArgs<ExtArgs>>): Prisma__myorderClient<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Myorders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {myorderCountArgs} args - Arguments to filter Myorders to count.
     * @example
     * // Count the number of Myorders
     * const count = await prisma.myorder.count({
     *   where: {
     *     // ... the filter for the Myorders we want to count
     *   }
     * })
    **/
    count<T extends myorderCountArgs>(
      args?: Subset<T, myorderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MyorderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Myorder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyorderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MyorderAggregateArgs>(args: Subset<T, MyorderAggregateArgs>): Prisma.PrismaPromise<GetMyorderAggregateType<T>>

    /**
     * Group by Myorder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {myorderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends myorderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: myorderGroupByArgs['orderBy'] }
        : { orderBy?: myorderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, myorderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMyorderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the myorder model
   */
  readonly fields: myorderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for myorder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__myorderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmer<T extends farmerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, farmerDefaultArgs<ExtArgs>>): Prisma__farmerClient<$Result.GetResult<Prisma.$farmerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the myorder model
   */
  interface myorderFieldRefs {
    readonly id: FieldRef<"myorder", 'String'>
    readonly customertype: FieldRef<"myorder", 'order_customertype'>
    readonly productid: FieldRef<"myorder", 'String'>
    readonly deliverylatitude: FieldRef<"myorder", 'Float'>
    readonly deliverylongitude: FieldRef<"myorder", 'Float'>
    readonly deliveryoption: FieldRef<"myorder", 'order_deliveryoption'>
    readonly totalcost: FieldRef<"myorder", 'Float'>
    readonly createdAt: FieldRef<"myorder", 'DateTime'>
    readonly updatedAt: FieldRef<"myorder", 'DateTime'>
    readonly tracking: FieldRef<"myorder", 'order_tracking'>
    readonly farmerid: FieldRef<"myorder", 'String'>
    readonly userId: FieldRef<"myorder", 'String'>
    readonly quantity: FieldRef<"myorder", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * myorder findUnique
   */
  export type myorderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    /**
     * Filter, which myorder to fetch.
     */
    where: myorderWhereUniqueInput
  }

  /**
   * myorder findUniqueOrThrow
   */
  export type myorderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    /**
     * Filter, which myorder to fetch.
     */
    where: myorderWhereUniqueInput
  }

  /**
   * myorder findFirst
   */
  export type myorderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    /**
     * Filter, which myorder to fetch.
     */
    where?: myorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of myorders to fetch.
     */
    orderBy?: myorderOrderByWithRelationInput | myorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for myorders.
     */
    cursor?: myorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` myorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` myorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of myorders.
     */
    distinct?: MyorderScalarFieldEnum | MyorderScalarFieldEnum[]
  }

  /**
   * myorder findFirstOrThrow
   */
  export type myorderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    /**
     * Filter, which myorder to fetch.
     */
    where?: myorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of myorders to fetch.
     */
    orderBy?: myorderOrderByWithRelationInput | myorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for myorders.
     */
    cursor?: myorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` myorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` myorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of myorders.
     */
    distinct?: MyorderScalarFieldEnum | MyorderScalarFieldEnum[]
  }

  /**
   * myorder findMany
   */
  export type myorderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    /**
     * Filter, which myorders to fetch.
     */
    where?: myorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of myorders to fetch.
     */
    orderBy?: myorderOrderByWithRelationInput | myorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing myorders.
     */
    cursor?: myorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` myorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` myorders.
     */
    skip?: number
    distinct?: MyorderScalarFieldEnum | MyorderScalarFieldEnum[]
  }

  /**
   * myorder create
   */
  export type myorderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    /**
     * The data needed to create a myorder.
     */
    data: XOR<myorderCreateInput, myorderUncheckedCreateInput>
  }

  /**
   * myorder createMany
   */
  export type myorderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many myorders.
     */
    data: myorderCreateManyInput | myorderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * myorder update
   */
  export type myorderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    /**
     * The data needed to update a myorder.
     */
    data: XOR<myorderUpdateInput, myorderUncheckedUpdateInput>
    /**
     * Choose, which myorder to update.
     */
    where: myorderWhereUniqueInput
  }

  /**
   * myorder updateMany
   */
  export type myorderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update myorders.
     */
    data: XOR<myorderUpdateManyMutationInput, myorderUncheckedUpdateManyInput>
    /**
     * Filter which myorders to update
     */
    where?: myorderWhereInput
    /**
     * Limit how many myorders to update.
     */
    limit?: number
  }

  /**
   * myorder upsert
   */
  export type myorderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    /**
     * The filter to search for the myorder to update in case it exists.
     */
    where: myorderWhereUniqueInput
    /**
     * In case the myorder found by the `where` argument doesn't exist, create a new myorder with this data.
     */
    create: XOR<myorderCreateInput, myorderUncheckedCreateInput>
    /**
     * In case the myorder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<myorderUpdateInput, myorderUncheckedUpdateInput>
  }

  /**
   * myorder delete
   */
  export type myorderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    /**
     * Filter which myorder to delete.
     */
    where: myorderWhereUniqueInput
  }

  /**
   * myorder deleteMany
   */
  export type myorderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which myorders to delete
     */
    where?: myorderWhereInput
    /**
     * Limit how many myorders to delete.
     */
    limit?: number
  }

  /**
   * myorder without action
   */
  export type myorderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    priceperunit: number | null
    quantity: number | null
    discount: number | null
    locationlatitude: number | null
    locationlongitude: number | null
    supplierthreshold: number | null
  }

  export type ProductSumAggregateOutputType = {
    priceperunit: number | null
    quantity: number | null
    discount: number | null
    locationlatitude: number | null
    locationlongitude: number | null
    supplierthreshold: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.product_type | null
    unit: $Enums.product_unit | null
    priceperunit: number | null
    quantity: number | null
    variety: string | null
    perishdate: Date | null
    location: string | null
    status: $Enums.product_status | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    farmerid: string | null
    discount: number | null
    locationlatitude: number | null
    locationlongitude: number | null
    supplierthreshold: number | null
    farmerdelivery: boolean | null
    servicedelivery: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.product_type | null
    unit: $Enums.product_unit | null
    priceperunit: number | null
    quantity: number | null
    variety: string | null
    perishdate: Date | null
    location: string | null
    status: $Enums.product_status | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    farmerid: string | null
    discount: number | null
    locationlatitude: number | null
    locationlongitude: number | null
    supplierthreshold: number | null
    farmerdelivery: boolean | null
    servicedelivery: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    type: number
    unit: number
    priceperunit: number
    quantity: number
    variety: number
    perishdate: number
    location: number
    status: number
    description: number
    images: number
    createdAt: number
    updatedAt: number
    farmerid: number
    discount: number
    locationlatitude: number
    locationlongitude: number
    supplierthreshold: number
    farmerdelivery: number
    servicedelivery: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    priceperunit?: true
    quantity?: true
    discount?: true
    locationlatitude?: true
    locationlongitude?: true
    supplierthreshold?: true
  }

  export type ProductSumAggregateInputType = {
    priceperunit?: true
    quantity?: true
    discount?: true
    locationlatitude?: true
    locationlongitude?: true
    supplierthreshold?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    unit?: true
    priceperunit?: true
    quantity?: true
    variety?: true
    perishdate?: true
    location?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    farmerid?: true
    discount?: true
    locationlatitude?: true
    locationlongitude?: true
    supplierthreshold?: true
    farmerdelivery?: true
    servicedelivery?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    unit?: true
    priceperunit?: true
    quantity?: true
    variety?: true
    perishdate?: true
    location?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    farmerid?: true
    discount?: true
    locationlatitude?: true
    locationlongitude?: true
    supplierthreshold?: true
    farmerdelivery?: true
    servicedelivery?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    unit?: true
    priceperunit?: true
    quantity?: true
    variety?: true
    perishdate?: true
    location?: true
    status?: true
    description?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    farmerid?: true
    discount?: true
    locationlatitude?: true
    locationlongitude?: true
    supplierthreshold?: true
    farmerdelivery?: true
    servicedelivery?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    type: $Enums.product_type
    unit: $Enums.product_unit
    priceperunit: number
    quantity: number
    variety: string
    perishdate: Date
    location: string
    status: $Enums.product_status
    description: string
    images: JsonValue
    createdAt: Date
    updatedAt: Date
    farmerid: string
    discount: number
    locationlatitude: number
    locationlongitude: number
    supplierthreshold: number
    farmerdelivery: boolean
    servicedelivery: boolean
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    unit?: boolean
    priceperunit?: boolean
    quantity?: boolean
    variety?: boolean
    perishdate?: boolean
    location?: boolean
    status?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmerid?: boolean
    discount?: boolean
    locationlatitude?: boolean
    locationlongitude?: boolean
    supplierthreshold?: boolean
    farmerdelivery?: boolean
    servicedelivery?: boolean
    order?: boolean | product$orderArgs<ExtArgs>
    farmer?: boolean | farmerDefaultArgs<ExtArgs>
    review?: boolean | product$reviewArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type productSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    unit?: boolean
    priceperunit?: boolean
    quantity?: boolean
    variety?: boolean
    perishdate?: boolean
    location?: boolean
    status?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmerid?: boolean
    discount?: boolean
    locationlatitude?: boolean
    locationlongitude?: boolean
    supplierthreshold?: boolean
    farmerdelivery?: boolean
    servicedelivery?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "unit" | "priceperunit" | "quantity" | "variety" | "perishdate" | "location" | "status" | "description" | "images" | "createdAt" | "updatedAt" | "farmerid" | "discount" | "locationlatitude" | "locationlongitude" | "supplierthreshold" | "farmerdelivery" | "servicedelivery", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | product$orderArgs<ExtArgs>
    farmer?: boolean | farmerDefaultArgs<ExtArgs>
    review?: boolean | product$reviewArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      order: Prisma.$myorderPayload<ExtArgs>[]
      farmer: Prisma.$farmerPayload<ExtArgs>
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.product_type
      unit: $Enums.product_unit
      priceperunit: number
      quantity: number
      variety: string
      perishdate: Date
      location: string
      status: $Enums.product_status
      description: string
      images: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      farmerid: string
      discount: number
      locationlatitude: number
      locationlongitude: number
      supplierthreshold: number
      farmerdelivery: boolean
      servicedelivery: boolean
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends product$orderArgs<ExtArgs> = {}>(args?: Subset<T, product$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    farmer<T extends farmerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, farmerDefaultArgs<ExtArgs>>): Prisma__farmerClient<$Result.GetResult<Prisma.$farmerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends product$reviewArgs<ExtArgs> = {}>(args?: Subset<T, product$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'String'>
    readonly name: FieldRef<"product", 'String'>
    readonly type: FieldRef<"product", 'product_type'>
    readonly unit: FieldRef<"product", 'product_unit'>
    readonly priceperunit: FieldRef<"product", 'Int'>
    readonly quantity: FieldRef<"product", 'Int'>
    readonly variety: FieldRef<"product", 'String'>
    readonly perishdate: FieldRef<"product", 'DateTime'>
    readonly location: FieldRef<"product", 'String'>
    readonly status: FieldRef<"product", 'product_status'>
    readonly description: FieldRef<"product", 'String'>
    readonly images: FieldRef<"product", 'Json'>
    readonly createdAt: FieldRef<"product", 'DateTime'>
    readonly updatedAt: FieldRef<"product", 'DateTime'>
    readonly farmerid: FieldRef<"product", 'String'>
    readonly discount: FieldRef<"product", 'Int'>
    readonly locationlatitude: FieldRef<"product", 'Float'>
    readonly locationlongitude: FieldRef<"product", 'Float'>
    readonly supplierthreshold: FieldRef<"product", 'Int'>
    readonly farmerdelivery: FieldRef<"product", 'Boolean'>
    readonly servicedelivery: FieldRef<"product", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.order
   */
  export type product$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    where?: myorderWhereInput
    orderBy?: myorderOrderByWithRelationInput | myorderOrderByWithRelationInput[]
    cursor?: myorderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyorderScalarFieldEnum | MyorderScalarFieldEnum[]
  }

  /**
   * product.review
   */
  export type product$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: $Enums.review_rating | null
    comment: string | null
    productid: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    rating: $Enums.review_rating | null
    comment: string | null
    productid: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    rating: number
    comment: number
    productid: number
    _all: number
  }


  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    comment?: true
    productid?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    comment?: true
    productid?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    comment?: true
    productid?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    userId: string
    rating: $Enums.review_rating
    comment: string
    productid: string
    _count: ReviewCountAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    productid?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type reviewSelectScalar = {
    id?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    productid?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rating" | "comment" | "productid", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      rating: $Enums.review_rating
      comment: string
      productid: string
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<"review", 'String'>
    readonly userId: FieldRef<"review", 'String'>
    readonly rating: FieldRef<"review", 'review_rating'>
    readonly comment: FieldRef<"review", 'String'>
    readonly productid: FieldRef<"review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Model supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    phone: string | null
    isactive: boolean | null
    id: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    phone: string | null
    isactive: boolean | null
    id: string | null
  }

  export type SupplierCountAggregateOutputType = {
    firstname: number
    lastname: number
    email: number
    password: number
    phone: number
    isactive: number
    id: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    phone?: true
    isactive?: true
    id?: true
  }

  export type SupplierMaxAggregateInputType = {
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    phone?: true
    isactive?: true
    id?: true
  }

  export type SupplierCountAggregateInputType = {
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    phone?: true
    isactive?: true
    id?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplier to aggregate.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type supplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplierWhereInput
    orderBy?: supplierOrderByWithAggregationInput | supplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: supplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive: boolean
    id: string
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends supplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type supplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isactive?: boolean
    id?: boolean
  }, ExtArgs["result"]["supplier"]>



  export type supplierSelectScalar = {
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isactive?: boolean
    id?: boolean
  }

  export type supplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"firstname" | "lastname" | "email" | "password" | "phone" | "isactive" | "id", ExtArgs["result"]["supplier"]>

  export type $supplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supplier"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      firstname: string
      lastname: string
      email: string
      password: string
      phone: string
      isactive: boolean
      id: string
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type supplierGetPayload<S extends boolean | null | undefined | supplierDefaultArgs> = $Result.GetResult<Prisma.$supplierPayload, S>

  type supplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<supplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface supplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supplier'], meta: { name: 'supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {supplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supplierFindUniqueArgs>(args: SelectSubset<T, supplierFindUniqueArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supplierFindUniqueOrThrowArgs>(args: SelectSubset<T, supplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supplierFindFirstArgs>(args?: SelectSubset<T, supplierFindFirstArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supplierFindFirstOrThrowArgs>(args?: SelectSubset<T, supplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `firstname`
     * const supplierWithFirstnameOnly = await prisma.supplier.findMany({ select: { firstname: true } })
     * 
     */
    findMany<T extends supplierFindManyArgs>(args?: SelectSubset<T, supplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {supplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends supplierCreateArgs>(args: SelectSubset<T, supplierCreateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {supplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supplierCreateManyArgs>(args?: SelectSubset<T, supplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Supplier.
     * @param {supplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends supplierDeleteArgs>(args: SelectSubset<T, supplierDeleteArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {supplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supplierUpdateArgs>(args: SelectSubset<T, supplierUpdateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {supplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supplierDeleteManyArgs>(args?: SelectSubset<T, supplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supplierUpdateManyArgs>(args: SelectSubset<T, supplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {supplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends supplierUpsertArgs>(args: SelectSubset<T, supplierUpsertArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends supplierCountArgs>(
      args?: Subset<T, supplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends supplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supplierGroupByArgs['orderBy'] }
        : { orderBy?: supplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, supplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supplier model
   */
  readonly fields: supplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the supplier model
   */
  interface supplierFieldRefs {
    readonly firstname: FieldRef<"supplier", 'String'>
    readonly lastname: FieldRef<"supplier", 'String'>
    readonly email: FieldRef<"supplier", 'String'>
    readonly password: FieldRef<"supplier", 'String'>
    readonly phone: FieldRef<"supplier", 'String'>
    readonly isactive: FieldRef<"supplier", 'Boolean'>
    readonly id: FieldRef<"supplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * supplier findUnique
   */
  export type supplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findUniqueOrThrow
   */
  export type supplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findFirst
   */
  export type supplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findFirstOrThrow
   */
  export type supplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findMany
   */
  export type supplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier create
   */
  export type supplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data needed to create a supplier.
     */
    data: XOR<supplierCreateInput, supplierUncheckedCreateInput>
  }

  /**
   * supplier createMany
   */
  export type supplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplier update
   */
  export type supplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data needed to update a supplier.
     */
    data: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
    /**
     * Choose, which supplier to update.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier updateMany
   */
  export type supplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * supplier upsert
   */
  export type supplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The filter to search for the supplier to update in case it exists.
     */
    where: supplierWhereUniqueInput
    /**
     * In case the supplier found by the `where` argument doesn't exist, create a new supplier with this data.
     */
    create: XOR<supplierCreateInput, supplierUncheckedCreateInput>
    /**
     * In case the supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
  }

  /**
   * supplier delete
   */
  export type supplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Filter which supplier to delete.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier deleteMany
   */
  export type supplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to delete.
     */
    limit?: number
  }

  /**
   * supplier without action
   */
  export type supplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    firstname: string | null
    isactive: boolean | null
    email: string | null
    usertype: $Enums.user_usertype | null
    id: string | null
  }

  export type UserMaxAggregateOutputType = {
    firstname: string | null
    isactive: boolean | null
    email: string | null
    usertype: $Enums.user_usertype | null
    id: string | null
  }

  export type UserCountAggregateOutputType = {
    firstname: number
    isactive: number
    email: number
    usertype: number
    id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    firstname?: true
    isactive?: true
    email?: true
    usertype?: true
    id?: true
  }

  export type UserMaxAggregateInputType = {
    firstname?: true
    isactive?: true
    email?: true
    usertype?: true
    id?: true
  }

  export type UserCountAggregateInputType = {
    firstname?: true
    isactive?: true
    email?: true
    usertype?: true
    id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    firstname: string
    isactive: boolean
    email: string
    usertype: $Enums.user_usertype
    id: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    firstname?: boolean
    isactive?: boolean
    email?: boolean
    usertype?: boolean
    id?: boolean
    order?: boolean | user$orderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    firstname?: boolean
    isactive?: boolean
    email?: boolean
    usertype?: boolean
    id?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"firstname" | "isactive" | "email" | "usertype" | "id", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | user$orderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      order: Prisma.$myorderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      firstname: string
      isactive: boolean
      email: string
      usertype: $Enums.user_usertype
      id: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `firstname`
     * const userWithFirstnameOnly = await prisma.user.findMany({ select: { firstname: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends user$orderArgs<ExtArgs> = {}>(args?: Subset<T, user$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$myorderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly firstname: FieldRef<"user", 'String'>
    readonly isactive: FieldRef<"user", 'Boolean'>
    readonly email: FieldRef<"user", 'String'>
    readonly usertype: FieldRef<"user", 'user_usertype'>
    readonly id: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.order
   */
  export type user$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the myorder
     */
    select?: myorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the myorder
     */
    omit?: myorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: myorderInclude<ExtArgs> | null
    where?: myorderWhereInput
    orderBy?: myorderOrderByWithRelationInput | myorderOrderByWithRelationInput[]
    cursor?: myorderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyorderScalarFieldEnum | MyorderScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model worker
   */

  export type AggregateWorker = {
    _count: WorkerCountAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  export type WorkerMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    isactive: boolean | null
  }

  export type WorkerMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    isactive: boolean | null
  }

  export type WorkerCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    isactive: number
    _all: number
  }


  export type WorkerMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    isactive?: true
  }

  export type WorkerMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    isactive?: true
  }

  export type WorkerCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    isactive?: true
    _all?: true
  }

  export type WorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which worker to aggregate.
     */
    where?: workerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workerOrderByWithRelationInput | workerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workers
    **/
    _count?: true | WorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerMaxAggregateInputType
  }

  export type GetWorkerAggregateType<T extends WorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorker[P]>
      : GetScalarType<T[P], AggregateWorker[P]>
  }




  export type workerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workerWhereInput
    orderBy?: workerOrderByWithAggregationInput | workerOrderByWithAggregationInput[]
    by: WorkerScalarFieldEnum[] | WorkerScalarFieldEnum
    having?: workerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerCountAggregateInputType | true
    _min?: WorkerMinAggregateInputType
    _max?: WorkerMaxAggregateInputType
  }

  export type WorkerGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    email: string
    password: string
    isactive: boolean
    _count: WorkerCountAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  type GetWorkerGroupByPayload<T extends workerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerGroupByOutputType[P]>
        }
      >
    >


  export type workerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    isactive?: boolean
  }, ExtArgs["result"]["worker"]>



  export type workerSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    isactive?: boolean
  }

  export type workerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "isactive", ExtArgs["result"]["worker"]>

  export type $workerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "worker"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      email: string
      password: string
      isactive: boolean
    }, ExtArgs["result"]["worker"]>
    composites: {}
  }

  type workerGetPayload<S extends boolean | null | undefined | workerDefaultArgs> = $Result.GetResult<Prisma.$workerPayload, S>

  type workerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkerCountAggregateInputType | true
    }

  export interface workerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['worker'], meta: { name: 'worker' } }
    /**
     * Find zero or one Worker that matches the filter.
     * @param {workerFindUniqueArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workerFindUniqueArgs>(args: SelectSubset<T, workerFindUniqueArgs<ExtArgs>>): Prisma__workerClient<$Result.GetResult<Prisma.$workerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Worker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workerFindUniqueOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workerFindUniqueOrThrowArgs>(args: SelectSubset<T, workerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workerClient<$Result.GetResult<Prisma.$workerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workerFindFirstArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workerFindFirstArgs>(args?: SelectSubset<T, workerFindFirstArgs<ExtArgs>>): Prisma__workerClient<$Result.GetResult<Prisma.$workerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workerFindFirstOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workerFindFirstOrThrowArgs>(args?: SelectSubset<T, workerFindFirstOrThrowArgs<ExtArgs>>): Prisma__workerClient<$Result.GetResult<Prisma.$workerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workers
     * const workers = await prisma.worker.findMany()
     * 
     * // Get first 10 Workers
     * const workers = await prisma.worker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workerWithIdOnly = await prisma.worker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workerFindManyArgs>(args?: SelectSubset<T, workerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Worker.
     * @param {workerCreateArgs} args - Arguments to create a Worker.
     * @example
     * // Create one Worker
     * const Worker = await prisma.worker.create({
     *   data: {
     *     // ... data to create a Worker
     *   }
     * })
     * 
     */
    create<T extends workerCreateArgs>(args: SelectSubset<T, workerCreateArgs<ExtArgs>>): Prisma__workerClient<$Result.GetResult<Prisma.$workerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workers.
     * @param {workerCreateManyArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workerCreateManyArgs>(args?: SelectSubset<T, workerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Worker.
     * @param {workerDeleteArgs} args - Arguments to delete one Worker.
     * @example
     * // Delete one Worker
     * const Worker = await prisma.worker.delete({
     *   where: {
     *     // ... filter to delete one Worker
     *   }
     * })
     * 
     */
    delete<T extends workerDeleteArgs>(args: SelectSubset<T, workerDeleteArgs<ExtArgs>>): Prisma__workerClient<$Result.GetResult<Prisma.$workerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Worker.
     * @param {workerUpdateArgs} args - Arguments to update one Worker.
     * @example
     * // Update one Worker
     * const worker = await prisma.worker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workerUpdateArgs>(args: SelectSubset<T, workerUpdateArgs<ExtArgs>>): Prisma__workerClient<$Result.GetResult<Prisma.$workerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workers.
     * @param {workerDeleteManyArgs} args - Arguments to filter Workers to delete.
     * @example
     * // Delete a few Workers
     * const { count } = await prisma.worker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workerDeleteManyArgs>(args?: SelectSubset<T, workerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workerUpdateManyArgs>(args: SelectSubset<T, workerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Worker.
     * @param {workerUpsertArgs} args - Arguments to update or create a Worker.
     * @example
     * // Update or create a Worker
     * const worker = await prisma.worker.upsert({
     *   create: {
     *     // ... data to create a Worker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worker we want to update
     *   }
     * })
     */
    upsert<T extends workerUpsertArgs>(args: SelectSubset<T, workerUpsertArgs<ExtArgs>>): Prisma__workerClient<$Result.GetResult<Prisma.$workerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workerCountArgs} args - Arguments to filter Workers to count.
     * @example
     * // Count the number of Workers
     * const count = await prisma.worker.count({
     *   where: {
     *     // ... the filter for the Workers we want to count
     *   }
     * })
    **/
    count<T extends workerCountArgs>(
      args?: Subset<T, workerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkerAggregateArgs>(args: Subset<T, WorkerAggregateArgs>): Prisma.PrismaPromise<GetWorkerAggregateType<T>>

    /**
     * Group by Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workerGroupByArgs['orderBy'] }
        : { orderBy?: workerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the worker model
   */
  readonly fields: workerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for worker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the worker model
   */
  interface workerFieldRefs {
    readonly id: FieldRef<"worker", 'String'>
    readonly firstname: FieldRef<"worker", 'String'>
    readonly lastname: FieldRef<"worker", 'String'>
    readonly email: FieldRef<"worker", 'String'>
    readonly password: FieldRef<"worker", 'String'>
    readonly isactive: FieldRef<"worker", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * worker findUnique
   */
  export type workerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker
     */
    select?: workerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worker
     */
    omit?: workerOmit<ExtArgs> | null
    /**
     * Filter, which worker to fetch.
     */
    where: workerWhereUniqueInput
  }

  /**
   * worker findUniqueOrThrow
   */
  export type workerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker
     */
    select?: workerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worker
     */
    omit?: workerOmit<ExtArgs> | null
    /**
     * Filter, which worker to fetch.
     */
    where: workerWhereUniqueInput
  }

  /**
   * worker findFirst
   */
  export type workerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker
     */
    select?: workerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worker
     */
    omit?: workerOmit<ExtArgs> | null
    /**
     * Filter, which worker to fetch.
     */
    where?: workerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workerOrderByWithRelationInput | workerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workers.
     */
    cursor?: workerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * worker findFirstOrThrow
   */
  export type workerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker
     */
    select?: workerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worker
     */
    omit?: workerOmit<ExtArgs> | null
    /**
     * Filter, which worker to fetch.
     */
    where?: workerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workerOrderByWithRelationInput | workerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workers.
     */
    cursor?: workerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * worker findMany
   */
  export type workerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker
     */
    select?: workerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worker
     */
    omit?: workerOmit<ExtArgs> | null
    /**
     * Filter, which workers to fetch.
     */
    where?: workerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workers to fetch.
     */
    orderBy?: workerOrderByWithRelationInput | workerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workers.
     */
    cursor?: workerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workers.
     */
    skip?: number
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * worker create
   */
  export type workerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker
     */
    select?: workerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worker
     */
    omit?: workerOmit<ExtArgs> | null
    /**
     * The data needed to create a worker.
     */
    data: XOR<workerCreateInput, workerUncheckedCreateInput>
  }

  /**
   * worker createMany
   */
  export type workerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workers.
     */
    data: workerCreateManyInput | workerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * worker update
   */
  export type workerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker
     */
    select?: workerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worker
     */
    omit?: workerOmit<ExtArgs> | null
    /**
     * The data needed to update a worker.
     */
    data: XOR<workerUpdateInput, workerUncheckedUpdateInput>
    /**
     * Choose, which worker to update.
     */
    where: workerWhereUniqueInput
  }

  /**
   * worker updateMany
   */
  export type workerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workers.
     */
    data: XOR<workerUpdateManyMutationInput, workerUncheckedUpdateManyInput>
    /**
     * Filter which workers to update
     */
    where?: workerWhereInput
    /**
     * Limit how many workers to update.
     */
    limit?: number
  }

  /**
   * worker upsert
   */
  export type workerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker
     */
    select?: workerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worker
     */
    omit?: workerOmit<ExtArgs> | null
    /**
     * The filter to search for the worker to update in case it exists.
     */
    where: workerWhereUniqueInput
    /**
     * In case the worker found by the `where` argument doesn't exist, create a new worker with this data.
     */
    create: XOR<workerCreateInput, workerUncheckedCreateInput>
    /**
     * In case the worker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workerUpdateInput, workerUncheckedUpdateInput>
  }

  /**
   * worker delete
   */
  export type workerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker
     */
    select?: workerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worker
     */
    omit?: workerOmit<ExtArgs> | null
    /**
     * Filter which worker to delete.
     */
    where: workerWhereUniqueInput
  }

  /**
   * worker deleteMany
   */
  export type workerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workers to delete
     */
    where?: workerWhereInput
    /**
     * Limit how many workers to delete.
     */
    limit?: number
  }

  /**
   * worker without action
   */
  export type workerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worker
     */
    select?: workerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worker
     */
    omit?: workerOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    isactive: 'isactive'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const BuyerScalarFieldEnum: {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    phone: 'phone',
    isactive: 'isactive',
    id: 'id'
  };

  export type BuyerScalarFieldEnum = (typeof BuyerScalarFieldEnum)[keyof typeof BuyerScalarFieldEnum]


  export const FarmerScalarFieldEnum: {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    phone: 'phone',
    isactive: 'isactive',
    id: 'id'
  };

  export type FarmerScalarFieldEnum = (typeof FarmerScalarFieldEnum)[keyof typeof FarmerScalarFieldEnum]


  export const MyorderScalarFieldEnum: {
    id: 'id',
    customertype: 'customertype',
    productid: 'productid',
    deliverylatitude: 'deliverylatitude',
    deliverylongitude: 'deliverylongitude',
    deliveryoption: 'deliveryoption',
    totalcost: 'totalcost',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tracking: 'tracking',
    farmerid: 'farmerid',
    userId: 'userId',
    quantity: 'quantity'
  };

  export type MyorderScalarFieldEnum = (typeof MyorderScalarFieldEnum)[keyof typeof MyorderScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    unit: 'unit',
    priceperunit: 'priceperunit',
    quantity: 'quantity',
    variety: 'variety',
    perishdate: 'perishdate',
    location: 'location',
    status: 'status',
    description: 'description',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    farmerid: 'farmerid',
    discount: 'discount',
    locationlatitude: 'locationlatitude',
    locationlongitude: 'locationlongitude',
    supplierthreshold: 'supplierthreshold',
    farmerdelivery: 'farmerdelivery',
    servicedelivery: 'servicedelivery'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rating: 'rating',
    comment: 'comment',
    productid: 'productid'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    phone: 'phone',
    isactive: 'isactive',
    id: 'id'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const UserScalarFieldEnum: {
    firstname: 'firstname',
    isactive: 'isactive',
    email: 'email',
    usertype: 'usertype',
    id: 'id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkerScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    isactive: 'isactive'
  };

  export type WorkerScalarFieldEnum = (typeof WorkerScalarFieldEnum)[keyof typeof WorkerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const adminOrderByRelevanceFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const buyerOrderByRelevanceFieldEnum: {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    phone: 'phone',
    id: 'id'
  };

  export type buyerOrderByRelevanceFieldEnum = (typeof buyerOrderByRelevanceFieldEnum)[keyof typeof buyerOrderByRelevanceFieldEnum]


  export const farmerOrderByRelevanceFieldEnum: {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    phone: 'phone',
    id: 'id'
  };

  export type farmerOrderByRelevanceFieldEnum = (typeof farmerOrderByRelevanceFieldEnum)[keyof typeof farmerOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const myorderOrderByRelevanceFieldEnum: {
    id: 'id',
    productid: 'productid',
    farmerid: 'farmerid',
    userId: 'userId'
  };

  export type myorderOrderByRelevanceFieldEnum = (typeof myorderOrderByRelevanceFieldEnum)[keyof typeof myorderOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const productOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    variety: 'variety',
    location: 'location',
    description: 'description',
    farmerid: 'farmerid'
  };

  export type productOrderByRelevanceFieldEnum = (typeof productOrderByRelevanceFieldEnum)[keyof typeof productOrderByRelevanceFieldEnum]


  export const reviewOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    comment: 'comment',
    productid: 'productid'
  };

  export type reviewOrderByRelevanceFieldEnum = (typeof reviewOrderByRelevanceFieldEnum)[keyof typeof reviewOrderByRelevanceFieldEnum]


  export const supplierOrderByRelevanceFieldEnum: {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    phone: 'phone',
    id: 'id'
  };

  export type supplierOrderByRelevanceFieldEnum = (typeof supplierOrderByRelevanceFieldEnum)[keyof typeof supplierOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    firstname: 'firstname',
    email: 'email',
    id: 'id'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const workerOrderByRelevanceFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password'
  };

  export type workerOrderByRelevanceFieldEnum = (typeof workerOrderByRelevanceFieldEnum)[keyof typeof workerOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'order_customertype'
   */
  export type Enumorder_customertypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_customertype'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'order_deliveryoption'
   */
  export type Enumorder_deliveryoptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_deliveryoption'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'order_tracking'
   */
  export type Enumorder_trackingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_tracking'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'product_type'
   */
  export type Enumproduct_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'product_type'>
    


  /**
   * Reference to a field of type 'product_unit'
   */
  export type Enumproduct_unitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'product_unit'>
    


  /**
   * Reference to a field of type 'product_status'
   */
  export type Enumproduct_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'product_status'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'review_rating'
   */
  export type Enumreview_ratingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'review_rating'>
    


  /**
   * Reference to a field of type 'user_usertype'
   */
  export type Enumuser_usertypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_usertype'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: StringFilter<"admin"> | string
    firstname?: StringFilter<"admin"> | string
    lastname?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    isactive?: BoolFilter<"admin"> | boolean
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isactive?: SortOrder
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    firstname?: StringFilter<"admin"> | string
    lastname?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    isactive?: BoolFilter<"admin"> | boolean
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isactive?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"admin"> | string
    firstname?: StringWithAggregatesFilter<"admin"> | string
    lastname?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    isactive?: BoolWithAggregatesFilter<"admin"> | boolean
  }

  export type buyerWhereInput = {
    AND?: buyerWhereInput | buyerWhereInput[]
    OR?: buyerWhereInput[]
    NOT?: buyerWhereInput | buyerWhereInput[]
    firstname?: StringFilter<"buyer"> | string
    lastname?: StringFilter<"buyer"> | string
    email?: StringFilter<"buyer"> | string
    password?: StringFilter<"buyer"> | string
    phone?: StringFilter<"buyer"> | string
    isactive?: BoolFilter<"buyer"> | boolean
    id?: StringFilter<"buyer"> | string
  }

  export type buyerOrderByWithRelationInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
    _relevance?: buyerOrderByRelevanceInput
  }

  export type buyerWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    id?: string
    AND?: buyerWhereInput | buyerWhereInput[]
    OR?: buyerWhereInput[]
    NOT?: buyerWhereInput | buyerWhereInput[]
    firstname?: StringFilter<"buyer"> | string
    lastname?: StringFilter<"buyer"> | string
    password?: StringFilter<"buyer"> | string
    phone?: StringFilter<"buyer"> | string
    isactive?: BoolFilter<"buyer"> | boolean
  }, "id" | "email">

  export type buyerOrderByWithAggregationInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
    _count?: buyerCountOrderByAggregateInput
    _max?: buyerMaxOrderByAggregateInput
    _min?: buyerMinOrderByAggregateInput
  }

  export type buyerScalarWhereWithAggregatesInput = {
    AND?: buyerScalarWhereWithAggregatesInput | buyerScalarWhereWithAggregatesInput[]
    OR?: buyerScalarWhereWithAggregatesInput[]
    NOT?: buyerScalarWhereWithAggregatesInput | buyerScalarWhereWithAggregatesInput[]
    firstname?: StringWithAggregatesFilter<"buyer"> | string
    lastname?: StringWithAggregatesFilter<"buyer"> | string
    email?: StringWithAggregatesFilter<"buyer"> | string
    password?: StringWithAggregatesFilter<"buyer"> | string
    phone?: StringWithAggregatesFilter<"buyer"> | string
    isactive?: BoolWithAggregatesFilter<"buyer"> | boolean
    id?: StringWithAggregatesFilter<"buyer"> | string
  }

  export type farmerWhereInput = {
    AND?: farmerWhereInput | farmerWhereInput[]
    OR?: farmerWhereInput[]
    NOT?: farmerWhereInput | farmerWhereInput[]
    firstname?: StringFilter<"farmer"> | string
    lastname?: StringFilter<"farmer"> | string
    email?: StringFilter<"farmer"> | string
    password?: StringFilter<"farmer"> | string
    phone?: StringFilter<"farmer"> | string
    isactive?: BoolFilter<"farmer"> | boolean
    id?: StringFilter<"farmer"> | string
    order?: MyorderListRelationFilter
    product?: ProductListRelationFilter
  }

  export type farmerOrderByWithRelationInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
    order?: myorderOrderByRelationAggregateInput
    product?: productOrderByRelationAggregateInput
    _relevance?: farmerOrderByRelevanceInput
  }

  export type farmerWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    id?: string
    AND?: farmerWhereInput | farmerWhereInput[]
    OR?: farmerWhereInput[]
    NOT?: farmerWhereInput | farmerWhereInput[]
    firstname?: StringFilter<"farmer"> | string
    lastname?: StringFilter<"farmer"> | string
    password?: StringFilter<"farmer"> | string
    phone?: StringFilter<"farmer"> | string
    isactive?: BoolFilter<"farmer"> | boolean
    order?: MyorderListRelationFilter
    product?: ProductListRelationFilter
  }, "id" | "email">

  export type farmerOrderByWithAggregationInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
    _count?: farmerCountOrderByAggregateInput
    _max?: farmerMaxOrderByAggregateInput
    _min?: farmerMinOrderByAggregateInput
  }

  export type farmerScalarWhereWithAggregatesInput = {
    AND?: farmerScalarWhereWithAggregatesInput | farmerScalarWhereWithAggregatesInput[]
    OR?: farmerScalarWhereWithAggregatesInput[]
    NOT?: farmerScalarWhereWithAggregatesInput | farmerScalarWhereWithAggregatesInput[]
    firstname?: StringWithAggregatesFilter<"farmer"> | string
    lastname?: StringWithAggregatesFilter<"farmer"> | string
    email?: StringWithAggregatesFilter<"farmer"> | string
    password?: StringWithAggregatesFilter<"farmer"> | string
    phone?: StringWithAggregatesFilter<"farmer"> | string
    isactive?: BoolWithAggregatesFilter<"farmer"> | boolean
    id?: StringWithAggregatesFilter<"farmer"> | string
  }

  export type myorderWhereInput = {
    AND?: myorderWhereInput | myorderWhereInput[]
    OR?: myorderWhereInput[]
    NOT?: myorderWhereInput | myorderWhereInput[]
    id?: StringFilter<"myorder"> | string
    customertype?: Enumorder_customertypeFilter<"myorder"> | $Enums.order_customertype
    productid?: StringFilter<"myorder"> | string
    deliverylatitude?: FloatNullableFilter<"myorder"> | number | null
    deliverylongitude?: FloatNullableFilter<"myorder"> | number | null
    deliveryoption?: Enumorder_deliveryoptionFilter<"myorder"> | $Enums.order_deliveryoption
    totalcost?: FloatFilter<"myorder"> | number
    createdAt?: DateTimeFilter<"myorder"> | Date | string
    updatedAt?: DateTimeFilter<"myorder"> | Date | string
    tracking?: Enumorder_trackingFilter<"myorder"> | $Enums.order_tracking
    farmerid?: StringFilter<"myorder"> | string
    userId?: StringFilter<"myorder"> | string
    quantity?: IntFilter<"myorder"> | number
    farmer?: XOR<FarmerScalarRelationFilter, farmerWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type myorderOrderByWithRelationInput = {
    id?: SortOrder
    customertype?: SortOrder
    productid?: SortOrder
    deliverylatitude?: SortOrderInput | SortOrder
    deliverylongitude?: SortOrderInput | SortOrder
    deliveryoption?: SortOrder
    totalcost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tracking?: SortOrder
    farmerid?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
    farmer?: farmerOrderByWithRelationInput
    product?: productOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: myorderOrderByRelevanceInput
  }

  export type myorderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: myorderWhereInput | myorderWhereInput[]
    OR?: myorderWhereInput[]
    NOT?: myorderWhereInput | myorderWhereInput[]
    customertype?: Enumorder_customertypeFilter<"myorder"> | $Enums.order_customertype
    productid?: StringFilter<"myorder"> | string
    deliverylatitude?: FloatNullableFilter<"myorder"> | number | null
    deliverylongitude?: FloatNullableFilter<"myorder"> | number | null
    deliveryoption?: Enumorder_deliveryoptionFilter<"myorder"> | $Enums.order_deliveryoption
    totalcost?: FloatFilter<"myorder"> | number
    createdAt?: DateTimeFilter<"myorder"> | Date | string
    updatedAt?: DateTimeFilter<"myorder"> | Date | string
    tracking?: Enumorder_trackingFilter<"myorder"> | $Enums.order_tracking
    farmerid?: StringFilter<"myorder"> | string
    userId?: StringFilter<"myorder"> | string
    quantity?: IntFilter<"myorder"> | number
    farmer?: XOR<FarmerScalarRelationFilter, farmerWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type myorderOrderByWithAggregationInput = {
    id?: SortOrder
    customertype?: SortOrder
    productid?: SortOrder
    deliverylatitude?: SortOrderInput | SortOrder
    deliverylongitude?: SortOrderInput | SortOrder
    deliveryoption?: SortOrder
    totalcost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tracking?: SortOrder
    farmerid?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
    _count?: myorderCountOrderByAggregateInput
    _avg?: myorderAvgOrderByAggregateInput
    _max?: myorderMaxOrderByAggregateInput
    _min?: myorderMinOrderByAggregateInput
    _sum?: myorderSumOrderByAggregateInput
  }

  export type myorderScalarWhereWithAggregatesInput = {
    AND?: myorderScalarWhereWithAggregatesInput | myorderScalarWhereWithAggregatesInput[]
    OR?: myorderScalarWhereWithAggregatesInput[]
    NOT?: myorderScalarWhereWithAggregatesInput | myorderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"myorder"> | string
    customertype?: Enumorder_customertypeWithAggregatesFilter<"myorder"> | $Enums.order_customertype
    productid?: StringWithAggregatesFilter<"myorder"> | string
    deliverylatitude?: FloatNullableWithAggregatesFilter<"myorder"> | number | null
    deliverylongitude?: FloatNullableWithAggregatesFilter<"myorder"> | number | null
    deliveryoption?: Enumorder_deliveryoptionWithAggregatesFilter<"myorder"> | $Enums.order_deliveryoption
    totalcost?: FloatWithAggregatesFilter<"myorder"> | number
    createdAt?: DateTimeWithAggregatesFilter<"myorder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"myorder"> | Date | string
    tracking?: Enumorder_trackingWithAggregatesFilter<"myorder"> | $Enums.order_tracking
    farmerid?: StringWithAggregatesFilter<"myorder"> | string
    userId?: StringWithAggregatesFilter<"myorder"> | string
    quantity?: IntWithAggregatesFilter<"myorder"> | number
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: StringFilter<"product"> | string
    name?: StringFilter<"product"> | string
    type?: Enumproduct_typeFilter<"product"> | $Enums.product_type
    unit?: Enumproduct_unitFilter<"product"> | $Enums.product_unit
    priceperunit?: IntFilter<"product"> | number
    quantity?: IntFilter<"product"> | number
    variety?: StringFilter<"product"> | string
    perishdate?: DateTimeFilter<"product"> | Date | string
    location?: StringFilter<"product"> | string
    status?: Enumproduct_statusFilter<"product"> | $Enums.product_status
    description?: StringFilter<"product"> | string
    images?: JsonFilter<"product">
    createdAt?: DateTimeFilter<"product"> | Date | string
    updatedAt?: DateTimeFilter<"product"> | Date | string
    farmerid?: StringFilter<"product"> | string
    discount?: IntFilter<"product"> | number
    locationlatitude?: FloatFilter<"product"> | number
    locationlongitude?: FloatFilter<"product"> | number
    supplierthreshold?: IntFilter<"product"> | number
    farmerdelivery?: BoolFilter<"product"> | boolean
    servicedelivery?: BoolFilter<"product"> | boolean
    order?: MyorderListRelationFilter
    farmer?: XOR<FarmerScalarRelationFilter, farmerWhereInput>
    review?: ReviewListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    priceperunit?: SortOrder
    quantity?: SortOrder
    variety?: SortOrder
    perishdate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmerid?: SortOrder
    discount?: SortOrder
    locationlatitude?: SortOrder
    locationlongitude?: SortOrder
    supplierthreshold?: SortOrder
    farmerdelivery?: SortOrder
    servicedelivery?: SortOrder
    order?: myorderOrderByRelationAggregateInput
    farmer?: farmerOrderByWithRelationInput
    review?: reviewOrderByRelationAggregateInput
    _relevance?: productOrderByRelevanceInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    type?: Enumproduct_typeFilter<"product"> | $Enums.product_type
    unit?: Enumproduct_unitFilter<"product"> | $Enums.product_unit
    priceperunit?: IntFilter<"product"> | number
    quantity?: IntFilter<"product"> | number
    variety?: StringFilter<"product"> | string
    perishdate?: DateTimeFilter<"product"> | Date | string
    location?: StringFilter<"product"> | string
    status?: Enumproduct_statusFilter<"product"> | $Enums.product_status
    description?: StringFilter<"product"> | string
    images?: JsonFilter<"product">
    createdAt?: DateTimeFilter<"product"> | Date | string
    updatedAt?: DateTimeFilter<"product"> | Date | string
    farmerid?: StringFilter<"product"> | string
    discount?: IntFilter<"product"> | number
    locationlatitude?: FloatFilter<"product"> | number
    locationlongitude?: FloatFilter<"product"> | number
    supplierthreshold?: IntFilter<"product"> | number
    farmerdelivery?: BoolFilter<"product"> | boolean
    servicedelivery?: BoolFilter<"product"> | boolean
    order?: MyorderListRelationFilter
    farmer?: XOR<FarmerScalarRelationFilter, farmerWhereInput>
    review?: ReviewListRelationFilter
  }, "id">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    priceperunit?: SortOrder
    quantity?: SortOrder
    variety?: SortOrder
    perishdate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmerid?: SortOrder
    discount?: SortOrder
    locationlatitude?: SortOrder
    locationlongitude?: SortOrder
    supplierthreshold?: SortOrder
    farmerdelivery?: SortOrder
    servicedelivery?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"product"> | string
    name?: StringWithAggregatesFilter<"product"> | string
    type?: Enumproduct_typeWithAggregatesFilter<"product"> | $Enums.product_type
    unit?: Enumproduct_unitWithAggregatesFilter<"product"> | $Enums.product_unit
    priceperunit?: IntWithAggregatesFilter<"product"> | number
    quantity?: IntWithAggregatesFilter<"product"> | number
    variety?: StringWithAggregatesFilter<"product"> | string
    perishdate?: DateTimeWithAggregatesFilter<"product"> | Date | string
    location?: StringWithAggregatesFilter<"product"> | string
    status?: Enumproduct_statusWithAggregatesFilter<"product"> | $Enums.product_status
    description?: StringWithAggregatesFilter<"product"> | string
    images?: JsonWithAggregatesFilter<"product">
    createdAt?: DateTimeWithAggregatesFilter<"product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"product"> | Date | string
    farmerid?: StringWithAggregatesFilter<"product"> | string
    discount?: IntWithAggregatesFilter<"product"> | number
    locationlatitude?: FloatWithAggregatesFilter<"product"> | number
    locationlongitude?: FloatWithAggregatesFilter<"product"> | number
    supplierthreshold?: IntWithAggregatesFilter<"product"> | number
    farmerdelivery?: BoolWithAggregatesFilter<"product"> | boolean
    servicedelivery?: BoolWithAggregatesFilter<"product"> | boolean
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    id?: StringFilter<"review"> | string
    userId?: StringFilter<"review"> | string
    rating?: Enumreview_ratingFilter<"review"> | $Enums.review_rating
    comment?: StringFilter<"review"> | string
    productid?: StringFilter<"review"> | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    productid?: SortOrder
    product?: productOrderByWithRelationInput
    _relevance?: reviewOrderByRelevanceInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    userId?: StringFilter<"review"> | string
    rating?: Enumreview_ratingFilter<"review"> | $Enums.review_rating
    comment?: StringFilter<"review"> | string
    productid?: StringFilter<"review"> | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "id">

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    productid?: SortOrder
    _count?: reviewCountOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"review"> | string
    userId?: StringWithAggregatesFilter<"review"> | string
    rating?: Enumreview_ratingWithAggregatesFilter<"review"> | $Enums.review_rating
    comment?: StringWithAggregatesFilter<"review"> | string
    productid?: StringWithAggregatesFilter<"review"> | string
  }

  export type supplierWhereInput = {
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    firstname?: StringFilter<"supplier"> | string
    lastname?: StringFilter<"supplier"> | string
    email?: StringFilter<"supplier"> | string
    password?: StringFilter<"supplier"> | string
    phone?: StringFilter<"supplier"> | string
    isactive?: BoolFilter<"supplier"> | boolean
    id?: StringFilter<"supplier"> | string
  }

  export type supplierOrderByWithRelationInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
    _relevance?: supplierOrderByRelevanceInput
  }

  export type supplierWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    id?: string
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    firstname?: StringFilter<"supplier"> | string
    lastname?: StringFilter<"supplier"> | string
    password?: StringFilter<"supplier"> | string
    phone?: StringFilter<"supplier"> | string
    isactive?: BoolFilter<"supplier"> | boolean
  }, "id" | "email">

  export type supplierOrderByWithAggregationInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
    _count?: supplierCountOrderByAggregateInput
    _max?: supplierMaxOrderByAggregateInput
    _min?: supplierMinOrderByAggregateInput
  }

  export type supplierScalarWhereWithAggregatesInput = {
    AND?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    OR?: supplierScalarWhereWithAggregatesInput[]
    NOT?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    firstname?: StringWithAggregatesFilter<"supplier"> | string
    lastname?: StringWithAggregatesFilter<"supplier"> | string
    email?: StringWithAggregatesFilter<"supplier"> | string
    password?: StringWithAggregatesFilter<"supplier"> | string
    phone?: StringWithAggregatesFilter<"supplier"> | string
    isactive?: BoolWithAggregatesFilter<"supplier"> | boolean
    id?: StringWithAggregatesFilter<"supplier"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    firstname?: StringFilter<"user"> | string
    isactive?: BoolFilter<"user"> | boolean
    email?: StringFilter<"user"> | string
    usertype?: Enumuser_usertypeFilter<"user"> | $Enums.user_usertype
    id?: StringFilter<"user"> | string
    order?: MyorderListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    firstname?: SortOrder
    isactive?: SortOrder
    email?: SortOrder
    usertype?: SortOrder
    id?: SortOrder
    order?: myorderOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    id?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    firstname?: StringFilter<"user"> | string
    isactive?: BoolFilter<"user"> | boolean
    usertype?: Enumuser_usertypeFilter<"user"> | $Enums.user_usertype
    order?: MyorderListRelationFilter
  }, "email" | "id">

  export type userOrderByWithAggregationInput = {
    firstname?: SortOrder
    isactive?: SortOrder
    email?: SortOrder
    usertype?: SortOrder
    id?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    firstname?: StringWithAggregatesFilter<"user"> | string
    isactive?: BoolWithAggregatesFilter<"user"> | boolean
    email?: StringWithAggregatesFilter<"user"> | string
    usertype?: Enumuser_usertypeWithAggregatesFilter<"user"> | $Enums.user_usertype
    id?: StringWithAggregatesFilter<"user"> | string
  }

  export type workerWhereInput = {
    AND?: workerWhereInput | workerWhereInput[]
    OR?: workerWhereInput[]
    NOT?: workerWhereInput | workerWhereInput[]
    id?: StringFilter<"worker"> | string
    firstname?: StringFilter<"worker"> | string
    lastname?: StringFilter<"worker"> | string
    email?: StringFilter<"worker"> | string
    password?: StringFilter<"worker"> | string
    isactive?: BoolFilter<"worker"> | boolean
  }

  export type workerOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isactive?: SortOrder
    _relevance?: workerOrderByRelevanceInput
  }

  export type workerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: workerWhereInput | workerWhereInput[]
    OR?: workerWhereInput[]
    NOT?: workerWhereInput | workerWhereInput[]
    firstname?: StringFilter<"worker"> | string
    lastname?: StringFilter<"worker"> | string
    password?: StringFilter<"worker"> | string
    isactive?: BoolFilter<"worker"> | boolean
  }, "id" | "email">

  export type workerOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isactive?: SortOrder
    _count?: workerCountOrderByAggregateInput
    _max?: workerMaxOrderByAggregateInput
    _min?: workerMinOrderByAggregateInput
  }

  export type workerScalarWhereWithAggregatesInput = {
    AND?: workerScalarWhereWithAggregatesInput | workerScalarWhereWithAggregatesInput[]
    OR?: workerScalarWhereWithAggregatesInput[]
    NOT?: workerScalarWhereWithAggregatesInput | workerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"worker"> | string
    firstname?: StringWithAggregatesFilter<"worker"> | string
    lastname?: StringWithAggregatesFilter<"worker"> | string
    email?: StringWithAggregatesFilter<"worker"> | string
    password?: StringWithAggregatesFilter<"worker"> | string
    isactive?: BoolWithAggregatesFilter<"worker"> | boolean
  }

  export type adminCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    isactive?: boolean
  }

  export type adminUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    isactive?: boolean
  }

  export type adminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adminCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    isactive?: boolean
  }

  export type adminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type buyerCreateInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
  }

  export type buyerUncheckedCreateInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
  }

  export type buyerUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
  }

  export type buyerUncheckedUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
  }

  export type buyerCreateManyInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
  }

  export type buyerUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
  }

  export type buyerUncheckedUpdateManyInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
  }

  export type farmerCreateInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
    order?: myorderCreateNestedManyWithoutFarmerInput
    product?: productCreateNestedManyWithoutFarmerInput
  }

  export type farmerUncheckedCreateInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
    order?: myorderUncheckedCreateNestedManyWithoutFarmerInput
    product?: productUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type farmerUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    order?: myorderUpdateManyWithoutFarmerNestedInput
    product?: productUpdateManyWithoutFarmerNestedInput
  }

  export type farmerUncheckedUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    order?: myorderUncheckedUpdateManyWithoutFarmerNestedInput
    product?: productUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type farmerCreateManyInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
  }

  export type farmerUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
  }

  export type farmerUncheckedUpdateManyInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
  }

  export type myorderCreateInput = {
    id?: string
    customertype: $Enums.order_customertype
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    quantity: number
    farmer: farmerCreateNestedOneWithoutOrderInput
    product: productCreateNestedOneWithoutOrderInput
    user: userCreateNestedOneWithoutOrderInput
  }

  export type myorderUncheckedCreateInput = {
    id?: string
    customertype: $Enums.order_customertype
    productid: string
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    farmerid: string
    userId: string
    quantity: number
  }

  export type myorderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    quantity?: IntFieldUpdateOperationsInput | number
    farmer?: farmerUpdateOneRequiredWithoutOrderNestedInput
    product?: productUpdateOneRequiredWithoutOrderNestedInput
    user?: userUpdateOneRequiredWithoutOrderNestedInput
  }

  export type myorderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    productid?: StringFieldUpdateOperationsInput | string
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    farmerid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type myorderCreateManyInput = {
    id?: string
    customertype: $Enums.order_customertype
    productid: string
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    farmerid: string
    userId: string
    quantity: number
  }

  export type myorderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type myorderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    productid?: StringFieldUpdateOperationsInput | string
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    farmerid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type productCreateInput = {
    id?: string
    name: string
    type: $Enums.product_type
    unit: $Enums.product_unit
    priceperunit: number
    quantity: number
    variety: string
    perishdate: Date | string
    location: string
    status: $Enums.product_status
    description: string
    images: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discount?: number
    locationlatitude?: number
    locationlongitude?: number
    supplierthreshold?: number
    farmerdelivery?: boolean
    servicedelivery?: boolean
    order?: myorderCreateNestedManyWithoutProductInput
    farmer: farmerCreateNestedOneWithoutProductInput
    review?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.product_type
    unit: $Enums.product_unit
    priceperunit: number
    quantity: number
    variety: string
    perishdate: Date | string
    location: string
    status: $Enums.product_status
    description: string
    images: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    farmerid: string
    discount?: number
    locationlatitude?: number
    locationlongitude?: number
    supplierthreshold?: number
    farmerdelivery?: boolean
    servicedelivery?: boolean
    order?: myorderUncheckedCreateNestedManyWithoutProductInput
    review?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumproduct_typeFieldUpdateOperationsInput | $Enums.product_type
    unit?: Enumproduct_unitFieldUpdateOperationsInput | $Enums.product_unit
    priceperunit?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    perishdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    description?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: IntFieldUpdateOperationsInput | number
    locationlatitude?: FloatFieldUpdateOperationsInput | number
    locationlongitude?: FloatFieldUpdateOperationsInput | number
    supplierthreshold?: IntFieldUpdateOperationsInput | number
    farmerdelivery?: BoolFieldUpdateOperationsInput | boolean
    servicedelivery?: BoolFieldUpdateOperationsInput | boolean
    order?: myorderUpdateManyWithoutProductNestedInput
    farmer?: farmerUpdateOneRequiredWithoutProductNestedInput
    review?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumproduct_typeFieldUpdateOperationsInput | $Enums.product_type
    unit?: Enumproduct_unitFieldUpdateOperationsInput | $Enums.product_unit
    priceperunit?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    perishdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    description?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmerid?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    locationlatitude?: FloatFieldUpdateOperationsInput | number
    locationlongitude?: FloatFieldUpdateOperationsInput | number
    supplierthreshold?: IntFieldUpdateOperationsInput | number
    farmerdelivery?: BoolFieldUpdateOperationsInput | boolean
    servicedelivery?: BoolFieldUpdateOperationsInput | boolean
    order?: myorderUncheckedUpdateManyWithoutProductNestedInput
    review?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    id?: string
    name: string
    type: $Enums.product_type
    unit: $Enums.product_unit
    priceperunit: number
    quantity: number
    variety: string
    perishdate: Date | string
    location: string
    status: $Enums.product_status
    description: string
    images: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    farmerid: string
    discount?: number
    locationlatitude?: number
    locationlongitude?: number
    supplierthreshold?: number
    farmerdelivery?: boolean
    servicedelivery?: boolean
  }

  export type productUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumproduct_typeFieldUpdateOperationsInput | $Enums.product_type
    unit?: Enumproduct_unitFieldUpdateOperationsInput | $Enums.product_unit
    priceperunit?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    perishdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    description?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: IntFieldUpdateOperationsInput | number
    locationlatitude?: FloatFieldUpdateOperationsInput | number
    locationlongitude?: FloatFieldUpdateOperationsInput | number
    supplierthreshold?: IntFieldUpdateOperationsInput | number
    farmerdelivery?: BoolFieldUpdateOperationsInput | boolean
    servicedelivery?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumproduct_typeFieldUpdateOperationsInput | $Enums.product_type
    unit?: Enumproduct_unitFieldUpdateOperationsInput | $Enums.product_unit
    priceperunit?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    perishdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    description?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmerid?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    locationlatitude?: FloatFieldUpdateOperationsInput | number
    locationlongitude?: FloatFieldUpdateOperationsInput | number
    supplierthreshold?: IntFieldUpdateOperationsInput | number
    farmerdelivery?: BoolFieldUpdateOperationsInput | boolean
    servicedelivery?: BoolFieldUpdateOperationsInput | boolean
  }

  export type reviewCreateInput = {
    id?: string
    userId: string
    rating: $Enums.review_rating
    comment: string
    product: productCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    id?: string
    userId: string
    rating: $Enums.review_rating
    comment: string
    productid: string
  }

  export type reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: Enumreview_ratingFieldUpdateOperationsInput | $Enums.review_rating
    comment?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: Enumreview_ratingFieldUpdateOperationsInput | $Enums.review_rating
    comment?: StringFieldUpdateOperationsInput | string
    productid?: StringFieldUpdateOperationsInput | string
  }

  export type reviewCreateManyInput = {
    id?: string
    userId: string
    rating: $Enums.review_rating
    comment: string
    productid: string
  }

  export type reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: Enumreview_ratingFieldUpdateOperationsInput | $Enums.review_rating
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: Enumreview_ratingFieldUpdateOperationsInput | $Enums.review_rating
    comment?: StringFieldUpdateOperationsInput | string
    productid?: StringFieldUpdateOperationsInput | string
  }

  export type supplierCreateInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
  }

  export type supplierUncheckedCreateInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
  }

  export type supplierUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
  }

  export type supplierUncheckedUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
  }

  export type supplierCreateManyInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
  }

  export type supplierUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
  }

  export type supplierUncheckedUpdateManyInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    firstname: string
    isactive?: boolean
    email: string
    usertype: $Enums.user_usertype
    id: string
    order?: myorderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    firstname: string
    isactive?: boolean
    email: string
    usertype: $Enums.user_usertype
    id: string
    order?: myorderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    usertype?: Enumuser_usertypeFieldUpdateOperationsInput | $Enums.user_usertype
    id?: StringFieldUpdateOperationsInput | string
    order?: myorderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    usertype?: Enumuser_usertypeFieldUpdateOperationsInput | $Enums.user_usertype
    id?: StringFieldUpdateOperationsInput | string
    order?: myorderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    firstname: string
    isactive?: boolean
    email: string
    usertype: $Enums.user_usertype
    id: string
  }

  export type userUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    usertype?: Enumuser_usertypeFieldUpdateOperationsInput | $Enums.user_usertype
    id?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    usertype?: Enumuser_usertypeFieldUpdateOperationsInput | $Enums.user_usertype
    id?: StringFieldUpdateOperationsInput | string
  }

  export type workerCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    isactive?: boolean
  }

  export type workerUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    isactive?: boolean
  }

  export type workerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type workerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type workerCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    password: string
    isactive?: boolean
  }

  export type workerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type workerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isactive?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isactive?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isactive?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type buyerOrderByRelevanceInput = {
    fields: buyerOrderByRelevanceFieldEnum | buyerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type buyerCountOrderByAggregateInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
  }

  export type buyerMaxOrderByAggregateInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
  }

  export type buyerMinOrderByAggregateInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
  }

  export type MyorderListRelationFilter = {
    every?: myorderWhereInput
    some?: myorderWhereInput
    none?: myorderWhereInput
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type myorderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type farmerOrderByRelevanceInput = {
    fields: farmerOrderByRelevanceFieldEnum | farmerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type farmerCountOrderByAggregateInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
  }

  export type farmerMaxOrderByAggregateInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
  }

  export type farmerMinOrderByAggregateInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
  }

  export type Enumorder_customertypeFilter<$PrismaModel = never> = {
    equals?: $Enums.order_customertype | Enumorder_customertypeFieldRefInput<$PrismaModel>
    in?: $Enums.order_customertype[]
    notIn?: $Enums.order_customertype[]
    not?: NestedEnumorder_customertypeFilter<$PrismaModel> | $Enums.order_customertype
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Enumorder_deliveryoptionFilter<$PrismaModel = never> = {
    equals?: $Enums.order_deliveryoption | Enumorder_deliveryoptionFieldRefInput<$PrismaModel>
    in?: $Enums.order_deliveryoption[]
    notIn?: $Enums.order_deliveryoption[]
    not?: NestedEnumorder_deliveryoptionFilter<$PrismaModel> | $Enums.order_deliveryoption
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumorder_trackingFilter<$PrismaModel = never> = {
    equals?: $Enums.order_tracking | Enumorder_trackingFieldRefInput<$PrismaModel>
    in?: $Enums.order_tracking[]
    notIn?: $Enums.order_tracking[]
    not?: NestedEnumorder_trackingFilter<$PrismaModel> | $Enums.order_tracking
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FarmerScalarRelationFilter = {
    is?: farmerWhereInput
    isNot?: farmerWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type myorderOrderByRelevanceInput = {
    fields: myorderOrderByRelevanceFieldEnum | myorderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type myorderCountOrderByAggregateInput = {
    id?: SortOrder
    customertype?: SortOrder
    productid?: SortOrder
    deliverylatitude?: SortOrder
    deliverylongitude?: SortOrder
    deliveryoption?: SortOrder
    totalcost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tracking?: SortOrder
    farmerid?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
  }

  export type myorderAvgOrderByAggregateInput = {
    deliverylatitude?: SortOrder
    deliverylongitude?: SortOrder
    totalcost?: SortOrder
    quantity?: SortOrder
  }

  export type myorderMaxOrderByAggregateInput = {
    id?: SortOrder
    customertype?: SortOrder
    productid?: SortOrder
    deliverylatitude?: SortOrder
    deliverylongitude?: SortOrder
    deliveryoption?: SortOrder
    totalcost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tracking?: SortOrder
    farmerid?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
  }

  export type myorderMinOrderByAggregateInput = {
    id?: SortOrder
    customertype?: SortOrder
    productid?: SortOrder
    deliverylatitude?: SortOrder
    deliverylongitude?: SortOrder
    deliveryoption?: SortOrder
    totalcost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tracking?: SortOrder
    farmerid?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
  }

  export type myorderSumOrderByAggregateInput = {
    deliverylatitude?: SortOrder
    deliverylongitude?: SortOrder
    totalcost?: SortOrder
    quantity?: SortOrder
  }

  export type Enumorder_customertypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_customertype | Enumorder_customertypeFieldRefInput<$PrismaModel>
    in?: $Enums.order_customertype[]
    notIn?: $Enums.order_customertype[]
    not?: NestedEnumorder_customertypeWithAggregatesFilter<$PrismaModel> | $Enums.order_customertype
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_customertypeFilter<$PrismaModel>
    _max?: NestedEnumorder_customertypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type Enumorder_deliveryoptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_deliveryoption | Enumorder_deliveryoptionFieldRefInput<$PrismaModel>
    in?: $Enums.order_deliveryoption[]
    notIn?: $Enums.order_deliveryoption[]
    not?: NestedEnumorder_deliveryoptionWithAggregatesFilter<$PrismaModel> | $Enums.order_deliveryoption
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_deliveryoptionFilter<$PrismaModel>
    _max?: NestedEnumorder_deliveryoptionFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumorder_trackingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_tracking | Enumorder_trackingFieldRefInput<$PrismaModel>
    in?: $Enums.order_tracking[]
    notIn?: $Enums.order_tracking[]
    not?: NestedEnumorder_trackingWithAggregatesFilter<$PrismaModel> | $Enums.order_tracking
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_trackingFilter<$PrismaModel>
    _max?: NestedEnumorder_trackingFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumproduct_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.product_type | Enumproduct_typeFieldRefInput<$PrismaModel>
    in?: $Enums.product_type[]
    notIn?: $Enums.product_type[]
    not?: NestedEnumproduct_typeFilter<$PrismaModel> | $Enums.product_type
  }

  export type Enumproduct_unitFilter<$PrismaModel = never> = {
    equals?: $Enums.product_unit | Enumproduct_unitFieldRefInput<$PrismaModel>
    in?: $Enums.product_unit[]
    notIn?: $Enums.product_unit[]
    not?: NestedEnumproduct_unitFilter<$PrismaModel> | $Enums.product_unit
  }

  export type Enumproduct_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[]
    notIn?: $Enums.product_status[]
    not?: NestedEnumproduct_statusFilter<$PrismaModel> | $Enums.product_status
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productOrderByRelevanceInput = {
    fields: productOrderByRelevanceFieldEnum | productOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    priceperunit?: SortOrder
    quantity?: SortOrder
    variety?: SortOrder
    perishdate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmerid?: SortOrder
    discount?: SortOrder
    locationlatitude?: SortOrder
    locationlongitude?: SortOrder
    supplierthreshold?: SortOrder
    farmerdelivery?: SortOrder
    servicedelivery?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    priceperunit?: SortOrder
    quantity?: SortOrder
    discount?: SortOrder
    locationlatitude?: SortOrder
    locationlongitude?: SortOrder
    supplierthreshold?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    priceperunit?: SortOrder
    quantity?: SortOrder
    variety?: SortOrder
    perishdate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmerid?: SortOrder
    discount?: SortOrder
    locationlatitude?: SortOrder
    locationlongitude?: SortOrder
    supplierthreshold?: SortOrder
    farmerdelivery?: SortOrder
    servicedelivery?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    priceperunit?: SortOrder
    quantity?: SortOrder
    variety?: SortOrder
    perishdate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmerid?: SortOrder
    discount?: SortOrder
    locationlatitude?: SortOrder
    locationlongitude?: SortOrder
    supplierthreshold?: SortOrder
    farmerdelivery?: SortOrder
    servicedelivery?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    priceperunit?: SortOrder
    quantity?: SortOrder
    discount?: SortOrder
    locationlatitude?: SortOrder
    locationlongitude?: SortOrder
    supplierthreshold?: SortOrder
  }

  export type Enumproduct_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_type | Enumproduct_typeFieldRefInput<$PrismaModel>
    in?: $Enums.product_type[]
    notIn?: $Enums.product_type[]
    not?: NestedEnumproduct_typeWithAggregatesFilter<$PrismaModel> | $Enums.product_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_typeFilter<$PrismaModel>
    _max?: NestedEnumproduct_typeFilter<$PrismaModel>
  }

  export type Enumproduct_unitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_unit | Enumproduct_unitFieldRefInput<$PrismaModel>
    in?: $Enums.product_unit[]
    notIn?: $Enums.product_unit[]
    not?: NestedEnumproduct_unitWithAggregatesFilter<$PrismaModel> | $Enums.product_unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_unitFilter<$PrismaModel>
    _max?: NestedEnumproduct_unitFilter<$PrismaModel>
  }

  export type Enumproduct_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[]
    notIn?: $Enums.product_status[]
    not?: NestedEnumproduct_statusWithAggregatesFilter<$PrismaModel> | $Enums.product_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_statusFilter<$PrismaModel>
    _max?: NestedEnumproduct_statusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type Enumreview_ratingFilter<$PrismaModel = never> = {
    equals?: $Enums.review_rating | Enumreview_ratingFieldRefInput<$PrismaModel>
    in?: $Enums.review_rating[]
    notIn?: $Enums.review_rating[]
    not?: NestedEnumreview_ratingFilter<$PrismaModel> | $Enums.review_rating
  }

  export type reviewOrderByRelevanceInput = {
    fields: reviewOrderByRelevanceFieldEnum | reviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    productid?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    productid?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    productid?: SortOrder
  }

  export type Enumreview_ratingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.review_rating | Enumreview_ratingFieldRefInput<$PrismaModel>
    in?: $Enums.review_rating[]
    notIn?: $Enums.review_rating[]
    not?: NestedEnumreview_ratingWithAggregatesFilter<$PrismaModel> | $Enums.review_rating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreview_ratingFilter<$PrismaModel>
    _max?: NestedEnumreview_ratingFilter<$PrismaModel>
  }

  export type supplierOrderByRelevanceInput = {
    fields: supplierOrderByRelevanceFieldEnum | supplierOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type supplierCountOrderByAggregateInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
  }

  export type supplierMaxOrderByAggregateInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
  }

  export type supplierMinOrderByAggregateInput = {
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isactive?: SortOrder
    id?: SortOrder
  }

  export type Enumuser_usertypeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_usertype | Enumuser_usertypeFieldRefInput<$PrismaModel>
    in?: $Enums.user_usertype[]
    notIn?: $Enums.user_usertype[]
    not?: NestedEnumuser_usertypeFilter<$PrismaModel> | $Enums.user_usertype
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    firstname?: SortOrder
    isactive?: SortOrder
    email?: SortOrder
    usertype?: SortOrder
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    firstname?: SortOrder
    isactive?: SortOrder
    email?: SortOrder
    usertype?: SortOrder
    id?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    firstname?: SortOrder
    isactive?: SortOrder
    email?: SortOrder
    usertype?: SortOrder
    id?: SortOrder
  }

  export type Enumuser_usertypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_usertype | Enumuser_usertypeFieldRefInput<$PrismaModel>
    in?: $Enums.user_usertype[]
    notIn?: $Enums.user_usertype[]
    not?: NestedEnumuser_usertypeWithAggregatesFilter<$PrismaModel> | $Enums.user_usertype
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_usertypeFilter<$PrismaModel>
    _max?: NestedEnumuser_usertypeFilter<$PrismaModel>
  }

  export type workerOrderByRelevanceInput = {
    fields: workerOrderByRelevanceFieldEnum | workerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type workerCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isactive?: SortOrder
  }

  export type workerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isactive?: SortOrder
  }

  export type workerMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isactive?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type myorderCreateNestedManyWithoutFarmerInput = {
    create?: XOR<myorderCreateWithoutFarmerInput, myorderUncheckedCreateWithoutFarmerInput> | myorderCreateWithoutFarmerInput[] | myorderUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutFarmerInput | myorderCreateOrConnectWithoutFarmerInput[]
    createMany?: myorderCreateManyFarmerInputEnvelope
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
  }

  export type productCreateNestedManyWithoutFarmerInput = {
    create?: XOR<productCreateWithoutFarmerInput, productUncheckedCreateWithoutFarmerInput> | productCreateWithoutFarmerInput[] | productUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: productCreateOrConnectWithoutFarmerInput | productCreateOrConnectWithoutFarmerInput[]
    createMany?: productCreateManyFarmerInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type myorderUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<myorderCreateWithoutFarmerInput, myorderUncheckedCreateWithoutFarmerInput> | myorderCreateWithoutFarmerInput[] | myorderUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutFarmerInput | myorderCreateOrConnectWithoutFarmerInput[]
    createMany?: myorderCreateManyFarmerInputEnvelope
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutFarmerInput = {
    create?: XOR<productCreateWithoutFarmerInput, productUncheckedCreateWithoutFarmerInput> | productCreateWithoutFarmerInput[] | productUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: productCreateOrConnectWithoutFarmerInput | productCreateOrConnectWithoutFarmerInput[]
    createMany?: productCreateManyFarmerInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type myorderUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<myorderCreateWithoutFarmerInput, myorderUncheckedCreateWithoutFarmerInput> | myorderCreateWithoutFarmerInput[] | myorderUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutFarmerInput | myorderCreateOrConnectWithoutFarmerInput[]
    upsert?: myorderUpsertWithWhereUniqueWithoutFarmerInput | myorderUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: myorderCreateManyFarmerInputEnvelope
    set?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    disconnect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    delete?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    update?: myorderUpdateWithWhereUniqueWithoutFarmerInput | myorderUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: myorderUpdateManyWithWhereWithoutFarmerInput | myorderUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: myorderScalarWhereInput | myorderScalarWhereInput[]
  }

  export type productUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<productCreateWithoutFarmerInput, productUncheckedCreateWithoutFarmerInput> | productCreateWithoutFarmerInput[] | productUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: productCreateOrConnectWithoutFarmerInput | productCreateOrConnectWithoutFarmerInput[]
    upsert?: productUpsertWithWhereUniqueWithoutFarmerInput | productUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: productCreateManyFarmerInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutFarmerInput | productUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: productUpdateManyWithWhereWithoutFarmerInput | productUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type myorderUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<myorderCreateWithoutFarmerInput, myorderUncheckedCreateWithoutFarmerInput> | myorderCreateWithoutFarmerInput[] | myorderUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutFarmerInput | myorderCreateOrConnectWithoutFarmerInput[]
    upsert?: myorderUpsertWithWhereUniqueWithoutFarmerInput | myorderUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: myorderCreateManyFarmerInputEnvelope
    set?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    disconnect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    delete?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    update?: myorderUpdateWithWhereUniqueWithoutFarmerInput | myorderUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: myorderUpdateManyWithWhereWithoutFarmerInput | myorderUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: myorderScalarWhereInput | myorderScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutFarmerNestedInput = {
    create?: XOR<productCreateWithoutFarmerInput, productUncheckedCreateWithoutFarmerInput> | productCreateWithoutFarmerInput[] | productUncheckedCreateWithoutFarmerInput[]
    connectOrCreate?: productCreateOrConnectWithoutFarmerInput | productCreateOrConnectWithoutFarmerInput[]
    upsert?: productUpsertWithWhereUniqueWithoutFarmerInput | productUpsertWithWhereUniqueWithoutFarmerInput[]
    createMany?: productCreateManyFarmerInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutFarmerInput | productUpdateWithWhereUniqueWithoutFarmerInput[]
    updateMany?: productUpdateManyWithWhereWithoutFarmerInput | productUpdateManyWithWhereWithoutFarmerInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type farmerCreateNestedOneWithoutOrderInput = {
    create?: XOR<farmerCreateWithoutOrderInput, farmerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: farmerCreateOrConnectWithoutOrderInput
    connect?: farmerWhereUniqueInput
  }

  export type productCreateNestedOneWithoutOrderInput = {
    create?: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
    connectOrCreate?: productCreateOrConnectWithoutOrderInput
    connect?: productWhereUniqueInput
  }

  export type userCreateNestedOneWithoutOrderInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
    connectOrCreate?: userCreateOrConnectWithoutOrderInput
    connect?: userWhereUniqueInput
  }

  export type Enumorder_customertypeFieldUpdateOperationsInput = {
    set?: $Enums.order_customertype
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumorder_deliveryoptionFieldUpdateOperationsInput = {
    set?: $Enums.order_deliveryoption
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumorder_trackingFieldUpdateOperationsInput = {
    set?: $Enums.order_tracking
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type farmerUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<farmerCreateWithoutOrderInput, farmerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: farmerCreateOrConnectWithoutOrderInput
    upsert?: farmerUpsertWithoutOrderInput
    connect?: farmerWhereUniqueInput
    update?: XOR<XOR<farmerUpdateToOneWithWhereWithoutOrderInput, farmerUpdateWithoutOrderInput>, farmerUncheckedUpdateWithoutOrderInput>
  }

  export type productUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
    connectOrCreate?: productCreateOrConnectWithoutOrderInput
    upsert?: productUpsertWithoutOrderInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutOrderInput, productUpdateWithoutOrderInput>, productUncheckedUpdateWithoutOrderInput>
  }

  export type userUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
    connectOrCreate?: userCreateOrConnectWithoutOrderInput
    upsert?: userUpsertWithoutOrderInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutOrderInput, userUpdateWithoutOrderInput>, userUncheckedUpdateWithoutOrderInput>
  }

  export type myorderCreateNestedManyWithoutProductInput = {
    create?: XOR<myorderCreateWithoutProductInput, myorderUncheckedCreateWithoutProductInput> | myorderCreateWithoutProductInput[] | myorderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutProductInput | myorderCreateOrConnectWithoutProductInput[]
    createMany?: myorderCreateManyProductInputEnvelope
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
  }

  export type farmerCreateNestedOneWithoutProductInput = {
    create?: XOR<farmerCreateWithoutProductInput, farmerUncheckedCreateWithoutProductInput>
    connectOrCreate?: farmerCreateOrConnectWithoutProductInput
    connect?: farmerWhereUniqueInput
  }

  export type reviewCreateNestedManyWithoutProductInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type myorderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<myorderCreateWithoutProductInput, myorderUncheckedCreateWithoutProductInput> | myorderCreateWithoutProductInput[] | myorderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutProductInput | myorderCreateOrConnectWithoutProductInput[]
    createMany?: myorderCreateManyProductInputEnvelope
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type Enumproduct_typeFieldUpdateOperationsInput = {
    set?: $Enums.product_type
  }

  export type Enumproduct_unitFieldUpdateOperationsInput = {
    set?: $Enums.product_unit
  }

  export type Enumproduct_statusFieldUpdateOperationsInput = {
    set?: $Enums.product_status
  }

  export type myorderUpdateManyWithoutProductNestedInput = {
    create?: XOR<myorderCreateWithoutProductInput, myorderUncheckedCreateWithoutProductInput> | myorderCreateWithoutProductInput[] | myorderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutProductInput | myorderCreateOrConnectWithoutProductInput[]
    upsert?: myorderUpsertWithWhereUniqueWithoutProductInput | myorderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: myorderCreateManyProductInputEnvelope
    set?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    disconnect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    delete?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    update?: myorderUpdateWithWhereUniqueWithoutProductInput | myorderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: myorderUpdateManyWithWhereWithoutProductInput | myorderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: myorderScalarWhereInput | myorderScalarWhereInput[]
  }

  export type farmerUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<farmerCreateWithoutProductInput, farmerUncheckedCreateWithoutProductInput>
    connectOrCreate?: farmerCreateOrConnectWithoutProductInput
    upsert?: farmerUpsertWithoutProductInput
    connect?: farmerWhereUniqueInput
    update?: XOR<XOR<farmerUpdateToOneWithWhereWithoutProductInput, farmerUpdateWithoutProductInput>, farmerUncheckedUpdateWithoutProductInput>
  }

  export type reviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutProductInput | reviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutProductInput | reviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutProductInput | reviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type myorderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<myorderCreateWithoutProductInput, myorderUncheckedCreateWithoutProductInput> | myorderCreateWithoutProductInput[] | myorderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutProductInput | myorderCreateOrConnectWithoutProductInput[]
    upsert?: myorderUpsertWithWhereUniqueWithoutProductInput | myorderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: myorderCreateManyProductInputEnvelope
    set?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    disconnect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    delete?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    update?: myorderUpdateWithWhereUniqueWithoutProductInput | myorderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: myorderUpdateManyWithWhereWithoutProductInput | myorderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: myorderScalarWhereInput | myorderScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutProductInput | reviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutProductInput | reviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutProductInput | reviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type productCreateNestedOneWithoutReviewInput = {
    create?: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
    connectOrCreate?: productCreateOrConnectWithoutReviewInput
    connect?: productWhereUniqueInput
  }

  export type Enumreview_ratingFieldUpdateOperationsInput = {
    set?: $Enums.review_rating
  }

  export type productUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
    connectOrCreate?: productCreateOrConnectWithoutReviewInput
    upsert?: productUpsertWithoutReviewInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutReviewInput, productUpdateWithoutReviewInput>, productUncheckedUpdateWithoutReviewInput>
  }

  export type myorderCreateNestedManyWithoutUserInput = {
    create?: XOR<myorderCreateWithoutUserInput, myorderUncheckedCreateWithoutUserInput> | myorderCreateWithoutUserInput[] | myorderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutUserInput | myorderCreateOrConnectWithoutUserInput[]
    createMany?: myorderCreateManyUserInputEnvelope
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
  }

  export type myorderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<myorderCreateWithoutUserInput, myorderUncheckedCreateWithoutUserInput> | myorderCreateWithoutUserInput[] | myorderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutUserInput | myorderCreateOrConnectWithoutUserInput[]
    createMany?: myorderCreateManyUserInputEnvelope
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
  }

  export type Enumuser_usertypeFieldUpdateOperationsInput = {
    set?: $Enums.user_usertype
  }

  export type myorderUpdateManyWithoutUserNestedInput = {
    create?: XOR<myorderCreateWithoutUserInput, myorderUncheckedCreateWithoutUserInput> | myorderCreateWithoutUserInput[] | myorderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutUserInput | myorderCreateOrConnectWithoutUserInput[]
    upsert?: myorderUpsertWithWhereUniqueWithoutUserInput | myorderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: myorderCreateManyUserInputEnvelope
    set?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    disconnect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    delete?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    update?: myorderUpdateWithWhereUniqueWithoutUserInput | myorderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: myorderUpdateManyWithWhereWithoutUserInput | myorderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: myorderScalarWhereInput | myorderScalarWhereInput[]
  }

  export type myorderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<myorderCreateWithoutUserInput, myorderUncheckedCreateWithoutUserInput> | myorderCreateWithoutUserInput[] | myorderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: myorderCreateOrConnectWithoutUserInput | myorderCreateOrConnectWithoutUserInput[]
    upsert?: myorderUpsertWithWhereUniqueWithoutUserInput | myorderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: myorderCreateManyUserInputEnvelope
    set?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    disconnect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    delete?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    connect?: myorderWhereUniqueInput | myorderWhereUniqueInput[]
    update?: myorderUpdateWithWhereUniqueWithoutUserInput | myorderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: myorderUpdateManyWithWhereWithoutUserInput | myorderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: myorderScalarWhereInput | myorderScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumorder_customertypeFilter<$PrismaModel = never> = {
    equals?: $Enums.order_customertype | Enumorder_customertypeFieldRefInput<$PrismaModel>
    in?: $Enums.order_customertype[]
    notIn?: $Enums.order_customertype[]
    not?: NestedEnumorder_customertypeFilter<$PrismaModel> | $Enums.order_customertype
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumorder_deliveryoptionFilter<$PrismaModel = never> = {
    equals?: $Enums.order_deliveryoption | Enumorder_deliveryoptionFieldRefInput<$PrismaModel>
    in?: $Enums.order_deliveryoption[]
    notIn?: $Enums.order_deliveryoption[]
    not?: NestedEnumorder_deliveryoptionFilter<$PrismaModel> | $Enums.order_deliveryoption
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumorder_trackingFilter<$PrismaModel = never> = {
    equals?: $Enums.order_tracking | Enumorder_trackingFieldRefInput<$PrismaModel>
    in?: $Enums.order_tracking[]
    notIn?: $Enums.order_tracking[]
    not?: NestedEnumorder_trackingFilter<$PrismaModel> | $Enums.order_tracking
  }

  export type NestedEnumorder_customertypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_customertype | Enumorder_customertypeFieldRefInput<$PrismaModel>
    in?: $Enums.order_customertype[]
    notIn?: $Enums.order_customertype[]
    not?: NestedEnumorder_customertypeWithAggregatesFilter<$PrismaModel> | $Enums.order_customertype
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_customertypeFilter<$PrismaModel>
    _max?: NestedEnumorder_customertypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumorder_deliveryoptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_deliveryoption | Enumorder_deliveryoptionFieldRefInput<$PrismaModel>
    in?: $Enums.order_deliveryoption[]
    notIn?: $Enums.order_deliveryoption[]
    not?: NestedEnumorder_deliveryoptionWithAggregatesFilter<$PrismaModel> | $Enums.order_deliveryoption
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_deliveryoptionFilter<$PrismaModel>
    _max?: NestedEnumorder_deliveryoptionFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumorder_trackingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_tracking | Enumorder_trackingFieldRefInput<$PrismaModel>
    in?: $Enums.order_tracking[]
    notIn?: $Enums.order_tracking[]
    not?: NestedEnumorder_trackingWithAggregatesFilter<$PrismaModel> | $Enums.order_tracking
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_trackingFilter<$PrismaModel>
    _max?: NestedEnumorder_trackingFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumproduct_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.product_type | Enumproduct_typeFieldRefInput<$PrismaModel>
    in?: $Enums.product_type[]
    notIn?: $Enums.product_type[]
    not?: NestedEnumproduct_typeFilter<$PrismaModel> | $Enums.product_type
  }

  export type NestedEnumproduct_unitFilter<$PrismaModel = never> = {
    equals?: $Enums.product_unit | Enumproduct_unitFieldRefInput<$PrismaModel>
    in?: $Enums.product_unit[]
    notIn?: $Enums.product_unit[]
    not?: NestedEnumproduct_unitFilter<$PrismaModel> | $Enums.product_unit
  }

  export type NestedEnumproduct_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[]
    notIn?: $Enums.product_status[]
    not?: NestedEnumproduct_statusFilter<$PrismaModel> | $Enums.product_status
  }

  export type NestedEnumproduct_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_type | Enumproduct_typeFieldRefInput<$PrismaModel>
    in?: $Enums.product_type[]
    notIn?: $Enums.product_type[]
    not?: NestedEnumproduct_typeWithAggregatesFilter<$PrismaModel> | $Enums.product_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_typeFilter<$PrismaModel>
    _max?: NestedEnumproduct_typeFilter<$PrismaModel>
  }

  export type NestedEnumproduct_unitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_unit | Enumproduct_unitFieldRefInput<$PrismaModel>
    in?: $Enums.product_unit[]
    notIn?: $Enums.product_unit[]
    not?: NestedEnumproduct_unitWithAggregatesFilter<$PrismaModel> | $Enums.product_unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_unitFilter<$PrismaModel>
    _max?: NestedEnumproduct_unitFilter<$PrismaModel>
  }

  export type NestedEnumproduct_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.product_status | Enumproduct_statusFieldRefInput<$PrismaModel>
    in?: $Enums.product_status[]
    notIn?: $Enums.product_status[]
    not?: NestedEnumproduct_statusWithAggregatesFilter<$PrismaModel> | $Enums.product_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproduct_statusFilter<$PrismaModel>
    _max?: NestedEnumproduct_statusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumreview_ratingFilter<$PrismaModel = never> = {
    equals?: $Enums.review_rating | Enumreview_ratingFieldRefInput<$PrismaModel>
    in?: $Enums.review_rating[]
    notIn?: $Enums.review_rating[]
    not?: NestedEnumreview_ratingFilter<$PrismaModel> | $Enums.review_rating
  }

  export type NestedEnumreview_ratingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.review_rating | Enumreview_ratingFieldRefInput<$PrismaModel>
    in?: $Enums.review_rating[]
    notIn?: $Enums.review_rating[]
    not?: NestedEnumreview_ratingWithAggregatesFilter<$PrismaModel> | $Enums.review_rating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreview_ratingFilter<$PrismaModel>
    _max?: NestedEnumreview_ratingFilter<$PrismaModel>
  }

  export type NestedEnumuser_usertypeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_usertype | Enumuser_usertypeFieldRefInput<$PrismaModel>
    in?: $Enums.user_usertype[]
    notIn?: $Enums.user_usertype[]
    not?: NestedEnumuser_usertypeFilter<$PrismaModel> | $Enums.user_usertype
  }

  export type NestedEnumuser_usertypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_usertype | Enumuser_usertypeFieldRefInput<$PrismaModel>
    in?: $Enums.user_usertype[]
    notIn?: $Enums.user_usertype[]
    not?: NestedEnumuser_usertypeWithAggregatesFilter<$PrismaModel> | $Enums.user_usertype
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_usertypeFilter<$PrismaModel>
    _max?: NestedEnumuser_usertypeFilter<$PrismaModel>
  }

  export type myorderCreateWithoutFarmerInput = {
    id?: string
    customertype: $Enums.order_customertype
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    quantity: number
    product: productCreateNestedOneWithoutOrderInput
    user: userCreateNestedOneWithoutOrderInput
  }

  export type myorderUncheckedCreateWithoutFarmerInput = {
    id?: string
    customertype: $Enums.order_customertype
    productid: string
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    userId: string
    quantity: number
  }

  export type myorderCreateOrConnectWithoutFarmerInput = {
    where: myorderWhereUniqueInput
    create: XOR<myorderCreateWithoutFarmerInput, myorderUncheckedCreateWithoutFarmerInput>
  }

  export type myorderCreateManyFarmerInputEnvelope = {
    data: myorderCreateManyFarmerInput | myorderCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type productCreateWithoutFarmerInput = {
    id?: string
    name: string
    type: $Enums.product_type
    unit: $Enums.product_unit
    priceperunit: number
    quantity: number
    variety: string
    perishdate: Date | string
    location: string
    status: $Enums.product_status
    description: string
    images: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discount?: number
    locationlatitude?: number
    locationlongitude?: number
    supplierthreshold?: number
    farmerdelivery?: boolean
    servicedelivery?: boolean
    order?: myorderCreateNestedManyWithoutProductInput
    review?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutFarmerInput = {
    id?: string
    name: string
    type: $Enums.product_type
    unit: $Enums.product_unit
    priceperunit: number
    quantity: number
    variety: string
    perishdate: Date | string
    location: string
    status: $Enums.product_status
    description: string
    images: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discount?: number
    locationlatitude?: number
    locationlongitude?: number
    supplierthreshold?: number
    farmerdelivery?: boolean
    servicedelivery?: boolean
    order?: myorderUncheckedCreateNestedManyWithoutProductInput
    review?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutFarmerInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutFarmerInput, productUncheckedCreateWithoutFarmerInput>
  }

  export type productCreateManyFarmerInputEnvelope = {
    data: productCreateManyFarmerInput | productCreateManyFarmerInput[]
    skipDuplicates?: boolean
  }

  export type myorderUpsertWithWhereUniqueWithoutFarmerInput = {
    where: myorderWhereUniqueInput
    update: XOR<myorderUpdateWithoutFarmerInput, myorderUncheckedUpdateWithoutFarmerInput>
    create: XOR<myorderCreateWithoutFarmerInput, myorderUncheckedCreateWithoutFarmerInput>
  }

  export type myorderUpdateWithWhereUniqueWithoutFarmerInput = {
    where: myorderWhereUniqueInput
    data: XOR<myorderUpdateWithoutFarmerInput, myorderUncheckedUpdateWithoutFarmerInput>
  }

  export type myorderUpdateManyWithWhereWithoutFarmerInput = {
    where: myorderScalarWhereInput
    data: XOR<myorderUpdateManyMutationInput, myorderUncheckedUpdateManyWithoutFarmerInput>
  }

  export type myorderScalarWhereInput = {
    AND?: myorderScalarWhereInput | myorderScalarWhereInput[]
    OR?: myorderScalarWhereInput[]
    NOT?: myorderScalarWhereInput | myorderScalarWhereInput[]
    id?: StringFilter<"myorder"> | string
    customertype?: Enumorder_customertypeFilter<"myorder"> | $Enums.order_customertype
    productid?: StringFilter<"myorder"> | string
    deliverylatitude?: FloatNullableFilter<"myorder"> | number | null
    deliverylongitude?: FloatNullableFilter<"myorder"> | number | null
    deliveryoption?: Enumorder_deliveryoptionFilter<"myorder"> | $Enums.order_deliveryoption
    totalcost?: FloatFilter<"myorder"> | number
    createdAt?: DateTimeFilter<"myorder"> | Date | string
    updatedAt?: DateTimeFilter<"myorder"> | Date | string
    tracking?: Enumorder_trackingFilter<"myorder"> | $Enums.order_tracking
    farmerid?: StringFilter<"myorder"> | string
    userId?: StringFilter<"myorder"> | string
    quantity?: IntFilter<"myorder"> | number
  }

  export type productUpsertWithWhereUniqueWithoutFarmerInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutFarmerInput, productUncheckedUpdateWithoutFarmerInput>
    create: XOR<productCreateWithoutFarmerInput, productUncheckedCreateWithoutFarmerInput>
  }

  export type productUpdateWithWhereUniqueWithoutFarmerInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutFarmerInput, productUncheckedUpdateWithoutFarmerInput>
  }

  export type productUpdateManyWithWhereWithoutFarmerInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutFarmerInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    id?: StringFilter<"product"> | string
    name?: StringFilter<"product"> | string
    type?: Enumproduct_typeFilter<"product"> | $Enums.product_type
    unit?: Enumproduct_unitFilter<"product"> | $Enums.product_unit
    priceperunit?: IntFilter<"product"> | number
    quantity?: IntFilter<"product"> | number
    variety?: StringFilter<"product"> | string
    perishdate?: DateTimeFilter<"product"> | Date | string
    location?: StringFilter<"product"> | string
    status?: Enumproduct_statusFilter<"product"> | $Enums.product_status
    description?: StringFilter<"product"> | string
    images?: JsonFilter<"product">
    createdAt?: DateTimeFilter<"product"> | Date | string
    updatedAt?: DateTimeFilter<"product"> | Date | string
    farmerid?: StringFilter<"product"> | string
    discount?: IntFilter<"product"> | number
    locationlatitude?: FloatFilter<"product"> | number
    locationlongitude?: FloatFilter<"product"> | number
    supplierthreshold?: IntFilter<"product"> | number
    farmerdelivery?: BoolFilter<"product"> | boolean
    servicedelivery?: BoolFilter<"product"> | boolean
  }

  export type farmerCreateWithoutOrderInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
    product?: productCreateNestedManyWithoutFarmerInput
  }

  export type farmerUncheckedCreateWithoutOrderInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
    product?: productUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type farmerCreateOrConnectWithoutOrderInput = {
    where: farmerWhereUniqueInput
    create: XOR<farmerCreateWithoutOrderInput, farmerUncheckedCreateWithoutOrderInput>
  }

  export type productCreateWithoutOrderInput = {
    id?: string
    name: string
    type: $Enums.product_type
    unit: $Enums.product_unit
    priceperunit: number
    quantity: number
    variety: string
    perishdate: Date | string
    location: string
    status: $Enums.product_status
    description: string
    images: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discount?: number
    locationlatitude?: number
    locationlongitude?: number
    supplierthreshold?: number
    farmerdelivery?: boolean
    servicedelivery?: boolean
    farmer: farmerCreateNestedOneWithoutProductInput
    review?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutOrderInput = {
    id?: string
    name: string
    type: $Enums.product_type
    unit: $Enums.product_unit
    priceperunit: number
    quantity: number
    variety: string
    perishdate: Date | string
    location: string
    status: $Enums.product_status
    description: string
    images: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    farmerid: string
    discount?: number
    locationlatitude?: number
    locationlongitude?: number
    supplierthreshold?: number
    farmerdelivery?: boolean
    servicedelivery?: boolean
    review?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutOrderInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
  }

  export type userCreateWithoutOrderInput = {
    firstname: string
    isactive?: boolean
    email: string
    usertype: $Enums.user_usertype
    id: string
  }

  export type userUncheckedCreateWithoutOrderInput = {
    firstname: string
    isactive?: boolean
    email: string
    usertype: $Enums.user_usertype
    id: string
  }

  export type userCreateOrConnectWithoutOrderInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
  }

  export type farmerUpsertWithoutOrderInput = {
    update: XOR<farmerUpdateWithoutOrderInput, farmerUncheckedUpdateWithoutOrderInput>
    create: XOR<farmerCreateWithoutOrderInput, farmerUncheckedCreateWithoutOrderInput>
    where?: farmerWhereInput
  }

  export type farmerUpdateToOneWithWhereWithoutOrderInput = {
    where?: farmerWhereInput
    data: XOR<farmerUpdateWithoutOrderInput, farmerUncheckedUpdateWithoutOrderInput>
  }

  export type farmerUpdateWithoutOrderInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    product?: productUpdateManyWithoutFarmerNestedInput
  }

  export type farmerUncheckedUpdateWithoutOrderInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    product?: productUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type productUpsertWithoutOrderInput = {
    update: XOR<productUpdateWithoutOrderInput, productUncheckedUpdateWithoutOrderInput>
    create: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutOrderInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutOrderInput, productUncheckedUpdateWithoutOrderInput>
  }

  export type productUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumproduct_typeFieldUpdateOperationsInput | $Enums.product_type
    unit?: Enumproduct_unitFieldUpdateOperationsInput | $Enums.product_unit
    priceperunit?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    perishdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    description?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: IntFieldUpdateOperationsInput | number
    locationlatitude?: FloatFieldUpdateOperationsInput | number
    locationlongitude?: FloatFieldUpdateOperationsInput | number
    supplierthreshold?: IntFieldUpdateOperationsInput | number
    farmerdelivery?: BoolFieldUpdateOperationsInput | boolean
    servicedelivery?: BoolFieldUpdateOperationsInput | boolean
    farmer?: farmerUpdateOneRequiredWithoutProductNestedInput
    review?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumproduct_typeFieldUpdateOperationsInput | $Enums.product_type
    unit?: Enumproduct_unitFieldUpdateOperationsInput | $Enums.product_unit
    priceperunit?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    perishdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    description?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmerid?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    locationlatitude?: FloatFieldUpdateOperationsInput | number
    locationlongitude?: FloatFieldUpdateOperationsInput | number
    supplierthreshold?: IntFieldUpdateOperationsInput | number
    farmerdelivery?: BoolFieldUpdateOperationsInput | boolean
    servicedelivery?: BoolFieldUpdateOperationsInput | boolean
    review?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type userUpsertWithoutOrderInput = {
    update: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutOrderInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>
  }

  export type userUpdateWithoutOrderInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    usertype?: Enumuser_usertypeFieldUpdateOperationsInput | $Enums.user_usertype
    id?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateWithoutOrderInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    usertype?: Enumuser_usertypeFieldUpdateOperationsInput | $Enums.user_usertype
    id?: StringFieldUpdateOperationsInput | string
  }

  export type myorderCreateWithoutProductInput = {
    id?: string
    customertype: $Enums.order_customertype
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    quantity: number
    farmer: farmerCreateNestedOneWithoutOrderInput
    user: userCreateNestedOneWithoutOrderInput
  }

  export type myorderUncheckedCreateWithoutProductInput = {
    id?: string
    customertype: $Enums.order_customertype
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    farmerid: string
    userId: string
    quantity: number
  }

  export type myorderCreateOrConnectWithoutProductInput = {
    where: myorderWhereUniqueInput
    create: XOR<myorderCreateWithoutProductInput, myorderUncheckedCreateWithoutProductInput>
  }

  export type myorderCreateManyProductInputEnvelope = {
    data: myorderCreateManyProductInput | myorderCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type farmerCreateWithoutProductInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
    order?: myorderCreateNestedManyWithoutFarmerInput
  }

  export type farmerUncheckedCreateWithoutProductInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    phone: string
    isactive?: boolean
    id?: string
    order?: myorderUncheckedCreateNestedManyWithoutFarmerInput
  }

  export type farmerCreateOrConnectWithoutProductInput = {
    where: farmerWhereUniqueInput
    create: XOR<farmerCreateWithoutProductInput, farmerUncheckedCreateWithoutProductInput>
  }

  export type reviewCreateWithoutProductInput = {
    id?: string
    userId: string
    rating: $Enums.review_rating
    comment: string
  }

  export type reviewUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    rating: $Enums.review_rating
    comment: string
  }

  export type reviewCreateOrConnectWithoutProductInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput>
  }

  export type reviewCreateManyProductInputEnvelope = {
    data: reviewCreateManyProductInput | reviewCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type myorderUpsertWithWhereUniqueWithoutProductInput = {
    where: myorderWhereUniqueInput
    update: XOR<myorderUpdateWithoutProductInput, myorderUncheckedUpdateWithoutProductInput>
    create: XOR<myorderCreateWithoutProductInput, myorderUncheckedCreateWithoutProductInput>
  }

  export type myorderUpdateWithWhereUniqueWithoutProductInput = {
    where: myorderWhereUniqueInput
    data: XOR<myorderUpdateWithoutProductInput, myorderUncheckedUpdateWithoutProductInput>
  }

  export type myorderUpdateManyWithWhereWithoutProductInput = {
    where: myorderScalarWhereInput
    data: XOR<myorderUpdateManyMutationInput, myorderUncheckedUpdateManyWithoutProductInput>
  }

  export type farmerUpsertWithoutProductInput = {
    update: XOR<farmerUpdateWithoutProductInput, farmerUncheckedUpdateWithoutProductInput>
    create: XOR<farmerCreateWithoutProductInput, farmerUncheckedCreateWithoutProductInput>
    where?: farmerWhereInput
  }

  export type farmerUpdateToOneWithWhereWithoutProductInput = {
    where?: farmerWhereInput
    data: XOR<farmerUpdateWithoutProductInput, farmerUncheckedUpdateWithoutProductInput>
  }

  export type farmerUpdateWithoutProductInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    order?: myorderUpdateManyWithoutFarmerNestedInput
  }

  export type farmerUncheckedUpdateWithoutProductInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isactive?: BoolFieldUpdateOperationsInput | boolean
    id?: StringFieldUpdateOperationsInput | string
    order?: myorderUncheckedUpdateManyWithoutFarmerNestedInput
  }

  export type reviewUpsertWithWhereUniqueWithoutProductInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutProductInput, reviewUncheckedUpdateWithoutProductInput>
    create: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutProductInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutProductInput, reviewUncheckedUpdateWithoutProductInput>
  }

  export type reviewUpdateManyWithWhereWithoutProductInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutProductInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    id?: StringFilter<"review"> | string
    userId?: StringFilter<"review"> | string
    rating?: Enumreview_ratingFilter<"review"> | $Enums.review_rating
    comment?: StringFilter<"review"> | string
    productid?: StringFilter<"review"> | string
  }

  export type productCreateWithoutReviewInput = {
    id?: string
    name: string
    type: $Enums.product_type
    unit: $Enums.product_unit
    priceperunit: number
    quantity: number
    variety: string
    perishdate: Date | string
    location: string
    status: $Enums.product_status
    description: string
    images: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discount?: number
    locationlatitude?: number
    locationlongitude?: number
    supplierthreshold?: number
    farmerdelivery?: boolean
    servicedelivery?: boolean
    order?: myorderCreateNestedManyWithoutProductInput
    farmer: farmerCreateNestedOneWithoutProductInput
  }

  export type productUncheckedCreateWithoutReviewInput = {
    id?: string
    name: string
    type: $Enums.product_type
    unit: $Enums.product_unit
    priceperunit: number
    quantity: number
    variety: string
    perishdate: Date | string
    location: string
    status: $Enums.product_status
    description: string
    images: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    farmerid: string
    discount?: number
    locationlatitude?: number
    locationlongitude?: number
    supplierthreshold?: number
    farmerdelivery?: boolean
    servicedelivery?: boolean
    order?: myorderUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutReviewInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
  }

  export type productUpsertWithoutReviewInput = {
    update: XOR<productUpdateWithoutReviewInput, productUncheckedUpdateWithoutReviewInput>
    create: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutReviewInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutReviewInput, productUncheckedUpdateWithoutReviewInput>
  }

  export type productUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumproduct_typeFieldUpdateOperationsInput | $Enums.product_type
    unit?: Enumproduct_unitFieldUpdateOperationsInput | $Enums.product_unit
    priceperunit?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    perishdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    description?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: IntFieldUpdateOperationsInput | number
    locationlatitude?: FloatFieldUpdateOperationsInput | number
    locationlongitude?: FloatFieldUpdateOperationsInput | number
    supplierthreshold?: IntFieldUpdateOperationsInput | number
    farmerdelivery?: BoolFieldUpdateOperationsInput | boolean
    servicedelivery?: BoolFieldUpdateOperationsInput | boolean
    order?: myorderUpdateManyWithoutProductNestedInput
    farmer?: farmerUpdateOneRequiredWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumproduct_typeFieldUpdateOperationsInput | $Enums.product_type
    unit?: Enumproduct_unitFieldUpdateOperationsInput | $Enums.product_unit
    priceperunit?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    perishdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    description?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmerid?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    locationlatitude?: FloatFieldUpdateOperationsInput | number
    locationlongitude?: FloatFieldUpdateOperationsInput | number
    supplierthreshold?: IntFieldUpdateOperationsInput | number
    farmerdelivery?: BoolFieldUpdateOperationsInput | boolean
    servicedelivery?: BoolFieldUpdateOperationsInput | boolean
    order?: myorderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type myorderCreateWithoutUserInput = {
    id?: string
    customertype: $Enums.order_customertype
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    quantity: number
    farmer: farmerCreateNestedOneWithoutOrderInput
    product: productCreateNestedOneWithoutOrderInput
  }

  export type myorderUncheckedCreateWithoutUserInput = {
    id?: string
    customertype: $Enums.order_customertype
    productid: string
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    farmerid: string
    quantity: number
  }

  export type myorderCreateOrConnectWithoutUserInput = {
    where: myorderWhereUniqueInput
    create: XOR<myorderCreateWithoutUserInput, myorderUncheckedCreateWithoutUserInput>
  }

  export type myorderCreateManyUserInputEnvelope = {
    data: myorderCreateManyUserInput | myorderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type myorderUpsertWithWhereUniqueWithoutUserInput = {
    where: myorderWhereUniqueInput
    update: XOR<myorderUpdateWithoutUserInput, myorderUncheckedUpdateWithoutUserInput>
    create: XOR<myorderCreateWithoutUserInput, myorderUncheckedCreateWithoutUserInput>
  }

  export type myorderUpdateWithWhereUniqueWithoutUserInput = {
    where: myorderWhereUniqueInput
    data: XOR<myorderUpdateWithoutUserInput, myorderUncheckedUpdateWithoutUserInput>
  }

  export type myorderUpdateManyWithWhereWithoutUserInput = {
    where: myorderScalarWhereInput
    data: XOR<myorderUpdateManyMutationInput, myorderUncheckedUpdateManyWithoutUserInput>
  }

  export type myorderCreateManyFarmerInput = {
    id?: string
    customertype: $Enums.order_customertype
    productid: string
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    userId: string
    quantity: number
  }

  export type productCreateManyFarmerInput = {
    id?: string
    name: string
    type: $Enums.product_type
    unit: $Enums.product_unit
    priceperunit: number
    quantity: number
    variety: string
    perishdate: Date | string
    location: string
    status: $Enums.product_status
    description: string
    images: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    discount?: number
    locationlatitude?: number
    locationlongitude?: number
    supplierthreshold?: number
    farmerdelivery?: boolean
    servicedelivery?: boolean
  }

  export type myorderUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    quantity?: IntFieldUpdateOperationsInput | number
    product?: productUpdateOneRequiredWithoutOrderNestedInput
    user?: userUpdateOneRequiredWithoutOrderNestedInput
  }

  export type myorderUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    productid?: StringFieldUpdateOperationsInput | string
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type myorderUncheckedUpdateManyWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    productid?: StringFieldUpdateOperationsInput | string
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type productUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumproduct_typeFieldUpdateOperationsInput | $Enums.product_type
    unit?: Enumproduct_unitFieldUpdateOperationsInput | $Enums.product_unit
    priceperunit?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    perishdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    description?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: IntFieldUpdateOperationsInput | number
    locationlatitude?: FloatFieldUpdateOperationsInput | number
    locationlongitude?: FloatFieldUpdateOperationsInput | number
    supplierthreshold?: IntFieldUpdateOperationsInput | number
    farmerdelivery?: BoolFieldUpdateOperationsInput | boolean
    servicedelivery?: BoolFieldUpdateOperationsInput | boolean
    order?: myorderUpdateManyWithoutProductNestedInput
    review?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumproduct_typeFieldUpdateOperationsInput | $Enums.product_type
    unit?: Enumproduct_unitFieldUpdateOperationsInput | $Enums.product_unit
    priceperunit?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    perishdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    description?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: IntFieldUpdateOperationsInput | number
    locationlatitude?: FloatFieldUpdateOperationsInput | number
    locationlongitude?: FloatFieldUpdateOperationsInput | number
    supplierthreshold?: IntFieldUpdateOperationsInput | number
    farmerdelivery?: BoolFieldUpdateOperationsInput | boolean
    servicedelivery?: BoolFieldUpdateOperationsInput | boolean
    order?: myorderUncheckedUpdateManyWithoutProductNestedInput
    review?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutFarmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumproduct_typeFieldUpdateOperationsInput | $Enums.product_type
    unit?: Enumproduct_unitFieldUpdateOperationsInput | $Enums.product_unit
    priceperunit?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variety?: StringFieldUpdateOperationsInput | string
    perishdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: Enumproduct_statusFieldUpdateOperationsInput | $Enums.product_status
    description?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: IntFieldUpdateOperationsInput | number
    locationlatitude?: FloatFieldUpdateOperationsInput | number
    locationlongitude?: FloatFieldUpdateOperationsInput | number
    supplierthreshold?: IntFieldUpdateOperationsInput | number
    farmerdelivery?: BoolFieldUpdateOperationsInput | boolean
    servicedelivery?: BoolFieldUpdateOperationsInput | boolean
  }

  export type myorderCreateManyProductInput = {
    id?: string
    customertype: $Enums.order_customertype
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    farmerid: string
    userId: string
    quantity: number
  }

  export type reviewCreateManyProductInput = {
    id?: string
    userId: string
    rating: $Enums.review_rating
    comment: string
  }

  export type myorderUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    quantity?: IntFieldUpdateOperationsInput | number
    farmer?: farmerUpdateOneRequiredWithoutOrderNestedInput
    user?: userUpdateOneRequiredWithoutOrderNestedInput
  }

  export type myorderUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    farmerid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type myorderUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    farmerid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: Enumreview_ratingFieldUpdateOperationsInput | $Enums.review_rating
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: Enumreview_ratingFieldUpdateOperationsInput | $Enums.review_rating
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: Enumreview_ratingFieldUpdateOperationsInput | $Enums.review_rating
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type myorderCreateManyUserInput = {
    id?: string
    customertype: $Enums.order_customertype
    productid: string
    deliverylatitude?: number | null
    deliverylongitude?: number | null
    deliveryoption?: $Enums.order_deliveryoption
    totalcost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tracking?: $Enums.order_tracking
    farmerid: string
    quantity: number
  }

  export type myorderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    quantity?: IntFieldUpdateOperationsInput | number
    farmer?: farmerUpdateOneRequiredWithoutOrderNestedInput
    product?: productUpdateOneRequiredWithoutOrderNestedInput
  }

  export type myorderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    productid?: StringFieldUpdateOperationsInput | string
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    farmerid?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type myorderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customertype?: Enumorder_customertypeFieldUpdateOperationsInput | $Enums.order_customertype
    productid?: StringFieldUpdateOperationsInput | string
    deliverylatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliverylongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    deliveryoption?: Enumorder_deliveryoptionFieldUpdateOperationsInput | $Enums.order_deliveryoption
    totalcost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracking?: Enumorder_trackingFieldUpdateOperationsInput | $Enums.order_tracking
    farmerid?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}