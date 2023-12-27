import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

/**
 * Array
 */
/** */

export const SB_CLONE_ARRAY: ProjectFiles = {
  'app.js': html`
    <script>
      import { cloneArray } from '@aracna/core';

      const a = [0, 1];
      const b = cloneArray(a);

      b[0] = 1;
      b[1] = 2;

      // will log [0, 1]
      console.log(a);

      // will log [1, 2]
      console.log(b);
    </script>
  `
};

export const SB_GET_ARRAYS_DIFFERENCE: ProjectFiles = {
  'app.js': html`
    <script>
      import { getArraysDifference } from '@aracna/core';

      const a = [0, 1];
      const b = [1, 2];

      // will log [0, 2]
      console.log(getArraysDifference([a, b]));
    </script>
  `
};

export const SB_GET_ARRAYS_INTERSECTION: ProjectFiles = {
  'app.js': html`
    <script>
      import { getArraysIntersection } from '@aracna/core';

      const a = [0, 1];
      const b = [1, 2];

      // will log [1]
      console.log(getArraysIntersection([a, b]));
    </script>
  `
};

export const SB_GET_ARRAY_LAST_ITEM: ProjectFiles = {
  'app.js': html`
    <script>
      import { getArrayLastItem } from '@aracna/core';

      // will log 1
      console.log(getArrayLastItem([0, 1]));

      // will log undefined
      console.log(getArrayLastItem([]));

      // will log 0
      console.log(getArrayLastItem([]), 0);
    </script>
  `
};

export const SB_REMOVE_ARRAY_DUPLICATES: ProjectFiles = {
  'app.js': html`
    <script>
      import { removeArrayDuplicates } from '@aracna/core'

      // will log [0, 1, 2, 3]
      console.log(removeArrayDuplicates([0, 1, 2, 2, 3, 3, 3]))

      // will log [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }]
      console.log(
        removeArrayDuplicates(
          [
            { value: 0 },
            { value: 1 },
            { value: 2 },
            { value: 2 },
            { value: 3 },
            { value: 3 },
            { value: 3 }
          ],
          (array: Item[], item: Item) =>
            array.findIndex((_item: Item) => _item.value === item.value) > -1
        )
      )
    </script>
  `
};

export const SB_REMOVE_ARRAY_ITEMS: ProjectFiles = {
  'app.js': html`
    <script>
      import { removeArrayItems } from '@aracna/core'

      // will log [1]
      console.log(removeArrayItems([0, 1, 2], [0, 2]))

      // will log [0]
      console.log(
        removeArrayItems([0, 1, 2], (array: number[], item: number) => item > 0)
      )
    </script>
  `
};

export const SB_IS_ARRAY: ProjectFiles = {
  'app.js': html`
    <script>
      import { isArray } from '@aracna/core';

      // will log true
      console.log(isArray([]));

      // will log false
      console.log(isArray({}));
    </script>
  `
};

/**
 * Base16
 */
/** */

export const SB_BASE16_ENCODE: ProjectFiles = {
  'app.js': html`
    <script>
      import { encodeBase16 } from '@aracna/core';

      // will log "68656C6C6F"
      console.log(encodeBase16([104, 101, 108, 108, 111]));
    </script>
  `
};

export const SB_BASE16_DECODE: ProjectFiles = {
  'app.js': html`
    <script>
      import { decodeBase16 } from '@aracna/core';

      // will log [104, 101, 108, 108, 111]
      console.log(decodeBase16('68656C6C6F'));
    </script>
  `
};

/**
 * Base32
 */
/** */

export const SB_BASE32_ENCODE: ProjectFiles = {
  'app.js': html`
    <script>
      import { encodeBase32 } from '@aracna/core';

      // will log "NBSWY3DP"
      console.log(encodeBase32([104, 101, 108, 108, 111]));
    </script>
  `
};

export const SB_BASE32_DECODE: ProjectFiles = {
  'app.js': html`
    <script>
      import { decodeBase32 } from '@aracna/core';

      // will log [104, 101, 108, 108, 111]
      console.log(decodeBase32('NBSWY3DP'));
    </script>
  `
};

export const SB_BASE32_HEX_ENCODE: ProjectFiles = {
  'app.js': html`
    <script>
      import { encodeBase32Hex } from '@aracna/core';

      // will log "91IMOR3F"
      console.log(encodeBase32Hex([104, 101, 108, 108, 111]));
    </script>
  `
};

export const SB_BASE32_HEX_DECODE: ProjectFiles = {
  'app.js': html`
    <script>
      import { decodeBase32Hex } from '@aracna/core';

      // will log [104, 101, 108, 108, 111]
      console.log(decodeBase32Hex('91IMOR3F'));
    </script>
  `
};

/**
 * Base64
 */
/** */

