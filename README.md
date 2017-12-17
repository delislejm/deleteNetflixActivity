# Delete Netflix Activity script

This script removes easyly a user's "Activity" from a Netflix acount

## Getting Started

When you own a Netflix acount and want to delete your whole history not to be suggested movies by Netflix algorythm, you have to delete your video activity one by one and when it concerns a series, you have to come trough multiple deletion processes.

That's why i decided to automate this process.

## What does it do?

The scripts adds a button "Delete whole activity" in the "My activity" user page. 

![alt text](http://www.delislejm.com/scripts/delete-history.png)

Clicking this button scans for links with a class of "deleteBtn", adds them in an array and clicks them automatically. It then performs a scan for links with a class of "removeSeries" and clicks them again. 

```
<a class="deleteBtn" href="#" data-reactid="id">×</a>
<a class="removeSeries" data-reactid="id">Remove series?</a>
```

Once process is over you just have to press the "Done" button

### Prerequisites

* Own a Netflix acount
* Tampermonkey extension for Chrome 

### Installing

Once you have installed [Tampermonkey from Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)  

You can install the script directly from Github by copying raw link from repository and pasting the code into a new Tampermonkey script.

For furthermore information you can visit [How to install a Tampermonkey script](http://tampermonkey.net/faq.php#Q102)

## Authors

* **Jean-Marc Delisle** - *Initial work* - [deleteNetflixActivity](https://github.com/delislejm/deleteNetflixActivity)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE.md](LICENSE.md) file for details