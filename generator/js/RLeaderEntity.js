
      // auto generated
      //var self;

      // class constructor:
      function RLeaderEntity() {
        

        // should be RLeaderEntity_BaseJs.call(this, engine):
        //RLeaderEntity.prototype = new RLeaderEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLeaderEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLeaderEntity);
            //}
          }
          else {
            qWarning("RLeaderEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLeaderEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLeaderEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLeaderEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLeaderEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity(): wrong number / type of arguments");
      
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

      //RLeaderEntity.prototype = new RLeaderEntity_BaseJs(engine);
      //RLeaderEntity.prototype = new RLeaderEntity_Wrapper(engine);
      RLeaderEntity.prototype = new Object();

      RLeaderEntity.prototype.toString = function() {
          //return "RLeaderEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLeaderEntity [JS]";
        };
      RLeaderEntity.getObjectType = function() {
        return RJSType_RLeaderEntity.getIdStatic();
      };

      RLeaderEntity.prototype.getObjectType = function() {
        return RJSType_RLeaderEntity.getIdStatic();
      };

      RLeaderEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLeaderEntity.getIdStatic()) {
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
        RLeaderEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RLeaderEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RLeaderEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLeaderEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RLeaderEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLeaderEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLeaderEntity.setMember = function() 
          
        {
          //print("JS: RLeaderEntity.setMember");
          
        };
      

        // static function 
        RLeaderEntity.setMemberX = function() 
          
        {
          //print("JS: RLeaderEntity.setMemberX");
          
        };
      

        // static function 
        RLeaderEntity.setMemberY = function() 
          
        {
          //print("JS: RLeaderEntity.setMemberY");
          
        };
      

        // static function 
        RLeaderEntity.setMemberZ = function() 
          
        {
          //print("JS: RLeaderEntity.setMemberZ");
          
        };
      

        // static function 
        RLeaderEntity.setMemberVector = function() 
          
        {
          //print("JS: RLeaderEntity.setMemberVector");
          
        };
      

        // static function 
        RLeaderEntity.isComplex = function() 
          
        {
          //print("JS: RLeaderEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLeaderEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLeaderEntity.isDimension = function() 
          
        {
          //print("JS: RLeaderEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLeaderEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLeaderEntity.isTextBased = function() 
          
        {
          //print("JS: RLeaderEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLeaderEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLeaderEntity.init = function() 
          
        {
          //print("JS: RLeaderEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLeaderEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLeaderEntity.getRtti = function() 
          
        {
          //print("JS: RLeaderEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLeaderEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLeaderEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RLeaderEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLeaderEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLeaderEntity.INVALID_ID = 
  RLeaderEntity_WrapperSingletonInstance.INVALID_ID;
RLeaderEntity.INVALID_HANDLE = 
  RLeaderEntity_WrapperSingletonInstance.INVALID_HANDLE;
RLeaderEntity.PropertySelected = 
  RLeaderEntity_WrapperSingletonInstance.PropertySelected;
RLeaderEntity.PropertyInvisible = 
  RLeaderEntity_WrapperSingletonInstance.PropertyInvisible;
RLeaderEntity.PropertyParentId = 
  RLeaderEntity_WrapperSingletonInstance.PropertyParentId;
RLeaderEntity.PropertyMinX = 
  RLeaderEntity_WrapperSingletonInstance.PropertyMinX;
RLeaderEntity.PropertyMinY = 
  RLeaderEntity_WrapperSingletonInstance.PropertyMinY;
RLeaderEntity.PropertyMaxX = 
  RLeaderEntity_WrapperSingletonInstance.PropertyMaxX;
RLeaderEntity.PropertyMaxY = 
  RLeaderEntity_WrapperSingletonInstance.PropertyMaxY;
RLeaderEntity.PropertySizeX = 
  RLeaderEntity_WrapperSingletonInstance.PropertySizeX;
RLeaderEntity.PropertySizeY = 
  RLeaderEntity_WrapperSingletonInstance.PropertySizeY;
RLeaderEntity.PropertyCustom = 
  RLeaderEntity_WrapperSingletonInstance.PropertyCustom;
RLeaderEntity.PropertyHandle = 
  RLeaderEntity_WrapperSingletonInstance.PropertyHandle;
RLeaderEntity.PropertyProtected = 
  RLeaderEntity_WrapperSingletonInstance.PropertyProtected;
RLeaderEntity.PropertyWorkingSet = 
  RLeaderEntity_WrapperSingletonInstance.PropertyWorkingSet;
RLeaderEntity.PropertyType = 
  RLeaderEntity_WrapperSingletonInstance.PropertyType;
RLeaderEntity.PropertyBlock = 
  RLeaderEntity_WrapperSingletonInstance.PropertyBlock;
RLeaderEntity.PropertyLayer = 
  RLeaderEntity_WrapperSingletonInstance.PropertyLayer;
RLeaderEntity.PropertyLinetype = 
  RLeaderEntity_WrapperSingletonInstance.PropertyLinetype;
RLeaderEntity.PropertyLinetypeScale = 
  RLeaderEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RLeaderEntity.PropertyLineweight = 
  RLeaderEntity_WrapperSingletonInstance.PropertyLineweight;
RLeaderEntity.PropertyColor = 
  RLeaderEntity_WrapperSingletonInstance.PropertyColor;
RLeaderEntity.PropertyDisplayedColor = 
  RLeaderEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RLeaderEntity.PropertyDrawOrder = 
  RLeaderEntity_WrapperSingletonInstance.PropertyDrawOrder;
RLeaderEntity.PropertyArrowHead = 
  RLeaderEntity_WrapperSingletonInstance.PropertyArrowHead;
RLeaderEntity.PropertySplineShaped = 
  RLeaderEntity_WrapperSingletonInstance.PropertySplineShaped;
RLeaderEntity.PropertyDimLeaderBlock = 
  RLeaderEntity_WrapperSingletonInstance.PropertyDimLeaderBlock;
RLeaderEntity.PropertyVertexNX = 
  RLeaderEntity_WrapperSingletonInstance.PropertyVertexNX;
RLeaderEntity.PropertyVertexNY = 
  RLeaderEntity_WrapperSingletonInstance.PropertyVertexNY;
RLeaderEntity.PropertyVertexNZ = 
  RLeaderEntity_WrapperSingletonInstance.PropertyVertexNZ;
RLeaderEntity.PropertyDimscale = 
  RLeaderEntity_WrapperSingletonInstance.PropertyDimscale;
RLeaderEntity.PropertyDimasz = 
  RLeaderEntity_WrapperSingletonInstance.PropertyDimasz;


      // copy function:
      //RLeaderEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLeaderEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    