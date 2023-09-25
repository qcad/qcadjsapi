
      // auto generated
      //var self;

      // class constructor:
      function RLineEntity() {
        

        // should be RLineEntity_BaseJs.call(this, engine):
        //RLineEntity.prototype = new RLineEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLineEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLineEntity);
            //}
          }
          else {
            qWarning("RLineEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLineEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLineEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLineEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLineEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity(): wrong number / type of arguments");
      
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

      //RLineEntity.prototype = new RLineEntity_BaseJs(engine);
      //RLineEntity.prototype = new RLineEntity_Wrapper(engine);
      RLineEntity.prototype = new Object();

      RLineEntity.prototype.toString = function() {
          //return "RLineEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLineEntity [JS]";
        };
      RLineEntity.getObjectType = function() {
        return RJSType_RLineEntity.getIdStatic();
      };

      RLineEntity.prototype.getObjectType = function() {
        return RJSType_RLineEntity.getIdStatic();
      };

      RLineEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLineEntity.getIdStatic()) {
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
        RLineEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RLineEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RLineEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RLineEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLineEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineEntity.setMember = function() 
          
        {
          //print("JS: RLineEntity.setMember");
          
        };
      

        // static function 
        RLineEntity.setMemberX = function() 
          
        {
          //print("JS: RLineEntity.setMemberX");
          
        };
      

        // static function 
        RLineEntity.setMemberY = function() 
          
        {
          //print("JS: RLineEntity.setMemberY");
          
        };
      

        // static function 
        RLineEntity.setMemberZ = function() 
          
        {
          //print("JS: RLineEntity.setMemberZ");
          
        };
      

        // static function 
        RLineEntity.setMemberVector = function() 
          
        {
          //print("JS: RLineEntity.setMemberVector");
          
        };
      

        // static function 
        RLineEntity.isComplex = function() 
          
        {
          //print("JS: RLineEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLineEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineEntity.isDimension = function() 
          
        {
          //print("JS: RLineEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLineEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineEntity.isTextBased = function() 
          
        {
          //print("JS: RLineEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLineEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineEntity.init = function() 
          
        {
          //print("JS: RLineEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLineEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineEntity.getRtti = function() 
          
        {
          //print("JS: RLineEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLineEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RLineEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLineEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLineEntity.INVALID_ID = 
  RLineEntity_WrapperSingletonInstance.INVALID_ID;
RLineEntity.INVALID_HANDLE = 
  RLineEntity_WrapperSingletonInstance.INVALID_HANDLE;
RLineEntity.PropertySelected = 
  RLineEntity_WrapperSingletonInstance.PropertySelected;
RLineEntity.PropertyInvisible = 
  RLineEntity_WrapperSingletonInstance.PropertyInvisible;
RLineEntity.PropertyParentId = 
  RLineEntity_WrapperSingletonInstance.PropertyParentId;
RLineEntity.PropertyMinX = 
  RLineEntity_WrapperSingletonInstance.PropertyMinX;
RLineEntity.PropertyMinY = 
  RLineEntity_WrapperSingletonInstance.PropertyMinY;
RLineEntity.PropertyMaxX = 
  RLineEntity_WrapperSingletonInstance.PropertyMaxX;
RLineEntity.PropertyMaxY = 
  RLineEntity_WrapperSingletonInstance.PropertyMaxY;
RLineEntity.PropertySizeX = 
  RLineEntity_WrapperSingletonInstance.PropertySizeX;
RLineEntity.PropertySizeY = 
  RLineEntity_WrapperSingletonInstance.PropertySizeY;
RLineEntity.PropertyCustom = 
  RLineEntity_WrapperSingletonInstance.PropertyCustom;
RLineEntity.PropertyHandle = 
  RLineEntity_WrapperSingletonInstance.PropertyHandle;
RLineEntity.PropertyProtected = 
  RLineEntity_WrapperSingletonInstance.PropertyProtected;
RLineEntity.PropertyWorkingSet = 
  RLineEntity_WrapperSingletonInstance.PropertyWorkingSet;
RLineEntity.PropertyType = 
  RLineEntity_WrapperSingletonInstance.PropertyType;
RLineEntity.PropertyBlock = 
  RLineEntity_WrapperSingletonInstance.PropertyBlock;
RLineEntity.PropertyLayer = 
  RLineEntity_WrapperSingletonInstance.PropertyLayer;
RLineEntity.PropertyLinetype = 
  RLineEntity_WrapperSingletonInstance.PropertyLinetype;
RLineEntity.PropertyLinetypeScale = 
  RLineEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RLineEntity.PropertyLineweight = 
  RLineEntity_WrapperSingletonInstance.PropertyLineweight;
RLineEntity.PropertyColor = 
  RLineEntity_WrapperSingletonInstance.PropertyColor;
RLineEntity.PropertyDisplayedColor = 
  RLineEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RLineEntity.PropertyDrawOrder = 
  RLineEntity_WrapperSingletonInstance.PropertyDrawOrder;
RLineEntity.PropertyStartPointX = 
  RLineEntity_WrapperSingletonInstance.PropertyStartPointX;
RLineEntity.PropertyStartPointY = 
  RLineEntity_WrapperSingletonInstance.PropertyStartPointY;
RLineEntity.PropertyStartPointZ = 
  RLineEntity_WrapperSingletonInstance.PropertyStartPointZ;
RLineEntity.PropertyMiddlePointX = 
  RLineEntity_WrapperSingletonInstance.PropertyMiddlePointX;
RLineEntity.PropertyMiddlePointY = 
  RLineEntity_WrapperSingletonInstance.PropertyMiddlePointY;
RLineEntity.PropertyMiddlePointZ = 
  RLineEntity_WrapperSingletonInstance.PropertyMiddlePointZ;
RLineEntity.PropertyEndPointX = 
  RLineEntity_WrapperSingletonInstance.PropertyEndPointX;
RLineEntity.PropertyEndPointY = 
  RLineEntity_WrapperSingletonInstance.PropertyEndPointY;
RLineEntity.PropertyEndPointZ = 
  RLineEntity_WrapperSingletonInstance.PropertyEndPointZ;
RLineEntity.PropertyAngle = 
  RLineEntity_WrapperSingletonInstance.PropertyAngle;
RLineEntity.PropertyLength = 
  RLineEntity_WrapperSingletonInstance.PropertyLength;
RLineEntity.PropertyTotalLength = 
  RLineEntity_WrapperSingletonInstance.PropertyTotalLength;


      // copy function:
      //RLineEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLineEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    