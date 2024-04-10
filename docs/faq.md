---
sidebar: auto

---

# FAQ

## Why can't I find Messages or Calls in the Social section on my webpage's Home tab?

Google Play Store doesn't allow PlainApp to use SMS and Call Permissions. You can access these features on versions from F-droid and GitHub.

## When connecting my mobile to my PC using HTTPS, a warning appears in the browser saying, "Your connection is not private. Attackers may try to steal your information from x.x.x.x (e.g., passwords, messages, or credit cards)."

The warning is because of a self-signed TLS certificate, and there's no direct way to remove it. You can proceed by clicking "Proceed to x.x.x.x (unsafe)." Despite the warning, data between the mobile app and web interface is encrypted.

## Why screen mirror is not working?

Try use the latest version of Chrome.

## Why can't I receive the desktop notifications?

Grant Chrome Notification Permission on Windows/Mac/Linux
Go to Settings > System > Notifications & actions and make sure the Notifications option is toggled on for Chrome.

## Context menu isn't working on web page. What should I do?

If you're experiencing issues with the context menu, try opening the page in an Incognito window. Some Chrome extensions, such as the "Allow Right Click" extension, may interfere with the functionality. Disabling or removing such extensions might resolve the problem.

## Why don't I see PWA install icon?

As the webpage is using self-signed certificate, you need to do extra steps to install PWA. Check this article https://mswjs.io/docs/recipes/using-local-https/

Here is the example for Chrome / Brave
1. Open chrome://flags (or brave://flags if using Brave); 
2. Search for `unsafely-treat-insecure-origin-as-secure` flag in the list;
3. Select the “Enabled” option next to the flag.
4. Enter your URL into the field. e.g. https://10.11.1.128:8443

<img src="/images/chrome-pwa.png" width="600"/>
<img src="/images/chrome-pwa-address-bar.png" width="600"/>