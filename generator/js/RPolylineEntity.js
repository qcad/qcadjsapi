
      // auto generated
      //var self;

      // class constructor:
      function RPolylineEntity() {
        

        // should be RPolylineEntity_BaseJs.call(this, engine):
        //RPolylineEntity.prototype = new RPolylineEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPolylineEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPolylineEntity);
            //}
          }
          else {
            qWarning("RPolylineEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPolylineEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPolylineEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolylineEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPolylineEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPolylineEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolylineEntity);
  }

  
  else {
    
        print("RPolylineEntity(): wrong number / type of arguments");
      
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

      //RPolylineEntity.prototype = new RPolylineEntity_BaseJs(engine);
      //RPolylineEntity.prototype = new RPolylineEntity_Wrapper(engine);
      RPolylineEntity.prototype = new Object();

      RPolylineEntity.prototype.toString = function() {
          //return "RPolylineEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPolylineEntity [JS]";
        };
      RPolylineEntity.getObjectType = function() {
        return RJSType_RPolylineEntity.getIdStatic();
      };

      RPolylineEntity.prototype.getObjectType = function() {
        return RJSType_RPolylineEntity.getIdStatic();
      };

      RPolylineEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPolylineEntity.getIdStatic()) {
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
        RPolylineEntity.init = function() 
          
        {
          //print("JS: RPolylineEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolylineEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RPolylineEntity);
  }

  
  else {
    
        print("RPolylineEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolylineEntity.getRtti = function() 
          
        {
          //print("JS: RPolylineEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolylineEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RPolylineEntity);
  }

  
  else {
    
        print("RPolylineEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolylineEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RPolylineEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolylineEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RPolylineEntity);
  }

  
  else {
    
        print("RPolylineEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RPolylineEntity.INVALID_ID = 
  RPolylineEntity_WrapperSingletonInstance.INVALID_ID;
RPolylineEntity.INVALID_HANDLE = 
  RPolylineEntity_WrapperSingletonInstance.INVALID_HANDLE;
RPolylineEntity.PropertySelected = 
  RPolylineEntity_WrapperSingletonInstance.PropertySelected;
RPolylineEntity.PropertyInvisible = 
  RPolylineEntity_WrapperSingletonInstance.PropertyInvisible;
RPolylineEntity.PropertyParentId = 
  RPolylineEntity_WrapperSingletonInstance.PropertyParentId;
RPolylineEntity.PropertyMinX = 
  RPolylineEntity_WrapperSingletonInstance.PropertyMinX;
RPolylineEntity.PropertyMinY = 
  RPolylineEntity_WrapperSingletonInstance.PropertyMinY;
RPolylineEntity.PropertyMaxX = 
  RPolylineEntity_WrapperSingletonInstance.PropertyMaxX;
RPolylineEntity.PropertyMaxY = 
  RPolylineEntity_WrapperSingletonInstance.PropertyMaxY;
RPolylineEntity.PropertySizeX = 
  RPolylineEntity_WrapperSingletonInstance.PropertySizeX;
RPolylineEntity.PropertySizeY = 
  RPolylineEntity_WrapperSingletonInstance.PropertySizeY;
RPolylineEntity.PropertyCustom = 
  RPolylineEntity_WrapperSingletonInstance.PropertyCustom;
RPolylineEntity.PropertyHandle = 
  RPolylineEntity_WrapperSingletonInstance.PropertyHandle;
RPolylineEntity.PropertyProtected = 
  RPolylineEntity_WrapperSingletonInstance.PropertyProtected;
RPolylineEntity.PropertyWorkingSet = 
  RPolylineEntity_WrapperSingletonInstance.PropertyWorkingSet;
RPolylineEntity.PropertyType = 
  RPolylineEntity_WrapperSingletonInstance.PropertyType;
RPolylineEntity.PropertyBlock = 
  RPolylineEntity_WrapperSingletonInstance.PropertyBlock;
RPolylineEntity.PropertyLayer = 
  RPolylineEntity_WrapperSingletonInstance.PropertyLayer;
RPolylineEntity.PropertyLinetype = 
  RPolylineEntity_WrapperSingletonInstance.PropertyLinetype;
RPolylineEntity.PropertyLinetypeScale = 
  RPolylineEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RPolylineEntity.PropertyLineweight = 
  RPolylineEntity_WrapperSingletonInstance.PropertyLineweight;
RPolylineEntity.PropertyColor = 
  RPolylineEntity_WrapperSingletonInstance.PropertyColor;
RPolylineEntity.PropertyDisplayedColor = 
  RPolylineEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RPolylineEntity.PropertyDrawOrder = 
  RPolylineEntity_WrapperSingletonInstance.PropertyDrawOrder;
RPolylineEntity.PropertyClosed = 
  RPolylineEntity_WrapperSingletonInstance.PropertyClosed;
RPolylineEntity.PropertyPolylineGen = 
  RPolylineEntity_WrapperSingletonInstance.PropertyPolylineGen;
RPolylineEntity.PropertyVertexNX = 
  RPolylineEntity_WrapperSingletonInstance.PropertyVertexNX;
RPolylineEntity.PropertyVertexNY = 
  RPolylineEntity_WrapperSingletonInstance.PropertyVertexNY;
RPolylineEntity.PropertyVertexNZ = 
  RPolylineEntity_WrapperSingletonInstance.PropertyVertexNZ;
RPolylineEntity.PropertyBulgeN = 
  RPolylineEntity_WrapperSingletonInstance.PropertyBulgeN;
RPolylineEntity.PropertyAngleN = 
  RPolylineEntity_WrapperSingletonInstance.PropertyAngleN;
RPolylineEntity.PropertyStartWidthN = 
  RPolylineEntity_WrapperSingletonInstance.PropertyStartWidthN;
RPolylineEntity.PropertyEndWidthN = 
  RPolylineEntity_WrapperSingletonInstance.PropertyEndWidthN;
RPolylineEntity.PropertyGlobalWidth = 
  RPolylineEntity_WrapperSingletonInstance.PropertyGlobalWidth;
RPolylineEntity.PropertyOrientation = 
  RPolylineEntity_WrapperSingletonInstance.PropertyOrientation;
RPolylineEntity.PropertyLength = 
  RPolylineEntity_WrapperSingletonInstance.PropertyLength;
RPolylineEntity.PropertyTotalLength = 
  RPolylineEntity_WrapperSingletonInstance.PropertyTotalLength;
RPolylineEntity.PropertyArea = 
  RPolylineEntity_WrapperSingletonInstance.PropertyArea;
RPolylineEntity.PropertyTotalArea = 
  RPolylineEntity_WrapperSingletonInstance.PropertyTotalArea;
RPolylineEntity.PropertyBaseAngle = 
  RPolylineEntity_WrapperSingletonInstance.PropertyBaseAngle;
RPolylineEntity.PropertySize1 = 
  RPolylineEntity_WrapperSingletonInstance.PropertySize1;
RPolylineEntity.PropertySize2 = 
  RPolylineEntity_WrapperSingletonInstance.PropertySize2;
RPolylineEntity.PropertyElevation = 
  RPolylineEntity_WrapperSingletonInstance.PropertyElevation;


      // copy function:
      //RPolylineEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPolylineEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    