export const SB_BASE64_ENCODE: ProjectFiles = {
  'app.js': html`
    <script>
      import { encodeBase64 } from '@aracna/core';

      // will log "aGVsbG8="
      console.log(encodeBase64([104, 101, 108, 108, 111]));
    </script>
  `
};

export const SB_BASE64_DECODE: ProjectFiles = {
  'app.js': html`
    <script>
      import { decodeBase64 } from '@aracna/core';

      // will log [104, 101, 108, 108, 111]
      console.log(decodeBase64('aGVsbG8='));
    </script>
  `
};

export const SB_BASE64_URL_ENCODE: ProjectFiles = {
  'app.js': html`
    <script>
      import { encodeBase64URL } from '@aracna/core';

      // will log "aGVsbG8"
      console.log(encodeBase64URL([104, 101, 108, 108, 111]));
    </script>
  `
};

export const SB_BASE64_URL_DECODE: ProjectFiles = {
  'app.js': html`
    <script>
      import { decodeBase64URL } from '@aracna/core';

      // will log [104, 101, 108, 108, 111]
      console.log(decodeBase64URL('aGVsbG8'));
    </script>
  `
};

/**
 * Blob
 */
/** */

export const SB_SERIALIZE_BLOB: ProjectFiles = {
  'app.js': html`
    <script>
      import { AracnaBlob, serializeBlob } from '@aracna/core';

      (async () => {
        const aracnaBlob = new AracnaBlob(new Blob(['hello']));
        const blob = serializeBlob(aracnaBlob);

        // will log "hello"
        console.log(await blob.text());
      })();
    </script>
  `
};

export const SB_DESERIALIZE_BLOB: ProjectFiles = {
  'app.js': html`
    <script>
      import { deserializeBlob } from '@aracna/core';

      (async () => {
        const blob = new Blob(['hello']);
        const aracnaBlob = await deserializeBlob(blob, { resolveText: true });

        // will log "hello"
        console.log(aracnaBlob.text);
      })();
    </script>
  `
};

/**
 * Cookie
 */
/** */

export const SB_SERIALIZE_COOKIE: ProjectFiles = {
  'app.js': html`
    <script>
      import { serializeCookie } from '@aracna/core';

      // will log "a=0"
      console.log(serializeCookie('a', '0'));
    </script>
  `
};

export const SB_DESERIALIZE_COOKIE: ProjectFiles = {
  'app.js': html`
    <script>
      import { deserializeCookie } from '@aracna/core';

      // will log { a: "0" }
      console.log(deserializeCookie('a=0'));
    </script>
  `
};

/**
 * Date
 */
/** */

export const SB_GET_DATE_UNIX_TIME: ProjectFiles = {
  'app.js': html`
    <script>
      import { getDateUnixTime } from '@aracna/core';

      // will log 1660232042878
      console.log(getDateUnixTime('2022-08-11T15:34:02.878Z'));

      // will log 16602320428
      console.log(getDateUnixTime('2022-08-11T15:34:02.878Z', 's'));
    </script>
  `
};

/**
 * Emoji
 */
/** */

export const SB_GET_EMOJI_FROM_COUNTRY_CODE: ProjectFiles = {
  'app.js': html`
    <script>
      import { getEmojiFromCountryCode } from '@aracna/core';

      // will log 🇮🇹
      console.log(getEmojiFromCountryCode('IT'));

      // will log 🇩🇪
      console.log(getEmojiFromCountryCode('DE'));
    </script>
  `
};

/**
 * Error
 */
/** */

export const SB_IS_ERROR: ProjectFiles = {
  'app.js': html`
    <script>
      import { isError } from '@aracna/core';

      // will log true
      console.log(isError(new Error()));
    </script>
  `
};

/**
 * Fetch
 */
/** */

export const SB_DELETE_FETCH_REQUEST_INIT_HEADER: ProjectFiles = {
  'app.js': html`
    <script>
      import {
        deleteFetchRequestInitHeader,
        getFetchRequestInitHeadersEntries
      } from '@aracna/core';

      const init = { headers: { a: '0', b: '1' } };
      deleteFetchRequestInitHeader(init, 'a');

      // will log [["b", "1"]]
      console.log(getFetchRequestInitHeadersEntries(init));
    </script>
  `
};

export const SB_GET_FETCH_REQUEST_INIT_HEADER: ProjectFiles = {
  'app.js': html`
    <script>
      import { getFetchRequestInitHeader } from '@aracna/core';

      const init = { headers: { authorization: 'token' } };

      // will log "token"
      console.log(getFetchRequestInitHeader(init, 'authorization'));
    </script>
  `
};

