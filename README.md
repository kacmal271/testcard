<!--
  - README.md
  -->

<h1>This project is a solution to a problem of: how to build a CRUD application</h1>

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

First thing after login in we're greeted with is an overview of all our resources. <br />

A single resource this project stores in a database is a virtual gift card that is identified by a unique card number and some other details. <br />

This is actually an instance of the Read functionality from the CRUD suite as we're effectively reading information from the database (forcing a <code>SELECT</code> statement). <br />

We can also see a [Delete] button floating over each card and we will see it later on in the detailed view of a single card page.

<h3>Show View</h3>

<img target="_blank" src="./..README/view_card_show.jpg" />

<p align=center><i>Show View: here we can see all the details about a singular resource</i></p>

So after clicking on one of the cards listed in the index view we're now shown all of its context data (well, almost all of it as some things stored in a database are treated as meta-information and are seldom displayed in the browser -> things like the "id" attribute that is just used internally by the application). <br />

Aside from the Read functionality this page offers we can also Delete the selected resource. Mind you, a deletion should NEVER be the primary button and should never be focused once a page loads since it is a destructive functionality. Best is to add an extra confirmation button that will ask the user if they "really mean it" and that they "understand it is irreversible". <br />

Of course sometimes a [Delete] is reversible like with the so-called "soft deletions" where a resource is put into trash or is hidden away from the user's view. It is still good to add a confirmation button especially that modern browsers offer built-in solutions like the <code>window.confirm</code> function and the HTML5 <code>&lt;dialog&gt;</code> tag.
