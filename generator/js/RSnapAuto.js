
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
              
                  copyProperties(this, wrapper, RSnapAuto);
                
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
          
            copyProperties(this, wrapper, RSnapAuto);
          

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
                
                    return this.showUiOptionsSuper(
                  
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
                
                    return this.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapAuto);
  }

  
  else {
    
        print("RSnapAuto.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
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

      