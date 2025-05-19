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

// 3. PHONE NUMBERS (US/General formats)
function extractPhoneNumbers(text) {
  // Matches (123) 456-7890, 123-456-7890, 123.456.7890
  const regex = /(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}/g;
  return text.match(regex) || [];
}

// 4. CREDIT CARD NUMBERS (Visa/MasterCard style)
function extractCreditCards(text) {
  // Matches 1234 5678 9012 3456 or 1234-5678-9012-3456
  const regex = /\b(?:\d{4}[- ]?){3}\d{4}\b/g;
  return text.match(regex) || [];
}

// Example usage:
const sample = `
    Email: user@example.com, firstname.lastname@company.co.uk
    URLs: https://www.example.com https://subdomain.example.org/page
    Phone: (123) 456-7890, 123-456-7890, 123.456.7890
    Credit: 1234 5678 9012 3456, 1234-5678-9012-3456
`;

console.log("Emails:", extractEmails(sample));
console.log("URLs:", extractURLs(sample));
console.log("Phones:", extractPhoneNumbers(sample));
console.log("Credit Cards:", extractCreditCards(sample));