export const SB_GET_FETCH_REQUEST_INIT_HEADERS_ENTRIES: ProjectFiles = {
  'app.js': html`
    <script>
      import { getFetchRequestInitHeadersEntries } from '@aracna/core';

      const init = { headers: { a: '0', b: '1' } };

      // will log [["a", "0"], ["b", "1"]]
      console.log(getFetchRequestInitHeadersEntries(init));
    </script>
  `
};

export const SB_COUNT_FETCH_REQUEST_INIT_HEADERS: ProjectFiles = {
  'app.js': html`
    <script>
      import { countFetchRequestInitHeaders } from '@aracna/core';

      const init = { headers: { a: '0', b: '1' } };

      // will log 2
      console.log(countFetchRequestInitHeaders(init));
    </script>
  `
};

export const SB_SET_FETCH_REQUEST_INIT_HEADER: ProjectFiles = {
  'app.js': html`
    <script>
      import {
        getFetchRequestInitHeader,
        setFetchRequestInitHeader
      } from '@aracna/core';

      const init = {};
      setFetchRequestInitHeader(init, 'authorization', 'token');

      // will log "token"
      console.log(getFetchRequestInitHeader(init, 'authorization'));
    </script>
  `
};

export const SB_SET_FETCH_REQUEST_INIT_HEADER_WHEN_UNSET: ProjectFiles = {
  'app.js': html`
    <script>
      import {
        getFetchRequestInitHeader,
        setFetchRequestInitHeaderWhenUnset
      } from '@aracna/core';

      const init = {};
      setFetchRequestInitHeaderWhenUnset(init, 'authorization', 'token');

      // will log "token"
      console.log(getFetchRequestInitHeader(init, 'authorization'));

      // will not set the header since it is already set
      setFetchRequestInitHeaderWhenUnset(init, 'authorization', 'token2');

      // will still log "token"
      console.log(getFetchRequestInitHeader(init, 'authorization'));
    </script>
  `
};

export const SB_HAS_FETCH_REQUEST_INIT_HEADER: ProjectFiles = {
  'app.js': html`
    <script>
      import {
        hasFetchRequestInitHeader,
        setFetchRequestInitHeader
      } from '@aracna/core';

      const init = {};
      setFetchRequestInitHeader(init, 'authorization', 'token');

      // will log true
      console.log(hasFetchRequestInitHeader(init, 'authorization'));
    </script>
  `
};

export const SB_MERGE_FETCH_REQUEST_INITS: ProjectFiles = {
  'app.js': html`
    <script>
      import {
        getFetchRequestInitHeadersEntries,
        mergeFetchRequestInits
      } from '@aracna/core';

      const source = { headers: { a: '0' }, method: 'GET' };
      const target = { headers: { b: '1' }, method: 'POST' };
      const merge = mergeFetchRequestInits(source, target);

      // will log [["a", "0"], ["b", "1"]]
      console.log(getFetchRequestInitHeadersEntries(merged_init));

      // will log "POST"
      console.log(merged_init.method);
    </script>
  `
};

export const SB_TO_NATIVE_FETCH_REQUEST_INIT: ProjectFiles = {
  'app.js': html`
    <script>
      import {
        getFetchRequestInitHeader,
        toNativeFetchRequestInit
      } from '@aracna/core';

      const init = { body: { name: 'John' } };
      const native = toNativeFetchRequestInit(init);

      // will log "{ "name": "John" }"
      console.log(native.body);

      // will log "application/json"
      console.log(getFetchRequestInitHeader(native, 'content-type'));
    </script>
  `
};

export const SB_TO_LOGGABLE_FETCH_REQUEST_INIT: ProjectFiles = {
  'app.js': html`
    <script>
      import { toLoggableFetchRequestInit } from '@aracna/core';

      const init = {};

      init.body = new FormData();
      init.body.set('name', 'John');

      // will log "{ "body": { "name": "John" } }"
      console.log(toLoggableFetchRequestInit(init));
    </script>
  `
};

export const SB_TO_LOGGABLE_NATIVE_FECTH_REQUEST_INIT: ProjectFiles = {
  'app.js': html`
    <script>
      import { toLoggableNativeFetchRequestInit } from '@aracna/core';

      const init = {};

      init.body = new FormData();
      init.body.set('name', 'John');

      // will log "{ "body": { "name": "John" } }"
      console.log(toLoggableNativeFetchRequestInit(init));
    </script>
  `
};

/**
 * File
 */
/** */

export const SB_SERIALIZE_FILE: ProjectFiles = {
  'app.js': html`
    <script>
      import { AracnaFile, serializeFile } from '@aracna/core';

      (async () => {
        const aracnaFile = new AracnaFile(new File(['hello'], 'file.txt'));
        const file = serializeFile(aracnaFile);

        // will log "file.txt"
        console.log(file.name);

        // will log "hello"
        console.log(await file.text());
      })();
    </script>
  `
};

