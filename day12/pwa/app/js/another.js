fetch('/getMyName')
.then(data=>data.text())
.then((name)=>console.log('my name is ${name}'))

(function doIt(){
    dbPromise.onsuccess = function(event)  {
        db = event.target.result;
        var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
        if (!('indexedDB' in window)) {
            console.log('This browser doesn\'t support IndexedDB');
          }
        
          var dbPromise = idb.open('test-db3', 1, function(dp) {
            if (!dp.objectStoreNames.contains('people')) {
              db.createObjectStore('people', {keyPath: 'email'});
            }
            if (!dp.objectStoreNames.contains('notes')) {
              dp.createObjectStore('notes', {autoIncrement: true});
            }
            if (!dp.objectStoreNames.contains('logs')) {
              dp.createObjectStore('logs', {keyPath: 'id', autoIncrement: true});
            }
    
          });
      }; 
    

   

      //ADD DATA

      var tx = db.transaction(['people', 'logs', 'notes'], 'readwrite');
        var storeObj = tx.objectStore('people');
        var item = {
          email: 'sandwich@gmail.com',
          gender: 'm',
          ssn:112
        };
        storeObj.add(item);
        var notesObj = tx.objectStore('notes');
        notesObj.add({
            title:'myPernotes'
        })
        console.log("added item to the store os!")
})()

const customerData = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
  ];

const dbName = "HELLO-WORLD";

var request = indexedDB.open(HELLO-WORLD, 2);

request.onerror = event => {
  // Handle errors.
};
request.onupgradeneeded = event => {
  var db = event.target.result;
  var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
  objectStore.createIndex("name", "name", { unique: false });
  objectStore.createIndex("email", "email", { unique: true });
  objectStore.transaction.oncomplete = event => {
    var customerObjectStore = db.transaction("customers", "readwrite")
    customerObjectStore.ObjectStore("customers");
    customerData.forEach(function(customer) {
      customerObjectStore.add(customer);
    });
   
  };
};

request.onsuccess = event => {
    var db = event.target.result;

    db.transaction("customers").objectStore("customers").get("444-44-4444").onsuccess = event => {
        console.log("Name for SSN 444-44-4444 is " + event.target.result.name);
      };
    
  };


