
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        RMatrix.prototype.isValid = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        RMatrix.prototype.createIdentity2x2 = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.createIdentity2x2");
          
              return this.__PROXY__.createIdentity2x2(...args);
            
        };
    
        // function 
        RMatrix.prototype.createIdentity3x3 = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.createIdentity3x3");
          
              return this.__PROXY__.createIdentity3x3(...args);
            
        };
    
        // function 
        RMatrix.prototype.createIdentity = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.createIdentity");
          
              return this.__PROXY__.createIdentity(...args);
            
        };
    
        // function 
        RMatrix.prototype.createRotation = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.createRotation");
          
              return this.__PROXY__.createRotation(...args);
            
        };
    
        // function 
        RMatrix.prototype.create2x2 = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.create2x2");
          
              return this.__PROXY__.create2x2(...args);
            
        };
    
        // function 
        RMatrix.prototype.create3x3 = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.create3x3");
          
              return this.__PROXY__.create3x3(...args);
            
        };
    
        // function 
        RMatrix.prototype.create3x1 = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.create3x1");
          
              return this.__PROXY__.create3x1(...args);
            
        };
    
        // function 
        RMatrix.prototype.create2x3 = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.create2x3");
          
              return this.__PROXY__.create2x3(...args);
            
        };
    
        // function 
        RMatrix.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
    
        // function 
        RMatrix.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.operator_equal");
          
              return this.__PROXY__.operator_equal(...args);
            
        };
    
        // function 
        RMatrix.prototype.operator_multiply_assign = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.operator_multiply_assign");
          
              return this.__PROXY__.operator_multiply_assign(...args);
            
        };
    
        // function 
        RMatrix.prototype.operator_multiply = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.operator_multiply");
          
              return this.__PROXY__.operator_multiply(...args);
            
        };
    
        // function 
        RMatrix.prototype.multiplyWith = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.multiplyWith");
          
              return this.__PROXY__.multiplyWith(...args);
            
        };
    
        // function 
        RMatrix.prototype.init = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.init");
          
              return this.__PROXY__.init(...args);
            
        };
    
        // function 
        RMatrix.prototype.reset = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        RMatrix.prototype.clear = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RMatrix.prototype.set3x3 = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.set3x3");
          
              return this.__PROXY__.set3x3(...args);
            
        };
    
        // function 
        RMatrix.prototype.set3x1 = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.set3x1");
          
              return this.__PROXY__.set3x1(...args);
            
        };
    
        // function 
        RMatrix.prototype.set2x3 = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.set2x3");
          
              return this.__PROXY__.set2x3(...args);
            
        };
    
        // function 
        RMatrix.prototype.set = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.set");
          
              return this.__PROXY__.set(...args);
            
        };
    
        // function 
        RMatrix.prototype.get = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.get");
          
              return this.__PROXY__.get(...args);
            
        };
    
        // function 
        RMatrix.prototype.getRows = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.getRows");
          
              return this.__PROXY__.getRows(...args);
            
        };
    
        // function 
        RMatrix.prototype.getCols = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.getCols");
          
              return this.__PROXY__.getCols(...args);
            
        };
    
        // function 
        RMatrix.prototype.rref = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.rref");
          
              return this.__PROXY__.rref(...args);
            
        };
    
        // function 
        RMatrix.prototype.getInverse = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.getInverse");
          
              return this.__PROXY__.getInverse(...args);
            
        };
    
        // function 
        RMatrix.prototype.getTransposed = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.getTransposed");
          
              return this.__PROXY__.getTransposed(...args);
            
        };
    
        // function 
        RMatrix.prototype.getAppended = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.getAppended");
          
              return this.__PROXY__.getAppended(...args);
            
        };
    
        // function 
        RMatrix.prototype.isRotationAndUniformScale = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.isRotationAndUniformScale");
          
              return this.__PROXY__.isRotationAndUniformScale(...args);
            
        };
    
        // function 
        RMatrix.prototype.getUniformScaleFactor = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.getUniformScaleFactor");
          
              return this.__PROXY__.getUniformScaleFactor(...args);
            
        };
    
        // function 
        RMatrix.prototype.getRotationAngle = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.getRotationAngle");
          
              return this.__PROXY__.getRotationAngle(...args);
            
        };
    
        // function 
        RMatrix.prototype.ref = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.ref");
          
              return this.__PROXY__.ref(...args);
            
        };
    
        // function 
        RMatrix.prototype.multiplyRow = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.multiplyRow");
          
              return this.__PROXY__.multiplyRow(...args);
            
        };
    
        // function 
        RMatrix.prototype.addRow = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.addRow");
          
              return this.__PROXY__.addRow(...args);
            
        };
    
        // function 
        RMatrix.prototype.swapRows = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.swapRows");
          
              return this.__PROXY__.swapRows(...args);
            
        };
    
        // function 
        RMatrix.prototype.getPivotRow = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.getPivotRow");
          
              return this.__PROXY__.getPivotRow(...args);
            
        };
    
        // function 
        RMatrix.prototype.getPivotCol = function(...args) 
          
        {
          //print("JS: RMatrix.prototype.getPivotCol");
          
              return this.__PROXY__.getPivotCol(...args);
            
        };
    

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
      RMatrix.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMatrix.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMatrix.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
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

      RMatrix.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      