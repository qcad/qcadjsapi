
      // auto generated
      //var self;

      // class constructor:
      function RPattern() {
        

        // should be RPattern_BaseJs.call(this, engine):
        //RPattern.prototype = new RPattern_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPattern.getIdStatic()))) {

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
            qWarning("RPattern.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPattern_Wrapper(
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

      

        //copyProperties(this, wrapper, RPattern);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPattern_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPattern);
  }

  
  else {
    
        print("RPattern(): wrong number / type of arguments");
      
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

      //RPattern.prototype = new RPattern_BaseJs(engine);
      //RPattern.prototype = new RPattern_Wrapper(engine);
      RPattern.prototype = new Object();


      RPattern.prototype.toString = function() {
          //return "RPattern [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPattern [JS]";
        };
      RPattern.getObjectType = function() {
        return RJSType_RPattern.getIdStatic();
      };

      RPattern.prototype.getObjectType = function() {
        return RJSType_RPattern.getIdStatic();
      };

      RPattern.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPattern.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPattern.prototype.isValid = function(...args) 
          
        {
          //print("JS: RPattern.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        RPattern.prototype.hasDots = function(...args) 
          
        {
          //print("JS: RPattern.prototype.hasDots");
          
              return this.__PROXY__.hasDots(...args);
            
        };
    
        // function 
        RPattern.prototype.clear = function(...args) 
          
        {
          //print("JS: RPattern.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RPattern.prototype.getFileName = function(...args) 
          
        {
          //print("JS: RPattern.prototype.getFileName");
          
              return this.__PROXY__.getFileName(...args);
            
        };
    
        // function 
        RPattern.prototype.getName = function(...args) 
          
        {
          //print("JS: RPattern.prototype.getName");
          
              return this.__PROXY__.getName(...args);
            
        };
    
        // function 
        RPattern.prototype.getDescription = function(...args) 
          
        {
          //print("JS: RPattern.prototype.getDescription");
          
              return this.__PROXY__.getDescription(...args);
            
        };
    
        // function 
        RPattern.prototype.isLoaded = function(...args) 
          
        {
          //print("JS: RPattern.prototype.isLoaded");
          
              return this.__PROXY__.isLoaded(...args);
            
        };
    
        // function 
        RPattern.prototype.load = function(...args) 
          
        {
          //print("JS: RPattern.prototype.load");
          
              return this.__PROXY__.load(...args);
            
        };
    
        // function 
        RPattern.prototype.getPatternLines = function(...args) 
          
        {
          //print("JS: RPattern.prototype.getPatternLines");
          
              return this.__PROXY__.getPatternLines(...args);
            
        };
    
        // function 
        RPattern.prototype.addPatternLine = function(...args) 
          
        {
          //print("JS: RPattern.prototype.addPatternLine");
          
              return this.__PROXY__.addPatternLine(...args);
            
        };
    
        // function 
        RPattern.prototype.scale = function(...args) 
          
        {
          //print("JS: RPattern.prototype.scale");
          
              return this.__PROXY__.scale(...args);
            
        };
    
        // function 
        RPattern.prototype.rotate = function(...args) 
          
        {
          //print("JS: RPattern.prototype.rotate");
          
              return this.__PROXY__.rotate(...args);
            
        };
    

      // static functions:
      RPattern.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RPattern.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RPattern.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPattern.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPattern.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPattern.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      