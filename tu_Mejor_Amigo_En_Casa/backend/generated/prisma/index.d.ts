
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
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model Razas
 * 
 */
export type Razas = $Result.DefaultSelection<Prisma.$RazasPayload>
/**
 * Model Categorias
 * 
 */
export type Categorias = $Result.DefaultSelection<Prisma.$CategoriasPayload>
/**
 * Model Genero
 * 
 */
export type Genero = $Result.DefaultSelection<Prisma.$GeneroPayload>
/**
 * Model Mascotas
 * 
 */
export type Mascotas = $Result.DefaultSelection<Prisma.$MascotasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Estado: {
  ADOPTADO: 'ADOPTADO',
  PENDIENTE: 'PENDIENTE'
};

export type Estado = (typeof Estado)[keyof typeof Estado]

}

export type Estado = $Enums.Estado

export const Estado: typeof $Enums.Estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuarios.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuarios.findMany()
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
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.razas`: Exposes CRUD operations for the **Razas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Razas
    * const razas = await prisma.razas.findMany()
    * ```
    */
  get razas(): Prisma.RazasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorias`: Exposes CRUD operations for the **Categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.CategoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genero`: Exposes CRUD operations for the **Genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.genero.findMany()
    * ```
    */
  get genero(): Prisma.GeneroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mascotas`: Exposes CRUD operations for the **Mascotas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mascotas
    * const mascotas = await prisma.mascotas.findMany()
    * ```
    */
  get mascotas(): Prisma.MascotasDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Usuarios: 'Usuarios',
    Razas: 'Razas',
    Categorias: 'Categorias',
    Genero: 'Genero',
    Mascotas: 'Mascotas'
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
      modelProps: "usuarios" | "razas" | "categorias" | "genero" | "mascotas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      Razas: {
        payload: Prisma.$RazasPayload<ExtArgs>
        fields: Prisma.RazasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RazasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RazasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazasPayload>
          }
          findFirst: {
            args: Prisma.RazasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RazasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazasPayload>
          }
          findMany: {
            args: Prisma.RazasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazasPayload>[]
          }
          create: {
            args: Prisma.RazasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazasPayload>
          }
          createMany: {
            args: Prisma.RazasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RazasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazasPayload>
          }
          update: {
            args: Prisma.RazasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazasPayload>
          }
          deleteMany: {
            args: Prisma.RazasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RazasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RazasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazasPayload>
          }
          aggregate: {
            args: Prisma.RazasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRazas>
          }
          groupBy: {
            args: Prisma.RazasGroupByArgs<ExtArgs>
            result: $Utils.Optional<RazasGroupByOutputType>[]
          }
          count: {
            args: Prisma.RazasCountArgs<ExtArgs>
            result: $Utils.Optional<RazasCountAggregateOutputType> | number
          }
        }
      }
      Categorias: {
        payload: Prisma.$CategoriasPayload<ExtArgs>
        fields: Prisma.CategoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          findFirst: {
            args: Prisma.CategoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          findMany: {
            args: Prisma.CategoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>[]
          }
          create: {
            args: Prisma.CategoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          createMany: {
            args: Prisma.CategoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          update: {
            args: Prisma.CategoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          deleteMany: {
            args: Prisma.CategoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.CategoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      Genero: {
        payload: Prisma.$GeneroPayload<ExtArgs>
        fields: Prisma.GeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findFirst: {
            args: Prisma.GeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findMany: {
            args: Prisma.GeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          create: {
            args: Prisma.GeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          createMany: {
            args: Prisma.GeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          update: {
            args: Prisma.GeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          deleteMany: {
            args: Prisma.GeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          aggregate: {
            args: Prisma.GeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenero>
          }
          groupBy: {
            args: Prisma.GeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneroCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroCountAggregateOutputType> | number
          }
        }
      }
      Mascotas: {
        payload: Prisma.$MascotasPayload<ExtArgs>
        fields: Prisma.MascotasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MascotasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MascotasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          findFirst: {
            args: Prisma.MascotasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MascotasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          findMany: {
            args: Prisma.MascotasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>[]
          }
          create: {
            args: Prisma.MascotasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          createMany: {
            args: Prisma.MascotasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MascotasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          update: {
            args: Prisma.MascotasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          deleteMany: {
            args: Prisma.MascotasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MascotasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MascotasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          aggregate: {
            args: Prisma.MascotasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMascotas>
          }
          groupBy: {
            args: Prisma.MascotasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MascotasGroupByOutputType>[]
          }
          count: {
            args: Prisma.MascotasCountArgs<ExtArgs>
            result: $Utils.Optional<MascotasCountAggregateOutputType> | number
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
    usuarios?: UsuariosOmit
    razas?: RazasOmit
    categorias?: CategoriasOmit
    genero?: GeneroOmit
    mascotas?: MascotasOmit
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
   * Count Type RazasCountOutputType
   */

  export type RazasCountOutputType = {
    Mascotas: number
  }

  export type RazasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mascotas?: boolean | RazasCountOutputTypeCountMascotasArgs
  }

  // Custom InputTypes
  /**
   * RazasCountOutputType without action
   */
  export type RazasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazasCountOutputType
     */
    select?: RazasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RazasCountOutputType without action
   */
  export type RazasCountOutputTypeCountMascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotasWhereInput
  }


  /**
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    Mascotas: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mascotas?: boolean | CategoriasCountOutputTypeCountMascotasArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountMascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotasWhereInput
  }


  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    Mascotas: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mascotas?: boolean | GeneroCountOutputTypeCountMascotasArgs
  }

  // Custom InputTypes
  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroCountOutputType
     */
    select?: GeneroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountMascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    idusuariosGevt: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    idusuariosGevt: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    idusuariosGevt: number | null
    Nombre_completoGevt: string | null
    CorreoGevt: string | null
    PasswordGevt: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    idusuariosGevt: number | null
    Nombre_completoGevt: string | null
    CorreoGevt: string | null
    PasswordGevt: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    idusuariosGevt: number
    Nombre_completoGevt: number
    CorreoGevt: number
    PasswordGevt: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    idusuariosGevt?: true
  }

  export type UsuariosSumAggregateInputType = {
    idusuariosGevt?: true
  }

  export type UsuariosMinAggregateInputType = {
    idusuariosGevt?: true
    Nombre_completoGevt?: true
    CorreoGevt?: true
    PasswordGevt?: true
  }

  export type UsuariosMaxAggregateInputType = {
    idusuariosGevt?: true
    Nombre_completoGevt?: true
    CorreoGevt?: true
    PasswordGevt?: true
  }

  export type UsuariosCountAggregateInputType = {
    idusuariosGevt?: true
    Nombre_completoGevt?: true
    CorreoGevt?: true
    PasswordGevt?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    idusuariosGevt: number
    Nombre_completoGevt: string
    CorreoGevt: string
    PasswordGevt: string
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idusuariosGevt?: boolean
    Nombre_completoGevt?: boolean
    CorreoGevt?: boolean
    PasswordGevt?: boolean
  }, ExtArgs["result"]["usuarios"]>



  export type UsuariosSelectScalar = {
    idusuariosGevt?: boolean
    Nombre_completoGevt?: boolean
    CorreoGevt?: boolean
    PasswordGevt?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idusuariosGevt" | "Nombre_completoGevt" | "CorreoGevt" | "PasswordGevt", ExtArgs["result"]["usuarios"]>

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idusuariosGevt: number
      Nombre_completoGevt: string
      CorreoGevt: string
      PasswordGevt: string
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `idusuariosGevt`
     * const usuariosWithIdusuariosGevtOnly = await prisma.usuarios.findMany({ select: { idusuariosGevt: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
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
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly idusuariosGevt: FieldRef<"Usuarios", 'Int'>
    readonly Nombre_completoGevt: FieldRef<"Usuarios", 'String'>
    readonly CorreoGevt: FieldRef<"Usuarios", 'String'>
    readonly PasswordGevt: FieldRef<"Usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
  }


  /**
   * Model Razas
   */

  export type AggregateRazas = {
    _count: RazasCountAggregateOutputType | null
    _avg: RazasAvgAggregateOutputType | null
    _sum: RazasSumAggregateOutputType | null
    _min: RazasMinAggregateOutputType | null
    _max: RazasMaxAggregateOutputType | null
  }

  export type RazasAvgAggregateOutputType = {
    idrazasGevt: number | null
  }

  export type RazasSumAggregateOutputType = {
    idrazasGevt: number | null
  }

  export type RazasMinAggregateOutputType = {
    idrazasGevt: number | null
    NombreGevt: string | null
  }

  export type RazasMaxAggregateOutputType = {
    idrazasGevt: number | null
    NombreGevt: string | null
  }

  export type RazasCountAggregateOutputType = {
    idrazasGevt: number
    NombreGevt: number
    _all: number
  }


  export type RazasAvgAggregateInputType = {
    idrazasGevt?: true
  }

  export type RazasSumAggregateInputType = {
    idrazasGevt?: true
  }

  export type RazasMinAggregateInputType = {
    idrazasGevt?: true
    NombreGevt?: true
  }

  export type RazasMaxAggregateInputType = {
    idrazasGevt?: true
    NombreGevt?: true
  }

  export type RazasCountAggregateInputType = {
    idrazasGevt?: true
    NombreGevt?: true
    _all?: true
  }

  export type RazasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Razas to aggregate.
     */
    where?: RazasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Razas to fetch.
     */
    orderBy?: RazasOrderByWithRelationInput | RazasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RazasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Razas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Razas
    **/
    _count?: true | RazasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RazasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RazasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RazasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RazasMaxAggregateInputType
  }

  export type GetRazasAggregateType<T extends RazasAggregateArgs> = {
        [P in keyof T & keyof AggregateRazas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRazas[P]>
      : GetScalarType<T[P], AggregateRazas[P]>
  }




  export type RazasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RazasWhereInput
    orderBy?: RazasOrderByWithAggregationInput | RazasOrderByWithAggregationInput[]
    by: RazasScalarFieldEnum[] | RazasScalarFieldEnum
    having?: RazasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RazasCountAggregateInputType | true
    _avg?: RazasAvgAggregateInputType
    _sum?: RazasSumAggregateInputType
    _min?: RazasMinAggregateInputType
    _max?: RazasMaxAggregateInputType
  }

  export type RazasGroupByOutputType = {
    idrazasGevt: number
    NombreGevt: string
    _count: RazasCountAggregateOutputType | null
    _avg: RazasAvgAggregateOutputType | null
    _sum: RazasSumAggregateOutputType | null
    _min: RazasMinAggregateOutputType | null
    _max: RazasMaxAggregateOutputType | null
  }

  type GetRazasGroupByPayload<T extends RazasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RazasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RazasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RazasGroupByOutputType[P]>
            : GetScalarType<T[P], RazasGroupByOutputType[P]>
        }
      >
    >


  export type RazasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idrazasGevt?: boolean
    NombreGevt?: boolean
    Mascotas?: boolean | Razas$MascotasArgs<ExtArgs>
    _count?: boolean | RazasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["razas"]>



  export type RazasSelectScalar = {
    idrazasGevt?: boolean
    NombreGevt?: boolean
  }

  export type RazasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idrazasGevt" | "NombreGevt", ExtArgs["result"]["razas"]>
  export type RazasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mascotas?: boolean | Razas$MascotasArgs<ExtArgs>
    _count?: boolean | RazasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RazasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Razas"
    objects: {
      Mascotas: Prisma.$MascotasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idrazasGevt: number
      NombreGevt: string
    }, ExtArgs["result"]["razas"]>
    composites: {}
  }

  type RazasGetPayload<S extends boolean | null | undefined | RazasDefaultArgs> = $Result.GetResult<Prisma.$RazasPayload, S>

  type RazasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RazasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RazasCountAggregateInputType | true
    }

  export interface RazasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Razas'], meta: { name: 'Razas' } }
    /**
     * Find zero or one Razas that matches the filter.
     * @param {RazasFindUniqueArgs} args - Arguments to find a Razas
     * @example
     * // Get one Razas
     * const razas = await prisma.razas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RazasFindUniqueArgs>(args: SelectSubset<T, RazasFindUniqueArgs<ExtArgs>>): Prisma__RazasClient<$Result.GetResult<Prisma.$RazasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Razas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RazasFindUniqueOrThrowArgs} args - Arguments to find a Razas
     * @example
     * // Get one Razas
     * const razas = await prisma.razas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RazasFindUniqueOrThrowArgs>(args: SelectSubset<T, RazasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RazasClient<$Result.GetResult<Prisma.$RazasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Razas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazasFindFirstArgs} args - Arguments to find a Razas
     * @example
     * // Get one Razas
     * const razas = await prisma.razas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RazasFindFirstArgs>(args?: SelectSubset<T, RazasFindFirstArgs<ExtArgs>>): Prisma__RazasClient<$Result.GetResult<Prisma.$RazasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Razas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazasFindFirstOrThrowArgs} args - Arguments to find a Razas
     * @example
     * // Get one Razas
     * const razas = await prisma.razas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RazasFindFirstOrThrowArgs>(args?: SelectSubset<T, RazasFindFirstOrThrowArgs<ExtArgs>>): Prisma__RazasClient<$Result.GetResult<Prisma.$RazasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Razas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Razas
     * const razas = await prisma.razas.findMany()
     * 
     * // Get first 10 Razas
     * const razas = await prisma.razas.findMany({ take: 10 })
     * 
     * // Only select the `idrazasGevt`
     * const razasWithIdrazasGevtOnly = await prisma.razas.findMany({ select: { idrazasGevt: true } })
     * 
     */
    findMany<T extends RazasFindManyArgs>(args?: SelectSubset<T, RazasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RazasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Razas.
     * @param {RazasCreateArgs} args - Arguments to create a Razas.
     * @example
     * // Create one Razas
     * const Razas = await prisma.razas.create({
     *   data: {
     *     // ... data to create a Razas
     *   }
     * })
     * 
     */
    create<T extends RazasCreateArgs>(args: SelectSubset<T, RazasCreateArgs<ExtArgs>>): Prisma__RazasClient<$Result.GetResult<Prisma.$RazasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Razas.
     * @param {RazasCreateManyArgs} args - Arguments to create many Razas.
     * @example
     * // Create many Razas
     * const razas = await prisma.razas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RazasCreateManyArgs>(args?: SelectSubset<T, RazasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Razas.
     * @param {RazasDeleteArgs} args - Arguments to delete one Razas.
     * @example
     * // Delete one Razas
     * const Razas = await prisma.razas.delete({
     *   where: {
     *     // ... filter to delete one Razas
     *   }
     * })
     * 
     */
    delete<T extends RazasDeleteArgs>(args: SelectSubset<T, RazasDeleteArgs<ExtArgs>>): Prisma__RazasClient<$Result.GetResult<Prisma.$RazasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Razas.
     * @param {RazasUpdateArgs} args - Arguments to update one Razas.
     * @example
     * // Update one Razas
     * const razas = await prisma.razas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RazasUpdateArgs>(args: SelectSubset<T, RazasUpdateArgs<ExtArgs>>): Prisma__RazasClient<$Result.GetResult<Prisma.$RazasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Razas.
     * @param {RazasDeleteManyArgs} args - Arguments to filter Razas to delete.
     * @example
     * // Delete a few Razas
     * const { count } = await prisma.razas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RazasDeleteManyArgs>(args?: SelectSubset<T, RazasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Razas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Razas
     * const razas = await prisma.razas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RazasUpdateManyArgs>(args: SelectSubset<T, RazasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Razas.
     * @param {RazasUpsertArgs} args - Arguments to update or create a Razas.
     * @example
     * // Update or create a Razas
     * const razas = await prisma.razas.upsert({
     *   create: {
     *     // ... data to create a Razas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Razas we want to update
     *   }
     * })
     */
    upsert<T extends RazasUpsertArgs>(args: SelectSubset<T, RazasUpsertArgs<ExtArgs>>): Prisma__RazasClient<$Result.GetResult<Prisma.$RazasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Razas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazasCountArgs} args - Arguments to filter Razas to count.
     * @example
     * // Count the number of Razas
     * const count = await prisma.razas.count({
     *   where: {
     *     // ... the filter for the Razas we want to count
     *   }
     * })
    **/
    count<T extends RazasCountArgs>(
      args?: Subset<T, RazasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RazasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Razas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RazasAggregateArgs>(args: Subset<T, RazasAggregateArgs>): Prisma.PrismaPromise<GetRazasAggregateType<T>>

    /**
     * Group by Razas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazasGroupByArgs} args - Group by arguments.
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
      T extends RazasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RazasGroupByArgs['orderBy'] }
        : { orderBy?: RazasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RazasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRazasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Razas model
   */
  readonly fields: RazasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Razas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RazasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Mascotas<T extends Razas$MascotasArgs<ExtArgs> = {}>(args?: Subset<T, Razas$MascotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Razas model
   */
  interface RazasFieldRefs {
    readonly idrazasGevt: FieldRef<"Razas", 'Int'>
    readonly NombreGevt: FieldRef<"Razas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Razas findUnique
   */
  export type RazasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Razas
     */
    select?: RazasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Razas
     */
    omit?: RazasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazasInclude<ExtArgs> | null
    /**
     * Filter, which Razas to fetch.
     */
    where: RazasWhereUniqueInput
  }

  /**
   * Razas findUniqueOrThrow
   */
  export type RazasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Razas
     */
    select?: RazasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Razas
     */
    omit?: RazasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazasInclude<ExtArgs> | null
    /**
     * Filter, which Razas to fetch.
     */
    where: RazasWhereUniqueInput
  }

  /**
   * Razas findFirst
   */
  export type RazasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Razas
     */
    select?: RazasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Razas
     */
    omit?: RazasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazasInclude<ExtArgs> | null
    /**
     * Filter, which Razas to fetch.
     */
    where?: RazasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Razas to fetch.
     */
    orderBy?: RazasOrderByWithRelationInput | RazasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Razas.
     */
    cursor?: RazasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Razas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Razas.
     */
    distinct?: RazasScalarFieldEnum | RazasScalarFieldEnum[]
  }

  /**
   * Razas findFirstOrThrow
   */
  export type RazasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Razas
     */
    select?: RazasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Razas
     */
    omit?: RazasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazasInclude<ExtArgs> | null
    /**
     * Filter, which Razas to fetch.
     */
    where?: RazasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Razas to fetch.
     */
    orderBy?: RazasOrderByWithRelationInput | RazasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Razas.
     */
    cursor?: RazasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Razas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Razas.
     */
    distinct?: RazasScalarFieldEnum | RazasScalarFieldEnum[]
  }

  /**
   * Razas findMany
   */
  export type RazasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Razas
     */
    select?: RazasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Razas
     */
    omit?: RazasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazasInclude<ExtArgs> | null
    /**
     * Filter, which Razas to fetch.
     */
    where?: RazasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Razas to fetch.
     */
    orderBy?: RazasOrderByWithRelationInput | RazasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Razas.
     */
    cursor?: RazasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Razas.
     */
    skip?: number
    distinct?: RazasScalarFieldEnum | RazasScalarFieldEnum[]
  }

  /**
   * Razas create
   */
  export type RazasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Razas
     */
    select?: RazasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Razas
     */
    omit?: RazasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazasInclude<ExtArgs> | null
    /**
     * The data needed to create a Razas.
     */
    data: XOR<RazasCreateInput, RazasUncheckedCreateInput>
  }

  /**
   * Razas createMany
   */
  export type RazasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Razas.
     */
    data: RazasCreateManyInput | RazasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Razas update
   */
  export type RazasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Razas
     */
    select?: RazasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Razas
     */
    omit?: RazasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazasInclude<ExtArgs> | null
    /**
     * The data needed to update a Razas.
     */
    data: XOR<RazasUpdateInput, RazasUncheckedUpdateInput>
    /**
     * Choose, which Razas to update.
     */
    where: RazasWhereUniqueInput
  }

  /**
   * Razas updateMany
   */
  export type RazasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Razas.
     */
    data: XOR<RazasUpdateManyMutationInput, RazasUncheckedUpdateManyInput>
    /**
     * Filter which Razas to update
     */
    where?: RazasWhereInput
    /**
     * Limit how many Razas to update.
     */
    limit?: number
  }

  /**
   * Razas upsert
   */
  export type RazasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Razas
     */
    select?: RazasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Razas
     */
    omit?: RazasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazasInclude<ExtArgs> | null
    /**
     * The filter to search for the Razas to update in case it exists.
     */
    where: RazasWhereUniqueInput
    /**
     * In case the Razas found by the `where` argument doesn't exist, create a new Razas with this data.
     */
    create: XOR<RazasCreateInput, RazasUncheckedCreateInput>
    /**
     * In case the Razas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RazasUpdateInput, RazasUncheckedUpdateInput>
  }

  /**
   * Razas delete
   */
  export type RazasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Razas
     */
    select?: RazasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Razas
     */
    omit?: RazasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazasInclude<ExtArgs> | null
    /**
     * Filter which Razas to delete.
     */
    where: RazasWhereUniqueInput
  }

  /**
   * Razas deleteMany
   */
  export type RazasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Razas to delete
     */
    where?: RazasWhereInput
    /**
     * Limit how many Razas to delete.
     */
    limit?: number
  }

  /**
   * Razas.Mascotas
   */
  export type Razas$MascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    where?: MascotasWhereInput
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    cursor?: MascotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Razas without action
   */
  export type RazasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Razas
     */
    select?: RazasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Razas
     */
    omit?: RazasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazasInclude<ExtArgs> | null
  }


  /**
   * Model Categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    idcategoriasGevt: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    idcategoriasGevt: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    idcategoriasGevt: number | null
    NombreGevt: string | null
  }

  export type CategoriasMaxAggregateOutputType = {
    idcategoriasGevt: number | null
    NombreGevt: string | null
  }

  export type CategoriasCountAggregateOutputType = {
    idcategoriasGevt: number
    NombreGevt: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    idcategoriasGevt?: true
  }

  export type CategoriasSumAggregateInputType = {
    idcategoriasGevt?: true
  }

  export type CategoriasMinAggregateInputType = {
    idcategoriasGevt?: true
    NombreGevt?: true
  }

  export type CategoriasMaxAggregateInputType = {
    idcategoriasGevt?: true
    NombreGevt?: true
  }

  export type CategoriasCountAggregateInputType = {
    idcategoriasGevt?: true
    NombreGevt?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to aggregate.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type CategoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriasWhereInput
    orderBy?: CategoriasOrderByWithAggregationInput | CategoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: CategoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    idcategoriasGevt: number
    NombreGevt: string
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends CategoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type CategoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcategoriasGevt?: boolean
    NombreGevt?: boolean
    Mascotas?: boolean | Categorias$MascotasArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>



  export type CategoriasSelectScalar = {
    idcategoriasGevt?: boolean
    NombreGevt?: boolean
  }

  export type CategoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idcategoriasGevt" | "NombreGevt", ExtArgs["result"]["categorias"]>
  export type CategoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mascotas?: boolean | Categorias$MascotasArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorias"
    objects: {
      Mascotas: Prisma.$MascotasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idcategoriasGevt: number
      NombreGevt: string
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type CategoriasGetPayload<S extends boolean | null | undefined | CategoriasDefaultArgs> = $Result.GetResult<Prisma.$CategoriasPayload, S>

  type CategoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface CategoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorias'], meta: { name: 'Categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {CategoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriasFindUniqueArgs>(args: SelectSubset<T, CategoriasFindUniqueArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriasFindFirstArgs>(args?: SelectSubset<T, CategoriasFindFirstArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `idcategoriasGevt`
     * const categoriasWithIdcategoriasGevtOnly = await prisma.categorias.findMany({ select: { idcategoriasGevt: true } })
     * 
     */
    findMany<T extends CategoriasFindManyArgs>(args?: SelectSubset<T, CategoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {CategoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends CategoriasCreateArgs>(args: SelectSubset<T, CategoriasCreateArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriasCreateManyArgs>(args?: SelectSubset<T, CategoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorias.
     * @param {CategoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends CategoriasDeleteArgs>(args: SelectSubset<T, CategoriasDeleteArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {CategoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriasUpdateArgs>(args: SelectSubset<T, CategoriasUpdateArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriasDeleteManyArgs>(args?: SelectSubset<T, CategoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriasUpdateManyArgs>(args: SelectSubset<T, CategoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorias.
     * @param {CategoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends CategoriasUpsertArgs>(args: SelectSubset<T, CategoriasUpsertArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriasCountArgs>(
      args?: Subset<T, CategoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasGroupByArgs} args - Group by arguments.
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
      T extends CategoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriasGroupByArgs['orderBy'] }
        : { orderBy?: CategoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorias model
   */
  readonly fields: CategoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Mascotas<T extends Categorias$MascotasArgs<ExtArgs> = {}>(args?: Subset<T, Categorias$MascotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categorias model
   */
  interface CategoriasFieldRefs {
    readonly idcategoriasGevt: FieldRef<"Categorias", 'Int'>
    readonly NombreGevt: FieldRef<"Categorias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categorias findUnique
   */
  export type CategoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias findUniqueOrThrow
   */
  export type CategoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias findFirst
   */
  export type CategoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias findFirstOrThrow
   */
  export type CategoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias findMany
   */
  export type CategoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias create
   */
  export type CategoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorias.
     */
    data: XOR<CategoriasCreateInput, CategoriasUncheckedCreateInput>
  }

  /**
   * Categorias createMany
   */
  export type CategoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriasCreateManyInput | CategoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorias update
   */
  export type CategoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorias.
     */
    data: XOR<CategoriasUpdateInput, CategoriasUncheckedUpdateInput>
    /**
     * Choose, which Categorias to update.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias updateMany
   */
  export type CategoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriasUpdateManyMutationInput, CategoriasUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriasWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categorias upsert
   */
  export type CategoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorias to update in case it exists.
     */
    where: CategoriasWhereUniqueInput
    /**
     * In case the Categorias found by the `where` argument doesn't exist, create a new Categorias with this data.
     */
    create: XOR<CategoriasCreateInput, CategoriasUncheckedCreateInput>
    /**
     * In case the Categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriasUpdateInput, CategoriasUncheckedUpdateInput>
  }

  /**
   * Categorias delete
   */
  export type CategoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter which Categorias to delete.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias deleteMany
   */
  export type CategoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriasWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categorias.Mascotas
   */
  export type Categorias$MascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    where?: MascotasWhereInput
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    cursor?: MascotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Categorias without action
   */
  export type CategoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
  }


  /**
   * Model Genero
   */

  export type AggregateGenero = {
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  export type GeneroAvgAggregateOutputType = {
    idgeneroGevt: number | null
  }

  export type GeneroSumAggregateOutputType = {
    idgeneroGevt: number | null
  }

  export type GeneroMinAggregateOutputType = {
    idgeneroGevt: number | null
    NombreGevt: string | null
  }

  export type GeneroMaxAggregateOutputType = {
    idgeneroGevt: number | null
    NombreGevt: string | null
  }

  export type GeneroCountAggregateOutputType = {
    idgeneroGevt: number
    NombreGevt: number
    _all: number
  }


  export type GeneroAvgAggregateInputType = {
    idgeneroGevt?: true
  }

  export type GeneroSumAggregateInputType = {
    idgeneroGevt?: true
  }

  export type GeneroMinAggregateInputType = {
    idgeneroGevt?: true
    NombreGevt?: true
  }

  export type GeneroMaxAggregateInputType = {
    idgeneroGevt?: true
    NombreGevt?: true
  }

  export type GeneroCountAggregateInputType = {
    idgeneroGevt?: true
    NombreGevt?: true
    _all?: true
  }

  export type GeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genero to aggregate.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generos
    **/
    _count?: true | GeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroMaxAggregateInputType
  }

  export type GetGeneroAggregateType<T extends GeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenero[P]>
      : GetScalarType<T[P], AggregateGenero[P]>
  }




  export type GeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroWhereInput
    orderBy?: GeneroOrderByWithAggregationInput | GeneroOrderByWithAggregationInput[]
    by: GeneroScalarFieldEnum[] | GeneroScalarFieldEnum
    having?: GeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroCountAggregateInputType | true
    _avg?: GeneroAvgAggregateInputType
    _sum?: GeneroSumAggregateInputType
    _min?: GeneroMinAggregateInputType
    _max?: GeneroMaxAggregateInputType
  }

  export type GeneroGroupByOutputType = {
    idgeneroGevt: number
    NombreGevt: string
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  type GetGeneroGroupByPayload<T extends GeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroGroupByOutputType[P]>
        }
      >
    >


  export type GeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idgeneroGevt?: boolean
    NombreGevt?: boolean
    Mascotas?: boolean | Genero$MascotasArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genero"]>



  export type GeneroSelectScalar = {
    idgeneroGevt?: boolean
    NombreGevt?: boolean
  }

  export type GeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idgeneroGevt" | "NombreGevt", ExtArgs["result"]["genero"]>
  export type GeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mascotas?: boolean | Genero$MascotasArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genero"
    objects: {
      Mascotas: Prisma.$MascotasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idgeneroGevt: number
      NombreGevt: string
    }, ExtArgs["result"]["genero"]>
    composites: {}
  }

  type GeneroGetPayload<S extends boolean | null | undefined | GeneroDefaultArgs> = $Result.GetResult<Prisma.$GeneroPayload, S>

  type GeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroCountAggregateInputType | true
    }

  export interface GeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genero'], meta: { name: 'Genero' } }
    /**
     * Find zero or one Genero that matches the filter.
     * @param {GeneroFindUniqueArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneroFindUniqueArgs>(args: SelectSubset<T, GeneroFindUniqueArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneroFindUniqueOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneroFindFirstArgs>(args?: SelectSubset<T, GeneroFindFirstArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.genero.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.genero.findMany({ take: 10 })
     * 
     * // Only select the `idgeneroGevt`
     * const generoWithIdgeneroGevtOnly = await prisma.genero.findMany({ select: { idgeneroGevt: true } })
     * 
     */
    findMany<T extends GeneroFindManyArgs>(args?: SelectSubset<T, GeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genero.
     * @param {GeneroCreateArgs} args - Arguments to create a Genero.
     * @example
     * // Create one Genero
     * const Genero = await prisma.genero.create({
     *   data: {
     *     // ... data to create a Genero
     *   }
     * })
     * 
     */
    create<T extends GeneroCreateArgs>(args: SelectSubset<T, GeneroCreateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generos.
     * @param {GeneroCreateManyArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneroCreateManyArgs>(args?: SelectSubset<T, GeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genero.
     * @param {GeneroDeleteArgs} args - Arguments to delete one Genero.
     * @example
     * // Delete one Genero
     * const Genero = await prisma.genero.delete({
     *   where: {
     *     // ... filter to delete one Genero
     *   }
     * })
     * 
     */
    delete<T extends GeneroDeleteArgs>(args: SelectSubset<T, GeneroDeleteArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genero.
     * @param {GeneroUpdateArgs} args - Arguments to update one Genero.
     * @example
     * // Update one Genero
     * const genero = await prisma.genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneroUpdateArgs>(args: SelectSubset<T, GeneroUpdateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generos.
     * @param {GeneroDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneroDeleteManyArgs>(args?: SelectSubset<T, GeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneroUpdateManyArgs>(args: SelectSubset<T, GeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genero.
     * @param {GeneroUpsertArgs} args - Arguments to update or create a Genero.
     * @example
     * // Update or create a Genero
     * const genero = await prisma.genero.upsert({
     *   create: {
     *     // ... data to create a Genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genero we want to update
     *   }
     * })
     */
    upsert<T extends GeneroUpsertArgs>(args: SelectSubset<T, GeneroUpsertArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.genero.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends GeneroCountArgs>(
      args?: Subset<T, GeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneroAggregateArgs>(args: Subset<T, GeneroAggregateArgs>): Prisma.PrismaPromise<GetGeneroAggregateType<T>>

    /**
     * Group by Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroGroupByArgs} args - Group by arguments.
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
      T extends GeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneroGroupByArgs['orderBy'] }
        : { orderBy?: GeneroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genero model
   */
  readonly fields: GeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Mascotas<T extends Genero$MascotasArgs<ExtArgs> = {}>(args?: Subset<T, Genero$MascotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genero model
   */
  interface GeneroFieldRefs {
    readonly idgeneroGevt: FieldRef<"Genero", 'Int'>
    readonly NombreGevt: FieldRef<"Genero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genero findUnique
   */
  export type GeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findUniqueOrThrow
   */
  export type GeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findFirst
   */
  export type GeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findFirstOrThrow
   */
  export type GeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findMany
   */
  export type GeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Generos to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero create
   */
  export type GeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a Genero.
     */
    data: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
  }

  /**
   * Genero createMany
   */
  export type GeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generos.
     */
    data: GeneroCreateManyInput | GeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genero update
   */
  export type GeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a Genero.
     */
    data: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
    /**
     * Choose, which Genero to update.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero updateMany
   */
  export type GeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generos.
     */
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyInput>
    /**
     * Filter which Generos to update
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to update.
     */
    limit?: number
  }

  /**
   * Genero upsert
   */
  export type GeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the Genero to update in case it exists.
     */
    where: GeneroWhereUniqueInput
    /**
     * In case the Genero found by the `where` argument doesn't exist, create a new Genero with this data.
     */
    create: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
    /**
     * In case the Genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
  }

  /**
   * Genero delete
   */
  export type GeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter which Genero to delete.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero deleteMany
   */
  export type GeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generos to delete
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to delete.
     */
    limit?: number
  }

  /**
   * Genero.Mascotas
   */
  export type Genero$MascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    where?: MascotasWhereInput
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    cursor?: MascotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Genero without action
   */
  export type GeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
  }


  /**
   * Model Mascotas
   */

  export type AggregateMascotas = {
    _count: MascotasCountAggregateOutputType | null
    _avg: MascotasAvgAggregateOutputType | null
    _sum: MascotasSumAggregateOutputType | null
    _min: MascotasMinAggregateOutputType | null
    _max: MascotasMaxAggregateOutputType | null
  }

  export type MascotasAvgAggregateOutputType = {
    idmascotasGevt: number | null
    idrazasGevt: number | null
    idcategoriasGevt: number | null
    idgeneroGevt: number | null
  }

  export type MascotasSumAggregateOutputType = {
    idmascotasGevt: number | null
    idrazasGevt: number | null
    idcategoriasGevt: number | null
    idgeneroGevt: number | null
  }

  export type MascotasMinAggregateOutputType = {
    idmascotasGevt: number | null
    NombreGevt: string | null
    idrazasGevt: number | null
    idcategoriasGevt: number | null
    idgeneroGevt: number | null
    estado: $Enums.Estado | null
  }

  export type MascotasMaxAggregateOutputType = {
    idmascotasGevt: number | null
    NombreGevt: string | null
    idrazasGevt: number | null
    idcategoriasGevt: number | null
    idgeneroGevt: number | null
    estado: $Enums.Estado | null
  }

  export type MascotasCountAggregateOutputType = {
    idmascotasGevt: number
    NombreGevt: number
    idrazasGevt: number
    idcategoriasGevt: number
    idgeneroGevt: number
    estado: number
    _all: number
  }


  export type MascotasAvgAggregateInputType = {
    idmascotasGevt?: true
    idrazasGevt?: true
    idcategoriasGevt?: true
    idgeneroGevt?: true
  }

  export type MascotasSumAggregateInputType = {
    idmascotasGevt?: true
    idrazasGevt?: true
    idcategoriasGevt?: true
    idgeneroGevt?: true
  }

  export type MascotasMinAggregateInputType = {
    idmascotasGevt?: true
    NombreGevt?: true
    idrazasGevt?: true
    idcategoriasGevt?: true
    idgeneroGevt?: true
    estado?: true
  }

  export type MascotasMaxAggregateInputType = {
    idmascotasGevt?: true
    NombreGevt?: true
    idrazasGevt?: true
    idcategoriasGevt?: true
    idgeneroGevt?: true
    estado?: true
  }

  export type MascotasCountAggregateInputType = {
    idmascotasGevt?: true
    NombreGevt?: true
    idrazasGevt?: true
    idcategoriasGevt?: true
    idgeneroGevt?: true
    estado?: true
    _all?: true
  }

  export type MascotasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mascotas to aggregate.
     */
    where?: MascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mascotas
    **/
    _count?: true | MascotasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MascotasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MascotasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MascotasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MascotasMaxAggregateInputType
  }

  export type GetMascotasAggregateType<T extends MascotasAggregateArgs> = {
        [P in keyof T & keyof AggregateMascotas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMascotas[P]>
      : GetScalarType<T[P], AggregateMascotas[P]>
  }




  export type MascotasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotasWhereInput
    orderBy?: MascotasOrderByWithAggregationInput | MascotasOrderByWithAggregationInput[]
    by: MascotasScalarFieldEnum[] | MascotasScalarFieldEnum
    having?: MascotasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MascotasCountAggregateInputType | true
    _avg?: MascotasAvgAggregateInputType
    _sum?: MascotasSumAggregateInputType
    _min?: MascotasMinAggregateInputType
    _max?: MascotasMaxAggregateInputType
  }

  export type MascotasGroupByOutputType = {
    idmascotasGevt: number
    NombreGevt: string
    idrazasGevt: number
    idcategoriasGevt: number
    idgeneroGevt: number
    estado: $Enums.Estado
    _count: MascotasCountAggregateOutputType | null
    _avg: MascotasAvgAggregateOutputType | null
    _sum: MascotasSumAggregateOutputType | null
    _min: MascotasMinAggregateOutputType | null
    _max: MascotasMaxAggregateOutputType | null
  }

  type GetMascotasGroupByPayload<T extends MascotasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MascotasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MascotasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MascotasGroupByOutputType[P]>
            : GetScalarType<T[P], MascotasGroupByOutputType[P]>
        }
      >
    >


  export type MascotasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmascotasGevt?: boolean
    NombreGevt?: boolean
    idrazasGevt?: boolean
    idcategoriasGevt?: boolean
    idgeneroGevt?: boolean
    estado?: boolean
    generoGevt?: boolean | GeneroDefaultArgs<ExtArgs>
    categoriasGevt?: boolean | CategoriasDefaultArgs<ExtArgs>
    razasGevt?: boolean | RazasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mascotas"]>



  export type MascotasSelectScalar = {
    idmascotasGevt?: boolean
    NombreGevt?: boolean
    idrazasGevt?: boolean
    idcategoriasGevt?: boolean
    idgeneroGevt?: boolean
    estado?: boolean
  }

  export type MascotasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idmascotasGevt" | "NombreGevt" | "idrazasGevt" | "idcategoriasGevt" | "idgeneroGevt" | "estado", ExtArgs["result"]["mascotas"]>
  export type MascotasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generoGevt?: boolean | GeneroDefaultArgs<ExtArgs>
    categoriasGevt?: boolean | CategoriasDefaultArgs<ExtArgs>
    razasGevt?: boolean | RazasDefaultArgs<ExtArgs>
  }

  export type $MascotasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mascotas"
    objects: {
      generoGevt: Prisma.$GeneroPayload<ExtArgs>
      categoriasGevt: Prisma.$CategoriasPayload<ExtArgs>
      razasGevt: Prisma.$RazasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idmascotasGevt: number
      NombreGevt: string
      idrazasGevt: number
      idcategoriasGevt: number
      idgeneroGevt: number
      estado: $Enums.Estado
    }, ExtArgs["result"]["mascotas"]>
    composites: {}
  }

  type MascotasGetPayload<S extends boolean | null | undefined | MascotasDefaultArgs> = $Result.GetResult<Prisma.$MascotasPayload, S>

  type MascotasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MascotasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MascotasCountAggregateInputType | true
    }

  export interface MascotasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mascotas'], meta: { name: 'Mascotas' } }
    /**
     * Find zero or one Mascotas that matches the filter.
     * @param {MascotasFindUniqueArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MascotasFindUniqueArgs>(args: SelectSubset<T, MascotasFindUniqueArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mascotas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MascotasFindUniqueOrThrowArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MascotasFindUniqueOrThrowArgs>(args: SelectSubset<T, MascotasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mascotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasFindFirstArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MascotasFindFirstArgs>(args?: SelectSubset<T, MascotasFindFirstArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mascotas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasFindFirstOrThrowArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MascotasFindFirstOrThrowArgs>(args?: SelectSubset<T, MascotasFindFirstOrThrowArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mascotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mascotas
     * const mascotas = await prisma.mascotas.findMany()
     * 
     * // Get first 10 Mascotas
     * const mascotas = await prisma.mascotas.findMany({ take: 10 })
     * 
     * // Only select the `idmascotasGevt`
     * const mascotasWithIdmascotasGevtOnly = await prisma.mascotas.findMany({ select: { idmascotasGevt: true } })
     * 
     */
    findMany<T extends MascotasFindManyArgs>(args?: SelectSubset<T, MascotasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mascotas.
     * @param {MascotasCreateArgs} args - Arguments to create a Mascotas.
     * @example
     * // Create one Mascotas
     * const Mascotas = await prisma.mascotas.create({
     *   data: {
     *     // ... data to create a Mascotas
     *   }
     * })
     * 
     */
    create<T extends MascotasCreateArgs>(args: SelectSubset<T, MascotasCreateArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mascotas.
     * @param {MascotasCreateManyArgs} args - Arguments to create many Mascotas.
     * @example
     * // Create many Mascotas
     * const mascotas = await prisma.mascotas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MascotasCreateManyArgs>(args?: SelectSubset<T, MascotasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mascotas.
     * @param {MascotasDeleteArgs} args - Arguments to delete one Mascotas.
     * @example
     * // Delete one Mascotas
     * const Mascotas = await prisma.mascotas.delete({
     *   where: {
     *     // ... filter to delete one Mascotas
     *   }
     * })
     * 
     */
    delete<T extends MascotasDeleteArgs>(args: SelectSubset<T, MascotasDeleteArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mascotas.
     * @param {MascotasUpdateArgs} args - Arguments to update one Mascotas.
     * @example
     * // Update one Mascotas
     * const mascotas = await prisma.mascotas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MascotasUpdateArgs>(args: SelectSubset<T, MascotasUpdateArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mascotas.
     * @param {MascotasDeleteManyArgs} args - Arguments to filter Mascotas to delete.
     * @example
     * // Delete a few Mascotas
     * const { count } = await prisma.mascotas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MascotasDeleteManyArgs>(args?: SelectSubset<T, MascotasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mascotas
     * const mascotas = await prisma.mascotas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MascotasUpdateManyArgs>(args: SelectSubset<T, MascotasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mascotas.
     * @param {MascotasUpsertArgs} args - Arguments to update or create a Mascotas.
     * @example
     * // Update or create a Mascotas
     * const mascotas = await prisma.mascotas.upsert({
     *   create: {
     *     // ... data to create a Mascotas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mascotas we want to update
     *   }
     * })
     */
    upsert<T extends MascotasUpsertArgs>(args: SelectSubset<T, MascotasUpsertArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasCountArgs} args - Arguments to filter Mascotas to count.
     * @example
     * // Count the number of Mascotas
     * const count = await prisma.mascotas.count({
     *   where: {
     *     // ... the filter for the Mascotas we want to count
     *   }
     * })
    **/
    count<T extends MascotasCountArgs>(
      args?: Subset<T, MascotasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MascotasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MascotasAggregateArgs>(args: Subset<T, MascotasAggregateArgs>): Prisma.PrismaPromise<GetMascotasAggregateType<T>>

    /**
     * Group by Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasGroupByArgs} args - Group by arguments.
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
      T extends MascotasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MascotasGroupByArgs['orderBy'] }
        : { orderBy?: MascotasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MascotasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMascotasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mascotas model
   */
  readonly fields: MascotasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mascotas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MascotasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generoGevt<T extends GeneroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneroDefaultArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoriasGevt<T extends CategoriasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriasDefaultArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    razasGevt<T extends RazasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RazasDefaultArgs<ExtArgs>>): Prisma__RazasClient<$Result.GetResult<Prisma.$RazasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mascotas model
   */
  interface MascotasFieldRefs {
    readonly idmascotasGevt: FieldRef<"Mascotas", 'Int'>
    readonly NombreGevt: FieldRef<"Mascotas", 'String'>
    readonly idrazasGevt: FieldRef<"Mascotas", 'Int'>
    readonly idcategoriasGevt: FieldRef<"Mascotas", 'Int'>
    readonly idgeneroGevt: FieldRef<"Mascotas", 'Int'>
    readonly estado: FieldRef<"Mascotas", 'Estado'>
  }
    

  // Custom InputTypes
  /**
   * Mascotas findUnique
   */
  export type MascotasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter, which Mascotas to fetch.
     */
    where: MascotasWhereUniqueInput
  }

  /**
   * Mascotas findUniqueOrThrow
   */
  export type MascotasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter, which Mascotas to fetch.
     */
    where: MascotasWhereUniqueInput
  }

  /**
   * Mascotas findFirst
   */
  export type MascotasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter, which Mascotas to fetch.
     */
    where?: MascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mascotas.
     */
    cursor?: MascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mascotas.
     */
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Mascotas findFirstOrThrow
   */
  export type MascotasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter, which Mascotas to fetch.
     */
    where?: MascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mascotas.
     */
    cursor?: MascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mascotas.
     */
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Mascotas findMany
   */
  export type MascotasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter, which Mascotas to fetch.
     */
    where?: MascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mascotas.
     */
    cursor?: MascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Mascotas create
   */
  export type MascotasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * The data needed to create a Mascotas.
     */
    data: XOR<MascotasCreateInput, MascotasUncheckedCreateInput>
  }

  /**
   * Mascotas createMany
   */
  export type MascotasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mascotas.
     */
    data: MascotasCreateManyInput | MascotasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mascotas update
   */
  export type MascotasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * The data needed to update a Mascotas.
     */
    data: XOR<MascotasUpdateInput, MascotasUncheckedUpdateInput>
    /**
     * Choose, which Mascotas to update.
     */
    where: MascotasWhereUniqueInput
  }

  /**
   * Mascotas updateMany
   */
  export type MascotasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mascotas.
     */
    data: XOR<MascotasUpdateManyMutationInput, MascotasUncheckedUpdateManyInput>
    /**
     * Filter which Mascotas to update
     */
    where?: MascotasWhereInput
    /**
     * Limit how many Mascotas to update.
     */
    limit?: number
  }

  /**
   * Mascotas upsert
   */
  export type MascotasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * The filter to search for the Mascotas to update in case it exists.
     */
    where: MascotasWhereUniqueInput
    /**
     * In case the Mascotas found by the `where` argument doesn't exist, create a new Mascotas with this data.
     */
    create: XOR<MascotasCreateInput, MascotasUncheckedCreateInput>
    /**
     * In case the Mascotas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MascotasUpdateInput, MascotasUncheckedUpdateInput>
  }

  /**
   * Mascotas delete
   */
  export type MascotasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter which Mascotas to delete.
     */
    where: MascotasWhereUniqueInput
  }

  /**
   * Mascotas deleteMany
   */
  export type MascotasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mascotas to delete
     */
    where?: MascotasWhereInput
    /**
     * Limit how many Mascotas to delete.
     */
    limit?: number
  }

  /**
   * Mascotas without action
   */
  export type MascotasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
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


  export const UsuariosScalarFieldEnum: {
    idusuariosGevt: 'idusuariosGevt',
    Nombre_completoGevt: 'Nombre_completoGevt',
    CorreoGevt: 'CorreoGevt',
    PasswordGevt: 'PasswordGevt'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const RazasScalarFieldEnum: {
    idrazasGevt: 'idrazasGevt',
    NombreGevt: 'NombreGevt'
  };

  export type RazasScalarFieldEnum = (typeof RazasScalarFieldEnum)[keyof typeof RazasScalarFieldEnum]


  export const CategoriasScalarFieldEnum: {
    idcategoriasGevt: 'idcategoriasGevt',
    NombreGevt: 'NombreGevt'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const GeneroScalarFieldEnum: {
    idgeneroGevt: 'idgeneroGevt',
    NombreGevt: 'NombreGevt'
  };

  export type GeneroScalarFieldEnum = (typeof GeneroScalarFieldEnum)[keyof typeof GeneroScalarFieldEnum]


  export const MascotasScalarFieldEnum: {
    idmascotasGevt: 'idmascotasGevt',
    NombreGevt: 'NombreGevt',
    idrazasGevt: 'idrazasGevt',
    idcategoriasGevt: 'idcategoriasGevt',
    idgeneroGevt: 'idgeneroGevt',
    estado: 'estado'
  };

  export type MascotasScalarFieldEnum = (typeof MascotasScalarFieldEnum)[keyof typeof MascotasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuariosOrderByRelevanceFieldEnum: {
    Nombre_completoGevt: 'Nombre_completoGevt',
    CorreoGevt: 'CorreoGevt',
    PasswordGevt: 'PasswordGevt'
  };

  export type UsuariosOrderByRelevanceFieldEnum = (typeof UsuariosOrderByRelevanceFieldEnum)[keyof typeof UsuariosOrderByRelevanceFieldEnum]


  export const RazasOrderByRelevanceFieldEnum: {
    NombreGevt: 'NombreGevt'
  };

  export type RazasOrderByRelevanceFieldEnum = (typeof RazasOrderByRelevanceFieldEnum)[keyof typeof RazasOrderByRelevanceFieldEnum]


  export const CategoriasOrderByRelevanceFieldEnum: {
    NombreGevt: 'NombreGevt'
  };

  export type CategoriasOrderByRelevanceFieldEnum = (typeof CategoriasOrderByRelevanceFieldEnum)[keyof typeof CategoriasOrderByRelevanceFieldEnum]


  export const GeneroOrderByRelevanceFieldEnum: {
    NombreGevt: 'NombreGevt'
  };

  export type GeneroOrderByRelevanceFieldEnum = (typeof GeneroOrderByRelevanceFieldEnum)[keyof typeof GeneroOrderByRelevanceFieldEnum]


  export const MascotasOrderByRelevanceFieldEnum: {
    NombreGevt: 'NombreGevt'
  };

  export type MascotasOrderByRelevanceFieldEnum = (typeof MascotasOrderByRelevanceFieldEnum)[keyof typeof MascotasOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Estado'
   */
  export type EnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    idusuariosGevt?: IntFilter<"Usuarios"> | number
    Nombre_completoGevt?: StringFilter<"Usuarios"> | string
    CorreoGevt?: StringFilter<"Usuarios"> | string
    PasswordGevt?: StringFilter<"Usuarios"> | string
  }

  export type UsuariosOrderByWithRelationInput = {
    idusuariosGevt?: SortOrder
    Nombre_completoGevt?: SortOrder
    CorreoGevt?: SortOrder
    PasswordGevt?: SortOrder
    _relevance?: UsuariosOrderByRelevanceInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    idusuariosGevt?: number
    CorreoGevt?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    Nombre_completoGevt?: StringFilter<"Usuarios"> | string
    PasswordGevt?: StringFilter<"Usuarios"> | string
  }, "idusuariosGevt" | "CorreoGevt">

  export type UsuariosOrderByWithAggregationInput = {
    idusuariosGevt?: SortOrder
    Nombre_completoGevt?: SortOrder
    CorreoGevt?: SortOrder
    PasswordGevt?: SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    idusuariosGevt?: IntWithAggregatesFilter<"Usuarios"> | number
    Nombre_completoGevt?: StringWithAggregatesFilter<"Usuarios"> | string
    CorreoGevt?: StringWithAggregatesFilter<"Usuarios"> | string
    PasswordGevt?: StringWithAggregatesFilter<"Usuarios"> | string
  }

  export type RazasWhereInput = {
    AND?: RazasWhereInput | RazasWhereInput[]
    OR?: RazasWhereInput[]
    NOT?: RazasWhereInput | RazasWhereInput[]
    idrazasGevt?: IntFilter<"Razas"> | number
    NombreGevt?: StringFilter<"Razas"> | string
    Mascotas?: MascotasListRelationFilter
  }

  export type RazasOrderByWithRelationInput = {
    idrazasGevt?: SortOrder
    NombreGevt?: SortOrder
    Mascotas?: MascotasOrderByRelationAggregateInput
    _relevance?: RazasOrderByRelevanceInput
  }

  export type RazasWhereUniqueInput = Prisma.AtLeast<{
    idrazasGevt?: number
    AND?: RazasWhereInput | RazasWhereInput[]
    OR?: RazasWhereInput[]
    NOT?: RazasWhereInput | RazasWhereInput[]
    NombreGevt?: StringFilter<"Razas"> | string
    Mascotas?: MascotasListRelationFilter
  }, "idrazasGevt">

  export type RazasOrderByWithAggregationInput = {
    idrazasGevt?: SortOrder
    NombreGevt?: SortOrder
    _count?: RazasCountOrderByAggregateInput
    _avg?: RazasAvgOrderByAggregateInput
    _max?: RazasMaxOrderByAggregateInput
    _min?: RazasMinOrderByAggregateInput
    _sum?: RazasSumOrderByAggregateInput
  }

  export type RazasScalarWhereWithAggregatesInput = {
    AND?: RazasScalarWhereWithAggregatesInput | RazasScalarWhereWithAggregatesInput[]
    OR?: RazasScalarWhereWithAggregatesInput[]
    NOT?: RazasScalarWhereWithAggregatesInput | RazasScalarWhereWithAggregatesInput[]
    idrazasGevt?: IntWithAggregatesFilter<"Razas"> | number
    NombreGevt?: StringWithAggregatesFilter<"Razas"> | string
  }

  export type CategoriasWhereInput = {
    AND?: CategoriasWhereInput | CategoriasWhereInput[]
    OR?: CategoriasWhereInput[]
    NOT?: CategoriasWhereInput | CategoriasWhereInput[]
    idcategoriasGevt?: IntFilter<"Categorias"> | number
    NombreGevt?: StringFilter<"Categorias"> | string
    Mascotas?: MascotasListRelationFilter
  }

  export type CategoriasOrderByWithRelationInput = {
    idcategoriasGevt?: SortOrder
    NombreGevt?: SortOrder
    Mascotas?: MascotasOrderByRelationAggregateInput
    _relevance?: CategoriasOrderByRelevanceInput
  }

  export type CategoriasWhereUniqueInput = Prisma.AtLeast<{
    idcategoriasGevt?: number
    AND?: CategoriasWhereInput | CategoriasWhereInput[]
    OR?: CategoriasWhereInput[]
    NOT?: CategoriasWhereInput | CategoriasWhereInput[]
    NombreGevt?: StringFilter<"Categorias"> | string
    Mascotas?: MascotasListRelationFilter
  }, "idcategoriasGevt">

  export type CategoriasOrderByWithAggregationInput = {
    idcategoriasGevt?: SortOrder
    NombreGevt?: SortOrder
    _count?: CategoriasCountOrderByAggregateInput
    _avg?: CategoriasAvgOrderByAggregateInput
    _max?: CategoriasMaxOrderByAggregateInput
    _min?: CategoriasMinOrderByAggregateInput
    _sum?: CategoriasSumOrderByAggregateInput
  }

  export type CategoriasScalarWhereWithAggregatesInput = {
    AND?: CategoriasScalarWhereWithAggregatesInput | CategoriasScalarWhereWithAggregatesInput[]
    OR?: CategoriasScalarWhereWithAggregatesInput[]
    NOT?: CategoriasScalarWhereWithAggregatesInput | CategoriasScalarWhereWithAggregatesInput[]
    idcategoriasGevt?: IntWithAggregatesFilter<"Categorias"> | number
    NombreGevt?: StringWithAggregatesFilter<"Categorias"> | string
  }

  export type GeneroWhereInput = {
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    idgeneroGevt?: IntFilter<"Genero"> | number
    NombreGevt?: StringFilter<"Genero"> | string
    Mascotas?: MascotasListRelationFilter
  }

  export type GeneroOrderByWithRelationInput = {
    idgeneroGevt?: SortOrder
    NombreGevt?: SortOrder
    Mascotas?: MascotasOrderByRelationAggregateInput
    _relevance?: GeneroOrderByRelevanceInput
  }

  export type GeneroWhereUniqueInput = Prisma.AtLeast<{
    idgeneroGevt?: number
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    NombreGevt?: StringFilter<"Genero"> | string
    Mascotas?: MascotasListRelationFilter
  }, "idgeneroGevt">

  export type GeneroOrderByWithAggregationInput = {
    idgeneroGevt?: SortOrder
    NombreGevt?: SortOrder
    _count?: GeneroCountOrderByAggregateInput
    _avg?: GeneroAvgOrderByAggregateInput
    _max?: GeneroMaxOrderByAggregateInput
    _min?: GeneroMinOrderByAggregateInput
    _sum?: GeneroSumOrderByAggregateInput
  }

  export type GeneroScalarWhereWithAggregatesInput = {
    AND?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    OR?: GeneroScalarWhereWithAggregatesInput[]
    NOT?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    idgeneroGevt?: IntWithAggregatesFilter<"Genero"> | number
    NombreGevt?: StringWithAggregatesFilter<"Genero"> | string
  }

  export type MascotasWhereInput = {
    AND?: MascotasWhereInput | MascotasWhereInput[]
    OR?: MascotasWhereInput[]
    NOT?: MascotasWhereInput | MascotasWhereInput[]
    idmascotasGevt?: IntFilter<"Mascotas"> | number
    NombreGevt?: StringFilter<"Mascotas"> | string
    idrazasGevt?: IntFilter<"Mascotas"> | number
    idcategoriasGevt?: IntFilter<"Mascotas"> | number
    idgeneroGevt?: IntFilter<"Mascotas"> | number
    estado?: EnumEstadoFilter<"Mascotas"> | $Enums.Estado
    generoGevt?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
    categoriasGevt?: XOR<CategoriasScalarRelationFilter, CategoriasWhereInput>
    razasGevt?: XOR<RazasScalarRelationFilter, RazasWhereInput>
  }

  export type MascotasOrderByWithRelationInput = {
    idmascotasGevt?: SortOrder
    NombreGevt?: SortOrder
    idrazasGevt?: SortOrder
    idcategoriasGevt?: SortOrder
    idgeneroGevt?: SortOrder
    estado?: SortOrder
    generoGevt?: GeneroOrderByWithRelationInput
    categoriasGevt?: CategoriasOrderByWithRelationInput
    razasGevt?: RazasOrderByWithRelationInput
    _relevance?: MascotasOrderByRelevanceInput
  }

  export type MascotasWhereUniqueInput = Prisma.AtLeast<{
    idmascotasGevt?: number
    AND?: MascotasWhereInput | MascotasWhereInput[]
    OR?: MascotasWhereInput[]
    NOT?: MascotasWhereInput | MascotasWhereInput[]
    NombreGevt?: StringFilter<"Mascotas"> | string
    idrazasGevt?: IntFilter<"Mascotas"> | number
    idcategoriasGevt?: IntFilter<"Mascotas"> | number
    idgeneroGevt?: IntFilter<"Mascotas"> | number
    estado?: EnumEstadoFilter<"Mascotas"> | $Enums.Estado
    generoGevt?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
    categoriasGevt?: XOR<CategoriasScalarRelationFilter, CategoriasWhereInput>
    razasGevt?: XOR<RazasScalarRelationFilter, RazasWhereInput>
  }, "idmascotasGevt">

  export type MascotasOrderByWithAggregationInput = {
    idmascotasGevt?: SortOrder
    NombreGevt?: SortOrder
    idrazasGevt?: SortOrder
    idcategoriasGevt?: SortOrder
    idgeneroGevt?: SortOrder
    estado?: SortOrder
    _count?: MascotasCountOrderByAggregateInput
    _avg?: MascotasAvgOrderByAggregateInput
    _max?: MascotasMaxOrderByAggregateInput
    _min?: MascotasMinOrderByAggregateInput
    _sum?: MascotasSumOrderByAggregateInput
  }

  export type MascotasScalarWhereWithAggregatesInput = {
    AND?: MascotasScalarWhereWithAggregatesInput | MascotasScalarWhereWithAggregatesInput[]
    OR?: MascotasScalarWhereWithAggregatesInput[]
    NOT?: MascotasScalarWhereWithAggregatesInput | MascotasScalarWhereWithAggregatesInput[]
    idmascotasGevt?: IntWithAggregatesFilter<"Mascotas"> | number
    NombreGevt?: StringWithAggregatesFilter<"Mascotas"> | string
    idrazasGevt?: IntWithAggregatesFilter<"Mascotas"> | number
    idcategoriasGevt?: IntWithAggregatesFilter<"Mascotas"> | number
    idgeneroGevt?: IntWithAggregatesFilter<"Mascotas"> | number
    estado?: EnumEstadoWithAggregatesFilter<"Mascotas"> | $Enums.Estado
  }

  export type UsuariosCreateInput = {
    Nombre_completoGevt: string
    CorreoGevt: string
    PasswordGevt: string
  }

  export type UsuariosUncheckedCreateInput = {
    idusuariosGevt?: number
    Nombre_completoGevt: string
    CorreoGevt: string
    PasswordGevt: string
  }

  export type UsuariosUpdateInput = {
    Nombre_completoGevt?: StringFieldUpdateOperationsInput | string
    CorreoGevt?: StringFieldUpdateOperationsInput | string
    PasswordGevt?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosUncheckedUpdateInput = {
    idusuariosGevt?: IntFieldUpdateOperationsInput | number
    Nombre_completoGevt?: StringFieldUpdateOperationsInput | string
    CorreoGevt?: StringFieldUpdateOperationsInput | string
    PasswordGevt?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosCreateManyInput = {
    idusuariosGevt?: number
    Nombre_completoGevt: string
    CorreoGevt: string
    PasswordGevt: string
  }

  export type UsuariosUpdateManyMutationInput = {
    Nombre_completoGevt?: StringFieldUpdateOperationsInput | string
    CorreoGevt?: StringFieldUpdateOperationsInput | string
    PasswordGevt?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosUncheckedUpdateManyInput = {
    idusuariosGevt?: IntFieldUpdateOperationsInput | number
    Nombre_completoGevt?: StringFieldUpdateOperationsInput | string
    CorreoGevt?: StringFieldUpdateOperationsInput | string
    PasswordGevt?: StringFieldUpdateOperationsInput | string
  }

  export type RazasCreateInput = {
    NombreGevt: string
    Mascotas?: MascotasCreateNestedManyWithoutRazasGevtInput
  }

  export type RazasUncheckedCreateInput = {
    idrazasGevt?: number
    NombreGevt: string
    Mascotas?: MascotasUncheckedCreateNestedManyWithoutRazasGevtInput
  }

  export type RazasUpdateInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
    Mascotas?: MascotasUpdateManyWithoutRazasGevtNestedInput
  }

  export type RazasUncheckedUpdateInput = {
    idrazasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
    Mascotas?: MascotasUncheckedUpdateManyWithoutRazasGevtNestedInput
  }

  export type RazasCreateManyInput = {
    idrazasGevt?: number
    NombreGevt: string
  }

  export type RazasUpdateManyMutationInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type RazasUncheckedUpdateManyInput = {
    idrazasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasCreateInput = {
    NombreGevt: string
    Mascotas?: MascotasCreateNestedManyWithoutCategoriasGevtInput
  }

  export type CategoriasUncheckedCreateInput = {
    idcategoriasGevt?: number
    NombreGevt: string
    Mascotas?: MascotasUncheckedCreateNestedManyWithoutCategoriasGevtInput
  }

  export type CategoriasUpdateInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
    Mascotas?: MascotasUpdateManyWithoutCategoriasGevtNestedInput
  }

  export type CategoriasUncheckedUpdateInput = {
    idcategoriasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
    Mascotas?: MascotasUncheckedUpdateManyWithoutCategoriasGevtNestedInput
  }

  export type CategoriasCreateManyInput = {
    idcategoriasGevt?: number
    NombreGevt: string
  }

  export type CategoriasUpdateManyMutationInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasUncheckedUpdateManyInput = {
    idcategoriasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroCreateInput = {
    NombreGevt: string
    Mascotas?: MascotasCreateNestedManyWithoutGeneroGevtInput
  }

  export type GeneroUncheckedCreateInput = {
    idgeneroGevt?: number
    NombreGevt: string
    Mascotas?: MascotasUncheckedCreateNestedManyWithoutGeneroGevtInput
  }

  export type GeneroUpdateInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
    Mascotas?: MascotasUpdateManyWithoutGeneroGevtNestedInput
  }

  export type GeneroUncheckedUpdateInput = {
    idgeneroGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
    Mascotas?: MascotasUncheckedUpdateManyWithoutGeneroGevtNestedInput
  }

  export type GeneroCreateManyInput = {
    idgeneroGevt?: number
    NombreGevt: string
  }

  export type GeneroUpdateManyMutationInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateManyInput = {
    idgeneroGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type MascotasCreateInput = {
    NombreGevt: string
    estado: $Enums.Estado
    generoGevt: GeneroCreateNestedOneWithoutMascotasInput
    categoriasGevt: CategoriasCreateNestedOneWithoutMascotasInput
    razasGevt: RazasCreateNestedOneWithoutMascotasInput
  }

  export type MascotasUncheckedCreateInput = {
    idmascotasGevt?: number
    NombreGevt: string
    idrazasGevt: number
    idcategoriasGevt: number
    idgeneroGevt: number
    estado: $Enums.Estado
  }

  export type MascotasUpdateInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    generoGevt?: GeneroUpdateOneRequiredWithoutMascotasNestedInput
    categoriasGevt?: CategoriasUpdateOneRequiredWithoutMascotasNestedInput
    razasGevt?: RazasUpdateOneRequiredWithoutMascotasNestedInput
  }

  export type MascotasUncheckedUpdateInput = {
    idmascotasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
    idrazasGevt?: IntFieldUpdateOperationsInput | number
    idcategoriasGevt?: IntFieldUpdateOperationsInput | number
    idgeneroGevt?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type MascotasCreateManyInput = {
    idmascotasGevt?: number
    NombreGevt: string
    idrazasGevt: number
    idcategoriasGevt: number
    idgeneroGevt: number
    estado: $Enums.Estado
  }

  export type MascotasUpdateManyMutationInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type MascotasUncheckedUpdateManyInput = {
    idmascotasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
    idrazasGevt?: IntFieldUpdateOperationsInput | number
    idcategoriasGevt?: IntFieldUpdateOperationsInput | number
    idgeneroGevt?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
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

  export type UsuariosOrderByRelevanceInput = {
    fields: UsuariosOrderByRelevanceFieldEnum | UsuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuariosCountOrderByAggregateInput = {
    idusuariosGevt?: SortOrder
    Nombre_completoGevt?: SortOrder
    CorreoGevt?: SortOrder
    PasswordGevt?: SortOrder
  }

  export type UsuariosAvgOrderByAggregateInput = {
    idusuariosGevt?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    idusuariosGevt?: SortOrder
    Nombre_completoGevt?: SortOrder
    CorreoGevt?: SortOrder
    PasswordGevt?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    idusuariosGevt?: SortOrder
    Nombre_completoGevt?: SortOrder
    CorreoGevt?: SortOrder
    PasswordGevt?: SortOrder
  }

  export type UsuariosSumOrderByAggregateInput = {
    idusuariosGevt?: SortOrder
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

  export type MascotasListRelationFilter = {
    every?: MascotasWhereInput
    some?: MascotasWhereInput
    none?: MascotasWhereInput
  }

  export type MascotasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RazasOrderByRelevanceInput = {
    fields: RazasOrderByRelevanceFieldEnum | RazasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RazasCountOrderByAggregateInput = {
    idrazasGevt?: SortOrder
    NombreGevt?: SortOrder
  }

  export type RazasAvgOrderByAggregateInput = {
    idrazasGevt?: SortOrder
  }

  export type RazasMaxOrderByAggregateInput = {
    idrazasGevt?: SortOrder
    NombreGevt?: SortOrder
  }

  export type RazasMinOrderByAggregateInput = {
    idrazasGevt?: SortOrder
    NombreGevt?: SortOrder
  }

  export type RazasSumOrderByAggregateInput = {
    idrazasGevt?: SortOrder
  }

  export type CategoriasOrderByRelevanceInput = {
    fields: CategoriasOrderByRelevanceFieldEnum | CategoriasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriasCountOrderByAggregateInput = {
    idcategoriasGevt?: SortOrder
    NombreGevt?: SortOrder
  }

  export type CategoriasAvgOrderByAggregateInput = {
    idcategoriasGevt?: SortOrder
  }

  export type CategoriasMaxOrderByAggregateInput = {
    idcategoriasGevt?: SortOrder
    NombreGevt?: SortOrder
  }

  export type CategoriasMinOrderByAggregateInput = {
    idcategoriasGevt?: SortOrder
    NombreGevt?: SortOrder
  }

  export type CategoriasSumOrderByAggregateInput = {
    idcategoriasGevt?: SortOrder
  }

  export type GeneroOrderByRelevanceInput = {
    fields: GeneroOrderByRelevanceFieldEnum | GeneroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GeneroCountOrderByAggregateInput = {
    idgeneroGevt?: SortOrder
    NombreGevt?: SortOrder
  }

  export type GeneroAvgOrderByAggregateInput = {
    idgeneroGevt?: SortOrder
  }

  export type GeneroMaxOrderByAggregateInput = {
    idgeneroGevt?: SortOrder
    NombreGevt?: SortOrder
  }

  export type GeneroMinOrderByAggregateInput = {
    idgeneroGevt?: SortOrder
    NombreGevt?: SortOrder
  }

  export type GeneroSumOrderByAggregateInput = {
    idgeneroGevt?: SortOrder
  }

  export type EnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type GeneroScalarRelationFilter = {
    is?: GeneroWhereInput
    isNot?: GeneroWhereInput
  }

  export type CategoriasScalarRelationFilter = {
    is?: CategoriasWhereInput
    isNot?: CategoriasWhereInput
  }

  export type RazasScalarRelationFilter = {
    is?: RazasWhereInput
    isNot?: RazasWhereInput
  }

  export type MascotasOrderByRelevanceInput = {
    fields: MascotasOrderByRelevanceFieldEnum | MascotasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MascotasCountOrderByAggregateInput = {
    idmascotasGevt?: SortOrder
    NombreGevt?: SortOrder
    idrazasGevt?: SortOrder
    idcategoriasGevt?: SortOrder
    idgeneroGevt?: SortOrder
    estado?: SortOrder
  }

  export type MascotasAvgOrderByAggregateInput = {
    idmascotasGevt?: SortOrder
    idrazasGevt?: SortOrder
    idcategoriasGevt?: SortOrder
    idgeneroGevt?: SortOrder
  }

  export type MascotasMaxOrderByAggregateInput = {
    idmascotasGevt?: SortOrder
    NombreGevt?: SortOrder
    idrazasGevt?: SortOrder
    idcategoriasGevt?: SortOrder
    idgeneroGevt?: SortOrder
    estado?: SortOrder
  }

  export type MascotasMinOrderByAggregateInput = {
    idmascotasGevt?: SortOrder
    NombreGevt?: SortOrder
    idrazasGevt?: SortOrder
    idcategoriasGevt?: SortOrder
    idgeneroGevt?: SortOrder
    estado?: SortOrder
  }

  export type MascotasSumOrderByAggregateInput = {
    idmascotasGevt?: SortOrder
    idrazasGevt?: SortOrder
    idcategoriasGevt?: SortOrder
    idgeneroGevt?: SortOrder
  }

  export type EnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MascotasCreateNestedManyWithoutRazasGevtInput = {
    create?: XOR<MascotasCreateWithoutRazasGevtInput, MascotasUncheckedCreateWithoutRazasGevtInput> | MascotasCreateWithoutRazasGevtInput[] | MascotasUncheckedCreateWithoutRazasGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutRazasGevtInput | MascotasCreateOrConnectWithoutRazasGevtInput[]
    createMany?: MascotasCreateManyRazasGevtInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUncheckedCreateNestedManyWithoutRazasGevtInput = {
    create?: XOR<MascotasCreateWithoutRazasGevtInput, MascotasUncheckedCreateWithoutRazasGevtInput> | MascotasCreateWithoutRazasGevtInput[] | MascotasUncheckedCreateWithoutRazasGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutRazasGevtInput | MascotasCreateOrConnectWithoutRazasGevtInput[]
    createMany?: MascotasCreateManyRazasGevtInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUpdateManyWithoutRazasGevtNestedInput = {
    create?: XOR<MascotasCreateWithoutRazasGevtInput, MascotasUncheckedCreateWithoutRazasGevtInput> | MascotasCreateWithoutRazasGevtInput[] | MascotasUncheckedCreateWithoutRazasGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutRazasGevtInput | MascotasCreateOrConnectWithoutRazasGevtInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutRazasGevtInput | MascotasUpsertWithWhereUniqueWithoutRazasGevtInput[]
    createMany?: MascotasCreateManyRazasGevtInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutRazasGevtInput | MascotasUpdateWithWhereUniqueWithoutRazasGevtInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutRazasGevtInput | MascotasUpdateManyWithWhereWithoutRazasGevtInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type MascotasUncheckedUpdateManyWithoutRazasGevtNestedInput = {
    create?: XOR<MascotasCreateWithoutRazasGevtInput, MascotasUncheckedCreateWithoutRazasGevtInput> | MascotasCreateWithoutRazasGevtInput[] | MascotasUncheckedCreateWithoutRazasGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutRazasGevtInput | MascotasCreateOrConnectWithoutRazasGevtInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutRazasGevtInput | MascotasUpsertWithWhereUniqueWithoutRazasGevtInput[]
    createMany?: MascotasCreateManyRazasGevtInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutRazasGevtInput | MascotasUpdateWithWhereUniqueWithoutRazasGevtInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutRazasGevtInput | MascotasUpdateManyWithWhereWithoutRazasGevtInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type MascotasCreateNestedManyWithoutCategoriasGevtInput = {
    create?: XOR<MascotasCreateWithoutCategoriasGevtInput, MascotasUncheckedCreateWithoutCategoriasGevtInput> | MascotasCreateWithoutCategoriasGevtInput[] | MascotasUncheckedCreateWithoutCategoriasGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutCategoriasGevtInput | MascotasCreateOrConnectWithoutCategoriasGevtInput[]
    createMany?: MascotasCreateManyCategoriasGevtInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUncheckedCreateNestedManyWithoutCategoriasGevtInput = {
    create?: XOR<MascotasCreateWithoutCategoriasGevtInput, MascotasUncheckedCreateWithoutCategoriasGevtInput> | MascotasCreateWithoutCategoriasGevtInput[] | MascotasUncheckedCreateWithoutCategoriasGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutCategoriasGevtInput | MascotasCreateOrConnectWithoutCategoriasGevtInput[]
    createMany?: MascotasCreateManyCategoriasGevtInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUpdateManyWithoutCategoriasGevtNestedInput = {
    create?: XOR<MascotasCreateWithoutCategoriasGevtInput, MascotasUncheckedCreateWithoutCategoriasGevtInput> | MascotasCreateWithoutCategoriasGevtInput[] | MascotasUncheckedCreateWithoutCategoriasGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutCategoriasGevtInput | MascotasCreateOrConnectWithoutCategoriasGevtInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutCategoriasGevtInput | MascotasUpsertWithWhereUniqueWithoutCategoriasGevtInput[]
    createMany?: MascotasCreateManyCategoriasGevtInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutCategoriasGevtInput | MascotasUpdateWithWhereUniqueWithoutCategoriasGevtInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutCategoriasGevtInput | MascotasUpdateManyWithWhereWithoutCategoriasGevtInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type MascotasUncheckedUpdateManyWithoutCategoriasGevtNestedInput = {
    create?: XOR<MascotasCreateWithoutCategoriasGevtInput, MascotasUncheckedCreateWithoutCategoriasGevtInput> | MascotasCreateWithoutCategoriasGevtInput[] | MascotasUncheckedCreateWithoutCategoriasGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutCategoriasGevtInput | MascotasCreateOrConnectWithoutCategoriasGevtInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutCategoriasGevtInput | MascotasUpsertWithWhereUniqueWithoutCategoriasGevtInput[]
    createMany?: MascotasCreateManyCategoriasGevtInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutCategoriasGevtInput | MascotasUpdateWithWhereUniqueWithoutCategoriasGevtInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutCategoriasGevtInput | MascotasUpdateManyWithWhereWithoutCategoriasGevtInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type MascotasCreateNestedManyWithoutGeneroGevtInput = {
    create?: XOR<MascotasCreateWithoutGeneroGevtInput, MascotasUncheckedCreateWithoutGeneroGevtInput> | MascotasCreateWithoutGeneroGevtInput[] | MascotasUncheckedCreateWithoutGeneroGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutGeneroGevtInput | MascotasCreateOrConnectWithoutGeneroGevtInput[]
    createMany?: MascotasCreateManyGeneroGevtInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUncheckedCreateNestedManyWithoutGeneroGevtInput = {
    create?: XOR<MascotasCreateWithoutGeneroGevtInput, MascotasUncheckedCreateWithoutGeneroGevtInput> | MascotasCreateWithoutGeneroGevtInput[] | MascotasUncheckedCreateWithoutGeneroGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutGeneroGevtInput | MascotasCreateOrConnectWithoutGeneroGevtInput[]
    createMany?: MascotasCreateManyGeneroGevtInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUpdateManyWithoutGeneroGevtNestedInput = {
    create?: XOR<MascotasCreateWithoutGeneroGevtInput, MascotasUncheckedCreateWithoutGeneroGevtInput> | MascotasCreateWithoutGeneroGevtInput[] | MascotasUncheckedCreateWithoutGeneroGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutGeneroGevtInput | MascotasCreateOrConnectWithoutGeneroGevtInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutGeneroGevtInput | MascotasUpsertWithWhereUniqueWithoutGeneroGevtInput[]
    createMany?: MascotasCreateManyGeneroGevtInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutGeneroGevtInput | MascotasUpdateWithWhereUniqueWithoutGeneroGevtInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutGeneroGevtInput | MascotasUpdateManyWithWhereWithoutGeneroGevtInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type MascotasUncheckedUpdateManyWithoutGeneroGevtNestedInput = {
    create?: XOR<MascotasCreateWithoutGeneroGevtInput, MascotasUncheckedCreateWithoutGeneroGevtInput> | MascotasCreateWithoutGeneroGevtInput[] | MascotasUncheckedCreateWithoutGeneroGevtInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutGeneroGevtInput | MascotasCreateOrConnectWithoutGeneroGevtInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutGeneroGevtInput | MascotasUpsertWithWhereUniqueWithoutGeneroGevtInput[]
    createMany?: MascotasCreateManyGeneroGevtInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutGeneroGevtInput | MascotasUpdateWithWhereUniqueWithoutGeneroGevtInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutGeneroGevtInput | MascotasUpdateManyWithWhereWithoutGeneroGevtInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type GeneroCreateNestedOneWithoutMascotasInput = {
    create?: XOR<GeneroCreateWithoutMascotasInput, GeneroUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutMascotasInput
    connect?: GeneroWhereUniqueInput
  }

  export type CategoriasCreateNestedOneWithoutMascotasInput = {
    create?: XOR<CategoriasCreateWithoutMascotasInput, CategoriasUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: CategoriasCreateOrConnectWithoutMascotasInput
    connect?: CategoriasWhereUniqueInput
  }

  export type RazasCreateNestedOneWithoutMascotasInput = {
    create?: XOR<RazasCreateWithoutMascotasInput, RazasUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: RazasCreateOrConnectWithoutMascotasInput
    connect?: RazasWhereUniqueInput
  }

  export type EnumEstadoFieldUpdateOperationsInput = {
    set?: $Enums.Estado
  }

  export type GeneroUpdateOneRequiredWithoutMascotasNestedInput = {
    create?: XOR<GeneroCreateWithoutMascotasInput, GeneroUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutMascotasInput
    upsert?: GeneroUpsertWithoutMascotasInput
    connect?: GeneroWhereUniqueInput
    update?: XOR<XOR<GeneroUpdateToOneWithWhereWithoutMascotasInput, GeneroUpdateWithoutMascotasInput>, GeneroUncheckedUpdateWithoutMascotasInput>
  }

  export type CategoriasUpdateOneRequiredWithoutMascotasNestedInput = {
    create?: XOR<CategoriasCreateWithoutMascotasInput, CategoriasUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: CategoriasCreateOrConnectWithoutMascotasInput
    upsert?: CategoriasUpsertWithoutMascotasInput
    connect?: CategoriasWhereUniqueInput
    update?: XOR<XOR<CategoriasUpdateToOneWithWhereWithoutMascotasInput, CategoriasUpdateWithoutMascotasInput>, CategoriasUncheckedUpdateWithoutMascotasInput>
  }

  export type RazasUpdateOneRequiredWithoutMascotasNestedInput = {
    create?: XOR<RazasCreateWithoutMascotasInput, RazasUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: RazasCreateOrConnectWithoutMascotasInput
    upsert?: RazasUpsertWithoutMascotasInput
    connect?: RazasWhereUniqueInput
    update?: XOR<XOR<RazasUpdateToOneWithWhereWithoutMascotasInput, RazasUpdateWithoutMascotasInput>, RazasUncheckedUpdateWithoutMascotasInput>
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

  export type NestedEnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type NestedEnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type MascotasCreateWithoutRazasGevtInput = {
    NombreGevt: string
    estado: $Enums.Estado
    generoGevt: GeneroCreateNestedOneWithoutMascotasInput
    categoriasGevt: CategoriasCreateNestedOneWithoutMascotasInput
  }

  export type MascotasUncheckedCreateWithoutRazasGevtInput = {
    idmascotasGevt?: number
    NombreGevt: string
    idcategoriasGevt: number
    idgeneroGevt: number
    estado: $Enums.Estado
  }

  export type MascotasCreateOrConnectWithoutRazasGevtInput = {
    where: MascotasWhereUniqueInput
    create: XOR<MascotasCreateWithoutRazasGevtInput, MascotasUncheckedCreateWithoutRazasGevtInput>
  }

  export type MascotasCreateManyRazasGevtInputEnvelope = {
    data: MascotasCreateManyRazasGevtInput | MascotasCreateManyRazasGevtInput[]
    skipDuplicates?: boolean
  }

  export type MascotasUpsertWithWhereUniqueWithoutRazasGevtInput = {
    where: MascotasWhereUniqueInput
    update: XOR<MascotasUpdateWithoutRazasGevtInput, MascotasUncheckedUpdateWithoutRazasGevtInput>
    create: XOR<MascotasCreateWithoutRazasGevtInput, MascotasUncheckedCreateWithoutRazasGevtInput>
  }

  export type MascotasUpdateWithWhereUniqueWithoutRazasGevtInput = {
    where: MascotasWhereUniqueInput
    data: XOR<MascotasUpdateWithoutRazasGevtInput, MascotasUncheckedUpdateWithoutRazasGevtInput>
  }

  export type MascotasUpdateManyWithWhereWithoutRazasGevtInput = {
    where: MascotasScalarWhereInput
    data: XOR<MascotasUpdateManyMutationInput, MascotasUncheckedUpdateManyWithoutRazasGevtInput>
  }

  export type MascotasScalarWhereInput = {
    AND?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
    OR?: MascotasScalarWhereInput[]
    NOT?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
    idmascotasGevt?: IntFilter<"Mascotas"> | number
    NombreGevt?: StringFilter<"Mascotas"> | string
    idrazasGevt?: IntFilter<"Mascotas"> | number
    idcategoriasGevt?: IntFilter<"Mascotas"> | number
    idgeneroGevt?: IntFilter<"Mascotas"> | number
    estado?: EnumEstadoFilter<"Mascotas"> | $Enums.Estado
  }

  export type MascotasCreateWithoutCategoriasGevtInput = {
    NombreGevt: string
    estado: $Enums.Estado
    generoGevt: GeneroCreateNestedOneWithoutMascotasInput
    razasGevt: RazasCreateNestedOneWithoutMascotasInput
  }

  export type MascotasUncheckedCreateWithoutCategoriasGevtInput = {
    idmascotasGevt?: number
    NombreGevt: string
    idrazasGevt: number
    idgeneroGevt: number
    estado: $Enums.Estado
  }

  export type MascotasCreateOrConnectWithoutCategoriasGevtInput = {
    where: MascotasWhereUniqueInput
    create: XOR<MascotasCreateWithoutCategoriasGevtInput, MascotasUncheckedCreateWithoutCategoriasGevtInput>
  }

  export type MascotasCreateManyCategoriasGevtInputEnvelope = {
    data: MascotasCreateManyCategoriasGevtInput | MascotasCreateManyCategoriasGevtInput[]
    skipDuplicates?: boolean
  }

  export type MascotasUpsertWithWhereUniqueWithoutCategoriasGevtInput = {
    where: MascotasWhereUniqueInput
    update: XOR<MascotasUpdateWithoutCategoriasGevtInput, MascotasUncheckedUpdateWithoutCategoriasGevtInput>
    create: XOR<MascotasCreateWithoutCategoriasGevtInput, MascotasUncheckedCreateWithoutCategoriasGevtInput>
  }

  export type MascotasUpdateWithWhereUniqueWithoutCategoriasGevtInput = {
    where: MascotasWhereUniqueInput
    data: XOR<MascotasUpdateWithoutCategoriasGevtInput, MascotasUncheckedUpdateWithoutCategoriasGevtInput>
  }

  export type MascotasUpdateManyWithWhereWithoutCategoriasGevtInput = {
    where: MascotasScalarWhereInput
    data: XOR<MascotasUpdateManyMutationInput, MascotasUncheckedUpdateManyWithoutCategoriasGevtInput>
  }

  export type MascotasCreateWithoutGeneroGevtInput = {
    NombreGevt: string
    estado: $Enums.Estado
    categoriasGevt: CategoriasCreateNestedOneWithoutMascotasInput
    razasGevt: RazasCreateNestedOneWithoutMascotasInput
  }

  export type MascotasUncheckedCreateWithoutGeneroGevtInput = {
    idmascotasGevt?: number
    NombreGevt: string
    idrazasGevt: number
    idcategoriasGevt: number
    estado: $Enums.Estado
  }

  export type MascotasCreateOrConnectWithoutGeneroGevtInput = {
    where: MascotasWhereUniqueInput
    create: XOR<MascotasCreateWithoutGeneroGevtInput, MascotasUncheckedCreateWithoutGeneroGevtInput>
  }

  export type MascotasCreateManyGeneroGevtInputEnvelope = {
    data: MascotasCreateManyGeneroGevtInput | MascotasCreateManyGeneroGevtInput[]
    skipDuplicates?: boolean
  }

  export type MascotasUpsertWithWhereUniqueWithoutGeneroGevtInput = {
    where: MascotasWhereUniqueInput
    update: XOR<MascotasUpdateWithoutGeneroGevtInput, MascotasUncheckedUpdateWithoutGeneroGevtInput>
    create: XOR<MascotasCreateWithoutGeneroGevtInput, MascotasUncheckedCreateWithoutGeneroGevtInput>
  }

  export type MascotasUpdateWithWhereUniqueWithoutGeneroGevtInput = {
    where: MascotasWhereUniqueInput
    data: XOR<MascotasUpdateWithoutGeneroGevtInput, MascotasUncheckedUpdateWithoutGeneroGevtInput>
  }

  export type MascotasUpdateManyWithWhereWithoutGeneroGevtInput = {
    where: MascotasScalarWhereInput
    data: XOR<MascotasUpdateManyMutationInput, MascotasUncheckedUpdateManyWithoutGeneroGevtInput>
  }

  export type GeneroCreateWithoutMascotasInput = {
    NombreGevt: string
  }

  export type GeneroUncheckedCreateWithoutMascotasInput = {
    idgeneroGevt?: number
    NombreGevt: string
  }

  export type GeneroCreateOrConnectWithoutMascotasInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutMascotasInput, GeneroUncheckedCreateWithoutMascotasInput>
  }

  export type CategoriasCreateWithoutMascotasInput = {
    NombreGevt: string
  }

  export type CategoriasUncheckedCreateWithoutMascotasInput = {
    idcategoriasGevt?: number
    NombreGevt: string
  }

  export type CategoriasCreateOrConnectWithoutMascotasInput = {
    where: CategoriasWhereUniqueInput
    create: XOR<CategoriasCreateWithoutMascotasInput, CategoriasUncheckedCreateWithoutMascotasInput>
  }

  export type RazasCreateWithoutMascotasInput = {
    NombreGevt: string
  }

  export type RazasUncheckedCreateWithoutMascotasInput = {
    idrazasGevt?: number
    NombreGevt: string
  }

  export type RazasCreateOrConnectWithoutMascotasInput = {
    where: RazasWhereUniqueInput
    create: XOR<RazasCreateWithoutMascotasInput, RazasUncheckedCreateWithoutMascotasInput>
  }

  export type GeneroUpsertWithoutMascotasInput = {
    update: XOR<GeneroUpdateWithoutMascotasInput, GeneroUncheckedUpdateWithoutMascotasInput>
    create: XOR<GeneroCreateWithoutMascotasInput, GeneroUncheckedCreateWithoutMascotasInput>
    where?: GeneroWhereInput
  }

  export type GeneroUpdateToOneWithWhereWithoutMascotasInput = {
    where?: GeneroWhereInput
    data: XOR<GeneroUpdateWithoutMascotasInput, GeneroUncheckedUpdateWithoutMascotasInput>
  }

  export type GeneroUpdateWithoutMascotasInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateWithoutMascotasInput = {
    idgeneroGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasUpsertWithoutMascotasInput = {
    update: XOR<CategoriasUpdateWithoutMascotasInput, CategoriasUncheckedUpdateWithoutMascotasInput>
    create: XOR<CategoriasCreateWithoutMascotasInput, CategoriasUncheckedCreateWithoutMascotasInput>
    where?: CategoriasWhereInput
  }

  export type CategoriasUpdateToOneWithWhereWithoutMascotasInput = {
    where?: CategoriasWhereInput
    data: XOR<CategoriasUpdateWithoutMascotasInput, CategoriasUncheckedUpdateWithoutMascotasInput>
  }

  export type CategoriasUpdateWithoutMascotasInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasUncheckedUpdateWithoutMascotasInput = {
    idcategoriasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type RazasUpsertWithoutMascotasInput = {
    update: XOR<RazasUpdateWithoutMascotasInput, RazasUncheckedUpdateWithoutMascotasInput>
    create: XOR<RazasCreateWithoutMascotasInput, RazasUncheckedCreateWithoutMascotasInput>
    where?: RazasWhereInput
  }

  export type RazasUpdateToOneWithWhereWithoutMascotasInput = {
    where?: RazasWhereInput
    data: XOR<RazasUpdateWithoutMascotasInput, RazasUncheckedUpdateWithoutMascotasInput>
  }

  export type RazasUpdateWithoutMascotasInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type RazasUncheckedUpdateWithoutMascotasInput = {
    idrazasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
  }

  export type MascotasCreateManyRazasGevtInput = {
    idmascotasGevt?: number
    NombreGevt: string
    idcategoriasGevt: number
    idgeneroGevt: number
    estado: $Enums.Estado
  }

  export type MascotasUpdateWithoutRazasGevtInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    generoGevt?: GeneroUpdateOneRequiredWithoutMascotasNestedInput
    categoriasGevt?: CategoriasUpdateOneRequiredWithoutMascotasNestedInput
  }

  export type MascotasUncheckedUpdateWithoutRazasGevtInput = {
    idmascotasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
    idcategoriasGevt?: IntFieldUpdateOperationsInput | number
    idgeneroGevt?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type MascotasUncheckedUpdateManyWithoutRazasGevtInput = {
    idmascotasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
    idcategoriasGevt?: IntFieldUpdateOperationsInput | number
    idgeneroGevt?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type MascotasCreateManyCategoriasGevtInput = {
    idmascotasGevt?: number
    NombreGevt: string
    idrazasGevt: number
    idgeneroGevt: number
    estado: $Enums.Estado
  }

  export type MascotasUpdateWithoutCategoriasGevtInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    generoGevt?: GeneroUpdateOneRequiredWithoutMascotasNestedInput
    razasGevt?: RazasUpdateOneRequiredWithoutMascotasNestedInput
  }

  export type MascotasUncheckedUpdateWithoutCategoriasGevtInput = {
    idmascotasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
    idrazasGevt?: IntFieldUpdateOperationsInput | number
    idgeneroGevt?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type MascotasUncheckedUpdateManyWithoutCategoriasGevtInput = {
    idmascotasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
    idrazasGevt?: IntFieldUpdateOperationsInput | number
    idgeneroGevt?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type MascotasCreateManyGeneroGevtInput = {
    idmascotasGevt?: number
    NombreGevt: string
    idrazasGevt: number
    idcategoriasGevt: number
    estado: $Enums.Estado
  }

  export type MascotasUpdateWithoutGeneroGevtInput = {
    NombreGevt?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    categoriasGevt?: CategoriasUpdateOneRequiredWithoutMascotasNestedInput
    razasGevt?: RazasUpdateOneRequiredWithoutMascotasNestedInput
  }

  export type MascotasUncheckedUpdateWithoutGeneroGevtInput = {
    idmascotasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
    idrazasGevt?: IntFieldUpdateOperationsInput | number
    idcategoriasGevt?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
  }

  export type MascotasUncheckedUpdateManyWithoutGeneroGevtInput = {
    idmascotasGevt?: IntFieldUpdateOperationsInput | number
    NombreGevt?: StringFieldUpdateOperationsInput | string
    idrazasGevt?: IntFieldUpdateOperationsInput | number
    idcategoriasGevt?: IntFieldUpdateOperationsInput | number
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
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