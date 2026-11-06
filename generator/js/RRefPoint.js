
      // auto generated
      //var self;

      // class constructor:
      function RRefPoint() {
        

        // should be RRefPoint_BaseJs.call(this, engine):
        //RRefPoint.prototype = new RRefPoint_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRefPoint.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RRefPoint.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint(): wrong number / type of arguments");
      
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
          

        }


      }

      //RRefPoint.prototype = new RRefPoint_BaseJs(engine);
      //RRefPoint.prototype = new RRefPoint_Wrapper(engine);
      RRefPoint.prototype = new Object();


      RRefPoint.prototype.toString = function() {
          //return "RRefPoint [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRefPoint [JS]";
        };
      RRefPoint.getObjectType = function() {
        return RJSType_RRefPoint.getIdStatic();
      };

      RRefPoint.prototype.getObjectType = function() {
        return RJSType_RRefPoint.getIdStatic();
      };

      RRefPoint.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRefPoint.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RVector.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RRefPoint.prototype.set = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.set");
          
              return this.__PROXY__.set(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setPolar = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setPolar");
          
              return this.__PROXY__.setPolar(...args);
            
        };
    
        // function 
        RRefPoint.prototype.get2D = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.get2D");
          
              return this.__PROXY__.get2D(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isValid = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isZero = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isZero");
          
              return this.__PROXY__.isZero(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isSane = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isSane");
          
              return this.__PROXY__.isSane(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isNaN = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isNaN");
          
              return this.__PROXY__.isNaN(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isInside = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isInside");
          
              return this.__PROXY__.isInside(...args);
            
        };
    
        // function 
        RRefPoint.prototype.equalsFuzzy = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.equalsFuzzy");
          
              return this.__PROXY__.equalsFuzzy(...args);
            
        };
    
        // function 
        RRefPoint.prototype.equalsFuzzy2D = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.equalsFuzzy2D");
          
              return this.__PROXY__.equalsFuzzy2D(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getDistanceTo");
          
              return this.__PROXY__.getDistanceTo(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getDistanceTo2D = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getDistanceTo2D");
          
              return this.__PROXY__.getDistanceTo2D(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setAngle");
          
              return this.__PROXY__.setAngle(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getAngle");
          
              return this.__PROXY__.getAngle(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getAngleToPlaneXY = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getAngleToPlaneXY");
          
              return this.__PROXY__.getAngleToPlaneXY(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getAngleTo = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getAngleTo");
          
              return this.__PROXY__.getAngleTo(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setMagnitude2D = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setMagnitude2D");
          
              return this.__PROXY__.setMagnitude2D(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getMagnitude = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getMagnitude");
          
              return this.__PROXY__.getMagnitude(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getSquaredMagnitude = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getSquaredMagnitude");
          
              return this.__PROXY__.getSquaredMagnitude(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getMagnitude2D = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getMagnitude2D");
          
              return this.__PROXY__.getMagnitude2D(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getLerp = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getLerp");
          
              return this.__PROXY__.getLerp(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getUnitVector = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getUnitVector");
          
              return this.__PROXY__.getUnitVector(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setX = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setX");
          
              return this.__PROXY__.setX(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getX = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getX");
          
              return this.__PROXY__.getX(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setY = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setY");
          
              return this.__PROXY__.setY(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getY = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getY");
          
              return this.__PROXY__.getY(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setZ = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setZ");
          
              return this.__PROXY__.setZ(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getZ = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getZ");
          
              return this.__PROXY__.getZ(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isInWindow = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isInWindow");
          
              return this.__PROXY__.isInWindow(...args);
            
        };
    
        // function 
        RRefPoint.prototype.move = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RRefPoint.prototype.rotate = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.rotate");
          
              return this.__PROXY__.rotate(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getRotated = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getRotated");
          
              return this.__PROXY__.getRotated(...args);
            
        };
    
        // function 
        RRefPoint.prototype.rotate3D = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.rotate3D");
          
              return this.__PROXY__.rotate3D(...args);
            
        };
    
        // function 
        RRefPoint.prototype.scale = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.scale");
          
              return this.__PROXY__.scale(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getScaled = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getScaled");
          
              return this.__PROXY__.getScaled(...args);
            
        };
    
        // function 
        RRefPoint.prototype.mirror = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.mirror");
          
              return this.__PROXY__.mirror(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getMirrored = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getMirrored");
          
              return this.__PROXY__.getMirrored(...args);
            
        };
    
        // function 
        RRefPoint.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.flipHorizontal");
          
              return this.__PROXY__.flipHorizontal(...args);
            
        };
    
        // function 
        RRefPoint.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.flipVertical");
          
              return this.__PROXY__.flipVertical(...args);
            
        };
    
        // function 
        RRefPoint.prototype.stretch = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.stretch");
          
              return this.__PROXY__.stretch(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isoProject = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isoProject");
          
              return this.__PROXY__.isoProject(...args);
            
        };
    
        // function 
        RRefPoint.prototype.axonometricProjection = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.axonometricProjection");
          
              return this.__PROXY__.axonometricProjection(...args);
            
        };
    
        // function 
        RRefPoint.prototype.obliqueProjection = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.obliqueProjection");
          
              return this.__PROXY__.obliqueProjection(...args);
            
        };
    
        // function 
        RRefPoint.prototype.transform = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.transform");
          
              return this.__PROXY__.transform(...args);
            
        };
    
        // function 
        RRefPoint.prototype.transform2DM = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.transform2DM");
          
              return this.__PROXY__.transform2DM(...args);
            
        };
    
        // function 
        RRefPoint.prototype.transform2D = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.transform2D");
          
              return this.__PROXY__.transform2D(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getTransformed");
          
              return this.__PROXY__.getTransformed(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getTransformed2DM = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getTransformed2DM");
          
              return this.__PROXY__.getTransformed2DM(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getTransformed2D = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getTransformed2D");
          
              return this.__PROXY__.getTransformed2D(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getDividedComponents = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getDividedComponents");
          
              return this.__PROXY__.getDividedComponents(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getMultipliedComponents = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getMultipliedComponents");
          
              return this.__PROXY__.getMultipliedComponents(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getClosest = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getClosest");
          
              return this.__PROXY__.getClosest(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getClosest2D = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getClosest2D");
          
              return this.__PROXY__.getClosest2D(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getClosestDistance = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getClosestDistance");
          
              return this.__PROXY__.getClosestDistance(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getClosestIndex = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getClosestIndex");
          
              return this.__PROXY__.getClosestIndex(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getClosestIndex2D = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getClosestIndex2D");
          
              return this.__PROXY__.getClosestIndex2D(...args);
            
        };
    
        // function 
        RRefPoint.prototype.operator_add = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.operator_add");
          
              return this.__PROXY__.operator_add(...args);
            
        };
    
        // function 
        RRefPoint.prototype.operator_subtract = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.operator_subtract");
          
              return this.__PROXY__.operator_subtract(...args);
            
        };
    
        // function 
        RRefPoint.prototype.operator_multiply = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.operator_multiply");
          
              return this.__PROXY__.operator_multiply(...args);
            
        };
    
        // function 
        RRefPoint.prototype.operator_divide = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.operator_divide");
          
              return this.__PROXY__.operator_divide(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getNegated = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getNegated");
          
              return this.__PROXY__.getNegated(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getAbsolute = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getAbsolute");
          
              return this.__PROXY__.getAbsolute(...args);
            
        };
    
        // function 
        RRefPoint.prototype.dot = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.dot");
          
              return this.__PROXY__.dot(...args);
            
        };
    
        // function 
        RRefPoint.prototype.normalize = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.normalize");
          
              return this.__PROXY__.normalize(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getNormalized = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getNormalized");
          
              return this.__PROXY__.getNormalized(...args);
            
        };
    
        // function 
        RRefPoint.prototype.operator_add_assign = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.operator_add_assign");
          
              return this.__PROXY__.operator_add_assign(...args);
            
        };
    
        // function 
        RRefPoint.prototype.operator_subtract_assign = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.operator_subtract_assign");
          
              return this.__PROXY__.operator_subtract_assign(...args);
            
        };
    
        // function 
        RRefPoint.prototype.operator_multiply_assign = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.operator_multiply_assign");
          
              return this.__PROXY__.operator_multiply_assign(...args);
            
        };
    
        // function 
        RRefPoint.prototype.operator_divide_assign = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.operator_divide_assign");
          
              return this.__PROXY__.operator_divide_assign(...args);
            
        };
    
        // function 
        RRefPoint.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.operator_equal");
          
              return this.__PROXY__.operator_equal(...args);
            
        };
    
        // function 
        RRefPoint.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.operator_unequal");
          
              return this.__PROXY__.operator_unequal(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getFloor = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getFloor");
          
              return this.__PROXY__.getFloor(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getCeil = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getCeil");
          
              return this.__PROXY__.getCeil(...args);
            
        };
    
        // function 
        RRefPoint.prototype.lteXY = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.lteXY");
          
              return this.__PROXY__.lteXY(...args);
            
        };
    
        // function 
        RRefPoint.prototype.gteXY = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.gteXY");
          
              return this.__PROXY__.gteXY(...args);
            
        };
    
        // function 
        RRefPoint.prototype.copy = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
    
        // function 
        RRefPoint.prototype.toVectorList = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.toVectorList");
          
              return this.__PROXY__.toVectorList(...args);
            
        };
    
        // function 
        RRefPoint.prototype.toRefPointList = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.toRefPointList");
          
              return this.__PROXY__.toRefPointList(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isSecondary = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isSecondary");
          
              return this.__PROXY__.isSecondary(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setSecondary = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setSecondary");
          
              return this.__PROXY__.setSecondary(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isTertiary = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isTertiary");
          
              return this.__PROXY__.isTertiary(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setTertiary = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setTertiary");
          
              return this.__PROXY__.setTertiary(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isIgnore = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isIgnore");
          
              return this.__PROXY__.isIgnore(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setIgnore = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setIgnore");
          
              return this.__PROXY__.setIgnore(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isCenter = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isCenter");
          
              return this.__PROXY__.isCenter(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setCenter");
          
              return this.__PROXY__.setCenter(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isStart = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isStart");
          
              return this.__PROXY__.isStart(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setStart = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setStart");
          
              return this.__PROXY__.setStart(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isEnd = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isEnd");
          
              return this.__PROXY__.isEnd(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setEnd = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setEnd");
          
              return this.__PROXY__.setEnd(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isArrow = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isArrow");
          
              return this.__PROXY__.isArrow(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setArrow = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setArrow");
          
              return this.__PROXY__.setArrow(...args);
            
        };
    
        // function 
        RRefPoint.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.isSelected");
          
              return this.__PROXY__.isSelected(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setSelected");
          
              return this.__PROXY__.setSelected(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setFlag");
          
              return this.__PROXY__.setFlag(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getFlag");
          
              return this.__PROXY__.getFlag(...args);
            
        };
    
        // function 
        RRefPoint.prototype.getFlags = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.getFlags");
          
              return this.__PROXY__.getFlags(...args);
            
        };
    
        // function 
        RRefPoint.prototype.setFlags = function(...args) 
          
        {
          //print("JS: RRefPoint.prototype.setFlags");
          
              return this.__PROXY__.setFlags(...args);
            
        };
    

      // static functions:
      

        // static function 
        RRefPoint.toVectorList = function() 
          
        {
          //print("JS: RRefPoint.toVectorList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.toVectorList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.toVectorList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.toRefPointList = function() 
          
        {
          //print("JS: RRefPoint.toRefPointList");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.toRefPointList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.toRefPointList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(RRefPoint.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.getX();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setX(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRefPoint.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.getY();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setY(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRefPoint.prototype, 'z', {
              get: function() {
                  
                      return this.__PROXY__.getZ();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setZ(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRefPoint.prototype, 'valid', {
              get: function() {
                  
                      return this.__PROXY__.isValid();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        RRefPoint.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RRefPoint.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RRefPoint.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      RRefPoint.invalid = 
  RRefPoint_WrapperSingletonInstance.invalid;
RRefPoint.nullVector = 
  RRefPoint_WrapperSingletonInstance.nullVector;
RRefPoint.nanVector = 
  RRefPoint_WrapperSingletonInstance.nanVector;


      // copy function:
      //RRefPoint.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRefPoint.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RRefPoint.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      