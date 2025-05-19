# alu_regex-data-extraction-aimelive

## Overview

This project is a data extraction utility written in JavaScript that uses **Regular Expressions** to extract important information from large strings of text. It is designed to help you quickly find and validate common data types such as email addresses, URLs, phone numbers, credit card numbers, and more from unstructured data sources.

## Features

- **Email Address Extraction:** Finds valid email addresses in text.
- **URL Extraction:** Detects and extracts HTTP and HTTPS URLs.
- **Phone Number Extraction:** Supports various standard US phone formats.
- **Credit Card Number Extraction:** Locates typical credit card numbers (Visa/MasterCard format).
- **Time Extraction:** Finds both 24-hour (e.g., 14:30) and 12-hour (e.g., 2:30 PM) time formats.
- **HTML Tag Extraction:** Extracts HTML tags from text.
- **Hashtag Extraction:** Finds hashtags (e.g., #example).
- **Currency Amount Extraction:** Finds USD currency amounts (e.g., $19.99, $1,234.56).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12+ recommended)
- GitHub account (for cloning/forking)

### Installation

1. **Clone this repository:**

   ```bash
   git clone https://github.com/aimelive/alu_regex-data-extraction-aimelive.git
   cd alu_regex-data-extraction-aimelive
   ```

2. **Run the project:**

   ```bash
   node extractors.js
   ```

   This will run the demo extraction on a sample string and print the results to the console.

## Regex Patterns Used

- **Email:** `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}`
- **URL:** `https?:\/\/[^\s/$.?#].[^\s]*`
- **Phone:** `(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}`
- **Credit Card:** `\b(?:\d{4}[- ]?){3}\d{4}\b`
- **Time (24h):** `\b([01]\d|2[0-3]):[0-5]\d\b`
- **Time (12h):** `\b(0?[1-9]|1[0-2]):[0-5]\d ?([APap][Mm])\b`
- **HTML Tag:** `<\/?[a-zA-Z][a-zA-Z0-9]*\b[^>]*>`
- **Hashtag:** `#\w+`
- **Currency:** `\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?`

---

**Happy Coding!**