export const SB_DESERIALIZE_FILE: ProjectFiles = {
  'app.js': html`
    <script>
      import { deserializeFile } from '@aracna/core';

      (async () => {
        const file = new File(['hello'], 'file.txt');
        const aracnaFile = await deserializeFile(file, { resolveText: true });

        // will log "file.txt"
        console.log(aracnaFile.name);

        // will log "hello"
        console.log(aracnaFile.text);
      })();
    </script>
  `
};

/**
 * FormData
 */
/** */

export const SB_SERIALIZE_FORM_DATA: ProjectFiles = {
  'app.js': html`
    <script>
      import { serializeFormData } from '@aracna/core';

      const person = {
        age: 20,
        features: {
          eyes: 'Brown',
          height: 175
        },
        name: 'John',
        picture: new Blob([])
      };

      const data = serializeFormData(person);

      // will log "20"
      console.log(data.get('age'));

      // will log "{ "eyes": "Brown", "height": 175 }"
      console.log(data.get('features'));

      // will log "John"
      console.log(data.get('name'));

      // will log Blob
      console.log(data.get('picture'));
    </script>
  `
};

export const SB_DESERIALIZE_FORM_DATA: ProjectFiles = {
  'app.js': html`
    <script>
      import { deserializeFormData } from '@aracna/core';

      const data = new FormData();

      data.append('age', '20');
      data.append('features', JSON.stringify({ eyes: 'Brown', height: 175 }));
      data.append('name', 'John');
      data.append('picture', new Blob([]));

      // will log { age: 20, features: { eyes: "Brown", height: 175 }, name: "John", picture: Blob }
      console.log(deserializeFormData(data));
    </script>
  `
};

/**
 * Function
 */
/** */

export const SB_IS_INSTANCE_OF: ProjectFiles = {
  'app.js': html`
    <script>
      import { isInstanceOf } from '@aracna/core';

      // will log true
      console.log(isInstanceOf(new Blob([]), Blob));
    </script>
  `
};

/**
 * Interval
 */
/** */

export const SB_INTERVAL_SET: ProjectFiles = {
  'app.js': html`
    <script>
      import { setInterval } from '@aracna/core';

      function fn() {
        console.log('running', Date.now());
      }

      setInterval(fn, 1000);
    </script>
  `
};

export const SB_INTERVAL_SET_CUSTOM_KEY: ProjectFiles = {
  'app.js': html`
    <script>
      import { setInterval } from '@aracna/core';

      const key = 'interval';

      setInterval(() => console.log('running', Date.now()), 1000, key);
    </script>
  `
};

export const SB_INTERVAL_CLEAR: ProjectFiles = {
  'app.js': html`
    <script>
      import { clearInterval, setInterval } from '@aracna/core';

      function fn() {
        console.log('running', Date.now());
      }

      setInterval(fn, 1000);
      setTimeout(() => clearInterval(fn), 2500);
    </script>
  `
};

export const SB_INTERVAL_CLEAR_EVERY: ProjectFiles = {
  'app.js': html`
    <script>
      import { clearEveryInterval, setInterval } from '@aracna/core';

      function fn() {
        console.log('running', Date.now());
      }

      setInterval(() => console.log('running 1', Date.now()), 1000);
      setInterval(() => console.log('running 2', Date.now()), 1000);

      setTimeout(() => clearEveryInterval(), 2500);
    </script>
  `
};

export const SB_INTERVAL_IS_SET: ProjectFiles = {
  'app.js': html`
    <script>
      import { isIntervalSet, setInterval } from '@aracna/core';

      function fn() {
        console.log('running', Date.now());
      }
      setInterval(fn, 1000);

      // will log true
      console.log(isIntervalSet(fn));
    </script>
  `
};

/**
 * Logger
 */
/** */

export const SB_LOGGER_GET_ANSI_COLOR: ProjectFiles = {
  'app.js': html`
    <script>
      import { getLoggerAnsiColor } from '@aracna/core';

      // will log "\\x1b[35m"
      console.log(getLoggerAnsiColor('debug'));

      // will log "\\x1b[31m"
      console.log(getLoggerAnsiColor('error'));

      // will log "\\x1b[34m"
      console.log(getLoggerAnsiColor('info'));

      // will log "\\x1b[37m"
      console.log(getLoggerAnsiColor('verbose'));

      // will log "\\x1b[33m"
      console.log(getLoggerAnsiColor('warn'));
    </script>
  `
};

/**
 * Number
 */
/** */

export const SB_GET_ABSOLUTE_NUMBER: ProjectFiles = {
  'app.js': html`
    <script>
      import { getAbsoluteNumber } from '@aracna/core';

      // will log 1
      console.log(getAbsoluteNumber(-1));
    </script>
  `
};

