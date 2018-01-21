
/* eslint no-param-reassign: "off" */
/*
    Taken directly from react-intl documentation.
    https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
*/
export default function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${ prefix }.${ key }` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}
