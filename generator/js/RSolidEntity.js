
      // auto generated
      //var self;

      // class constructor:
      function RSolidEntity() {
        

        // should be RSolidEntity_BaseJs.call(this, engine):
        //RSolidEntity.prototype = new RSolidEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSolidEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSolidEntity);
            //}
          }
          else {
            qWarning("RSolidEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RSolidEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSolidEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSolidEntity);
  }

  
  else {
    
        print("RSolidEntity(): wrong number / type of arguments");
      
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

      //RSolidEntity.prototype = new RSolidEntity_BaseJs(engine);
      //RSolidEntity.prototype = new RSolidEntity_Wrapper(engine);
      RSolidEntity.prototype = new Object();

      RSolidEntity.prototype.toString = function() {
          //return "RSolidEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSolidEntity [JS]";
        };
      RSolidEntity.getObjectType = function() {
        return RJSType_RSolidEntity.getIdStatic();
      };

      RSolidEntity.prototype.getObjectType = function() {
        return RJSType_RSolidEntity.getIdStatic();
      };

      RSolidEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSolidEntity.getIdStatic()) {
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
        RSolidEntity.init = function() 
          
        {
          //print("JS: RSolidEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSolidEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RSolidEntity);
  }

  
  else {
    
        print("RSolidEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSolidEntity.getRtti = function() 
          
        {
          //print("JS: RSolidEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSolidEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RSolidEntity);
  }

  
  else {
    
        print("RSolidEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSolidEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RSolidEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSolidEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RSolidEntity);
  }

  
  else {
    
        print("RSolidEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RSolidEntity.INVALID_ID = 
  RSolidEntity_WrapperSingletonInstance.INVALID_ID;
RSolidEntity.INVALID_HANDLE = 
  RSolidEntity_WrapperSingletonInstance.INVALID_HANDLE;
RSolidEntity.PropertySelected = 
  RSolidEntity_WrapperSingletonInstance.PropertySelected;
RSolidEntity.PropertyInvisible = 
  RSolidEntity_WrapperSingletonInstance.PropertyInvisible;
RSolidEntity.PropertyParentId = 
  RSolidEntity_WrapperSingletonInstance.PropertyParentId;
RSolidEntity.PropertyMinX = 
  RSolidEntity_WrapperSingletonInstance.PropertyMinX;
RSolidEntity.PropertyMinY = 
  RSolidEntity_WrapperSingletonInstance.PropertyMinY;
RSolidEntity.PropertyMaxX = 
  RSolidEntity_WrapperSingletonInstance.PropertyMaxX;
RSolidEntity.PropertyMaxY = 
  RSolidEntity_WrapperSingletonInstance.PropertyMaxY;
RSolidEntity.PropertySizeX = 
  RSolidEntity_WrapperSingletonInstance.PropertySizeX;
RSolidEntity.PropertySizeY = 
  RSolidEntity_WrapperSingletonInstance.PropertySizeY;
RSolidEntity.PropertyCustom = 
  RSolidEntity_WrapperSingletonInstance.PropertyCustom;
RSolidEntity.PropertyHandle = 
  RSolidEntity_WrapperSingletonInstance.PropertyHandle;
RSolidEntity.PropertyProtected = 
  RSolidEntity_WrapperSingletonInstance.PropertyProtected;
RSolidEntity.PropertyWorkingSet = 
  RSolidEntity_WrapperSingletonInstance.PropertyWorkingSet;
RSolidEntity.PropertyType = 
  RSolidEntity_WrapperSingletonInstance.PropertyType;
RSolidEntity.PropertyBlock = 
  RSolidEntity_WrapperSingletonInstance.PropertyBlock;
RSolidEntity.PropertyLayer = 
  RSolidEntity_WrapperSingletonInstance.PropertyLayer;
RSolidEntity.PropertyLinetype = 
  RSolidEntity_WrapperSingletonInstance.PropertyLinetype;
RSolidEntity.PropertyLinetypeScale = 
  RSolidEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RSolidEntity.PropertyLineweight = 
  RSolidEntity_WrapperSingletonInstance.PropertyLineweight;
RSolidEntity.PropertyColor = 
  RSolidEntity_WrapperSingletonInstance.PropertyColor;
RSolidEntity.PropertyDisplayedColor = 
  RSolidEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RSolidEntity.PropertyDrawOrder = 
  RSolidEntity_WrapperSingletonInstance.PropertyDrawOrder;
RSolidEntity.PropertyPoint1X = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint1X;
RSolidEntity.PropertyPoint1Y = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint1Y;
RSolidEntity.PropertyPoint1Z = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint1Z;
RSolidEntity.PropertyPoint2X = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint2X;
RSolidEntity.PropertyPoint2Y = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint2Y;
RSolidEntity.PropertyPoint2Z = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint2Z;
RSolidEntity.PropertyPoint3X = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint3X;
RSolidEntity.PropertyPoint3Y = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint3Y;
RSolidEntity.PropertyPoint3Z = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint3Z;
RSolidEntity.PropertyPoint4X = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint4X;
RSolidEntity.PropertyPoint4Y = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint4Y;
RSolidEntity.PropertyPoint4Z = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint4Z;
RSolidEntity.PropertyLength = 
  RSolidEntity_WrapperSingletonInstance.PropertyLength;
RSolidEntity.PropertyTotalLength = 
  RSolidEntity_WrapperSingletonInstance.PropertyTotalLength;


      // copy function:
      //RSolidEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSolidEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    