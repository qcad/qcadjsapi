
      // auto generated
      //var self;

      // class constructor:
      function RDimLinearEntity() {
        

        // should be RDimLinearEntity_BaseJs.call(this, engine):
        //RDimLinearEntity.prototype = new RDimLinearEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimLinearEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimLinearEntity);
            //}
          }
          else {
            qWarning("RDimLinearEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RDimLinearEntity.js: No constructor found for class RDimLinearEntity");
            
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

      //RDimLinearEntity.prototype = new RDimLinearEntity_BaseJs(engine);
      //RDimLinearEntity.prototype = new RDimLinearEntity_Wrapper(engine);
      RDimLinearEntity.prototype = new Object();

      RDimLinearEntity.prototype.toString = function() {
          //return "RDimLinearEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimLinearEntity [JS]";
        };
      RDimLinearEntity.getObjectType = function() {
        return RJSType_RDimLinearEntity.getIdStatic();
      };

      RDimLinearEntity.prototype.getObjectType = function() {
        return RJSType_RDimLinearEntity.getIdStatic();
      };

      RDimLinearEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimLinearEntity.getIdStatic()) {
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
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimLinearEntity.init = function() 
          
        {
          //print("JS: RDimLinearEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimLinearEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimLinearEntity);
  }

  
  else {
    
        print("RDimLinearEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimLinearEntity.INVALID_ID = 
  RDimLinearEntity_WrapperSingletonInstance.INVALID_ID;
RDimLinearEntity.INVALID_HANDLE = 
  RDimLinearEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimLinearEntity.PropertySelected = 
  RDimLinearEntity_WrapperSingletonInstance.PropertySelected;
RDimLinearEntity.PropertyInvisible = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyInvisible;
RDimLinearEntity.PropertyParentId = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyParentId;
RDimLinearEntity.PropertyMinX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMinX;
RDimLinearEntity.PropertyMinY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMinY;
RDimLinearEntity.PropertyMaxX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMaxX;
RDimLinearEntity.PropertyMaxY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMaxY;
RDimLinearEntity.PropertySizeX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertySizeX;
RDimLinearEntity.PropertySizeY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertySizeY;
RDimLinearEntity.PropertyDefinitionPointX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimLinearEntity.PropertyDefinitionPointY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimLinearEntity.PropertyDefinitionPointZ = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimLinearEntity.PropertyAutoLabel = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimLinearEntity.PropertyCustom = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyCustom;
RDimLinearEntity.PropertyHandle = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyHandle;
RDimLinearEntity.PropertyProtected = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyProtected;
RDimLinearEntity.PropertyWorkingSet = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimLinearEntity.PropertyType = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyType;
RDimLinearEntity.PropertyBlock = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyBlock;
RDimLinearEntity.PropertyLayer = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyLayer;
RDimLinearEntity.PropertyLinetype = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyLinetype;
RDimLinearEntity.PropertyLinetypeScale = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimLinearEntity.PropertyLineweight = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyLineweight;
RDimLinearEntity.PropertyColor = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyColor;
RDimLinearEntity.PropertyDisplayedColor = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimLinearEntity.PropertyDrawOrder = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimLinearEntity.PropertyMiddleOfTextX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimLinearEntity.PropertyMiddleOfTextY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimLinearEntity.PropertyMiddleOfTextZ = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimLinearEntity.PropertyText = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyText;
RDimLinearEntity.PropertyUpperTolerance = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimLinearEntity.PropertyLowerTolerance = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimLinearEntity.PropertyMeasuredValue = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimLinearEntity.PropertyDimscale = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimscale;
RDimLinearEntity.PropertyDimlfac = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimLinearEntity.PropertyDimtxt = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimLinearEntity.PropertyDimgap = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimgap;
RDimLinearEntity.PropertyDimasz = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimasz;
RDimLinearEntity.PropertyDimexe = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimexe;
RDimLinearEntity.PropertyDimexo = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimexo;
RDimLinearEntity.PropertyDimtad = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimtad;
RDimLinearEntity.PropertyDimtih = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimtih;
RDimLinearEntity.PropertyDimtsz = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimLinearEntity.PropertyDimlunit = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimLinearEntity.PropertyDimdec = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimdec;
RDimLinearEntity.PropertyDimdsep = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimLinearEntity.PropertyDimzin = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimzin;
RDimLinearEntity.PropertyDimaunit = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimLinearEntity.PropertyDimadec = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimadec;
RDimLinearEntity.PropertyDimazin = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimazin;
RDimLinearEntity.PropertyArchTick = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyArchTick;
RDimLinearEntity.PropertyDimclrt = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimLinearEntity.PropertyDimBlockName = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimLinearEntity.PropertyAutoTextPos = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimLinearEntity.PropertyFontName = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyFontName;
RDimLinearEntity.PropertyArrow1Flipped = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimLinearEntity.PropertyArrow2Flipped = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimLinearEntity.PropertyExtLineFix = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimLinearEntity.PropertyExtLineFixLength = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimLinearEntity.PropertyDimensionLinePosX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimensionLinePosX;
RDimLinearEntity.PropertyDimensionLinePosY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimensionLinePosY;
RDimLinearEntity.PropertyDimensionLinePosZ = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimensionLinePosZ;
RDimLinearEntity.PropertyExtensionPoint1X = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint1X;
RDimLinearEntity.PropertyExtensionPoint1Y = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint1Y;
RDimLinearEntity.PropertyExtensionPoint1Z = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint1Z;
RDimLinearEntity.PropertyExtensionPoint2X = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint2X;
RDimLinearEntity.PropertyExtensionPoint2Y = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint2Y;
RDimLinearEntity.PropertyExtensionPoint2Z = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint2Z;


      // copy function:
      //RDimLinearEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimLinearEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    