---
title: Upload File Block
---

# Upload File Block

Upload file into an `<input type="file">` element.

- **Element selector** <br> [Selector](../workflow/element-selector.md) for the `<input type="file">` element.

- **File path** <br> The absolute path, the URL, or the base64 of the file to upload.<br> **Examples**
  - Absolute Path
    - Windows: `C:\Users\Public\Documents\testing.docx`
    - MacOS: `/Users/Josh/Desktop/docs.pdf`
  - URL
    - `https://example.com/files/document.pdf`
    - `https://example.com/words.txt`
  - Base64<br> To upload the [base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64) encoded file, you must follow this format. `filename|file mime|base64`
    - `landscape.png|image/png|data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA...`
    - `my file.json|application/json|eyJleHRWZXJzaW9uIjoiMS4xNi4yIiwibmFtZSI6...`

## Requirements

In order for this block to work, you must allow Automa to access the files by enabling the "Allow access to file URLs" option.

- Open `chrome://extensions`
- Find Automa and click the "Detail" button
- Scroll down and enable "Allow access to file URLs"

## Find the Upload File Selector

In most cases, the element for uploading the file is hidden means you can use the Element Picker to select the element. In most cases, the element for uploading the file is hidden means you can use the Element Picker to select the element. And because of that, you can use the Recording feature to find the upload file element.

1. [Start the recording](/)
2. Upload a file and stop the recording
3. Clean up the other blocks like the click element block that makes the website open a file picker window. Because it is not required when using the upload file block.

<!--@include: ../parts/blocks-interaction-note.md-->
