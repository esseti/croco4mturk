# CrowdComputer 4 Mechanical Turk #

## Intro ##
We are a [group](http://www.lifeparticipation.org/) of researchers from [Univeristy of Trento](http://disi.unitn.it/) working on Crowdsourcing.

We are bulding a new platform for crowdsourcing, the [**CROWDCOMPUTER**](http://www.crowdcomputer.org) that amongs other features allow you to separate the data of your **application** (so what stays in your control and that is run on your server) from the **platform** (which provides you with the base actions to crowdsource a task).

[Amazon Mecanical Turk](https://www.mturk.com) is the most known and used platfom, and as only few knows, it also allows you to have the UI on **external** (see [amazon reference page](http://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ExternalQuestionArticle.html) )applications. You can create your html page and use it to receive/send data from/to MTURK. *NB: you have to use APIs or Console*
Yet, **ALL** the form data are sent back to Mturk, if you follow the guidelines and use the form as expleined there. 

Ideally you **CAN NOT** decide to keep some data on your side and just send back a subset of them to Mturk.

**GOOD NEWS**: **you can**. 

*Just use our JS LIBRARY*.

## How to use it##
- create your html page and form as if it will be executed on your domain. Thus, POST action should point to the page on your domain **not to mturk** page.
- add the `class="mturk"` class to each input fields you want to send back to MTURK. Each input field that has as class "mturk" is sent to mturk.
- add at the bottom of your HTML page this script:
  - Jquery: `<script src="http://code.jquery.com/jquery-1.7.2.min.js" type="text/javascript"></script>`   
  -	The library: `<script src="croco4mturk.js" type="text/javascript"></script>` change the location accordingly. Or link the lib directly from github
- now create your task using the External Page execution. **NB: this can be done via API or probably via Console, we are working on creating an easy way to do this**
- When executed tasks will be run on your website where you will store **ALL** the form data while only the **mturk fields** will be sent back to MTURK

## Example of usages
Check the example into the *example* folder.

To run it you need a **PHP** server, like (MAMP)[http://www.mamp.info/en/index.html]

- The form in the page has 3 fields. 
- The form posts to **post1.php** which stores the post data to **mypost.txt**. this is the post that runs on your server.
- The form has 2 fields with the `class="mturk`. Those two fields (plus additional Mturk info) are sent to MTurk. For the demo purpose, if you want to run it locally, use the `var testenv = true;`.

NB: the library works on sandbox and mturk (not tested yet). the post is changed accordingly to sandbox or mturk depending on the url of the hit.


## Contacts
If interested or anything else pls contact [me](http://stefanotranquillini.me) or [pavel](http://kucherbaev.com)

###VERSIONS:
- 0.2 **CURRENT**: Post to original page is now Syncronous. Original page can respond with a *JSON array* containing objects as `{id: ..,value:..}`. These objects are sent back to Mturk with ID and VALUE.
- 0.1 - First version
