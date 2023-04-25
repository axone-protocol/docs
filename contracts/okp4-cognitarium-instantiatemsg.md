# InstantiateMsg Schema

```txt
undefined#/instantiate
```

Instantiate message

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [okp4-cognitarium.json\*](schema/okp4-cognitarium.json "open original schema") |

## instantiate Type

`object` ([InstantiateMsg](okp4-cognitarium-instantiatemsg.md))

# instantiate Properties

| Property          | Type   | Required | Nullable       | Defined by                                                                                                          |
| :---------------- | :----- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------ |
| [limits](#limits) | Merged | Required | cannot be null | [okp4-cognitarium](okp4-cognitarium-instantiatemsg-properties-limits.md "undefined#/instantiate/properties/limits") |

## limits

Limitations regarding store usage.

`limits`

* is required

* Type: merged type ([Details](okp4-cognitarium-instantiatemsg-properties-limits.md))

* cannot be null

* defined in: [okp4-cognitarium](okp4-cognitarium-instantiatemsg-properties-limits.md "undefined#/instantiate/properties/limits")

### limits Type

merged type ([Details](okp4-cognitarium-instantiatemsg-properties-limits.md))

all of

* [Untitled undefined type in okp4-cognitarium](okp4-cognitarium-instantiatemsg-properties-limits-allof-0.md "check type definition")

# InstantiateMsg Definitions

## Definitions group StoreLimitsInput

Reference this group by using

```json
{"$ref":"undefined#/instantiate/definitions/StoreLimitsInput"}
```

| Property                                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                |
| :---------------------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [max\_byte\_size](#max_byte_size)                                 | Merged    | Optional | cannot be null | [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_byte_size.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_byte_size")                               |
| [max\_insert\_data\_byte\_size](#max_insert_data_byte_size)       | Merged    | Optional | cannot be null | [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_byte_size.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_insert_data_byte_size")       |
| [max\_insert\_data\_triple\_count](#max_insert_data_triple_count) | Merged    | Optional | cannot be null | [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_triple_count.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_insert_data_triple_count") |
| [max\_query\_limit](#max_query_limit)                             | `integer` | Optional | can be null    | [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_query_limit.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_query_limit")                           |
| [max\_query\_variable\_count](#max_query_variable_count)          | `integer` | Optional | can be null    | [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_query_variable_count.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_query_variable_count")         |
| [max\_triple\_byte\_size](#max_triple_byte_size)                  | Merged    | Optional | cannot be null | [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_triple_byte_size")                 |
| [max\_triple\_count](#max_triple_count)                           | Merged    | Optional | cannot be null | [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_triple_count")                         |

### max\_byte\_size

The maximum number of bytes the store can contains. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. If `None`, the default value of \[Uint128::MAX] is used, which can be considered as no limit.

`max_byte_size`

* is optional

* Type: merged type ([Details](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_byte_size.md))

* cannot be null

* defined in: [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_byte_size.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_byte_size")

#### max\_byte\_size Type

merged type ([Details](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_byte_size.md))

any of

* [Untitled undefined type in okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_byte_size-anyof-0.md "check type definition")

* [Untitled null in okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_byte_size-anyof-1.md "check type definition")

### max\_insert\_data\_byte\_size

The maximum number of bytes an insert data query can contains. If `None`, the default value of \[Uint128::MAX] is used, which can be considered as no limit.

`max_insert_data_byte_size`

* is optional

* Type: merged type ([Details](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_byte_size.md))

* cannot be null

* defined in: [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_byte_size.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_insert_data_byte_size")

#### max\_insert\_data\_byte\_size Type

merged type ([Details](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_byte_size.md))

any of

* [Untitled undefined type in okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_byte_size-anyof-0.md "check type definition")

* [Untitled null in okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_byte_size-anyof-1.md "check type definition")

### max\_insert\_data\_triple\_count

The maximum number of triples an insert data query can contains (after parsing). If `None`, the default value of \[Uint128::MAX] is used, which can be considered as no limit.

`max_insert_data_triple_count`

* is optional

* Type: merged type ([Details](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_triple_count.md))

* cannot be null

* defined in: [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_triple_count.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_insert_data_triple_count")

#### max\_insert\_data\_triple\_count Type

merged type ([Details](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_triple_count.md))

any of

* [Untitled undefined type in okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_triple_count-anyof-0.md "check type definition")

* [Untitled null in okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_triple_count-anyof-1.md "check type definition")

### max\_query\_limit

The maximum limit of a query, i.e. the maximum number of triples returned by a select query. If `None`, the default value of 30 is used.

`max_query_limit`

* is optional

* Type: `integer`

* can be null

* defined in: [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_query_limit.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_query_limit")

#### max\_query\_limit Type

`integer`

#### max\_query\_limit Constraints

**minimum**: the value of this number must greater than or equal to: `0`

**unknown format**: the value of this string must follow the format: `uint32`

### max\_query\_variable\_count

The maximum number of variables a query can select. If `None`, the default value of 30 is used.

`max_query_variable_count`

* is optional

* Type: `integer`

* can be null

* defined in: [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_query_variable_count.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_query_variable_count")

#### max\_query\_variable\_count Type

`integer`

#### max\_query\_variable\_count Constraints

**minimum**: the value of this number must greater than or equal to: `0`

**unknown format**: the value of this string must follow the format: `uint32`

### max\_triple\_byte\_size

The maximum number of bytes the store can contains for a single triple. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. The limit is used to prevent storing very large triples, especially literals. If `None`, the default value of \[Uint128::MAX] is used, which can be considered as no limit.

`max_triple_byte_size`

* is optional

* Type: merged type ([Details](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size.md))

* cannot be null

* defined in: [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_triple_byte_size")

#### max\_triple\_byte\_size Type

merged type ([Details](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size.md))

any of

* [Untitled undefined type in okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size-anyof-0.md "check type definition")

* [Untitled null in okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size-anyof-1.md "check type definition")

### max\_triple\_count

The maximum number of triples the store can contains. If `None`, the default value of \[Uint128::MAX] is used, which can be considered as no limit.

`max_triple_count`

* is optional

* Type: merged type ([Details](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count.md))

* cannot be null

* defined in: [okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count.md "undefined#/instantiate/definitions/StoreLimitsInput/properties/max_triple_count")

#### max\_triple\_count Type

merged type ([Details](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count.md))

any of

* [Untitled undefined type in okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count-anyof-0.md "check type definition")

* [Untitled null in okp4-cognitarium](okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count-anyof-1.md "check type definition")

## Definitions group Uint128

Reference this group by using

```json
{"$ref":"undefined#/instantiate/definitions/Uint128"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |
