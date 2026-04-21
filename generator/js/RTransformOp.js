
      // auto generated
      //var self;

      // class constructor:
      function RTransformOp() {
        

        // should be RTransformOp_BaseJs.call(this, engine):
        //RTransformOp.prototype = new RTransformOp_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTransformOp.getIdStatic()))) {

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
            qWarning("RTransformOp.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTransformOp_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTransformOp);
  }

  
  else {
    
        print("RTransformOp(): wrong number / type of arguments");
      
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

        
              // define property setters/getters:
              Object.defineProperty(this, 'type', {
                  get() {
                      
                          return this.__PROXY__.getType();
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'd1', {
                  get() {
                      
                          return this.__PROXY__.getD1();
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'd2', {
                  get() {
                      
                          return this.__PROXY__.getD2();
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RTransformOp.prototype = new RTransformOp_BaseJs(engine);
      //RTransformOp.prototype = new RTransformOp_Wrapper(engine);
      RTransformOp.prototype = new Object();

      RTransformOp.prototype.toString = function() {
          //return "RTransformOp [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTransformOp [JS]";
        };
      RTransformOp.getObjectType = function() {
        return RJSType_RTransformOp.getIdStatic();
      };

      RTransformOp.prototype.getObjectType = function() {
        return RJSType_RTransformOp.getIdStatic();
      };

      RTransformOp.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTransformOp.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RTransformOp.Translation = RTransformOp_Wrapper.Translation;
RTransformOp.Scale = RTransformOp_Wrapper.Scale;
RTransformOp.Rotation = RTransformOp_Wrapper.Rotation;


      // functions:
      
        // function 
        RTransformOp.prototype.createTranslation = function(...args) 
          
        {
          //print("JS: RTransformOp.prototype.createTranslation");
          return this.__PROXY__.createTranslation(...args);
        };
    
        // function 
        RTransformOp.prototype.createScale = function(...args) 
          
        {
          //print("JS: RTransformOp.prototype.createScale");
          return this.__PROXY__.createScale(...args);
        };
    
        // function 
        RTransformOp.prototype.createRotation = function(...args) 
          
        {
          //print("JS: RTransformOp.prototype.createRotation");
          return this.__PROXY__.createRotation(...args);
        };
    
        // function 
        RTransformOp.prototype.getType = function(...args) 
          
        {
          //print("JS: RTransformOp.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RTransformOp.prototype.getD1 = function(...args) 
          
        {
          //print("JS: RTransformOp.prototype.getD1");
          return this.__PROXY__.getD1(...args);
        };
    
        // function 
        RTransformOp.prototype.getD2 = function(...args) 
          
        {
          //print("JS: RTransformOp.prototype.getD2");
          return this.__PROXY__.getD2(...args);
        };
    

      // static functions:
      

        // static function 
        RTransformOp.createTranslation = function() 
          
        {
          //print("JS: RTransformOp.createTranslation");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTransformOp_WrapperSingletonInstance.createTranslation(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTransformOp);
  }

  
  else {
    
        print("RTransformOp.createTranslation(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTransformOp.createScale = function() 
          
        {
          //print("JS: RTransformOp.createScale");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTransformOp_WrapperSingletonInstance.createScale(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTransformOp);
  }

  
  else {
    
        print("RTransformOp.createScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTransformOp.createRotation = function() 
          
        {
          //print("JS: RTransformOp.createRotation");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTransformOp_WrapperSingletonInstance.createRotation(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTransformOp);
  }

  
  else {
    
        print("RTransformOp.createRotation(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTransformOp.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTransformOp.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTransformOp.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      