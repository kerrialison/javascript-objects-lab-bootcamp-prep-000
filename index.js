var recipes = {};

function updateObjectWithKeyAndValue(object){
  recipes.eggs = "white omelettes",
  recipes.snacks = "sesame crisp rounds",
  recipes.salads = "mediterranean heaven";
  return object;
}

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, { [key]: value })
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

const recipe = { eggs: 3 }

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

function deleteFromObjectByKey(object, key){
  delete object.key;
}

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
