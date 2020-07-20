const fi = (function() {
return {
  libraryMethod: function() {
    return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
  },

  each: function(collection, callback) {
    const items = (collection instanceof Array)? collection : Object.values(collection);

    for(const item of items){
      callback(item);
    }

    return collection;
  },

  map: function(collection, callback) {
      const items = (collection instanceof Array)? collection : Object.values(collection);
      const newCollection = []

      for(const item of items){
        newCollection.push(callback(item));
      }
      return newCollection;
  },

  reduce: function(collection, callback, accum) {
    let items = collection;

    if(!accum){
      accum = items[0];
      items = items.slice(1)
    }

    for(const item of items){
      accum = callback(accum, item, items)
    }
    return accum;
  },

  find:function(collections, callback){

    for (const item of collections){
      if(callback(item)){
        return item;
      }
    }
  },

  filter:function(collection, callback){
    const matches = [ ];
    collection.filter(item => callback(item) ? matches.push(item): item)

    return matches
  },

  size: function(collection){
    collection = (collection instanceof Array) ? collection : Object.keys(collection)
    return collection.length;
  },

  first: function(array, i=0){
    return ((i === 0) ? array[0] : array.slice(0,i));
  },

  last:function(array, i=0){
    return ((i === 0) ? array.slice(-1)[0] : array.slice(-i));
  },

  compact:function(array){
    const compact = [];

      array.map(item => !!item ? compact.push(item): item)


      return compact;
    },

    sortBy:function(array,cb){
      const newSortedArray = [...array]
      return newSortedArray.sort((a,b) => cb(a) - cb(b))
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },


    flatten: function(collection, shallow, newArr=[]) {
    if (!Array.isArray(collection)) return newArr.push(collection)
    if (shallow) {
      for (let val of collection)
        Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
    } else {
      for (let val of collection) {
        this.flatten(val, false, newArr)
      }
    }
    return newArr
  },


  uniqSorted: function(collection, iteratee) {
    const sorted = [collection[0]]
    for (let elem = 1; elem < collection.length; elem++) {
      if (sorted[elem-1] !== collection[elem])
        sorted.push(collection[elem])
    }
    return sorted
  },

  uniq: function(collection, sorted=false, iteratee=false) {
    if (sorted) {
      return fi.uniqSorted(collection, iteratee)
    } else if (!iteratee) {
      return Array.from(new Set(collection))
    } else {
      const modifiedVals = new Set()
      const uniqVals = new Set()
      for (let val of collection) {
        const moddedVal = iteratee(val)
        if (!modifiedVals.has(moddedVal)) {
          modifiedVals.add(moddedVal)
          uniqVals.add(val)
        }
      }
      return Array.from(uniqVals)
    }
  },

  keys:function(object){
    const keys = []
      for(let key in object){
        keys.push(key)
      }
    return keys
  },

  values:function(object){
    const values = []
      for (let key in object){
        values.push(object[key])
      }
      return values
  },

  functions: function(object){
    const functionNames = []

      for (let key in object){
        if (typeof object[key] === "function"){
          functionNames.push(key)
        }
      }
      return functionNames.sort()
  }

}
})()

fi.libraryMethod()