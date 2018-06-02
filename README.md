# TIMA — Hybrid-App zum Zeitmanagement

TIME MANAGEMENT HYBRID-APPLICATION -- TIMA

Bachelorthesis -- University of Cologne



Goals: 
Time-Management-App, To-dos (daily, weekly) and calendar (daily, weekly) in one place.
Possibility of further development.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Used Technologies](#used-technologies)
3. [Pages & Providers](#pages-providers)
4. [Theorie](#Theorie)

## <a name="getting-started">TIMA</a>Getting Started

<u>To test TIMA:</u>

Clone the repository, install the latest version of the Ionic CLI and run in the directory:

```bash
ionic serve
```

<u>For lokal Database:</u>

Downloade [CouchDB](http://couchdb.apache.org).

Setup the [CouchDB Cluster](http://docs.couchdb.org/en/latest/install/setup.html)   

Then, control and work with the lokal CouchDB Database over Fauxton: 

```bash
http://127.0.0.1:5984/_utils#setup
```


## Used Technologies

Frameworks, Technologies and Modules:

[Ionic](https://ionicframework.com)

[Angular](https://angular.io)
[Cordova](https://cordova.apache.org)
[Node.js](https://nodejs.org/en/)

[Ionic2 Calendar Module](https://github.com/twinssbc/Ionic2-Calendar)

[CouchDB](http://couchdb.apache.org)
[PouchDB](https://pouchdb.com)


## Pages & Providers

<u>Used Pages</u>

In directory under
```bash
tima-master/src/pages/...
```


Daily To-dos:
```bash
tima-master/src/pages/list-master
```

Weekly to-dos:
```bash
tima-master/src/pages/content
```

To-do createpage:
```bash
tima-master/src/pages/item-create
```

To-do detailpage:
```bash
tima-master/src/pages/item-detail
```

Daily planner:
```bash
tima-master/src/pages/tagesplan
```

Weekly planner:
```bash
tima-master/src/pages/wochenplan
```

Termine createpage:
```bash
tima-master/src/pages/termin-create
```

Termine detailpage:
```bash
tima-master/src/pages/termin-detail
```

Tabs:
```bash
tima-master/src/pages/tabs
```



<u>Unused Pages</u>

```bash
tima-master/src/pages/login
tima-master/src/pages/menu
tima-master/src/pages/settings
tima-master/src/pages/signup
tima-master/src/pages/tutorial
tima-master/src/pages/welcome
```
(For further use...)


<u>Used Providers</u>


To-dos Provider:
```bash
tima-master/src/providers/items
```

Termine Provider:
```bash
tima-master/src/providers/termine
```

<u>Unused Providers</u>
```bash
tima-master/src/providers/api
tima-master/src/providers/settings
tima-master/src/providers/user
```


## Theorie

Theorie of time and timemanagement in the corresponding bachelorthesis. 
  
Bruno Sebastian Penzar
University of Cologne
