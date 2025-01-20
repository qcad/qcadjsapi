
      // auto generated
      //var self;

      // class constructor:
      function RBox() {
        

        // should be RBox_BaseJs.call(this, engine):
        //RBox.prototype = new RBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RBox.getIdStatic()))) {

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
            qWarning("RBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RBox_Wrapper(
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

      

        //copyProperties(this, wrapper, RBox);
  }

  
  else 
  
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBox);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RBox_Wrapper(
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

      

        //copyProperties(this, wrapper, RBox);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RBox_Wrapper(
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

      

        //copyProperties(this, wrapper, RBox);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RBox_Wrapper(
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

      

        //copyProperties(this, wrapper, RBox);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RBox_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBox);
  }

  
  else {
    
        print("RBox(): wrong number / type of arguments");
      
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
              Object.defineProperty(this, 'c1', {
                  get() {
                      return this.__PROXY__.getCorner1();
                  },
                  
                    set(value) {
                        this.__PROXY__.setCorner1(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'c2', {
                  get() {
                      return this.__PROXY__.getCorner2();
                  },
                  
                    set(value) {
                        this.__PROXY__.setCorner2(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RBox.prototype = new RBox_BaseJs(engine);
      //RBox.prototype = new RBox_Wrapper(engine);
      RBox.prototype = new Object();

      RBox.prototype.toString = function() {
          //return "RBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RBox [JS]";
        };
      RBox.getObjectType = function() {
        return RJSType_RBox.getIdStatic();
      };

      RBox.prototype.getObjectType = function() {
        return RJSType_RBox.getIdStatic();
      };

      RBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RBox.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RBox.prototype.isValid = function(...args) 
          
        {
          //print("JS: RBox.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RBox.prototype.isSane = function(...args) 
          
        {
          //print("JS: RBox.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RBox.prototype.equalsFuzzy = function(...args) 
          
        {
          //print("JS: RBox.prototype.equalsFuzzy");
          return this.__PROXY__.equalsFuzzy(...args);
        };
    
        // function 
        RBox.prototype.equalsFuzzy2D = function(...args) 
          
        {
          //print("JS: RBox.prototype.equalsFuzzy2D");
          return this.__PROXY__.equalsFuzzy2D(...args);
        };
    
        // function 
        RBox.prototype.get2D = function(...args) 
          
        {
          //print("JS: RBox.prototype.get2D");
          return this.__PROXY__.get2D(...args);
        };
    
        // function 
        RBox.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RBox.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RBox.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RBox.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RBox.prototype.getSize = function(...args) 
          
        {
          //print("JS: RBox.prototype.getSize");
          return this.__PROXY__.getSize(...args);
        };
    
        // function 
        RBox.prototype.getArea = function(...args) 
          
        {
          //print("JS: RBox.prototype.getArea");
          return this.__PROXY__.getArea(...args);
        };
    
        // function 
        RBox.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RBox.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RBox.prototype.getMinimum = function(...args) 
          
        {
          //print("JS: RBox.prototype.getMinimum");
          return this.__PROXY__.getMinimum(...args);
        };
    
        // function 
        RBox.prototype.getMaximum = function(...args) 
          
        {
          //print("JS: RBox.prototype.getMaximum");
          return this.__PROXY__.getMaximum(...args);
        };
    
        // function 
        RBox.prototype.isOutside = function(...args) 
          
        {
          //print("JS: RBox.prototype.isOutside");
          return this.__PROXY__.isOutside(...args);
        };
    
        // function 
        RBox.prototype.isOutsideXY = function(...args) 
          
        {
          //print("JS: RBox.prototype.isOutsideXY");
          return this.__PROXY__.isOutsideXY(...args);
        };
    
        // function 
        RBox.prototype.contains = function(...args) 
          
        {
          //print("JS: RBox.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        RBox.prototype.containsBox = function(...args) 
          
        {
          //print("JS: RBox.prototype.containsBox");
          return this.__PROXY__.containsBox(...args);
        };
    
        // function 
        RBox.prototype.containsPoint = function(...args) 
          
        {
          //print("JS: RBox.prototype.containsPoint");
          return this.__PROXY__.containsPoint(...args);
        };
    
        // function 
        RBox.prototype.intersects = function(...args) 
          
        {
          //print("JS: RBox.prototype.intersects");
          return this.__PROXY__.intersects(...args);
        };
    
        // function 
        RBox.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RBox.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RBox.prototype.growToInclude = function(...args) 
          
        {
          //print("JS: RBox.prototype.growToInclude");
          return this.__PROXY__.growToInclude(...args);
        };
    
        // function 
        RBox.prototype.growToIncludeBoxes = function(...args) 
          
        {
          //print("JS: RBox.prototype.growToIncludeBoxes");
          return this.__PROXY__.growToIncludeBoxes(...args);
        };
    
        // function 
        RBox.prototype.growToIncludeBox = function(...args) 
          
        {
          //print("JS: RBox.prototype.growToIncludeBox");
          return this.__PROXY__.growToIncludeBox(...args);
        };
    
        // function 
        RBox.prototype.growToIncludePoint = function(...args) 
          
        {
          //print("JS: RBox.prototype.growToIncludePoint");
          return this.__PROXY__.growToIncludePoint(...args);
        };
    
        // function 
        RBox.prototype.getCorner1 = function(...args) 
          
        {
          //print("JS: RBox.prototype.getCorner1");
          return this.__PROXY__.getCorner1(...args);
        };
    
        // function 
        RBox.prototype.setCorner1 = function(...args) 
          
        {
          //print("JS: RBox.prototype.setCorner1");
          return this.__PROXY__.setCorner1(...args);
        };
    
        // function 
        RBox.prototype.getCorner2 = function(...args) 
          
        {
          //print("JS: RBox.prototype.getCorner2");
          return this.__PROXY__.getCorner2(...args);
        };
    
        // function 
        RBox.prototype.setCorner2 = function(...args) 
          
        {
          //print("JS: RBox.prototype.setCorner2");
          return this.__PROXY__.setCorner2(...args);
        };
    
        // function 
        RBox.prototype.getCorners = function(...args) 
          
        {
          //print("JS: RBox.prototype.getCorners");
          return this.__PROXY__.getCorners(...args);
        };
    
        // function 
        RBox.prototype.getCorners2d = function(...args) 
          
        {
          //print("JS: RBox.prototype.getCorners2d");
          return this.__PROXY__.getCorners2d(...args);
        };
    
        // function 
        RBox.prototype.getLines2d = function(...args) 
          
        {
          //print("JS: RBox.prototype.getLines2d");
          return this.__PROXY__.getLines2d(...args);
        };
    
        // function 
        RBox.prototype.getPolyline2d = function(...args) 
          
        {
          //print("JS: RBox.prototype.getPolyline2d");
          return this.__PROXY__.getPolyline2d(...args);
        };
    
        // function 
        RBox.prototype.getTriangles = function(...args) 
          
        {
          //print("JS: RBox.prototype.getTriangles");
          return this.__PROXY__.getTriangles(...args);
        };
    
        // function 
        RBox.prototype.grow = function(...args) 
          
        {
          //print("JS: RBox.prototype.grow");
          return this.__PROXY__.grow(...args);
        };
    
        // function 
        RBox.prototype.growXY = function(...args) 
          
        {
          //print("JS: RBox.prototype.growXY");
          return this.__PROXY__.growXY(...args);
        };
    
        // function 
        RBox.prototype.move = function(...args) 
          
        {
          //print("JS: RBox.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RBox.prototype.scaleByReference = function(...args) 
          
        {
          //print("JS: RBox.prototype.scaleByReference");
          return this.__PROXY__.scaleByReference(...args);
        };
    
        // function 
        RBox.prototype.toQRectF = function(...args) 
          
        {
          //print("JS: RBox.prototype.toQRectF");
          return this.__PROXY__.toQRectF(...args);
        };
    
        // function 
        RBox.prototype.transform = function(...args) 
          
        {
          //print("JS: RBox.prototype.transform");
          return this.__PROXY__.transform(...args);
        };
    
        // function 
        RBox.prototype.copy = function(...args) 
          
        {
          //print("JS: RBox.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      