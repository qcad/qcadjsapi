
      // auto generated
      //var self;

      // class constructor:
      function RFaceData() {
        

        // should be RFaceData_BaseJs.call(this, engine):
        //RFaceData.prototype = new RFaceData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFaceData.getIdStatic()))) {

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
            qWarning("RFaceData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RFaceData_Wrapper(
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

      

        //copyProperties(this, wrapper, RFaceData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFaceData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFaceData);
  }

  
  else {
    
        print("RFaceData(): wrong number / type of arguments");
      
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

      //RFaceData.prototype = new RFaceData_BaseJs(engine);
      //RFaceData.prototype = new RFaceData_Wrapper(engine);
      RFaceData.prototype = new Object();

      RFaceData.prototype.toString = function() {
          //return "RFaceData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFaceData [JS]";
        };
      RFaceData.getObjectType = function() {
        return RJSType_RFaceData.getIdStatic();
      };

      RFaceData.prototype.getObjectType = function() {
        return RJSType_RFaceData.getIdStatic();
      };

      RFaceData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFaceData.getIdStatic()) {
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
        RFaceData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RFaceData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RFaceData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RFaceData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RFaceData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RFaceData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RFaceData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RFaceData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RFaceData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RFaceData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RFaceData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RFaceData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RFaceData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RFaceData.prototype.move = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RFaceData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RFaceData.prototype.scale = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RFaceData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RFaceData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RFaceData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RFaceData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RFaceData.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RFaceData.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RFaceData.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RFaceData.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RFaceData.prototype.reverse = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RFaceData.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RFaceData.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RFaceData.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RFaceData.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RFaceData.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RFaceData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RFaceData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RFaceData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RFaceData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RFaceData.prototype.getGeometry = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getGeometry");
          return this.__PROXY__.getGeometry(...args);
        };
    
        // function 
        RFaceData.prototype.getType = function(...args) 
          
        {
          //print("JS: RFaceData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFaceData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFaceData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RFaceData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      