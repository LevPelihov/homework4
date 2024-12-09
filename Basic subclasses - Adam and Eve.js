class Human {
    constructor() {
    
    }
  }
  class Man extends Human {
    constructor() {
    super();
      
    }
  }
  
  class Woman extends Human {
    constructor() {
    super();
    }
  }
  class God {
    static create() {
    let Adam = new Man();
    let Eva = new Woman();
      let humans = [Adam , Eva];
      return humans;
    }
  }

  let humans = God.create()
  console.log(humans[0] instanceof Man)
  console.log(humans[1] instanceof Woman)