export const SB_GET_FIXED_NUMBER: ProjectFiles = {
  'app.js': html`
    <script>
      import { getFixedNumber } from '@aracna/core';

      // will log 2.5
      console.log(getFixedNumber(2.51, 1));
    </script>
  `
};

export const SB_GET_NUMBERS_DISTANCE: ProjectFiles = {
  'app.js': html`
    <script>
      import { getNumbersDistance } from '@aracna/core';

      // will log 2
      console.log(getNumbersDistance(3, 5));
    </script>
  `
};

export const SB_GET_LIMITED_NUMBER: ProjectFiles = {
  'app.js': html`
    <script>
      import { getLimitedNumber } from '@aracna/core';

      // will log 3
      console.log(getLimitedNumber(5, { max: 3 }));
    </script>
  `
};

export const SB_GET_NUMBER_PERCENTAGE: ProjectFiles = {
  'app.js': html`
    <script>
      import { getNumberPercentage } from '@aracna/core';

      // will log 75%
      console.log(getNumberPercentage(75));
    </script>
  `
};

export const SB_GET_HIGHEST_NUMBER: ProjectFiles = {
  'app.js': html`
    <script>
      import { getHighestNumber } from '@aracna/core';

      // will log 2
      console.log(getHighestNumber(0, 1, 2));
    </script>
  `
};

export const SB_GET_LOWEST_NUMBER: ProjectFiles = {
  'app.js': html`
    <script>
      import { getLowestNumber } from '@aracna/core';

      // will log 0
      console.log(getLowestNumber(0, 1, 2));
    </script>
  `
};

export const SB_PARSE_BIG_INT: ProjectFiles = {
  'app.js': html`
    <script>
      import { parseBigInt } from '@aracna/core';

      // will log 1n
      console.log(parseBigInt('1'));
    </script>
  `
};

export const SB_PARSE_NUMBER: ProjectFiles = {
  'app.js': html`
    <script>
      import { parseNumber } from '@aracna/core';

      // will log 5
      console.log(parseNumber('5'));

      // will log 2.5
      console.log(parseNumber('2.5'));
    </script>
  `
};

export const SB_IS_NUMBER_EVEN: ProjectFiles = {
  'app.js': html`
    <script>
      import { isNumberEven } from '@aracna/core';

      // will log true
      console.log(isNumberEven(0));
    </script>
  `
};

export const SB_IS_NUMBER_MULTIPLE_OF: ProjectFiles = {
  'app.js': html`
    <script>
      import { isNumberMultipleOf } from '@aracna/core';

      // will log true
      console.log(isNumberMultipleOf(4, 2));
    </script>
  `
};

export const SB_IS_NUMBER_ODD: ProjectFiles = {
  'app.js': html`
    <script>
      import { isNumberOdd } from '@aracna/core';

      // will log true
      console.log(isNumberOdd(1));
    </script>
  `
};

/**
 * Object
 */
/** */

export const SB_CLONE_OBJECT: ProjectFiles = {
  'app.js': html`
    <script>
      import { cloneObject } from '@aracna/core';

      let object, clone;

      object = { deep: { value: 0 }, shallow: 0 };
      clone = cloneObject(object);

      clone.shallow++;

      // will log 0
      console.log(object.shallow);

      clone.deep.value++;

      // will log 1
      console.log(object.deep.value);

      clone = cloneObject(object, { deep: true });

      clone.deep.value++;

      // will log 1
      console.log(object.deep.value);
    </script>
  `
};

export const SB_COPY_OBJECT_PROPERTY: ProjectFiles = {
  'app.js': html`
    <script>
      import { copyObjectProperty } from '@aracna/core';

      const source = { deep: { value: 0 }, shallow: 0 };
      const target = {};

      // will copy the "shallow" property from source to target
      copyObjectProperty(source, 'shallow', target);

      // will log 0
      console.log(object.shallow);

      // will copy the "deep" property from source to target
      copyObjectProperty(source, 'deep', target);

      // will log 0
      console.log(getObjectProperty(object, 'deep.value'));
    </script>
  `
};

export const SB_DELETE_OBJECT_PROPERTY: ProjectFiles = {
  'app.js': html`
    <script>
      import { deleteObjectProperty } from '@aracna/core';

      const object = { deep: { value: 0 }, shallow: 0 };

      // will delete the "shallow" property
      deleteObjectProperty(object, 'shallow');

      // will log { deep: { value: 0 } }
      console.log(object);

      // will delete the "deep.value" property
      deleteObjectProperty(object, 'deep.value');

      // will log { deep: {} }
      console.log(object);
    </script>
  `
};

export const SB_DELETE_OBJECT_PROPERTIES: ProjectFiles = {
  'app.js': html`
    <script>
      import { deleteObjectProperties } from '@aracna/core';

      const object = { deep: { value: 0 }, shallow: 0 };

      deleteObjectProperties(object, ['deep.value', 'shallow']);

      // will log { deep: {} }
      console.log(object);
    </script>
  `
};

