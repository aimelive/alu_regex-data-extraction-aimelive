# alu_regex-data-extraction-aimelive

## Overview

This project is a data extraction utility written in JavaScript that uses **Regular Expressions** to extract important information from large strings of text. It is designed to help you quickly find and validate common data types such as email addresses, URLs, phone numbers, and credit card numbers from unstructured data sources.

## Features

- **Email Address Extraction:** Finds valid email addresses in text.
- **URL Extraction:** Detects and extracts HTTP and HTTPS URLs.
- **Phone Number Extraction:** Supports various standard US phone formats.
- **Credit Card Number Extraction:** Locates typical credit card numbers (Visa/MasterCard format).

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

---

**Happy Coding!**