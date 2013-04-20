# CrowdComputer 4 Mechanical Turk #

## Intro ##
We are a [group](http://www.lifeparticipation.org/) of researcher from [Univeristy of Trento](http://disi.unitn.it/) working on Crowdsourcing.

We are bulding a new platform for crwodsourcing, the [**CROWDCOMPUTER**](http://www.crowdcomputer.org) that amongs other features allow you to separate the data of your **application** (so what stays in your control and that is run on your server) from the **platform** (who provides you with the base actions to crwodsource a task).

[Amazon Mecanical Turk](https://www.mturk.com) is the most known and used platfom, and as only few knows it also allow you to have the UI on **external** (see [amazon reference page](http://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ExternalQuestionArticle.html) )applications. You can create your html page and use it to recive/send data from/to Mturk. *NB: you have to use APIs or Console*
Yet, **ALL** the form data are sent back to Mturk, if you follow the guidelines and use the form as expleined there. 

Ideally you **CAN NOT** decide to keep some data on your side and just send back a subset of them to Mturk.

**GOOD NEWS**: **you can**. 

*Just use our JS LIBRARY*.

## How to use it##
- create your html page and form as if it will be executed on your domain. Thus, POST action should point to the page on your domain **not to mturk** page.
- add the `class="mturk"` class to each input fields you want to send back to MTURK. Each input field that has as class "mturk" is sent to mturk.
- add at the bottom of your HTML page this script. `...`
- now create your task using the External Page execution. **NB: this can be done via API or probably via Console, we are working on creating an easy way to do this**
- When executed tasks will be run on your website where you will store **ALL** the form data while only the **mturk fields** will be sent back to MTURK

## example of usages
TODO