export const SB_FLATTEN_OBJECT: ProjectFiles = {
  'app.js': html`
    <script>
      import { flattenObject } from '@aracna/core';

      const object = { deep: { value: 0 }, shallow: 0 };

      // will log { "deep.value": 0, shallow: 0 }
      console.log(flattenObject(object));
    </script>
  `
};

export const SB_GET_OBJECT_PROPERTY: ProjectFiles = {
  'app.js': html`
    <script>
      import { getObjectProperty } from '@aracna/core';

      const object = { deep: { value: 0 }, shallow: 0 };

      // will log 0
      console.log(getObjectProperty(object, 'shallow'));

      // will log 0
      console.log(getObjectProperty(object, 'deep.value'));
    </script>
  `
};

export const SB_MERGE_OBJECTS: ProjectFiles = {
  'app.js': html`
    <script>
      import { mergeObjects } from '@aracna/core';

      const source = { a: 0 };
      const target = { b: 1 };

      // will log { a: 0, b: 1 }
      console.log(mergeObjects(source, target));
    </script>
  `
};

export const SB_OMIT_OBJECT_PROPERTIES: ProjectFiles = {
  'app.js': html`
    <script>
      import { omitObjectProperties } from '@aracna/core';

      const object = { a: 0, b: 1, c: 2 };

      // will log { b: 1 }
      console.log(omitObjectProperties(object, ['a', 'c']));
    </script>
  `
};

export const SB_PICK_OBJECT_PROPERTIES: ProjectFiles = {
  'app.js': html`
    <script>
      import { pickObjectProperties } from '@aracna/core';

      const object = { a: 0, b: 1, c: 2 };

      // will log { a: 0, c: 2 }
      console.log(pickObjectProperties(object, ['a', 'c']));
    </script>
  `
};

export const SB_SET_OBJECT_PROPERTY: ProjectFiles = {
  'app.js': html`
    <script>
      import { setObjectProperty } from '@aracna/core';

      const object = {};

      // will set the "shallow" property with value 0
      setObjectProperty(object, 'shallow', 0);

      // will log 0
      console.log(object.shallow);

      // will set the "deep.value" property with value 0
      setObjectProperty(object, 'deep.value', 0);

      // will log { value: 0 }
      console.log(object.deep);

      // will log { shallow: 0, deep: { value: 0 } }
      console.log(object);

      // will set the "deep" property with value { value: 1 }
      setObjectProperty(object, 'deep', { value: 1 });

      // will log { value: 1 }
      console.log(object.deep);
    </script>
  `
};

export const SB_HAS_OBJECT_PROPERTY: ProjectFiles = {
  'app.js': html`
    <script>
      import { hasObjectProperty } from '@aracna/core';

      const object = { deep: { value: 0 }, shallow: 0 };

      // will log true
      console.log(hasObjectProperty(object, 'shallow'));

      // will log true
      console.log(hasObjectProperty(object, 'deep.value'));
    </script>
  `
};

export const SB_IS_OBJECT: ProjectFiles = {
  'app.js': html`
    <script>
      import { isObject } from '@aracna/core';

      // will log true
      console.log(isObject({}));
    </script>
  `
};

export const SB_IS_OBJECT_CLONABLE: ProjectFiles = {
  'app.js': html`
    <script>
      import { isObjectClonable } from '@aracna/core';

      // will log true
      console.log(isObjectClonable({}));

      // will log true
      console.log(isObjectClonable([]));
    </script>
  `
};

export const SB_IS_OBJECT_FLATTENABLE: ProjectFiles = {
  'app.js': html`
    <script>
      import { isObjectFlattenable } from '@aracna/core';

      // will log true
      console.log(isObjectFlattenable({}));

      // will log true
      console.log(isObjectFlattenable([], { array: true }));
    </script>
  `
};

export const SB_IS_OBJECT_KEYS_POPULATED: ProjectFiles = {
  'app.js': html`
    <script>
      import { isObjectKeysPopulated } from '@aracna/core';

      // will log true
      console.log(isObjectKeysPopulated({ a: 0 }));
    </script>
  `
};

export const SB_IS_OBJECT_VALUES_POPULATED: ProjectFiles = {
  'app.js': html`
    <script>
      import { isObjectValuesPopulated } from '@aracna/core';

      // will log true
      console.log(isObjectValuesPopulated({ a: 0 }));
    </script>
  `
};

export const SB_IS_PLAIN_OBJECT: ProjectFiles = {
  'app.js': html`
    <script>
      import { isPlainObject } from '@aracna/core';

      // will log true
      console.log(isPlainObject({}));
    </script>
  `
};

/**
 * Promise
 */
/** */

