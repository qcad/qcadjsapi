
      // auto generated
      //var self;

      // class constructor:
      function RTraceData() {
        

        // should be RTraceData_BaseJs.call(this, engine):
        //RTraceData.prototype = new RTraceData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTraceData.getIdStatic()))) {

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
            qWarning("RTraceData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RTraceData_Wrapper(
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

      

        //copyProperties(this, wrapper, RTraceData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTraceData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTraceData);
  }

  
  else {
    
        print("RTraceData(): wrong number / type of arguments");
      
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

      //RTraceData.prototype = new RTraceData_BaseJs(engine);
      //RTraceData.prototype = new RTraceData_Wrapper(engine);
      RTraceData.prototype = new Object();

      RTraceData.prototype.toString = function() {
          //return "RTraceData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTraceData [JS]";
        };
      RTraceData.getObjectType = function() {
        return RJSType_RTraceData.getIdStatic();
      };

      RTraceData.prototype.getObjectType = function() {
        return RJSType_RTraceData.getIdStatic();
      };

      RTraceData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTraceData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSolidData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RTraceData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RTraceData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RTraceData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RTraceData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RTraceData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RTraceData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RTraceData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RTraceData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RTraceData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RTraceData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RTraceData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RTraceData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RTraceData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RTraceData.prototype.move = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RTraceData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RTraceData.prototype.scale = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RTraceData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RTraceData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RTraceData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RTraceData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RTraceData.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RTraceData.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RTraceData.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RTraceData.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RTraceData.prototype.reverse = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RTraceData.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RTraceData.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RTraceData.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RTraceData.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RTraceData.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RTraceData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RTraceData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RTraceData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RTraceData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RTraceData.prototype.getGeometry = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getGeometry");
          return this.__PROXY__.getGeometry(...args);
        };
    
        // function 
        RTraceData.prototype.getType = function(...args) 
          
        {
          //print("JS: RTraceData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTraceData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTraceData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTraceData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      