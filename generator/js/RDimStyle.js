
      // auto generated
      //var self;

      // class constructor:
      function RDimStyle() {
        

        // should be RDimStyle_BaseJs.call(this, engine):
        //RDimStyle.prototype = new RDimStyle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimStyle.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimStyle);
            //}
          }
          else {
            qWarning("RDimStyle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RDimStyle_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimStyle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimStyle_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimStyle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else {
    
        print("RDimStyle(): wrong number / type of arguments");
      
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

      //RDimStyle.prototype = new RDimStyle_BaseJs(engine);
      //RDimStyle.prototype = new RDimStyle_Wrapper(engine);
      RDimStyle.prototype = new Object();

      RDimStyle.prototype.toString = function() {
          //return "RDimStyle [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimStyle [JS]";
        };
      RDimStyle.getObjectType = function() {
        return RJSType_RDimStyle.getIdStatic();
      };

      RDimStyle.prototype.getObjectType = function() {
        return RJSType_RDimStyle.getIdStatic();
      };

      RDimStyle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimStyle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimStyleData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimStyle.init = function() 
          
        {
          //print("JS: RDimStyle.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimStyle_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else {
    
        print("RDimStyle.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyle.initDimX = function() 
          
        {
          //print("JS: RDimStyle.initDimX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RDimStyle_WrapperSingletonInstance.initDimX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else {
    
        print("RDimStyle.initDimX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyle.getRtti = function() 
          
        {
          //print("JS: RDimStyle.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimStyle_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else {
    
        print("RDimStyle.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyle.hasProxy = function() 
          
        {
          //print("JS: RDimStyle.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimStyle_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else {
    
        print("RDimStyle.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimStyle.INVALID_ID = 
  RDimStyle_WrapperSingletonInstance.INVALID_ID;
RDimStyle.INVALID_HANDLE = 
  RDimStyle_WrapperSingletonInstance.INVALID_HANDLE;
RDimStyle.PropertyCustom = 
  RDimStyle_WrapperSingletonInstance.PropertyCustom;
RDimStyle.PropertyType = 
  RDimStyle_WrapperSingletonInstance.PropertyType;
RDimStyle.PropertyHandle = 
  RDimStyle_WrapperSingletonInstance.PropertyHandle;
RDimStyle.PropertyProtected = 
  RDimStyle_WrapperSingletonInstance.PropertyProtected;
RDimStyle.PropertyWorkingSet = 
  RDimStyle_WrapperSingletonInstance.PropertyWorkingSet;
RDimStyle.PropertySelected = 
  RDimStyle_WrapperSingletonInstance.PropertySelected;
RDimStyle.PropertyInvisible = 
  RDimStyle_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RDimStyle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimStyle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    