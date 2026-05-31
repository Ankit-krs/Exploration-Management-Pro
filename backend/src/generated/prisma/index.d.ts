
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshSession
 * 
 */
export type RefreshSession = $Result.DefaultSelection<Prisma.$RefreshSessionPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model DrillingEntry
 * 
 */
export type DrillingEntry = $Result.DefaultSelection<Prisma.$DrillingEntryPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ExpenseHead
 * 
 */
export type ExpenseHead = $Result.DefaultSelection<Prisma.$ExpenseHeadPayload>
/**
 * Model OpexEntry
 * 
 */
export type OpexEntry = $Result.DefaultSelection<Prisma.$OpexEntryPayload>
/**
 * Model DceEntry
 * 
 */
export type DceEntry = $Result.DefaultSelection<Prisma.$DceEntryPayload>
/**
 * Model AdvanceEntry
 * 
 */
export type AdvanceEntry = $Result.DefaultSelection<Prisma.$AdvanceEntryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  VIEWER: 'VIEWER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const DceStatus: {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  STOPPED: 'STOPPED'
};

export type DceStatus = (typeof DceStatus)[keyof typeof DceStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type DceStatus = $Enums.DceStatus

export const DceStatus: typeof $Enums.DceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshSession`: Exposes CRUD operations for the **RefreshSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshSessions
    * const refreshSessions = await prisma.refreshSession.findMany()
    * ```
    */
  get refreshSession(): Prisma.RefreshSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drillingEntry`: Exposes CRUD operations for the **DrillingEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrillingEntries
    * const drillingEntries = await prisma.drillingEntry.findMany()
    * ```
    */
  get drillingEntry(): Prisma.DrillingEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseHead`: Exposes CRUD operations for the **ExpenseHead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseHeads
    * const expenseHeads = await prisma.expenseHead.findMany()
    * ```
    */
  get expenseHead(): Prisma.ExpenseHeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opexEntry`: Exposes CRUD operations for the **OpexEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpexEntries
    * const opexEntries = await prisma.opexEntry.findMany()
    * ```
    */
  get opexEntry(): Prisma.OpexEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dceEntry`: Exposes CRUD operations for the **DceEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DceEntries
    * const dceEntries = await prisma.dceEntry.findMany()
    * ```
    */
  get dceEntry(): Prisma.DceEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.advanceEntry`: Exposes CRUD operations for the **AdvanceEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdvanceEntries
    * const advanceEntries = await prisma.advanceEntry.findMany()
    * ```
    */
  get advanceEntry(): Prisma.AdvanceEntryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    RefreshSession: 'RefreshSession',
    Site: 'Site',
    DrillingEntry: 'DrillingEntry',
    Category: 'Category',
    ExpenseHead: 'ExpenseHead',
    OpexEntry: 'OpexEntry',
    DceEntry: 'DceEntry',
    AdvanceEntry: 'AdvanceEntry'
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
      modelProps: "user" | "refreshSession" | "site" | "drillingEntry" | "category" | "expenseHead" | "opexEntry" | "dceEntry" | "advanceEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshSession: {
        payload: Prisma.$RefreshSessionPayload<ExtArgs>
        fields: Prisma.RefreshSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          findFirst: {
            args: Prisma.RefreshSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          findMany: {
            args: Prisma.RefreshSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[]
          }
          create: {
            args: Prisma.RefreshSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          createMany: {
            args: Prisma.RefreshSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[]
          }
          delete: {
            args: Prisma.RefreshSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          update: {
            args: Prisma.RefreshSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          deleteMany: {
            args: Prisma.RefreshSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[]
          }
          upsert: {
            args: Prisma.RefreshSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          aggregate: {
            args: Prisma.RefreshSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshSession>
          }
          groupBy: {
            args: Prisma.RefreshSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshSessionCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshSessionCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      DrillingEntry: {
        payload: Prisma.$DrillingEntryPayload<ExtArgs>
        fields: Prisma.DrillingEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrillingEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillingEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrillingEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillingEntryPayload>
          }
          findFirst: {
            args: Prisma.DrillingEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillingEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrillingEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillingEntryPayload>
          }
          findMany: {
            args: Prisma.DrillingEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillingEntryPayload>[]
          }
          create: {
            args: Prisma.DrillingEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillingEntryPayload>
          }
          createMany: {
            args: Prisma.DrillingEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrillingEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillingEntryPayload>[]
          }
          delete: {
            args: Prisma.DrillingEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillingEntryPayload>
          }
          update: {
            args: Prisma.DrillingEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillingEntryPayload>
          }
          deleteMany: {
            args: Prisma.DrillingEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrillingEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrillingEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillingEntryPayload>[]
          }
          upsert: {
            args: Prisma.DrillingEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrillingEntryPayload>
          }
          aggregate: {
            args: Prisma.DrillingEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrillingEntry>
          }
          groupBy: {
            args: Prisma.DrillingEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrillingEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrillingEntryCountArgs<ExtArgs>
            result: $Utils.Optional<DrillingEntryCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ExpenseHead: {
        payload: Prisma.$ExpenseHeadPayload<ExtArgs>
        fields: Prisma.ExpenseHeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseHeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseHeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseHeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseHeadPayload>
          }
          findFirst: {
            args: Prisma.ExpenseHeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseHeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseHeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseHeadPayload>
          }
          findMany: {
            args: Prisma.ExpenseHeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseHeadPayload>[]
          }
          create: {
            args: Prisma.ExpenseHeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseHeadPayload>
          }
          createMany: {
            args: Prisma.ExpenseHeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseHeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseHeadPayload>[]
          }
          delete: {
            args: Prisma.ExpenseHeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseHeadPayload>
          }
          update: {
            args: Prisma.ExpenseHeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseHeadPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseHeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseHeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseHeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseHeadPayload>[]
          }
          upsert: {
            args: Prisma.ExpenseHeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseHeadPayload>
          }
          aggregate: {
            args: Prisma.ExpenseHeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseHead>
          }
          groupBy: {
            args: Prisma.ExpenseHeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseHeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseHeadCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseHeadCountAggregateOutputType> | number
          }
        }
      }
      OpexEntry: {
        payload: Prisma.$OpexEntryPayload<ExtArgs>
        fields: Prisma.OpexEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpexEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpexEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpexEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpexEntryPayload>
          }
          findFirst: {
            args: Prisma.OpexEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpexEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpexEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpexEntryPayload>
          }
          findMany: {
            args: Prisma.OpexEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpexEntryPayload>[]
          }
          create: {
            args: Prisma.OpexEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpexEntryPayload>
          }
          createMany: {
            args: Prisma.OpexEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpexEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpexEntryPayload>[]
          }
          delete: {
            args: Prisma.OpexEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpexEntryPayload>
          }
          update: {
            args: Prisma.OpexEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpexEntryPayload>
          }
          deleteMany: {
            args: Prisma.OpexEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpexEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpexEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpexEntryPayload>[]
          }
          upsert: {
            args: Prisma.OpexEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpexEntryPayload>
          }
          aggregate: {
            args: Prisma.OpexEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpexEntry>
          }
          groupBy: {
            args: Prisma.OpexEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpexEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpexEntryCountArgs<ExtArgs>
            result: $Utils.Optional<OpexEntryCountAggregateOutputType> | number
          }
        }
      }
      DceEntry: {
        payload: Prisma.$DceEntryPayload<ExtArgs>
        fields: Prisma.DceEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DceEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DceEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DceEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DceEntryPayload>
          }
          findFirst: {
            args: Prisma.DceEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DceEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DceEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DceEntryPayload>
          }
          findMany: {
            args: Prisma.DceEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DceEntryPayload>[]
          }
          create: {
            args: Prisma.DceEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DceEntryPayload>
          }
          createMany: {
            args: Prisma.DceEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DceEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DceEntryPayload>[]
          }
          delete: {
            args: Prisma.DceEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DceEntryPayload>
          }
          update: {
            args: Prisma.DceEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DceEntryPayload>
          }
          deleteMany: {
            args: Prisma.DceEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DceEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DceEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DceEntryPayload>[]
          }
          upsert: {
            args: Prisma.DceEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DceEntryPayload>
          }
          aggregate: {
            args: Prisma.DceEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDceEntry>
          }
          groupBy: {
            args: Prisma.DceEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DceEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DceEntryCountArgs<ExtArgs>
            result: $Utils.Optional<DceEntryCountAggregateOutputType> | number
          }
        }
      }
      AdvanceEntry: {
        payload: Prisma.$AdvanceEntryPayload<ExtArgs>
        fields: Prisma.AdvanceEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvanceEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvanceEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvanceEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvanceEntryPayload>
          }
          findFirst: {
            args: Prisma.AdvanceEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvanceEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvanceEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvanceEntryPayload>
          }
          findMany: {
            args: Prisma.AdvanceEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvanceEntryPayload>[]
          }
          create: {
            args: Prisma.AdvanceEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvanceEntryPayload>
          }
          createMany: {
            args: Prisma.AdvanceEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvanceEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvanceEntryPayload>[]
          }
          delete: {
            args: Prisma.AdvanceEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvanceEntryPayload>
          }
          update: {
            args: Prisma.AdvanceEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvanceEntryPayload>
          }
          deleteMany: {
            args: Prisma.AdvanceEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvanceEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvanceEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvanceEntryPayload>[]
          }
          upsert: {
            args: Prisma.AdvanceEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvanceEntryPayload>
          }
          aggregate: {
            args: Prisma.AdvanceEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvanceEntry>
          }
          groupBy: {
            args: Prisma.AdvanceEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvanceEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvanceEntryCountArgs<ExtArgs>
            result: $Utils.Optional<AdvanceEntryCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    refreshSession?: RefreshSessionOmit
    site?: SiteOmit
    drillingEntry?: DrillingEntryOmit
    category?: CategoryOmit
    expenseHead?: ExpenseHeadOmit
    opexEntry?: OpexEntryOmit
    dceEntry?: DceEntryOmit
    advanceEntry?: AdvanceEntryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sitesCreated: number
    drillingCreated: number
    opexCreated: number
    dceCreated: number
    advanceCreated: number
    refreshSessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sitesCreated?: boolean | UserCountOutputTypeCountSitesCreatedArgs
    drillingCreated?: boolean | UserCountOutputTypeCountDrillingCreatedArgs
    opexCreated?: boolean | UserCountOutputTypeCountOpexCreatedArgs
    dceCreated?: boolean | UserCountOutputTypeCountDceCreatedArgs
    advanceCreated?: boolean | UserCountOutputTypeCountAdvanceCreatedArgs
    refreshSessions?: boolean | UserCountOutputTypeCountRefreshSessionsArgs
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
  export type UserCountOutputTypeCountSitesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDrillingCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrillingEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOpexCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpexEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDceCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DceEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdvanceCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvanceEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshSessionWhereInput
  }


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    drillingEntries: number
    opexEntries: number
    dceEntries: number
    advanceEntries: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drillingEntries?: boolean | SiteCountOutputTypeCountDrillingEntriesArgs
    opexEntries?: boolean | SiteCountOutputTypeCountOpexEntriesArgs
    dceEntries?: boolean | SiteCountOutputTypeCountDceEntriesArgs
    advanceEntries?: boolean | SiteCountOutputTypeCountAdvanceEntriesArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountDrillingEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrillingEntryWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountOpexEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpexEntryWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountDceEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DceEntryWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountAdvanceEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvanceEntryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    expenseHeads: number
    opexEntries: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenseHeads?: boolean | CategoryCountOutputTypeCountExpenseHeadsArgs
    opexEntries?: boolean | CategoryCountOutputTypeCountOpexEntriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountExpenseHeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseHeadWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountOpexEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpexEntryWhereInput
  }


  /**
   * Count Type ExpenseHeadCountOutputType
   */

  export type ExpenseHeadCountOutputType = {
    opexEntries: number
  }

  export type ExpenseHeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opexEntries?: boolean | ExpenseHeadCountOutputTypeCountOpexEntriesArgs
  }

  // Custom InputTypes
  /**
   * ExpenseHeadCountOutputType without action
   */
  export type ExpenseHeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHeadCountOutputType
     */
    select?: ExpenseHeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseHeadCountOutputType without action
   */
  export type ExpenseHeadCountOutputTypeCountOpexEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpexEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sitesCreated?: boolean | User$sitesCreatedArgs<ExtArgs>
    drillingCreated?: boolean | User$drillingCreatedArgs<ExtArgs>
    opexCreated?: boolean | User$opexCreatedArgs<ExtArgs>
    dceCreated?: boolean | User$dceCreatedArgs<ExtArgs>
    advanceCreated?: boolean | User$advanceCreatedArgs<ExtArgs>
    refreshSessions?: boolean | User$refreshSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sitesCreated?: boolean | User$sitesCreatedArgs<ExtArgs>
    drillingCreated?: boolean | User$drillingCreatedArgs<ExtArgs>
    opexCreated?: boolean | User$opexCreatedArgs<ExtArgs>
    dceCreated?: boolean | User$dceCreatedArgs<ExtArgs>
    advanceCreated?: boolean | User$advanceCreatedArgs<ExtArgs>
    refreshSessions?: boolean | User$refreshSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sitesCreated: Prisma.$SitePayload<ExtArgs>[]
      drillingCreated: Prisma.$DrillingEntryPayload<ExtArgs>[]
      opexCreated: Prisma.$OpexEntryPayload<ExtArgs>[]
      dceCreated: Prisma.$DceEntryPayload<ExtArgs>[]
      advanceCreated: Prisma.$AdvanceEntryPayload<ExtArgs>[]
      refreshSessions: Prisma.$RefreshSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sitesCreated<T extends User$sitesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$sitesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drillingCreated<T extends User$drillingCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$drillingCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opexCreated<T extends User$opexCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$opexCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dceCreated<T extends User$dceCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$dceCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    advanceCreated<T extends User$advanceCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$advanceCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshSessions<T extends User$refreshSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sitesCreated
   */
  export type User$sitesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    cursor?: SiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * User.drillingCreated
   */
  export type User$drillingCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
    where?: DrillingEntryWhereInput
    orderBy?: DrillingEntryOrderByWithRelationInput | DrillingEntryOrderByWithRelationInput[]
    cursor?: DrillingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrillingEntryScalarFieldEnum | DrillingEntryScalarFieldEnum[]
  }

  /**
   * User.opexCreated
   */
  export type User$opexCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    where?: OpexEntryWhereInput
    orderBy?: OpexEntryOrderByWithRelationInput | OpexEntryOrderByWithRelationInput[]
    cursor?: OpexEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpexEntryScalarFieldEnum | OpexEntryScalarFieldEnum[]
  }

  /**
   * User.dceCreated
   */
  export type User$dceCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
    where?: DceEntryWhereInput
    orderBy?: DceEntryOrderByWithRelationInput | DceEntryOrderByWithRelationInput[]
    cursor?: DceEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DceEntryScalarFieldEnum | DceEntryScalarFieldEnum[]
  }

  /**
   * User.advanceCreated
   */
  export type User$advanceCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
    where?: AdvanceEntryWhereInput
    orderBy?: AdvanceEntryOrderByWithRelationInput | AdvanceEntryOrderByWithRelationInput[]
    cursor?: AdvanceEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvanceEntryScalarFieldEnum | AdvanceEntryScalarFieldEnum[]
  }

  /**
   * User.refreshSessions
   */
  export type User$refreshSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    where?: RefreshSessionWhereInput
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    cursor?: RefreshSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshSession
   */

  export type AggregateRefreshSession = {
    _count: RefreshSessionCountAggregateOutputType | null
    _min: RefreshSessionMinAggregateOutputType | null
    _max: RefreshSessionMaxAggregateOutputType | null
  }

  export type RefreshSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    issuedAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    replacedById: string | null
  }

  export type RefreshSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    issuedAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    replacedById: string | null
  }

  export type RefreshSessionCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    issuedAt: number
    expiresAt: number
    revokedAt: number
    replacedById: number
    _all: number
  }


  export type RefreshSessionMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    issuedAt?: true
    expiresAt?: true
    revokedAt?: true
    replacedById?: true
  }

  export type RefreshSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    issuedAt?: true
    expiresAt?: true
    revokedAt?: true
    replacedById?: true
  }

  export type RefreshSessionCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    issuedAt?: true
    expiresAt?: true
    revokedAt?: true
    replacedById?: true
    _all?: true
  }

  export type RefreshSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshSession to aggregate.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshSessions
    **/
    _count?: true | RefreshSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshSessionMaxAggregateInputType
  }

  export type GetRefreshSessionAggregateType<T extends RefreshSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshSession[P]>
      : GetScalarType<T[P], AggregateRefreshSession[P]>
  }




  export type RefreshSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshSessionWhereInput
    orderBy?: RefreshSessionOrderByWithAggregationInput | RefreshSessionOrderByWithAggregationInput[]
    by: RefreshSessionScalarFieldEnum[] | RefreshSessionScalarFieldEnum
    having?: RefreshSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshSessionCountAggregateInputType | true
    _min?: RefreshSessionMinAggregateInputType
    _max?: RefreshSessionMaxAggregateInputType
  }

  export type RefreshSessionGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    issuedAt: Date
    expiresAt: Date
    revokedAt: Date | null
    replacedById: string | null
    _count: RefreshSessionCountAggregateOutputType | null
    _min: RefreshSessionMinAggregateOutputType | null
    _max: RefreshSessionMaxAggregateOutputType | null
  }

  type GetRefreshSessionGroupByPayload<T extends RefreshSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshSessionGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshSessionGroupByOutputType[P]>
        }
      >
    >


  export type RefreshSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedById?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshSession"]>

  export type RefreshSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedById?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshSession"]>

  export type RefreshSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedById?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshSession"]>

  export type RefreshSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedById?: boolean
  }

  export type RefreshSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "issuedAt" | "expiresAt" | "revokedAt" | "replacedById", ExtArgs["result"]["refreshSession"]>
  export type RefreshSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      issuedAt: Date
      expiresAt: Date
      revokedAt: Date | null
      replacedById: string | null
    }, ExtArgs["result"]["refreshSession"]>
    composites: {}
  }

  type RefreshSessionGetPayload<S extends boolean | null | undefined | RefreshSessionDefaultArgs> = $Result.GetResult<Prisma.$RefreshSessionPayload, S>

  type RefreshSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshSessionCountAggregateInputType | true
    }

  export interface RefreshSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshSession'], meta: { name: 'RefreshSession' } }
    /**
     * Find zero or one RefreshSession that matches the filter.
     * @param {RefreshSessionFindUniqueArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshSessionFindUniqueArgs>(args: SelectSubset<T, RefreshSessionFindUniqueArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshSessionFindUniqueOrThrowArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionFindFirstArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshSessionFindFirstArgs>(args?: SelectSubset<T, RefreshSessionFindFirstArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionFindFirstOrThrowArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshSessions
     * const refreshSessions = await prisma.refreshSession.findMany()
     * 
     * // Get first 10 RefreshSessions
     * const refreshSessions = await prisma.refreshSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshSessionWithIdOnly = await prisma.refreshSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshSessionFindManyArgs>(args?: SelectSubset<T, RefreshSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshSession.
     * @param {RefreshSessionCreateArgs} args - Arguments to create a RefreshSession.
     * @example
     * // Create one RefreshSession
     * const RefreshSession = await prisma.refreshSession.create({
     *   data: {
     *     // ... data to create a RefreshSession
     *   }
     * })
     * 
     */
    create<T extends RefreshSessionCreateArgs>(args: SelectSubset<T, RefreshSessionCreateArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshSessions.
     * @param {RefreshSessionCreateManyArgs} args - Arguments to create many RefreshSessions.
     * @example
     * // Create many RefreshSessions
     * const refreshSession = await prisma.refreshSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshSessionCreateManyArgs>(args?: SelectSubset<T, RefreshSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshSessions and returns the data saved in the database.
     * @param {RefreshSessionCreateManyAndReturnArgs} args - Arguments to create many RefreshSessions.
     * @example
     * // Create many RefreshSessions
     * const refreshSession = await prisma.refreshSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshSessions and only return the `id`
     * const refreshSessionWithIdOnly = await prisma.refreshSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshSession.
     * @param {RefreshSessionDeleteArgs} args - Arguments to delete one RefreshSession.
     * @example
     * // Delete one RefreshSession
     * const RefreshSession = await prisma.refreshSession.delete({
     *   where: {
     *     // ... filter to delete one RefreshSession
     *   }
     * })
     * 
     */
    delete<T extends RefreshSessionDeleteArgs>(args: SelectSubset<T, RefreshSessionDeleteArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshSession.
     * @param {RefreshSessionUpdateArgs} args - Arguments to update one RefreshSession.
     * @example
     * // Update one RefreshSession
     * const refreshSession = await prisma.refreshSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshSessionUpdateArgs>(args: SelectSubset<T, RefreshSessionUpdateArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshSessions.
     * @param {RefreshSessionDeleteManyArgs} args - Arguments to filter RefreshSessions to delete.
     * @example
     * // Delete a few RefreshSessions
     * const { count } = await prisma.refreshSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshSessionDeleteManyArgs>(args?: SelectSubset<T, RefreshSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshSessions
     * const refreshSession = await prisma.refreshSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshSessionUpdateManyArgs>(args: SelectSubset<T, RefreshSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshSessions and returns the data updated in the database.
     * @param {RefreshSessionUpdateManyAndReturnArgs} args - Arguments to update many RefreshSessions.
     * @example
     * // Update many RefreshSessions
     * const refreshSession = await prisma.refreshSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshSessions and only return the `id`
     * const refreshSessionWithIdOnly = await prisma.refreshSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshSession.
     * @param {RefreshSessionUpsertArgs} args - Arguments to update or create a RefreshSession.
     * @example
     * // Update or create a RefreshSession
     * const refreshSession = await prisma.refreshSession.upsert({
     *   create: {
     *     // ... data to create a RefreshSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshSession we want to update
     *   }
     * })
     */
    upsert<T extends RefreshSessionUpsertArgs>(args: SelectSubset<T, RefreshSessionUpsertArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionCountArgs} args - Arguments to filter RefreshSessions to count.
     * @example
     * // Count the number of RefreshSessions
     * const count = await prisma.refreshSession.count({
     *   where: {
     *     // ... the filter for the RefreshSessions we want to count
     *   }
     * })
    **/
    count<T extends RefreshSessionCountArgs>(
      args?: Subset<T, RefreshSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshSessionAggregateArgs>(args: Subset<T, RefreshSessionAggregateArgs>): Prisma.PrismaPromise<GetRefreshSessionAggregateType<T>>

    /**
     * Group by RefreshSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionGroupByArgs} args - Group by arguments.
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
      T extends RefreshSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshSessionGroupByArgs['orderBy'] }
        : { orderBy?: RefreshSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshSession model
   */
  readonly fields: RefreshSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RefreshSession model
   */
  interface RefreshSessionFieldRefs {
    readonly id: FieldRef<"RefreshSession", 'String'>
    readonly userId: FieldRef<"RefreshSession", 'String'>
    readonly tokenHash: FieldRef<"RefreshSession", 'String'>
    readonly issuedAt: FieldRef<"RefreshSession", 'DateTime'>
    readonly expiresAt: FieldRef<"RefreshSession", 'DateTime'>
    readonly revokedAt: FieldRef<"RefreshSession", 'DateTime'>
    readonly replacedById: FieldRef<"RefreshSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RefreshSession findUnique
   */
  export type RefreshSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession findUniqueOrThrow
   */
  export type RefreshSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession findFirst
   */
  export type RefreshSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshSessions.
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshSessions.
     */
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * RefreshSession findFirstOrThrow
   */
  export type RefreshSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshSessions.
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshSessions.
     */
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * RefreshSession findMany
   */
  export type RefreshSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSessions to fetch.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshSessions.
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * RefreshSession create
   */
  export type RefreshSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshSession.
     */
    data: XOR<RefreshSessionCreateInput, RefreshSessionUncheckedCreateInput>
  }

  /**
   * RefreshSession createMany
   */
  export type RefreshSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshSessions.
     */
    data: RefreshSessionCreateManyInput | RefreshSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshSession createManyAndReturn
   */
  export type RefreshSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshSessions.
     */
    data: RefreshSessionCreateManyInput | RefreshSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshSession update
   */
  export type RefreshSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshSession.
     */
    data: XOR<RefreshSessionUpdateInput, RefreshSessionUncheckedUpdateInput>
    /**
     * Choose, which RefreshSession to update.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession updateMany
   */
  export type RefreshSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshSessions.
     */
    data: XOR<RefreshSessionUpdateManyMutationInput, RefreshSessionUncheckedUpdateManyInput>
    /**
     * Filter which RefreshSessions to update
     */
    where?: RefreshSessionWhereInput
    /**
     * Limit how many RefreshSessions to update.
     */
    limit?: number
  }

  /**
   * RefreshSession updateManyAndReturn
   */
  export type RefreshSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * The data used to update RefreshSessions.
     */
    data: XOR<RefreshSessionUpdateManyMutationInput, RefreshSessionUncheckedUpdateManyInput>
    /**
     * Filter which RefreshSessions to update
     */
    where?: RefreshSessionWhereInput
    /**
     * Limit how many RefreshSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshSession upsert
   */
  export type RefreshSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshSession to update in case it exists.
     */
    where: RefreshSessionWhereUniqueInput
    /**
     * In case the RefreshSession found by the `where` argument doesn't exist, create a new RefreshSession with this data.
     */
    create: XOR<RefreshSessionCreateInput, RefreshSessionUncheckedCreateInput>
    /**
     * In case the RefreshSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshSessionUpdateInput, RefreshSessionUncheckedUpdateInput>
  }

  /**
   * RefreshSession delete
   */
  export type RefreshSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter which RefreshSession to delete.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession deleteMany
   */
  export type RefreshSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshSessions to delete
     */
    where?: RefreshSessionWhereInput
    /**
     * Limit how many RefreshSessions to delete.
     */
    limit?: number
  }

  /**
   * RefreshSession without action
   */
  export type RefreshSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
  }


  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: string
    name: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    drillingEntries?: boolean | Site$drillingEntriesArgs<ExtArgs>
    opexEntries?: boolean | Site$opexEntriesArgs<ExtArgs>
    dceEntries?: boolean | Site$dceEntriesArgs<ExtArgs>
    advanceEntries?: boolean | Site$advanceEntriesArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    drillingEntries?: boolean | Site$drillingEntriesArgs<ExtArgs>
    opexEntries?: boolean | Site$opexEntriesArgs<ExtArgs>
    dceEntries?: boolean | Site$dceEntriesArgs<ExtArgs>
    advanceEntries?: boolean | Site$advanceEntriesArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      drillingEntries: Prisma.$DrillingEntryPayload<ExtArgs>[]
      opexEntries: Prisma.$OpexEntryPayload<ExtArgs>[]
      dceEntries: Prisma.$DceEntryPayload<ExtArgs>[]
      advanceEntries: Prisma.$AdvanceEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
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
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    drillingEntries<T extends Site$drillingEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Site$drillingEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opexEntries<T extends Site$opexEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Site$opexEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dceEntries<T extends Site$dceEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Site$dceEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    advanceEntries<T extends Site$advanceEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Site$advanceEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'String'>
    readonly name: FieldRef<"Site", 'String'>
    readonly createdById: FieldRef<"Site", 'String'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly updatedAt: FieldRef<"Site", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.drillingEntries
   */
  export type Site$drillingEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
    where?: DrillingEntryWhereInput
    orderBy?: DrillingEntryOrderByWithRelationInput | DrillingEntryOrderByWithRelationInput[]
    cursor?: DrillingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrillingEntryScalarFieldEnum | DrillingEntryScalarFieldEnum[]
  }

  /**
   * Site.opexEntries
   */
  export type Site$opexEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    where?: OpexEntryWhereInput
    orderBy?: OpexEntryOrderByWithRelationInput | OpexEntryOrderByWithRelationInput[]
    cursor?: OpexEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpexEntryScalarFieldEnum | OpexEntryScalarFieldEnum[]
  }

  /**
   * Site.dceEntries
   */
  export type Site$dceEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
    where?: DceEntryWhereInput
    orderBy?: DceEntryOrderByWithRelationInput | DceEntryOrderByWithRelationInput[]
    cursor?: DceEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DceEntryScalarFieldEnum | DceEntryScalarFieldEnum[]
  }

  /**
   * Site.advanceEntries
   */
  export type Site$advanceEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
    where?: AdvanceEntryWhereInput
    orderBy?: AdvanceEntryOrderByWithRelationInput | AdvanceEntryOrderByWithRelationInput[]
    cursor?: AdvanceEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvanceEntryScalarFieldEnum | AdvanceEntryScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model DrillingEntry
   */

  export type AggregateDrillingEntry = {
    _count: DrillingEntryCountAggregateOutputType | null
    _avg: DrillingEntryAvgAggregateOutputType | null
    _sum: DrillingEntrySumAggregateOutputType | null
    _min: DrillingEntryMinAggregateOutputType | null
    _max: DrillingEntryMaxAggregateOutputType | null
  }

  export type DrillingEntryAvgAggregateOutputType = {
    meters: Decimal | null
  }

  export type DrillingEntrySumAggregateOutputType = {
    meters: Decimal | null
  }

  export type DrillingEntryMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    meters: Decimal | null
    boreholeNumber: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrillingEntryMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    meters: Decimal | null
    boreholeNumber: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrillingEntryCountAggregateOutputType = {
    id: number
    siteId: number
    date: number
    meters: number
    boreholeNumber: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DrillingEntryAvgAggregateInputType = {
    meters?: true
  }

  export type DrillingEntrySumAggregateInputType = {
    meters?: true
  }

  export type DrillingEntryMinAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    meters?: true
    boreholeNumber?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrillingEntryMaxAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    meters?: true
    boreholeNumber?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrillingEntryCountAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    meters?: true
    boreholeNumber?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DrillingEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrillingEntry to aggregate.
     */
    where?: DrillingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrillingEntries to fetch.
     */
    orderBy?: DrillingEntryOrderByWithRelationInput | DrillingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrillingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrillingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrillingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrillingEntries
    **/
    _count?: true | DrillingEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrillingEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrillingEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrillingEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrillingEntryMaxAggregateInputType
  }

  export type GetDrillingEntryAggregateType<T extends DrillingEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateDrillingEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrillingEntry[P]>
      : GetScalarType<T[P], AggregateDrillingEntry[P]>
  }




  export type DrillingEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrillingEntryWhereInput
    orderBy?: DrillingEntryOrderByWithAggregationInput | DrillingEntryOrderByWithAggregationInput[]
    by: DrillingEntryScalarFieldEnum[] | DrillingEntryScalarFieldEnum
    having?: DrillingEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrillingEntryCountAggregateInputType | true
    _avg?: DrillingEntryAvgAggregateInputType
    _sum?: DrillingEntrySumAggregateInputType
    _min?: DrillingEntryMinAggregateInputType
    _max?: DrillingEntryMaxAggregateInputType
  }

  export type DrillingEntryGroupByOutputType = {
    id: string
    siteId: string
    date: Date
    meters: Decimal
    boreholeNumber: string | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: DrillingEntryCountAggregateOutputType | null
    _avg: DrillingEntryAvgAggregateOutputType | null
    _sum: DrillingEntrySumAggregateOutputType | null
    _min: DrillingEntryMinAggregateOutputType | null
    _max: DrillingEntryMaxAggregateOutputType | null
  }

  type GetDrillingEntryGroupByPayload<T extends DrillingEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrillingEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrillingEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrillingEntryGroupByOutputType[P]>
            : GetScalarType<T[P], DrillingEntryGroupByOutputType[P]>
        }
      >
    >


  export type DrillingEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    meters?: boolean
    boreholeNumber?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drillingEntry"]>

  export type DrillingEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    meters?: boolean
    boreholeNumber?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drillingEntry"]>

  export type DrillingEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    meters?: boolean
    boreholeNumber?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drillingEntry"]>

  export type DrillingEntrySelectScalar = {
    id?: boolean
    siteId?: boolean
    date?: boolean
    meters?: boolean
    boreholeNumber?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DrillingEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "date" | "meters" | "boreholeNumber" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["drillingEntry"]>
  export type DrillingEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DrillingEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DrillingEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DrillingEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DrillingEntry"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      date: Date
      meters: Prisma.Decimal
      boreholeNumber: string | null
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["drillingEntry"]>
    composites: {}
  }

  type DrillingEntryGetPayload<S extends boolean | null | undefined | DrillingEntryDefaultArgs> = $Result.GetResult<Prisma.$DrillingEntryPayload, S>

  type DrillingEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrillingEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrillingEntryCountAggregateInputType | true
    }

  export interface DrillingEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DrillingEntry'], meta: { name: 'DrillingEntry' } }
    /**
     * Find zero or one DrillingEntry that matches the filter.
     * @param {DrillingEntryFindUniqueArgs} args - Arguments to find a DrillingEntry
     * @example
     * // Get one DrillingEntry
     * const drillingEntry = await prisma.drillingEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrillingEntryFindUniqueArgs>(args: SelectSubset<T, DrillingEntryFindUniqueArgs<ExtArgs>>): Prisma__DrillingEntryClient<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DrillingEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrillingEntryFindUniqueOrThrowArgs} args - Arguments to find a DrillingEntry
     * @example
     * // Get one DrillingEntry
     * const drillingEntry = await prisma.drillingEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrillingEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, DrillingEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrillingEntryClient<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrillingEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillingEntryFindFirstArgs} args - Arguments to find a DrillingEntry
     * @example
     * // Get one DrillingEntry
     * const drillingEntry = await prisma.drillingEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrillingEntryFindFirstArgs>(args?: SelectSubset<T, DrillingEntryFindFirstArgs<ExtArgs>>): Prisma__DrillingEntryClient<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrillingEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillingEntryFindFirstOrThrowArgs} args - Arguments to find a DrillingEntry
     * @example
     * // Get one DrillingEntry
     * const drillingEntry = await prisma.drillingEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrillingEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, DrillingEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrillingEntryClient<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DrillingEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillingEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrillingEntries
     * const drillingEntries = await prisma.drillingEntry.findMany()
     * 
     * // Get first 10 DrillingEntries
     * const drillingEntries = await prisma.drillingEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drillingEntryWithIdOnly = await prisma.drillingEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrillingEntryFindManyArgs>(args?: SelectSubset<T, DrillingEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DrillingEntry.
     * @param {DrillingEntryCreateArgs} args - Arguments to create a DrillingEntry.
     * @example
     * // Create one DrillingEntry
     * const DrillingEntry = await prisma.drillingEntry.create({
     *   data: {
     *     // ... data to create a DrillingEntry
     *   }
     * })
     * 
     */
    create<T extends DrillingEntryCreateArgs>(args: SelectSubset<T, DrillingEntryCreateArgs<ExtArgs>>): Prisma__DrillingEntryClient<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DrillingEntries.
     * @param {DrillingEntryCreateManyArgs} args - Arguments to create many DrillingEntries.
     * @example
     * // Create many DrillingEntries
     * const drillingEntry = await prisma.drillingEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrillingEntryCreateManyArgs>(args?: SelectSubset<T, DrillingEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DrillingEntries and returns the data saved in the database.
     * @param {DrillingEntryCreateManyAndReturnArgs} args - Arguments to create many DrillingEntries.
     * @example
     * // Create many DrillingEntries
     * const drillingEntry = await prisma.drillingEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DrillingEntries and only return the `id`
     * const drillingEntryWithIdOnly = await prisma.drillingEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrillingEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, DrillingEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DrillingEntry.
     * @param {DrillingEntryDeleteArgs} args - Arguments to delete one DrillingEntry.
     * @example
     * // Delete one DrillingEntry
     * const DrillingEntry = await prisma.drillingEntry.delete({
     *   where: {
     *     // ... filter to delete one DrillingEntry
     *   }
     * })
     * 
     */
    delete<T extends DrillingEntryDeleteArgs>(args: SelectSubset<T, DrillingEntryDeleteArgs<ExtArgs>>): Prisma__DrillingEntryClient<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DrillingEntry.
     * @param {DrillingEntryUpdateArgs} args - Arguments to update one DrillingEntry.
     * @example
     * // Update one DrillingEntry
     * const drillingEntry = await prisma.drillingEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrillingEntryUpdateArgs>(args: SelectSubset<T, DrillingEntryUpdateArgs<ExtArgs>>): Prisma__DrillingEntryClient<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DrillingEntries.
     * @param {DrillingEntryDeleteManyArgs} args - Arguments to filter DrillingEntries to delete.
     * @example
     * // Delete a few DrillingEntries
     * const { count } = await prisma.drillingEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrillingEntryDeleteManyArgs>(args?: SelectSubset<T, DrillingEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrillingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillingEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrillingEntries
     * const drillingEntry = await prisma.drillingEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrillingEntryUpdateManyArgs>(args: SelectSubset<T, DrillingEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrillingEntries and returns the data updated in the database.
     * @param {DrillingEntryUpdateManyAndReturnArgs} args - Arguments to update many DrillingEntries.
     * @example
     * // Update many DrillingEntries
     * const drillingEntry = await prisma.drillingEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DrillingEntries and only return the `id`
     * const drillingEntryWithIdOnly = await prisma.drillingEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DrillingEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, DrillingEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DrillingEntry.
     * @param {DrillingEntryUpsertArgs} args - Arguments to update or create a DrillingEntry.
     * @example
     * // Update or create a DrillingEntry
     * const drillingEntry = await prisma.drillingEntry.upsert({
     *   create: {
     *     // ... data to create a DrillingEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrillingEntry we want to update
     *   }
     * })
     */
    upsert<T extends DrillingEntryUpsertArgs>(args: SelectSubset<T, DrillingEntryUpsertArgs<ExtArgs>>): Prisma__DrillingEntryClient<$Result.GetResult<Prisma.$DrillingEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DrillingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillingEntryCountArgs} args - Arguments to filter DrillingEntries to count.
     * @example
     * // Count the number of DrillingEntries
     * const count = await prisma.drillingEntry.count({
     *   where: {
     *     // ... the filter for the DrillingEntries we want to count
     *   }
     * })
    **/
    count<T extends DrillingEntryCountArgs>(
      args?: Subset<T, DrillingEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrillingEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrillingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillingEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrillingEntryAggregateArgs>(args: Subset<T, DrillingEntryAggregateArgs>): Prisma.PrismaPromise<GetDrillingEntryAggregateType<T>>

    /**
     * Group by DrillingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrillingEntryGroupByArgs} args - Group by arguments.
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
      T extends DrillingEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrillingEntryGroupByArgs['orderBy'] }
        : { orderBy?: DrillingEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrillingEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrillingEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DrillingEntry model
   */
  readonly fields: DrillingEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DrillingEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrillingEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DrillingEntry model
   */
  interface DrillingEntryFieldRefs {
    readonly id: FieldRef<"DrillingEntry", 'String'>
    readonly siteId: FieldRef<"DrillingEntry", 'String'>
    readonly date: FieldRef<"DrillingEntry", 'DateTime'>
    readonly meters: FieldRef<"DrillingEntry", 'Decimal'>
    readonly boreholeNumber: FieldRef<"DrillingEntry", 'String'>
    readonly createdById: FieldRef<"DrillingEntry", 'String'>
    readonly createdAt: FieldRef<"DrillingEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"DrillingEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DrillingEntry findUnique
   */
  export type DrillingEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
    /**
     * Filter, which DrillingEntry to fetch.
     */
    where: DrillingEntryWhereUniqueInput
  }

  /**
   * DrillingEntry findUniqueOrThrow
   */
  export type DrillingEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
    /**
     * Filter, which DrillingEntry to fetch.
     */
    where: DrillingEntryWhereUniqueInput
  }

  /**
   * DrillingEntry findFirst
   */
  export type DrillingEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
    /**
     * Filter, which DrillingEntry to fetch.
     */
    where?: DrillingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrillingEntries to fetch.
     */
    orderBy?: DrillingEntryOrderByWithRelationInput | DrillingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrillingEntries.
     */
    cursor?: DrillingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrillingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrillingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrillingEntries.
     */
    distinct?: DrillingEntryScalarFieldEnum | DrillingEntryScalarFieldEnum[]
  }

  /**
   * DrillingEntry findFirstOrThrow
   */
  export type DrillingEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
    /**
     * Filter, which DrillingEntry to fetch.
     */
    where?: DrillingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrillingEntries to fetch.
     */
    orderBy?: DrillingEntryOrderByWithRelationInput | DrillingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrillingEntries.
     */
    cursor?: DrillingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrillingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrillingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrillingEntries.
     */
    distinct?: DrillingEntryScalarFieldEnum | DrillingEntryScalarFieldEnum[]
  }

  /**
   * DrillingEntry findMany
   */
  export type DrillingEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
    /**
     * Filter, which DrillingEntries to fetch.
     */
    where?: DrillingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrillingEntries to fetch.
     */
    orderBy?: DrillingEntryOrderByWithRelationInput | DrillingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrillingEntries.
     */
    cursor?: DrillingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrillingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrillingEntries.
     */
    skip?: number
    distinct?: DrillingEntryScalarFieldEnum | DrillingEntryScalarFieldEnum[]
  }

  /**
   * DrillingEntry create
   */
  export type DrillingEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a DrillingEntry.
     */
    data: XOR<DrillingEntryCreateInput, DrillingEntryUncheckedCreateInput>
  }

  /**
   * DrillingEntry createMany
   */
  export type DrillingEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DrillingEntries.
     */
    data: DrillingEntryCreateManyInput | DrillingEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DrillingEntry createManyAndReturn
   */
  export type DrillingEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * The data used to create many DrillingEntries.
     */
    data: DrillingEntryCreateManyInput | DrillingEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrillingEntry update
   */
  export type DrillingEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a DrillingEntry.
     */
    data: XOR<DrillingEntryUpdateInput, DrillingEntryUncheckedUpdateInput>
    /**
     * Choose, which DrillingEntry to update.
     */
    where: DrillingEntryWhereUniqueInput
  }

  /**
   * DrillingEntry updateMany
   */
  export type DrillingEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DrillingEntries.
     */
    data: XOR<DrillingEntryUpdateManyMutationInput, DrillingEntryUncheckedUpdateManyInput>
    /**
     * Filter which DrillingEntries to update
     */
    where?: DrillingEntryWhereInput
    /**
     * Limit how many DrillingEntries to update.
     */
    limit?: number
  }

  /**
   * DrillingEntry updateManyAndReturn
   */
  export type DrillingEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * The data used to update DrillingEntries.
     */
    data: XOR<DrillingEntryUpdateManyMutationInput, DrillingEntryUncheckedUpdateManyInput>
    /**
     * Filter which DrillingEntries to update
     */
    where?: DrillingEntryWhereInput
    /**
     * Limit how many DrillingEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrillingEntry upsert
   */
  export type DrillingEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the DrillingEntry to update in case it exists.
     */
    where: DrillingEntryWhereUniqueInput
    /**
     * In case the DrillingEntry found by the `where` argument doesn't exist, create a new DrillingEntry with this data.
     */
    create: XOR<DrillingEntryCreateInput, DrillingEntryUncheckedCreateInput>
    /**
     * In case the DrillingEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrillingEntryUpdateInput, DrillingEntryUncheckedUpdateInput>
  }

  /**
   * DrillingEntry delete
   */
  export type DrillingEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
    /**
     * Filter which DrillingEntry to delete.
     */
    where: DrillingEntryWhereUniqueInput
  }

  /**
   * DrillingEntry deleteMany
   */
  export type DrillingEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrillingEntries to delete
     */
    where?: DrillingEntryWhereInput
    /**
     * Limit how many DrillingEntries to delete.
     */
    limit?: number
  }

  /**
   * DrillingEntry without action
   */
  export type DrillingEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrillingEntry
     */
    select?: DrillingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrillingEntry
     */
    omit?: DrillingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrillingEntryInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expenseHeads?: boolean | Category$expenseHeadsArgs<ExtArgs>
    opexEntries?: boolean | Category$opexEntriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenseHeads?: boolean | Category$expenseHeadsArgs<ExtArgs>
    opexEntries?: boolean | Category$opexEntriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      expenseHeads: Prisma.$ExpenseHeadPayload<ExtArgs>[]
      opexEntries: Prisma.$OpexEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenseHeads<T extends Category$expenseHeadsArgs<ExtArgs> = {}>(args?: Subset<T, Category$expenseHeadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opexEntries<T extends Category$opexEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$opexEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.expenseHeads
   */
  export type Category$expenseHeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadInclude<ExtArgs> | null
    where?: ExpenseHeadWhereInput
    orderBy?: ExpenseHeadOrderByWithRelationInput | ExpenseHeadOrderByWithRelationInput[]
    cursor?: ExpenseHeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseHeadScalarFieldEnum | ExpenseHeadScalarFieldEnum[]
  }

  /**
   * Category.opexEntries
   */
  export type Category$opexEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    where?: OpexEntryWhereInput
    orderBy?: OpexEntryOrderByWithRelationInput | OpexEntryOrderByWithRelationInput[]
    cursor?: OpexEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpexEntryScalarFieldEnum | OpexEntryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseHead
   */

  export type AggregateExpenseHead = {
    _count: ExpenseHeadCountAggregateOutputType | null
    _min: ExpenseHeadMinAggregateOutputType | null
    _max: ExpenseHeadMaxAggregateOutputType | null
  }

  export type ExpenseHeadMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseHeadMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseHeadCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpenseHeadMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseHeadMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseHeadCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpenseHeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseHead to aggregate.
     */
    where?: ExpenseHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseHeads to fetch.
     */
    orderBy?: ExpenseHeadOrderByWithRelationInput | ExpenseHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseHeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseHeads
    **/
    _count?: true | ExpenseHeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseHeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseHeadMaxAggregateInputType
  }

  export type GetExpenseHeadAggregateType<T extends ExpenseHeadAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseHead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseHead[P]>
      : GetScalarType<T[P], AggregateExpenseHead[P]>
  }




  export type ExpenseHeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseHeadWhereInput
    orderBy?: ExpenseHeadOrderByWithAggregationInput | ExpenseHeadOrderByWithAggregationInput[]
    by: ExpenseHeadScalarFieldEnum[] | ExpenseHeadScalarFieldEnum
    having?: ExpenseHeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseHeadCountAggregateInputType | true
    _min?: ExpenseHeadMinAggregateInputType
    _max?: ExpenseHeadMaxAggregateInputType
  }

  export type ExpenseHeadGroupByOutputType = {
    id: string
    categoryId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ExpenseHeadCountAggregateOutputType | null
    _min: ExpenseHeadMinAggregateOutputType | null
    _max: ExpenseHeadMaxAggregateOutputType | null
  }

  type GetExpenseHeadGroupByPayload<T extends ExpenseHeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseHeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseHeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseHeadGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseHeadGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseHeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    opexEntries?: boolean | ExpenseHead$opexEntriesArgs<ExtArgs>
    _count?: boolean | ExpenseHeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseHead"]>

  export type ExpenseHeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseHead"]>

  export type ExpenseHeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseHead"]>

  export type ExpenseHeadSelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExpenseHeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["expenseHead"]>
  export type ExpenseHeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    opexEntries?: boolean | ExpenseHead$opexEntriesArgs<ExtArgs>
    _count?: boolean | ExpenseHeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseHeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ExpenseHeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ExpenseHeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseHead"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      opexEntries: Prisma.$OpexEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expenseHead"]>
    composites: {}
  }

  type ExpenseHeadGetPayload<S extends boolean | null | undefined | ExpenseHeadDefaultArgs> = $Result.GetResult<Prisma.$ExpenseHeadPayload, S>

  type ExpenseHeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseHeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseHeadCountAggregateInputType | true
    }

  export interface ExpenseHeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseHead'], meta: { name: 'ExpenseHead' } }
    /**
     * Find zero or one ExpenseHead that matches the filter.
     * @param {ExpenseHeadFindUniqueArgs} args - Arguments to find a ExpenseHead
     * @example
     * // Get one ExpenseHead
     * const expenseHead = await prisma.expenseHead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseHeadFindUniqueArgs>(args: SelectSubset<T, ExpenseHeadFindUniqueArgs<ExtArgs>>): Prisma__ExpenseHeadClient<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseHead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseHeadFindUniqueOrThrowArgs} args - Arguments to find a ExpenseHead
     * @example
     * // Get one ExpenseHead
     * const expenseHead = await prisma.expenseHead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseHeadFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseHeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseHeadClient<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseHead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseHeadFindFirstArgs} args - Arguments to find a ExpenseHead
     * @example
     * // Get one ExpenseHead
     * const expenseHead = await prisma.expenseHead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseHeadFindFirstArgs>(args?: SelectSubset<T, ExpenseHeadFindFirstArgs<ExtArgs>>): Prisma__ExpenseHeadClient<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseHead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseHeadFindFirstOrThrowArgs} args - Arguments to find a ExpenseHead
     * @example
     * // Get one ExpenseHead
     * const expenseHead = await prisma.expenseHead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseHeadFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseHeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseHeadClient<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseHeads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseHeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseHeads
     * const expenseHeads = await prisma.expenseHead.findMany()
     * 
     * // Get first 10 ExpenseHeads
     * const expenseHeads = await prisma.expenseHead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseHeadWithIdOnly = await prisma.expenseHead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseHeadFindManyArgs>(args?: SelectSubset<T, ExpenseHeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseHead.
     * @param {ExpenseHeadCreateArgs} args - Arguments to create a ExpenseHead.
     * @example
     * // Create one ExpenseHead
     * const ExpenseHead = await prisma.expenseHead.create({
     *   data: {
     *     // ... data to create a ExpenseHead
     *   }
     * })
     * 
     */
    create<T extends ExpenseHeadCreateArgs>(args: SelectSubset<T, ExpenseHeadCreateArgs<ExtArgs>>): Prisma__ExpenseHeadClient<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseHeads.
     * @param {ExpenseHeadCreateManyArgs} args - Arguments to create many ExpenseHeads.
     * @example
     * // Create many ExpenseHeads
     * const expenseHead = await prisma.expenseHead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseHeadCreateManyArgs>(args?: SelectSubset<T, ExpenseHeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseHeads and returns the data saved in the database.
     * @param {ExpenseHeadCreateManyAndReturnArgs} args - Arguments to create many ExpenseHeads.
     * @example
     * // Create many ExpenseHeads
     * const expenseHead = await prisma.expenseHead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseHeads and only return the `id`
     * const expenseHeadWithIdOnly = await prisma.expenseHead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseHeadCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseHeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseHead.
     * @param {ExpenseHeadDeleteArgs} args - Arguments to delete one ExpenseHead.
     * @example
     * // Delete one ExpenseHead
     * const ExpenseHead = await prisma.expenseHead.delete({
     *   where: {
     *     // ... filter to delete one ExpenseHead
     *   }
     * })
     * 
     */
    delete<T extends ExpenseHeadDeleteArgs>(args: SelectSubset<T, ExpenseHeadDeleteArgs<ExtArgs>>): Prisma__ExpenseHeadClient<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseHead.
     * @param {ExpenseHeadUpdateArgs} args - Arguments to update one ExpenseHead.
     * @example
     * // Update one ExpenseHead
     * const expenseHead = await prisma.expenseHead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseHeadUpdateArgs>(args: SelectSubset<T, ExpenseHeadUpdateArgs<ExtArgs>>): Prisma__ExpenseHeadClient<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseHeads.
     * @param {ExpenseHeadDeleteManyArgs} args - Arguments to filter ExpenseHeads to delete.
     * @example
     * // Delete a few ExpenseHeads
     * const { count } = await prisma.expenseHead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseHeadDeleteManyArgs>(args?: SelectSubset<T, ExpenseHeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseHeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseHeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseHeads
     * const expenseHead = await prisma.expenseHead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseHeadUpdateManyArgs>(args: SelectSubset<T, ExpenseHeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseHeads and returns the data updated in the database.
     * @param {ExpenseHeadUpdateManyAndReturnArgs} args - Arguments to update many ExpenseHeads.
     * @example
     * // Update many ExpenseHeads
     * const expenseHead = await prisma.expenseHead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseHeads and only return the `id`
     * const expenseHeadWithIdOnly = await prisma.expenseHead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseHeadUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseHeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseHead.
     * @param {ExpenseHeadUpsertArgs} args - Arguments to update or create a ExpenseHead.
     * @example
     * // Update or create a ExpenseHead
     * const expenseHead = await prisma.expenseHead.upsert({
     *   create: {
     *     // ... data to create a ExpenseHead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseHead we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseHeadUpsertArgs>(args: SelectSubset<T, ExpenseHeadUpsertArgs<ExtArgs>>): Prisma__ExpenseHeadClient<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseHeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseHeadCountArgs} args - Arguments to filter ExpenseHeads to count.
     * @example
     * // Count the number of ExpenseHeads
     * const count = await prisma.expenseHead.count({
     *   where: {
     *     // ... the filter for the ExpenseHeads we want to count
     *   }
     * })
    **/
    count<T extends ExpenseHeadCountArgs>(
      args?: Subset<T, ExpenseHeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseHeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseHead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseHeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseHeadAggregateArgs>(args: Subset<T, ExpenseHeadAggregateArgs>): Prisma.PrismaPromise<GetExpenseHeadAggregateType<T>>

    /**
     * Group by ExpenseHead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseHeadGroupByArgs} args - Group by arguments.
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
      T extends ExpenseHeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseHeadGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseHeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpenseHeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseHeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseHead model
   */
  readonly fields: ExpenseHeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseHead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseHeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opexEntries<T extends ExpenseHead$opexEntriesArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseHead$opexEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExpenseHead model
   */
  interface ExpenseHeadFieldRefs {
    readonly id: FieldRef<"ExpenseHead", 'String'>
    readonly categoryId: FieldRef<"ExpenseHead", 'String'>
    readonly name: FieldRef<"ExpenseHead", 'String'>
    readonly createdAt: FieldRef<"ExpenseHead", 'DateTime'>
    readonly updatedAt: FieldRef<"ExpenseHead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseHead findUnique
   */
  export type ExpenseHeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseHead to fetch.
     */
    where: ExpenseHeadWhereUniqueInput
  }

  /**
   * ExpenseHead findUniqueOrThrow
   */
  export type ExpenseHeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseHead to fetch.
     */
    where: ExpenseHeadWhereUniqueInput
  }

  /**
   * ExpenseHead findFirst
   */
  export type ExpenseHeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseHead to fetch.
     */
    where?: ExpenseHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseHeads to fetch.
     */
    orderBy?: ExpenseHeadOrderByWithRelationInput | ExpenseHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseHeads.
     */
    cursor?: ExpenseHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseHeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseHeads.
     */
    distinct?: ExpenseHeadScalarFieldEnum | ExpenseHeadScalarFieldEnum[]
  }

  /**
   * ExpenseHead findFirstOrThrow
   */
  export type ExpenseHeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseHead to fetch.
     */
    where?: ExpenseHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseHeads to fetch.
     */
    orderBy?: ExpenseHeadOrderByWithRelationInput | ExpenseHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseHeads.
     */
    cursor?: ExpenseHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseHeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseHeads.
     */
    distinct?: ExpenseHeadScalarFieldEnum | ExpenseHeadScalarFieldEnum[]
  }

  /**
   * ExpenseHead findMany
   */
  export type ExpenseHeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseHeads to fetch.
     */
    where?: ExpenseHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseHeads to fetch.
     */
    orderBy?: ExpenseHeadOrderByWithRelationInput | ExpenseHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseHeads.
     */
    cursor?: ExpenseHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseHeads.
     */
    skip?: number
    distinct?: ExpenseHeadScalarFieldEnum | ExpenseHeadScalarFieldEnum[]
  }

  /**
   * ExpenseHead create
   */
  export type ExpenseHeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseHead.
     */
    data: XOR<ExpenseHeadCreateInput, ExpenseHeadUncheckedCreateInput>
  }

  /**
   * ExpenseHead createMany
   */
  export type ExpenseHeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseHeads.
     */
    data: ExpenseHeadCreateManyInput | ExpenseHeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseHead createManyAndReturn
   */
  export type ExpenseHeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseHeads.
     */
    data: ExpenseHeadCreateManyInput | ExpenseHeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseHead update
   */
  export type ExpenseHeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseHead.
     */
    data: XOR<ExpenseHeadUpdateInput, ExpenseHeadUncheckedUpdateInput>
    /**
     * Choose, which ExpenseHead to update.
     */
    where: ExpenseHeadWhereUniqueInput
  }

  /**
   * ExpenseHead updateMany
   */
  export type ExpenseHeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseHeads.
     */
    data: XOR<ExpenseHeadUpdateManyMutationInput, ExpenseHeadUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseHeads to update
     */
    where?: ExpenseHeadWhereInput
    /**
     * Limit how many ExpenseHeads to update.
     */
    limit?: number
  }

  /**
   * ExpenseHead updateManyAndReturn
   */
  export type ExpenseHeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseHeads.
     */
    data: XOR<ExpenseHeadUpdateManyMutationInput, ExpenseHeadUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseHeads to update
     */
    where?: ExpenseHeadWhereInput
    /**
     * Limit how many ExpenseHeads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseHead upsert
   */
  export type ExpenseHeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseHead to update in case it exists.
     */
    where: ExpenseHeadWhereUniqueInput
    /**
     * In case the ExpenseHead found by the `where` argument doesn't exist, create a new ExpenseHead with this data.
     */
    create: XOR<ExpenseHeadCreateInput, ExpenseHeadUncheckedCreateInput>
    /**
     * In case the ExpenseHead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseHeadUpdateInput, ExpenseHeadUncheckedUpdateInput>
  }

  /**
   * ExpenseHead delete
   */
  export type ExpenseHeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadInclude<ExtArgs> | null
    /**
     * Filter which ExpenseHead to delete.
     */
    where: ExpenseHeadWhereUniqueInput
  }

  /**
   * ExpenseHead deleteMany
   */
  export type ExpenseHeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseHeads to delete
     */
    where?: ExpenseHeadWhereInput
    /**
     * Limit how many ExpenseHeads to delete.
     */
    limit?: number
  }

  /**
   * ExpenseHead.opexEntries
   */
  export type ExpenseHead$opexEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    where?: OpexEntryWhereInput
    orderBy?: OpexEntryOrderByWithRelationInput | OpexEntryOrderByWithRelationInput[]
    cursor?: OpexEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpexEntryScalarFieldEnum | OpexEntryScalarFieldEnum[]
  }

  /**
   * ExpenseHead without action
   */
  export type ExpenseHeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseHead
     */
    select?: ExpenseHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseHead
     */
    omit?: ExpenseHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseHeadInclude<ExtArgs> | null
  }


  /**
   * Model OpexEntry
   */

  export type AggregateOpexEntry = {
    _count: OpexEntryCountAggregateOutputType | null
    _avg: OpexEntryAvgAggregateOutputType | null
    _sum: OpexEntrySumAggregateOutputType | null
    _min: OpexEntryMinAggregateOutputType | null
    _max: OpexEntryMaxAggregateOutputType | null
  }

  export type OpexEntryAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type OpexEntrySumAggregateOutputType = {
    amount: Decimal | null
  }

  export type OpexEntryMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    categoryId: string | null
    expenseHeadId: string | null
    amount: Decimal | null
    date: Date | null
    remarks: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OpexEntryMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    categoryId: string | null
    expenseHeadId: string | null
    amount: Decimal | null
    date: Date | null
    remarks: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OpexEntryCountAggregateOutputType = {
    id: number
    siteId: number
    categoryId: number
    expenseHeadId: number
    amount: number
    date: number
    remarks: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OpexEntryAvgAggregateInputType = {
    amount?: true
  }

  export type OpexEntrySumAggregateInputType = {
    amount?: true
  }

  export type OpexEntryMinAggregateInputType = {
    id?: true
    siteId?: true
    categoryId?: true
    expenseHeadId?: true
    amount?: true
    date?: true
    remarks?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OpexEntryMaxAggregateInputType = {
    id?: true
    siteId?: true
    categoryId?: true
    expenseHeadId?: true
    amount?: true
    date?: true
    remarks?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OpexEntryCountAggregateInputType = {
    id?: true
    siteId?: true
    categoryId?: true
    expenseHeadId?: true
    amount?: true
    date?: true
    remarks?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OpexEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpexEntry to aggregate.
     */
    where?: OpexEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpexEntries to fetch.
     */
    orderBy?: OpexEntryOrderByWithRelationInput | OpexEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpexEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpexEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpexEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpexEntries
    **/
    _count?: true | OpexEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpexEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpexEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpexEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpexEntryMaxAggregateInputType
  }

  export type GetOpexEntryAggregateType<T extends OpexEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateOpexEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpexEntry[P]>
      : GetScalarType<T[P], AggregateOpexEntry[P]>
  }




  export type OpexEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpexEntryWhereInput
    orderBy?: OpexEntryOrderByWithAggregationInput | OpexEntryOrderByWithAggregationInput[]
    by: OpexEntryScalarFieldEnum[] | OpexEntryScalarFieldEnum
    having?: OpexEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpexEntryCountAggregateInputType | true
    _avg?: OpexEntryAvgAggregateInputType
    _sum?: OpexEntrySumAggregateInputType
    _min?: OpexEntryMinAggregateInputType
    _max?: OpexEntryMaxAggregateInputType
  }

  export type OpexEntryGroupByOutputType = {
    id: string
    siteId: string
    categoryId: string
    expenseHeadId: string
    amount: Decimal
    date: Date
    remarks: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: OpexEntryCountAggregateOutputType | null
    _avg: OpexEntryAvgAggregateOutputType | null
    _sum: OpexEntrySumAggregateOutputType | null
    _min: OpexEntryMinAggregateOutputType | null
    _max: OpexEntryMaxAggregateOutputType | null
  }

  type GetOpexEntryGroupByPayload<T extends OpexEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpexEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpexEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpexEntryGroupByOutputType[P]>
            : GetScalarType<T[P], OpexEntryGroupByOutputType[P]>
        }
      >
    >


  export type OpexEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    categoryId?: boolean
    expenseHeadId?: boolean
    amount?: boolean
    date?: boolean
    remarks?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    expenseHead?: boolean | ExpenseHeadDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opexEntry"]>

  export type OpexEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    categoryId?: boolean
    expenseHeadId?: boolean
    amount?: boolean
    date?: boolean
    remarks?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    expenseHead?: boolean | ExpenseHeadDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opexEntry"]>

  export type OpexEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    categoryId?: boolean
    expenseHeadId?: boolean
    amount?: boolean
    date?: boolean
    remarks?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    expenseHead?: boolean | ExpenseHeadDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opexEntry"]>

  export type OpexEntrySelectScalar = {
    id?: boolean
    siteId?: boolean
    categoryId?: boolean
    expenseHeadId?: boolean
    amount?: boolean
    date?: boolean
    remarks?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OpexEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "categoryId" | "expenseHeadId" | "amount" | "date" | "remarks" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["opexEntry"]>
  export type OpexEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    expenseHead?: boolean | ExpenseHeadDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OpexEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    expenseHead?: boolean | ExpenseHeadDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OpexEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    expenseHead?: boolean | ExpenseHeadDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OpexEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpexEntry"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      expenseHead: Prisma.$ExpenseHeadPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      categoryId: string
      expenseHeadId: string
      amount: Prisma.Decimal
      date: Date
      remarks: string
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["opexEntry"]>
    composites: {}
  }

  type OpexEntryGetPayload<S extends boolean | null | undefined | OpexEntryDefaultArgs> = $Result.GetResult<Prisma.$OpexEntryPayload, S>

  type OpexEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpexEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpexEntryCountAggregateInputType | true
    }

  export interface OpexEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpexEntry'], meta: { name: 'OpexEntry' } }
    /**
     * Find zero or one OpexEntry that matches the filter.
     * @param {OpexEntryFindUniqueArgs} args - Arguments to find a OpexEntry
     * @example
     * // Get one OpexEntry
     * const opexEntry = await prisma.opexEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpexEntryFindUniqueArgs>(args: SelectSubset<T, OpexEntryFindUniqueArgs<ExtArgs>>): Prisma__OpexEntryClient<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OpexEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpexEntryFindUniqueOrThrowArgs} args - Arguments to find a OpexEntry
     * @example
     * // Get one OpexEntry
     * const opexEntry = await prisma.opexEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpexEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, OpexEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpexEntryClient<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpexEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpexEntryFindFirstArgs} args - Arguments to find a OpexEntry
     * @example
     * // Get one OpexEntry
     * const opexEntry = await prisma.opexEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpexEntryFindFirstArgs>(args?: SelectSubset<T, OpexEntryFindFirstArgs<ExtArgs>>): Prisma__OpexEntryClient<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpexEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpexEntryFindFirstOrThrowArgs} args - Arguments to find a OpexEntry
     * @example
     * // Get one OpexEntry
     * const opexEntry = await prisma.opexEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpexEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, OpexEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpexEntryClient<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OpexEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpexEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpexEntries
     * const opexEntries = await prisma.opexEntry.findMany()
     * 
     * // Get first 10 OpexEntries
     * const opexEntries = await prisma.opexEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opexEntryWithIdOnly = await prisma.opexEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpexEntryFindManyArgs>(args?: SelectSubset<T, OpexEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OpexEntry.
     * @param {OpexEntryCreateArgs} args - Arguments to create a OpexEntry.
     * @example
     * // Create one OpexEntry
     * const OpexEntry = await prisma.opexEntry.create({
     *   data: {
     *     // ... data to create a OpexEntry
     *   }
     * })
     * 
     */
    create<T extends OpexEntryCreateArgs>(args: SelectSubset<T, OpexEntryCreateArgs<ExtArgs>>): Prisma__OpexEntryClient<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OpexEntries.
     * @param {OpexEntryCreateManyArgs} args - Arguments to create many OpexEntries.
     * @example
     * // Create many OpexEntries
     * const opexEntry = await prisma.opexEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpexEntryCreateManyArgs>(args?: SelectSubset<T, OpexEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpexEntries and returns the data saved in the database.
     * @param {OpexEntryCreateManyAndReturnArgs} args - Arguments to create many OpexEntries.
     * @example
     * // Create many OpexEntries
     * const opexEntry = await prisma.opexEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpexEntries and only return the `id`
     * const opexEntryWithIdOnly = await prisma.opexEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpexEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, OpexEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OpexEntry.
     * @param {OpexEntryDeleteArgs} args - Arguments to delete one OpexEntry.
     * @example
     * // Delete one OpexEntry
     * const OpexEntry = await prisma.opexEntry.delete({
     *   where: {
     *     // ... filter to delete one OpexEntry
     *   }
     * })
     * 
     */
    delete<T extends OpexEntryDeleteArgs>(args: SelectSubset<T, OpexEntryDeleteArgs<ExtArgs>>): Prisma__OpexEntryClient<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OpexEntry.
     * @param {OpexEntryUpdateArgs} args - Arguments to update one OpexEntry.
     * @example
     * // Update one OpexEntry
     * const opexEntry = await prisma.opexEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpexEntryUpdateArgs>(args: SelectSubset<T, OpexEntryUpdateArgs<ExtArgs>>): Prisma__OpexEntryClient<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OpexEntries.
     * @param {OpexEntryDeleteManyArgs} args - Arguments to filter OpexEntries to delete.
     * @example
     * // Delete a few OpexEntries
     * const { count } = await prisma.opexEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpexEntryDeleteManyArgs>(args?: SelectSubset<T, OpexEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpexEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpexEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpexEntries
     * const opexEntry = await prisma.opexEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpexEntryUpdateManyArgs>(args: SelectSubset<T, OpexEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpexEntries and returns the data updated in the database.
     * @param {OpexEntryUpdateManyAndReturnArgs} args - Arguments to update many OpexEntries.
     * @example
     * // Update many OpexEntries
     * const opexEntry = await prisma.opexEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OpexEntries and only return the `id`
     * const opexEntryWithIdOnly = await prisma.opexEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpexEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, OpexEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OpexEntry.
     * @param {OpexEntryUpsertArgs} args - Arguments to update or create a OpexEntry.
     * @example
     * // Update or create a OpexEntry
     * const opexEntry = await prisma.opexEntry.upsert({
     *   create: {
     *     // ... data to create a OpexEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpexEntry we want to update
     *   }
     * })
     */
    upsert<T extends OpexEntryUpsertArgs>(args: SelectSubset<T, OpexEntryUpsertArgs<ExtArgs>>): Prisma__OpexEntryClient<$Result.GetResult<Prisma.$OpexEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OpexEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpexEntryCountArgs} args - Arguments to filter OpexEntries to count.
     * @example
     * // Count the number of OpexEntries
     * const count = await prisma.opexEntry.count({
     *   where: {
     *     // ... the filter for the OpexEntries we want to count
     *   }
     * })
    **/
    count<T extends OpexEntryCountArgs>(
      args?: Subset<T, OpexEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpexEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpexEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpexEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpexEntryAggregateArgs>(args: Subset<T, OpexEntryAggregateArgs>): Prisma.PrismaPromise<GetOpexEntryAggregateType<T>>

    /**
     * Group by OpexEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpexEntryGroupByArgs} args - Group by arguments.
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
      T extends OpexEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpexEntryGroupByArgs['orderBy'] }
        : { orderBy?: OpexEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpexEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpexEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpexEntry model
   */
  readonly fields: OpexEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpexEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpexEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expenseHead<T extends ExpenseHeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseHeadDefaultArgs<ExtArgs>>): Prisma__ExpenseHeadClient<$Result.GetResult<Prisma.$ExpenseHeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OpexEntry model
   */
  interface OpexEntryFieldRefs {
    readonly id: FieldRef<"OpexEntry", 'String'>
    readonly siteId: FieldRef<"OpexEntry", 'String'>
    readonly categoryId: FieldRef<"OpexEntry", 'String'>
    readonly expenseHeadId: FieldRef<"OpexEntry", 'String'>
    readonly amount: FieldRef<"OpexEntry", 'Decimal'>
    readonly date: FieldRef<"OpexEntry", 'DateTime'>
    readonly remarks: FieldRef<"OpexEntry", 'String'>
    readonly createdById: FieldRef<"OpexEntry", 'String'>
    readonly createdAt: FieldRef<"OpexEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"OpexEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OpexEntry findUnique
   */
  export type OpexEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    /**
     * Filter, which OpexEntry to fetch.
     */
    where: OpexEntryWhereUniqueInput
  }

  /**
   * OpexEntry findUniqueOrThrow
   */
  export type OpexEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    /**
     * Filter, which OpexEntry to fetch.
     */
    where: OpexEntryWhereUniqueInput
  }

  /**
   * OpexEntry findFirst
   */
  export type OpexEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    /**
     * Filter, which OpexEntry to fetch.
     */
    where?: OpexEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpexEntries to fetch.
     */
    orderBy?: OpexEntryOrderByWithRelationInput | OpexEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpexEntries.
     */
    cursor?: OpexEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpexEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpexEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpexEntries.
     */
    distinct?: OpexEntryScalarFieldEnum | OpexEntryScalarFieldEnum[]
  }

  /**
   * OpexEntry findFirstOrThrow
   */
  export type OpexEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    /**
     * Filter, which OpexEntry to fetch.
     */
    where?: OpexEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpexEntries to fetch.
     */
    orderBy?: OpexEntryOrderByWithRelationInput | OpexEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpexEntries.
     */
    cursor?: OpexEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpexEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpexEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpexEntries.
     */
    distinct?: OpexEntryScalarFieldEnum | OpexEntryScalarFieldEnum[]
  }

  /**
   * OpexEntry findMany
   */
  export type OpexEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    /**
     * Filter, which OpexEntries to fetch.
     */
    where?: OpexEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpexEntries to fetch.
     */
    orderBy?: OpexEntryOrderByWithRelationInput | OpexEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpexEntries.
     */
    cursor?: OpexEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpexEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpexEntries.
     */
    skip?: number
    distinct?: OpexEntryScalarFieldEnum | OpexEntryScalarFieldEnum[]
  }

  /**
   * OpexEntry create
   */
  export type OpexEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a OpexEntry.
     */
    data: XOR<OpexEntryCreateInput, OpexEntryUncheckedCreateInput>
  }

  /**
   * OpexEntry createMany
   */
  export type OpexEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpexEntries.
     */
    data: OpexEntryCreateManyInput | OpexEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OpexEntry createManyAndReturn
   */
  export type OpexEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * The data used to create many OpexEntries.
     */
    data: OpexEntryCreateManyInput | OpexEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpexEntry update
   */
  export type OpexEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a OpexEntry.
     */
    data: XOR<OpexEntryUpdateInput, OpexEntryUncheckedUpdateInput>
    /**
     * Choose, which OpexEntry to update.
     */
    where: OpexEntryWhereUniqueInput
  }

  /**
   * OpexEntry updateMany
   */
  export type OpexEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpexEntries.
     */
    data: XOR<OpexEntryUpdateManyMutationInput, OpexEntryUncheckedUpdateManyInput>
    /**
     * Filter which OpexEntries to update
     */
    where?: OpexEntryWhereInput
    /**
     * Limit how many OpexEntries to update.
     */
    limit?: number
  }

  /**
   * OpexEntry updateManyAndReturn
   */
  export type OpexEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * The data used to update OpexEntries.
     */
    data: XOR<OpexEntryUpdateManyMutationInput, OpexEntryUncheckedUpdateManyInput>
    /**
     * Filter which OpexEntries to update
     */
    where?: OpexEntryWhereInput
    /**
     * Limit how many OpexEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpexEntry upsert
   */
  export type OpexEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the OpexEntry to update in case it exists.
     */
    where: OpexEntryWhereUniqueInput
    /**
     * In case the OpexEntry found by the `where` argument doesn't exist, create a new OpexEntry with this data.
     */
    create: XOR<OpexEntryCreateInput, OpexEntryUncheckedCreateInput>
    /**
     * In case the OpexEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpexEntryUpdateInput, OpexEntryUncheckedUpdateInput>
  }

  /**
   * OpexEntry delete
   */
  export type OpexEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
    /**
     * Filter which OpexEntry to delete.
     */
    where: OpexEntryWhereUniqueInput
  }

  /**
   * OpexEntry deleteMany
   */
  export type OpexEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpexEntries to delete
     */
    where?: OpexEntryWhereInput
    /**
     * Limit how many OpexEntries to delete.
     */
    limit?: number
  }

  /**
   * OpexEntry without action
   */
  export type OpexEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpexEntry
     */
    select?: OpexEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpexEntry
     */
    omit?: OpexEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpexEntryInclude<ExtArgs> | null
  }


  /**
   * Model DceEntry
   */

  export type AggregateDceEntry = {
    _count: DceEntryCountAggregateOutputType | null
    _avg: DceEntryAvgAggregateOutputType | null
    _sum: DceEntrySumAggregateOutputType | null
    _min: DceEntryMinAggregateOutputType | null
    _max: DceEntryMaxAggregateOutputType | null
  }

  export type DceEntryAvgAggregateOutputType = {
    perDayCost: Decimal | null
    totalPausedDays: number | null
  }

  export type DceEntrySumAggregateOutputType = {
    perDayCost: Decimal | null
    totalPausedDays: number | null
  }

  export type DceEntryMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    costHead: string | null
    perDayCost: Decimal | null
    startDate: Date | null
    status: $Enums.DceStatus | null
    remarks: string | null
    pausedAt: Date | null
    stoppedAt: Date | null
    totalPausedDays: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DceEntryMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    costHead: string | null
    perDayCost: Decimal | null
    startDate: Date | null
    status: $Enums.DceStatus | null
    remarks: string | null
    pausedAt: Date | null
    stoppedAt: Date | null
    totalPausedDays: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DceEntryCountAggregateOutputType = {
    id: number
    siteId: number
    costHead: number
    perDayCost: number
    startDate: number
    status: number
    remarks: number
    pausedAt: number
    stoppedAt: number
    totalPausedDays: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DceEntryAvgAggregateInputType = {
    perDayCost?: true
    totalPausedDays?: true
  }

  export type DceEntrySumAggregateInputType = {
    perDayCost?: true
    totalPausedDays?: true
  }

  export type DceEntryMinAggregateInputType = {
    id?: true
    siteId?: true
    costHead?: true
    perDayCost?: true
    startDate?: true
    status?: true
    remarks?: true
    pausedAt?: true
    stoppedAt?: true
    totalPausedDays?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DceEntryMaxAggregateInputType = {
    id?: true
    siteId?: true
    costHead?: true
    perDayCost?: true
    startDate?: true
    status?: true
    remarks?: true
    pausedAt?: true
    stoppedAt?: true
    totalPausedDays?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DceEntryCountAggregateInputType = {
    id?: true
    siteId?: true
    costHead?: true
    perDayCost?: true
    startDate?: true
    status?: true
    remarks?: true
    pausedAt?: true
    stoppedAt?: true
    totalPausedDays?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DceEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DceEntry to aggregate.
     */
    where?: DceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DceEntries to fetch.
     */
    orderBy?: DceEntryOrderByWithRelationInput | DceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DceEntries
    **/
    _count?: true | DceEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DceEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DceEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DceEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DceEntryMaxAggregateInputType
  }

  export type GetDceEntryAggregateType<T extends DceEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateDceEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDceEntry[P]>
      : GetScalarType<T[P], AggregateDceEntry[P]>
  }




  export type DceEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DceEntryWhereInput
    orderBy?: DceEntryOrderByWithAggregationInput | DceEntryOrderByWithAggregationInput[]
    by: DceEntryScalarFieldEnum[] | DceEntryScalarFieldEnum
    having?: DceEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DceEntryCountAggregateInputType | true
    _avg?: DceEntryAvgAggregateInputType
    _sum?: DceEntrySumAggregateInputType
    _min?: DceEntryMinAggregateInputType
    _max?: DceEntryMaxAggregateInputType
  }

  export type DceEntryGroupByOutputType = {
    id: string
    siteId: string
    costHead: string
    perDayCost: Decimal
    startDate: Date
    status: $Enums.DceStatus
    remarks: string
    pausedAt: Date | null
    stoppedAt: Date | null
    totalPausedDays: number
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: DceEntryCountAggregateOutputType | null
    _avg: DceEntryAvgAggregateOutputType | null
    _sum: DceEntrySumAggregateOutputType | null
    _min: DceEntryMinAggregateOutputType | null
    _max: DceEntryMaxAggregateOutputType | null
  }

  type GetDceEntryGroupByPayload<T extends DceEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DceEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DceEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DceEntryGroupByOutputType[P]>
            : GetScalarType<T[P], DceEntryGroupByOutputType[P]>
        }
      >
    >


  export type DceEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    costHead?: boolean
    perDayCost?: boolean
    startDate?: boolean
    status?: boolean
    remarks?: boolean
    pausedAt?: boolean
    stoppedAt?: boolean
    totalPausedDays?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dceEntry"]>

  export type DceEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    costHead?: boolean
    perDayCost?: boolean
    startDate?: boolean
    status?: boolean
    remarks?: boolean
    pausedAt?: boolean
    stoppedAt?: boolean
    totalPausedDays?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dceEntry"]>

  export type DceEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    costHead?: boolean
    perDayCost?: boolean
    startDate?: boolean
    status?: boolean
    remarks?: boolean
    pausedAt?: boolean
    stoppedAt?: boolean
    totalPausedDays?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dceEntry"]>

  export type DceEntrySelectScalar = {
    id?: boolean
    siteId?: boolean
    costHead?: boolean
    perDayCost?: boolean
    startDate?: boolean
    status?: boolean
    remarks?: boolean
    pausedAt?: boolean
    stoppedAt?: boolean
    totalPausedDays?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DceEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "costHead" | "perDayCost" | "startDate" | "status" | "remarks" | "pausedAt" | "stoppedAt" | "totalPausedDays" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["dceEntry"]>
  export type DceEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DceEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DceEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DceEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DceEntry"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      costHead: string
      perDayCost: Prisma.Decimal
      startDate: Date
      status: $Enums.DceStatus
      remarks: string
      pausedAt: Date | null
      stoppedAt: Date | null
      totalPausedDays: number
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dceEntry"]>
    composites: {}
  }

  type DceEntryGetPayload<S extends boolean | null | undefined | DceEntryDefaultArgs> = $Result.GetResult<Prisma.$DceEntryPayload, S>

  type DceEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DceEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DceEntryCountAggregateInputType | true
    }

  export interface DceEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DceEntry'], meta: { name: 'DceEntry' } }
    /**
     * Find zero or one DceEntry that matches the filter.
     * @param {DceEntryFindUniqueArgs} args - Arguments to find a DceEntry
     * @example
     * // Get one DceEntry
     * const dceEntry = await prisma.dceEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DceEntryFindUniqueArgs>(args: SelectSubset<T, DceEntryFindUniqueArgs<ExtArgs>>): Prisma__DceEntryClient<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DceEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DceEntryFindUniqueOrThrowArgs} args - Arguments to find a DceEntry
     * @example
     * // Get one DceEntry
     * const dceEntry = await prisma.dceEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DceEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, DceEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DceEntryClient<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DceEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DceEntryFindFirstArgs} args - Arguments to find a DceEntry
     * @example
     * // Get one DceEntry
     * const dceEntry = await prisma.dceEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DceEntryFindFirstArgs>(args?: SelectSubset<T, DceEntryFindFirstArgs<ExtArgs>>): Prisma__DceEntryClient<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DceEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DceEntryFindFirstOrThrowArgs} args - Arguments to find a DceEntry
     * @example
     * // Get one DceEntry
     * const dceEntry = await prisma.dceEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DceEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, DceEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DceEntryClient<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DceEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DceEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DceEntries
     * const dceEntries = await prisma.dceEntry.findMany()
     * 
     * // Get first 10 DceEntries
     * const dceEntries = await prisma.dceEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dceEntryWithIdOnly = await prisma.dceEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DceEntryFindManyArgs>(args?: SelectSubset<T, DceEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DceEntry.
     * @param {DceEntryCreateArgs} args - Arguments to create a DceEntry.
     * @example
     * // Create one DceEntry
     * const DceEntry = await prisma.dceEntry.create({
     *   data: {
     *     // ... data to create a DceEntry
     *   }
     * })
     * 
     */
    create<T extends DceEntryCreateArgs>(args: SelectSubset<T, DceEntryCreateArgs<ExtArgs>>): Prisma__DceEntryClient<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DceEntries.
     * @param {DceEntryCreateManyArgs} args - Arguments to create many DceEntries.
     * @example
     * // Create many DceEntries
     * const dceEntry = await prisma.dceEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DceEntryCreateManyArgs>(args?: SelectSubset<T, DceEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DceEntries and returns the data saved in the database.
     * @param {DceEntryCreateManyAndReturnArgs} args - Arguments to create many DceEntries.
     * @example
     * // Create many DceEntries
     * const dceEntry = await prisma.dceEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DceEntries and only return the `id`
     * const dceEntryWithIdOnly = await prisma.dceEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DceEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, DceEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DceEntry.
     * @param {DceEntryDeleteArgs} args - Arguments to delete one DceEntry.
     * @example
     * // Delete one DceEntry
     * const DceEntry = await prisma.dceEntry.delete({
     *   where: {
     *     // ... filter to delete one DceEntry
     *   }
     * })
     * 
     */
    delete<T extends DceEntryDeleteArgs>(args: SelectSubset<T, DceEntryDeleteArgs<ExtArgs>>): Prisma__DceEntryClient<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DceEntry.
     * @param {DceEntryUpdateArgs} args - Arguments to update one DceEntry.
     * @example
     * // Update one DceEntry
     * const dceEntry = await prisma.dceEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DceEntryUpdateArgs>(args: SelectSubset<T, DceEntryUpdateArgs<ExtArgs>>): Prisma__DceEntryClient<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DceEntries.
     * @param {DceEntryDeleteManyArgs} args - Arguments to filter DceEntries to delete.
     * @example
     * // Delete a few DceEntries
     * const { count } = await prisma.dceEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DceEntryDeleteManyArgs>(args?: SelectSubset<T, DceEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DceEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DceEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DceEntries
     * const dceEntry = await prisma.dceEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DceEntryUpdateManyArgs>(args: SelectSubset<T, DceEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DceEntries and returns the data updated in the database.
     * @param {DceEntryUpdateManyAndReturnArgs} args - Arguments to update many DceEntries.
     * @example
     * // Update many DceEntries
     * const dceEntry = await prisma.dceEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DceEntries and only return the `id`
     * const dceEntryWithIdOnly = await prisma.dceEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DceEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, DceEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DceEntry.
     * @param {DceEntryUpsertArgs} args - Arguments to update or create a DceEntry.
     * @example
     * // Update or create a DceEntry
     * const dceEntry = await prisma.dceEntry.upsert({
     *   create: {
     *     // ... data to create a DceEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DceEntry we want to update
     *   }
     * })
     */
    upsert<T extends DceEntryUpsertArgs>(args: SelectSubset<T, DceEntryUpsertArgs<ExtArgs>>): Prisma__DceEntryClient<$Result.GetResult<Prisma.$DceEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DceEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DceEntryCountArgs} args - Arguments to filter DceEntries to count.
     * @example
     * // Count the number of DceEntries
     * const count = await prisma.dceEntry.count({
     *   where: {
     *     // ... the filter for the DceEntries we want to count
     *   }
     * })
    **/
    count<T extends DceEntryCountArgs>(
      args?: Subset<T, DceEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DceEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DceEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DceEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DceEntryAggregateArgs>(args: Subset<T, DceEntryAggregateArgs>): Prisma.PrismaPromise<GetDceEntryAggregateType<T>>

    /**
     * Group by DceEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DceEntryGroupByArgs} args - Group by arguments.
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
      T extends DceEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DceEntryGroupByArgs['orderBy'] }
        : { orderBy?: DceEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DceEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDceEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DceEntry model
   */
  readonly fields: DceEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DceEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DceEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DceEntry model
   */
  interface DceEntryFieldRefs {
    readonly id: FieldRef<"DceEntry", 'String'>
    readonly siteId: FieldRef<"DceEntry", 'String'>
    readonly costHead: FieldRef<"DceEntry", 'String'>
    readonly perDayCost: FieldRef<"DceEntry", 'Decimal'>
    readonly startDate: FieldRef<"DceEntry", 'DateTime'>
    readonly status: FieldRef<"DceEntry", 'DceStatus'>
    readonly remarks: FieldRef<"DceEntry", 'String'>
    readonly pausedAt: FieldRef<"DceEntry", 'DateTime'>
    readonly stoppedAt: FieldRef<"DceEntry", 'DateTime'>
    readonly totalPausedDays: FieldRef<"DceEntry", 'Int'>
    readonly createdById: FieldRef<"DceEntry", 'String'>
    readonly createdAt: FieldRef<"DceEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"DceEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DceEntry findUnique
   */
  export type DceEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
    /**
     * Filter, which DceEntry to fetch.
     */
    where: DceEntryWhereUniqueInput
  }

  /**
   * DceEntry findUniqueOrThrow
   */
  export type DceEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
    /**
     * Filter, which DceEntry to fetch.
     */
    where: DceEntryWhereUniqueInput
  }

  /**
   * DceEntry findFirst
   */
  export type DceEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
    /**
     * Filter, which DceEntry to fetch.
     */
    where?: DceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DceEntries to fetch.
     */
    orderBy?: DceEntryOrderByWithRelationInput | DceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DceEntries.
     */
    cursor?: DceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DceEntries.
     */
    distinct?: DceEntryScalarFieldEnum | DceEntryScalarFieldEnum[]
  }

  /**
   * DceEntry findFirstOrThrow
   */
  export type DceEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
    /**
     * Filter, which DceEntry to fetch.
     */
    where?: DceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DceEntries to fetch.
     */
    orderBy?: DceEntryOrderByWithRelationInput | DceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DceEntries.
     */
    cursor?: DceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DceEntries.
     */
    distinct?: DceEntryScalarFieldEnum | DceEntryScalarFieldEnum[]
  }

  /**
   * DceEntry findMany
   */
  export type DceEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
    /**
     * Filter, which DceEntries to fetch.
     */
    where?: DceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DceEntries to fetch.
     */
    orderBy?: DceEntryOrderByWithRelationInput | DceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DceEntries.
     */
    cursor?: DceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DceEntries.
     */
    skip?: number
    distinct?: DceEntryScalarFieldEnum | DceEntryScalarFieldEnum[]
  }

  /**
   * DceEntry create
   */
  export type DceEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a DceEntry.
     */
    data: XOR<DceEntryCreateInput, DceEntryUncheckedCreateInput>
  }

  /**
   * DceEntry createMany
   */
  export type DceEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DceEntries.
     */
    data: DceEntryCreateManyInput | DceEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DceEntry createManyAndReturn
   */
  export type DceEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * The data used to create many DceEntries.
     */
    data: DceEntryCreateManyInput | DceEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DceEntry update
   */
  export type DceEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a DceEntry.
     */
    data: XOR<DceEntryUpdateInput, DceEntryUncheckedUpdateInput>
    /**
     * Choose, which DceEntry to update.
     */
    where: DceEntryWhereUniqueInput
  }

  /**
   * DceEntry updateMany
   */
  export type DceEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DceEntries.
     */
    data: XOR<DceEntryUpdateManyMutationInput, DceEntryUncheckedUpdateManyInput>
    /**
     * Filter which DceEntries to update
     */
    where?: DceEntryWhereInput
    /**
     * Limit how many DceEntries to update.
     */
    limit?: number
  }

  /**
   * DceEntry updateManyAndReturn
   */
  export type DceEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * The data used to update DceEntries.
     */
    data: XOR<DceEntryUpdateManyMutationInput, DceEntryUncheckedUpdateManyInput>
    /**
     * Filter which DceEntries to update
     */
    where?: DceEntryWhereInput
    /**
     * Limit how many DceEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DceEntry upsert
   */
  export type DceEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the DceEntry to update in case it exists.
     */
    where: DceEntryWhereUniqueInput
    /**
     * In case the DceEntry found by the `where` argument doesn't exist, create a new DceEntry with this data.
     */
    create: XOR<DceEntryCreateInput, DceEntryUncheckedCreateInput>
    /**
     * In case the DceEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DceEntryUpdateInput, DceEntryUncheckedUpdateInput>
  }

  /**
   * DceEntry delete
   */
  export type DceEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
    /**
     * Filter which DceEntry to delete.
     */
    where: DceEntryWhereUniqueInput
  }

  /**
   * DceEntry deleteMany
   */
  export type DceEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DceEntries to delete
     */
    where?: DceEntryWhereInput
    /**
     * Limit how many DceEntries to delete.
     */
    limit?: number
  }

  /**
   * DceEntry without action
   */
  export type DceEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DceEntry
     */
    select?: DceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DceEntry
     */
    omit?: DceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DceEntryInclude<ExtArgs> | null
  }


  /**
   * Model AdvanceEntry
   */

  export type AggregateAdvanceEntry = {
    _count: AdvanceEntryCountAggregateOutputType | null
    _avg: AdvanceEntryAvgAggregateOutputType | null
    _sum: AdvanceEntrySumAggregateOutputType | null
    _min: AdvanceEntryMinAggregateOutputType | null
    _max: AdvanceEntryMaxAggregateOutputType | null
  }

  export type AdvanceEntryAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type AdvanceEntrySumAggregateOutputType = {
    amount: Decimal | null
  }

  export type AdvanceEntryMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    amount: Decimal | null
    remarks: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvanceEntryMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    amount: Decimal | null
    remarks: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvanceEntryCountAggregateOutputType = {
    id: number
    siteId: number
    date: number
    amount: number
    remarks: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdvanceEntryAvgAggregateInputType = {
    amount?: true
  }

  export type AdvanceEntrySumAggregateInputType = {
    amount?: true
  }

  export type AdvanceEntryMinAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    amount?: true
    remarks?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvanceEntryMaxAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    amount?: true
    remarks?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvanceEntryCountAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    amount?: true
    remarks?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdvanceEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdvanceEntry to aggregate.
     */
    where?: AdvanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvanceEntries to fetch.
     */
    orderBy?: AdvanceEntryOrderByWithRelationInput | AdvanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvanceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdvanceEntries
    **/
    _count?: true | AdvanceEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdvanceEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdvanceEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvanceEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvanceEntryMaxAggregateInputType
  }

  export type GetAdvanceEntryAggregateType<T extends AdvanceEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvanceEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvanceEntry[P]>
      : GetScalarType<T[P], AggregateAdvanceEntry[P]>
  }




  export type AdvanceEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvanceEntryWhereInput
    orderBy?: AdvanceEntryOrderByWithAggregationInput | AdvanceEntryOrderByWithAggregationInput[]
    by: AdvanceEntryScalarFieldEnum[] | AdvanceEntryScalarFieldEnum
    having?: AdvanceEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvanceEntryCountAggregateInputType | true
    _avg?: AdvanceEntryAvgAggregateInputType
    _sum?: AdvanceEntrySumAggregateInputType
    _min?: AdvanceEntryMinAggregateInputType
    _max?: AdvanceEntryMaxAggregateInputType
  }

  export type AdvanceEntryGroupByOutputType = {
    id: string
    siteId: string
    date: Date
    amount: Decimal
    remarks: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: AdvanceEntryCountAggregateOutputType | null
    _avg: AdvanceEntryAvgAggregateOutputType | null
    _sum: AdvanceEntrySumAggregateOutputType | null
    _min: AdvanceEntryMinAggregateOutputType | null
    _max: AdvanceEntryMaxAggregateOutputType | null
  }

  type GetAdvanceEntryGroupByPayload<T extends AdvanceEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvanceEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvanceEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvanceEntryGroupByOutputType[P]>
            : GetScalarType<T[P], AdvanceEntryGroupByOutputType[P]>
        }
      >
    >


  export type AdvanceEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    amount?: boolean
    remarks?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advanceEntry"]>

  export type AdvanceEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    amount?: boolean
    remarks?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advanceEntry"]>

  export type AdvanceEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    amount?: boolean
    remarks?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advanceEntry"]>

  export type AdvanceEntrySelectScalar = {
    id?: boolean
    siteId?: boolean
    date?: boolean
    amount?: boolean
    remarks?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdvanceEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "date" | "amount" | "remarks" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["advanceEntry"]>
  export type AdvanceEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdvanceEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdvanceEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdvanceEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdvanceEntry"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      date: Date
      amount: Prisma.Decimal
      remarks: string
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["advanceEntry"]>
    composites: {}
  }

  type AdvanceEntryGetPayload<S extends boolean | null | undefined | AdvanceEntryDefaultArgs> = $Result.GetResult<Prisma.$AdvanceEntryPayload, S>

  type AdvanceEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvanceEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvanceEntryCountAggregateInputType | true
    }

  export interface AdvanceEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdvanceEntry'], meta: { name: 'AdvanceEntry' } }
    /**
     * Find zero or one AdvanceEntry that matches the filter.
     * @param {AdvanceEntryFindUniqueArgs} args - Arguments to find a AdvanceEntry
     * @example
     * // Get one AdvanceEntry
     * const advanceEntry = await prisma.advanceEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvanceEntryFindUniqueArgs>(args: SelectSubset<T, AdvanceEntryFindUniqueArgs<ExtArgs>>): Prisma__AdvanceEntryClient<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdvanceEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvanceEntryFindUniqueOrThrowArgs} args - Arguments to find a AdvanceEntry
     * @example
     * // Get one AdvanceEntry
     * const advanceEntry = await prisma.advanceEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvanceEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvanceEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvanceEntryClient<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdvanceEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvanceEntryFindFirstArgs} args - Arguments to find a AdvanceEntry
     * @example
     * // Get one AdvanceEntry
     * const advanceEntry = await prisma.advanceEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvanceEntryFindFirstArgs>(args?: SelectSubset<T, AdvanceEntryFindFirstArgs<ExtArgs>>): Prisma__AdvanceEntryClient<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdvanceEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvanceEntryFindFirstOrThrowArgs} args - Arguments to find a AdvanceEntry
     * @example
     * // Get one AdvanceEntry
     * const advanceEntry = await prisma.advanceEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvanceEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvanceEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvanceEntryClient<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdvanceEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvanceEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdvanceEntries
     * const advanceEntries = await prisma.advanceEntry.findMany()
     * 
     * // Get first 10 AdvanceEntries
     * const advanceEntries = await prisma.advanceEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advanceEntryWithIdOnly = await prisma.advanceEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvanceEntryFindManyArgs>(args?: SelectSubset<T, AdvanceEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdvanceEntry.
     * @param {AdvanceEntryCreateArgs} args - Arguments to create a AdvanceEntry.
     * @example
     * // Create one AdvanceEntry
     * const AdvanceEntry = await prisma.advanceEntry.create({
     *   data: {
     *     // ... data to create a AdvanceEntry
     *   }
     * })
     * 
     */
    create<T extends AdvanceEntryCreateArgs>(args: SelectSubset<T, AdvanceEntryCreateArgs<ExtArgs>>): Prisma__AdvanceEntryClient<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdvanceEntries.
     * @param {AdvanceEntryCreateManyArgs} args - Arguments to create many AdvanceEntries.
     * @example
     * // Create many AdvanceEntries
     * const advanceEntry = await prisma.advanceEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvanceEntryCreateManyArgs>(args?: SelectSubset<T, AdvanceEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdvanceEntries and returns the data saved in the database.
     * @param {AdvanceEntryCreateManyAndReturnArgs} args - Arguments to create many AdvanceEntries.
     * @example
     * // Create many AdvanceEntries
     * const advanceEntry = await prisma.advanceEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdvanceEntries and only return the `id`
     * const advanceEntryWithIdOnly = await prisma.advanceEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvanceEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvanceEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdvanceEntry.
     * @param {AdvanceEntryDeleteArgs} args - Arguments to delete one AdvanceEntry.
     * @example
     * // Delete one AdvanceEntry
     * const AdvanceEntry = await prisma.advanceEntry.delete({
     *   where: {
     *     // ... filter to delete one AdvanceEntry
     *   }
     * })
     * 
     */
    delete<T extends AdvanceEntryDeleteArgs>(args: SelectSubset<T, AdvanceEntryDeleteArgs<ExtArgs>>): Prisma__AdvanceEntryClient<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdvanceEntry.
     * @param {AdvanceEntryUpdateArgs} args - Arguments to update one AdvanceEntry.
     * @example
     * // Update one AdvanceEntry
     * const advanceEntry = await prisma.advanceEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvanceEntryUpdateArgs>(args: SelectSubset<T, AdvanceEntryUpdateArgs<ExtArgs>>): Prisma__AdvanceEntryClient<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdvanceEntries.
     * @param {AdvanceEntryDeleteManyArgs} args - Arguments to filter AdvanceEntries to delete.
     * @example
     * // Delete a few AdvanceEntries
     * const { count } = await prisma.advanceEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvanceEntryDeleteManyArgs>(args?: SelectSubset<T, AdvanceEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdvanceEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvanceEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdvanceEntries
     * const advanceEntry = await prisma.advanceEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvanceEntryUpdateManyArgs>(args: SelectSubset<T, AdvanceEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdvanceEntries and returns the data updated in the database.
     * @param {AdvanceEntryUpdateManyAndReturnArgs} args - Arguments to update many AdvanceEntries.
     * @example
     * // Update many AdvanceEntries
     * const advanceEntry = await prisma.advanceEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdvanceEntries and only return the `id`
     * const advanceEntryWithIdOnly = await prisma.advanceEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvanceEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvanceEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdvanceEntry.
     * @param {AdvanceEntryUpsertArgs} args - Arguments to update or create a AdvanceEntry.
     * @example
     * // Update or create a AdvanceEntry
     * const advanceEntry = await prisma.advanceEntry.upsert({
     *   create: {
     *     // ... data to create a AdvanceEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdvanceEntry we want to update
     *   }
     * })
     */
    upsert<T extends AdvanceEntryUpsertArgs>(args: SelectSubset<T, AdvanceEntryUpsertArgs<ExtArgs>>): Prisma__AdvanceEntryClient<$Result.GetResult<Prisma.$AdvanceEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdvanceEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvanceEntryCountArgs} args - Arguments to filter AdvanceEntries to count.
     * @example
     * // Count the number of AdvanceEntries
     * const count = await prisma.advanceEntry.count({
     *   where: {
     *     // ... the filter for the AdvanceEntries we want to count
     *   }
     * })
    **/
    count<T extends AdvanceEntryCountArgs>(
      args?: Subset<T, AdvanceEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvanceEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdvanceEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvanceEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdvanceEntryAggregateArgs>(args: Subset<T, AdvanceEntryAggregateArgs>): Prisma.PrismaPromise<GetAdvanceEntryAggregateType<T>>

    /**
     * Group by AdvanceEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvanceEntryGroupByArgs} args - Group by arguments.
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
      T extends AdvanceEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvanceEntryGroupByArgs['orderBy'] }
        : { orderBy?: AdvanceEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdvanceEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvanceEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdvanceEntry model
   */
  readonly fields: AdvanceEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdvanceEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvanceEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AdvanceEntry model
   */
  interface AdvanceEntryFieldRefs {
    readonly id: FieldRef<"AdvanceEntry", 'String'>
    readonly siteId: FieldRef<"AdvanceEntry", 'String'>
    readonly date: FieldRef<"AdvanceEntry", 'DateTime'>
    readonly amount: FieldRef<"AdvanceEntry", 'Decimal'>
    readonly remarks: FieldRef<"AdvanceEntry", 'String'>
    readonly createdById: FieldRef<"AdvanceEntry", 'String'>
    readonly createdAt: FieldRef<"AdvanceEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"AdvanceEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdvanceEntry findUnique
   */
  export type AdvanceEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which AdvanceEntry to fetch.
     */
    where: AdvanceEntryWhereUniqueInput
  }

  /**
   * AdvanceEntry findUniqueOrThrow
   */
  export type AdvanceEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which AdvanceEntry to fetch.
     */
    where: AdvanceEntryWhereUniqueInput
  }

  /**
   * AdvanceEntry findFirst
   */
  export type AdvanceEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which AdvanceEntry to fetch.
     */
    where?: AdvanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvanceEntries to fetch.
     */
    orderBy?: AdvanceEntryOrderByWithRelationInput | AdvanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdvanceEntries.
     */
    cursor?: AdvanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvanceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdvanceEntries.
     */
    distinct?: AdvanceEntryScalarFieldEnum | AdvanceEntryScalarFieldEnum[]
  }

  /**
   * AdvanceEntry findFirstOrThrow
   */
  export type AdvanceEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which AdvanceEntry to fetch.
     */
    where?: AdvanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvanceEntries to fetch.
     */
    orderBy?: AdvanceEntryOrderByWithRelationInput | AdvanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdvanceEntries.
     */
    cursor?: AdvanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvanceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdvanceEntries.
     */
    distinct?: AdvanceEntryScalarFieldEnum | AdvanceEntryScalarFieldEnum[]
  }

  /**
   * AdvanceEntry findMany
   */
  export type AdvanceEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which AdvanceEntries to fetch.
     */
    where?: AdvanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvanceEntries to fetch.
     */
    orderBy?: AdvanceEntryOrderByWithRelationInput | AdvanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdvanceEntries.
     */
    cursor?: AdvanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvanceEntries.
     */
    skip?: number
    distinct?: AdvanceEntryScalarFieldEnum | AdvanceEntryScalarFieldEnum[]
  }

  /**
   * AdvanceEntry create
   */
  export type AdvanceEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a AdvanceEntry.
     */
    data: XOR<AdvanceEntryCreateInput, AdvanceEntryUncheckedCreateInput>
  }

  /**
   * AdvanceEntry createMany
   */
  export type AdvanceEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdvanceEntries.
     */
    data: AdvanceEntryCreateManyInput | AdvanceEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdvanceEntry createManyAndReturn
   */
  export type AdvanceEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * The data used to create many AdvanceEntries.
     */
    data: AdvanceEntryCreateManyInput | AdvanceEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdvanceEntry update
   */
  export type AdvanceEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a AdvanceEntry.
     */
    data: XOR<AdvanceEntryUpdateInput, AdvanceEntryUncheckedUpdateInput>
    /**
     * Choose, which AdvanceEntry to update.
     */
    where: AdvanceEntryWhereUniqueInput
  }

  /**
   * AdvanceEntry updateMany
   */
  export type AdvanceEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdvanceEntries.
     */
    data: XOR<AdvanceEntryUpdateManyMutationInput, AdvanceEntryUncheckedUpdateManyInput>
    /**
     * Filter which AdvanceEntries to update
     */
    where?: AdvanceEntryWhereInput
    /**
     * Limit how many AdvanceEntries to update.
     */
    limit?: number
  }

  /**
   * AdvanceEntry updateManyAndReturn
   */
  export type AdvanceEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * The data used to update AdvanceEntries.
     */
    data: XOR<AdvanceEntryUpdateManyMutationInput, AdvanceEntryUncheckedUpdateManyInput>
    /**
     * Filter which AdvanceEntries to update
     */
    where?: AdvanceEntryWhereInput
    /**
     * Limit how many AdvanceEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdvanceEntry upsert
   */
  export type AdvanceEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the AdvanceEntry to update in case it exists.
     */
    where: AdvanceEntryWhereUniqueInput
    /**
     * In case the AdvanceEntry found by the `where` argument doesn't exist, create a new AdvanceEntry with this data.
     */
    create: XOR<AdvanceEntryCreateInput, AdvanceEntryUncheckedCreateInput>
    /**
     * In case the AdvanceEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvanceEntryUpdateInput, AdvanceEntryUncheckedUpdateInput>
  }

  /**
   * AdvanceEntry delete
   */
  export type AdvanceEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
    /**
     * Filter which AdvanceEntry to delete.
     */
    where: AdvanceEntryWhereUniqueInput
  }

  /**
   * AdvanceEntry deleteMany
   */
  export type AdvanceEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdvanceEntries to delete
     */
    where?: AdvanceEntryWhereInput
    /**
     * Limit how many AdvanceEntries to delete.
     */
    limit?: number
  }

  /**
   * AdvanceEntry without action
   */
  export type AdvanceEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvanceEntry
     */
    select?: AdvanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvanceEntry
     */
    omit?: AdvanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvanceEntryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    issuedAt: 'issuedAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    replacedById: 'replacedById'
  };

  export type RefreshSessionScalarFieldEnum = (typeof RefreshSessionScalarFieldEnum)[keyof typeof RefreshSessionScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const DrillingEntryScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    date: 'date',
    meters: 'meters',
    boreholeNumber: 'boreholeNumber',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DrillingEntryScalarFieldEnum = (typeof DrillingEntryScalarFieldEnum)[keyof typeof DrillingEntryScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ExpenseHeadScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpenseHeadScalarFieldEnum = (typeof ExpenseHeadScalarFieldEnum)[keyof typeof ExpenseHeadScalarFieldEnum]


  export const OpexEntryScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    categoryId: 'categoryId',
    expenseHeadId: 'expenseHeadId',
    amount: 'amount',
    date: 'date',
    remarks: 'remarks',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OpexEntryScalarFieldEnum = (typeof OpexEntryScalarFieldEnum)[keyof typeof OpexEntryScalarFieldEnum]


  export const DceEntryScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    costHead: 'costHead',
    perDayCost: 'perDayCost',
    startDate: 'startDate',
    status: 'status',
    remarks: 'remarks',
    pausedAt: 'pausedAt',
    stoppedAt: 'stoppedAt',
    totalPausedDays: 'totalPausedDays',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DceEntryScalarFieldEnum = (typeof DceEntryScalarFieldEnum)[keyof typeof DceEntryScalarFieldEnum]


  export const AdvanceEntryScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    date: 'date',
    amount: 'amount',
    remarks: 'remarks',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdvanceEntryScalarFieldEnum = (typeof AdvanceEntryScalarFieldEnum)[keyof typeof AdvanceEntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DceStatus'
   */
  export type EnumDceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DceStatus'>
    


  /**
   * Reference to a field of type 'DceStatus[]'
   */
  export type ListEnumDceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DceStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sitesCreated?: SiteListRelationFilter
    drillingCreated?: DrillingEntryListRelationFilter
    opexCreated?: OpexEntryListRelationFilter
    dceCreated?: DceEntryListRelationFilter
    advanceCreated?: AdvanceEntryListRelationFilter
    refreshSessions?: RefreshSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sitesCreated?: SiteOrderByRelationAggregateInput
    drillingCreated?: DrillingEntryOrderByRelationAggregateInput
    opexCreated?: OpexEntryOrderByRelationAggregateInput
    dceCreated?: DceEntryOrderByRelationAggregateInput
    advanceCreated?: AdvanceEntryOrderByRelationAggregateInput
    refreshSessions?: RefreshSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sitesCreated?: SiteListRelationFilter
    drillingCreated?: DrillingEntryListRelationFilter
    opexCreated?: OpexEntryListRelationFilter
    dceCreated?: DceEntryListRelationFilter
    advanceCreated?: AdvanceEntryListRelationFilter
    refreshSessions?: RefreshSessionListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshSessionWhereInput = {
    AND?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    OR?: RefreshSessionWhereInput[]
    NOT?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    id?: UuidFilter<"RefreshSession"> | string
    userId?: UuidFilter<"RefreshSession"> | string
    tokenHash?: StringFilter<"RefreshSession"> | string
    issuedAt?: DateTimeFilter<"RefreshSession"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshSession"> | Date | string | null
    replacedById?: UuidNullableFilter<"RefreshSession"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    replacedById?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    OR?: RefreshSessionWhereInput[]
    NOT?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    userId?: UuidFilter<"RefreshSession"> | string
    tokenHash?: StringFilter<"RefreshSession"> | string
    issuedAt?: DateTimeFilter<"RefreshSession"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshSession"> | Date | string | null
    replacedById?: UuidNullableFilter<"RefreshSession"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RefreshSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    replacedById?: SortOrderInput | SortOrder
    _count?: RefreshSessionCountOrderByAggregateInput
    _max?: RefreshSessionMaxOrderByAggregateInput
    _min?: RefreshSessionMinOrderByAggregateInput
  }

  export type RefreshSessionScalarWhereWithAggregatesInput = {
    AND?: RefreshSessionScalarWhereWithAggregatesInput | RefreshSessionScalarWhereWithAggregatesInput[]
    OR?: RefreshSessionScalarWhereWithAggregatesInput[]
    NOT?: RefreshSessionScalarWhereWithAggregatesInput | RefreshSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RefreshSession"> | string
    userId?: UuidWithAggregatesFilter<"RefreshSession"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshSession"> | string
    issuedAt?: DateTimeWithAggregatesFilter<"RefreshSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshSession"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"RefreshSession"> | Date | string | null
    replacedById?: UuidNullableWithAggregatesFilter<"RefreshSession"> | string | null
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: UuidFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    createdById?: UuidFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    drillingEntries?: DrillingEntryListRelationFilter
    opexEntries?: OpexEntryListRelationFilter
    dceEntries?: DceEntryListRelationFilter
    advanceEntries?: AdvanceEntryListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    drillingEntries?: DrillingEntryOrderByRelationAggregateInput
    opexEntries?: OpexEntryOrderByRelationAggregateInput
    dceEntries?: DceEntryOrderByRelationAggregateInput
    advanceEntries?: AdvanceEntryOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    createdById?: UuidFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    drillingEntries?: DrillingEntryListRelationFilter
    opexEntries?: OpexEntryListRelationFilter
    dceEntries?: DceEntryListRelationFilter
    advanceEntries?: AdvanceEntryListRelationFilter
  }, "id" | "name">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteCountOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Site"> | string
    name?: StringWithAggregatesFilter<"Site"> | string
    createdById?: UuidWithAggregatesFilter<"Site"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
  }

  export type DrillingEntryWhereInput = {
    AND?: DrillingEntryWhereInput | DrillingEntryWhereInput[]
    OR?: DrillingEntryWhereInput[]
    NOT?: DrillingEntryWhereInput | DrillingEntryWhereInput[]
    id?: UuidFilter<"DrillingEntry"> | string
    siteId?: UuidFilter<"DrillingEntry"> | string
    date?: DateTimeFilter<"DrillingEntry"> | Date | string
    meters?: DecimalFilter<"DrillingEntry"> | Decimal | DecimalJsLike | number | string
    boreholeNumber?: StringNullableFilter<"DrillingEntry"> | string | null
    createdById?: UuidFilter<"DrillingEntry"> | string
    createdAt?: DateTimeFilter<"DrillingEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DrillingEntry"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DrillingEntryOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    meters?: SortOrder
    boreholeNumber?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    site?: SiteOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type DrillingEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DrillingEntryWhereInput | DrillingEntryWhereInput[]
    OR?: DrillingEntryWhereInput[]
    NOT?: DrillingEntryWhereInput | DrillingEntryWhereInput[]
    siteId?: UuidFilter<"DrillingEntry"> | string
    date?: DateTimeFilter<"DrillingEntry"> | Date | string
    meters?: DecimalFilter<"DrillingEntry"> | Decimal | DecimalJsLike | number | string
    boreholeNumber?: StringNullableFilter<"DrillingEntry"> | string | null
    createdById?: UuidFilter<"DrillingEntry"> | string
    createdAt?: DateTimeFilter<"DrillingEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DrillingEntry"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DrillingEntryOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    meters?: SortOrder
    boreholeNumber?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DrillingEntryCountOrderByAggregateInput
    _avg?: DrillingEntryAvgOrderByAggregateInput
    _max?: DrillingEntryMaxOrderByAggregateInput
    _min?: DrillingEntryMinOrderByAggregateInput
    _sum?: DrillingEntrySumOrderByAggregateInput
  }

  export type DrillingEntryScalarWhereWithAggregatesInput = {
    AND?: DrillingEntryScalarWhereWithAggregatesInput | DrillingEntryScalarWhereWithAggregatesInput[]
    OR?: DrillingEntryScalarWhereWithAggregatesInput[]
    NOT?: DrillingEntryScalarWhereWithAggregatesInput | DrillingEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DrillingEntry"> | string
    siteId?: UuidWithAggregatesFilter<"DrillingEntry"> | string
    date?: DateTimeWithAggregatesFilter<"DrillingEntry"> | Date | string
    meters?: DecimalWithAggregatesFilter<"DrillingEntry"> | Decimal | DecimalJsLike | number | string
    boreholeNumber?: StringNullableWithAggregatesFilter<"DrillingEntry"> | string | null
    createdById?: UuidWithAggregatesFilter<"DrillingEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DrillingEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DrillingEntry"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    expenseHeads?: ExpenseHeadListRelationFilter
    opexEntries?: OpexEntryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expenseHeads?: ExpenseHeadOrderByRelationAggregateInput
    opexEntries?: OpexEntryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    expenseHeads?: ExpenseHeadListRelationFilter
    opexEntries?: OpexEntryListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ExpenseHeadWhereInput = {
    AND?: ExpenseHeadWhereInput | ExpenseHeadWhereInput[]
    OR?: ExpenseHeadWhereInput[]
    NOT?: ExpenseHeadWhereInput | ExpenseHeadWhereInput[]
    id?: UuidFilter<"ExpenseHead"> | string
    categoryId?: UuidFilter<"ExpenseHead"> | string
    name?: StringFilter<"ExpenseHead"> | string
    createdAt?: DateTimeFilter<"ExpenseHead"> | Date | string
    updatedAt?: DateTimeFilter<"ExpenseHead"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    opexEntries?: OpexEntryListRelationFilter
  }

  export type ExpenseHeadOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    opexEntries?: OpexEntryOrderByRelationAggregateInput
  }

  export type ExpenseHeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    categoryId_name?: ExpenseHeadCategoryIdNameCompoundUniqueInput
    AND?: ExpenseHeadWhereInput | ExpenseHeadWhereInput[]
    OR?: ExpenseHeadWhereInput[]
    NOT?: ExpenseHeadWhereInput | ExpenseHeadWhereInput[]
    categoryId?: UuidFilter<"ExpenseHead"> | string
    name?: StringFilter<"ExpenseHead"> | string
    createdAt?: DateTimeFilter<"ExpenseHead"> | Date | string
    updatedAt?: DateTimeFilter<"ExpenseHead"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    opexEntries?: OpexEntryListRelationFilter
  }, "id" | "categoryId_name">

  export type ExpenseHeadOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExpenseHeadCountOrderByAggregateInput
    _max?: ExpenseHeadMaxOrderByAggregateInput
    _min?: ExpenseHeadMinOrderByAggregateInput
  }

  export type ExpenseHeadScalarWhereWithAggregatesInput = {
    AND?: ExpenseHeadScalarWhereWithAggregatesInput | ExpenseHeadScalarWhereWithAggregatesInput[]
    OR?: ExpenseHeadScalarWhereWithAggregatesInput[]
    NOT?: ExpenseHeadScalarWhereWithAggregatesInput | ExpenseHeadScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ExpenseHead"> | string
    categoryId?: UuidWithAggregatesFilter<"ExpenseHead"> | string
    name?: StringWithAggregatesFilter<"ExpenseHead"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExpenseHead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExpenseHead"> | Date | string
  }

  export type OpexEntryWhereInput = {
    AND?: OpexEntryWhereInput | OpexEntryWhereInput[]
    OR?: OpexEntryWhereInput[]
    NOT?: OpexEntryWhereInput | OpexEntryWhereInput[]
    id?: UuidFilter<"OpexEntry"> | string
    siteId?: UuidFilter<"OpexEntry"> | string
    categoryId?: UuidFilter<"OpexEntry"> | string
    expenseHeadId?: UuidFilter<"OpexEntry"> | string
    amount?: DecimalFilter<"OpexEntry"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"OpexEntry"> | Date | string
    remarks?: StringFilter<"OpexEntry"> | string
    createdById?: UuidFilter<"OpexEntry"> | string
    createdAt?: DateTimeFilter<"OpexEntry"> | Date | string
    updatedAt?: DateTimeFilter<"OpexEntry"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    expenseHead?: XOR<ExpenseHeadScalarRelationFilter, ExpenseHeadWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OpexEntryOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    categoryId?: SortOrder
    expenseHeadId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    remarks?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    site?: SiteOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    expenseHead?: ExpenseHeadOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type OpexEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpexEntryWhereInput | OpexEntryWhereInput[]
    OR?: OpexEntryWhereInput[]
    NOT?: OpexEntryWhereInput | OpexEntryWhereInput[]
    siteId?: UuidFilter<"OpexEntry"> | string
    categoryId?: UuidFilter<"OpexEntry"> | string
    expenseHeadId?: UuidFilter<"OpexEntry"> | string
    amount?: DecimalFilter<"OpexEntry"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"OpexEntry"> | Date | string
    remarks?: StringFilter<"OpexEntry"> | string
    createdById?: UuidFilter<"OpexEntry"> | string
    createdAt?: DateTimeFilter<"OpexEntry"> | Date | string
    updatedAt?: DateTimeFilter<"OpexEntry"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    expenseHead?: XOR<ExpenseHeadScalarRelationFilter, ExpenseHeadWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OpexEntryOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    categoryId?: SortOrder
    expenseHeadId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    remarks?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OpexEntryCountOrderByAggregateInput
    _avg?: OpexEntryAvgOrderByAggregateInput
    _max?: OpexEntryMaxOrderByAggregateInput
    _min?: OpexEntryMinOrderByAggregateInput
    _sum?: OpexEntrySumOrderByAggregateInput
  }

  export type OpexEntryScalarWhereWithAggregatesInput = {
    AND?: OpexEntryScalarWhereWithAggregatesInput | OpexEntryScalarWhereWithAggregatesInput[]
    OR?: OpexEntryScalarWhereWithAggregatesInput[]
    NOT?: OpexEntryScalarWhereWithAggregatesInput | OpexEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OpexEntry"> | string
    siteId?: UuidWithAggregatesFilter<"OpexEntry"> | string
    categoryId?: UuidWithAggregatesFilter<"OpexEntry"> | string
    expenseHeadId?: UuidWithAggregatesFilter<"OpexEntry"> | string
    amount?: DecimalWithAggregatesFilter<"OpexEntry"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"OpexEntry"> | Date | string
    remarks?: StringWithAggregatesFilter<"OpexEntry"> | string
    createdById?: UuidWithAggregatesFilter<"OpexEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OpexEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OpexEntry"> | Date | string
  }

  export type DceEntryWhereInput = {
    AND?: DceEntryWhereInput | DceEntryWhereInput[]
    OR?: DceEntryWhereInput[]
    NOT?: DceEntryWhereInput | DceEntryWhereInput[]
    id?: UuidFilter<"DceEntry"> | string
    siteId?: UuidFilter<"DceEntry"> | string
    costHead?: StringFilter<"DceEntry"> | string
    perDayCost?: DecimalFilter<"DceEntry"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"DceEntry"> | Date | string
    status?: EnumDceStatusFilter<"DceEntry"> | $Enums.DceStatus
    remarks?: StringFilter<"DceEntry"> | string
    pausedAt?: DateTimeNullableFilter<"DceEntry"> | Date | string | null
    stoppedAt?: DateTimeNullableFilter<"DceEntry"> | Date | string | null
    totalPausedDays?: IntFilter<"DceEntry"> | number
    createdById?: UuidFilter<"DceEntry"> | string
    createdAt?: DateTimeFilter<"DceEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DceEntry"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DceEntryOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    costHead?: SortOrder
    perDayCost?: SortOrder
    startDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    pausedAt?: SortOrderInput | SortOrder
    stoppedAt?: SortOrderInput | SortOrder
    totalPausedDays?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    site?: SiteOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type DceEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DceEntryWhereInput | DceEntryWhereInput[]
    OR?: DceEntryWhereInput[]
    NOT?: DceEntryWhereInput | DceEntryWhereInput[]
    siteId?: UuidFilter<"DceEntry"> | string
    costHead?: StringFilter<"DceEntry"> | string
    perDayCost?: DecimalFilter<"DceEntry"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"DceEntry"> | Date | string
    status?: EnumDceStatusFilter<"DceEntry"> | $Enums.DceStatus
    remarks?: StringFilter<"DceEntry"> | string
    pausedAt?: DateTimeNullableFilter<"DceEntry"> | Date | string | null
    stoppedAt?: DateTimeNullableFilter<"DceEntry"> | Date | string | null
    totalPausedDays?: IntFilter<"DceEntry"> | number
    createdById?: UuidFilter<"DceEntry"> | string
    createdAt?: DateTimeFilter<"DceEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DceEntry"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DceEntryOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    costHead?: SortOrder
    perDayCost?: SortOrder
    startDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    pausedAt?: SortOrderInput | SortOrder
    stoppedAt?: SortOrderInput | SortOrder
    totalPausedDays?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DceEntryCountOrderByAggregateInput
    _avg?: DceEntryAvgOrderByAggregateInput
    _max?: DceEntryMaxOrderByAggregateInput
    _min?: DceEntryMinOrderByAggregateInput
    _sum?: DceEntrySumOrderByAggregateInput
  }

  export type DceEntryScalarWhereWithAggregatesInput = {
    AND?: DceEntryScalarWhereWithAggregatesInput | DceEntryScalarWhereWithAggregatesInput[]
    OR?: DceEntryScalarWhereWithAggregatesInput[]
    NOT?: DceEntryScalarWhereWithAggregatesInput | DceEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DceEntry"> | string
    siteId?: UuidWithAggregatesFilter<"DceEntry"> | string
    costHead?: StringWithAggregatesFilter<"DceEntry"> | string
    perDayCost?: DecimalWithAggregatesFilter<"DceEntry"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeWithAggregatesFilter<"DceEntry"> | Date | string
    status?: EnumDceStatusWithAggregatesFilter<"DceEntry"> | $Enums.DceStatus
    remarks?: StringWithAggregatesFilter<"DceEntry"> | string
    pausedAt?: DateTimeNullableWithAggregatesFilter<"DceEntry"> | Date | string | null
    stoppedAt?: DateTimeNullableWithAggregatesFilter<"DceEntry"> | Date | string | null
    totalPausedDays?: IntWithAggregatesFilter<"DceEntry"> | number
    createdById?: UuidWithAggregatesFilter<"DceEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DceEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DceEntry"> | Date | string
  }

  export type AdvanceEntryWhereInput = {
    AND?: AdvanceEntryWhereInput | AdvanceEntryWhereInput[]
    OR?: AdvanceEntryWhereInput[]
    NOT?: AdvanceEntryWhereInput | AdvanceEntryWhereInput[]
    id?: UuidFilter<"AdvanceEntry"> | string
    siteId?: UuidFilter<"AdvanceEntry"> | string
    date?: DateTimeFilter<"AdvanceEntry"> | Date | string
    amount?: DecimalFilter<"AdvanceEntry"> | Decimal | DecimalJsLike | number | string
    remarks?: StringFilter<"AdvanceEntry"> | string
    createdById?: UuidFilter<"AdvanceEntry"> | string
    createdAt?: DateTimeFilter<"AdvanceEntry"> | Date | string
    updatedAt?: DateTimeFilter<"AdvanceEntry"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdvanceEntryOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    remarks?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    site?: SiteOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type AdvanceEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdvanceEntryWhereInput | AdvanceEntryWhereInput[]
    OR?: AdvanceEntryWhereInput[]
    NOT?: AdvanceEntryWhereInput | AdvanceEntryWhereInput[]
    siteId?: UuidFilter<"AdvanceEntry"> | string
    date?: DateTimeFilter<"AdvanceEntry"> | Date | string
    amount?: DecimalFilter<"AdvanceEntry"> | Decimal | DecimalJsLike | number | string
    remarks?: StringFilter<"AdvanceEntry"> | string
    createdById?: UuidFilter<"AdvanceEntry"> | string
    createdAt?: DateTimeFilter<"AdvanceEntry"> | Date | string
    updatedAt?: DateTimeFilter<"AdvanceEntry"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdvanceEntryOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    remarks?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdvanceEntryCountOrderByAggregateInput
    _avg?: AdvanceEntryAvgOrderByAggregateInput
    _max?: AdvanceEntryMaxOrderByAggregateInput
    _min?: AdvanceEntryMinOrderByAggregateInput
    _sum?: AdvanceEntrySumOrderByAggregateInput
  }

  export type AdvanceEntryScalarWhereWithAggregatesInput = {
    AND?: AdvanceEntryScalarWhereWithAggregatesInput | AdvanceEntryScalarWhereWithAggregatesInput[]
    OR?: AdvanceEntryScalarWhereWithAggregatesInput[]
    NOT?: AdvanceEntryScalarWhereWithAggregatesInput | AdvanceEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AdvanceEntry"> | string
    siteId?: UuidWithAggregatesFilter<"AdvanceEntry"> | string
    date?: DateTimeWithAggregatesFilter<"AdvanceEntry"> | Date | string
    amount?: DecimalWithAggregatesFilter<"AdvanceEntry"> | Decimal | DecimalJsLike | number | string
    remarks?: StringWithAggregatesFilter<"AdvanceEntry"> | string
    createdById?: UuidWithAggregatesFilter<"AdvanceEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdvanceEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdvanceEntry"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteCreateNestedManyWithoutCreatedByInput
    drillingCreated?: DrillingEntryCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteUncheckedCreateNestedManyWithoutCreatedByInput
    drillingCreated?: DrillingEntryUncheckedCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryUncheckedCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryUncheckedCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryUncheckedCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUpdateManyWithoutCreatedByNestedInput
    drillingCreated?: DrillingEntryUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUncheckedUpdateManyWithoutCreatedByNestedInput
    drillingCreated?: DrillingEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshSessionCreateInput = {
    id?: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedById?: string | null
    user: UserCreateNestedOneWithoutRefreshSessionsInput
  }

  export type RefreshSessionUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedById?: string | null
  }

  export type RefreshSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedById?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRefreshSessionsNestedInput
  }

  export type RefreshSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshSessionCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedById?: string | null
  }

  export type RefreshSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SiteCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutSitesCreatedInput
    drillingEntries?: DrillingEntryCreateNestedManyWithoutSiteInput
    opexEntries?: OpexEntryCreateNestedManyWithoutSiteInput
    dceEntries?: DceEntryCreateNestedManyWithoutSiteInput
    advanceEntries?: AdvanceEntryCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    name: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    drillingEntries?: DrillingEntryUncheckedCreateNestedManyWithoutSiteInput
    opexEntries?: OpexEntryUncheckedCreateNestedManyWithoutSiteInput
    dceEntries?: DceEntryUncheckedCreateNestedManyWithoutSiteInput
    advanceEntries?: AdvanceEntryUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutSitesCreatedNestedInput
    drillingEntries?: DrillingEntryUpdateManyWithoutSiteNestedInput
    opexEntries?: OpexEntryUpdateManyWithoutSiteNestedInput
    dceEntries?: DceEntryUpdateManyWithoutSiteNestedInput
    advanceEntries?: AdvanceEntryUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillingEntries?: DrillingEntryUncheckedUpdateManyWithoutSiteNestedInput
    opexEntries?: OpexEntryUncheckedUpdateManyWithoutSiteNestedInput
    dceEntries?: DceEntryUncheckedUpdateManyWithoutSiteNestedInput
    advanceEntries?: AdvanceEntryUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: string
    name: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrillingEntryCreateInput = {
    id?: string
    date: Date | string
    meters: Decimal | DecimalJsLike | number | string
    boreholeNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutDrillingEntriesInput
    createdBy: UserCreateNestedOneWithoutDrillingCreatedInput
  }

  export type DrillingEntryUncheckedCreateInput = {
    id?: string
    siteId: string
    date: Date | string
    meters: Decimal | DecimalJsLike | number | string
    boreholeNumber?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrillingEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boreholeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutDrillingEntriesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutDrillingCreatedNestedInput
  }

  export type DrillingEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boreholeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrillingEntryCreateManyInput = {
    id?: string
    siteId: string
    date: Date | string
    meters: Decimal | DecimalJsLike | number | string
    boreholeNumber?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrillingEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boreholeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrillingEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boreholeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expenseHeads?: ExpenseHeadCreateNestedManyWithoutCategoryInput
    opexEntries?: OpexEntryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expenseHeads?: ExpenseHeadUncheckedCreateNestedManyWithoutCategoryInput
    opexEntries?: OpexEntryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenseHeads?: ExpenseHeadUpdateManyWithoutCategoryNestedInput
    opexEntries?: OpexEntryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenseHeads?: ExpenseHeadUncheckedUpdateManyWithoutCategoryNestedInput
    opexEntries?: OpexEntryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseHeadCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutExpenseHeadsInput
    opexEntries?: OpexEntryCreateNestedManyWithoutExpenseHeadInput
  }

  export type ExpenseHeadUncheckedCreateInput = {
    id?: string
    categoryId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    opexEntries?: OpexEntryUncheckedCreateNestedManyWithoutExpenseHeadInput
  }

  export type ExpenseHeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutExpenseHeadsNestedInput
    opexEntries?: OpexEntryUpdateManyWithoutExpenseHeadNestedInput
  }

  export type ExpenseHeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opexEntries?: OpexEntryUncheckedUpdateManyWithoutExpenseHeadNestedInput
  }

  export type ExpenseHeadCreateManyInput = {
    id?: string
    categoryId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseHeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseHeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpexEntryCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutOpexEntriesInput
    category: CategoryCreateNestedOneWithoutOpexEntriesInput
    expenseHead: ExpenseHeadCreateNestedOneWithoutOpexEntriesInput
    createdBy: UserCreateNestedOneWithoutOpexCreatedInput
  }

  export type OpexEntryUncheckedCreateInput = {
    id?: string
    siteId: string
    categoryId: string
    expenseHeadId: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpexEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutOpexEntriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutOpexEntriesNestedInput
    expenseHead?: ExpenseHeadUpdateOneRequiredWithoutOpexEntriesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutOpexCreatedNestedInput
  }

  export type OpexEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    expenseHeadId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpexEntryCreateManyInput = {
    id?: string
    siteId: string
    categoryId: string
    expenseHeadId: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpexEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpexEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    expenseHeadId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DceEntryCreateInput = {
    id?: string
    costHead: string
    perDayCost: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    status?: $Enums.DceStatus
    remarks?: string
    pausedAt?: Date | string | null
    stoppedAt?: Date | string | null
    totalPausedDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutDceEntriesInput
    createdBy: UserCreateNestedOneWithoutDceCreatedInput
  }

  export type DceEntryUncheckedCreateInput = {
    id?: string
    siteId: string
    costHead: string
    perDayCost: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    status?: $Enums.DceStatus
    remarks?: string
    pausedAt?: Date | string | null
    stoppedAt?: Date | string | null
    totalPausedDays?: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DceEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    costHead?: StringFieldUpdateOperationsInput | string
    perDayCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDceStatusFieldUpdateOperationsInput | $Enums.DceStatus
    remarks?: StringFieldUpdateOperationsInput | string
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stoppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPausedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutDceEntriesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutDceCreatedNestedInput
  }

  export type DceEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    costHead?: StringFieldUpdateOperationsInput | string
    perDayCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDceStatusFieldUpdateOperationsInput | $Enums.DceStatus
    remarks?: StringFieldUpdateOperationsInput | string
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stoppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPausedDays?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DceEntryCreateManyInput = {
    id?: string
    siteId: string
    costHead: string
    perDayCost: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    status?: $Enums.DceStatus
    remarks?: string
    pausedAt?: Date | string | null
    stoppedAt?: Date | string | null
    totalPausedDays?: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DceEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    costHead?: StringFieldUpdateOperationsInput | string
    perDayCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDceStatusFieldUpdateOperationsInput | $Enums.DceStatus
    remarks?: StringFieldUpdateOperationsInput | string
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stoppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPausedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DceEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    costHead?: StringFieldUpdateOperationsInput | string
    perDayCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDceStatusFieldUpdateOperationsInput | $Enums.DceStatus
    remarks?: StringFieldUpdateOperationsInput | string
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stoppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPausedDays?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvanceEntryCreateInput = {
    id?: string
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutAdvanceEntriesInput
    createdBy: UserCreateNestedOneWithoutAdvanceCreatedInput
  }

  export type AdvanceEntryUncheckedCreateInput = {
    id?: string
    siteId: string
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvanceEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutAdvanceEntriesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutAdvanceCreatedNestedInput
  }

  export type AdvanceEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvanceEntryCreateManyInput = {
    id?: string
    siteId: string
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvanceEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvanceEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SiteListRelationFilter = {
    every?: SiteWhereInput
    some?: SiteWhereInput
    none?: SiteWhereInput
  }

  export type DrillingEntryListRelationFilter = {
    every?: DrillingEntryWhereInput
    some?: DrillingEntryWhereInput
    none?: DrillingEntryWhereInput
  }

  export type OpexEntryListRelationFilter = {
    every?: OpexEntryWhereInput
    some?: OpexEntryWhereInput
    none?: OpexEntryWhereInput
  }

  export type DceEntryListRelationFilter = {
    every?: DceEntryWhereInput
    some?: DceEntryWhereInput
    none?: DceEntryWhereInput
  }

  export type AdvanceEntryListRelationFilter = {
    every?: AdvanceEntryWhereInput
    some?: AdvanceEntryWhereInput
    none?: AdvanceEntryWhereInput
  }

  export type RefreshSessionListRelationFilter = {
    every?: RefreshSessionWhereInput
    some?: RefreshSessionWhereInput
    none?: RefreshSessionWhereInput
  }

  export type SiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrillingEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpexEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DceEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdvanceEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefreshSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    replacedById?: SortOrder
  }

  export type RefreshSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    replacedById?: SortOrder
  }

  export type RefreshSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    replacedById?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type DrillingEntryCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    meters?: SortOrder
    boreholeNumber?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrillingEntryAvgOrderByAggregateInput = {
    meters?: SortOrder
  }

  export type DrillingEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    meters?: SortOrder
    boreholeNumber?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrillingEntryMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    meters?: SortOrder
    boreholeNumber?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrillingEntrySumOrderByAggregateInput = {
    meters?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ExpenseHeadListRelationFilter = {
    every?: ExpenseHeadWhereInput
    some?: ExpenseHeadWhereInput
    none?: ExpenseHeadWhereInput
  }

  export type ExpenseHeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ExpenseHeadCategoryIdNameCompoundUniqueInput = {
    categoryId: string
    name: string
  }

  export type ExpenseHeadCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseHeadMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseHeadMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseHeadScalarRelationFilter = {
    is?: ExpenseHeadWhereInput
    isNot?: ExpenseHeadWhereInput
  }

  export type OpexEntryCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    categoryId?: SortOrder
    expenseHeadId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    remarks?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpexEntryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OpexEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    categoryId?: SortOrder
    expenseHeadId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    remarks?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpexEntryMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    categoryId?: SortOrder
    expenseHeadId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    remarks?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpexEntrySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumDceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DceStatus | EnumDceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DceStatus[] | ListEnumDceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DceStatus[] | ListEnumDceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDceStatusFilter<$PrismaModel> | $Enums.DceStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DceEntryCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    costHead?: SortOrder
    perDayCost?: SortOrder
    startDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    pausedAt?: SortOrder
    stoppedAt?: SortOrder
    totalPausedDays?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DceEntryAvgOrderByAggregateInput = {
    perDayCost?: SortOrder
    totalPausedDays?: SortOrder
  }

  export type DceEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    costHead?: SortOrder
    perDayCost?: SortOrder
    startDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    pausedAt?: SortOrder
    stoppedAt?: SortOrder
    totalPausedDays?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DceEntryMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    costHead?: SortOrder
    perDayCost?: SortOrder
    startDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    pausedAt?: SortOrder
    stoppedAt?: SortOrder
    totalPausedDays?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DceEntrySumOrderByAggregateInput = {
    perDayCost?: SortOrder
    totalPausedDays?: SortOrder
  }

  export type EnumDceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DceStatus | EnumDceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DceStatus[] | ListEnumDceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DceStatus[] | ListEnumDceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDceStatusFilter<$PrismaModel>
    _max?: NestedEnumDceStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type AdvanceEntryCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    remarks?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvanceEntryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AdvanceEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    remarks?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvanceEntryMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    remarks?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvanceEntrySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SiteCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SiteCreateWithoutCreatedByInput, SiteUncheckedCreateWithoutCreatedByInput> | SiteCreateWithoutCreatedByInput[] | SiteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutCreatedByInput | SiteCreateOrConnectWithoutCreatedByInput[]
    createMany?: SiteCreateManyCreatedByInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type DrillingEntryCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DrillingEntryCreateWithoutCreatedByInput, DrillingEntryUncheckedCreateWithoutCreatedByInput> | DrillingEntryCreateWithoutCreatedByInput[] | DrillingEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DrillingEntryCreateOrConnectWithoutCreatedByInput | DrillingEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: DrillingEntryCreateManyCreatedByInputEnvelope
    connect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
  }

  export type OpexEntryCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<OpexEntryCreateWithoutCreatedByInput, OpexEntryUncheckedCreateWithoutCreatedByInput> | OpexEntryCreateWithoutCreatedByInput[] | OpexEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutCreatedByInput | OpexEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: OpexEntryCreateManyCreatedByInputEnvelope
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
  }

  export type DceEntryCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DceEntryCreateWithoutCreatedByInput, DceEntryUncheckedCreateWithoutCreatedByInput> | DceEntryCreateWithoutCreatedByInput[] | DceEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DceEntryCreateOrConnectWithoutCreatedByInput | DceEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: DceEntryCreateManyCreatedByInputEnvelope
    connect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
  }

  export type AdvanceEntryCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AdvanceEntryCreateWithoutCreatedByInput, AdvanceEntryUncheckedCreateWithoutCreatedByInput> | AdvanceEntryCreateWithoutCreatedByInput[] | AdvanceEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AdvanceEntryCreateOrConnectWithoutCreatedByInput | AdvanceEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: AdvanceEntryCreateManyCreatedByInputEnvelope
    connect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
  }

  export type RefreshSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
  }

  export type SiteUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SiteCreateWithoutCreatedByInput, SiteUncheckedCreateWithoutCreatedByInput> | SiteCreateWithoutCreatedByInput[] | SiteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutCreatedByInput | SiteCreateOrConnectWithoutCreatedByInput[]
    createMany?: SiteCreateManyCreatedByInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type DrillingEntryUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DrillingEntryCreateWithoutCreatedByInput, DrillingEntryUncheckedCreateWithoutCreatedByInput> | DrillingEntryCreateWithoutCreatedByInput[] | DrillingEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DrillingEntryCreateOrConnectWithoutCreatedByInput | DrillingEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: DrillingEntryCreateManyCreatedByInputEnvelope
    connect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
  }

  export type OpexEntryUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<OpexEntryCreateWithoutCreatedByInput, OpexEntryUncheckedCreateWithoutCreatedByInput> | OpexEntryCreateWithoutCreatedByInput[] | OpexEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutCreatedByInput | OpexEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: OpexEntryCreateManyCreatedByInputEnvelope
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
  }

  export type DceEntryUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DceEntryCreateWithoutCreatedByInput, DceEntryUncheckedCreateWithoutCreatedByInput> | DceEntryCreateWithoutCreatedByInput[] | DceEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DceEntryCreateOrConnectWithoutCreatedByInput | DceEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: DceEntryCreateManyCreatedByInputEnvelope
    connect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
  }

  export type AdvanceEntryUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AdvanceEntryCreateWithoutCreatedByInput, AdvanceEntryUncheckedCreateWithoutCreatedByInput> | AdvanceEntryCreateWithoutCreatedByInput[] | AdvanceEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AdvanceEntryCreateOrConnectWithoutCreatedByInput | AdvanceEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: AdvanceEntryCreateManyCreatedByInputEnvelope
    connect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
  }

  export type RefreshSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SiteUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SiteCreateWithoutCreatedByInput, SiteUncheckedCreateWithoutCreatedByInput> | SiteCreateWithoutCreatedByInput[] | SiteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutCreatedByInput | SiteCreateOrConnectWithoutCreatedByInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutCreatedByInput | SiteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SiteCreateManyCreatedByInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutCreatedByInput | SiteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutCreatedByInput | SiteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type DrillingEntryUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DrillingEntryCreateWithoutCreatedByInput, DrillingEntryUncheckedCreateWithoutCreatedByInput> | DrillingEntryCreateWithoutCreatedByInput[] | DrillingEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DrillingEntryCreateOrConnectWithoutCreatedByInput | DrillingEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: DrillingEntryUpsertWithWhereUniqueWithoutCreatedByInput | DrillingEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DrillingEntryCreateManyCreatedByInputEnvelope
    set?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    disconnect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    delete?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    connect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    update?: DrillingEntryUpdateWithWhereUniqueWithoutCreatedByInput | DrillingEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DrillingEntryUpdateManyWithWhereWithoutCreatedByInput | DrillingEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DrillingEntryScalarWhereInput | DrillingEntryScalarWhereInput[]
  }

  export type OpexEntryUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<OpexEntryCreateWithoutCreatedByInput, OpexEntryUncheckedCreateWithoutCreatedByInput> | OpexEntryCreateWithoutCreatedByInput[] | OpexEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutCreatedByInput | OpexEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: OpexEntryUpsertWithWhereUniqueWithoutCreatedByInput | OpexEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: OpexEntryCreateManyCreatedByInputEnvelope
    set?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    disconnect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    delete?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    update?: OpexEntryUpdateWithWhereUniqueWithoutCreatedByInput | OpexEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: OpexEntryUpdateManyWithWhereWithoutCreatedByInput | OpexEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: OpexEntryScalarWhereInput | OpexEntryScalarWhereInput[]
  }

  export type DceEntryUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DceEntryCreateWithoutCreatedByInput, DceEntryUncheckedCreateWithoutCreatedByInput> | DceEntryCreateWithoutCreatedByInput[] | DceEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DceEntryCreateOrConnectWithoutCreatedByInput | DceEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: DceEntryUpsertWithWhereUniqueWithoutCreatedByInput | DceEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DceEntryCreateManyCreatedByInputEnvelope
    set?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    disconnect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    delete?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    connect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    update?: DceEntryUpdateWithWhereUniqueWithoutCreatedByInput | DceEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DceEntryUpdateManyWithWhereWithoutCreatedByInput | DceEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DceEntryScalarWhereInput | DceEntryScalarWhereInput[]
  }

  export type AdvanceEntryUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AdvanceEntryCreateWithoutCreatedByInput, AdvanceEntryUncheckedCreateWithoutCreatedByInput> | AdvanceEntryCreateWithoutCreatedByInput[] | AdvanceEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AdvanceEntryCreateOrConnectWithoutCreatedByInput | AdvanceEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: AdvanceEntryUpsertWithWhereUniqueWithoutCreatedByInput | AdvanceEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AdvanceEntryCreateManyCreatedByInputEnvelope
    set?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    disconnect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    delete?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    connect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    update?: AdvanceEntryUpdateWithWhereUniqueWithoutCreatedByInput | AdvanceEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AdvanceEntryUpdateManyWithWhereWithoutCreatedByInput | AdvanceEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AdvanceEntryScalarWhereInput | AdvanceEntryScalarWhereInput[]
  }

  export type RefreshSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    upsert?: RefreshSessionUpsertWithWhereUniqueWithoutUserInput | RefreshSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    set?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    disconnect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    delete?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    update?: RefreshSessionUpdateWithWhereUniqueWithoutUserInput | RefreshSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshSessionUpdateManyWithWhereWithoutUserInput | RefreshSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
  }

  export type SiteUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SiteCreateWithoutCreatedByInput, SiteUncheckedCreateWithoutCreatedByInput> | SiteCreateWithoutCreatedByInput[] | SiteUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutCreatedByInput | SiteCreateOrConnectWithoutCreatedByInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutCreatedByInput | SiteUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SiteCreateManyCreatedByInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutCreatedByInput | SiteUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutCreatedByInput | SiteUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type DrillingEntryUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DrillingEntryCreateWithoutCreatedByInput, DrillingEntryUncheckedCreateWithoutCreatedByInput> | DrillingEntryCreateWithoutCreatedByInput[] | DrillingEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DrillingEntryCreateOrConnectWithoutCreatedByInput | DrillingEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: DrillingEntryUpsertWithWhereUniqueWithoutCreatedByInput | DrillingEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DrillingEntryCreateManyCreatedByInputEnvelope
    set?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    disconnect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    delete?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    connect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    update?: DrillingEntryUpdateWithWhereUniqueWithoutCreatedByInput | DrillingEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DrillingEntryUpdateManyWithWhereWithoutCreatedByInput | DrillingEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DrillingEntryScalarWhereInput | DrillingEntryScalarWhereInput[]
  }

  export type OpexEntryUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<OpexEntryCreateWithoutCreatedByInput, OpexEntryUncheckedCreateWithoutCreatedByInput> | OpexEntryCreateWithoutCreatedByInput[] | OpexEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutCreatedByInput | OpexEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: OpexEntryUpsertWithWhereUniqueWithoutCreatedByInput | OpexEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: OpexEntryCreateManyCreatedByInputEnvelope
    set?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    disconnect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    delete?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    update?: OpexEntryUpdateWithWhereUniqueWithoutCreatedByInput | OpexEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: OpexEntryUpdateManyWithWhereWithoutCreatedByInput | OpexEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: OpexEntryScalarWhereInput | OpexEntryScalarWhereInput[]
  }

  export type DceEntryUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DceEntryCreateWithoutCreatedByInput, DceEntryUncheckedCreateWithoutCreatedByInput> | DceEntryCreateWithoutCreatedByInput[] | DceEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DceEntryCreateOrConnectWithoutCreatedByInput | DceEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: DceEntryUpsertWithWhereUniqueWithoutCreatedByInput | DceEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DceEntryCreateManyCreatedByInputEnvelope
    set?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    disconnect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    delete?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    connect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    update?: DceEntryUpdateWithWhereUniqueWithoutCreatedByInput | DceEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DceEntryUpdateManyWithWhereWithoutCreatedByInput | DceEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DceEntryScalarWhereInput | DceEntryScalarWhereInput[]
  }

  export type AdvanceEntryUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AdvanceEntryCreateWithoutCreatedByInput, AdvanceEntryUncheckedCreateWithoutCreatedByInput> | AdvanceEntryCreateWithoutCreatedByInput[] | AdvanceEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AdvanceEntryCreateOrConnectWithoutCreatedByInput | AdvanceEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: AdvanceEntryUpsertWithWhereUniqueWithoutCreatedByInput | AdvanceEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AdvanceEntryCreateManyCreatedByInputEnvelope
    set?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    disconnect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    delete?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    connect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    update?: AdvanceEntryUpdateWithWhereUniqueWithoutCreatedByInput | AdvanceEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AdvanceEntryUpdateManyWithWhereWithoutCreatedByInput | AdvanceEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AdvanceEntryScalarWhereInput | AdvanceEntryScalarWhereInput[]
  }

  export type RefreshSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    upsert?: RefreshSessionUpsertWithWhereUniqueWithoutUserInput | RefreshSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    set?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    disconnect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    delete?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    update?: RefreshSessionUpdateWithWhereUniqueWithoutUserInput | RefreshSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshSessionUpdateManyWithWhereWithoutUserInput | RefreshSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshSessionsInput = {
    create?: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutRefreshSessionsNestedInput = {
    create?: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshSessionsInput
    upsert?: UserUpsertWithoutRefreshSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshSessionsInput, UserUpdateWithoutRefreshSessionsInput>, UserUncheckedUpdateWithoutRefreshSessionsInput>
  }

  export type UserCreateNestedOneWithoutSitesCreatedInput = {
    create?: XOR<UserCreateWithoutSitesCreatedInput, UserUncheckedCreateWithoutSitesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSitesCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type DrillingEntryCreateNestedManyWithoutSiteInput = {
    create?: XOR<DrillingEntryCreateWithoutSiteInput, DrillingEntryUncheckedCreateWithoutSiteInput> | DrillingEntryCreateWithoutSiteInput[] | DrillingEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DrillingEntryCreateOrConnectWithoutSiteInput | DrillingEntryCreateOrConnectWithoutSiteInput[]
    createMany?: DrillingEntryCreateManySiteInputEnvelope
    connect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
  }

  export type OpexEntryCreateNestedManyWithoutSiteInput = {
    create?: XOR<OpexEntryCreateWithoutSiteInput, OpexEntryUncheckedCreateWithoutSiteInput> | OpexEntryCreateWithoutSiteInput[] | OpexEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutSiteInput | OpexEntryCreateOrConnectWithoutSiteInput[]
    createMany?: OpexEntryCreateManySiteInputEnvelope
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
  }

  export type DceEntryCreateNestedManyWithoutSiteInput = {
    create?: XOR<DceEntryCreateWithoutSiteInput, DceEntryUncheckedCreateWithoutSiteInput> | DceEntryCreateWithoutSiteInput[] | DceEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DceEntryCreateOrConnectWithoutSiteInput | DceEntryCreateOrConnectWithoutSiteInput[]
    createMany?: DceEntryCreateManySiteInputEnvelope
    connect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
  }

  export type AdvanceEntryCreateNestedManyWithoutSiteInput = {
    create?: XOR<AdvanceEntryCreateWithoutSiteInput, AdvanceEntryUncheckedCreateWithoutSiteInput> | AdvanceEntryCreateWithoutSiteInput[] | AdvanceEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: AdvanceEntryCreateOrConnectWithoutSiteInput | AdvanceEntryCreateOrConnectWithoutSiteInput[]
    createMany?: AdvanceEntryCreateManySiteInputEnvelope
    connect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
  }

  export type DrillingEntryUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<DrillingEntryCreateWithoutSiteInput, DrillingEntryUncheckedCreateWithoutSiteInput> | DrillingEntryCreateWithoutSiteInput[] | DrillingEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DrillingEntryCreateOrConnectWithoutSiteInput | DrillingEntryCreateOrConnectWithoutSiteInput[]
    createMany?: DrillingEntryCreateManySiteInputEnvelope
    connect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
  }

  export type OpexEntryUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<OpexEntryCreateWithoutSiteInput, OpexEntryUncheckedCreateWithoutSiteInput> | OpexEntryCreateWithoutSiteInput[] | OpexEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutSiteInput | OpexEntryCreateOrConnectWithoutSiteInput[]
    createMany?: OpexEntryCreateManySiteInputEnvelope
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
  }

  export type DceEntryUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<DceEntryCreateWithoutSiteInput, DceEntryUncheckedCreateWithoutSiteInput> | DceEntryCreateWithoutSiteInput[] | DceEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DceEntryCreateOrConnectWithoutSiteInput | DceEntryCreateOrConnectWithoutSiteInput[]
    createMany?: DceEntryCreateManySiteInputEnvelope
    connect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
  }

  export type AdvanceEntryUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<AdvanceEntryCreateWithoutSiteInput, AdvanceEntryUncheckedCreateWithoutSiteInput> | AdvanceEntryCreateWithoutSiteInput[] | AdvanceEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: AdvanceEntryCreateOrConnectWithoutSiteInput | AdvanceEntryCreateOrConnectWithoutSiteInput[]
    createMany?: AdvanceEntryCreateManySiteInputEnvelope
    connect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSitesCreatedNestedInput = {
    create?: XOR<UserCreateWithoutSitesCreatedInput, UserUncheckedCreateWithoutSitesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSitesCreatedInput
    upsert?: UserUpsertWithoutSitesCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSitesCreatedInput, UserUpdateWithoutSitesCreatedInput>, UserUncheckedUpdateWithoutSitesCreatedInput>
  }

  export type DrillingEntryUpdateManyWithoutSiteNestedInput = {
    create?: XOR<DrillingEntryCreateWithoutSiteInput, DrillingEntryUncheckedCreateWithoutSiteInput> | DrillingEntryCreateWithoutSiteInput[] | DrillingEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DrillingEntryCreateOrConnectWithoutSiteInput | DrillingEntryCreateOrConnectWithoutSiteInput[]
    upsert?: DrillingEntryUpsertWithWhereUniqueWithoutSiteInput | DrillingEntryUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: DrillingEntryCreateManySiteInputEnvelope
    set?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    disconnect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    delete?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    connect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    update?: DrillingEntryUpdateWithWhereUniqueWithoutSiteInput | DrillingEntryUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: DrillingEntryUpdateManyWithWhereWithoutSiteInput | DrillingEntryUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: DrillingEntryScalarWhereInput | DrillingEntryScalarWhereInput[]
  }

  export type OpexEntryUpdateManyWithoutSiteNestedInput = {
    create?: XOR<OpexEntryCreateWithoutSiteInput, OpexEntryUncheckedCreateWithoutSiteInput> | OpexEntryCreateWithoutSiteInput[] | OpexEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutSiteInput | OpexEntryCreateOrConnectWithoutSiteInput[]
    upsert?: OpexEntryUpsertWithWhereUniqueWithoutSiteInput | OpexEntryUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: OpexEntryCreateManySiteInputEnvelope
    set?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    disconnect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    delete?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    update?: OpexEntryUpdateWithWhereUniqueWithoutSiteInput | OpexEntryUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: OpexEntryUpdateManyWithWhereWithoutSiteInput | OpexEntryUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: OpexEntryScalarWhereInput | OpexEntryScalarWhereInput[]
  }

  export type DceEntryUpdateManyWithoutSiteNestedInput = {
    create?: XOR<DceEntryCreateWithoutSiteInput, DceEntryUncheckedCreateWithoutSiteInput> | DceEntryCreateWithoutSiteInput[] | DceEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DceEntryCreateOrConnectWithoutSiteInput | DceEntryCreateOrConnectWithoutSiteInput[]
    upsert?: DceEntryUpsertWithWhereUniqueWithoutSiteInput | DceEntryUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: DceEntryCreateManySiteInputEnvelope
    set?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    disconnect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    delete?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    connect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    update?: DceEntryUpdateWithWhereUniqueWithoutSiteInput | DceEntryUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: DceEntryUpdateManyWithWhereWithoutSiteInput | DceEntryUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: DceEntryScalarWhereInput | DceEntryScalarWhereInput[]
  }

  export type AdvanceEntryUpdateManyWithoutSiteNestedInput = {
    create?: XOR<AdvanceEntryCreateWithoutSiteInput, AdvanceEntryUncheckedCreateWithoutSiteInput> | AdvanceEntryCreateWithoutSiteInput[] | AdvanceEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: AdvanceEntryCreateOrConnectWithoutSiteInput | AdvanceEntryCreateOrConnectWithoutSiteInput[]
    upsert?: AdvanceEntryUpsertWithWhereUniqueWithoutSiteInput | AdvanceEntryUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: AdvanceEntryCreateManySiteInputEnvelope
    set?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    disconnect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    delete?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    connect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    update?: AdvanceEntryUpdateWithWhereUniqueWithoutSiteInput | AdvanceEntryUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: AdvanceEntryUpdateManyWithWhereWithoutSiteInput | AdvanceEntryUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: AdvanceEntryScalarWhereInput | AdvanceEntryScalarWhereInput[]
  }

  export type DrillingEntryUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<DrillingEntryCreateWithoutSiteInput, DrillingEntryUncheckedCreateWithoutSiteInput> | DrillingEntryCreateWithoutSiteInput[] | DrillingEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DrillingEntryCreateOrConnectWithoutSiteInput | DrillingEntryCreateOrConnectWithoutSiteInput[]
    upsert?: DrillingEntryUpsertWithWhereUniqueWithoutSiteInput | DrillingEntryUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: DrillingEntryCreateManySiteInputEnvelope
    set?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    disconnect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    delete?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    connect?: DrillingEntryWhereUniqueInput | DrillingEntryWhereUniqueInput[]
    update?: DrillingEntryUpdateWithWhereUniqueWithoutSiteInput | DrillingEntryUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: DrillingEntryUpdateManyWithWhereWithoutSiteInput | DrillingEntryUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: DrillingEntryScalarWhereInput | DrillingEntryScalarWhereInput[]
  }

  export type OpexEntryUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<OpexEntryCreateWithoutSiteInput, OpexEntryUncheckedCreateWithoutSiteInput> | OpexEntryCreateWithoutSiteInput[] | OpexEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutSiteInput | OpexEntryCreateOrConnectWithoutSiteInput[]
    upsert?: OpexEntryUpsertWithWhereUniqueWithoutSiteInput | OpexEntryUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: OpexEntryCreateManySiteInputEnvelope
    set?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    disconnect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    delete?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    update?: OpexEntryUpdateWithWhereUniqueWithoutSiteInput | OpexEntryUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: OpexEntryUpdateManyWithWhereWithoutSiteInput | OpexEntryUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: OpexEntryScalarWhereInput | OpexEntryScalarWhereInput[]
  }

  export type DceEntryUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<DceEntryCreateWithoutSiteInput, DceEntryUncheckedCreateWithoutSiteInput> | DceEntryCreateWithoutSiteInput[] | DceEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DceEntryCreateOrConnectWithoutSiteInput | DceEntryCreateOrConnectWithoutSiteInput[]
    upsert?: DceEntryUpsertWithWhereUniqueWithoutSiteInput | DceEntryUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: DceEntryCreateManySiteInputEnvelope
    set?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    disconnect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    delete?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    connect?: DceEntryWhereUniqueInput | DceEntryWhereUniqueInput[]
    update?: DceEntryUpdateWithWhereUniqueWithoutSiteInput | DceEntryUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: DceEntryUpdateManyWithWhereWithoutSiteInput | DceEntryUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: DceEntryScalarWhereInput | DceEntryScalarWhereInput[]
  }

  export type AdvanceEntryUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<AdvanceEntryCreateWithoutSiteInput, AdvanceEntryUncheckedCreateWithoutSiteInput> | AdvanceEntryCreateWithoutSiteInput[] | AdvanceEntryUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: AdvanceEntryCreateOrConnectWithoutSiteInput | AdvanceEntryCreateOrConnectWithoutSiteInput[]
    upsert?: AdvanceEntryUpsertWithWhereUniqueWithoutSiteInput | AdvanceEntryUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: AdvanceEntryCreateManySiteInputEnvelope
    set?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    disconnect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    delete?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    connect?: AdvanceEntryWhereUniqueInput | AdvanceEntryWhereUniqueInput[]
    update?: AdvanceEntryUpdateWithWhereUniqueWithoutSiteInput | AdvanceEntryUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: AdvanceEntryUpdateManyWithWhereWithoutSiteInput | AdvanceEntryUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: AdvanceEntryScalarWhereInput | AdvanceEntryScalarWhereInput[]
  }

  export type SiteCreateNestedOneWithoutDrillingEntriesInput = {
    create?: XOR<SiteCreateWithoutDrillingEntriesInput, SiteUncheckedCreateWithoutDrillingEntriesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutDrillingEntriesInput
    connect?: SiteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDrillingCreatedInput = {
    create?: XOR<UserCreateWithoutDrillingCreatedInput, UserUncheckedCreateWithoutDrillingCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrillingCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SiteUpdateOneRequiredWithoutDrillingEntriesNestedInput = {
    create?: XOR<SiteCreateWithoutDrillingEntriesInput, SiteUncheckedCreateWithoutDrillingEntriesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutDrillingEntriesInput
    upsert?: SiteUpsertWithoutDrillingEntriesInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutDrillingEntriesInput, SiteUpdateWithoutDrillingEntriesInput>, SiteUncheckedUpdateWithoutDrillingEntriesInput>
  }

  export type UserUpdateOneRequiredWithoutDrillingCreatedNestedInput = {
    create?: XOR<UserCreateWithoutDrillingCreatedInput, UserUncheckedCreateWithoutDrillingCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrillingCreatedInput
    upsert?: UserUpsertWithoutDrillingCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDrillingCreatedInput, UserUpdateWithoutDrillingCreatedInput>, UserUncheckedUpdateWithoutDrillingCreatedInput>
  }

  export type ExpenseHeadCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ExpenseHeadCreateWithoutCategoryInput, ExpenseHeadUncheckedCreateWithoutCategoryInput> | ExpenseHeadCreateWithoutCategoryInput[] | ExpenseHeadUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseHeadCreateOrConnectWithoutCategoryInput | ExpenseHeadCreateOrConnectWithoutCategoryInput[]
    createMany?: ExpenseHeadCreateManyCategoryInputEnvelope
    connect?: ExpenseHeadWhereUniqueInput | ExpenseHeadWhereUniqueInput[]
  }

  export type OpexEntryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<OpexEntryCreateWithoutCategoryInput, OpexEntryUncheckedCreateWithoutCategoryInput> | OpexEntryCreateWithoutCategoryInput[] | OpexEntryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutCategoryInput | OpexEntryCreateOrConnectWithoutCategoryInput[]
    createMany?: OpexEntryCreateManyCategoryInputEnvelope
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
  }

  export type ExpenseHeadUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ExpenseHeadCreateWithoutCategoryInput, ExpenseHeadUncheckedCreateWithoutCategoryInput> | ExpenseHeadCreateWithoutCategoryInput[] | ExpenseHeadUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseHeadCreateOrConnectWithoutCategoryInput | ExpenseHeadCreateOrConnectWithoutCategoryInput[]
    createMany?: ExpenseHeadCreateManyCategoryInputEnvelope
    connect?: ExpenseHeadWhereUniqueInput | ExpenseHeadWhereUniqueInput[]
  }

  export type OpexEntryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<OpexEntryCreateWithoutCategoryInput, OpexEntryUncheckedCreateWithoutCategoryInput> | OpexEntryCreateWithoutCategoryInput[] | OpexEntryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutCategoryInput | OpexEntryCreateOrConnectWithoutCategoryInput[]
    createMany?: OpexEntryCreateManyCategoryInputEnvelope
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
  }

  export type ExpenseHeadUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ExpenseHeadCreateWithoutCategoryInput, ExpenseHeadUncheckedCreateWithoutCategoryInput> | ExpenseHeadCreateWithoutCategoryInput[] | ExpenseHeadUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseHeadCreateOrConnectWithoutCategoryInput | ExpenseHeadCreateOrConnectWithoutCategoryInput[]
    upsert?: ExpenseHeadUpsertWithWhereUniqueWithoutCategoryInput | ExpenseHeadUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ExpenseHeadCreateManyCategoryInputEnvelope
    set?: ExpenseHeadWhereUniqueInput | ExpenseHeadWhereUniqueInput[]
    disconnect?: ExpenseHeadWhereUniqueInput | ExpenseHeadWhereUniqueInput[]
    delete?: ExpenseHeadWhereUniqueInput | ExpenseHeadWhereUniqueInput[]
    connect?: ExpenseHeadWhereUniqueInput | ExpenseHeadWhereUniqueInput[]
    update?: ExpenseHeadUpdateWithWhereUniqueWithoutCategoryInput | ExpenseHeadUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ExpenseHeadUpdateManyWithWhereWithoutCategoryInput | ExpenseHeadUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ExpenseHeadScalarWhereInput | ExpenseHeadScalarWhereInput[]
  }

  export type OpexEntryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<OpexEntryCreateWithoutCategoryInput, OpexEntryUncheckedCreateWithoutCategoryInput> | OpexEntryCreateWithoutCategoryInput[] | OpexEntryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutCategoryInput | OpexEntryCreateOrConnectWithoutCategoryInput[]
    upsert?: OpexEntryUpsertWithWhereUniqueWithoutCategoryInput | OpexEntryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: OpexEntryCreateManyCategoryInputEnvelope
    set?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    disconnect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    delete?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    update?: OpexEntryUpdateWithWhereUniqueWithoutCategoryInput | OpexEntryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: OpexEntryUpdateManyWithWhereWithoutCategoryInput | OpexEntryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: OpexEntryScalarWhereInput | OpexEntryScalarWhereInput[]
  }

  export type ExpenseHeadUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ExpenseHeadCreateWithoutCategoryInput, ExpenseHeadUncheckedCreateWithoutCategoryInput> | ExpenseHeadCreateWithoutCategoryInput[] | ExpenseHeadUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseHeadCreateOrConnectWithoutCategoryInput | ExpenseHeadCreateOrConnectWithoutCategoryInput[]
    upsert?: ExpenseHeadUpsertWithWhereUniqueWithoutCategoryInput | ExpenseHeadUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ExpenseHeadCreateManyCategoryInputEnvelope
    set?: ExpenseHeadWhereUniqueInput | ExpenseHeadWhereUniqueInput[]
    disconnect?: ExpenseHeadWhereUniqueInput | ExpenseHeadWhereUniqueInput[]
    delete?: ExpenseHeadWhereUniqueInput | ExpenseHeadWhereUniqueInput[]
    connect?: ExpenseHeadWhereUniqueInput | ExpenseHeadWhereUniqueInput[]
    update?: ExpenseHeadUpdateWithWhereUniqueWithoutCategoryInput | ExpenseHeadUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ExpenseHeadUpdateManyWithWhereWithoutCategoryInput | ExpenseHeadUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ExpenseHeadScalarWhereInput | ExpenseHeadScalarWhereInput[]
  }

  export type OpexEntryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<OpexEntryCreateWithoutCategoryInput, OpexEntryUncheckedCreateWithoutCategoryInput> | OpexEntryCreateWithoutCategoryInput[] | OpexEntryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutCategoryInput | OpexEntryCreateOrConnectWithoutCategoryInput[]
    upsert?: OpexEntryUpsertWithWhereUniqueWithoutCategoryInput | OpexEntryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: OpexEntryCreateManyCategoryInputEnvelope
    set?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    disconnect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    delete?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    update?: OpexEntryUpdateWithWhereUniqueWithoutCategoryInput | OpexEntryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: OpexEntryUpdateManyWithWhereWithoutCategoryInput | OpexEntryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: OpexEntryScalarWhereInput | OpexEntryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutExpenseHeadsInput = {
    create?: XOR<CategoryCreateWithoutExpenseHeadsInput, CategoryUncheckedCreateWithoutExpenseHeadsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutExpenseHeadsInput
    connect?: CategoryWhereUniqueInput
  }

  export type OpexEntryCreateNestedManyWithoutExpenseHeadInput = {
    create?: XOR<OpexEntryCreateWithoutExpenseHeadInput, OpexEntryUncheckedCreateWithoutExpenseHeadInput> | OpexEntryCreateWithoutExpenseHeadInput[] | OpexEntryUncheckedCreateWithoutExpenseHeadInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutExpenseHeadInput | OpexEntryCreateOrConnectWithoutExpenseHeadInput[]
    createMany?: OpexEntryCreateManyExpenseHeadInputEnvelope
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
  }

  export type OpexEntryUncheckedCreateNestedManyWithoutExpenseHeadInput = {
    create?: XOR<OpexEntryCreateWithoutExpenseHeadInput, OpexEntryUncheckedCreateWithoutExpenseHeadInput> | OpexEntryCreateWithoutExpenseHeadInput[] | OpexEntryUncheckedCreateWithoutExpenseHeadInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutExpenseHeadInput | OpexEntryCreateOrConnectWithoutExpenseHeadInput[]
    createMany?: OpexEntryCreateManyExpenseHeadInputEnvelope
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutExpenseHeadsNestedInput = {
    create?: XOR<CategoryCreateWithoutExpenseHeadsInput, CategoryUncheckedCreateWithoutExpenseHeadsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutExpenseHeadsInput
    upsert?: CategoryUpsertWithoutExpenseHeadsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutExpenseHeadsInput, CategoryUpdateWithoutExpenseHeadsInput>, CategoryUncheckedUpdateWithoutExpenseHeadsInput>
  }

  export type OpexEntryUpdateManyWithoutExpenseHeadNestedInput = {
    create?: XOR<OpexEntryCreateWithoutExpenseHeadInput, OpexEntryUncheckedCreateWithoutExpenseHeadInput> | OpexEntryCreateWithoutExpenseHeadInput[] | OpexEntryUncheckedCreateWithoutExpenseHeadInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutExpenseHeadInput | OpexEntryCreateOrConnectWithoutExpenseHeadInput[]
    upsert?: OpexEntryUpsertWithWhereUniqueWithoutExpenseHeadInput | OpexEntryUpsertWithWhereUniqueWithoutExpenseHeadInput[]
    createMany?: OpexEntryCreateManyExpenseHeadInputEnvelope
    set?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    disconnect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    delete?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    update?: OpexEntryUpdateWithWhereUniqueWithoutExpenseHeadInput | OpexEntryUpdateWithWhereUniqueWithoutExpenseHeadInput[]
    updateMany?: OpexEntryUpdateManyWithWhereWithoutExpenseHeadInput | OpexEntryUpdateManyWithWhereWithoutExpenseHeadInput[]
    deleteMany?: OpexEntryScalarWhereInput | OpexEntryScalarWhereInput[]
  }

  export type OpexEntryUncheckedUpdateManyWithoutExpenseHeadNestedInput = {
    create?: XOR<OpexEntryCreateWithoutExpenseHeadInput, OpexEntryUncheckedCreateWithoutExpenseHeadInput> | OpexEntryCreateWithoutExpenseHeadInput[] | OpexEntryUncheckedCreateWithoutExpenseHeadInput[]
    connectOrCreate?: OpexEntryCreateOrConnectWithoutExpenseHeadInput | OpexEntryCreateOrConnectWithoutExpenseHeadInput[]
    upsert?: OpexEntryUpsertWithWhereUniqueWithoutExpenseHeadInput | OpexEntryUpsertWithWhereUniqueWithoutExpenseHeadInput[]
    createMany?: OpexEntryCreateManyExpenseHeadInputEnvelope
    set?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    disconnect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    delete?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    connect?: OpexEntryWhereUniqueInput | OpexEntryWhereUniqueInput[]
    update?: OpexEntryUpdateWithWhereUniqueWithoutExpenseHeadInput | OpexEntryUpdateWithWhereUniqueWithoutExpenseHeadInput[]
    updateMany?: OpexEntryUpdateManyWithWhereWithoutExpenseHeadInput | OpexEntryUpdateManyWithWhereWithoutExpenseHeadInput[]
    deleteMany?: OpexEntryScalarWhereInput | OpexEntryScalarWhereInput[]
  }

  export type SiteCreateNestedOneWithoutOpexEntriesInput = {
    create?: XOR<SiteCreateWithoutOpexEntriesInput, SiteUncheckedCreateWithoutOpexEntriesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOpexEntriesInput
    connect?: SiteWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutOpexEntriesInput = {
    create?: XOR<CategoryCreateWithoutOpexEntriesInput, CategoryUncheckedCreateWithoutOpexEntriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutOpexEntriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type ExpenseHeadCreateNestedOneWithoutOpexEntriesInput = {
    create?: XOR<ExpenseHeadCreateWithoutOpexEntriesInput, ExpenseHeadUncheckedCreateWithoutOpexEntriesInput>
    connectOrCreate?: ExpenseHeadCreateOrConnectWithoutOpexEntriesInput
    connect?: ExpenseHeadWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOpexCreatedInput = {
    create?: XOR<UserCreateWithoutOpexCreatedInput, UserUncheckedCreateWithoutOpexCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpexCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type SiteUpdateOneRequiredWithoutOpexEntriesNestedInput = {
    create?: XOR<SiteCreateWithoutOpexEntriesInput, SiteUncheckedCreateWithoutOpexEntriesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOpexEntriesInput
    upsert?: SiteUpsertWithoutOpexEntriesInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutOpexEntriesInput, SiteUpdateWithoutOpexEntriesInput>, SiteUncheckedUpdateWithoutOpexEntriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutOpexEntriesNestedInput = {
    create?: XOR<CategoryCreateWithoutOpexEntriesInput, CategoryUncheckedCreateWithoutOpexEntriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutOpexEntriesInput
    upsert?: CategoryUpsertWithoutOpexEntriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutOpexEntriesInput, CategoryUpdateWithoutOpexEntriesInput>, CategoryUncheckedUpdateWithoutOpexEntriesInput>
  }

  export type ExpenseHeadUpdateOneRequiredWithoutOpexEntriesNestedInput = {
    create?: XOR<ExpenseHeadCreateWithoutOpexEntriesInput, ExpenseHeadUncheckedCreateWithoutOpexEntriesInput>
    connectOrCreate?: ExpenseHeadCreateOrConnectWithoutOpexEntriesInput
    upsert?: ExpenseHeadUpsertWithoutOpexEntriesInput
    connect?: ExpenseHeadWhereUniqueInput
    update?: XOR<XOR<ExpenseHeadUpdateToOneWithWhereWithoutOpexEntriesInput, ExpenseHeadUpdateWithoutOpexEntriesInput>, ExpenseHeadUncheckedUpdateWithoutOpexEntriesInput>
  }

  export type UserUpdateOneRequiredWithoutOpexCreatedNestedInput = {
    create?: XOR<UserCreateWithoutOpexCreatedInput, UserUncheckedCreateWithoutOpexCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpexCreatedInput
    upsert?: UserUpsertWithoutOpexCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOpexCreatedInput, UserUpdateWithoutOpexCreatedInput>, UserUncheckedUpdateWithoutOpexCreatedInput>
  }

  export type SiteCreateNestedOneWithoutDceEntriesInput = {
    create?: XOR<SiteCreateWithoutDceEntriesInput, SiteUncheckedCreateWithoutDceEntriesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutDceEntriesInput
    connect?: SiteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDceCreatedInput = {
    create?: XOR<UserCreateWithoutDceCreatedInput, UserUncheckedCreateWithoutDceCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDceCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDceStatusFieldUpdateOperationsInput = {
    set?: $Enums.DceStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SiteUpdateOneRequiredWithoutDceEntriesNestedInput = {
    create?: XOR<SiteCreateWithoutDceEntriesInput, SiteUncheckedCreateWithoutDceEntriesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutDceEntriesInput
    upsert?: SiteUpsertWithoutDceEntriesInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutDceEntriesInput, SiteUpdateWithoutDceEntriesInput>, SiteUncheckedUpdateWithoutDceEntriesInput>
  }

  export type UserUpdateOneRequiredWithoutDceCreatedNestedInput = {
    create?: XOR<UserCreateWithoutDceCreatedInput, UserUncheckedCreateWithoutDceCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDceCreatedInput
    upsert?: UserUpsertWithoutDceCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDceCreatedInput, UserUpdateWithoutDceCreatedInput>, UserUncheckedUpdateWithoutDceCreatedInput>
  }

  export type SiteCreateNestedOneWithoutAdvanceEntriesInput = {
    create?: XOR<SiteCreateWithoutAdvanceEntriesInput, SiteUncheckedCreateWithoutAdvanceEntriesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutAdvanceEntriesInput
    connect?: SiteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAdvanceCreatedInput = {
    create?: XOR<UserCreateWithoutAdvanceCreatedInput, UserUncheckedCreateWithoutAdvanceCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvanceCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type SiteUpdateOneRequiredWithoutAdvanceEntriesNestedInput = {
    create?: XOR<SiteCreateWithoutAdvanceEntriesInput, SiteUncheckedCreateWithoutAdvanceEntriesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutAdvanceEntriesInput
    upsert?: SiteUpsertWithoutAdvanceEntriesInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutAdvanceEntriesInput, SiteUpdateWithoutAdvanceEntriesInput>, SiteUncheckedUpdateWithoutAdvanceEntriesInput>
  }

  export type UserUpdateOneRequiredWithoutAdvanceCreatedNestedInput = {
    create?: XOR<UserCreateWithoutAdvanceCreatedInput, UserUncheckedCreateWithoutAdvanceCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvanceCreatedInput
    upsert?: UserUpsertWithoutAdvanceCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdvanceCreatedInput, UserUpdateWithoutAdvanceCreatedInput>, UserUncheckedUpdateWithoutAdvanceCreatedInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumDceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DceStatus | EnumDceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DceStatus[] | ListEnumDceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DceStatus[] | ListEnumDceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDceStatusFilter<$PrismaModel> | $Enums.DceStatus
  }

  export type NestedEnumDceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DceStatus | EnumDceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DceStatus[] | ListEnumDceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DceStatus[] | ListEnumDceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDceStatusFilter<$PrismaModel>
    _max?: NestedEnumDceStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SiteCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    drillingEntries?: DrillingEntryCreateNestedManyWithoutSiteInput
    opexEntries?: OpexEntryCreateNestedManyWithoutSiteInput
    dceEntries?: DceEntryCreateNestedManyWithoutSiteInput
    advanceEntries?: AdvanceEntryCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    drillingEntries?: DrillingEntryUncheckedCreateNestedManyWithoutSiteInput
    opexEntries?: OpexEntryUncheckedCreateNestedManyWithoutSiteInput
    dceEntries?: DceEntryUncheckedCreateNestedManyWithoutSiteInput
    advanceEntries?: AdvanceEntryUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutCreatedByInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutCreatedByInput, SiteUncheckedCreateWithoutCreatedByInput>
  }

  export type SiteCreateManyCreatedByInputEnvelope = {
    data: SiteCreateManyCreatedByInput | SiteCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DrillingEntryCreateWithoutCreatedByInput = {
    id?: string
    date: Date | string
    meters: Decimal | DecimalJsLike | number | string
    boreholeNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutDrillingEntriesInput
  }

  export type DrillingEntryUncheckedCreateWithoutCreatedByInput = {
    id?: string
    siteId: string
    date: Date | string
    meters: Decimal | DecimalJsLike | number | string
    boreholeNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrillingEntryCreateOrConnectWithoutCreatedByInput = {
    where: DrillingEntryWhereUniqueInput
    create: XOR<DrillingEntryCreateWithoutCreatedByInput, DrillingEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type DrillingEntryCreateManyCreatedByInputEnvelope = {
    data: DrillingEntryCreateManyCreatedByInput | DrillingEntryCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type OpexEntryCreateWithoutCreatedByInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutOpexEntriesInput
    category: CategoryCreateNestedOneWithoutOpexEntriesInput
    expenseHead: ExpenseHeadCreateNestedOneWithoutOpexEntriesInput
  }

  export type OpexEntryUncheckedCreateWithoutCreatedByInput = {
    id?: string
    siteId: string
    categoryId: string
    expenseHeadId: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpexEntryCreateOrConnectWithoutCreatedByInput = {
    where: OpexEntryWhereUniqueInput
    create: XOR<OpexEntryCreateWithoutCreatedByInput, OpexEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type OpexEntryCreateManyCreatedByInputEnvelope = {
    data: OpexEntryCreateManyCreatedByInput | OpexEntryCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DceEntryCreateWithoutCreatedByInput = {
    id?: string
    costHead: string
    perDayCost: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    status?: $Enums.DceStatus
    remarks?: string
    pausedAt?: Date | string | null
    stoppedAt?: Date | string | null
    totalPausedDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutDceEntriesInput
  }

  export type DceEntryUncheckedCreateWithoutCreatedByInput = {
    id?: string
    siteId: string
    costHead: string
    perDayCost: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    status?: $Enums.DceStatus
    remarks?: string
    pausedAt?: Date | string | null
    stoppedAt?: Date | string | null
    totalPausedDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DceEntryCreateOrConnectWithoutCreatedByInput = {
    where: DceEntryWhereUniqueInput
    create: XOR<DceEntryCreateWithoutCreatedByInput, DceEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type DceEntryCreateManyCreatedByInputEnvelope = {
    data: DceEntryCreateManyCreatedByInput | DceEntryCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AdvanceEntryCreateWithoutCreatedByInput = {
    id?: string
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutAdvanceEntriesInput
  }

  export type AdvanceEntryUncheckedCreateWithoutCreatedByInput = {
    id?: string
    siteId: string
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvanceEntryCreateOrConnectWithoutCreatedByInput = {
    where: AdvanceEntryWhereUniqueInput
    create: XOR<AdvanceEntryCreateWithoutCreatedByInput, AdvanceEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type AdvanceEntryCreateManyCreatedByInputEnvelope = {
    data: AdvanceEntryCreateManyCreatedByInput | AdvanceEntryCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type RefreshSessionCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedById?: string | null
  }

  export type RefreshSessionUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedById?: string | null
  }

  export type RefreshSessionCreateOrConnectWithoutUserInput = {
    where: RefreshSessionWhereUniqueInput
    create: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput>
  }

  export type RefreshSessionCreateManyUserInputEnvelope = {
    data: RefreshSessionCreateManyUserInput | RefreshSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SiteUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SiteWhereUniqueInput
    update: XOR<SiteUpdateWithoutCreatedByInput, SiteUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SiteCreateWithoutCreatedByInput, SiteUncheckedCreateWithoutCreatedByInput>
  }

  export type SiteUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SiteWhereUniqueInput
    data: XOR<SiteUpdateWithoutCreatedByInput, SiteUncheckedUpdateWithoutCreatedByInput>
  }

  export type SiteUpdateManyWithWhereWithoutCreatedByInput = {
    where: SiteScalarWhereInput
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SiteScalarWhereInput = {
    AND?: SiteScalarWhereInput | SiteScalarWhereInput[]
    OR?: SiteScalarWhereInput[]
    NOT?: SiteScalarWhereInput | SiteScalarWhereInput[]
    id?: UuidFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    createdById?: UuidFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
  }

  export type DrillingEntryUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DrillingEntryWhereUniqueInput
    update: XOR<DrillingEntryUpdateWithoutCreatedByInput, DrillingEntryUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DrillingEntryCreateWithoutCreatedByInput, DrillingEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type DrillingEntryUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DrillingEntryWhereUniqueInput
    data: XOR<DrillingEntryUpdateWithoutCreatedByInput, DrillingEntryUncheckedUpdateWithoutCreatedByInput>
  }

  export type DrillingEntryUpdateManyWithWhereWithoutCreatedByInput = {
    where: DrillingEntryScalarWhereInput
    data: XOR<DrillingEntryUpdateManyMutationInput, DrillingEntryUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DrillingEntryScalarWhereInput = {
    AND?: DrillingEntryScalarWhereInput | DrillingEntryScalarWhereInput[]
    OR?: DrillingEntryScalarWhereInput[]
    NOT?: DrillingEntryScalarWhereInput | DrillingEntryScalarWhereInput[]
    id?: UuidFilter<"DrillingEntry"> | string
    siteId?: UuidFilter<"DrillingEntry"> | string
    date?: DateTimeFilter<"DrillingEntry"> | Date | string
    meters?: DecimalFilter<"DrillingEntry"> | Decimal | DecimalJsLike | number | string
    boreholeNumber?: StringNullableFilter<"DrillingEntry"> | string | null
    createdById?: UuidFilter<"DrillingEntry"> | string
    createdAt?: DateTimeFilter<"DrillingEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DrillingEntry"> | Date | string
  }

  export type OpexEntryUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: OpexEntryWhereUniqueInput
    update: XOR<OpexEntryUpdateWithoutCreatedByInput, OpexEntryUncheckedUpdateWithoutCreatedByInput>
    create: XOR<OpexEntryCreateWithoutCreatedByInput, OpexEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type OpexEntryUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: OpexEntryWhereUniqueInput
    data: XOR<OpexEntryUpdateWithoutCreatedByInput, OpexEntryUncheckedUpdateWithoutCreatedByInput>
  }

  export type OpexEntryUpdateManyWithWhereWithoutCreatedByInput = {
    where: OpexEntryScalarWhereInput
    data: XOR<OpexEntryUpdateManyMutationInput, OpexEntryUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type OpexEntryScalarWhereInput = {
    AND?: OpexEntryScalarWhereInput | OpexEntryScalarWhereInput[]
    OR?: OpexEntryScalarWhereInput[]
    NOT?: OpexEntryScalarWhereInput | OpexEntryScalarWhereInput[]
    id?: UuidFilter<"OpexEntry"> | string
    siteId?: UuidFilter<"OpexEntry"> | string
    categoryId?: UuidFilter<"OpexEntry"> | string
    expenseHeadId?: UuidFilter<"OpexEntry"> | string
    amount?: DecimalFilter<"OpexEntry"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"OpexEntry"> | Date | string
    remarks?: StringFilter<"OpexEntry"> | string
    createdById?: UuidFilter<"OpexEntry"> | string
    createdAt?: DateTimeFilter<"OpexEntry"> | Date | string
    updatedAt?: DateTimeFilter<"OpexEntry"> | Date | string
  }

  export type DceEntryUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DceEntryWhereUniqueInput
    update: XOR<DceEntryUpdateWithoutCreatedByInput, DceEntryUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DceEntryCreateWithoutCreatedByInput, DceEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type DceEntryUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DceEntryWhereUniqueInput
    data: XOR<DceEntryUpdateWithoutCreatedByInput, DceEntryUncheckedUpdateWithoutCreatedByInput>
  }

  export type DceEntryUpdateManyWithWhereWithoutCreatedByInput = {
    where: DceEntryScalarWhereInput
    data: XOR<DceEntryUpdateManyMutationInput, DceEntryUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DceEntryScalarWhereInput = {
    AND?: DceEntryScalarWhereInput | DceEntryScalarWhereInput[]
    OR?: DceEntryScalarWhereInput[]
    NOT?: DceEntryScalarWhereInput | DceEntryScalarWhereInput[]
    id?: UuidFilter<"DceEntry"> | string
    siteId?: UuidFilter<"DceEntry"> | string
    costHead?: StringFilter<"DceEntry"> | string
    perDayCost?: DecimalFilter<"DceEntry"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"DceEntry"> | Date | string
    status?: EnumDceStatusFilter<"DceEntry"> | $Enums.DceStatus
    remarks?: StringFilter<"DceEntry"> | string
    pausedAt?: DateTimeNullableFilter<"DceEntry"> | Date | string | null
    stoppedAt?: DateTimeNullableFilter<"DceEntry"> | Date | string | null
    totalPausedDays?: IntFilter<"DceEntry"> | number
    createdById?: UuidFilter<"DceEntry"> | string
    createdAt?: DateTimeFilter<"DceEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DceEntry"> | Date | string
  }

  export type AdvanceEntryUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: AdvanceEntryWhereUniqueInput
    update: XOR<AdvanceEntryUpdateWithoutCreatedByInput, AdvanceEntryUncheckedUpdateWithoutCreatedByInput>
    create: XOR<AdvanceEntryCreateWithoutCreatedByInput, AdvanceEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type AdvanceEntryUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: AdvanceEntryWhereUniqueInput
    data: XOR<AdvanceEntryUpdateWithoutCreatedByInput, AdvanceEntryUncheckedUpdateWithoutCreatedByInput>
  }

  export type AdvanceEntryUpdateManyWithWhereWithoutCreatedByInput = {
    where: AdvanceEntryScalarWhereInput
    data: XOR<AdvanceEntryUpdateManyMutationInput, AdvanceEntryUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type AdvanceEntryScalarWhereInput = {
    AND?: AdvanceEntryScalarWhereInput | AdvanceEntryScalarWhereInput[]
    OR?: AdvanceEntryScalarWhereInput[]
    NOT?: AdvanceEntryScalarWhereInput | AdvanceEntryScalarWhereInput[]
    id?: UuidFilter<"AdvanceEntry"> | string
    siteId?: UuidFilter<"AdvanceEntry"> | string
    date?: DateTimeFilter<"AdvanceEntry"> | Date | string
    amount?: DecimalFilter<"AdvanceEntry"> | Decimal | DecimalJsLike | number | string
    remarks?: StringFilter<"AdvanceEntry"> | string
    createdById?: UuidFilter<"AdvanceEntry"> | string
    createdAt?: DateTimeFilter<"AdvanceEntry"> | Date | string
    updatedAt?: DateTimeFilter<"AdvanceEntry"> | Date | string
  }

  export type RefreshSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshSessionWhereUniqueInput
    update: XOR<RefreshSessionUpdateWithoutUserInput, RefreshSessionUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput>
  }

  export type RefreshSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshSessionWhereUniqueInput
    data: XOR<RefreshSessionUpdateWithoutUserInput, RefreshSessionUncheckedUpdateWithoutUserInput>
  }

  export type RefreshSessionUpdateManyWithWhereWithoutUserInput = {
    where: RefreshSessionScalarWhereInput
    data: XOR<RefreshSessionUpdateManyMutationInput, RefreshSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshSessionScalarWhereInput = {
    AND?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
    OR?: RefreshSessionScalarWhereInput[]
    NOT?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
    id?: UuidFilter<"RefreshSession"> | string
    userId?: UuidFilter<"RefreshSession"> | string
    tokenHash?: StringFilter<"RefreshSession"> | string
    issuedAt?: DateTimeFilter<"RefreshSession"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshSession"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshSession"> | Date | string | null
    replacedById?: UuidNullableFilter<"RefreshSession"> | string | null
  }

  export type UserCreateWithoutRefreshSessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteCreateNestedManyWithoutCreatedByInput
    drillingCreated?: DrillingEntryCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutRefreshSessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteUncheckedCreateNestedManyWithoutCreatedByInput
    drillingCreated?: DrillingEntryUncheckedCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryUncheckedCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryUncheckedCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutRefreshSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
  }

  export type UserUpsertWithoutRefreshSessionsInput = {
    update: XOR<UserUpdateWithoutRefreshSessionsInput, UserUncheckedUpdateWithoutRefreshSessionsInput>
    create: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshSessionsInput, UserUncheckedUpdateWithoutRefreshSessionsInput>
  }

  export type UserUpdateWithoutRefreshSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUpdateManyWithoutCreatedByNestedInput
    drillingCreated?: DrillingEntryUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUncheckedUpdateManyWithoutCreatedByNestedInput
    drillingCreated?: DrillingEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutSitesCreatedInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    drillingCreated?: DrillingEntryCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSitesCreatedInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    drillingCreated?: DrillingEntryUncheckedCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryUncheckedCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryUncheckedCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryUncheckedCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSitesCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSitesCreatedInput, UserUncheckedCreateWithoutSitesCreatedInput>
  }

  export type DrillingEntryCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    meters: Decimal | DecimalJsLike | number | string
    boreholeNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutDrillingCreatedInput
  }

  export type DrillingEntryUncheckedCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    meters: Decimal | DecimalJsLike | number | string
    boreholeNumber?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrillingEntryCreateOrConnectWithoutSiteInput = {
    where: DrillingEntryWhereUniqueInput
    create: XOR<DrillingEntryCreateWithoutSiteInput, DrillingEntryUncheckedCreateWithoutSiteInput>
  }

  export type DrillingEntryCreateManySiteInputEnvelope = {
    data: DrillingEntryCreateManySiteInput | DrillingEntryCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type OpexEntryCreateWithoutSiteInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutOpexEntriesInput
    expenseHead: ExpenseHeadCreateNestedOneWithoutOpexEntriesInput
    createdBy: UserCreateNestedOneWithoutOpexCreatedInput
  }

  export type OpexEntryUncheckedCreateWithoutSiteInput = {
    id?: string
    categoryId: string
    expenseHeadId: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpexEntryCreateOrConnectWithoutSiteInput = {
    where: OpexEntryWhereUniqueInput
    create: XOR<OpexEntryCreateWithoutSiteInput, OpexEntryUncheckedCreateWithoutSiteInput>
  }

  export type OpexEntryCreateManySiteInputEnvelope = {
    data: OpexEntryCreateManySiteInput | OpexEntryCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type DceEntryCreateWithoutSiteInput = {
    id?: string
    costHead: string
    perDayCost: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    status?: $Enums.DceStatus
    remarks?: string
    pausedAt?: Date | string | null
    stoppedAt?: Date | string | null
    totalPausedDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutDceCreatedInput
  }

  export type DceEntryUncheckedCreateWithoutSiteInput = {
    id?: string
    costHead: string
    perDayCost: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    status?: $Enums.DceStatus
    remarks?: string
    pausedAt?: Date | string | null
    stoppedAt?: Date | string | null
    totalPausedDays?: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DceEntryCreateOrConnectWithoutSiteInput = {
    where: DceEntryWhereUniqueInput
    create: XOR<DceEntryCreateWithoutSiteInput, DceEntryUncheckedCreateWithoutSiteInput>
  }

  export type DceEntryCreateManySiteInputEnvelope = {
    data: DceEntryCreateManySiteInput | DceEntryCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type AdvanceEntryCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutAdvanceCreatedInput
  }

  export type AdvanceEntryUncheckedCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvanceEntryCreateOrConnectWithoutSiteInput = {
    where: AdvanceEntryWhereUniqueInput
    create: XOR<AdvanceEntryCreateWithoutSiteInput, AdvanceEntryUncheckedCreateWithoutSiteInput>
  }

  export type AdvanceEntryCreateManySiteInputEnvelope = {
    data: AdvanceEntryCreateManySiteInput | AdvanceEntryCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSitesCreatedInput = {
    update: XOR<UserUpdateWithoutSitesCreatedInput, UserUncheckedUpdateWithoutSitesCreatedInput>
    create: XOR<UserCreateWithoutSitesCreatedInput, UserUncheckedCreateWithoutSitesCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSitesCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSitesCreatedInput, UserUncheckedUpdateWithoutSitesCreatedInput>
  }

  export type UserUpdateWithoutSitesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillingCreated?: DrillingEntryUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSitesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillingCreated?: DrillingEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DrillingEntryUpsertWithWhereUniqueWithoutSiteInput = {
    where: DrillingEntryWhereUniqueInput
    update: XOR<DrillingEntryUpdateWithoutSiteInput, DrillingEntryUncheckedUpdateWithoutSiteInput>
    create: XOR<DrillingEntryCreateWithoutSiteInput, DrillingEntryUncheckedCreateWithoutSiteInput>
  }

  export type DrillingEntryUpdateWithWhereUniqueWithoutSiteInput = {
    where: DrillingEntryWhereUniqueInput
    data: XOR<DrillingEntryUpdateWithoutSiteInput, DrillingEntryUncheckedUpdateWithoutSiteInput>
  }

  export type DrillingEntryUpdateManyWithWhereWithoutSiteInput = {
    where: DrillingEntryScalarWhereInput
    data: XOR<DrillingEntryUpdateManyMutationInput, DrillingEntryUncheckedUpdateManyWithoutSiteInput>
  }

  export type OpexEntryUpsertWithWhereUniqueWithoutSiteInput = {
    where: OpexEntryWhereUniqueInput
    update: XOR<OpexEntryUpdateWithoutSiteInput, OpexEntryUncheckedUpdateWithoutSiteInput>
    create: XOR<OpexEntryCreateWithoutSiteInput, OpexEntryUncheckedCreateWithoutSiteInput>
  }

  export type OpexEntryUpdateWithWhereUniqueWithoutSiteInput = {
    where: OpexEntryWhereUniqueInput
    data: XOR<OpexEntryUpdateWithoutSiteInput, OpexEntryUncheckedUpdateWithoutSiteInput>
  }

  export type OpexEntryUpdateManyWithWhereWithoutSiteInput = {
    where: OpexEntryScalarWhereInput
    data: XOR<OpexEntryUpdateManyMutationInput, OpexEntryUncheckedUpdateManyWithoutSiteInput>
  }

  export type DceEntryUpsertWithWhereUniqueWithoutSiteInput = {
    where: DceEntryWhereUniqueInput
    update: XOR<DceEntryUpdateWithoutSiteInput, DceEntryUncheckedUpdateWithoutSiteInput>
    create: XOR<DceEntryCreateWithoutSiteInput, DceEntryUncheckedCreateWithoutSiteInput>
  }

  export type DceEntryUpdateWithWhereUniqueWithoutSiteInput = {
    where: DceEntryWhereUniqueInput
    data: XOR<DceEntryUpdateWithoutSiteInput, DceEntryUncheckedUpdateWithoutSiteInput>
  }

  export type DceEntryUpdateManyWithWhereWithoutSiteInput = {
    where: DceEntryScalarWhereInput
    data: XOR<DceEntryUpdateManyMutationInput, DceEntryUncheckedUpdateManyWithoutSiteInput>
  }

  export type AdvanceEntryUpsertWithWhereUniqueWithoutSiteInput = {
    where: AdvanceEntryWhereUniqueInput
    update: XOR<AdvanceEntryUpdateWithoutSiteInput, AdvanceEntryUncheckedUpdateWithoutSiteInput>
    create: XOR<AdvanceEntryCreateWithoutSiteInput, AdvanceEntryUncheckedCreateWithoutSiteInput>
  }

  export type AdvanceEntryUpdateWithWhereUniqueWithoutSiteInput = {
    where: AdvanceEntryWhereUniqueInput
    data: XOR<AdvanceEntryUpdateWithoutSiteInput, AdvanceEntryUncheckedUpdateWithoutSiteInput>
  }

  export type AdvanceEntryUpdateManyWithWhereWithoutSiteInput = {
    where: AdvanceEntryScalarWhereInput
    data: XOR<AdvanceEntryUpdateManyMutationInput, AdvanceEntryUncheckedUpdateManyWithoutSiteInput>
  }

  export type SiteCreateWithoutDrillingEntriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutSitesCreatedInput
    opexEntries?: OpexEntryCreateNestedManyWithoutSiteInput
    dceEntries?: DceEntryCreateNestedManyWithoutSiteInput
    advanceEntries?: AdvanceEntryCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutDrillingEntriesInput = {
    id?: string
    name: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    opexEntries?: OpexEntryUncheckedCreateNestedManyWithoutSiteInput
    dceEntries?: DceEntryUncheckedCreateNestedManyWithoutSiteInput
    advanceEntries?: AdvanceEntryUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutDrillingEntriesInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutDrillingEntriesInput, SiteUncheckedCreateWithoutDrillingEntriesInput>
  }

  export type UserCreateWithoutDrillingCreatedInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDrillingCreatedInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteUncheckedCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryUncheckedCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryUncheckedCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryUncheckedCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDrillingCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDrillingCreatedInput, UserUncheckedCreateWithoutDrillingCreatedInput>
  }

  export type SiteUpsertWithoutDrillingEntriesInput = {
    update: XOR<SiteUpdateWithoutDrillingEntriesInput, SiteUncheckedUpdateWithoutDrillingEntriesInput>
    create: XOR<SiteCreateWithoutDrillingEntriesInput, SiteUncheckedCreateWithoutDrillingEntriesInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutDrillingEntriesInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutDrillingEntriesInput, SiteUncheckedUpdateWithoutDrillingEntriesInput>
  }

  export type SiteUpdateWithoutDrillingEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutSitesCreatedNestedInput
    opexEntries?: OpexEntryUpdateManyWithoutSiteNestedInput
    dceEntries?: DceEntryUpdateManyWithoutSiteNestedInput
    advanceEntries?: AdvanceEntryUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutDrillingEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opexEntries?: OpexEntryUncheckedUpdateManyWithoutSiteNestedInput
    dceEntries?: DceEntryUncheckedUpdateManyWithoutSiteNestedInput
    advanceEntries?: AdvanceEntryUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type UserUpsertWithoutDrillingCreatedInput = {
    update: XOR<UserUpdateWithoutDrillingCreatedInput, UserUncheckedUpdateWithoutDrillingCreatedInput>
    create: XOR<UserCreateWithoutDrillingCreatedInput, UserUncheckedCreateWithoutDrillingCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDrillingCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDrillingCreatedInput, UserUncheckedUpdateWithoutDrillingCreatedInput>
  }

  export type UserUpdateWithoutDrillingCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDrillingCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUncheckedUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpenseHeadCreateWithoutCategoryInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    opexEntries?: OpexEntryCreateNestedManyWithoutExpenseHeadInput
  }

  export type ExpenseHeadUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    opexEntries?: OpexEntryUncheckedCreateNestedManyWithoutExpenseHeadInput
  }

  export type ExpenseHeadCreateOrConnectWithoutCategoryInput = {
    where: ExpenseHeadWhereUniqueInput
    create: XOR<ExpenseHeadCreateWithoutCategoryInput, ExpenseHeadUncheckedCreateWithoutCategoryInput>
  }

  export type ExpenseHeadCreateManyCategoryInputEnvelope = {
    data: ExpenseHeadCreateManyCategoryInput | ExpenseHeadCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type OpexEntryCreateWithoutCategoryInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutOpexEntriesInput
    expenseHead: ExpenseHeadCreateNestedOneWithoutOpexEntriesInput
    createdBy: UserCreateNestedOneWithoutOpexCreatedInput
  }

  export type OpexEntryUncheckedCreateWithoutCategoryInput = {
    id?: string
    siteId: string
    expenseHeadId: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpexEntryCreateOrConnectWithoutCategoryInput = {
    where: OpexEntryWhereUniqueInput
    create: XOR<OpexEntryCreateWithoutCategoryInput, OpexEntryUncheckedCreateWithoutCategoryInput>
  }

  export type OpexEntryCreateManyCategoryInputEnvelope = {
    data: OpexEntryCreateManyCategoryInput | OpexEntryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseHeadUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ExpenseHeadWhereUniqueInput
    update: XOR<ExpenseHeadUpdateWithoutCategoryInput, ExpenseHeadUncheckedUpdateWithoutCategoryInput>
    create: XOR<ExpenseHeadCreateWithoutCategoryInput, ExpenseHeadUncheckedCreateWithoutCategoryInput>
  }

  export type ExpenseHeadUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ExpenseHeadWhereUniqueInput
    data: XOR<ExpenseHeadUpdateWithoutCategoryInput, ExpenseHeadUncheckedUpdateWithoutCategoryInput>
  }

  export type ExpenseHeadUpdateManyWithWhereWithoutCategoryInput = {
    where: ExpenseHeadScalarWhereInput
    data: XOR<ExpenseHeadUpdateManyMutationInput, ExpenseHeadUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ExpenseHeadScalarWhereInput = {
    AND?: ExpenseHeadScalarWhereInput | ExpenseHeadScalarWhereInput[]
    OR?: ExpenseHeadScalarWhereInput[]
    NOT?: ExpenseHeadScalarWhereInput | ExpenseHeadScalarWhereInput[]
    id?: UuidFilter<"ExpenseHead"> | string
    categoryId?: UuidFilter<"ExpenseHead"> | string
    name?: StringFilter<"ExpenseHead"> | string
    createdAt?: DateTimeFilter<"ExpenseHead"> | Date | string
    updatedAt?: DateTimeFilter<"ExpenseHead"> | Date | string
  }

  export type OpexEntryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: OpexEntryWhereUniqueInput
    update: XOR<OpexEntryUpdateWithoutCategoryInput, OpexEntryUncheckedUpdateWithoutCategoryInput>
    create: XOR<OpexEntryCreateWithoutCategoryInput, OpexEntryUncheckedCreateWithoutCategoryInput>
  }

  export type OpexEntryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: OpexEntryWhereUniqueInput
    data: XOR<OpexEntryUpdateWithoutCategoryInput, OpexEntryUncheckedUpdateWithoutCategoryInput>
  }

  export type OpexEntryUpdateManyWithWhereWithoutCategoryInput = {
    where: OpexEntryScalarWhereInput
    data: XOR<OpexEntryUpdateManyMutationInput, OpexEntryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutExpenseHeadsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    opexEntries?: OpexEntryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutExpenseHeadsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    opexEntries?: OpexEntryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutExpenseHeadsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutExpenseHeadsInput, CategoryUncheckedCreateWithoutExpenseHeadsInput>
  }

  export type OpexEntryCreateWithoutExpenseHeadInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutOpexEntriesInput
    category: CategoryCreateNestedOneWithoutOpexEntriesInput
    createdBy: UserCreateNestedOneWithoutOpexCreatedInput
  }

  export type OpexEntryUncheckedCreateWithoutExpenseHeadInput = {
    id?: string
    siteId: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpexEntryCreateOrConnectWithoutExpenseHeadInput = {
    where: OpexEntryWhereUniqueInput
    create: XOR<OpexEntryCreateWithoutExpenseHeadInput, OpexEntryUncheckedCreateWithoutExpenseHeadInput>
  }

  export type OpexEntryCreateManyExpenseHeadInputEnvelope = {
    data: OpexEntryCreateManyExpenseHeadInput | OpexEntryCreateManyExpenseHeadInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutExpenseHeadsInput = {
    update: XOR<CategoryUpdateWithoutExpenseHeadsInput, CategoryUncheckedUpdateWithoutExpenseHeadsInput>
    create: XOR<CategoryCreateWithoutExpenseHeadsInput, CategoryUncheckedCreateWithoutExpenseHeadsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutExpenseHeadsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutExpenseHeadsInput, CategoryUncheckedUpdateWithoutExpenseHeadsInput>
  }

  export type CategoryUpdateWithoutExpenseHeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opexEntries?: OpexEntryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutExpenseHeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opexEntries?: OpexEntryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type OpexEntryUpsertWithWhereUniqueWithoutExpenseHeadInput = {
    where: OpexEntryWhereUniqueInput
    update: XOR<OpexEntryUpdateWithoutExpenseHeadInput, OpexEntryUncheckedUpdateWithoutExpenseHeadInput>
    create: XOR<OpexEntryCreateWithoutExpenseHeadInput, OpexEntryUncheckedCreateWithoutExpenseHeadInput>
  }

  export type OpexEntryUpdateWithWhereUniqueWithoutExpenseHeadInput = {
    where: OpexEntryWhereUniqueInput
    data: XOR<OpexEntryUpdateWithoutExpenseHeadInput, OpexEntryUncheckedUpdateWithoutExpenseHeadInput>
  }

  export type OpexEntryUpdateManyWithWhereWithoutExpenseHeadInput = {
    where: OpexEntryScalarWhereInput
    data: XOR<OpexEntryUpdateManyMutationInput, OpexEntryUncheckedUpdateManyWithoutExpenseHeadInput>
  }

  export type SiteCreateWithoutOpexEntriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutSitesCreatedInput
    drillingEntries?: DrillingEntryCreateNestedManyWithoutSiteInput
    dceEntries?: DceEntryCreateNestedManyWithoutSiteInput
    advanceEntries?: AdvanceEntryCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutOpexEntriesInput = {
    id?: string
    name: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    drillingEntries?: DrillingEntryUncheckedCreateNestedManyWithoutSiteInput
    dceEntries?: DceEntryUncheckedCreateNestedManyWithoutSiteInput
    advanceEntries?: AdvanceEntryUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutOpexEntriesInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutOpexEntriesInput, SiteUncheckedCreateWithoutOpexEntriesInput>
  }

  export type CategoryCreateWithoutOpexEntriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expenseHeads?: ExpenseHeadCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutOpexEntriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expenseHeads?: ExpenseHeadUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutOpexEntriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutOpexEntriesInput, CategoryUncheckedCreateWithoutOpexEntriesInput>
  }

  export type ExpenseHeadCreateWithoutOpexEntriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutExpenseHeadsInput
  }

  export type ExpenseHeadUncheckedCreateWithoutOpexEntriesInput = {
    id?: string
    categoryId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseHeadCreateOrConnectWithoutOpexEntriesInput = {
    where: ExpenseHeadWhereUniqueInput
    create: XOR<ExpenseHeadCreateWithoutOpexEntriesInput, ExpenseHeadUncheckedCreateWithoutOpexEntriesInput>
  }

  export type UserCreateWithoutOpexCreatedInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteCreateNestedManyWithoutCreatedByInput
    drillingCreated?: DrillingEntryCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOpexCreatedInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteUncheckedCreateNestedManyWithoutCreatedByInput
    drillingCreated?: DrillingEntryUncheckedCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryUncheckedCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryUncheckedCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOpexCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOpexCreatedInput, UserUncheckedCreateWithoutOpexCreatedInput>
  }

  export type SiteUpsertWithoutOpexEntriesInput = {
    update: XOR<SiteUpdateWithoutOpexEntriesInput, SiteUncheckedUpdateWithoutOpexEntriesInput>
    create: XOR<SiteCreateWithoutOpexEntriesInput, SiteUncheckedCreateWithoutOpexEntriesInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutOpexEntriesInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutOpexEntriesInput, SiteUncheckedUpdateWithoutOpexEntriesInput>
  }

  export type SiteUpdateWithoutOpexEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutSitesCreatedNestedInput
    drillingEntries?: DrillingEntryUpdateManyWithoutSiteNestedInput
    dceEntries?: DceEntryUpdateManyWithoutSiteNestedInput
    advanceEntries?: AdvanceEntryUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutOpexEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillingEntries?: DrillingEntryUncheckedUpdateManyWithoutSiteNestedInput
    dceEntries?: DceEntryUncheckedUpdateManyWithoutSiteNestedInput
    advanceEntries?: AdvanceEntryUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type CategoryUpsertWithoutOpexEntriesInput = {
    update: XOR<CategoryUpdateWithoutOpexEntriesInput, CategoryUncheckedUpdateWithoutOpexEntriesInput>
    create: XOR<CategoryCreateWithoutOpexEntriesInput, CategoryUncheckedCreateWithoutOpexEntriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutOpexEntriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutOpexEntriesInput, CategoryUncheckedUpdateWithoutOpexEntriesInput>
  }

  export type CategoryUpdateWithoutOpexEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenseHeads?: ExpenseHeadUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutOpexEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenseHeads?: ExpenseHeadUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ExpenseHeadUpsertWithoutOpexEntriesInput = {
    update: XOR<ExpenseHeadUpdateWithoutOpexEntriesInput, ExpenseHeadUncheckedUpdateWithoutOpexEntriesInput>
    create: XOR<ExpenseHeadCreateWithoutOpexEntriesInput, ExpenseHeadUncheckedCreateWithoutOpexEntriesInput>
    where?: ExpenseHeadWhereInput
  }

  export type ExpenseHeadUpdateToOneWithWhereWithoutOpexEntriesInput = {
    where?: ExpenseHeadWhereInput
    data: XOR<ExpenseHeadUpdateWithoutOpexEntriesInput, ExpenseHeadUncheckedUpdateWithoutOpexEntriesInput>
  }

  export type ExpenseHeadUpdateWithoutOpexEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutExpenseHeadsNestedInput
  }

  export type ExpenseHeadUncheckedUpdateWithoutOpexEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutOpexCreatedInput = {
    update: XOR<UserUpdateWithoutOpexCreatedInput, UserUncheckedUpdateWithoutOpexCreatedInput>
    create: XOR<UserCreateWithoutOpexCreatedInput, UserUncheckedCreateWithoutOpexCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOpexCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOpexCreatedInput, UserUncheckedUpdateWithoutOpexCreatedInput>
  }

  export type UserUpdateWithoutOpexCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUpdateManyWithoutCreatedByNestedInput
    drillingCreated?: DrillingEntryUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOpexCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUncheckedUpdateManyWithoutCreatedByNestedInput
    drillingCreated?: DrillingEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SiteCreateWithoutDceEntriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutSitesCreatedInput
    drillingEntries?: DrillingEntryCreateNestedManyWithoutSiteInput
    opexEntries?: OpexEntryCreateNestedManyWithoutSiteInput
    advanceEntries?: AdvanceEntryCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutDceEntriesInput = {
    id?: string
    name: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    drillingEntries?: DrillingEntryUncheckedCreateNestedManyWithoutSiteInput
    opexEntries?: OpexEntryUncheckedCreateNestedManyWithoutSiteInput
    advanceEntries?: AdvanceEntryUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutDceEntriesInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutDceEntriesInput, SiteUncheckedCreateWithoutDceEntriesInput>
  }

  export type UserCreateWithoutDceCreatedInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteCreateNestedManyWithoutCreatedByInput
    drillingCreated?: DrillingEntryCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDceCreatedInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteUncheckedCreateNestedManyWithoutCreatedByInput
    drillingCreated?: DrillingEntryUncheckedCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryUncheckedCreateNestedManyWithoutCreatedByInput
    advanceCreated?: AdvanceEntryUncheckedCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDceCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDceCreatedInput, UserUncheckedCreateWithoutDceCreatedInput>
  }

  export type SiteUpsertWithoutDceEntriesInput = {
    update: XOR<SiteUpdateWithoutDceEntriesInput, SiteUncheckedUpdateWithoutDceEntriesInput>
    create: XOR<SiteCreateWithoutDceEntriesInput, SiteUncheckedCreateWithoutDceEntriesInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutDceEntriesInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutDceEntriesInput, SiteUncheckedUpdateWithoutDceEntriesInput>
  }

  export type SiteUpdateWithoutDceEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutSitesCreatedNestedInput
    drillingEntries?: DrillingEntryUpdateManyWithoutSiteNestedInput
    opexEntries?: OpexEntryUpdateManyWithoutSiteNestedInput
    advanceEntries?: AdvanceEntryUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutDceEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillingEntries?: DrillingEntryUncheckedUpdateManyWithoutSiteNestedInput
    opexEntries?: OpexEntryUncheckedUpdateManyWithoutSiteNestedInput
    advanceEntries?: AdvanceEntryUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type UserUpsertWithoutDceCreatedInput = {
    update: XOR<UserUpdateWithoutDceCreatedInput, UserUncheckedUpdateWithoutDceCreatedInput>
    create: XOR<UserCreateWithoutDceCreatedInput, UserUncheckedCreateWithoutDceCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDceCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDceCreatedInput, UserUncheckedUpdateWithoutDceCreatedInput>
  }

  export type UserUpdateWithoutDceCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUpdateManyWithoutCreatedByNestedInput
    drillingCreated?: DrillingEntryUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDceCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUncheckedUpdateManyWithoutCreatedByNestedInput
    drillingCreated?: DrillingEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    advanceCreated?: AdvanceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SiteCreateWithoutAdvanceEntriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutSitesCreatedInput
    drillingEntries?: DrillingEntryCreateNestedManyWithoutSiteInput
    opexEntries?: OpexEntryCreateNestedManyWithoutSiteInput
    dceEntries?: DceEntryCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutAdvanceEntriesInput = {
    id?: string
    name: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    drillingEntries?: DrillingEntryUncheckedCreateNestedManyWithoutSiteInput
    opexEntries?: OpexEntryUncheckedCreateNestedManyWithoutSiteInput
    dceEntries?: DceEntryUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutAdvanceEntriesInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutAdvanceEntriesInput, SiteUncheckedCreateWithoutAdvanceEntriesInput>
  }

  export type UserCreateWithoutAdvanceCreatedInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteCreateNestedManyWithoutCreatedByInput
    drillingCreated?: DrillingEntryCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdvanceCreatedInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sitesCreated?: SiteUncheckedCreateNestedManyWithoutCreatedByInput
    drillingCreated?: DrillingEntryUncheckedCreateNestedManyWithoutCreatedByInput
    opexCreated?: OpexEntryUncheckedCreateNestedManyWithoutCreatedByInput
    dceCreated?: DceEntryUncheckedCreateNestedManyWithoutCreatedByInput
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdvanceCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdvanceCreatedInput, UserUncheckedCreateWithoutAdvanceCreatedInput>
  }

  export type SiteUpsertWithoutAdvanceEntriesInput = {
    update: XOR<SiteUpdateWithoutAdvanceEntriesInput, SiteUncheckedUpdateWithoutAdvanceEntriesInput>
    create: XOR<SiteCreateWithoutAdvanceEntriesInput, SiteUncheckedCreateWithoutAdvanceEntriesInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutAdvanceEntriesInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutAdvanceEntriesInput, SiteUncheckedUpdateWithoutAdvanceEntriesInput>
  }

  export type SiteUpdateWithoutAdvanceEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutSitesCreatedNestedInput
    drillingEntries?: DrillingEntryUpdateManyWithoutSiteNestedInput
    opexEntries?: OpexEntryUpdateManyWithoutSiteNestedInput
    dceEntries?: DceEntryUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutAdvanceEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillingEntries?: DrillingEntryUncheckedUpdateManyWithoutSiteNestedInput
    opexEntries?: OpexEntryUncheckedUpdateManyWithoutSiteNestedInput
    dceEntries?: DceEntryUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type UserUpsertWithoutAdvanceCreatedInput = {
    update: XOR<UserUpdateWithoutAdvanceCreatedInput, UserUncheckedUpdateWithoutAdvanceCreatedInput>
    create: XOR<UserCreateWithoutAdvanceCreatedInput, UserUncheckedCreateWithoutAdvanceCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdvanceCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdvanceCreatedInput, UserUncheckedUpdateWithoutAdvanceCreatedInput>
  }

  export type UserUpdateWithoutAdvanceCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUpdateManyWithoutCreatedByNestedInput
    drillingCreated?: DrillingEntryUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdvanceCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sitesCreated?: SiteUncheckedUpdateManyWithoutCreatedByNestedInput
    drillingCreated?: DrillingEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    opexCreated?: OpexEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    dceCreated?: DceEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SiteCreateManyCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrillingEntryCreateManyCreatedByInput = {
    id?: string
    siteId: string
    date: Date | string
    meters: Decimal | DecimalJsLike | number | string
    boreholeNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpexEntryCreateManyCreatedByInput = {
    id?: string
    siteId: string
    categoryId: string
    expenseHeadId: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DceEntryCreateManyCreatedByInput = {
    id?: string
    siteId: string
    costHead: string
    perDayCost: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    status?: $Enums.DceStatus
    remarks?: string
    pausedAt?: Date | string | null
    stoppedAt?: Date | string | null
    totalPausedDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvanceEntryCreateManyCreatedByInput = {
    id?: string
    siteId: string
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    remarks?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshSessionCreateManyUserInput = {
    id?: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedById?: string | null
  }

  export type SiteUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillingEntries?: DrillingEntryUpdateManyWithoutSiteNestedInput
    opexEntries?: OpexEntryUpdateManyWithoutSiteNestedInput
    dceEntries?: DceEntryUpdateManyWithoutSiteNestedInput
    advanceEntries?: AdvanceEntryUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drillingEntries?: DrillingEntryUncheckedUpdateManyWithoutSiteNestedInput
    opexEntries?: OpexEntryUncheckedUpdateManyWithoutSiteNestedInput
    dceEntries?: DceEntryUncheckedUpdateManyWithoutSiteNestedInput
    advanceEntries?: AdvanceEntryUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrillingEntryUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boreholeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutDrillingEntriesNestedInput
  }

  export type DrillingEntryUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boreholeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrillingEntryUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boreholeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpexEntryUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutOpexEntriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutOpexEntriesNestedInput
    expenseHead?: ExpenseHeadUpdateOneRequiredWithoutOpexEntriesNestedInput
  }

  export type OpexEntryUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    expenseHeadId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpexEntryUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    expenseHeadId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DceEntryUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    costHead?: StringFieldUpdateOperationsInput | string
    perDayCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDceStatusFieldUpdateOperationsInput | $Enums.DceStatus
    remarks?: StringFieldUpdateOperationsInput | string
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stoppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPausedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutDceEntriesNestedInput
  }

  export type DceEntryUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    costHead?: StringFieldUpdateOperationsInput | string
    perDayCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDceStatusFieldUpdateOperationsInput | $Enums.DceStatus
    remarks?: StringFieldUpdateOperationsInput | string
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stoppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPausedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DceEntryUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    costHead?: StringFieldUpdateOperationsInput | string
    perDayCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDceStatusFieldUpdateOperationsInput | $Enums.DceStatus
    remarks?: StringFieldUpdateOperationsInput | string
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stoppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPausedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvanceEntryUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutAdvanceEntriesNestedInput
  }

  export type AdvanceEntryUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvanceEntryUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DrillingEntryCreateManySiteInput = {
    id?: string
    date: Date | string
    meters: Decimal | DecimalJsLike | number | string
    boreholeNumber?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpexEntryCreateManySiteInput = {
    id?: string
    categoryId: string
    expenseHeadId: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DceEntryCreateManySiteInput = {
    id?: string
    costHead: string
    perDayCost: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    status?: $Enums.DceStatus
    remarks?: string
    pausedAt?: Date | string | null
    stoppedAt?: Date | string | null
    totalPausedDays?: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvanceEntryCreateManySiteInput = {
    id?: string
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrillingEntryUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boreholeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutDrillingCreatedNestedInput
  }

  export type DrillingEntryUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boreholeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrillingEntryUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    boreholeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpexEntryUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutOpexEntriesNestedInput
    expenseHead?: ExpenseHeadUpdateOneRequiredWithoutOpexEntriesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutOpexCreatedNestedInput
  }

  export type OpexEntryUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    expenseHeadId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpexEntryUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    expenseHeadId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DceEntryUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    costHead?: StringFieldUpdateOperationsInput | string
    perDayCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDceStatusFieldUpdateOperationsInput | $Enums.DceStatus
    remarks?: StringFieldUpdateOperationsInput | string
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stoppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPausedDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutDceCreatedNestedInput
  }

  export type DceEntryUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    costHead?: StringFieldUpdateOperationsInput | string
    perDayCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDceStatusFieldUpdateOperationsInput | $Enums.DceStatus
    remarks?: StringFieldUpdateOperationsInput | string
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stoppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPausedDays?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DceEntryUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    costHead?: StringFieldUpdateOperationsInput | string
    perDayCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDceStatusFieldUpdateOperationsInput | $Enums.DceStatus
    remarks?: StringFieldUpdateOperationsInput | string
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stoppedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalPausedDays?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvanceEntryUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutAdvanceCreatedNestedInput
  }

  export type AdvanceEntryUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvanceEntryUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseHeadCreateManyCategoryInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpexEntryCreateManyCategoryInput = {
    id?: string
    siteId: string
    expenseHeadId: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseHeadUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opexEntries?: OpexEntryUpdateManyWithoutExpenseHeadNestedInput
  }

  export type ExpenseHeadUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opexEntries?: OpexEntryUncheckedUpdateManyWithoutExpenseHeadNestedInput
  }

  export type ExpenseHeadUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpexEntryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutOpexEntriesNestedInput
    expenseHead?: ExpenseHeadUpdateOneRequiredWithoutOpexEntriesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutOpexCreatedNestedInput
  }

  export type OpexEntryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    expenseHeadId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpexEntryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    expenseHeadId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpexEntryCreateManyExpenseHeadInput = {
    id?: string
    siteId: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    remarks?: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpexEntryUpdateWithoutExpenseHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutOpexEntriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutOpexEntriesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutOpexCreatedNestedInput
  }

  export type OpexEntryUncheckedUpdateWithoutExpenseHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpexEntryUncheckedUpdateManyWithoutExpenseHeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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