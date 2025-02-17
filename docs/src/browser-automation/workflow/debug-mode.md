---
title: Debug Mode
---

# Debug Mode

When the debug mode is enabled, Automa will use Chrome Devtools Protocol API (or “CDP” for short) to emulate user Actions like clicking and typing instead of using JavaScript API.

And the debug mode is only available in the chromium version of Automa.

## Activate Debug Mode

There are two ways to activate the debug mode, the first is by going to the workflow settings, and the second is by going to the block settings. When you enable the debug mode in the workflow settings, Automa will use CDP API on the whole block.

![workflow settings](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16oapo-0c.png)

And if you only want to use the debug mode in a specific block, you can enable it in the block settings.

## When to Use It

You can use the debug mode when you want to type text on a website, but the text field uses a WYSIWYG editor, for example, typing a tweet in the editor or writing a message in Discord using the [Forms block](../blocks/forms.md).

![Block settings](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16oapn-0l.png)

Or when you want to perform a click action using an X and Y coordinate using the [Trigger Event block](../blocks/trigger-event.md).

![Trigger event block](https://s3.ap-southeast-1.amazonaws.com/automa-pub/i/2024/12/02/16oapo-9u.png)

Automa isn't able to emulate typing or clicking on those situation by using JavaScript API.
