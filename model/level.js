
// level data 
const defaultLevel = {
    id: 1,
    name: "Level Name",
    width: 1920,
    height: 1080,
    npcs: [],
    completed: false,
  };
  
  // create a new level (object)
  function createLevel(data = {}) {
    return { ...defaultLevel, ...data };
  }
  
  export { defaultLevel, createLevel };

  