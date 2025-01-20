
      // auto generated
      //var self;

      // class constructor:
      function RVector() {
        

        // should be RVector_BaseJs.call(this, engine):
        //RVector.prototype = new RVector_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RVector.getIdStatic()))) {

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
            qWarning("RVector.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RVector_Wrapper(
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

      

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RVector_Wrapper(
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

      

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RVector_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector(): wrong number / type of arguments");
      
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

        
              // define property setters/getters:
              Object.defineProperty(this, 'x', {
                  get() {
                      
                          return this.__PROXY__.getX();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setX(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'y', {
                  get() {
                      
                          return this.__PROXY__.getY();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setY(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'z', {
                  get() {
                      
                          return this.__PROXY__.getZ();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setZ(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'valid', {
                  get() {
                      
                          return this.__PROXY__.isValid();
                        
                  },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RVector.prototype = new RVector_BaseJs(engine);
      //RVector.prototype = new RVector_Wrapper(engine);
      RVector.prototype = new Object();

      RVector.prototype.toString = function() {
          //return "RVector [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RVector [JS]";
        };
      RVector.getObjectType = function() {
        return RJSType_RVector.getIdStatic();
      };

      RVector.prototype.getObjectType = function() {
        return RJSType_RVector.getIdStatic();
      };

      RVector.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RVector.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RVector.prototype.set = function(...args) 
          
        {
          //print("JS: RVector.prototype.set");
          return this.__PROXY__.set(...args);
        };
    
        // function 
        RVector.prototype.setPolar = function(...args) 
          
        {
          //print("JS: RVector.prototype.setPolar");
          return this.__PROXY__.setPolar(...args);
        };
    
        // function 
        RVector.prototype.get2D = function(...args) 
          
        {
          //print("JS: RVector.prototype.get2D");
          return this.__PROXY__.get2D(...args);
        };
    
        // function 
        RVector.prototype.isValid = function(...args) 
          
        {
          //print("JS: RVector.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RVector.prototype.isZero = function(...args) 
          
        {
          //print("JS: RVector.prototype.isZero");
          return this.__PROXY__.isZero(...args);
        };
    
        // function 
        RVector.prototype.isSane = function(...args) 
          
        {
          //print("JS: RVector.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RVector.prototype.isNaN = function(...args) 
          
        {
          //print("JS: RVector.prototype.isNaN");
          return this.__PROXY__.isNaN(...args);
        };
    
        // function 
        RVector.prototype.isInside = function(...args) 
          
        {
          //print("JS: RVector.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RVector.prototype.equalsFuzzy = function(...args) 
          
        {
          //print("JS: RVector.prototype.equalsFuzzy");
          return this.__PROXY__.equalsFuzzy(...args);
        };
    
        // function 
        RVector.prototype.equalsFuzzy2D = function(...args) 
          
        {
          //print("JS: RVector.prototype.equalsFuzzy2D");
          return this.__PROXY__.equalsFuzzy2D(...args);
        };
    
        // function 
        RVector.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RVector.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RVector.prototype.getDistanceTo2D = function(...args) 
          
        {
          //print("JS: RVector.prototype.getDistanceTo2D");
          return this.__PROXY__.getDistanceTo2D(...args);
        };
    
        // function 
        RVector.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RVector.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RVector.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RVector.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RVector.prototype.getAngleToPlaneXY = function(...args) 
          
        {
          //print("JS: RVector.prototype.getAngleToPlaneXY");
          return this.__PROXY__.getAngleToPlaneXY(...args);
        };
    
        // function 
        RVector.prototype.getAngleTo = function(...args) 
          
        {
          //print("JS: RVector.prototype.getAngleTo");
          return this.__PROXY__.getAngleTo(...args);
        };
    
        // function 
        RVector.prototype.setMagnitude2D = function(...args) 
          
        {
          //print("JS: RVector.prototype.setMagnitude2D");
          return this.__PROXY__.setMagnitude2D(...args);
        };
    
        // function 
        RVector.prototype.getMagnitude = function(...args) 
          
        {
          //print("JS: RVector.prototype.getMagnitude");
          return this.__PROXY__.getMagnitude(...args);
        };
    
        // function 
        RVector.prototype.getSquaredMagnitude = function(...args) 
          
        {
          //print("JS: RVector.prototype.getSquaredMagnitude");
          return this.__PROXY__.getSquaredMagnitude(...args);
        };
    
        // function 
        RVector.prototype.getMagnitude2D = function(...args) 
          
        {
          //print("JS: RVector.prototype.getMagnitude2D");
          return this.__PROXY__.getMagnitude2D(...args);
        };
    
        // function 
        RVector.prototype.getLerp = function(...args) 
          
        {
          //print("JS: RVector.prototype.getLerp");
          return this.__PROXY__.getLerp(...args);
        };
    
        // function 
        RVector.prototype.getUnitVector = function(...args) 
          
        {
          //print("JS: RVector.prototype.getUnitVector");
          return this.__PROXY__.getUnitVector(...args);
        };
    
        // function 
        RVector.prototype.setX = function(...args) 
          
        {
          //print("JS: RVector.prototype.setX");
          return this.__PROXY__.setX(...args);
        };
    
        // function 
        RVector.prototype.getX = function(...args) 
          
        {
          //print("JS: RVector.prototype.getX");
          return this.__PROXY__.getX(...args);
        };
    
        // function 
        RVector.prototype.setY = function(...args) 
          
        {
          //print("JS: RVector.prototype.setY");
          return this.__PROXY__.setY(...args);
        };
    
        // function 
        RVector.prototype.getY = function(...args) 
          
        {
          //print("JS: RVector.prototype.getY");
          return this.__PROXY__.getY(...args);
        };
    
        // function 
        RVector.prototype.setZ = function(...args) 
          
        {
          //print("JS: RVector.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RVector.prototype.getZ = function(...args) 
          
        {
          //print("JS: RVector.prototype.getZ");
          return this.__PROXY__.getZ(...args);
        };
    
        // function 
        RVector.prototype.isInWindow = function(...args) 
          
        {
          //print("JS: RVector.prototype.isInWindow");
          return this.__PROXY__.isInWindow(...args);
        };
    
        // function 
        RVector.prototype.move = function(...args) 
          
        {
          //print("JS: RVector.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RVector.prototype.moveList = function(...args) 
          
        {
          //print("JS: RVector.prototype.moveList");
          return this.__PROXY__.moveList(...args);
        };
    
        // function 
        RVector.prototype.rotate = function(...args) 
          
        {
          //print("JS: RVector.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RVector.prototype.getRotated = function(...args) 
          
        {
          //print("JS: RVector.prototype.getRotated");
          return this.__PROXY__.getRotated(...args);
        };
    
        // function 
        RVector.prototype.rotate3D = function(...args) 
          
        {
          //print("JS: RVector.prototype.rotate3D");
          return this.__PROXY__.rotate3D(...args);
        };
    
        // function 
        RVector.prototype.rotateList = function(...args) 
          
        {
          //print("JS: RVector.prototype.rotateList");
          return this.__PROXY__.rotateList(...args);
        };
    
        // function 
        RVector.prototype.scale = function(...args) 
          
        {
          //print("JS: RVector.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RVector.prototype.getScaled = function(...args) 
          
        {
          //print("JS: RVector.prototype.getScaled");
          return this.__PROXY__.getScaled(...args);
        };
    
        // function 
        RVector.prototype.scaleList = function(...args) 
          
        {
          //print("JS: RVector.prototype.scaleList");
          return this.__PROXY__.scaleList(...args);
        };
    
        // function 
        RVector.prototype.mirror = function(...args) 
          
        {
          //print("JS: RVector.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RVector.prototype.getMirrored = function(...args) 
          
        {
          //print("JS: RVector.prototype.getMirrored");
          return this.__PROXY__.getMirrored(...args);
        };
    
        // function 
        RVector.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RVector.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RVector.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RVector.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RVector.prototype.stretch = function(...args) 
          
        {
          //print("JS: RVector.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RVector.prototype.isoProject = function(...args) 
          
        {
          //print("JS: RVector.prototype.isoProject");
          return this.__PROXY__.isoProject(...args);
        };
    
        // function 
        RVector.prototype.axonometricProjection = function(...args) 
          
        {
          //print("JS: RVector.prototype.axonometricProjection");
          return this.__PROXY__.axonometricProjection(...args);
        };
    
        // function 
        RVector.prototype.obliqueProjection = function(...args) 
          
        {
          //print("JS: RVector.prototype.obliqueProjection");
          return this.__PROXY__.obliqueProjection(...args);
        };
    
        // function 
        RVector.prototype.transform = function(...args) 
          
        {
          //print("JS: RVector.prototype.transform");
          return this.__PROXY__.transform(...args);
        };
    
        // function 
        RVector.prototype.transform2DM = function(...args) 
          
        {
          //print("JS: RVector.prototype.transform2DM");
          return this.__PROXY__.transform2DM(...args);
        };
    
        // function 
        RVector.prototype.transform2D = function(...args) 
          
        {
          //print("JS: RVector.prototype.transform2D");
          return this.__PROXY__.transform2D(...args);
        };
    
        // function 
        RVector.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RVector.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RVector.prototype.getTransformed2DM = function(...args) 
          
        {
          //print("JS: RVector.prototype.getTransformed2DM");
          return this.__PROXY__.getTransformed2DM(...args);
        };
    
        // function 
        RVector.prototype.getTransformed2D = function(...args) 
          
        {
          //print("JS: RVector.prototype.getTransformed2D");
          return this.__PROXY__.getTransformed2D(...args);
        };
    
        // function 
        RVector.prototype.getDividedComponents = function(...args) 
          
        {
          //print("JS: RVector.prototype.getDividedComponents");
          return this.__PROXY__.getDividedComponents(...args);
        };
    
        // function 
        RVector.prototype.getMultipliedComponents = function(...args) 
          
        {
          //print("JS: RVector.prototype.getMultipliedComponents");
          return this.__PROXY__.getMultipliedComponents(...args);
        };
    
        // function 
        RVector.prototype.getClosest = function(...args) 
          
        {
          //print("JS: RVector.prototype.getClosest");
          return this.__PROXY__.getClosest(...args);
        };
    
        // function 
        RVector.prototype.getClosest2D = function(...args) 
          
        {
          //print("JS: RVector.prototype.getClosest2D");
          return this.__PROXY__.getClosest2D(...args);
        };
    
        // function 
        RVector.prototype.getClosestDistance = function(...args) 
          
        {
          //print("JS: RVector.prototype.getClosestDistance");
          return this.__PROXY__.getClosestDistance(...args);
        };
    
        // function 
        RVector.prototype.getClosestIndex = function(...args) 
          
        {
          //print("JS: RVector.prototype.getClosestIndex");
          return this.__PROXY__.getClosestIndex(...args);
        };
    
        // function 
        RVector.prototype.getClosestIndex2D = function(...args) 
          
        {
          //print("JS: RVector.prototype.getClosestIndex2D");
          return this.__PROXY__.getClosestIndex2D(...args);
        };
    
        // function 
        RVector.prototype.operator_add = function(...args) 
          
        {
          //print("JS: RVector.prototype.operator_add");
          return this.__PROXY__.operator_add(...args);
        };
    
        // function 
        RVector.prototype.operator_subtract = function(...args) 
          
        {
          //print("JS: RVector.prototype.operator_subtract");
          return this.__PROXY__.operator_subtract(...args);
        };
    
        // function 
        RVector.prototype.operator_multiply = function(...args) 
          
        {
          //print("JS: RVector.prototype.operator_multiply");
          return this.__PROXY__.operator_multiply(...args);
        };
    
        // function 
        RVector.prototype.operator_divide = function(...args) 
          
        {
          //print("JS: RVector.prototype.operator_divide");
          return this.__PROXY__.operator_divide(...args);
        };
    
        // function 
        RVector.prototype.getNegated = function(...args) 
          
        {
          //print("JS: RVector.prototype.getNegated");
          return this.__PROXY__.getNegated(...args);
        };
    
        // function 
        RVector.prototype.getAbsolute = function(...args) 
          
        {
          //print("JS: RVector.prototype.getAbsolute");
          return this.__PROXY__.getAbsolute(...args);
        };
    
        // function 
        RVector.prototype.dot = function(...args) 
          
        {
          //print("JS: RVector.prototype.dot");
          return this.__PROXY__.dot(...args);
        };
    
        // function 
        RVector.prototype.normalize = function(...args) 
          
        {
          //print("JS: RVector.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        RVector.prototype.getNormalized = function(...args) 
          
        {
          //print("JS: RVector.prototype.getNormalized");
          return this.__PROXY__.getNormalized(...args);
        };
    
        // function 
        RVector.prototype.operator_add_assign = function(...args) 
          
        {
          //print("JS: RVector.prototype.operator_add_assign");
          return this.__PROXY__.operator_add_assign(...args);
        };
    
        // function 
        RVector.prototype.operator_subtract_assign = function(...args) 
          
        {
          //print("JS: RVector.prototype.operator_subtract_assign");
          return this.__PROXY__.operator_subtract_assign(...args);
        };
    
        // function 
        RVector.prototype.operator_multiply_assign = function(...args) 
          
        {
          //print("JS: RVector.prototype.operator_multiply_assign");
          return this.__PROXY__.operator_multiply_assign(...args);
        };
    
        // function 
        RVector.prototype.operator_divide_assign = function(...args) 
          
        {
          //print("JS: RVector.prototype.operator_divide_assign");
          return this.__PROXY__.operator_divide_assign(...args);
        };
    
        // function 
        RVector.prototype.operator_equal = function(...args) 
          
        {
          //print("JS: RVector.prototype.operator_equal");
          return this.__PROXY__.operator_equal(...args);
        };
    
        // function 
        RVector.prototype.operator_unequal = function(...args) 
          
        {
          //print("JS: RVector.prototype.operator_unequal");
          return this.__PROXY__.operator_unequal(...args);
        };
    
        // function 
        RVector.prototype.getFloor = function(...args) 
          
        {
          //print("JS: RVector.prototype.getFloor");
          return this.__PROXY__.getFloor(...args);
        };
    
        // function 
        RVector.prototype.getCeil = function(...args) 
          
        {
          //print("JS: RVector.prototype.getCeil");
          return this.__PROXY__.getCeil(...args);
        };
    
        // function 
        RVector.prototype.lteXY = function(...args) 
          
        {
          //print("JS: RVector.prototype.lteXY");
          return this.__PROXY__.lteXY(...args);
        };
    
        // function 
        RVector.prototype.gteXY = function(...args) 
          
        {
          //print("JS: RVector.prototype.gteXY");
          return this.__PROXY__.gteXY(...args);
        };
    
        // function 
        RVector.prototype.copy = function(...args) 
          
        {
          //print("JS: RVector.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RVector.prototype.containsFuzzy = function(...args) 
          
        {
          //print("JS: RVector.prototype.containsFuzzy");
          return this.__PROXY__.containsFuzzy(...args);
        };
    
        // function 
        RVector.prototype.findFirstFuzzy = function(...args) 
          
        {
          //print("JS: RVector.prototype.findFirstFuzzy");
          return this.__PROXY__.findFirstFuzzy(...args);
        };
    
        // function 
        RVector.prototype.getMinimum = function(...args) 
          
        {
          //print("JS: RVector.prototype.getMinimum");
          return this.__PROXY__.getMinimum(...args);
        };
    
        // function 
        RVector.prototype.getMaximum = function(...args) 
          
        {
          //print("JS: RVector.prototype.getMaximum");
          return this.__PROXY__.getMaximum(...args);
        };
    
        // function 
        RVector.prototype.getMinimumX = function(...args) 
          
        {
          //print("JS: RVector.prototype.getMinimumX");
          return this.__PROXY__.getMinimumX(...args);
        };
    
        // function 
        RVector.prototype.getMaximumX = function(...args) 
          
        {
          //print("JS: RVector.prototype.getMaximumX");
          return this.__PROXY__.getMaximumX(...args);
        };
    
        // function 
        RVector.prototype.getMinimumY = function(...args) 
          
        {
          //print("JS: RVector.prototype.getMinimumY");
          return this.__PROXY__.getMinimumY(...args);
        };
    
        // function 
        RVector.prototype.getMaximumY = function(...args) 
          
        {
          //print("JS: RVector.prototype.getMaximumY");
          return this.__PROXY__.getMaximumY(...args);
        };
    
        // function 
        RVector.prototype.getAverage = function(...args) 
          
        {
          //print("JS: RVector.prototype.getAverage");
          return this.__PROXY__.getAverage(...args);
        };
    
        // function 
        RVector.prototype.getUnion = function(...args) 
          
        {
          //print("JS: RVector.prototype.getUnion");
          return this.__PROXY__.getUnion(...args);
        };
    
        // function 
        RVector.prototype.getUnique = function(...args) 
          
        {
          //print("JS: RVector.prototype.getUnique");
          return this.__PROXY__.getUnique(...args);
        };
    
        // function 
        RVector.prototype.getXList = function(...args) 
          
        {
          //print("JS: RVector.prototype.getXList");
          return this.__PROXY__.getXList(...args);
        };
    
        // function 
        RVector.prototype.getYList = function(...args) 
          
        {
          //print("JS: RVector.prototype.getYList");
          return this.__PROXY__.getYList(...args);
        };
    
        // function 
        RVector.prototype.getZList = function(...args) 
          
        {
          //print("JS: RVector.prototype.getZList");
          return this.__PROXY__.getZList(...args);
        };
    
        // function 
        RVector.prototype.getCrossProduct = function(...args) 
          
        {
          //print("JS: RVector.prototype.getCrossProduct");
          return this.__PROXY__.getCrossProduct(...args);
        };
    
        // function 
        RVector.prototype.getDotProduct = function(...args) 
          
        {
          //print("JS: RVector.prototype.getDotProduct");
          return this.__PROXY__.getDotProduct(...args);
        };
    
        // function 
        RVector.prototype.createPolar = function(...args) 
          
        {
          //print("JS: RVector.prototype.createPolar");
          return this.__PROXY__.createPolar(...args);
        };
    
        // function 
        RVector.prototype.lessThanX = function(...args) 
          
        {
          //print("JS: RVector.prototype.lessThanX");
          return this.__PROXY__.lessThanX(...args);
        };
    
        // function 
        RVector.prototype.greaterThanX = function(...args) 
          
        {
          //print("JS: RVector.prototype.greaterThanX");
          return this.__PROXY__.greaterThanX(...args);
        };
    
        // function 
        RVector.prototype.lessThanY = function(...args) 
          
        {
          //print("JS: RVector.prototype.lessThanY");
          return this.__PROXY__.lessThanY(...args);
        };
    
        // function 
        RVector.prototype.greaterThanY = function(...args) 
          
        {
          //print("JS: RVector.prototype.greaterThanY");
          return this.__PROXY__.greaterThanY(...args);
        };
    
        // function 
        RVector.prototype.lessThanEqualXY = function(...args) 
          
        {
          //print("JS: RVector.prototype.lessThanEqualXY");
          return this.__PROXY__.lessThanEqualXY(...args);
        };
    
        // function 
        RVector.prototype.greaterThanEqualXY = function(...args) 
          
        {
          //print("JS: RVector.prototype.greaterThanEqualXY");
          return this.__PROXY__.greaterThanEqualXY(...args);
        };
    
        // function 
        RVector.prototype.getSortedByDistance = function(...args) 
          
        {
          //print("JS: RVector.prototype.getSortedByDistance");
          return this.__PROXY__.getSortedByDistance(...args);
        };
    
        // function 
        RVector.prototype.getSortedLeftRightTopBottom = function(...args) 
          
        {
          //print("JS: RVector.prototype.getSortedLeftRightTopBottom");
          return this.__PROXY__.getSortedLeftRightTopBottom(...args);
        };
    
        // function 
        RVector.prototype.getSortedByAngle = function(...args) 
          
        {
          //print("JS: RVector.prototype.getSortedByAngle");
          return this.__PROXY__.getSortedByAngle(...args);
        };
    

      // static functions:
      

        // static function 
        RVector.moveList = function() 
          
        {
          //print("JS: RVector.moveList");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.moveList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.moveList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.rotateList = function() 
          
        {
          //print("JS: RVector.rotateList");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.rotateList(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.rotateList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.rotateList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.scaleList = function() 
          
        {
          //print("JS: RVector.scaleList");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.scaleList(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.scaleList(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.scaleList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.containsFuzzy = function() 
          
        {
          //print("JS: RVector.containsFuzzy");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.containsFuzzy(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.containsFuzzy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.findFirstFuzzy = function() 
          
        {
          //print("JS: RVector.findFirstFuzzy");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.findFirstFuzzy(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.findFirstFuzzy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMinimum = function() 
          
        {
          //print("JS: RVector.getMinimum");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMinimum(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMinimum(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMinimum(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMaximum = function() 
          
        {
          //print("JS: RVector.getMaximum");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMaximum(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMaximum(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMaximum(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMinimumX = function() 
          
        {
          //print("JS: RVector.getMinimumX");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMinimumX(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMinimumX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMaximumX = function() 
          
        {
          //print("JS: RVector.getMaximumX");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMaximumX(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMaximumX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMinimumY = function() 
          
        {
          //print("JS: RVector.getMinimumY");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMinimumY(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMinimumY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMaximumY = function() 
          
        {
          //print("JS: RVector.getMaximumY");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMaximumY(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMaximumY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getAverage = function() 
          
        {
          //print("JS: RVector.getAverage");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getAverage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getAverage(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getAverage(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getUnion = function() 
          
        {
          //print("JS: RVector.getUnion");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getUnion(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getUnion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getUnique = function() 
          
        {
          //print("JS: RVector.getUnique");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getUnique(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getUnique(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getXList = function() 
          
        {
          //print("JS: RVector.getXList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getXList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getXList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getYList = function() 
          
        {
          //print("JS: RVector.getYList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getYList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getYList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getZList = function() 
          
        {
          //print("JS: RVector.getZList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getZList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getZList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getCrossProduct = function() 
          
        {
          //print("JS: RVector.getCrossProduct");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getCrossProduct(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getCrossProduct(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getDotProduct = function() 
          
        {
          //print("JS: RVector.getDotProduct");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getDotProduct(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getDotProduct(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.createPolar = function() 
          
        {
          //print("JS: RVector.createPolar");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.createPolar(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.createPolar(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.lessThanX = function() 
          
        {
          //print("JS: RVector.lessThanX");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.lessThanX(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.lessThanX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.greaterThanX = function() 
          
        {
          //print("JS: RVector.greaterThanX");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.greaterThanX(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.greaterThanX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.lessThanY = function() 
          
        {
          //print("JS: RVector.lessThanY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.lessThanY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.lessThanY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.greaterThanY = function() 
          
        {
          //print("JS: RVector.greaterThanY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.greaterThanY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.greaterThanY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.lessThanEqualXY = function() 
          
        {
          //print("JS: RVector.lessThanEqualXY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.lessThanEqualXY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.lessThanEqualXY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.greaterThanEqualXY = function() 
          
        {
          //print("JS: RVector.greaterThanEqualXY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.greaterThanEqualXY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.greaterThanEqualXY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getSortedByDistance = function() 
          
        {
          //print("JS: RVector.getSortedByDistance");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getSortedByDistance(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getSortedByDistance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getSortedLeftRightTopBottom = function() 
          
        {
          //print("JS: RVector.getSortedLeftRightTopBottom");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getSortedLeftRightTopBottom(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getSortedLeftRightTopBottom(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getSortedByAngle = function() 
          
        {
          //print("JS: RVector.getSortedByAngle");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getSortedByAngle(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getSortedByAngle(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RVector.invalid = 
  RVector_WrapperSingletonInstance.invalid;
RVector.nullVector = 
  RVector_WrapperSingletonInstance.nullVector;
RVector.nanVector = 
  RVector_WrapperSingletonInstance.nanVector;


      // copy function:
      //RVector.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RVector.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RVector.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      