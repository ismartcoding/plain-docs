---
sidebar: auto

---

# FAQ


## Doesn't work. Neither https nor http.

1. Double check the IP address and port number.
2. Your PC and mobile device must be in the same Wi-Fi network. 
3. Try open the webpage on your mobile device see if it works. If it works, then it's a network issue.
4. Try open the webpage on your PC using incognito mode see if it works. If it works, then it's a browser extension issue.
5. Try open the webpage on your PC using another browser see if it works. If it works, then it's a browser issue.
6. Try open the webpage on your PC using another PC see if it works. If it works, then it's a PC issue.

## Why am I encountering the error "This site can’t be reached" when attempting to access the webpage?

1. Check the PlainApp what is the color of the dot on the top right corner. If it's red, then the Web Server is not running. If it's green, then the Web Server is running well.
<img src="/images/web-server-dot-green.png" />

2. If the Web Server is running on mobile device. Check the IP address and port number in PC web browser. Make sure you have entered the correct IP address and port number.

3. If the IP address and port number are both correct. Try ping the IP address on your mobile device. If it's not reachable, then it's a network issue.

4. If the IP address is not reachable. Your PC and mobile device must be in the same Wi-Fi network.

5. If your PC and mobile device are in the same Wi-Fi network. Check your firewall settings. Make sure the port number is not blocked.

6. If the port number is not blocked. Try open the webpage on your mobile device see if it works. If it works, then it's a network issue.
<img src="/images/mobile-web.png" />

7. If it's a network issue and you still have no idea. Join the Discord server and ask for help. https://discord.gg/RQWcS6DEEe

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