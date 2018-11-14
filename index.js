var recipes = {};

function updateObjectWithKeyAndValue(object){
  recipes.eggs = "white omelettes",
  recipes.snacks = "sesame crisp rounds",
  recipes.salads = "mediterranean heaven";
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

const recipe = { eggs: 3 }

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({ eggs: 3 }, { flour: '1 cup' })
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')
