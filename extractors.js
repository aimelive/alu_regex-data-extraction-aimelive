// 1. EMAIL ADDRESSES
function extractEmails(text) {
  // Matches most standard email addresses
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return text.match(regex) || [];
}

// 2. URLs
function extractURLs(text) {
  // Matches http(s) URLs
  const regex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
  return text.match(regex) || [];
}

// 3. PHONE NUMBERS
function extractPhoneNumbers(text) {
  const regex = /(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}/g;
  return text.match(regex) || [];
}

// 4. CREDIT CARD NUMBERS
function extractCreditCards(text) {
  const regex = /\b(?:\d{4}[- ]?){3}\d{4}\b/g;
  return text.match(regex) || [];
}

// 5. TIME (24-hour)
function extractTime24(text) {
  const regex = /\b([01]\d|2[0-3]):[0-5]\d\b/g;
  return text.match(regex) || [];
}

// 6. TIME (12-hour)
function extractTime12(text) {
  const regex = /\b(0?[1-9]|1[0-2]):[0-5]\d ?([APap][Mm])\b/g;
  return text.match(regex) || [];
}

// 7. HTML TAGS
function extractHTMLTags(text) {
  const regex = /<\/?[a-zA-Z][a-zA-Z0-9]*\b[^>]*>/g;
  return text.match(regex) || [];
}

// 8. HASHTAGS
function extractHashtags(text) {
  const regex = /#\w+/g;
  return text.match(regex) || [];
}

// 9. CURRENCY AMOUNTS
function extractCurrencyAmounts(text) {
  const regex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
  return text.match(regex) || [];
}

// Example usage:
const sample = `
    Email: user@example.com, firstname.lastname@company.co.uk
    URLs: https://www.example.com https://subdomain.example.org/page
    Phone: (123) 456-7890, 123-456-7890, 123.456.7890
    Credit: 1234 5678 9012 3456, 1234-5678-9012-3456
    Time: 14:30, 2:30 PM, 09:05, 11:15 am
    HTML: <p><div class="example"><img src="image.jpg" alt="desc"></div>
    Hashtags: #example #ThisIsAHashtag
    Currency: $19.99, $1,234.56, $100, $5,000
`;

console.log("Emails:", extractEmails(sample));
console.log("URLs:", extractURLs(sample));
console.log("Phones:", extractPhoneNumbers(sample));
console.log("Credit Cards:", extractCreditCards(sample));
console.log("Time (24h):", extractTime24(sample));
console.log("Time (12h):", extractTime12(sample));
console.log("HTML Tags:", extractHTMLTags(sample));
console.log("Hashtags:", extractHashtags(sample));
console.log("Currency:", extractCurrencyAmounts(sample));