
      // auto generated
      //var self;

      // class constructor:
      function RLayerState() {
        

        // should be RLayerState_BaseJs.call(this, engine):
        //RLayerState.prototype = new RLayerState_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLayerState.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLayerState);
            //}
          }
          else {
            qWarning("RLayerState.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLayerState_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLayerState);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayerState);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLayerState_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLayerState);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayerState);
  }

  
  else {
    
        print("RLayerState(): wrong number / type of arguments");
      
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

      //RLayerState.prototype = new RLayerState_BaseJs(engine);
      //RLayerState.prototype = new RLayerState_Wrapper(engine);
      RLayerState.prototype = new Object();

      RLayerState.prototype.toString = function() {
          //return "RLayerState [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLayerState [JS]";
        };
      RLayerState.getObjectType = function() {
        return RJSType_RLayerState.getIdStatic();
      };

      RLayerState.prototype.getObjectType = function() {
        return RJSType_RLayerState.getIdStatic();
      };

      RLayerState.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLayerState.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RLayerState.init = function() 
          
        {
          //print("JS: RLayerState.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayerState_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLayerState);
  }

  
  else {
    
        print("RLayerState.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayerState.getRtti = function() 
          
        {
          //print("JS: RLayerState.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayerState_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLayerState);
  }

  
  else {
    
        print("RLayerState.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLayerState.INVALID_ID = 
  RLayerState_WrapperSingletonInstance.INVALID_ID;
RLayerState.INVALID_HANDLE = 
  RLayerState_WrapperSingletonInstance.INVALID_HANDLE;
RLayerState.PropertyCustom = 
  RLayerState_WrapperSingletonInstance.PropertyCustom;
RLayerState.PropertyType = 
  RLayerState_WrapperSingletonInstance.PropertyType;
RLayerState.PropertyHandle = 
  RLayerState_WrapperSingletonInstance.PropertyHandle;
RLayerState.PropertyProtected = 
  RLayerState_WrapperSingletonInstance.PropertyProtected;
RLayerState.PropertyWorkingSet = 
  RLayerState_WrapperSingletonInstance.PropertyWorkingSet;
RLayerState.PropertySelected = 
  RLayerState_WrapperSingletonInstance.PropertySelected;
RLayerState.PropertyInvisible = 
  RLayerState_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RLayerState.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLayerState.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    