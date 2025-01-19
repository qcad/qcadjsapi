
      // auto generated
      //var self;

      // class constructor:
      function RToleranceEntity() {
        

        // should be RToleranceEntity_BaseJs.call(this, engine):
        //RToleranceEntity.prototype = new RToleranceEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RToleranceEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RToleranceEntity);
            //}
          }
          else {
            qWarning("RToleranceEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RToleranceEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RToleranceEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RToleranceEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RToleranceEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RToleranceEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RToleranceEntity);
  }

  
  else {
    
        print("RToleranceEntity(): wrong number / type of arguments");
      
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

      //RToleranceEntity.prototype = new RToleranceEntity_BaseJs(engine);
      //RToleranceEntity.prototype = new RToleranceEntity_Wrapper(engine);
      RToleranceEntity.prototype = new Object();

      RToleranceEntity.prototype.toString = function() {
          //return "RToleranceEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RToleranceEntity [JS]";
        };
      RToleranceEntity.getObjectType = function() {
        return RJSType_RToleranceEntity.getIdStatic();
      };

      RToleranceEntity.prototype.getObjectType = function() {
        return RJSType_RToleranceEntity.getIdStatic();
      };

      RToleranceEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RToleranceEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RToleranceEntity.init = function() 
          
        {
          //print("JS: RToleranceEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RToleranceEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RToleranceEntity);
  }

  
  else {
    
        print("RToleranceEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RToleranceEntity.getRtti = function() 
          
        {
          //print("JS: RToleranceEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RToleranceEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RToleranceEntity);
  }

  
  else {
    
        print("RToleranceEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RToleranceEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RToleranceEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RToleranceEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RToleranceEntity);
  }

  
  else {
    
        print("RToleranceEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RToleranceEntity.INVALID_ID = 
  RToleranceEntity_WrapperSingletonInstance.INVALID_ID;
RToleranceEntity.INVALID_HANDLE = 
  RToleranceEntity_WrapperSingletonInstance.INVALID_HANDLE;
RToleranceEntity.PropertySelected = 
  RToleranceEntity_WrapperSingletonInstance.PropertySelected;
RToleranceEntity.PropertyInvisible = 
  RToleranceEntity_WrapperSingletonInstance.PropertyInvisible;
RToleranceEntity.PropertyParentId = 
  RToleranceEntity_WrapperSingletonInstance.PropertyParentId;
RToleranceEntity.PropertyMinX = 
  RToleranceEntity_WrapperSingletonInstance.PropertyMinX;
RToleranceEntity.PropertyMinY = 
  RToleranceEntity_WrapperSingletonInstance.PropertyMinY;
RToleranceEntity.PropertyMaxX = 
  RToleranceEntity_WrapperSingletonInstance.PropertyMaxX;
RToleranceEntity.PropertyMaxY = 
  RToleranceEntity_WrapperSingletonInstance.PropertyMaxY;
RToleranceEntity.PropertySizeX = 
  RToleranceEntity_WrapperSingletonInstance.PropertySizeX;
RToleranceEntity.PropertySizeY = 
  RToleranceEntity_WrapperSingletonInstance.PropertySizeY;
RToleranceEntity.PropertyCustom = 
  RToleranceEntity_WrapperSingletonInstance.PropertyCustom;
RToleranceEntity.PropertyHandle = 
  RToleranceEntity_WrapperSingletonInstance.PropertyHandle;
RToleranceEntity.PropertyProtected = 
  RToleranceEntity_WrapperSingletonInstance.PropertyProtected;
RToleranceEntity.PropertyWorkingSet = 
  RToleranceEntity_WrapperSingletonInstance.PropertyWorkingSet;
RToleranceEntity.PropertyType = 
  RToleranceEntity_WrapperSingletonInstance.PropertyType;
RToleranceEntity.PropertyBlock = 
  RToleranceEntity_WrapperSingletonInstance.PropertyBlock;
RToleranceEntity.PropertyLayer = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLayer;
RToleranceEntity.PropertyLinetype = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLinetype;
RToleranceEntity.PropertyLinetypeScale = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RToleranceEntity.PropertyLineweight = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLineweight;
RToleranceEntity.PropertyColor = 
  RToleranceEntity_WrapperSingletonInstance.PropertyColor;
RToleranceEntity.PropertyDisplayedColor = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RToleranceEntity.PropertyDrawOrder = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDrawOrder;
RToleranceEntity.PropertyLocationX = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLocationX;
RToleranceEntity.PropertyLocationY = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLocationY;
RToleranceEntity.PropertyLocationZ = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLocationZ;
RToleranceEntity.PropertyDirectionX = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDirectionX;
RToleranceEntity.PropertyDirectionY = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDirectionY;
RToleranceEntity.PropertyDirectionZ = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDirectionZ;
RToleranceEntity.PropertyText = 
  RToleranceEntity_WrapperSingletonInstance.PropertyText;
RToleranceEntity.PropertyDimscale = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDimscale;
RToleranceEntity.PropertyDimtxt = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDimtxt;


      // copy function:
      //RToleranceEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RToleranceEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    