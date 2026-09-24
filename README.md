<!--
  - README.md
  -->

<h1>This project is a solution to a problem of: how to build a CRUD application</h1>

1. [ What the views/pages look like & how to use them ](#views)
2. [ Database Design & Data Validation ](#database)
3. [ Local Environment Setup ](#environment)
4. [ Installation Guide ](#installation)

<!--
  - views
  -->

<a name="views"></a>
<h2>What the views/pages look like & how to use them</h2>

<h3>Login View</h3>

<img target="_blank" src="./..README/view_login.jpg" />

<p align=center><i>Login View: when visiting the website for the first time</i></p>

<strong>Below you can find a link and default credentials to check out a working version of this solution:</strong>

[kacmal.pl/testcard](https://kacmal.pl/testcard) (note: hold [CTRL] + click with the mouse -> this way it will open in a new tab instead of opening in this one.<br />

Email address: admin@localhost <br />

Password: phplaravel

<strong>There is only one account the "Admin" who can perform all the CRUD functions (Create, Read, Update and Delete) on some resources of interest.</strong>

<h3>Resources Overview Page</h3>

<img target="_blank" src="./..README/view_cards_index.jpg" />

<p align=center><i>Resources Overview Page: also knows as the "Index View of the Resources"</i></p>

First thing we're greeted with after login in is an overview of all our resources. <br />

A single resource this project stores in a database is a virtual gift card that is identified by a unique card number and some other details. <br />

This is actually an instance of the Read functionality from the CRUD suite as we're effectively reading information from the database (forcing a <code>SELECT</code> statement). <br />

We can also see a [Delete] button floating over each card and we will see it later on in a detailed view of a single card page.

<h3>Show View</h3>

<img target="_blank" src="./..README/view_card_show.jpg" />

<p align=center><i>Show View: here we can see all the details about a singular resource</i></p>

So after clicking on one of the cards listed in the index view we're now shown all of its context data (well, almost all of it as some things stored in a database are treated as meta-information and are seldom displayed in the browser -> things like the "id" attribute that is just used internally by the application). <br />

Aside from the Read functionality this page offers we can also Delete the selected resource. Mind you, a deletion should NEVER be the primary button and should never be focused once a page loads since it is a destructive functionality. Best is to add an extra confirmation button that will ask the user if they "really mean it" and that they "understand it is irreversible". <br />

Of course sometimes a [Delete] is reversible like with the so-called "soft deletions" where a resource is put into trash or is hidden away from the user's view. It is still good to add a confirmation button especially that modern browsers offer built-in solutions like the <code>window.confirm</code> function and the HTML5 <code>&lt;dialog&gt;</code> tag.

<h3>Edit View</h3>

<img target="_blank" src="./..README/view_card_edit.jpg" />

<p align=center><i>Edit View: an extended version of the Show View where we can save the edited changes</i></p>

I will admit that the original Show View shouldn't use the <code>&lt;input&gt;</code> tags to display data to the user because it can be mistakenly altered. However I wanted to test a way to make the two views as indistinguishable from one another as I could to compare with what I already knew about the standard design of the show and edit pages. For me the challenge was to accommodate the same amount of space for each displayed data in both views so that the page doesn't feel too unintuitive in the editing mode. <br />

To summarize, I like when an editing view looks very similar to the showing view and I was wondering if that could be achieved with the <code>&lt;input&gt;</code> tags. <br />

Turned out the user can mistakenly start editing the fields only to find out that it's just a presentation view and also to prevent it as a developer you cannot just set the <code>user-select: none;</code> CSS attribute since then the user cannot copy any data from the page. A much more reasonable approach would be setting the <code>readonly</code> attribute on the HTML elements itself. <br />

Let me just add one more interesting fact about the CRUD applications. And it is that the Update functionality is not directly implemented through the Edit View. The actual update is performed as a POST HTTP request sent to the web server that ultimately updates a database record. The Edit View is just auxiliary to the Update functionality so that the user can have some form of an interface to request it. 

<h3>Create View</h3>

<img target="_blank" src="./..README/view_card_create.jpg" />

<p align=center><i>Create View: a way for our application to populate the database with resources</i></p>

If we go back to the Index View we will see in the top left corner a [Create] button that redirects to this page. <br />

It feels like the right moment to talk about the validation functionalities of the application. We have to understand that a user should be "assumed guilty until proven innocent" since nothing stops us from inputting letters into a card number field that expects digits and optional spaces.

<img target="_blank" src="./..README/view_card_create_validation_client.jpg" /> | <img target="_blank" src="./..README/view_card_create_validation_server.jpg" />
:---: | :---:
<i>Client-Side Validation</i> | <i>Server-Side Validation</i>

Here we can see a crucial distinction between a client-side vs server-side validation. In the former we can optimize user request processing with respect to handling the errors before they are sent to us over the internet. However, this method is fallible as a tech-savvy user can disable the browser security measures. In the latter example we perform the data processing on the web server and return error messages to the user if such errors should occur.

<!--
  - database
  -->

<a name="database"></a>
<h2>Database Design & Data Validation</h2>

Here's a description of the database `cards` table:

Field Name | Type | Description
--- | --- | ---
id | big integer | The `id` attribute is primarily used by the application internally. It is used for things like: relations or sorting. It is worth noting that the PHP framework used in this project constrains this field to be unique across the whole set of rows and also to auto-increment its value when a new record is added. We actually don't even have to know it exists when adding something to the table.
card_number | string (max 20 chars) | This is a 20 characters number displayed on the card's face. It is also unique just like the `id` and is a potential candidate for a primary key attribute. However, it was decided otherwise because of the application's framework naming conventions that expect the "id" field name. <br /> It is worth noticing how distinct the data storage and data presentation are. We reserve 20 characters in the database but display them later interlaced with additional spaces to make the number more readable.
pin | string (max 4 chars) | What can be added to both this and the `card_number` attributes is that they both have a max character limit but there is no simple possibility to set the min count. The limit is actually imposed by the PHP framework called Laravel and what <i>I assume happens</i> is that it multiplies the actual count of characters we want times the number of bytes one character requires in the database/table -specific encoding. Long story short, most of the data storage logic is delegated to Laravel just as the min characters count per attribute.
activation_date | datetime | This is another mind-boggling datatype with respect to how database-server types are mapped. What I can tell you is that the framework once again does the heavy-lifting and stores information without the timezone overhead, manipulating the representation after it is read from the database.
expiration_date | datetime | What can also be added to both the `datetime` attributes is that they support much larger date and time range compared to the `timestamp` datatype which handles time zones in the database itself but offers shorter range.
balance | big integer | This one is pretty straightforward except for the fact of how you store the currency. A single attribute wouldn't suffice an effective implementation of localization but this project doesn't worry about it. What it does resolve though is how you deal with denomination of a given currency. Say we want to set a product to 5.99 $ that is -> 5 dollars and 99 cents: How can you do this? One option is to use a floating point number but that won't brings you anywhere because of floating point computation errors that happen naturally in the CPU (especially with respect to the IEEE 754 numeric representation). Another way is to store everything in the smaller denomination: so in our example the product would be 599 cents and this is the value we assign to the attribute.

It should also be noted that I did not include the extra framework managed fields: `created_at` and `updated_at` handled exclusively by Laravel to keep track of extra date and time information needed for extended functionalities. These attributes are not inherently relevant to this project.

<h4>Data Validation</h4>

Data Validation is mostly about the "required" constraint that imposes some attribute to always have a value. We can imagine that a gift card has to have a security code and it cannot be undefined. Same goes for all other attributes that the application expects from the Create View. <br />

Now for simplicity I would like to present you with a tabular overview of the validation rules for the `cards` table data fields provided by the user:

Field Name | Required | String | Integer | Date Format | Size (exact) | Unique
--- | :---: | :---: | :---: | :---: | :---: | :---:
card_number | ✓ | ✓ |   |   | 20 | ✓ (Create) / ✕ (Update)
pin | ✓ | ✓ |   |   | 4 |  
activation_date | ✓ |   |   | Y-m-d H:i:s <br /> (2009-10-16 21:30:45) |   |  
expiration_date | ✓ |   |   | Y-m-d <br /> (2009-10-16) |   |  
balance | ✓ |   | ✓ |   |   |  

You can see that the `expiration_date` doesn't denote the time of the card expiration but rather just the date. The time is defaulted to 00:00:00 AM of that day and it is a system design choice. From the retrospect I strongly feel like it should be settable to a specific hour or that the application should extract the `activation_date`'s time and use it as expiration time too.

Another thing that confused me with respect to how I designed the system is that the Update request doesn't validate the uniqueness of the `card_number` which is otherwise true when Creating a new record. I can't really recall why I decided to leave it like this.

<!--
  - environment
  -->

<a name="environment"></a>
<h2>Local Environment Setup</h2>

Before installing the application from github we must configure our local environment. <br />

<strong>It is extremely subject to change how over time the current state of open source technologies facilitate local web development but nonetheless I have decided to share a little bit of background for that which I used (2026). </strong>

<!--
  - installation
  -->

<a name="installation"></a>
<h2>Installation Guide</h2>

First let's recall I will be using the local environment described in the previous chapter: [ # Local Environment Setup ](#environment)



