
      // auto generated
      //var self;

      // class constructor:
      function RMatrix() {
        

        // should be RMatrix_BaseJs.call(this, engine):
        //RMatrix.prototype = new RMatrix_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMatrix.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RMatrix);
            //}
          }
          else {
            qWarning("RMatrix.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RMatrix_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RMatrix);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMatrix);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RMatrix_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RMatrix);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMatrix);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RMatrix_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RMatrix);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMatrix);
  }

  
  else {
    
        print("RMatrix(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
        }
      }

      //RMatrix.prototype = new RMatrix_BaseJs(engine);
      //RMatrix.prototype = new RMatrix_Wrapper(engine);
      RMatrix.prototype = new Object();

      RMatrix.prototype.toString = function() {
          //return "RMatrix [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMatrix [JS]";
        };
      RMatrix.getObjectType = function() {
        return RJSType_RMatrix.getIdStatic();
      };

      RMatrix.prototype.getObjectType = function() {
        return RJSType_RMatrix.getIdStatic();
      };

      RMatrix.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMatrix.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RMatrix.createIdentity2x2 = function() 
          
        {
          //print("JS: RMatrix.createIdentity2x2");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMatrix_WrapperSingletonInstance.createIdentity2x2(
                  
                );
              

        //copyProperties(this, wrapper, RMatrix);
  }

  
  else {
    
        print("RMatrix.createIdentity2x2(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMatrix.createIdentity3x3 = function() 
          
        {
          //print("JS: RMatrix.createIdentity3x3");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMatrix_WrapperSingletonInstance.createIdentity3x3(
                  
                );
              

        //copyProperties(this, wrapper, RMatrix);
  }

  
  else {
    
        print("RMatrix.createIdentity3x3(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMatrix.createIdentity = function() 
          
        {
          //print("JS: RMatrix.createIdentity");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMatrix_WrapperSingletonInstance.createIdentity(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMatrix);
  }

  
  else {
    
        print("RMatrix.createIdentity(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMatrix.createRotation = function() 
          
        {
          //print("JS: RMatrix.createRotation");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMatrix_WrapperSingletonInstance.createRotation(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMatrix);
  }

  
  else {
    
        print("RMatrix.createRotation(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMatrix.create2x2 = function() 
          
        {
          //print("JS: RMatrix.create2x2");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RMatrix_WrapperSingletonInstance.create2x2(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RMatrix);
  }

  
  else {
    
        print("RMatrix.create2x2(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMatrix.create3x3 = function() 
          
        {
          //print("JS: RMatrix.create3x3");
          
      if (arguments.length == 9) {
    
                // calling static wrapper:
                return RMatrix_WrapperSingletonInstance.create3x3(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]
                );
              

        //copyProperties(this, wrapper, RMatrix);
  }

  
  else {
    
        print("RMatrix.create3x3(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMatrix.create3x1 = function() 
          
        {
          //print("JS: RMatrix.create3x1");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RMatrix_WrapperSingletonInstance.create3x1(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RMatrix);
  }

  
  else {
    
        print("RMatrix.create3x1(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMatrix.create2x3 = function() 
          
        {
          //print("JS: RMatrix.create2x3");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RMatrix_WrapperSingletonInstance.create2x3(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RMatrix);
  }

  
  else {
    
        print("RMatrix.create2x3(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMatrix.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMatrix.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    