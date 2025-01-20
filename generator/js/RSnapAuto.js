
      // auto generated
      //var self;

      // class constructor:
      function RSnapAuto() {
        

        // should be RSnapAuto_BaseJs.call(this, engine):
        //RSnapAuto.prototype = new RSnapAuto_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapAuto.getIdStatic()))) {

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
            qWarning("RSnapAuto.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapAuto_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto(): wrong number / type of arguments");
      
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

      //RSnapAuto.prototype = new RSnapAuto_BaseJs(engine);
      //RSnapAuto.prototype = new RSnapAuto_Wrapper(engine);
      RSnapAuto.prototype = new Object();

      RSnapAuto.prototype.toString = function() {
          //return "RSnapAuto [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapAuto [JS]";
        };
      RSnapAuto.getObjectType = function() {
        return RJSType_RSnapAuto.getIdStatic();
      };

      RSnapAuto.prototype.getObjectType = function() {
        return RJSType_RSnapAuto.getIdStatic();
      };

      RSnapAuto.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapAuto.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnap.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Status
RSnapAuto.Unknown = RSnapAuto_Wrapper.Unknown;
RSnapAuto.Free = RSnapAuto_Wrapper.Free;
RSnapAuto.Grid = RSnapAuto_Wrapper.Grid;
RSnapAuto.Endpoint = RSnapAuto_Wrapper.Endpoint;
RSnapAuto.OnEntity = RSnapAuto_Wrapper.OnEntity;
RSnapAuto.Center = RSnapAuto_Wrapper.Center;
RSnapAuto.Middle = RSnapAuto_Wrapper.Middle;
RSnapAuto.Distance = RSnapAuto_Wrapper.Distance;
RSnapAuto.Intersection = RSnapAuto_Wrapper.Intersection;
RSnapAuto.IntersectionManual = RSnapAuto_Wrapper.IntersectionManual;
RSnapAuto.Reference = RSnapAuto_Wrapper.Reference;
RSnapAuto.Perpendicular = RSnapAuto_Wrapper.Perpendicular;
RSnapAuto.Tangential = RSnapAuto_Wrapper.Tangential;
RSnapAuto.Coordinate = RSnapAuto_Wrapper.Coordinate;
RSnapAuto.CoordinatePolar = RSnapAuto_Wrapper.CoordinatePolar;

  // enum: Mode
RSnapAuto.None = RSnapAuto_Wrapper.None;
RSnapAuto.Intersections = RSnapAuto_Wrapper.Intersections;
RSnapAuto.EndPoints = RSnapAuto_Wrapper.EndPoints;
RSnapAuto.MiddlePoints = RSnapAuto_Wrapper.MiddlePoints;
RSnapAuto.CenterPoints = RSnapAuto_Wrapper.CenterPoints;
RSnapAuto.PerpendicularPoints = RSnapAuto_Wrapper.PerpendicularPoints;
RSnapAuto.TangentialPoints = RSnapAuto_Wrapper.TangentialPoints;
RSnapAuto.ReferencePoints = RSnapAuto_Wrapper.ReferencePoints;
RSnapAuto.GridPoints = RSnapAuto_Wrapper.GridPoints;
RSnapAuto.PointsOnEntity = RSnapAuto_Wrapper.PointsOnEntity;
RSnapAuto.FreePositioning = RSnapAuto_Wrapper.FreePositioning;


      // functions:
      
      // function 
      RSnapAuto.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnapAuto.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnapAuto.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnapAuto.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapAuto.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapAuto.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapAuto.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapAuto.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapAuto.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapAuto.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapAuto.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapAuto.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    
        // function 
        RSnapAuto.prototype.init = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RSnapAuto.prototype.getModes = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getModes");
          return this.__PROXY__.getModes(...args);
        };
    
        // function 
        RSnapAuto.prototype.setModes = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setModes");
          return this.__PROXY__.setModes(...args);
        };
    
        // function 
        RSnapAuto.prototype.setMode = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setMode");
          return this.__PROXY__.setMode(...args);
        };
    
        // function 
        RSnapAuto.prototype.getMode = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getMode");
          return this.__PROXY__.getMode(...args);
        };
    
        // function 
        RSnapAuto.prototype.setIntersections = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setIntersections");
          return this.__PROXY__.setIntersections(...args);
        };
    
        // function 
        RSnapAuto.prototype.getIntersections = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getIntersections");
          return this.__PROXY__.getIntersections(...args);
        };
    
        // function 
        RSnapAuto.prototype.setEndPoints = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setEndPoints");
          return this.__PROXY__.setEndPoints(...args);
        };
    
        // function 
        RSnapAuto.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RSnapAuto.prototype.setMiddlePoints = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setMiddlePoints");
          return this.__PROXY__.setMiddlePoints(...args);
        };
    
        // function 
        RSnapAuto.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RSnapAuto.prototype.setCenterPoints = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setCenterPoints");
          return this.__PROXY__.setCenterPoints(...args);
        };
    
        // function 
        RSnapAuto.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RSnapAuto.prototype.setPerpendicular = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setPerpendicular");
          return this.__PROXY__.setPerpendicular(...args);
        };
    
        // function 
        RSnapAuto.prototype.getPerpendicular = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getPerpendicular");
          return this.__PROXY__.getPerpendicular(...args);
        };
    
        // function 
        RSnapAuto.prototype.setTangential = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setTangential");
          return this.__PROXY__.setTangential(...args);
        };
    
        // function 
        RSnapAuto.prototype.getTangential = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getTangential");
          return this.__PROXY__.getTangential(...args);
        };
    
        // function 
        RSnapAuto.prototype.setReferencePoints = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setReferencePoints");
          return this.__PROXY__.setReferencePoints(...args);
        };
    
        // function 
        RSnapAuto.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RSnapAuto.prototype.setGridPoints = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setGridPoints");
          return this.__PROXY__.setGridPoints(...args);
        };
    
        // function 
        RSnapAuto.prototype.getGridPoints = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getGridPoints");
          return this.__PROXY__.getGridPoints(...args);
        };
    
        // function 
        RSnapAuto.prototype.setPointsOnEntity = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setPointsOnEntity");
          return this.__PROXY__.setPointsOnEntity(...args);
        };
    
        // function 
        RSnapAuto.prototype.getPointsOnEntity = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getPointsOnEntity");
          return this.__PROXY__.getPointsOnEntity(...args);
        };
    
        // function 
        RSnapAuto.prototype.setFreePositioning = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.setFreePositioning");
          return this.__PROXY__.setFreePositioning(...args);
        };
    
        // function 
        RSnapAuto.prototype.getFreePositioning = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.getFreePositioning");
          return this.__PROXY__.getFreePositioning(...args);
        };
    
        // function 
        RSnapAuto.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapAuto.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    

      // static functions:
      

        // static function 
        RSnapAuto.init = function() 
          
        {
          //print("JS: RSnapAuto.init");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.init(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getModes = function() 
          
        {
          //print("JS: RSnapAuto.getModes");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getModes(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getModes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setModes = function() 
          
        {
          //print("JS: RSnapAuto.setModes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setModes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setModes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setMode = function() 
          
        {
          //print("JS: RSnapAuto.setMode");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setMode(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setMode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getMode = function() 
          
        {
          //print("JS: RSnapAuto.getMode");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getMode(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getMode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setIntersections = function() 
          
        {
          //print("JS: RSnapAuto.setIntersections");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setIntersections(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setIntersections(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getIntersections = function() 
          
        {
          //print("JS: RSnapAuto.getIntersections");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getIntersections(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getIntersections(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setEndPoints = function() 
          
        {
          //print("JS: RSnapAuto.setEndPoints");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setEndPoints(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setEndPoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getEndPoints = function() 
          
        {
          //print("JS: RSnapAuto.getEndPoints");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getEndPoints(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getEndPoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setMiddlePoints = function() 
          
        {
          //print("JS: RSnapAuto.setMiddlePoints");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setMiddlePoints(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setMiddlePoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getMiddlePoints = function() 
          
        {
          //print("JS: RSnapAuto.getMiddlePoints");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getMiddlePoints(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getMiddlePoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setCenterPoints = function() 
          
        {
          //print("JS: RSnapAuto.setCenterPoints");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setCenterPoints(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setCenterPoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getCenterPoints = function() 
          
        {
          //print("JS: RSnapAuto.getCenterPoints");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getCenterPoints(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getCenterPoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setPerpendicular = function() 
          
        {
          //print("JS: RSnapAuto.setPerpendicular");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setPerpendicular(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setPerpendicular(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getPerpendicular = function() 
          
        {
          //print("JS: RSnapAuto.getPerpendicular");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getPerpendicular(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getPerpendicular(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setTangential = function() 
          
        {
          //print("JS: RSnapAuto.setTangential");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setTangential(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setTangential(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getTangential = function() 
          
        {
          //print("JS: RSnapAuto.getTangential");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getTangential(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getTangential(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setReferencePoints = function() 
          
        {
          //print("JS: RSnapAuto.setReferencePoints");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setReferencePoints(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setReferencePoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getReferencePoints = function() 
          
        {
          //print("JS: RSnapAuto.getReferencePoints");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getReferencePoints(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getReferencePoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setGridPoints = function() 
          
        {
          //print("JS: RSnapAuto.setGridPoints");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setGridPoints(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setGridPoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getGridPoints = function() 
          
        {
          //print("JS: RSnapAuto.getGridPoints");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getGridPoints(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getGridPoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setPointsOnEntity = function() 
          
        {
          //print("JS: RSnapAuto.setPointsOnEntity");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setPointsOnEntity(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setPointsOnEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getPointsOnEntity = function() 
          
        {
          //print("JS: RSnapAuto.getPointsOnEntity");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getPointsOnEntity(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getPointsOnEntity(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.setFreePositioning = function() 
          
        {
          //print("JS: RSnapAuto.setFreePositioning");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.setFreePositioning(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.setFreePositioning(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSnapAuto.getFreePositioning = function() 
          
        {
          //print("JS: RSnapAuto.getFreePositioning");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSnapAuto_WrapperSingletonInstance.getFreePositioning(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.getFreePositioning(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapAuto.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapAuto.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnapAuto.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      