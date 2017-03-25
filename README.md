# Azure Functions - Image Resizing - JavaScript

An Azure Function for resizing images from a Queue using Node (JavaScript).

## Configuration


### App Settings

Copy `appsettings.sample.json` to `appsettings.json` and edit as required.

* `ImageStore` : connection string to storage account that contains the queue
* `AzureWebJobsStorage` : connection string to storage account to be used by Azure Functions for logging and tracking
* `ImageResizeMaxWidth` : Maximum width of image when resized