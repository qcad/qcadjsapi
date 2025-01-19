
      // auto generated
      //var self;

      // class constructor:
      function RBlock() {
        

        // should be RBlock_BaseJs.call(this, engine):
        //RBlock.prototype = new RBlock_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RBlock.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RBlock);
            //}
          }
          else {
            qWarning("RBlock.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RBlock_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RBlock);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBlock);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RBlock_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RBlock);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBlock);
  }

  
  else {
    
        print("RBlock(): wrong number / type of arguments");
      
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

      //RBlock.prototype = new RBlock_BaseJs(engine);
      //RBlock.prototype = new RBlock_Wrapper(engine);
      RBlock.prototype = new Object();

      RBlock.prototype.toString = function() {
          //return "RBlock [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RBlock [JS]";
        };
      RBlock.getObjectType = function() {
        return RJSType_RBlock.getIdStatic();
      };

      RBlock.prototype.getObjectType = function() {
        return RJSType_RBlock.getIdStatic();
      };

      RBlock.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RBlock.getIdStatic()) {
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
        RBlock.init = function() 
          
        {
          //print("JS: RBlock.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlock_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RBlock);
  }

  
  else {
    
        print("RBlock.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlock.getRtti = function() 
          
        {
          //print("JS: RBlock.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlock_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RBlock);
  }

  
  else {
    
        print("RBlock.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RBlock.INVALID_ID = 
  RBlock_WrapperSingletonInstance.INVALID_ID;
RBlock.INVALID_HANDLE = 
  RBlock_WrapperSingletonInstance.INVALID_HANDLE;
RBlock.PropertyProtected = 
  RBlock_WrapperSingletonInstance.PropertyProtected;
RBlock.PropertyWorkingSet = 
  RBlock_WrapperSingletonInstance.PropertyWorkingSet;
RBlock.PropertySelected = 
  RBlock_WrapperSingletonInstance.PropertySelected;
RBlock.PropertyInvisible = 
  RBlock_WrapperSingletonInstance.PropertyInvisible;
RBlock.PropertyCustom = 
  RBlock_WrapperSingletonInstance.PropertyCustom;
RBlock.PropertyType = 
  RBlock_WrapperSingletonInstance.PropertyType;
RBlock.PropertyHandle = 
  RBlock_WrapperSingletonInstance.PropertyHandle;
RBlock.PropertyName = 
  RBlock_WrapperSingletonInstance.PropertyName;
RBlock.PropertyFrozen = 
  RBlock_WrapperSingletonInstance.PropertyFrozen;
RBlock.PropertyPixelUnit = 
  RBlock_WrapperSingletonInstance.PropertyPixelUnit;
RBlock.PropertyOriginX = 
  RBlock_WrapperSingletonInstance.PropertyOriginX;
RBlock.PropertyOriginY = 
  RBlock_WrapperSingletonInstance.PropertyOriginY;
RBlock.PropertyOriginZ = 
  RBlock_WrapperSingletonInstance.PropertyOriginZ;
RBlock.PropertyLayout = 
  RBlock_WrapperSingletonInstance.PropertyLayout;
RBlock.modelSpaceName = 
  RBlock_WrapperSingletonInstance.modelSpaceName;
RBlock.paperSpaceName = 
  RBlock_WrapperSingletonInstance.paperSpaceName;


      // copy function:
      //RBlock.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RBlock.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    