# CW Storage

## Overview

The `cw-storage` smart contract enables the storage of arbitrary `objects` in any [Cosmos blockchains](https://cosmos.network/) using the [CosmWasm](https://cosmwasm.com/) framework.

This contract allows for storing `objects`, pinning and unpinning `objects` for a given sender address, and it also includes the ability to remove (forget) `objects` if they are no longer pinned.

## Usage

### Instantiate

The `cw-storage` can be instantiated as follows, refer to the schema for more information on limits and pagination configuration:

```bash
okp4d tx wasm instantiate $CODE_ID \
    --label "my-storage" \
    --from $ADDR \
    --admin $ADMIN_ADDR \
    --gas 1000000 \
    --broadcast-mode block \
    '{"bucket":"my-bucket","limits":{}, "pagination": {}}'
```

### Execute

We can store an object by providing its data in base64 encoded, we can pin the stored object to prevent it from being removed:

```bash
okp4d tx wasm execute $CONTRACT_ADDR \
    --from $ADDR \
    --gas 1000000 \
    --broadcast-mode block \
    "{\"store_object\":{\"data\": \"$(cat my-data | base64)\",\"pin\":true}}"
```

The object id is stable as it is a hash, we can't store an object twice.

With the following commands we can pin and unpin existing objects:

```bash
okp4d tx wasm execute $CONTRACT_ADDR \
    --from $ADDR \
    --gas 1000000 \
    --broadcast-mode block \
    "{\"pin_object\":{\"id\": \"$OBJECT_ID\"}}"

okp4d tx wasm execute $CONTRACT_ADDR \
    --from $ADDR \
    --gas 1000000 \
    --broadcast-mode block \
    "{\"unpin_object\":{\"id\": \"$OBJECT_ID\"}}"
```

And if an object is not pinned, or pinned by the sender of transaction, we can remove it:

```bash
okp4d tx wasm execute $CONTRACT_ADDR \
    --from $ADDR \
    --gas 1000000 \
    --broadcast-mode block \
    "{\"forget_object\":{\"id\": \"$OBJECT_ID\"}}"
```

### Query

Query an object by its id:

```bash
okp4d query wasm contract smart $CONTRACT_ADDR \
    "{\"object\": {\"id\": \"$OBJECT_ID\"}}"
```

Or its data:

```bash
okp4d query wasm contract smart $CONTRACT_ADDR \
    "{\"object_data\": {\"id\": \"$OBJECT_ID\"}}"
```

We can also list the objects, eventually filtering on the object owner:

```bash
okp4d query wasm contract smart $CONTRACT_ADDR \
    "{\"objects\": {\"address\": \"okp41p8u47en82gmzfm259y6z93r9qe63l25dfwwng6\"}}"
```

And navigate in a cursor based pagination:

```bash
okp4d query wasm contract smart $CONTRACT_ADDR \
    "{\"objects\": {\"first\": 5, \"after\": \"23Y5t5DBe7DkPwfJo3Sd26Y8Z9epmtpA1FTpdG7DiG6MD8vPRTzzbQ9TccmyoBcePkPK6atUiqcAzJVo3TfYNBGY\"}}"
```

We can also query object pins with the same cursor based pagination:

```bash
okp4d query wasm contract smart $CONTRACT_ADDR \
    "{\"object_pins\": {\"id\": \"$OBJECT_ID\", \"first\": 5, \"after\": \"23Y5t5DBe7DkPwfJo3Sd26Y8Z9epmtpA1FTpdG7DiG6MD8vPRTzzbQ9TccmyoBcePkPK6atUiqcAzJVo3TfYNBGY\"}}"
```

## InstantiateMsg

Instantiate messages

|parameter|description|
|----------|-----------|
|`bucket`|*(Required.) * **string**. The name of the bucket. The name could not be empty or contains whitespaces. If name contains whitespace, they will be removed.|
|`limits`|*(Required.) * **[BucketLimits](#bucketlimits)**. The limits of the bucket.|
|`limits.max_object_pins`|**[Uint128](#uint128)\|null**. The maximum number of pins in the bucket for an object.|
|`limits.max_object_size`|**[Uint128](#uint128)\|null**. The maximum size of the objects in the bucket.|
|`limits.max_objects`|**[Uint128](#uint128)\|null**. The maximum number of objects in the bucket.|
|`limits.max_total_size`|**[Uint128](#uint128)\|null**. The maximum total size of the objects in the bucket.|
|`pagination`|*(Required.) * **[PaginationConfig](#paginationconfig)**. The configuration for paginated query.|
|`pagination.default_page_size`|**integer\|null**. The default number of elements in a page.<br /><br />Shall be less or equal than `max_page_size`. Default to '10' if not set.|
|`pagination.max_page_size`|**integer\|null**. The maximum elements a page can contains.<br /><br />Shall be less than `u32::MAX - 1`. Default to '30' if not set.|

## ExecuteMsg

Execute messages

### ExecuteMsg::StoreObject

StoreObject store an object to the bucket and make the sender the owner of the object. The object is referenced by the hash of its content and this value is returned. If the object is already stored, an error is returned. If pin is true, the object is pinned for the sender.

|parameter|description|
|----------|-----------|
|`store_object`|*(Required.) * **object**. |
|`store_object.data`|*(Required.) * **string**. |
|`store_object.pin`|*(Required.) * **boolean**. |

### ExecuteMsg::ForgetObject

ForgetObject first unpin the object from the bucket for the considered sender, then remove it from the storage if it is not pinned anymore. If the object is pinned for other senders, it is not removed from the storage and an error is returned. If the object is not pinned for the sender, this is a no-op.

|parameter|description|
|----------|-----------|
|`forget_object`|*(Required.) * **object**. |
|`forget_object.id`|*(Required.) * **string**. |

### ExecuteMsg::PinObject

PinObject pins the object in the bucket for the considered sender. If the object is already pinned for the sender, this is a no-op. While an object is pinned, it cannot be removed from the storage.

|parameter|description|
|----------|-----------|
|`pin_object`|*(Required.) * **object**. |
|`pin_object.id`|*(Required.) * **string**. |

### ExecuteMsg::UnpinObject

UnpinObject unpins the object in the bucket for the considered sender. If the object is not pinned for the sender, this is a no-op. The object can be removed from the storage if it is not pinned anymore.

|parameter|description|
|----------|-----------|
|`unpin_object`|*(Required.) * **object**. |
|`unpin_object.id`|*(Required.) * **string**. |

## QueryMsg

Query messages

### QueryMsg::Bucket

Bucket returns the bucket information.

|parameter|description|
|----------|-----------|
|`bucket`|*(Required.) * **object**. |

### QueryMsg::Object

Object returns the object information with the given id.

|parameter|description|
|----------|-----------|
|`object`|*(Required.) * **object**. |
|`object.id`|*(Required.) * **string**. The id of the object to get.|

### QueryMsg::Objects

Objects returns the list of objects in the bucket with support for pagination.

|parameter|description|
|----------|-----------|
|`objects`|*(Required.) * **object**. |
|`objects.address`|**string\|null**. The owner of the objects to get.|
|`objects.after`|**string\|null**. The point in the sequence to start returning objects.|
|`objects.first`|**integer\|null**. The number of objects to return.|

### QueryMsg::ObjectData

ObjectData returns the content of the object with the given id.

|parameter|description|
|----------|-----------|
|`object_data`|*(Required.) * **object**. |
|`object_data.id`|*(Required.) * **string**. The id of the object to get.|

### QueryMsg::ObjectPins

ObjectPins returns the list of addresses that pinned the object with the given id with support for pagination.

|parameter|description|
|----------|-----------|
|`object_pins`|*(Required.) * **object**. |
|`object_pins.after`|**string\|null**. The point in the sequence to start returning pins.|
|`object_pins.first`|**integer\|null**. The number of pins to return.|
|`object_pins.id`|*(Required.) * **string**. The id of the object to get the pins for.|

## Responses

### bucket

BucketResponse is the response of the Bucket query.

|property|description|
|----------|-----------|
|`limits`|*(Required.) * **[BucketLimits](#bucketlimits)**. The limits of the bucket.|
|`limits.max_object_pins`|**[Uint128](#uint128)\|null**. The maximum number of pins in the bucket for an object.|
|`limits.max_object_size`|**[Uint128](#uint128)\|null**. The maximum size of the objects in the bucket.|
|`limits.max_objects`|**[Uint128](#uint128)\|null**. The maximum number of objects in the bucket.|
|`limits.max_total_size`|**[Uint128](#uint128)\|null**. The maximum total size of the objects in the bucket.|
|`name`|*(Required.) * **string**. The name of the bucket.|
|`pagination`|*(Required.) * **[PaginationConfig](#paginationconfig)**. The configuration for paginated query.|
|`pagination.default_page_size`|**integer\|null**. The default number of elements in a page.<br /><br />Shall be less or equal than `max_page_size`. Default to '10' if not set.|
|`pagination.max_page_size`|**integer\|null**. The maximum elements a page can contains.<br /><br />Shall be less than `u32::MAX - 1`. Default to '30' if not set.|

### object

ObjectResponse is the response of the Object query.

|property|description|
|----------|-----------|
|`id`|*(Required.) * **string**. The id of the object.|
|`is_pinned`|*(Required.) * **boolean**. Tells if the object is pinned by at least one address.|
|`owner`|*(Required.) * **string**. The owner of the object.|
|`size`|*(Required.) * **[Uint128](#uint128)**. The size of the object.|

### object_data

Binary is a wrapper around Vec&lt;u8&gt; to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.

This is only needed as serde-json-\{core,wasm\} has a horrible encoding for Vec&lt;u8&gt;. See also &lt;https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md&gt;.

|type|
|----|
|**string**.|

### object_pins

ObjectPinsResponse is the response of the GetObjectPins query.

|property|description|
|----------|-----------|
|`data`|*(Required.) * **Array&lt;string&gt;**. The list of addresses that pinned the object.|
|`page_info`|*(Required.) * **[PageInfo](#pageinfo)**. The page information.|
|`page_info.cursor`|**string**. The cursor to the next page.|
|`page_info.has_next_page`|**boolean**. Tells if there is a next page.|

### objects

ObjectsResponse is the response of the Objects query.

|property|description|
|----------|-----------|
|`data`|*(Required.) * **Array&lt;[ObjectResponse](#objectresponse)&gt;**. The list of objects in the bucket.|
|`page_info`|*(Required.) * **[PageInfo](#pageinfo)**. The page information.|
|`page_info.cursor`|**string**. The cursor to the next page.|
|`page_info.has_next_page`|**boolean**. Tells if there is a next page.|

## Definitions

### Binary

A string containing Base64-encoded data.

|type|
|----|
|**string**.|

### BucketLimits

BucketLimits is the type of the limits of a bucket.

The limits are optional and if not set, there is no limit.

|property|description|
|----------|-----------|
|`max_object_pins`|**[Uint128](#uint128)\|null**. The maximum number of pins in the bucket for an object.|
|`max_object_size`|**[Uint128](#uint128)\|null**. The maximum size of the objects in the bucket.|
|`max_objects`|**[Uint128](#uint128)\|null**. The maximum number of objects in the bucket.|
|`max_total_size`|**[Uint128](#uint128)\|null**. The maximum total size of the objects in the bucket.|

### ObjectResponse

ObjectResponse is the response of the Object query.

|property|description|
|----------|-----------|
|`id`|*(Required.) * **string**. The id of the object.|
|`is_pinned`|*(Required.) * **boolean**. Tells if the object is pinned by at least one address.|
|`owner`|*(Required.) * **string**. The owner of the object.|
|`size`|*(Required.) * **[Uint128](#uint128)**. The size of the object.|

### PageInfo

PageInfo is the page information returned for paginated queries.

|property|description|
|----------|-----------|
|`cursor`|*(Required.) * **string**. The cursor to the next page.|
|`has_next_page`|*(Required.) * **boolean**. Tells if there is a next page.|

### PaginationConfig

PaginationConfig is the type carrying configuration for paginated queries.

The fields are optional and if not set, there is a default configuration.

|property|description|
|----------|-----------|
|`default_page_size`|**integer\|null**. The default number of elements in a page.<br /><br />Shall be less or equal than `max_page_size`. Default to '10' if not set.|
|`max_page_size`|**integer\|null**. The maximum elements a page can contains.<br /><br />Shall be less than `u32::MAX - 1`. Default to '30' if not set.|

### Uint128

A string containing a 128-bit integer in decimal representation.

|type|
|----|
|**string**.|

---

*Rendered by [Fadroma](https://fadroma.tech) ([@fadroma/schema 1.1.0](https://www.npmjs.com/package/@fadroma/schema)) from `cw-storage.json` (`056d39e83fadd8bd`)*
