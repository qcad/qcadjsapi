
      // auto generated
      //var self;

      // class constructor:
      function RTraceEntity() {
        

        // should be RTraceEntity_BaseJs.call(this, engine):
        //RTraceEntity.prototype = new RTraceEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTraceEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTraceEntity);
            //}
          }
          else {
            qWarning("RTraceEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RTraceEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTraceEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity(): wrong number / type of arguments");
      
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

      //RTraceEntity.prototype = new RTraceEntity_BaseJs(engine);
      //RTraceEntity.prototype = new RTraceEntity_Wrapper(engine);
      RTraceEntity.prototype = new Object();

      RTraceEntity.prototype.toString = function() {
          //return "RTraceEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTraceEntity [JS]";
        };
      RTraceEntity.getObjectType = function() {
        return RJSType_RTraceEntity.getIdStatic();
      };

      RTraceEntity.prototype.getObjectType = function() {
        return RJSType_RTraceEntity.getIdStatic();
      };

      RTraceEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTraceEntity.getIdStatic()) {
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
        RTraceEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RTraceEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RTraceEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTraceEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RTraceEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTraceEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTraceEntity.setMember = function() 
          
        {
          //print("JS: RTraceEntity.setMember");
          
        };
      

        // static function 
        RTraceEntity.setMemberX = function() 
          
        {
          //print("JS: RTraceEntity.setMemberX");
          
        };
      

        // static function 
        RTraceEntity.setMemberY = function() 
          
        {
          //print("JS: RTraceEntity.setMemberY");
          
        };
      

        // static function 
        RTraceEntity.setMemberZ = function() 
          
        {
          //print("JS: RTraceEntity.setMemberZ");
          
        };
      

        // static function 
        RTraceEntity.setMemberVector = function() 
          
        {
          //print("JS: RTraceEntity.setMemberVector");
          
        };
      

        // static function 
        RTraceEntity.isComplex = function() 
          
        {
          //print("JS: RTraceEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTraceEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTraceEntity.isDimension = function() 
          
        {
          //print("JS: RTraceEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTraceEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTraceEntity.isTextBased = function() 
          
        {
          //print("JS: RTraceEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTraceEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTraceEntity.init = function() 
          
        {
          //print("JS: RTraceEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTraceEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTraceEntity.getRtti = function() 
          
        {
          //print("JS: RTraceEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTraceEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTraceEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RTraceEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTraceEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RTraceEntity.INVALID_ID = 
  RTraceEntity_WrapperSingletonInstance.INVALID_ID;
RTraceEntity.INVALID_HANDLE = 
  RTraceEntity_WrapperSingletonInstance.INVALID_HANDLE;
RTraceEntity.PropertySelected = 
  RTraceEntity_WrapperSingletonInstance.PropertySelected;
RTraceEntity.PropertyInvisible = 
  RTraceEntity_WrapperSingletonInstance.PropertyInvisible;
RTraceEntity.PropertyParentId = 
  RTraceEntity_WrapperSingletonInstance.PropertyParentId;
RTraceEntity.PropertyMinX = 
  RTraceEntity_WrapperSingletonInstance.PropertyMinX;
RTraceEntity.PropertyMinY = 
  RTraceEntity_WrapperSingletonInstance.PropertyMinY;
RTraceEntity.PropertyMaxX = 
  RTraceEntity_WrapperSingletonInstance.PropertyMaxX;
RTraceEntity.PropertyMaxY = 
  RTraceEntity_WrapperSingletonInstance.PropertyMaxY;
RTraceEntity.PropertySizeX = 
  RTraceEntity_WrapperSingletonInstance.PropertySizeX;
RTraceEntity.PropertySizeY = 
  RTraceEntity_WrapperSingletonInstance.PropertySizeY;
RTraceEntity.PropertyCustom = 
  RTraceEntity_WrapperSingletonInstance.PropertyCustom;
RTraceEntity.PropertyHandle = 
  RTraceEntity_WrapperSingletonInstance.PropertyHandle;
RTraceEntity.PropertyProtected = 
  RTraceEntity_WrapperSingletonInstance.PropertyProtected;
RTraceEntity.PropertyWorkingSet = 
  RTraceEntity_WrapperSingletonInstance.PropertyWorkingSet;
RTraceEntity.PropertyType = 
  RTraceEntity_WrapperSingletonInstance.PropertyType;
RTraceEntity.PropertyBlock = 
  RTraceEntity_WrapperSingletonInstance.PropertyBlock;
RTraceEntity.PropertyLayer = 
  RTraceEntity_WrapperSingletonInstance.PropertyLayer;
RTraceEntity.PropertyLinetype = 
  RTraceEntity_WrapperSingletonInstance.PropertyLinetype;
RTraceEntity.PropertyLinetypeScale = 
  RTraceEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RTraceEntity.PropertyLineweight = 
  RTraceEntity_WrapperSingletonInstance.PropertyLineweight;
RTraceEntity.PropertyColor = 
  RTraceEntity_WrapperSingletonInstance.PropertyColor;
RTraceEntity.PropertyDisplayedColor = 
  RTraceEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RTraceEntity.PropertyDrawOrder = 
  RTraceEntity_WrapperSingletonInstance.PropertyDrawOrder;
RTraceEntity.PropertyPoint1X = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint1X;
RTraceEntity.PropertyPoint1Y = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint1Y;
RTraceEntity.PropertyPoint1Z = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint1Z;
RTraceEntity.PropertyPoint2X = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint2X;
RTraceEntity.PropertyPoint2Y = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint2Y;
RTraceEntity.PropertyPoint2Z = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint2Z;
RTraceEntity.PropertyPoint3X = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint3X;
RTraceEntity.PropertyPoint3Y = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint3Y;
RTraceEntity.PropertyPoint3Z = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint3Z;
RTraceEntity.PropertyPoint4X = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint4X;
RTraceEntity.PropertyPoint4Y = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint4Y;
RTraceEntity.PropertyPoint4Z = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint4Z;
RTraceEntity.PropertyLength = 
  RTraceEntity_WrapperSingletonInstance.PropertyLength;
RTraceEntity.PropertyTotalLength = 
  RTraceEntity_WrapperSingletonInstance.PropertyTotalLength;


      // copy function:
      //RTraceEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTraceEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    