## Web Auth Key Generator - Framework7 

Simple cordova / framework7 application that generates 5-digit code and updates it to a web server using HTTP POST Request.
After update, the administrator types this code in the web application on login site.

Adventage of using key generator is stopping brute-force attacks on your web application.

![Screenshot](https://raw.githubusercontent.com/diamond95/framework7KeyGenerator/master/1.jpg)




## PHP - HTTP Request


```php
    <?php

	if(isset($_POST['code']) && $_POST['code'] != 0 && $_POST['code'] != "") {
		// save to database
		echo "success";
	} else {
		echo "error";
	}

```
## TODO 
    - [] change key length
    - [] automatic key update after generating 
	- [] ...

## Creator

Ivan Miljanić

