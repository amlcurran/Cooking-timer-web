function ArrayHelper() {

    this.addToList = function(array, item) {
        array[array.length] = item;
    }

    return this;

}
