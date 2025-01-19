
      // auto generated
      //var self;

      // class constructor:
      function RLayout() {
        

        // should be RLayout_BaseJs.call(this, engine):
        //RLayout.prototype = new RLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLayout.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLayout);
            //}
          }
          else {
            qWarning("RLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayout);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLayout_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayout);
  }

  
  else {
    
        print("RLayout(): wrong number / type of arguments");
      
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

      //RLayout.prototype = new RLayout_BaseJs(engine);
      //RLayout.prototype = new RLayout_Wrapper(engine);
      RLayout.prototype = new Object();

      RLayout.prototype.toString = function() {
          //return "RLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLayout [JS]";
        };
      RLayout.getObjectType = function() {
        return RJSType_RLayout.getIdStatic();
      };

      RLayout.prototype.getObjectType = function() {
        return RJSType_RLayout.getIdStatic();
      };

      RLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLayout.getIdStatic()) {
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
        RLayout.init = function() 
          
        {
          //print("JS: RLayout.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayout_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLayout);
  }

  
  else {
    
        print("RLayout.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayout.getRtti = function() 
          
        {
          //print("JS: RLayout.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayout_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLayout);
  }

  
  else {
    
        print("RLayout.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLayout.INVALID_ID = 
  RLayout_WrapperSingletonInstance.INVALID_ID;
RLayout.INVALID_HANDLE = 
  RLayout_WrapperSingletonInstance.INVALID_HANDLE;
RLayout.PropertyCustom = 
  RLayout_WrapperSingletonInstance.PropertyCustom;
RLayout.PropertyType = 
  RLayout_WrapperSingletonInstance.PropertyType;
RLayout.PropertyHandle = 
  RLayout_WrapperSingletonInstance.PropertyHandle;
RLayout.PropertyProtected = 
  RLayout_WrapperSingletonInstance.PropertyProtected;
RLayout.PropertyWorkingSet = 
  RLayout_WrapperSingletonInstance.PropertyWorkingSet;
RLayout.PropertySelected = 
  RLayout_WrapperSingletonInstance.PropertySelected;
RLayout.PropertyInvisible = 
  RLayout_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    