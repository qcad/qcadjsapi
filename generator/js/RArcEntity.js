
      // auto generated
      //var self;

      // class constructor:
      function RArcEntity() {
        

        // should be RArcEntity_BaseJs.call(this, engine):
        //RArcEntity.prototype = new RArcEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RArcEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RArcEntity);
            //}
          }
          else {
            qWarning("RArcEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RArcEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RArcEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArcEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RArcEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RArcEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArcEntity);
  }

  
  else {
    
        print("RArcEntity(): wrong number / type of arguments");
      
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

      //RArcEntity.prototype = new RArcEntity_BaseJs(engine);
      //RArcEntity.prototype = new RArcEntity_Wrapper(engine);
      RArcEntity.prototype = new Object();

      RArcEntity.prototype.toString = function() {
          //return "RArcEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RArcEntity [JS]";
        };
      RArcEntity.getObjectType = function() {
        return RJSType_RArcEntity.getIdStatic();
      };

      RArcEntity.prototype.getObjectType = function() {
        return RJSType_RArcEntity.getIdStatic();
      };

      RArcEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RArcEntity.getIdStatic()) {
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
        RArcEntity.init = function() 
          
        {
          //print("JS: RArcEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RArcEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RArcEntity);
  }

  
  else {
    
        print("RArcEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArcEntity.getRtti = function() 
          
        {
          //print("JS: RArcEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RArcEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RArcEntity);
  }

  
  else {
    
        print("RArcEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArcEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RArcEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RArcEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RArcEntity);
  }

  
  else {
    
        print("RArcEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RArcEntity.INVALID_ID = 
  RArcEntity_WrapperSingletonInstance.INVALID_ID;
RArcEntity.INVALID_HANDLE = 
  RArcEntity_WrapperSingletonInstance.INVALID_HANDLE;
RArcEntity.PropertySelected = 
  RArcEntity_WrapperSingletonInstance.PropertySelected;
RArcEntity.PropertyInvisible = 
  RArcEntity_WrapperSingletonInstance.PropertyInvisible;
RArcEntity.PropertyParentId = 
  RArcEntity_WrapperSingletonInstance.PropertyParentId;
RArcEntity.PropertyMinX = 
  RArcEntity_WrapperSingletonInstance.PropertyMinX;
RArcEntity.PropertyMinY = 
  RArcEntity_WrapperSingletonInstance.PropertyMinY;
RArcEntity.PropertyMaxX = 
  RArcEntity_WrapperSingletonInstance.PropertyMaxX;
RArcEntity.PropertyMaxY = 
  RArcEntity_WrapperSingletonInstance.PropertyMaxY;
RArcEntity.PropertySizeX = 
  RArcEntity_WrapperSingletonInstance.PropertySizeX;
RArcEntity.PropertySizeY = 
  RArcEntity_WrapperSingletonInstance.PropertySizeY;
RArcEntity.PropertyCustom = 
  RArcEntity_WrapperSingletonInstance.PropertyCustom;
RArcEntity.PropertyHandle = 
  RArcEntity_WrapperSingletonInstance.PropertyHandle;
RArcEntity.PropertyProtected = 
  RArcEntity_WrapperSingletonInstance.PropertyProtected;
RArcEntity.PropertyWorkingSet = 
  RArcEntity_WrapperSingletonInstance.PropertyWorkingSet;
RArcEntity.PropertyType = 
  RArcEntity_WrapperSingletonInstance.PropertyType;
RArcEntity.PropertyBlock = 
  RArcEntity_WrapperSingletonInstance.PropertyBlock;
RArcEntity.PropertyLayer = 
  RArcEntity_WrapperSingletonInstance.PropertyLayer;
RArcEntity.PropertyLinetype = 
  RArcEntity_WrapperSingletonInstance.PropertyLinetype;
RArcEntity.PropertyLinetypeScale = 
  RArcEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RArcEntity.PropertyLineweight = 
  RArcEntity_WrapperSingletonInstance.PropertyLineweight;
RArcEntity.PropertyColor = 
  RArcEntity_WrapperSingletonInstance.PropertyColor;
RArcEntity.PropertyDisplayedColor = 
  RArcEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RArcEntity.PropertyDrawOrder = 
  RArcEntity_WrapperSingletonInstance.PropertyDrawOrder;
RArcEntity.PropertyCenterX = 
  RArcEntity_WrapperSingletonInstance.PropertyCenterX;
RArcEntity.PropertyCenterY = 
  RArcEntity_WrapperSingletonInstance.PropertyCenterY;
RArcEntity.PropertyCenterZ = 
  RArcEntity_WrapperSingletonInstance.PropertyCenterZ;
RArcEntity.PropertyMiddlePointX = 
  RArcEntity_WrapperSingletonInstance.PropertyMiddlePointX;
RArcEntity.PropertyMiddlePointY = 
  RArcEntity_WrapperSingletonInstance.PropertyMiddlePointY;
RArcEntity.PropertyMiddlePointZ = 
  RArcEntity_WrapperSingletonInstance.PropertyMiddlePointZ;
RArcEntity.PropertyRadius = 
  RArcEntity_WrapperSingletonInstance.PropertyRadius;
RArcEntity.PropertyStartAngle = 
  RArcEntity_WrapperSingletonInstance.PropertyStartAngle;
RArcEntity.PropertyEndAngle = 
  RArcEntity_WrapperSingletonInstance.PropertyEndAngle;
RArcEntity.PropertyReversed = 
  RArcEntity_WrapperSingletonInstance.PropertyReversed;
RArcEntity.PropertyDiameter = 
  RArcEntity_WrapperSingletonInstance.PropertyDiameter;
RArcEntity.PropertyLength = 
  RArcEntity_WrapperSingletonInstance.PropertyLength;
RArcEntity.PropertyTotalLength = 
  RArcEntity_WrapperSingletonInstance.PropertyTotalLength;
RArcEntity.PropertySweepAngle = 
  RArcEntity_WrapperSingletonInstance.PropertySweepAngle;
RArcEntity.PropertyArea = 
  RArcEntity_WrapperSingletonInstance.PropertyArea;
RArcEntity.PropertyTotalArea = 
  RArcEntity_WrapperSingletonInstance.PropertyTotalArea;


      // copy function:
      //RArcEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RArcEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    