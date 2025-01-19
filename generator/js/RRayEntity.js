
      // auto generated
      //var self;

      // class constructor:
      function RRayEntity() {
        

        // should be RRayEntity_BaseJs.call(this, engine):
        //RRayEntity.prototype = new RRayEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRayEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RRayEntity);
            //}
          }
          else {
            qWarning("RRayEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RRayEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRayEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRayEntity);
  }

  
  else {
    
        print("RRayEntity(): wrong number / type of arguments");
      
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

      //RRayEntity.prototype = new RRayEntity_BaseJs(engine);
      //RRayEntity.prototype = new RRayEntity_Wrapper(engine);
      RRayEntity.prototype = new Object();

      RRayEntity.prototype.toString = function() {
          //return "RRayEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRayEntity [JS]";
        };
      RRayEntity.getObjectType = function() {
        return RJSType_RRayEntity.getIdStatic();
      };

      RRayEntity.prototype.getObjectType = function() {
        return RJSType_RRayEntity.getIdStatic();
      };

      RRayEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRayEntity.getIdStatic()) {
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
        RRayEntity.init = function() 
          
        {
          //print("JS: RRayEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RRayEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RRayEntity);
  }

  
  else {
    
        print("RRayEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRayEntity.getRtti = function() 
          
        {
          //print("JS: RRayEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RRayEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RRayEntity);
  }

  
  else {
    
        print("RRayEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRayEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RRayEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RRayEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RRayEntity);
  }

  
  else {
    
        print("RRayEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RRayEntity.INVALID_ID = 
  RRayEntity_WrapperSingletonInstance.INVALID_ID;
RRayEntity.INVALID_HANDLE = 
  RRayEntity_WrapperSingletonInstance.INVALID_HANDLE;
RRayEntity.PropertySelected = 
  RRayEntity_WrapperSingletonInstance.PropertySelected;
RRayEntity.PropertyInvisible = 
  RRayEntity_WrapperSingletonInstance.PropertyInvisible;
RRayEntity.PropertyParentId = 
  RRayEntity_WrapperSingletonInstance.PropertyParentId;
RRayEntity.PropertyMinX = 
  RRayEntity_WrapperSingletonInstance.PropertyMinX;
RRayEntity.PropertyMinY = 
  RRayEntity_WrapperSingletonInstance.PropertyMinY;
RRayEntity.PropertyMaxX = 
  RRayEntity_WrapperSingletonInstance.PropertyMaxX;
RRayEntity.PropertyMaxY = 
  RRayEntity_WrapperSingletonInstance.PropertyMaxY;
RRayEntity.PropertySizeX = 
  RRayEntity_WrapperSingletonInstance.PropertySizeX;
RRayEntity.PropertySizeY = 
  RRayEntity_WrapperSingletonInstance.PropertySizeY;
RRayEntity.PropertyCustom = 
  RRayEntity_WrapperSingletonInstance.PropertyCustom;
RRayEntity.PropertyHandle = 
  RRayEntity_WrapperSingletonInstance.PropertyHandle;
RRayEntity.PropertyProtected = 
  RRayEntity_WrapperSingletonInstance.PropertyProtected;
RRayEntity.PropertyWorkingSet = 
  RRayEntity_WrapperSingletonInstance.PropertyWorkingSet;
RRayEntity.PropertyType = 
  RRayEntity_WrapperSingletonInstance.PropertyType;
RRayEntity.PropertyBlock = 
  RRayEntity_WrapperSingletonInstance.PropertyBlock;
RRayEntity.PropertyLayer = 
  RRayEntity_WrapperSingletonInstance.PropertyLayer;
RRayEntity.PropertyLinetype = 
  RRayEntity_WrapperSingletonInstance.PropertyLinetype;
RRayEntity.PropertyLinetypeScale = 
  RRayEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RRayEntity.PropertyLineweight = 
  RRayEntity_WrapperSingletonInstance.PropertyLineweight;
RRayEntity.PropertyColor = 
  RRayEntity_WrapperSingletonInstance.PropertyColor;
RRayEntity.PropertyDisplayedColor = 
  RRayEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RRayEntity.PropertyDrawOrder = 
  RRayEntity_WrapperSingletonInstance.PropertyDrawOrder;
RRayEntity.PropertyBasePointX = 
  RRayEntity_WrapperSingletonInstance.PropertyBasePointX;
RRayEntity.PropertyBasePointY = 
  RRayEntity_WrapperSingletonInstance.PropertyBasePointY;
RRayEntity.PropertyBasePointZ = 
  RRayEntity_WrapperSingletonInstance.PropertyBasePointZ;
RRayEntity.PropertySecondPointX = 
  RRayEntity_WrapperSingletonInstance.PropertySecondPointX;
RRayEntity.PropertySecondPointY = 
  RRayEntity_WrapperSingletonInstance.PropertySecondPointY;
RRayEntity.PropertySecondPointZ = 
  RRayEntity_WrapperSingletonInstance.PropertySecondPointZ;
RRayEntity.PropertyDirectionX = 
  RRayEntity_WrapperSingletonInstance.PropertyDirectionX;
RRayEntity.PropertyDirectionY = 
  RRayEntity_WrapperSingletonInstance.PropertyDirectionY;
RRayEntity.PropertyDirectionZ = 
  RRayEntity_WrapperSingletonInstance.PropertyDirectionZ;
RRayEntity.PropertyAngle = 
  RRayEntity_WrapperSingletonInstance.PropertyAngle;
RRayEntity.PropertyFixedAngle = 
  RRayEntity_WrapperSingletonInstance.PropertyFixedAngle;


      // copy function:
      //RRayEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRayEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    