export const SB_IS_PROMISE: ProjectFiles = {
  'app.js': html`
    <script>
      import { isPromise } from '@aracna/core';

      // will log true
      console.log(isPromise(Promise.resolve()));
    </script>
  `
};

export const SB_IS_PROMISE_LIKE: ProjectFiles = {
  'app.js': html`
    <script>
      import { noop, isPromiseLike } from '@aracna/core';

      // will log true
      console.log(isPromiseLike(Promise.resolve()));

      // will log true
      console.log(isPromiseLike({ then: noop }));
    </script>
  `
};

/**
 * String
 */
/** */

export const SB_GET_CAMEL_CASE_STRING: ProjectFiles = {
  'app.js': html`
    <script>
      import { getCamelCaseString } from '@aracna/core';

      // will log "helloWorld"
      console.log(getCamelCaseString('hello world'));
    </script>
  `
};

export const SB_GET_CAPITALIZED_STRING: ProjectFiles = {
  'app.js': html`
    <script>
      import { getCapitalizedString } from '@aracna/core';

      // will log "Hello World"
      console.log(getCapitalizedString('hello World'));

      // will log "Hello world"
      console.log(getCapitalizedString('hello World', true));
    </script>
  `
};

export const SB_GET_KEBAB_CASE_STRING: ProjectFiles = {
  'app.js': html`
    <script>
      import { getKebabCaseString } from '@aracna/core';

      // will log "hello-world"
      console.log(getKebabCaseString('hello world'));
    </script>
  `
};

export const SB_GET_PASCAL_CASE_STRING: ProjectFiles = {
  'app.js': html`
    <script>
      import { getPascalCaseString } from '@aracna/core';

      // will log "Hello World"
      console.log(getPascalCaseString('hello world'));
    </script>
  `
};

export const SB_GET_SNAKE_CASE_STRING: ProjectFiles = {
  'app.js': html`
    <script>
      import { getSnakeCaseStranger } from '@aracna/core';

      // will log "hello_world"
      console.log(getSnakeCaseStranger('hello world'));
    </script>
  `
};

export const SB_GET_SYMBOL_CASE_STRING: ProjectFiles = {
  'app.js': html`
    <script>
      import { getKebabCaseString } from '@aracna/core';

      // will log "hello.world"
      console.log(getSymbolCaseString('hello world', '.'));
    </script>
  `
};

export const SB_GENERATE_RANDOM_STRING: ProjectFiles = {
  'app.js': html`
    <script>
      import { generateRandomString } from '@aracna/core';

      // will log a 32 chars random alphanumeric string
      console.log(generateRandomString());

      // will log a 32 chars random numeric string
      console.log(generateRandomString({ alphabet: '0123456789' }));

      // will log a 8 chars random alphanumeric string
      console.log(generateRandomString({ size: 8 }));
    </script>
  `
};

export const SB_IS_STRING_FLOAT: ProjectFiles = {
  'app.js': html`
    <script>
      import { isStringFloat } from '@aracna/core';

      // will log true
      console.log(isStringFloat('1.5'));
    </script>
  `
};

export const SB_IS_STRING_INT: ProjectFiles = {
  'app.js': html`
    <script>
      import { isStringInt } from '@aracna/core';

      // will log true
      console.log(isStringInt('1'));
    </script>
  `
};

export const SB_IS_STRING_JSON: ProjectFiles = {
  'app.js': html`
    <script>
      import { isStringJSON } from '@aracna/core';

      // will log true
      console.log(isStringJSON('{}'));
    </script>
  `
};

export const SB_IS_STRING_URL: ProjectFiles = {
  'app.js': html`
    <script>
      import { isStringURL } from '@aracna/core';

      // will log true
      console.log(isStringURL('https://aracna.dariosechi.it'));
    </script>
  `
};

/**
 * TextDecoder, TextEncoder
 */
/** */

export const SB_DECODE_TEXT: ProjectFiles = {
  'app.js': html`
    <script>
      import { decodeText } from '@aracna/core';

      // will log "hello"
      console.log(decodeText(new Uint8Array([104, 101, 108, 108, 111])));
    </script>
  `
};

export const SB_ENCODE_TEXT: ProjectFiles = {
  'app.js': html`
    <script>
      import { encodeText } from '@aracna/core';

      // will log Uint8Array(5) [104, 101, 108, 108, 111]
      console.log(encodeText('hello'));
    </script>
  `
};

export const SB_GET_TEXT_DECODER: ProjectFiles = {
  'app.js': html`
    <script>
      import { getTextDecoder } from '@aracna/core';

      // will log TextDecoder
      console.log(getTextDecoder());
    </script>
  `
};

export const SB_GET_TEXT_ENCODER: ProjectFiles = {
  'app.js': html`
    <script>
      import { getTextEncoder } from '@aracna/core';

      // will log TextEncoder
      console.log(getTextEncoder());
    </script>
  `
};

