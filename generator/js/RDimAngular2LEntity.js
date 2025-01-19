
      // auto generated
      //var self;

      // class constructor:
      function RDimAngular2LEntity() {
        

        // should be RDimAngular2LEntity_BaseJs.call(this, engine):
        //RDimAngular2LEntity.prototype = new RDimAngular2LEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngular2LEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimAngular2LEntity);
            //}
          }
          else {
            qWarning("RDimAngular2LEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimAngular2LEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimAngular2LEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAngular2LEntity);
  }

  
  else {
    
        print("RDimAngular2LEntity(): wrong number / type of arguments");
      
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

      //RDimAngular2LEntity.prototype = new RDimAngular2LEntity_BaseJs(engine);
      //RDimAngular2LEntity.prototype = new RDimAngular2LEntity_Wrapper(engine);
      RDimAngular2LEntity.prototype = new Object();

      RDimAngular2LEntity.prototype.toString = function() {
          //return "RDimAngular2LEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngular2LEntity [JS]";
        };
      RDimAngular2LEntity.getObjectType = function() {
        return RJSType_RDimAngular2LEntity.getIdStatic();
      };

      RDimAngular2LEntity.prototype.getObjectType = function() {
        return RJSType_RDimAngular2LEntity.getIdStatic();
      };

      RDimAngular2LEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngular2LEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionEntity.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimAngularEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimAngular2LEntity.init = function() 
          
        {
          //print("JS: RDimAngular2LEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular2LEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular2LEntity);
  }

  
  else {
    
        print("RDimAngular2LEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular2LEntity.getRtti = function() 
          
        {
          //print("JS: RDimAngular2LEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular2LEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular2LEntity);
  }

  
  else {
    
        print("RDimAngular2LEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular2LEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimAngular2LEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular2LEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular2LEntity);
  }

  
  else {
    
        print("RDimAngular2LEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimAngular2LEntity.INVALID_ID = 
  RDimAngular2LEntity_WrapperSingletonInstance.INVALID_ID;
RDimAngular2LEntity.INVALID_HANDLE = 
  RDimAngular2LEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimAngular2LEntity.PropertySelected = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertySelected;
RDimAngular2LEntity.PropertyInvisible = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyInvisible;
RDimAngular2LEntity.PropertyParentId = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyParentId;
RDimAngular2LEntity.PropertyMinX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMinX;
RDimAngular2LEntity.PropertyMinY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMinY;
RDimAngular2LEntity.PropertyMaxX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMaxX;
RDimAngular2LEntity.PropertyMaxY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMaxY;
RDimAngular2LEntity.PropertySizeX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertySizeX;
RDimAngular2LEntity.PropertySizeY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertySizeY;
RDimAngular2LEntity.PropertyDefinitionPointX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimAngular2LEntity.PropertyDefinitionPointY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimAngular2LEntity.PropertyDefinitionPointZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimAngular2LEntity.PropertyAutoLabel = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimAngular2LEntity.PropertyDimlfac = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimAngular2LEntity.PropertyDimlunit = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimAngular2LEntity.PropertyDimdec = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimdec;
RDimAngular2LEntity.PropertyDimzin = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimzin;
RDimAngular2LEntity.PropertyCenterX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyCenterX;
RDimAngular2LEntity.PropertyCenterY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyCenterY;
RDimAngular2LEntity.PropertyCenterZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyCenterZ;
RDimAngular2LEntity.PropertyCustom = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyCustom;
RDimAngular2LEntity.PropertyHandle = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyHandle;
RDimAngular2LEntity.PropertyProtected = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyProtected;
RDimAngular2LEntity.PropertyWorkingSet = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimAngular2LEntity.PropertyType = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyType;
RDimAngular2LEntity.PropertyBlock = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyBlock;
RDimAngular2LEntity.PropertyLayer = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyLayer;
RDimAngular2LEntity.PropertyLinetype = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyLinetype;
RDimAngular2LEntity.PropertyLinetypeScale = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimAngular2LEntity.PropertyLineweight = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyLineweight;
RDimAngular2LEntity.PropertyColor = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyColor;
RDimAngular2LEntity.PropertyDisplayedColor = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimAngular2LEntity.PropertyDrawOrder = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimAngular2LEntity.PropertyMiddleOfTextX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimAngular2LEntity.PropertyMiddleOfTextY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimAngular2LEntity.PropertyMiddleOfTextZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimAngular2LEntity.PropertyText = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyText;
RDimAngular2LEntity.PropertyUpperTolerance = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimAngular2LEntity.PropertyLowerTolerance = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimAngular2LEntity.PropertyMeasuredValue = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimAngular2LEntity.PropertyDimscale = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimscale;
RDimAngular2LEntity.PropertyDimtxt = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimAngular2LEntity.PropertyDimgap = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimgap;
RDimAngular2LEntity.PropertyDimasz = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimasz;
RDimAngular2LEntity.PropertyDimexe = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimexe;
RDimAngular2LEntity.PropertyDimexo = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimexo;
RDimAngular2LEntity.PropertyDimtad = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimtad;
RDimAngular2LEntity.PropertyDimtih = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimtih;
RDimAngular2LEntity.PropertyDimtsz = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimAngular2LEntity.PropertyDimdsep = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimAngular2LEntity.PropertyDimaunit = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimAngular2LEntity.PropertyDimadec = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimadec;
RDimAngular2LEntity.PropertyDimazin = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimazin;
RDimAngular2LEntity.PropertyArchTick = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyArchTick;
RDimAngular2LEntity.PropertyDimclrt = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimAngular2LEntity.PropertyDimBlockName = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimAngular2LEntity.PropertyAutoTextPos = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimAngular2LEntity.PropertyFontName = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyFontName;
RDimAngular2LEntity.PropertyArrow1Flipped = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimAngular2LEntity.PropertyArrow2Flipped = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimAngular2LEntity.PropertyExtLineFix = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimAngular2LEntity.PropertyExtLineFixLength = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimAngular2LEntity.PropertyExtensionLine1StartX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1StartX;
RDimAngular2LEntity.PropertyExtensionLine1StartY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1StartY;
RDimAngular2LEntity.PropertyExtensionLine1StartZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1StartZ;
RDimAngular2LEntity.PropertyExtensionLine1EndX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1EndX;
RDimAngular2LEntity.PropertyExtensionLine1EndY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1EndY;
RDimAngular2LEntity.PropertyExtensionLine1EndZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1EndZ;
RDimAngular2LEntity.PropertyExtensionLine2StartX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2StartX;
RDimAngular2LEntity.PropertyExtensionLine2StartY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2StartY;
RDimAngular2LEntity.PropertyExtensionLine2StartZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2StartZ;
RDimAngular2LEntity.PropertyExtensionLine2EndX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2EndX;
RDimAngular2LEntity.PropertyExtensionLine2EndY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2EndY;
RDimAngular2LEntity.PropertyExtensionLine2EndZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2EndZ;
RDimAngular2LEntity.PropertyDimArcPositionX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimArcPositionX;
RDimAngular2LEntity.PropertyDimArcPositionY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimArcPositionY;
RDimAngular2LEntity.PropertyDimArcPositionZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimArcPositionZ;


      // copy function:
      //RDimAngular2LEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngular2LEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    