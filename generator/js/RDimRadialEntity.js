
      // auto generated
      //var self;

      // class constructor:
      function RDimRadialEntity() {
        

        // should be RDimRadialEntity_BaseJs.call(this, engine):
        //RDimRadialEntity.prototype = new RDimRadialEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimRadialEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimRadialEntity);
            //}
          }
          else {
            qWarning("RDimRadialEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimRadialEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimRadialEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity(): wrong number / type of arguments");
      
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

      //RDimRadialEntity.prototype = new RDimRadialEntity_BaseJs(engine);
      //RDimRadialEntity.prototype = new RDimRadialEntity_Wrapper(engine);
      RDimRadialEntity.prototype = new Object();

      RDimRadialEntity.prototype.toString = function() {
          //return "RDimRadialEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimRadialEntity [JS]";
        };
      RDimRadialEntity.getObjectType = function() {
        return RJSType_RDimRadialEntity.getIdStatic();
      };

      RDimRadialEntity.prototype.getObjectType = function() {
        return RJSType_RDimRadialEntity.getIdStatic();
      };

      RDimRadialEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimRadialEntity.getIdStatic()) {
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
        RDimRadialEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDimRadialEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRadialEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDimRadialEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRadialEntity.setMember = function() 
          
        {
          //print("JS: RDimRadialEntity.setMember");
          
        };
      

        // static function 
        RDimRadialEntity.setMemberX = function() 
          
        {
          //print("JS: RDimRadialEntity.setMemberX");
          
        };
      

        // static function 
        RDimRadialEntity.setMemberY = function() 
          
        {
          //print("JS: RDimRadialEntity.setMemberY");
          
        };
      

        // static function 
        RDimRadialEntity.setMemberZ = function() 
          
        {
          //print("JS: RDimRadialEntity.setMemberZ");
          
        };
      

        // static function 
        RDimRadialEntity.setMemberVector = function() 
          
        {
          //print("JS: RDimRadialEntity.setMemberVector");
          
        };
      

        // static function 
        RDimRadialEntity.isComplex = function() 
          
        {
          //print("JS: RDimRadialEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRadialEntity.isDimension = function() 
          
        {
          //print("JS: RDimRadialEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRadialEntity.isTextBased = function() 
          
        {
          //print("JS: RDimRadialEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRadialEntity.renderDimensionText = function() 
          
        {
          //print("JS: RDimRadialEntity.renderDimensionText");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.renderDimensionText(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.renderDimensionText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRadialEntity.getDimensionBlockNames = function() 
          
        {
          //print("JS: RDimRadialEntity.getDimensionBlockNames");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.getDimensionBlockNames(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.getDimensionBlockNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRadialEntity.init = function() 
          
        {
          //print("JS: RDimRadialEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRadialEntity.getRtti = function() 
          
        {
          //print("JS: RDimRadialEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRadialEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimRadialEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimRadialEntity.INVALID_ID = 
  RDimRadialEntity_WrapperSingletonInstance.INVALID_ID;
RDimRadialEntity.INVALID_HANDLE = 
  RDimRadialEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimRadialEntity.PropertySelected = 
  RDimRadialEntity_WrapperSingletonInstance.PropertySelected;
RDimRadialEntity.PropertyInvisible = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyInvisible;
RDimRadialEntity.PropertyParentId = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyParentId;
RDimRadialEntity.PropertyMinX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMinX;
RDimRadialEntity.PropertyMinY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMinY;
RDimRadialEntity.PropertyMaxX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMaxX;
RDimRadialEntity.PropertyMaxY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMaxY;
RDimRadialEntity.PropertySizeX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertySizeX;
RDimRadialEntity.PropertySizeY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertySizeY;
RDimRadialEntity.PropertyDefinitionPointX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimRadialEntity.PropertyDefinitionPointY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimRadialEntity.PropertyDefinitionPointZ = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimRadialEntity.PropertyAutoLabel = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimRadialEntity.PropertyDimaunit = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimRadialEntity.PropertyDimadec = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimadec;
RDimRadialEntity.PropertyDimazin = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimazin;
RDimRadialEntity.PropertyCustom = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyCustom;
RDimRadialEntity.PropertyHandle = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyHandle;
RDimRadialEntity.PropertyProtected = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyProtected;
RDimRadialEntity.PropertyWorkingSet = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimRadialEntity.PropertyType = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyType;
RDimRadialEntity.PropertyBlock = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyBlock;
RDimRadialEntity.PropertyLayer = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyLayer;
RDimRadialEntity.PropertyLinetype = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyLinetype;
RDimRadialEntity.PropertyLinetypeScale = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimRadialEntity.PropertyLineweight = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyLineweight;
RDimRadialEntity.PropertyColor = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyColor;
RDimRadialEntity.PropertyDisplayedColor = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimRadialEntity.PropertyDrawOrder = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimRadialEntity.PropertyMiddleOfTextX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimRadialEntity.PropertyMiddleOfTextY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimRadialEntity.PropertyMiddleOfTextZ = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimRadialEntity.PropertyText = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyText;
RDimRadialEntity.PropertyUpperTolerance = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimRadialEntity.PropertyLowerTolerance = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimRadialEntity.PropertyMeasuredValue = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimRadialEntity.PropertyDimscale = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimscale;
RDimRadialEntity.PropertyDimlfac = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimRadialEntity.PropertyDimtxt = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimRadialEntity.PropertyDimgap = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimgap;
RDimRadialEntity.PropertyDimasz = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimasz;
RDimRadialEntity.PropertyDimexe = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimexe;
RDimRadialEntity.PropertyDimexo = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimexo;
RDimRadialEntity.PropertyDimtad = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimtad;
RDimRadialEntity.PropertyDimtih = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimtih;
RDimRadialEntity.PropertyDimtsz = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimRadialEntity.PropertyDimlunit = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimRadialEntity.PropertyDimdec = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimdec;
RDimRadialEntity.PropertyDimdsep = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimRadialEntity.PropertyDimzin = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimzin;
RDimRadialEntity.PropertyArchTick = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyArchTick;
RDimRadialEntity.PropertyDimclrt = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimRadialEntity.PropertyDimBlockName = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimRadialEntity.PropertyAutoTextPos = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimRadialEntity.PropertyFontName = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyFontName;
RDimRadialEntity.PropertyArrow1Flipped = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimRadialEntity.PropertyArrow2Flipped = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimRadialEntity.PropertyExtLineFix = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimRadialEntity.PropertyExtLineFixLength = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimRadialEntity.PropertyCenterPointX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyCenterPointX;
RDimRadialEntity.PropertyCenterPointY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyCenterPointY;
RDimRadialEntity.PropertyCenterPointZ = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyCenterPointZ;
RDimRadialEntity.PropertyChordPointX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyChordPointX;
RDimRadialEntity.PropertyChordPointY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyChordPointY;
RDimRadialEntity.PropertyChordPointZ = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyChordPointZ;


      // copy function:
      //RDimRadialEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimRadialEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    