/**
 * Timeout
 */
/** */

export const SB_TIMEOUT_SET: ProjectFiles = {
  'app.js': html`
    <script>
      import { clearTimeout, setTimeout } from '@aracna/core';

      function fn() {
        console.log('running', Date.now());
      }

      setTimeout(fn, 1000);
      console.log('timeout set', Date.now());

      setTimeout(() => {
        setTimeout(fn, 1000);

        // will not run anymore after 1s
        clearTimeout(fn);
      }, 2000);
    </script>
  `
};

export const SB_TIMEOUT_SET_CUSTOM_KEY: ProjectFiles = {
  'app.js': html`
    <script>
      import { clearTimeout, setTimeout } from '@aracna/core';

      const key = 'timeout';

      setTimeout(() => console.log('running t1', Date.now()), 1000, key);
      console.log('timeout set', Date.now());

      setTimeout(() => {
        setTimeout(() => console.log('running t2', Date.now()), 1000, key);

        // will not run anymore after 1s
        clearTimeout(key);
      }, 2000);
    </script>
  `
};

export const SB_TIMEOUT_CLEAR: ProjectFiles = {
  'app.js': html`
    <script>
      import { clearTimeout, setTimeout } from '@aracna/core';

      function fn() {
        console.log('running', Date.now());
      }
      setTimeout(fn, 1000);

      // will not run anymore
      clearTimeout(fn);
    </script>
  `
};

export const SB_TIMEOUT_CLEAR_EVERY: ProjectFiles = {
  'app.js': html`
    <script>
      import { clearEveryTimeout, setTimeout } from '@aracna/core';

      setTimeout(() => console.log('running t1', Date.now()), 1000);
      setTimeout(() => console.log('running t2', Date.now()), 1000);

      // both timeouts will not run
      clearEveryTimeout();
    </script>
  `
};

export const SB_TIMEOUT_IS_SET: ProjectFiles = {
  'app.js': html`
    <script>
      import { setTimeout, isTimeoutSet } from '@aracna/core';

      function fn() {
        console.log('running', Date.now());
      }
      setTimeout(fn, 1000);

      // will log true
      console.log(isTimeoutSet(fn));
    </script>
  `
};

/**
 * URL
 */
/** */

export const SB_APPEND_SEARCH_PARAMS_TO_URL: ProjectFiles = {
  'app.js': html`
    <script>
      import { appendSearchParamsToURL } from '@aracna/core';

      // will log "https://dummyjson.com/products?a=0"
      console.log(
        appendSearchParamsToURL('https://dummyjson.com/products', '?a=0')
      );
    </script>
  `
};

export const SB_CONCAT_URL: ProjectFiles = {
  'app.js': html`
    <script>
      import { concatURL } from '@aracna/core';

      // will log "https://dummyjson.com/products"
      console.log(concatURL('https://dummyjson.com/', 'products'));
    </script>
  `
};

export const SB_DESERIALIZE_URL_SEARCH_PARAMS: ProjectFiles = {
  'app.js': html`
    <script>
      import { deserializeURLSearchParams } from '@aracna/core';

      // will log "a=0&b=1"
      console.log(
        deserializeURLSearchParams(
          [
            ['a', '0'],
            ['b', '1']
          ],
          'string'
        )
      );

      // will log { a: "0", b: "1" }
      console.log(deserializeURLSearchParams('?a=0&b=1'));

      // will log [["a", "0"], ["b", "1"]]
      console.log(deserializeURLSearchParams({ a: '0', b: '1' }, 'array'));
    </script>
  `
};

export const SB_REMOVE_SEARCH_PARAMS_FROM_URL: ProjectFiles = {
  'app.js': html`
    <script>
      import { removeSearchParamsFromURL } from '@aracna/core';

      // will log "https://dummyjson.com/products"
      console.log(
        removeSearchParamsFromURL('https://dummyjson.com/products?a=0')
      );
    </script>
  `
};

export const SB_SERIALIZE_URL_SEARCH_PARAMS: ProjectFiles = {
  'app.js': html`
    <script>
      import { serializeURLSearchParams } from '@aracna/core';

      // will log URLSearchParams
      console.log(
        serializeURLSearchParams([
          ['a', '0'],
          ['b', '1']
        ])
      );

      // will log URLSearchParams
      console.log(serializeURLSearchParams('?a=0&b=1'));

      // will log URLSearchParams
      console.log(serializeURLSearchParams({ a: '0', b: '1' }));
    </script>
  `
};

export const SB_IS_URL: ProjectFiles = {
  'app.js': html`
    <script>
      import { isURL } from '@aracna/core';

      // will log true
      console.log(isURL('https://aracna.dariosechi.it'));
    </script>
  `
};
